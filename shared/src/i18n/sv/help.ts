import type { TranslationStrings } from '../types';

// English fallback until 'sv' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Hjälp för den här vyn',
  'help.center.title': 'Hjälp',
  'help.center.onThisScreen': 'I den här vyn',
  'help.center.screens': 'Vyer',
  'help.center.thisScreen': 'Den här vyn',
  'help.center.subScreens': 'Undervyer: {count}',
  'help.center.subScreensLabel': 'Undervyer',
  'help.center.guidesCount': '{count} guider',
  'help.center.goToScreen': 'Gå till {screen}',
  'help.center.overview': 'Översikt',
  'help.center.howTo': 'Hur gör jag för att…',
  'help.center.searchPlaceholder': 'Sök i guider och dokumentation…',
  'help.center.searchEmpty': 'Inget hittades för ”{query}”.',
  'help.center.searchGuides': 'Guider',
  'help.center.searchDocs': 'Dokumentation',
  'help.center.searchError': 'Sökningen är inte tillgänglig just nu.',
  'help.center.back': 'Tillbaka',
  'help.center.close': 'Stäng hjälpen',
  'help.center.steps': '{count} steg',
  'help.center.step': 'Steg {n}',
  'help.center.stepsLabel': 'Steg',
  'help.center.stepOf': 'Steg {n} av {total}',
  'help.center.screenshot': 'Skärmbild',
  'help.center.result': 'Resultatet',
  'help.center.tips': 'Bra att veta',
  'help.center.related': 'Relaterat',
  'help.center.openDocs': 'Öppna i Hjälp & dokumentation',
  'help.center.docsSection': 'I dokumentationen',
  'help.center.noContext': 'Det finns ingen guide för den här vyn ännu.',
  'help.center.noContextHint': 'Sök i dokumentationen eller berätta vad du letade efter.',
  'help.center.feedback': 'Saknas något?',
  'help.center.feedbackLink': 'Berätta på GitHub',
  'help.center.discord': 'Fråga på Discord',
  'help.center.quick': 'Snabb',
  'help.center.guide': 'Guide',
  'help.center.tour': 'Genomgång',
  'help.center.imageAlt': 'Steg {n} i ”{title}”',

  // ctx
  'help.ctx.dashboard.title': 'Översikt',
  'help.ctx.dashboard.summary':
    'Översikten är ingången till varje resa. Boardingkortet överst lyfter fram resan som pågår eller står näst på tur, raden under räknar vad du redan har rest, och korten listar allt du planerar, har arkiverat eller redan har avslutat.',
  'help.ctx.dashboard.bullet.1':
    'Boardingkort: den pågående eller nästa resan med datum, resenärer, platser och nedräkning. Klicka för att öppna resan.',
  'help.ctx.dashboard.bullet.2':
    'Resestatistik: besökta länder, resor, dagar på resande fot och flugen sträcka, över alla dina resor.',
  'help.ctx.dashboard.bullet.3':
    'Resekort, filtrerade på Planerad, Arkiverad och Slutförd, som rutnät eller lista. Håll muspekaren över ett kort för att redigera, duplicera, arkivera och ta bort.',
  'help.ctx.dashboard.bullet.4':
    'Widgetar till höger: valutaomvandlare, världsklockor, kommande bokningar och samlingar. Var och en kan stängas av.',
  'help.ctx.dashboard.bullet.5': 'Kortet ”Ny resa” och knappen längst ned till höger startar båda en ny resa.',

  // create-trip
  'help.guide.create-trip.title': 'Skapa en resa',
  'help.guide.create-trip.goal': 'Starta en ny resa med namn, datum och omslagsbild.',
  'help.guide.create-trip.step.1':
    'Klicka på ”Ny resa”. Kortet sist bland dina resor och knappen längst ned till höger gör samma sak.',
  'help.guide.create-trip.step.2':
    'Ge resan ett namn. Det är det enda obligatoriska fältet; allt annat kan läggas till senare.',
  'help.guide.create-trip.step.3':
    'Välj start- och slutdatum. TREK skapar en dag per datum, så resplanen är redo att fyllas.',
  'help.guide.create-trip.step.4':
    'Valfritt: lägg till en omslagsbild. Ladda upp en egen, dra in en eller sök resmålet på Unsplash.',
  'help.guide.create-trip.step.5': 'Klicka på ”Skapa ny resa”.',
  'help.guide.create-trip.result':
    'Resan visas i översikten. Är det din nästa resa tar den över boardingkortet överst.',
  'help.guide.create-trip.tip.1':
    'Datum kan ändras senare. Finns det redan bokningar frågar TREK om de ska flyttas med dagarna.',
  'help.guide.create-trip.tip.2':
    'Resvalutan du väljer här är den som varje kostnad räknas om till. Välj resmålets valuta.',

  // edit-trip
  'help.guide.edit-trip.title': 'Redigera en resa',
  'help.guide.edit-trip.goal': 'Byta namn på en resa, ändra datum eller justera inställningarna.',
  'help.guide.edit-trip.step.1': 'Håll muspekaren över resekortet (eller boardingkortet) och klicka på pennan.',
  'help.guide.edit-trip.step.2':
    'Ändra det du behöver: namn, beskrivning, datum, omslag, valuta, påminnelse eller medlemmar.',
  'help.guide.edit-trip.step.3': 'Klicka på ”Uppdatera”.',
  'help.guide.edit-trip.result': 'Kortet uppdateras direkt, för alla medlemmar i resan.',
  'help.guide.edit-trip.tip.1':
    'Flyttar du datumen för en resa som redan har bokningar öppnas ett andra steg som frågar om bokningarna ska följa med.',

  // cover-image
  'help.guide.cover-image.title': 'Sätta en omslagsbild',
  'help.guide.cover-image.goal': 'Ge en resa en bild som syns på kortet och på boardingkortet.',
  'help.guide.cover-image.step.1': 'Öppna resans redigeringsformulär via pennan på kortet.',
  'help.guide.cover-image.step.2':
    'Under ”Omslagsbild”: släpp en bild, klicka för att ladda upp en eller skriv ett resmål i Unsplash-sökningen.',
  'help.guide.cover-image.step.3': 'Välj en bild och klicka på ”Uppdatera”.',
  'help.guide.cover-image.result': 'Bilden sparas med resan och visas överallt där resan listas.',
  'help.guide.cover-image.tip.1':
    'Bilder från Unsplash-sökningen får automatiskt fotografen angiven; dina egna uppladdningar stannar på din server.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Duplicera en resa',
  'help.guide.duplicate-trip.goal': 'Återanvända en resa som mall för en ny.',
  'help.guide.duplicate-trip.step.1': 'Håll muspekaren över kortet och klicka på dupliceringsikonen.',
  'help.guide.duplicate-trip.step.2': 'Läs vad som kopieras och inte, och bekräfta.',
  'help.guide.duplicate-trip.result': 'En kopia visas bredvid originalet, redo att döpas om och få nya datum.',
  'help.guide.duplicate-trip.tip.1':
    'Dagar, platser, bokningar, budgetposter, packlistor och dagsanteckningar följer med. Medlemmar, chatt, omröstningar, filer och delningslänkar gör det inte.',

  // archive-trip
  'help.guide.archive-trip.title': 'Arkivera och återställa en resa',
  'help.guide.archive-trip.goal': 'Lägga undan en resa utan att ta bort den, och hämta tillbaka den senare.',
  'help.guide.archive-trip.step.1': 'Håll muspekaren över kortet och klicka på ”Arkiv”.',
  'help.guide.archive-trip.step.2': 'Ställ filtret ovanför korten på ”Arkiverad” för att se den igen.',
  'help.guide.archive-trip.step.3': 'Klicka på ”Återställ” på kortet för att flytta tillbaka den till ”Planerad”.',
  'help.guide.archive-trip.result':
    'Arkiverade resor behåller allt. De slutar bara ta plats i översikten och i kalenderflödet för alla resor.',

  // delete-trip
  'help.guide.delete-trip.title': 'Ta bort en resa',
  'help.guide.delete-trip.goal': 'Ta bort en resa för gott.',
  'help.guide.delete-trip.step.1': 'Håll muspekaren över kortet och klicka på papperskorgen.',
  'help.guide.delete-trip.step.2': 'Bekräfta. Dialogrutan anger resans namn så att du vet att det är rätt.',
  'help.guide.delete-trip.result':
    'Resan med dagar, platser, bokningar och filer är borta. Det går inte att ångra; arkivera i stället om du är osäker.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Hitta slutförda resor, växla mellan rutnät och lista',
  'help.guide.filter-and-view.goal': 'Se avslutade eller arkiverade resor och välja den layout du gillar.',
  'help.guide.filter-and-view.step.1':
    'Använd ”Planerad”, ”Arkiverad” och ”Slutförd” ovanför korten. Slutförd är varje resa vars slutdatum har passerat.',
  'help.guide.filter-and-view.step.2': 'Klicka på listikonen för en kompakt lista; klicka igen för rutnätet.',
  'help.guide.filter-and-view.result': 'Översikten kommer ihåg din layout på den här enheten.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Prenumerera på alla resor i din kalender',
  'help.guide.calendar-feed.goal': 'Se dagar och bokningar för varje aktiv resa i din kalenderapp, alltid synkade.',
  'help.guide.calendar-feed.step.1': 'Klicka på kalenderikonen bredvid vyväxlaren.',
  'help.guide.calendar-feed.step.2': 'Klicka på ”Enable calendar subscription”. TREK skapar en privat flödeslänk.',
  'help.guide.calendar-feed.step.3':
    'Lägg till flödet med en av knapparna (Google, Apple, Outlook) eller kopiera länken till valfri kalenderapp som kan prenumerera på webbadresser.',
  'help.guide.calendar-feed.result':
    'Varje aktiv resa visas i din kalender och uppdateras av sig själv. Arkiverade resor och resor som avslutades för mer än 90 dagar sedan lämnas utanför.',
  'help.guide.calendar-feed.tip.1':
    'Länken är en hemlighet. Alla som har den kan läsa flödet; återkalla den i samma dialogruta om den läcker.',

  // widgets
  'help.guide.widgets.title': 'Välja dina widgetar i översikten',
  'help.guide.widgets.goal': 'Visa eller dölja statistikraden och widgetarna till höger.',
  'help.guide.widgets.step.1': 'Öppna avatarmenyn uppe till höger och välj ”Inställningar”.',
  'help.guide.widgets.step.2': 'Gå till fliken ”Appearance”.',
  'help.guide.widgets.step.3':
    'Under ”Dashboard widgets” slår du på eller av varje widget. Dator och mobil ställs in separat.',
  'help.guide.widgets.step.4': 'Gå tillbaka till översikten. Ändringen gäller direkt.',
  'help.guide.widgets.result':
    'Dolda widgetar ger plats åt dina resor; stäng av hela högerkolumnen för att centrera layouten.',
  'help.guide.widgets.link': 'Öppna utseendeinställningarna',

  // currency-widget
  'help.guide.currency-widget.title': 'Räkna om valutor',
  'help.guide.currency-widget.goal': 'Räkna om ett belopp mellan två valutor med aktuella kurser.',
  'help.guide.currency-widget.step.1': 'Skriv beloppet och välj de två valutorna.',
  'help.guide.currency-widget.step.2': 'Pilen mellan dem byter plats på paret; den runda pilen hämtar kursen på nytt.',
  'help.guide.currency-widget.result': 'Ditt valutapar sparas på ditt konto, så det är detsamma på alla enheter.',
  'help.guide.currency-widget.tip.1': 'Kurserna kommer från Europeiska centralbanken och uppdateras en gång om dagen.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Lägga till världsklockor',
  'help.guide.timezones-widget.goal': 'Hålla koll på lokal tid på dina resmål.',
  'help.guide.timezones-widget.step.1': 'Klicka på + i widgeten ”Tidszoner” och sök efter en stad.',
  'help.guide.timezones-widget.step.2': 'Ta bort en klocka med × bredvid den.',
  'help.guide.timezones-widget.result': 'Dina klockor sparas med ditt konto.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay är din personliga semesterplanerare: hur många semesterdagar du har på ett år, vilka du har lagt in och vad som är kvar. Rutnätet visar hela året på en gång; sidofältet rymmer årsväljaren, personerna du planerar med, kalendrar som delats med dig, teckenförklaringen och ditt saldo.',
  'help.ctx.vacay.bullet.1':
    'Årsrutnät: tolv månadskort, en cell per dag. Klicka på en dag för att lägga in eller ta bort den. En liten blå prick markerar dagar som en resa redan täcker.',
  'help.ctx.vacay.bullet.2':
    'Verktygsfältet längst ned: läget Semester eller Företagshelg, plus reglagen Halvdag och Komp / Flex som ändrar vad ett klick lägger in.',
  'help.ctx.vacay.bullet.3':
    'Rättighet: dina dagar för året, hur många som är använda och hur många som är kvar, med överföring från föregående period.',
  'help.ctx.vacay.bullet.4':
    'Personer är de som slagits ihop med din plan, var och en i sin färg. Delade kalendrar är skrivskyddade ringar med andras lediga dagar.',
  'help.ctx.vacay.bullet.5':
    'Inställningarna täcker helger, veckostart, överföring, ditt semesterår, företagsledighet och kalendrar för helgdagar eller skollov.',
  // log-day
  'help.guide.log-day.title': 'Lägga in en semesterdag',
  'help.guide.log-day.goal': 'Markera en ledig dag i årsrutnätet och se saldot följa med.',
  'help.guide.log-day.step.1':
    'Titta på verktygsfältet längst ned: den vänstra knappen, i din färg, betyder att ett klick lägger in en semesterdag för dig.',
  'help.guide.log-day.step.2':
    'Klicka på en dag i valfritt månadskort. Den fylls med din färg och Använt räknar en dag till.',
  'help.guide.log-day.step.3': 'Klicka på samma dag igen för att ta bort den.',
  'help.guide.log-day.result':
    'Dagen är inlagd, Dagar, Använt och Kvar uppdateras direkt, och alla som slagits ihop med din plan ser det live.',
  'help.guide.log-day.tip.1': 'Helger kan inte läggas in så länge Blockera Helger är på i Inställningar.',
  'help.guide.log-day.tip.2':
    'En blå prick i en cell betyder att en av dina resor täcker den dagen, så du ser var ledighet och resa sammanfaller.',
  // half-day
  'help.guide.half-day.title': 'Lägga in en halvdag',
  'help.guide.half-day.goal': 'Ta en eftermiddag ledigt utan att använda en hel semesterdag.',
  'help.guide.half-day.step.1':
    'Slå på Halvdag i verktygsfältet. Dess orange prick är markören en halvdag får i rutnätet.',
  'help.guide.half-day.step.2': 'Klicka på en dag. Den läggs in som 0,5 och bär den orange pricken i hörnet.',
  'help.guide.half-day.step.3':
    'Slå av Halvdag igen när du är klar; att klicka på en halvdag med andra inställningar omvandlar den på plats.',
  'help.guide.half-day.result':
    'Använt växer med 0,5. Halvdag och Komp / Flex är oberoende, så en halv kompdag går också.',
  'help.guide.half-day.tip.1':
    'Verktygsfältet visar alltid markören ditt nästa klick sätter, så du kan kontrollera innan du lägger in.',
  // comp-day
  'help.guide.comp-day.title': 'Lägga in komp eller flex',
  'help.guide.comp-day.goal': 'Ta ut kompledighet som inte kostar semesterdagar.',
  'help.guide.comp-day.step.1':
    'Slå på Komp / Flex i verktygsfältet. Den skrafferade skivan är hur en kompdag ser ut i rutnätet.',
  'help.guide.comp-day.step.2':
    'Klicka på en dag. Den fylls med diagonal skraffering i din färg i stället för ett helt block.',
  'help.guide.comp-day.result': 'Kompdagar räknas bredvid saldorutorna och minskar aldrig Kvar.',
  'help.guide.comp-day.tip.1':
    'Uttagen övertid, flextid, en kompdag: allt som är ledigt men inte semester hör hemma här.',
  // entitlement
  'help.guide.entitlement.title': 'Ange ditt semestersaldo',
  'help.guide.entitlement.goal': 'Tala om för Vacay hur många semesterdagar du har på ett år.',
  'help.guide.entitlement.step.1': 'Klicka på rutan Dagar under Rättighet i sidofältet.',
  'help.guide.entitlement.step.2': 'Skriv ditt antal dagar och tryck på Enter.',
  'help.guide.entitlement.result': 'Kvar räknas om utifrån ditt saldo, eventuell överföring och de dagar du använt.',
  'help.guide.entitlement.tip.1': 'Varje år har sitt eget saldo, så en ändring här påverkar bara det valda året.',
  // years
  'help.guide.years.title': 'Lägga till och byta år',
  'help.guide.years.goal': 'Planera nästa år redan nu, eller titta tillbaka på det förra.',
  'help.guide.years.step.1':
    'Klicka på + till höger om årtalet för att lägga till nästa år, eller på + till vänster för det föregående.',
  'help.guide.years.step.2': 'Byt år med pilarna eller årsknapparna under.',
  'help.guide.years.step.3':
    'För att ta bort ett år, håll muspekaren över dess knapp och klicka på det lilla minuset. Dess poster försvinner med det, så bekräfta med omsorg.',
  'help.guide.years.result': 'Varje år behåller sitt eget saldo och sina poster; överföringen knyter ihop dem.',
  // company-holidays
  'help.guide.company-holidays.title': 'Markera företagsledighet',
  'help.guide.company-holidays.goal': 'Blockera dagar då hela företaget är ledigt utan att använda någons saldo.',
  'help.guide.company-holidays.step.1':
    'Öppna Inställningar och kontrollera att Företagshelger är på. Det är standard; verktygsfältet erbjuder läget bara medan det är på.',
  'help.guide.company-holidays.step.2': 'Tillbaka i rutnätet, ställ verktygsfältet i läget Företagshelg.',
  'help.guide.company-holidays.step.3':
    'Klicka på dagarna. De blir bärnstensfärgade och dyker upp i teckenförklaringen.',
  'help.guide.company-holidays.result':
    'Företagsledighet syns för alla som slagits ihop med planen och minskar aldrig Kvar.',
  'help.guide.company-holidays.tip.1':
    'Alla ihopslagna personer kan redigera företagsledighet, så kom överens om vem som sköter den.',
  // public-holidays
  'help.guide.public-holidays.title': 'Visa helgdagar',
  'help.guide.public-holidays.goal': 'Lägga in ditt lands eller din regions helgdagar i rutnätet.',
  'help.guide.public-holidays.step.1': 'Öppna Inställningar och slå på Allmänna helgdagar.',
  'help.guide.public-holidays.step.2':
    'Klicka på Lägg till kalender, välj land och, där det spelar roll, region. Ge den en färg och en etikett om du vill.',
  'help.guide.public-holidays.step.3': 'Stäng Inställningar. Helgdagarna visas i rutnätet och i teckenförklaringen.',
  'help.guide.public-holidays.result': 'Helgdagar markeras i kalenderns färg och räknas aldrig mot ditt saldo.',
  'help.guide.public-holidays.tip.1':
    'Du kan lägga till flera kalendrar, till exempel din egen region och en ihopslagen kollegas.',
  // school-holidays
  'help.guide.school-holidays.title': 'Visa skollov',
  'help.guide.school-holidays.goal': 'Se din regions skollov bredvid dina egna lediga dagar.',
  'help.guide.school-holidays.step.1': 'Öppna Inställningar och slå på School Holidays.',
  'help.guide.school-holidays.step.2':
    'Klicka på Lägg till kalender och välj land. Där ett land delar upp sin kalender väljer du även region eller grupp.',
  'help.guide.school-holidays.step.3': 'Stäng Inställningar. Varje lov får ett färgat band längst ned på sina dagar.',
  'help.guide.school-holidays.result': 'Skollov är rent visuella: de minskar aldrig någons saldo.',
  'help.guide.school-holidays.tip.1':
    'Saknas din region? Din administratör kan sköta skollov för hand under Admin, Anpassning, Skollov.',
  // weekends
  'help.guide.weekends.title': 'Blockera helger och ange veckostart',
  'help.guide.weekends.goal': 'Hålla helger utanför räkningen och börja veckan på den dag du är van vid.',
  'help.guide.weekends.step.1': 'Öppna Inställningar.',
  'help.guide.weekends.step.2': 'Slå på Blockera Helger och välj vilka dagar som räknas som din helg.',
  'help.guide.weekends.step.3': 'Under Vecka börjar på väljer du måndag eller söndag.',
  'help.guide.weekends.result': 'Blockerade dagar är gråa i rutnätet och kan inte läggas in av misstag.',
  // leave-year
  'help.guide.leave-year.title': 'Ange ditt semesterår',
  'help.guide.leave-year.goal':
    'Räkna ditt saldo över ett räkenskapsår eller från anställningsdatum i stället för januari till december.',
  'help.guide.leave-year.step.1': 'Öppna Inställningar och leta upp Semesterår.',
  'help.guide.leave-year.step.2':
    'Välj Kalenderår, Räkenskapsår (med månad och dag det börjar) eller Anställningsdatum (med datumet du anställdes).',
  'help.guide.leave-year.result':
    'Saldo, använda dagar och överföring följer den perioden, och rutnätet börjar på dess första månad.',
  'help.guide.leave-year.tip.1':
    'Inställningen är personlig: i en ihopslagen plan behåller var och en sitt eget semesterår och sina siffror.',
  // carry-over
  'help.guide.carry-over.title': 'Föra över outnyttjade dagar',
  'help.guide.carry-over.goal': 'Lägga det som är kvar i slutet av en period till nästa.',
  'help.guide.carry-over.step.1': 'Öppna Inställningar.',
  'help.guide.carry-over.step.2': 'Slå på Överföring.',
  'help.guide.carry-over.result': 'Det överförda antalet räknas om över alla dina år och visas under saldot.',
  'help.guide.carry-over.tip.1': 'Att slå av det nollställer varje överfört saldo.',
  // invite
  'help.guide.invite.title': 'Planera tillsammans med någon',
  'help.guide.invite.goal':
    'Slå ihop din plan med en annan TREK-användare så att ni ser varandras lediga dagar i ett rutnät.',
  'help.guide.invite.step.1': 'Klicka på personikonen i panelen Personer.',
  'help.guide.invite.step.2': 'Välj användaren och skicka inbjudan.',
  'help.guide.invite.step.3': 'Hen får en avisering och accepterar. Tills dess visas inbjudan som väntande.',
  'help.guide.invite.result':
    'Båda planerna slås ihop: var och en har en färg, ni kan lägga in dagar åt varandra, och allt synkas live.',
  'help.guide.invite.tip.1':
    'För att upphäva en sammanslagning använder du Upplös i Inställningar. Allas poster återgår till den egna planen.',
  'help.guide.invite.tip.2':
    'Om den andra personen bara ska se dina dagar, dela din kalender i stället för att slå ihop.',
  // share-calendar
  'help.guide.share-calendar.title': 'Dela din kalender skrivskyddat',
  'help.guide.share-calendar.goal': 'Låta någon se när du är ledig utan att ge dem inflytande över din plan.',
  'help.guide.share-calendar.step.1': 'Klicka på delningsikonen i panelen Delade kalendrar.',
  'help.guide.share-calendar.step.2': 'Välj användaren och klicka på Dela. Ingen accept behövs.',
  'help.guide.share-calendar.step.3':
    'Kalendrar som delats med dig visas i samma panel; ögat döljer en, Sluta dela återkallar din.',
  'help.guide.share-calendar.result':
    'Dina lediga dagar visas som en färgad ring i deras rutnät. Inget du delar kan redigeras av dem.',
  'help.guide.share-calendar.tip.1':
    'Delning och sammanslagning är oberoende: du kan vara ihopslagen med en person och dela med andra.',
  'help.guide.share-calendar.tip.2': 'Håll muspekaren över en ringad dag för att se vem som är ledig och hur länge.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas är ditt reseavtryck på en världskarta: varje land som en resa tagit dig till är färglagt, och länderna från tiden före TREK lägger du till för hand. Zooma in för regioner, håll en bucketlista över platser du ännu vill se och läs av dina siffror i glaspanelen längst ner.',
  'help.ctx.atlas.bullet.1':
    'Kartan: besökta länder bär en färg som förblir deras, planerade länder har streckad kontur, bucketlist-länder en diagonal skraffering, allt annat är grått. Håll muspekaren över ett land för dess resor, platser samt första och senaste besök.',
  'help.ctx.atlas.bullet.2':
    'Sök högst upp: skriv ett land eller en plats. Väljer du ett land flyger kartan dit och öppnar dess popup; väljer du en plats landar du i dess region så att du kan markera den.',
  'help.ctx.atlas.bullet.3':
    'Visa planerade länder, uppe till höger: visar länderna för dina kommande resor. Reglaget syns bara så länge du har några.',
  'help.ctx.atlas.bullet.4':
    'Panelen längst ner: fliken Statistik med länder, resor, platser, städer, dagar, kontinenter och din svit; fliken Bucketlista med det som ännu väntar.',
  'help.ctx.atlas.bullet.5':
    'Regioner: från zoomnivå 5 växlar kartan till delstater och provinser, var och en klickbar för att markera eller ta bort.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: med tillägget anslutet bockar en panel till vänster om statistiken av önskningar och lägger till länder från dina inspelningar, aldrig utan din bekräftelse.',
  // mark-country
  'help.guide.mark-country.title': 'Markera ett land som besökt',
  'help.guide.mark-country.goal': 'Lägg till ett land du besökt före TREK, så att kartan och din räkning tar med det.',
  'help.guide.mark-country.step.1': 'Skriv landet i sökrutan högst upp på kartan.',
  'help.guide.mark-country.step.2': 'Välj det i listan. Kartan flyger dit och en popup öppnas för landet.',
  'help.guide.mark-country.step.3': 'Välj Markera som besökt.',
  'help.guide.mark-country.result':
    'Landet får sin färg på kartan och Länder räknar ett till. Färgen är permanent: att markera fler länder blandar aldrig om de övriga.',
  'help.guide.mark-country.tip.1':
    'Att klicka på ett grått land på kartan öppnar samma popup; sökningen är den säkra vägen för små länder.',
  'help.guide.mark-country.tip.2':
    'Ett land du markerar för hand räknas alltid som besökt, oavsett datumen på en resa dit.',
  // unmark-country
  'help.guide.unmark-country.title': 'Ta bort ett land du markerat',
  'help.guide.unmark-country.goal': 'Ta bort ett handmarkerat land från kartan igen.',
  'help.guide.unmark-country.step.1':
    'Sök landet och välj det, eller klicka på det på kartan. För ett land du själv markerat frågar popupen om det ska tas bort.',
  'help.guide.unmark-country.step.2': 'Bekräfta med Ta bort.',
  'help.guide.unmark-country.result': 'Landet blir grått igen och lämnar din räkning.',
  'help.guide.unmark-country.tip.1':
    'Bara handmarkerade länder kan tas bort så här. Ett land med resor eller platser stannar så länge de finns; Ta bort finns även i dess detaljkort i panelen när det markerats för hand.',
  // country-details
  'help.guide.country-details.title': 'Se vad du gjorde i ett land',
  'help.guide.country-details.goal': 'Öppna ett besökt land och hoppa till resorna som tog dig dit.',
  'help.guide.country-details.step.1': 'Sök ett land du har besökt.',
  'help.guide.country-details.step.2':
    'Välj det. Kartan flyger dit och panelen längst ner får ett kort med flagga, platser, resor och ett chip per resa.',
  'help.guide.country-details.result': 'Klicka på ett resechip för att öppna resan i planeraren.',
  'help.guide.country-details.tip.1':
    'Håller du muspekaren över landet på kartan ser du samma siffror plus första och senaste besök.',
  // planned-countries
  'help.guide.planned-countries.title': 'Visa länderna du ska till',
  'help.guide.planned-countries.goal':
    'Få upp länderna för dina kommande resor på kartan utan att räkna dem som besökta.',
  'help.guide.planned-countries.step.1':
    'Slå på Visa planerade länder uppe till höger. Siffran bredvid säger hur många som väntar.',
  'help.guide.planned-countries.step.2':
    'Sök ett planerat land och välj det: panelen säger Planerat och kartans tooltip visar när du åker.',
  'help.guide.planned-countries.result':
    'Planerade länder visas med streckad kontur, så att de aldrig ser ut som någonstans du redan varit. Reglaget minns ditt val.',
  'help.guide.planned-countries.tip.1':
    'Ett land räknas som besökt när resan dit har börjat; en pågående resa räknas också. Resor utan datum hålls helt utanför statistiken.',
  'help.guide.planned-countries.tip.2': 'Reglaget finns bara så länge du har kommande resor.',
  // regions
  'help.guide.regions.title': 'Markera en region',
  'help.guide.regions.goal': 'Finare än länder: markera delstaterna, provinserna eller prefekturerna du varit i.',
  'help.guide.regions.step.1':
    'Zooma in på ett land tills dess regioner syns, från zoomnivå 5. Att söka landet och välja det tar dig nära nog.',
  'help.guide.regions.step.2': 'Klicka på en region. Muspekaren visar namnet; popupen visar regionen och dess land.',
  'help.guide.regions.step.3': 'Välj Markera som besökt.',
  'help.guide.regions.result':
    'Regionen fylls med landets färg. Att markera en region räknar också landet som besökt om det inte redan var det.',
  'help.guide.regions.tip.1':
    'Att klicka på en besökt region erbjuder Ta bort, oavsett om du markerade den eller en plats satte dit den.',
  'help.guide.regions.tip.2': 'Regioner där du har riktiga platser markeras åt dig; där finns inget att göra.',
  // search-place
  'help.guide.search-place.title': 'Hitta en plats och markera dess region',
  'help.guide.search-place.goal':
    'Markera Bayern genom att söka på München, utan att veta vilken region en stad ligger i.',
  'help.guide.search-place.step.1':
    'Skriv en stad, ett landmärke eller en adress i sökrutan. Länder kommer först; matchande platser visas under dem under Platser.',
  'help.guide.search-place.step.2': 'Välj platsen. Kartan flyger dit och tar reda på vilken region punkten ligger i.',
  'help.guide.search-place.step.3':
    'Välj Markera som besökt för regionen, eller Lägg till på bucketlistan om den ännu väntar.',
  'help.guide.search-place.result':
    'Regionen är markerad, och med den landet. Länder utan regiondata i kartpaketet faller tillbaka på själva landet.',
  'help.guide.search-place.tip.1':
    'Platser kommer från samma sökning som överallt i TREK, så de följer den leverantör din admin ställt in.',
  // bucket-country
  'help.guide.bucket-country.title': 'Sätta ett land på bucketlistan',
  'help.guide.bucket-country.goal': 'Håll en bucketlista över länder direkt på kartan, skild från dem du varit i.',
  'help.guide.bucket-country.step.1': 'Sök landet och välj det, eller klicka på det på kartan.',
  'help.guide.bucket-country.step.2': 'Välj Lägg till på bucketlistan.',
  'help.guide.bucket-country.step.3':
    'Välj månad och år om du redan vet när, och bekräfta med Lägg till på bucketlistan.',
  'help.guide.bucket-country.result':
    'Landet ritas med diagonal skraffering i färgen det får när du väl är där, och det dyker upp i panelens flik Bucketlista.',
  'help.guide.bucket-country.tip.1': 'Samma popup erbjuder Ta bort från bucketlistan när landet väl står på listan.',
  'help.guide.bucket-country.tip.2':
    'En post per måldatum: samma land kan stå på listan för två olika månader, men inte två gånger för samma.',
  // bucket-place
  'help.guide.bucket-place.title': 'Lägga till en plats på bucketlistan',
  'help.guide.bucket-place.goal':
    'Spara en stad, en sevärdhet eller en adress du drömmer om, med koordinater och måldatum.',
  'help.guide.bucket-place.step.1': 'Öppna fliken Bucketlista i panelen längst ner.',
  'help.guide.bucket-place.step.2': 'Klicka på Lägg till plats.',
  'help.guide.bucket-place.step.3':
    'Skriv namnet och tryck på sökknappen; välj träffen så att platsen får koordinater. Att bara skriva ett namn och hoppa över sökningen funkar också.',
  'help.guide.bucket-place.step.4': 'Välj månad och år om du vill och klicka på Lägg till.',
  'help.guide.bucket-place.result':
    'Platsen ligger överst på din bucketlista med sitt måldatum; × bredvid tar bort den igen.',
  'help.guide.bucket-place.tip.1':
    'En önskan med koordinater är vad Dawarich kan bocka av åt dig senare, när dina inspelningar visar att du var där.',
  // stats
  'help.guide.stats.title': 'Läsa din statistik',
  'help.guide.stats.goal': 'Veta vad siffrorna i panelen räknar, och vad de inte räknar.',
  'help.guide.stats.step.1':
    'Länder är antalet olika länder du faktiskt varit i; planerade visas bredvid, inte i det. Resor, Platser och Dagar är summor över alla dina resor. Städer härleds ur dina platsers adresser, så det är en uppskattning.',
  'help.guide.stats.step.2':
    'Kontinenterna visar besökta länder per kontinent; Antarktis läggs till i raden när du väl varit där. Sedan din svit, år i följd med minst en resa, och hur många resor du gjort i år.',
  'help.guide.stats.result': 'Siffrorna följer dina resor medan du planerar dem; här behöver inget underhållas.',
  'help.guide.stats.tip.1':
    'Städer läses ur adresstexten, slås inte upp, så en kort adress som ”Osteria Francescana, Italy” eller en som slutar på en prefektur kan ge en region i stället för en stad.',
  'help.guide.stats.tip.2':
    'Handmarkerade länder räknas i Länder och kontinenterna, men tar inte med några resor, platser eller dagar.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Samlingar',
  'help.ctx.collections.summary':
    'Collections är ditt platsbibliotek utanför alla resor: namngivna listor med platser du hittat och vill behålla, varje plats med statusen Idé, Vill besöka eller Besökt. Platser kopieras in i och ut ur resor, aldrig länkas, så en lista och en resa ändrar aldrig varandra.',
  'help.ctx.collections.bullet.1':
    'Listpanelen till vänster: dina egna listor, de som delats med dig, inbjudningar som väntar på ett ja, Alla sparade som summan av allt du äger, och Ny lista plus filimporten högst upp.',
  'help.ctx.collections.bullet.2':
    'Huvudet för den öppna listan: dess färg, omslag, beskrivning och länkar, medlemmarna, och åtgärderna Redigera, Exportera och Dela till höger.',
  'help.ctx.collections.bullet.3':
    'Filterraden ovanför platserna: status, kategori, betyg och sortering, etikettfiltret, + för att lägga till en plats, reseimporten och Välj för massåtgärder.',
  'help.ctx.collections.bullet.4':
    'Platsrader: avatar, namn och adress, etiketter och kategori, och statusmärket till höger som växlar med ett klick.',
  'help.ctx.collections.bullet.5':
    'Kartan till höger: en nål per plats med koordinater, växlingen mellan lista och karta, sökrutan och etikettfiltret. Klickar du på en nål öppnas den platsen.',
  'help.ctx.collections.bullet.6':
    'Detaljpanelen: klicka på en rad för omslag, kategori, etiketter, status, beskrivning och länkar, med Redigera, Kopiera till resa och Ta bort från lista.',
  // create-list
  'help.guide.create-list.title': 'Skapa en lista',
  'help.guide.create-list.goal': 'Starta en ny namngiven lista, med en färg och ett omslag, redo för platser.',
  'help.guide.create-list.step.1': 'Klicka på Ny lista högst upp i listpanelen.',
  'help.guide.create-list.step.2':
    'Ge listan ett namn och välj en färg. Omslagsbild, beskrivning och länkar är valfria; du kan lägga till dem senare med Redigera.',
  'help.guide.create-list.step.3': 'Klicka på Skapa.',
  'help.guide.create-list.result':
    'Listan öppnas tom, med Lägg till en plats och Importera från en resa som de två sätten att fylla den.',
  'help.guide.create-list.tip.1':
    'Omslaget kan vara en egen uppladdning eller en bild hittad via Unsplash-sökningen i samma dialog.',
  // add-place
  'help.guide.add-place.title': 'Lägg till en plats',
  'help.guide.add-place.goal':
    'Hitta en plats och spara den i den öppna listan med namn, kategori, status och anteckningar i ett svep.',
  'help.guide.add-place.step.1': 'Klicka på + i filterraden ovanför platserna.',
  'help.guide.add-place.step.2':
    'Skriv platsen i sökfältet och välj ett resultat. Namn, adress och koordinater fylls i från det.',
  'help.guide.add-place.step.3':
    'Sätt statusen och, om du vill, en kategori, en beskrivning och länkar, och klicka sedan på Lägg till. Dialogen stannar öppen för nästa plats; Avbryt stänger den.',
  'help.guide.add-place.result': 'Platsen dyker upp i listan och, när den har koordinater, som en nål på kartan.',
  'help.guide.add-place.tip.1':
    'Inifrån en resa lägger Spara i samling i platsinspektören eller platsmenyn en reseplats på en lista utan att du lämnar resan.',
  'help.guide.add-place.tip.2':
    'Listan måste vara din eller en där du är redigerare eller admin; + finns inte på Alla sparade eller på en lista du bara ser.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Importera platser från en resa',
  'help.guide.import-from-trip.goal':
    'Ta en hel resas platser till en lista på en gång i stället för att spara dem en och en.',
  'help.guide.import-from-trip.step.1':
    'Klicka på importknappen med molnpilen i filterraden. På en tom lista sitter samma åtgärd bredvid Lägg till en plats.',
  'help.guide.import-from-trip.step.2': 'Välj en av dina resor.',
  'help.guide.import-from-trip.step.3':
    'Bocka för platserna du vill ha. Platser som redan finns på listan är gråade; de som ingen dag i resan innehåller börjar som valda. Bara nya döljer det du redan har.',
  'help.guide.import-from-trip.step.4':
    'Klicka på Importera. Knappen säger alltid hur många som är på väg att läggas till.',
  'help.guide.import-from-trip.result':
    'Platserna kopieras till listan med namn, adress, koordinater, beskrivning och kategori. Resan förblir som den var.',
  'help.guide.import-from-trip.tip.1':
    'Dubbletter på namn eller koordinater hoppas över automatiskt, så att importera två gånger gör ingen skada.',
  'help.guide.import-from-trip.tip.2':
    'Inne i en resas platslista erbjuder markeringsläget i stället Spara i samling för en handplockad uppsättning platser.',
  // place-status
  'help.guide.place-status.title': 'Sätt en plats status',
  'help.guide.place-status.goal': 'Håll koll på vad som är en idé, vad som står på kortlistan och var du har varit.',
  'help.guide.place-status.step.1': 'Klicka på statusmärket i högra änden av en platsrad. Idé blir Vill besöka.',
  'help.guide.place-status.step.2': 'Klicka igen för Besökt, och en gång till för att börja om på Idé.',
  'help.guide.place-status.result': 'Märket och dess färg ändras direkt; statusfiltret ovanför listan räknar med.',
  'help.guide.place-status.tip.1': 'Status är en Collections-sak: att kopiera en plats till en resa tar den inte med.',
  'help.guide.place-status.tip.2':
    'Från en resa visar Spara i lista ett statusmärke per lista som platsen finns på, och platspanelen har åtgärden Markera som besökt för ett urval.',
  // place-detail
  'help.guide.place-detail.title': 'Öppna en sparad plats',
  'help.guide.place-detail.goal': 'Se allt om en plats och agera på den: redigera, kopiera till en resa, ta bort.',
  'help.guide.place-detail.step.1':
    'Klicka på en platsrad. Detaljpanelen öppnas bredvid listan och kartan panorerar till platsen.',
  'help.guide.place-detail.step.2':
    'Längst ner sitter Redigera, Kopiera till resa och Ta bort från lista; kameran på omslaget byter det automatiska fotot mot ett eget.',
  'help.guide.place-detail.result':
    'Redigera låser upp namn, kategori, etiketter, adress, koordinater, beskrivning och länkar direkt i panelen.',
  'help.guide.place-detail.tip.1':
    'Omslaget hämtas automatiskt när platsen saknar egen bild. Din egen uppladdning kan vara JPG, PNG, GIF eller WebP upp till 20 MB.',
  'help.guide.place-detail.tip.2':
    'Medlemmar i en delad lista kan också lämna ett stjärnbetyg här, och betygsfiltret i filterraden använder snittet.',
  // labels
  'help.guide.labels.title': 'Gruppera platser med etiketter',
  'help.guide.labels.goal':
    'Ge en lista egna etiketter, till exempel stadsdelar eller dagar, utöver de gemensamma kategorierna.',
  'help.guide.labels.step.1': 'Öppna etiketthanteraren från etikettkontrollen i filterraden.',
  'help.guide.labels.step.2':
    'Skriv ett namn, välj en färg och klicka på Lägg till etikett. Byt namn, färg eller ta bort befintliga etiketter i samma dialog.',
  'help.guide.labels.step.3':
    'Slå på Välj, bocka för platserna och klicka på Tilldela etikett i markeringsfältet. En enskild plats tar också etiketter via Redigera i sin detaljpanel.',
  'help.guide.labels.step.4':
    'Välj en eller flera etiketter i filterraden för att begränsa listan och kartan till platser som bär någon av dem.',
  'help.guide.labels.result':
    'Etiketterade platser visar sina etiketter på raden; etikettfiltret finns för varje medlem, även läsare.',
  'help.guide.labels.tip.1':
    'Etiketter tillhör den enda lista de skapades i. Flyttar du en plats till en annan lista faller de bort.',
  'help.guide.labels.tip.2': 'Att hantera och tilldela etiketter kräver redigeringsrätt på listan.',
  // filter-select
  'help.guide.filter-select.title': 'Filtrera och välj platser',
  'help.guide.filter-select.goal': 'Begränsa listan och agera på många platser på en gång.',
  'help.guide.filter-select.step.1':
    'Använd rullgardinsmenyerna i filterraden: status, kategori, lägsta betyg och sorteringsordning. Var och en visar hur många platser den skulle lämna kvar.',
  'help.guide.filter-select.step.2': 'Klicka på Välj. Varje rad får en kryssruta och ett markeringsfält dyker upp.',
  'help.guide.filter-select.step.3':
    'Bocka för platser eller använd Välj alla för allt som just nu är filtrerat, och välj sedan Tilldela etikett, Flytta till lista, Duplicera till lista, Kopiera till resa eller Ta bort.',
  'help.guide.filter-select.result': 'Åtgärderna gäller hela urvalet på en gång. × till höger lämnar markeringsläget.',
  'help.guide.filter-select.tip.1':
    'Välj alla följer filtret, så att filtrera på Vill besöka och välja alla är det snabba sättet att agera på kortlistan.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Kopiera platser till en resa',
  'help.guide.copy-to-trip.goal': 'Gör sparade platser till stopp på en av dina resor.',
  'help.guide.copy-to-trip.step.1':
    'Slå på Välj och bocka för platserna, eller öppna en plats och använd Kopiera till resa i dess detaljpanel.',
  'help.guide.copy-to-trip.step.2': 'Klicka på Kopiera till resa i markeringsfältet.',
  'help.guide.copy-to-trip.step.3': 'Välj resan. Sökrutan begränsar en lång lista.',
  'help.guide.copy-to-trip.result':
    'Platserna hamnar i den resans platslista med namn, beskrivning, kategori, anteckningar, pris, koordinater, foto och taggar. Inget ändras i samlingen.',
  'help.guide.copy-to-trip.tip.1':
    'Läsare av en delad lista kan göra det här också; det kopierar ut ur listan, det ändrar den inte.',
  // share-list
  'help.guide.share-list.title': 'Dela en lista med någon',
  'help.guide.share-list.goal': 'Planera en lista tillsammans med andra på den här TREK, live.',
  'help.guide.share-list.step.1': 'Klicka på Dela i huvudet för din lista.',
  'help.guide.share-list.step.2': 'Välj användaren och en roll: Läsare, Redigerare eller Admin.',
  'help.guide.share-list.step.3':
    'Klicka på Skicka inbjudan. Personen visas som väntande inbjudan tills den accepterar inbjudan i sin listpanel.',
  'help.guide.share-list.result':
    'När den accepterats dyker listan upp under Delad för dem och varje ändring synkas live. Medlemmar och deras roller går att redigera i samma dialog.',
  'help.guide.share-list.tip.1':
    'Läsare kan titta, betygsätta och kopiera platser till sina egna resor. Redigerare lägger till och redigerar platser och etiketter. Admins kan även ta bort.',
  'help.guide.share-list.tip.2':
    'Bara ägaren bjuder in och tar bort personer; en medlem kan själv lämna en delad lista.',
  // export-list
  'help.guide.export-list.title': 'Exportera en lista som fil',
  'help.guide.export-list.goal': 'Ge en lista till någon på en annan TREK, eller ta med den till en kartapp.',
  'help.guide.export-list.step.1': 'Klicka på Exportera i listans huvud.',
  'help.guide.export-list.step.2':
    'Välj TREK-lista för en annan TREK, med etiketter och status, eller GPX för OsmAnd, Organic Maps, en Garmin och andra appar som läser vägpunkter.',
  'help.guide.export-list.result': 'Filen laddas ner. Vilken medlem som helst i en delad lista får exportera den.',
  'help.guide.export-list.tip.1':
    'En plats utan koordinater kan inte bli en GPX-vägpunkt; den utelämnas och TREK berättar hur många det var.',
  'help.guide.export-list.tip.2':
    'Betyg, medlemmar och uppladdade foton stannar kvar med avsikt; de hör till den här TREK, inte till listan.',
  // import-file
  'help.guide.import-file.title': 'Importera en lista från en fil',
  'help.guide.import-file.goal': 'Ta in en TREK-listfil eller en GPX-fil, som en ny lista eller in i en du har.',
  'help.guide.import-file.step.1': 'Klicka på importknappen med uppladdningspilen bredvid Ny lista i listpanelen.',
  'help.guide.import-file.step.2':
    'Välj filen. TREK visar vad den innehåller innan något händer: namnet, hur många platser och etiketter.',
  'help.guide.import-file.step.3':
    'Behåll Ny lista och ändra namnet om du vill, eller välj Lägg till i en lista för att lägga platserna i en lista du kan redigera, och klicka sedan på Importera.',
  'help.guide.import-file.result':
    'Du landar på listan med de importerade platserna. Att lägga till i en lista lägger bara till; platser som redan finns behåller status, anteckningar och etiketter.',
  'help.guide.import-file.tip.1':
    'Från en GPX blir varje namngiven vägpunkt en plats; spår är linjer och utelämnas, och förhandsvisningen säger hur många punkter det var.',
  'help.guide.import-file.tip.2':
    'En fil som varken är en TREK-lista eller en GPX avvisas med en orsak; en enstaka oläslig plats hoppas över, inte hela filen.',
  // edit-list
  'help.guide.edit-list.title': 'Redigera eller ta bort en lista',
  'help.guide.edit-list.goal': 'Ändra en listas namn, färg, omslag, beskrivning eller länkar, eller ta bort listan.',
  'help.guide.edit-list.step.1': 'Klicka på Redigera i listans huvud. Bara ägaren ser det.',
  'help.guide.edit-list.step.2':
    'Ändra vad du vill och klicka på Spara. Ta bort lista längst ner till vänster tar bort listan med alla dess platser, efter en bekräftelse.',
  'help.guide.edit-list.result': 'Huvudet tar den nya färgen, omslaget och beskrivningen direkt.',
  'help.guide.edit-list.tip.1':
    'Att ta bort en lista går inte att ångra. Exportera den först om du vill behålla en kopia.',
  // all-saved
  'help.guide.all-saved.title': 'Sök i hela ditt bibliotek',
  'help.guide.all-saved.goal': 'Se över varje lista du äger på en gång.',
  'help.guide.all-saved.step.1':
    'Klicka på Alla sparade i listpanelen. Den slår ihop platserna från varje lista du äger eller är delägare i.',
  'help.guide.all-saved.step.2':
    'Använd sökrutan och filtren som på vilken lista som helst; Välj fungerar här också, för att kopiera till en resa.',
  'help.guide.all-saved.result':
    'En vy över alla dina sparade platser, utan att lägga till eller importera, eftersom den inte har någon enskild lista att lägga dem på.',
  'help.guide.all-saved.tip.1': 'Etiketter är per lista, så etikettfiltret erbjuds inte på Alla sparade.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Journey',
  'help.ctx.journey.summary':
    'Journey är din resedagbok med fotona i första hand. Varje Journey är knuten till en eller flera resor och växer dag för dag ur inlägg med berättelse, foton, humör och väder. Den här skärmen listar dina Journeys; öppna en för att skriva.',
  'help.ctx.journey.bullet.1':
    'Bannern högst upp visar den Journey som pågår, eller din senaste, med antal inlägg, foton och platser. Fortsätt skriva öppnar den på idag.',
  'help.ctx.journey.bullet.2':
    'Nedanför ett kort per Journey med omslag, undertitel, datum och antal. Klicka på ett kort för att öppna det.',
  'help.ctx.journey.bullet.3': 'Det sista kortet i rutnätet, Skapa en ny Journey, startar en från dina resor.',
  // create-journey
  'help.guide.create-journey.title': 'Skapa en Journey',
  'help.guide.create-journey.goal': 'Starta en dagbok för en resa, med resans platser redan väntande som förslag.',
  'help.guide.create-journey.step.1': 'Klicka på Skapa en ny Journey, det sista kortet i rutnätet.',
  'help.guide.create-journey.step.2':
    'Ge den ett namn och, om du vill, en undertitel, och bocka sedan för de resor den hör till. Räknaren säger hur många platser som följer med.',
  'help.guide.create-journey.step.3': 'Klicka på Skapa Journey.',
  'help.guide.create-journey.result':
    'Dagboken öppnas. Varje plats i de länkade resorna ligger i tidslinjen som ett förslag, ett per dag den står på, redo att skrivas in.',
  'help.guide.create-journey.tip.1': 'Fler resor kan länkas senare under Journey Inställningar.',
  'help.guide.create-journey.tip.2': 'En Journey utan resor fungerar också; då lägger du till inlägg för hand.',
  // open-journey
  'help.guide.open-journey.title': 'Öppna en Journey',
  'help.guide.open-journey.goal': 'Kom in i en dagbok, och vet var den öppnas.',
  'help.guide.open-journey.step.1':
    'Klicka på ett kort. Varje kort visar omslaget, datumen och hur många inlägg, foton och platser din Journey rymmer.',
  'help.guide.open-journey.result':
    'En Journey som pågår öppnas på idag, eller på det sista inlägget före idag när inget är skrivet ännu; en avslutad öppnas i början.',
  'help.guide.open-journey.tip.1':
    'Omslaget är det första fotot i din Journey om du inte väljer ett under Journey Inställningar.',
  // continue-writing
  'help.guide.continue-writing.title': 'Fortsätt den Journey som pågår',
  'help.guide.continue-writing.goal': 'Hoppa rakt in på dagens sida i den Journey du är på.',
  'help.guide.continue-writing.step.1':
    'Klicka på Fortsätt skriva i bannern högst upp. Den visar den Journey som pågår, eller den senaste när ingen pågår.',
  'help.guide.continue-writing.result':
    'Dagboken öppnas på idag, eller på det sista inlägget före idag när inget är skrivet ännu.',
  'help.guide.continue-writing.tip.1':
    'Bannern föreslår också en resa som inte har någon Journey ännu; Stäng döljer det förslaget.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Dagbok',
  'help.ctx.journey-detail.summary':
    'En öppen Journey: tidslinjen till vänster, dag för dag, och kartan till höger med varje inlägg och de länkade resornas platser. Allt som lägger till i dagboken sitter högst upp; sidhuvudet rymmer antalen, Studio, förslagsreglaget och Journey Inställningar.',
  'help.ctx.journey-detail.bullet.1':
    'Sidhuvud: omslag, titel och undertitel, antal dagar, platser, inlägg och foton, och till höger Studio, förslagsreglaget och Journey Inställningar.',
  'help.ctx.journey-detail.bullet.2':
    'Verktygsfält: flikarna Tidslinje och Album, Sök i den här resan och Lägg till inlägg.',
  'help.ctx.journey-detail.bullet.3':
    'Tidslinje: en sektion per dag med ett + för att lägga till ett inlägg den dagen; inläggskort med foton, humör, väder och berättelse; förslag från resorna i en ljusare stil med Avfärda det här förslaget.',
  'help.ctx.journey-detail.bullet.4':
    'Karta: inlägg som nålar, sammanbundna i datumordning av en streckad linje, resornas platser och alla GPX-spår som importerats till de resorna.',
  'help.ctx.journey-detail.bullet.5':
    'Journey Inställningar: omslag, namn och undertitel, spår på kartan, fält i inlägget, avfärdade förslag, länkade resor, medverkande, offentlig delning, arkivering och borttagning.',
  'help.ctx.journey-detail.bullet.6':
    'Två runda knappar svävar över en lång tidslinje: tillbaka till toppen, och hoppa till det sista inlägget.',
  // add-entry
  'help.guide.add-entry.title': 'Skriv ett inlägg',
  'help.guide.add-entry.goal': 'Lägg till en dags berättelse med titel, text, humör och väder.',
  'help.guide.add-entry.step.1':
    'Klicka på Lägg till inlägg i verktygsfältet, eller på + i en dags rubrik för att börja på den dagen.',
  'help.guide.add-entry.step.2':
    'Ge ögonblicket ett namn och skriv berättelsen. Verktygsfältet ovanför texten lägger till fetstil, kursiv, rubriker, citat, länkar och listor i Markdown.',
  'help.guide.add-entry.step.3':
    'Välj ett humör och vädret, kontrollera datumet och fäst en plats om du vill: sök en plats eller använd din nuvarande position.',
  'help.guide.add-entry.step.4': 'Klicka på Spara.',
  'help.guide.add-entry.result':
    'Inlägget dyker upp på sin dag i tidslinjen och som en nål på kartan. Dess antal uppdateras i sidhuvudet.',
  'help.guide.add-entry.tip.1': 'Att skriva in i ett förslag är samma redigerare, med platsen redan satt.',
  'help.guide.add-entry.tip.2':
    'Taggarna längst ner är fri text, dold pärla eller bästa måltid, och sökningen hittar dem.',
  // entry-photos
  'help.guide.entry-photos.title': 'Lägg till foton och videor i ett inlägg',
  'help.guide.entry-photos.goal': 'Sätt bilder på en dag; den första blir inläggets omslag.',
  'help.guide.entry-photos.step.1': 'Öppna ett inläggs meny med ⋯ på dess kort och välj Redigera.',
  'help.guide.entry-photos.step.2':
    'Klicka på Ladda upp foton och välj filerna. Från album tar bilder som redan finns i din Journeys album; External photos söker i ett anslutet Immich- eller Synology-bibliotek för den dagen.',
  'help.guide.entry-photos.step.3':
    'Håll muspekaren över en bild för Gör 1:a för att välja omslag, och klicka sedan på Spara.',
  'help.guide.entry-photos.result': 'Fotona syns på kortet och i albumet; det första är miniatyren överallt.',
  'help.guide.entry-photos.tip.1':
    'Videor läggs på ett inlägg på samma sätt: mp4, m4v, webm eller mov upp till 500 MB, lagrade som de laddades upp.',
  'help.guide.entry-photos.tip.2':
    'HEIC-filer från en iPhone konverteras till JPEG vid uppladdning, vilket tar bort deras GPS- och kamerametadata.',
  // suggestions
  'help.guide.suggestions.title': 'Använd eller avfärda förslagen',
  'help.guide.suggestions.goal':
    'Gör dina resors platser till inlägg, och rensa bort dem du inte kommer att skriva om.',
  'help.guide.suggestions.step.1':
    'Ett förslag är ett ljusare kort med platsnamnet i kursiv. Klicka på det för att öppna redigeraren med plats och dag redan satta.',
  'help.guide.suggestions.step.2':
    'Klicka på Avfärda det här förslaget på ett kort du inte kommer att använda. Det lämnar tidslinjen utan att tas bort, och resesynken erbjuder det inte igen.',
  'help.guide.suggestions.step.3':
    'Ångrat dig? Journey Inställningar visar hur många som är avfärdade, och Hämta tillbaka avfärdade förslag tar tillbaka dem alla.',
  'help.guide.suggestions.result':
    'Tidslinjen rymmer bara det du tänker skriva; reglaget i sidhuvudet döljer alla förslag på en gång medan du läser.',
  'help.guide.suggestions.tip.1': 'En plats som sträcker sig över två dagar ger ett förslag på var och en av dem.',
  'help.guide.suggestions.tip.2': 'Förslag räknas aldrig i statistiken; bara skrivna inlägg gör det.',
  // add-on-day
  'help.guide.add-on-day.title': 'Lägg till ett inlägg på en tidigare dag',
  'help.guide.add-on-day.goal': 'Skriv om en dag som redan passerat utan att rätta datumet efteråt.',
  'help.guide.add-on-day.step.1': 'Klicka på + i den dagens rubrik.',
  'help.guide.add-on-day.step.2': 'Redigeraren öppnas med det datumet satt. Skriv och Spara som vanligt.',
  'help.guide.add-on-day.result': 'Inlägget landar direkt på rätt dag.',
  'help.guide.add-on-day.tip.1': 'Inom en dag flyttar pilarna i ett inläggs meny det tidigare eller senare.',
  // pros-cons
  'help.guide.pros-cons.title': 'Lägg till ett omdöme',
  'help.guide.pros-cons.goal': 'Summera en dag med vad som var toppen och vad som inte var det.',
  'help.guide.pros-cons.step.1':
    'I redigeraren hittar du För- och nackdelar under berättelsen. Skriv en punkt i Fördelar eller Nackdelar och använd Lägg till en annan för nästa.',
  'help.guide.pros-cons.step.2': 'Spara. Omdömet visas på kortet som två korta listor.',
  'help.guide.pros-cons.result': 'Tumme upp och tumme ner med en blick, under berättelsen.',
  'help.guide.pros-cons.tip.1':
    'En Journey som inte använder omdömen kan stänga av sektionen under Fält i inlägget i Journey Inställningar.',
  // search-journey
  'help.guide.search-journey.title': 'Hitta något i en lång dagbok',
  'help.guide.search-journey.goal': 'Kom till inlägget du menar utan att skrolla genom veckor.',
  'help.guide.search-journey.step.1':
    'Skriv i Sök i den här resan i verktygsfältet. Tidslinjen filtreras medan du skriver, över titlar, berättelser, platser och taggar. Accenter och skiftläge spelar ingen roll.',
  'help.guide.search-journey.step.2':
    'Förslagsreglaget i sidhuvudet döljer de oskrivna korten medan du läser. När tidslinjen blivit lång svävar två runda knappar ovanför dess nederkant: tillbaka till toppen, och hoppa till det sista inlägget.',
  'help.guide.search-journey.result': 'Bara matchande inlägg blir kvar; töm rutan för att se allt igen.',
  'help.guide.search-journey.tip.1':
    'En Journey som pågår öppnas på idag, så den aktuella sidan är oftast redan i bild.',
  'help.guide.search-journey.tip.2':
    'Taggar räknas också: att söka på dold pärla hittar varje inlägg som taggats med den.',
  // gallery-map
  'help.guide.gallery-map.title': 'Bläddra i albumet och kartan',
  'help.guide.gallery-map.goal': 'Se hela din Journey som bilder, och som platser på kartan.',
  'help.guide.gallery-map.step.1':
    'Växla till Album i verktygsfältet: varje foto i varje inlägg, plus bilder som laddats upp direkt till albumet. Klicka på en för lightboxen.',
  'help.guide.gallery-map.step.2':
    'Kartan till höger visar inläggen som nålar i datumordning, de länkade resornas platser och alla GPX-spår som importerats till de resorna, i den färg spåret har i planeraren.',
  'help.guide.gallery-map.result':
    'Håll muspekaren över ett spår för dess namn. Den streckade linjen mellan inläggen ritas av TREK; ett spår är rutten du faktiskt spelade in.',
  'help.guide.gallery-map.tip.1': 'Spår kan stängas av för en Journey under Journey Inställningar.',
  'help.guide.gallery-map.tip.2':
    'Albumfoton med en plats syns även på den offentliga kartan, när både Album och Karta delas.',
  // entry-fields
  'help.guide.entry-fields.title': 'Stäng av fält i inlägget',
  'help.guide.entry-fields.goal': 'Håll redigeraren till det din Journey använder.',
  'help.guide.entry-fields.step.1': 'Öppna Journey Inställningar från sidhuvudet.',
  'help.guide.entry-fields.step.2': 'Under Fält i inlägget stänger du av Humör, Väder eller För- och nackdelar.',
  'help.guide.entry-fields.result':
    'Redigeraren slutar fråga efter dem. Inget skrivet går förlorat: att slå på ett fält igen tar fram de sparade värdena, och en delad dagbok döljer samma fält.',
  'help.guide.entry-fields.tip.1': 'Reglagen gäller per Journey, så en jobbresa och en semester kan skilja sig åt.',
  // link-trip
  'help.guide.link-trip.title': 'Länka en resa till',
  'help.guide.link-trip.goal': 'Ta in en andra resas platser i dagboken som förslag.',
  'help.guide.link-trip.step.1': 'Öppna Journey Inställningar från sidhuvudet.',
  'help.guide.link-trip.step.2': 'Under de länkade resorna klickar du på Lägg till resa.',
  'help.guide.link-trip.step.3': 'Välj resan.',
  'help.guide.link-trip.result':
    'Dess platser kommer in i tidslinjen som förslag på sina dagar, och dess GPX-spår läggs till på kartan.',
  'help.guide.link-trip.tip.1': 'Krysset × bredvid en länkad resa avlänkar den igen; inlägg du skrivit blir kvar.',
  'help.guide.link-trip.tip.2': 'Inlägg med en dag räknas bara en gång, hur många resor som än täcker den dagen.',
  // share-public
  'help.guide.share-public.title': 'Dela din Journey offentligt',
  'help.guide.share-public.goal': 'Ge personer utan TREK-konto en skrivskyddad länk.',
  'help.guide.share-public.step.1': 'Öppna Journey Inställningar och leta upp Offentlig delning.',
  'help.guide.share-public.step.2': 'Klicka på Skapa en delningslänk.',
  'help.guide.share-public.step.3':
    'Välj vad besökare ser: Tidslinje, Album och Karta är separata reglage. Kopiera lägger länken i urklipp.',
  'help.guide.share-public.result':
    'Alla med länken ser de aktiverade sektionerna och inget annat; fält du stängt av under Fält i inlägget förblir dolda även där.',
  'help.guide.share-public.tip.1':
    'Foton visas på den offentliga kartan bara när både Album och Karta är på; med Karta av rensas deras koordinater bort innan de lämnar servern.',
  'help.guide.share-public.tip.2': 'Ta bort länken på samma ställe för att avsluta delningen.',
  // contributors
  'help.guide.contributors.title': 'Skriv tillsammans',
  'help.guide.contributors.goal': 'Låt en medresenär lägga till egna inlägg och foton.',
  'help.guide.contributors.step.1': 'Öppna Journey Inställningar och skrolla till de medverkande.',
  'help.guide.contributors.step.2': 'Klicka på Bjud in medverkande och sök användaren på namn eller e-post.',
  'help.guide.contributors.step.3': 'Välj en roll och bekräfta.',
  'help.guide.contributors.result':
    'Din Journey dyker upp i deras lista och deras inlägg bär deras namn. Ta bort en medverkande med krysset × bredvid personen.',
  'help.guide.contributors.tip.1':
    'Medverkande är för personer på den här TREK-servern. För alla andra finns den offentliga länken.',
  // studio
  'help.guide.studio.title': 'Lägg ut din Journey som en fotobok',
  'help.guide.studio.goal': 'Gör dagboken till utskrivbara sidor.',
  'help.guide.studio.step.1': 'Klicka på Studio i sidhuvudet. Designern öppnas ovanpå din Journey.',
  'help.guide.studio.step.2':
    'Namnet på din Journey till vänster i toppfältet är vägen tillbaka; det släpper av dig där du var.',
  'help.guide.studio.result':
    'Sidlisten till vänster, uppslaget på arbetsbänken, egenskaperna till höger. Auto layout bygger boken av dina inlägg; Export gör en tryckfärdig PDF.',
  'help.guide.studio.tip.1': 'Studio behöver ett fönster som är minst 1024 px brett och erbjuds inte på en telefon.',
  'help.guide.studio.tip.2':
    'Boken ärver din Journeys åtkomst: den som får läsa din Journey får öppna den, den som får redigera får spara.',
  // archive-journey
  'help.guide.archive-journey.title': 'Arkivera eller ta bort en Journey',
  'help.guide.archive-journey.goal': 'Stäng en avslutad Journey, eller ta bort en för gott.',
  'help.guide.archive-journey.step.1': 'Öppna Journey Inställningar.',
  'help.guide.archive-journey.step.2':
    'Längst ner avslutar Arkivera Journey den och markerar den som arkiverad; Återställ Journey tar tillbaka den. Ta bort raderar den med alla inlägg och foton, efter en bekräftelse.',
  'help.guide.archive-journey.result':
    'En arkiverad Journey förblir läsbar och delbar; den öppnas bara inte längre på idag.',
  'help.guide.archive-journey.tip.1':
    'Borttagning kan inte ångras, och den rör inte resorna som din Journey var länkad till.',
  'help.guide.archive-journey.tip.2': 'Omslag, namn och undertitel finns i samma dialog, högst upp.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio lägger ut en journey som en fotobok för tryck. Det öppnas ovanpå dagboken: sidlisten och innehållet till vänster, uppslaget du arbetar med i mitten, dess egenskaper till höger. Auto layout bygger ett första utkast av dina inlägg; allt därefter är ditt att flytta, beskära och styla om, med ångra för varje steg.',
  'help.ctx.journey-studio.bullet.1':
    'Toppraden: Back to the journey, Book view, Undo och Redo, Page format, Auto layout och Export. Märket Sparat bredvid titeln talar om när boken är lagrad.',
  'help.ctx.journey-studio.bullet.2':
    'Listen till vänster med fem sektioner: Pages, Content (journeyns foton och inlägg), Elements (text, former, linjer, rutnät, ramar, ikoner), Resa (kartor, länder, flaggor och märken byggda av journeyn) och Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Arbetsytan: det aktuella uppslaget med sitt utfall och sina skyddsmarginaler, zoomraden under, Fit to view och Ladda ner det här uppslaget till höger.',
  'help.ctx.journey-studio.bullet.4':
    'Properties till höger: position och storlek, beskärning och fokuspunkt, fyllning eller anpassning, utseende, hörn, ram, lagerordning och lås för det som är markerat; sidnummer och dokumentet när inget är det.',
  'help.ctx.journey-studio.bullet.5':
    'Boken har formen av en bunden bok: omslag, en enskild första sida, uppslagen, en enskild sista sida och baksidan. Sidnumren räknas från första sidan och trycks som de visas.',
  'help.ctx.journey-studio.bullet.6':
    'Flera personer kan designa samtidigt: alla ser de andras pekare med deras namn, och att spara en version som någon annan har ändrat kommer tillbaka som en konflikt i stället för att skriva över deras arbete.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Bygg boken automatiskt',
  'help.guide.studio-auto-layout.goal': 'Få ett komplett första utkast av dagbokens inlägg och foton med ett klick.',
  'help.guide.studio-auto-layout.step.1': 'Klicka på Auto layout i toppraden.',
  'help.guide.studio-auto-layout.step.2':
    'Välj Hela boken: det ersätter varje sida men behåller din titel och sidinställning. Detta uppslag bygger bara om det som är på skärmen och erbjuds på ett uppslag som kom från ett inlägg.',
  'help.guide.studio-auto-layout.step.3':
    'Titta igenom sidlisten. Undo tar tillbaka hela layouten om du föredrog det du hade.',
  'help.guide.studio-auto-layout.result':
    'Ett uppslag per inlägg, i ordning, med dess foton, titel och berättelse placerade åt dig. Varje element följer fortfarande sitt inlägg tills du redigerar det.',
  'help.guide.studio-auto-layout.tip.1': 'Båda valen är vanliga ångra-steg, så prova dem fritt.',
  'help.guide.studio-auto-layout.tip.2':
    'Ett element som Auto layout knutit till ett inlägg hänger med i ändringar av det inlägget tills du rör det i Properties; det bryter kopplingen.',
  // studio-pages
  'help.guide.studio-pages.title': 'Lägg till, flytta och ta bort uppslag',
  'help.guide.studio-pages.goal': 'Forma boken sida för sida.',
  'help.guide.studio-pages.step.1':
    'Öppna Pages i listen. Miniatyrerna är boken i ordning: omslag, första sida, uppslag, sista sida, baksida.',
  'help.guide.studio-pages.step.2':
    'Lägg till uppslag längst ner lägger ett nytt före sista sidan; plustecknet mellan två miniatyrer infogar ett precis där.',
  'help.guide.studio-pages.step.3':
    'Håll muspekaren över en miniatyr för dess åtgärder: Flytta tidigare, Flytta senare, Duplicera uppslag och Ta bort uppslag. Klicka på en miniatyr för att öppna det uppslaget på arbetsytan.',
  'help.guide.studio-pages.result':
    'Omslaget, första och sista sidan och baksidan stannar där de är; nya uppslag hamnar alltid mellan dem.',
  'help.guide.studio-pages.tip.1': 'Book view i toppraden visar hela boken som ark, så som den kommer att bindas.',
  'help.guide.studio-pages.tip.2': 'Sidnummer slås på under Dokument i Properties, med inget markerat.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Använd en layout på ett uppslag',
  'help.guide.studio-layouts.goal': 'Ge ett uppslag ett färdigt arrangemang av foto- och textramar.',
  'help.guide.studio-layouts.step.1':
    'Öppna Layouts i listen. Tretton uppslagslayouter och en separat uppsättning för omslaget, baksidan och de enskilda sidorna.',
  'help.guide.studio-layouts.step.2':
    'Klicka på en. Uppslaget på arbetsytan tar dess ramar; foton och text du redan hade hälls in i dem.',
  'help.guide.studio-layouts.result':
    'Tomma ramar väntar på innehåll: dra ett foto från Content till en, eller använd Add to this page.',
  'help.guide.studio-layouts.tip.1': 'En layout är ett ångra-steg som vilket annat som helst.',
  // studio-content
  'help.guide.studio-content.title': 'Lägg foton och inlägg på en sida',
  'help.guide.studio-content.goal': 'Ta journeyns eget material till uppslaget.',
  'help.guide.studio-content.step.1':
    'Öppna Content i listen. Photos listar varje bild i journeyn; Entries listar inläggen med deras text.',
  'help.guide.studio-content.step.2':
    'Dra ett foto till uppslaget, eller till en tom ram, eller klicka på Add to this page under det. Ladda upp foton lägger till bilder som ännu inte finns i journeyn.',
  'help.guide.studio-content.step.3':
    'Under ett inlägg lägger Title, Story och Place den texten på sidan som ett textelement; Datum och koordinaterna kommer som märken, och inläggets foton listas direkt där.',
  'help.guide.studio-content.result':
    'Ett släppt foto blir ett fotoelement; text fortsätter följa inlägget tills du redigerar den.',
  'help.guide.studio-content.tip.1': 'Sökrutan högst upp i Content filtrerar båda listorna.',
  'help.guide.studio-content.tip.2':
    'Att släppa en fil från skrivbordet på arbetsytan laddar upp och placerar den i ett svep.',
  // studio-elements
  'help.guide.studio-elements.title': 'Lägg till text, former och ikoner',
  'help.guide.studio-elements.goal': 'Dekorera ett uppslag bortom foton och berättelser.',
  'help.guide.studio-elements.step.1': 'Öppna Elements i listen.',
  'help.guide.studio-elements.step.2':
    'Klicka på en textstil för en rubrik eller bildtext, en form, en linje, ett rutnät, en tom ram med en ramstil, eller en ikon från det sökbara biblioteket. Var och en hamnar mitt på uppslaget, redo att flyttas.',
  'help.guide.studio-elements.result':
    'Dubbelklicka på ett textelement för att skriva i det; Properties rymmer typsnitt, vikt, storlek, avstånd och justering.',
  'help.guide.studio-elements.tip.1': 'Ramar är tomma fotoplatser: släpp i en bild senare.',
  // studio-travel
  'help.guide.studio-travel.title': 'Lägg till en karta, flaggor och siffror',
  'help.guide.studio-travel.goal': 'Gör journeyn själv till siffror på sidan.',
  'help.guide.studio-travel.step.1': 'Öppna Resa i listen.',
  'help.guide.studio-travel.step.2':
    'Välj vad som ska läggas till: en ruttkarta över inläggen, landkonturer, en landlista eller ett landrutnät, flaggor, ett datum-, dag- eller avståndsmärke, eller en sammanfattning av hela resan. Var och en byggs av journeyns data och uppdateras med den.',
  'help.guide.studio-travel.result':
    'Elementet dyker upp på uppslaget; Properties justerar dess stil, och kartans område.',
  'help.guide.studio-travel.tip.1':
    'Märken följer inlägget som uppslaget kom från, så ett datummärke på ett automatiskt utlagt uppslag visar redan den dagen.',
  // studio-properties
  'help.guide.studio-properties.title': 'Redigera det du markerat',
  'help.guide.studio-properties.goal': 'Flytta, beskär, styla och ordna ett element i lager med inspektören.',
  'help.guide.studio-properties.step.1':
    'Klicka på ett element på uppslaget. Handtag dyker upp för storlek och rotation; dra det för att flytta det.',
  'help.guide.studio-properties.step.2':
    'Properties till höger följer markeringen: position och storlek, Crop med fokuspunkten som avgör vad som stannar i ramen, Fyllning eller anpassning, Look-filter, Corner-radie, Ram, lagerordning och Lock.',
  'help.guide.studio-properties.step.3':
    'Duplicera och Delete sitter högst upp i inspektören; Undo i toppraden ångrar vad som helst av det.',
  'help.guide.studio-properties.result':
    'Ett låst element kan inte längre greppas på sidan, vilket håller en färdig layout säker medan du arbetar runt den.',
  'help.guide.studio-properties.tip.1': 'Skift-klick markerar flera element; inspektören redigerar dem då tillsammans.',
  'help.guide.studio-properties.tip.2':
    'Att redigera ett element som Auto layout placerat bryter dess koppling till inlägget; det slutar följa senare ändringar av det inlägget.',
  // studio-format
  'help.guide.studio-format.title': 'Välj sidformat',
  'help.guide.studio-format.goal': 'Ställ in storleken boken ska tryckas i, innan layouten beror på den.',
  'help.guide.studio-format.step.1': 'Klicka på Page format i toppraden.',
  'help.guide.studio-format.step.2':
    'Välj Square 21 × 21 cm, Square 30 × 30 cm, A4 eller A5 landscape eller portrait, eller ange en egen bredd och höjd i millimeter. Utfall och Skyddszon sitter under.',
  'help.guide.studio-format.result':
    'Varje uppslag ritas i den storleken, med 3 mm utfall och 5 mm skyddsmarginal som standard.',
  'help.guide.studio-format.tip.1':
    'Ändra formatet först, kör sedan Auto layout; layouten byggs för den storlek den hittar.',
  'help.guide.studio-format.tip.2': 'Fråga ditt tryckeri efter deras utfalls- och skyddsvärden och ange dem.',
  // studio-export
  'help.guide.studio-export.title': 'Exportera boken som PDF',
  'help.guide.studio-export.goal': 'Få en tryckfärdig fil, eller en att läsa på skärmen.',
  'help.guide.studio-export.step.1': 'Klicka på Export i toppraden.',
  'help.guide.studio-export.step.2':
    'Välj Enkelsidor, ett blad per ark i läsordning, vilket är vad ett tryckeri vill ha, eller Uppslag, två sidor i taget så som boken öppnas. Skärmärken lägger till utfallet på varje kant och markerar var det ska skäras.',
  'help.guide.studio-export.step.3':
    'Klicka på Utskriftsvy. Din webbläsare öppnar sidorna och Spara som PDF gör dem till filen.',
  'help.guide.studio-export.result': 'En PDF med så många ark som dialogrutan angav, i det sidformat du ställt in.',
  'help.guide.studio-export.tip.1': 'Att göra PDF:en fungerar bara på dator, precis som Studio självt.',
  'help.guide.studio-export.tip.2':
    'För ett korrektur, exportera Uppslag utan skärmärken; för tryckeriet, Enkelsidor med dem.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Återanvänd ett uppslag i en annan bok',
  'help.guide.studio-spread-file.goal': 'Ta med en design du gillar från en journeys bok till en annan.',
  'help.guide.studio-spread-file.step.1':
    'Med uppslaget på arbetsytan, klicka på Ladda ner det här uppslaget i högra änden av zoomraden. Filen innehåller designen, inte fotografierna.',
  'help.guide.studio-spread-file.step.2':
    'I den andra boken, öppna Pages och klicka på Importera bredvid Lägg till uppslag, välj sedan filen.',
  'help.guide.studio-spread-file.result':
    'Uppslaget kommer med sina ramar och textstilar; släpp den nya journeyns foton i ramarna.',
  'help.guide.studio-spread-file.tip.1': 'En fil som inte är en uppslagsdesign avvisas med en anledning.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Inställningar',
  'help.ctx.settings.summary':
    'Dina personliga inställningar, en flik per ämne i sidopanelen till vänster. De flesta reglage slår igenom i samma stund du växlar dem; ett formulär med en Spara-knapp längst ner väntar på den. Inget här ändrar någon annans TREK.',
  'help.ctx.settings.bullet.1':
    'Sidopanelen till vänster: Visning, Appearance, Karta, Meddelanden, Integrationer, Offline och Konto. Tillägg dyker upp så snart ett är installerat, Om på en TREK du kör själv.',
  'help.ctx.settings.bullet.2':
    'Visning är språk, enheter, valuta och vad appen öppnar med; Appearance är tema, färger, textstorlek och översiktens widgetar.',
  'help.ctx.settings.bullet.3':
    'Karta väljer renderaren och dess stil; Meddelanden kanalerna som når dig; Integrationer fotobibliotek, API-nycklar och MCP; Offline vad appen behåller på den här enheten.',
  'help.ctx.settings.bullet.4':
    'Konto rymmer din profil, lösenord, tvåfaktorsautentisering, inloggningsnycklar och borttagningen av ditt konto.',
  'help.ctx.settings-display.title': 'Visning',
  'help.ctx.settings-display.summary':
    'Språk, enheter och valuta, hur kartan och bokningarna beter sig, och vad TREK öppnar med. Varje ändring här slår igenom direkt.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: gränssnittets språk, tidsformatet, visningsvalutan samt avstånds- och temperaturenheter.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: bokningsrutter alltid på kartan, Utforska platser-pillret, ruttoptimering från ditt boende, blurrade bokningskoder och etiketter på bokningsrutter.',
  'help.ctx.settings-display.bullet.3':
    'Start: om TREK öppnar på översikten eller på den aktiva resan, och vilken flik i en resa som kommer upp först.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Hur TREK ser ut på det här kontot: ljust eller mörkt, accentfärgen, glas och rörelse, textstorlek och vilka widgetar översikten visar. Allt slår igenom live, på varje enhet du loggar in på.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Ljust, Mörkt eller Auto, och Color scheme med en egen Custom accent.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density och Text size, med avancerade storlekar per nivå.',
  'help.ctx.settings-appearance.bullet.3': 'Dashboard widgets: ett reglage per widget, separat för Desktop och Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults längst ner ställer tillbaka allt.',
  'help.ctx.settings-map.title': 'Karta',
  'help.ctx.settings-map.summary':
    'Vilken motor som ritar kartorna och i vilken stil. Leaflet är den klassiska rasterkartan, MapLibre ritar vektorrutor utan någon token, Mapbox lägger till 3D-byggnader och terräng med din egen token.',
  'help.ctx.settings-map.bullet.1':
    'Kartleverantör: Leaflet, MapLibre eller Mapbox, var och en med en rad om vad den behöver.',
  'help.ctx.settings-map.bullet.2':
    'Kartstil och Kartmall: rutornas utseende, plus den token eller nyckel en leverantör ber om.',
  'help.ctx.settings-map.bullet.3':
    'Högkvalitetsläge för kantutjämning och globprojektionen; Spara karta skriver valet.',
  'help.ctx.settings-notifications.title': 'Meddelanden',
  'help.ctx.settings-notifications.summary':
    'Var TREK når dig utanför appen: ett ntfy-ämne, en webhook eller en kanal som ett tillägg tillhandahåller. Under kanalerna avgör en rad per händelse vad som går vart.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: ämnet, en valfri egen server och en valfri åtkomsttoken, med Test för att skicka ett på en gång.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: en URL som tar emot varje händelse som JSON, med Test.',
  'help.ctx.settings-notifications.bullet.3':
    'Preferensraderna: per händelse, vilken kanal som är på. Tilläggskanaler visar Konfigurera tills de är uppsatta.',
  'help.ctx.settings-integrations.title': 'Integrationer',
  'help.ctx.settings-integrations.summary':
    'Allt som kopplar till TREK utifrån: fotobibliotek för dagboken, API-nycklar för skript, och MCP-ändpunkten med dess tokens och OAuth-klienter för AI-assistenter.',
  'help.ctx.settings-integrations.bullet.1':
    'Fotoleverantörer: Immich och Synology Photos, var och en med sin URL och nyckel, Testa anslutning och Spara.',
  'help.ctx.settings-integrations.bullet.2':
    'API-nycklar: personliga nycklar för skript och andra verktyg som anropar TREK-API:et i ditt namn.',
  'help.ctx.settings-integrations.bullet.3':
    'MCP-konfiguration: ändpunkten, en färdig klientkonfiguration att kopiera, och API-tokens.',
  'help.ctx.settings-integrations.bullet.4':
    'OAuth 2.1 Klienter: appar som loggar in via TREK, med omdirigerings-URI:er, tillåtna tillämpningsområden, maskinklienter och de aktiva sessionerna.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Vad TREK behåller på den här enheten så att en resa öppnar även utan anslutning, och vad som händer när en ändring gjord offline krockar med en gjord någon annanstans.',
  'help.ctx.settings-offline.bullet.1':
    'Offlineläge: Tvinga offlineläge får appen att bete sig som om nätet var borta, för test eller en anslutning med datataxa.',
  'help.ctx.settings-offline.bullet.2':
    'Förbered för offline: Ladda ner för offlineanvändning hämtar dina resor och deras kartrutor nu.',
  'help.ctx.settings-offline.bullet.3': 'Vad som ska lagras offline: kartrutor på eller av, och ett reglage per resa.',
  'help.ctx.settings-offline.bullet.4':
    'Synkroniseringskonflikter och Offline-cache: strategin vid krockar, antalet väntande och misslyckade, Synkronisera om nu och Rensa cache.',
  'help.ctx.settings-account.title': 'Konto',
  'help.ctx.settings-account.summary':
    'Vem du är på den här TREK och hur du loggar in: profil och avatar, lösenord, tvåfaktorsautentisering, inloggningsnycklar, och allra längst ner borttagningen av kontot.',
  'help.ctx.settings-account.bullet.1': 'Profil: användarnamn, e-post och avatar, sparas med Spara profil.',
  'help.ctx.settings-account.bullet.2':
    'Ändra lösenord: nuvarande lösenord, nytt lösenord två gånger, Uppdatera lösenord.',
  'help.ctx.settings-account.bullet.3':
    'Tvåfaktorsautentisering (2FA) med en autentiseringsapp och säkerhetskoder; Inloggningsnycklar för att logga in utan lösenord.',
  'help.ctx.settings-account.bullet.4':
    'Ta bort konto längst ner, bakom en bekräftelse. Den sista administratören kan inte ta bort sig själv.',
  // language-region
  'help.guide.language-region.title': 'Ställ in språk, enheter och valuta',
  'help.guide.language-region.goal': 'Få TREK att tala ditt språk och räkna som du gör.',
  'help.guide.language-region.step.1':
    'Välj gränssnittets språk under Language & region. TREK växlar direkt, på varje enhet du loggar in på.',
  'help.guide.language-region.step.2':
    'Under det väljer du tidsformatet, visningsvalutan samt avstånds- och temperaturenheterna.',
  'help.guide.language-region.result':
    'Datum, avstånd och pengar läses som du väntar dig; en resas egen valuta visas fortfarande bredvid omräknade belopp.',
  'help.guide.language-region.tip.1':
    'Visningsvalutan är för summor över flera resor; varje resa behåller den valuta du gav den.',
  'help.guide.language-region.tip.2': 'Språket styr också dag- och månadsnamnen i Vacay och dagboken.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Finjustera hur kartan och bokningarna beter sig',
  'help.guide.travel-map-prefs.goal': 'Bestäm vad resekartan visar som standard.',
  'help.guide.travel-map-prefs.step.1':
    'Under Travel & map håller Visa alltid bokningsrutter flyg och tåg kvar på kartan även när deras dag inte är öppen; Utforska platser på kartan visar pillret för att hitta platser; Optimera rutten från boendet startar rutten där du sover.',
  'help.guide.travel-map-prefs.step.2':
    'Blurra bokningskoder döljer bekräftelsenummer tills du håller muspekaren över; Etiketter för bokningsrutter skriver bokningens namn längs dess rutt.',
  'help.guide.travel-map-prefs.result': 'Resekartan följer de här valen på varje resa, tills du växlar tillbaka dem.',
  'help.guide.travel-map-prefs.tip.1':
    'De gäller per konto, inte per resa. Medlemmar i en delad resa ser var och en sina egna val.',
  // startup
  'help.guide.startup.title': 'Välj vad TREK öppnar med',
  'help.guide.startup.goal': 'Landa där du jobbar mest, inte på översikten varje gång.',
  'help.guide.startup.step.1': 'Under Start sätter du Startsida till Översikt eller Aktiv resa.',
  'help.guide.startup.step.2': 'Startflik väljer vilken flik i en resa som kommer upp först när du öppnar en.',
  'help.guide.startup.result': 'Nästa inloggning och nästa tryck på logotypen går rakt dit.',
  'help.guide.startup.tip.1': 'Aktiv resa betyder resan som pågår idag, eller nästa när ingen gör det.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Ställ in temat och accentfärgen',
  'help.guide.theme-scheme.goal': 'Gör TREK ljust, mörkt eller låt det följa din enhet, i den färg du gillar.',
  'help.guide.theme-scheme.step.1': 'Under Theme väljer du Ljust, Mörkt eller Auto. Auto följer din enhet.',
  'help.guide.theme-scheme.step.2':
    'Välj ett Color scheme: Default, High contrast, Indigo, Teal, Rose, Amber, Violet eller Custom.',
  'help.guide.theme-scheme.step.3':
    'Med Custom väljer du en accent bland förvalen eller anger en egen. En kontrastkontroll bredvid säger om texten förblir läsbar på den.',
  'help.guide.theme-scheme.result':
    'Knappar, länkar och markeringar tar accenten överallt, på varje enhet du loggar in på.',
  'help.guide.theme-scheme.tip.1':
    'Navigeringsfältet har också ett snabbt ljust-eller-mörkt-reglage; det sätter samma tema.',
  'help.guide.theme-scheme.tip.2': 'High contrast är schemat att välja när standarden läses för mjukt.',
  // readability
  'help.guide.readability.title': 'Justera läsbarhet och textstorlek',
  'help.guide.readability.goal': 'Mindre glas, mindre rörelse, mer utrymme eller större text.',
  'help.guide.readability.step.1':
    'Under Readability växlar Transparency glaspanelerna till solida ytor, Reduce motion minimerar animationer, och Density väljer Comfortable eller Compact.',
  'help.guide.readability.step.2':
    'Text size skalar Everything på en gång; Advanced text sizes låter rubriker, underrubriker, brödtext och bildtexter skilja sig åt.',
  'help.guide.readability.result': 'Hela appen följer med direkt, inklusive kartpanelerna och dagboken.',
  'help.guide.readability.tip.1': 'Reduce motion följer också systemets inställning när du låter den vara.',
  'help.guide.readability.tip.2':
    'Textstorleken tillämpas genom typografinivåerna, så inget klipps av; en storlek som inte längre får plats radbryts.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Välj översiktens widgetar',
  'help.guide.dashboard-widgets.goal': 'Visa bara de widgetar du använder, separat på datorn och i telefonen.',
  'help.guide.dashboard-widgets.step.1':
    'Under Dashboard widgets slår du på eller av varje widget för Desktop och för Mobile: den högra sidopanelen som helhet, valuta, samlingar, tidszoner, kommande bokningar, Atlas-länder och resesiffrorna.',
  'help.guide.dashboard-widgets.step.2':
    'Reset to defaults längst ner återställer hela fliken till hur den levererades.',
  'help.guide.dashboard-widgets.result': 'Översikten möblerar om direkt; med den högra sidopanelen av centreras den.',
  'help.guide.dashboard-widgets.tip.1': 'Ett tilläggs widgetar visas bara medan administratören har det tillägget på.',
  'help.guide.dashboard-widgets.tip.2':
    'Översikten själv kommer ihåg din rutnäts- eller listvy och sorteringsordningen per enhet.',
  // map-provider
  'help.guide.map-provider.title': 'Välj kartmotor och stil',
  'help.guide.map-provider.goal': 'Växla mellan den klassiska kartan, vektorrutor och Mapbox 3D-karta.',
  'help.guide.map-provider.step.1':
    'Under Kartleverantör väljer du Leaflet för den klassiska 2D-kartan med valfria rasterrutor, MapLibre för OpenFreeMap-vektorrutor utan token, eller Mapbox för vektorrutor med 3D-byggnader och terräng.',
  'help.guide.map-provider.step.2':
    'Välj en Kartstil eller en Kartmall för utseendet. Mapbox behöver en Mapbox-åtkomsttoken, vissa rasterstilar en CARTO API-nyckel; länken bredvid fältet leder dit du får en.',
  'help.guide.map-provider.step.3':
    'Högkvalitetsläge lägger till kantutjämning och globprojektionen. Klicka på Spara karta.',
  'help.guide.map-provider.result':
    'Varje karta i TREK, resor, Atlas, Samlingar och dagboken, ritas av motorn du valde.',
  'help.guide.map-provider.tip.1':
    'Utan token faller Mapbox tillbaka på standardkartan i stället för att visa ingenting.',
  'help.guide.map-provider.tip.2':
    'Kartrutorna du lagrar offline kommer från den leverantör som är aktiv när du laddar ner dem.',
  // notification-channels
  'help.guide.notification-channels.title': 'Ställ in var meddelanden når dig',
  'help.guide.notification-channels.goal':
    'Få resepåminnelser och samarbetshändelser i telefonen eller i ett annat verktyg.',
  'help.guide.notification-channels.step.1':
    'Under Meddelanden fyller du i ett Ntfy Ämne; lägg till din egen Ntfy Server URL och en Åtkomsttoken om du kör en. Test skickar ett meddelande på en gång.',
  'help.guide.notification-channels.step.2':
    'Eller ange en Webhook URL som tar emot varje händelse som JSON, och Test den på samma sätt.',
  'help.guide.notification-channels.step.3':
    'I raderna under slår du på eller av varje händelse per kanal. En tilläggskanal säger Konfigurera tills den är uppsatt i tilläggets inställningar; Skicka test provar ett.',
  'help.guide.notification-channels.result':
    'Händelser går ut genom de kanaler som är på. Klockan i navigeringsfältet fortsätter visa dem i appen oavsett.',
  'help.guide.notification-channels.tip.1':
    'Preferenser per resa ligger på resan själv, under dess meddelandeinställningar.',
  'help.guide.notification-channels.tip.2':
    'Administratören kan förifylla en standardserver för ntfy åt alla; du väljer ändå ditt eget ämne.',
  // photo-providers
  'help.guide.photo-providers.title': 'Anslut ett fotobibliotek',
  'help.guide.photo-providers.goal': 'Låt dagboken hämta dagens foton från Immich eller Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Under Integrationer letar du upp leverantörens sektion och anger dess URL och API-nyckel. Immich erbjuder även att spegla Journey-uppladdningar tillbaka till biblioteket.',
  'help.guide.photo-providers.step.2': 'Klicka på Testa anslutning, sedan Spara.',
  'help.guide.photo-providers.result':
    'Inläggsredigerarens flik External photos söker i det anslutna biblioteket efter inläggets dag, närmast inläggets plats först.',
  'help.guide.photo-providers.tip.1': 'Anslutningen är din: andra medlemmar i en Journey ansluter sina egna bibliotek.',
  'help.guide.photo-providers.tip.2':
    'En leverantör utan GPS-data i sina foton fungerar ändå; listan är då i tidsordning.',
  // api-keys
  'help.guide.api-keys.title': 'Skapa en API-nyckel',
  'help.guide.api-keys.goal': 'Låt ett skript eller ett annat verktyg anropa TREK-API:et som du.',
  'help.guide.api-keys.step.1':
    'Under API-nycklar klickar du på Skapa nyckel och ger den ett namn som säger var den ska användas.',
  'help.guide.api-keys.step.2':
    'Kopiera nyckeln från dialogen: den visas en gång. Ta bort en nyckel från listan när verktyget inte längre behöver den.',
  'help.guide.api-keys.result':
    'Anrop med den nyckeln agerar med dina behörigheter; listan visar när varje nyckel skapades och senast användes.',
  'help.guide.api-keys.tip.1': 'En nyckel per verktyg gör det smärtfritt att återkalla.',
  'help.guide.api-keys.tip.2':
    'För en AI-assistent använder du MCP med OAuth i stället; API-nycklar är för rena HTTP-klienter.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Anslut en AI-assistent över MCP',
  'help.guide.mcp-oauth.goal': 'Ge Claude, en IDE eller en annan MCP-klient åtkomst till dina resor.',
  'help.guide.mcp-oauth.step.1':
    'Under MCP-konfiguration kopierar du MCP-ändpunkt, eller hela Klientkonfiguration för en klient som tar ett JSON-utdrag.',
  'help.guide.mcp-oauth.step.2':
    'Klienter som loggar in via webbläsaren använder OAuth 2.1: Ny klient under OAuth 2.1 Klienter, med dess Omdirigerings-URI:er, Tillåtna tillämpningsområden och, för en server utan webbläsare, Maskinklient.',
  'help.guide.mcp-oauth.step.3':
    'Rotera hemlighet och Radera klient finns på varje klient; Aktiva OAuth-sessioner listar vad som är inloggat och låter dig återkalla det. API Tokens med Skapa ny token är den äldre vägen in.',
  'help.guide.mcp-oauth.result':
    'Klienten kan läsa och ändra det dess tillämpningsområden tillåter, som du, och varje åtgärd syns under ditt namn.',
  'help.guide.mcp-oauth.tip.1':
    'Tillämpningsområdena är skyddsnätet: ge en klient bara läsområdet tills den behöver mer.',
  'help.guide.mcp-oauth.tip.2':
    'Administratören kan stänga av MCP för hela instansen; då finns inte den här sektionen.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Ta resor offline',
  'help.guide.offline-prepare.goal': 'Ha dina resor och deras kartor på den här enheten innan anslutningen försvinner.',
  'help.guide.offline-prepare.step.1':
    'Under Vad som ska lagras offline låter du Lagra kartrutor offline vara på och slår på de resor du vill ha på den här enheten.',
  'help.guide.offline-prepare.step.2':
    'Klicka på Ladda ner för offlineanvändning under Förbered för offline. Det hämtar resorna och rutorna runt deras platser.',
  'help.guide.offline-prepare.step.3':
    'Tvinga offlineläge under Offlineläge låter dig kontrollera att allt finns där innan du åker.',
  'help.guide.offline-prepare.result':
    'Resorna öppnar utan anslutning; ändringar du gör väntar i en kö och går ut när du återansluter.',
  'help.guide.offline-prepare.tip.1': 'Rutor tar mest plats: sektionen Offline-cache visar vad som lagras, per resa.',
  'help.guide.offline-prepare.tip.2': 'Installera TREK som en app från webbläsaren för den smidigaste offlinestarten.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Bestäm vad som vinner vid en synkroniseringskonflikt',
  'help.guide.offline-conflicts.goal': 'Välj hur TREK avgör en ändring gjord offline mot en gjord någon annanstans.',
  'help.guide.offline-conflicts.step.1':
    'Under Synkroniseringskonflikter väljer du Fråga mig varje gång, Behåll alltid min version eller Behåll alltid serverversionen.',
  'help.guide.offline-conflicts.step.2':
    'Offline-cache visar resor, väntande och misslyckade ändringar och konflikter; Synkronisera om nu skickar kön, Rensa cache tömmer enheten.',
  'help.guide.offline-conflicts.result':
    'Med Fråga visar en konflikt båda versionerna och låter dig välja; med de andra två avgörs den tyst.',
  'help.guide.offline-conflicts.tip.1': 'Rensa cache tar bara bort kopian på den här enheten; inget på servern rörs.',
  // profile
  'help.guide.profile.title': 'Ändra din profil',
  'help.guide.profile.goal': 'Uppdatera ditt namn, din e-post och din bild.',
  'help.guide.profile.step.1':
    'Under Konto redigerar du Användarnamn och E-post. Avataren tar en egen uppladdning; ta bort den för att gå tillbaka till initialerna.',
  'help.guide.profile.step.2': 'Klicka på Spara profil.',
  'help.guide.profile.result': 'Ditt namn och din bild uppdateras överallt på en gång, även på resor du delar.',
  'help.guide.profile.tip.1': 'Ett konto som loggar in via OIDC visar det här; e-posten kommer då från leverantören.',
  // password
  'help.guide.password.title': 'Ändra ditt lösenord',
  'help.guide.password.goal': 'Sätt ett nytt lösenord.',
  'help.guide.password.step.1': 'Under Ändra lösenord anger du ditt nuvarande lösenord, sedan det nya två gånger.',
  'help.guide.password.step.2': 'Klicka på Uppdatera lösenord.',
  'help.guide.password.result': 'Det nya lösenordet gäller vid nästa inloggning; andra sessioner förblir inloggade.',
  'help.guide.password.tip.1': 'Ett konto som loggar in via OIDC har inget TREK-lösenord att ändra.',
  // mfa
  'help.guide.mfa.title': 'Slå på tvåfaktorsautentisering',
  'help.guide.mfa.goal': 'Skydda kontot med en kod från en autentiseringsapp.',
  'help.guide.mfa.step.1': 'Under Tvåfaktorsautentisering (2FA) klickar du på Konfigurera autentiseringsappen.',
  'help.guide.mfa.step.2':
    'Skanna QR-koden med din app, eller ange hemligheten för hand, skriv sedan den sexsiffriga koden den visar och klicka på Aktivera 2FA.',
  'help.guide.mfa.step.3':
    'Spara säkerhetskoderna: kopiera, ladda ner eller skriv ut dem. Var och en fungerar en gång, när du inte har telefonen till hands.',
  'help.guide.mfa.result': 'Varje inloggning ber om en kod efter lösenordet.',
  'help.guide.mfa.tip.1': 'Inaktivera 2FA kräver ditt lösenord och en aktuell kod.',
  'help.guide.mfa.tip.2': 'Administratören kan kräva 2FA av alla; då kan den inte stängas av här.',
  // passkeys
  'help.guide.passkeys.title': 'Logga in med en inloggningsnyckel',
  'help.guide.passkeys.goal': 'Använd enhetens fingeravtryck, ansikte eller PIN i stället för ett lösenord.',
  'help.guide.passkeys.step.1':
    'Under Inloggningsnycklar klickar du på Lägg till en inloggningsnyckel och bekräftar med din enhet. Ge den ett namn som säger vilken enhet det är.',
  'help.guide.passkeys.step.2':
    'Listan visar varje inloggningsnyckel med namn och när den senast användes; raderingsknappen tar bort en.',
  'help.guide.passkeys.result': 'Inloggningssidan erbjuder inloggningsnyckeln; lösenordet finns kvar som reserv.',
  'help.guide.passkeys.tip.1':
    'En inloggningsnyckel bor på enheten eller i dess lösenordshanterare, så lägg till en per enhet.',
  'help.guide.passkeys.tip.2':
    'Inloggningsnycklar kräver HTTPS; på en instans med vanlig HTTP förklarar sektionen varför de inte är tillgängliga.',
  // delete-account
  'help.guide.delete-account.title': 'Ta bort ditt konto',
  'help.guide.delete-account.goal': 'Ta bort ditt konto och de data som bara är dina.',
  'help.guide.delete-account.step.1': 'Allra längst ner under Konto klickar du på Ta bort konto och bekräftar.',
  'help.guide.delete-account.result':
    'Ditt konto, dina egna resor och dina Journeys är borta; resor du delar med andra stannar hos dem.',
  'help.guide.delete-account.tip.1':
    'Den sista administratören på en instans kan inte ta bort sig själv; gör någon annan till administratör först.',
  'help.guide.delete-account.tip.2': 'Det går inte att ångra. Exportera det du vill behålla innan du bekräftar.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administration',
  'help.ctx.admin.summary':
    'Instansen bakom allas TREK: vem som får logga in och hur, vad som är påslaget, var filerna ligger, hur servern når folk och hur den säkerhetskopieras. Bara administratörer ser den här sidan; varje flik är en egen skärm i sidopanelen.',
  'help.ctx.admin.bullet.1':
    'De fyra korten högst upp räknar användare, resor, platser och filer; en banner ovanför dem tillkännager en nyare TREK-version.',
  'help.ctx.admin.bullet.2':
    'Användare och Användarinställningar: konton, inbjudningslänkar och kartinställningarna ett nytt konto börjar med.',
  'help.ctx.admin.bullet.3':
    'Anpassning, Inställningar, Tillägg och Plugins: packningsmallar, kategorier och skollov; inloggningsmetoder och API-nycklar; funktionsmodulerna; tredjepartsplugins.',
  'help.ctx.admin.bullet.4':
    'Lagring, Meddelanden, MCP Åtkomst och GitHub: vart uppladdningar hamnar, kanalerna för hela instansen, AI-klienters tokens och sessioner, och versionshistoriken.',
  'help.ctx.admin.bullet.5':
    'Säkerhetskopia och Revision: säkerhetskopior på begäran och enligt schema, och loggen över säkerhetsrelevanta händelser.',
  'help.ctx.admin-users.title': 'Användare',
  'help.ctx.admin-users.summary':
    'Varje konto på den här TREK, med roll, e-post och senaste inloggning, och inbjudningslänkarna som låter folk registrera sig på en stängd instans.',
  'help.ctx.admin-users.bullet.1':
    'Tabellen: användarnamn, e-post, roll, skapad, senaste inloggning och åtgärderna per rad. Du är markerad som du.',
  'help.ctx.admin-users.bullet.2':
    'Skapa användare högst upp lägger till ett konto för hand, med ett lösenord du lämnar över.',
  'help.ctx.admin-users.bullet.3':
    'Inbjudningslänkar nedanför: registreringslänkar för engångsbruk med en användningsgräns, ett utgångsdatum och, om du vill, en resa den nya användaren går med i vid ankomst.',
  'help.ctx.admin-users.bullet.4':
    'Behörighetsinställningar längst ner: per åtgärd, vem som får göra den, Alla, Resedeltagare, Researrangör eller Admin endast.',
  'help.ctx.admin-defaults.title': 'Användarinställningar',
  'help.ctx.admin-defaults.summary':
    'Inställningarna ett nytt konto börjar med, så att ingen behöver leta upp kartfliken först: kartleverantör, stil, tokens och kvalitet.',
  'help.ctx.admin-defaults.bullet.1':
    'Kartleverantör, Mapbox-stil och token, CARTO-nyckel och Mapbox-kvalitet, precis som en användare skulle ställa in dem under Inställningar, Karta.',
  'help.ctx.admin-defaults.bullet.2':
    'Återställ till inbyggt standardvärde per fält återger TREK:s eget val; en användares egen inställning vinner alltid över de här.',
  'help.ctx.admin-config.title': 'Anpassning',
  'help.ctx.admin-config.summary':
    'Det varje resa på instansen delar: packningsmallar, kategoriuppsättningen för platser och samlingar, och skollovskatalogen som Vacay hämtar från.',
  'help.ctx.admin-config.bullet.1':
    'Packningsmallar: namngivna listor med kategorier och saker som en resas packlista kan utgå från.',
  'help.ctx.admin-config.bullet.2':
    'Kategorier: namn, ikon och färg på kategorierna som används i hela TREK, från platsinspektören till Samlingar.',
  'help.ctx.admin-config.bullet.3':
    'Skollov: katalogen över länder och regioner, för platser som de inbyggda källorna inte täcker.',
  'help.ctx.admin-settings.title': 'Inställningar',
  'help.ctx.admin-settings.summary':
    'Hur folk kommer in och vad servern får prata med: inloggnings- och registreringsmetoder, SSO, inloggningsnycklar, tvåfaktorspolicy, API-nycklarna för kartor, platser och bilder, sök- och kollektivtrafikleverantörerna, och filtyperna uppladdningar får ha.',
  'help.ctx.admin-settings.bullet.1':
    'Autentiseringsmetoder: Inloggning med lösenord, Lösenordsregistrering, SSO Inloggning, SSO Automatisk konfigurering och Kräv tvåfaktorsautentisering (2FA).',
  'help.ctx.admin-settings.bullet.2':
    'Enkel inloggning (OIDC) med utfärdare, klient och visningsnamn; Inloggningsnyckel med Relying Party ID (domain) och Allowed origins.',
  'help.ctx.admin-settings.bullet.3':
    'API Nycklar: Google Maps, Unsplash och Amap, var och en med Test; Vad nyckeln används till begränsar Google-nyckeln till de funktioner du vill betala för.',
  'help.ctx.admin-settings.bullet.4':
    'Leverantör för platssökning och Kollektivtrafikleverantör väljer vem som svarar på sökningar och rutter; Tillåtna filtyper begränsar uppladdningar.',
  'help.ctx.admin-addons.title': 'Tillägg',
  'help.ctx.admin-addons.summary':
    'TREK:s funktionsmoduler, var och en med ett reglage: Listor, Kostnader, Dokument, Vacay, Atlas, Samarbete, Journey, Samlingar, Bilresa, MCP, AirTrail, Dawarich och AI-tolkningen. Av betyder att navigeringsposten, rutterna och API:et är borta för alla.',
  'help.ctx.admin-addons.bullet.1':
    'En ruta per tillägg med dess reglage och, där det finns några, underrader för dess alternativ.',
  'help.ctx.admin-addons.bullet.2':
    'Fotoleverantörer och dokumentleverantörer syns här som rutor också, så att Immich eller Synology kan erbjudas användarna.',
  'help.ctx.admin-addons.bullet.3': 'Spårning av väskor har ett eget reglage under rutorna.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Tredjepartsplugins som kör i en egen process bredvid TREK, var och en med de behörigheter den bad om vid installationen. Installera från katalogen, ladda upp ett paket eller länka en mapp medan du utvecklar en.',
  'help.ctx.admin-plugins.bullet.1':
    'Listan: varje installerad plugin med version, status, signatur och de behörigheter den har; aktivera, avaktivera, uppdatera eller avinstallera per rad.',
  'help.ctx.admin-plugins.bullet.2':
    'Ladda upp plugin tar en paketfil; Skanna om plockar upp en pluginmapp länkad för utveckling.',
  'help.ctx.admin-plugins.bullet.3':
    'Tillåtna värdar per plugin: adresserna en plugin får anropa, eftersom utgående trafik nekas som standard.',
  'help.ctx.admin-storage.title': 'Lagring',
  'help.ctx.admin-storage.summary':
    'Var uppladdningar ligger: den lokala disken, en S3-bucket eller en spegel som skriver till båda. Varje uppladdningskategori kan gå till en egen backend, och Hälsa säger om varje backend svarar.',
  'help.ctx.admin-storage.bullet.1':
    'Backender: namn och typ för var och en, med Testa, Redigera och Ta bort; en som satts av miljön är skrivskyddad här.',
  'help.ctx.admin-storage.bullet.2':
    'Kategorier: omslag, dokument, dagboksfoton och resten, var och en tilldelad en backend; att ändra en erbjuder att flytta de befintliga filerna.',
  'help.ctx.admin-storage.bullet.3':
    'Hälsa: en kontroll per backend, och kontrollfilen som bevisar att konfigurationen är den servern ser.',
  'help.ctx.admin-notifications.title': 'Meddelanden',
  'help.ctx.admin-notifications.summary':
    'Kanalerna instansen erbjuder sina användare, och de som når dig som administratör. Användarna väljer sina egna ämnen och URL:er under Inställningar; du bestämmer vad som finns och konfigurerar e-post.',
  'help.ctx.admin-notifications.bullet.1':
    'I-App, E-post (SMTP), Ntfy och Webhook: en panel var, med ett reglage som erbjuder kanalen till användarna och den serverkonfiguration den behöver.',
  'help.ctx.admin-notifications.bullet.2':
    'Påminnelser inför resan: om servern skickar påminnelsen innan en resa börjar.',
  'help.ctx.admin-notifications.bullet.3':
    'Admin Ntfy och Webhook för administratörer: vart adminhändelser som en misslyckad säkerhetskopia eller en ny version går, med test.',
  'help.ctx.admin-mcp-tokens.title': 'MCP Åtkomst',
  'help.ctx.admin-mcp-tokens.summary':
    'Varje token och OAuth-session som AI-klienter har mot den här TREK, över alla användare, med makten att återkalla vilken som helst av dem.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'API Token: vem som skapade den, när den senast användes, och Ta bort.',
  'help.ctx.admin-mcp-tokens.bullet.2':
    'OAuth Sessioner: klienten, användaren och de tillämpningsområden den beviljades, och Återkalla.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Vad som är nytt i TREK: versionshistoriken från GitHub, versionen du kör och om en nyare är ute. Själva uppdateringen sker utanför appen, på värden.',
  'help.ctx.admin-github.bullet.1':
    'Versionshistorik listar versionerna med sina noteringar; den nyaste bär Senaste, och din version är markerad.',
  'help.ctx.admin-github.bullet.2':
    'Uppdatering tillgänglig visas i sidhuvudet så snart en nyare version finns, med hur du uppdaterar för Docker och andra installationer.',
  'help.ctx.admin-backup.title': 'Säkerhetskopia',
  'help.ctx.admin-backup.summary':
    'Fullständiga säkerhetskopior av databasen och uppladdningarna, gjorda för hand eller enligt schema, sparade på servern och nedladdningsbara som en fil. Återställ lägger tillbaka en.',
  'help.ctx.admin-backup.bullet.1':
    'Databackup: Skapa säkerhetskopia, och listan över befintliga med Ladda ner, Återställ och radering.',
  'help.ctx.admin-backup.bullet.2':
    'Ladda upp säkerhetskopia tar in en fil gjord på en annan instans eller en tidigare dag.',
  'help.ctx.admin-backup.bullet.3':
    'Automatisk säkerhetskopiering: på eller av, intervall, timme och dag, och hur många som behålls.',
  'help.ctx.admin-audit.title': 'Revision',
  'help.ctx.admin-audit.summary':
    'Loggen över säkerhetsrelevanta och administrativa händelser: inloggningar och misslyckanden, MFA-ändringar, användar- och inställningsändringar, säkerhetskopior och återställningar. Skrivskyddad, nyaste först.',
  'help.ctx.admin-audit.bullet.1': 'En rad per händelse med tid, användare, åtgärd, resurs, IP och detaljer.',
  'help.ctx.admin-audit.bullet.2': 'Uppdatera laddar om; Ladda fler går längre bakåt.',
  // create-user
  'help.guide.create-user.title': 'Skapa en användare',
  'help.guide.create-user.goal': 'Lägg till ett konto för hand, utan inbjudan.',
  'help.guide.create-user.step.1': 'Klicka på Skapa användare högst upp på fliken Användare.',
  'help.guide.create-user.step.2':
    'Ange Användarnamn, E-post och ett Lösenord, och välj Roll: Användare eller Administratör.',
  'help.guide.create-user.step.3': 'Klicka på Skapa användare.',
  'help.guide.create-user.result':
    'Kontot dyker upp i tabellen och kan logga in på en gång; lämna över lösenordet via en kanal du litar på.',
  'help.guide.create-user.tip.1':
    'För en person som ska välja sitt eget lösenord är en inbjudningslänk den bättre vägen in.',
  'help.guide.create-user.tip.2':
    'Administratörer ser den här sidan och revisionsloggen; allt annat är detsamma för båda rollerna.',
  // edit-user
  'help.guide.edit-user.title': 'Ändra en användares roll eller lösenord',
  'help.guide.edit-user.goal': 'Befordra någon, degradera dem, eller släpp in dem igen efter ett förlorat lösenord.',
  'help.guide.edit-user.step.1': 'Klicka på pennan i användarens rad. Redigera användare öppnas med kontots uppgifter.',
  'help.guide.edit-user.step.2':
    'Ändra Roll, sätt ett Nytt lösenord, eller klicka på Återställ inloggningsnycklar när personen tappat enheten som nycklarna låg på, och sedan Spara.',
  'help.guide.edit-user.result': 'Ändringen gäller vid nästa anrop; ett nytt lösenord fungerar från nästa inloggning.',
  'help.guide.edit-user.tip.1': 'Du kan inte ta adminrollen från dig själv så länge du är den sista administratören.',
  'help.guide.edit-user.tip.2':
    'Att återställa inloggningsnycklar behåller lösenordet; personen lägger till nya nycklar under Inställningar, Konto.',
  // invite-links
  'help.guide.invite-links.title': 'Bjud in någon med en länk',
  'help.guide.invite-links.goal': 'Låt en person registrera sig på en stängd instans, och landa i en resa om du vill.',
  'help.guide.invite-links.step.1': 'Under Inbjudningslänkar, klicka på Skapa länk.',
  'help.guide.invite-links.step.2':
    'Ställ in Max. antal användningar och Gäller till, valfritt Lägg till i resa (valfritt), och klicka på Skapa och kopiera.',
  'help.guide.invite-links.step.3':
    'Skicka länken. Varje rad visar hur ofta den använts och vem som skapade den; Kopiera länken kopierar den igen, och förbrukade eller utgångna länkar är markerade med Förbrukad eller Utgått.',
  'help.guide.invite-links.result':
    'Den som öppnar länken registrerar sig med ett eget lösenord och, med en resa vald, går med i den direkt.',
  'help.guide.invite-links.tip.1':
    'Inbjudningslänkar fungerar även när Lösenordsregistrering är avstängd under Inställningar.',
  'help.guide.invite-links.tip.2':
    'En länk med en användning och kort giltighet är det säkraste valet för en enskild person.',
  // delete-user
  'help.guide.delete-user.title': 'Ta bort en användare',
  'help.guide.delete-user.goal': 'Ta bort ett konto och allt som bara det äger.',
  'help.guide.delete-user.step.1': 'Klicka på papperskorgen i användarens rad och bekräfta Ta bort användare.',
  'help.guide.delete-user.result':
    'Kontot, dess egna resor och dess dagböcker är borta; resor delade med andra stannar hos de kvarvarande medlemmarna.',
  'help.guide.delete-user.tip.1': 'Det finns ingen ångra. Ta en säkerhetskopia först om du är osäker.',
  'help.guide.delete-user.tip.2': 'Den sista administratören kan inte tas bort; gör någon annan till admin först.',
  // permissions
  'help.guide.permissions.title': 'Bestäm vem som får göra vad',
  'help.guide.permissions.goal': 'Ange per åtgärd vilken roll som får utföra den på den här TREK.',
  'help.guide.permissions.step.1':
    'Under Behörighetsinställningar, leta upp åtgärden i sin grupp, till exempel Ta bort resor under Resahantering, och välj nivån: Alla, Resedeltagare, Researrangör eller Admin endast. En ändrad rad är markerad som skräddarsydd.',
  'help.guide.permissions.step.2':
    'Klicka på Spara. Återställ till standardinställningarna sätter tillbaka varje rad på den inbyggda nivån.',
  'help.guide.permissions.result':
    'Regeln gäller för alla resor på en gång; knapparna och menyerna för personer under nivån försvinner.',
  'help.guide.permissions.tip.1':
    'Researrangör betyder personen som skapade resan; administratörer får alltid göra allt.',
  'help.guide.permissions.tip.2':
    'Sänk hellre en nivå än att ta bort en medlem: en medlem som inte får redigera kan fortfarande läsa och kommentera.',
  // default-map
  'help.guide.default-map.title': 'Ställ in kartstandarden för nya användare',
  'help.guide.default-map.goal': 'Ge varje nytt konto en fungerande karta utan personlig token.',
  'help.guide.default-map.step.1':
    'Under Karta, välj Kartmotor och, för Mapbox eller MapLibre, Kartstil, Delat Mapbox-token och Högkvalitetsläge; för en rasterkarta Kartmall och Delad CARTO-nyckel.',
  'help.guide.default-map.step.2':
    'Bredvid varje fält du ändrat återger återställ TREK:s eget val. Standardinställningar för användare till vänster gör detsamma för Färgläge, enheter och valutan.',
  'help.guide.default-map.result':
    'Nya konton börjar med de här; den som satt sin egen karta under Inställningar behåller sin.',
  'help.guide.default-map.tip.1': 'En token som anges här delas av alla som saknar en egen, så håll koll på dess kvot.',
  'help.guide.default-map.tip.2': 'Befintliga konton som aldrig rört kartfliken följer de här standardvärdena också.',
  // packing-templates
  'help.guide.packing-templates.title': 'Bygg en packningsmall',
  'help.guide.packing-templates.goal': 'Ge resor en packlista att utgå från i stället för en tom.',
  'help.guide.packing-templates.step.1': 'Klicka på Ny mall, skriv ett namn och bekräfta med bocken.',
  'help.guide.packing-templates.step.2':
    'Öppna mallen och klicka på Lägg till kategori; under varje kategori lägger + till saker, och en sak behöver bara ett namn.',
  'help.guide.packing-templates.step.3':
    'Allt sparas löpande. Pennan döper om en mall, en kategori eller en sak, papperskorgen tar bort den.',
  'help.guide.packing-templates.result':
    'Mallen erbjuds på varje resas packlista; att tillämpa den kopierar sakerna, så en resa kan ändra dem fritt.',
  'help.guide.packing-templates.tip.1': 'En mall per typ av resa, strand, stad, vandring, slår en jättelista.',
  'help.guide.packing-templates.tip.2': 'Att ta bort en mall rör inte resor som redan tillämpat den.',
  // categories
  'help.guide.categories.title': 'Hantera kategoriuppsättningen',
  'help.guide.categories.goal': 'Bestäm vilka kategorier platser och samlingar kan bära, och hur de ser ut.',
  'help.guide.categories.step.1':
    'Klicka på Ny kategori, ge den ett namn, välj en ikon och en färg; Förhandsgranskning visar resultatet. Klicka på Skapa.',
  'help.guide.categories.step.2':
    'Håll muspekaren över en kategori i listan för att redigera eller ta bort den. Borttagning ber om bekräftelse.',
  'help.guide.categories.result':
    'Uppsättningen gäller överallt på en gång: platsinspektören, kartnålarna, Samlingar och filtren.',
  'help.guide.categories.tip.1':
    'Platser behåller sitt kategori-id, så att döpa om en kategori döper om den på varje plats.',
  'help.guide.categories.tip.2':
    'En borttagen kategori lämnar sina platser utan någon; tilldela om först om det spelar roll.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Underhåll skollov för hand',
  'help.guide.school-holiday-catalog.goal': 'Täck ett land eller en region som de inbyggda lovkällorna inte gör.',
  'help.guide.school-holiday-catalog.step.1':
    'Under Skollov, klicka på Lägg till land, ange Land och dess Landskod (t.ex. US), och Spara; sedan Lägg till region för varje del av det som skiljer sig.',
  'help.guide.school-holiday-catalog.step.2':
    'Klicka på en region för att öppna Region eller skoldistrikt: Lägg till lovperiod, ge var och en Lovets namn, Startdatum och Slutdatum, och Spara. Papperskorgen tar bort en period, en region eller, när det inte har några regioner kvar, ett land.',
  'help.guide.school-holiday-catalog.result':
    'Användarna hittar landet och regionen under Inställningar i Vacay och ser perioderna i sitt årsrutnät.',
  'help.guide.school-holiday-catalog.tip.1':
    'Regioner från de inbyggda källorna kan inte redigeras här; lägg till en manuell region bredvid om ett datum är fel.',
  // auth-methods
  'help.guide.auth-methods.title': 'Bestäm hur folk loggar in',
  'help.guide.auth-methods.goal': 'Öppna eller stäng lösenordsinloggning, SSO och registrering, och kräv 2FA.',
  'help.guide.auth-methods.step.1':
    'Under Autentiseringsmetoder, slå på eller av Inloggning med lösenord och Lösenordsregistrering. Registrering av betyder nya konton bara via inbjudningslänkar, SSO eller för hand.',
  'help.guide.auth-methods.step.2':
    'SSO Inloggning och SSO Automatisk konfigurering behöver Enkel inloggning (OIDC) konfigurerad nedanför; automatisk konfigurering skapar ett konto första gången någon loggar in via SSO.',
  'help.guide.auth-methods.step.3':
    'Kräv tvåfaktorsautentisering (2FA) får varje lösenordsinloggning att sätta upp en autentiseringsapp vid nästa inloggning. Inloggningsnyckel behöver Relying Party ID (domain) och Allowed origins, de adresser din TREK nås på.',
  'help.guide.auth-methods.result': 'Inloggningssidan erbjuder exakt de metoder du lämnade på.',
  'help.guide.auth-methods.tip.1':
    'En varning visas innan du låser ute dig själv: minst en väg in för administratörer förblir på.',
  'help.guide.auth-methods.tip.2': 'Värden som satts via miljövariabler visas som skrivskyddade här.',
  // oidc
  'help.guide.oidc.title': 'Koppla enkel inloggning',
  'help.guide.oidc.goal': 'Låt folk logga in med din identitetsleverantör.',
  'help.guide.oidc.step.1':
    'Under Enkel inloggning (OIDC), ange Visningsnamn för knappen och Utfärdarens URL, Client ID och Client Secret från din leverantör, sedan Spara.',
  'help.guide.oidc.step.2': 'Slå på SSO Inloggning under Autentiseringsmetoder.',
  'help.guide.oidc.result':
    'Inloggningssidan visar SSO-knappen; med SSO Automatisk konfigurering på får förstagångsanvändare ett konto automatiskt.',
  'help.guide.oidc.tip.1':
    'Redirect-URI:n din leverantör behöver är din TREK:s adress plus OIDC-callbacksökvägen från dokumentationen.',
  'help.guide.oidc.tip.2':
    'Claim-mappningen avgör vilka SSO-grupper som blir administratörer; se OIDC-sidan i dokumentationen.',
  // instance-keys
  'help.guide.instance-keys.title': 'Ange API-nycklarna',
  'help.guide.instance-keys.goal': 'Lås upp Googles platssökning, Unsplash-omslag och Amap för hela instansen.',
  'help.guide.instance-keys.step.1':
    'Under API Nycklar, klistra in Google Maps API Nyckel och klicka på Test; fältet säger om nyckeln svarar.',
  'help.guide.instance-keys.step.2':
    'Under Vad nyckeln används till, slå bara på de funktioner du vill ha fakturerade på den nyckeln: Automatisk komplettering av plats, Platsinformation, Plats Foton, Platsberikning, Logg över platssökningar.',
  'help.guide.instance-keys.step.3':
    'Unsplash API-nyckel driver omslagssökningen; Amap (高德地图) API-nyckel platssökning i Kina. Testa var och en på samma sätt.',
  'help.guide.instance-keys.result':
    'Användarna får funktionerna utan egna nycklar; utan Google-nyckel söker TREK genom den fria OpenStreetMap-stacken och TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'En användares personliga nyckel under Inställningar vinner över instansnyckeln för den användaren.',
  'help.guide.instance-keys.tip.2': 'Nycklar kan också komma från miljövariabler; de visas som skrivskyddade här.',
  // places-transit
  'help.guide.places-transit.title': 'Välj sök- och kollektivtrafikleverantörerna',
  'help.guide.places-transit.goal': 'Bestäm vem som svarar på platssökningar och kollektivtrafikrutter.',
  'help.guide.places-transit.step.1':
    'Under Leverantör för platssökning, välj Automatisk, Google Places, Amap (高德地图) eller OpenStreetMap. Automatisk använder den bästa nyckel som finns.',
  'help.guide.places-transit.step.2':
    'Under Kollektivtrafikleverantör, välj Transitous (gratis), världsomspännande och utan nyckel, eller Google, som behöver Google-nyckeln.',
  'help.guide.places-transit.result': 'Varje sökruta och varje kollektivtrafikrutt i TREK följer valet.',
  'help.guide.places-transit.tip.1':
    'En leverantör utan sin nyckel visar en varning här och faller tillbaka till OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Googles kollektivtrafikrutter faktureras per anrop; Transitous gör det inte.',
  // file-types
  'help.guide.file-types.title': 'Begränsa filtyperna',
  'help.guide.file-types.goal': 'Bestäm vilka filändelser uppladdningar får ha.',
  'help.guide.file-types.step.1':
    'Under Tillåtna filtyper, redigera den kommaseparerade listan med ändelser och spara.',
  'help.guide.file-types.result':
    'Uppladdningar av någon annan typ nekas med ett tydligt meddelande, i dokumenten, dagboken och omslagen.',
  'help.guide.file-types.tip.1': 'Behåll bildtyper i listan; omslag och dagboksfoton går genom samma kontroll.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Slå på eller av ett tillägg',
  'help.guide.toggle-addon.goal': 'Erbjud en funktionsmodul till alla, eller ta bort den.',
  'help.guide.toggle-addon.step.1':
    'Växla reglaget på tilläggets ruta. Navigeringsposten dyker upp eller försvinner för alla på en gång.',
  'help.guide.toggle-addon.step.2':
    'Vissa rutor har underrader för sina alternativ, som Spårning av väskor under Listor eller fotoleverantörerna under Journey; de visas bara medan tillägget är på.',
  'help.guide.toggle-addon.result': 'Data för ett avstängt tillägg behålls; att slå på det igen visar den igen.',
  'help.guide.toggle-addon.tip.1': 'MCP av tar bort ändpunkten och de Integrationer-sektioner som beror på den.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas och Journey är de tillägg användare frågar efter mest; Dokument behöver lagring för uppladdningar.',
  // install-plugin
  'help.guide.install-plugin.title': 'Installera en plugin',
  'help.guide.install-plugin.goal': 'Lägg till en tredjepartsplugin och ge den exakt de behörigheter den ber om.',
  'help.guide.install-plugin.step.1':
    'Öppna Upptäck, välj en plugin och klicka på Installera; eller klicka på Ladda upp plugin och välj ett .zip- eller .tar.gz-paket.',
  'help.guide.install-plugin.step.2':
    'Tillbaka under Installerat, läs raden: vad pluginen får läsa eller skriva, värdarna den anropar och om den är signerad. Slå på Aktivera plugin.',
  'help.guide.install-plugin.step.3':
    'Radens meny erbjuder Starta om, Visa felloggen, Tillåtna värdar och Byt version…; Ta bort avinstallerar den. En uppdatering erbjuds på raden när en nyare version finns, och en som ber om nya rättigheter förblir av tills du godkänner dem.',
  'help.guide.install-plugin.result':
    'Pluginen kör i en egen process; det den lägger till, widgetar, kartlager, verktyg, dyker upp där pluginen deklarerar det.',
  'help.guide.install-plugin.tip.1': 'Skanna om plockar upp en pluginmapp länkad för utveckling utan paket.',
  'help.guide.install-plugin.tip.2':
    'En osignerad plugin är markerad som sådan; installera den bara när du litar på dess källa.',
  // storage-backends
  'help.guide.storage-backends.title': 'Flytta uppladdningar till S3 eller en spegel',
  'help.guide.storage-backends.goal': 'Håll filer på objektlagring, eller på både disk och bucket.',
  'help.guide.storage-backends.step.1':
    'Under Backender, klicka på Lägg till backend, ge den ett Namn, välj Typ, Lokal, S3 eller Spegel, fyll i fälten och Tillämpa. Testa kontrollerar anslutningen, Spara ändringar skriver den.',
  'help.guide.storage-backends.step.2':
    'Under Kategorier, tilldela varje uppladdningskategori en backend. Att ändra en frågar om du vill Flytta befintliga objekt eller Dirigera bara nya skrivningar.',
  'help.guide.storage-backends.step.3':
    'Hälsa högst upp kontrollerar varje backend; en röd post namnger vad som misslyckades.',
  'help.guide.storage-backends.result':
    'Nya uppladdningar går till den tilldelade backenden; flyttade filer serveras därifrån.',
  'help.guide.storage-backends.tip.1': 'En backend konfigurerad via miljövariabler visas men kan inte redigeras här.',
  'help.guide.storage-backends.tip.2':
    'En spegel skriver till båda målen och läser från det första; använd den för att migrera utan driftstopp.',
  // channels-instance
  'help.guide.channels-instance.title': 'Konfigurera meddelandekanalerna',
  'help.guide.channels-instance.goal': 'Bestäm vilka kanaler användare får välja, och sätt upp e-post.',
  'help.guide.channels-instance.step.1':
    'Under E-post (SMTP), ange SMTP Host, SMTP Port, SMTP User, SMTP Password och From Address; Skicka ett testmejl skickar ett mejl till dig.',
  'help.guide.channels-instance.step.2':
    'Slå på Ntfy och Webhook för att erbjuda dem; användarna anger sedan sitt eget ämne eller sin URL under Inställningar, Meddelanden.',
  'help.guide.channels-instance.step.3':
    'Påminnelser inför resan växlar påminnelsen innan en resa börjar; I-App är alltid på och förklaras bara här.',
  'help.guide.channels-instance.result': 'Fliken Meddelanden hos varje användare visar kanalerna du slog på.',
  'help.guide.channels-instance.tip.1':
    'En standard-ntfy-server angiven här är förifylld för användarna; de kan fortfarande ange en egen.',
  'help.guide.channels-instance.tip.2':
    'Pluginkanaler dyker upp av sig själva när en plugin med den förmågan är aktiv.',
  // admin-channels
  'help.guide.admin-channels.title': 'Få adminhändelser i mobilen',
  'help.guide.admin-channels.goal': 'Få veta om misslyckade säkerhetskopior, nya versioner och andra instanshändelser.',
  'help.guide.admin-channels.step.1':
    'Under Admin Ntfy, ange ett ämne och, om det behövs, server och token; under Webhook för administratörer en URL.',
  'help.guide.admin-channels.step.2':
    'Klicka på Skicka test ntfy eller Skicka testwebhook för att se ett meddelande komma fram.',
  'help.guide.admin-channels.result': 'Adminhändelser går dit utöver klockan i appen hos varje administratör.',
  'help.guide.admin-channels.tip.1':
    'Håll adminämnet skilt från ditt personliga, så att ett avbrott inte drunknar i resesnack.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Återkalla AI-åtkomst',
  'help.guide.mcp-tokens-admin.goal':
    'Se och klipp varje token och session en AI-klient har, för vilken användare som helst.',
  'help.guide.mcp-tokens-admin.step.1':
    'Under API Token, hitta token via användare och namn; papperskorgen tar bort den och klienten stannar på en gång.',
  'help.guide.mcp-tokens-admin.step.2':
    'Under OAuth Sessioner, detsamma för webbläsarbaserade klienter: klient, användare och datum, och papperskorgen återkallar sessionen.',
  'help.guide.mcp-tokens-admin.result': 'Klienten måste kopplas upp igen av sin användare; inget annat ändras.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Tillämpningsområdena talar om vad en klient kunde göra; ett skrivskyddat tillämpningsområde är ofarligt att lämna kvar.',
  'help.guide.mcp-tokens-admin.tip.2': 'Att slå av MCP-tillägget återkallar allt på en gång.',
  // release-history
  'help.guide.release-history.title': 'Kolla efter en ny version',
  'help.guide.release-history.goal': 'Vet om din TREK är aktuell och vad nästa version för med sig.',
  'help.guide.release-history.step.1':
    'När en nyare version finns visas Uppdatering tillgänglig högst upp på adminsidan; Visa på GitHub öppnar den, och Så här uppdaterar du förklarar uppdateringen för Docker och för andra installationer.',
  'help.guide.release-history.step.2':
    'Versionshistorik listar varje version med sina noteringar; Visa detaljer fäller ut dem, den nyaste bär Senaste, och Ladda fler går längre bakåt.',
  'help.guide.release-history.result':
    'Uppdateringen sker på värden, genom att hämta den nya avbilden eller bygga den nya taggen; datakatalogen stannar kvar.',
  'help.guide.release-history.tip.1': 'Ta en säkerhetskopia före en uppdatering; fliken Säkerhetskopia ligger intill.',
  'help.guide.release-history.tip.2':
    'Förhandsversioner visas men tillkännages inte som uppdateringar om du inte kör en.',
  // create-backup
  'help.guide.create-backup.title': 'Gör och återställ en säkerhetskopia',
  'help.guide.create-backup.goal':
    'Ta en ögonblicksbild av hela instansen, förvara en kopia någon annanstans, och kunna lägga tillbaka den.',
  'help.guide.create-backup.step.1':
    'Under Databackup, klicka på Skapa säkerhetskopia. Den packar databasen och uppladdningarna till en fil på servern.',
  'help.guide.create-backup.step.2':
    'Ladda ner håller en kopia utanför maskinen; papperskorgen tar bort gamla för att frigöra plats.',
  'help.guide.create-backup.step.3':
    'Återställ på en säkerhetskopia, eller Ladda upp säkerhetskopia med en fil, ersätter nuvarande data efter att Återställa säkerhetskopia? frågat en gång.',
  'help.guide.create-backup.result':
    'En återställning tar tillbaka användare, resor, filer och inställningar som de var i den säkerhetskopian; alla loggas ut.',
  'help.guide.create-backup.tip.1':
    'Återställning är den enda åtgärden här som inte kan ångras. Gör en färsk säkerhetskopia först.',
  'help.guide.create-backup.tip.2':
    'Säkerhetskopior ligger i datakatalogen; en kopia på en annan maskin är det som gör dem till en säkerhetskopia.',
  // auto-backup
  'help.guide.auto-backup.title': 'Schemalägg säkerhetskopior',
  'help.guide.auto-backup.goal': 'Låt servern säkerhetskopiera sig själv och behålla bara de senaste.',
  'help.guide.auto-backup.step.1':
    'Under Automatisk säkerhetskopiering, slå på Aktivera automatisk säkerhetskopiering och välj Intervall, Kör varje timme och, för veckovis eller månadsvis, Veckodag eller Dag i månaden.',
  'help.guide.auto-backup.step.2':
    'Ta bort gamla säkerhetskopior efter anger hur länge en säkerhetskopia behålls; äldre försvinner när en ny görs.',
  'help.guide.auto-backup.result':
    'Säkerhetskopior dyker upp i listan enligt schema; ett misslyckande når adminkanalerna.',
  'help.guide.auto-backup.tip.1': 'Tiderna följer serverns tidszon, som visas på fliken Revision.',
  'help.guide.auto-backup.tip.2': 'Lagringen på servern är ändlig; att behålla tre till fem räcker oftast.',
  // audit-log
  'help.guide.audit-log.title': 'Läs revisionsloggen',
  'help.guide.audit-log.goal': 'Ta reda på vem som gjorde vad, och när.',
  'help.guide.audit-log.step.1':
    'Läs raderna: tid, användare, åtgärd, resurs, IP och detaljer, nyaste först. Åtgärderna är namngivna efter vad som hände, som en misslyckad inloggning, en MFA-ändring eller en återställning.',
  'help.guide.audit-log.step.2': 'Uppdatera laddar om toppen; Ladda fler går längre bakåt.',
  'help.guide.audit-log.result': 'Ett spår du kan lämna till den som frågar varför något ändrades.',
  'help.guide.audit-log.tip.1': 'Tiderna visas i serverns tidszon, som namnges ovanför tabellen.',
  'help.guide.audit-log.tip.2': 'Loggen kan bara byggas på; inget här kan redigeras eller tas bort från appen.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Resa',
  'help.ctx.trip.summary':
    'En resa, hela den: planen med sina dagar, sin karta och sina platser, och flikarna för transporter, bokningar, listor, kostnader, filer och samarbete. Var och en av dem har sin egen hjälpsida under den här.',
  'help.ctx.trip.bullet.1':
    'Flikraden: Plan, Transporter, Bokningar, Listor, Kostnader, Filer och Samarbete. Tillägg och plugins avgör vilka flikar som finns på din TREK.',
  'help.ctx.trip.bullet.2':
    'Plan är tre kolumner: dagarna till vänster, kartan i mitten, platserna till höger. Bokningar och transporter bor inne i planen, vid stoppet och mellan stoppen; flikarna listar dem.',
  'help.ctx.trip.bullet.3':
    'Dela uppe till höger öppnar resans människor: medlemmar, gäster, inbjudningslänken och den skrivskyddade allmänna länken.',
  'help.ctx.trip.bullet.4': 'Titel, datum, omslag och valuta redigeras från Mina resor, med pennan på resekortet.',
  'help.ctx.trip.bullet.5':
    'Vinkelpilarna vid en kolumns inre kant fäller ihop den och kartan tar utrymmet; den tunna avdelaren bredvid en kolumn ändrar dess bredd.',
  'help.ctx.trip.bullet.6': 'Ångra-pilen i dagarnas verktygsrad tar tillbaka den senaste ändringen i planen.',
  // add-member
  'help.guide.add-member.title': 'Lägg till en medlem',
  'help.guide.add-member.goal': 'Ge någon med ett TREK-konto åtkomst till den här resan.',
  'help.guide.add-member.step.1': 'Klicka på Dela uppe till höger.',
  'help.guide.add-member.step.2': 'Under Bjud in användare väljer du personen i listan och klickar på Bjud in.',
  'help.guide.add-member.step.3':
    'Personen syns nu under Åtkomst. Kronan markerar ägaren; ikonen i slutet av en rad tar bort åtkomsten igen.',
  'help.guide.add-member.result':
    'Medlemmen ser och redigerar resan som du, inom de nivåer administratören satt under Behörighetsinställningar.',
  'help.guide.add-member.tip.1':
    'Den som saknas i listan har inget TREK-konto ännu: lägg till personen som gäst, eller låt personen registrera sig via en inbjudningslänk.',
  'help.guide.add-member.tip.2': 'Siffran intill Åtkomst räknar människorna i resan; gäster listas separat nedanför.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Bjud in via länk',
  'help.guide.trip-invite-link.goal': 'Låt folk gå med i resan själva.',
  'help.guide.trip-invite-link.step.1':
    'Klicka på Dela, och sedan under Inbjudningslänk till resa på Skapa inbjudningslänk.',
  'help.guide.trip-invite-link.step.2':
    'Klicka på Kopiera och skicka länken. Alla med ett TREK-konto som öppnar den går med som medlem.',
  'help.guide.trip-invite-link.step.3':
    'Skapa ny byter ut länken och gör den gamla oanvändbar; Inaktivera stänger av den.',
  'help.guide.trip-invite-link.result': 'Den som öppnar länken är med i resan och dyker upp under Åtkomst.',
  'help.guide.trip-invite-link.tip.1':
    'Någon utan konto kan inte använda den. En administratör delar ut registreringslänkar under Administration, Användare, och kan knyta en till den här resan.',
  'help.guide.trip-invite-link.tip.2':
    'Använd Skapa ny när en länk hamnat i fel chatt: den gamla slutar fungera på en gång.',
  // add-guest
  'help.guide.add-guest.title': 'Lägg till en gäst utan konto',
  'help.guide.add-guest.goal': 'Räkna med någon som inte använder TREK.',
  'help.guide.add-guest.step.1': 'Klicka på Dela och rulla ner till Gäster.',
  'help.guide.add-guest.step.2': 'Skriv namnet i Gästens namn och klicka på Lägg till gäst.',
  'help.guide.add-guest.result': 'Gästen kan tilldelas kostnader, packlistposter och uppgifter, men kan inte logga in.',
  'help.guide.add-guest.tip.1':
    'Pennan byter namn på en gäst; ikonen i slutet av raden tar bort gästen tillsammans med dess andelar och tilldelningar.',
  'help.guide.add-guest.tip.2': 'Får personen ett konto senare, bjud in den som medlem och ta bort gästen.',
  // public-link
  'help.guide.public-link.title': 'Publicera en skrivskyddad länk',
  'help.guide.public-link.goal': 'Visa resan för människor som inte ska redigera den.',
  'help.guide.public-link.step.1':
    'Klicka på Dela; till höger, under Allmän länk, bockar du för vad länken får visa. Karta & Plan är alltid på; Bokningar, Packning, Kostnader och Chatt väljer du själv.',
  'help.guide.public-link.step.2': 'Klicka på Skapa länk, sedan på Kopiera.',
  'help.guide.public-link.step.3': 'Bockarna kan ändras så länge länken finns; Radera länk stoppar den.',
  'help.guide.public-link.result': 'Alla med länken ser de valda delarna utan att logga in och kan inte ändra något.',
  'help.guide.public-link.tip.1':
    'Länken listas ingenstans; den som har den kan öppna den, så behandla den som ett lösenord.',
  'help.guide.public-link.tip.2': 'För redigeringsrätt lägger du i stället till personen som medlem.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Lämna över resan eller lämna den',
  'help.guide.transfer-ownership.goal': 'Gör någon annan till ägare, eller kliv ur en resa som inte är din.',
  'help.guide.transfer-ownership.step.1':
    'Klicka på Dela. Under Åtkomst gör kronan på en medlems rad den personen till ägare; bekräfta frågan.',
  'help.guide.transfer-ownership.step.2':
    'Lämna resan på din egen rad tar dig ur resan; som ägare lämnar du över först.',
  'help.guide.transfer-ownership.result':
    'Den nya ägaren hanterar medlemmar och kan ta bort resan; du förblir en vanlig medlem.',
  'help.guide.transfer-ownership.tip.1':
    'Ägaren är den som skapade resan tills den lämnas över; att ta bort resan är ägarens ensak.',
  'help.guide.transfer-ownership.tip.2':
    'Ta bort åtkomst på en annan rad är samma knapp åt andra hållet: ägaren tar ut en medlem.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Ge kartan mer plats',
  'help.guide.collapse-columns.goal': 'Fäll ihop en kolumn eller ge den mer bredd.',
  'help.guide.collapse-columns.step.1':
    'Klicka på vinkelpilen vid dagkolumnens inre kant för att fälla ihop den; kartan tar utrymmet. Platskolumnen har samma vinkelpil.',
  'help.guide.collapse-columns.step.2': 'Klicka på vinkelpilen igen för att ta tillbaka kolumnen.',
  'help.guide.collapse-columns.step.3':
    'Dra den tunna avdelaren mellan en kolumn och kartan för att ändra kolumnens bredd.',
  'help.guide.collapse-columns.result': 'Bredderna sparas; kolumnerna kommer tillbaka öppna vid nästa besök.',
  'help.guide.collapse-columns.tip.1': 'Båda kolumnerna kan fällas ihop samtidigt för en vy med bara kartan.',
  'help.guide.collapse-columns.tip.2':
    'På en telefon finns inga kolumner: Plan och Platser är de två knapparna längst ner på kartan.',
  // undo-change
  'help.guide.undo-change.title': 'Ångra den senaste ändringen',
  'help.guide.undo-change.goal': 'Ta tillbaka det du just gjorde med planen.',
  'help.guide.undo-change.step.1':
    'Klicka på ångra-pilen i verktygsraden ovanför dagarna; dess verktygstips anger vilken ändring den tar tillbaka.',
  'help.guide.undo-change.result': 'Planen är som den var igen, och pilen gråas ut tills nästa ändring.',
  'help.guide.undo-change.tip.1':
    'Ångra täcker planen: tilldela, ta bort, ordna om och flytta platser, optimera en rutt, radera platser, kategoriändringar och importer.',
  'help.guide.undo-change.tip.2':
    'Den går ett steg djupt: bara den senaste ändringen kan tas tillbaka, och en ny ändring ersätter den.',

  // ── Screen: trip-places ───────────────────────────────────────────────────────────────
  'help.ctx.trip-places.title': 'Platser',
  'help.ctx.trip-places.summary':
    'Planens högra kolumn: resans alla platser, planerade eller inte, med sökning och filter, och sätten att få in platser, för hand, från en fil eller från en delad lista.',
  'help.ctx.trip-places.bullet.1':
    'Lägg till plats/aktivitet högst upp öppnar formuläret för en plats du skriver in eller söker fram. Medan en dag är öppen står det Ny plats på knappen, och Till dagen bredvid den skapar platsen direkt på den dagen.',
  'help.ctx.trip-places.bullet.2':
    'Importera fil tar .gpx-, .kml- och .kmz-filer; Importera lista tar en delad lista från Google Maps eller Naver Maps. En fil kan också bara släppas på kolumnen.',
  'help.ctx.trip-places.bullet.3':
    'Rullgardinsmenyn växlar mellan Alla, Oplanerat, Planerat och, när ett spår har importerats, Spår; under den sitter sökningen, kategorifiltret och stjärnan för ett minsta betyg.',
  'help.ctx.trip-places.bullet.4':
    'En rad visar bild, namn och beskrivning eller adress. Klicka på den för platsens detaljer, dra den till en dag, eller högerklicka den för Redigera, + Dag, Öppna hemsida, Google Maps, Spara i samling och Ta bort.',
  'help.ctx.trip-places.bullet.5':
    'Med en dag öppen lägger ett + i slutet av en oplanerad rad platsen på den dagen, och Planerat listar bara den dagen, med Visa hela resan för att vidga igen.',
  'help.ctx.trip-places.bullet.6':
    'Bocken längst till höger i filterraden startar en markering: flera rader på en gång får en ny kategori, hamnar i en samling eller tas bort.',
  // create-place
  'help.guide.create-place.title': 'Skapa en plats',
  'help.guide.create-place.goal': 'Lägg till en plats eller aktivitet för hand, med allt planen behöver veta om den.',
  'help.guide.create-place.step.1':
    'Klicka på Lägg till plats/aktivitet högst upp i platskolumnen (Ny plats medan en dag är öppen). Formuläret öppnas.',
  'help.guide.create-place.step.2':
    'Skriv in platsen i Sök efter platser... högst upp och välj ett resultat. Namn, Adress, Latitud och Longitud fylls i, och Platsdetaljer till höger visar bilder, en beskrivning och fakta om den. Inte rätt plats? Sök på Google i stället kör sökningen igen via Google.',
  'help.guide.create-place.step.3':
    'I Platsdetaljer blir en bild platsens bild när du klickar på den under Välj en bild; Använd den här texten tar över beskrivningen till formuläret.',
  'help.guide.create-place.step.4':
    'Kontrollera fälten: Namn krävs; Beskrivning och Noteringar är dina; Adress, Latitud och Longitud kommer från sökningen eller skrivs in; Kategori väljer en av resans kategorier, och + bredvid skapar en ny på stället; Hemsida tar länken.',
  'help.guide.create-place.step.5':
    'Klicka på Lägg till. Om en plats med samma namn redan finns i resan säger formuläret det och knappen blir Lägg till ändå.',
  'help.guide.create-place.result': 'Platsen finns i listan och på kartan, under Oplanerat tills den läggs på en dag.',
  'help.guide.create-place.tip.1':
    'Filer och Kostnader längst ner i formuläret fäster ett dokument vid platsen, eller öppnar Kostnader-redigeraren för dess utgift direkt efter att du sparat.',
  'help.guide.create-place.tip.2':
    'Utan en Google-nyckel går sökningen via TREK-indexet och OpenStreetMap: den hittar platsen, bara utan betyg, öppettider och foton.',
  'help.guide.create-place.tip.3':
    'En plats kan också börja på kartan: högerklicka stället, så öppnas formuläret med koordinater och adress ifyllda.',
  // place-to-open-day
  'help.guide.place-to-open-day.title': 'Lägg till en plats direkt på den öppna dagen',
  'help.guide.place-to-open-day.goal':
    'Hoppa över andra steget: skapa eller välj platsen och få den på dagen med en gång.',
  'help.guide.place-to-open-day.step.1':
    'Klicka på en dags rubrik i dagkolumnen. Dagen är öppen: dess kort är markerat, och platskolumnen får knappen Till dagen.',
  'help.guide.place-to-open-day.step.2':
    'Till dagen öppnar samma formulär som Ny plats, bara att platsen hamnar på den öppna dagen i samma stund som du klickar på Lägg till.',
  'help.guide.place-to-open-day.step.3':
    'En plats som redan finns hamnar på den öppna dagen med + i slutet av sin rad, eller via högerklick, + Dag.',
  'help.guide.place-to-open-day.result':
    'Platsen listas under dagen, sist; dra den uppåt eller nedåt dit den hör hemma.',
  'help.guide.place-to-open-day.tip.1':
    'Att dra en rad till en dag fungerar lika bra, och den kan släppa platsen mellan två stopp med en gång.',
  'help.guide.place-to-open-day.tip.2': 'Ångra i verktygsraden ovanför dagarna tar tillbaka tilldelningen.',
  // filter-places
  'help.guide.filter-places.title': 'Hitta en plats i listan',
  'help.guide.filter-places.goal': 'Smalna av kolumnen till de platser du är ute efter.',
  'help.guide.filter-places.step.1':
    'Rullgardinsmenyn högst upp växlar mellan Alla, Oplanerat (inte på någon dag ännu), Planerat (på en dag) och Spår (importerade GPX-spår), var och en med sitt antal.',
  'help.guide.filter-places.step.2': 'Skriv i Sök efter platser...; listan smalnar av medan du skriver.',
  'help.guide.filter-places.step.3':
    'Alla kategorier öppnar en lista där du bockar för en eller flera kategorier, Ingen kategori bland dem; Rensa filter längst ner nollställer den.',
  'help.guide.filter-places.step.4':
    'Stjärnan bredvid sätter ett minsta betyg: 5+, 4+ och så vidare visar bara platser du satt minst så högt betyg på.',
  'help.guide.filter-places.result': 'Antalet ovanför raderna säger hur många platser som stämmer; filtren kombineras.',
  'help.guide.filter-places.tip.1':
    'Med en dag öppen listar Planerat bara den dagen och säger det: Visar bara den öppna dagen, med Visa hela resan bredvid.',
  'help.guide.filter-places.tip.2':
    'Kartan smalnar av till den öppna dagen också; Alla i listan visar fortfarande resans alla platser.',
  // edit-place
  'help.guide.edit-place.title': 'Ändra en plats',
  'help.guide.edit-place.goal': 'Rätta ett namn, flytta nålen, lägg till en hemsida eller byt kategori.',
  'help.guide.edit-place.step.1':
    'Högerklicka raden och välj Redigera, eller öppna platsen och klicka på Redigera i dess detaljer.',
  'help.guide.edit-place.step.2':
    'Ändra det du behöver: Namn, Beskrivning, Noteringar, Adress, Latitud och Longitud, Kategori, Hemsida. Öppnat från en dag har formuläret också Anteckningar för denna dag och Börjar och Slutar för den dagen.',
  'help.guide.edit-place.step.3': 'Klicka på Uppdatera.',
  'help.guide.edit-place.result':
    'Ändringen slår igenom överallt där platsen syns: i listan, på kartan och på varje dag den ligger på.',
  'help.guide.edit-place.tip.1':
    'Anteckningar för denna dag hör till platsen just den dagen; Noteringar hör till platsen själv.',
  'help.guide.edit-place.tip.2':
    'Ett Slutar före Börjar blockerar Uppdatera; Tidsöverlappning med: varnar bara för att ett annat stopp på dagen har samma tid.',
  // delete-place
  'help.guide.delete-place.title': 'Ta bort en plats',
  'help.guide.delete-place.goal': 'Ta ut en plats ur resan för gott.',
  'help.guide.delete-place.step.1': 'Högerklicka raden och välj Ta bort, eller klicka på Ta bort i platsens detaljer.',
  'help.guide.delete-place.step.2':
    'Bekräfta. Om en natt var bokad på platsen, eller en bokning är knuten till den, säger frågan vad som följer med.',
  'help.guide.delete-place.result':
    'Platsen är borta från listan, kartan och varje dag; Ångra i verktygsraden ovanför dagarna tar tillbaka den.',
  'help.guide.delete-place.tip.1':
    'För att ta bort en plats från bara en dag, använd Ta bort från dag på det stoppet i stället.',
  'help.guide.delete-place.tip.2': 'Flera platser på en gång: bocken bredvid filtren startar en markering.',
  // select-places
  'help.guide.select-places.title': 'Ändra eller ta bort flera platser på en gång',
  'help.guide.select-places.goal': 'Städa listan i ett svep i stället för plats för plats.',
  'help.guide.select-places.step.1':
    'Klicka på bocken längst till höger i filterraden. Raderna får kryssrutor och en rad med åtgärderna dyker upp.',
  'help.guide.select-places.step.2': 'Bocka för raderna, eller Välj alla i raden; raden räknar det som är markerat.',
  'help.guide.select-places.step.3':
    'Change category ger dem alla en kategori; Spara i samling kopierar dem till en av dina samlingar; Ta bort det markerade tar bort dem efter en bekräftelse.',
  'help.guide.select-places.step.4': 'Klicka på bocken igen för att lämna markeringen.',
  'help.guide.select-places.result':
    'Ändringen gäller varje markerad plats; en borttagning kan ångras från verktygsraden ovanför dagarna.',
  'help.guide.select-places.tip.1':
    'Filtren fortsätter att fungera medan du markerar: filtrera till Oplanerat först, då fångar Välj alla precis dem.',
  'help.guide.select-places.tip.2':
    'Markera som besökt i dina listor dyker upp i raden när tillägget Samlingar är på: det bockar av platserna i de samlingar de är sparade i.',
  // import-places-file
  'help.guide.import-places-file.title': 'Importera platser från en GPX-, KML- eller KMZ-fil',
  'help.guide.import-places-file.goal': 'Ta in det som Google My Maps, Google Earth eller en GPS-tracker exporterade.',
  'help.guide.import-places-file.step.1': 'Klicka på Importera fil, eller släpp filen var som helst på platskolumnen.',
  'help.guide.import-places-file.step.2':
    'Välj filen eller dra in den i rutan. För en GPX, bocka för vad som ska importeras: Vägpunkter, Rutter, Spår (med spårgeometri); för KML och KMZ, Punkter (platsmarkeringar) och Stigar (LineStrings).',
  'help.guide.import-places-file.step.3':
    'Berika platser via Google slår upp varje importerad plats för att fylla i foton, adress och detaljer; det kräver Google-nyckeln.',
  'help.guide.import-places-file.step.4':
    'Klicka på Importera. Sammanfattningen säger hur många platser som skapades och hur många som hoppades över för att de redan fanns i resan.',
  'help.guide.import-places-file.result':
    'Platserna finns i listan; ett spår bär en ruttmarkering på sin rad, ritas ut på kartan och får sitt eget Spår-filter.',
  'help.guide.import-places-file.tip.1':
    'En fil som är för stor avvisas med storleksgränsen; exportera den igen utan foton, eller dela upp den.',
  'help.guide.import-places-file.tip.2': 'Importen kan ångras som helhet från verktygsraden ovanför dagarna.',
  // import-places-list
  'help.guide.import-places-list.title': 'Importera en delad lista från Google Maps eller Naver Maps',
  'help.guide.import-places-list.goal': 'Gör om en delad listlänk till platser.',
  'help.guide.import-places-list.step.1': 'Klicka på Importera lista och välj Google-lista eller Naver-lista.',
  'help.guide.import-places-list.step.2':
    'Klistra in listans delade länk. En vägbeskrivningslänk från Google Maps fungerar också: dess stopp blir platser, i körordning.',
  'help.guide.import-places-list.step.3': 'Klicka på Importera.',
  'help.guide.import-places-list.result':
    'Varje plats i listan finns i resan, med namnet från listan; platser som redan finns i resan hoppas över.',
  'help.guide.import-places-list.tip.1':
    'Listan måste vara delad offentligt; länken till en privat lista importerar ingenting.',
  'help.guide.import-places-list.tip.2':
    'Naver-lista kräver tillägget Naver List Import, som administratören slår på under Tillägg; utan det står det Google-lista på knappen.',
};

export default help;
