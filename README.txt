MEEZAB E RAHEMAT APP - UPLOAD PACKAGE (version 7, 1 November 2026)

WHAT TO UPLOAD
Upload every file in this zip to the main folder of your GitHub repository (not inside a sub-folder).
Then DELETE these old files from GitHub (they are no longer used): team.webp, logo.png, logo-original.png (if still there).

HOW TO UPLOAD FROM A PHONE
1. Extract this zip in your phone's Files app (tap the zip, then Extract).
2. In Chrome, open github.com/ayyubisulait220762-spec/Meezab-haj-umrah-app
3. Tap Add file > Upload files (tick "Desktop site" in Chrome's menu if you don't see it).
4. Select all the extracted files and tap Commit changes.
5. Wait about 2 minutes, then open the app link. If the old design still shows, close the app fully and open it again.

WHAT IS NEW IN VERSION 7
- Leads: every registration is saved on the visitor's phone, sent to your Google Sheet (once LEAD_URL is set) and to WhatsApp. If the internet is off, it is sent automatically later. Mobile number check, "best time to call", package pre-selected from the package page.
- Gold "Registered" seal with a soft chime after a registration (WhatsApp opens first).
- New team portrait cards (Ismail Ayyubi, Sulait Ayyubi, Basil Ayyubi).
- Long Stay package now has 14 Include tiles (Signature's 5 tiles added, with Long Stay animations).
- New "Accommodation" tile in all 3 packages: opens a hotel photo gallery with Makkah and Madinah tabs (shows "Hotel photos coming soon" until photos are added).
- Signature and Short: "Zone 5 - Category C".
- Gold offer label and price card (no more red/green). Offer countdown glows on the last day and last hour.
- Fonts are inside the app now, so the design looks right even without internet.
- Review videos are lighter (about 2.7 MB each instead of 6 MB) with clean cover pictures.
- 6 Hajj 2027 news items and 8 FAQs, in English, Urdu, Hindi and Gujarati.
- Sound effects balanced; vibration on Android (switches off with the mute button).

WHERE THINGS ARE INSIDE index.html
- Prices, offer price, photos and routes of each package: "const PKM="
- Package text in each language (titles, journey, inclusions): "const PKT="
- Hotel photos for the Accommodation tile: "const HOTELS=" (one list per package, for makkah and madinah).
  Each photo: ['photo-file.jpg',{en:'Hotel name',ur:'',hi:'',gu:''}]. Send photos to Agent R and they will be added for you.
- Exclusions for each package: "const EXC=" (empty until the list is added)
- Hajj news: "const NEWS=" (newest first)
- FAQ: "const FAQ="
- Long Stay offer end: OFFER_END (31 Dec 2026, 11:59 pm). After that the offer badge and countdown hide by themselves, but the price stays until it is changed.
- All other app text in 4 languages: "const T="
- WhatsApp number for registrations and feedback: OFFICE_WA='917038422399'
- Google Sheet link for leads: LEAD_URL='' (empty for now; follow LEADS-SETUP.txt, then send the link to Agent R)
- Opening sound: TALBIYAH='talbiyah.mp3'

GOOGLE SHEET FOR LEADS
See LEADS-SETUP.txt (about 5 minutes). The script to paste is meezab-sheet-script.gs.

SOUNDS
The Talbiyah plays when the visitor taps "Tap to enter" on the opening screen. All other sounds are soft and only on key moments.
Visitors can mute everything (sounds and vibration) with the speaker button at the top of the home screen.

ADDING A NEW REVIEW VIDEO OR HOTEL PHOTOS
Send them to Agent R. They will be compressed and added for you.
