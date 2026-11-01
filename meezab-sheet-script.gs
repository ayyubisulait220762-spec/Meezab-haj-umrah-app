// MEEZAB E RAHEMAT - leads, feedback and news in one Google Sheet.
// How to set it up: see LEADS-SETUP.md (5 minutes, from a phone or computer).
//
// Tabs it creates:
//   "Leads"    - every registration from the app (one row per person). Change "Status" as you follow up.
//   "Feedback" - star ratings and comments from pilgrims.
//   "News"     - optional: add a row (Date, Title, Text, Show = yes) and it appears on top of the app's news page.
//
// Safety: the app only knows this web-app link. No passwords or keys are in the app.
// Every message is checked here (valid Indian mobile, length limits, no spreadsheet formulas),
// and repeated sends of the same request (the app retries when the internet is weak) are ignored.

var LEAD_HEAD = ['Time', 'Name', 'Mobile', 'WhatsApp', 'City', 'Package interest', 'Travellers', 'Best time to call',
                 'Language', 'Source', 'Status', 'Notes', 'Lead ID'];
var FB_HEAD   = ['Time', 'Stars', 'Feedback', 'Language', 'Source', 'Status', 'Lead ID'];
var NEWS_HEAD = ['Date', 'Title', 'Text', 'Show (yes/no)'];
var LANGS = { en: 'English', ur: 'Urdu', hi: 'Hindi', gu: 'Gujarati' };
var INTERESTS = ['Hajj 2027 Long Stay Package', 'Hajj 2027 Signature Package', 'Hajj 2027 Short Package', 'Umrah', 'Not sure yet'];
var CALL_TIMES = ['Any time', 'Morning', 'Afternoon', 'Evening'];

// Run this once from the editor (select "setup" and press Run). It is also run automatically.
function setup() {
  var ss = SpreadsheetApp.getActive();
  sheet_(ss, 'Leads', LEAD_HEAD);
  sheet_(ss, 'Feedback', FB_HEAD);
  sheet_(ss, 'News', NEWS_HEAD);
}

function sheet_(ss, name, head) {
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.appendRow(head);
    sh.getRange(1, 1, 1, head.length).setFontWeight('bold').setBackground('#F8E4A6');
    sh.setFrozenRows(1);
    if (name === 'Leads') sh.getRange('C:C').setNumberFormat('@'); // keep mobile numbers as text
  }
  return sh;
}

// Clean text from the app: trim, remove control characters, cut to max length,
// and stop anything that looks like a spreadsheet formula (=, +, -, @ at the start).
function clean_(v, max) {
  v = String(v === null || v === undefined ? '' : v).replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
  if (/^[=+\-@]/.test(v)) v = "'" + v;
  return v.slice(0, max || 100);
}

function out_(msg) {
  return ContentService.createTextOutput(msg).setMimeType(ContentService.MimeType.TEXT);
}

// Was this Lead ID already saved? (looks at the last 500 rows)
function seen_(sh, idCol, id) {
  var last = sh.getLastRow();
  if (!id || last < 2) return false;
  var from = Math.max(2, last - 499);
  var ids = sh.getRange(from, idCol, last - from + 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) if (String(ids[i][0]) === id) return true;
  return false;
}

// The app sends a plain-text POST with JSON inside (works without CORS).
function doPost(e) {
  var d;
  try { d = JSON.parse(e && e.postData && e.postData.contents || ''); } catch (x) { return out_('bad request'); }
  if (!d || typeof d !== 'object') return out_('bad request');
  if (d.website) return out_('ok'); // hidden trap field for robots: pretend ok, save nothing

  var lock = LockService.getScriptLock();
  try { lock.waitLock(15000); } catch (x) { return out_('busy'); }
  try {
    var ss = SpreadsheetApp.getActive();
    setup();
    var id = clean_(d.id, 40).replace(/[^A-Za-z0-9]/g, '');
    var lang = LANGS[d.lang] || 'English';
    var source = clean_(d.source, 80);

    if (d.type === 'Feedback') {
      var fb = ss.getSheetByName('Feedback');
      if (seen_(fb, FB_HEAD.length, id)) return out_('ok (already saved)');
      var stars = Math.max(0, Math.min(5, parseInt(d.rating, 10) || 0));
      var note = clean_(d.notes, 2000);
      if (!stars && !note) return out_('empty feedback');
      fb.appendRow([new Date(), stars || '', note, lang, source, 'New', id]);
      return out_('ok');
    }

    // Registration
    var mobile = String(d.mobile || '').replace(/\D/g, '');
    if (mobile.length === 12 && mobile.indexOf('91') === 0) mobile = mobile.slice(2);
    if (!/^[6-9]\d{9}$/.test(mobile)) return out_('bad mobile');
    var name = clean_(d.name, 80);
    if (name.replace(/[\d\s.]/g, '').length < 2) return out_('bad name');
    var interest = INTERESTS.indexOf(d.interest) >= 0 ? d.interest : clean_(d.interest, 60);
    var callTime = CALL_TIMES.indexOf(d.callTime) >= 0 ? d.callTime : '';
    var travellers = Math.max(1, Math.min(20, parseInt(d.travelers, 10) || 1));

    var sh = ss.getSheetByName('Leads');
    if (seen_(sh, LEAD_HEAD.length, id)) return out_('ok (already saved)');
    sh.appendRow([new Date(), name, mobile, '', clean_(d.city, 60), interest, travellers, callTime,
                  lang, source, 'New', '', id]);
    // one-tap WhatsApp link to the pilgrim (built only from the checked 10-digit number)
    sh.getRange(sh.getLastRow(), 4).setFormula('=HYPERLINK("https://wa.me/91' + mobile + '","Chat")');
    return out_('ok');
  } catch (err) {
    return out_('error');
  } finally {
    lock.releaseLock();
  }
}

// Opening the web-app link in a browser shows "Meezab leads link is working".
// The app calls ...?action=news to get extra news rows from the "News" tab.
function doGet(e) {
  if (!e || !e.parameter || e.parameter.action !== 'news') return out_('Meezab leads link is working');
  var sh = SpreadsheetApp.getActive().getSheetByName('News');
  var list = [];
  if (sh && sh.getLastRow() > 1) {
    list = sh.getRange(2, 1, sh.getLastRow() - 1, 4).getValues()
      .filter(function (r) { return r[0] && r[1] && String(r[3]).toLowerCase().trim() !== 'no'; })
      .map(function (r) {
        var dt = r[0] instanceof Date ? r[0] : new Date(r[0]);
        return {
          date: isNaN(dt) ? String(r[0]) : Utilities.formatDate(dt, Session.getScriptTimeZone(), 'd MMM yyyy').toUpperCase(),
          title: String(r[1]).slice(0, 160),
          text: String(r[2]).slice(0, 600)
        };
      })
      .reverse().slice(0, 10);
  }
  return ContentService.createTextOutput(JSON.stringify(list)).setMimeType(ContentService.MimeType.JSON);
}

// Optional: run this from the editor to add one test row to "Leads" (then delete the row).
function testLead() {
  var r = doPost({ postData: { contents: JSON.stringify({
    type: 'Registration', name: 'Test Pilgrim', mobile: '9876543210', city: 'Malegaon',
    interest: 'Hajj 2027 Long Stay Package', travelers: 2, callTime: 'Evening', lang: 'en',
    source: 'Test from editor', id: 'test' + Date.now() }) } });
  Logger.log(r.getContent());
}
