MEEZAB E RAHEMAT APP - UPLOAD PACKAGE (version 6, 1 November 2026)

WHAT TO UPLOAD
Upload every file in this zip to the main folder of your GitHub repository (not inside a sub-folder).
Files that are no longer used can be deleted from GitHub: logo.png, logo-original.png (if you uploaded them earlier).

HOW TO UPLOAD FROM A PHONE
1. Extract this zip in your phone's Files app (tap the zip, then Extract).
2. In Chrome, open github.com/ayyubisulait220762-spec/Meezab-haj-umrah-app
3. Tap Add file > Upload files (tick "Desktop site" in Chrome's menu if you don't see it).
4. Select all the extracted files and tap Commit changes.
5. Wait about 2 minutes, then open the app link. If the old design still shows, close the app fully and open it again.

WHERE THINGS ARE INSIDE index.html
- Prices, offer price, photos and routes of each package: "const PKM="
- Package text in each language (titles, journey, inclusions): "const PKT="
- Exclusions for each package: "const EXC=" (empty until the list is added)
- Long Stay offer end: OFFER_END (31 Dec 2026, 11:59 pm). After that the offer badge and countdown hide by themselves, but the price stays until it is changed.
- All other app text in 4 languages: "const T="
- WhatsApp number for registrations and feedback: OFFICE_WA='917038422399'
- Google Sheet link for leads and news: LEAD_URL='' (paste the Apps Script web app link here; see meezab-sheet-script.gs)
- Opening sound: TALBIYAH='talbiyah.mp3'

WHAT IS NEW IN VERSION 6
Every tile in the Includes tab now plays its own animation when tapped (buffet, meals, A/C bus, local transport, shifting stay, Madinah nights, Ziyarat, Taif with Umrah, bags, laundry, Zamzam, Hajj kit, team, guidance, GST and taxes). Each has captions in English, Urdu, Hindi and Gujarati, soft sounds, a Replay button and the green INCLUDED stamp. The Return air ticket keeps its flight animation.
Animation captions are in index.html under "const ZC=" and the small labels inside the scenes under "const ZL=".

SOUNDS
The Talbiyah plays when the visitor taps "Tap to enter" on the opening screen. All other sounds are soft and only on key moments.
Visitors can mute everything with the speaker button at the top of the home screen.

ADDING A NEW REVIEW VIDEO
Send the video to Claude. It will be compressed and added as review-<name>.mp4 with a poster image.
