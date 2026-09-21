import type { TranslationStrings } from '../types';

// English fallback until 'cs' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Nápověda k této obrazovce',
  'help.center.title': 'Nápověda',
  'help.center.onThisScreen': 'Na této obrazovce',
  'help.center.screens': 'Obrazovky',
  'help.center.thisScreen': 'Tato obrazovka',
  'help.center.subScreens': 'Podobrazovky: {count}',
  'help.center.subScreensLabel': 'Podobrazovky',
  'help.center.guidesCount': 'Návody: {count}',
  'help.center.goToScreen': 'Přejít na {screen}',
  'help.center.overview': 'Přehled',
  'help.center.howTo': 'Jak mohu…',
  'help.center.searchPlaceholder': 'Hledat v návodech a dokumentaci…',
  'help.center.searchEmpty': 'Pro „{query}“ nebylo nic nalezeno.',
  'help.center.searchGuides': 'Návody',
  'help.center.searchDocs': 'Dokumentace',
  'help.center.searchError': 'Hledání teď není k dispozici.',
  'help.center.back': 'Zpět',
  'help.center.close': 'Zavřít nápovědu',
  'help.center.steps': 'Kroků: {count}',
  'help.center.step': 'Krok {n}',
  'help.center.stepsLabel': 'Kroky',
  'help.center.stepOf': 'Krok {n} z {total}',
  'help.center.screenshot': 'Snímek',
  'help.center.result': 'Výsledek',
  'help.center.tips': 'Dobré vědět',
  'help.center.related': 'Související',
  'help.center.openDocs': 'Otevřít v Nápovědě a dokumentaci',
  'help.center.docsSection': 'V dokumentaci',
  'help.center.noContext': 'Pro tuto obrazovku zatím není návod.',
  'help.center.noContextHint': 'Prohledejte dokumentaci nebo nám napište, co jste hledali.',
  'help.center.feedback': 'Něco chybí?',
  'help.center.feedbackLink': 'Napište nám na GitHubu',
  'help.center.discord': 'Zeptejte se na Discordu',
  'help.center.quick': 'Rychlé',
  'help.center.guide': 'Návod',
  'help.center.tour': 'Ukázka',
  'help.center.imageAlt': 'Krok {n} návodu „{title}“',

  // ctx
  'help.ctx.dashboard.title': 'Přehled',
  'help.ctx.dashboard.summary':
    'Přehled je vstupní branou ke každé cestě. Palubní lístek nahoře zvýrazňuje cestu, která právě probíhá nebo je na řadě, řádek pod ním počítá, co jste už procestovali, a karty vypisují vše, co plánujete, archivovali jste nebo už máte za sebou.',
  'help.ctx.dashboard.bullet.1':
    'Palubní lístek: probíhající nebo příští cesta s daty, cestujícími, místy a odpočtem. Kliknutím cestu otevřete.',
  'help.ctx.dashboard.bullet.2':
    'Statistiky: navštívené země, cesty, dny na cestách a nalétaná vzdálenost napříč všemi cestami.',
  'help.ctx.dashboard.bullet.3':
    'Karty cest, filtrované na Plánované, Archivováno a Dokončeno, jako mřížka nebo seznam. Najeďte na kartu pro úpravu, duplikování, archivaci a smazání.',
  'help.ctx.dashboard.bullet.4':
    'Widgety vpravo: převodník měn, světové hodiny, nadcházející rezervace a sbírky. Každý z nich lze vypnout.',
  'help.ctx.dashboard.bullet.5': 'Karta „Nová cesta“ i tlačítko vpravo dole zakládají novou cestu.',

  // create-trip
  'help.guide.create-trip.title': 'Založit cestu',
  'help.guide.create-trip.goal': 'Začít novou cestu s názvem, daty a úvodní fotkou.',
  'help.guide.create-trip.step.1':
    'Klikněte na „Nová cesta“. Karta na konci vašich cest a tlačítko vpravo dole dělají totéž.',
  'help.guide.create-trip.step.2': 'Pojmenujte cestu. Je to jediné povinné pole; všechno ostatní lze doplnit později.',
  'help.guide.create-trip.step.3':
    'Vyberte datum začátku a konce. TREK založí jeden den na každé datum, takže je itinerář připravený k naplnění.',
  'help.guide.create-trip.step.4':
    'Volitelně: přidejte úvodní fotku. Nahrajte vlastní, přetáhněte ji sem, nebo vyhledejte destinaci na Unsplash.',
  'help.guide.create-trip.step.5': 'Klikněte na „Vytvořit novou cestu“.',
  'help.guide.create-trip.result':
    'Cesta se objeví v přehledu. Pokud je to vaše příští cesta, převezme palubní lístek nahoře.',
  'help.guide.create-trip.tip.1':
    'Data lze později změnit. Pokud už existují rezervace, TREK se zeptá, zda je posunout spolu se dny.',
  'help.guide.create-trip.tip.2':
    'Měna cesty, kterou tu zvolíte, je ta, na kterou se přepočítává každý výdaj. Zvolte měnu destinace.',

  // edit-trip
  'help.guide.edit-trip.title': 'Upravit cestu',
  'help.guide.edit-trip.goal': 'Přejmenovat cestu, změnit data nebo upravit nastavení.',
  'help.guide.edit-trip.step.1': 'Najeďte na kartu cesty (nebo palubní lístek) a klikněte na tužku.',
  'help.guide.edit-trip.step.2':
    'Změňte, co potřebujete: název, popis, data, úvodní fotku, měnu, připomínku nebo členy.',
  'help.guide.edit-trip.step.3': 'Klikněte na „Aktualizovat“.',
  'help.guide.edit-trip.result': 'Karta se ihned aktualizuje, pro každého člena cesty.',
  'help.guide.edit-trip.tip.1':
    'Posun dat u cesty, která už má rezervace, otevře druhý krok s otázkou, zda se mají posunout i rezervace.',

  // cover-image
  'help.guide.cover-image.title': 'Nastavit úvodní fotku',
  'help.guide.cover-image.goal': 'Dát cestě obrázek, který se ukáže na kartě i na palubním lístku.',
  'help.guide.cover-image.step.1': 'Otevřete formulář úprav cesty tužkou na její kartě.',
  'help.guide.cover-image.step.2':
    'V části „Úvodní obrázek“ přetáhněte fotku, klikněte pro nahrání, nebo napište destinaci do vyhledávání Unsplash.',
  'help.guide.cover-image.step.3': 'Vyberte fotku a klikněte na „Aktualizovat“.',
  'help.guide.cover-image.result': 'Fotka se uloží k cestě a zobrazí se všude, kde je cesta uvedená.',
  'help.guide.cover-image.tip.1':
    'Fotky z vyhledávání Unsplash mají automaticky uvedeného autora; vlastní nahrané soubory zůstávají na vašem serveru.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Duplikovat cestu',
  'help.guide.duplicate-trip.goal': 'Použít cestu jako šablonu pro novou.',
  'help.guide.duplicate-trip.step.1': 'Najeďte na kartu a klikněte na ikonu duplikování.',
  'help.guide.duplicate-trip.step.2': 'Přečtěte si, co se zkopíruje a co ne, a potvrďte.',
  'help.guide.duplicate-trip.result': 'Vedle originálu se objeví kopie, připravená k přejmenování a novým datům.',
  'help.guide.duplicate-trip.tip.1':
    'Dny, místa, rezervace, položky rozpočtu, balicí seznamy a poznámky ke dnům se zkopírují. Členové, chat, ankety, soubory a odkazy pro sdílení ne.',

  // archive-trip
  'help.guide.archive-trip.title': 'Archivovat a obnovit cestu',
  'help.guide.archive-trip.goal': 'Odložit cestu bez mazání a později ji vrátit.',
  'help.guide.archive-trip.step.1': 'Najeďte na kartu a klikněte na „Archivovat“.',
  'help.guide.archive-trip.step.2': 'Přepněte filtr nad kartami na „Archivováno“, abyste ji znovu viděli.',
  'help.guide.archive-trip.step.3': 'Klikněte na kartě na „Obnovit“ a cesta se vrátí mezi „Plánované“.',
  'help.guide.archive-trip.result':
    'Archivované cesty si zachovají vše. Jen už nezabírají místo v přehledu a v kalendářovém kanálu všech cest.',

  // delete-trip
  'help.guide.delete-trip.title': 'Smazat cestu',
  'help.guide.delete-trip.goal': 'Cestu nadobro odstranit.',
  'help.guide.delete-trip.step.1': 'Najeďte na kartu a klikněte na koš.',
  'help.guide.delete-trip.step.2': 'Potvrďte. Dialog uvádí název cesty, abyste věděli, že mažete tu správnou.',
  'help.guide.delete-trip.result':
    'Cesta, její dny, místa, rezervace a soubory jsou pryč. Nelze to vrátit; v pochybnostech raději archivujte.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Najít dokončené cesty, přepnout mřížku a seznam',
  'help.guide.filter-and-view.goal':
    'Zobrazit dokončené nebo archivované cesty a vybrat rozložení, které vám vyhovuje.',
  'help.guide.filter-and-view.step.1':
    'Použijte „Plánované“, „Archivováno“ a „Dokončeno“ nad kartami. Dokončená je každá cesta, jejíž datum konce už minulo.',
  'help.guide.filter-and-view.step.2':
    'Kliknutím na ikonu seznamu přepnete na kompaktní seznam; dalším kliknutím zpět na mřížku.',
  'help.guide.filter-and-view.result': 'Přehled si na tomto zařízení vaše rozložení pamatuje.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Odebírat všechny cesty v kalendáři',
  'help.guide.calendar-feed.goal':
    'Vidět dny a rezervace každé aktivní cesty ve své kalendářové aplikaci, stále synchronizované.',
  'help.guide.calendar-feed.step.1': 'Klikněte na ikonu kalendáře vedle přepínače zobrazení.',
  'help.guide.calendar-feed.step.2':
    'Klikněte na „Enable calendar subscription“. TREK vytvoří soukromý odkaz na kanál.',
  'help.guide.calendar-feed.step.3':
    'Přidejte kanál jedním z tlačítek (Google, Apple, Outlook) nebo zkopírujte odkaz do libovolné kalendářové aplikace, která umí odebírat URL.',
  'help.guide.calendar-feed.result':
    'Každá aktivní cesta se objeví ve vašem kalendáři a sama se aktualizuje. Archivované cesty a cesty skončené před více než 90 dny zůstanou stranou.',
  'help.guide.calendar-feed.tip.1':
    'Odkaz je tajný. Kdokoli ho má, může kanál číst; pokud unikne, zrušte ho ve stejném dialogu.',

  // widgets
  'help.guide.widgets.title': 'Vybrat widgety přehledu',
  'help.guide.widgets.goal': 'Zobrazit nebo skrýt řádek statistik a widgety vpravo.',
  'help.guide.widgets.step.1': 'Otevřete nabídku svého avatara vpravo nahoře a zvolte „Nastavení“.',
  'help.guide.widgets.step.2': 'Přepněte na kartu „Appearance“.',
  'help.guide.widgets.step.3':
    'V části „Dashboard widgets“ zapněte nebo vypněte jednotlivé widgety. Počítač a mobil se nastavují zvlášť.',
  'help.guide.widgets.step.4': 'Vraťte se do přehledu. Změna platí okamžitě.',
  'help.guide.widgets.result':
    'Skryté widgety uvolní místo vašim cestám; vypnutím celého pravého sloupce se rozložení vycentruje.',
  'help.guide.widgets.link': 'Otevřít nastavení vzhledu',

  // currency-widget
  'help.guide.currency-widget.title': 'Převádět měny',
  'help.guide.currency-widget.goal': 'Převést částku mezi dvěma měnami podle aktuálních kurzů.',
  'help.guide.currency-widget.step.1': 'Zadejte částku a vyberte obě měny.',
  'help.guide.currency-widget.step.2': 'Šipka mezi nimi dvojici prohodí; kruhová šipka načte kurz znovu.',
  'help.guide.currency-widget.result': 'Vaše dvojice měn se pamatuje u účtu, takže je stejná na každém zařízení.',
  'help.guide.currency-widget.tip.1': 'Kurzy pocházejí z Evropské centrální banky a aktualizují se jednou denně.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Přidat světové hodiny',
  'help.guide.timezones-widget.goal': 'Mít přehled o místním čase ve svých destinacích.',
  'help.guide.timezones-widget.step.1': 'Klikněte na + ve widgetu „Časová pásma“ a vyhledejte město.',
  'help.guide.timezones-widget.step.2': 'Hodiny odeberete křížkem × vedle nich.',
  'help.guide.timezones-widget.result': 'Vaše hodiny se ukládají k vašemu účtu.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay je váš osobní plánovač dovolené: kolik dní dovolené v roce máte, které jste si zapsali a kolik zbývá. Mřížka ukazuje celý rok na jeden pohled; v postranním panelu je výběr roku, lidé, se kterými plánujete, sdílené kalendáře, legenda a váš nárok.',
  'help.ctx.vacay.bullet.1':
    'Roční mřížka: dvanáct karet měsíců, jedna buňka na den. Kliknutím den zapíšete nebo smažete. Malá modrá tečka označuje dny, které už pokrývá cesta.',
  'help.ctx.vacay.bullet.2':
    'Lišta dole: režim Dovolená nebo Firemní volno, plus přepínače Půlden a Náhradní volno, které mění, co kliknutí zapíše.',
  'help.ctx.vacay.bullet.3':
    'Nárok: vaše dny na rok, kolik je vyčerpáno a kolik zbývá, včetně převodu z minulého období.',
  'help.ctx.vacay.bullet.4':
    'Osoby jsou lidé sloučení s vaším plánem, každý ve své barvě. Sdílené kalendáře jsou kroužky jen pro čtení s volnem ostatních.',
  'help.ctx.vacay.bullet.5':
    'Nastavení pokrývá víkendy, začátek týdne, převod, váš dovolenkový rok, firemní volno a kalendáře svátků nebo školních prázdnin.',
  // log-day
  'help.guide.log-day.title': 'Zapsat den dovolené',
  'help.guide.log-day.goal': 'Označit volný den v roční mřížce a sledovat, jak se zůstatek mění.',
  'help.guide.log-day.step.1':
    'Podívejte se na lištu dole: levé tlačítko ve vaší barvě znamená, že kliknutí zapíše den dovolené pro vás.',
  'help.guide.log-day.step.2':
    'Klikněte na den v kterékoli kartě měsíce. Vyplní se vaší barvou a Vyčerpáno napočítá o den víc.',
  'help.guide.log-day.step.3': 'Kliknutím na stejný den ho zase smažete.',
  'help.guide.log-day.result':
    'Den je zapsaný, Dní, Vyčerpáno a Zbývá se hned aktualizují a kdokoli sloučený s vaším plánem to vidí živě.',
  'help.guide.log-day.tip.1': 'Víkendy nelze zapsat, dokud je v Nastavení zapnuté Blokovat víkendy.',
  'help.guide.log-day.tip.2':
    'Modrá tečka v buňce znamená, že ten den pokrývá jedna z vašich cest, takže vidíte, kde se dovolená a cestování potkávají.',
  // half-day
  'help.guide.half-day.title': 'Zapsat půlden',
  'help.guide.half-day.goal': 'Vzít si odpoledne volno bez utracení celého dne nároku.',
  'help.guide.half-day.step.1':
    'Zapněte na liště Půlden. Jeho oranžová tečka je značka, kterou půlden dostane v mřížce.',
  'help.guide.half-day.step.2': 'Klikněte na den. Zapíše se jako 0,5 a nese oranžovou tečku v rohu.',
  'help.guide.half-day.step.3':
    'Až skončíte, Půlden zase vypněte; kliknutí na půlden s jiným nastavením ho na místě převede.',
  'help.guide.half-day.result':
    'Vyčerpáno vzroste o 0,5. Půlden a Náhradní volno jsou nezávislé, takže jde i půlden náhradního volna.',
  'help.guide.half-day.tip.1':
    'Lišta vždy ukazuje značku, kterou příští kliknutí umístí, takže si to můžete před zápisem ověřit.',
  // comp-day
  'help.guide.comp-day.title': 'Zapsat náhradní volno',
  'help.guide.comp-day.goal': 'Vybrat si náhradní volno, které nestojí dny dovolené.',
  'help.guide.comp-day.step.1':
    'Zapněte na liště Náhradní volno. Šrafovaný kotouč je podoba dne náhradního volna v mřížce.',
  'help.guide.comp-day.step.2': 'Klikněte na den. Vyplní se diagonálním šrafováním ve vaší barvě místo plné plochy.',
  'help.guide.comp-day.result': 'Dny náhradního volna se počítají vedle dlaždic nároku a nikdy nesnižují Zbývá.',
  'help.guide.comp-day.tip.1':
    'Vybrané přesčasy, pružná pracovní doba, den volna náhradou: vše, co je volno, ale ne dovolená, patří sem.',
  // entitlement
  'help.guide.entitlement.title': 'Nastavit nárok',
  'help.guide.entitlement.goal': 'Říct Vacay, kolik dní dovolené v roce máte.',
  'help.guide.entitlement.step.1': 'V postranním panelu klikněte na dlaždici Dní pod Nárokem.',
  'help.guide.entitlement.step.2': 'Napište počet dní a stiskněte Enter.',
  'help.guide.entitlement.result': 'Zbývá se přepočítá z vašeho nároku, případného převodu a vyčerpaných dní.',
  'help.guide.entitlement.tip.1': 'Každý rok má vlastní nárok, změna zde se týká jen vybraného roku.',
  // years
  'help.guide.years.title': 'Přidat roky a přepínat mezi nimi',
  'help.guide.years.goal': 'Naplánovat už příští rok nebo se podívat na ten minulý.',
  'help.guide.years.step.1': 'Kliknutím na + vpravo od letopočtu přidáte další rok, kliknutím na + vlevo předchozí.',
  'help.guide.years.step.2': 'Mezi roky přepínáte šipkami nebo štítky roků pod nimi.',
  'help.guide.years.step.3':
    'Rok odeberete tak, že najedete na jeho štítek a kliknete na malé mínus. Jeho záznamy zmizí s ním, potvrzujte s rozmyslem.',
  'help.guide.years.result': 'Každý rok si drží vlastní nárok a záznamy; převod je spojuje.',
  // company-holidays
  'help.guide.company-holidays.title': 'Označit firemní volno',
  'help.guide.company-holidays.goal': 'Zablokovat dny, kdy má volno celá firma, aniž by to stálo něčí nárok.',
  'help.guide.company-holidays.step.1':
    'Otevřete Nastavení a ověřte, že je Firemní volno zapnuté. Je to výchozí stav; lišta nabízí režim jen tehdy, když je zapnuté.',
  'help.guide.company-holidays.step.2': 'Zpět v mřížce přepněte lištu do režimu Firemní volno.',
  'help.guide.company-holidays.step.3': 'Klikněte na dny. Zbarví se jantarově a objeví se v legendě.',
  'help.guide.company-holidays.result': 'Firemní volno vidí všichni sloučení s plánem a nikdy nesnižuje Zbývá.',
  'help.guide.company-holidays.tip.1': 'Firemní volno může upravovat kdokoli sloučený, domluvte se, kdo ho spravuje.',
  // public-holidays
  'help.guide.public-holidays.title': 'Zobrazit státní svátky',
  'help.guide.public-holidays.goal': 'Dostat do mřížky svátky vaší země nebo regionu.',
  'help.guide.public-holidays.step.1': 'Otevřete Nastavení a zapněte Státní svátky.',
  'help.guide.public-holidays.step.2':
    'Klikněte na Přidat kalendář, vyberte zemi a tam, kde na tom záleží, i region. Dejte mu barvu a popisek, chcete-li.',
  'help.guide.public-holidays.step.3': 'Zavřete Nastavení. Svátky se objeví v mřížce a v legendě.',
  'help.guide.public-holidays.result':
    'Svátky jsou označené barvou kalendáře a nikdy se nepočítají proti vašemu nároku.',
  'help.guide.public-holidays.tip.1': 'Můžete přidat víc kalendářů, třeba svůj region a region sloučeného kolegy.',
  // school-holidays
  'help.guide.school-holidays.title': 'Zobrazit školní prázdniny',
  'help.guide.school-holidays.goal': 'Vidět školní prázdniny vašeho regionu vedle vlastního volna.',
  'help.guide.school-holidays.step.1': 'Otevřete Nastavení a zapněte School Holidays.',
  'help.guide.school-holidays.step.2':
    'Klikněte na Přidat kalendář a vyberte zemi. Kde země kalendář dělí, vyberte i region nebo skupinu.',
  'help.guide.school-holidays.step.3':
    'Zavřete Nastavení. Každé prázdniny dostanou barevný pruh u spodního okraje svých dnů.',
  'help.guide.school-holidays.result': 'Školní prázdniny jsou čistě vizuální: nikdy nikomu nesnižují nárok.',
  'help.guide.school-holidays.tip.1':
    'Chybí region? Správce může školní prázdniny spravovat ručně v části Administrace, Personalizace, Školní prázdniny.',
  // weekends
  'help.guide.weekends.title': 'Blokovat víkendy a nastavit začátek týdne',
  'help.guide.weekends.goal': 'Nechat víkendy mimo počítání a začínat týden dnem, na který jste zvyklí.',
  'help.guide.weekends.step.1': 'Otevřete Nastavení.',
  'help.guide.weekends.step.2': 'Zapněte Blokovat víkendy a vyberte, které dny se počítají jako váš víkend.',
  'help.guide.weekends.step.3': 'Pod Týden začíná zvolte pondělí nebo neděli.',
  'help.guide.weekends.result': 'Blokované dny jsou v mřížce zašedlé a nedají se omylem zapsat.',
  // leave-year
  'help.guide.leave-year.title': 'Nastavit dovolenkový rok',
  'help.guide.leave-year.goal': 'Počítat nárok přes fiskální rok nebo od data nástupu místo od ledna do prosince.',
  'help.guide.leave-year.step.1': 'Otevřete Nastavení a najděte Dovolenkový rok.',
  'help.guide.leave-year.step.2':
    'Zvolte Kalendářní, Fiskální (s měsícem a dnem začátku) nebo Datum nástupu (s datem, kdy jste nastoupili).',
  'help.guide.leave-year.result':
    'Nárok, vyčerpané dny a převod sledují toto období a mřížka začíná jeho prvním měsícem.',
  'help.guide.leave-year.tip.1':
    'Toto nastavení je osobní: ve sloučeném plánu si každý drží vlastní dovolenkový rok a čísla.',
  // carry-over
  'help.guide.carry-over.title': 'Převést nevyčerpané dny',
  'help.guide.carry-over.goal': 'Přičíst, co na konci období zbylo, k tomu dalšímu.',
  'help.guide.carry-over.step.1': 'Otevřete Nastavení.',
  'help.guide.carry-over.step.2': 'Zapněte Převod dovolené.',
  'help.guide.carry-over.result': 'Převedené množství se přepočítá přes všechny vaše roky a zobrazí pod nárokem.',
  'help.guide.carry-over.tip.1': 'Vypnutí vynuluje každý převedený zůstatek.',
  // invite
  'help.guide.invite.title': 'Plánovat společně s někým',
  'help.guide.invite.goal': 'Sloučit svůj plán s jiným uživatelem TREKu, abyste viděli volno obou v jedné mřížce.',
  'help.guide.invite.step.1': 'Klikněte na ikonu osoby v panelu Osoby.',
  'help.guide.invite.step.2': 'Vyberte uživatele a odešlete pozvánku.',
  'help.guide.invite.step.3': 'Dostane oznámení a přijme ji. Do té doby je pozvánka označená jako čekající.',
  'help.guide.invite.result':
    'Oba plány se sloučí: každý má svou barvu, můžete si navzájem zapisovat dny a vše se synchronizuje živě.',
  'help.guide.invite.tip.1':
    'Sloučení zrušíte přes Oddělit v Nastavení. Záznamy každého se vrátí do jeho vlastního plánu.',
  'help.guide.invite.tip.2': 'Pokud má druhá osoba vaše dny jen vidět, sdílejte kalendář místo slučování.',
  // share-calendar
  'help.guide.share-calendar.title': 'Sdílet kalendář jen pro čtení',
  'help.guide.share-calendar.goal': 'Nechat někoho vidět, kdy máte volno, aniž by mohl do vašeho plánu zasahovat.',
  'help.guide.share-calendar.step.1': 'Klikněte na ikonu sdílení v panelu Sdílené kalendáře.',
  'help.guide.share-calendar.step.2': 'Vyberte uživatele a klikněte na Sdílet. Není potřeba žádné přijetí.',
  'help.guide.share-calendar.step.3':
    'Kalendáře sdílené s vámi se objeví ve stejném panelu; oko jeden skryje, Ukončit sdílení odvolá ten váš.',
  'help.guide.share-calendar.result':
    'Vaše volno se v jeho mřížce objeví jako barevný kroužek. Nic, co sdílíte, tam nejde upravit.',
  'help.guide.share-calendar.tip.1':
    'Sdílení a sloučení jsou nezávislé: můžete být sloučeni s jedním člověkem a sdílet s dalšími.',
  'help.guide.share-calendar.tip.2': 'Najeďte na den s kroužkem a uvidíte, kdo má volno a jak dlouho.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas je vaše cestovatelská stopa na mapě světa: každá země, kam vás zavedla cesta, je vybarvená, a ty, které jste navštívili před TREKem, doplníte ručně. Přiblížením uvidíte regiony, vedete si bucket list míst, která ještě chcete vidět, a svoje čísla čtete ve skleněném panelu dole.',
  'help.ctx.atlas.bullet.1':
    'Mapa: navštívené země mají barvu, která jim zůstává, plánované země mají čárkovaný obrys, země z bucket listu diagonální šrafování, všechno ostatní je šedé. Najeďte na zemi a uvidíte její cesty, místa a první i poslední návštěvu.',
  'help.ctx.atlas.bullet.2':
    'Hledání nahoře: napište zemi nebo místo. Výběr země tam mapu přenese a otevře její okno; výběr místa přistane v jeho regionu, abyste ho mohli označit.',
  'help.ctx.atlas.bullet.3':
    'Zobrazit plánované země, vpravo nahoře: odhalí země vašich nadcházejících cest. Přepínač se objeví jen, dokud nějaké máte.',
  'help.ctx.atlas.bullet.4':
    'Panel dole: karta Statistiky se zeměmi, cestami, místy, městy, dny, kontinenty a vaší sérií; karta Bucket List s tím, co vás ještě čeká.',
  'help.ctx.atlas.bullet.5':
    'Regiony: od úrovně přiblížení 5 mapa přepne na státy a provincie, každý lze kliknutím označit nebo odebrat.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: s připojeným doplňkem panel vlevo od statistik odškrtává přání a přidává země z vašich záznamů, nikdy bez vašeho potvrzení.',
  // mark-country
  'help.guide.mark-country.title': 'Označit zemi jako navštívenou',
  'help.guide.mark-country.goal': 'Doplňte zemi, kde jste byli před TREKem, aby ji mapa i počítadlo zahrnuly.',
  'help.guide.mark-country.step.1': 'Napište zemi do vyhledávacího pole nahoře na mapě.',
  'help.guide.mark-country.step.2': 'Vyberte ji ze seznamu. Mapa tam přeletí a otevře se okno pro tuto zemi.',
  'help.guide.mark-country.step.3': 'Zvolte Označit jako navštívené.',
  'help.guide.mark-country.result':
    'Země dostane na mapě svou barvu a Země napočítá o jednu víc. Barva je trvalá: označení dalších zemí ostatní nikdy nepřemíchá.',
  'help.guide.mark-country.tip.1':
    'Kliknutí na šedou zemi na mapě otevře stejné okno; u malých zemí je hledání jistá cesta.',
  'help.guide.mark-country.tip.2': 'Ručně označená země se vždy počítá jako navštívená, ať má cesta tam jakákoli data.',
  // unmark-country
  'help.guide.unmark-country.title': 'Odebrat označenou zemi',
  'help.guide.unmark-country.goal': 'Sundejte ručně označenou zemi zase z mapy.',
  'help.guide.unmark-country.step.1':
    'Vyhledejte zemi a vyberte ji, nebo na ni klikněte na mapě. U země, kterou jste označili sami, se okno zeptá, zda ji odebrat.',
  'help.guide.unmark-country.step.2': 'Potvrďte tlačítkem Odebrat.',
  'help.guide.unmark-country.result': 'Země zase zešedne a opustí vaše počítadlo.',
  'help.guide.unmark-country.tip.1':
    'Takhle jdou odebrat jen ručně označené země. Země s cestami nebo místy zůstává, dokud je má; Odebrat je i v její kartě detailu v panelu, když byla označena ručně.',
  // country-details
  'help.guide.country-details.title': 'Podívat se, co jste v zemi dělali',
  'help.guide.country-details.goal': 'Otevřete navštívenou zemi a skočte na cesty, které vás tam zavedly.',
  'help.guide.country-details.step.1': 'Vyhledejte zemi, kterou jste navštívili.',
  'help.guide.country-details.step.2':
    'Vyberte ji. Mapa tam přeletí a panelu dole přibude karta s vlajkou, místy, cestami a čipem pro každou cestu.',
  'help.guide.country-details.result': 'Klikněte na čip cesty a otevřete ji v plánovači.',
  'help.guide.country-details.tip.1': 'Najetí na zemi na mapě ukáže stejná čísla plus první a poslední návštěvu.',
  // planned-countries
  'help.guide.planned-countries.title': 'Zobrazit země, kam se chystáte',
  'help.guide.planned-countries.goal':
    'Dostaňte země svých nadcházejících cest na mapu, aniž by se počítaly jako navštívené.',
  'help.guide.planned-countries.step.1':
    'Zapněte Zobrazit plánované země vpravo nahoře. Číslo vedle říká, kolik jich čeká.',
  'help.guide.planned-countries.step.2':
    'Vyhledejte plánovanou zemi a vyberte ji: panel říká Plánováno a popisek na mapě ukazuje, kdy jedete.',
  'help.guide.planned-countries.result':
    'Plánované země se objeví s čárkovaným obrysem, takže nikdy nevypadají jako místo, kde už jste byli. Přepínač si vaši volbu pamatuje.',
  'help.guide.planned-countries.tip.1':
    'Země se počítá jako navštívená, jakmile cesta tam začala; probíhající cesta se počítá také. Cesty bez dat zůstávají ze statistik úplně venku.',
  'help.guide.planned-countries.tip.2': 'Přepínač existuje jen, dokud máte nadcházející cesty.',
  // regions
  'help.guide.regions.title': 'Označit region',
  'help.guide.regions.goal': 'Jemněji než země: označte státy, provincie nebo prefektury, kde jste byli.',
  'help.guide.regions.step.1':
    'Přibližte zemi, dokud se neobjeví její regiony, od úrovně přiblížení 5. Vyhledání země a její výběr vás přenese dost blízko.',
  'help.guide.regions.step.2': 'Klikněte na region. Při najetí se ukáže jeho název; okno zobrazí region a jeho zemi.',
  'help.guide.regions.step.3': 'Zvolte Označit jako navštívené.',
  'help.guide.regions.result':
    'Region se vyplní barvou země. Označení regionu započítá i zemi jako navštívenou, pokud ještě nebyla.',
  'help.guide.regions.tip.1':
    'Kliknutí na navštívený region nabídne Odebrat, ať jste ho označili vy, nebo ho tam dalo nějaké místo.',
  'help.guide.regions.tip.2': 'Regiony, kde máte skutečná místa, se označí samy; tam není co dělat.',
  // search-place
  'help.guide.search-place.title': 'Najít místo a označit jeho region',
  'help.guide.search-place.goal':
    'Označte Bavorsko hledáním Mnichova, aniž byste věděli, ve kterém regionu město leží.',
  'help.guide.search-place.step.1':
    'Napište do vyhledávacího pole město, památku nebo adresu. Země jsou první; odpovídající místa se objeví pod nimi pod nadpisem Místa.',
  'help.guide.search-place.step.2': 'Vyberte místo. Mapa tam přeletí a zjistí, ve kterém regionu bod leží.',
  'help.guide.search-place.step.3':
    'Zvolte Označit jako navštívené pro ten region, nebo Přidat do seznamu přání (Bucket list), pokud vás teprve čeká.',
  'help.guide.search-place.result':
    'Region je označený a s ním i země. Země bez regionálních dat v mapovém balíku spadnou na zemi samotnou.',
  'help.guide.search-place.tip.1':
    'Místa pocházejí ze stejného hledání jako všude v TREKu, takže sledují poskytovatele, kterého nastavil váš admin.',
  // bucket-country
  'help.guide.bucket-country.title': 'Dát zemi na bucket list',
  'help.guide.bucket-country.goal': 'Veďte si seznam přání zemí přímo na mapě, odděleně od těch, kde jste byli.',
  'help.guide.bucket-country.step.1': 'Vyhledejte zemi a vyberte ji, nebo na ni klikněte na mapě.',
  'help.guide.bucket-country.step.2': 'Zvolte Přidat do seznamu přání (Bucket list).',
  'help.guide.bucket-country.step.3':
    'Vyberte měsíc a rok, pokud už víte kdy, a potvrďte tlačítkem Přidat do seznamu přání (Bucket list).',
  'help.guide.bucket-country.result':
    'Země se vykreslí s diagonálním šrafováním v barvě, kterou ponese, až tam dorazíte, a objeví se na kartě Bucket List v panelu.',
  'help.guide.bucket-country.tip.1': 'Stejné okno nabídne Odebrat ze seznamu přání, jakmile je země na seznamu.',
  'help.guide.bucket-country.tip.2':
    'Jeden záznam na cílové datum: stejná země může být na seznamu pro dva různé měsíce, ale ne dvakrát pro stejný.',
  // bucket-place
  'help.guide.bucket-place.title': 'Přidat místo na bucket list',
  'help.guide.bucket-place.goal':
    'Uložte si město, památku nebo adresu, o které sníte, se souřadnicemi a cílovým datem.',
  'help.guide.bucket-place.step.1': 'Otevřete kartu Bucket List v panelu dole.',
  'help.guide.bucket-place.step.2': 'Klikněte na Přidat místo.',
  'help.guide.bucket-place.step.3':
    'Napište název a stiskněte tlačítko hledání; vyberte shodu, aby místo mělo souřadnice. Napsat jen název a hledání přeskočit jde také.',
  'help.guide.bucket-place.step.4': 'Případně vyberte měsíc a rok a klikněte na Přidat.',
  'help.guide.bucket-place.result':
    'Místo je nahoře na vašem bucket listu s cílovým datem; × vedle něj ho zase odebere.',
  'help.guide.bucket-place.tip.1':
    'Přání se souřadnicemi je to, co vám Dawarich může později odškrtnout, jakmile vaše záznamy ukážou, že jste tam byli.',
  // stats
  'help.guide.stats.title': 'Číst svoje statistiky',
  'help.guide.stats.goal': 'Vědět, co čísla v panelu počítají a co ne.',
  'help.guide.stats.step.1':
    'Země je počet různých zemí, kde jste skutečně byli; plánované se ukazují vedle, ne v něm. Cesty, Místa a Dní jsou součty přes všechny vaše cesty. Města se odvozují z adres vašich míst, takže jde o odhad.',
  'help.guide.stats.step.2':
    'Kontinenty ukazují navštívené země podle kontinentu; Antarktida se do řady přidá, jakmile tam budete. Pak vaše série, po sobě jdoucí roky s aspoň jednou cestou, a kolik cest jste letos podnikli.',
  'help.guide.stats.result': 'Čísla sledují vaše cesty, jak je plánujete; tady není co udržovat.',
  'help.guide.stats.tip.1':
    'Města se čtou z textu adresy, nevyhledávají se, takže krátká adresa jako „Osteria Francescana, Italy“ nebo taková, která končí prefekturou, může dát region místo města.',
  'help.guide.stats.tip.2':
    'Ručně označené země se počítají v Zemích a kontinentech, ale nepřinášejí žádné cesty, místa ani dny.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Sbírky',
  'help.ctx.collections.summary':
    'Collections jsou vaše knihovna míst mimo jakoukoli cestu: pojmenované seznamy míst, která jste našli a chcete si je nechat, každé místo se stavem Nápad, Chci navštívit nebo Navštíveno. Místa se do cest a z cest kopírují, nikdy nepropojují, takže seznam a cesta se navzájem nikdy nemění.',
  'help.ctx.collections.bullet.1':
    'Lišta seznamů vlevo: vaše vlastní seznamy, ty sdílené s vámi, pozvánky čekající na přijetí, Vše uložené jako sjednocení všeho, co vlastníte, a nahoře Nový seznam plus import ze souboru.',
  'help.ctx.collections.bullet.2':
    'Záhlaví otevřeného seznamu: jeho barva, obálka, popis a odkazy, členové a vpravo akce Upravit, Exportovat a Sdílet.',
  'help.ctx.collections.bullet.3':
    'Řádek filtrů nad místy: stav, kategorie, hodnocení a řazení, filtr štítků, + pro přidání místa, import z cesty a Vybrat pro hromadné akce.',
  'help.ctx.collections.bullet.4':
    'Řádky míst: avatar, název a adresa, štítky a kategorie a vpravo odznak stavu, který se jedním kliknutím přepíná.',
  'help.ctx.collections.bullet.5':
    'Mapa vpravo: špendlík pro každé místo se souřadnicemi, přepínač seznamu a mapy, vyhledávací pole a filtr štítků. Kliknutí na špendlík otevře dané místo.',
  'help.ctx.collections.bullet.6':
    'Panel detailu: klikněte na řádek a uvidíte obálku, kategorii, štítky, stav, popis a odkazy, s akcemi Upravit, Kopírovat do výletu a Odebrat ze seznamu.',
  // create-list
  'help.guide.create-list.title': 'Vytvořit seznam',
  'help.guide.create-list.goal': 'Založte nový pojmenovaný seznam s barvou a obálkou, připravený na místa.',
  'help.guide.create-list.step.1': 'Klikněte na Nový seznam nahoře v liště seznamů.',
  'help.guide.create-list.step.2':
    'Dejte seznamu název a vyberte barvu. Obálka, popis a odkazy jsou volitelné; můžete je doplnit později přes Upravit.',
  'help.guide.create-list.step.3': 'Klikněte na Vytvořit.',
  'help.guide.create-list.result':
    'Seznam se otevře prázdný, s Přidat místo a Importovat z cesty jako dvěma způsoby, jak ho naplnit.',
  'help.guide.create-list.tip.1':
    'Obálkou může být vlastní nahraný obrázek nebo fotka nalezená přes hledání Unsplash ve stejném dialogu.',
  // add-place
  'help.guide.add-place.title': 'Přidat místo',
  'help.guide.add-place.goal':
    'Najděte místo a uložte ho do otevřeného seznamu s názvem, kategorií, stavem a poznámkami najednou.',
  'help.guide.add-place.step.1': 'Klikněte na + v řádku filtrů nad místy.',
  'help.guide.add-place.step.2':
    'Napište místo do vyhledávacího pole a vyberte výsledek. Název, adresa a souřadnice se z něj doplní.',
  'help.guide.add-place.step.3':
    'Nastavte stav a případně kategorii, popis a odkazy, pak klikněte na Přidat. Dialog zůstane otevřený pro další místo; Zrušit ho zavře.',
  'help.guide.add-place.result': 'Místo se objeví v seznamu a, pokud má souřadnice, jako špendlík na mapě.',
  'help.guide.add-place.tip.1':
    'Uvnitř cesty přidá Uložit do sbírky v inspektoru místa nebo v nabídce místa dané místo z cesty do seznamu, aniž byste cestu opustili.',
  'help.guide.add-place.tip.2':
    'Seznam musí být váš nebo takový, kde jste editor či správce; na Vše uložené ani na seznamu, který jen prohlížíte, + není.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Importovat místa z cesty',
  'help.guide.import-from-trip.goal':
    'Přeneste místa celé cesty do seznamu najednou, místo abyste je ukládali jedno po druhém.',
  'help.guide.import-from-trip.step.1':
    'Klikněte na tlačítko importu se šipkou v oblaku v řádku filtrů. U prázdného seznamu je stejná akce vedle Přidat místo.',
  'help.guide.import-from-trip.step.2': 'Vyberte jednu ze svých cest.',
  'help.guide.import-from-trip.step.3':
    'Zaškrtněte místa, která chcete. Místa, která už na seznamu jsou, jsou zašedlá; ta, která nemá žádný den cesty, jsou na začátku vybraná. Jen nová skryje to, co už máte.',
  'help.guide.import-from-trip.step.4': 'Klikněte na Importovat. Tlačítko vždy říká, kolik míst se chystá přidat.',
  'help.guide.import-from-trip.result':
    'Místa se zkopírují do seznamu s názvem, adresou, souřadnicemi, popisem a kategorií. Cesta zůstane, jaká byla.',
  'help.guide.import-from-trip.tip.1':
    'Duplicity podle názvu nebo souřadnic se automaticky přeskočí, takže dvojí import nic nepokazí.',
  'help.guide.import-from-trip.tip.2':
    'V seznamu míst uvnitř cesty nabízí režim výběru jako alternativu Uložit do sbírky pro ručně vybranou sadu míst.',
  // place-status
  'help.guide.place-status.title': 'Nastavit stav místa',
  'help.guide.place-status.goal': 'Mějte přehled, co je nápad, co je v užším výběru a kde jste už byli.',
  'help.guide.place-status.step.1':
    'Klikněte na odznak stavu na pravém konci řádku místa. Z Nápad se stane Chci navštívit.',
  'help.guide.place-status.step.2': 'Klikněte znovu pro Navštíveno a ještě jednou pro návrat na Nápad.',
  'help.guide.place-status.result': 'Odznak i jeho barva se hned změní; filtr stavu nad seznamem počítá s ním.',
  'help.guide.place-status.tip.1': 'Stav je věc Collections: kopírování místa do cesty ho nepřenáší.',
  'help.guide.place-status.tip.2':
    'Z cesty ukazuje Uložit do seznamu odznak stavu pro každý seznam, kde místo je, a panel míst má pro výběr akci Označit jako navštívené.',
  // place-detail
  'help.guide.place-detail.title': 'Otevřít uložené místo',
  'help.guide.place-detail.goal':
    'Podívejte se na vše o místě a pracujte s ním: upravte ho, zkopírujte do cesty, odeberte.',
  'help.guide.place-detail.step.1':
    'Klikněte na řádek místa. Vedle seznamu se otevře panel detailu a mapa se posune k místu.',
  'help.guide.place-detail.step.2':
    'Dole jsou Upravit, Kopírovat do výletu a Odebrat ze seznamu; fotoaparát na obálce vymění automatickou fotku za vaši vlastní.',
  'help.guide.place-detail.result':
    'Upravit odemkne název, kategorii, štítky, adresu, souřadnice, popis a odkazy přímo v panelu.',
  'help.guide.place-detail.tip.1':
    'Obálka se stáhne automaticky, když místo nemá vlastní obrázek. Vlastní nahraný soubor může být JPG, PNG, GIF nebo WebP do 20 MB.',
  'help.guide.place-detail.tip.2':
    'Členové sdíleného seznamu tu mohou také nechat hvězdičkové hodnocení a filtr hodnocení v řádku filtrů používá průměr.',
  // labels
  'help.guide.labels.title': 'Seskupit místa štítky',
  'help.guide.labels.goal': 'Dejte seznamu vlastní štítky, třeba čtvrti nebo dny, nad rámec společných kategorií.',
  'help.guide.labels.step.1': 'Otevřete správu štítků z ovládacího prvku štítků v řádku filtrů.',
  'help.guide.labels.step.2':
    'Napište název, vyberte barvu a klikněte na Přidat štítek. Existující štítky ve stejném dialogu přejmenujete, přebarvíte nebo smažete.',
  'help.guide.labels.step.3':
    'Zapněte Vybrat, zaškrtněte místa a klikněte na Přiřadit štítek v liště výběru. Jednotlivé místo dostane štítky také přes Upravit v panelu detailu.',
  'help.guide.labels.step.4':
    'Vyberte v řádku filtrů jeden nebo více štítků a seznam i mapa se zúží na místa, která nesou kterýkoli z nich.',
  'help.guide.labels.result':
    'Označená místa ukazují své štítky na řádku; filtr štítků je tu pro každého člena, včetně diváků.',
  'help.guide.labels.tip.1':
    'Štítky patří k tomu jednomu seznamu, kde vznikly. Přesun místa do jiného seznamu je zahodí.',
  'help.guide.labels.tip.2': 'Správa a přiřazování štítků vyžaduje právo úprav k seznamu.',
  // filter-select
  'help.guide.filter-select.title': 'Filtrovat a vybírat místa',
  'help.guide.filter-select.goal': 'Zúžte seznam a pracujte s mnoha místy najednou.',
  'help.guide.filter-select.step.1':
    'Použijte rozbalovací nabídky v řádku filtrů: stav, kategorie, minimální hodnocení a pořadí řazení. Každá ukazuje, kolik míst by zůstalo.',
  'help.guide.filter-select.step.2':
    'Klikněte na Vybrat. Každý řádek dostane zaškrtávací políčko a objeví se lišta výběru.',
  'help.guide.filter-select.step.3':
    'Zaškrtněte místa nebo použijte Vybrat vše pro vše aktuálně vyfiltrované, pak zvolte Přiřadit štítek, Přesunout do seznamu, Duplikovat do seznamu, Kopírovat do výletu nebo Smazat.',
  'help.guide.filter-select.result': 'Akce se použijí na celý výběr najednou. × vpravo režim výběru ukončí.',
  'help.guide.filter-select.tip.1':
    'Vybrat vše se řídí filtrem, takže vyfiltrovat Chci navštívit a vybrat vše je rychlá cesta, jak pracovat s užším výběrem.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Kopírovat místa do cesty',
  'help.guide.copy-to-trip.goal': 'Udělejte z uložených míst zastávky na jedné ze svých cest.',
  'help.guide.copy-to-trip.step.1':
    'Zapněte Vybrat a zaškrtněte místa, nebo otevřete jedno místo a použijte Kopírovat do výletu v jeho panelu detailu.',
  'help.guide.copy-to-trip.step.2': 'Klikněte na Kopírovat do výletu v liště výběru.',
  'help.guide.copy-to-trip.step.3': 'Vyberte cestu. Vyhledávací pole zúží dlouhý seznam.',
  'help.guide.copy-to-trip.result':
    'Místa přistanou v seznamu míst dané cesty s názvem, popisem, kategorií, poznámkami, cenou, souřadnicemi, fotkou a štítky. Ve sbírce se nic nemění.',
  'help.guide.copy-to-trip.tip.1':
    'Mohou to i diváci sdíleného seznamu; kopíruje se ze seznamu ven, seznam se tím nemění.',
  // share-list
  'help.guide.share-list.title': 'Sdílet seznam s někým',
  'help.guide.share-list.goal': 'Plánujte seznam společně s dalšími lidmi na tomto TREKu, živě.',
  'help.guide.share-list.step.1': 'Klikněte na Sdílet v záhlaví svého seznamu.',
  'help.guide.share-list.step.2': 'Vyberte uživatele a roli: Divák, Editor nebo Správce.',
  'help.guide.share-list.step.3':
    'Klikněte na Odeslat pozvánku. Dotyčný se zobrazuje jako čekající pozvánka, dokud pozvánku nepřijme ve své liště seznamů.',
  'help.guide.share-list.result':
    'Po přijetí se mu seznam objeví pod Sdílené a každá změna se synchronizuje živě. Členové a jejich role zůstávají upravitelní ve stejném dialogu.',
  'help.guide.share-list.tip.1':
    'Diváci se mohou dívat, hodnotit a kopírovat místa do svých vlastních cest. Editoři přidávají a upravují místa a štítky. Správci mohou navíc mazat.',
  'help.guide.share-list.tip.2': 'Zvát a odebírat lidi může jen vlastník; člen může sdílený seznam sám opustit.',
  // export-list
  'help.guide.export-list.title': 'Exportovat seznam jako soubor',
  'help.guide.export-list.goal': 'Předejte seznam někomu na jiném TREKu nebo si ho vezměte do mapové aplikace.',
  'help.guide.export-list.step.1': 'Klikněte na Exportovat v záhlaví seznamu.',
  'help.guide.export-list.step.2':
    'Vyberte Seznam TREK pro jiný TREK, se štítky a stavem, nebo GPX pro OsmAnd, Organic Maps, Garmin a další aplikace, které čtou trasové body.',
  'help.guide.export-list.result': 'Soubor se stáhne. Exportovat ho může kterýkoli člen sdíleného seznamu.',
  'help.guide.export-list.tip.1':
    'Místo bez souřadnic nemůže být trasovým bodem GPX; vynechá se a TREK vám řekne, kolika se to týkalo.',
  'help.guide.export-list.tip.2':
    'Hodnocení, členové a nahrané fotky záměrně zůstávají tady; patří k tomuto TREKu, ne k seznamu.',
  // import-file
  'help.guide.import-file.title': 'Importovat seznam ze souboru',
  'help.guide.import-file.goal':
    'Načtěte soubor se seznamem TREK nebo soubor GPX, jako nový seznam nebo do některého, který máte.',
  'help.guide.import-file.step.1': 'Klikněte na tlačítko importu se šipkou nahoru vedle Nový seznam v liště seznamů.',
  'help.guide.import-file.step.2':
    'Vyberte soubor. TREK ukáže, co v něm je, ještě než se cokoli stane: název, kolik míst a štítků.',
  'help.guide.import-file.step.3':
    'Ponechte Nový seznam a případně změňte název, nebo vyberte Přidat do seznamu a vložte místa do seznamu, který můžete upravovat, pak klikněte na Importovat.',
  'help.guide.import-file.result':
    'Přistanete na seznamu s importovanými místy. Přidání do seznamu vždy jen přidává; místa, která už tam jsou, si ponechají stav, poznámky a štítky.',
  'help.guide.import-file.tip.1':
    'Z GPX se každý pojmenovaný trasový bod stane místem; stopy jsou čáry a vynechají se, náhled říká, kolik bodů to bylo.',
  'help.guide.import-file.tip.2':
    'Soubor, který není ani seznam TREK, ani GPX, se odmítne s důvodem; jediné nečitelné místo se přeskočí, ne celý soubor.',
  // edit-list
  'help.guide.edit-list.title': 'Upravit nebo smazat seznam',
  'help.guide.edit-list.goal': 'Změňte název, barvu, obálku, popis nebo odkazy seznamu, nebo seznam odstraňte.',
  'help.guide.edit-list.step.1': 'Klikněte na Upravit v záhlaví seznamu. Vidí ho jen vlastník.',
  'help.guide.edit-list.step.2':
    'Změňte, co chcete, a klikněte na Uložit. Smazat seznam vlevo dole odstraní seznam se všemi jeho místy, po potvrzení.',
  'help.guide.edit-list.result': 'Záhlaví hned převezme novou barvu, obálku a popis.',
  'help.guide.edit-list.tip.1':
    'Smazání seznamu nelze vrátit zpět. Pokud si chcete nechat kopii, nejdřív ho exportujte.',
  // all-saved
  'help.guide.all-saved.title': 'Prohledat celou knihovnu',
  'help.guide.all-saved.goal': 'Podívejte se najednou napříč všemi seznamy, které vlastníte.',
  'help.guide.all-saved.step.1':
    'Klikněte na Vše uložené v liště seznamů. Sjednocuje místa všech seznamů, které vlastníte nebo spoluvlastníte.',
  'help.guide.all-saved.step.2':
    'Použijte vyhledávací pole a filtry jako na kterémkoli seznamu; Vybrat tu funguje také, pro kopírování do cesty.',
  'help.guide.all-saved.result':
    'Jeden pohled na všechna vaše uložená místa, bez přidávání nebo importu, protože tu není jeden konkrétní seznam, kam by se dala.',
  'help.guide.all-saved.tip.1': 'Štítky jsou na seznam, takže filtr štítků se na Vše uložené nenabízí.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Cestovní deník',
  'help.ctx.journey.summary':
    'Cestovní deník je váš deník z cest, ve kterém jsou fotky na prvním místě. Každý deník je svázaný s jednou nebo více cestami a roste den po dni ze záznamů s příběhem, fotkami, náladou a počasím. Tato obrazovka vypisuje vaše deníky; otevřete některý a pište.',
  'help.ctx.journey.bullet.1':
    'Banner nahoře ukazuje probíhající deník, nebo váš nejnovější, s počty záznamů, fotek a míst. Pokračovat v psaní ho otevře na dnešním dni.',
  'help.ctx.journey.bullet.2':
    'Pod ním jedna karta pro každý deník s obálkou, podtitulem, daty a počty. Kliknutím na kartu deník otevřete.',
  'help.ctx.journey.bullet.3': 'Poslední karta v mřížce, Vytvořit nový cestovní deník, založí nový z vašich cest.',
  // create-journey
  'help.guide.create-journey.title': 'Vytvořit cestovní deník',
  'help.guide.create-journey.goal': 'Založte deník k cestě, ve kterém už místa z cesty čekají jako návrhy.',
  'help.guide.create-journey.step.1': 'Klikněte na Vytvořit nový cestovní deník, poslední kartu v mřížce.',
  'help.guide.create-journey.step.2':
    'Dejte mu název a případně podtitul, pak zaškrtněte cesty, ke kterým patří. Počítadlo říká, kolik míst se přenese.',
  'help.guide.create-journey.step.3': 'Klikněte na Vytvořit cestovní deník.',
  'help.guide.create-journey.result':
    'Deník se otevře. Každé místo z propojených cest sedí v časové ose jako návrh, jeden pro každý den, na kterém stojí, připravený k sepsání.',
  'help.guide.create-journey.tip.1': 'Další cesty lze propojit později v Nastavení cestovního deníku.',
  'help.guide.create-journey.tip.2': 'Deník bez cest funguje také; záznamy pak přidáváte ručně.',
  // open-journey
  'help.guide.open-journey.title': 'Otevřít cestovní deník',
  'help.guide.open-journey.goal': 'Dostaňte se do deníku a vězte, kde se otevře.',
  'help.guide.open-journey.step.1':
    'Klikněte na kartu. Každá ukazuje obálku, data a kolik záznamů, fotek a míst deník obsahuje.',
  'help.guide.open-journey.result':
    'Probíhající deník se otevře na dnešním dni, nebo na posledním záznamu před dneškem, když ještě nic napsáno není; dokončený se otevře na začátku.',
  'help.guide.open-journey.tip.1':
    'Obálkou je první fotka deníku, pokud nějakou nenastavíte v Nastavení cestovního deníku.',
  // continue-writing
  'help.guide.continue-writing.title': 'Pokračovat v probíhajícím deníku',
  'help.guide.continue-writing.goal': 'Skočte rovnou na dnešní stránku deníku, na kterém právě jste.',
  'help.guide.continue-writing.step.1':
    'Klikněte na Pokračovat v psaní v banneru nahoře. Ukazuje probíhající deník, nebo nejnovější, když žádný neprobíhá.',
  'help.guide.continue-writing.result':
    'Deník se otevře na dnešním dni, nebo na posledním záznamu před dneškem, když ještě nic napsáno není.',
  'help.guide.continue-writing.tip.1':
    'Banner také nabízí návrh pro cestu, která ještě deník nemá; Zavřít tento návrh skryje.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Deník',
  'help.ctx.journey-detail.summary':
    'Jeden otevřený deník: vlevo časová osa, den po dni, a vpravo mapa s každým záznamem a místy propojených cest. Všechno, co do deníku něco přidává, je nahoře; záhlaví drží počty, Studio, přepínač návrhů a Nastavení cestovního deníku.',
  'help.ctx.journey-detail.bullet.1':
    'Záhlaví: obálka, název a podtitul, počty dnů, míst, záznamů a fotek a vpravo Studio, přepínač návrhů a Nastavení cestovního deníku.',
  'help.ctx.journey-detail.bullet.2':
    'Lišta nástrojů: karty Časová osa a Galerie, Hledat v této cestě a Přidat záznam.',
  'help.ctx.journey-detail.bullet.3':
    'Časová osa: jedna sekce pro každý den s + pro přidání záznamu k tomu dni; karty záznamů s fotkami, náladou, počasím a příběhem; návrhy z cest ve světlejším stylu se Zahodit tento návrh.',
  'help.ctx.journey-detail.bullet.4':
    'Mapa: záznamy jako špendlíky spojené čárkovanou čarou v pořadí podle data, místa cest a případné GPX trasy importované do těchto cest.',
  'help.ctx.journey-detail.bullet.5':
    'Nastavení cestovního deníku: obálka, název a podtitul, trasy na mapě, pole záznamu, zahozené návrhy, propojené cesty, přispěvatelé, veřejné sdílení, archivace a smazání.',
  'help.ctx.journey-detail.bullet.6':
    'Nad dlouhou časovou osou plují dvě kulatá tlačítka: zpět nahoru a skok na poslední záznam.',
  // add-entry
  'help.guide.add-entry.title': 'Napsat záznam',
  'help.guide.add-entry.goal': 'Přidejte příběh dne s názvem, textem, náladou a počasím.',
  'help.guide.add-entry.step.1':
    'Klikněte na Přidat záznam v liště nástrojů, nebo na + v záhlaví dne, abyste začali na tom dni.',
  'help.guide.add-entry.step.2':
    'Pojmenujte ten okamžik a napište příběh. Lišta nad textem přidává tučné písmo, kurzívu, nadpisy, citace, odkazy a seznamy v Markdownu.',
  'help.guide.add-entry.step.3':
    'Vyberte náladu a počasí, zkontrolujte datum a případně připněte polohu: vyhledejte místo nebo použijte svou aktuální pozici.',
  'help.guide.add-entry.step.4': 'Klikněte na Uložit.',
  'help.guide.add-entry.result':
    'Záznam se objeví na svém dni v časové ose a jako špendlík na mapě. Jeho počty se v záhlaví aktualizují.',
  'help.guide.add-entry.tip.1': 'Psaní do návrhu je stejný editor, jen s už nastaveným místem.',
  'help.guide.add-entry.tip.2':
    'Štítky dole jsou volný text, třeba skrytý poklad nebo nejlepší jídlo, a hledání je najde.',
  // entry-photos
  'help.guide.entry-photos.title': 'Přidat k záznamu fotky a videa',
  'help.guide.entry-photos.goal': 'Dejte na den obrázky; první se stane obálkou záznamu.',
  'help.guide.entry-photos.step.1': 'Otevřete nabídku záznamu přes ⋯ na jeho kartě a zvolte Upravit.',
  'help.guide.entry-photos.step.2':
    'Klikněte na Nahrát fotky a vyberte soubory. Z galerie bere obrázky, které už v galerii deníku jsou; External photos prohledá připojenou knihovnu Immich nebo Synology pro ten den.',
  'help.guide.entry-photos.step.3': 'Najeďte na obrázek pro Nastavit jako 1. a zvolte obálku, pak klikněte na Uložit.',
  'help.guide.entry-photos.result': 'Fotky se ukážou na kartě i v galerii; první je všude náhledem.',
  'help.guide.entry-photos.tip.1':
    'Videa jdou k záznamu stejně: mp4, m4v, webm nebo mov do 500 MB, uložená tak, jak byla nahrána.',
  'help.guide.entry-photos.tip.2':
    'Soubory HEIC z iPhonu se při nahrání převedou na JPEG, čímž přijdou o GPS a metadata fotoaparátu.',
  // suggestions
  'help.guide.suggestions.title': 'Použít nebo zahodit návrhy',
  'help.guide.suggestions.goal': 'Proměňte místa svých cest v záznamy a odkliďte ta, o kterých psát nebudete.',
  'help.guide.suggestions.step.1':
    'Návrh je světlejší karta s názvem místa kurzívou. Klikněte na ni a otevře se editor s už nastaveným místem a dnem.',
  'help.guide.suggestions.step.2':
    'Klikněte na Zahodit tento návrh na kartě, kterou nepoužijete. Opustí časovou osu, aniž by se smazala, a synchronizace cesty ji už znovu nenabídne.',
  'help.guide.suggestions.step.3':
    'Rozmysleli jste si to? Nastavení cestovního deníku ukazuje, kolik jich je zahozených, a Vrátit zahozené návrhy je všechny vrátí.',
  'help.guide.suggestions.result':
    'Časová osa drží jen to, co opravdu chcete psát; přepínač v záhlaví skryje při čtení všechny návrhy najednou.',
  'help.guide.suggestions.tip.1': 'Místo, které trvá přes dva dny, dá návrh na každém z nich.',
  'help.guide.suggestions.tip.2': 'Návrhy se nikdy nepočítají do statistik; jen napsané záznamy.',
  // add-on-day
  'help.guide.add-on-day.title': 'Přidat záznam k dřívějšímu dni',
  'help.guide.add-on-day.goal': 'Pište o dni, který už uplynul, bez následného opravování data.',
  'help.guide.add-on-day.step.1': 'Klikněte na + v záhlaví toho dne.',
  'help.guide.add-on-day.step.2': 'Editor se otevře s nastaveným datem. Pište a Uložit jako obvykle.',
  'help.guide.add-on-day.result': 'Záznam přistane rovnou na správném dni.',
  'help.guide.add-on-day.tip.1': 'V rámci dne ho šipky v nabídce záznamu posunou dřív nebo později.',
  // pros-cons
  'help.guide.pros-cons.title': 'Přidat hodnocení',
  'help.guide.pros-cons.goal': 'Shrňte den tím, co bylo skvělé a co ne.',
  'help.guide.pros-cons.step.1':
    'V editoru najděte Klady a zápory pod příběhem. Napište bod do Klady nebo Zápory a použijte Přidat další pro ten následující.',
  'help.guide.pros-cons.step.2': 'Uložit. Hodnocení se na kartě ukáže jako dva krátké seznamy.',
  'help.guide.pros-cons.result': 'Palec nahoru a palec dolů na první pohled, pod příběhem.',
  'help.guide.pros-cons.tip.1':
    'Deník, který hodnocení nepoužívá, může sekci vypnout pod Pole záznamu v Nastavení cestovního deníku.',
  // search-journey
  'help.guide.search-journey.title': 'Najít něco v dlouhém deníku',
  'help.guide.search-journey.goal': 'Dostaňte se k záznamu, který máte na mysli, bez rolování přes týdny.',
  'help.guide.search-journey.step.1':
    'Pište do Hledat v této cestě v liště nástrojů. Časová osa se filtruje během psaní, napříč názvy, příběhy, místy a štítky. Na diakritice a velikosti písmen nezáleží.',
  'help.guide.search-journey.step.2':
    'Přepínač návrhů v záhlaví při čtení skryje nenapsané karty. Jakmile je časová osa dlouhá, nad jejím spodním okrajem plují dvě kulatá tlačítka: zpět nahoru a skok na poslední záznam.',
  'help.guide.search-journey.result': 'Zůstanou jen odpovídající záznamy; vymažte pole a uvidíte zase všechno.',
  'help.guide.search-journey.tip.1':
    'Probíhající deník se otevře na dnešním dni, takže aktuální stránka je obvykle už v zobrazení.',
  'help.guide.search-journey.tip.2': 'Štítky se počítají také: hledání skrytý poklad najde každý záznam, který ho má.',
  // gallery-map
  'help.guide.gallery-map.title': 'Procházet galerii a mapu',
  'help.guide.gallery-map.goal': 'Podívejte se na celý deník jako na obrázky a jako na místa na mapě.',
  'help.guide.gallery-map.step.1':
    'Přepněte na Galerie v liště nástrojů: každá fotka každého záznamu plus obrázky nahrané rovnou do galerie. Kliknutím na některý otevřete lightbox.',
  'help.guide.gallery-map.step.2':
    'Mapa vpravo ukazuje záznamy jako špendlíky v pořadí podle data, místa propojených cest a případnou GPX trasu importovanou do těchto cest, v barvě, kterou má v plánovači.',
  'help.guide.gallery-map.result':
    'Najeďte na trasu pro její název. Čárkovanou čáru mezi záznamy kreslí TREK; trasa je cesta, kterou jste skutečně zaznamenali.',
  'help.guide.gallery-map.tip.1': 'Trasy lze pro deník vypnout v Nastavení cestovního deníku.',
  'help.guide.gallery-map.tip.2':
    'Fotky z galerie s polohou se ukážou i na veřejné mapě, když jsou sdíleny Galerie i Mapa.',
  // entry-fields
  'help.guide.entry-fields.title': 'Vypnout pole záznamu',
  'help.guide.entry-fields.goal': 'Omezte editor na to, co tento deník používá.',
  'help.guide.entry-fields.step.1': 'Otevřete Nastavení cestovního deníku ze záhlaví.',
  'help.guide.entry-fields.step.2': 'Pod Pole záznamu vypněte Nálada, Počasí nebo Pro a proti.',
  'help.guide.entry-fields.result':
    'Editor se na ně přestane ptát. Nic napsaného se neztratí: zapnutí pole zpět vrátí uložené hodnoty do zobrazení a sdílený deník skryje stejná pole.',
  'help.guide.entry-fields.tip.1':
    'Přepínače platí pro každý deník zvlášť, takže pracovní cesta a dovolená se mohou lišit.',
  // link-trip
  'help.guide.link-trip.title': 'Propojit další cestu',
  'help.guide.link-trip.goal': 'Přineste do deníku místa druhé cesty jako návrhy.',
  'help.guide.link-trip.step.1': 'Otevřete Nastavení cestovního deníku ze záhlaví.',
  'help.guide.link-trip.step.2': 'Pod propojenými cestami klikněte na Přidat cestu.',
  'help.guide.link-trip.step.3': 'Vyberte cestu.',
  'help.guide.link-trip.result':
    'Její místa dorazí do časové osy jako návrhy na svých dnech a její GPX trasy se přidají na mapu.',
  'help.guide.link-trip.tip.1': '× vedle propojené cesty ji zase odpojí; záznamy, které jste napsali, zůstanou.',
  'help.guide.link-trip.tip.2': 'Záznamy s dnem se počítají jen jednou, ať ten den pokrývá kolik chce cest.',
  // share-public
  'help.guide.share-public.title': 'Sdílet deník veřejně',
  'help.guide.share-public.goal': 'Dejte lidem bez účtu na TREKu odkaz jen ke čtení.',
  'help.guide.share-public.step.1': 'Otevřete Nastavení cestovního deníku a najděte Veřejné sdílení.',
  'help.guide.share-public.step.2': 'Klikněte na Vytvořit odkaz ke sdílení.',
  'help.guide.share-public.step.3':
    'Zvolte, co návštěvníci uvidí: Časová osa, Galerie a Mapa jsou samostatné přepínače. Kopírovat dá odkaz do schránky.',
  'help.guide.share-public.result':
    'Kdokoli s odkazem vidí zapnuté sekce a nic jiného; pole, která jste vypnuli v Pole záznamu, zůstanou skrytá i tam.',
  'help.guide.share-public.tip.1':
    'Fotky se na veřejné mapě objeví jen tehdy, když jsou zapnuté Galerie i Mapa; s vypnutou Mapou se jejich souřadnice odstraní, než opustí server.',
  'help.guide.share-public.tip.2': 'Odkaz na stejném místě smažte a sdílení skončí.',
  // contributors
  'help.guide.contributors.title': 'Psát společně',
  'help.guide.contributors.goal': 'Nechte spolucestujícího přidávat vlastní záznamy a fotky.',
  'help.guide.contributors.step.1': 'Otevřete Nastavení cestovního deníku a přejděte k přispěvatelům.',
  'help.guide.contributors.step.2': 'Klikněte na Pozvat přispěvatele a vyhledejte uživatele podle jména nebo e-mailu.',
  'help.guide.contributors.step.3': 'Vyberte roli a potvrďte.',
  'help.guide.contributors.result':
    'Deník se objeví v jejich seznamu a jejich záznamy nesou jejich jméno. Přispěvatele odeberete přes × vedle něj.',
  'help.guide.contributors.tip.1':
    'Přispěvatelé jsou pro lidi na tomto TREKu. Pro všechny ostatní je tu veřejný odkaz.',
  // studio
  'help.guide.studio.title': 'Rozvrhnout deník jako fotoknihu',
  'help.guide.studio.goal': 'Proměňte deník v tisknutelné stránky.',
  'help.guide.studio.step.1': 'Klikněte na Studio v záhlaví. Návrhář se otevře nad deníkem.',
  'help.guide.studio.step.2': 'Název deníku vlevo v horní liště je cesta zpět; vrátí vás tam, kde jste byli.',
  'help.guide.studio.result':
    'Lišta stránek vlevo, dvoustrana na pracovní ploše, vlastnosti vpravo. Auto layout postaví knihu z vašich záznamů; Export vytvoří PDF připravené k tisku.',
  'help.guide.studio.tip.1': 'Studio potřebuje okno široké alespoň 1024 px a na telefonu se nenabízí.',
  'help.guide.studio.tip.2':
    'Kniha dědí přístup deníku: kdo smí deník číst, smí ji otevřít, kdo smí upravovat, smí ukládat.',
  // archive-journey
  'help.guide.archive-journey.title': 'Archivovat nebo smazat deník',
  'help.guide.archive-journey.goal': 'Uzavřete dokončený deník, nebo ho nadobro odstraňte.',
  'help.guide.archive-journey.step.1': 'Otevřete Nastavení cestovního deníku.',
  'help.guide.archive-journey.step.2':
    'Dole ho Archivovat cestu ukončí a označí jako archivovaný; Obnovit cestu ho vrátí. Smazat ho po potvrzení odstraní se všemi záznamy a fotkami.',
  'help.guide.archive-journey.result':
    'Archivovaný deník zůstává ke čtení i ke sdílení; jen se už neotvírá na dnešním dni.',
  'help.guide.archive-journey.tip.1': 'Smazání nelze vrátit a nedotkne se cest, se kterými byl deník propojený.',
  'help.guide.archive-journey.tip.2': 'Obálka, název a podtitul jsou ve stejném dialogu, nahoře.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio rozloží cestovní deník do tisknutelné fotoknihy. Otevírá se nad deníkem: vlevo lišta se stranami a obsahem, uprostřed dvoustrana, na které pracujete, vpravo její vlastnosti. Auto layout sestaví z vašich záznamů první návrh; všechno další je na vás: posouvat, ořezávat a měnit styl, s možností vrátit každý krok zpět.',
  'help.ctx.journey-studio.bullet.1':
    'Horní lišta: Back to the journey, Book view, Undo a Redo, Page format, Auto layout a Export. Značka Uloženo vedle názvu říká, kdy je kniha uložená.',
  'help.ctx.journey-studio.bullet.2':
    'Lišta vlevo s pěti sekcemi: Pages, Content (fotografie a záznamy deníku), Elements (text, tvary, čáry, mřížky, rámečky, ikony), Cesta (mapy, země, vlajky a značky sestavené z deníku) a Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Pracovní plocha: aktuální dvoustrana se spadávkou a bezpečnými okraji, pod ní lišta přiblížení, Fit to view a vpravo Stáhnout tuto dvoustranu.',
  'help.ctx.journey-studio.bullet.4':
    'Properties vpravo: poloha a velikost, ořez a ohnisko, výplň nebo přizpůsobení, vzhled, rohy, rámeček, pořadí vrstev a zámek toho, co je vybrané; čísla stran a dokument, když není vybrané nic.',
  'help.ctx.journey-studio.bullet.5':
    'Kniha má tvar vázané knihy: obálka, samostatná první strana, dvoustrany, samostatná poslední strana a zadní obálka. Čísla stran se počítají od první strany a tisknou se tak, jak je vidíte.',
  'help.ctx.journey-studio.bullet.6':
    'Navrhovat může víc lidí najednou: každý vidí kurzory ostatních s jejich jmény a uložení verze, kterou mezitím změnil někdo jiný, se vrátí jako konflikt místo přepsání jeho práce.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Sestavit knihu automaticky',
  'help.guide.studio-auto-layout.goal':
    'Získejte jedním kliknutím kompletní první návrh ze záznamů a fotografií deníku.',
  'help.guide.studio-auto-layout.step.1': 'Klikněte na Auto layout v horní liště.',
  'help.guide.studio-auto-layout.step.2':
    'Zvolte Celá kniha: nahradí každou stranu, ale zachová váš název a nastavení stran. Tato strana přestaví jen tu, která je na obrazovce, a nabízí se u dvoustrany, která vznikla ze záznamu.',
  'help.guide.studio-auto-layout.step.3':
    'Projděte si lištu se stranami. Undo vrátí celé rozložení zpět, pokud se vám víc líbilo to původní.',
  'help.guide.studio-auto-layout.result':
    'Jedna dvoustrana na každý záznam, v pořadí, s jeho fotografiemi, názvem a příběhem rozmístěnými za vás. Každý prvek dál sleduje svůj záznam, dokud ho neupravíte.',
  'help.guide.studio-auto-layout.tip.1': 'Obě položky jsou obyčejné kroky zpět, takže je klidně zkoušejte.',
  'help.guide.studio-auto-layout.tip.2':
    'Prvek, který Auto layout navázal na záznam, drží krok s úpravami toho záznamu, dokud na něj nesáhnete v Properties; tím se vazba přeruší.',
  // studio-pages
  'help.guide.studio-pages.title': 'Přidat, přesunout a odebrat dvoustrany',
  'help.guide.studio-pages.goal': 'Tvarujte knihu stranu po straně.',
  'help.guide.studio-pages.step.1':
    'Otevřete Pages v liště. Miniatury jsou kniha v pořadí: obálka, první strana, dvoustrany, poslední strana, zadní obálka.',
  'help.guide.studio-pages.step.2':
    'Přidat stranu dole vloží novou před poslední stranu; + mezi dvěma miniaturami ji vloží přesně tam.',
  'help.guide.studio-pages.step.3':
    'Najeďte na miniaturu a uvidíte její akce: Posunout dopředu, Posunout dozadu, Duplikovat stranu a Smazat stranu. Kliknutím na miniaturu otevřete tu dvoustranu na pracovní ploše.',
  'help.guide.studio-pages.result':
    'Obálka, první a poslední strana a zadní obálka zůstávají, kde jsou; nové dvoustrany vždy přistanou mezi nimi.',
  'help.guide.studio-pages.tip.1': 'Book view v horní liště ukáže celou knihu jako archy, tak jak bude svázaná.',
  'help.guide.studio-pages.tip.2': 'Čísla stran zapnete pod Dokument v Properties, když není vybrané nic.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Použít rozložení na dvoustranu',
  'help.guide.studio-layouts.goal': 'Dejte dvoustraně hotové uspořádání rámečků pro fotografie a text.',
  'help.guide.studio-layouts.step.1':
    'Otevřete Layouts v liště. Třináct rozložení pro dvoustrany a zvláštní sada pro obálku, zadní stranu a samostatné strany.',
  'help.guide.studio-layouts.step.2':
    'Klikněte na jedno. Dvoustrana na pracovní ploše převezme jeho rámečky; fotografie a text, které už jste měli, se do nich nalijí.',
  'help.guide.studio-layouts.result':
    'Prázdné rámečky čekají na obsah: přetáhněte na některý fotografii z Content, nebo použijte Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Rozložení je krok zpět jako každý jiný.',
  // studio-content
  'help.guide.studio-content.title': 'Umístit fotografie a záznamy na stranu',
  'help.guide.studio-content.goal': 'Dostaňte na dvoustranu vlastní materiál deníku.',
  'help.guide.studio-content.step.1':
    'Otevřete Content v liště. Photos vypisuje každý snímek deníku; Entries vypisuje záznamy s jejich textem.',
  'help.guide.studio-content.step.2':
    'Přetáhněte fotografii na dvoustranu nebo do prázdného rámečku, nebo pod ní klikněte na Add to this page. Nahrát fotografie přidá snímky, které v deníku ještě nejsou.',
  'help.guide.studio-content.step.3':
    'Pod záznamem vloží Title, Story a Place daný text na stranu jako textový prvek; Datum a souřadnice přijdou jako značky a fotografie záznamu jsou vypsané přímo tam.',
  'help.guide.studio-content.result':
    'Přetažená fotografie se stane fotografickým prvkem; text dál sleduje záznam, dokud ho neupravíte.',
  'help.guide.studio-content.tip.1': 'Vyhledávací pole nahoře v Content filtruje oba seznamy.',
  'help.guide.studio-content.tip.2':
    'Přetažení souboru z plochy počítače na pracovní plochu ho nahraje a rovnou umístí.',
  // studio-elements
  'help.guide.studio-elements.title': 'Přidat text, tvary a ikony',
  'help.guide.studio-elements.goal': 'Ozdobte dvoustranu něčím navíc kromě fotografií a příběhů.',
  'help.guide.studio-elements.step.1': 'Otevřete Elements v liště.',
  'help.guide.studio-elements.step.2':
    'Klikněte na textový styl pro nadpis nebo popisek, na tvar, čáru, mřížku, prázdný rámeček se stylem rámečku, nebo na ikonu z prohledávatelné knihovny. Každý přistane uprostřed dvoustrany, připravený k přesunu.',
  'help.guide.studio-elements.result':
    'Dvojklikem na textový prvek do něj píšete; Properties drží písmo, řez, velikost, proklad a zarovnání.',
  'help.guide.studio-elements.tip.1': 'Rámečky jsou prázdná místa pro fotografie: snímek do nich vložíte později.',
  // studio-travel
  'help.guide.studio-travel.title': 'Přidat mapu, vlajky a údaje',
  'help.guide.studio-travel.goal': 'Proměňte samotnou cestu v údaje na straně.',
  'help.guide.studio-travel.step.1': 'Otevřete Cesta v liště.',
  'help.guide.studio-travel.step.2':
    'Vyberte, co přidat: mapu trasy záznamů, obrysy zemí, seznam nebo mřížku zemí, vlajky, značku data, dne nebo vzdálenosti, nebo přehled celé cesty. Každý prvek se sestaví z dat deníku a obnovuje se s nimi.',
  'help.guide.studio-travel.result': 'Prvek se objeví na dvoustraně; Properties upraví jeho styl a u mapy její výřez.',
  'help.guide.studio-travel.tip.1':
    'Značky sledují záznam, ze kterého dvoustrana vznikla, takže značka data na automaticky rozložené dvoustraně už ukazuje ten den.',
  // studio-properties
  'help.guide.studio-properties.title': 'Upravit, co jste vybrali',
  'help.guide.studio-properties.goal': 'Posouvejte, ořezávejte, stylujte a vrstvěte prvek pomocí inspektoru.',
  'help.guide.studio-properties.step.1':
    'Klikněte na prvek na dvoustraně. Objeví se úchyty pro velikost a otočení; přetažením ho přesunete.',
  'help.guide.studio-properties.step.2':
    'Properties vpravo sleduje výběr: poloha a velikost, Crop s ohniskem, které rozhoduje, co zůstane v rámečku, Výplň nebo přizpůsobení, filtry Look, poloměr Corner, Rámeček, pořadí vrstev a Lock.',
  'help.guide.studio-properties.step.3':
    'Duplikovat a Delete jsou nahoře v inspektoru; Undo v horní liště vrátí cokoli z toho zpět.',
  'help.guide.studio-properties.result':
    'Zamčený prvek už na straně nejde uchopit, což chrání hotové rozložení, zatímco pracujete kolem něj.',
  'help.guide.studio-properties.tip.1': 'Kliknutí se Shiftem vybere víc prvků; inspektor je pak upravuje společně.',
  'help.guide.studio-properties.tip.2':
    'Úprava prvku, který umístil Auto layout, přeruší jeho vazbu na záznam; přestane sledovat další změny toho záznamu.',
  // studio-format
  'help.guide.studio-format.title': 'Zvolit formát strany',
  'help.guide.studio-format.goal':
    'Nastavte velikost, ve které se bude kniha tisknout, dřív než na ní bude záviset rozložení.',
  'help.guide.studio-format.step.1': 'Klikněte na Page format v horní liště.',
  'help.guide.studio-format.step.2':
    'Vyberte Square 21 × 21 cm, Square 30 × 30 cm, A4 nebo A5 landscape či portrait, nebo zadejte vlastní šířku a výšku v milimetrech. Spadávka a Bezpečná jsou pod tím.',
  'help.guide.studio-format.result':
    'Každá dvoustrana se kreslí v této velikosti, ve výchozím nastavení se spadávkou 3 mm a bezpečným okrajem 5 mm.',
  'help.guide.studio-format.tip.1':
    'Nejdřív změňte formát, pak spusťte Auto layout; rozložení se staví pro velikost, kterou najde.',
  'help.guide.studio-format.tip.2':
    'Zeptejte se ve své tiskárně na jejich hodnoty spadávky a bezpečného okraje a zadejte je.',
  // studio-export
  'help.guide.studio-export.title': 'Exportovat knihu jako PDF',
  'help.guide.studio-export.goal': 'Získejte soubor připravený k tisku, nebo takový, který se čte na obrazovce.',
  'help.guide.studio-export.step.1': 'Klikněte na Export v horní liště.',
  'help.guide.studio-export.step.2':
    'Zvolte Jednotlivé stránky, jeden list na arch v pořadí čtení, což tiskárna vyžaduje, nebo Dvojstrany, dvě strany najednou tak, jak se kniha otevírá. Ořezové značky přidají spadávku na každou hranu a označí, kde řezat.',
  'help.guide.studio-export.step.3':
    'Klikněte na Náhled tisku. Prohlížeč otevře strany a Uložit jako PDF z nich udělá soubor.',
  'help.guide.studio-export.result':
    'PDF s tolika archy, kolik dialog ohlásil, ve formátu strany, který jste nastavili.',
  'help.guide.studio-export.tip.1': 'Vytvoření PDF funguje jen na počítači, stejně jako Studio samo.',
  'help.guide.studio-export.tip.2':
    'Pro korekturu exportujte Dvojstrany bez ořezových značek; pro tiskárnu Jednotlivé stránky s nimi.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Použít dvoustranu znovu v jiné knize',
  'help.guide.studio-spread-file.goal': 'Přeneste návrh, který se vám líbí, z knihy jednoho deníku do jiné.',
  'help.guide.studio-spread-file.step.1':
    'S dvoustranou na pracovní ploše klikněte na Stáhnout tuto dvoustranu na pravém konci lišty přiblížení. Soubor obsahuje návrh, ne fotografie.',
  'help.guide.studio-spread-file.step.2':
    'V druhé knize otevřete Pages, klikněte na Importovat vedle Přidat stranu a vyberte soubor.',
  'help.guide.studio-spread-file.result':
    'Dvoustrana dorazí se svými rámečky a textovými styly; vložte do rámečků fotografie nového deníku.',
  'help.guide.studio-spread-file.tip.1': 'Soubor, který není návrh dvoustrany, je odmítnut s uvedením důvodu.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Nastavení',
  'help.ctx.settings.summary':
    'Vaše osobní nastavení, v postranním panelu vlevo jedna karta na téma. Většina přepínačů se projeví hned, jakmile je přepnete; formulář s tlačítkem Uložit dole na něj čeká. Nic tady nemění TREK nikomu jinému.',
  'help.ctx.settings.bullet.1':
    'Postranní panel vlevo: Zobrazení, Appearance, Mapa, Oznámení, Integrace, Offline a Účet. Doplňky se objeví, jakmile je nějaký nainstalovaný, O aplikaci na TREKu, který hostujete sami.',
  'help.ctx.settings.bullet.2':
    'Zobrazení je jazyk, jednotky, měna a to, s čím se aplikace otevře; Appearance je motiv, barvy, velikost textu a widgety přehledu.',
  'help.ctx.settings.bullet.3':
    'Mapa vybírá vykreslovač a jeho styl; Oznámení kanály, kterými vás zastihne; Integrace fotoknihovny, klíče API a MCP; Offline to, co si aplikace nechává na tomto zařízení.',
  'help.ctx.settings.bullet.4':
    'Účet drží váš profil, heslo, dvoufaktorové ověření, přístupové klíče a smazání vašeho účtu.',
  'help.ctx.settings-display.title': 'Zobrazení',
  'help.ctx.settings-display.summary':
    'Jazyk, jednotky a měna, jak se chová mapa a rezervace a s čím se TREK otevře. Každá změna tady se projeví hned.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: jazyk rozhraní, formát času, zobrazovaná měna a jednotky vzdálenosti a teploty.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: trasy rezervací vždy na mapě, pilulka Objevovat místa, optimalizace trasy od ubytování, skryté rezervační kódy a popisky tras rezervací.',
  'help.ctx.settings-display.bullet.3':
    'Spuštění: zda se TREK otevře na přehledu, nebo na aktivní cestě, a která karta cesty se ukáže první.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Jak TREK vypadá na tomto účtu: světlý nebo tmavý, barva zvýraznění, sklo a pohyb, velikost textu a které widgety přehled ukazuje. Všechno se projeví živě, na každém zařízení, kde se přihlásíte.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Světlé, Tmavé nebo Automatické a Color scheme s vlastním Custom accent.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density a Text size, s pokročilými velikostmi pro každou úroveň.',
  'help.ctx.settings-appearance.bullet.3': 'Dashboard widgets: jeden přepínač na widget, zvlášť pro Desktop a Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults dole vrátí všechno zpátky.',
  'help.ctx.settings-map.title': 'Mapa',
  'help.ctx.settings-map.summary':
    'Který engine mapy kreslí a v jakém stylu. Leaflet je klasická rastrová mapa, MapLibre kreslí vektorové dlaždice bez jakéhokoli tokenu, Mapbox přidává 3D budovy a terén s vaším vlastním tokenem.',
  'help.ctx.settings-map.bullet.1':
    'Poskytovatel mapy: Leaflet, MapLibre nebo Mapbox, každý s řádkem o tom, co potřebuje.',
  'help.ctx.settings-map.bullet.2':
    'Styl mapy a Šablona mapy: vzhled dlaždic plus token nebo klíč, který poskytovatel vyžaduje.',
  'help.ctx.settings-map.bullet.3':
    'Režim vysoké kvality pro vyhlazování a projekci glóbu; Uložit nastavení mapy volbu zapíše.',
  'help.ctx.settings-notifications.title': 'Oznámení',
  'help.ctx.settings-notifications.summary':
    'Kde vás TREK zastihne mimo aplikaci: téma ntfy, webhook nebo kanál, který poskytuje doplněk. Pod kanály rozhoduje jeden řádek na událost, co kam půjde.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: téma, volitelně vlastní server a volitelný přístupový token, s tlačítkem Otestovat, které hned jedno odešle.',
  'help.ctx.settings-notifications.bullet.2':
    'Webhook: jedna URL, která dostává každou událost jako JSON, s tlačítkem Otestovat.',
  'help.ctx.settings-notifications.bullet.3':
    'Řádky předvoleb: pro každou událost, který kanál je zapnutý. Kanály doplňků ukazují Nastavit, dokud nejsou nastavené.',
  'help.ctx.settings-integrations.title': 'Integrace',
  'help.ctx.settings-integrations.summary':
    'Všechno, co se k TREKu připojuje zvenčí: fotoknihovny pro deník, klíče API pro skripty a MCP endpoint s jeho tokeny a klienty OAuth pro AI asistenty.',
  'help.ctx.settings-integrations.bullet.1':
    'Poskytovatelé fotek: Immich a Synology Photos, každý se svou URL a klíčem, Otestovat připojení a Uložit.',
  'help.ctx.settings-integrations.bullet.2':
    'Klíče API: osobní klíče pro skripty a jiné nástroje, které volají TREK API vaším jménem.',
  'help.ctx.settings-integrations.bullet.3':
    'Konfigurace MCP: endpoint, hotová konfigurace klienta ke zkopírování a API tokeny.',
  'help.ctx.settings-integrations.bullet.4':
    'Klienti OAuth 2.1: aplikace, které se přihlašují přes TREK, s přesměrovacími URI, povolenými oprávněními, strojovými klienty a aktivními relacemi.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Co si TREK nechává na tomto zařízení, aby se cesta otevřela i bez připojení, a co se stane, když se změna provedená offline střetne se změnou provedenou jinde.',
  'help.ctx.settings-offline.bullet.1':
    'Offline režim: Vynutit offline režim přiměje aplikaci chovat se, jako by síť zmizela, pro testování nebo pro měřené připojení.',
  'help.ctx.settings-offline.bullet.2':
    'Příprava na offline: Stáhnout pro offline použití stáhne teď vaše cesty a jejich mapové dlaždice.',
  'help.ctx.settings-offline.bullet.3':
    'Co ukládat offline: mapové dlaždice zapnuté nebo vypnuté a přepínač pro každou cestu.',
  'help.ctx.settings-offline.bullet.4':
    'Konflikty synchronizace a Offline mezipaměť: strategie pro střety, počty čekajících a neúspěšných změn, Synchronizovat znovu a Vymazat mezipaměť.',
  'help.ctx.settings-account.title': 'Účet',
  'help.ctx.settings-account.summary':
    'Kdo na tomto TREKu jste a jak se přihlašujete: profil a avatar, heslo, dvoufaktorové ověření, přístupové klíče a úplně dole smazání účtu.',
  'help.ctx.settings-account.bullet.1': 'Profil: uživatelské jméno, e-mail a avatar, uložené tlačítkem Uložit profil.',
  'help.ctx.settings-account.bullet.2': 'Změnit heslo: současné heslo, nové heslo dvakrát, Aktualizovat heslo.',
  'help.ctx.settings-account.bullet.3':
    'Dvoufaktorové ověření (2FA) s autentizační aplikací a záložními kódy; Přístupové klíče pro přihlášení bez hesla.',
  'help.ctx.settings-account.bullet.4': 'Smazat účet dole, za potvrzením. Poslední správce sám sebe smazat nemůže.',
  // language-region
  'help.guide.language-region.title': 'Nastavit jazyk, jednotky a měnu',
  'help.guide.language-region.goal': 'Ať TREK mluví vaším jazykem a počítá tak, jak jste zvyklí.',
  'help.guide.language-region.step.1':
    'Vyberte jazyk rozhraní v Language & region. TREK se přepne hned, na každém zařízení, kde se přihlásíte.',
  'help.guide.language-region.step.2':
    'Pod ním zvolte formát času, zobrazovanou měnu a jednotky vzdálenosti a teploty.',
  'help.guide.language-region.result':
    'Data, vzdálenosti a peníze se čtou tak, jak čekáte; vlastní měna cesty se dál ukazuje vedle přepočtených částek.',
  'help.guide.language-region.tip.1':
    'Zobrazovaná měna slouží pro součty napříč cestami; každá cesta si nechává měnu, kterou jste jí dali.',
  'help.guide.language-region.tip.2': 'Jazyk určuje i názvy dnů a měsíců ve Vacay a v deníku.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Naladit, jak se chová mapa a rezervace',
  'help.guide.travel-map-prefs.goal': 'Rozhodněte, co mapa cesty ukazuje ve výchozím stavu.',
  'help.guide.travel-map-prefs.step.1':
    'V Travel & map drží Vždy zobrazovat trasy rezervací lety a vlaky na mapě, i když jejich den není otevřený; Objevovat místa na mapě ukazuje pilulku pro hledání míst; Optimalizovat trasu od ubytování začíná trasu tam, kde spíte.',
  'help.guide.travel-map-prefs.step.2':
    'Skrýt rezervační kódy schová potvrzovací čísla, dokud na ně nenajedete; Popisky tras rezervací napíše název rezervace podél její trasy.',
  'help.guide.travel-map-prefs.result': 'Mapa cesty se tím řídí na každé cestě, dokud to nepřepnete zpátky.',
  'help.guide.travel-map-prefs.tip.1':
    'Platí pro účet, ne pro cestu. Členové sdílené cesty vidí každý svoje vlastní volby.',
  // startup
  'help.guide.startup.title': 'Zvolit, s čím se TREK otevře',
  'help.guide.startup.goal': 'Přistaňte tam, kde pracujete nejvíc, ne pokaždé na přehledu.',
  'help.guide.startup.step.1': 'Pod Spuštění nastavte Úvodní stránka na Přehled nebo Aktivní cesta.',
  'help.guide.startup.step.2': 'Úvodní karta vybírá, která karta cesty se ukáže první, když nějakou otevřete.',
  'help.guide.startup.result': 'Příští přihlášení a příští klepnutí na logo vedou rovnou tam.',
  'help.guide.startup.tip.1':
    'Aktivní cesta znamená cestu, která dnes probíhá, nebo tu následující, když žádná neprobíhá.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Nastavit motiv a barvu zvýraznění',
  'help.guide.theme-scheme.goal': 'Ať je TREK světlý, tmavý nebo podle vašeho zařízení, v barvě, která se vám líbí.',
  'help.guide.theme-scheme.step.1':
    'Pod Theme vyberte Světlé, Tmavé nebo Automatické. Automatické se řídí vaším zařízením.',
  'help.guide.theme-scheme.step.2':
    'Zvolte Color scheme: Default, High contrast, Indigo, Teal, Rose, Amber, Violet nebo Custom.',
  'help.guide.theme-scheme.step.3':
    'S Custom vyberte zvýraznění z předvoleb, nebo zadejte vlastní. Kontrola kontrastu vedle říká, zda na něm text zůstane čitelný.',
  'help.guide.theme-scheme.result':
    'Tlačítka, odkazy a zvýraznění převezmou tuto barvu všude, na každém zařízení, kde se přihlásíte.',
  'help.guide.theme-scheme.tip.1': 'Rychlý přepínač světlého a tmavého je i v navigační liště; nastavuje stejný motiv.',
  'help.guide.theme-scheme.tip.2': 'High contrast je schéma, které zvolte, když se výchozí čte příliš měkce.',
  // readability
  'help.guide.readability.title': 'Upravit čitelnost a velikost textu',
  'help.guide.readability.goal': 'Méně skla, méně pohybu, více místa nebo větší písmo.',
  'help.guide.readability.step.1':
    'Pod Readability přepne Transparency skleněné panely na plné plochy, Reduce motion omezí animace na minimum a Density volí Comfortable nebo Compact.',
  'help.guide.readability.step.2':
    'Text size zvětšuje Everything naráz; Advanced text sizes umožní, aby se nadpisy, podnadpisy, text a popisky lišily.',
  'help.guide.readability.result': 'Celá aplikace se přizpůsobí hned, včetně panelů mapy a deníku.',
  'help.guide.readability.tip.1': 'Reduce motion se řídí i nastavením vašeho systému, když ho necháte být.',
  'help.guide.readability.tip.2':
    'Velikost textu se uplatňuje přes typografické úrovně, takže se nic neusekne; velikost, která se už nevejde, se zalomí.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Vybrat widgety přehledu',
  'help.guide.dashboard-widgets.goal': 'Ukazujte jen widgety, které používáte, zvlášť na počítači a na telefonu.',
  'help.guide.dashboard-widgets.step.1':
    'Pod Dashboard widgets zapněte nebo vypněte každý widget pro Desktop a pro Mobile: pravý postranní panel jako celek, měnu, sbírky, časová pásma, nadcházející rezervace, země v Atlasu a cestovní čísla.',
  'help.guide.dashboard-widgets.step.2': 'Reset to defaults dole vrátí celou kartu do stavu, v jakém byla dodána.',
  'help.guide.dashboard-widgets.result': 'Přehled se hned přeskládá; s vypnutým pravým panelem se vycentruje.',
  'help.guide.dashboard-widgets.tip.1': 'Widgety doplňku se objeví, jen dokud má správce ten doplněk zapnutý.',
  'help.guide.dashboard-widgets.tip.2':
    'Samotný přehled si pamatuje vaše zobrazení v mřížce nebo seznamu a pořadí řazení pro každé zařízení.',
  // map-provider
  'help.guide.map-provider.title': 'Vybrat engine a styl mapy',
  'help.guide.map-provider.goal': 'Přepínejte mezi klasickou mapou, vektorovými dlaždicemi a 3D mapou od Mapboxu.',
  'help.guide.map-provider.step.1':
    'Pod Poskytovatel mapy zvolte Leaflet pro klasickou 2D mapu s libovolnými rastrovými dlaždicemi, MapLibre pro vektorové dlaždice OpenFreeMap bez tokenu, nebo Mapbox pro vektorové dlaždice s 3D budovami a terénem.',
  'help.guide.map-provider.step.2':
    'Vyberte Styl mapy nebo Šablona mapy pro vzhled. Mapbox potřebuje Mapbox přístupový token, některé rastrové styly CARTO API klíč; odkaz vedle pole vede tam, kde ho získáte.',
  'help.guide.map-provider.step.3':
    'Režim vysoké kvality přidá vyhlazování a projekci glóbu. Klikněte na Uložit nastavení mapy.',
  'help.guide.map-provider.result':
    'Každou mapu v TREKu, cesty, Atlas, Sbírky i deník, kreslí engine, který jste vybrali.',
  'help.guide.map-provider.tip.1': 'Bez tokenu se Mapbox vrátí k výchozí mapě, místo aby neukázal nic.',
  'help.guide.map-provider.tip.2':
    'Mapové dlaždice, které ukládáte offline, pocházejí od poskytovatele, který je aktivní, když je stahujete.',
  // notification-channels
  'help.guide.notification-channels.title': 'Nastavit, kde vás oznámení zastihnou',
  'help.guide.notification-channels.goal':
    'Dostávejte připomínky cest a události spolupráce na telefon nebo do jiného nástroje.',
  'help.guide.notification-channels.step.1':
    'Pod Oznámení vyplňte Téma Ntfy; přidejte vlastní URL serveru Ntfy a Přístupový token, pokud nějaký provozujete. Otestovat pošle zprávu hned.',
  'help.guide.notification-channels.step.2':
    'Nebo zadejte URL webhooku, která dostává každou událost jako JSON, a stejně ji Otestovat.',
  'help.guide.notification-channels.step.3':
    'V řádcích níže zapněte nebo vypněte každou událost pro každý kanál. Kanál doplňku říká Nastavit, dokud není nastavený v nastavení doplňku; Odeslat test jeden zkusí.',
  'help.guide.notification-channels.result':
    'Události odcházejí kanály, které jsou zapnuté. Zvonek v navigační liště je v aplikaci ukazuje dál bez ohledu na to.',
  'help.guide.notification-channels.tip.1':
    'Předvolby pro jednotlivou cestu jsou na cestě samotné, v jejím nastavení oznámení.',
  'help.guide.notification-channels.tip.2':
    'Správce může všem předvyplnit výchozí server ntfy; téma si dál volíte sami.',
  // photo-providers
  'help.guide.photo-providers.title': 'Připojit fotoknihovnu',
  'help.guide.photo-providers.goal': 'Ať si deník stáhne fotky dne z Immich nebo Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Pod Integrace najděte sekci poskytovatele a zadejte jeho URL a klíč API. Immich navíc nabízí zrcadlit nahrané fotky z deníku zpět do knihovny.',
  'help.guide.photo-providers.step.2': 'Klikněte na Otestovat připojení, potom na Uložit.',
  'help.guide.photo-providers.result':
    'Karta External photos v editoru záznamu prohledá připojenou knihovnu pro den záznamu, nejblíž k místu záznamu napřed.',
  'help.guide.photo-providers.tip.1': 'Připojení je vaše: ostatní členové deníku si připojují svoje vlastní knihovny.',
  'help.guide.photo-providers.tip.2':
    'Poskytovatel bez GPS dat ve fotkách funguje také; seznam je pak seřazený podle času.',
  // api-keys
  'help.guide.api-keys.title': 'Vytvořit klíč API',
  'help.guide.api-keys.goal': 'Ať skript nebo jiný nástroj volá TREK API jako vy.',
  'help.guide.api-keys.step.1':
    'Pod Klíče API klikněte na Vytvořit klíč a dejte mu název, který říká, kde se bude používat.',
  'help.guide.api-keys.step.2':
    'Zkopírujte klíč z dialogu: ukáže se jen jednou. Klíč ze seznamu smažte, když ho nástroj už nepotřebuje.',
  'help.guide.api-keys.result':
    'Požadavky s tímto klíčem jednají s vašimi oprávněními; seznam ukazuje, kdy byl každý klíč vytvořen a naposledy použit.',
  'help.guide.api-keys.tip.1': 'Jeden klíč na nástroj dělá odvolání bezbolestným.',
  'help.guide.api-keys.tip.2':
    'Pro AI asistenta použijte místo toho MCP s OAuth; klíče API jsou pro prosté HTTP klienty.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Připojit AI asistenta přes MCP',
  'help.guide.mcp-oauth.goal': 'Dejte Claude, IDE nebo jinému klientovi MCP přístup ke svým cestám.',
  'help.guide.mcp-oauth.step.1':
    'Pod Konfigurace MCP zkopírujte MCP endpoint, nebo celý blok Konfigurace klienta pro klienta, který bere JSON úryvek.',
  'help.guide.mcp-oauth.step.2':
    'Klienti, kteří se přihlašují přes prohlížeč, používají OAuth 2.1: Nový klient pod Klienti OAuth 2.1, s jeho Přesměrovací URI, Povolená oprávnění a pro server bez prohlížeče Strojový klient.',
  'help.guide.mcp-oauth.step.3':
    'Obnovit tajný klíč a Smazat klienta jsou u každého klienta; Aktivní relace OAuth vypisují, co je přihlášené, a nechají vás to odvolat. API tokeny s Vytvořit nový token jsou starší cesta dovnitř.',
  'help.guide.mcp-oauth.result':
    'Klient může číst a měnit to, co jeho oprávnění dovolují, jako vy, a každá akce se ukáže pod vaším jménem.',
  'help.guide.mcp-oauth.tip.1':
    'Oprávnění jsou záchranná síť: dejte klientovi jen oprávnění ke čtení, dokud nepotřebuje víc.',
  'help.guide.mcp-oauth.tip.2': 'Správce může MCP vypnout pro celou instanci; pak tahle sekce chybí.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Vzít cesty offline',
  'help.guide.offline-prepare.goal': 'Mějte své cesty a jejich mapy na tomto zařízení, než připojení vypadne.',
  'help.guide.offline-prepare.step.1':
    'Pod Co ukládat offline nechte Ukládat mapové dlaždice offline zapnuté a zapněte cesty, které chcete mít na tomto zařízení.',
  'help.guide.offline-prepare.step.2':
    'Klikněte na Stáhnout pro offline použití pod Příprava na offline. Stáhne cesty a dlaždice kolem jejich míst.',
  'help.guide.offline-prepare.step.3':
    'Vynutit offline režim pod Offline režim vám dovolí ověřit, že je všechno na místě, než vyrazíte.',
  'help.guide.offline-prepare.result':
    'Cesty se otevřou bez připojení; změny, které uděláte, čekají ve frontě a odejdou po opětovném připojení.',
  'help.guide.offline-prepare.tip.1':
    'Nejvíc místa zaberou dlaždice: sekce Offline mezipaměť ukazuje, co je uložené, pro každou cestu.',
  'help.guide.offline-prepare.tip.2':
    'Nainstalujte si TREK z prohlížeče jako aplikaci, offline start je pak nejhladší.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Rozhodnout, co vyhraje při konfliktu synchronizace',
  'help.guide.offline-conflicts.goal': 'Zvolte, jak TREK urovná změnu provedenou offline proti změně provedené jinde.',
  'help.guide.offline-conflicts.step.1':
    'Pod Konflikty synchronizace vyberte Vždy se mě zeptat, Vždy zachovat moji verzi nebo Vždy zachovat verzi ze serveru.',
  'help.guide.offline-conflicts.step.2':
    'Offline mezipaměť ukazuje cesty, čekající a neúspěšné změny a konflikty; Synchronizovat znovu odešle frontu, Vymazat mezipaměť vyprázdní zařízení.',
  'help.guide.offline-conflicts.result':
    'S dotazem konflikt ukáže obě verze a nechá vás vybrat; s ostatními dvěma se urovná potichu.',
  'help.guide.offline-conflicts.tip.1':
    'Vymazat mezipaměť odstraní jen kopii na tomto zařízení; na serveru se ničeho nedotkne.',
  // profile
  'help.guide.profile.title': 'Změnit profil',
  'help.guide.profile.goal': 'Aktualizujte své jméno, e-mail a obrázek.',
  'help.guide.profile.step.1':
    'Pod Účet upravte Uživatelské jméno a E-mail. Avatar přijme vaše vlastní nahrání; odstraňte ho a vrátíte se k iniciálám.',
  'help.guide.profile.step.2': 'Klikněte na Uložit profil.',
  'help.guide.profile.result': 'Vaše jméno a obrázek se aktualizují všude naráz, včetně cest, které sdílíte.',
  'help.guide.profile.tip.1':
    'Účet, který se přihlašuje přes OIDC, to tady ukazuje; e-mail pak přichází od poskytovatele.',
  // password
  'help.guide.password.title': 'Změnit heslo',
  'help.guide.password.goal': 'Nastavte nové heslo.',
  'help.guide.password.step.1': 'Pod Změnit heslo zadejte současné heslo a potom dvakrát nové.',
  'help.guide.password.step.2': 'Klikněte na Aktualizovat heslo.',
  'help.guide.password.result': 'Nové heslo platí od příštího přihlášení; ostatní relace zůstávají přihlášené.',
  'help.guide.password.tip.1': 'Účet, který se přihlašuje přes OIDC, nemá žádné heslo TREKu, které by šlo změnit.',
  // mfa
  'help.guide.mfa.title': 'Zapnout dvoufaktorové ověření',
  'help.guide.mfa.goal': 'Chraňte účet kódem z autentizační aplikace.',
  'help.guide.mfa.step.1': 'Pod Dvoufaktorové ověření (2FA) klikněte na Nastavit autentizační aplikaci.',
  'help.guide.mfa.step.2':
    'Naskenujte QR kód svou aplikací, nebo zadejte tajný klíč ručně, potom napište šestimístný kód, který ukazuje, a klikněte na Zapnout 2FA.',
  'help.guide.mfa.step.3':
    'Uložte si záložní kódy: zkopírujte je, stáhněte nebo vytiskněte. Každý funguje jednou, když nemáte telefon po ruce.',
  'help.guide.mfa.result': 'Každé přihlášení se po hesle zeptá na kód.',
  'help.guide.mfa.tip.1': 'Vypnout 2FA vyžaduje vaše heslo a aktuální kód.',
  'help.guide.mfa.tip.2': 'Správce může 2FA vyžadovat od všech; pak ho tady vypnout nejde.',
  // passkeys
  'help.guide.passkeys.title': 'Přihlásit se přístupovým klíčem',
  'help.guide.passkeys.goal': 'Použijte otisk prstu, obličej nebo PIN svého zařízení místo hesla.',
  'help.guide.passkeys.step.1':
    'Pod Přístupové klíče klikněte na Přidat přístupový klíč a potvrďte na svém zařízení. Dejte mu název, který říká, o jaké zařízení jde.',
  'help.guide.passkeys.step.2':
    'Seznam ukazuje každý přístupový klíč s názvem a časem posledního použití; tlačítko smazání jeden odstraní.',
  'help.guide.passkeys.result': 'Přihlašovací stránka nabídne přístupový klíč; heslo zůstává jako záloha.',
  'help.guide.passkeys.tip.1':
    'Přístupový klíč žije na zařízení nebo v jeho správci hesel, přidejte proto jeden na každé zařízení.',
  'help.guide.passkeys.tip.2':
    'Přístupové klíče potřebují HTTPS; na instanci s prostým HTTP sekce vysvětlí, proč nejsou k dispozici.',
  // delete-account
  'help.guide.delete-account.title': 'Smazat účet',
  'help.guide.delete-account.goal': 'Odstraňte svůj účet a data, která jsou jen vaše.',
  'help.guide.delete-account.step.1': 'Úplně dole v Účet klikněte na Smazat účet a potvrďte.',
  'help.guide.delete-account.result':
    'Váš účet, vaše vlastní cesty a vaše deníky jsou pryč; cesty, které sdílíte s ostatními, zůstanou jim.',
  'help.guide.delete-account.tip.1':
    'Poslední správce instance sám sebe smazat nemůže; nejdřív udělejte správcem někoho jiného.',
  'help.guide.delete-account.tip.2': 'Není cesty zpět. Než potvrdíte, exportujte, co si chcete nechat.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administrace',
  'help.ctx.admin.summary':
    'Instance, která stojí za TREKem všech: kdo se smí přihlásit a jak, co je zapnuté, kde leží soubory, jak server lidi zastihne a jak se zálohuje. Tuto stránku vidí jen administrátoři; každá karta je v postranním panelu samostatná obrazovka.',
  'help.ctx.admin.bullet.1':
    'Čtyři karty nahoře počítají uživatele, cesty, místa a soubory; banner nad nimi ohlašuje novější vydání TREKu.',
  'help.ctx.admin.bullet.2':
    'Uživatelé a Výchozí nastavení uživatele: účty, pozvánky a nastavení mapy, se kterým nový účet začíná.',
  'help.ctx.admin.bullet.3':
    'Personalizace, Nastavení, Doplňky a Pluginy: šablony pro balení, kategorie a školní prázdniny; způsoby přihlášení a API klíče; funkční moduly; pluginy třetích stran.',
  'help.ctx.admin.bullet.4':
    'Úložiště, Oznámení, MCP přístup a GitHub: kam jdou nahrané soubory, kanály pro celou instanci, tokeny a relace AI klientů a historie vydání.',
  'help.ctx.admin.bullet.5':
    'Zálohování a Audit: zálohy na vyžádání i podle plánu a protokol bezpečnostně relevantních událostí.',
  'help.ctx.admin-users.title': 'Uživatelé',
  'help.ctx.admin-users.summary':
    'Každý účet na tomto TREKu, s rolí, e-mailem a posledním přihlášením, a pozvánky, díky kterým se lidé mohou registrovat na uzavřené instanci.',
  'help.ctx.admin-users.bullet.1':
    'Tabulka: uživatelské jméno, e-mail, role, datum vytvoření, poslední přihlášení a akce v každém řádku. Vy jste označeni jako vy.',
  'help.ctx.admin-users.bullet.2': 'Vytvořit uživatele nahoře přidá účet ručně, s heslem, které předáte.',
  'help.ctx.admin-users.bullet.3':
    'Pozvánky níže: jednorázové registrační odkazy s limitem použití, platností a, pokud chcete, cestou, ke které se nový uživatel po příchodu připojí.',
  'help.ctx.admin-users.bullet.4':
    'Nastavení oprávnění dole: pro každou akci, kdo ji smí provést, Všichni, Členové výletu, Vlastník výletu nebo Pouze administrátor.',
  'help.ctx.admin-defaults.title': 'Výchozí nastavení uživatele',
  'help.ctx.admin-defaults.summary':
    'Nastavení, se kterým nový účet začíná, aby nikdo nemusel nejdřív hledat kartu mapy: poskytovatel mapy, styl, tokeny a kvalita.',
  'help.ctx.admin-defaults.bullet.1':
    'Poskytovatel mapy, styl a token Mapbox, klíč CARTO a kvalita Mapbox, přesně tak, jak by si je uživatel nastavil pod Nastavení, Mapy.',
  'help.ctx.admin-defaults.bullet.2':
    'Obnovení na vestavěnou výchozí hodnotu u každého pole vrátí vlastní volbu TREKu; vlastní nastavení uživatele má před těmito vždy přednost.',
  'help.ctx.admin-config.title': 'Personalizace',
  'help.ctx.admin-config.summary':
    'Co sdílí každá cesta na instanci: šablony pro balení, sada kategorií pro místa a sbírky a katalog školních prázdnin, ze kterého čerpá Vacay.',
  'help.ctx.admin-config.bullet.1':
    'Šablony pro balení: pojmenované seznamy kategorií a položek, ze kterých může seznam na balení cesty vyjít.',
  'help.ctx.admin-config.bullet.2':
    'Kategorie: název, ikona a barva kategorií používaných napříč TREKem, od inspektoru míst po Sbírky.',
  'help.ctx.admin-config.bullet.3':
    'Školní prázdniny: katalog zemí a regionů pro místa, která vestavěné zdroje nepokrývají.',
  'help.ctx.admin-settings.title': 'Nastavení',
  'help.ctx.admin-settings.summary':
    'Jak se lidé dostanou dovnitř a s čím smí server mluvit: způsoby přihlášení a registrace, SSO, přístupové klíče, politika dvoufázového ověření, API klíče pro mapy, místa a obrázky, poskytovatelé hledání a veřejné dopravy a typy souborů, které smí nahrané soubory mít.',
  'help.ctx.admin-settings.bullet.1':
    'Authentication Methods: Password Login, Password Registration, SSO Login, SSO Auto-Provisioning a Vyžadovat dvoufázové ověření (2FA).',
  'help.ctx.admin-settings.bullet.2':
    'Jednotné přihlášení (OIDC) s vydavatelem, klientem a zobrazovaným jménem; Přihlášení přístupovým klíčem s Relying Party ID (doména) a Povolené origins.',
  'help.ctx.admin-settings.bullet.3':
    'API klíče: Google Maps, Unsplash a Amap, každý s tlačítkem Testovat; K čemu se klíč používá zúží klíč Google na funkce, za které chcete platit.',
  'help.ctx.admin-settings.bullet.4':
    'Poskytovatel hledání míst a Poskytovatel veřejné dopravy určují, kdo odpovídá na hledání a trasy; Povolené typy souborů omezují nahrávání.',
  'help.ctx.admin-addons.title': 'Doplňky',
  'help.ctx.admin-addons.summary':
    'Funkční moduly TREKu, každý s přepínačem: Seznamy, Náklady, Dokumenty, Vacay, Atlas, Spolupráce, Cestovní deník, Sbírky, Cesta autem, MCP, AirTrail, Dawarich a AI parsování. Vypnuto znamená, že položka v navigaci, cesty i API zmizí všem.',
  'help.ctx.admin-addons.bullet.1':
    'Jedna dlaždice na doplněk s jeho přepínačem a, pokud nějaké má, podřádky s jeho možnostmi.',
  'help.ctx.admin-addons.bullet.2':
    'Poskytovatelé fotek a poskytovatelé dokumentů se tu objevují také jako dlaždice, takže uživatelům lze nabídnout Immich nebo Synology.',
  'help.ctx.admin-addons.bullet.3': 'Sledování zavazadel má vlastní přepínač pod dlaždicemi.',
  'help.ctx.admin-plugins.title': 'Pluginy',
  'help.ctx.admin-plugins.summary':
    'Pluginy třetích stran, které běží ve vlastním procesu vedle TREKu, každý s oprávněními, o která požádal při instalaci. Instalujte z katalogu, nahrajte balíček nebo při vývoji propojte složku.',
  'help.ctx.admin-plugins.bullet.1':
    'Seznam: každý nainstalovaný plugin s verzí, stavem, podpisem a oprávněními, která drží; v každém řádku aktivovat, deaktivovat, aktualizovat nebo odinstalovat.',
  'help.ctx.admin-plugins.bullet.2':
    'Nahrát plugin přijme soubor balíčku; Znovu prohledat najde složku pluginu propojenou pro vývoj.',
  'help.ctx.admin-plugins.bullet.3':
    'Povolení hostitelé u každého pluginu: adresy, které plugin smí volat, protože odchozí provoz je ve výchozím stavu zakázaný.',
  'help.ctx.admin-storage.title': 'Úložiště',
  'help.ctx.admin-storage.summary':
    'Kde leží nahrané soubory: místní disk, bucket S3 nebo zrcadlo, které zapisuje do obou. Každá kategorie nahrávání může jít do jiného backendu a Stav říká, zda každý backend odpovídá.',
  'help.ctx.admin-storage.bullet.1':
    'Backendy: název a typ každého z nich, s Test, Upravit a Odebrat; backend nastavený prostředím je tady jen pro čtení.',
  'help.ctx.admin-storage.bullet.2':
    'Kategorie: obálky, dokumenty, fotky deníku a ostatní, každá přiřazená backendu; změna jedné nabídne přesun stávajících souborů.',
  'help.ctx.admin-storage.bullet.3':
    'Stav: kontrola každého backendu a kontrolní soubor, který dokládá, že konfigurace je ta, kterou server vidí.',
  'help.ctx.admin-notifications.title': 'Oznámení',
  'help.ctx.admin-notifications.summary':
    'Kanály, které instance nabízí svým uživatelům, a ty, které zastihnou vás jako administrátora. Uživatelé si vybírají vlastní témata a URL pod Nastavení; vy rozhodujete, co existuje, a nastavujete e-mail.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy a Webhook: jeden panel pro každý, s přepínačem, který kanál nabídne uživatelům, a konfigurací na straně serveru, kterou potřebuje.',
  'help.ctx.admin-notifications.bullet.2': 'Připomínky výletů: zda server posílá připomínku před začátkem cesty.',
  'help.ctx.admin-notifications.bullet.3':
    'Admin Ntfy a Admin webhook: kam jdou události pro administrátory, jako neúspěšná záloha nebo nové vydání, s tlačítkem pro test.',
  'help.ctx.admin-mcp-tokens.title': 'MCP přístup',
  'help.ctx.admin-mcp-tokens.summary':
    'Každý token a každá relace OAuth, které AI klienti drží vůči tomuto TREKu, napříč všemi uživateli, s možností kterýkoli z nich odvolat.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'API tokeny: kdo ho vytvořil, kdy byl naposledy použit, a Smazat.',
  'help.ctx.admin-mcp-tokens.bullet.2': 'OAuth relace: klient, uživatel a udělená oprávnění, a Odvolat.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Co je v TREKu nového: historie vydání z GitHubu, verze, kterou provozujete, a zda vyšla novější. Samotná aktualizace probíhá mimo aplikaci, na hostiteli.',
  'help.ctx.admin-github.bullet.1':
    'Historie verzí vypisuje vydání s jejich poznámkami; nejnovější nese Nejnovější a vaše verze je označená.',
  'help.ctx.admin-github.bullet.2':
    'Dostupná aktualizace se objeví v hlavičce, jakmile existuje novější vydání, s postupem aktualizace pro Docker a jiné instalace.',
  'help.ctx.admin-backup.title': 'Zálohování',
  'help.ctx.admin-backup.summary':
    'Úplné zálohy databáze a nahraných souborů, vytvořené ručně nebo podle plánu, uložené na serveru a ke stažení jako jeden soubor. Obnovit jednu z nich vrátí zpět.',
  'help.ctx.admin-backup.bullet.1':
    'Záloha dat: Vytvořit zálohu a seznam existujících záloh se Stáhnout, Obnovit a smazáním.',
  'help.ctx.admin-backup.bullet.2': 'Nahrát zálohu přinese soubor vytvořený na jiné instanci nebo v dřívější den.',
  'help.ctx.admin-backup.bullet.3':
    'Automatické zálohování: zapnuto nebo vypnuto, interval, hodina a den a kolik záloh uchovat.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'Protokol bezpečnostně relevantních a administrativních událostí: přihlášení a neúspěšné pokusy, změny MFA, změny uživatelů a nastavení, zálohy a obnovení. Jen pro čtení, nejnovější první.',
  'help.ctx.admin-audit.bullet.1': 'Jeden řádek na událost s časem, uživatelem, akcí, zdrojem, IP a podrobnostmi.',
  'help.ctx.admin-audit.bullet.2': 'Obnovit znovu načte; Načíst další jde dál do minulosti.',
  // create-user
  'help.guide.create-user.title': 'Vytvořit uživatele',
  'help.guide.create-user.goal': 'Přidejte účet ručně, bez pozvánky.',
  'help.guide.create-user.step.1': 'Klikněte na Vytvořit uživatele nahoře na kartě Uživatelé.',
  'help.guide.create-user.step.2':
    'Zadejte Uživatelské jméno, E-mail a Heslo a zvolte Role: Uživatel nebo Administrátor.',
  'help.guide.create-user.step.3': 'Klikněte na Vytvořit uživatele.',
  'help.guide.create-user.result':
    'Účet se objeví v tabulce a může se hned přihlásit; heslo předejte kanálem, kterému důvěřujete.',
  'help.guide.create-user.tip.1': 'Pro člověka, který si má zvolit vlastní heslo, je lepší cestou pozvánka.',
  'help.guide.create-user.tip.2':
    'Administrátoři vidí tuto stránku a protokol auditu; všechno ostatní je pro obě role stejné.',
  // edit-user
  'help.guide.edit-user.title': 'Změnit roli nebo heslo uživatele',
  'help.guide.edit-user.goal': 'Někoho povyšte, degradujte nebo mu po ztraceném hesle vraťte přístup.',
  'help.guide.edit-user.step.1': 'Klikněte na tužku v řádku uživatele. Otevře se Upravit uživatele s údaji účtu.',
  'help.guide.edit-user.step.2':
    'Změňte Role, nastavte Nové heslo nebo klikněte na Resetovat přístupové klíče, když dotyčný přišel o zařízení, na kterém je měl, a pak Uložit.',
  'help.guide.edit-user.result': 'Změna platí od dalšího požadavku; nové heslo funguje od dalšího přihlášení.',
  'help.guide.edit-user.tip.1': 'Sami sobě roli administrátora odebrat nemůžete, dokud jste poslední administrátor.',
  'help.guide.edit-user.tip.2':
    'Reset přístupových klíčů zachová heslo; nové přístupové klíče si dotyčný přidá pod Nastavení, Účet.',
  // invite-links
  'help.guide.invite-links.title': 'Pozvat někoho odkazem',
  'help.guide.invite-links.goal':
    'Umožněte člověku registraci na uzavřené instanci a, pokud chcete, rovnou ho přiveďte do cesty.',
  'help.guide.invite-links.step.1': 'Pod Pozvánky klikněte na Vytvořit odkaz.',
  'help.guide.invite-links.step.2':
    'Nastavte Max. použití a Vyprší za, volitelně Přidat k cestě (volitelné), a klikněte na Vytvořit a zkopírovat.',
  'help.guide.invite-links.step.3':
    'Odkaz pošlete. Každý řádek ukazuje, kolikrát byl použit a kdo ho vytvořil; Kopírovat odkaz ho zkopíruje znovu a vyčerpané či prošlé odkazy nesou označení Využito nebo Expirované.',
  'help.guide.invite-links.result':
    'Kdo odkaz otevře, zaregistruje se s vlastním heslem a se zvolenou cestou se k ní hned připojí.',
  'help.guide.invite-links.tip.1': 'Pozvánky fungují, i když je Password Registration pod Nastavení vypnutá.',
  'help.guide.invite-links.tip.2':
    'Odkaz s jedním použitím a krátkou platností je pro jednoho člověka nejbezpečnější volba.',
  // delete-user
  'help.guide.delete-user.title': 'Smazat uživatele',
  'help.guide.delete-user.goal': 'Odstraňte účet a všechno, co vlastní jen on.',
  'help.guide.delete-user.step.1': 'Klikněte na ikonu koše v řádku uživatele a potvrďte Smazat uživatele.',
  'help.guide.delete-user.result':
    'Účet, jeho vlastní cesty a jeho deníky jsou pryč; cesty sdílené s ostatními zůstávají zbývajícím členům.',
  'help.guide.delete-user.tip.1': 'Nejde to vrátit zpět. Pokud si nejste jistí, udělejte nejdřív zálohu.',
  'help.guide.delete-user.tip.2':
    'Posledního administrátora smazat nelze; nejdřív udělejte administrátorem někoho jiného.',
  // permissions
  'help.guide.permissions.title': 'Rozhodněte, kdo smí co',
  'help.guide.permissions.goal': 'Nastavte pro každou akci, která role ji na tomto TREKu smí provést.',
  'help.guide.permissions.step.1':
    'Pod Nastavení oprávnění najděte akci v její skupině, například Smazat výlety pod Správa výletů, a zvolte úroveň: Všichni, Členové výletu, Vlastník výletu nebo Pouze administrátor. Změněný řádek je označen jako upraveno.',
  'help.guide.permissions.step.2': 'Klikněte na Uložit. Obnovit výchozí vrátí každý řádek na vestavěnou úroveň.',
  'help.guide.permissions.result':
    'Pravidlo platí pro všechny výlety najednou; tlačítka a nabídky lidí pod danou úrovní zmizí.',
  'help.guide.permissions.tip.1': 'Vlastník výletu je ten, kdo výlet vytvořil; administrátoři smějí vždy všechno.',
  'help.guide.permissions.tip.2':
    'Raději snižte úroveň, než abyste člena mazali: člen, který nesmí upravovat, může stále číst a komentovat.',
  // default-map
  'help.guide.default-map.title': 'Nastavit výchozí mapu pro nové uživatele',
  'help.guide.default-map.goal': 'Dejte každému novému účtu funkční mapu bez osobního tokenu.',
  'help.guide.default-map.step.1':
    'Pod Mapy zvolte Mapový engine a pro Mapbox nebo MapLibre Styl mapy, Sdílený token Mapbox a Režim vysoké kvality; pro rastrovou mapu Šablona mapy a Sdílený klíč CARTO.',
  'help.guide.default-map.step.2':
    'Vedle každého pole, které jste změnili, vrátí obnovit vlastní volbu TREKu. Výchozí nastavení uživatele vlevo dělá totéž pro Barevné schéma, jednotky a měnu.',
  'help.guide.default-map.result':
    'Nové účty s tímto začínají; kdo si pod Nastavení nastavil vlastní mapu, tu svou si ponechá.',
  'help.guide.default-map.tip.1':
    'Token zadaný tady sdílí všichni, kdo žádný vlastní nemají, takže hlídejte jeho kvótu.',
  'help.guide.default-map.tip.2': 'Tyto výchozí hodnoty sledují i stávající účty, které se karty mapy nikdy nedotkly.',
  // packing-templates
  'help.guide.packing-templates.title': 'Sestavit šablonu pro balení',
  'help.guide.packing-templates.goal': 'Dejte cestám seznam na balení, ze kterého mohou vyjít, místo prázdného.',
  'help.guide.packing-templates.step.1': 'Klikněte na Nová šablona, napište název a potvrďte fajfkou.',
  'help.guide.packing-templates.step.2':
    'Otevřete šablonu a klikněte na Přidat kategorii; pod každou kategorií přidává + položky a položka potřebuje jen název.',
  'help.guide.packing-templates.step.3':
    'Všechno se ukládá průběžně. Tužka přejmenuje šablonu, kategorii nebo položku, koš ji smaže.',
  'help.guide.packing-templates.result':
    'Šablona se nabízí v seznamu na balení každé cesty; její použití položky zkopíruje, takže je cesta může volně měnit.',
  'help.guide.packing-templates.tip.1':
    'Jedna šablona na druh cesty, pláž, město, turistika, je lepší než jeden obří seznam.',
  'help.guide.packing-templates.tip.2': 'Smazání šablony se nedotkne cest, které ji už použily.',
  // categories
  'help.guide.categories.title': 'Spravovat sadu kategorií',
  'help.guide.categories.goal': 'Rozhodněte, které kategorie mohou místa a sbírky nést a jak vypadají.',
  'help.guide.categories.step.1':
    'Klikněte na Nová kategorie, zadejte název, zvolte ikonu a barvu; Náhled ukáže výsledek. Klikněte na Vytvořit.',
  'help.guide.categories.step.2':
    'Najeďte na kategorii v seznamu, abyste ji upravili nebo smazali. Smazání žádá potvrzení.',
  'help.guide.categories.result':
    'Sada platí všude najednou: v inspektoru míst, špendlících na mapě, Sbírkách a filtrech.',
  'help.guide.categories.tip.1':
    'Místa si drží id kategorie, takže přejmenování kategorie ji přejmenuje na každém místě.',
  'help.guide.categories.tip.2':
    'Smazaná kategorie nechá svá místa bez kategorie; pokud na tom záleží, nejdřív je přeřaďte.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Ručně spravovat školní prázdniny',
  'help.guide.school-holiday-catalog.goal': 'Pokryjte zemi nebo region, které vestavěné zdroje prázdnin nepokrývají.',
  'help.guide.school-holiday-catalog.step.1':
    'Pod Školní prázdniny klikněte na Přidat zemi, zadejte Země a její Kód země (např. US) a Uložit; pak Přidat region pro každou její část, která se liší.',
  'help.guide.school-holiday-catalog.step.2':
    'Kliknutím na region otevřete Region nebo školní obvod: Přidat období, každému dejte Název prázdnin, Datum začátku a Datum konce, a Uložit. Koš odstraní období, region nebo, jakmile nemá žádné regiony, zemi.',
  'help.guide.school-holiday-catalog.result':
    'Uživatelé najdou zemi a region pod Nastavení ve Vacay a vidí období ve své roční mřížce.',
  'help.guide.school-holiday-catalog.tip.1':
    'Regiony z vestavěných zdrojů tady upravit nelze; pokud je nějaké datum špatně, přidejte vedle nich ruční region.',
  // auth-methods
  'help.guide.auth-methods.title': 'Rozhodnout, jak se lidé přihlašují',
  'help.guide.auth-methods.goal': 'Otevřete nebo zavřete přihlášení heslem, SSO a registraci a vyžadujte 2FA.',
  'help.guide.auth-methods.step.1':
    'Pod Authentication Methods zapněte nebo vypněte Password Login a Password Registration. Vypnutá registrace znamená nové účty jen přes pozvánky, SSO nebo ručně.',
  'help.guide.auth-methods.step.2':
    'SSO Login a SSO Auto-Provisioning potřebují níže nastavené Jednotné přihlášení (OIDC); auto-provisioning vytvoří účet při prvním přihlášení někoho přes SSO.',
  'help.guide.auth-methods.step.3':
    'Vyžadovat dvoufázové ověření (2FA) přiměje každé přihlášení heslem nastavit při dalším přihlášení autentikátor. Přihlášení přístupovým klíčem potřebuje Relying Party ID (doména) a Povolené origins, na kterých je váš TREK dostupný.',
  'help.guide.auth-methods.result': 'Přihlašovací stránka nabízí přesně ty způsoby, které jste nechali zapnuté.',
  'help.guide.auth-methods.tip.1':
    'Než se zamknete venku, objeví se varování: aspoň jedna cesta dovnitř pro administrátory zůstane zapnutá.',
  'help.guide.auth-methods.tip.2': 'Hodnoty nastavené proměnnými prostředí se tady zobrazují jen pro čtení.',
  // oidc
  'help.guide.oidc.title': 'Připojit jednotné přihlášení',
  'help.guide.oidc.goal': 'Nechte lidi přihlašovat se přes vašeho poskytovatele identity.',
  'help.guide.oidc.step.1':
    'Pod Jednotné přihlášení (OIDC) zadejte Zobrazované jméno pro tlačítko a URL vydavatele (Issuer), Client ID a Client Secret od svého poskytovatele, pak Uložit.',
  'help.guide.oidc.step.2': 'Pod Authentication Methods zapněte SSO Login.',
  'help.guide.oidc.result':
    'Přihlašovací stránka ukáže tlačítko SSO; se zapnutým SSO Auto-Provisioning dostanou noví uživatelé účet automaticky.',
  'help.guide.oidc.tip.1':
    'Redirect URI, kterou váš poskytovatel potřebuje, je adresa vašeho TREKu plus cesta OIDC callbacku z dokumentace.',
  'help.guide.oidc.tip.2':
    'Mapování claimů rozhoduje, které skupiny SSO se stanou administrátory; viz stránka OIDC v dokumentaci.',
  // instance-keys
  'help.guide.instance-keys.title': 'Zadat API klíče',
  'help.guide.instance-keys.goal': 'Odemkněte hledání míst Google, obálky z Unsplash a Amap pro celou instanci.',
  'help.guide.instance-keys.step.1':
    'Pod API klíče vložte Google Maps API klíč a klikněte na Testovat; pole řekne, zda klíč odpovídá.',
  'help.guide.instance-keys.step.2':
    'Pod K čemu se klíč používá zapněte jen funkce, které chcete tomuto klíči účtovat: Automatické doplňování míst, Podrobnosti o místě, Fotografie míst, Obohacení míst, Záznam vyhledávání míst.',
  'help.guide.instance-keys.step.3':
    'Klíč API Unsplash pohání hledání obálek; API klíč Amap (高德地图) hledání míst v Číně. Každý otestujte stejně.',
  'help.guide.instance-keys.result':
    'Uživatelé dostanou funkce bez vlastních klíčů; bez klíče Google hledá TREK přes bezplatný stack OpenStreetMap a TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'Osobní klíč uživatele pod Nastavení má pro tohoto uživatele přednost před klíčem instance.',
  'help.guide.instance-keys.tip.2': 'Klíče mohou přijít i z proměnných prostředí; ty se tady zobrazují jen pro čtení.',
  // places-transit
  'help.guide.places-transit.title': 'Zvolit poskytovatele hledání a dopravy',
  'help.guide.places-transit.goal': 'Rozhodněte, kdo odpovídá na hledání míst a trasy veřejnou dopravou.',
  'help.guide.places-transit.step.1':
    'Pod Poskytovatel hledání míst zvolte Automaticky, Google Places, Amap (高德地图) nebo OpenStreetMap. Automaticky použije nejlepší klíč, který existuje.',
  'help.guide.places-transit.step.2':
    'Pod Poskytovatel veřejné dopravy zvolte Transitous (zdarma), celosvětově a bez klíče, nebo Google, který potřebuje klíč Google.',
  'help.guide.places-transit.result':
    'Každé vyhledávací pole a každá trasa veřejnou dopravou v TREKu se řídí touto volbou.',
  'help.guide.places-transit.tip.1': 'Poskytovatel bez svého klíče tady ukáže varování a spadne zpět na OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Trasy veřejnou dopravou od Google se účtují za požadavek; Transitous ne.',
  // file-types
  'help.guide.file-types.title': 'Omezit typy souborů',
  'help.guide.file-types.goal': 'Rozhodněte, jaké přípony souborů smí nahrané soubory mít.',
  'help.guide.file-types.step.1': 'Pod Povolené typy souborů upravte seznam přípon oddělených čárkami a uložte.',
  'help.guide.file-types.result':
    'Nahrávání jakéhokoli jiného typu je odmítnuto s jasnou zprávou, v dokumentech, deníku i obálkách.',
  'help.guide.file-types.tip.1': 'Nechte v seznamu typy obrázků; obálky a fotky deníku procházejí stejnou kontrolou.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Zapnout nebo vypnout doplněk',
  'help.guide.toggle-addon.goal': 'Nabídněte funkční modul všem, nebo ho odeberte.',
  'help.guide.toggle-addon.step.1':
    'Přepněte přepínač na dlaždici doplňku. Položka v navigaci se všem najednou objeví nebo zmizí.',
  'help.guide.toggle-addon.step.2':
    'Některé dlaždice nesou podřádky s možnostmi, třeba Sledování zavazadel pod Seznamy nebo poskytovatele fotek pod Cestovní deník; zobrazují se, jen dokud je doplněk zapnutý.',
  'help.guide.toggle-addon.result': 'Data vypnutého doplňku zůstávají zachována; jeho opětovné zapnutí je zase ukáže.',
  'help.guide.toggle-addon.tip.1': 'Vypnuté MCP odstraní endpoint a sekce Integrace, které na něm závisí.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas a Cestovní deník jsou doplňky, které uživatelé chtějí nejčastěji; Dokumenty potřebují úložiště pro nahrané soubory.',
  // install-plugin
  'help.guide.install-plugin.title': 'Nainstalovat plugin',
  'help.guide.install-plugin.goal': 'Přidejte plugin třetí strany a dejte mu přesně ta oprávnění, o která žádá.',
  'help.guide.install-plugin.step.1':
    'Otevřete Objevit, vyberte plugin a klikněte na Instalovat; nebo klikněte na Nahrát plugin a zvolte balíček .zip nebo .tar.gz.',
  'help.guide.install-plugin.step.2':
    'Zpět pod Nainstalováno si přečtěte řádek: co plugin smí číst nebo zapisovat, které hostitele volá a zda je podepsaný. Zapněte Povolit plugin.',
  'help.guide.install-plugin.step.3':
    'Nabídka řádku nabízí Restartovat, Zobrazit protokol chyb, Povolení hostitelé a Změnit verzi…; Smazat ho odinstaluje. Aktualizace se nabídne v řádku, jakmile existuje novější verze, a ta, která žádá o nová práva, zůstane vypnutá, dokud je neschválíte.',
  'help.guide.install-plugin.result':
    'Plugin běží ve vlastním procesu; to, co přidává, widgety, vrstvy mapy, nástroje, se objeví tam, kde to plugin deklaruje.',
  'help.guide.install-plugin.tip.1': 'Znovu prohledat najde složku pluginu propojenou pro vývoj bez balíčku.',
  'help.guide.install-plugin.tip.2':
    'Nepodepsaný plugin je jako takový označený; instalujte ho, jen když jeho zdroji důvěřujete.',
  // storage-backends
  'help.guide.storage-backends.title': 'Přesunout nahrané soubory na S3 nebo zrcadlo',
  'help.guide.storage-backends.goal': 'Držte soubory v objektovém úložišti, nebo na disku i v bucketu zároveň.',
  'help.guide.storage-backends.step.1':
    'Pod Backendy klikněte na Přidat backend, dejte mu Název, zvolte Typ, Místní, S3 nebo Zrcadlo, vyplňte pole a Použít. Test ověří připojení, Uložit změny ho zapíše.',
  'help.guide.storage-backends.step.2':
    'Pod Kategorie přiřaďte každou kategorii nahrávání backendu. Změna jedné se zeptá, zda Přesunout stávající objekty nebo Pouze směrovat nové zápisy.',
  'help.guide.storage-backends.step.3': 'Stav nahoře zkontroluje každý backend; červená položka pojmenuje, co selhalo.',
  'help.guide.storage-backends.result':
    'Nové nahrané soubory jdou do přiřazeného backendu; přesunuté soubory se servírují odtud.',
  'help.guide.storage-backends.tip.1': 'Backend nastavený proměnnými prostředí se zobrazí, ale tady ho upravit nelze.',
  'help.guide.storage-backends.tip.2':
    'Zrcadlo zapisuje do obou cílů a čte z prvního; použijte ho k migraci bez výpadku.',
  // channels-instance
  'help.guide.channels-instance.title': 'Nastavit kanály oznámení',
  'help.guide.channels-instance.goal': 'Rozhodněte, které kanály si uživatelé mohou vybrat, a nastavte e-mail.',
  'help.guide.channels-instance.step.1':
    'Pod Email (SMTP) zadejte SMTP Host, SMTP Port, SMTP User, SMTP Password a From Address; Odeslat testovací e-mail vám pošle zprávu.',
  'help.guide.channels-instance.step.2':
    'Zapněte Ntfy a Webhook, abyste je nabídli; uživatelé pak zadají vlastní téma nebo URL pod Nastavení, Oznámení.',
  'help.guide.channels-instance.step.3':
    'Připomínky výletů přepínají připomínku před začátkem cesty; In-App je vždy zapnuté a tady je jen vysvětlené.',
  'help.guide.channels-instance.result': 'Karta Oznámení každého uživatele ukazuje kanály, které jste zapnuli.',
  'help.guide.channels-instance.tip.1':
    'Výchozí server ntfy zadaný tady se uživatelům předvyplní; stále mohou uvést vlastní.',
  'help.guide.channels-instance.tip.2': 'Kanály pluginů se objeví samy, jakmile je aktivní plugin s touto schopností.',
  // admin-channels
  'help.guide.admin-channels.title': 'Dostávat události administrátora na telefon',
  'help.guide.admin-channels.goal': 'Dozvíte se o neúspěšných zálohách, nových vydáních a dalších událostech instance.',
  'help.guide.admin-channels.step.1':
    'Pod Admin Ntfy zadejte téma a v případě potřeby server a token; pod Admin webhook URL.',
  'help.guide.admin-channels.step.2':
    'Klikněte na Odeslat testovací Ntfy nebo Odeslat testovací webhook a sledujte, jak zpráva dorazí.',
  'help.guide.admin-channels.result':
    'Události administrátora jdou tam navíc ke zvonku v aplikaci každého administrátora.',
  'help.guide.admin-channels.tip.1':
    'Držte téma pro administrátory odděleně od osobního, aby výpadek nezapadl mezi zprávami o cestách.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Odvolat přístup AI',
  'help.guide.mcp-tokens-admin.goal':
    'Prohlédněte a přerušte každý token a relaci, které AI klient drží, pro kteréhokoli uživatele.',
  'help.guide.mcp-tokens-admin.step.1':
    'Pod API tokeny najděte token podle uživatele a názvu; koš ho smaže a klient se okamžitě zastaví.',
  'help.guide.mcp-tokens-admin.step.2':
    'Pod OAuth relace totéž pro klienty v prohlížeči: klient, uživatel a datum, a koš relaci odvolá.',
  'help.guide.mcp-tokens-admin.result': 'Klienta musí jeho uživatel znovu připojit; nic jiného se nemění.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Oprávnění říkají, co klient mohl dělat; oprávnění jen pro čtení je neškodné nechat.',
  'help.guide.mcp-tokens-admin.tip.2': 'Vypnutí doplňku MCP odvolá všechno najednou.',
  // release-history
  'help.guide.release-history.title': 'Zkontrolovat nové vydání',
  'help.guide.release-history.goal': 'Vězte, zda je váš TREK aktuální a co přinese další verze.',
  'help.guide.release-history.step.1':
    'Když existuje novější vydání, nahoře na stránce administrace se ukáže Dostupná aktualizace; Zobrazit na GitHubu ho otevře a Jak aktualizovat vysvětlí aktualizaci pro Docker i jiné instalace.',
  'help.guide.release-history.step.2':
    'Historie verzí vypisuje každé vydání s poznámkami; Zobrazit podrobnosti je rozbalí, nejnovější nese Nejnovější a Načíst další jde dál do minulosti.',
  'help.guide.release-history.result':
    'Aktualizace probíhá na hostiteli, stažením nového image nebo sestavením nového tagu; datový adresář zůstává.',
  'help.guide.release-history.tip.1': 'Před aktualizací udělejte zálohu; karta Zálohování je hned vedle.',
  'help.guide.release-history.tip.2':
    'Předběžná vydání se zobrazují, ale neohlašují se jako aktualizace, pokud některé neprovozujete.',
  // create-backup
  'help.guide.create-backup.title': 'Vytvořit a obnovit zálohu',
  'help.guide.create-backup.goal': 'Pořiďte snímek celé instance, uchovejte kopii jinde a mějte možnost ji vrátit.',
  'help.guide.create-backup.step.1':
    'Pod Záloha dat klikněte na Vytvořit zálohu. Zabalí databázi a nahrané soubory do jednoho souboru na serveru.',
  'help.guide.create-backup.step.2': 'Stáhnout uchová kopii mimo tento stroj; koš maže staré zálohy a uvolní místo.',
  'help.guide.create-backup.step.3':
    'Obnovit u zálohy, nebo Nahrát zálohu se souborem, nahradí aktuální data, jakmile se Obnovit zálohu? jednou zeptá.',
  'help.guide.create-backup.result':
    'Obnovení vrátí uživatele, cesty, soubory a nastavení do stavu té zálohy; všichni jsou odhlášeni.',
  'help.guide.create-backup.tip.1':
    'Obnovení je tady jediná akce, kterou nejde vrátit zpět. Nejdřív udělejte čerstvou zálohu.',
  'help.guide.create-backup.tip.2': 'Zálohy leží v datovém adresáři; teprve kopie na jiném stroji z nich dělá zálohu.',
  // auto-backup
  'help.guide.auto-backup.title': 'Naplánovat zálohy',
  'help.guide.auto-backup.goal': 'Nechte server zálohovat sám sebe a uchovávat jen posledních pár záloh.',
  'help.guide.auto-backup.step.1':
    'Pod Automatické zálohování zapněte Povolit automatické zálohování a zvolte Interval, Spustit v hodinu a pro týdenní nebo měsíční Den v týdnu nebo Den v měsíci.',
  'help.guide.auto-backup.step.2':
    'Smazat staré zálohy po určuje, jak dlouho se záloha uchovává; starší odejdou, když vznikne nová.',
  'help.guide.auto-backup.result': 'Zálohy se v seznamu objevují podle plánu; selhání dorazí do kanálů administrátora.',
  'help.guide.auto-backup.tip.1': 'Časy se řídí časovým pásmem serveru, zobrazeným na kartě Audit.',
  'help.guide.auto-backup.tip.2': 'Místo na serveru není nekonečné; tři až pět záloh obvykle stačí.',
  // audit-log
  'help.guide.audit-log.title': 'Číst protokol auditu',
  'help.guide.audit-log.goal': 'Zjistěte, kdo co udělal a kdy.',
  'help.guide.audit-log.step.1':
    'Čtěte řádky: čas, uživatel, akce, zdroj, IP a podrobnosti, nejnovější první. Akce jsou pojmenované podle toho, co se stalo, třeba neúspěšné přihlášení, změna MFA nebo obnovení.',
  'help.guide.audit-log.step.2': 'Obnovit znovu načte začátek; Načíst další jde dál do minulosti.',
  'help.guide.audit-log.result': 'Stopa, kterou můžete předat komukoli, kdo se ptá, proč se něco změnilo.',
  'help.guide.audit-log.tip.1': 'Časy se zobrazují v časovém pásmu serveru, uvedeném nad tabulkou.',
  'help.guide.audit-log.tip.2': 'Protokol je jen pro přidávání; nic tady nelze z aplikace upravit ani smazat.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Cesta',
  'help.ctx.trip.summary':
    'Jedna cesta, celá: plán s jeho dny, mapou a místy a karty pro dopravu, rezervace, seznamy, náklady, soubory a spolupráci. Každá z nich má vlastní obrazovku nápovědy pod touto.',
  'help.ctx.trip.bullet.1':
    'Lišta karet: Plán, Doprava, Rezervace, Seznamy, Náklady, Soubory a Spolupráce. Které karty na vašem TREKu existují, určují doplňky a pluginy.',
  'help.ctx.trip.bullet.2':
    'Plán má tři sloupce: vlevo dny, uprostřed mapu, vpravo místa. Rezervace a doprava žijí uvnitř plánu, u zastávky a mezi zastávkami; karty je vypisují.',
  'help.ctx.trip.bullet.3':
    'Sdílet vpravo nahoře otevře lidi cesty: členy, hosty, odkaz pro pozvání a veřejný odkaz jen pro čtení.',
  'help.ctx.trip.bullet.4': 'Název, data, úvodní fotku a měnu upravíte z Moje cesty, tužkou na kartě cesty.',
  'help.ctx.trip.bullet.5':
    'Šipky na vnitřním okraji sloupce ho složí a místo zabere mapa; tenký oddělovač vedle sloupce mění jeho šířku.',
  'help.ctx.trip.bullet.6': 'Šipka zpět v liště nástrojů dnů vrátí poslední změnu plánu.',
  // add-member
  'help.guide.add-member.title': 'Přidat člena',
  'help.guide.add-member.goal': 'Dejte někomu s účtem TREK přístup k této cestě.',
  'help.guide.add-member.step.1': 'Klikněte na Sdílet vpravo nahoře.',
  'help.guide.add-member.step.2': 'Pod Pozvat uživatele vyberte osobu ze seznamu a klikněte na Pozvat.',
  'help.guide.add-member.step.3':
    'Osoba se teď objeví pod Přístup. Korunka označuje vlastníka; ikona na konci řádku přístup zase odebere.',
  'help.guide.add-member.result':
    'Člen vidí a upravuje cestu jako vy, v mezích úrovní, které správce nastavil pod Nastavení oprávnění.',
  'help.guide.add-member.tip.1':
    'Kdo v seznamu chybí, nemá ještě účet TREK: přidejte ho jako hosta, nebo ho nechte zaregistrovat přes odkaz pro pozvání.',
  'help.guide.add-member.tip.2': 'Číslo vedle Přístup počítá lidi v cestě; hosté jsou vypsaní zvlášť níže.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Pozvat odkazem',
  'help.guide.trip-invite-link.goal': 'Nechte lidi, ať se k cestě připojí sami.',
  'help.guide.trip-invite-link.step.1':
    'Klikněte na Sdílet a pak pod Odkaz pro pozvání na cestu klikněte na Vytvořit odkaz pro pozvání.',
  'help.guide.trip-invite-link.step.2':
    'Klikněte na Kopírovat a odkaz pošlete. Kdokoli s účtem TREK, kdo ho otevře, se připojí jako člen.',
  'help.guide.trip-invite-link.step.3': 'Vygenerovat znovu odkaz nahradí a ten starý znehodnotí; Deaktivovat ho vypne.',
  'help.guide.trip-invite-link.result': 'Kdo odkaz otevře, je v cestě a objeví se pod Přístup.',
  'help.guide.trip-invite-link.tip.1':
    'Kdo nemá účet, ho nemůže použít. Registrační odkazy rozdává správce pod Administrace, Uživatelé, a může jeden navázat na tuto cestu.',
  'help.guide.trip-invite-link.tip.2':
    'Použijte Vygenerovat znovu, když odkaz skončil ve špatném chatu: ten starý přestane fungovat okamžitě.',
  // add-guest
  'help.guide.add-guest.title': 'Přidat hosta bez účtu',
  'help.guide.add-guest.goal': 'Započítejte někoho, kdo TREK nepoužívá.',
  'help.guide.add-guest.step.1': 'Klikněte na Sdílet a sjeďte k Hosté.',
  'help.guide.add-guest.step.2': 'Napište jméno do Jméno hosta a klikněte na Přidat hosta.',
  'help.guide.add-guest.result': 'Hosta lze přiřadit k nákladům, položkám balení a úkolům, ale nemůže se přihlásit.',
  'help.guide.add-guest.tip.1':
    'Tužka hosta přejmenuje; ikona na konci řádku ho odebere i s jeho podíly a přiřazeními.',
  'help.guide.add-guest.tip.2': 'Pokud si ta osoba později založí účet, pozvěte ji jako člena a hosta odeberte.',
  // public-link
  'help.guide.public-link.title': 'Zveřejnit odkaz jen pro čtení',
  'help.guide.public-link.goal': 'Ukažte cestu lidem, kteří ji nemají upravovat.',
  'help.guide.public-link.step.1':
    'Klikněte na Sdílet; vpravo pod Veřejný odkaz zaškrtněte, co smí odkaz ukázat. Mapa a plán je vždy zapnuté; Rezervace, Balení, Náklady a Chat jsou na vás.',
  'help.guide.public-link.step.2': 'Klikněte na Vytvořit odkaz a pak na Kopírovat.',
  'help.guide.public-link.step.3': 'Zaškrtnutí lze měnit, dokud odkaz existuje; Smazat odkaz ho ukončí.',
  'help.guide.public-link.result': 'Kdokoli s odkazem vidí zvolené části bez přihlášení a nemůže nic změnit.',
  'help.guide.public-link.tip.1':
    'Odkaz není nikde vypsaný; kdo ho má, může ho otevřít, tak s ním zacházejte jako s heslem.',
  'help.guide.public-link.tip.2': 'Pro práva k úpravám přidejte osobu raději jako člena.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Předat cestu nebo ji opustit',
  'help.guide.transfer-ownership.goal': 'Udělejte vlastníkem někoho jiného, nebo vystupte z cesty, která není vaše.',
  'help.guide.transfer-ownership.step.1':
    'Klikněte na Sdílet. Pod Přístup udělá korunka na řádku člena z této osoby vlastníka; potvrďte dotaz.',
  'help.guide.transfer-ownership.step.2':
    'Opustit cestu na vašem řádku vás z cesty odebere; jako vlastník ji nejdřív předejte.',
  'help.guide.transfer-ownership.result':
    'Nový vlastník spravuje členy a může cestu smazat; vy zůstáváte běžným členem.',
  'help.guide.transfer-ownership.tip.1':
    'Vlastníkem je ten, kdo cestu založil, dokud ji nepředá; smazat cestu může jen on.',
  'help.guide.transfer-ownership.tip.2':
    'Odebrat přístup na cizím řádku je totéž tlačítko obráceně: vlastník člena odebere.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Udělat místo mapě',
  'help.guide.collapse-columns.goal': 'Složte sloupec, nebo mu dejte větší šířku.',
  'help.guide.collapse-columns.step.1':
    'Klikněte na šipku na vnitřním okraji sloupce dnů a sloupec se složí; místo zabere mapa. Sloupec míst má stejnou šipku.',
  'help.guide.collapse-columns.step.2': 'Kliknutím na šipku znovu sloupec vrátíte.',
  'help.guide.collapse-columns.step.3': 'Tažením tenkého oddělovače mezi sloupcem a mapou změníte šířku sloupce.',
  'help.guide.collapse-columns.result': 'Šířky si aplikace pamatuje; sloupce se při příští návštěvě vrátí otevřené.',
  'help.guide.collapse-columns.tip.1': 'Oba sloupce lze složit najednou pro zobrazení jen s mapou.',
  'help.guide.collapse-columns.tip.2': 'Na telefonu sloupce nejsou: Plán a Místa jsou dvě tlačítka dole na mapě.',
  // undo-change
  'help.guide.undo-change.title': 'Vrátit poslední změnu',
  'help.guide.undo-change.goal': 'Vezměte zpět, co jste právě v plánu udělali.',
  'help.guide.undo-change.step.1':
    'Klikněte na šipku zpět v liště nástrojů nad dny; její popisek pojmenuje změnu, kterou vrátí.',
  'help.guide.undo-change.result': 'Plán je zase takový, jaký byl, a šipka zešedne až do další změny.',
  'help.guide.undo-change.tip.1':
    'Zpět pokrývá plán: přiřazení, odebrání, přeřazení a přesun míst, optimalizaci trasy, mazání míst, změny kategorií a importy.',
  'help.guide.undo-change.tip.2': 'Má jen jeden krok: vrátit lze pouze poslední změnu a nová změna ji nahradí.',

  // ── Screen: trip-places ───────────────────────────────────────────────────────────────
  'help.ctx.trip-places.title': 'Místa',
  'help.ctx.trip-places.summary':
    'Pravý sloupec plánu: každé místo cesty, naplánované i ne, s hledáním a filtry, a způsoby, jak místa dostat dovnitř, ručně, ze souboru nebo ze sdíleného seznamu.',
  'help.ctx.trip-places.bullet.1':
    'Přidat místo/aktivitu nahoře otevře formulář pro místo, které napíšete nebo vyhledáte. Když je otevřený den, tlačítko říká Nové místo a Ke dni vedle něj vytvoří místo rovnou na tom dni.',
  'help.ctx.trip-places.bullet.2':
    'Importovat soubor bere soubory .gpx, .kml a .kmz; Import seznamu bere sdílený seznam z Google Maps nebo Naver Maps. Soubor lze také jen pustit na sloupec.',
  'help.ctx.trip-places.bullet.3':
    'Rozbalovací nabídka přepíná mezi Vše, Nezařazené, Naplánované a, jakmile je importovaná trasa, Trasy; pod ní sedí hledání, filtr kategorií a hvězda pro minimální hodnocení.',
  'help.ctx.trip-places.bullet.4':
    'Řádek ukazuje obrázek, název a popis nebo adresu. Kliknutím otevřete podrobnosti místa, přetažením ho položíte na den, pravým tlačítkem dostanete Upravit, + Den, Otevřít webové stránky, Google Maps, Uložit do sbírky a Smazat.',
  'help.ctx.trip-places.bullet.5':
    'Když je otevřený den, + na konci nezařazeného řádku položí místo na ten den a Naplánované vypíší jen ten den, se Zobrazit celou cestu pro návrat k celku.',
  'help.ctx.trip-places.bullet.6':
    'Ikona zaškrtnutí na pravém konci řádku s filtry spustí výběr: několik řádků naráz dostane novou kategorii, jde do sbírky nebo se smaže.',
  // create-place
  'help.guide.create-place.title': 'Vytvořit místo',
  'help.guide.create-place.goal': 'Přidejte místo nebo aktivitu ručně, se vším, co o něm plán potřebuje vědět.',
  'help.guide.create-place.step.1':
    'Klikněte nahoře ve sloupci míst na Přidat místo/aktivitu (Nové místo, když je otevřený den). Otevře se formulář.',
  'help.guide.create-place.step.2':
    'Napište místo nahoře do Hledat místa... a vyberte výsledek. Název, Adresa, Zeměpisná šířka a Zeměpisná délka se vyplní a Podrobnosti místa vpravo ukážou obrázky, popis a fakta k němu. Není to správné místo? Hledat na Googlu spustí hledání znovu přes Google.',
  'help.guide.create-place.step.3':
    'V Podrobnostech místa se kliknutím na obrázek pod Vybrat obrázek stane tento obrázek obrázkem místa; Použít tento text převezme popis do formuláře.',
  'help.guide.create-place.step.4':
    'Zkontrolujte pole: Název je povinný; Popis a Poznámky jsou vaše; Adresa, Zeměpisná šířka a Zeměpisná délka pocházejí z hledání nebo se napíší; Kategorie vybírá jednu z kategorií cesty a + vedle ní vytvoří na místě novou; Webové stránky berou odkaz.',
  'help.guide.create-place.step.5':
    'Klikněte na Přidat. Pokud už v cestě je místo stejného názvu, formulář to řekne a tlačítko se změní na Přesto přidat.',
  'help.guide.create-place.result': 'Místo je v seznamu a na mapě, pod Nezařazené, dokud ho nepoložíte na den.',
  'help.guide.create-place.tip.1':
    'Soubory a Costs dole ve formuláři připojí k místu dokument nebo hned po uložení otevřou editor Costs pro jeho výdaj.',
  'help.guide.create-place.tip.2':
    'Bez klíče Google běží hledání přes index TREK a OpenStreetMap: místo najde, jen bez hodnocení, otevírací doby a fotek.',
  'help.guide.create-place.tip.3':
    'Místo může začít i na mapě: klikněte na bod pravým tlačítkem a formulář se otevře s vyplněnými souřadnicemi a adresou.',
  // place-to-open-day
  'help.guide.place-to-open-day.title': 'Přidat místo rovnou na otevřený den',
  'help.guide.place-to-open-day.goal': 'Vynechte druhý krok: vytvořte nebo vyberte místo a mějte ho rovnou na dni.',
  'help.guide.place-to-open-day.step.1':
    'Klikněte ve sloupci dnů na záhlaví dne. Den je otevřený: jeho karta je zvýrazněná a sloupec míst dostane tlačítko Ke dni.',
  'help.guide.place-to-open-day.step.2':
    'Ke dni otevře stejný formulář jako Nové místo, jen místo přistane na otevřeném dni ve chvíli, kdy kliknete na Přidat.',
  'help.guide.place-to-open-day.step.3':
    'Místo, které už existuje, jde na otevřený den přes + na konci svého řádku nebo pravým tlačítkem, + Den.',
  'help.guide.place-to-open-day.result':
    'Místo je vypsané pod dnem, na konci; přetažením nahoru nebo dolů ho dáte tam, kam patří.',
  'help.guide.place-to-open-day.tip.1':
    'Přetažení řádku na den funguje také a může místo rovnou položit mezi dvě zastávky.',
  'help.guide.place-to-open-day.tip.2': 'Zpět v liště nástrojů nad dny přiřazení vrátí.',
  // filter-places
  'help.guide.filter-places.title': 'Najít místo v seznamu',
  'help.guide.filter-places.goal': 'Zužte sloupec na místa, která hledáte.',
  'help.guide.filter-places.step.1':
    'Rozbalovací nabídka nahoře přepíná mezi Vše, Nezařazené (ještě na žádném dni), Naplánované (na dni) a Trasy (importované trasy GPX), každé se svým počtem.',
  'help.guide.filter-places.step.2': 'Pište do Hledat místa...; seznam se zužuje, jak píšete.',
  'help.guide.filter-places.step.3':
    'Všechny kategorie otevřou seznam, kde zaškrtnete jednu nebo víc kategorií, mezi nimi Bez kategorie; Vymazat filtr dole ho zruší.',
  'help.guide.filter-places.step.4':
    'Hvězda vedle nastaví minimální hodnocení: 5+, 4+ a tak dál ukážou jen místa, která jste ohodnotili aspoň tak vysoko.',
  'help.guide.filter-places.result': 'Počet nad řádky říká, kolik míst odpovídá; filtry se kombinují.',
  'help.guide.filter-places.tip.1':
    'Když je otevřený den, Naplánované vypíší jen ten den a říkají to: Zobrazuje se jen otevřený den, se Zobrazit celou cestu vedle.',
  'help.guide.filter-places.tip.2': 'Mapa se zúží na otevřený den také; Vše v seznamu stále ukazuje každé místo cesty.',
  // edit-place
  'help.guide.edit-place.title': 'Změnit místo',
  'help.guide.edit-place.goal': 'Opravte název, posuňte špendlík, přidejte web nebo změňte kategorii.',
  'help.guide.edit-place.step.1':
    'Klikněte na řádek pravým tlačítkem a zvolte Upravit, nebo místo otevřete a klikněte na Upravit v jeho podrobnostech.',
  'help.guide.edit-place.step.2':
    'Změňte, co potřebujete: Název, Popis, Poznámky, Adresa, Zeměpisná šířka a Zeměpisná délka, Kategorie, Webové stránky. Otevřený ze dne má formulář navíc Poznámky pro tento den a Od a Do pro ten den.',
  'help.guide.edit-place.step.3': 'Klikněte na Aktualizovat.',
  'help.guide.edit-place.result':
    'Změna platí všude, kde se místo objevuje: v seznamu, na mapě a na každém dni, na kterém je.',
  'help.guide.edit-place.tip.1':
    'Poznámky pro tento den patří místu na tom jednom dni; Poznámky patří samotnému místu.',
  'help.guide.edit-place.tip.2':
    'Do před Od zablokuje Aktualizovat; Časový překryv s: jen upozorní, že jiná zastávka dne má stejný čas.',
  // delete-place
  'help.guide.delete-place.title': 'Smazat místo',
  'help.guide.delete-place.goal': 'Odeberte místo z cesty natrvalo.',
  'help.guide.delete-place.step.1':
    'Klikněte na řádek pravým tlačítkem a zvolte Smazat, nebo klikněte na Smazat v podrobnostech místa.',
  'help.guide.delete-place.step.2':
    'Potvrďte. Pokud byla na místě zamluvená noc nebo je k němu navázaná rezervace, otázka řekne, co jde s ním.',
  'help.guide.delete-place.result':
    'Místo zmizí ze seznamu, z mapy i ze všech dnů; Zpět v liště nástrojů nad dny ho vrátí.',
  'help.guide.delete-place.tip.1':
    'Chcete-li místo sundat jen z jednoho dne, použijte na té zastávce raději Odebrat ze dne.',
  'help.guide.delete-place.tip.2': 'Několik míst naráz: ikona zaškrtnutí vedle filtrů spustí výběr.',
  // select-places
  'help.guide.select-places.title': 'Změnit nebo smazat několik míst naráz',
  'help.guide.select-places.goal': 'Ukliďte seznam jedním tahem, ne místo po místu.',
  'help.guide.select-places.step.1':
    'Klikněte na ikonu zaškrtnutí na pravém konci řádku s filtry. Řádky dostanou zaškrtávací políčka a objeví se lišta s akcemi.',
  'help.guide.select-places.step.2': 'Zaškrtněte řádky, nebo v liště Vybrat vše; lišta počítá, co je vybrané.',
  'help.guide.select-places.step.3':
    'Change category dá všem jednu kategorii; Uložit do sbírky je zkopíruje do některé z vašich sbírek; Smazat vybrané je po potvrzení odstraní.',
  'help.guide.select-places.step.4': 'Dalším kliknutím na ikonu zaškrtnutí výběr opustíte.',
  'help.guide.select-places.result':
    'Změna platí pro každé vybrané místo; smazání lze vrátit z lišty nástrojů nad dny.',
  'help.guide.select-places.tip.1':
    'Filtry při výběru dál fungují: nejdřív filtrujte na Nezařazené, pak Vybrat vše chytí přesně je.',
  'help.guide.select-places.tip.2':
    'Označit jako navštívené v seznamech se v liště objeví, když je zapnutý doplněk Sbírky: odškrtne místa ve sbírkách, ve kterých jsou uložená.',
  // import-places-file
  'help.guide.import-places-file.title': 'Importovat místa ze souboru GPX, KML nebo KMZ',
  'help.guide.import-places-file.goal':
    'Dostaňte dovnitř to, co vyexportovaly Google My Maps, Google Earth nebo GPS tracker.',
  'help.guide.import-places-file.step.1': 'Klikněte na Importovat soubor, nebo pusťte soubor kamkoli na sloupec míst.',
  'help.guide.import-places-file.step.2':
    'Vyberte soubor nebo ho přetáhněte do rámečku. U GPX zaškrtněte, co se má importovat: Trasové body, Trasy, Trasy GPS (s geometrií); u KML a KMZ Body (Placemarks) a Trasy (LineStrings).',
  'help.guide.import-places-file.step.3':
    'Obohatit místa přes Google vyhledá každé importované místo a doplní fotky, adresu a podrobnosti; potřebuje klíč Google.',
  'help.guide.import-places-file.step.4':
    'Klikněte na Importovat. Souhrn řekne, kolik míst vzniklo a kolik se přeskočilo, protože už v cestě byla.',
  'help.guide.import-places-file.result':
    'Místa jsou v seznamu; trasa nese na svém řádku značku trasy, kreslí se na mapě a dostane vlastní filtr Trasy.',
  'help.guide.import-places-file.tip.1':
    'Příliš velký soubor je odmítnut s limitem velikosti; vyexportujte ho znovu bez fotek, nebo ho rozdělte.',
  'help.guide.import-places-file.tip.2': 'Import lze vrátit jako celek z lišty nástrojů nad dny.',
  // import-places-list
  'help.guide.import-places-list.title': 'Importovat sdílený seznam z Google Maps nebo Naver Maps',
  'help.guide.import-places-list.goal': 'Proměňte odkaz na sdílený seznam v místa.',
  'help.guide.import-places-list.step.1': 'Klikněte na Import seznamu a zvolte Google Seznam nebo Naver Seznam.',
  'help.guide.import-places-list.step.2':
    'Vložte sdílený odkaz seznamu. Funguje i odkaz na trasu v Google Maps: jeho zastávky se stanou místy, v pořadí jízdy.',
  'help.guide.import-places-list.step.3': 'Klikněte na Importovat.',
  'help.guide.import-places-list.result':
    'Každé místo seznamu je v cestě, pojmenované jako v seznamu; místa, která už v cestě jsou, se přeskočí.',
  'help.guide.import-places-list.tip.1': 'Seznam musí být sdílený veřejně; odkaz na soukromý seznam neimportuje nic.',
  'help.guide.import-places-list.tip.2':
    'Naver Seznam potřebuje doplněk Naver List Import, který správce zapne pod Doplňky; bez něj tlačítko říká Google Seznam.',
};

export default help;
