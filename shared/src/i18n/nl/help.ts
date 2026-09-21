import type { TranslationStrings } from '../types';

// English fallback until 'nl' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Hulp bij dit scherm',
  'help.center.title': 'Hulp',
  'help.center.onThisScreen': 'Op dit scherm',
  'help.center.screens': 'Schermen',
  'help.center.thisScreen': 'Dit scherm',
  'help.center.subScreens': 'Subschermen: {count}',
  'help.center.subScreensLabel': 'Subschermen',
  'help.center.guidesCount': '{count} handleidingen',
  'help.center.goToScreen': 'Ga naar {screen}',
  'help.center.overview': 'Overzicht',
  'help.center.howTo': 'Hoe kan ik…',
  'help.center.searchPlaceholder': 'Zoek in handleidingen en documentatie…',
  'help.center.searchEmpty': "Niets gevonden voor '{query}'.",
  'help.center.searchGuides': 'Handleidingen',
  'help.center.searchDocs': 'Documentatie',
  'help.center.searchError': 'Zoeken is op dit moment niet beschikbaar.',
  'help.center.back': 'Terug',
  'help.center.close': 'Hulp sluiten',
  'help.center.steps': '{count} stappen',
  'help.center.step': 'Stap {n}',
  'help.center.stepsLabel': 'Stappen',
  'help.center.stepOf': 'Stap {n} van {total}',
  'help.center.screenshot': 'Schermafbeelding',
  'help.center.result': 'Wat je krijgt',
  'help.center.tips': 'Goed om te weten',
  'help.center.related': 'Gerelateerd',
  'help.center.openDocs': 'Openen in Hulp & documentatie',
  'help.center.docsSection': 'In de documentatie',
  'help.center.noContext': 'Voor dit scherm is nog geen handleiding.',
  'help.center.noContextHint': 'Zoek in de documentatie, of vertel ons wat je zocht.',
  'help.center.feedback': 'Mis je iets?',
  'help.center.feedbackLink': 'Laat het ons weten op GitHub',
  'help.center.discord': 'Vraag het op Discord',
  'help.center.quick': 'Snel',
  'help.center.guide': 'Handleiding',
  'help.center.tour': 'Rondleiding',
  'help.center.imageAlt': "Stap {n} van '{title}'",

  // ctx
  'help.ctx.dashboard.title': 'Dashboard',
  'help.ctx.dashboard.summary':
    'Het dashboard is de voordeur van al je reizen. De instapkaart bovenaan zet de reis in de schijnwerper die nu loopt of als volgende komt, de rij eronder telt wat je al gereisd hebt, en de kaarten tonen alles wat je plant, gearchiveerd hebt of al achter de rug hebt.',
  'help.ctx.dashboard.bullet.1':
    'Instapkaart: de lopende of volgende reis met data, reizigers, plaatsen en een aftelling. Klik erop om de reis te openen.',
  'help.ctx.dashboard.bullet.2':
    'Reisstatistieken: bezochte landen, reizen, dagen onderweg en gevlogen afstand, over al je reizen.',
  'help.ctx.dashboard.bullet.3':
    'Reiskaarten, gefilterd op Gepland, Gearchiveerd en Voltooid, als raster of lijst. Beweeg over een kaart voor bewerken, dupliceren, archiveren en verwijderen.',
  'help.ctx.dashboard.bullet.4':
    'Widgets rechts: valutaomrekenaar, wereldklokken, aankomende reserveringen en collecties. Elke widget kan uit.',
  'help.ctx.dashboard.bullet.5': "De kaart 'Nieuwe reis' en de knop rechtsonder starten allebei een nieuwe reis.",

  // create-trip
  'help.guide.create-trip.title': 'Een reis aanmaken',
  'help.guide.create-trip.goal': 'Een nieuwe reis starten met een naam, data en een omslagfoto.',
  'help.guide.create-trip.step.1':
    "Klik op 'Nieuwe reis'. De kaart aan het einde van je reizen en de knop rechtsonder doen hetzelfde.",
  'help.guide.create-trip.step.2':
    'Geef de reis een naam. Dat is het enige verplichte veld; al het andere kun je later toevoegen.',
  'help.guide.create-trip.step.3':
    'Kies een begin- en einddatum. TREK maakt per datum een dag aan, zodat je reisplan klaar is om te vullen.',
  'help.guide.create-trip.step.4':
    'Optioneel: voeg een omslagfoto toe. Upload je eigen foto, sleep er een in, of zoek de bestemming op Unsplash.',
  'help.guide.create-trip.step.5': "Klik op 'Nieuwe reis aanmaken'.",
  'help.guide.create-trip.result':
    'De reis verschijnt op je dashboard. Is het je volgende reis, dan neemt hij de instapkaart bovenaan over.',
  'help.guide.create-trip.tip.1':
    'Data kun je later wijzigen. Zijn er al boekingen, dan vraagt TREK of die met de dagen mee moeten verschuiven.',
  'help.guide.create-trip.tip.2':
    'De reisvaluta die je hier kiest, is waarin elke uitgave wordt omgerekend. Kies de valuta van de bestemming.',

  // edit-trip
  'help.guide.edit-trip.title': 'Een reis bewerken',
  'help.guide.edit-trip.goal': 'Een reis hernoemen, de data wijzigen of de instellingen aanpassen.',
  'help.guide.edit-trip.step.1': 'Beweeg over de reiskaart (of de instapkaart) en klik op het potlood.',
  'help.guide.edit-trip.step.2':
    'Wijzig wat je nodig hebt: naam, beschrijving, data, omslag, valuta, herinnering of leden.',
  'help.guide.edit-trip.step.3': "Klik op 'Bijwerken'.",
  'help.guide.edit-trip.result': 'De kaart wordt meteen bijgewerkt, voor elk lid van de reis.',
  'help.guide.edit-trip.tip.1':
    'Verschuif je de data van een reis met boekingen, dan volgt een tweede stap met de vraag of de boekingen mee moeten verhuizen.',

  // cover-image
  'help.guide.cover-image.title': 'Een omslagfoto instellen',
  'help.guide.cover-image.goal': 'Een reis een afbeelding geven die op de kaart en de instapkaart te zien is.',
  'help.guide.cover-image.step.1': 'Open het bewerkformulier van de reis via het potlood op de kaart.',
  'help.guide.cover-image.step.2':
    "Sleep bij 'Omslagafbeelding' een foto naar binnen, klik om er een te uploaden, of typ een bestemming in het Unsplash-zoekveld.",
  'help.guide.cover-image.step.3': "Kies een foto en klik op 'Bijwerken'.",
  'help.guide.cover-image.result': 'De foto wordt bij de reis opgeslagen en overal getoond waar de reis staat.',
  'help.guide.cover-image.tip.1':
    "Foto's uit de Unsplash-zoekopdracht krijgen automatisch een naamsvermelding; je eigen uploads blijven op je server.",

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Een reis dupliceren',
  'help.guide.duplicate-trip.goal': 'Een reis hergebruiken als sjabloon voor een nieuwe.',
  'help.guide.duplicate-trip.step.1': 'Beweeg over de kaart en klik op het dupliceerpictogram.',
  'help.guide.duplicate-trip.step.2': 'Lees wat wel en niet wordt gekopieerd en bevestig.',
  'help.guide.duplicate-trip.result':
    'Naast het origineel verschijnt een kopie, klaar om te hernoemen en van nieuwe data te voorzien.',
  'help.guide.duplicate-trip.tip.1':
    'Dagen, plaatsen, reserveringen, budgetposten, paklijsten en dagnotities gaan mee. Leden, chat, peilingen, bestanden en deellinks niet.',

  // archive-trip
  'help.guide.archive-trip.title': 'Een reis archiveren en herstellen',
  'help.guide.archive-trip.goal': 'Een reis opbergen zonder te verwijderen en later terughalen.',
  'help.guide.archive-trip.step.1': "Beweeg over de kaart en klik op 'Archiveren'.",
  'help.guide.archive-trip.step.2': "Zet het filter boven de kaarten op 'Gearchiveerd' om de reis terug te zien.",
  'help.guide.archive-trip.step.3': "Klik op 'Herstellen' op de kaart om hem terug naar 'Gepland' te zetten.",
  'help.guide.archive-trip.result':
    'Gearchiveerde reizen behouden alles. Ze staan alleen niet meer in de weg op het dashboard en in de agendafeed van alle reizen.',

  // delete-trip
  'help.guide.delete-trip.title': 'Een reis verwijderen',
  'help.guide.delete-trip.goal': 'Een reis voorgoed weghalen.',
  'help.guide.delete-trip.step.1': 'Beweeg over de kaart en klik op de prullenbak.',
  'help.guide.delete-trip.step.2':
    'Bevestig. Het venster noemt de reis bij naam, zodat je zeker weet dat je de juiste hebt.',
  'help.guide.delete-trip.result':
    'De reis met dagen, plaatsen, boekingen en bestanden is weg. Dit kan niet ongedaan worden gemaakt; archiveer bij twijfel.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Voltooide reizen vinden, wisselen tussen raster en lijst',
  'help.guide.filter-and-view.goal':
    'Afgeronde of gearchiveerde reizen zien en de indeling kiezen die jij prettig vindt.',
  'help.guide.filter-and-view.step.1':
    "Gebruik 'Gepland', 'Gearchiveerd' en 'Voltooid' boven de kaarten. Voltooid is elke reis waarvan de einddatum voorbij is.",
  'help.guide.filter-and-view.step.2':
    'Klik op het lijstpictogram voor een compacte lijst; klik nog eens voor het raster.',
  'help.guide.filter-and-view.result': 'Het dashboard onthoudt je indeling op dit apparaat.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Alle reizen in je agenda volgen',
  'help.guide.calendar-feed.goal':
    'De dagen en boekingen van elke actieve reis in je agenda-app zien, altijd gesynchroniseerd.',
  'help.guide.calendar-feed.step.1': 'Klik op het agendapictogram naast de weergaveschakelaar.',
  'help.guide.calendar-feed.step.2': "Klik op 'Enable calendar subscription'. TREK maakt een privé feedlink aan.",
  'help.guide.calendar-feed.step.3':
    "Voeg de feed toe met een van de knoppen (Google, Apple, Outlook) of kopieer de link naar elke agenda-app die URL's kan volgen.",
  'help.guide.calendar-feed.result':
    'Elke actieve reis staat in je agenda en werkt zichzelf bij. Gearchiveerde reizen en reizen die meer dan 90 dagen geleden eindigden, blijven erbuiten.',
  'help.guide.calendar-feed.tip.1':
    'De link is geheim. Iedereen die hem heeft kan de feed lezen; trek hem in hetzelfde venster in als hij uitlekt.',

  // widgets
  'help.guide.widgets.title': 'Je dashboardwidgets kiezen',
  'help.guide.widgets.goal': 'De statistiekenrij en de widgets rechts tonen of verbergen.',
  'help.guide.widgets.step.1': "Open het avatarmenu rechtsboven en kies 'Instellingen'.",
  'help.guide.widgets.step.2': "Ga naar het tabblad 'Appearance'.",
  'help.guide.widgets.step.3':
    "Zet onder 'Dashboard widgets' elke widget aan of uit. Desktop en mobiel stel je apart in.",
  'help.guide.widgets.step.4': 'Ga terug naar het dashboard. De wijziging geldt meteen.',
  'help.guide.widgets.result':
    'Verborgen widgets maken ruimte voor je reizen; zet de hele rechterkolom uit om de indeling te centreren.',
  'help.guide.widgets.link': 'Weergave-instellingen openen',

  // currency-widget
  'help.guide.currency-widget.title': 'Valuta omrekenen',
  'help.guide.currency-widget.goal': "Een bedrag met actuele koersen omrekenen tussen twee valuta's.",
  'help.guide.currency-widget.step.1': "Typ het bedrag en kies de twee valuta's.",
  'help.guide.currency-widget.step.2': 'De pijl ertussen wisselt het paar om; de ronde pijl haalt de koers opnieuw op.',
  'help.guide.currency-widget.result':
    'Je valutapaar wordt in je account onthouden en is dus op elk apparaat hetzelfde.',
  'help.guide.currency-widget.tip.1':
    'De koersen komen van de Europese Centrale Bank en worden eenmaal per dag bijgewerkt.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Wereldklokken toevoegen',
  'help.guide.timezones-widget.goal': 'De lokale tijd op je bestemmingen in het oog houden.',
  'help.guide.timezones-widget.step.1': "Klik op + in de widget 'Tijdzones' en zoek een stad.",
  'help.guide.timezones-widget.step.2': 'Verwijder een klok met de × ernaast.',
  'help.guide.timezones-widget.result': 'Je klokken worden bij je account opgeslagen.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay is je persoonlijke verlofplanner: hoeveel vakantiedagen je per jaar hebt, welke je hebt opgenomen en wat er over is. Het raster toont het hele jaar in één oogopslag; in de zijbalk staan de jaarkeuze, de mensen met wie je plant, kalenders die met je gedeeld zijn, de legenda en je verlofsaldo.',
  'help.ctx.vacay.bullet.1':
    'Jaarraster: twaalf maandkaarten, één cel per dag. Klik op een dag om hem in te voeren of te wissen. Een blauw stipje markeert dagen die al door een reis gedekt zijn.',
  'help.ctx.vacay.bullet.2':
    'Werkbalk onderaan: modus Vakantie of Bedrijfsvakantie, plus de schakelaars Halve dag en Compensatie die bepalen wat een klik invoert.',
  'help.ctx.vacay.bullet.3':
    'Recht: je dagen voor het jaar, hoeveel je gebruikt hebt en hoeveel er over zijn, met overdracht uit de vorige periode.',
  'help.ctx.vacay.bullet.4':
    'Personen zijn mensen die met je plan samengevoegd zijn, elk in een eigen kleur. Gedeelde kalenders zijn alleen-lezen ringen van andermans vrije dagen.',
  'help.ctx.vacay.bullet.5':
    'Instellingen regelen weekends, weekstart, overdracht, je vakantiejaar, bedrijfsvakanties en kalenders voor feestdagen of schoolvakanties.',
  // log-day
  'help.guide.log-day.title': 'Een vakantiedag invoeren',
  'help.guide.log-day.goal': 'Een vrije dag in het jaarraster markeren en je saldo zien meebewegen.',
  'help.guide.log-day.step.1':
    'Kijk naar de werkbalk onderaan: de linkerknop, in jouw kleur, betekent dat een klik een vakantiedag voor jou invoert.',
  'help.guide.log-day.step.2':
    'Klik op een dag in een maandkaart. Hij vult zich met jouw kleur en Gebruikt telt een dag meer.',
  'help.guide.log-day.step.3': 'Klik nog eens op dezelfde dag om hem te wissen.',
  'help.guide.log-day.result':
    'De dag is ingevoerd, Dagen, Gebruikt en Resterend worden meteen bijgewerkt, en iedereen die met je plan samengevoegd is ziet het live.',
  'help.guide.log-day.tip.1': 'Weekends kun je niet invoeren zolang Weekenden blokkeren in de Instellingen aanstaat.',
  'help.guide.log-day.tip.2':
    'Een blauw stipje in een cel betekent dat een van je reizen die dag dekt, zodat je ziet waar verlof en reis samenvallen.',
  // half-day
  'help.guide.half-day.title': 'Een halve dag invoeren',
  'help.guide.half-day.goal': 'Een middag vrij nemen zonder een hele verlofdag te besteden.',
  'help.guide.half-day.step.1':
    'Zet Halve dag aan in de werkbalk. De oranje stip is de markering die een halve dag in het raster krijgt.',
  'help.guide.half-day.step.2': 'Klik op een dag. Hij wordt als 0,5 ingevoerd en draagt de oranje stip in de hoek.',
  'help.guide.half-day.step.3':
    'Zet Halve dag weer uit als je klaar bent; op een halve dag klikken met andere instellingen zet hem ter plekke om.',
  'help.guide.half-day.result':
    'Gebruikt groeit met 0,5. Halve dag en Compensatie zijn onafhankelijk, dus een halve compensatiedag kan ook.',
  'help.guide.half-day.tip.1':
    'De werkbalk toont altijd de markering die je volgende klik plaatst, zodat je kunt controleren voor je invoert.',
  // comp-day
  'help.guide.comp-day.title': 'Compensatie of flextijd invoeren',
  'help.guide.comp-day.goal': 'Tijd-voor-tijd opnemen die geen vakantiedagen kost.',
  'help.guide.comp-day.step.1':
    'Zet Compensatie aan in de werkbalk. De gearceerde schijf is hoe een compensatiedag er in het raster uitziet.',
  'help.guide.comp-day.step.2':
    'Klik op een dag. Hij vult zich met een diagonale arcering in jouw kleur in plaats van een egaal vlak.',
  'help.guide.comp-day.result': 'Compensatiedagen worden naast de saldotegels geteld en verlagen Resterend nooit.',
  'help.guide.comp-day.tip.1':
    'Opgenomen overuren, flextijd, een dag tijd-voor-tijd: alles wat vrij is maar geen vakantie hoort hier.',
  // entitlement
  'help.guide.entitlement.title': 'Je verlofsaldo instellen',
  'help.guide.entitlement.goal': 'Vacay vertellen hoeveel vakantiedagen je per jaar hebt.',
  'help.guide.entitlement.step.1': 'Klik in de zijbalk op de tegel Dagen onder Recht.',
  'help.guide.entitlement.step.2': 'Typ je aantal dagen en druk op Enter.',
  'help.guide.entitlement.result':
    'Resterend wordt opnieuw berekend uit je saldo, eventuele overdracht en de gebruikte dagen.',
  'help.guide.entitlement.tip.1':
    'Elk jaar heeft zijn eigen saldo, dus een wijziging hier geldt alleen voor het gekozen jaar.',
  // years
  'help.guide.years.title': 'Jaren toevoegen en wisselen',
  'help.guide.years.goal': 'Volgend jaar alvast plannen, of terugkijken op het vorige.',
  'help.guide.years.step.1':
    'Klik op de + rechts van het jaartal om het volgende jaar toe te voegen, of op de + links voor het vorige.',
  'help.guide.years.step.2': 'Wissel tussen jaren met de pijlen of de jaarchips eronder.',
  'help.guide.years.step.3':
    'Om een jaar te verwijderen beweeg je over zijn chip en klik je op het kleine minteken. Zijn invoer gaat mee, dus bevestig zorgvuldig.',
  'help.guide.years.result': 'Elk jaar houdt zijn eigen saldo en invoer; de overdracht verbindt ze.',
  // company-holidays
  'help.guide.company-holidays.title': 'Bedrijfsvakanties markeren',
  'help.guide.company-holidays.goal':
    'Dagen blokkeren waarop het hele bedrijf vrij is zonder iemands saldo aan te spreken.',
  'help.guide.company-holidays.step.1':
    'Open Instellingen en controleer dat Bedrijfsvakanties aanstaat. Dat is de standaard; de werkbalk biedt de modus alleen zolang het aanstaat.',
  'help.guide.company-holidays.step.2': 'Terug in het raster zet je de werkbalk op de modus Bedrijfsvakantie.',
  'help.guide.company-holidays.step.3': 'Klik op de dagen. Ze worden amberkleurig en verschijnen in de legenda.',
  'help.guide.company-holidays.result':
    'Bedrijfsvakanties zijn zichtbaar voor iedereen die met het plan samengevoegd is en verlagen Resterend nooit.',
  'help.guide.company-holidays.tip.1':
    'Elke samengevoegde persoon kan bedrijfsvakanties bewerken, dus spreek af wie ze bijhoudt.',
  // public-holidays
  'help.guide.public-holidays.title': 'Feestdagen tonen',
  'help.guide.public-holidays.goal': 'De feestdagen van je land of regio in het raster zetten.',
  'help.guide.public-holidays.step.1': 'Open Instellingen en zet Feestdagen aan.',
  'help.guide.public-holidays.step.2':
    'Klik op Kalender toevoegen, kies het land en, waar het ertoe doet, de regio. Geef het een kleur en een label als je wilt.',
  'help.guide.public-holidays.step.3': 'Sluit Instellingen. De feestdagen verschijnen in het raster en in de legenda.',
  'help.guide.public-holidays.result':
    'Feestdagen krijgen de kleur van de kalender en tellen nooit mee tegen je saldo.',
  'help.guide.public-holidays.tip.1':
    'Je kunt meerdere kalenders toevoegen, bijvoorbeeld je eigen regio en die van een samengevoegde collega.',
  // school-holidays
  'help.guide.school-holidays.title': 'Schoolvakanties tonen',
  'help.guide.school-holidays.goal': 'De schoolvakanties van je regio naast je eigen vrije dagen zien.',
  'help.guide.school-holidays.step.1': 'Open Instellingen en zet School Holidays aan.',
  'help.guide.school-holidays.step.2':
    'Klik op Kalender toevoegen en kies het land. Waar een land zijn kalender opsplitst, kies je ook de regio of groep.',
  'help.guide.school-holidays.step.3':
    'Sluit Instellingen. Elke vakantie krijgt een gekleurde band onderaan zijn dagen.',
  'help.guide.school-holidays.result': 'Schoolvakanties zijn puur visueel: ze verlagen niemands saldo.',
  'help.guide.school-holidays.tip.1':
    'Ontbreekt je regio? Je beheerder kan schoolvakanties handmatig bijhouden onder Admin, Personalisatie, Schoolvakanties.',
  // weekends
  'help.guide.weekends.title': 'Weekenden blokkeren en de weekstart instellen',
  'help.guide.weekends.goal':
    'Weekends buiten de telling houden en de week laten beginnen op de dag die je gewend bent.',
  'help.guide.weekends.step.1': 'Open Instellingen.',
  'help.guide.weekends.step.2': 'Zet Weekenden blokkeren aan en kies welke dagen als jouw weekend gelden.',
  'help.guide.weekends.step.3': 'Kies onder Week begint op maandag of zondag.',
  'help.guide.weekends.result':
    'Geblokkeerde dagen zijn grijs in het raster en kunnen niet per ongeluk ingevoerd worden.',
  // leave-year
  'help.guide.leave-year.title': 'Je vakantiejaar instellen',
  'help.guide.leave-year.goal':
    'Je saldo tellen over een boekjaar of vanaf je indiensttreding in plaats van januari tot december.',
  'help.guide.leave-year.step.1': 'Open Instellingen en zoek Vakantiejaar.',
  'help.guide.leave-year.step.2':
    'Kies Kalenderjaar, Boekjaar (met de maand en dag waarop het begint) of Indiensttreding (met de datum waarop je in dienst kwam).',
  'help.guide.leave-year.result':
    'Saldo, gebruikte dagen en overdracht volgen die periode, en het raster begint bij de eerste maand ervan.',
  'help.guide.leave-year.tip.1':
    'Deze instelling is persoonlijk: in een samengevoegd plan houdt iedereen zijn eigen vakantiejaar en cijfers.',
  // carry-over
  'help.guide.carry-over.title': 'Ongebruikte dagen meenemen',
  'help.guide.carry-over.goal': 'Wat aan het eind van een periode over is bij de volgende optellen.',
  'help.guide.carry-over.step.1': 'Open Instellingen.',
  'help.guide.carry-over.step.2': 'Zet Overdracht aan.',
  'help.guide.carry-over.result':
    'Het overgedragen aantal wordt over al je jaren opnieuw berekend en onder het saldo getoond.',
  'help.guide.carry-over.tip.1': 'Uitzetten zet elk overdrachtssaldo terug op nul.',
  // invite
  'help.guide.invite.title': 'Samen met iemand plannen',
  'help.guide.invite.goal':
    'Je plan samenvoegen met een andere TREK-gebruiker zodat jullie elkaars vrije dagen in één raster zien.',
  'help.guide.invite.step.1': 'Klik op het persoonsicoon in het paneel Personen.',
  'help.guide.invite.step.2': 'Kies de gebruiker en verstuur de uitnodiging.',
  'help.guide.invite.step.3': 'Die krijgt een melding en accepteert. Tot dan staat de uitnodiging als in behandeling.',
  'help.guide.invite.result':
    'Beide plannen smelten samen: iedereen heeft een kleur, jullie kunnen dagen voor elkaar invoeren, en alles synchroniseert live.',
  'help.guide.invite.tip.1':
    'Om een samenvoeging ongedaan te maken gebruik je Opheffen in Instellingen. Ieders invoer keert terug naar het eigen plan.',
  'help.guide.invite.tip.2': 'Moet de ander alleen je dagen zien, deel dan je kalender in plaats van samen te voegen.',
  // share-calendar
  'help.guide.share-calendar.title': 'Je kalender alleen-lezen delen',
  'help.guide.share-calendar.goal': 'Iemand laten zien wanneer je vrij bent zonder inspraak in je plan.',
  'help.guide.share-calendar.step.1': 'Klik op het deelicoon in het paneel Gedeelde kalenders.',
  'help.guide.share-calendar.step.2': 'Kies de gebruiker en klik op Delen. Accepteren is niet nodig.',
  'help.guide.share-calendar.step.3':
    'Kalenders die met jou gedeeld zijn verschijnen in hetzelfde paneel; het oog verbergt er een, Stoppen met delen trekt de jouwe in.',
  'help.guide.share-calendar.result':
    'Je vrije dagen verschijnen als een gekleurde ring in hun raster. Niets van wat je deelt kan daar bewerkt worden.',
  'help.guide.share-calendar.tip.1':
    'Delen en samenvoegen zijn onafhankelijk: je kunt met één persoon samengevoegd zijn en met anderen delen.',
  'help.guide.share-calendar.tip.2': 'Beweeg over een omringde dag om te zien wie vrij is en hoe lang.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'De Atlas is je reisvoetafdruk op een wereldkaart: elk land waar een reis je heen bracht is ingekleurd, en de landen van vóór TREK voeg je met de hand toe. Zoom in voor regio’s, houd een bucketlist bij van plekken die je nog wilt zien en lees je cijfers af in het glazen paneel onderaan.',
  'help.ctx.atlas.bullet.1':
    'De kaart: bezochte landen dragen een kleur die van hen blijft, geplande landen hebben een gestippelde rand, bucketlist-landen een diagonale arcering, al het andere is grijs. Beweeg over een land voor zijn reizen, plekken en eerste en laatste bezoek.',
  'help.ctx.atlas.bullet.2':
    'Zoeken bovenaan: typ een land of een plek. Een land kiezen vliegt erheen en opent zijn pop-up; een plek kiezen landt in zijn regio, zodat je die kunt markeren.',
  'help.ctx.atlas.bullet.3':
    'Geplande landen tonen, rechtsboven: laat de landen van je komende reizen zien. De schakelaar verschijnt alleen zolang je er hebt.',
  'help.ctx.atlas.bullet.4':
    'Paneel onderaan: het tabblad Statistieken met landen, reizen, plekken, steden, dagen, continenten en je reeks; het tabblad Bucketlist met wat nog voor je ligt.',
  'help.ctx.atlas.bullet.5':
    'Regio’s: vanaf zoomniveau 5 schakelt de kaart naar staten en provincies, elk aanklikbaar om te markeren of te verwijderen.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: met de add-on verbonden vinkt een paneel links van de statistieken wensen af en voegt landen toe uit je opnames, nooit zonder je bevestiging.',
  // mark-country
  'help.guide.mark-country.title': 'Een land als bezocht markeren',
  'help.guide.mark-country.goal':
    'Voeg een land toe waar je vóór TREK bent geweest, zodat de kaart en je telling het meenemen.',
  'help.guide.mark-country.step.1': 'Typ het land in het zoekvak bovenaan de kaart.',
  'help.guide.mark-country.step.2':
    'Kies het uit de lijst. De kaart vliegt erheen en er opent een pop-up voor dat land.',
  'help.guide.mark-country.step.3': 'Kies Markeren als bezocht.',
  'help.guide.mark-country.result':
    'Het land krijgt zijn kleur op de kaart en Landen telt er één meer. Die kleur is blijvend: meer landen markeren husselt de rest nooit door elkaar.',
  'help.guide.mark-country.tip.1':
    'Op een grijs land op de kaart klikken opent dezelfde pop-up; zoeken is de zekere weg bij kleine landen.',
  'help.guide.mark-country.tip.2':
    'Een land dat je met de hand markeert telt altijd als bezocht, wat de datums van een reis erheen ook zijn.',
  // unmark-country
  'help.guide.unmark-country.title': 'Een gemarkeerd land verwijderen',
  'help.guide.unmark-country.goal': 'Haal een met de hand gemarkeerd land weer van de kaart.',
  'help.guide.unmark-country.step.1':
    'Zoek het land en kies het, of klik het aan op de kaart. Bij een land dat je zelf markeerde vraagt de pop-up of het weg moet.',
  'help.guide.unmark-country.step.2': 'Bevestig met Verwijderen.',
  'help.guide.unmark-country.result': 'Het land wordt weer grijs en verlaat je telling.',
  'help.guide.unmark-country.tip.1':
    'Alleen met de hand gemarkeerde landen kun je zo verwijderen. Een land met reizen of plekken blijft zolang die er zijn; Verwijderen staat ook in zijn detailkaart in het paneel als het met de hand gemarkeerd is.',
  // country-details
  'help.guide.country-details.title': 'Zien wat je in een land deed',
  'help.guide.country-details.goal': 'Open een bezocht land en spring naar de reizen die je erheen brachten.',
  'help.guide.country-details.step.1': 'Zoek een land dat je hebt bezocht.',
  'help.guide.country-details.step.2':
    'Kies het. De kaart vliegt erheen en het paneel onderaan krijgt een kaart met vlag, plekken, reizen en een chip per reis.',
  'help.guide.country-details.result': 'Klik op een reischip om die reis in de planner te openen.',
  'help.guide.country-details.tip.1':
    'Over het land bewegen op de kaart toont dezelfde cijfers plus het eerste en laatste bezoek.',
  // planned-countries
  'help.guide.planned-countries.title': 'De landen tonen waar je heen gaat',
  'help.guide.planned-countries.goal':
    'Zet de landen van je komende reizen op de kaart zonder ze als bezocht te tellen.',
  'help.guide.planned-countries.step.1':
    'Zet Geplande landen tonen aan, rechtsboven. Het getal ernaast zegt hoeveel er wachten.',
  'help.guide.planned-countries.step.2':
    'Zoek een gepland land en kies het: het paneel zegt Gepland en de tooltip op de kaart toont wanneer je gaat.',
  'help.guide.planned-countries.result':
    'Geplande landen verschijnen met een gestippelde rand, zodat ze nooit lijken op een plek waar je al was. De schakelaar onthoudt je keuze.',
  'help.guide.planned-countries.tip.1':
    'Een land telt als bezocht zodra de reis erheen is begonnen; een lopende reis telt ook. Reizen zonder datums blijven helemaal buiten de statistieken.',
  'help.guide.planned-countries.tip.2': 'De schakelaar bestaat alleen zolang je komende reizen hebt.',
  // regions
  'help.guide.regions.title': 'Een regio markeren',
  'help.guide.regions.goal': 'Fijner dan landen: markeer de staten, provincies of prefecturen waar je bent geweest.',
  'help.guide.regions.step.1':
    'Zoom in op een land tot zijn regio’s verschijnen, vanaf zoomniveau 5. Het land zoeken en kiezen brengt je dichtbij genoeg.',
  'help.guide.regions.step.2':
    'Klik een regio aan. Eroverheen bewegen noemt de naam; de pop-up toont de regio en zijn land.',
  'help.guide.regions.step.3': 'Kies Markeren als bezocht.',
  'help.guide.regions.result':
    'De regio vult zich met de kleur van het land. Een regio markeren telt ook het land als bezocht als dat nog niet zo was.',
  'help.guide.regions.tip.1':
    'Op een bezochte regio klikken biedt Verwijderen, of je die nu markeerde of een plek haar daar zette.',
  'help.guide.regions.tip.2':
    'Regio’s waar je echte plekken hebt worden voor je gemarkeerd; daar hoef je niets te doen.',
  // search-place
  'help.guide.search-place.title': 'Een plek vinden en zijn regio markeren',
  'help.guide.search-place.goal':
    'Markeer Beieren door naar München te zoeken, zonder te weten in welke regio een stad ligt.',
  'help.guide.search-place.step.1':
    'Typ een stad, een bezienswaardigheid of een adres in het zoekvak. Landen komen eerst; de passende plekken verschijnen eronder onder Plekken.',
  'help.guide.search-place.step.2': 'Kies de plek. De kaart vliegt erheen en zoekt uit in welke regio het punt ligt.',
  'help.guide.search-place.step.3':
    'Kies Markeren als bezocht voor die regio, of Aan bucket list toevoegen als die nog voor je ligt.',
  'help.guide.search-place.result':
    'De regio is gemarkeerd, en het land ermee. Landen zonder regiogegevens in het kaartpakket vallen terug op het land zelf.',
  'help.guide.search-place.tip.1':
    'Plekken komen uit dezelfde zoekfunctie als overal in TREK, dus ze volgen de aanbieder die je beheerder instelde.',
  // bucket-country
  'help.guide.bucket-country.title': 'Een land op de bucketlist zetten',
  'help.guide.bucket-country.goal':
    'Houd een bucketlist van landen bij, direct op de kaart, los van de landen waar je was.',
  'help.guide.bucket-country.step.1': 'Zoek het land en kies het, of klik het aan op de kaart.',
  'help.guide.bucket-country.step.2': 'Kies Aan bucket list toevoegen.',
  'help.guide.bucket-country.step.3':
    'Kies een maand en jaar als je al weet wanneer, en bevestig met Aan bucket list toevoegen.',
  'help.guide.bucket-country.result':
    'Het land wordt met een diagonale arcering getekend in de kleur die het krijgt zodra je er bent, en het verschijnt in het tabblad Bucketlist van het paneel.',
  'help.guide.bucket-country.tip.1':
    'Dezelfde pop-up biedt Uit bucket list verwijderen zodra het land op de lijst staat.',
  'help.guide.bucket-country.tip.2':
    'Eén item per streefdatum: hetzelfde land kan voor twee verschillende maanden op de lijst staan, maar niet twee keer voor dezelfde.',
  // bucket-place
  'help.guide.bucket-place.title': 'Een plek aan de bucketlist toevoegen',
  'help.guide.bucket-place.goal':
    'Bewaar een stad, een bezienswaardigheid of een adres waar je van droomt, met coördinaten en een streefdatum.',
  'help.guide.bucket-place.step.1': 'Open het tabblad Bucketlist in het paneel onderaan.',
  'help.guide.bucket-place.step.2': 'Klik op Plaats toevoegen.',
  'help.guide.bucket-place.step.3':
    'Typ de naam en druk op de zoekknop; kies de treffer zodat de plek coördinaten krijgt. Alleen een naam typen en het zoeken overslaan kan ook.',
  'help.guide.bucket-place.step.4': 'Kies eventueel een maand en jaar en klik op Toevoegen.',
  'help.guide.bucket-place.result':
    'De plek staat bovenaan je bucketlist met zijn streefdatum; de × ernaast haalt hem weer weg.',
  'help.guide.bucket-place.tip.1':
    'Een wens met coördinaten is wat Dawarich later voor je kan afvinken, zodra je opnames laten zien dat je er was.',
  // stats
  'help.guide.stats.title': 'Je statistieken lezen',
  'help.guide.stats.goal': 'Weten wat de cijfers in het paneel tellen, en wat niet.',
  'help.guide.stats.step.1':
    'Landen is het aantal verschillende landen waar je echt bent geweest; geplande staan ernaast, niet erin. Reizen, Plaatsen en Dagen zijn totalen over al je reizen. Steden wordt afgeleid uit de adressen van je plekken, dus het is een schatting.',
  'help.guide.stats.step.2':
    'De continenten tonen bezochte landen per continent; Antarctica komt in de rij zodra je er bent geweest. Dan je reeks, opeenvolgende jaren met minstens één reis, en hoeveel reizen je dit jaar maakte.',
  'help.guide.stats.result': 'De cijfers volgen je reizen terwijl je ze plant; hier hoeft niets bijgehouden te worden.',
  'help.guide.stats.tip.1':
    'Steden worden uit de adrestekst gelezen, niet opgezocht, dus een kort adres als „Osteria Francescana, Italy“ of een dat eindigt op een prefectuur kan een regio opleveren in plaats van een stad.',
  'help.guide.stats.tip.2':
    'Met de hand gemarkeerde landen tellen mee in Landen en de continenten, maar brengen geen reizen, plekken of dagen mee.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Collecties',
  'help.ctx.collections.summary':
    'Collections is je plekkenbibliotheek buiten elke reis: lijsten met een naam vol plekken die je vond en wilt bewaren, elke plek met een status Idee, Wil heen of Bezocht. Plekken worden reizen in en uit gekopieerd, nooit gekoppeld, dus een lijst en een reis veranderen elkaar nooit.',
  'help.ctx.collections.bullet.1':
    'Lijstenbalk links: je eigen lijsten, de lijsten die met je gedeeld zijn, uitnodigingen die op een ja wachten, Alle opgeslagen als de som van alles wat van jou is, en Nieuwe lijst plus de bestandsimport bovenaan.',
  'help.ctx.collections.bullet.2':
    'Kop van de open lijst: zijn kleur, omslag, beschrijving en links, de leden, en rechts de acties Bewerken, Exporteren en Delen.',
  'help.ctx.collections.bullet.3':
    'Filterrij boven de plekken: status, categorie, beoordeling en sortering, het labelfilter, de + om een plek toe te voegen, de import uit een reis en Kiezen voor bulkacties.',
  'help.ctx.collections.bullet.4':
    'Plekrijen: avatar, naam en adres, labels en categorie, en rechts de statuspil die met één klik doorschakelt.',
  'help.ctx.collections.bullet.5':
    'Kaart rechts: een speld per plek met coördinaten, de schakelaar lijst of kaart, het zoekvak en het labelfilter. Op een speld klikken opent die plek.',
  'help.ctx.collections.bullet.6':
    'Detailblad: klik op een rij voor omslag, categorie, labels, status, beschrijving en links, met Bewerken, Naar reis kopiëren en Uit lijst verwijderen.',
  // create-list
  'help.guide.create-list.title': 'Een lijst aanmaken',
  'help.guide.create-list.goal': 'Begin een nieuwe lijst met een naam, een kleur en een omslag, klaar voor plekken.',
  'help.guide.create-list.step.1': 'Klik op Nieuwe lijst bovenaan de lijstenbalk.',
  'help.guide.create-list.step.2':
    'Geef de lijst een naam en kies een kleur. Omslagfoto, beschrijving en links zijn optioneel; je kunt ze later toevoegen met Bewerken.',
  'help.guide.create-list.step.3': 'Klik op Aanmaken.',
  'help.guide.create-list.result':
    'De lijst opent leeg, met Plaats toevoegen en Importeren uit een reis als de twee manieren om hem te vullen.',
  'help.guide.create-list.tip.1':
    'De omslag kan een eigen upload zijn of een foto uit de Unsplash-zoekfunctie in hetzelfde dialoogvenster.',
  // add-place
  'help.guide.add-place.title': 'Een plek toevoegen',
  'help.guide.add-place.goal':
    'Vind een plek en sla hem in één keer op in de open lijst, met naam, categorie, status en notities.',
  'help.guide.add-place.step.1': 'Klik op de + in de filterrij boven de plekken.',
  'help.guide.add-place.step.2':
    'Typ de plek in het zoekveld en kies een resultaat. Naam, adres en coördinaten worden daaruit ingevuld.',
  'help.guide.add-place.step.3':
    'Stel de status in en, als je wilt, een categorie, een beschrijving en links, en klik dan op Toevoegen. Het dialoogvenster blijft open voor de volgende plek; Annuleren sluit het.',
  'help.guide.add-place.result': 'De plek verschijnt in de lijst en, als hij coördinaten heeft, als speld op de kaart.',
  'help.guide.add-place.tip.1':
    'Vanuit een reis zet In collectie opslaan in de plekinspector of het plekmenu een reisplek op een lijst zonder de reis te verlaten.',
  'help.guide.add-place.tip.2':
    'De lijst moet van jou zijn of een waar je bewerker of beheerder bent; de + is er niet op Alle opgeslagen of op een lijst die je alleen bekijkt.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Plekken uit een reis importeren',
  'help.guide.import-from-trip.goal':
    'Haal alle plekken van een reis in één keer op een lijst in plaats van ze één voor één op te slaan.',
  'help.guide.import-from-trip.step.1':
    'Klik op de importknop met de wolkpijl in de filterrij. Op een lege lijst staat dezelfde actie naast Plaats toevoegen.',
  'help.guide.import-from-trip.step.2': 'Kies een van je reizen.',
  'help.guide.import-from-trip.step.3':
    'Vink de plekken aan die je wilt. Plekken die al op de lijst staan zijn grijs; de plekken die in geen enkele dag van de reis zitten staan vooraf aangevinkt. Alleen nieuwe verbergt wat je al hebt.',
  'help.guide.import-from-trip.step.4': 'Klik op Importeren. De knop zegt altijd hoeveel er zo worden toegevoegd.',
  'help.guide.import-from-trip.result':
    'De plekken worden met naam, adres, coördinaten, beschrijving en categorie naar de lijst gekopieerd. De reis blijft zoals hij was.',
  'help.guide.import-from-trip.tip.1':
    'Dubbelen op naam of coördinaten worden automatisch overgeslagen, dus twee keer importeren kan geen kwaad.',
  'help.guide.import-from-trip.tip.2':
    'In de plekkenlijst van een reis biedt de selectiemodus in plaats daarvan In collectie opslaan voor een handmatig gekozen set plekken.',
  // place-status
  'help.guide.place-status.title': 'De status van een plek instellen',
  'help.guide.place-status.goal': 'Houd bij wat een idee is, wat op de shortlist staat en waar je al bent geweest.',
  'help.guide.place-status.step.1': 'Klik op de statuspil aan het rechtereind van een plekrij. Idee wordt Wil heen.',
  'help.guide.place-status.step.2': 'Klik nog eens voor Bezocht, en nog een keer om weer bij Idee te beginnen.',
  'help.guide.place-status.result': 'De pil en zijn kleur veranderen meteen; het statusfilter boven de lijst telt mee.',
  'help.guide.place-status.tip.1':
    'Status is iets van Collections: een plek naar een reis kopiëren neemt hem niet mee.',
  'help.guide.place-status.tip.2':
    'Vanuit een reis toont In collectie opslaan een statuspil per lijst waar de plek op staat, en het plekkenpaneel heeft de actie Markeer als bezocht voor een selectie.',
  // place-detail
  'help.guide.place-detail.title': 'Een opgeslagen plek openen',
  'help.guide.place-detail.goal':
    'Zie alles over een plek en doe er iets mee: bewerken, naar een reis kopiëren, verwijderen.',
  'help.guide.place-detail.step.1':
    'Klik op een plekrij. Het detailblad opent naast de lijst en de kaart schuift naar de plek.',
  'help.guide.place-detail.step.2':
    'Onderaan staan Bewerken, Naar reis kopiëren en Uit lijst verwijderen; de camera op de omslag wisselt de automatische foto voor een eigen foto.',
  'help.guide.place-detail.result':
    'Bewerken maakt naam, categorie, labels, adres, coördinaten, beschrijving en links direct in het blad bewerkbaar.',
  'help.guide.place-detail.tip.1':
    'De omslag wordt automatisch opgehaald als de plek geen eigen foto heeft. Je eigen upload mag JPG, PNG, GIF of WebP zijn tot 20 MB.',
  'help.guide.place-detail.tip.2':
    'Leden van een gedeelde lijst kunnen hier ook een sterrenbeoordeling achterlaten, en het beoordelingsfilter in de filterrij gebruikt het gemiddelde.',
  // labels
  'help.guide.labels.title': 'Plekken groeperen met labels',
  'help.guide.labels.goal': 'Geef een lijst eigen labels, zoals wijken of dagen, naast de gedeelde categorieën.',
  'help.guide.labels.step.1': 'Open het labelbeheer via het labelelement in de filterrij.',
  'help.guide.labels.step.2':
    'Typ een naam, kies een kleur en klik op Label toevoegen. Hernoem, herkleur of verwijder bestaande labels in hetzelfde dialoogvenster.',
  'help.guide.labels.step.3':
    'Zet Kiezen aan, vink de plekken aan en klik op Label toewijzen in de selectiebalk. Een enkele plek krijgt ook labels via Bewerken op zijn detailblad.',
  'help.guide.labels.step.4':
    'Kies een of meer labels in de filterrij om de lijst en de kaart te beperken tot plekken die een ervan dragen.',
  'help.guide.labels.result':
    'Gelabelde plekken tonen hun labels op de rij; het labelfilter is er voor elk lid, ook voor kijkers.',
  'help.guide.labels.tip.1':
    'Labels horen bij de ene lijst waarin ze zijn gemaakt. Een plek naar een andere lijst verplaatsen laat ze vallen.',
  'help.guide.labels.tip.2': 'Labels beheren en toewijzen vereist bewerkrechten op de lijst.',
  // filter-select
  'help.guide.filter-select.title': 'Plekken filteren en selecteren',
  'help.guide.filter-select.goal': 'Perk de lijst in en doe iets met veel plekken tegelijk.',
  'help.guide.filter-select.step.1':
    'Gebruik de keuzemenu’s in de filterrij: status, categorie, minimale beoordeling en sorteervolgorde. Elk laat zien hoeveel plekken het zou overlaten.',
  'help.guide.filter-select.step.2':
    'Klik op Kiezen. Elke rij krijgt een selectievakje en er verschijnt een selectiebalk.',
  'help.guide.filter-select.step.3':
    'Vink plekken aan of gebruik Alles selecteren voor alles wat nu gefilterd is, en kies dan Label toewijzen, Naar lijst verplaatsen, Naar lijst dupliceren, Naar reis kopiëren of Verwijderen.',
  'help.guide.filter-select.result':
    'De acties gelden voor de hele selectie in één keer. De × rechts verlaat de selectiemodus.',
  'help.guide.filter-select.tip.1':
    'Alles selecteren volgt het filter, dus filteren op Wil heen en alles selecteren is de snelle weg om de shortlist aan te pakken.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Plekken naar een reis kopiëren',
  'help.guide.copy-to-trip.goal': 'Maak van opgeslagen plekken stops op een van je reizen.',
  'help.guide.copy-to-trip.step.1':
    'Zet Kiezen aan en vink de plekken aan, of open één plek en gebruik Naar reis kopiëren op zijn detailblad.',
  'help.guide.copy-to-trip.step.2': 'Klik op Naar reis kopiëren in de selectiebalk.',
  'help.guide.copy-to-trip.step.3': 'Kies de reis. Het zoekvak perkt een lange lijst in.',
  'help.guide.copy-to-trip.result':
    'De plekken landen in de plekkenlijst van die reis met naam, beschrijving, categorie, notities, prijs, coördinaten, foto en tags. In de collectie verandert niets.',
  'help.guide.copy-to-trip.tip.1':
    'Kijkers van een gedeelde lijst kunnen dit ook; het kopieert uit de lijst, het verandert de lijst niet.',
  // share-list
  'help.guide.share-list.title': 'Een lijst met iemand delen',
  'help.guide.share-list.goal': 'Plan een lijst live samen met andere mensen op deze TREK.',
  'help.guide.share-list.step.1': 'Klik op Delen in de kop van je lijst.',
  'help.guide.share-list.step.2': 'Selecteer de gebruiker en een rol: Kijker, Bewerker of Beheerder.',
  'help.guide.share-list.step.3':
    'Klik op Uitnodiging sturen. De persoon staat als uitnodiging in afwachting tot hij of zij de uitnodiging in de eigen lijstenbalk accepteert.',
  'help.guide.share-list.result':
    'Na acceptatie verschijnt de lijst bij die persoon onder Gedeeld en synchroniseert elke wijziging live. Leden en hun rollen blijven in hetzelfde dialoogvenster te bewerken.',
  'help.guide.share-list.tip.1':
    'Kijkers kunnen kijken, beoordelen en plekken naar hun eigen reizen kopiëren. Bewerkers voegen plekken en labels toe en bewerken ze. Beheerders kunnen ook verwijderen.',
  'help.guide.share-list.tip.2':
    'Alleen de eigenaar nodigt mensen uit en verwijdert ze; een lid kan een gedeelde lijst zelf verlaten.',
  // export-list
  'help.guide.export-list.title': 'Een lijst als bestand exporteren',
  'help.guide.export-list.goal': 'Geef een lijst aan iemand op een andere TREK, of neem hem mee naar een kaarten-app.',
  'help.guide.export-list.step.1': 'Klik op Exporteren in de kop van de lijst.',
  'help.guide.export-list.step.2':
    'Kies TREK-lijst voor een andere TREK, met labels en status, of GPX voor OsmAnd, Organic Maps, een Garmin en andere apps die waypoints lezen.',
  'help.guide.export-list.result': 'Het bestand wordt gedownload. Elk lid van een gedeelde lijst mag hem exporteren.',
  'help.guide.export-list.tip.1':
    'Een plek zonder coördinaten kan geen GPX-waypoint zijn; hij wordt weggelaten en TREK vertelt je hoeveel dat er waren.',
  'help.guide.export-list.tip.2':
    'Beoordelingen, leden en geüploade foto’s blijven bewust achter; ze horen bij deze TREK, niet bij de lijst.',
  // import-file
  'help.guide.import-file.title': 'Een lijst uit een bestand importeren',
  'help.guide.import-file.goal':
    'Haal een TREK-lijstbestand of een GPX-bestand binnen, als nieuwe lijst of in een lijst die je al hebt.',
  'help.guide.import-file.step.1': 'Klik op de importknop met de uploadpijl naast Nieuwe lijst in de lijstenbalk.',
  'help.guide.import-file.step.2':
    'Kies het bestand. TREK laat zien wat erin zit voordat er iets gebeurt: de naam, hoeveel plekken en labels.',
  'help.guide.import-file.step.3':
    'Laat Nieuwe lijst staan en verander de naam als je wilt, of kies Aan een lijst toevoegen om de plekken in een lijst te zetten die je kunt bewerken, en klik dan op Importeren.',
  'help.guide.import-file.result':
    'Je komt op de lijst met de geïmporteerde plekken. Aan een lijst toevoegen voegt alleen maar toe; plekken die er al staan houden hun status, notities en labels.',
  'help.guide.import-file.tip.1':
    'Uit een GPX wordt elk benoemd waypoint een plek; tracks zijn lijnen en worden weggelaten, en het voorbeeld zegt hoeveel punten dat waren.',
  'help.guide.import-file.tip.2':
    'Een bestand dat noch een TREK-lijst noch een GPX is, wordt met een reden geweigerd; een enkele onleesbare plek wordt overgeslagen, niet het hele bestand.',
  // edit-list
  'help.guide.edit-list.title': 'Een lijst bewerken of verwijderen',
  'help.guide.edit-list.goal':
    'Verander de naam, kleur, omslag, beschrijving of links van een lijst, of haal de lijst weg.',
  'help.guide.edit-list.step.1': 'Klik op Bewerken in de kop van de lijst. Alleen de eigenaar ziet het.',
  'help.guide.edit-list.step.2':
    'Verander wat je wilt en klik op Opslaan. Lijst verwijderen linksonder haalt de lijst met al zijn plekken weg, na een bevestiging.',
  'help.guide.edit-list.result': 'De kop neemt de nieuwe kleur, omslag en beschrijving meteen over.',
  'help.guide.edit-list.tip.1':
    'Een lijst verwijderen kan niet ongedaan worden gemaakt. Exporteer hem eerst als je een kopie wilt bewaren.',
  // all-saved
  'help.guide.all-saved.title': 'Je hele bibliotheek doorzoeken',
  'help.guide.all-saved.goal': 'Kijk in één keer over elke lijst die van jou is.',
  'help.guide.all-saved.step.1':
    'Klik op Alle opgeslagen in de lijstenbalk. Het voegt de plekken samen van elke lijst waarvan je eigenaar of mede-eigenaar bent.',
  'help.guide.all-saved.step.2':
    'Gebruik het zoekvak en de filters zoals op elke lijst; Kiezen werkt hier ook, om naar een reis te kopiëren.',
  'help.guide.all-saved.result':
    'Eén weergave over al je opgeslagen plekken, zonder toevoegen of importeren, omdat er geen enkele lijst is om ze op te zetten.',
  'help.guide.all-saved.tip.1': 'Labels zijn per lijst, dus het labelfilter wordt op Alle opgeslagen niet aangeboden.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Reisverslag',
  'help.ctx.journey.summary':
    'Reisverslag is je reisdagboek met de foto’s voorop. Elk reisverslag hangt aan een of meer reizen en groeit dag na dag uit vermeldingen met een verhaal, foto’s, stemming en weer. Dit scherm toont je reisverslagen; open er een om te schrijven.',
  'help.ctx.journey.bullet.1':
    'De banner bovenaan toont het lopende reisverslag, of je nieuwste, met zijn aantallen vermeldingen, foto’s en plekken. Verder schrijven opent het op vandaag.',
  'help.ctx.journey.bullet.2':
    'Daaronder één kaart per reisverslag met omslag, ondertitel, data en aantallen. Klik op een kaart om het te openen.',
  'help.ctx.journey.bullet.3':
    'De laatste kaart in het raster, Nieuw reisverslag aanmaken, start er een uit je reizen.',
  // create-journey
  'help.guide.create-journey.title': 'Een reisverslag aanmaken',
  'help.guide.create-journey.goal':
    'Een dagboek voor een reis beginnen, met de plekken van de reis al klaar als suggesties.',
  'help.guide.create-journey.step.1': 'Klik op Nieuw reisverslag aanmaken, de laatste kaart in het raster.',
  'help.guide.create-journey.step.2':
    'Geef het een naam en, als je wilt, een ondertitel, en vink de reizen aan waar het bij hoort. De teller zegt hoeveel plekken erin komen.',
  'help.guide.create-journey.step.3': 'Klik op Reisverslag aanmaken.',
  'help.guide.create-journey.result':
    'Het dagboek opent. Elke plek van de gekoppelde reizen staat als suggestie in de tijdlijn, één per dag waarop hij valt, klaar om over te schrijven.',
  'help.guide.create-journey.tip.1': 'Meer reizen koppel je later via Reisverslaginstellingen.',
  'help.guide.create-journey.tip.2':
    'Een reisverslag zonder reizen werkt ook; je voegt vermeldingen dan met de hand toe.',
  // open-journey
  'help.guide.open-journey.title': 'Een reisverslag openen',
  'help.guide.open-journey.goal': 'In een dagboek komen, en weten waar het opent.',
  'help.guide.open-journey.step.1':
    'Klik op een kaart. Elke kaart toont de omslag, de data en hoeveel vermeldingen, foto’s en plekken het reisverslag bevat.',
  'help.guide.open-journey.result':
    'Een lopend reisverslag opent op vandaag, of op de laatste vermelding vóór vandaag als er nog niets geschreven is; een afgerond verslag opent aan het begin.',
  'help.guide.open-journey.tip.1':
    'De omslag is de eerste foto van het reisverslag, tenzij je er een instelt in Reisverslaginstellingen.',
  // continue-writing
  'help.guide.continue-writing.title': 'Verder met het lopende reisverslag',
  'help.guide.continue-writing.goal': 'Meteen naar de pagina van vandaag van het reisverslag waar je middenin zit.',
  'help.guide.continue-writing.step.1':
    'Klik op Verder schrijven in de banner bovenaan. Die toont het lopende reisverslag, of het nieuwste als er geen loopt.',
  'help.guide.continue-writing.result':
    'Het dagboek opent op vandaag, of op de laatste vermelding vóór vandaag als er nog niets geschreven is.',
  'help.guide.continue-writing.tip.1':
    'De banner doet ook een suggestie voor een reis die nog geen reisverslag heeft; Sluiten verbergt die.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Dagboek',
  'help.ctx.journey-detail.summary':
    'Eén geopend reisverslag: links de tijdlijn, dag na dag, en rechts de kaart met elke vermelding en de plekken van de gekoppelde reizen. Alles wat iets aan het dagboek toevoegt zit bovenaan; de kop bevat de aantallen, Studio, de suggestieschakelaar en Reisverslaginstellingen.',
  'help.ctx.journey-detail.bullet.1':
    'Kop: omslag, titel en ondertitel, de aantallen dagen, plekken, vermeldingen en foto’s, en rechts Studio, de suggestieschakelaar en Reisverslaginstellingen.',
  'help.ctx.journey-detail.bullet.2':
    'Werkbalk: de tabbladen Tijdlijn en Galerij, Zoeken in deze reis en Vermelding toevoegen.',
  'help.ctx.journey-detail.bullet.3':
    'Tijdlijn: één sectie per dag met een + om op die dag een vermelding toe te voegen; vermeldingskaarten met foto’s, stemming, weer en verhaal; suggesties uit de reizen in een lichtere stijl, met Deze suggestie verwerpen.',
  'help.ctx.journey-detail.bullet.4':
    'Kaart: vermeldingen als spelden, in datumvolgorde verbonden door een stippellijn, de plekken van de reizen en alle GPX-tracks die in die reizen zijn geïmporteerd.',
  'help.ctx.journey-detail.bullet.5':
    'Reisverslaginstellingen: omslag, naam en ondertitel, tracks op de kaart, velden van het item, verworpen suggesties, gekoppelde reizen, bijdragers, openbaar delen, archiveren en verwijderen.',
  'help.ctx.journey-detail.bullet.6':
    'Twee ronde knoppen zweven boven een lange tijdlijn: terug naar boven, en spring naar de laatste vermelding.',
  // add-entry
  'help.guide.add-entry.title': 'Een vermelding schrijven',
  'help.guide.add-entry.goal': 'Het verhaal van een dag toevoegen met titel, tekst, stemming en weer.',
  'help.guide.add-entry.step.1':
    'Klik op Vermelding toevoegen in de werkbalk, of op de + in de kop van een dag om op die dag te beginnen.',
  'help.guide.add-entry.step.2':
    'Geef het moment een naam en schrijf het verhaal. De balk boven de tekst voegt vet, cursief, koppen, citaten, links en lijsten toe in Markdown.',
  'help.guide.add-entry.step.3':
    'Kies een stemming en het weer, controleer de datum en zet als je wilt een locatie vast: zoek een plek of gebruik je huidige positie.',
  'help.guide.add-entry.step.4': 'Klik op Opslaan.',
  'help.guide.add-entry.result':
    'De vermelding verschijnt op zijn dag in de tijdlijn en als speld op de kaart. De aantallen in de kop worden bijgewerkt.',
  'help.guide.add-entry.tip.1': 'In een suggestie schrijven is dezelfde editor, met de plek al ingevuld.',
  'help.guide.add-entry.tip.2':
    'Tags onderaan zijn vrije tekst, verborgen parel of beste maaltijd, en de zoekfunctie vindt ze.',
  // entry-photos
  'help.guide.entry-photos.title': 'Foto’s en video’s aan een vermelding toevoegen',
  'help.guide.entry-photos.goal': 'Beelden op een dag zetten; de eerste wordt de omslag van de vermelding.',
  'help.guide.entry-photos.step.1': 'Open het menu van een vermelding met de ⋯ op zijn kaart en kies Bewerken.',
  'help.guide.entry-photos.step.2':
    'Klik op Foto’s uploaden en kies de bestanden. Uit galerij neemt beelden die al in de galerij van het reisverslag staan; External photos doorzoekt een gekoppelde Immich- of Synology-bibliotheek voor die dag.',
  'help.guide.entry-photos.step.3':
    'Beweeg over een beeld voor Maak 1e om de omslag te kiezen, en klik dan op Opslaan.',
  'help.guide.entry-photos.result': 'De foto’s staan op de kaart en in de galerij; de eerste is overal de miniatuur.',
  'help.guide.entry-photos.tip.1':
    'Video’s gaan op dezelfde manier op een vermelding: mp4, m4v, webm of mov tot 500 MB, opgeslagen zoals geüpload.',
  'help.guide.entry-photos.tip.2':
    'HEIC-bestanden van een iPhone worden bij het uploaden naar JPEG omgezet, waardoor hun GPS- en camerametadata verdwijnen.',
  // suggestions
  'help.guide.suggestions.title': 'Suggesties gebruiken of verwerpen',
  'help.guide.suggestions.goal':
    'De plekken van je reizen omzetten in vermeldingen, en de plekken opruimen waarover je niet gaat schrijven.',
  'help.guide.suggestions.step.1':
    'Een suggestie is een lichtere kaart met de plaatsnaam cursief. Klik erop om de editor te openen met plek en dag al ingevuld.',
  'help.guide.suggestions.step.2':
    'Klik op Deze suggestie verwerpen bij een kaart die je niet gebruikt. Ze verlaat de tijdlijn zonder verwijderd te worden, en de reissynchronisatie biedt ze niet opnieuw aan.',
  'help.guide.suggestions.step.3':
    'Van gedachten veranderd? Reisverslaginstellingen toont hoeveel er verworpen zijn, en Verworpen suggesties terughalen brengt ze allemaal terug.',
  'help.guide.suggestions.result':
    'De tijdlijn bevat alleen wat je echt wilt schrijven; de schakelaar in de kop verbergt alle suggesties in één keer terwijl je leest.',
  'help.guide.suggestions.tip.1': 'Een plek die twee dagen beslaat geeft op elk van die dagen een suggestie.',
  'help.guide.suggestions.tip.2':
    'Suggesties tellen nooit mee in de statistieken; alleen geschreven vermeldingen tellen.',
  // add-on-day
  'help.guide.add-on-day.title': 'Een vermelding op een eerdere dag toevoegen',
  'help.guide.add-on-day.goal': 'Schrijven over een dag die al voorbij is zonder achteraf de datum te corrigeren.',
  'help.guide.add-on-day.step.1': 'Klik op de + in de kop van die dag.',
  'help.guide.add-on-day.step.2': 'De editor opent met die datum ingesteld. Schrijf en Opslaan zoals altijd.',
  'help.guide.add-on-day.result': 'De vermelding komt meteen op de juiste dag terecht.',
  'help.guide.add-on-day.tip.1':
    'Binnen een dag verplaatsen de pijlen in het menu van een vermelding hem naar voren of naar achteren.',
  // pros-cons
  'help.guide.pros-cons.title': 'Een oordeel toevoegen',
  'help.guide.pros-cons.goal': 'Een dag samenvatten met wat geweldig was en wat niet.',
  'help.guide.pros-cons.step.1':
    'Zoek in de editor Voor- & nadelen onder het verhaal. Typ een punt in Voordelen of Nadelen en gebruik Nog een toevoegen voor de volgende.',
  'help.guide.pros-cons.step.2': 'Opslaan. Het oordeel staat op de kaart als twee korte lijsten.',
  'help.guide.pros-cons.result': 'Duim omhoog en duim omlaag in één oogopslag, onder het verhaal.',
  'help.guide.pros-cons.tip.1':
    'Een reisverslag dat geen oordelen gebruikt, kan de sectie uitschakelen onder Velden van het item in Reisverslaginstellingen.',
  // search-journey
  'help.guide.search-journey.title': 'Iets vinden in een lang dagboek',
  'help.guide.search-journey.goal': 'Bij de vermelding komen die je bedoelt zonder door weken te scrollen.',
  'help.guide.search-journey.step.1':
    'Typ in Zoeken in deze reis in de werkbalk. De tijdlijn filtert terwijl je typt, over titels, verhalen, plekken en tags. Accenten en hoofdletters maken niet uit.',
  'help.guide.search-journey.step.2':
    'De suggestieschakelaar in de kop verbergt de ongeschreven kaarten terwijl je leest. Zodra de tijdlijn lang is, zweven twee ronde knoppen boven de onderrand: terug naar boven, en spring naar de laatste vermelding.',
  'help.guide.search-journey.result':
    'Alleen passende vermeldingen blijven staan; maak het vak leeg om weer alles te zien.',
  'help.guide.search-journey.tip.1':
    'Een lopend reisverslag opent op vandaag, dus de huidige pagina is meestal al in beeld.',
  'help.guide.search-journey.tip.2':
    'Tags tellen ook mee: zoeken op verborgen parel vindt elke vermelding met die tag.',
  // gallery-map
  'help.guide.gallery-map.title': 'De galerij en de kaart bekijken',
  'help.guide.gallery-map.goal': 'Het hele reisverslag zien als beelden, en als plekken op de kaart.',
  'help.guide.gallery-map.step.1':
    'Schakel in de werkbalk naar Galerij: elke foto van elke vermelding, plus beelden die rechtstreeks naar de galerij zijn geüpload. Klik op een foto voor de lightbox.',
  'help.guide.gallery-map.step.2':
    'De kaart rechts toont de vermeldingen als spelden in datumvolgorde, de plekken van de gekoppelde reizen en elke GPX-track die in die reizen is geïmporteerd, in de kleur die hij in de planner heeft.',
  'help.guide.gallery-map.result':
    'Beweeg over een track voor zijn naam. De stippellijn tussen vermeldingen tekent TREK; een track is de route die je echt hebt opgenomen.',
  'help.guide.gallery-map.tip.1': 'Tracks kun je per reisverslag uitschakelen onder Reisverslaginstellingen.',
  'help.guide.gallery-map.tip.2':
    'Galerijfoto’s met een locatie verschijnen ook op de openbare kaart, als Galerij en Kaart allebei gedeeld zijn.',
  // entry-fields
  'help.guide.entry-fields.title': 'Velden van het item uitschakelen',
  'help.guide.entry-fields.goal': 'De editor beperken tot wat dit reisverslag gebruikt.',
  'help.guide.entry-fields.step.1': 'Open Reisverslaginstellingen vanuit de kop.',
  'help.guide.entry-fields.step.2': 'Schakel onder Velden van het item Stemming, Weer of Plus- en minpunten uit.',
  'help.guide.entry-fields.result':
    'De editor vraagt er niet meer om. Niets wat je schreef gaat verloren: een veld weer inschakelen brengt de opgeslagen waarden terug in beeld, en een gedeeld reisverslag verbergt dezelfde velden.',
  'help.guide.entry-fields.tip.1':
    'De schakelaars gelden per reisverslag, dus een werkreis en een vakantie mogen verschillen.',
  // link-trip
  'help.guide.link-trip.title': 'Nog een reis koppelen',
  'help.guide.link-trip.goal': 'De plekken van een tweede reis als suggesties in het dagboek halen.',
  'help.guide.link-trip.step.1': 'Open Reisverslaginstellingen vanuit de kop.',
  'help.guide.link-trip.step.2': 'Klik onder de gekoppelde reizen op Reis toevoegen.',
  'help.guide.link-trip.step.3': 'Kies de reis.',
  'help.guide.link-trip.result':
    'Zijn plekken komen als suggesties op hun dagen in de tijdlijn, en zijn GPX-tracks komen op de kaart.',
  'help.guide.link-trip.tip.1':
    'De × naast een gekoppelde reis ontkoppelt hem weer; vermeldingen die je schreef blijven staan.',
  'help.guide.link-trip.tip.2': 'Vermeldingen op een dag tellen maar één keer, hoeveel reizen die dag ook dekken.',
  // share-public
  'help.guide.share-public.title': 'Het reisverslag openbaar delen',
  'help.guide.share-public.goal': 'Mensen zonder TREK-account een alleen-lezen-link geven.',
  'help.guide.share-public.step.1': 'Open Reisverslaginstellingen en zoek Openbaar delen.',
  'help.guide.share-public.step.2': 'Klik op Deellink aanmaken.',
  'help.guide.share-public.step.3':
    'Kies wat bezoekers zien: Tijdlijn, Galerij en Kaart zijn aparte schakelaars. Kopiëren zet de link op je klembord.',
  'help.guide.share-public.result':
    'Iedereen met de link ziet de ingeschakelde onderdelen en verder niets; velden die je onder Velden van het item hebt uitgeschakeld blijven daar ook verborgen.',
  'help.guide.share-public.tip.1':
    'Foto’s verschijnen alleen op de openbare kaart als Galerij en Kaart allebei aan staan; met Kaart uit worden hun coördinaten verwijderd voordat ze de server verlaten.',
  'help.guide.share-public.tip.2': 'Verwijder de link op dezelfde plek om het delen te beëindigen.',
  // contributors
  'help.guide.contributors.title': 'Samen schrijven',
  'help.guide.contributors.goal': 'Een reisgenoot eigen vermeldingen en foto’s laten toevoegen.',
  'help.guide.contributors.step.1': 'Open Reisverslaginstellingen en scrol naar de bijdragers.',
  'help.guide.contributors.step.2': 'Klik op Bijdrager uitnodigen en zoek de gebruiker op naam of e-mail.',
  'help.guide.contributors.step.3': 'Kies een rol en bevestig.',
  'help.guide.contributors.result':
    'Het reisverslag verschijnt in hun lijst en hun vermeldingen dragen hun naam. Verwijder een bijdrager met de × ernaast.',
  'help.guide.contributors.tip.1':
    'Bijdragers zijn voor mensen op deze TREK. Voor alle anderen is er de openbare link.',
  // studio
  'help.guide.studio.title': 'Het reisverslag opmaken als fotoboek',
  'help.guide.studio.goal': 'Het dagboek omzetten in afdrukbare pagina’s.',
  'help.guide.studio.step.1': 'Klik op Studio in de kop. De ontwerper opent boven op het reisverslag.',
  'help.guide.studio.step.2':
    'De naam van het reisverslag links in de bovenbalk is de weg terug; hij zet je af waar je was.',
  'help.guide.studio.result':
    'De paginastrook links, de spread op de werkbank, de eigenschappen rechts. Auto layout bouwt het boek uit je vermeldingen; Export maakt een drukklare PDF.',
  'help.guide.studio.tip.1':
    'Studio heeft een venster van minstens 1024 px breed nodig en wordt op een telefoon niet aangeboden.',
  'help.guide.studio.tip.2':
    'Het boek erft de toegang van het reisverslag: wie het reisverslag mag lezen mag het openen, wie mag bewerken mag opslaan.',
  // archive-journey
  'help.guide.archive-journey.title': 'Een reisverslag archiveren of verwijderen',
  'help.guide.archive-journey.goal': 'Een afgerond reisverslag afsluiten, of er een voorgoed verwijderen.',
  'help.guide.archive-journey.step.1': 'Open Reisverslaginstellingen.',
  'help.guide.archive-journey.step.2':
    'Helemaal onderaan beëindigt Reis archiveren het en markeert het als gearchiveerd; Reis herstellen brengt het terug. Verwijderen verwijdert het met alle vermeldingen en foto’s, na een bevestiging.',
  'help.guide.archive-journey.result':
    'Een gearchiveerd reisverslag blijft leesbaar en deelbaar; het opent alleen niet meer op vandaag.',
  'help.guide.archive-journey.tip.1':
    'Verwijderen kan niet ongedaan worden gemaakt, en het raakt de reizen waaraan het reisverslag gekoppeld was niet.',
  'help.guide.archive-journey.tip.2': 'Omslag, naam en ondertitel staan in hetzelfde dialoogvenster, bovenaan.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio zet een reisverslag op als een afdrukbaar fotoboek. Het opent boven het verslag: de paginalijst en de inhoud links, de dubbele pagina waaraan je werkt in het midden, de eigenschappen ervan rechts. Auto layout bouwt een eerste opzet uit je vermeldingen; alles daarna is van jou om te verplaatsen, bij te snijden en anders vorm te geven, met ongedaan maken voor elke stap.',
  'help.ctx.journey-studio.bullet.1':
    'Bovenbalk: Back to the journey, Book view, Undo en Redo, Page format, Auto layout en Export. Het teken Opgeslagen naast de titel vertelt je wanneer het boek is bewaard.',
  'help.ctx.journey-studio.bullet.2':
    'Kolom links met vijf secties: Pages, Content (de foto’s en vermeldingen van het reisverslag), Elements (tekst, vormen, lijnen, rasters, kaders, iconen), Reis (kaarten, landen, vlaggen en markeringen uit het reisverslag) en Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Werkblad: de huidige dubbele pagina met afloop en veilige marges, de zoombalk eronder, Fit to view en Deze dubbele pagina downloaden rechts.',
  'help.ctx.journey-studio.bullet.4':
    'Properties rechts: positie en grootte, uitsnede en focuspunt, vullen of passen, look, hoeken, kader, stapelvolgorde en vergrendeling van wat is geselecteerd; paginanummers en het document als niets is geselecteerd.',
  'help.ctx.journey-studio.bullet.5':
    'Het boek heeft de vorm van een gebonden boek: omslag, één losse eerste pagina, de dubbele pagina’s, één losse laatste pagina en de achterkant. Paginanummers tellen vanaf de eerste pagina en worden afgedrukt zoals getoond.',
  'help.ctx.journey-studio.bullet.6':
    'Meerdere mensen kunnen tegelijk ontwerpen: iedereen ziet de aanwijzers van de anderen met hun namen, en opslaan op een versie die iemand anders heeft gewijzigd komt terug als een conflict in plaats van diens werk te overschrijven.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Het boek automatisch opbouwen',
  'help.guide.studio-auto-layout.goal':
    'Krijg met één klik een complete eerste opzet uit de vermeldingen en foto’s van het verslag.',
  'help.guide.studio-auto-layout.step.1': 'Klik op Auto layout in de bovenbalk.',
  'help.guide.studio-auto-layout.step.2':
    'Kies Het hele boek: het vervangt elke pagina en behoudt je titel en pagina-instellingen. Deze pagina bouwt alleen die op het scherm opnieuw op, en wordt aangeboden op een dubbele pagina die uit een vermelding is ontstaan.',
  'help.guide.studio-auto-layout.step.3':
    'Loop de paginalijst door. Undo haalt de hele indeling terug als je liever had wat je had.',
  'help.guide.studio-auto-layout.result':
    'Eén dubbele pagina per vermelding, op volgorde, met foto’s, titel en verhaal voor je geplaatst. Elk element blijft zijn vermelding volgen tot je het bewerkt.',
  'help.guide.studio-auto-layout.tip.1': 'Beide opties zijn gewone stappen van ongedaan maken, dus probeer ze gerust.',
  'help.guide.studio-auto-layout.tip.2':
    'Een element dat Auto layout aan een vermelding heeft gekoppeld, volgt wijzigingen aan die vermelding tot je het in Properties aanraakt; dat verbreekt de koppeling.',
  // studio-pages
  'help.guide.studio-pages.title': 'Dubbele pagina’s toevoegen, verplaatsen en verwijderen',
  'help.guide.studio-pages.goal': 'Geef het boek pagina voor pagina vorm.',
  'help.guide.studio-pages.step.1':
    'Open Pages in de kolom. De miniaturen zijn het boek op volgorde: omslag, eerste pagina, dubbele pagina’s, laatste pagina, achterkant.',
  'help.guide.studio-pages.step.2':
    'Pagina toevoegen onderaan zet een nieuwe vóór de laatste pagina; de + tussen twee miniaturen voegt er precies daar een in.',
  'help.guide.studio-pages.step.3':
    'Beweeg over een miniatuur voor de acties: Naar voren, Naar achteren, Pagina dupliceren en Pagina verwijderen. Klik op een miniatuur om die dubbele pagina op het werkblad te openen.',
  'help.guide.studio-pages.result':
    'De omslag, de eerste en laatste pagina en de achterkant blijven waar ze zijn; nieuwe dubbele pagina’s landen altijd daartussen.',
  'help.guide.studio-pages.tip.1':
    'Book view in de bovenbalk toont het hele boek als vellen, zoals het gebonden wordt.',
  'help.guide.studio-pages.tip.2':
    'Paginanummers zet je aan onder Document in Properties, zonder dat er iets is geselecteerd.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Een layout op een dubbele pagina toepassen',
  'help.guide.studio-layouts.goal': 'Geef een dubbele pagina een kant-en-klare indeling van foto- en tekstkaders.',
  'help.guide.studio-layouts.step.1':
    'Open Layouts in de kolom. Dertien layouts voor dubbele pagina’s, en een aparte set voor de omslag, de achterkant en de losse pagina’s.',
  'help.guide.studio-layouts.step.2':
    'Klik er een aan. De dubbele pagina op het werkblad neemt de kaders over; foto’s en tekst die je al had, worden erin gegoten.',
  'help.guide.studio-layouts.result':
    'Lege kaders wachten op inhoud: sleep een foto uit Content erop, of gebruik Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Een layout is een stap van ongedaan maken als elke andere.',
  // studio-content
  'help.guide.studio-content.title': 'Foto’s en vermeldingen op een pagina zetten',
  'help.guide.studio-content.goal': 'Breng het eigen materiaal van het reisverslag op de dubbele pagina.',
  'help.guide.studio-content.step.1':
    'Open Content in de kolom. Photos toont elke foto van het reisverslag; Entries toont de vermeldingen met hun tekst.',
  'help.guide.studio-content.step.2':
    "Sleep een foto op de dubbele pagina, of op een leeg kader, of klik op Add to this page eronder. Foto's uploaden voegt foto’s toe die nog niet in het reisverslag staan.",
  'help.guide.studio-content.step.3':
    'Onder een vermelding zetten Title, Story en Place die tekst als tekstelement op de pagina; Datum en de coördinaten komen als markeringen, en de foto’s van de vermelding staan daar meteen opgesomd.',
  'help.guide.studio-content.result':
    'Een neergezette foto wordt een foto-element; tekst blijft de vermelding volgen tot je hem bewerkt.',
  'help.guide.studio-content.tip.1': 'Het zoekvak bovenaan Content filtert beide lijsten.',
  'help.guide.studio-content.tip.2':
    'Een bestand van je bureaublad op het werkblad neerzetten uploadt het en plaatst het in één keer.',
  // studio-elements
  'help.guide.studio-elements.title': 'Tekst, vormen en iconen toevoegen',
  'help.guide.studio-elements.goal': 'Versier een dubbele pagina met meer dan foto’s en verhalen.',
  'help.guide.studio-elements.step.1': 'Open Elements in de kolom.',
  'help.guide.studio-elements.step.2':
    'Klik op een tekststijl voor een kop of een bijschrift, een vorm, een lijn, een raster, een leeg kader met een kaderstijl of een icoon uit de doorzoekbare bibliotheek. Elk landt in het midden van de dubbele pagina, klaar om te verplaatsen.',
  'help.guide.studio-elements.result':
    'Dubbelklik op een tekstelement om erin te typen; Properties bevat lettertype, gewicht, grootte, spatiëring en uitlijning.',
  'help.guide.studio-elements.tip.1': 'Kaders zijn lege fotoplekken: zet er later een foto in.',
  // studio-travel
  'help.guide.studio-travel.title': 'Een kaart, vlaggen en cijfers toevoegen',
  'help.guide.studio-travel.goal': 'Maak van de reis zelf cijfers op de pagina.',
  'help.guide.studio-travel.step.1': 'Open Reis in de kolom.',
  'help.guide.studio-travel.step.2':
    'Kies wat je toevoegt: een routekaart van de vermeldingen, landomtrekken, een landenlijst of landenraster, vlaggen, een datum-, dag- of afstandsmarkering, of een overzicht van de hele reis. Elk wordt gebouwd uit de gegevens van het reisverslag en vernieuwt daarmee mee.',
  'help.guide.studio-travel.result':
    'Het element verschijnt op de dubbele pagina; Properties past de stijl aan, en bij de kaart het gebied.',
  'help.guide.studio-travel.tip.1':
    'Markeringen volgen de vermelding waaruit de dubbele pagina is ontstaan, dus een datummarkering op een automatisch ingedeelde dubbele pagina toont die dag al.',
  // studio-properties
  'help.guide.studio-properties.title': 'Bewerken wat je hebt geselecteerd',
  'help.guide.studio-properties.goal': 'Verplaats, snijd bij, geef stijl en stapel een element met de inspector.',
  'help.guide.studio-properties.step.1':
    'Klik op een element op de dubbele pagina. Er verschijnen grepen voor grootte en rotatie; sleep het om het te verplaatsen.',
  'help.guide.studio-properties.step.2':
    'Properties rechts volgt de selectie: positie en grootte, Crop met het focuspunt dat bepaalt wat in het kader blijft, Fill of Fit, Look-filters, de hoekstraal onder Corner, de stijl onder Kader, stapelvolgorde en Lock.',
  'help.guide.studio-properties.step.3':
    'Dupliceren en Delete staan bovenaan de inspector; Undo in de bovenbalk draait alles ervan terug.',
  'help.guide.studio-properties.result':
    'Een vergrendeld element kun je op de pagina niet meer vastpakken, wat een afgeronde indeling veilig houdt terwijl je eromheen werkt.',
  'help.guide.studio-properties.tip.1': 'Shift-klik selecteert meerdere elementen; de inspector bewerkt ze dan samen.',
  'help.guide.studio-properties.tip.2':
    'Een element bewerken dat Auto layout heeft geplaatst, verbreekt de koppeling met de vermelding; het volgt latere wijzigingen aan die vermelding niet meer.',
  // studio-format
  'help.guide.studio-format.title': 'Het paginaformaat kiezen',
  'help.guide.studio-format.goal':
    'Stel de grootte in waarop het boek wordt gedrukt, voordat de indeling ervan afhangt.',
  'help.guide.studio-format.step.1': 'Klik op Page format in de bovenbalk.',
  'help.guide.studio-format.step.2':
    'Kies Square 21 × 21 cm, Square 30 × 30 cm, A4 of A5 landscape of portrait, of voer een eigen breedte en hoogte in millimeters in. Afloop en Veilig staan eronder.',
  'help.guide.studio-format.result':
    'Elke dubbele pagina wordt op die grootte getekend, standaard met 3 mm afloop en een veilige marge van 5 mm.',
  'help.guide.studio-format.tip.1':
    'Wijzig eerst het formaat en start dan Auto layout; de indeling wordt gebouwd voor de grootte die hij aantreft.',
  'help.guide.studio-format.tip.2': 'Vraag je drukker naar de waarden voor afloop en veilige marge en voer die in.',
  // studio-export
  'help.guide.studio-export.title': 'Het boek als PDF exporteren',
  'help.guide.studio-export.goal': 'Krijg een drukklaar bestand, of een om op het scherm te lezen.',
  'help.guide.studio-export.step.1': 'Klik op Export in de bovenbalk.',
  'help.guide.studio-export.step.2':
    'Kies Losse pagina’s, één blad per vel op leesvolgorde, wat een drukker wil, of Spreads, twee pagina’s tegelijk zoals het boek opengaat. Snijtekens voegen de afloop aan elke rand toe en markeren waar te snijden.',
  'help.guide.studio-export.step.3':
    'Klik op Afdrukweergave. Je browser opent de pagina’s en Opslaan als PDF maakt er het bestand van.',
  'help.guide.studio-export.result':
    'Een PDF met zoveel vellen als het venster aankondigde, op het paginaformaat dat je hebt ingesteld.',
  'help.guide.studio-export.tip.1': 'De PDF maken kan alleen op desktop, net als Studio zelf.',
  'help.guide.studio-export.tip.2':
    'Voor een proefdruk exporteer je Spreads zonder snijtekens; voor de drukkerij Losse pagina’s met snijtekens.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Een dubbele pagina in een ander boek hergebruiken',
  'help.guide.studio-spread-file.goal':
    'Neem een ontwerp dat je bevalt mee van het boek van het ene reisverslag naar het andere.',
  'help.guide.studio-spread-file.step.1':
    'Klik met de dubbele pagina op het werkblad op Deze dubbele pagina downloaden aan het rechteruiteinde van de zoombalk. Het bestand bevat het ontwerp, niet de foto’s.',
  'help.guide.studio-spread-file.step.2':
    'Open in het andere boek Pages en klik op Importeren naast Pagina toevoegen, kies dan het bestand.',
  'help.guide.studio-spread-file.result':
    'De dubbele pagina komt aan met de kaders en tekststijlen; zet de foto’s van het nieuwe reisverslag in de kaders.',
  'help.guide.studio-spread-file.tip.1':
    'Een bestand dat geen ontwerp van een dubbele pagina is, wordt met een reden geweigerd.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Instellingen',
  'help.ctx.settings.summary':
    'Je persoonlijke instellingen, één tabblad per onderwerp in de zijbalk links. De meeste schakelaars gelden zodra je ze omzet; een formulier met een knop Opslaan onderaan wacht daarop. Niets hier verandert de TREK van iemand anders.',
  'help.ctx.settings.bullet.1':
    'Zijbalk links: Weergave, Appearance, Kaart, Meldingen, Integraties, Offline en Account. Plug-ins verschijnt zodra er een is geïnstalleerd, Over op een zelf gehoste TREK.',
  'help.ctx.settings.bullet.2':
    'Weergave is taal, eenheden, valuta en waarmee de app opent; Appearance is thema, kleuren, tekstgrootte en de dashboardwidgets.',
  'help.ctx.settings.bullet.3':
    'Kaart kiest de renderer en zijn stijl; Meldingen de kanalen die je bereiken; Integraties fotobibliotheken, API-sleutels en MCP; Offline wat de app op dit apparaat bewaart.',
  'help.ctx.settings.bullet.4':
    'Account bevat je profiel, wachtwoord, tweefactorauthenticatie, passkeys en het verwijderen van je account.',
  'help.ctx.settings-display.title': 'Weergave',
  'help.ctx.settings-display.summary':
    'Taal, eenheden en valuta, hoe kaart en boekingen zich gedragen, en waarmee TREK opent. Elke wijziging hier geldt meteen.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: de taal van de interface, de tijdnotatie, de weergavevaluta, en de eenheden voor afstand en temperatuur.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: boekingsroutes altijd op de kaart, de pil Plaatsen ontdekken, routeoptimalisatie vanaf je accommodatie, vervaagde boekingscodes en boekingsroutes met label.',
  'help.ctx.settings-display.bullet.3':
    'Opstarten: of TREK opent op het dashboard of op de actieve reis, en welk tabblad van een reis als eerste verschijnt.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Hoe TREK eruitziet op dit account: licht of donker, de accentkleur, glas en beweging, tekstgrootte, en welke widgets het dashboard toont. Alles geldt live, op elk apparaat waarop je inlogt.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Licht, Donker of Automatisch, en het Color scheme met een Custom accent van jezelf.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density en Text size, met geavanceerde groottes per niveau.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets: één schakelaar per widget, apart voor Desktop en Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults onderaan zet alles terug.',
  'help.ctx.settings-map.title': 'Kaart',
  'help.ctx.settings-map.summary':
    'Welke engine de kaarten tekent en in welke stijl. Leaflet is de klassieke rasterkaart, MapLibre tekent vectortegels zonder enig token, Mapbox voegt 3D-gebouwen en terrein toe met je eigen token.',
  'help.ctx.settings-map.bullet.1':
    'Kaartprovider: Leaflet, MapLibre of Mapbox, elk met een regel over wat hij nodig heeft.',
  'help.ctx.settings-map.bullet.2':
    'Kaartstijl en Kaartsjabloon: de look van de tegels, plus het token of de sleutel waar een provider om vraagt.',
  'help.ctx.settings-map.bullet.3':
    'Hoge kwaliteit modus voor antialiasing en de globeprojectie; Kaart opslaan legt de keuze vast.',
  'help.ctx.settings-notifications.title': 'Meldingen',
  'help.ctx.settings-notifications.summary':
    'Waar TREK je buiten de app bereikt: een ntfy-onderwerp, een webhook of een kanaal dat een plug-in levert. Onder de kanalen bepaalt één rij per gebeurtenis wat waarheen gaat.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: het onderwerp, optioneel een eigen server en een optioneel toegangstoken, met Testen om er meteen een te sturen.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: één URL die elke gebeurtenis als JSON ontvangt, met Testen.',
  'help.ctx.settings-notifications.bullet.3':
    'De voorkeursrijen: per gebeurtenis welk kanaal aan staat. Plug-inkanalen tonen Instellen tot ze zijn ingesteld.',
  'help.ctx.settings-integrations.title': 'Integraties',
  'help.ctx.settings-integrations.summary':
    'Alles wat van buitenaf met TREK verbindt: fotobibliotheken voor het reisverslag, API-sleutels voor scripts, en het MCP-eindpunt met zijn tokens en OAuth-clients voor AI-assistenten.',
  'help.ctx.settings-integrations.bullet.1':
    'Fotoproviders: Immich en Synology Photos, elk met zijn URL en sleutel, Verbinding testen en Opslaan.',
  'help.ctx.settings-integrations.bullet.2':
    'API-sleutels: persoonlijke sleutels voor scripts en andere tools die de TREK-API uit jouw naam aanroepen.',
  'help.ctx.settings-integrations.bullet.3':
    'MCP-configuratie: het eindpunt, een kant-en-klare clientconfiguratie om te kopiëren, en de API-tokens.',
  'help.ctx.settings-integrations.bullet.4':
    'OAuth 2.1-clients: apps die via TREK inloggen, met redirect-URI’s, toegestane rechten, machineclients en de actieve sessies.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Wat TREK op dit apparaat bewaart zodat een reis ook zonder verbinding opent, en wat er gebeurt als een offline gemaakte wijziging botst met een die elders is gemaakt.',
  'help.ctx.settings-offline.bullet.1':
    'Offlinemodus: Offlinemodus forceren laat de app doen alsof het netwerk weg is, om te testen of op een verbinding met datalimiet.',
  'help.ctx.settings-offline.bullet.2':
    'Voorbereiden op offline: Downloaden voor offline gebruik haalt je reizen en hun kaarttegels nu op.',
  'help.ctx.settings-offline.bullet.3': 'Wat offline opslaan: kaarttegels aan of uit, en een schakelaar per reis.',
  'help.ctx.settings-offline.bullet.4':
    'Synchronisatieconflicten en Offline cache: de strategie bij botsingen, het aantal wachtende en mislukte wijzigingen, Nu opnieuw synchroniseren en Cache wissen.',
  'help.ctx.settings-account.title': 'Account',
  'help.ctx.settings-account.summary':
    'Wie je bent op deze TREK en hoe je inlogt: profiel en avatar, wachtwoord, tweefactorauthenticatie, passkeys, en helemaal onderaan het verwijderen van het account.',
  'help.ctx.settings-account.bullet.1': 'Profiel: gebruikersnaam, e-mail en avatar, opgeslagen met Profiel opslaan.',
  'help.ctx.settings-account.bullet.2':
    'Wachtwoord wijzigen: huidig wachtwoord, nieuw wachtwoord twee keer, Wachtwoord bijwerken.',
  'help.ctx.settings-account.bullet.3':
    'Tweefactorauthenticatie (2FA) met een authenticator-app en back-upcodes; Passkeys om in te loggen zonder wachtwoord.',
  'help.ctx.settings-account.bullet.4':
    'Account verwijderen onderaan, achter een bevestiging. De laatste beheerder kan zichzelf niet verwijderen.',
  // language-region
  'help.guide.language-region.title': 'Taal, eenheden en valuta instellen',
  'help.guide.language-region.goal': 'Laat TREK jouw taal spreken en tellen zoals jij.',
  'help.guide.language-region.step.1':
    'Kies de taal van de interface in Language & region. TREK schakelt meteen om, op elk apparaat waarop je inlogt.',
  'help.guide.language-region.step.2':
    'Daaronder kies je de tijdnotatie, de weergavevaluta, en de eenheden voor afstand en temperatuur.',
  'help.guide.language-region.result':
    'Datums, afstanden en geld lezen zoals je verwacht; de eigen valuta van een reis staat nog steeds naast omgerekende bedragen.',
  'help.guide.language-region.tip.1':
    'De weergavevaluta is voor totalen over reizen heen; elke reis houdt de valuta die je hem gaf.',
  'help.guide.language-region.tip.2': 'De taal bepaalt ook de dag- en maandnamen in Vacay en het reisverslag.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Afstellen hoe kaart en boekingen zich gedragen',
  'help.guide.travel-map-prefs.goal': 'Bepaal wat de reiskaart standaard toont.',
  'help.guide.travel-map-prefs.step.1':
    'In Travel & map houdt Boekingsroutes altijd tonen vluchten en treinen op de kaart, ook als hun dag niet open is; Plaatsen op de kaart ontdekken toont de pil om plaatsen te vinden; Route optimaliseren vanaf accommodatie laat de route beginnen waar je slaapt.',
  'help.guide.travel-map-prefs.step.2':
    'Boekingscodes vervagen verbergt bevestigingsnummers tot je eroverheen beweegt; Routelabels voor boekingen schrijft de naam van de boeking langs zijn route.',
  'help.guide.travel-map-prefs.result': 'De reiskaart volgt dit op elke reis, tot je het weer terugzet.',
  'help.guide.travel-map-prefs.tip.1':
    'Dit is per account, niet per reis. Leden van een gedeelde reis zien elk hun eigen keuzes.',
  // startup
  'help.guide.startup.title': 'Kiezen waarmee TREK opent',
  'help.guide.startup.goal': 'Land waar je het meest werkt, niet elke keer op het dashboard.',
  'help.guide.startup.step.1': 'Zet onder Opstarten de Startpagina op Dashboard of Actieve reis.',
  'help.guide.startup.step.2':
    'Starttabblad kiest welk tabblad van een reis als eerste verschijnt als je er een opent.',
  'help.guide.startup.result': 'De volgende keer inloggen en de volgende tik op het logo gaan er meteen heen.',
  'help.guide.startup.tip.1': 'Actieve reis is de reis die vandaag loopt, of de volgende als er geen loopt.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Het thema en de accentkleur instellen',
  'help.guide.theme-scheme.goal': 'Maak TREK licht, donker of gelijk aan je apparaat, in de kleur die jij mooi vindt.',
  'help.guide.theme-scheme.step.1': 'Kies onder Theme Licht, Donker of Automatisch. Automatisch volgt je apparaat.',
  'help.guide.theme-scheme.step.2':
    'Kies een Color scheme: Default, High contrast, Indigo, Teal, Rose, Amber, Violet of Custom.',
  'help.guide.theme-scheme.step.3':
    'Met Custom kies je een accent uit de voorinstellingen of voer je je eigen in. Een contrastcheck ernaast zegt of tekst erop leesbaar blijft.',
  'help.guide.theme-scheme.result':
    'Knoppen, links en markeringen nemen het accent overal over, op elk apparaat waarop je inlogt.',
  'help.guide.theme-scheme.tip.1':
    'De navigatiebalk heeft ook een snelle licht-of-donkerschakelaar; die stelt hetzelfde thema in.',
  'help.guide.theme-scheme.tip.2': 'High contrast is het schema om te kiezen als de standaard te zacht leest.',
  // readability
  'help.guide.readability.title': 'Leesbaarheid en tekstgrootte aanpassen',
  'help.guide.readability.goal': 'Minder glas, minder beweging, meer ruimte of grotere letters.',
  'help.guide.readability.step.1':
    'Onder Readability zet Transparency de glazen panelen om in dichte vlakken, Reduce motion beperkt animaties tot een minimum, en Density kiest Comfortable of Compact.',
  'help.guide.readability.step.2':
    'Text size schaalt Everything in één keer; Advanced text sizes laat titels, ondertitels, lopende tekst en bijschriften verschillen.',
  'help.guide.readability.result': 'De hele app volgt meteen, inclusief de kaartpanelen en het reisverslag.',
  'help.guide.readability.tip.1': 'Reduce motion volgt ook de instelling van je systeem als je er vanaf blijft.',
  'help.guide.readability.tip.2':
    'De tekstgrootte gaat via de typografische niveaus, dus er wordt niets afgesneden; een grootte die niet meer past, loopt door naar de volgende regel.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'De dashboardwidgets kiezen',
  'help.guide.dashboard-widgets.goal': 'Toon alleen de widgets die je gebruikt, apart op desktop en op de telefoon.',
  'help.guide.dashboard-widgets.step.1':
    'Zet onder Dashboard widgets elke widget aan of uit voor Desktop en voor Mobile: de rechterzijbalk als geheel, valuta, collecties, tijdzones, komende reserveringen, Atlas-landen en de reiscijfers.',
  'help.guide.dashboard-widgets.step.2':
    'Reset to defaults onderaan zet het hele tabblad terug zoals het geleverd werd.',
  'help.guide.dashboard-widgets.result':
    'Het dashboard schikt zich meteen opnieuw; met de rechterzijbalk uit centreert het.',
  'help.guide.dashboard-widgets.tip.1':
    'Widgets van een add-on verschijnen alleen zolang de beheerder die add-on aan heeft.',
  'help.guide.dashboard-widgets.tip.2':
    'Het dashboard zelf onthoudt je raster- of lijstweergave en de sorteervolgorde per apparaat.',
  // map-provider
  'help.guide.map-provider.title': 'De kaartengine en stijl kiezen',
  'help.guide.map-provider.goal': 'Wissel tussen de klassieke kaart, vectortegels en de 3D-kaart van Mapbox.',
  'help.guide.map-provider.step.1':
    'Kies onder Kaartprovider Leaflet voor de klassieke 2D-kaart met willekeurige rastertegels, MapLibre voor OpenFreeMap-vectortegels zonder token, of Mapbox voor vectortegels met 3D-gebouwen en terrein.',
  'help.guide.map-provider.step.2':
    'Kies een Kaartstijl of een Kaartsjabloon voor de look. Mapbox heeft een Mapbox Access Token nodig, sommige rasterstijlen een CARTO API-sleutel; de link naast het veld leidt naar waar je er een krijgt.',
  'help.guide.map-provider.step.3':
    'Hoge kwaliteit modus voegt antialiasing en de globeprojectie toe. Klik op Kaart opslaan.',
  'help.guide.map-provider.result':
    'Elke kaart in TREK, reizen, Atlas, Collecties en het reisverslag, wordt getekend door de engine die je koos.',
  'help.guide.map-provider.tip.1': 'Zonder token valt Mapbox terug op de standaardkaart in plaats van niets te tonen.',
  'help.guide.map-provider.tip.2':
    'De kaarttegels die je offline opslaat, komen van de provider die actief is als je ze downloadt.',
  // notification-channels
  'help.guide.notification-channels.title': 'Instellen waar meldingen je bereiken',
  'help.guide.notification-channels.goal':
    'Ontvang reisherinneringen en samenwerkingsgebeurtenissen op je telefoon of in een andere tool.',
  'help.guide.notification-channels.step.1':
    'Vul onder Meldingen een Ntfy-onderwerp in; voeg je eigen Ntfy-server-URL (optioneel) en een Toegangstoken (optioneel) toe als je er een draait. Testen stuurt meteen een bericht.',
  'help.guide.notification-channels.step.2':
    'Of geef een Webhook-URL op die elke gebeurtenis als JSON ontvangt, en test die op dezelfde manier met Testen.',
  'help.guide.notification-channels.step.3':
    'Zet in de rijen eronder elke gebeurtenis per kanaal aan of uit. Een plug-inkanaal zegt Instellen tot het in de instellingen van de plug-in is ingesteld; Test versturen probeert er een.',
  'help.guide.notification-channels.result':
    'Gebeurtenissen gaan uit via de kanalen die aan staan. De bel in de navigatiebalk blijft ze hoe dan ook in de app tonen.',
  'help.guide.notification-channels.tip.1':
    'Voorkeuren per reis staan op de reis zelf, onder zijn meldingsinstellingen.',
  'help.guide.notification-channels.tip.2':
    'De beheerder kan voor iedereen een standaard ntfy-server invullen; je eigen onderwerp kies je nog steeds zelf.',
  // photo-providers
  'help.guide.photo-providers.title': 'Een fotobibliotheek verbinden',
  'help.guide.photo-providers.goal': 'Laat het reisverslag de foto’s van de dag ophalen uit Immich of Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Zoek onder Integraties het gedeelte van de provider en vul zijn URL en API-sleutel in. Immich biedt ook aan om uploads van het reisverslag terug te spiegelen naar de bibliotheek.',
  'help.guide.photo-providers.step.2': 'Klik op Verbinding testen en dan op Opslaan.',
  'help.guide.photo-providers.result':
    'Het tabblad External photos van de vermeldingseditor doorzoekt de verbonden bibliotheek op de dag van de vermelding, de dichtstbijzijnde bij de locatie van de vermelding eerst.',
  'help.guide.photo-providers.tip.1':
    'De verbinding is van jou: andere leden van een reisverslag verbinden hun eigen bibliotheken.',
  'help.guide.photo-providers.tip.2':
    'Een provider zonder GPS-gegevens in zijn foto’s werkt ook; de lijst staat dan op tijdsvolgorde.',
  // api-keys
  'help.guide.api-keys.title': 'Een API-sleutel aanmaken',
  'help.guide.api-keys.goal': 'Laat een script of een andere tool de TREK-API als jou aanroepen.',
  'help.guide.api-keys.step.1':
    'Klik onder API-sleutels op Sleutel aanmaken en geef hem een naam die zegt waar hij gebruikt wordt.',
  'help.guide.api-keys.step.2':
    'Kopieer de sleutel uit het dialoogvenster: hij wordt één keer getoond. Verwijder een sleutel uit de lijst als de tool hem niet meer nodig heeft.',
  'help.guide.api-keys.result':
    'Verzoeken met die sleutel handelen met jouw rechten; de lijst toont wanneer elke sleutel is aangemaakt en voor het laatst gebruikt.',
  'help.guide.api-keys.tip.1': 'Eén sleutel per tool maakt intrekken pijnloos.',
  'help.guide.api-keys.tip.2':
    'Gebruik voor een AI-assistent liever MCP met OAuth; API-sleutels zijn voor gewone HTTP-clients.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Een AI-assistent via MCP verbinden',
  'help.guide.mcp-oauth.goal': 'Geef Claude, een IDE of een andere MCP-client toegang tot je reizen.',
  'help.guide.mcp-oauth.step.1':
    'Kopieer onder MCP-configuratie het MCP-eindpunt, of de hele Clientconfiguratie voor een client die een JSON-fragment aanneemt.',
  'help.guide.mcp-oauth.step.2':
    "Clients die via de browser inloggen gebruiken OAuth 2.1: Nieuwe client onder OAuth 2.1-clients, met zijn Redirect-URI's, de Toegestane rechten en, voor een server zonder browser, Machineclient.",
  'help.guide.mcp-oauth.step.3':
    'Geheim vernieuwen en Client verwijderen staan bij elke client; Actieve OAuth-sessies toont wat is ingelogd en laat je het intrekken. API-tokens met Nieuw token aanmaken is de oudere ingang.',
  'help.guide.mcp-oauth.result':
    'De client kan lezen en wijzigen wat zijn rechten toelaten, als jou, en elke actie verschijnt onder jouw naam.',
  'help.guide.mcp-oauth.tip.1':
    'Rechten zijn het vangnet: geef een client alleen het leesrecht tot hij meer nodig heeft.',
  'help.guide.mcp-oauth.tip.2': 'De beheerder kan MCP voor de hele instantie uitzetten; dan is dit gedeelte er niet.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Reizen offline meenemen',
  'help.guide.offline-prepare.goal': 'Heb je reizen en hun kaarten op dit apparaat voordat de verbinding wegvalt.',
  'help.guide.offline-prepare.step.1':
    'Laat onder Wat offline opslaan Kaarttegels offline opslaan aan en zet de reizen aan die je op dit apparaat wilt.',
  'help.guide.offline-prepare.step.2':
    'Klik op Downloaden voor offline gebruik onder Voorbereiden op offline. Dat haalt de reizen en de tegels rond hun plaatsen op.',
  'help.guide.offline-prepare.step.3':
    'Offlinemodus forceren onder Offlinemodus laat je controleren of alles er is voordat je vertrekt.',
  'help.guide.offline-prepare.result':
    'De reizen openen zonder verbinding; wijzigingen die je maakt wachten in een wachtrij en gaan uit bij het opnieuw verbinden.',
  'help.guide.offline-prepare.tip.1':
    'Tegels nemen de meeste ruimte in: het gedeelte Offline cache toont wat er is opgeslagen, per reis.',
  'help.guide.offline-prepare.tip.2': 'Installeer TREK als app vanuit de browser voor de soepelste offline start.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Bepalen wat wint bij een synchronisatieconflict',
  'help.guide.offline-conflicts.goal':
    'Kies hoe TREK een offline gemaakte wijziging afweegt tegen een die elders is gemaakt.',
  'help.guide.offline-conflicts.step.1':
    'Kies onder Synchronisatieconflicten Vraag het me elke keer, Altijd mijn versie behouden of Altijd de serverversie behouden.',
  'help.guide.offline-conflicts.step.2':
    'Offline cache toont reizen, wachtende en mislukte wijzigingen en conflicten; Nu opnieuw synchroniseren duwt de wachtrij door, Cache wissen maakt het apparaat leeg.',
  'help.guide.offline-conflicts.result':
    'Met Vraag het me toont een conflict beide versies en laat het je kiezen; met de andere twee wordt het stilletjes afgehandeld.',
  'help.guide.offline-conflicts.tip.1':
    'Cache wissen verwijdert alleen de kopie op dit apparaat; op de server wordt niets aangeraakt.',
  // profile
  'help.guide.profile.title': 'Je profiel wijzigen',
  'help.guide.profile.goal': 'Werk je naam, e-mail en foto bij.',
  'help.guide.profile.step.1':
    'Bewerk onder Account Gebruikersnaam en E-mail. De avatar neemt een eigen upload; verwijder hem om terug te gaan naar de initialen.',
  'help.guide.profile.step.2': 'Klik op Profiel opslaan.',
  'help.guide.profile.result': 'Je naam en foto worden overal tegelijk bijgewerkt, ook op reizen die je deelt.',
  'help.guide.profile.tip.1':
    'Een account dat via OIDC inlogt, laat dat hier zien; de e-mail komt dan van de provider.',
  // password
  'help.guide.password.title': 'Je wachtwoord wijzigen',
  'help.guide.password.goal': 'Stel een nieuw wachtwoord in.',
  'help.guide.password.step.1': 'Voer onder Wachtwoord wijzigen je huidige wachtwoord in, dan twee keer het nieuwe.',
  'help.guide.password.step.2': 'Klik op Wachtwoord bijwerken.',
  'help.guide.password.result':
    'Het nieuwe wachtwoord werkt bij de volgende keer inloggen; andere sessies blijven ingelogd.',
  'help.guide.password.tip.1': 'Een account dat via OIDC inlogt, heeft geen TREK-wachtwoord om te wijzigen.',
  // mfa
  'help.guide.mfa.title': 'Tweefactorauthenticatie inschakelen',
  'help.guide.mfa.goal': 'Bescherm het account met een code uit een authenticator-app.',
  'help.guide.mfa.step.1': 'Klik onder Tweefactorauthenticatie (2FA) op Authenticator instellen.',
  'help.guide.mfa.step.2':
    'Scan de QR-code met je app, of voer het geheim met de hand in, typ dan de zescijferige code die hij toont en klik op 2FA inschakelen.',
  'help.guide.mfa.step.3':
    'Bewaar de back-upcodes: kopieer, download of print ze. Elke code werkt één keer, als je geen telefoon bij de hand hebt.',
  'help.guide.mfa.result': 'Elke keer inloggen vraagt na het wachtwoord om een code.',
  'help.guide.mfa.tip.1': '2FA uitschakelen vraagt je wachtwoord en een actuele code.',
  'help.guide.mfa.tip.2': 'De beheerder kan 2FA voor iedereen verplichten; dan kan het hier niet worden uitgezet.',
  // passkeys
  'help.guide.passkeys.title': 'Inloggen met een passkey',
  'help.guide.passkeys.goal':
    'Gebruik de vingerafdruk, het gezicht of de pincode van je apparaat in plaats van een wachtwoord.',
  'help.guide.passkeys.step.1':
    'Klik onder Passkeys op Een passkey toevoegen en bevestig met je apparaat. Geef hem een naam die zegt welk apparaat het is.',
  'help.guide.passkeys.step.2':
    'De lijst toont elke passkey met zijn naam en wanneer hij het laatst is gebruikt; de verwijderknop haalt er een weg.',
  'help.guide.passkeys.result': 'De inlogpagina biedt de passkey aan; het wachtwoord blijft als terugvaloptie.',
  'help.guide.passkeys.tip.1':
    'Een passkey leeft op het apparaat of in zijn wachtwoordmanager, dus voeg er een per apparaat toe.',
  'help.guide.passkeys.tip.2':
    'Passkeys hebben HTTPS nodig; op een instantie met gewoon HTTP legt het gedeelte uit waarom ze niet beschikbaar zijn.',
  // delete-account
  'help.guide.delete-account.title': 'Je account verwijderen',
  'help.guide.delete-account.goal': 'Verwijder je account en de gegevens die alleen van jou zijn.',
  'help.guide.delete-account.step.1': 'Klik helemaal onderaan Account op Account verwijderen en bevestig.',
  'help.guide.delete-account.result':
    'Je account, je eigen reizen en je reisverslagen zijn weg; reizen die je met anderen deelt, blijven bij hen.',
  'help.guide.delete-account.tip.1':
    'De laatste beheerder van een instantie kan zichzelf niet verwijderen; maak eerst iemand anders beheerder.',
  'help.guide.delete-account.tip.2': 'Er is geen ongedaan maken. Exporteer wat je wilt bewaren voordat je bevestigt.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Beheer',
  'help.ctx.admin.summary':
    'De instantie achter ieders TREK: wie mag inloggen en hoe, wat aanstaat, waar bestanden staan, hoe de server mensen bereikt en hoe er een back-up van wordt gemaakt. Alleen beheerders zien deze pagina; elk tabblad is een eigen scherm in de zijbalk.',
  'help.ctx.admin.bullet.1':
    'De vier kaarten bovenaan tellen gebruikers, reizen, plekken en bestanden; een banner erboven kondigt een nieuwere TREK-release aan.',
  'help.ctx.admin.bullet.2':
    'Gebruikers en Standaardinstellingen: accounts, uitnodigingslinks en de kaartinstellingen waarmee een nieuw account begint.',
  'help.ctx.admin.bullet.3':
    'Personalisatie, Instellingen, Add-ons en Plugins: paksjablonen, categorieën en schoolvakanties; inlogmethoden en API-sleutels; de functiemodules; plugins van derden.',
  'help.ctx.admin.bullet.4':
    'Opslag, Meldingen, MCP-toegang en GitHub: waar uploads heen gaan, de kanalen van de hele instantie, tokens en sessies van AI-clients, en de release-geschiedenis.',
  'help.ctx.admin.bullet.5':
    'Back-up en Audit: back-ups op verzoek en volgens schema, en het logboek van beveiligingsrelevante gebeurtenissen.',
  'help.ctx.admin-users.title': 'Gebruikers',
  'help.ctx.admin-users.summary':
    'Elk account op deze TREK, met rol, e-mail en laatste login, en de uitnodigingslinks waarmee mensen zich op een gesloten instantie kunnen registreren.',
  'help.ctx.admin-users.bullet.1':
    'De tabel: gebruikersnaam, e-mail, rol, aanmaakdatum, laatste login en de acties per rij. Jij bent gemarkeerd als jij.',
  'help.ctx.admin-users.bullet.2':
    'Gebruiker aanmaken bovenaan voegt met de hand een account toe, met een wachtwoord dat jij overhandigt.',
  'help.ctx.admin-users.bullet.3':
    'Uitnodigingslinks eronder: eenmalige registratielinks met een gebruikslimiet, een vervaldatum en, als je wilt, een reis waar de nieuwe gebruiker bij aankomst aan wordt toegevoegd.',
  'help.ctx.admin-users.bullet.4':
    'Rechtinstellingen onderaan: per actie wie het mag doen, Iedereen, Reisleden, Reiseigenaar of Alleen beheerder.',
  'help.ctx.admin-defaults.title': 'Standaardinstellingen',
  'help.ctx.admin-defaults.summary':
    'De instellingen waarmee een nieuw account begint, zodat niemand eerst het kaarttabblad hoeft te zoeken: kaartmotor, stijl, tokens en kwaliteit.',
  'help.ctx.admin-defaults.bullet.1':
    'Kaartmotor, Mapbox-stijl en -token, CARTO-sleutel en Mapbox-kwaliteit, precies zoals een gebruiker ze onder Instellingen, Kaart zou instellen.',
  'help.ctx.admin-defaults.bullet.2':
    'Terugzetten per veld brengt de eigen keuze van TREK terug; de eigen instelling van een gebruiker wint altijd van deze.',
  'help.ctx.admin-config.title': 'Personalisatie',
  'help.ctx.admin-config.summary':
    'Wat elke reis op de instantie deelt: paksjablonen, de set categorieën voor plekken en collecties, en de schoolvakantiecatalogus waar Vacay uit put.',
  'help.ctx.admin-config.bullet.1':
    'Paksjablonen: benoemde lijsten van categorieën en items waarmee de paklijst van een reis kan beginnen.',
  'help.ctx.admin-config.bullet.2':
    'Categorieën: naam, icoon en kleur van de categorieën die overal in TREK worden gebruikt, van de plaatsinspector tot Collecties.',
  'help.ctx.admin-config.bullet.3':
    'Schoolvakanties: de catalogus van landen en regio’s, voor plekken die de ingebouwde feeds niet dekken.',
  'help.ctx.admin-settings.title': 'Instellingen',
  'help.ctx.admin-settings.summary':
    'Hoe mensen binnenkomen en waarmee de server mag praten: inlog- en registratiemethoden, SSO, passkeys, het tweestapsbeleid, de API-sleutels voor kaarten, plekken en afbeeldingen, de zoek- en ov-providers, en de bestandstypen die uploads mogen hebben.',
  'help.ctx.admin-settings.bullet.1':
    'Authenticatiemethoden: Inloggen met wachtwoord, Registreren met wachtwoord, Inloggen via SSO, Automatische SSO-provisioning en Tweestapsverificatie (2FA) verplichten.',
  'help.ctx.admin-settings.bullet.2':
    'Single Sign-On (OIDC) met issuer, client en weergavenaam; Inloggen met passkey met Relying Party ID en origins.',
  'help.ctx.admin-settings.bullet.3':
    'API-sleutels: Google Maps, Unsplash en Amap, elk met Testen; Waarvoor de sleutel wordt gebruikt beperkt de Google-sleutel tot de functies waarvoor je wilt betalen.',
  'help.ctx.admin-settings.bullet.4':
    'Provider voor plaatszoeken en Ov-provider bepalen wie zoekopdrachten en routes beantwoordt; Toegestane bestandstypen beperkt uploads.',
  'help.ctx.admin-addons.title': 'Add-ons',
  'help.ctx.admin-addons.summary':
    'De functiemodules van TREK, elk met een schakelaar: Lijsten, Onkosten, Documenten, Vacay, Atlas, Samenwerking, Reisverslag, Collecties, Roadtrip, MCP, AirTrail, Dawarich en de AI-verwerking. Uit betekent dat het navigatie-item, de routes en de API voor iedereen weg zijn.',
  'help.ctx.admin-addons.bullet.1':
    'Eén tegel per add-on met zijn schakelaar en, waar hij die heeft, subrijen voor zijn opties.',
  'help.ctx.admin-addons.bullet.2':
    'Fotoproviders en documentproviders verschijnen hier ook als tegels, zodat Immich of Synology aan gebruikers kan worden aangeboden.',
  'help.ctx.admin-addons.bullet.3': 'Bagagetracking heeft een eigen schakelaar onder de tegels.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Plugins van derden die in een eigen proces naast TREK draaien, elk met de rechten waar het bij de installatie om vroeg. Installeer uit de catalogus, upload een pakket, of koppel een map terwijl je er een ontwikkelt.',
  'help.ctx.admin-plugins.bullet.1':
    'De lijst: elke geïnstalleerde plugin met versie, status, handtekening en de rechten die hij heeft; per rij activeren, deactiveren, bijwerken of verwijderen.',
  'help.ctx.admin-plugins.bullet.2':
    'Plugin uploaden neemt een pakketbestand; Opnieuw scannen pikt een pluginmap op die voor ontwikkeling is gekoppeld.',
  'help.ctx.admin-plugins.bullet.3':
    'Toegestane hosts per plugin: de adressen die een plugin mag aanroepen, want uitgaand verkeer is standaard geblokkeerd.',
  'help.ctx.admin-storage.title': 'Opslag',
  'help.ctx.admin-storage.summary':
    'Waar uploads staan: de lokale schijf, een S3-bucket, of een mirror die naar allebei schrijft. Elke uploadcategorie kan naar een andere backend, en Status zegt of elke backend antwoordt.',
  'help.ctx.admin-storage.bullet.1':
    'Backends: naam en type van elk, met Testen, Bewerken en Verwijderen; een backend die via de omgeving is ingesteld is hier alleen-lezen.',
  'help.ctx.admin-storage.bullet.2':
    'Categorieën: omslagen, documenten, reisverslagfoto’s en de rest, elk toegewezen aan een backend; er een wijzigen biedt aan de bestaande bestanden te verplaatsen.',
  'help.ctx.admin-storage.bullet.3':
    'Status: een controle per backend, en het seed-bestand dat bewijst dat de configuratie is wat de server ziet.',
  'help.ctx.admin-notifications.title': 'Meldingen',
  'help.ctx.admin-notifications.summary':
    'De kanalen die de instantie zijn gebruikers aanbiedt, en de kanalen die jou als beheerder bereiken. Gebruikers kiezen hun eigen topics en URL’s onder Instellingen; jij bepaalt wat er bestaat en stelt e-mail in.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy en Webhook: elk een paneel, met een schakelaar die het kanaal aan gebruikers aanbiedt en de serverconfiguratie die het nodig heeft.',
  'help.ctx.admin-notifications.bullet.2':
    'Reisherinneringen: of de server de herinnering stuurt voordat een reis begint.',
  'help.ctx.admin-notifications.bullet.3':
    'Admin-Ntfy en Admin-webhook: waar beheergebeurtenissen zoals een mislukte back-up of een nieuwe release heen gaan, met Testen.',
  'help.ctx.admin-mcp-tokens.title': 'MCP-toegang',
  'help.ctx.admin-mcp-tokens.summary':
    'Elk token en elke OAuth-sessie die AI-clients op deze TREK hebben, over alle gebruikers heen, met de mogelijkheid om er elk van in te trekken.',
  'help.ctx.admin-mcp-tokens.bullet.1':
    'API-tokens: wie het aanmaakte, wanneer het voor het laatst is gebruikt, en Verwijderen.',
  'help.ctx.admin-mcp-tokens.bullet.2': 'OAuth-sessies: de client, de gebruiker en de toegekende scopes, en Intrekken.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Wat er nieuw is in TREK: de release-geschiedenis van GitHub, de versie die je draait, en of er een nieuwere uit is. Het bijwerken zelf gebeurt buiten de app, op de host.',
  'help.ctx.admin-github.bullet.1':
    'Release-geschiedenis somt de releases op met hun notities; de nieuwste draagt Nieuwste, en jouw versie is gemarkeerd.',
  'help.ctx.admin-github.bullet.2':
    'Update beschikbaar verschijnt in de kop zodra er een nieuwere release bestaat, met hoe je bijwerkt voor Docker en andere installaties.',
  'help.ctx.admin-backup.title': 'Back-up',
  'help.ctx.admin-backup.summary':
    'Volledige back-ups van de database en de uploads, met de hand of volgens schema gemaakt, bewaard op de server en als één bestand te downloaden. Herstellen zet er een terug.',
  'help.ctx.admin-backup.bullet.1':
    'Gegevensback-up: Back-up aanmaken, en de lijst van bestaande back-ups met Downloaden, Herstellen en verwijderen.',
  'help.ctx.admin-backup.bullet.2':
    'Back-up uploaden brengt een bestand binnen dat op een andere instantie of een eerdere dag is gemaakt.',
  'help.ctx.admin-backup.bullet.3': 'Auto-back-up: aan of uit, interval, uur en dag, en hoeveel er bewaard blijven.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'Het logboek van beveiligingsrelevante en administratieve gebeurtenissen: logins en mislukkingen, MFA-wijzigingen, gebruikers- en instellingswijzigingen, back-ups en herstelacties. Alleen-lezen, nieuwste eerst.',
  'help.ctx.admin-audit.bullet.1': 'Eén rij per gebeurtenis met tijd, gebruiker, actie, resource, IP en details.',
  'help.ctx.admin-audit.bullet.2': 'Vernieuwen laadt opnieuw; Meer laden gaat verder terug.',
  // create-user
  'help.guide.create-user.title': 'Een gebruiker aanmaken',
  'help.guide.create-user.goal': 'Voeg met de hand een account toe, zonder uitnodiging.',
  'help.guide.create-user.step.1': 'Klik op Gebruiker aanmaken bovenaan het tabblad Gebruikers.',
  'help.guide.create-user.step.2':
    'Vul Gebruikersnaam, E-mail en een Wachtwoord in en kies de Rol: Gebruiker of Beheerder.',
  'help.guide.create-user.step.3': 'Klik op Gebruiker aanmaken.',
  'help.guide.create-user.result':
    'Het account verschijnt in de tabel en kan meteen inloggen; geef het wachtwoord door via een kanaal dat je vertrouwt.',
  'help.guide.create-user.tip.1':
    'Voor iemand die zijn eigen wachtwoord moet kiezen, is een uitnodigingslink de betere ingang.',
  'help.guide.create-user.tip.2':
    'Beheerders zien deze pagina en het auditlogboek; al het andere is voor beide rollen gelijk.',
  // edit-user
  'help.guide.edit-user.title': 'De rol of het wachtwoord van een gebruiker wijzigen',
  'help.guide.edit-user.goal': 'Promoveer iemand, degradeer hem, of help hem weer binnen na een verloren wachtwoord.',
  'help.guide.edit-user.step.1':
    'Klik op het potlood in de rij van de gebruiker. Gebruiker bewerken opent met de gegevens van het account.',
  'help.guide.edit-user.step.2':
    'Wijzig de Rol, stel een Nieuw wachtwoord in, of klik op Passkeys resetten als de persoon het apparaat met zijn passkeys is kwijtgeraakt, en dan Opslaan.',
  'help.guide.edit-user.result':
    'De wijziging geldt bij het volgende verzoek; een nieuw wachtwoord werkt vanaf de volgende login.',
  'help.guide.edit-user.tip.1': 'Je kunt jezelf de beheerdersrol niet afnemen zolang je de laatste beheerder bent.',
  'help.guide.edit-user.tip.2':
    'Passkeys resetten houdt het wachtwoord; de persoon voegt nieuwe passkeys toe onder Instellingen, Account.',
  // invite-links
  'help.guide.invite-links.title': 'Iemand uitnodigen met een link',
  'help.guide.invite-links.goal':
    'Laat iemand zich registreren op een gesloten instantie en, als je wilt, meteen in een reis landen.',
  'help.guide.invite-links.step.1': 'Klik onder Uitnodigingslinks op Link aanmaken.',
  'help.guide.invite-links.step.2':
    'Stel Max. gebruik en Verloopt na in, optioneel Toevoegen aan reis (optioneel), en klik op Aanmaken en kopiëren.',
  'help.guide.invite-links.step.3':
    'Verstuur de link. Elke rij toont hoe vaak hij is gebruikt en wie hem aanmaakte; Link kopiëren kopieert hem opnieuw, en opgebruikte of verlopen links zijn gemarkeerd.',
  'help.guide.invite-links.result':
    'Wie de link opent registreert zich met een eigen wachtwoord en wordt, als er een reis is gekozen, meteen lid.',
  'help.guide.invite-links.tip.1':
    'Uitnodigingslinks werken ook als Registreren met wachtwoord onder Instellingen uitstaat.',
  'help.guide.invite-links.tip.2':
    'Een link met één gebruik en een korte geldigheid is de veiligste standaard voor één persoon.',
  // delete-user
  'help.guide.delete-user.title': 'Een gebruiker verwijderen',
  'help.guide.delete-user.goal': 'Verwijder een account en alles wat alleen van dat account is.',
  'help.guide.delete-user.step.1':
    'Klik op het prullenbakicoon in de rij van de gebruiker en bevestig Gebruiker verwijderen.',
  'help.guide.delete-user.result':
    'Het account, zijn eigen reizen en zijn reisverslagen zijn weg; reizen die met anderen zijn gedeeld blijven bij de overige leden.',
  'help.guide.delete-user.tip.1': 'Er is geen ongedaan maken. Maak eerst een back-up als je niet zeker bent.',
  'help.guide.delete-user.tip.2':
    'De laatste beheerder kan niet worden verwijderd; maak eerst iemand anders beheerder.',
  // permissions
  'help.guide.permissions.title': 'Bepalen wie wat mag',
  'help.guide.permissions.goal': 'Stel per actie in welke rol die op deze TREK mag uitvoeren.',
  'help.guide.permissions.step.1':
    'Zoek onder Rechtinstellingen de actie in zijn groep, bijvoorbeeld Reizen verwijderen onder Reisbeheer, en kies het niveau: Iedereen, Reisleden, Reiseigenaar of Alleen beheerder. Een gewijzigde rij is gemarkeerd als aangepast.',
  'help.guide.permissions.step.2':
    'Klik op Opslaan. Standaardwaarden herstellen zet elke rij terug op het ingebouwde niveau.',
  'help.guide.permissions.result':
    'De regel geldt meteen voor elke reis; de knoppen en menu’s van mensen onder het niveau verdwijnen.',
  'help.guide.permissions.tip.1':
    'Reiseigenaar is de persoon die de reis heeft aangemaakt; beheerders mogen altijd alles.',
  'help.guide.permissions.tip.2':
    'Verlaag liever een niveau dan een lid te verwijderen: een lid dat niet mag bewerken kan nog wel lezen en reageren.',
  // default-map
  'help.guide.default-map.title': 'De kaartstandaarden voor nieuwe gebruikers instellen',
  'help.guide.default-map.goal': 'Geef elk nieuw account een werkende kaart zonder persoonlijk token.',
  'help.guide.default-map.step.1':
    'Kies onder Kaart de Kaartmotor en, voor Mapbox of MapLibre, de Kaartstijl, het Gedeeld Mapbox-token en de Hogekwaliteitsmodus; voor een rasterkaart het Kaartsjabloon en de Gedeelde CARTO-sleutel.',
  'help.guide.default-map.step.2':
    'Naast elk veld dat je hebt gewijzigd brengt terugzetten de eigen keuze van TREK terug. Standaard gebruikersinstellingen links doet hetzelfde voor Kleurmodus, eenheden en de valuta.',
  'help.guide.default-map.result':
    'Nieuwe accounts beginnen hiermee; wie onder Instellingen een eigen kaart instelde, houdt die.',
  'help.guide.default-map.tip.1':
    'Een token dat je hier invult wordt gedeeld door iedereen zonder eigen token, dus let op het quotum.',
  'help.guide.default-map.tip.2':
    'Bestaande accounts die het kaarttabblad nooit hebben aangeraakt volgen deze standaarden ook.',
  // packing-templates
  'help.guide.packing-templates.title': 'Een paksjabloon bouwen',
  'help.guide.packing-templates.goal': 'Geef reizen een paklijst om mee te beginnen in plaats van een lege.',
  'help.guide.packing-templates.step.1': 'Klik op Nieuw sjabloon, typ een naam en bevestig met het vinkje.',
  'help.guide.packing-templates.step.2':
    'Open het sjabloon en klik op Categorie toevoegen; onder elke categorie voegt de + items toe, en een item heeft alleen een naam nodig.',
  'help.guide.packing-templates.step.3':
    'Alles wordt direct opgeslagen. Het potlood hernoemt een sjabloon, een categorie of een item, de prullenbak verwijdert het.',
  'help.guide.packing-templates.result':
    'Het sjabloon wordt op de paklijst van elke reis aangeboden; toepassen kopieert de items, dus een reis kan ze vrij aanpassen.',
  'help.guide.packing-templates.tip.1':
    'Eén sjabloon per soort reis, strand, stad, wandelen, verslaat één reuzenlijst.',
  'help.guide.packing-templates.tip.2': 'Een sjabloon verwijderen raakt reizen die het al hebben toegepast niet.',
  // categories
  'help.guide.categories.title': 'De categorieset beheren',
  'help.guide.categories.goal': 'Bepaal welke categorieën plekken en collecties kunnen dragen, en hoe ze eruitzien.',
  'help.guide.categories.step.1':
    'Klik op Nieuwe categorie, geef hem een naam, kies een icoon en een kleur; het Voorbeeld toont het resultaat. Klik op Aanmaken.',
  'help.guide.categories.step.2':
    'Beweeg over een categorie in de lijst om hem te bewerken of te verwijderen. Verwijderen vraagt om bevestiging.',
  'help.guide.categories.result':
    'De set geldt overal tegelijk: de plaatsinspector, de kaartpins, Collecties en de filters.',
  'help.guide.categories.tip.1':
    'Plekken houden hun categorie-id, dus een categorie hernoemen hernoemt hem op elke plek.',
  'help.guide.categories.tip.2':
    'Een verwijderde categorie laat zijn plekken zonder categorie achter; wijs ze eerst opnieuw toe als dat uitmaakt.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Schoolvakanties met de hand bijhouden',
  'help.guide.school-holiday-catalog.goal': 'Dek een land of regio af die de ingebouwde vakantiefeeds niet kennen.',
  'help.guide.school-holiday-catalog.step.1':
    'Klik onder Schoolvakanties op Land toevoegen, vul Land en de Landcode (bijv. US) in, en Opslaan; dan Regio toevoegen voor elk deel ervan dat afwijkt.',
  'help.guide.school-holiday-catalog.step.2':
    'Klik op een regio om Regio of schooldistrict te openen: Vakantieperiode toevoegen, geef elke periode een Naam van de vakantie, Begindatum en Einddatum, en Opslaan. De prullenbak verwijdert een periode, een regio of, zodra er geen regio’s meer over zijn, een land.',
  'help.guide.school-holiday-catalog.result':
    'Gebruikers vinden het land en de regio onder Instellingen in Vacay en zien de periodes op hun jaarraster.',
  'help.guide.school-holiday-catalog.tip.1':
    'Regio’s uit de ingebouwde feeds kun je hier niet bewerken; voeg er een handmatige regio naast toe als een datum fout is.',
  // auth-methods
  'help.guide.auth-methods.title': 'Bepalen hoe mensen inloggen',
  'help.guide.auth-methods.goal': 'Open of sluit inloggen met wachtwoord, SSO en registratie, en verplicht 2FA.',
  'help.guide.auth-methods.step.1':
    'Zet onder Authenticatiemethoden Inloggen met wachtwoord en Registreren met wachtwoord aan of uit. Registratie uit betekent nieuwe accounts alleen via uitnodigingslinks, SSO of met de hand.',
  'help.guide.auth-methods.step.2':
    'Inloggen via SSO en Automatische SSO-provisioning hebben een ingestelde Single Sign-On (OIDC) hieronder nodig; automatische provisioning maakt een account aan de eerste keer dat iemand via SSO inlogt.',
  'help.guide.auth-methods.step.3':
    'Tweestapsverificatie (2FA) verplichten laat elke wachtwoordlogin bij de volgende keer inloggen een authenticator instellen. Inloggen met passkey heeft de Relying Party ID en de origins nodig waarop jouw TREK bereikbaar is.',
  'help.guide.auth-methods.result': 'De inlogpagina biedt precies de methoden aan die je hebt aangelaten.',
  'help.guide.auth-methods.tip.1':
    'Er verschijnt een waarschuwing voordat je jezelf buitensluit: minstens één ingang voor beheerders blijft aan.',
  'help.guide.auth-methods.tip.2':
    'Waarden die via omgevingsvariabelen zijn ingesteld verschijnen hier als alleen-lezen.',
  // oidc
  'help.guide.oidc.title': 'Single sign-on koppelen',
  'help.guide.oidc.goal': 'Laat mensen inloggen met jouw identity provider.',
  'help.guide.oidc.step.1':
    'Vul onder Single Sign-On (OIDC) de Weergavenaam voor de knop in en de Issuer-URL, Client ID en Client Secret van je provider, en dan Opslaan.',
  'help.guide.oidc.step.2': 'Zet Inloggen via SSO aan onder Authenticatiemethoden.',
  'help.guide.oidc.result':
    'De inlogpagina toont de SSO-knop; met Automatische SSO-provisioning aan krijgen nieuwe gebruikers automatisch een account.',
  'help.guide.oidc.tip.1':
    'De redirect-URI die je provider nodig heeft is het adres van jouw TREK plus het OIDC-callbackpad uit de documentatie.',
  'help.guide.oidc.tip.2':
    'De claim-mapping bepaalt welke SSO-groepen beheerder worden; zie de OIDC-pagina in de documentatie.',
  // instance-keys
  'help.guide.instance-keys.title': 'De API-sleutels invullen',
  'help.guide.instance-keys.goal': 'Ontgrendel Google-plaatszoeken, Unsplash-omslagen en Amap voor de hele instantie.',
  'help.guide.instance-keys.step.1':
    'Plak onder API-sleutels de Google Maps API-sleutel en klik op Testen; het veld zegt of de sleutel antwoordt.',
  'help.guide.instance-keys.step.2':
    'Zet onder Waarvoor de sleutel wordt gebruikt alleen de functies aan die je op die sleutel wilt laten factureren: autocomplete, details, foto’s, verrijking, het zoeklogboek.',
  'help.guide.instance-keys.step.3':
    'Unsplash API-sleutel drijft het zoeken naar omslagen aan; Amap (高德地图) API-sleutel het plaatszoeken in China. Test elk op dezelfde manier.',
  'help.guide.instance-keys.result':
    'Gebruikers krijgen de functies zonder eigen sleutels; zonder Google-sleutel zoekt TREK via de gratis OpenStreetMap-stack en de TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'De persoonlijke sleutel van een gebruiker onder Instellingen wint voor die gebruiker van de instantiesleutel.',
  'help.guide.instance-keys.tip.2':
    'Sleutels kunnen ook uit omgevingsvariabelen komen; die verschijnen hier als alleen-lezen.',
  // places-transit
  'help.guide.places-transit.title': 'De zoek- en ov-providers kiezen',
  'help.guide.places-transit.goal': 'Bepaal wie plaatszoekopdrachten en ov-routes beantwoordt.',
  'help.guide.places-transit.step.1':
    'Kies onder Provider voor plaatszoeken Automatisch, Google Places, Amap (高德地图) of OpenStreetMap. Automatisch gebruikt de beste sleutel die er is.',
  'help.guide.places-transit.step.2':
    'Kies onder Ov-provider Transitous (gratis), wereldwijd en zonder sleutel, of Google, dat de Google-sleutel nodig heeft.',
  'help.guide.places-transit.result': 'Elk zoekvak en elke ov-route in TREK volgt de keuze.',
  'help.guide.places-transit.tip.1':
    'Een provider zonder zijn sleutel toont hier een waarschuwing en valt terug op OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Ov-routes van Google worden per verzoek gefactureerd; Transitous niet.',
  // file-types
  'help.guide.file-types.title': 'De bestandstypen beperken',
  'help.guide.file-types.goal': 'Bepaal welke bestandsextensies uploads mogen hebben.',
  'help.guide.file-types.step.1':
    'Bewerk onder Toegestane bestandstypen de door komma’s gescheiden lijst van extensies en sla op.',
  'help.guide.file-types.result':
    'Uploads van elk ander type worden met een duidelijke melding geweigerd, in de documenten, het reisverslag en de omslagen.',
  'help.guide.file-types.tip.1':
    'Houd afbeeldingstypen in de lijst; omslagen en reisverslagfoto’s gaan door dezelfde controle.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Een add-on aan- of uitzetten',
  'help.guide.toggle-addon.goal': 'Bied iedereen een functiemodule aan, of neem hem weg.',
  'help.guide.toggle-addon.step.1':
    'Zet de schakelaar op de tegel van de add-on om. Het navigatie-item verschijnt of verdwijnt voor iedereen tegelijk.',
  'help.guide.toggle-addon.step.2':
    'Sommige tegels hebben subrijen voor hun opties, zoals Bagagetracking onder Lijsten of de fotoproviders onder Reisverslag; ze verschijnen alleen zolang de add-on aanstaat.',
  'help.guide.toggle-addon.result':
    'Gegevens van een uitgezette add-on blijven bewaard; hem weer aanzetten toont ze opnieuw.',
  'help.guide.toggle-addon.tip.1': 'MCP uit verwijdert het eindpunt en de Integraties-onderdelen die ervan afhangen.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas en Reisverslag zijn de add-ons waar gebruikers het meest om vragen; Documenten heeft opslag voor uploads nodig.',
  // install-plugin
  'help.guide.install-plugin.title': 'Een plugin installeren',
  'help.guide.install-plugin.goal': 'Voeg een plugin van derden toe en geef hem precies de rechten waar hij om vraagt.',
  'help.guide.install-plugin.step.1':
    'Open Ontdekken, kies een plugin en klik op Installeren; of klik op Plugin uploaden en kies een .zip- of .tar.gz-pakket.',
  'help.guide.install-plugin.step.2':
    'Terug onder Geïnstalleerd lees je de rij: wat de plugin mag lezen of schrijven, de hosts die hij aanroept en of hij is ondertekend. Zet Plugin inschakelen aan.',
  'help.guide.install-plugin.step.3':
    'Het menu van de rij biedt Opnieuw starten, Foutenlog bekijken, Toegestane hosts en Versie wijzigen…; Verwijderen deïnstalleert hem. Een update wordt op de rij aangeboden als er een nieuwere versie bestaat, en een die om nieuwe rechten vraagt blijft uit tot je die goedkeurt.',
  'help.guide.install-plugin.result':
    'De plugin draait in zijn eigen proces; wat hij toevoegt, widgets, kaartlagen, tools, verschijnt waar de plugin het aangeeft.',
  'help.guide.install-plugin.tip.1':
    'Opnieuw scannen pikt een voor ontwikkeling gekoppelde pluginmap op zonder pakket.',
  'help.guide.install-plugin.tip.2':
    'Een niet-ondertekende plugin is als zodanig gemarkeerd; installeer hem alleen als je de bron vertrouwt.',
  // storage-backends
  'help.guide.storage-backends.title': 'Uploads naar S3 of een mirror verplaatsen',
  'help.guide.storage-backends.goal': 'Bewaar bestanden op objectopslag, of op schijf en in een bucket tegelijk.',
  'help.guide.storage-backends.step.1':
    'Klik onder Backends op Backend toevoegen, geef hem een Naam, kies het Type, Lokaal, S3 of Mirror, vul de velden in en Toepassen. Testen controleert de verbinding, Wijzigingen opslaan schrijft hem weg.',
  'help.guide.storage-backends.step.2':
    'Wijs onder Categorieën elke uploadcategorie toe aan een backend. Er een wijzigen vraagt of je Bestaande objecten verplaatsen of Alleen nieuwe schrijfacties omleiden wilt.',
  'help.guide.storage-backends.step.3':
    'Status bovenaan controleert elke backend; een rode regel noemt wat er misging.',
  'help.guide.storage-backends.result':
    'Nieuwe uploads gaan naar de toegewezen backend; verplaatste bestanden worden van daaruit geleverd.',
  'help.guide.storage-backends.tip.1':
    'Een backend die via omgevingsvariabelen is geconfigureerd wordt getoond maar kan hier niet worden bewerkt.',
  'help.guide.storage-backends.tip.2':
    'Een mirror schrijft naar beide doelen en leest van het eerste; gebruik hem om zonder downtime te migreren.',
  // channels-instance
  'help.guide.channels-instance.title': 'De meldingskanalen instellen',
  'help.guide.channels-instance.goal': 'Bepaal welke kanalen gebruikers mogen kiezen, en stel e-mail in.',
  'help.guide.channels-instance.step.1':
    'Vul onder Email (SMTP) SMTP Host, SMTP Port, SMTP User, SMTP Password en de From Address in; Test-e-mail verzenden stuurt een mail naar jou.',
  'help.guide.channels-instance.step.2':
    'Zet Ntfy en Webhook aan om ze aan te bieden; gebruikers vullen dan hun eigen topic of URL in onder Instellingen, Meldingen.',
  'help.guide.channels-instance.step.3':
    'Reisherinneringen schakelt de herinnering voordat een reis begint; In-App staat altijd aan en wordt hier alleen uitgelegd.',
  'help.guide.channels-instance.result':
    'Het tabblad Meldingen van elke gebruiker toont de kanalen die je hebt aangezet.',
  'help.guide.channels-instance.tip.1':
    'Een standaard-ntfy-server die je hier invult is voor gebruikers vooraf ingevuld; ze kunnen nog steeds hun eigen server opgeven.',
  'help.guide.channels-instance.tip.2':
    'Pluginkanalen verschijnen vanzelf zodra een plugin met die mogelijkheid actief is.',
  // admin-channels
  'help.guide.admin-channels.title': 'Beheergebeurtenissen op je telefoon krijgen',
  'help.guide.admin-channels.goal':
    'Hoor van mislukte back-ups, nieuwe releases en andere gebeurtenissen op de instantie.',
  'help.guide.admin-channels.step.1':
    'Vul onder Admin-Ntfy een topic in en, indien nodig, server en token; onder Admin-webhook een URL.',
  'help.guide.admin-channels.step.2':
    'Klik op Test-Ntfy verzenden of Testwebhook verzenden om een bericht te zien aankomen.',
  'help.guide.admin-channels.result': 'Beheergebeurtenissen gaan daarheen, naast de in-app-bel van elke beheerder.',
  'help.guide.admin-channels.tip.1':
    'Houd het beheer-topic gescheiden van je persoonlijke, zodat een storing niet verdrinkt in het reisgebabbel.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'AI-toegang intrekken',
  'help.guide.mcp-tokens-admin.goal':
    'Zie en kap elk token en elke sessie die een AI-client heeft, voor elke gebruiker.',
  'help.guide.mcp-tokens-admin.step.1':
    'Zoek onder API-tokens het token op gebruiker en naam; de prullenbak verwijdert het en de client stopt meteen.',
  'help.guide.mcp-tokens-admin.step.2':
    'Onder OAuth-sessies hetzelfde voor browsergebaseerde clients: client, gebruiker en datum, en de prullenbak trekt de sessie in.',
  'help.guide.mcp-tokens-admin.result':
    'De client moet door zijn gebruiker opnieuw worden verbonden; verder verandert er niets.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Scopes vertellen je wat een client kon doen; een alleen-lezen scope laten staan is onschuldig.',
  'help.guide.mcp-tokens-admin.tip.2': 'De MCP-add-on uitzetten trekt alles in één keer in.',
  // release-history
  'help.guide.release-history.title': 'Controleren op een nieuwe release',
  'help.guide.release-history.goal': 'Weet of jouw TREK actueel is en wat de volgende versie brengt.',
  'help.guide.release-history.step.1':
    'Als er een nieuwere release bestaat, staat Update beschikbaar bovenaan de beheerpagina; Bekijk op GitHub opent hem, en Hoe bij te werken legt het bijwerken uit voor Docker en voor andere installaties.',
  'help.guide.release-history.step.2':
    'Release-geschiedenis somt elke release op met zijn notities; Details tonen klapt ze uit, de nieuwste draagt Nieuwste, en Meer laden gaat verder terug.',
  'help.guide.release-history.result':
    'Het bijwerken gebeurt op de host, door de nieuwe image te pullen of de nieuwe tag te bouwen; de datamap blijft.',
  'help.guide.release-history.tip.1': 'Maak een back-up voor een update; het tabblad Back-up zit ernaast.',
  'help.guide.release-history.tip.2':
    'Pre-releases worden getoond maar niet als update aangekondigd, tenzij je er een draait.',
  // create-backup
  'help.guide.create-backup.title': 'Een back-up maken en herstellen',
  'help.guide.create-backup.goal':
    'Maak een momentopname van de hele instantie, bewaar ergens anders een kopie, en kun hem terugzetten.',
  'help.guide.create-backup.step.1':
    'Klik onder Gegevensback-up op Back-up aanmaken. Dat pakt de database en de uploads in één bestand op de server.',
  'help.guide.create-backup.step.2':
    'Downloaden bewaart een kopie buiten de machine; de prullenbak verwijdert oude om ruimte vrij te maken.',
  'help.guide.create-backup.step.3':
    'Herstellen bij een back-up, of Back-up uploaden met een bestand, vervangt de huidige gegevens nadat Back-up herstellen? één keer heeft gevraagd.',
  'help.guide.create-backup.result':
    'Een herstel brengt gebruikers, reizen, bestanden en instellingen terug naar de stand van die back-up; iedereen wordt uitgelogd.',
  'help.guide.create-backup.tip.1':
    'Herstellen is de enige actie hier die niet ongedaan kan worden gemaakt. Maak eerst een verse back-up.',
  'help.guide.create-backup.tip.2':
    'Back-ups staan in de datamap; pas een kopie op een andere machine maakt ze tot een echte back-up.',
  // auto-backup
  'help.guide.auto-backup.title': 'Back-ups inplannen',
  'help.guide.auto-backup.goal': 'Laat de server zichzelf back-uppen en alleen de laatste paar bewaren.',
  'help.guide.auto-backup.step.1':
    'Zet onder Auto-back-up Auto-back-up inschakelen aan en kies het Interval, Uitvoeren om en, voor wekelijks of maandelijks, de Dag van de week of Dag van de maand.',
  'help.guide.auto-backup.step.2':
    'Oude back-ups verwijderen na bepaalt hoe lang een back-up bewaard blijft; oudere verdwijnen als er een nieuwe wordt gemaakt.',
  'help.guide.auto-backup.result':
    'Back-ups verschijnen volgens schema in de lijst; een mislukking bereikt de beheerkanalen.',
  'help.guide.auto-backup.tip.1': 'Tijden volgen de tijdzone van de server, die in het tabblad Audit staat.',
  'help.guide.auto-backup.tip.2': 'Opslag op de server is eindig; drie tot vijf bewaren is meestal genoeg.',
  // audit-log
  'help.guide.audit-log.title': 'Het auditlogboek lezen',
  'help.guide.audit-log.goal': 'Kom erachter wie wat deed, en wanneer.',
  'help.guide.audit-log.step.1':
    'Lees de rijen: tijd, gebruiker, actie, resource, IP en details, nieuwste eerst. Acties zijn genoemd naar wat er gebeurde, zoals een mislukte login, een MFA-wijziging of een herstel.',
  'help.guide.audit-log.step.2': 'Vernieuwen laadt de bovenkant opnieuw; Meer laden gaat verder terug.',
  'help.guide.audit-log.result': 'Een spoor dat je kunt geven aan wie vraagt waarom iets is veranderd.',
  'help.guide.audit-log.tip.1': 'Tijden worden getoond in de tijdzone van de server, die boven de tabel staat.',
  'help.guide.audit-log.tip.2':
    'Het logboek is alleen-toevoegen; niets hier kan vanuit de app worden bewerkt of verwijderd.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Reis',
  'help.ctx.trip.summary':
    'Eén reis, helemaal: het plan met zijn dagen, kaart en plekken, en de tabbladen voor transport, boekingen, lijsten, onkosten, bestanden en samenwerking. Elk daarvan is een eigen hulpscherm onder dit scherm.',
  'help.ctx.trip.bullet.1':
    'De tabbladbalk: Plan, Transport, Boekingen, Lijsten, Onkosten, Bestanden en Samenwerking. Add-ons en plugins bepalen welke tabbladen er op jouw TREK zijn.',
  'help.ctx.trip.bullet.2':
    'Plan is drie kolommen: de dagen links, de kaart in het midden, de plekken rechts. Boekingen en transport leven in het plan, bij de stop en tussen stops; de tabbladen zetten ze op een rij.',
  'help.ctx.trip.bullet.3':
    'Delen rechtsboven opent de mensen van de reis: leden, gasten, de uitnodigingslink en de openbare alleen-lezen link.',
  'help.ctx.trip.bullet.4':
    'Titel, data, cover en valuta bewerk je vanuit Mijn reizen, met het potlood op de reiskaart.',
  'help.ctx.trip.bullet.5':
    'De chevrons aan de binnenrand van een kolom klappen haar weg en de kaart neemt de ruimte; de dunne scheidingslijn naast een kolom verandert haar breedte.',
  'help.ctx.trip.bullet.6':
    'De ongedaan-maken-pijl in de werkbalk van de dagen neemt de laatste wijziging aan het plan terug.',
  // add-member
  'help.guide.add-member.title': 'Een lid toevoegen',
  'help.guide.add-member.goal': 'Geef iemand met een TREK-account toegang tot deze reis.',
  'help.guide.add-member.step.1': 'Klik rechtsboven op Delen.',
  'help.guide.add-member.step.2': 'Kies onder Gebruiker uitnodigen de persoon uit de lijst en klik op Uitnodigen.',
  'help.guide.add-member.step.3':
    'De persoon staat nu onder Toegang. De kroon markeert de eigenaar; het pictogram aan het eind van een rij verwijdert de toegang weer.',
  'help.guide.add-member.result':
    'Het lid ziet en bewerkt de reis zoals jij, binnen de niveaus die de beheerder onder Rechtinstellingen heeft ingesteld.',
  'help.guide.add-member.tip.1':
    'Wie in de lijst ontbreekt, heeft nog geen TREK-account: voeg die persoon toe als gast, of laat hem of haar zich registreren via een uitnodigingslink.',
  'help.guide.add-member.tip.2': 'Het getal naast Toegang telt de mensen in de reis; gasten staan apart, eronder.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Uitnodigen via link',
  'help.guide.trip-invite-link.goal': 'Laat mensen zelf bij de reis aansluiten.',
  'help.guide.trip-invite-link.step.1':
    'Klik op Delen en dan onder Uitnodigingslink voor reis op Uitnodigingslink maken.',
  'help.guide.trip-invite-link.step.2':
    'Klik op Kopiëren en stuur de link. Iedereen met een TREK-account die hem opent, sluit aan als lid.',
  'help.guide.trip-invite-link.step.3':
    'Opnieuw genereren vervangt de link en maakt de oude onbruikbaar; Uitschakelen zet hem uit.',
  'help.guide.trip-invite-link.result': 'Wie de link opent, zit in de reis en verschijnt onder Toegang.',
  'help.guide.trip-invite-link.tip.1':
    'Iemand zonder account kan hem niet gebruiken. Een beheerder deelt registratielinks uit onder Beheer, Gebruikers, en kan er een aan deze reis koppelen.',
  'help.guide.trip-invite-link.tip.2':
    'Genereer opnieuw als een link in de verkeerde chat is beland: de oude werkt meteen niet meer.',
  // add-guest
  'help.guide.add-guest.title': 'Een gast zonder account toevoegen',
  'help.guide.add-guest.goal': 'Tel iemand mee die TREK niet gebruikt.',
  'help.guide.add-guest.step.1': 'Klik op Delen en scrol naar Gasten.',
  'help.guide.add-guest.step.2': 'Typ de naam in Naam van gast en klik op Gast toevoegen.',
  'help.guide.add-guest.result':
    'De gast kan aan onkosten, inpakitems en taken worden toegewezen, maar kan niet inloggen.',
  'help.guide.add-guest.tip.1':
    'Het potlood hernoemt een gast; het pictogram aan het eind van de rij verwijdert de gast samen met zijn aandelen en toewijzingen.',
  'help.guide.add-guest.tip.2':
    'Krijgt de persoon later een account, nodig hem of haar dan uit als lid en verwijder de gast.',
  // public-link
  'help.guide.public-link.title': 'Een alleen-lezen link publiceren',
  'help.guide.public-link.goal': 'Laat de reis zien aan mensen die hem niet mogen bewerken.',
  'help.guide.public-link.step.1':
    'Klik op Delen; rechts, onder Openbare link, vink aan wat de link mag tonen. Kaart en plan staat altijd aan; Boekingen, Inpaklijst, Onkosten en Chat kies je zelf.',
  'help.guide.public-link.step.2': 'Klik op Link aanmaken en dan op Kopiëren.',
  'help.guide.public-link.step.3': 'De vinkjes kun je veranderen zolang de link bestaat; Link verwijderen stopt hem.',
  'help.guide.public-link.result':
    'Iedereen met de link ziet de gekozen delen zonder in te loggen en kan niets veranderen.',
  'help.guide.public-link.tip.1':
    'De link staat nergens vermeld; wie hem heeft, kan hem openen, dus behandel hem als een wachtwoord.',
  'help.guide.public-link.tip.2': 'Voor bewerkrechten voeg je de persoon in plaats daarvan toe als lid.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'De reis overdragen of verlaten',
  'help.guide.transfer-ownership.goal': 'Maak iemand anders eigenaar, of stap uit een reis die niet van jou is.',
  'help.guide.transfer-ownership.step.1':
    'Klik op Delen. Onder Toegang maakt de kroon op de rij van een lid die persoon eigenaar; bevestig de vraag.',
  'help.guide.transfer-ownership.step.2':
    'Reis verlaten op je eigen rij haalt je uit de reis; als eigenaar draag je hem eerst over.',
  'help.guide.transfer-ownership.result':
    'De nieuwe eigenaar beheert de leden en kan de reis verwijderen; jij blijft een gewoon lid.',
  'help.guide.transfer-ownership.tip.1':
    'De eigenaar is wie de reis heeft aangemaakt, tot hij wordt overgedragen; de reis verwijderen mag alleen de eigenaar.',
  'help.guide.transfer-ownership.tip.2':
    'Toegang verwijderen op een andere rij is dezelfde knop andersom: de eigenaar haalt een lid eruit.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Ruimte maken voor de kaart',
  'help.guide.collapse-columns.goal': 'Klap een kolom weg of geef haar meer breedte.',
  'help.guide.collapse-columns.step.1':
    'Klik op de chevron aan de binnenrand van de dagenkolom om haar in te klappen; de kaart neemt de ruimte. De plekkenkolom heeft dezelfde chevron.',
  'help.guide.collapse-columns.step.2': 'Klik nog eens op de chevron om de kolom terug te halen.',
  'help.guide.collapse-columns.step.3':
    'Sleep de dunne scheidingslijn tussen een kolom en de kaart om de breedte van de kolom te veranderen.',
  'help.guide.collapse-columns.result':
    'De breedtes worden onthouden; de kolommen komen bij het volgende bezoek open terug.',
  'help.guide.collapse-columns.tip.1':
    'Beide kolommen kunnen tegelijk worden weggeklapt voor een weergave met alleen de kaart.',
  'help.guide.collapse-columns.tip.2':
    'Op een telefoon zijn er geen kolommen: Plan en Plaatsen zijn de twee knoppen onderaan de kaart.',
  // undo-change
  'help.guide.undo-change.title': 'De laatste wijziging ongedaan maken',
  'help.guide.undo-change.goal': 'Neem terug wat je net aan het plan hebt gedaan.',
  'help.guide.undo-change.step.1':
    'Klik op de ongedaan-maken-pijl in de werkbalk boven de dagen; zijn tooltip noemt de wijziging die hij terugneemt.',
  'help.guide.undo-change.result': 'Het plan is weer zoals het was, en de pijl wordt grijs tot de volgende wijziging.',
  'help.guide.undo-change.tip.1':
    'Ongedaan maken dekt het plan: plekken toewijzen, verwijderen, herschikken en verplaatsen, een route optimaliseren, plekken wissen, categoriewijzigingen en imports.',
  'help.guide.undo-change.tip.2':
    'Het gaat één stap diep: alleen de laatste wijziging kan worden teruggenomen, en een nieuwe wijziging vervangt haar.',

  // ── Screen: trip-places ───────────────────────────────────────────────────────────────
  'help.ctx.trip-places.title': 'Plekken',
  'help.ctx.trip-places.summary':
    'De rechterkolom van het plan: elke plek van de reis, gepland of niet, met zoeken en filters, en de manieren om plekken binnen te halen, met de hand, uit een bestand of uit een gedeelde lijst.',
  'help.ctx.trip-places.bullet.1':
    'Plaats/activiteit toevoegen bovenaan opent het formulier voor een plek die je typt of zoekt. Zolang een dag open is heet de knop Nieuwe plek, en Naar dag ernaast maakt de plek meteen op die dag aan.',
  'help.ctx.trip-places.bullet.2':
    'Bestand importeren neemt .gpx-, .kml- en .kmz-bestanden; Lijst importeren neemt een gedeelde lijst van Google Maps of Naver Maps. Een bestand kun je ook gewoon op de kolom laten vallen.',
  'help.ctx.trip-places.bullet.3':
    'Het uitklapmenu wisselt tussen Alle, Ongepland, Gepland en, zodra een track is geïmporteerd, Tracks; daaronder zitten het zoekveld, het categoriefilter en de ster voor een minimale beoordeling.',
  'help.ctx.trip-places.bullet.4':
    'Een rij toont afbeelding, naam en beschrijving of adres. Klik erop voor de plaatsdetails, sleep hem op een dag, of klik met rechts voor Bewerken, + Dag, Website openen, Google Maps, In collectie opslaan en Verwijderen.',
  'help.ctx.trip-places.bullet.5':
    'Met een dag open zet een + aan het eind van een ongeplande rij de plek op die dag, en Gepland toont alleen die dag, met Hele reis tonen om weer te verbreden.',
  'help.ctx.trip-places.bullet.6':
    'Het vinkje uiterst rechts in de filterrij start een selectie: meerdere rijen tegelijk krijgen een nieuwe categorie, gaan in een collectie of worden verwijderd.',
  // create-place
  'help.guide.create-place.title': 'Een plek aanmaken',
  'help.guide.create-place.goal':
    'Voeg met de hand een plek of activiteit toe, met alles wat het plan erover moet weten.',
  'help.guide.create-place.step.1':
    'Klik bovenaan de plekkenkolom op Plaats/activiteit toevoegen (Nieuwe plek zolang een dag open is). Het formulier gaat open.',
  'help.guide.create-place.step.2':
    'Typ de plek bovenin in Plaatsen zoeken... en kies een resultaat. Naam, Adres, Breedtegraad en Lengtegraad vullen zich, en Plaatsdetails rechts toont afbeeldingen, een beschrijving en gegevens erbij. Niet de juiste plek? Zoek in plaats daarvan op Google draait de zoekopdracht opnieuw via Google.',
  'help.guide.create-place.step.3':
    'In Plaatsdetails maakt een klik op een afbeelding onder Kies een afbeelding deze tot de afbeelding van de plek; Deze tekst gebruiken neemt de beschrijving over in het formulier.',
  'help.guide.create-place.step.4':
    'Loop de velden na: Naam is verplicht; Beschrijving en Notities zijn van jou; Adres, Breedtegraad en Lengtegraad komen uit de zoekopdracht of typ je zelf; Categorie kiest een van de categorieën van de reis, en de + ernaast maakt er ter plekke een nieuwe aan; Website neemt de link.',
  'help.guide.create-place.step.5':
    'Klik op Toevoegen. Ligt er al een plek met dezelfde naam in de reis, dan zegt het formulier dat en wordt de knop Toch toevoegen.',
  'help.guide.create-place.result':
    'De plek staat in de lijst en op de kaart, onder Ongepland tot hij op een dag wordt gezet.',
  'help.guide.create-place.tip.1':
    'Bestanden en Kosten onderaan het formulier hangen een document aan de plek, of openen meteen na het opslaan de Kosten-editor voor de uitgave ervan.',
  'help.guide.create-place.tip.2':
    'Zonder Google-sleutel loopt de zoekopdracht via de TREK-index en OpenStreetMap: hij vindt de plek, alleen zonder beoordelingen, openingstijden en foto’s.',
  'help.guide.create-place.tip.3':
    'Een plek kan ook op de kaart beginnen: klik met rechts op het punt, en het formulier gaat open met de coördinaten en het adres al ingevuld.',
  // place-to-open-day
  'help.guide.place-to-open-day.title': 'Een plek meteen aan de open dag toevoegen',
  'help.guide.place-to-open-day.goal':
    'Sla de tweede stap over: maak de plek aan of kies hem, en zet hem meteen op de dag.',
  'help.guide.place-to-open-day.step.1':
    'Klik in de dagenkolom op de kop van een dag. De dag is open: zijn kaart is gemarkeerd, en de plekkenkolom krijgt de knop Naar dag erbij.',
  'help.guide.place-to-open-day.step.2':
    'Naar dag opent hetzelfde formulier als Nieuwe plek, alleen komt de plek op de open dag terecht op het moment dat je op Toevoegen klikt.',
  'help.guide.place-to-open-day.step.3':
    'Een plek die al bestaat gaat naar de open dag met de + aan het eind van zijn rij, of met rechts klikken, + Dag.',
  'help.guide.place-to-open-day.result':
    'De plek staat onder de dag, helemaal onderaan; sleep hem omhoog of omlaag naar waar hij hoort.',
  'help.guide.place-to-open-day.tip.1':
    'Een rij op een dag slepen werkt net zo goed, en daarbij kun je de plek meteen tussen twee stops laten vallen.',
  'help.guide.place-to-open-day.tip.2': 'Ongedaan maken in de werkbalk boven de dagen neemt de toewijzing terug.',
  // filter-places
  'help.guide.filter-places.title': 'Een plek in de lijst vinden',
  'help.guide.filter-places.goal': 'Versmal de kolom tot de plekken die je zoekt.',
  'help.guide.filter-places.step.1':
    'Het uitklapmenu bovenaan wisselt tussen Alle, Ongepland (nog op geen enkele dag), Gepland (op een dag) en Tracks (geïmporteerde GPX-tracks), elk met zijn aantal.',
  'help.guide.filter-places.step.2': 'Typ in Plaatsen zoeken...; de lijst wordt smaller terwijl je typt.',
  'help.guide.filter-places.step.3':
    'Alle categorieën opent een lijst om een of meer categorieën aan te vinken, Geen categorie daarbij; Filter wissen onderaan zet hem terug.',
  'help.guide.filter-places.step.4':
    'De ster ernaast zet een minimale beoordeling: 5+, 4+ enzovoort tonen alleen plekken die je minstens zo hoog hebt beoordeeld.',
  'help.guide.filter-places.result': 'Het aantal boven de rijen zegt hoeveel plekken passen; de filters werken samen.',
  'help.guide.filter-places.tip.1':
    'Met een dag open toont Gepland alleen die dag en zegt dat ook: Alleen de geopende dag wordt getoond, met Hele reis tonen ernaast.',
  'help.guide.filter-places.tip.2':
    'De kaart versmalt ook tot de open dag; Alle in de lijst toont nog steeds elke plek van de reis.',
  // edit-place
  'help.guide.edit-place.title': 'Een plek wijzigen',
  'help.guide.edit-place.goal': 'Verbeter een naam, verplaats de speld, voeg een website toe of wissel de categorie.',
  'help.guide.edit-place.step.1':
    'Klik met rechts op de rij en kies Bewerken, of open de plek en klik op Bewerken in de details.',
  'help.guide.edit-place.step.2':
    'Wijzig wat je nodig hebt: Naam, Beschrijving, Notities, Adres, Breedtegraad en Lengtegraad, Categorie, Website. Vanuit een dag geopend heeft het formulier ook Notities voor deze dag en Starttijd en Einde voor die dag.',
  'help.guide.edit-place.step.3': 'Klik op Bijwerken.',
  'help.guide.edit-place.result':
    'De wijziging geldt overal waar de plek opduikt: in de lijst, op de kaart en op elke dag waarop hij staat.',
  'help.guide.edit-place.tip.1':
    'Notities voor deze dag hoort bij de plek op die ene dag; Notities hoort bij de plek zelf.',
  'help.guide.edit-place.tip.2':
    'Een Einde vóór de Starttijd blokkeert Bijwerken; Tijdoverlap met: waarschuwt er alleen voor dat een andere stop van de dag dezelfde tijd heeft.',
  // delete-place
  'help.guide.delete-place.title': 'Een plek verwijderen',
  'help.guide.delete-place.goal': 'Haal een plek voorgoed uit de reis.',
  'help.guide.delete-place.step.1':
    'Klik met rechts op de rij en kies Verwijderen, of klik op Verwijderen in de plaatsdetails.',
  'help.guide.delete-place.step.2':
    'Bevestig. Is er op de plek een nacht geboekt, of hangt er een boeking aan, dan zegt de vraag wat er meegaat.',
  'help.guide.delete-place.result':
    'De plek is weg uit de lijst, van de kaart en van elke dag; Ongedaan maken in de werkbalk boven de dagen haalt hem terug.',
  'help.guide.delete-place.tip.1':
    'Om een plek alleen van één dag te halen, gebruik je in plaats daarvan Verwijderen van dag op die stop.',
  'help.guide.delete-place.tip.2': 'Meerdere plekken tegelijk: het vinkje naast de filters start een selectie.',
  // select-places
  'help.guide.select-places.title': 'Meerdere plekken tegelijk wijzigen of verwijderen',
  'help.guide.select-places.goal': 'Ruim de lijst in één keer op in plaats van plek voor plek.',
  'help.guide.select-places.step.1':
    'Klik op het vinkje uiterst rechts in de filterrij. De rijen krijgen vakjes en er verschijnt een balk met de acties.',
  'help.guide.select-places.step.2':
    'Vink de rijen aan, of gebruik Alles selecteren in de balk; de balk telt wat er geselecteerd is.',
  'help.guide.select-places.step.3':
    'Change category geeft ze allemaal één categorie; In collectie opslaan kopieert ze naar een van je collecties; Selectie verwijderen haalt ze na een bevestiging weg.',
  'help.guide.select-places.step.4': 'Klik nog eens op het vinkje om de selectie te verlaten.',
  'help.guide.select-places.result':
    'De wijziging geldt voor elke geselecteerde plek; een verwijdering kun je ongedaan maken vanuit de werkbalk boven de dagen.',
  'help.guide.select-places.tip.1':
    'De filters blijven werken terwijl je selecteert: filter eerst op Ongepland, dan pakt Alles selecteren precies die.',
  'help.guide.select-places.tip.2':
    'Markeer als bezocht in je lijsten verschijnt in de balk als de add-on Collecties aan staat: hij vinkt de plekken af in de collecties waarin ze zijn opgeslagen.',
  // import-places-file
  'help.guide.import-places-file.title': 'Plekken importeren uit een GPX-, KML- of KMZ-bestand',
  'help.guide.import-places-file.goal':
    'Haal binnen wat Google My Maps, Google Earth of een GPS-tracker heeft geëxporteerd.',
  'help.guide.import-places-file.step.1':
    'Klik op Bestand importeren, of laat het bestand ergens op de plekkenkolom vallen.',
  'help.guide.import-places-file.step.2':
    'Kies het bestand of sleep het in het vak. Bij een GPX vink je aan wat je importeert: Waypoints, Routes, Tracks (met routegeometrie); bij KML en KMZ Punten (Placemarks) en Paden (LineStrings).',
  'help.guide.import-places-file.step.3':
    'Plaatsen verrijken via Google zoekt elke geïmporteerde plek op om foto’s, adres en details aan te vullen; daarvoor is de Google-sleutel nodig.',
  'help.guide.import-places-file.step.4':
    'Klik op Importeren. De samenvatting zegt hoeveel plekken zijn aangemaakt en hoeveel er zijn overgeslagen omdat ze al in de reis zaten.',
  'help.guide.import-places-file.result':
    'De plekken staan in de lijst; een track draagt een routemarkering op zijn rij, tekent zich op de kaart en krijgt zijn eigen filter Tracks.',
  'help.guide.import-places-file.tip.1':
    'Een te groot bestand wordt geweigerd met de groottelimiet; exporteer het opnieuw zonder foto’s, of splits het.',
  'help.guide.import-places-file.tip.2':
    'De import kun je in zijn geheel ongedaan maken vanuit de werkbalk boven de dagen.',
  // import-places-list
  'help.guide.import-places-list.title': 'Een gedeelde lijst van Google Maps of Naver Maps importeren',
  'help.guide.import-places-list.goal': 'Maak van de link van een gedeelde lijst plekken.',
  'help.guide.import-places-list.step.1': 'Klik op Lijst importeren en kies Google Lijst of Naver Lijst.',
  'help.guide.import-places-list.step.2':
    'Plak de gedeelde link van de lijst. Een routebeschrijvingslink van Google Maps werkt ook: zijn stops worden plekken, in rijvolgorde.',
  'help.guide.import-places-list.step.3': 'Klik op Importeren.',
  'help.guide.import-places-list.result':
    'Elke plek van de lijst zit in de reis, met de naam uit de lijst; plekken die al in de reis zitten worden overgeslagen.',
  'help.guide.import-places-list.tip.1':
    'De lijst moet openbaar gedeeld zijn; de link van een privélijst importeert niets.',
  'help.guide.import-places-list.tip.2':
    'Naver Lijst heeft de add-on Naver List Import nodig, die de beheerder onder Add-ons aanzet; zonder die add-on heet de knop Google Lijst.',
};

export default help;
