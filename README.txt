MEEZAB E RAHEMAT APP - UPLOAD PACKAGE (version 32, 3 November 2026)
Version 30 is live on GitHub. This package has only the changed files.

WHAT TO UPLOAD
17 files: index.html, sw.js, README.txt and 14 NEW pictures (trust-....webp - the 7 certificates and their 7 small previews).
Put them in the main folder of your GitHub repository (not inside a sub-folder). They replace the old index.html, sw.js and README.txt.

HOW TO UPLOAD FROM A PHONE
1. Extract the zip in your phone's Files app (tap the zip, then Extract).
2. In Chrome, open github.com/ayyubisulait220762-spec/Meezab-haj-umrah-app
3. Tap Add file > Upload files (tick "Desktop site" in Chrome's menu if you don't see it).
4. Select all the extracted files and tap Commit changes.
5. Wait about 2 minutes, then open the app link. If the old design still shows, close the app fully and open it again.

WHAT IS NEW IN VERSION 32 (since version 30)
- v32 New tab "License & Achievements" (before Contact): Verified seal, Haj 2027 quota 74 pilgrims, HGO ID MH01759627,
  Category I, Registration No., IATA code 14330982, Munazim No. 1089, Federation membership 20190019;
  "Verify it yourself" buttons (official Ministry list PDF page 21 S.No. 627, IATA code check);
  7 certificates and mementos (Govt of India, Saudi Arabia, IATA, Federation) - tap to open full screen, swipe, zoom.
  The 3 gold badges on Home also open this page.
- v31 Home: the Hajj 2027 packages now come right after the Arafah countdown (prayer times, Share, Qibla and Invite below).

EARLIER - VERSION 30
- v30 WhatsApp / Facebook link preview: gold "Meezab E Rahemat - Hajj 2027 Packages" card with the Kaaba photo.
- v30 Faster first open on slow mobile data: home photo ready in about 3.6 s instead of 8.5 s (slow 4G test);
  pictures lower on the page wait until the home photo is in; the offline copy downloads after the app has opened.
- v30 Works the same in Chrome, Safari (iPhone), Samsung Internet, Firefox and Edge; "Install the app" help fits each browser
  and tells people inside Instagram / Facebook to tap "Open in browser" first.
- v29 Long Stay + Signature, "Makkah shifting accommodation": new animation - Hilton Convention next to the Haram,
  "Before Hajj", pilgrims and luggage on the bus to the shifting hotel in Aziziya, farther from the Haram.
- v28 Excludes animation: fixed the glitch where the previous picture flashed back for a moment when the next item came.

EARLIER IN VERSION 25-27
- v25 Feedback > "Videos from our journeys": every Instagram video card now shows a real picture from the video (21 thumbnails: Hotel 6, Food 4, Ziyarat 3, Hajj 5 days 3, Orientation 3, Hujjaj reviews 4-5).
- v26 Package Excludes animation: the original animation is back (red line + red X on each item, NOT INCLUDED stamp at the end), slower for longer text (3-7 seconds per item), the changing note is now inside the picture box, pause and arrow buttons and the full list at the end kept.
- v27 Home: "Invite your family" card – the pilgrim types their name once and shares a personal link on WhatsApp; enquiries through it show "via invite: <name>" in the Google Sheet. "Install the app" button (Android install prompt, iPhone help). Package links: add ?p=long, ?p=signature or ?p=short to the app link to open that package directly.

WHAT IS NEW SINCE VERSION 11 (the live version)
- v12 Home: "Questions pilgrims ask" – all 8 FAQs as sideways-swipe cards (replaces the Ziyarat photo banner).
- v13 Signature package: animated itinerary with "Play the journey"; length 38-40 days; "Dates are approximate (± 2 days)".
- v14 Short package: animated itinerary with "Play the journey" (Makkah shifting hotel > Hajj > shifting hotel > Madinah, Swiss International).
- v15 Contact: Facebook button next to Instagram ("Open map" now full width).
- v16 Home: countdown to the Day of Arafah 2027; prayer times for Makkah, Madinah and the pilgrim's own city (choose a city or use location);
  "Share your Hajj 2027 card" (name + city card to share on WhatsApp/Instagram); Qibla compass.
- v17 Feedback: "Videos from our journeys" – Instagram reels in 6 tabs (Hujjaj reviews, Food, Hotel, Ziyarat, Hajj 5 days, Orientation & welcome), gold clip-art covers; tap opens the reel in Instagram.
- v18 Feedback: "Rate us on Google" card (opens Google Maps to write a review).
- v19 Long Stay offer: old price ₹8,00,000 big and clear with a red strike line, "Save ₹1,30,000" badge, strike + pop animation with sound.
- v20 Signature package: opening animation – black-and-gold envelope, gold wax seal with the Meezab logo, flap opens and the Signature card slides out.
- v21 Sounds (Agent A): richer natural sounds that vary each time – wooden clicks, swishes, paper flick, bells, jet pass-by, bus engine, water drops; itinerary stops: Madinah doves, Makkah crowd murmur, Hajj desert wind. No music.
- v22 Privacy policy page (privacy.html) + a link to it in the app (Home and Contact).
- v23 Excludes ("Not included") player: readable timing, controls (previous / pause-play / next, counter), full list at the end.
- v24 Google Sheet connected: registrations and feedback are saved in the Sheet; enquiry emails go to Basil and Sulait via the Sheet script.
  Spam protection (hidden trap field + form time check). New "Rate us on Google" link (opens the write-a-review box directly).
- Everything in English, Urdu, Hindi and Gujarati.

EARLIER VERSIONS (already live)
- v11 Long Stay animated itinerary, 41-44 days. v10 hotel photo galleries and slideshows. v8-v9 FAQ, Taif, Mashaer and orientation tiles, Hajj kit, louder sounds.

WHERE THINGS ARE INSIDE index.html
- Prices, offer price, photos and routes of each package: "const PKM="   Save amount: "SAVE_AMT="
- Package text in each language: "const PKT="
- Hotel photos: "const HILTON_MK=", "const CROWNE_MD=", "const SWISS_MD=", "const MANAZIL_MD=", per package "const HOTELS="
- Animated itineraries: "const LSI=" (Long Stay, with "sg:" Signature and "sh:" Short parts); which packages use it: "const LSI_ON="
- Home FAQ cards: "const HFQ="   Countdown/prayer times/share card/Qibla texts: "const MZ="   Indian city list: "const MZCITIES="
- Instagram reels per category: "IGV="   Rate us on Google link: "GLINK="
- Exclusions: "const EXC="   Hajj news: "const NEWS="   FAQ: "const FAQ="   Other app text: "const T="
- WhatsApp number: OFFICE_WA='917038422399'
- Google Sheet link for leads and feedback: LEAD_URL= (connected in v24)

SOUNDS
The Talbiyah plays when the visitor taps "Tap to enter". Visitors can mute everything with the speaker button at the top of the home screen.
