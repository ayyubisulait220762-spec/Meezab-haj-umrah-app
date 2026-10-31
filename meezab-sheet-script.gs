// MEEZAB E RAHEMAT - lead list and news, run from one Google Sheet.
// Sheet "Leads": every registration and feedback from the app arrives here.
// Sheet "News": add a row (Date, Title, Text, Show = yes) and it appears in the app.

function setup() {
  const s = SpreadsheetApp.getActive();
  let l = s.getSheetByName('Leads') || s.insertSheet('Leads');
  if (l.getLastRow() == 0) l.appendRow(['Time', 'Type', 'Name', 'Mobile', 'City', 'Interest', 'Travelers', 'Status', 'Notes']);
  let n = s.getSheetByName('News') || s.insertSheet('News');
  if (n.getLastRow() == 0) n.appendRow(['Date', 'Title', 'Text', 'Show (yes/no)']);
}

function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (x) {}
  setup();
  SpreadsheetApp.getActive().getSheetByName('Leads').appendRow([
    new Date(), d.type || 'Registration', d.name || '', d.mobile || '', d.city || '',
    d.interest || '', d.travelers || '', 'New', d.notes || ''
  ]);
  return ContentService.createTextOutput('ok');
}

function doGet() {
  const sh = SpreadsheetApp.getActive().getSheetByName('News');
  let out = [];
  if (sh && sh.getLastRow() > 1) {
    out = sh.getRange(2, 1, sh.getLastRow() - 1, 4).getValues()
      .filter(r => r[0] && String(r[3]).toLowerCase() !== 'no')
      .map(r => ({
        date: Utilities.formatDate(new Date(r[0]), Session.getScriptTimeZone(), 'd MMM yyyy'),
        title: r[1], text: r[2]
      }))
      .reverse().slice(0, 10);
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
