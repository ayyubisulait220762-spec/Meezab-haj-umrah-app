MEEZAB E RAHEMAT APP - UPLOAD PACKAGE (version 10, 2 November 2026)

WHAT TO UPLOAD
21 files: index.html, sw.js, talbiyah.mp3, README.txt and 17 hotel photos (hilton-mk-1 to 6, crowne-md-1 to 4, swiss-md-1 to 4, manazil-md-1 to 3, all .webp).
Upload these 21 files to the main folder of your GitHub repository (not inside a sub-folder). They replace the old ones.

HOW TO UPLOAD FROM A PHONE
1. Extract this zip in your phone's Files app (tap the zip, then Extract).
2. In Chrome, open github.com/ayyubisulait220762-spec/Meezab-haj-umrah-app
3. Tap Add file > Upload files (tick "Desktop site" in Chrome's menu if you don't see it).
4. Select all the extracted files and tap Commit changes.
5. Wait about 2 minutes, then open the app link. If the old design still shows, close the app fully and open it again.

WHAT IS NEW IN VERSION 10
- Hilton Convention Makkah photos (6): exterior, lobby, Haram view from the room, Haram-view hall, restaurant, fitness centre.
- Accommodation tile > Makkah tab (Long Stay and Signature): photos change by themselves every 2.5 seconds with a quick slide. Touching the photos pauses it for a few seconds.
- Package journey: the Jabal Omar stop that mentions Hilton Convention (Long Stay and Signature) now shows a small slideshow of the same photos. Tapping it opens the full photo gallery.
- Crowne Plaza Madinah photos (4) for Long Stay: exterior, entrance, room with a view of Masjid an-Nabawi, banquet hall. They show in the Accommodation tile > Madinah tab and on the Madinah journey stop (Markaziya), with the same slideshow. Tapping the journey slideshow opens the gallery on the Madinah tab.
- Swiss International Madinah photos (4) for Short: exterior, reception, room, restaurant. They show in the Accommodation tile > Madinah tab and as a slideshow on the Madinah stop of the journey.
- Manazil Al Sadiq Madinah photos (3) for Signature: exterior, lounge, room. They show in the Accommodation tile > Madinah tab and as a slideshow on the Madinah journey stop (Markaziya).
- Gallery photos are now in 4:3 shape, which suits hotel photos better.

WHAT WAS NEW IN VERSION 9
- New Include tiles in all 3 packages, with animations: "Mashaer arrangements" (tents in Mina, bus to Arafat and Muzdalifah, meals) and "Haj orientation programme" (ticket, visa and itinerary shown on a screen).
- Long Stay: "Travel bag & passport bag" tile removed.
- Hajj kit (all 3 packages): 11 items with a new animation - 3 trolley bags, sling bag for passport, backpack, chappal bag, Ihram for Umrah (1 pair), dupatta for women, prayer mat, umbrella, tasbeeh, dua book, water bottle.
- Excludes tab (all 3 packages): one tile with a play button; 11 excluded items appear one after another, ending with a red "NOT INCLUDED" stamp.

WHAT WAS NEW IN VERSION 8
- "Taif Ziyarat with Umrah" tile added to Signature and Short (all 3 packages now have it).
- FAQ: Taif included in all 3 packages; 3 Umrah packages every year (summer vacation, October vacation, Eid Milad).
- FAQ: ladies can travel without a Mahram with our group.
- FAQ: payment in 3 steps - Rs 2,00,000 advance, then 60% of the full package price, then the full balance incl. 2% TCS (TCS refunded on filing ITR).
- FAQ: basic price of all 3 packages is for 5-bed sharing; 4, 3 or 2-bed rooms at extra charge. Signature price note updated.
- Sound effects and the Talbiyah are louder on phones.

WHERE THINGS ARE INSIDE index.html
- Prices, offer price, photos and routes of each package: "const PKM="
- Package text in each language (titles, journey, inclusions): "const PKT="
- Hilton Convention Makkah photos: "const HILTON_MK=" (Long Stay and Signature). Crowne Plaza Madinah photos: "const CROWNE_MD=" (Long Stay). Swiss International Madinah photos: "const SWISS_MD=" (Short). Manazil Al Sadiq Madinah photos: "const MANAZIL_MD=" (Signature).
- Hotel names that get a journey slideshow: "const JSS_HOTELS="
- Hotel photos for the Accommodation tile: "const HOTELS=" (one list per package, for makkah and madinah).
  Each photo: ['photo-file.webp',{en:'Hotel name · caption',ur:'',hi:'',gu:''},'50% 50%'] - the last part is the focus point of the photo.
- Exclusions: "const EXC="
- Hajj news: "const NEWS=" (newest first)
- FAQ: "const FAQ="
- Long Stay offer end: OFFER_END (31 Dec 2026, 11:59 pm).
- All other app text in 4 languages: "const T="
- WhatsApp number: OFFICE_WA='917038422399'
- Google Sheet link for leads: LEAD_URL='' (empty for now; follow LEADS-SETUP.txt, then send the link to Agent R)
- Opening sound: TALBIYAH='talbiyah.mp3'

SOUNDS
The Talbiyah plays when the visitor taps "Tap to enter" on the opening screen. All other sounds are soft and only on key moments.
Visitors can mute everything (sounds and vibration) with the speaker button at the top of the home screen.

ADDING A NEW REVIEW VIDEO OR HOTEL PHOTOS
Send them to Agent R. They will be compressed and added for you.
