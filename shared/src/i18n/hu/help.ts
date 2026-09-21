import type { TranslationStrings } from '../types';

// English fallback until 'hu' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Súgó ehhez a képernyőhöz',
  'help.center.title': 'Súgó',
  'help.center.onThisScreen': 'Ezen a képernyőn',
  'help.center.screens': 'Képernyők',
  'help.center.thisScreen': 'Ez a képernyő',
  'help.center.subScreens': 'Alképernyők: {count}',
  'help.center.subScreensLabel': 'Alképernyők',
  'help.center.guidesCount': '{count} útmutató',
  'help.center.goToScreen': 'Ugrás: {screen}',
  'help.center.overview': 'Áttekintés',
  'help.center.howTo': 'Hogyan tudok…',
  'help.center.searchPlaceholder': 'Keresés az útmutatókban és a dokumentációban…',
  'help.center.searchEmpty': 'Nincs találat erre: „{query}”.',
  'help.center.searchGuides': 'Útmutatók',
  'help.center.searchDocs': 'Dokumentáció',
  'help.center.searchError': 'A keresés most nem érhető el.',
  'help.center.back': 'Vissza',
  'help.center.close': 'Súgó bezárása',
  'help.center.steps': '{count} lépés',
  'help.center.step': '{n}. lépés',
  'help.center.stepsLabel': 'Lépések',
  'help.center.stepOf': '{n}. lépés / {total}',
  'help.center.screenshot': 'Képernyőkép',
  'help.center.result': 'Az eredmény',
  'help.center.tips': 'Jó tudni',
  'help.center.related': 'Kapcsolódó',
  'help.center.openDocs': 'Megnyitás a Súgó és dokumentációban',
  'help.center.docsSection': 'A dokumentációban',
  'help.center.noContext': 'Ehhez a képernyőhöz még nincs útmutató.',
  'help.center.noContextHint': 'Keress a dokumentációban, vagy írd meg nekünk, mit kerestél.',
  'help.center.feedback': 'Hiányzik valami?',
  'help.center.feedbackLink': 'Írd meg nekünk a GitHubon',
  'help.center.discord': 'Kérdezz a Discordon',
  'help.center.quick': 'Gyors',
  'help.center.guide': 'Útmutató',
  'help.center.tour': 'Bemutató',
  'help.center.imageAlt': 'A(z) „{title}” {n}. lépése',

  // ctx
  'help.ctx.dashboard.title': 'Irányítópult',
  'help.ctx.dashboard.summary':
    'Az irányítópult a bejárat minden utazáshoz. A felső beszállókártya a most zajló vagy a következő utazást emeli ki, az alatta lévő sor összeszámolja, mennyit utaztál eddig, a kártyák pedig felsorolnak mindent, amit tervezel, archiváltál vagy már lezártál.',
  'help.ctx.dashboard.bullet.1':
    'Beszállókártya: a zajló vagy a következő utazás dátumokkal, utazókkal, helyekkel és visszaszámlálással. Kattints rá az utazás megnyitásához.',
  'help.ctx.dashboard.bullet.2':
    'Utazási statisztika: meglátogatott országok, utazások, úton töltött napok és repült távolság, az összes utazásod alapján.',
  'help.ctx.dashboard.bullet.3':
    'Utazáskártyák Tervezett, Archivált és Befejezett szűrővel, rácsban vagy listában. Vidd az egeret egy kártya fölé a szerkesztéshez, duplikáláshoz, archiváláshoz és törléshez.',
  'help.ctx.dashboard.bullet.4':
    'Widgetek jobbra: valutaváltó, világórák, közelgő foglalások és gyűjtemények. Mindegyik kikapcsolható.',
  'help.ctx.dashboard.bullet.5': 'Az „Új utazás” kártya és a jobb alsó sarokban lévő gomb egyaránt új utazást indít.',

  // create-trip
  'help.guide.create-trip.title': 'Utazás létrehozása',
  'help.guide.create-trip.goal': 'Új utazás indítása névvel, dátumokkal és borítóképpel.',
  'help.guide.create-trip.step.1':
    'Kattints az „Új utazás” gombra. Az utazásaid végén lévő kártya és a jobb alsó sarok gombja ugyanazt teszi.',
  'help.guide.create-trip.step.2':
    'Adj nevet az utazásnak. Ez az egyetlen kötelező mező; minden más később is megadható.',
  'help.guide.create-trip.step.3':
    'Válassz kezdő és záró dátumot. A TREK minden dátumhoz létrehoz egy napot, így az útiterv készen áll a kitöltésre.',
  'help.guide.create-trip.step.4':
    'Nem kötelező: adj hozzá borítóképet. Tölts fel sajátot, húzz be egyet, vagy keresd meg az úti célt az Unsplashen.',
  'help.guide.create-trip.step.5': 'Kattints az „Új utazás létrehozása” gombra.',
  'help.guide.create-trip.result':
    'Az utazás megjelenik az irányítópulton. Ha ez a következő, átveszi a felső beszállókártyát.',
  'help.guide.create-trip.tip.1':
    'A dátumok később módosíthatók. Ha már vannak foglalások, a TREK megkérdezi, hogy a napokkal együtt tolja-e el őket.',
  'help.guide.create-trip.tip.2':
    'Az itt választott utazási pénznem az, amire minden költség átváltódik. Az úti cél pénznemét válaszd.',

  // edit-trip
  'help.guide.edit-trip.title': 'Utazás szerkesztése',
  'help.guide.edit-trip.goal': 'Utazás átnevezése, a dátumok módosítása vagy a beállítások finomítása.',
  'help.guide.edit-trip.step.1': 'Vidd az egeret az utazáskártya (vagy a beszállókártya) fölé, és kattints a ceruzára.',
  'help.guide.edit-trip.step.2': 'Módosítsd, amit kell: név, leírás, dátumok, borító, pénznem, emlékeztető vagy tagok.',
  'help.guide.edit-trip.step.3': 'Kattints a „Frissítés” gombra.',
  'help.guide.edit-trip.result': 'A kártya azonnal frissül, az utazás minden tagjánál.',
  'help.guide.edit-trip.tip.1':
    'Ha olyan utazás dátumait tolod el, amelynek már vannak foglalásai, egy második lépés megkérdezi, hogy a foglalások is menjenek-e vele.',

  // cover-image
  'help.guide.cover-image.title': 'Borítókép beállítása',
  'help.guide.cover-image.goal': 'Adj az utazásnak egy képet, amely a kártyán és a beszállókártyán is látszik.',
  'help.guide.cover-image.step.1': 'Nyisd meg az utazás szerkesztőűrlapját a kártyáján lévő ceruzával.',
  'help.guide.cover-image.step.2':
    'A „Borítókép” alatt dobj be egy fotót, kattints a feltöltéshez, vagy írj be egy úti célt az Unsplash-keresőbe.',
  'help.guide.cover-image.step.3': 'Válassz egy fotót, és kattints a „Frissítés” gombra.',
  'help.guide.cover-image.result':
    'A fotó az utazással együtt mentődik, és mindenhol megjelenik, ahol az utazás szerepel.',
  'help.guide.cover-image.tip.1':
    'Az Unsplash-keresésből származó fotóknál a szerző automatikusan fel van tüntetve; a saját feltöltéseid a szervereden maradnak.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Utazás duplikálása',
  'help.guide.duplicate-trip.goal': 'Egy utazás újrahasznosítása sablonként egy újhoz.',
  'help.guide.duplicate-trip.step.1': 'Vidd az egeret a kártya fölé, és kattints a duplikálás ikonra.',
  'help.guide.duplicate-trip.step.2': 'Olvasd el, mi kerül másolásra és mi nem, majd erősítsd meg.',
  'help.guide.duplicate-trip.result':
    'Az eredeti mellett megjelenik egy másolat, készen az átnevezésre és az új dátumokra.',
  'help.guide.duplicate-trip.tip.1':
    'Napok, helyek, foglalások, költségvetési tételek, csomaglisták és napi jegyzetek átmásolódnak. Tagok, csevegés, szavazások, fájlok és megosztási linkek nem.',

  // archive-trip
  'help.guide.archive-trip.title': 'Utazás archiválása és visszaállítása',
  'help.guide.archive-trip.goal': 'Utazás félretétele törlés nélkül, és későbbi visszahozása.',
  'help.guide.archive-trip.step.1': 'Vidd az egeret a kártya fölé, és kattints az „Archiválás” gombra.',
  'help.guide.archive-trip.step.2': 'Állítsd a kártyák feletti szűrőt „Archivált”-ra, hogy újra lásd.',
  'help.guide.archive-trip.step.3':
    'Kattints a kártyán a „Visszaállítás” gombra, hogy visszakerüljön a „Tervezett” közé.',
  'help.guide.archive-trip.result':
    'Az archivált utazások mindent megőriznek. Csak nem foglalják tovább az irányítópultot és az összes utazás naptárfolyamát.',

  // delete-trip
  'help.guide.delete-trip.title': 'Utazás törlése',
  'help.guide.delete-trip.goal': 'Utazás végleges eltávolítása.',
  'help.guide.delete-trip.step.1': 'Vidd az egeret a kártya fölé, és kattints a kukára.',
  'help.guide.delete-trip.step.2':
    'Erősítsd meg. A párbeszédablak megnevezi az utazást, így biztosan a megfelelőt törlöd.',
  'help.guide.delete-trip.result':
    'Az utazás, a napjai, helyei, foglalásai és fájljai eltűnnek. Nincs visszavonás; ha bizonytalan vagy, inkább archiválj.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Befejezett utazások keresése, váltás rács és lista között',
  'help.guide.filter-and-view.goal':
    'Befejezett vagy archivált utazások megtekintése, és a neked tetsző elrendezés kiválasztása.',
  'help.guide.filter-and-view.step.1':
    'Használd a kártyák feletti „Tervezett”, „Archivált” és „Befejezett” szűrőt. Befejezett minden utazás, amelynek záró dátuma elmúlt.',
  'help.guide.filter-and-view.step.2': 'Kattints a lista ikonra a tömör listához; kattints újra a rácshoz.',
  'help.guide.filter-and-view.result': 'Az irányítópult ezen az eszközön megjegyzi az elrendezésedet.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Feliratkozás az összes utazásra a naptáradban',
  'help.guide.calendar-feed.goal':
    'Minden aktív utazás napjainak és foglalásainak megtekintése a naptáralkalmazásodban, mindig szinkronban.',
  'help.guide.calendar-feed.step.1': 'Kattints a naptár ikonra a nézetváltó mellett.',
  'help.guide.calendar-feed.step.2':
    'Kattints az „Enable calendar subscription” gombra. A TREK létrehoz egy privát folyamlinket.',
  'help.guide.calendar-feed.step.3':
    'Add hozzá a folyamot valamelyik gombbal (Google, Apple, Outlook), vagy másold a linket bármelyik naptáralkalmazásba, amely URL-ekre tud feliratkozni.',
  'help.guide.calendar-feed.result':
    'Minden aktív utazás megjelenik a naptáradban, és magától frissül. Az archivált és a több mint 90 napja befejezett utazások kimaradnak.',
  'help.guide.calendar-feed.tip.1':
    'A link titok. Aki birtokolja, olvashatja a folyamot; ha kiszivárog, vond vissza ugyanabban a párbeszédablakban.',

  // widgets
  'help.guide.widgets.title': 'Irányítópult-widgetek kiválasztása',
  'help.guide.widgets.goal': 'A statisztikasor és a jobb oldali widgetek megjelenítése vagy elrejtése.',
  'help.guide.widgets.step.1': 'Nyisd meg a jobb felső avatar menüt, és válaszd a „Beállítások” pontot.',
  'help.guide.widgets.step.2': 'Válts az „Appearance” fülre.',
  'help.guide.widgets.step.3':
    'A „Dashboard widgets” alatt kapcsold be vagy ki az egyes widgeteket. Az asztali és a mobil nézet külön állítható.',
  'help.guide.widgets.step.4': 'Menj vissza az irányítópultra. A változás azonnal érvényes.',
  'help.guide.widgets.result':
    'Az elrejtett widgetek helyet adnak az utazásaidnak; kapcsold ki az egész jobb oszlopot az elrendezés középre igazításához.',
  'help.guide.widgets.link': 'Megjelenési beállítások megnyitása',

  // currency-widget
  'help.guide.currency-widget.title': 'Valutaváltás',
  'help.guide.currency-widget.goal': 'Egy összeg átváltása két pénznem között aktuális árfolyamon.',
  'help.guide.currency-widget.step.1': 'Írd be az összeget, és válaszd ki a két pénznemet.',
  'help.guide.currency-widget.step.2': 'A köztük lévő nyíl felcseréli a párt; a körkörös nyíl frissíti az árfolyamot.',
  'help.guide.currency-widget.result': 'A pénznempárodat a fiókod megjegyzi, így minden eszközön ugyanaz.',
  'help.guide.currency-widget.tip.1':
    'Az árfolyamok az Európai Központi Banktól érkeznek, és naponta egyszer frissülnek.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Világórák hozzáadása',
  'help.guide.timezones-widget.goal': 'Tartsd szem előtt az úti céljaid helyi idejét.',
  'help.guide.timezones-widget.step.1': 'Kattints a + jelre az „Időzónák” widgetben, és keress rá egy városra.',
  'help.guide.timezones-widget.step.2': 'Egy órát a mellette lévő × jellel távolíthatsz el.',
  'help.guide.timezones-widget.result': 'Az óráid a fiókoddal együtt mentődnek.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'A Vacay a személyes szabadságterveződ: hány szabadnapod van egy évben, melyeket vetted már ki, és mennyi maradt. A rács egy pillantásra mutatja az egész évet; az oldalsávban az évválasztó, a veled együtt tervezők, a veled megosztott naptárak, a jelmagyarázat és a keret található.',
  'help.ctx.vacay.bullet.1':
    'Éves rács: tizenkét hónapkártya, naponként egy cella. Kattints egy napra a rögzítéshez vagy törléshez. A kis kék pont azokat a napokat jelöli, amelyeket már lefed egy utazás.',
  'help.ctx.vacay.bullet.2':
    'Alsó eszköztár: Szabadság vagy Céges szabadnap mód, valamint a Fél nap és a Csúsztatás kapcsolók, amelyek megváltoztatják, mit rögzít egy kattintás.',
  'help.ctx.vacay.bullet.3':
    'Szabadságkeret: az évi napjaid, hány van felhasználva és mennyi maradt, az előző időszakból áthozott nappal együtt.',
  'help.ctx.vacay.bullet.4':
    'A Személyek a terveddel összevont emberek, mindenki a saját színében. A Megosztott naptárak csak olvasható gyűrűk mások szabadnapjaival.',
  'help.ctx.vacay.bullet.5':
    'A beállítások lefedik a hétvégéket, a hét kezdetét, az áthozatalt, a szabadságévedet, a céges szüneteket és az ünnepnap- vagy iskolaiszünet-naptárakat.',
  // log-day
  'help.guide.log-day.title': 'Szabadnap rögzítése',
  'help.guide.log-day.goal': 'Jelölj meg egy szabadnapot az éves rácsban, és nézd, ahogy követi az egyenleg.',
  'help.guide.log-day.step.1':
    'Nézd az alsó eszköztárat: a bal oldali, a te színedben lévő gomb azt jelenti, hogy egy kattintás neked rögzít szabadnapot.',
  'help.guide.log-day.step.2':
    'Kattints egy napra bármelyik hónapkártyán. Kitöltődik a színeddel, és a Felhasznált eggyel többet számol.',
  'help.guide.log-day.step.3': 'Kattints ugyanarra a napra újra a törléshez.',
  'help.guide.log-day.result':
    'A nap rögzítve van, a nap, a Felhasznált és a Maradt csempe azonnal frissül, és mindenki, aki össze van vonva a terveddel, élőben látja.',
  'help.guide.log-day.tip.1': 'A hétvégék nem rögzíthetők, amíg a Beállításokban be van kapcsolva a Hétvégék zárolása.',
  'help.guide.log-day.tip.2':
    'A cellában lévő kék pont azt jelenti, hogy az egyik utazásod lefedi azt a napot, így látod, hol esik egybe a szabadság és az utazás.',
  // half-day
  'help.guide.half-day.title': 'Fél nap rögzítése',
  'help.guide.half-day.goal': 'Vegyél ki egy délutánt anélkül, hogy egy egész napot elköltenél a keretből.',
  'help.guide.half-day.step.1':
    'Kapcsold be a Fél nap opciót az eszköztáron. A narancssárga pont az a jel, amit egy fél nap kap a rácsban.',
  'help.guide.half-day.step.2': 'Kattints egy napra. 0,5-ként rögzül, és a sarkában ott a narancssárga pont.',
  'help.guide.half-day.step.3':
    'Kapcsold ki a Fél napot, ha végeztél; egy fél napra más beállításokkal kattintva helyben átalakítod.',
  'help.guide.half-day.result':
    'A Felhasznált 0,5-tel nő. A Fél nap és a Csúsztatás függetlenek, így fél csúsztatásnap is lehetséges.',
  'help.guide.half-day.tip.1':
    'Az eszköztár mindig azt a jelet mutatja, amit a következő kattintásod tesz le, így rögzítés előtt ellenőrizheted.',
  // comp-day
  'help.guide.comp-day.title': 'Csúsztatás vagy rugalmas idő rögzítése',
  'help.guide.comp-day.goal': 'Vegyél ki olyan szabadidőt, ami nem kerül szabadnapokba.',
  'help.guide.comp-day.step.1':
    'Kapcsold be a Csúsztatás opciót az eszköztáron. A vonalkázott korong mutatja, hogy néz ki egy csúsztatásnap a rácsban.',
  'help.guide.comp-day.step.2': 'Kattints egy napra. Tömör blokk helyett a színed átlós vonalkázásával töltődik ki.',
  'help.guide.comp-day.result': 'A csúsztatásnapok a keretcsempék mellett számolódnak, és sosem csökkentik a Maradtat.',
  'help.guide.comp-day.tip.1':
    'Lecsúsztatott túlóra, rugalmas munkaidő, kompenzációs nap: minden, ami szabad, de nem szabadság, ide tartozik.',
  // entitlement
  'help.guide.entitlement.title': 'A keret beállítása',
  'help.guide.entitlement.goal': 'Mondd meg a Vacaynek, hány szabadnapod van egy évben.',
  'help.guide.entitlement.step.1': 'Az oldalsávban kattints a Szabadságkeret alatti nap csempére.',
  'help.guide.entitlement.step.2': 'Írd be a napok számát, és nyomj Entert.',
  'help.guide.entitlement.result':
    'A Maradt újraszámolódik a keretedből, az esetleges áthozatalból és a felhasznált napokból.',
  'help.guide.entitlement.tip.1':
    'Minden évnek saját kerete van, így az itteni változtatás csak a kiválasztott évet érinti.',
  // years
  'help.guide.years.title': 'Évek hozzáadása és váltása',
  'help.guide.years.goal': 'Tervezd meg már a jövő évet, vagy nézz vissza az előzőre.',
  'help.guide.years.step.1':
    'Kattints az évszámtól jobbra lévő + jelre a következő év hozzáadásához, vagy a bal oldalira az előzőhöz.',
  'help.guide.years.step.2': 'Válts az évek között a nyilakkal vagy az alattuk lévő évcímkékkel.',
  'help.guide.years.step.3':
    'Egy év eltávolításához vidd az egeret a címkéjére, és kattints a kis mínuszra. A bejegyzései vele mennek, ezért óvatosan erősítsd meg.',
  'help.guide.years.result': 'Minden év megtartja a saját keretét és bejegyzéseit; az áthozatal köti össze őket.',
  // company-holidays
  'help.guide.company-holidays.title': 'Céges szünetek jelölése',
  'help.guide.company-holidays.goal':
    'Tiltsd le azokat a napokat, amikor az egész cég szabad, anélkül, hogy bárki keretét elköltenéd.',
  'help.guide.company-holidays.step.1':
    'Nyisd meg a Beállításokat, és ellenőrizd, hogy a Céges szabadnapok be van kapcsolva. Alapból be van; az eszköztár csak addig kínálja a módot.',
  'help.guide.company-holidays.step.2': 'Visszatérve a rácsba állítsd az eszköztárat Céges szabadnap módba.',
  'help.guide.company-holidays.step.3':
    'Kattints a napokra. Borostyánszínűek lesznek, és megjelennek a jelmagyarázatban.',
  'help.guide.company-holidays.result':
    'A céges szüneteket mindenki látja, aki össze van vonva a tervvel, és sosem csökkentik a Maradtat.',
  'help.guide.company-holidays.tip.1':
    'Bármely összevont személy szerkesztheti a céges szüneteket, ezért egyezzetek meg, ki kezeli őket.',
  // public-holidays
  'help.guide.public-holidays.title': 'Ünnepnapok megjelenítése',
  'help.guide.public-holidays.goal': 'Tedd a rácsra az országod vagy régiód ünnepnapjait.',
  'help.guide.public-holidays.step.1': 'Nyisd meg a Beállításokat, és kapcsold be az Ünnepnapok kapcsolót.',
  'help.guide.public-holidays.step.2':
    'Kattints a Naptár hozzáadása gombra, válaszd ki az országot és, ahol számít, a régiót. Adj neki színt és címkét, ha szeretnél.',
  'help.guide.public-holidays.step.3':
    'Zárd be a Beállításokat. Az ünnepnapok megjelennek a rácsban és a jelmagyarázatban.',
  'help.guide.public-holidays.result':
    'Az ünnepnapok a naptár színével vannak jelölve, és sosem számítanak bele a keretedbe.',
  'help.guide.public-holidays.tip.1':
    'Több naptárat is hozzáadhatsz, például a saját régiódat és egy összevont kollégáét.',
  // school-holidays
  'help.guide.school-holidays.title': 'Iskolai szünetek megjelenítése',
  'help.guide.school-holidays.goal': 'Lásd a régiód iskolai szüneteit a saját szabadnapjaid mellett.',
  'help.guide.school-holidays.step.1': 'Nyisd meg a Beállításokat, és kapcsold be a School Holidays kapcsolót.',
  'help.guide.school-holidays.step.2':
    'Kattints a Naptár hozzáadása gombra, és válaszd ki az országot. Ahol egy ország felosztja a naptárát, válaszd ki a régiót vagy csoportot is.',
  'help.guide.school-holidays.step.3': 'Zárd be a Beállításokat. Minden szünet színes sávot kap a napjai alján.',
  'help.guide.school-holidays.result': 'Az iskolai szünetek tisztán vizuálisak: senki keretét nem csökkentik.',
  'help.guide.school-holidays.tip.1':
    'Hiányzik a régió? A rendszergazda kézzel is kezelheti az iskolai szüneteket az Admin, Személyre szabás, Iskolai szünetek alatt.',
  // weekends
  'help.guide.weekends.title': 'Hétvégék tiltása és a hét kezdetének beállítása',
  'help.guide.weekends.goal': 'Tartsd ki a hétvégéket a számolásból, és kezdd a hetet a megszokott napon.',
  'help.guide.weekends.step.1': 'Nyisd meg a Beállításokat.',
  'help.guide.weekends.step.2':
    'Kapcsold be a Hétvégék zárolása kapcsolót, és válaszd ki, mely napok számítanak hétvégének.',
  'help.guide.weekends.step.3': 'A hét kezdőnapja alatt válaszd a hétfőt vagy a vasárnapot.',
  'help.guide.weekends.result': 'A tiltott napok szürkék a rácsban, és nem rögzíthetők véletlenül.',
  // leave-year
  'help.guide.leave-year.title': 'A szabadságév beállítása',
  'help.guide.leave-year.goal':
    'Számold a keretet üzleti év szerint vagy a belépés dátumától januártól decemberig helyett.',
  'help.guide.leave-year.step.1': 'Nyisd meg a Beállításokat, és keresd meg a Szabadságév pontot.',
  'help.guide.leave-year.step.2':
    'Válaszd a Naptári év, az Üzleti év (a kezdő hónappal és nappal) vagy a Belépés dátuma (a belépésed dátumával) lehetőséget.',
  'help.guide.leave-year.result':
    'A keret, a felhasznált napok és az áthozatal ezt az időszakot követik, a rács pedig annak első hónapjával kezdődik.',
  'help.guide.leave-year.tip.1':
    'Ez a beállítás személyes: összevont tervben mindenki megtartja a saját szabadságévét és számait.',
  // carry-over
  'help.guide.carry-over.title': 'Fel nem használt napok áthozása',
  'help.guide.carry-over.goal': 'Add hozzá az időszak végén maradt napokat a következőhöz.',
  'help.guide.carry-over.step.1': 'Nyisd meg a Beállításokat.',
  'help.guide.carry-over.step.2': 'Kapcsold be a Szabadság átvitele kapcsolót.',
  'help.guide.carry-over.result':
    'Az áthozott mennyiség az összes évedre újraszámolódik, és a keret alatt jelenik meg.',
  'help.guide.carry-over.tip.1': 'Kikapcsolása minden áthozott egyenleget nullára állít.',
  // invite
  'help.guide.invite.title': 'Tervezés valakivel közösen',
  'help.guide.invite.goal':
    'Vond össze a tervedet egy másik TREK-felhasználóval, hogy egy rácsban lássátok egymás szabadnapjait.',
  'help.guide.invite.step.1': 'Kattints a személy ikonra a Személyek panelen.',
  'help.guide.invite.step.2': 'Válaszd ki a felhasználót, és küldd el a meghívót.',
  'help.guide.invite.step.3': 'Értesítést kap, és elfogadja. Addig a meghívó függőként jelenik meg.',
  'help.guide.invite.result':
    'A két terv összeolvad: mindenkinek saját színe van, egymásnak is rögzíthettek napokat, és minden élőben szinkronizálódik.',
  'help.guide.invite.tip.1':
    'Az összevonás visszavonásához használd a Beállításokban a Feloldás gombot. Mindenki bejegyzései visszakerülnek a saját tervébe.',
  'help.guide.invite.tip.2':
    'Ha a másik személynek csak látnia kell a napjaidat, oszd meg a naptáradat összevonás helyett.',
  // share-calendar
  'help.guide.share-calendar.title': 'Naptár megosztása csak olvasásra',
  'help.guide.share-calendar.goal':
    'Hadd lássa valaki, mikor vagy szabadságon, anélkül, hogy beleszólhatna a tervedbe.',
  'help.guide.share-calendar.step.1': 'Kattints a megosztás ikonra a Megosztott naptárak panelen.',
  'help.guide.share-calendar.step.2':
    'Válaszd ki a felhasználót, és kattints a Megosztás gombra. Elfogadás nem szükséges.',
  'help.guide.share-calendar.step.3':
    'A veled megosztott naptárak ugyanebben a panelben jelennek meg; a szem elrejt egyet, a Megosztás leállítása visszavonja a tiédet.',
  'help.guide.share-calendar.result':
    'A szabadnapjaid színes gyűrűként jelennek meg az ő rácsában. Semmi, amit megosztasz, nem szerkeszthető onnan.',
  'help.guide.share-calendar.tip.1':
    'A megosztás és az összevonás függetlenek: lehetsz összevonva egy személlyel, és megoszthatod másokkal.',
  'help.guide.share-calendar.tip.2': 'Vidd az egeret egy gyűrűs napra, hogy lásd, ki van szabadságon és meddig.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Az Atlas az utazási lábnyomod egy világtérképen: minden ország, ahová egy utazás elvitt, ki van színezve, a TREK előtti országokat pedig kézzel adod hozzá. Nagyíts a régiókért, vezess bakancslistát a még látni kívánt helyekről, és olvasd le a számaidat az alsó üvegpanelen.',
  'help.ctx.atlas.bullet.1':
    'A térkép: a meglátogatott országok saját, állandó színt viselnek, a tervezett országoknak szaggatott körvonaluk, a bakancslistás országoknak átlós sraffozásuk van, minden más szürke. Vidd az egeret egy ország fölé az utazásaiért, helyeiért, valamint az első és utolsó látogatásért.',
  'help.ctx.atlas.bullet.2':
    'Keresés felül: írj be egy országot vagy helyet. Egy ország kiválasztása odarepíti a térképet és megnyitja a felugró ablakát; egy hely kiválasztása a régiójában landol, hogy azt jelölhesd meg.',
  'help.ctx.atlas.bullet.3':
    'Tervezett országok megjelenítése, jobbra fent: felfedi a közelgő utazásaid országait. A kapcsoló csak addig látszik, amíg van ilyen.',
  'help.ctx.atlas.bullet.4':
    'Panel alul: a Statisztikák fül országokkal, utazásokkal, helyekkel, városokkal, napokkal, kontinensekkel és a sorozatoddal; a Bakancslista fül azzal, ami még előtted áll.',
  'help.ctx.atlas.bullet.5':
    'Régiók: az 5-ös nagyítási szinttől a térkép államokra és tartományokra vált, mindegyik kattintható a megjelöléshez vagy eltávolításhoz.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: a csatlakoztatott bővítménnyel a statisztikától balra egy panel kipipálja a kívánságokat és országokat ad hozzá a felvételeidből, soha nem a megerősítésed nélkül.',
  // mark-country
  'help.guide.mark-country.title': 'Ország megjelölése meglátogatottként',
  'help.guide.mark-country.goal':
    'Adj hozzá egy országot, ahol a TREK előtt jártál, hogy a térkép és a számlálód is tartalmazza.',
  'help.guide.mark-country.step.1': 'Írd be az országot a térkép tetején lévő keresőmezőbe.',
  'help.guide.mark-country.step.2': 'Válaszd ki a listából. A térkép odarepül, és megnyílik az ország felugró ablaka.',
  'help.guide.mark-country.step.3': 'Válaszd a Megjelölés meglátogatottként lehetőséget.',
  'help.guide.mark-country.result':
    'Az ország megkapja a színét a térképen, és az Országok eggyel többet számol. Ez a szín állandó: további országok megjelölése soha nem keveri át a többit.',
  'help.guide.mark-country.tip.1':
    'Egy szürke országra kattintva a térképen ugyanez az ablak nyílik; kis országoknál a keresés a biztos út.',
  'help.guide.mark-country.tip.2':
    'A kézzel megjelölt ország mindig meglátogatottnak számít, bármilyen dátumú is az oda tartó utazás.',
  // unmark-country
  'help.guide.unmark-country.title': 'Megjelölt ország eltávolítása',
  'help.guide.unmark-country.goal': 'Vedd le újra a térképről a kézzel megjelölt országot.',
  'help.guide.unmark-country.step.1':
    'Keresd meg az országot és válaszd ki, vagy kattints rá a térképen. A magad által megjelölt országnál az ablak megkérdezi, eltávolítsa-e.',
  'help.guide.unmark-country.step.2': 'Erősítsd meg az Eltávolítás gombbal.',
  'help.guide.unmark-country.result': 'Az ország újra szürke lesz, és kikerül a számlálódból.',
  'help.guide.unmark-country.tip.1':
    'Így csak a kézzel megjelölt országok távolíthatók el. Az utazásokkal vagy helyekkel rendelkező ország marad, amíg azok megvannak; az Eltávolítás a panel részletkártyáján is ott van, ha kézzel jelölték meg.',
  // country-details
  'help.guide.country-details.title': 'Nézd meg, mit csináltál egy országban',
  'help.guide.country-details.goal': 'Nyiss meg egy meglátogatott országot, és ugorj az odavezető utazásokhoz.',
  'help.guide.country-details.step.1': 'Keress egy országot, amelyet meglátogattál.',
  'help.guide.country-details.step.2':
    'Válaszd ki. A térkép odarepül, és az alsó panel kap egy kártyát zászlóval, helyekkel, utazásokkal és utazásonként egy címkével.',
  'help.guide.country-details.result': 'Kattints egy utazáscímkére, hogy megnyisd az utazást a tervezőben.',
  'help.guide.country-details.tip.1':
    'Ha a térképen az ország fölé viszed az egeret, ugyanezeket a számokat látod, plusz az első és utolsó látogatást.',
  // planned-countries
  'help.guide.planned-countries.title': 'Mutasd az országokat, ahová mész',
  'help.guide.planned-countries.goal':
    'Hozd fel a térképre a közelgő utazásaid országait anélkül, hogy meglátogatottnak számítanának.',
  'help.guide.planned-countries.step.1':
    'Kapcsold be a Tervezett országok megjelenítése kapcsolót jobbra fent. A mellette lévő szám mondja, hány vár.',
  'help.guide.planned-countries.step.2':
    'Keress egy tervezett országot és válaszd ki: a panel Tervezett-et mond, a térkép eszköztippje pedig mutatja, mikor mész.',
  'help.guide.planned-countries.result':
    'A tervezett országok szaggatott körvonallal jelennek meg, így soha nem néznek ki olyan helynek, ahol már jártál. A kapcsoló megjegyzi a választásodat.',
  'help.guide.planned-countries.tip.1':
    'Egy ország akkor számít meglátogatottnak, ha az oda tartó utazás elkezdődött; a folyamatban lévő utazás is számít. A dátum nélküli utazások teljesen kimaradnak a statisztikából.',
  'help.guide.planned-countries.tip.2': 'A kapcsoló csak addig létezik, amíg vannak közelgő utazásaid.',
  // regions
  'help.guide.regions.title': 'Régió megjelölése',
  'help.guide.regions.goal':
    'Finomabban, mint az országok: jelöld meg az államokat, tartományokat vagy prefektúrákat, ahol jártál.',
  'help.guide.regions.step.1':
    'Nagyíts rá egy országra, amíg megjelennek a régiói, az 5-ös nagyítási szinttől. Az ország keresése és kiválasztása elég közel visz.',
  'help.guide.regions.step.2':
    'Kattints egy régióra. Az egér fölé vitele megnevezi; az ablak a régiót és az országát mutatja.',
  'help.guide.regions.step.3': 'Válaszd a Megjelölés meglátogatottként lehetőséget.',
  'help.guide.regions.result':
    'A régió megtelik az ország színével. Egy régió megjelölése az országot is meglátogatottnak számítja, ha még nem volt az.',
  'help.guide.regions.tip.1':
    'Egy meglátogatott régióra kattintva az Eltávolítás jelenik meg, akár te jelölted meg, akár egy hely tette oda.',
  'help.guide.regions.tip.2': 'A régiók, ahol valódi helyeid vannak, maguktól megjelölődnek; ott nincs teendő.',
  // search-place
  'help.guide.search-place.title': 'Hely keresése és a régiójának megjelölése',
  'help.guide.search-place.goal':
    'Jelöld meg Bajorországot Münchenre keresve, anélkül hogy tudnád, melyik régióban van egy város.',
  'help.guide.search-place.step.1':
    'Írj a keresőmezőbe egy várost, nevezetességet vagy címet. Előbb az országok jönnek; az egyező helyek alattuk, a Helyek cím alatt jelennek meg.',
  'help.guide.search-place.step.2': 'Válaszd ki a helyet. A térkép odarepül, és kideríti, melyik régióban van a pont.',
  'help.guide.search-place.step.3':
    'Válaszd a Megjelölés meglátogatottként lehetőséget ahhoz a régióhoz, vagy a Hozzáadás a bakancslistához lehetőséget, ha még előtted áll.',
  'help.guide.search-place.result':
    'A régió megjelölve, és vele az ország is. A térképcsomagban régióadat nélküli országok magára az országra esnek vissza.',
  'help.guide.search-place.tip.1':
    'A helyek ugyanabból a keresésből jönnek, mint mindenhol a TREK-ben, így az admin által beállított szolgáltatót követik.',
  // bucket-country
  'help.guide.bucket-country.title': 'Ország felvétele a bakancslistára',
  'help.guide.bucket-country.goal':
    'Vezess bakancslistát országokról közvetlenül a térképen, elkülönítve azoktól, ahol jártál.',
  'help.guide.bucket-country.step.1': 'Keresd meg az országot és válaszd ki, vagy kattints rá a térképen.',
  'help.guide.bucket-country.step.2': 'Válaszd a Hozzáadás a bakancslistához lehetőséget.',
  'help.guide.bucket-country.step.3':
    'Válassz hónapot és évet, ha már tudod, mikor, majd erősítsd meg a Hozzáadás a bakancslistához gombbal.',
  'help.guide.bucket-country.result':
    'Az ország átlós sraffozással rajzolódik ki abban a színben, amelyet akkor kap, ha odaérsz, és megjelenik a panel Bakancslista fülén.',
  'help.guide.bucket-country.tip.1':
    'Ugyanez az ablak az Eltávolítás a bakancslistáról lehetőséget kínálja, ha az ország már a listán van.',
  'help.guide.bucket-country.tip.2':
    'Céldátumonként egy bejegyzés: ugyanaz az ország két különböző hónapra rajta lehet a listán, de ugyanarra kétszer nem.',
  // bucket-place
  'help.guide.bucket-place.title': 'Hely hozzáadása a bakancslistához',
  'help.guide.bucket-place.goal':
    'Ments el egy várost, látnivalót vagy címet, amelyről álmodsz, koordinátákkal és céldátummal.',
  'help.guide.bucket-place.step.1': 'Nyisd meg a Bakancslista fület az alsó panelen.',
  'help.guide.bucket-place.step.2': 'Kattints a Hely hozzáadása gombra.',
  'help.guide.bucket-place.step.3':
    'Írd be a nevet és nyomd meg a keresőgombot; válaszd ki a találatot, hogy a helynek koordinátái legyenek. Csak egy nevet beírni és a keresést kihagyni is működik.',
  'help.guide.bucket-place.step.4': 'Válassz hónapot és évet, ha szeretnél, és kattints a Hozzáadás gombra.',
  'help.guide.bucket-place.result':
    'A hely a bakancslistád tetején áll a céldátumával; a mellette lévő × újra eltávolítja.',
  'help.guide.bucket-place.tip.1':
    'A koordinátákkal rendelkező kívánság az, amit a Dawarich később kipipálhat helyetted, ha a felvételeid mutatják, hogy ott jártál.',
  // stats
  'help.guide.stats.title': 'A statisztikád olvasása',
  'help.guide.stats.goal': 'Tudd, mit számolnak a panel számai, és mit nem.',
  'help.guide.stats.step.1':
    'Az Országok azoknak a különböző országoknak a száma, ahol tényleg jártál; a tervezettek mellette jelennek meg, nem benne. Az Utazások, Helyek és Napok az összes utazásod összegei. A Városok a helyeid címeiből származik, tehát becslés.',
  'help.guide.stats.step.2':
    'A kontinensek a meglátogatott országokat mutatják kontinensenként; az Antarktisz akkor kerül a sorba, ha már jártál ott. Aztán a sorozatod, egymást követő évek legalább egy utazással, és hogy idén hány utazást tettél.',
  'help.guide.stats.result': 'A számok követik az utazásaidat, ahogy tervezed őket; itt nincs mit karbantartani.',
  'help.guide.stats.tip.1':
    'A városokat a cím szövegéből olvassa ki, nem keresi meg, így egy rövid cím, mint az „Osteria Francescana, Italy”, vagy egy prefektúrával végződő cím régiót adhat város helyett.',
  'help.guide.stats.tip.2':
    'A kézzel megjelölt országok számítanak az Országokban és a kontinenseknél, de nem hoznak utazást, helyet vagy napot.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Gyűjtemények',
  'help.ctx.collections.summary':
    'A Collections a helyek könyvtára bármely utazáson kívül: megtalált és megtartani kívánt helyek nevesített listái, minden hely Ötlet, Szeretnék odamenni vagy Meglátogatva állapottal. A helyek az utazásokba és onnan kifelé másolódnak, sosem kapcsolódnak, így egy lista és egy utazás sosem változtatja meg egymást.',
  'help.ctx.collections.bullet.1':
    'Listasáv a bal oldalon: a saját listáid, a veled megosztottak, az igenre váró meghívók, az Összes mentett mint minden általad birtokolt lista egyesítése, és felül az Új lista meg a fájlimport.',
  'help.ctx.collections.bullet.2':
    'A megnyitott lista fejléce: a színe, borítója, leírása és hivatkozásai, a tagok, valamint jobbra a Szerkesztés, Exportálás és Megosztás műveletek.',
  'help.ctx.collections.bullet.3':
    'Szűrősor a helyek fölött: állapot, kategória, értékelés és rendezés, a címkeszűrő, a + a hely hozzáadásához, az utazásimport és a Jelölés a tömeges műveletekhez.',
  'help.ctx.collections.bullet.4':
    'Helysorok: avatar, név és cím, címkék és kategória, jobbra pedig az állapotjelző, amely egy kattintással vált.',
  'help.ctx.collections.bullet.5':
    'Térkép jobbra: egy tű minden koordinátával rendelkező helyhez, a lista vagy térkép váltó, a keresőmező és a címkeszűrő. Egy tűre kattintva az a hely nyílik meg.',
  'help.ctx.collections.bullet.6':
    'Részletpanel: kattints egy sorra a borítóért, kategóriáért, címkékért, állapotért, leírásért és hivatkozásokért, a Szerkesztés, a Másolás utazásba és az Eltávolítás a listából műveletekkel.',
  // create-list
  'help.guide.create-list.title': 'Lista létrehozása',
  'help.guide.create-list.goal': 'Indíts egy új, nevesített listát színnel és borítóval, készen a helyekre.',
  'help.guide.create-list.step.1': 'Kattints az Új lista gombra a listasáv tetején.',
  'help.guide.create-list.step.2':
    'Adj nevet a listának, és válassz színt. A borítókép, a leírás és a hivatkozások opcionálisak; később a Szerkesztés révén hozzáadhatod őket.',
  'help.guide.create-list.step.3': 'Kattints a Létrehozás gombra.',
  'help.guide.create-list.result':
    'A lista üresen nyílik meg, a Hely hozzáadása és az Importálás egy utazásból a két módja a feltöltésének.',
  'help.guide.create-list.tip.1':
    'A borító lehet saját feltöltés vagy az ugyanabban a párbeszédablakban lévő Unsplash-kereséssel talált kép.',
  // add-place
  'help.guide.add-place.title': 'Hely hozzáadása',
  'help.guide.add-place.goal':
    'Keress egy helyet, és mentsd a megnyitott listába névvel, kategóriával, állapottal és jegyzetekkel egy menetben.',
  'help.guide.add-place.step.1': 'Kattints a + jelre a helyek fölötti szűrősorban.',
  'help.guide.add-place.step.2':
    'Írd be a helyet a keresőmezőbe, és válassz egy találatot. A név, a cím és a koordináták abból töltődnek ki.',
  'help.guide.add-place.step.3':
    'Állítsd be az állapotot és, ha szeretnéd, egy kategóriát, leírást és hivatkozásokat, majd kattints a Hozzáadás gombra. A párbeszédablak nyitva marad a következő helyhez; a Mégse bezárja.',
  'help.guide.add-place.result': 'A hely megjelenik a listában, és ha vannak koordinátái, tűként a térképen is.',
  'help.guide.add-place.tip.1':
    'Egy utazáson belül a helyvizsgálóban vagy a hely menüjében lévő Mentés gyűjteménybe egy utazásbeli helyet tesz listára az utazás elhagyása nélkül.',
  'help.guide.add-place.tip.2':
    'A listának a tiédnek kell lennie, vagy olyannak, ahol szerkesztő vagy adminisztrátor vagy; a + nincs ott az Összes mentett nézetben, sem egy csak megtekintett listán.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Helyek importálása egy utazásból',
  'help.guide.import-from-trip.goal':
    'Hozd át egy egész utazás helyeit egyszerre egy listára, ahelyett hogy egyenként mentenéd őket.',
  'help.guide.import-from-trip.step.1':
    'Kattints a felhő nyilas importgombra a szűrősorban. Üres listán ugyanez a művelet a Hely hozzáadása mellett ül.',
  'help.guide.import-from-trip.step.2': 'Válaszd ki az egyik utazásodat.',
  'help.guide.import-from-trip.step.3':
    'Pipáld ki a kívánt helyeket. A már listán lévő helyek szürkék; azok, amelyeket az utazás egyetlen napja sem tartalmaz, eleve kijelölve indulnak. A Csak az újak elrejti, amid már megvan.',
  'help.guide.import-from-trip.step.4':
    'Kattints az Importálás gombra. A gomb mindig megmondja, hány hely kerül mindjárt hozzáadásra.',
  'help.guide.import-from-trip.result':
    'A helyek nevükkel, címükkel, koordinátáikkal, leírásukkal és kategóriájukkal másolódnak a listára. Az utazás marad, ahogy volt.',
  'help.guide.import-from-trip.tip.1':
    'A név vagy koordináták szerinti duplikátumok automatikusan kimaradnak, így a kétszeri importálás nem árt.',
  'help.guide.import-from-trip.tip.2':
    'Egy utazás helylistáján belül a kijelölő mód ehelyett a Mentés gyűjteménybe lehetőséget kínálja egy kézzel válogatott helykészlethez.',
  // place-status
  'help.guide.place-status.title': 'Hely állapotának beállítása',
  'help.guide.place-status.goal': 'Tartsd számon, mi ötlet, mi van a rövid listán, és hol jártál már.',
  'help.guide.place-status.step.1':
    'Kattints az állapotjelzőre a helysor jobb végén. Az Ötlet Szeretnék odamenni lesz.',
  'help.guide.place-status.step.2':
    'Kattints rá újra a Meglátogatva állapothoz, és még egyszer, hogy az Ötlet állapotnál kezdd újra.',
  'help.guide.place-status.result':
    'A jelző és a színe azonnal változik; a lista fölötti állapotszűrő vele együtt számol.',
  'help.guide.place-status.tip.1': 'Az állapot Collections-dolog: egy hely utazásba másolása nem viszi magával.',
  'help.guide.place-status.tip.2':
    'Egy utazásból a Mentés listába minden listához mutat egy állapotjelzőt, amelyen a hely rajta van, a helyek panelen pedig van egy Megjelölés látogatottként művelet a kijelöléshez.',
  // place-detail
  'help.guide.place-detail.title': 'Mentett hely megnyitása',
  'help.guide.place-detail.goal': 'Láss mindent egy helyről, és cselekedj: szerkeszd, másold utazásba, távolítsd el.',
  'help.guide.place-detail.step.1':
    'Kattints egy helysorra. A részletpanel a lista mellett nyílik meg, és a térkép a helyhez gördül.',
  'help.guide.place-detail.step.2':
    'Alul ül a Szerkesztés, a Másolás utazásba és az Eltávolítás a listából; a borítón lévő kamera az automatikus fotót sajátra cseréli.',
  'help.guide.place-detail.result':
    'A Szerkesztés feloldja a nevet, kategóriát, címkéket, címet, koordinátákat, leírást és hivatkozásokat közvetlenül a panelen.',
  'help.guide.place-detail.tip.1':
    'A borító automatikusan töltődik le, ha a helynek nincs saját képe. A saját feltöltés JPG, PNG, GIF vagy WebP lehet, legfeljebb 20 MB.',
  'help.guide.place-detail.tip.2':
    'Egy megosztott lista tagjai csillagos értékelést is hagyhatnak itt, és a szűrősor értékelésszűrője az átlagot használja.',
  // labels
  'help.guide.labels.title': 'Helyek csoportosítása címkékkel',
  'help.guide.labels.goal':
    'Adj egy listának saját címkéket, például kerületeket vagy napokat, a közös kategóriákon túl.',
  'help.guide.labels.step.1': 'Nyisd meg a címkekezelőt a szűrősor címkevezérlőjéből.',
  'help.guide.labels.step.2':
    'Írj be egy nevet, válassz színt, és kattints a Címke hozzáadása gombra. A meglévő címkéket ugyanebben a párbeszédablakban nevezheted át, színezheted át vagy törölheted.',
  'help.guide.labels.step.3':
    'Kapcsold be a Jelölés funkciót, pipáld ki a helyeket, és kattints a Címke hozzárendelése gombra a kijelölési sávban. Egyetlen hely a részletpaneljén lévő Szerkesztés révén is kap címkéket.',
  'help.guide.labels.step.4':
    'Válassz egy vagy több címkét a szűrősorban, hogy a listát és a térképet a bármelyiket viselő helyekre szűkítsd.',
  'help.guide.labels.result':
    'A címkézett helyek a soron mutatják címkéiket; a címkeszűrő minden tagnak ott van, a nézőknek is.',
  'help.guide.labels.tip.1':
    'A címkék ahhoz az egy listához tartoznak, amelyben létrehozták őket. Egy hely másik listába helyezése elejti őket.',
  'help.guide.labels.tip.2': 'A címkék kezeléséhez és hozzárendeléséhez szerkesztési jog kell a listán.',
  // filter-select
  'help.guide.filter-select.title': 'Helyek szűrése és kijelölése',
  'help.guide.filter-select.goal': 'Szűkítsd le a listát, és cselekedj sok helyen egyszerre.',
  'help.guide.filter-select.step.1':
    'Használd a szűrősor legördülő menüit: állapot, kategória, minimális értékelés és rendezési sorrend. Mindegyik megmutatja, hány helyet hagyna meg.',
  'help.guide.filter-select.step.2':
    'Kattints a Jelölés gombra. Minden sor kap egy jelölőnégyzetet, és megjelenik egy kijelölési sáv.',
  'help.guide.filter-select.step.3':
    'Pipáld ki a helyeket, vagy használd az Összes kijelölése funkciót mindenre, ami éppen szűrve van, majd válaszd a Címke hozzárendelése, Áthelyezés listába, Másolás listába, Másolás utazásba vagy Törlés műveletet.',
  'help.guide.filter-select.result':
    'A műveletek egyszerre érvényesülnek az egész kijelölésre. A jobb oldali × kilép a kijelölő módból.',
  'help.guide.filter-select.tip.1':
    'Az Összes kijelölése követi a szűrőt, így a Szeretnék odamenni állapotra szűrni és mindent kijelölni a gyors mód a rövid listán való cselekvésre.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Helyek másolása utazásba',
  'help.guide.copy-to-trip.goal': 'Alakítsd a mentett helyeket megállókká az egyik utazásodon.',
  'help.guide.copy-to-trip.step.1':
    'Kapcsold be a Jelölés funkciót és pipáld ki a helyeket, vagy nyiss meg egy helyet, és használd a Másolás utazásba lehetőséget a részletpaneljén.',
  'help.guide.copy-to-trip.step.2': 'Kattints a Másolás utazásba gombra a kijelölési sávban.',
  'help.guide.copy-to-trip.step.3': 'Válaszd ki az utazást. A keresőmező leszűkíti a hosszú listát.',
  'help.guide.copy-to-trip.result':
    'A helyek annak az utazásnak a helylistájába kerülnek névvel, leírással, kategóriával, jegyzetekkel, árral, koordinátákkal, fotóval és címkékkel. A gyűjteményben semmi sem változik.',
  'help.guide.copy-to-trip.tip.1':
    'Egy megosztott lista nézői is megtehetik ezt; a listából kifelé másol, nem változtatja meg.',
  // share-list
  'help.guide.share-list.title': 'Lista megosztása valakivel',
  'help.guide.share-list.goal': 'Tervezz egy listát más emberekkel együtt ezen a TREK-en, élőben.',
  'help.guide.share-list.step.1': 'Kattints a Megosztás gombra a listád fejlécében.',
  'help.guide.share-list.step.2': 'Válaszd ki a felhasználót és egy szerepet: Néző, Szerkesztő vagy Adminisztrátor.',
  'help.guide.share-list.step.3':
    'Kattints a Meghívó küldése gombra. A személy függőben lévő meghívóként jelenik meg, amíg el nem fogadja a meghívót a listasávjában.',
  'help.guide.share-list.result':
    'Elfogadás után a lista nála a Megosztott alatt jelenik meg, és minden változás élőben szinkronizálódik. A tagok és szerepeik ugyanebben a párbeszédablakban maradnak szerkeszthetők.',
  'help.guide.share-list.tip.1':
    'A nézők nézhetnek, értékelhetnek és helyeket másolhatnak a saját utazásaikba. A szerkesztők helyeket és címkéket adnak hozzá és szerkesztenek. Az adminisztrátorok törölhetnek is.',
  'help.guide.share-list.tip.2':
    'Csak a tulajdonos hív meg és távolít el embereket; egy tag maga is elhagyhat egy megosztott listát.',
  // export-list
  'help.guide.export-list.title': 'Lista exportálása fájlként',
  'help.guide.export-list.goal':
    'Add át egy listát valakinek egy másik TREK-en, vagy vidd át egy térképes alkalmazásba.',
  'help.guide.export-list.step.1': 'Kattints az Exportálás gombra a lista fejlécében.',
  'help.guide.export-list.step.2':
    'Válaszd a TREK-lista lehetőséget egy másik TREK-hez, címkékkel és állapottal, vagy a GPX-et OsmAndhez, Organic Mapshez, egy Garminhoz és más, útpontokat olvasó alkalmazásokhoz.',
  'help.guide.export-list.result': 'A fájl letöltődik. Egy megosztott lista bármely tagja exportálhatja.',
  'help.guide.export-list.tip.1':
    'Koordináták nélküli hely nem lehet GPX-útpont; kimarad, és a TREK megmondja, hány ilyen volt.',
  'help.guide.export-list.tip.2':
    'Az értékelések, a tagok és a feltöltött fotók szándékosan itt maradnak; ehhez a TREK-hez tartoznak, nem a listához.',
  // import-file
  'help.guide.import-file.title': 'Lista importálása fájlból',
  'help.guide.import-file.goal': 'Hozz be egy TREK-listafájlt vagy egy GPX-fájlt új listaként vagy egy meglévődbe.',
  'help.guide.import-file.step.1': 'Kattints a feltöltés nyilas importgombra az Új lista mellett a listasávban.',
  'help.guide.import-file.step.2':
    'Válaszd ki a fájlt. A TREK megmutatja, mi van benne, mielőtt bármi történne: a nevet, hány hely és címke.',
  'help.guide.import-file.step.3':
    'Hagyd meg az Új lista lehetőséget, és ha szeretnéd, változtasd meg a nevet, vagy válaszd a Hozzáadás listához lehetőséget, hogy a helyeket egy általad szerkeszthető listába tedd, majd kattints az Importálás gombra.',
  'help.guide.import-file.result':
    'Az importált helyekkel a listán landolsz. A listához adás mindig csak hozzáad; a már ott lévő helyek megtartják állapotukat, jegyzeteiket és címkéiket.',
  'help.guide.import-file.tip.1':
    'GPX-ből minden nevesített útpont hellyé válik; a nyomvonalak vonalak és kimaradnak, az előnézet pedig megmondja, hány pont volt az.',
  'help.guide.import-file.tip.2':
    'Az olyan fájlt, amely se nem TREK-lista, se nem GPX, indoklással elutasítja; egyetlen olvashatatlan hely kimarad, nem az egész fájl.',
  // edit-list
  'help.guide.edit-list.title': 'Lista szerkesztése vagy törlése',
  'help.guide.edit-list.goal':
    'Változtasd meg egy lista nevét, színét, borítóját, leírását vagy hivatkozásait, vagy távolítsd el a listát.',
  'help.guide.edit-list.step.1': 'Kattints a Szerkesztés gombra a lista fejlécében. Csak a tulajdonos látja.',
  'help.guide.edit-list.step.2':
    'Változtasd meg, amit szeretnél, és kattints a Mentés gombra. A bal alsó Lista törlése egy megerősítés után eltávolítja a listát az összes helyével együtt.',
  'help.guide.edit-list.result': 'A fejléc azonnal átveszi az új színt, borítót és leírást.',
  'help.guide.edit-list.tip.1':
    'Egy lista törlése nem vonható vissza. Exportáld előbb, ha szeretnél megtartani egy másolatot.',
  // all-saved
  'help.guide.all-saved.title': 'Keresés az egész könyvtáradban',
  'help.guide.all-saved.goal': 'Nézz át egyszerre minden listát, amelyet birtokolsz.',
  'help.guide.all-saved.step.1':
    'Kattints az Összes mentett elemre a listasávban. Egyesíti minden általad birtokolt vagy társtulajdonolt lista helyeit.',
  'help.guide.all-saved.step.2':
    'Használd a keresőmezőt és a szűrőket, mint bármely listán; a Jelölés itt is működik, utazásba másoláshoz.',
  'help.guide.all-saved.result':
    'Egyetlen nézet az összes mentett helyedre, hozzáadás vagy importálás nélkül, mivel nincs egyetlen lista, amelyre tehetné őket.',
  'help.guide.all-saved.tip.1':
    'A címkék listánként vannak, ezért a címkeszűrő nem elérhető az Összes mentett nézetben.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Útinaplók',
  'help.ctx.journey.summary':
    'Az útinapló a fotóközpontú utazási naplód. Minden útinapló egy vagy több utazáshoz kötődik, és napról napra nő a történetet, fotókat, hangulatot és időjárást tartalmazó bejegyzésekből. Ez a képernyő az útinaplóidat sorolja fel; nyiss meg egyet az íráshoz.',
  'help.ctx.journey.bullet.1':
    'A felső szalag a folyamatban lévő vagy a legutóbbi útinaplódat mutatja a bejegyzések, fotók és helyek számával. Az Írás folytatása a mai napon nyitja meg.',
  'help.ctx.journey.bullet.2':
    'Alatta útinaplónként egy kártya borítóval, alcímmel, dátumokkal és számokkal. Kattints egy kártyára a megnyitásához.',
  'help.ctx.journey.bullet.3': 'A rács utolsó kártyája, az Új útinapló létrehozása, az utazásaidból indít egyet.',
  // create-journey
  'help.guide.create-journey.title': 'Útinapló létrehozása',
  'help.guide.create-journey.goal': 'Indíts naplót egy utazáshoz úgy, hogy az utazás helyei már javaslatként várnak.',
  'help.guide.create-journey.step.1': 'Kattints az Új útinapló létrehozása kártyára, a rács utolsó kártyájára.',
  'help.guide.create-journey.step.2':
    'Adj neki nevet és, ha szeretnél, alcímet, majd pipáld ki az utazásokat, amelyekhez tartozik. A számláló megmondja, hány hely kerül be.',
  'help.guide.create-journey.step.3': 'Kattints az Útinapló létrehozása gombra.',
  'help.guide.create-journey.result':
    'A napló megnyílik. A kapcsolt utazások minden helye javaslatként ül az idővonalon, minden napra egy, amelyen szerepel, készen arra, hogy beleírj.',
  'help.guide.create-journey.tip.1': 'További utazásokat később az Útinapló beállításai alatt kapcsolhatsz hozzá.',
  'help.guide.create-journey.tip.2': 'Utazás nélküli útinapló is működik; a bejegyzéseket akkor kézzel adod hozzá.',
  // open-journey
  'help.guide.open-journey.title': 'Útinapló megnyitása',
  'help.guide.open-journey.goal': 'Juss be egy naplóba, és tudd, hol nyílik meg.',
  'help.guide.open-journey.step.1':
    'Kattints egy kártyára. Mindegyik mutatja a borítót, a dátumokat, és hogy hány bejegyzést, fotót és helyet tartalmaz az útinapló.',
  'help.guide.open-journey.result':
    'A folyamatban lévő útinapló a mai napon nyílik meg, vagy a mai nap előtti utolsó bejegyzésnél, ha még nincs semmi írva; a befejezett az elején nyílik.',
  'help.guide.open-journey.tip.1':
    'A borító az útinapló első fotója, hacsak nem állítasz be egyet az Útinapló beállításai alatt.',
  // continue-writing
  'help.guide.continue-writing.title': 'A folyamatban lévő útinapló folytatása',
  'help.guide.continue-writing.goal': 'Ugorj egyenesen annak az útinaplónak a mai oldalára, amelyen épp vagy.',
  'help.guide.continue-writing.step.1':
    'Kattints a felső szalagon az Írás folytatása gombra. A szalag a folyamatban lévő útinaplót mutatja, vagy a legutóbbit, ha nincs ilyen.',
  'help.guide.continue-writing.result':
    'A napló a mai napon nyílik meg, vagy a mai nap előtti utolsó bejegyzésnél, ha még nincs semmi írva.',
  'help.guide.continue-writing.tip.1':
    'A szalag javaslatot is tesz egy olyan utazásra, amelynek még nincs útinaplója; az Elvetés elrejti azt.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Napló',
  'help.ctx.journey-detail.summary':
    'Egy megnyitott útinapló: balra az idővonal napról napra, jobbra a térkép minden bejegyzéssel és a kapcsolt utazások helyeivel. Minden, ami hozzáad a naplóhoz, felül van; a fejléc tartja a számokat, a Studiót, a javaslatkapcsolót és az Útinapló beállításait.',
  'help.ctx.journey-detail.bullet.1':
    'Fejléc: borító, cím és alcím, a napok, helyek, bejegyzések és fotók száma, jobbra pedig a Studio, a javaslatkapcsoló és az Útinapló beállításai.',
  'help.ctx.journey-detail.bullet.2':
    'Eszköztár: az Idővonal és a Galéria fül, a Keresés ebben az útinaplóban és a Bejegyzés hozzáadása.',
  'help.ctx.journey-detail.bullet.3':
    'Idővonal: naponként egy szakasz, benne egy + a bejegyzés hozzáadásához azon a napon; bejegyzéskártyák fotókkal, hangulattal, időjárással és történettel; az utazásokból származó javaslatok világosabb stílusban, Javaslat elvetése gombbal.',
  'help.ctx.journey-detail.bullet.4':
    'Térkép: a bejegyzések tűként, dátum szerint szaggatott vonallal összekötve, az utazások helyei és az azokba az utazásokba importált GPX-nyomvonalak.',
  'help.ctx.journey-detail.bullet.5':
    'Útinapló beállításai: borító, név és alcím, nyomvonalak a térképen, a bejegyzés mezői, elvetett javaslatok, kapcsolt utazások, közreműködők, nyilvános megosztás, archiválás és törlés.',
  'help.ctx.journey-detail.bullet.6':
    'Hosszú idővonal fölött két kerek gomb lebeg: vissza a tetejére, és ugrás az utolsó bejegyzésre.',
  // add-entry
  'help.guide.add-entry.title': 'Bejegyzés írása',
  'help.guide.add-entry.goal': 'Add hozzá egy nap történetét címmel, szöveggel, hangulattal és időjárással.',
  'help.guide.add-entry.step.1':
    'Kattints az eszköztáron a Bejegyzés hozzáadása gombra, vagy egy nap fejlécében a + jelre, hogy azon a napon kezdj.',
  'help.guide.add-entry.step.2':
    'Adj nevet a pillanatnak, és írd meg a történetet. A szöveg fölötti eszköztár félkövért, dőltet, címsorokat, idézeteket, linkeket és listákat ad hozzá Markdownban.',
  'help.guide.add-entry.step.3':
    'Válassz hangulatot és időjárást, ellenőrizd a dátumot, és ha szeretnéd, tűzz ki helyszínt: keress egy helyet, vagy használd a jelenlegi helyzetedet.',
  'help.guide.add-entry.step.4': 'Kattints a Mentés gombra.',
  'help.guide.add-entry.result':
    'A bejegyzés a saját napján jelenik meg az idővonalon és tűként a térképen. A számai frissülnek a fejlécben.',
  'help.guide.add-entry.tip.1': 'Egy javaslatba írni ugyanaz a szerkesztő, csak a hely már be van állítva.',
  'help.guide.add-entry.tip.2':
    'Az alul lévő címkék szabad szövegek, rejtett kincs vagy legjobb étkezés, és a keresés megtalálja őket.',
  // entry-photos
  'help.guide.entry-photos.title': 'Fotók és videók hozzáadása egy bejegyzéshez',
  'help.guide.entry-photos.goal': 'Tegyél képeket egy napra; az első lesz a bejegyzés borítója.',
  'help.guide.entry-photos.step.1':
    'Nyisd meg egy bejegyzés menüjét a kártyáján lévő ⋯ jellel, és válaszd a Szerkesztés lehetőséget.',
  'help.guide.entry-photos.step.2':
    'Kattints a Fotók feltöltése gombra, és válaszd ki a fájlokat. A Galériából az útinapló galériájában már meglévő képeket veszi; az External photos egy csatlakoztatott Immich vagy Synology könyvtárban keres arra a napra.',
  'help.guide.entry-photos.step.3':
    'Vidd az egeret egy kép fölé a Legyen az 1. gombért a borító kiválasztásához, majd kattints a Mentés gombra.',
  'help.guide.entry-photos.result': 'A fotók megjelennek a kártyán és a galériában; az első mindenhol a bélyegkép.',
  'help.guide.entry-photos.tip.1':
    'Videók ugyanígy kerülnek egy bejegyzésre: mp4, m4v, webm vagy mov 500 MB-ig, a feltöltött formában tárolva.',
  'help.guide.entry-photos.tip.2':
    'Az iPhone-ról származó HEIC fájlok feltöltéskor JPEG-gé alakulnak, ami elveszíti a GPS- és kameraadataikat.',
  // suggestions
  'help.guide.suggestions.title': 'A javaslatok használata vagy elvetése',
  'help.guide.suggestions.goal':
    'Alakítsd az utazásaid helyeit bejegyzésekké, és takarítsd el azokat, amelyekről nem fogsz írni.',
  'help.guide.suggestions.step.1':
    'A javaslat egy világosabb kártya, a hely nevével dőlt betűvel. Kattints rá, hogy megnyisd a szerkesztőt már beállított hellyel és nappal.',
  'help.guide.suggestions.step.2':
    'Kattints a Javaslat elvetése gombra egy kártyán, amelyet nem fogsz használni. Törlés nélkül hagyja el az idővonalat, és az utazásszinkron nem ajánlja fel újra.',
  'help.guide.suggestions.step.3':
    'Meggondoltad magad? Az Útinapló beállításai mutatja, hány van elvetve, és az Elvetett javaslatok visszahozása mindet visszahozza.',
  'help.guide.suggestions.result':
    'Az idővonalon csak az marad, amit meg akarsz írni; a fejléc kapcsolója olvasás közben egyszerre rejti el az összes javaslatot.',
  'help.guide.suggestions.tip.1': 'Egy két napon át tartó hely mindkettőn ad egy javaslatot.',
  'help.guide.suggestions.tip.2': 'A javaslatok sosem számítanak a statisztikába; csak a megírt bejegyzések.',
  // add-on-day
  'help.guide.add-on-day.title': 'Bejegyzés hozzáadása egy korábbi naphoz',
  'help.guide.add-on-day.goal': 'Írj egy már elmúlt napról anélkül, hogy utólag javítanod kellene a dátumot.',
  'help.guide.add-on-day.step.1': 'Kattints annak a napnak a fejlécében a + jelre.',
  'help.guide.add-on-day.step.2': 'A szerkesztő azzal a dátummal nyílik meg. Írj, és Mentés, mint máskor.',
  'help.guide.add-on-day.result': 'A bejegyzés azonnal a megfelelő napra kerül.',
  'help.guide.add-on-day.tip.1': 'Egy napon belül a bejegyzés menüjének nyilai korábbra vagy későbbre mozgatják.',
  // pros-cons
  'help.guide.pros-cons.title': 'Értékelés hozzáadása',
  'help.guide.pros-cons.goal': 'Foglald össze a napot azzal, ami remek volt, és ami nem.',
  'help.guide.pros-cons.step.1':
    'A szerkesztőben keresd meg az Előnyök és hátrányok részt a történet alatt. Írj egy pontot az Előnyök vagy a Hátrányok mezőbe, és használd a Még egy hozzáadása gombot a következőhöz.',
  'help.guide.pros-cons.step.2': 'Mentés. Az értékelés két rövid listaként jelenik meg a kártyán.',
  'help.guide.pros-cons.result': 'Hüvelykujj fel és hüvelykujj le egy pillantásra, a történet alatt.',
  'help.guide.pros-cons.tip.1':
    'Az az útinapló, amelyik nem használ értékelést, az Útinapló beállításai alatt A bejegyzés mezői résznél kapcsolhatja ki a szakaszt.',
  // search-journey
  'help.guide.search-journey.title': 'Keresés egy hosszú naplóban',
  'help.guide.search-journey.goal': 'Juss el a keresett bejegyzéshez anélkül, hogy heteken át görgetnél.',
  'help.guide.search-journey.step.1':
    'Írj az eszköztár Keresés ebben az útinaplóban mezőjébe. Az idővonal gépelés közben szűr címek, történetek, helyek és címkék szerint. Az ékezetek és a kis- és nagybetűk nem számítanak.',
  'help.guide.search-journey.step.2':
    'A fejléc javaslatkapcsolója olvasás közben elrejti a meg nem írt kártyákat. Ha az idővonal hosszú, két kerek gomb lebeg az alsó széle fölött: vissza a tetejére, és ugrás az utolsó bejegyzésre.',
  'help.guide.search-journey.result': 'Csak az egyező bejegyzések maradnak; töröld a mezőt, hogy újra mindent láss.',
  'help.guide.search-journey.tip.1':
    'A folyamatban lévő útinapló a mai napon nyílik meg, így az aktuális oldal általában már látható.',
  'help.guide.search-journey.tip.2':
    'A címkék is számítanak: a rejtett kincs keresése minden ezzel címkézett bejegyzést megtalál.',
  // gallery-map
  'help.guide.gallery-map.title': 'A galéria és a térkép böngészése',
  'help.guide.gallery-map.goal': 'Lásd az egész útinaplót képekként és helyekként a térképen.',
  'help.guide.gallery-map.step.1':
    'Válts az eszköztáron a Galéria fülre: minden bejegyzés minden fotója, plusz a közvetlenül a galériába feltöltött képek. Kattints egyre a lightboxért.',
  'help.guide.gallery-map.step.2':
    'A jobb oldali térkép a bejegyzéseket tűként mutatja dátum szerint, a kapcsolt utazások helyeit és az azokba az utazásokba importált GPX-nyomvonalakat abban a színben, amely a tervezőben van.',
  'help.guide.gallery-map.result':
    'Vidd az egeret egy nyomvonal fölé a nevéért. A bejegyzések közti szaggatott vonalat a TREK rajzolja; a nyomvonal az az útvonal, amelyet valóban rögzítettél.',
  'help.guide.gallery-map.tip.1': 'A nyomvonalak egy útinaplóhoz az Útinapló beállításai alatt kapcsolhatók ki.',
  'help.guide.gallery-map.tip.2':
    'A helyszínnel rendelkező galériafotók a nyilvános térképen is megjelennek, ha a Galéria és a Térkép is meg van osztva.',
  // entry-fields
  'help.guide.entry-fields.title': 'A bejegyzés mezőinek kikapcsolása',
  'help.guide.entry-fields.goal': 'Tartsd a szerkesztőt annál, amit ez az útinapló használ.',
  'help.guide.entry-fields.step.1': 'Nyisd meg az Útinapló beállításait a fejlécből.',
  'help.guide.entry-fields.step.2':
    'A bejegyzés mezői alatt kapcsold ki a Hangulat, az Időjárás vagy az Előnyök és hátrányok kapcsolót.',
  'help.guide.entry-fields.result':
    'A szerkesztő nem kérdez rájuk többé. Semmi megírt nem vész el: egy mező visszakapcsolása előhozza a tárolt értékeket, a megosztott napló pedig ugyanezeket a mezőket rejti el.',
  'help.guide.entry-fields.tip.1': 'A kapcsolók útinaplónként érvényesek, így egy munkaút és egy nyaralás eltérhet.',
  // link-trip
  'help.guide.link-trip.title': 'Másik utazás hozzákapcsolása',
  'help.guide.link-trip.goal': 'Hozd be egy második utazás helyeit javaslatként a naplóba.',
  'help.guide.link-trip.step.1': 'Nyisd meg az Útinapló beállításait a fejlécből.',
  'help.guide.link-trip.step.2': 'A kapcsolt utazások alatt kattints az Út hozzáadása gombra.',
  'help.guide.link-trip.step.3': 'Válaszd ki az utazást.',
  'help.guide.link-trip.result':
    'A helyei javaslatként érkeznek az idővonalra a saját napjaikon, a GPX-nyomvonalai pedig felkerülnek a térképre.',
  'help.guide.link-trip.tip.1': 'A kapcsolt utazás melletti × újra leválasztja; a megírt bejegyzéseid maradnak.',
  'help.guide.link-trip.tip.2': 'A napos bejegyzések csak egyszer számítanak, akárhány utazás fedi is azt a napot.',
  // share-public
  'help.guide.share-public.title': 'Az útinapló nyilvános megosztása',
  'help.guide.share-public.goal': 'Adj TREK-fiók nélküli embereknek egy csak olvasható linket.',
  'help.guide.share-public.step.1': 'Nyisd meg az Útinapló beállításait, és keresd meg a Nyilvános megosztás részt.',
  'help.guide.share-public.step.2': 'Kattints a Megosztó link létrehozása gombra.',
  'help.guide.share-public.step.3':
    'Válaszd ki, mit látnak a látogatók: az Idővonal, a Galéria és a Térkép külön kapcsolók. A Másolás a vágólapra teszi a linket.',
  'help.guide.share-public.result':
    'Bárki a linkkel a bekapcsolt szakaszokat látja, és semmi mást; A bejegyzés mezői alatt kikapcsolt mezők ott is rejtve maradnak.',
  'help.guide.share-public.tip.1':
    'A fotók csak akkor jelennek meg a nyilvános térképen, ha a Galéria és a Térkép is be van kapcsolva; kikapcsolt Térkép mellett a koordinátáik eltávolításra kerülnek, mielőtt elhagynák a szervert.',
  'help.guide.share-public.tip.2': 'Ugyanott töröld a linket a megosztás befejezéséhez.',
  // contributors
  'help.guide.contributors.title': 'Írás közösen',
  'help.guide.contributors.goal': 'Engedd, hogy egy útitárs saját bejegyzéseket és fotókat adjon hozzá.',
  'help.guide.contributors.step.1': 'Nyisd meg az Útinapló beállításait, és görgess a közreműködőkhöz.',
  'help.guide.contributors.step.2':
    'Kattints a Közreműködő meghívása gombra, és keresd meg a felhasználót név vagy e-mail alapján.',
  'help.guide.contributors.step.3': 'Válassz szerepet, és erősítsd meg.',
  'help.guide.contributors.result':
    'Az útinapló megjelenik a listájukban, és a bejegyzéseik az ő nevüket viselik. Egy közreműködőt a mellette lévő × jellel távolíthatsz el.',
  'help.guide.contributors.tip.1':
    'A közreműködők az ezen a TREK-en lévő embereknek valók. Mindenki másnak ott a nyilvános link.',
  // studio
  'help.guide.studio.title': 'Az útinapló kirakása fotókönyvként',
  'help.guide.studio.goal': 'Alakítsd a naplót nyomtatható oldalakká.',
  'help.guide.studio.step.1': 'Kattints a fejlécben a Studio gombra. A tervező az útinapló fölött nyílik meg.',
  'help.guide.studio.step.2': 'A felső sáv bal oldalán az útinapló neve a visszaút; oda tesz le, ahol voltál.',
  'help.guide.studio.result':
    'Balra az oldalsáv, a munkapadon az oldalpár, jobbra a tulajdonságok. Az Auto layout a bejegyzéseidből építi fel a könyvet; az Export nyomdakész PDF-et készít.',
  'help.guide.studio.tip.1': 'A Studio legalább 1024 px széles ablakot igényel, és telefonon nem elérhető.',
  'help.guide.studio.tip.2':
    'A könyv örökli az útinapló hozzáférését: aki olvashatja az útinaplót, megnyithatja, aki szerkesztheti, menthet.',
  // archive-journey
  'help.guide.archive-journey.title': 'Útinapló archiválása vagy törlése',
  'help.guide.archive-journey.goal': 'Zárj le egy befejezett útinaplót, vagy távolíts el egyet végleg.',
  'help.guide.archive-journey.step.1': 'Nyisd meg az Útinapló beállításait.',
  'help.guide.archive-journey.step.2':
    'Alul az Út archiválása befejezi és archiváltként jelöli meg; az Út visszaállítása visszahozza. A Törlés megerősítés után az összes bejegyzéssel és fotóval együtt eltávolítja.',
  'help.guide.archive-journey.result':
    'Az archivált útinapló olvasható és megosztható marad; csak már nem a mai napon nyílik meg.',
  'help.guide.archive-journey.tip.1':
    'A törlés nem vonható vissza, és nem érinti azokat az utazásokat, amelyekhez az útinapló kapcsolva volt.',
  'help.guide.archive-journey.tip.2': 'A borító, a név és az alcím ugyanabban a párbeszédablakban van, felül.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'A TREK Studio egy útinaplót nyomtatható fotókönyvvé rendez. A napló fölött nyílik meg: balra az oldalsáv és a tartalom, középen az oldalpár, amelyen dolgozol, jobbra a tulajdonságai. Az Auto layout a bejegyzéseidből építi az első vázlatot; minden, ami utána jön, a tiéd: mozgathatod, vághatod és átstílusozhatod, minden lépéshez visszavonással.',
  'help.ctx.journey-studio.bullet.1':
    'Felső sáv: Back to the journey, Book view, Undo és Redo, Page format, Auto layout és Export. A cím melletti Mentve jelzés mondja meg, mikor van elmentve a könyv.',
  'help.ctx.journey-studio.bullet.2':
    'Bal oldali sáv öt szakasszal: Pages, Content (az útinapló fotói és bejegyzései), Elements (szöveg, alakzatok, vonalak, rácsok, keretek, ikonok), Utazás (az útinaplóból épített térképek, országok, zászlók és jelek) és Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Munkaterület: az aktuális oldalpár a kifutóval és a védőmargókkal, alatta a nagyítósáv, a Fit to view és jobbra az Oldalpár letöltése.',
  'help.ctx.journey-studio.bullet.4':
    'Properties jobbra: a kijelölt elem pozíciója és mérete, vágása és fókuszpontja, kitöltés vagy illesztés, megjelenés, sarkok, keret, rétegsorrend és zár; oldalszámok és a dokumentum, ha semmi sincs kijelölve.',
  'help.ctx.journey-studio.bullet.5':
    'A könyv egy kötött könyv alakját követi: borító, egy önálló első oldal, az oldalpárok, egy önálló utolsó oldal és a hátsó borító. Az oldalszámok az első oldaltól számolnak, és úgy nyomtatódnak, ahogy látod őket.',
  'help.ctx.journey-studio.bullet.6':
    'Többen tervezhettek egyszerre: mindenki látja a többiek mutatóját a nevükkel, és egy olyan verzió mentése, amelyet közben valaki más módosított, konfliktusként jön vissza ahelyett, hogy felülírná a munkáját.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'A könyv automatikus felépítése',
  'help.guide.studio-auto-layout.goal':
    'Kapj egy kattintással teljes első vázlatot a napló bejegyzéseiből és fotóiból.',
  'help.guide.studio-auto-layout.step.1': 'Kattints az Auto layout gombra a felső sávban.',
  'help.guide.studio-auto-layout.step.2':
    'Válaszd A teljes könyv lehetőséget: minden oldalt lecserél, a címedet és az oldalbeállításodat megtartva. Az Ez az oldal csak a képernyőn lévőt építi újra, és olyan oldalpáron kínálja fel magát, amely egy bejegyzésből született.',
  'help.guide.studio-auto-layout.step.3':
    'Nézd végig az oldalsávot. Az Undo az egész elrendezést visszaveszi, ha jobban tetszett, amid volt.',
  'help.guide.studio-auto-layout.result':
    'Bejegyzésenként egy oldalpár, sorrendben, a fotóival, címével és történetével elhelyezve helyetted. Minden elem követi a bejegyzését, amíg nem szerkeszted.',
  'help.guide.studio-auto-layout.tip.1':
    'Mindkét lehetőség közönséges visszavonási lépés, úgyhogy próbáld ki őket bátran.',
  'help.guide.studio-auto-layout.tip.2':
    'Az az elem, amelyet az Auto layout egy bejegyzéshez kötött, lépést tart a bejegyzés módosításaival, amíg hozzá nem nyúlsz a Properties alatt; az megszakítja a kapcsolatot.',
  // studio-pages
  'help.guide.studio-pages.title': 'Oldalpárok hozzáadása, mozgatása és eltávolítása',
  'help.guide.studio-pages.goal': 'Formáld a könyvet oldalról oldalra.',
  'help.guide.studio-pages.step.1':
    'Nyisd meg a Pages szakaszt a sávban. A bélyegképek a könyv sorrendben: borító, első oldal, oldalpárok, utolsó oldal, hátsó borító.',
  'help.guide.studio-pages.step.2':
    'Az alul lévő Oldal hozzáadása az utolsó oldal elé tesz egy újat; a két bélyegkép közötti + pontosan oda szúr be egyet.',
  'help.guide.studio-pages.step.3':
    'Vidd az egeret egy bélyegkép fölé a műveleteiért: Előrébb, Hátrébb, Oldal duplikálása és Oldal törlése. Kattints egy bélyegképre, hogy megnyisd azt az oldalpárt a munkaterületen.',
  'help.guide.studio-pages.result':
    'A borító, az első és utolsó oldal és a hátsó borító a helyén marad; az új oldalpárok mindig közéjük kerülnek.',
  'help.guide.studio-pages.tip.1':
    'A felső sáv Book view nézete az egész könyvet ívekként mutatja, úgy, ahogy be lesz kötve.',
  'help.guide.studio-pages.tip.2':
    'Az Oldalszámok a Properties Dokumentum része alatt kapcsolható be, amikor semmi sincs kijelölve.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Elrendezés alkalmazása egy oldalpárra',
  'help.guide.studio-layouts.goal': 'Adj egy oldalpárnak kész fotó- és szövegkeret-elrendezést.',
  'help.guide.studio-layouts.step.1':
    'Nyisd meg a Layouts szakaszt a sávban. Tizenhárom oldalpár-elrendezés, és külön készlet a borítóhoz, a hátlaphoz és az önálló oldalakhoz.',
  'help.guide.studio-layouts.step.2':
    'Kattints egyre. A munkaterületen lévő oldalpár átveszi a kereteit; a már meglévő fotóid és szövegeid beleömlenek.',
  'help.guide.studio-layouts.result':
    'Az üres keretek tartalomra várnak: húzz egy fotót a Content szakaszból az egyikre, vagy használd az Add to this page gombot.',
  'help.guide.studio-layouts.tip.1': 'Egy elrendezés ugyanolyan visszavonási lépés, mint bármelyik másik.',
  // studio-content
  'help.guide.studio-content.title': 'Fotók és bejegyzések elhelyezése egy oldalon',
  'help.guide.studio-content.goal': 'Vidd az útinapló saját anyagát az oldalpárra.',
  'help.guide.studio-content.step.1':
    'Nyisd meg a Content szakaszt a sávban. A Photos az útinapló minden képét listázza; az Entries a bejegyzéseket a szövegükkel.',
  'help.guide.studio-content.step.2':
    'Húzz egy fotót az oldalpárra vagy egy üres keretre, vagy kattints alatta az Add to this page gombra. A Fotók feltöltése olyan képeket ad hozzá, amelyek még nincsenek az útinaplóban.',
  'help.guide.studio-content.step.3':
    'Egy bejegyzés alatt a Title, a Story és a Place szövegelemként teszi az adott szöveget az oldalra; a Dátum és a koordináták jelként érkeznek, a bejegyzés fotói pedig ott vannak felsorolva.',
  'help.guide.studio-content.result':
    'A ledobott fotó fotóelemmé válik; a szöveg követi a bejegyzést, amíg nem szerkeszted.',
  'help.guide.studio-content.tip.1': 'A Content tetején lévő keresőmező mindkét listát szűri.',
  'help.guide.studio-content.tip.2':
    'Ha az asztalodról dobsz egy fájlt a munkaterületre, az egy lépésben feltölti és elhelyezi.',
  // studio-elements
  'help.guide.studio-elements.title': 'Szöveg, alakzatok és ikonok hozzáadása',
  'help.guide.studio-elements.goal': 'Díszíts egy oldalpárt a fotókon és történeteken túl.',
  'help.guide.studio-elements.step.1': 'Nyisd meg az Elements szakaszt a sávban.',
  'help.guide.studio-elements.step.2':
    'Kattints egy szövegstílusra címsorhoz vagy képaláíráshoz, egy alakzatra, egy vonalra, egy rácsra, egy keretstílusú üres keretre, vagy egy ikonra a kereshető könyvtárból. Mindegyik az oldalpár közepére kerül, mozgatásra készen.',
  'help.guide.studio-elements.result':
    'Kattints duplán egy szövegelemre, hogy beleírj; a Properties tartja a betűtípust, a vastagságot, a méretet, a térközt és az igazítást.',
  'help.guide.studio-elements.tip.1': 'A keretek üres fotóhelyek: később dobj beléjük egy képet.',
  // studio-travel
  'help.guide.studio-travel.title': 'Térkép, zászlók és számok hozzáadása',
  'help.guide.studio-travel.goal': 'Alakítsd magát az útinaplót számokká az oldalon.',
  'help.guide.studio-travel.step.1': 'Nyisd meg az Utazás szakaszt a sávban.',
  'help.guide.studio-travel.step.2':
    'Válaszd ki, mit adsz hozzá: a bejegyzések útvonaltérképét, országkörvonalakat, országlistát vagy országrácsot, zászlókat, dátum-, nap- vagy távolságjelet, vagy az egész utazás összegzését. Mindegyik az útinapló adataiból épül, és azokkal frissül.',
  'help.guide.studio-travel.result':
    'Az elem megjelenik az oldalpáron; a Properties a stílusát állítja, a térképnek pedig a területét.',
  'help.guide.studio-travel.tip.1':
    'A jelek azt a bejegyzést követik, amelyből az oldalpár született, így egy automatikusan elrendezett oldalpáron a dátumjel már azt a napot mutatja.',
  // studio-properties
  'help.guide.studio-properties.title': 'A kijelölt elem szerkesztése',
  'help.guide.studio-properties.goal': 'Mozgass, vágj, stílusozz és rétegezz egy elemet a szerkesztőpanellel.',
  'help.guide.studio-properties.step.1':
    'Kattints egy elemre az oldalpáron. Fogantyúk jelennek meg a mérethez és a forgatáshoz; húzd, hogy mozgasd.',
  'help.guide.studio-properties.step.2':
    'A jobb oldali Properties követi a kijelölést: pozíció és méret, Crop a fókuszponttal, amely eldönti, mi marad a keretben, Kitöltés vagy illesztés, Look szűrők, Corner sugár, Keret, rétegsorrend és Lock.',
  'help.guide.studio-properties.step.3':
    'A Duplikálás és a Delete a szerkesztőpanel tetején ül; a felső sáv Undo gombja bármelyiket visszavonja.',
  'help.guide.studio-properties.result':
    'A zárolt elemet már nem lehet megfogni az oldalon, ami biztonságban tartja a kész elrendezést, amíg körülötte dolgozol.',
  'help.guide.studio-properties.tip.1':
    'A Shift-kattintás több elemet jelöl ki; a szerkesztőpanel ekkor együtt szerkeszti őket.',
  'help.guide.studio-properties.tip.2':
    'Egy olyan elem szerkesztése, amelyet az Auto layout helyezett el, megszakítja a kapcsolatát a bejegyzéssel; nem követi tovább a bejegyzés későbbi változásait.',
  // studio-format
  'help.guide.studio-format.title': 'Oldalformátum kiválasztása',
  'help.guide.studio-format.goal':
    'Állítsd be a méretet, amelyben a könyv nyomtatva lesz, mielőtt az elrendezés függene tőle.',
  'help.guide.studio-format.step.1': 'Kattints a Page format gombra a felső sávban.',
  'help.guide.studio-format.step.2':
    'Válassz Square 21 × 21 cm, Square 30 × 30 cm, A4 vagy A5 landscape vagy portrait közül, vagy adj meg egyéni szélességet és magasságot milliméterben. A Kifutó és a Védőzóna alatta ül.',
  'help.guide.studio-format.result':
    'Minden oldalpár abban a méretben rajzolódik, alapértelmezés szerint 3 mm kifutóval és 5 mm védőmargóval.',
  'help.guide.studio-format.tip.1':
    'Előbb váltsd a formátumot, aztán futtasd az Auto layout funkciót; az elrendezés arra a méretre épül, amelyet talál.',
  'help.guide.studio-format.tip.2': 'Kérdezd meg a nyomdádtól a kifutó- és védőértékeiket, és azokat add meg.',
  // studio-export
  'help.guide.studio-export.title': 'A könyv exportálása PDF-ként',
  'help.guide.studio-export.goal': 'Kapj nyomdakész fájlt, vagy olyat, amit képernyőn olvasol.',
  'help.guide.studio-export.step.1': 'Kattints az Export gombra a felső sávban.',
  'help.guide.studio-export.step.2':
    'Válaszd az Önálló oldalak lehetőséget, ívenként egy lap olvasási sorrendben, ahogy a nyomda kéri, vagy a Dupla oldalak lehetőséget, egyszerre két oldal, ahogy a könyv kinyílik. A Vágójelek minden élhez hozzáadják a kifutót, és jelölik, hol kell vágni.',
  'help.guide.studio-export.step.3':
    'Kattints a Nyomtatási nézet gombra. A böngésződ megnyitja az oldalakat, a Mentés PDF-ként pedig fájllá alakítja őket.',
  'help.guide.studio-export.result':
    'Egy PDF annyi ívvel, amennyit a párbeszédablak jelzett, az általad beállított oldalformátumban.',
  'help.guide.studio-export.tip.1': 'A PDF készítése csak asztali gépen működik, akárcsak maga a Studio.',
  'help.guide.studio-export.tip.2':
    'Próbanyomathoz exportálj Dupla oldalak formában vágójelek nélkül; a nyomdának Önálló oldalak formában, vágójelekkel.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Oldalpár újrafelhasználása másik könyvben',
  'help.guide.studio-spread-file.goal': 'Vidd át a neked tetsző tervet az egyik útinapló könyvéből egy másikba.',
  'help.guide.studio-spread-file.step.1':
    'Amíg az oldalpár a munkaterületen van, kattints az Oldalpár letöltése gombra a nagyítósáv jobb végén. A fájl a tervet tartalmazza, nem a fényképeket.',
  'help.guide.studio-spread-file.step.2':
    'A másik könyvben nyisd meg a Pages szakaszt, kattints az Oldal hozzáadása melletti Importálás gombra, majd válaszd ki a fájlt.',
  'help.guide.studio-spread-file.result':
    'Az oldalpár a kereteivel és szövegstílusaival érkezik; dobd a keretekbe az új útinapló fotóit.',
  'help.guide.studio-spread-file.tip.1': 'Az olyan fájlt, amely nem oldalpárterv, indoklással utasítja el.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Beállítások',
  'help.ctx.settings.summary':
    'A személyes beállításaid, a bal oldali sávban témánként egy fül. A legtöbb kapcsoló abban a pillanatban érvényes, ahogy átbillented; az alján Mentés gombos űrlap arra vár. Itt semmi sem változtat más TREK-jén.',
  'help.ctx.settings.bullet.1':
    'Bal oldali sáv: Megjelenés, Appearance, Térkép, Értesítések, Integrációk, Offline és Fiók. A Bővítmények akkor jelenik meg, ha egy telepítve van, a Névjegy saját üzemeltetésű TREK-en.',
  'help.ctx.settings.bullet.2':
    'A Megjelenés a nyelv, a mértékegységek, a pénznem és az, amivel az alkalmazás megnyílik; az Appearance a téma, a színek, a szövegméret és az irányítópult widgetjei.',
  'help.ctx.settings.bullet.3':
    'A Térkép a rajzolómotort és stílusát választja; az Értesítések a csatornákat, amelyeken elérnek; az Integrációk a fotókönyvtárakat, API-kulcsokat és az MCP-t; az Offline azt, amit az alkalmazás ezen az eszközön tart.',
  'help.ctx.settings.bullet.4':
    'A Fiók tartalmazza a profilodat, a jelszavadat, a kétfaktoros hitelesítést, a passkey-ket és a fiókod törlését.',
  'help.ctx.settings-display.title': 'Megjelenés',
  'help.ctx.settings-display.summary':
    'Nyelv, mértékegységek és pénznem, hogyan viselkedik a térkép és a foglalások, és mivel nyílik meg a TREK. Itt minden változás azonnal érvényes.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: a felület nyelve, az időformátum, a megjelenítési pénznem, valamint a távolság- és hőmérséklet-egységek.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: foglalási útvonalak mindig a térképen, a Helyek felfedezése pirula, útvonal-optimalizálás a szállástól, elrejtett foglalási kódok és címkézett foglalási útvonalak.',
  'help.ctx.settings-display.bullet.3':
    'Indítás: a TREK az irányítópulton vagy az aktív utazáson nyíljon-e meg, és egy utazás melyik füle jöjjön fel először.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Hogyan néz ki a TREK ezen a fiókon: világos vagy sötét, a kiemelőszín, üveg és mozgás, szövegméret, és mely widgeteket mutatja az irányítópult. Minden élőben érvényes, minden eszközön, ahol bejelentkezel.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Világos, Sötét vagy Automatikus, és a Color scheme saját Custom accent színnel.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density és Text size, szintenként haladó méretekkel.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets: widgetenként egy kapcsoló, külön a Desktop és a Mobile számára.',
  'help.ctx.settings-appearance.bullet.4': 'Az alsó Reset to defaults mindent visszaállít.',
  'help.ctx.settings-map.title': 'Térkép',
  'help.ctx.settings-map.summary':
    'Melyik motor rajzolja a térképeket és milyen stílusban. A Leaflet a klasszikus rasztertérkép, a MapLibre token nélkül rajzol vektorcsempéket, a Mapbox 3D-épületeket és domborzatot ad hozzá a saját tokeneddel.',
  'help.ctx.settings-map.bullet.1':
    'Térkép szolgáltató: Leaflet, MapLibre vagy Mapbox, mindegyik egy sorral arról, mire van szüksége.',
  'help.ctx.settings-map.bullet.2':
    'Térkép stílus és Térkép sablon: a csempék kinézete, plusz a token vagy kulcs, amit egy szolgáltató kér.',
  'help.ctx.settings-map.bullet.3':
    'Magas minőség mód az élsimításhoz és a gömbvetülethez; a Térkép mentése írja be a választást.',
  'help.ctx.settings-notifications.title': 'Értesítések',
  'help.ctx.settings-notifications.summary':
    'Hol ér el a TREK az alkalmazáson kívül: egy ntfy-téma, egy webhook vagy egy bővítmény által adott csatorna. A csatornák alatt eseményenként egy sor dönti el, mi hová megy.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: a téma, egy opcionális saját szerver és egy opcionális hozzáférési token, a Teszt gombbal, amely azonnal küld egyet.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: egy URL, amely minden eseményt JSON-ként kap, Teszt gombbal.',
  'help.ctx.settings-notifications.bullet.3':
    'A preferencia-sorok: eseményenként, melyik csatorna van bekapcsolva. A bővítménycsatornák a Beállítás feliratot mutatják, amíg nincsenek beállítva.',
  'help.ctx.settings-integrations.title': 'Integrációk',
  'help.ctx.settings-integrations.summary':
    'Minden, ami kívülről kapcsolódik a TREK-hez: fotókönyvtárak az útinaplóhoz, API-kulcsok szkriptekhez, és az MCP végpont a tokenjeivel és OAuth klienseivel AI-asszisztensek számára.',
  'help.ctx.settings-integrations.bullet.1':
    'Fotószolgáltatók: Immich és Synology Photos, mindegyik a saját URL-jével és kulcsával, Kapcsolat tesztelése és Mentés.',
  'help.ctx.settings-integrations.bullet.2':
    'API-kulcsok: személyes kulcsok szkriptekhez és más eszközökhöz, amelyek a nevedben hívják a TREK API-t.',
  'help.ctx.settings-integrations.bullet.3':
    'MCP konfiguráció: a végpont, egy kész, másolható kliens-konfiguráció és az API tokenek.',
  'help.ctx.settings-integrations.bullet.4':
    'OAuth 2.1 kliensek: a TREK-en át bejelentkező alkalmazások, átirányítási URI-kkel, engedélyezett jogosultságokkal, gépi kliensekkel és az aktív munkamenetekkel.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Mit tart a TREK ezen az eszközön, hogy egy utazás kapcsolat nélkül is megnyíljon, és mi történik, ha egy offline tett változás ütközik egy máshol tett változással.',
  'help.ctx.settings-offline.bullet.1':
    'Offline mód: az Offline mód kényszerítése úgy viselkedteti az alkalmazást, mintha nem lenne hálózat, teszteléshez vagy forgalomkorlátos kapcsolathoz.',
  'help.ctx.settings-offline.bullet.2':
    'Felkészülés offline használatra: a Letöltés offline használatra most letölti az utazásaidat és a térképcsempéiket.',
  'help.ctx.settings-offline.bullet.3': 'Mit tároljon offline: térképcsempék be vagy ki, és utazásonként egy kapcsoló.',
  'help.ctx.settings-offline.bullet.4':
    'Szinkronizálási ütközések és Offline gyorsítótár: az ütközések stratégiája, a függő és sikertelen darabszámok, Újraszinkronizálás most és Gyorsítótár törlése.',
  'help.ctx.settings-account.title': 'Fiók',
  'help.ctx.settings-account.summary':
    'Ki vagy ezen a TREK-en és hogyan jelentkezel be: profil és avatar, jelszó, kétfaktoros hitelesítés, passkey-k, és a legalján a fiók törlése.',
  'help.ctx.settings-account.bullet.1': 'Profil: felhasználónév, e-mail és avatar, a Mentés gombbal mentve.',
  'help.ctx.settings-account.bullet.2': 'Jelszó módosítása: jelenlegi jelszó, új jelszó kétszer, Jelszó frissítése.',
  'help.ctx.settings-account.bullet.3':
    'Kétfaktoros hitelesítés (2FA) hitelesítő alkalmazással és tartalék kódokkal; Passkey-k a jelszó nélküli bejelentkezéshez.',
  'help.ctx.settings-account.bullet.4': 'Törlés a legalján, megerősítés mögött. Az utolsó admin nem törölheti magát.',
  // language-region
  'help.guide.language-region.title': 'Nyelv, mértékegységek és pénznem beállítása',
  'help.guide.language-region.goal': 'Beszéljen a TREK a te nyelveden, és számoljon úgy, ahogy te.',
  'help.guide.language-region.step.1':
    'Válaszd ki a felület nyelvét a Language & region alatt. A TREK azonnal vált, minden eszközön, ahol bejelentkezel.',
  'help.guide.language-region.step.2':
    'Alatta válaszd ki az időformátumot, a megjelenítési pénznemet, valamint a távolság- és hőmérséklet-egységeket.',
  'help.guide.language-region.result':
    'A dátumok, távolságok és pénzösszegek úgy olvashatók, ahogy várod; az utazás saját pénzneme továbbra is ott áll az átváltott összegek mellett.',
  'help.guide.language-region.tip.1':
    'A megjelenítési pénznem az utazásokon átívelő összegekhez van; minden utazás megtartja a pénznemet, amit adtál neki.',
  'help.guide.language-region.tip.2': 'A nyelv a nap- és hónapneveket is beállítja a Vacay-ben és az útinaplóban.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'A térkép és a foglalások viselkedésének hangolása',
  'help.guide.travel-map-prefs.goal': 'Döntsd el, mit mutasson alapból az utazás térképe.',
  'help.guide.travel-map-prefs.step.1':
    'A Travel & map alatt a Mindig jelenjenek meg a foglalási útvonalak a térképen tartja a járatokat és vonatokat akkor is, ha a napjuk nincs megnyitva; a Helyek felfedezése a térképen mutatja a helykereső pirulát; az Útvonal optimalizálása a szállástól ott indítja az útvonalat, ahol alszol.',
  'help.guide.travel-map-prefs.step.2':
    'A Foglalási kódok elrejtése addig rejti a visszaigazolási számokat, amíg föléjük nem viszed az egeret; az Útvonal-címkék a foglalásokhoz az útvonala mentén írja ki a foglalás nevét.',
  'help.guide.travel-map-prefs.result':
    'Az utazás térképe minden utazáson ezeket követi, amíg vissza nem billented őket.',
  'help.guide.travel-map-prefs.tip.1':
    'Ezek fiókonként érvényesek, nem utazásonként. A megosztott utazás tagjai mind a saját választásaikat látják.',
  // startup
  'help.guide.startup.title': 'Válaszd ki, mivel nyíljon meg a TREK',
  'help.guide.startup.goal': 'Ott érkezz meg, ahol a legtöbbet dolgozol, ne mindig az irányítópulton.',
  'help.guide.startup.step.1': 'Az Indítás alatt állítsd a Kezdőoldal értékét Irányítópult vagy Aktív utazás állásba.',
  'help.guide.startup.step.2':
    'A Kezdő fül választja ki, egy utazás melyik füle jöjjön fel először, amikor megnyitsz egyet.',
  'help.guide.startup.result': 'A következő bejelentkezés és a következő koppintás a logóra egyenesen oda visz.',
  'help.guide.startup.tip.1': 'Az Aktív utazás a ma zajló utazást jelenti, vagy a következőt, ha éppen nincs ilyen.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'A téma és a kiemelőszín beállítása',
  'help.guide.theme-scheme.goal':
    'Legyen a TREK világos, sötét, vagy kövesse az eszközödet, abban a színben, amit szeretsz.',
  'help.guide.theme-scheme.step.1':
    'A Theme alatt válaszd a Világos, Sötét vagy Automatikus lehetőséget. Az Automatikus az eszközödet követi.',
  'help.guide.theme-scheme.step.2':
    'Válassz Color scheme-et: Default, High contrast, Indigo, Teal, Rose, Amber, Violet vagy Custom.',
  'help.guide.theme-scheme.step.3':
    'A Custom mellett válassz kiemelőszínt az előbeállítások közül, vagy adj meg sajátot. A mellette lévő kontrasztellenőrzés megmondja, olvasható marad-e rajta a szöveg.',
  'help.guide.theme-scheme.result':
    'A gombok, linkek és kiemelések mindenhol felveszik a kiemelőszínt, minden eszközön, ahol bejelentkezel.',
  'help.guide.theme-scheme.tip.1': 'A navigációs sávban is van gyors világos-sötét kapcsoló; ugyanazt a témát állítja.',
  'help.guide.theme-scheme.tip.2':
    'A High contrast az a séma, amelyet akkor válassz, ha az alapértelmezett túl lágyan olvasható.',
  // readability
  'help.guide.readability.title': 'Olvashatóság és szövegméret igazítása',
  'help.guide.readability.goal': 'Kevesebb üveg, kevesebb mozgás, több hely vagy nagyobb betűk.',
  'help.guide.readability.step.1':
    'A Readability alatt a Transparency az üvegpaneleket tömör felületekre váltja, a Reduce motion minimálisra csökkenti az animációkat, a Density pedig Comfortable vagy Compact közül választ.',
  'help.guide.readability.step.2':
    'A Text size az Everything választással egyszerre skáláz mindent; az Advanced text sizes lehetővé teszi, hogy a címek, alcímek, a szövegtörzs és a feliratok eltérjenek.',
  'help.guide.readability.result': 'Az egész alkalmazás azonnal követi, a térképpanelekkel és az útinaplóval együtt.',
  'help.guide.readability.tip.1': 'A Reduce motion a rendszered beállítását is követi, ha békén hagyod.',
  'help.guide.readability.tip.2':
    'A szövegméret a tipográfiai szinteken át érvényesül, így semmi sem vágódik le; a már nem elférő méret új sorba tördelődik.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Az irányítópult widgetjeinek kiválasztása',
  'help.guide.dashboard-widgets.goal':
    'Csak azokat a widgeteket mutasd, amelyeket használsz, külön asztali gépen és telefonon.',
  'help.guide.dashboard-widgets.step.1':
    'A Dashboard widgets alatt kapcsold be vagy ki az egyes widgeteket a Desktop és a Mobile számára: a jobb oldali sáv egészét, pénznemet, gyűjteményeket, időzónákat, közelgő foglalásokat, Atlas-országokat és az utazási számokat.',
  'help.guide.dashboard-widgets.step.2':
    'Az alsó Reset to defaults az egész fület visszaállítja a kiindulási állapotba.',
  'help.guide.dashboard-widgets.result':
    'Az irányítópult azonnal átrendeződik; kikapcsolt jobb oldali sávval középre kerül.',
  'help.guide.dashboard-widgets.tip.1':
    'Egy bővítmény widgetjei csak addig jelennek meg, amíg az admin bekapcsolva tartja azt a bővítményt.',
  'help.guide.dashboard-widgets.tip.2':
    'Maga az irányítópult eszközönként megjegyzi a rács- vagy listanézetedet és a rendezési sorrendet.',
  // map-provider
  'help.guide.map-provider.title': 'Térképmotor és stílus kiválasztása',
  'help.guide.map-provider.goal': 'Válts a klasszikus térkép, a vektorcsempék és a Mapbox 3D-térképe között.',
  'help.guide.map-provider.step.1':
    'A Térkép szolgáltató alatt válaszd a Leaflet-et a klasszikus 2D-térképhez bármilyen rasztercsempével, a MapLibre-t az OpenFreeMap vektorcsempéihez token nélkül, vagy a Mapbox-ot vektorcsempékhez 3D-épületekkel és domborzattal.',
  'help.guide.map-provider.step.2':
    'Válassz Térkép stílus vagy Térkép sablon lehetőséget a kinézethez. A Mapbox-hoz Mapbox hozzáférési token kell, néhány raszterstílushoz CARTO API-kulcs; a mező melletti link oda vezet, ahol szerezhetsz egyet.',
  'help.guide.map-provider.step.3':
    'A Magas minőség mód élsimítást és gömbvetületet ad hozzá. Kattints a Térkép mentése gombra.',
  'help.guide.map-provider.result':
    'A TREK minden térképét, az utazásokat, az Atlast, a Gyűjteményeket és az útinaplót is a választott motor rajzolja.',
  'help.guide.map-provider.tip.1':
    'Token nélkül a Mapbox az alapértelmezett térképre esik vissza, ahelyett hogy semmit sem mutatna.',
  'help.guide.map-provider.tip.2':
    'Az offline tárolt térképcsempék attól a szolgáltatótól jönnek, amelyik a letöltéskor aktív.',
  // notification-channels
  'help.guide.notification-channels.title': 'Állítsd be, hol érnek el az értesítések',
  'help.guide.notification-channels.goal':
    'Kapd meg az utazási emlékeztetőket és az együttműködési eseményeket a telefonodon vagy egy másik eszközben.',
  'help.guide.notification-channels.step.1':
    'Az Értesítések alatt tölts ki egy Ntfy téma mezőt; add hozzá a saját Ntfy szerver URL-t és egy Hozzáférési token értéket, ha üzemeltetsz ilyet. A Teszt azonnal küld egy üzenetet.',
  'help.guide.notification-channels.step.2':
    'Vagy adj meg egy Webhook URL-t, amely minden eseményt JSON-ként kap, és ugyanígy Teszt-eld.',
  'help.guide.notification-channels.step.3':
    'Az alatta lévő sorokban kapcsold be vagy ki az egyes eseményeket csatornánként. A bővítménycsatorna Beállítás feliratot mutat, amíg a bővítmény beállításaiban be nem állítod; a Teszt küldése kipróbál egyet.',
  'help.guide.notification-channels.result':
    'Az események a bekapcsolt csatornákon mennek ki. A navigációs sáv harangja ettől függetlenül továbbra is mutatja őket az alkalmazásban.',
  'help.guide.notification-channels.tip.1':
    'Az utazásonkénti preferenciák magán az utazáson vannak, az értesítési beállításai alatt.',
  'help.guide.notification-channels.tip.2':
    'Az admin előre kitölthet mindenkinek egy alapértelmezett ntfy-szervert; a témát továbbra is te választod.',
  // photo-providers
  'help.guide.photo-providers.title': 'Fotókönyvtár csatlakoztatása',
  'help.guide.photo-providers.goal': 'Hadd húzza be az útinapló a nap fotóit az Immich-ből vagy a Synology Photos-ból.',
  'help.guide.photo-providers.step.1':
    'Az Integrációk alatt keresd meg a szolgáltató szakaszát, és add meg az URL-jét és API-kulcsát. Az Immich azt is felajánlja, hogy az útinapló feltöltéseit visszatükrözze a könyvtárba.',
  'help.guide.photo-providers.step.2': 'Kattints a Kapcsolat tesztelése, majd a Mentés gombra.',
  'help.guide.photo-providers.result':
    'A bejegyzésszerkesztő External photos füle a bejegyzés napjára keres a csatlakoztatott könyvtárban, elöl a bejegyzés helyéhez legközelebbiekkel.',
  'help.guide.photo-providers.tip.1': 'A kapcsolat a tiéd: az útinapló többi tagja a saját könyvtárát csatlakoztatja.',
  'help.guide.photo-providers.tip.2':
    'A fotóiban GPS-adat nélküli szolgáltató is működik; a lista ilyenkor időrendben van.',
  // api-keys
  'help.guide.api-keys.title': 'API-kulcs létrehozása',
  'help.guide.api-keys.goal': 'Hadd hívja egy szkript vagy másik eszköz a TREK API-t a te nevedben.',
  'help.guide.api-keys.step.1':
    'Az API-kulcsok alatt kattints a Kulcs létrehozása gombra, és adj neki olyan nevet, amely elmondja, hol fogják használni.',
  'help.guide.api-keys.step.2':
    'Másold ki a kulcsot a párbeszédablakból: egyszer jelenik meg. Töröld a kulcsot a listából, ha az eszköznek már nincs rá szüksége.',
  'help.guide.api-keys.result':
    'Az ezzel a kulccsal küldött kérések a te jogosultságaiddal járnak el; a lista mutatja, mikor jött létre és mikor használták utoljára az egyes kulcsokat.',
  'help.guide.api-keys.tip.1': 'Eszközönként egy kulcs fájdalommentessé teszi a visszavonást.',
  'help.guide.api-keys.tip.2':
    'AI-asszisztenshez inkább az MCP-t használd OAuth-tal; az API-kulcsok egyszerű HTTP-klienseknek valók.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'AI-asszisztens csatlakoztatása MCP-n keresztül',
  'help.guide.mcp-oauth.goal':
    'Adj hozzáférést az utazásaidhoz a Claude-nak, egy IDE-nek vagy egy másik MCP-kliensnek.',
  'help.guide.mcp-oauth.step.1':
    'Az MCP konfiguráció alatt másold ki az MCP végpont értékét, vagy a teljes Kliens konfiguráció blokkot olyan klienshez, amely JSON-részletet fogad.',
  'help.guide.mcp-oauth.step.2':
    'A böngészőn át bejelentkező kliensek OAuth 2.1-et használnak: Új kliens az OAuth 2.1 kliensek alatt, az Átirányítási URI-k, az Engedélyezett jogosultságok és böngésző nélküli szerverhez a Gépi kliens megadásával.',
  'help.guide.mcp-oauth.step.3':
    'A Titok megújítása és a Kliens törlése minden kliensen ott van; az Aktív OAuth munkamenetek felsorolja, mi van bejelentkezve, és visszavonhatod. Az API tokenek az Új token létrehozása gombbal a régebbi belépési út.',
  'help.guide.mcp-oauth.result':
    'A kliens azt olvashatja és módosíthatja, amit a jogosultságai engednek, a te nevedben, és minden művelet a te neved alatt jelenik meg.',
  'help.guide.mcp-oauth.tip.1':
    'A jogosultságok a biztonsági háló: csak olvasási jogot adj egy kliensnek, amíg többre nincs szüksége.',
  'help.guide.mcp-oauth.tip.2': 'Az admin az egész példányon kikapcsolhatja az MCP-t; akkor ez a szakasz nincs ott.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Utazások offline-ra vitele',
  'help.guide.offline-prepare.goal':
    'Legyenek az utazásaid és a térképeik ezen az eszközön, mielőtt megszakad a kapcsolat.',
  'help.guide.offline-prepare.step.1':
    'A Mit tároljon offline alatt hagyd bekapcsolva a Térképcsempék offline tárolása kapcsolót, és kapcsold be az utazásokat, amelyeket ezen az eszközön akarsz.',
  'help.guide.offline-prepare.step.2':
    'Kattints a Letöltés offline használatra gombra a Felkészülés offline használatra alatt. Letölti az utazásokat és a helyeik körüli csempéket.',
  'help.guide.offline-prepare.step.3':
    'Az Offline mód alatti Offline mód kényszerítése lehetővé teszi, hogy indulás előtt ellenőrizd, minden megvan-e.',
  'help.guide.offline-prepare.result':
    'Az utazások kapcsolat nélkül is megnyílnak; a változtatásaid sorban várnak, és újracsatlakozáskor kimennek.',
  'help.guide.offline-prepare.tip.1':
    'A csempék foglalják a legtöbb helyet: az Offline gyorsítótár szakasz utazásonként mutatja, mi van tárolva.',
  'help.guide.offline-prepare.tip.2':
    'Telepítsd a TREK-et alkalmazásként a böngészőből a legsimább offline indításhoz.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Döntsd el, mi nyer szinkronizálási ütközésnél',
  'help.guide.offline-conflicts.goal':
    'Válaszd ki, hogyan rendezze a TREK az offline tett változást a máshol tett változással szemben.',
  'help.guide.offline-conflicts.step.1':
    'A Szinkronizálási ütközések alatt válaszd a Kérdezz rá minden alkalommal, a Mindig az én verzióm megtartása vagy a Mindig a szerver verziójának megtartása lehetőséget.',
  'help.guide.offline-conflicts.step.2':
    'Az Offline gyorsítótár mutatja az utazásokat, a függő és sikertelen változásokat és az ütközéseket; az Újraszinkronizálás most kiküldi a sort, a Gyorsítótár törlése kiüríti az eszközt.',
  'help.guide.offline-conflicts.result':
    'Kérdezéssel az ütközés mindkét verziót megmutatja, és választhatsz; a másik kettővel csendben rendeződik.',
  'help.guide.offline-conflicts.tip.1':
    'A Gyorsítótár törlése csak az ezen az eszközön lévő másolatot távolítja el; a szerveren semmihez nem nyúl.',
  // profile
  'help.guide.profile.title': 'Profil módosítása',
  'help.guide.profile.goal': 'Frissítsd a neved, az e-mail-címed és a képed.',
  'help.guide.profile.step.1':
    'A Fiók alatt szerkeszd a Felhasználónév és az E-mail mezőt. Az avatar saját feltöltést fogad; távolítsd el, hogy visszatérj a monogramhoz.',
  'help.guide.profile.step.2': 'Kattints a Mentés gombra.',
  'help.guide.profile.result': 'A neved és a képed egyszerre frissül mindenhol, a megosztott utazásaidon is.',
  'help.guide.profile.tip.1':
    'Az OIDC-n át bejelentkező fiók ezt itt mutatja; az e-mail ilyenkor a szolgáltatótól jön.',
  // password
  'help.guide.password.title': 'Jelszó módosítása',
  'help.guide.password.goal': 'Állíts be új jelszót.',
  'help.guide.password.step.1': 'A Jelszó módosítása alatt add meg a jelenlegi jelszavad, majd kétszer az újat.',
  'help.guide.password.step.2': 'Kattints a Jelszó frissítése gombra.',
  'help.guide.password.result': 'Az új jelszó a következő bejelentkezéstől él; a többi munkamenet bejelentkezve marad.',
  'help.guide.password.tip.1': 'Az OIDC-n át bejelentkező fióknak nincs módosítható TREK-jelszava.',
  // mfa
  'help.guide.mfa.title': 'Kétfaktoros hitelesítés bekapcsolása',
  'help.guide.mfa.goal': 'Védd a fiókot egy hitelesítő alkalmazás kódjával.',
  'help.guide.mfa.step.1': 'A Kétfaktoros hitelesítés (2FA) alatt kattints a Hitelesítő beállítása gombra.',
  'help.guide.mfa.step.2':
    'Olvasd be a QR-kódot az alkalmazásoddal, vagy írd be kézzel a titkot, majd gépeld be az általa mutatott hatjegyű kódot, és kattints a 2FA engedélyezése gombra.',
  'help.guide.mfa.step.3':
    'Mentsd el a tartalék kódokat: másold, töltsd le vagy nyomtasd ki őket. Mindegyik egyszer működik, amikor nincs kéznél a telefonod.',
  'help.guide.mfa.result': 'Minden bejelentkezés a jelszó után kódot kér.',
  'help.guide.mfa.tip.1': 'A 2FA kikapcsolása a jelszavadat és egy aktuális kódot kér.',
  'help.guide.mfa.tip.2': 'Az admin mindenkitől megkövetelheti a 2FA-t; akkor itt nem kapcsolható ki.',
  // passkeys
  'help.guide.passkeys.title': 'Bejelentkezés passkey-jel',
  'help.guide.passkeys.goal': 'Használd az eszközöd ujjlenyomatát, arcát vagy PIN-jét jelszó helyett.',
  'help.guide.passkeys.step.1':
    'A Passkey-k alatt kattints a Passkey hozzáadása gombra, és erősítsd meg az eszközöddel. Adj neki olyan nevet, amely elmondja, melyik eszköz az.',
  'help.guide.passkeys.step.2':
    'A lista minden passkey-t a nevével és az utolsó használat idejével mutat; a törlés gomb eltávolít egyet.',
  'help.guide.passkeys.result': 'A bejelentkezési oldal felajánlja a passkey-t; a jelszó tartalékként megmarad.',
  'help.guide.passkeys.tip.1':
    'A passkey az eszközön vagy annak jelszókezelőjében él, ezért eszközönként adj hozzá egyet.',
  'help.guide.passkeys.tip.2':
    'A passkey-khez HTTPS kell; sima HTTP-s példányon a szakasz elmagyarázza, miért nem érhetők el.',
  // delete-account
  'help.guide.delete-account.title': 'Fiók törlése',
  'help.guide.delete-account.goal': 'Távolítsd el a fiókodat és a csak hozzád tartozó adatokat.',
  'help.guide.delete-account.step.1': 'A Fiók legalján kattints a Törlés gombra, és erősítsd meg.',
  'help.guide.delete-account.result':
    'A fiókod, a saját utazásaid és az útinaplóid eltűnnek; a másokkal megosztott utazások náluk maradnak.',
  'help.guide.delete-account.tip.1': 'Egy példány utolsó adminja nem törölheti magát; előbb tegyél mást adminná.',
  'help.guide.delete-account.tip.2': 'Nincs visszavonás. Exportáld, amit meg akarsz tartani, mielőtt megerősíted.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Adminisztráció',
  'help.ctx.admin.summary':
    'A mindenki TREK-je mögötti példány: ki és hogyan jelentkezhet be, mi van bekapcsolva, hol vannak a fájlok, hogyan éri el a szerver az embereket, és hogyan készül róla mentés. Ezt az oldalt csak adminok látják; az oldalsávban minden fül külön képernyő.',
  'help.ctx.admin.bullet.1':
    'A felső négy kártya a felhasználókat, utazásokat, helyeket és fájlokat számolja; egy szalag felettük újabb TREK-kiadást jelez.',
  'help.ctx.admin.bullet.2':
    'Felhasználók és Alapértelmezett beállítások: fiókok, meghívó linkek és a térképbeállítások, amelyekkel egy új fiók indul.',
  'help.ctx.admin.bullet.3':
    'Személyre szabás, Beállítások, Bővítmények és Pluginok: csomagolási sablonok, kategóriák és iskolai szünetek; bejelentkezési módok és API-kulcsok; a funkciómodulok; külső pluginok.',
  'help.ctx.admin.bullet.4':
    'Tárhely, Értesítések, MCP hozzáférés és GitHub: hová kerülnek a feltöltések, a példányszintű csatornák, az AI-kliensek tokenjei és munkamenetei, és a kiadási előzmények.',
  'help.ctx.admin.bullet.5':
    'Biztonsági mentés és Audit: kérésre és ütemezetten készülő mentések, és a biztonsági szempontból fontos események naplója.',
  'help.ctx.admin-users.title': 'Felhasználók',
  'help.ctx.admin-users.summary':
    'Minden fiók ezen a TREK-en, szerepkörrel, e-maillel és utolsó bejelentkezéssel, és a meghívó linkek, amelyekkel zárt példányon is lehet regisztrálni.',
  'help.ctx.admin-users.bullet.1':
    'A táblázat: felhasználónév, e-mail, szerepkör, létrehozás dátuma, utolsó belépés és a soronkénti műveletek. Te magadként vagy megjelölve.',
  'help.ctx.admin-users.bullet.2':
    'A felső Felhasználó létrehozása kézzel ad hozzá egy fiókot, egy általad átadott jelszóval.',
  'help.ctx.admin-users.bullet.3':
    'Lent a Meghívó linkek: egyszer használatos regisztrációs linkek használati korláttal, lejárattal és, ha akarod, egy utazással, amelyhez az új felhasználó érkezéskor csatlakozik.',
  'help.ctx.admin-users.bullet.4':
    'Lent a Jogosultsági beállítások: műveletenként ki teheti meg, Mindenki, Utazás tagjai, Utazás tulajdonosa vagy Csak adminisztrátor.',
  'help.ctx.admin-defaults.title': 'Alapértelmezett beállítások',
  'help.ctx.admin-defaults.summary':
    'A beállítások, amelyekkel egy új fiók indul, hogy senkinek ne kelljen először a térkép fület megkeresnie: térképszolgáltató, stílus, tokenek és minőség.',
  'help.ctx.admin-defaults.bullet.1':
    'Térképszolgáltató, Mapbox-stílus és -token, CARTO-kulcs és Mapbox-minőség, pontosan úgy, ahogy egy felhasználó a Beállítások, Térkép alatt beállítaná.',
  'help.ctx.admin-defaults.bullet.2':
    'A mezőnkénti visszaállítás a beépített alapértékre a TREK saját választását adja vissza; a felhasználó saját beállítása mindig felülírja ezeket.',
  'help.ctx.admin-config.title': 'Személyre szabás',
  'help.ctx.admin-config.summary':
    'Amit a példány minden utazása megoszt: csomagolási sablonok, a helyek és gyűjtemények kategóriakészlete, és az iskolaiszünet-katalógus, amelyből a Vacay merít.',
  'help.ctx.admin-config.bullet.1':
    'Csomagolási sablonok: nevesített kategória- és tétellisták, amelyekből egy utazás csomagolási listája kiindulhat.',
  'help.ctx.admin-config.bullet.2':
    'Kategóriák: a TREK-ben mindenhol használt kategóriák neve, ikonja és színe, a helyellenőrtől a Gyűjtemények-ig.',
  'help.ctx.admin-config.bullet.3':
    'Iskolai szünetek: az országok és régiók katalógusa azokhoz a helyekhez, amelyeket a beépített források nem fednek le.',
  'help.ctx.admin-settings.title': 'Beállítások',
  'help.ctx.admin-settings.summary':
    'Hogyan jutnak be az emberek és mivel beszélhet a szerver: bejelentkezési és regisztrációs módok, SSO, passkey-k, kétfaktoros szabály, az API-kulcsok térképekhez, helyekhez és képekhez, a kereső- és tömegközlekedési szolgáltatók, és a fájltípusok, amelyeket a feltöltések hordozhatnak.',
  'help.ctx.admin-settings.bullet.1':
    'Authentication Methods: Password Login, Password Registration, SSO Login, SSO Auto-Provisioning és Kétlépcsős hitelesítés (2FA) kötelezővé tétele.',
  'help.ctx.admin-settings.bullet.2':
    'Egyszeri bejelentkezés (OIDC) kibocsátóval, klienssel és megjelenítendő névvel; Passkey-bejelentkezés a Relying Party ID (domain) és az Engedélyezett origók mezőkkel.',
  'help.ctx.admin-settings.bullet.3':
    'API kulcsok: Google Maps, Unsplash és Amap, mindegyik Teszt gombbal; a Mire használja a kulcsot a Google-kulcsot azokra a funkciókra szűkíti, amelyekért fizetni akarsz.',
  'help.ctx.admin-settings.bullet.4':
    'A Helykeresési szolgáltató és a Tömegközlekedési szolgáltató választja ki, ki válaszol a keresésekre és útvonalakra; az Engedélyezett fájltípusok korlátozza a feltöltéseket.',
  'help.ctx.admin-addons.title': 'Bővítmények',
  'help.ctx.admin-addons.summary':
    'A TREK funkciómoduljai, mindegyik egy kapcsolóval: Listák, Költségek, Dokumentumok, Vacay, Atlas, Együttműködés, Útinaplók, Gyűjtemények, Autós út, MCP, AirTrail, Dawarich és az AI-feldolgozás. A kikapcsolt azt jelenti, hogy a navigációs bejegyzés, az útvonalak és az API mindenkinél eltűnik.',
  'help.ctx.admin-addons.bullet.1':
    'Bővítményenként egy csempe a kapcsolójával és, ahol vannak, az opcióinak alsoraival.',
  'help.ctx.admin-addons.bullet.2':
    'A fotószolgáltatók és dokumentumszolgáltatók itt is csempeként jelennek meg, így az Immich vagy a Synology felkínálható a felhasználóknak.',
  'help.ctx.admin-addons.bullet.3': 'A Poggyászkövetés külön kapcsolót kap a csempék alatt.',
  'help.ctx.admin-plugins.title': 'Pluginok',
  'help.ctx.admin-plugins.summary':
    'Külső pluginok, amelyek saját folyamatban futnak a TREK mellett, mindegyik a telepítéskor kért jogosultságokkal. Telepíts a katalógusból, tölts fel egy csomagot, vagy fejlesztés közben csatolj egy mappát.',
  'help.ctx.admin-plugins.bullet.1':
    'A lista: minden telepített plugin verzióval, állapottal, aláírással és a birtokolt jogosultságokkal; soronként aktiválás, deaktiválás, frissítés vagy eltávolítás.',
  'help.ctx.admin-plugins.bullet.2':
    'A Plugin feltöltése csomagfájlt fogad; az Újraszkennelés felveszi a fejlesztéshez csatolt plugin-mappát.',
  'help.ctx.admin-plugins.bullet.3':
    'Engedélyezett hosztok pluginonként: a címek, amelyeket egy plugin hívhat, mivel a kimenő forgalom alapból tiltott.',
  'help.ctx.admin-storage.title': 'Tárhely',
  'help.ctx.admin-storage.summary':
    'Hol élnek a feltöltések: a helyi lemezen, egy S3-bucketben, vagy egy tükrön, amely mindkettőbe ír. Minden feltöltési kategória más backendre mehet, és az Állapot megmondja, válaszol-e minden backend.',
  'help.ctx.admin-storage.bullet.1':
    'Backendek: mindegyik neve és típusa, Tesztelés, Szerkesztés és Eltávolítás gombokkal; a környezet által beállított itt csak olvasható.',
  'help.ctx.admin-storage.bullet.2':
    'Kategóriák: borítók, dokumentumok, útinapló-fotók és a többi, mindegyik egy backendhez rendelve; egy megváltoztatása felajánlja a meglévő fájlok áthelyezését.',
  'help.ctx.admin-storage.bullet.3':
    'Állapot: backendenként egy ellenőrzés, és a magfájl, amely bizonyítja, hogy a konfiguráció az, amit a szerver lát.',
  'help.ctx.admin-notifications.title': 'Értesítések',
  'help.ctx.admin-notifications.summary':
    'A csatornák, amelyeket a példány a felhasználóinak kínál, és azok, amelyek téged mint admint érnek el. A felhasználók a Beállítások alatt választják saját témáikat és URL-jeiket; te döntöd el, mi létezik, és te állítod be az e-mailt.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy és Webhook: mindegyiknek egy panel, egy kapcsolóval, amely felkínálja a csatornát a felhasználóknak, és a szerveroldali beállítással, amelyre szüksége van.',
  'help.ctx.admin-notifications.bullet.2':
    'Utazási emlékeztetők: küld-e a szerver emlékeztetőt egy utazás kezdete előtt.',
  'help.ctx.admin-notifications.bullet.3':
    'Admin Ntfy és Admin webhook: hová mennek az admin események, például egy sikertelen mentés vagy egy új kiadás, tesztgombbal.',
  'help.ctx.admin-mcp-tokens.title': 'MCP hozzáférés',
  'help.ctx.admin-mcp-tokens.summary':
    'Minden token és OAuth munkamenet, amelyet AI-kliensek tartanak ehhez a TREK-hez, az összes felhasználónál, bármelyik visszavonásának lehetőségével.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'API tokenek: ki hozta létre, mikor használták utoljára, és Törlés.',
  'help.ctx.admin-mcp-tokens.bullet.2':
    'OAuth munkamenetek: a kliens, a felhasználó és a kapott jogosultságok, és Visszavonás.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Mi új a TREK-ben: a kiadási előzmények a GitHubról, az általad futtatott verzió, és hogy megjelent-e újabb. Maga a frissítés az alkalmazáson kívül, a gazdagépen történik.',
  'help.ctx.admin-github.bullet.1':
    'A Frissítési előzmények a kiadásokat sorolja fel a jegyzeteikkel; a legújabb a Legújabb jelölést viseli, és a te verziód meg van jelölve.',
  'help.ctx.admin-github.bullet.2':
    'A Frissítés elérhető a fejlécben jelenik meg, amint van újabb kiadás, a frissítés módjával Dockerhez és más telepítésekhez.',
  'help.ctx.admin-backup.title': 'Biztonsági mentés',
  'help.ctx.admin-backup.summary':
    'Teljes mentések az adatbázisról és a feltöltésekről, kézzel vagy ütemezetten készítve, a szerveren tárolva és egyetlen fájlként letölthetően. A Visszaállítás visszatesz egyet.',
  'help.ctx.admin-backup.bullet.1':
    'Adatmentés: Mentés készítése, és a meglévők listája Letöltés, Visszaállítás és törlés gombokkal.',
  'help.ctx.admin-backup.bullet.2':
    'A Mentés feltöltése egy másik példányon vagy egy korábbi napon készült fájlt hoz be.',
  'help.ctx.admin-backup.bullet.3': 'Automatikus mentés: be vagy ki, időköz, óra és nap, és hányat kell megtartani.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'A biztonsági szempontból fontos és adminisztratív események naplója: bejelentkezések és sikertelen próbálkozások, MFA-változások, felhasználó- és beállításváltozások, mentések és visszaállítások. Csak olvasható, a legújabb elöl.',
  'help.ctx.admin-audit.bullet.1':
    'Eseményenként egy sor idővel, felhasználóval, művelettel, erőforrással, IP-vel és részletekkel.',
  'help.ctx.admin-audit.bullet.2': 'A Frissítés újratölt; a Továbbiak betöltése visszafelé lapoz.',
  // create-user
  'help.guide.create-user.title': 'Felhasználó létrehozása',
  'help.guide.create-user.goal': 'Adj hozzá egy fiókot kézzel, meghívó nélkül.',
  'help.guide.create-user.step.1': 'Kattints a Felhasználó létrehozása gombra a Felhasználók fül tetején.',
  'help.guide.create-user.step.2':
    'Add meg a Felhasználónév, E-mail és Jelszó mezőket, és válaszd ki a Szerepkör értékét: Felhasználó vagy Adminisztrátor.',
  'help.guide.create-user.step.3': 'Kattints a Felhasználó létrehozása gombra.',
  'help.guide.create-user.result':
    'A fiók megjelenik a táblázatban és azonnal bejelentkezhet; a jelszót olyan csatornán add át, amelyben megbízol.',
  'help.guide.create-user.tip.1': 'Annak, aki maga választana jelszót, a meghívó link a jobb belépési út.',
  'help.guide.create-user.tip.2':
    'Az adminok látják ezt az oldalt és az auditnaplót; minden más ugyanaz mindkét szerepkörnél.',
  // edit-user
  'help.guide.edit-user.title': 'Felhasználó szerepkörének vagy jelszavának módosítása',
  'help.guide.edit-user.goal': 'Léptess elő valakit, fokozd le, vagy engedd vissza egy elveszett jelszó után.',
  'help.guide.edit-user.step.1':
    'Kattints a ceruzára a felhasználó sorában. A Felhasználó szerkesztése a fiók adataival nyílik meg.',
  'help.guide.edit-user.step.2':
    'Módosítsd a Szerepkör értékét, adj meg Új jelszó értéket, vagy kattints a Passkey-k visszaállítása gombra, ha a személy elvesztette az eszközt, amelyen a passkey-jei voltak, majd Mentés.',
  'help.guide.edit-user.result':
    'A változás a következő kérésnél érvényes; az új jelszó a következő bejelentkezéstől működik.',
  'help.guide.edit-user.tip.1': 'Nem veheted el magadtól az admin szerepkört, amíg te vagy az utolsó admin.',
  'help.guide.edit-user.tip.2':
    'A passkey-k visszaállítása megtartja a jelszót; a személy a Beállítások, Fiók alatt ad hozzá új passkey-ket.',
  // invite-links
  'help.guide.invite-links.title': 'Meghívás linkkel',
  'help.guide.invite-links.goal':
    'Engedd, hogy valaki zárt példányon regisztráljon, és ha akarod, egy utazásban landoljon.',
  'help.guide.invite-links.step.1': 'A Meghívó linkek alatt kattints a Link létrehozása gombra.',
  'help.guide.invite-links.step.2':
    'Állítsd be a Max. használat és Lejárat értékét, opcionálisan a Hozzáadás utazáshoz (opcionális) mezőt, és kattints a Létrehozás és másolás gombra.',
  'help.guide.invite-links.step.3':
    'Küldd el a linket. Minden sor mutatja, hányszor használták és ki hozta létre; a Link másolása újra kimásolja, az elhasznált vagy lejárt linkek pedig Elhasználva vagy Lejárt jelölést kapnak.',
  'help.guide.invite-links.result':
    'Aki megnyitja a linket, saját jelszóval regisztrál, és választott utazás esetén azonnal csatlakozik hozzá.',
  'help.guide.invite-links.tip.1':
    'A meghívó linkek akkor is működnek, ha a Password Registration ki van kapcsolva a Beállítások alatt.',
  'help.guide.invite-links.tip.2':
    'Egy egyszer használatos, rövid lejáratú link a legbiztonságosabb alapértelmezés egyetlen személynek.',
  // delete-user
  'help.guide.delete-user.title': 'Felhasználó törlése',
  'help.guide.delete-user.goal': 'Távolíts el egy fiókot és mindent, ami csak az övé.',
  'help.guide.delete-user.step.1':
    'Kattints a kuka ikonra a felhasználó sorában, és erősítsd meg a Felhasználó törlése műveletet.',
  'help.guide.delete-user.result':
    'A fiók, a saját utazásai és az útinaplói eltűnnek; a másokkal megosztott utazások a többi tagnál maradnak.',
  'help.guide.delete-user.tip.1': 'Nincs visszavonás. Ha nem vagy biztos benne, készíts előbb mentést.',
  'help.guide.delete-user.tip.2': 'Az utolsó admin nem törölhető; előbb tegyél mást adminná.',
  // permissions
  'help.guide.permissions.title': 'Döntsd el, ki mit tehet',
  'help.guide.permissions.goal': 'Állítsd be műveletenként, melyik szerepkör végezheti el ezen a TREK-en.',
  'help.guide.permissions.step.1':
    'A Jogosultsági beállítások alatt keresd meg a műveletet a csoportjában, például az Utazások törlése műveletet az Utazáskezelés alatt, és válaszd ki a szintet: Mindenki, Utazás tagjai, Utazás tulajdonosa vagy Csak adminisztrátor. A módosított sor testreszabott jelölést kap.',
  'help.guide.permissions.step.2':
    'Kattints a Mentés gombra. Az Alapértelmezések visszaállítása minden sort visszatesz a beépített szintre.',
  'help.guide.permissions.result':
    'A szabály egyszerre érvényes minden utazásra; a szint alatti emberek gombjai és menüi eltűnnek.',
  'help.guide.permissions.tip.1':
    'Az Utazás tulajdonosa az a személy, aki létrehozta az utazást; az adminok mindig mindent megtehetnek.',
  'help.guide.permissions.tip.2':
    'Inkább csökkents egy szintet, mint hogy törölj egy tagot: aki nem szerkeszthet, még olvashat és hozzászólhat.',
  // default-map
  'help.guide.default-map.title': 'Térkép-alapértelmezések beállítása új felhasználóknak',
  'help.guide.default-map.goal': 'Adj minden új fióknak működő térképet személyes token nélkül.',
  'help.guide.default-map.step.1':
    'A Térkép alatt válaszd ki a Térképmotor értékét, és Mapbox vagy MapLibre esetén a Térképstílus, a Megosztott Mapbox-token és a Kiváló minőségű mód értékét; rasztertérképhez a Térkép sablon és a Megosztott CARTO-kulcs értékét.',
  'help.guide.default-map.step.2':
    'Minden megváltoztatott mező mellett a visszaállítás a TREK saját választását adja vissza. A bal oldali Alapértelmezett felhasználói beállítások ugyanezt teszi a Színmód, a mértékegységek és a pénznem esetében.',
  'help.guide.default-map.result':
    'Az új fiókok ezekkel indulnak; aki a Beállítások alatt saját térképet állított be, megtartja a sajátját.',
  'help.guide.default-map.tip.1':
    'Az itt megadott tokent mindenki használja, akinek nincs sajátja, úgyhogy figyelj a kvótájára.',
  'help.guide.default-map.tip.2':
    'A meglévő fiókok, amelyek soha nem nyúltak a térkép fülhöz, szintén ezeket az alapértelmezéseket követik.',
  // packing-templates
  'help.guide.packing-templates.title': 'Csomagolási sablon összeállítása',
  'help.guide.packing-templates.goal': 'Adj az utazásoknak egy csomagolási listát kiindulásnak az üres helyett.',
  'help.guide.packing-templates.step.1': 'Kattints az Új sablon gombra, írj be egy nevet, és erősítsd meg a pipával.',
  'help.guide.packing-templates.step.2':
    'Nyisd meg a sablont és kattints a Kategória hozzáadása gombra; minden kategória alatt a + tételeket ad hozzá, és egy tételnek csak név kell.',
  'help.guide.packing-templates.step.3':
    'Minden menet közben mentődik. A ceruza átnevez egy sablont, kategóriát vagy tételt, a kuka törli.',
  'help.guide.packing-templates.result':
    'A sablon minden utazás csomagolási listáján felkínálódik; alkalmazása lemásolja a tételeket, így egy utazás szabadon módosíthatja őket.',
  'help.guide.packing-templates.tip.1': 'Utazástípusonként egy sablon, strand, város, túra, jobb egy óriási listánál.',
  'help.guide.packing-templates.tip.2': 'Egy sablon törlése nem érinti azokat az utazásokat, amelyek már alkalmazták.',
  // categories
  'help.guide.categories.title': 'A kategóriakészlet kezelése',
  'help.guide.categories.goal':
    'Döntsd el, milyen kategóriákat hordozhatnak a helyek és gyűjtemények, és hogyan nézzenek ki.',
  'help.guide.categories.step.1':
    'Kattints az Új kategória gombra, adj neki nevet, válassz ikont és színt; az Előnézet mutatja az eredményt. Kattints a Létrehozás gombra.',
  'help.guide.categories.step.2':
    'Vidd az egeret egy kategória fölé a listában a szerkesztéshez vagy törléshez. A törlés megerősítést kér.',
  'help.guide.categories.result':
    'A készlet mindenhol egyszerre érvényes: a helyellenőrben, a térképtűkön, a Gyűjtemények-ben és a szűrőkben.',
  'help.guide.categories.tip.1':
    'A helyek megtartják a kategória-azonosítójukat, így egy kategória átnevezése minden helyen átnevezi.',
  'help.guide.categories.tip.2':
    'Egy törölt kategória kategória nélkül hagyja a helyeit; ha ez számít, előbb rendeld át őket.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Iskolai szünetek kézi karbantartása',
  'help.guide.school-holiday-catalog.goal': 'Fedj le egy országot vagy régiót, amelyet a beépített szünetforrások nem.',
  'help.guide.school-holiday-catalog.step.1':
    'Az Iskolai szünetek alatt kattints az Ország hozzáadása gombra, add meg az Ország és az Országkód (pl. US) értékét, és Mentés; majd Régió hozzáadása minden eltérő részéhez.',
  'help.guide.school-holiday-catalog.step.2':
    'Kattints egy régióra a Régió vagy tankerület megnyitásához: Időszak hozzáadása, adj mindegyiknek Szünet neve, Kezdő dátum és Záró dátum értéket, és Mentés. A kuka eltávolít egy időszakot, egy régiót, vagy, ha már nincs régiója, egy országot.',
  'help.guide.school-holiday-catalog.result':
    'A felhasználók a Vacay Beállítások alatt találják meg az országot és régiót, és az évrácsukon látják az időszakokat.',
  'help.guide.school-holiday-catalog.tip.1':
    'A beépített forrásokból származó régiók itt nem szerkeszthetők; ha egy dátum hibás, adj mellé egy kézi régiót.',
  // auth-methods
  'help.guide.auth-methods.title': 'Döntsd el, hogyan jelentkeznek be az emberek',
  'help.guide.auth-methods.goal':
    'Nyisd meg vagy zárd le a jelszavas bejelentkezést, az SSO-t és a regisztrációt, és tedd kötelezővé a 2FA-t.',
  'help.guide.auth-methods.step.1':
    'Az Authentication Methods alatt kapcsold be vagy ki a Password Login és a Password Registration kapcsolót. Kikapcsolt regisztráció esetén új fiók csak meghívó linken, SSO-n vagy kézzel jön létre.',
  'help.guide.auth-methods.step.2':
    'Az SSO Login és az SSO Auto-Provisioning a lent beállított Egyszeri bejelentkezés (OIDC) meglétét igényli; az automatikus létrehozás az első SSO-bejelentkezéskor hoz létre fiókot.',
  'help.guide.auth-methods.step.3':
    'A Kétlépcsős hitelesítés (2FA) kötelezővé tétele minden jelszavas bejelentkezést hitelesítő beállítására kényszerít a következő belépéskor. A Passkey-bejelentkezés a Relying Party ID (domain) és az Engedélyezett origók mezőket igényli, vagyis a címeket, amelyeken a TREK-ed elérhető.',
  'help.guide.auth-methods.result':
    'A bejelentkezési oldal pontosan azokat a módokat kínálja, amelyeket bekapcsolva hagytál.',
  'help.guide.auth-methods.tip.1':
    'Figyelmeztetés jelenik meg, mielőtt kizárnád magad: az adminok számára legalább egy belépési út bekapcsolva marad.',
  'help.guide.auth-methods.tip.2': 'A környezeti változókkal beállított értékek itt csak olvashatóként jelennek meg.',
  // oidc
  'help.guide.oidc.title': 'Egyszeri bejelentkezés csatlakoztatása',
  'help.guide.oidc.goal': 'Engedd, hogy az emberek az identitásszolgáltatóddal jelentkezzenek be.',
  'help.guide.oidc.step.1':
    'Az Egyszeri bejelentkezés (OIDC) alatt add meg a gomb Megjelenítendő név értékét, valamint a szolgáltatódtól kapott Issuer URL, Client ID és Client Secret értékeket, majd Mentés.',
  'help.guide.oidc.step.2': 'Kapcsold be az SSO Login kapcsolót az Authentication Methods alatt.',
  'help.guide.oidc.result':
    'A bejelentkezési oldal mutatja az SSO gombot; bekapcsolt SSO Auto-Provisioning mellett az először belépők automatikusan fiókot kapnak.',
  'help.guide.oidc.tip.1':
    'A szolgáltatód által kért redirect URI a TREK-ed címe plusz az OIDC callback útvonal a dokumentációból.',
  'help.guide.oidc.tip.2':
    'A claim-leképezés dönti el, mely SSO-csoportok lesznek adminok; lásd az OIDC oldalt a dokumentációban.',
  // instance-keys
  'help.guide.instance-keys.title': 'Az API-kulcsok megadása',
  'help.guide.instance-keys.goal':
    'Oldd fel a Google helykeresést, az Unsplash-borítókat és az Amapot az egész példányon.',
  'help.guide.instance-keys.step.1':
    'Az API kulcsok alatt illeszd be a Google Maps API kulcs értékét, és kattints a Teszt gombra; a mező megmondja, válaszol-e a kulcs.',
  'help.guide.instance-keys.step.2':
    'A Mire használja a kulcsot alatt csak azokat a funkciókat kapcsold be, amelyeket erre a kulcsra akarsz számláztatni: Hely automatikus kiegészítése, Hely részletei, Helyfotók, Helyek gazdagítása, Helykeresési napló.',
  'help.guide.instance-keys.step.3':
    'Az Unsplash API-kulcs a borítókeresést hajtja; az Amap (高德地图) API-kulcs a kínai helykeresést. Mindegyiket ugyanúgy teszteld.',
  'help.guide.instance-keys.result':
    'A felhasználók saját kulcs nélkül kapják a funkciókat; Google-kulcs nélkül a TREK az ingyenes OpenStreetMap-készleten és a TREK Places API-n keresztül keres.',
  'help.guide.instance-keys.tip.1':
    'Egy felhasználó személyes kulcsa a Beállítások alatt felülírja a példánykulcsot annál a felhasználónál.',
  'help.guide.instance-keys.tip.2':
    'A kulcsok környezeti változókból is jöhetnek; azok itt csak olvashatóként jelennek meg.',
  // places-transit
  'help.guide.places-transit.title': 'A kereső- és tömegközlekedési szolgáltató kiválasztása',
  'help.guide.places-transit.goal': 'Döntsd el, ki válaszol a helykeresésekre és a tömegközlekedési útvonalakra.',
  'help.guide.places-transit.step.1':
    'A Helykeresési szolgáltató alatt válassz: Automatikus, Google Places, Amap (高德地图) vagy OpenStreetMap. Az Automatikus a létező legjobb kulcsot használja.',
  'help.guide.places-transit.step.2':
    'A Tömegközlekedési szolgáltató alatt válaszd a Transitous (ingyenes) lehetőséget, amely világszerte és kulcs nélkül működik, vagy a Google-t, amelyhez Google-kulcs kell.',
  'help.guide.places-transit.result':
    'A TREK minden keresőmezője és minden tömegközlekedési útvonala ezt a választást követi.',
  'help.guide.places-transit.tip.1':
    'A kulcs nélküli szolgáltató itt figyelmeztetést mutat, és visszaesik az OpenStreetMapre.',
  'help.guide.places-transit.tip.2': 'A Google tömegközlekedési útvonalait kérésenként számlázzák; a Transitous-t nem.',
  // file-types
  'help.guide.file-types.title': 'A fájltípusok korlátozása',
  'help.guide.file-types.goal': 'Döntsd el, milyen kiterjesztésű fájlok tölthetők fel.',
  'help.guide.file-types.step.1':
    'Az Engedélyezett fájltípusok alatt szerkeszd a vesszővel elválasztott kiterjesztéslistát, és mentsd el.',
  'help.guide.file-types.result':
    'Minden más típusú feltöltést egyértelmű üzenettel utasít el, a dokumentumokban, az útinaplóban és a borítóknál.',
  'help.guide.file-types.tip.1':
    'Hagyd a képtípusokat a listában; a borítók és az útinapló-fotók ugyanezen az ellenőrzésen mennek át.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Bővítmény be- vagy kikapcsolása',
  'help.guide.toggle-addon.goal': 'Kínálj fel egy funkciómodult mindenkinek, vagy vedd el.',
  'help.guide.toggle-addon.step.1':
    'Billentsd át a kapcsolót a bővítmény csempéjén. A navigációs bejegyzés mindenkinél egyszerre jelenik meg vagy tűnik el.',
  'help.guide.toggle-addon.step.2':
    'Néhány csempe alsorokat hordoz az opcióihoz, például a Poggyászkövetés a Listák alatt vagy a fotószolgáltatók az Útinaplók alatt; csak addig látszanak, amíg a bővítmény be van kapcsolva.',
  'help.guide.toggle-addon.result':
    'A kikapcsolt bővítmény adatai megmaradnak; a visszakapcsolás újra megmutatja őket.',
  'help.guide.toggle-addon.tip.1':
    'Az MCP kikapcsolása eltávolítja a végpontot és a tőle függő Integrációk szakaszokat.',
  'help.guide.toggle-addon.tip.2':
    'A Vacay, az Atlas és az Útinaplók a felhasználók által legtöbbször kért bővítmények; a Dokumentumok tárhelyet igényel a feltöltésekhez.',
  // install-plugin
  'help.guide.install-plugin.title': 'Plugin telepítése',
  'help.guide.install-plugin.goal': 'Adj hozzá egy külső plugint, és add meg neki pontosan a kért jogosultságokat.',
  'help.guide.install-plugin.step.1':
    'Nyisd meg a Felfedezés fület, válassz egy plugint, és kattints a Telepítés gombra; vagy kattints a Plugin feltöltése gombra, és válassz egy .zip vagy .tar.gz csomagot.',
  'help.guide.install-plugin.step.2':
    'Vissza a Telepítve alatt olvasd el a sort: mit olvashat vagy írhat a plugin, mely hosztokat hívja, és alá van-e írva. Kapcsold be a Plugin engedélyezése kapcsolót.',
  'help.guide.install-plugin.step.3':
    'A sor menüje az Újraindítás, Hibanapló megtekintése, Engedélyezett hosztok és Verzióváltás… lehetőségeket kínálja; a Törlés eltávolítja. Frissítést a sor akkor kínál, ha van újabb verzió, és az, amelyik új jogokat kér, kikapcsolva marad, amíg jóvá nem hagyod őket.',
  'help.guide.install-plugin.result':
    'A plugin saját folyamatban fut; amit hozzáad, widgetek, térképrétegek, eszközök, ott jelenik meg, ahol a plugin deklarálja.',
  'help.guide.install-plugin.tip.1': 'Az Újraszkennelés csomag nélkül veszi fel a fejlesztéshez csatolt plugin-mappát.',
  'help.guide.install-plugin.tip.2':
    'Az aláíratlan plugin ekként van megjelölve; csak akkor telepítsd, ha megbízol a forrásában.',
  // storage-backends
  'help.guide.storage-backends.title': 'Feltöltések áthelyezése S3-ra vagy tükörre',
  'help.guide.storage-backends.goal': 'Tartsd a fájlokat objektumtárolón, vagy lemezen és bucketben egyszerre.',
  'help.guide.storage-backends.step.1':
    'A Backendek alatt kattints a Backend hozzáadása gombra, adj neki Név értéket, válassz Típus értéket, Helyi, S3 vagy Tükör, töltsd ki a mezőket, és Alkalmaz. A Tesztelés ellenőrzi a kapcsolatot, a Módosítások mentése írja be.',
  'help.guide.storage-backends.step.2':
    'A Kategóriák alatt rendelj minden feltöltési kategóriát egy backendhez. Egy megváltoztatása megkérdezi, hogy Meglévő objektumok áthelyezése vagy Csak az új írások irányítása legyen.',
  'help.guide.storage-backends.step.3':
    'A felső Állapot minden backendet ellenőriz; egy piros bejegyzés megnevezi, mi hibázott.',
  'help.guide.storage-backends.result':
    'Az új feltöltések a hozzárendelt backendre mennek; az áthelyezett fájlokat onnan szolgálja ki.',
  'help.guide.storage-backends.tip.1': 'A környezeti változókkal beállított backend látszik, de itt nem szerkeszthető.',
  'help.guide.storage-backends.tip.2':
    'A tükör mindkét célba ír és az elsőből olvas; használd leállás nélküli migráláshoz.',
  // channels-instance
  'help.guide.channels-instance.title': 'Az értesítési csatornák beállítása',
  'help.guide.channels-instance.goal':
    'Döntsd el, mely csatornákat választhatják a felhasználók, és állítsd be az e-mailt.',
  'help.guide.channels-instance.step.1':
    'Az Email (SMTP) alatt add meg az SMTP Host, SMTP Port, SMTP User, SMTP Password és From Address értékeket; a Teszt e-mail küldése neked küld egy levelet.',
  'help.guide.channels-instance.step.2':
    'Kapcsold be az Ntfy és a Webhook kapcsolót a felkínálásukhoz; a felhasználók ezután a Beállítások, Értesítések alatt adják meg saját témájukat vagy URL-jüket.',
  'help.guide.channels-instance.step.3':
    'Az Utazási emlékeztetők az utazás kezdete előtti emlékeztetőt kapcsolja; az In-App mindig be van kapcsolva, és itt csak magyarázat van hozzá.',
  'help.guide.channels-instance.result': 'Minden felhasználó Értesítések füle a bekapcsolt csatornákat mutatja.',
  'help.guide.channels-instance.tip.1':
    'Az itt megadott alapértelmezett ntfy-szerver előre ki van töltve a felhasználóknak; továbbra is megadhatják a sajátjukat.',
  'help.guide.channels-instance.tip.2':
    'A plugin-csatornák maguktól megjelennek, amint aktív egy ilyen képességű plugin.',
  // admin-channels
  'help.guide.admin-channels.title': 'Admin események a telefonodra',
  'help.guide.admin-channels.goal': 'Értesülj a sikertelen mentésekről, új kiadásokról és más példányeseményekről.',
  'help.guide.admin-channels.step.1':
    'Az Admin Ntfy alatt adj meg egy témát és, ha kell, szervert és tokent; az Admin webhook alatt egy URL-t.',
  'help.guide.admin-channels.step.2':
    'Kattints a Teszt Ntfy küldése vagy a Teszt webhook küldése gombra, hogy lásd megérkezni egy üzenetet.',
  'help.guide.admin-channels.result':
    'Az admin események oda mennek, minden admin alkalmazáson belüli csengője mellett.',
  'help.guide.admin-channels.tip.1':
    'Tartsd az admin témát külön a személyesedtől, hogy egy leállás ne vesszen el az utazási csevegésben.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'AI-hozzáférés visszavonása',
  'help.guide.mcp-tokens-admin.goal':
    'Lásd és vágd el minden tokent és munkamenetet, amelyet egy AI-kliens tart, bármelyik felhasználónál.',
  'help.guide.mcp-tokens-admin.step.1':
    'Az API tokenek alatt keresd meg a tokent felhasználó és név szerint; a kuka törli, és a kliens azonnal leáll.',
  'help.guide.mcp-tokens-admin.step.2':
    'Az OAuth munkamenetek alatt ugyanez a böngészőalapú kliensekhez: kliens, felhasználó és dátum, és a kuka visszavonja a munkamenetet.',
  'help.guide.mcp-tokens-admin.result':
    'A klienst a felhasználójának újra kell csatlakoztatnia; semmi más nem változik.',
  'help.guide.mcp-tokens-admin.tip.1':
    'A jogosultságok megmondják, mit tehetett egy kliens; egy csak olvasható jogosultságot veszélytelen meghagyni.',
  'help.guide.mcp-tokens-admin.tip.2': 'Az MCP bővítmény kikapcsolása mindent egyszerre visszavon.',
  // release-history
  'help.guide.release-history.title': 'Új kiadás ellenőrzése',
  'help.guide.release-history.goal': 'Tudd, naprakész-e a TREK-ed, és mit hoz a következő verzió.',
  'help.guide.release-history.step.1':
    'Ha van újabb kiadás, a Frissítés elérhető az admin oldal tetején jelenik meg; a Megtekintés a GitHubon megnyitja, a Frissítési útmutató pedig elmagyarázza a frissítést Dockerhez és más telepítésekhez.',
  'help.guide.release-history.step.2':
    'A Frissítési előzmények minden kiadást felsorol a jegyzeteivel; a Részletek megjelenítése kibontja őket, a legújabb a Legújabb jelölést viseli, a Továbbiak betöltése pedig visszafelé lapoz.',
  'help.guide.release-history.result':
    'A frissítés a gazdagépen történik, az új image lehúzásával vagy az új tag buildelésével; az adatkönyvtár marad.',
  'help.guide.release-history.tip.1': 'Frissítés előtt készíts mentést; a Biztonsági mentés fül itt van mellette.',
  'help.guide.release-history.tip.2':
    'Az előzetes kiadások látszanak, de nem jelennek meg frissítésként, hacsak nem ilyet futtatsz.',
  // create-backup
  'help.guide.create-backup.title': 'Mentés készítése és visszaállítása',
  'help.guide.create-backup.goal':
    'Készíts pillanatképet az egész példányról, tarts másolatot máshol, és tudd visszatenni.',
  'help.guide.create-backup.step.1':
    'Az Adatmentés alatt kattints a Mentés készítése gombra. Egyetlen fájlba csomagolja az adatbázist és a feltöltéseket a szerveren.',
  'help.guide.create-backup.step.2':
    'A Letöltés a gépen kívül tart egy másolatot; a kuka törli a régieket, hogy helyet szabadítson fel.',
  'help.guide.create-backup.step.3':
    'A Visszaállítás egy mentésen, vagy a Mentés feltöltése egy fájllal, lecseréli a jelenlegi adatokat, miután a Mentés visszaállítása? egyszer rákérdezett.',
  'help.guide.create-backup.result':
    'A visszaállítás a felhasználókat, utazásokat, fájlokat és beállításokat a mentés időpontjának állapotára hozza vissza; mindenki ki lesz jelentkeztetve.',
  'help.guide.create-backup.tip.1':
    'A visszaállítás itt az egyetlen művelet, amely nem vonható vissza. Készíts előbb friss mentést.',
  'help.guide.create-backup.tip.2':
    'A mentések az adatkönyvtárban élnek; egy másik gépen lévő másolat teszi őket igazi mentéssé.',
  // auto-backup
  'help.guide.auto-backup.title': 'Mentések ütemezése',
  'help.guide.auto-backup.goal': 'Hagyd, hogy a szerver magától mentsen, és csak az utolsó néhányat tartsa meg.',
  'help.guide.auto-backup.step.1':
    'Az Automatikus mentés alatt kapcsold be az Automatikus mentés engedélyezése kapcsolót, és válaszd ki az Időköz, a Futtatás időpontja és, heti vagy havi esetén, A hét napja vagy A hónap napja értékét.',
  'help.guide.auto-backup.step.2':
    'A Régi mentések törlése ennyi idő után adja meg, meddig marad meg egy mentés; a régebbiek eltűnnek, amikor új készül.',
  'help.guide.auto-backup.result':
    'A mentések ütemezés szerint jelennek meg a listában; egy hiba eléri az admin csatornákat.',
  'help.guide.auto-backup.tip.1': 'Az időpontok a szerver időzónáját követik, amely az Audit fülön látható.',
  'help.guide.auto-backup.tip.2': 'A szerver tárhelye véges; három-öt megtartása általában elég.',
  // audit-log
  'help.guide.audit-log.title': 'Az auditnapló olvasása',
  'help.guide.audit-log.goal': 'Derítsd ki, ki mit csinált, és mikor.',
  'help.guide.audit-log.step.1':
    'Olvasd a sorokat: idő, felhasználó, művelet, erőforrás, IP és részletek, a legújabb elöl. A műveletek arról vannak elnevezve, ami történt, például bejelentkezési hiba, MFA-változás vagy visszaállítás.',
  'help.guide.audit-log.step.2': 'A Frissítés újratölti a tetejét; a Továbbiak betöltése visszafelé lapoz.',
  'help.guide.audit-log.result': 'Egy nyom, amelyet átadhatsz bárkinek, aki megkérdezi, miért változott valami.',
  'help.guide.audit-log.tip.1':
    'Az időpontok a szerver időzónájában látszanak, amely a táblázat felett van megnevezve.',
  'help.guide.audit-log.tip.2':
    'A napló csak bővíthető; itt semmit nem lehet szerkeszteni vagy törölni az alkalmazásból.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Utazás',
  'help.ctx.trip.summary':
    'Egy utazás, az egész: a terv a napjaival, térképével és helyeivel, meg a fülek a közlekedéshez, foglalásokhoz, listákhoz, költségekhez, fájlokhoz és együttműködéshez. Mindegyiknek saját súgóképernyője van ez alatt.',
  'help.ctx.trip.bullet.1':
    'A fülsor: Terv, Közlekedés, Foglalások, Listák, Költségek, Fájlok és Együttműködés. Hogy melyik fülek léteznek a TREK-eden, azt a bővítmények és pluginok döntik el.',
  'help.ctx.trip.bullet.2':
    'A Terv három oszlop: balra a napok, középen a térkép, jobbra a helyek. A foglalások és a közlekedés a terven belül élnek, a megállónál és a megállók között; a fülek felsorolják őket.',
  'help.ctx.trip.bullet.3':
    'A jobb felső Megosztás az utazás embereit nyitja meg: tagok, vendégek, a meghívó link és a csak olvasható nyilvános link.',
  'help.ctx.trip.bullet.4':
    'A címet, a dátumokat, a borítót és a pénznemet az Utazásaim alatt szerkeszted, az utazáskártya ceruzájával.',
  'help.ctx.trip.bullet.5':
    'Az oszlop belső szélén lévő nyilak összecsukják, és a helyet a térkép veszi át; az oszlop melletti vékony elválasztó a szélességét változtatja.',
  'help.ctx.trip.bullet.6': 'A napok eszköztárában a visszavonás nyíl visszaveszi a terv utolsó módosítását.',
  // add-member
  'help.guide.add-member.title': 'Tag hozzáadása',
  'help.guide.add-member.goal': 'Adj hozzáférést ehhez az utazáshoz valakinek, akinek van TREK-fiókja.',
  'help.guide.add-member.step.1': 'Kattints a jobb felső Megosztás gombra.',
  'help.guide.add-member.step.2':
    'A Felhasználó meghívása alatt válaszd ki a személyt a listából, és kattints a Meghívás gombra.',
  'help.guide.add-member.step.3':
    'A személy most a Hozzáférés alatt jelenik meg. A korona a tulajdonost jelöli; a sor végén lévő ikon újra eltávolítja a hozzáférést.',
  'help.guide.add-member.result':
    'A tag ugyanúgy látja és szerkeszti az utazást, mint te, azokon a szinteken belül, amelyeket az admin a Jogosultsági beállítások alatt megadott.',
  'help.guide.add-member.tip.1':
    'Aki hiányzik a listáról, annak még nincs TREK-fiókja: add hozzá vendégként, vagy hagyd, hogy meghívó linken keresztül regisztráljon.',
  'help.guide.add-member.tip.2':
    'A Hozzáférés melletti szám az utazás embereit számolja; a vendégek külön, lejjebb szerepelnek.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Meghívás linkkel',
  'help.guide.trip-invite-link.goal': 'Hagyd, hogy az emberek maguk csatlakozzanak az utazáshoz.',
  'help.guide.trip-invite-link.step.1':
    'Kattints a Megosztás gombra, majd a Meghívó link az utazáshoz alatt a Meghívó link létrehozása gombra.',
  'help.guide.trip-invite-link.step.2':
    'Kattints a Másolás gombra, és küldd el a linket. Bárki, akinek van TREK-fiókja és megnyitja, tagként csatlakozik.',
  'help.guide.trip-invite-link.step.3':
    'Az Újragenerálás lecseréli a linket, és a régit használhatatlanná teszi; a Letiltás kikapcsolja.',
  'help.guide.trip-invite-link.result':
    'Aki megnyitja a linket, benne van az utazásban, és megjelenik a Hozzáférés alatt.',
  'help.guide.trip-invite-link.tip.1':
    'Aki fiók nélkül van, nem tudja használni. Az admin az Adminisztráció, Felhasználók alatt oszt regisztrációs linkeket, és egyet ehhez az utazáshoz is köthet.',
  'help.guide.trip-invite-link.tip.2':
    'Használd az Újragenerálás gombot, ha egy link rossz csevegésbe került: a régi azonnal megszűnik működni.',
  // add-guest
  'help.guide.add-guest.title': 'Vendég hozzáadása fiók nélkül',
  'help.guide.add-guest.goal': 'Számíts bele valakit, aki nem használja a TREK-et.',
  'help.guide.add-guest.step.1': 'Kattints a Megosztás gombra, és görgess a Vendégek részhez.',
  'help.guide.add-guest.step.2': 'Írd be a nevet a Vendég neve mezőbe, és kattints a Vendég hozzáadása gombra.',
  'help.guide.add-guest.result':
    'A vendég hozzárendelhető költségekhez, csomagolási tételekhez és feladatokhoz, de nem tud bejelentkezni.',
  'help.guide.add-guest.tip.1':
    'A ceruza átnevezi a vendéget; a sor végén lévő ikon a részesedéseivel és hozzárendeléseivel együtt eltávolítja.',
  'help.guide.add-guest.tip.2': 'Ha a személy később fiókot kap, hívd meg tagként, és távolítsd el a vendéget.',
  // public-link
  'help.guide.public-link.title': 'Csak olvasható link közzététele',
  'help.guide.public-link.goal': 'Mutasd meg az utazást olyanoknak, akiknek nem szabad szerkeszteniük.',
  'help.guide.public-link.step.1':
    'Kattints a Megosztás gombra; jobbra, a Nyilvános link alatt pipáld ki, mit mutathat a link. A Térkép és terv mindig be van kapcsolva; a Foglalások, Csomagolás, Költségek és Csevegés rajtad múlik.',
  'help.guide.public-link.step.2': 'Kattints a Link létrehozása, majd a Másolás gombra.',
  'help.guide.public-link.step.3': 'A pipák változtathatók, amíg a link létezik; a Link törlése leállítja.',
  'help.guide.public-link.result':
    'Bárki, akinél ott a link, bejelentkezés nélkül látja a kiválasztott részeket, és semmit sem módosíthat.',
  'help.guide.public-link.tip.1':
    'A link sehol nincs felsorolva; aki birtokolja, megnyithatja, ezért kezeld jelszóként.',
  'help.guide.public-link.tip.2': 'Szerkesztési jogokhoz inkább tagként add hozzá a személyt.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Az utazás átadása vagy elhagyása',
  'help.guide.transfer-ownership.goal': 'Tegyél mást tulajdonossá, vagy lépj ki egy utazásból, amely nem a tiéd.',
  'help.guide.transfer-ownership.step.1':
    'Kattints a Megosztás gombra. A Hozzáférés alatt a tag sorában lévő korona azt a személyt teszi tulajdonossá; erősítsd meg a kérdést.',
  'help.guide.transfer-ownership.step.2':
    'A saját sorodban az Utazás elhagyása kivesz az utazásból; tulajdonosként előbb add át.',
  'help.guide.transfer-ownership.result':
    'Az új tulajdonos kezeli a tagokat, és törölheti az utazást; te sima tag maradsz.',
  'help.guide.transfer-ownership.tip.1':
    'A tulajdonos az, aki az utazást létrehozta, amíg át nem adja; az utazás törlése egyedül az övé.',
  'help.guide.transfer-ownership.tip.2':
    'A Hozzáférés eltávolítása egy másik sorban ugyanaz a gomb fordítva: a tulajdonos kivesz egy tagot.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Hely a térképnek',
  'help.guide.collapse-columns.goal': 'Csukj össze egy oszlopot, vagy adj neki nagyobb szélességet.',
  'help.guide.collapse-columns.step.1':
    'Kattints a napok oszlopának belső szélén lévő nyílra az összecsukásához; a helyet a térkép veszi át. A helyek oszlopán ugyanez a nyíl van.',
  'help.guide.collapse-columns.step.2': 'Kattints újra a nyílra, hogy visszahozd az oszlopot.',
  'help.guide.collapse-columns.step.3':
    'Húzd az oszlop és a térkép közötti vékony elválasztót az oszlop szélességének módosításához.',
  'help.guide.collapse-columns.result':
    'A szélességeket megjegyzi; az oszlopok a következő látogatáskor nyitva térnek vissza.',
  'help.guide.collapse-columns.tip.1': 'Mindkét oszlop egyszerre összecsukható, csak térképes nézethez.',
  'help.guide.collapse-columns.tip.2':
    'Telefonon nincsenek oszlopok: a Tervezés és a Helyek a térkép alján lévő két gomb.',
  // undo-change
  'help.guide.undo-change.title': 'Az utolsó módosítás visszavonása',
  'help.guide.undo-change.goal': 'Vedd vissza, amit az imént a tervvel tettél.',
  'help.guide.undo-change.step.1':
    'Kattints a visszavonás nyílra a napok feletti eszköztárban; az elemleírása megnevezi a módosítást, amelyet visszavesz.',
  'help.guide.undo-change.result': 'A terv újra olyan, amilyen volt, a nyíl pedig a következő módosításig kiszürkül.',
  'help.guide.undo-change.tip.1':
    'A visszavonás a tervre terjed ki: helyek hozzárendelése, eltávolítása, átrendezése és mozgatása, útvonal optimalizálása, helyek törlése, kategóriamódosítások és importok.',
  'help.guide.undo-change.tip.2':
    'Egy lépés mély: csak a legutóbbi módosítás vehető vissza, és egy új módosítás felülírja.',
};

export default help;
