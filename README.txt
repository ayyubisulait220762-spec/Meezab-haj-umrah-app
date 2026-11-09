MEEZAB E RAHEMAT APP - VERSION 36 (9 November 2026)
Uploaded to GitHub directly by Claude (Agent R). This zip is for your reference only - no need to upload it.

FILES IN THIS VERSION
index.html, sw.js (cache meezab-v38), README.txt,
font-noto-nastaliq-urdu-500.woff2 and font-noto-nastaliq-urdu-700.woff2 (new Urdu fonts).
After about 2 minutes, open the app. If the old design still shows, close the app fully and open it again.

WHAT IS NEW IN VERSION 35-36
- v35 Urdu letters fixed: on Android phones, bold Urdu lost the top line of the letter kaf
  (Package read wrong, Makkah read wrong, "Dekhein" read wrong). New fixed-weight Urdu fonts draw the letter in one piece.
- v35 Bottom tab "Feedback" is now "Videos & Feedback" (Urdu, Hindi, Gujarati too); the page heading matches.
- v35 Two-line tab names in Urdu no longer overlap.
- v36 Opening screen: big gold "Install the app" button and an outlined "Tap to enter" button.
  Android: opens the install pop-up, then enters the app. iPhone: shows the Add to Home Screen steps.
  Instagram/Facebook: shows "Open in browser" help. Already installed: only "Tap to enter" shows.
  While the Install button shows, the opening screen waits for a tap (no automatic close).
  The Home "Install the app" card stays as a second chance.

EARLIER - VERSION 33-34
- v34 License & Achievements: the 3 portrait certificates now sit together in one row, then the 4 landscape ones full width;
  each tile has a small flag badge; heading "Certificates & awards".
- v33 Talbiyah (labbaik Allahumma labbaik) on the splash screen and the Home banner: the small marks above the letters
  are no longer cut at the top on phones. Same font, colour and animation.

EARLIER - VERSION 31-32
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
