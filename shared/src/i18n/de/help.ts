import type { TranslationStrings } from '../types';

const help: TranslationStrings = {
  'help.title': 'Hilfe & Doku',
  'help.search': 'Doku durchsuchen…',
  'help.contents': 'Inhalt',
  'help.noResults': 'Keine passenden Seiten.',
  'help.errorTitle': 'Seite konnte nicht geladen werden',
  'help.errorBody': 'Die Hilfe-Inhalte kommen aus dem TREK-Wiki. Prüfe deine Verbindung und versuch es erneut.',

  // ── Hilfecenter (das Panel hinter dem ? in der Navigationsleiste) ─────────
  'help.center.button': 'Hilfe zu dieser Ansicht',
  'help.center.title': 'Hilfe',
  'help.center.onThisScreen': 'Auf dieser Ansicht',
  'help.center.screens': 'Ansichten',
  'help.center.thisScreen': 'Diese Ansicht',
  'help.center.subScreens': 'Unteransichten: {count}',
  'help.center.subScreensLabel': 'Unteransichten',
  'help.center.guidesCount': '{count} Anleitungen',
  'help.center.goToScreen': 'Zu {screen} wechseln',
  'help.center.overview': 'Überblick',
  'help.center.howTo': 'Wie kann ich…',
  'help.center.searchPlaceholder': 'Anleitungen und Doku durchsuchen…',
  'help.center.searchEmpty': 'Nichts gefunden für „{query}".',
  'help.center.searchGuides': 'Anleitungen',
  'help.center.searchDocs': 'Doku',
  'help.center.searchError': 'Die Suche ist gerade nicht verfügbar.',
  'help.center.back': 'Zurück',
  'help.center.close': 'Hilfe schließen',
  'help.center.steps': '{count} Schritte',
  'help.center.step': 'Schritt {n}',
  'help.center.stepsLabel': 'Schritte',
  'help.center.stepOf': 'Schritt {n} von {total}',
  'help.center.screenshot': 'Screenshot',
  'help.center.result': 'Das Ergebnis',
  'help.center.tips': 'Gut zu wissen',
  'help.center.related': 'Verwandt',
  'help.center.openDocs': 'In Hilfe & Doku öffnen',
  'help.center.docsSection': 'In der Doku',
  'help.center.noContext': 'Für diese Ansicht gibt es noch keine Anleitung.',
  'help.center.noContextHint': 'Durchsuche die Doku oder sag uns, wonach du gesucht hast.',
  'help.center.feedback': 'Fehlt etwas?',
  'help.center.feedbackLink': 'Sag es uns auf GitHub',
  'help.center.discord': 'Auf Discord fragen',
  'help.center.quick': 'Kurz',
  'help.center.guide': 'Anleitung',
  'help.center.tour': 'Rundgang',
  'help.center.imageAlt': 'Schritt {n} von „{title}"',

  // ── Ansicht: Dashboard ────────────────────────────────────────────────────
  'help.ctx.dashboard.title': 'Dashboard',
  'help.ctx.dashboard.summary':
    'Das Dashboard ist die Eingangstür zu jeder Reise. Die Bordkarte oben zeigt die Reise, die gerade läuft oder als Nächstes ansteht, die Reihe darunter zählt, was du bisher bereist hast, und die Karten listen alles, was du planst, archiviert hast oder schon hinter dir hast.',
  'help.ctx.dashboard.bullet.1':
    'Bordkarte: die laufende oder nächste Reise mit Daten, Mitreisenden, Orten und Countdown. Ein Klick öffnet die Reise.',
  'help.ctx.dashboard.bullet.2':
    'Reisestatistik: besuchte Länder, Reisen, Tage unterwegs und geflogene Distanz, über alle deine Reisen.',
  'help.ctx.dashboard.bullet.3':
    'Reisekarten, gefiltert nach Geplant, Archiviert und Abgeschlossen, als Raster oder Liste. Fahr über eine Karte für Bearbeiten, Duplizieren, Archivieren und Löschen.',
  'help.ctx.dashboard.bullet.4':
    'Widgets rechts: Währungsrechner, Weltuhren, anstehende Buchungen und Sammlungen. Jedes davon lässt sich abschalten.',
  'help.ctx.dashboard.bullet.5': 'Die Karte „Neue Reise“ und der Button unten rechts starten beide eine neue Reise.',

  // create-trip
  'help.guide.create-trip.title': 'Eine Reise anlegen',
  'help.guide.create-trip.goal': 'Eine neue Reise mit Name, Daten und Titelbild starten.',
  'help.guide.create-trip.step.1':
    'Klick auf „Neue Reise“. Die Karte am Ende deiner Reisen und der Button unten rechts tun dasselbe.',
  'help.guide.create-trip.step.2':
    'Gib der Reise einen Namen. Das ist das einzige Pflichtfeld, alles andere kannst du später ergänzen.',
  'help.guide.create-trip.step.3':
    'Wähle Start- und Enddatum. TREK legt pro Datum einen Tag an, dein Reiseplan ist damit bereit zum Befüllen.',
  'help.guide.create-trip.step.4':
    'Optional: ein Titelbild. Lade ein eigenes hoch, zieh eines hinein oder such auf Unsplash nach dem Reiseziel.',
  'help.guide.create-trip.step.5': 'Klick auf „Neue Reise erstellen“.',
  'help.guide.create-trip.result':
    'Die Reise erscheint auf deinem Dashboard. Ist sie deine nächste, übernimmt sie die Bordkarte oben.',
  'help.guide.create-trip.tip.1':
    'Die Daten lassen sich später ändern. Gibt es schon Buchungen, fragt TREK, ob sie mit den Tagen verschoben werden sollen.',
  'help.guide.create-trip.tip.2':
    'Die Reisewährung, die du hier wählst, ist die, in die jede Ausgabe umgerechnet wird. Nimm die Währung des Reiseziels.',

  // edit-trip
  'help.guide.edit-trip.title': 'Eine Reise bearbeiten',
  'help.guide.edit-trip.goal': 'Eine Reise umbenennen, die Daten ändern oder die Einstellungen anpassen.',
  'help.guide.edit-trip.step.1': 'Fahr über die Reisekarte (oder die Bordkarte) und klick auf den Stift.',
  'help.guide.edit-trip.step.2':
    'Ändere, was du brauchst: Name, Beschreibung, Daten, Titelbild, Währung, Erinnerung oder Mitglieder.',
  'help.guide.edit-trip.step.3': 'Klick auf „Aktualisieren“.',
  'help.guide.edit-trip.result': 'Die Karte aktualisiert sich sofort, für jedes Mitglied der Reise.',
  'help.guide.edit-trip.tip.1':
    'Verschiebst du die Daten einer Reise, die schon Buchungen hat, folgt ein zweiter Schritt mit der Frage, ob die Buchungen mitwandern sollen.',

  // cover-image
  'help.guide.cover-image.title': 'Ein Titelbild setzen',
  'help.guide.cover-image.goal': 'Einer Reise ein Bild geben, das auf der Karte und der Bordkarte erscheint.',
  'help.guide.cover-image.step.1': 'Öffne das Bearbeiten-Formular der Reise über den Stift auf ihrer Karte.',
  'help.guide.cover-image.step.2':
    'Unter „Titelbild“ ein Foto hineinziehen, zum Hochladen klicken oder ein Reiseziel in die Unsplash-Suche tippen.',
  'help.guide.cover-image.step.3': 'Foto auswählen und auf „Aktualisieren“ klicken.',
  'help.guide.cover-image.result':
    'Das Foto wird mit der Reise gespeichert und überall angezeigt, wo die Reise gelistet ist.',
  'help.guide.cover-image.tip.1':
    'Fotos aus der Unsplash-Suche werden automatisch mit Urheber versehen, eigene Uploads bleiben auf deinem Server.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Eine Reise duplizieren',
  'help.guide.duplicate-trip.goal': 'Eine Reise als Vorlage für eine neue wiederverwenden.',
  'help.guide.duplicate-trip.step.1': 'Fahr über die Karte und klick auf das Duplizieren-Symbol.',
  'help.guide.duplicate-trip.step.2': 'Lies, was kopiert wird und was nicht, dann bestätige.',
  'help.guide.duplicate-trip.result': 'Eine Kopie erscheint neben dem Original, bereit zum Umbenennen und Umdatieren.',
  'help.guide.duplicate-trip.tip.1':
    'Tage, Orte, Buchungen, Budgetposten, Packlisten und Tagesnotizen kommen mit. Mitglieder, Chat, Umfragen, Dateien und Freigabelinks nicht.',

  // archive-trip
  'help.guide.archive-trip.title': 'Eine Reise archivieren und wiederherstellen',
  'help.guide.archive-trip.goal': 'Eine Reise beiseitelegen, ohne sie zu löschen, und später zurückholen.',
  'help.guide.archive-trip.step.1': 'Fahr über die Karte und klick auf „Archivieren“.',
  'help.guide.archive-trip.step.2': 'Stell den Filter über den Karten auf „Archiviert“, um sie wiederzusehen.',
  'help.guide.archive-trip.step.3':
    'Klick auf der Karte auf „Wiederherstellen“, um sie zurück nach „Geplant“ zu holen.',
  'help.guide.archive-trip.result':
    'Archivierte Reisen behalten alles. Sie räumen nur das Dashboard und den Kalender-Feed aller Reisen frei.',

  // delete-trip
  'help.guide.delete-trip.title': 'Eine Reise löschen',
  'help.guide.delete-trip.goal': 'Eine Reise endgültig entfernen.',
  'help.guide.delete-trip.step.1': 'Fahr über die Karte und klick auf den Papierkorb.',
  'help.guide.delete-trip.step.2': 'Bestätige. Der Dialog nennt die Reise beim Namen, damit du die richtige erwischst.',
  'help.guide.delete-trip.result':
    'Die Reise, ihre Tage, Orte, Buchungen und Dateien sind weg. Es gibt kein Zurück, im Zweifel lieber archivieren.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Abgeschlossene Reisen finden, Raster und Liste wechseln',
  'help.guide.filter-and-view.goal': 'Beendete oder archivierte Reisen sehen und das Layout wählen, das dir liegt.',
  'help.guide.filter-and-view.step.1':
    'Nutze „Geplant“, „Archiviert“ und „Abgeschlossen“ über den Karten. Abgeschlossen ist jede Reise, deren Enddatum vorbei ist.',
  'help.guide.filter-and-view.step.2':
    'Klick auf das Listen-Symbol für eine kompakte Liste, noch einmal für das Raster.',
  'help.guide.filter-and-view.result': 'Das Dashboard merkt sich dein Layout auf diesem Gerät.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Alle Reisen im Kalender abonnieren',
  'help.guide.calendar-feed.goal':
    'Tage und Buchungen jeder aktiven Reise in deiner Kalender-App sehen, immer synchron.',
  'help.guide.calendar-feed.step.1': 'Klick auf das Kalender-Symbol neben dem Ansichts-Umschalter.',
  'help.guide.calendar-feed.step.2': 'Klick auf „Enable calendar subscription“. TREK erzeugt einen privaten Feed-Link.',
  'help.guide.calendar-feed.step.3':
    'Füge den Feed mit einem der Buttons hinzu (Google, Apple, Outlook) oder kopiere den Link in jede Kalender-App, die URLs abonniert.',
  'help.guide.calendar-feed.result':
    'Jede aktive Reise erscheint in deinem Kalender und aktualisiert sich von selbst. Archivierte Reisen und Reisen, die vor mehr als 90 Tagen endeten, bleiben außen vor.',
  'help.guide.calendar-feed.tip.1':
    'Der Link ist ein Geheimnis. Wer ihn hat, kann den Feed lesen; im selben Dialog kannst du ihn zurückziehen, falls er durchsickert.',

  // widgets
  'help.guide.widgets.title': 'Dashboard-Widgets auswählen',
  'help.guide.widgets.goal': 'Die Statistikreihe und die Widgets rechts ein- oder ausblenden.',
  'help.guide.widgets.step.1': 'Öffne das Avatar-Menü oben rechts und wähle „Einstellungen“.',
  'help.guide.widgets.step.2': 'Wechsle zum Tab „Erscheinungsbild“.',
  'help.guide.widgets.step.3':
    'Unter „Dashboard-Widgets“ jedes Widget ein- oder ausschalten. Desktop und Mobil werden getrennt eingestellt.',
  'help.guide.widgets.step.4': 'Zurück zum Dashboard. Die Änderung gilt sofort.',
  'help.guide.widgets.result':
    'Ausgeblendete Widgets machen Platz für deine Reisen; schaltest du die ganze rechte Spalte ab, wird das Layout zentriert.',
  'help.guide.widgets.link': 'Erscheinungsbild-Einstellungen öffnen',

  // currency-widget
  'help.guide.currency-widget.title': 'Währungen umrechnen',
  'help.guide.currency-widget.goal': 'Einen Betrag mit aktuellen Kursen zwischen zwei Währungen umrechnen.',
  'help.guide.currency-widget.step.1': 'Betrag eintippen und die beiden Währungen wählen.',
  'help.guide.currency-widget.step.2': 'Der Pfeil dazwischen tauscht das Paar, der Kreispfeil holt den Kurs neu.',
  'help.guide.currency-widget.result': 'Dein Währungspaar wird in deinem Konto gemerkt und ist auf jedem Gerät gleich.',
  'help.guide.currency-widget.tip.1':
    'Die Kurse kommen von der Europäischen Zentralbank und werden einmal täglich aktualisiert.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Weltuhren hinzufügen',
  'help.guide.timezones-widget.goal': 'Die Ortszeit an deinen Reisezielen im Blick behalten.',
  'help.guide.timezones-widget.step.1': 'Klick im Widget „Zeitzonen“ auf + und such nach einer Stadt.',
  'help.guide.timezones-widget.step.2': 'Eine Uhr entfernst du mit dem × daneben.',
  'help.guide.timezones-widget.result': 'Deine Uhren werden mit deinem Konto gespeichert.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay ist dein persönlicher Urlaubsplaner: wie viele Urlaubstage du im Jahr hast, welche du eingetragen hast und was übrig ist. Das Raster zeigt das ganze Jahr auf einen Blick; in der Seitenleiste liegen Jahresauswahl, die Personen, mit denen du planst, geteilte Kalender, die Legende und dein Urlaubsanspruch.',
  'help.ctx.vacay.bullet.1':
    'Jahresraster: zwölf Monatskarten, eine Zelle pro Tag. Klick auf einen Tag, um ihn einzutragen oder zu löschen. Ein kleiner blauer Punkt markiert Tage, die schon eine Reise abdeckt.',
  'help.ctx.vacay.bullet.2':
    'Leiste unten: Modus Urlaub oder Betriebsferien, dazu die Schalter Halbtag und Ausgleich, die ändern, was ein Klick einträgt.',
  'help.ctx.vacay.bullet.3':
    'Urlaubsanspruch: deine Tage für das Jahr, wie viele weg sind und wie viele übrig, inklusive Mitnahme aus der Vorperiode.',
  'help.ctx.vacay.bullet.4':
    'Personen sind Leute, die mit deinem Plan verschmolzen sind, jede in ihrer Farbe. Geteilte Kalender sind Nur-Lese-Ringe der freien Tage anderer.',
  'help.ctx.vacay.bullet.5':
    'Einstellungen regeln Wochenenden, Wochenbeginn, Urlaubsmitnahme, dein Urlaubsjahr, Betriebsferien sowie Feiertags- und Schulferienkalender.',
  // log-day
  'help.guide.log-day.title': 'Einen Urlaubstag eintragen',
  'help.guide.log-day.goal': 'Einen freien Tag im Jahresraster markieren und zusehen, wie der Saldo folgt.',
  'help.guide.log-day.step.1':
    'Schau auf die Leiste unten: Der linke Button in deiner Farbe heißt, ein Klick trägt einen Urlaubstag für dich ein.',
  'help.guide.log-day.step.2':
    'Klick auf einen Tag in einer Monatskarte. Er füllt sich mit deiner Farbe, und „Weg“ zählt einen Tag mehr.',
  'help.guide.log-day.step.3': 'Klick denselben Tag noch einmal, um ihn zu löschen.',
  'help.guide.log-day.result':
    'Der Tag ist eingetragen, Tage, Weg und Rest aktualisieren sich sofort, und alle, die mit deinem Plan verschmolzen sind, sehen es live.',
  'help.guide.log-day.tip.1':
    'Wochenenden lassen sich nicht eintragen, solange in den Einstellungen „Wochenenden sperren“ an ist.',
  'help.guide.log-day.tip.2':
    'Ein blauer Punkt in einer Zelle heißt, eine deiner Reisen deckt diesen Tag ab. So siehst du, wo Urlaub und Reise zusammenpassen.',
  // half-day
  'help.guide.half-day.title': 'Einen halben Tag eintragen',
  'help.guide.half-day.goal': 'Einen Nachmittag freinehmen, ohne einen ganzen Urlaubstag zu verbrauchen.',
  'help.guide.half-day.step.1':
    'Schalte in der Leiste „Halbtag“ ein. Der orange Punkt ist die Markierung, die ein halber Tag im Raster bekommt.',
  'help.guide.half-day.step.2':
    'Klick auf einen Tag. Er wird als 0,5 eingetragen und trägt den orangen Punkt in der Ecke.',
  'help.guide.half-day.step.3':
    'Schalte „Halbtag“ danach wieder aus; ein Klick auf einen halben Tag mit anderen Einstellungen wandelt ihn an Ort und Stelle um.',
  'help.guide.half-day.result':
    '„Weg“ wächst um 0,5. Halbtag und Ausgleich sind unabhängig, also geht auch ein halber Ausgleichstag.',
  'help.guide.half-day.tip.1':
    'Die Leiste zeigt immer die Markierung, die dein nächster Klick setzt. So kannst du vor dem Eintragen prüfen.',
  // comp-day
  'help.guide.comp-day.title': 'Ausgleich oder Gleitzeit eintragen',
  'help.guide.comp-day.goal': 'Freizeitausgleich nehmen, der keine Urlaubstage kostet.',
  'help.guide.comp-day.step.1':
    'Schalte in der Leiste „Ausgleich“ ein. Die schraffierte Scheibe ist das Aussehen eines Ausgleichstags im Raster.',
  'help.guide.comp-day.step.2':
    'Klick auf einen Tag. Er füllt sich mit einer diagonalen Schraffur in deiner Farbe statt mit einer vollen Fläche.',
  'help.guide.comp-day.result': 'Ausgleichstage werden neben den Anspruchskacheln gezählt und verringern „Rest“ nie.',
  'help.guide.comp-day.tip.1':
    'Abgefeierte Überstunden, Gleitzeit, ein freier Tag als Ausgleich: alles, was frei ist, aber kein Urlaub, gehört hierher.',
  // entitlement
  'help.guide.entitlement.title': 'Deinen Urlaubsanspruch setzen',
  'help.guide.entitlement.goal': 'Vacay sagen, wie viele Urlaubstage du im Jahr hast.',
  'help.guide.entitlement.step.1': 'Klick in der Seitenleiste auf die Kachel „Tage“ unter Urlaubsanspruch.',
  'help.guide.entitlement.step.2': 'Tipp deine Anzahl Tage ein und drück Enter.',
  'help.guide.entitlement.result':
    '„Rest“ wird neu berechnet aus deinem Anspruch, einer eventuellen Mitnahme und den verbrauchten Tagen.',
  'help.guide.entitlement.tip.1':
    'Jedes Jahr hat seinen eigenen Anspruch, eine Änderung hier betrifft nur das gewählte Jahr.',
  // years
  'help.guide.years.title': 'Jahre hinzufügen und wechseln',
  'help.guide.years.goal': 'Schon das nächste Jahr planen oder auf das letzte zurückschauen.',
  'help.guide.years.step.1':
    'Klick auf das + rechts neben der Jahreszahl für das nächste Jahr oder auf das + links für das vorherige.',
  'help.guide.years.step.2': 'Wechsle zwischen den Jahren mit den Pfeilen oder den Jahres-Chips darunter.',
  'help.guide.years.step.3':
    'Zum Entfernen eines Jahres fahr über seinen Chip und klick auf das kleine Minus. Seine Einträge gehen mit, also bestätige mit Bedacht.',
  'help.guide.years.result':
    'Jedes Jahr behält seinen eigenen Anspruch und seine Einträge; die Urlaubsmitnahme verbindet sie.',
  // company-holidays
  'help.guide.company-holidays.title': 'Betriebsferien markieren',
  'help.guide.company-holidays.goal':
    'Tage sperren, an denen die ganze Firma frei hat, ohne jemandes Anspruch anzutasten.',
  'help.guide.company-holidays.step.1':
    'Öffne die Einstellungen und prüf, dass „Betriebsferien“ an ist. Das ist die Voreinstellung; die Leiste bietet den Modus nur an, solange es an ist.',
  'help.guide.company-holidays.step.2': 'Zurück im Raster stellst du die Leiste auf den Modus „Betriebsferien“.',
  'help.guide.company-holidays.step.3':
    'Klick auf die Tage. Sie werden bernsteinfarben und tauchen in der Legende auf.',
  'help.guide.company-holidays.result':
    'Betriebsferien sehen alle, die mit dem Plan verschmolzen sind, und sie verringern „Rest“ nie.',
  'help.guide.company-holidays.tip.1':
    'Jede verschmolzene Person kann Betriebsferien bearbeiten, also einigt euch, wer sie pflegt.',
  // public-holidays
  'help.guide.public-holidays.title': 'Feiertage anzeigen',
  'help.guide.public-holidays.goal': 'Die Feiertage deines Landes oder deiner Region ins Raster holen.',
  'help.guide.public-holidays.step.1': 'Öffne die Einstellungen und schalte „Feiertage“ ein.',
  'help.guide.public-holidays.step.2':
    'Klick auf „Kalender hinzufügen“, wähl das Land und, wo es darauf ankommt, die Region. Farbe und Beschriftung nach Belieben.',
  'help.guide.public-holidays.step.3':
    'Schließ die Einstellungen. Die Feiertage erscheinen im Raster und in der Legende.',
  'help.guide.public-holidays.result':
    'Feiertage werden in der Farbe des Kalenders markiert und zählen nie gegen deinen Anspruch.',
  'help.guide.public-holidays.tip.1':
    'Du kannst mehrere Kalender anlegen, etwa deine eigene Region und die einer verschmolzenen Kollegin.',
  // school-holidays
  'help.guide.school-holidays.title': 'Schulferien anzeigen',
  'help.guide.school-holidays.goal': 'Die Schulferien deiner Region neben deinen eigenen freien Tagen sehen.',
  'help.guide.school-holidays.step.1': 'Öffne die Einstellungen und schalte „Schulferien“ ein.',
  'help.guide.school-holidays.step.2':
    'Klick auf „Kalender hinzufügen“ und wähl das Land. Wo ein Land seinen Kalender aufteilt, wähl auch die Region oder Gruppe.',
  'help.guide.school-holidays.step.3':
    'Schließ die Einstellungen. Jede Ferienzeit bekommt ein farbiges Band am unteren Rand ihrer Tage.',
  'help.guide.school-holidays.result': 'Schulferien sind rein visuell: Sie verringern niemandes Anspruch.',
  'help.guide.school-holidays.tip.1':
    'Region fehlt? Dein Administrator kann Schulferien von Hand pflegen unter Admin, Personalisierung, Schulferien.',
  // weekends
  'help.guide.weekends.title': 'Wochenenden sperren und Wochenbeginn setzen',
  'help.guide.weekends.goal':
    'Wochenenden aus der Zählung halten und die Woche an dem Tag beginnen, den du gewohnt bist.',
  'help.guide.weekends.step.1': 'Öffne die Einstellungen.',
  'help.guide.weekends.step.2': 'Schalte „Wochenenden sperren“ ein und wähl, welche Tage als dein Wochenende gelten.',
  'help.guide.weekends.step.3': 'Unter „Woche beginnt am“ wählst du Montag oder Sonntag.',
  'help.guide.weekends.result':
    'Gesperrte Tage sind im Raster ausgegraut und lassen sich nicht aus Versehen eintragen.',
  // leave-year
  'help.guide.leave-year.title': 'Dein Urlaubsjahr festlegen',
  'help.guide.leave-year.goal':
    'Den Anspruch über ein Geschäftsjahr oder ab Eintrittsdatum zählen statt von Januar bis Dezember.',
  'help.guide.leave-year.step.1': 'Öffne die Einstellungen und such „Urlaubsjahr“.',
  'help.guide.leave-year.step.2':
    'Wähl Kalenderjahr, Geschäftsjahr (mit Monat und Tag des Beginns) oder Eintrittsdatum (mit dem Datum, an dem du angefangen hast).',
  'help.guide.leave-year.result':
    'Anspruch, verbrauchte Tage und Mitnahme folgen dieser Periode, und das Raster beginnt mit ihrem ersten Monat.',
  'help.guide.leave-year.tip.1':
    'Diese Einstellung ist persönlich: In einem verschmolzenen Plan behält jeder sein eigenes Urlaubsjahr und seine Zahlen.',
  // carry-over
  'help.guide.carry-over.title': 'Resturlaub mitnehmen',
  'help.guide.carry-over.goal': 'Was am Ende einer Periode übrig ist, der nächsten gutschreiben.',
  'help.guide.carry-over.step.1': 'Öffne die Einstellungen.',
  'help.guide.carry-over.step.2': 'Schalte „Urlaubsmitnahme“ ein.',
  'help.guide.carry-over.result':
    'Der mitgenommene Betrag wird über alle deine Jahre neu berechnet und unter dem Anspruch angezeigt.',
  'help.guide.carry-over.tip.1': 'Ausschalten setzt jeden Mitnahme-Saldo auf null zurück.',
  // invite
  'help.guide.invite.title': 'Gemeinsam mit jemandem planen',
  'help.guide.invite.goal':
    'Deinen Plan mit einem anderen TREK-Nutzer verschmelzen, damit ihr eure freien Tage in einem Raster seht.',
  'help.guide.invite.step.1': 'Klick auf das Personen-Symbol im Panel „Personen“.',
  'help.guide.invite.step.2': 'Wähl den Nutzer und schick die Einladung.',
  'help.guide.invite.step.3':
    'Die Person bekommt eine Benachrichtigung und nimmt an. Bis dahin steht die Einladung als ausstehend da.',
  'help.guide.invite.result':
    'Beide Pläne verschmelzen: Jede Person hat eine Farbe, ihr könnt füreinander Tage eintragen, und alles synchronisiert sich live.',
  'help.guide.invite.tip.1':
    'Zum Rückgängigmachen nutzt du „Auflösen“ unter „Fusion auflösen“ in den Einstellungen. Die Einträge jeder Person kehren in ihren eigenen Plan zurück.',
  'help.guide.invite.tip.2':
    'Soll die andere Person deine Tage nur sehen, teil deinen Kalender, statt zu verschmelzen.',
  // share-calendar
  'help.guide.share-calendar.title': 'Deinen Kalender nur zum Lesen teilen',
  'help.guide.share-calendar.goal': 'Jemanden sehen lassen, wann du frei hast, ohne Mitsprache an deinem Plan.',
  'help.guide.share-calendar.step.1': 'Klick auf das Teilen-Symbol im Panel „Geteilte Kalender“.',
  'help.guide.share-calendar.step.2': 'Wähl den Nutzer und klick auf „Teilen“. Eine Annahme ist nicht nötig.',
  'help.guide.share-calendar.step.3':
    'Mit dir geteilte Kalender erscheinen im selben Panel; das Auge blendet einen aus, „Nicht mehr teilen“ zieht deinen zurück.',
  'help.guide.share-calendar.result':
    'Deine freien Tage erscheinen als farbiger Ring in ihrem Raster. Nichts, was du teilst, kann von dort bearbeitet werden.',
  'help.guide.share-calendar.tip.1':
    'Teilen und Fusion sind unabhängig: Du kannst mit einer Person verschmolzen sein und mit anderen teilen.',
  'help.guide.share-calendar.tip.2': 'Fahr über einen umringten Tag, um zu sehen, wer frei hat und wie lange.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Der Atlas ist dein Reise-Fußabdruck auf einer Weltkarte: Jedes Land, in das dich eine Reise geführt hat, ist eingefärbt, und die Länder von vor TREK trägst du von Hand nach. Zoom hinein für Regionen, führe eine Wunschliste mit Orten, die du noch sehen willst, und lies deine Zahlen im Glas-Panel unten ab.',
  'help.ctx.atlas.bullet.1':
    'Die Karte: Besuchte Länder tragen eine Farbe, die ihnen bleibt, geplante Länder haben eine gestrichelte Kontur, Länder der Wunschliste eine Schraffur, alles andere ist grau. Fahr über ein Land für seine Reisen, Orte sowie ersten und letzten Besuch.',
  'help.ctx.atlas.bullet.2':
    'Suche oben: Tipp ein Land oder einen Ort ein. Ein Land fliegt die Karte an und öffnet sein Popup; ein Ort landet in seiner Region, damit du die markieren kannst.',
  'help.ctx.atlas.bullet.3':
    'Geplante Länder anzeigen, oben rechts: blendet die Länder deiner kommenden Reisen ein. Der Schalter erscheint nur, solange du welche hast.',
  'help.ctx.atlas.bullet.4':
    'Panel unten: der Tab Statistik mit Ländern, Reisen, Orten, Städten, Tagen, Kontinenten und deiner Serie; der Tab Wunschliste mit allem, was noch vor dir liegt.',
  'help.ctx.atlas.bullet.5':
    'Regionen: Ab Zoomstufe 5 wechselt die Karte zu Bundesländern und Provinzen, jede einzeln anklickbar zum Markieren oder Entfernen.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: Mit verbundenem Addon hakt ein Panel links neben der Statistik Wünsche ab und ergänzt Länder aus deinen Aufzeichnungen, nie ohne deine Bestätigung.',
  // mark-country
  'help.guide.mark-country.title': 'Ein Land als besucht markieren',
  'help.guide.mark-country.goal': 'Trag ein Land nach, in dem du vor TREK warst, damit Karte und Zähler es mitnehmen.',
  'help.guide.mark-country.step.1': 'Tipp das Land in das Suchfeld oben auf der Karte.',
  'help.guide.mark-country.step.2':
    'Wähl es aus der Liste. Die Karte fliegt hin und ein Popup für das Land öffnet sich.',
  'help.guide.mark-country.step.3': 'Wähl Als besucht markieren.',
  'help.guide.mark-country.result':
    'Das Land bekommt seine Farbe auf der Karte und Länder zählt eins mehr. Die Farbe ist dauerhaft: Weitere Länder zu markieren mischt die übrigen nie neu.',
  'help.guide.mark-country.tip.1':
    'Ein Klick auf ein graues Land auf der Karte öffnet dasselbe Popup; die Suche ist der sichere Weg bei kleinen Ländern.',
  'help.guide.mark-country.tip.2':
    'Ein von Hand markiertes Land zählt immer als besucht, egal welche Daten eine Reise dorthin hat.',
  // unmark-country
  'help.guide.unmark-country.title': 'Ein markiertes Land entfernen',
  'help.guide.unmark-country.goal': 'Nimm ein von Hand markiertes Land wieder von der Karte.',
  'help.guide.unmark-country.step.1':
    'Such das Land und wähl es, oder klick es auf der Karte an. Bei einem selbst markierten Land fragt das Popup, ob es entfernt werden soll.',
  'help.guide.unmark-country.step.2': 'Bestätige mit Entfernen.',
  'help.guide.unmark-country.result': 'Das Land wird wieder grau und verlässt deinen Zähler.',
  'help.guide.unmark-country.tip.1':
    'Nur von Hand markierte Länder lassen sich so entfernen. Ein Land mit Reisen oder Orten bleibt, solange die es tun; Entfernen steht auch in seiner Detailkarte im Panel, wenn es von Hand markiert wurde.',
  // country-details
  'help.guide.country-details.title': 'Sehen, was du in einem Land gemacht hast',
  'help.guide.country-details.goal':
    'Öffne ein besuchtes Land und spring zu den Reisen, die dich dorthin gebracht haben.',
  'help.guide.country-details.step.1': 'Such ein Land, das du besucht hast.',
  'help.guide.country-details.step.2':
    'Wähl es. Die Karte fliegt hin und das Panel unten bekommt eine Karte mit Flagge, Orten, Reisen und einem Chip pro Reise.',
  'help.guide.country-details.result': 'Klick auf einen Reise-Chip, um die Reise im Planer zu öffnen.',
  'help.guide.country-details.tip.1':
    'Fährst du auf der Karte über das Land, siehst du dieselben Zahlen plus ersten und letzten Besuch.',
  // planned-countries
  'help.guide.planned-countries.title': 'Die Länder zeigen, in die du fährst',
  'help.guide.planned-countries.goal':
    'Hol die Länder deiner kommenden Reisen auf die Karte, ohne sie als besucht zu zählen.',
  'help.guide.planned-countries.step.1':
    'Schalte Geplante Länder anzeigen oben rechts ein. Die Zahl daneben sagt, wie viele warten.',
  'help.guide.planned-countries.step.2':
    'Such ein geplantes Land und wähl es: Das Panel sagt Geplant, und der Tooltip auf der Karte zeigt, wann es losgeht.',
  'help.guide.planned-countries.result':
    'Geplante Länder erscheinen mit gestrichelter Kontur, damit sie nie aussehen wie ein Ort, an dem du schon warst. Der Schalter merkt sich deine Wahl.',
  'help.guide.planned-countries.tip.1':
    'Ein Land zählt als besucht, sobald die Reise dorthin begonnen hat; eine laufende Reise zählt auch. Reisen ohne Datum bleiben ganz aus der Statistik.',
  'help.guide.planned-countries.tip.2': 'Der Schalter existiert nur, solange du kommende Reisen hast.',
  // regions
  'help.guide.regions.title': 'Eine Region markieren',
  'help.guide.regions.goal':
    'Feiner als Länder: Markiere die Bundesländer, Provinzen oder Präfekturen, in denen du warst.',
  'help.guide.regions.step.1':
    'Zoom in ein Land, bis seine Regionen erscheinen, ab Zoomstufe 5. Das Land zu suchen und zu wählen fliegt dich nah genug heran.',
  'help.guide.regions.step.2': 'Klick eine Region an. Beim Überfahren steht ihr Name; das Popup zeigt Region und Land.',
  'help.guide.regions.step.3': 'Wähl Als besucht markieren.',
  'help.guide.regions.result':
    'Die Region füllt sich mit der Farbe des Landes. Eine Region zu markieren zählt auch das Land als besucht, falls es das noch nicht war.',
  'help.guide.regions.tip.1':
    'Ein Klick auf eine besuchte Region bietet Entfernen an, ob du sie markiert hast oder ein Ort sie dorthin gesetzt hat.',
  'help.guide.regions.tip.2': 'Regionen mit echten Orten werden für dich markiert; da gibt es nichts zu tun.',
  // search-place
  'help.guide.search-place.title': 'Einen Ort finden und seine Region markieren',
  'help.guide.search-place.goal':
    'Markiere Bayern, indem du nach München suchst, ohne zu wissen, in welcher Region eine Stadt liegt.',
  'help.guide.search-place.step.1':
    'Tipp eine Stadt, eine Sehenswürdigkeit oder eine Adresse in das Suchfeld. Länder kommen zuerst; die passenden Orte stehen darunter unter Orte.',
  'help.guide.search-place.step.2':
    'Wähl den Ort. Die Karte fliegt hin und ermittelt, in welcher Region der Punkt liegt.',
  'help.guide.search-place.step.3':
    'Wähl Als besucht markieren für diese Region, oder Zur Bucket List, wenn sie noch vor dir liegt.',
  'help.guide.search-place.result':
    'Die Region ist markiert, und mit ihr das Land. Länder ohne Regionsdaten im Kartenpaket fallen auf das Land selbst zurück.',
  'help.guide.search-place.tip.1':
    'Orte kommen aus derselben Suche wie überall in TREK, folgen also dem Anbieter, den dein Admin eingerichtet hat.',
  // bucket-country
  'help.guide.bucket-country.title': 'Ein Land auf die Wunschliste setzen',
  'help.guide.bucket-country.goal':
    'Führe eine Wunschliste von Ländern direkt auf der Karte, getrennt von denen, in denen du warst.',
  'help.guide.bucket-country.step.1': 'Such das Land und wähl es, oder klick es auf der Karte an.',
  'help.guide.bucket-country.step.2': 'Wähl Zur Bucket List.',
  'help.guide.bucket-country.step.3':
    'Wähl Monat und Jahr, wenn du schon weißt, wann, und bestätige mit Zur Bucket List.',
  'help.guide.bucket-country.result':
    'Das Land wird schraffiert gezeichnet, in der Farbe, die es tragen wird, sobald du dort warst, und erscheint im Tab Wunschliste des Panels.',
  'help.guide.bucket-country.tip.1':
    'Dasselbe Popup bietet Von der Wunschliste entfernen, sobald das Land auf der Liste steht.',
  'help.guide.bucket-country.tip.2':
    'Ein Eintrag pro Zieldatum: Dasselbe Land kann für zwei verschiedene Monate auf der Liste stehen, aber nicht zweimal für denselben.',
  // bucket-place
  'help.guide.bucket-place.title': 'Einen Ort zur Wunschliste hinzufügen',
  'help.guide.bucket-place.goal':
    'Speichere eine Stadt, eine Sehenswürdigkeit oder eine Adresse, von der du träumst, mit Koordinaten und Zieldatum.',
  'help.guide.bucket-place.step.1': 'Öffne den Tab Wunschliste im Panel unten.',
  'help.guide.bucket-place.step.2': 'Klick auf Ort hinzufügen.',
  'help.guide.bucket-place.step.3':
    'Tipp den Namen ein und drück den Suchknopf; wähl den Treffer, damit der Ort Koordinaten bekommt. Nur einen Namen zu tippen und die Suche zu überspringen geht auch.',
  'help.guide.bucket-place.step.4': 'Wähl nach Belieben Monat und Jahr und klick auf Hinzufügen.',
  'help.guide.bucket-place.result':
    'Der Ort steht oben auf deiner Wunschliste mit seinem Zieldatum; das × daneben entfernt ihn wieder.',
  'help.guide.bucket-place.tip.1':
    'Ein Wunsch mit Koordinaten ist das, was Dawarich später für dich abhaken kann, sobald deine Aufzeichnungen zeigen, dass du dort warst.',
  // stats
  'help.guide.stats.title': 'Deine Statistik lesen',
  'help.guide.stats.goal': 'Wissen, was die Zahlen im Panel zählen, und was nicht.',
  'help.guide.stats.step.1':
    'Länder ist die Zahl verschiedener Länder, in denen du wirklich warst; geplante stehen daneben, nicht darin. Reisen, Orte und Tage sind Summen über alle deine Reisen. Städte wird aus den Adressen deiner Orte abgeleitet, ist also eine Schätzung.',
  'help.guide.stats.step.2':
    'Die Kontinente zeigen besuchte Länder pro Kontinent; Antarktis kommt in die Reihe, sobald du dort warst. Dann deine Serie, aufeinanderfolgende Jahre mit mindestens einer Reise, und wie viele Reisen du dieses Jahr gemacht hast.',
  'help.guide.stats.result':
    'Die Zahlen folgen deinen Reisen, während du sie planst; hier muss nichts gepflegt werden.',
  'help.guide.stats.tip.1':
    'Städte werden aus dem Adresstext gelesen, nicht nachgeschlagen, also kann eine kurze Adresse wie „Osteria Francescana, Italy“ oder eine, die auf einer Präfektur endet, eine Region statt einer Stadt ergeben.',
  'help.guide.stats.tip.2':
    'Von Hand markierte Länder zählen bei Länder und den Kontinenten, bringen aber keine Reisen, Orte oder Tage mit.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Sammlungen',
  'help.ctx.collections.summary':
    'Collections ist deine Ortebibliothek außerhalb jeder Reise: benannte Listen mit Orten, die du gefunden hast und behalten willst, jeder Ort mit dem Status Idee, Will hin oder Besucht. Orte werden in Reisen hinein- und wieder herauskopiert, nie verknüpft, sodass eine Liste und eine Reise einander nie verändern.',
  'help.ctx.collections.bullet.1':
    'Listenleiste links: deine eigenen Listen, die mit dir geteilten, Einladungen, die auf ein Ja warten, Alle gespeicherten als Summe von allem, was dir gehört, sowie Neue Liste und der Dateiimport ganz oben.',
  'help.ctx.collections.bullet.2':
    'Kopfbereich der offenen Liste: ihre Farbe, ihr Cover, Beschreibung und Links, die Mitglieder sowie rechts die Aktionen Bearbeiten, Exportieren und Teilen.',
  'help.ctx.collections.bullet.3':
    'Filterzeile über den Orten: Status, Kategorie, Bewertung und Sortierung, der Label-Filter, das + zum Hinzufügen eines Orts, die Übernahme aus einer Reise und Wählen für Massenaktionen.',
  'help.ctx.collections.bullet.4':
    'Ortszeilen: Avatar, Name und Adresse, Labels und Kategorie sowie rechts die Status-Pille, die mit einem Klick weiterschaltet.',
  'help.ctx.collections.bullet.5':
    'Karte rechts: ein Pin je Ort mit Koordinaten, der Umschalter zwischen Liste und Karte, das Suchfeld und der Label-Filter. Ein Klick auf einen Pin öffnet diesen Ort.',
  'help.ctx.collections.bullet.6':
    'Detailblatt: Klick auf eine Zeile für Cover, Kategorie, Labels, Status, Beschreibung und Links, mit Bearbeiten, In Reise kopieren und Aus Liste entfernen.',
  // create-list
  'help.guide.create-list.title': 'Eine Liste anlegen',
  'help.guide.create-list.goal': 'Leg eine neue benannte Liste an, mit Farbe und Cover, bereit für Orte.',
  'help.guide.create-list.step.1': 'Klick auf Neue Liste oben in der Listenleiste.',
  'help.guide.create-list.step.2':
    'Gib der Liste einen Namen und wähl eine Farbe. Coverbild, Beschreibung und Links sind optional; du kannst sie später über Bearbeiten ergänzen.',
  'help.guide.create-list.step.3': 'Klick auf Erstellen.',
  'help.guide.create-list.result':
    'Die Liste öffnet sich leer, mit Ort hinzufügen und Aus einer Reise übernehmen als den zwei Wegen, sie zu füllen.',
  'help.guide.create-list.tip.1':
    'Das Cover kann ein eigener Upload sein oder ein Bild aus der Unsplash-Suche im selben Dialog.',
  // add-place
  'help.guide.add-place.title': 'Einen Ort hinzufügen',
  'help.guide.add-place.goal':
    'Find einen Ort und speichere ihn in einem Zug mit Name, Kategorie, Status und Notizen in der offenen Liste.',
  'help.guide.add-place.step.1': 'Klick auf das + in der Filterzeile über den Orten.',
  'help.guide.add-place.step.2':
    'Tipp den Ort in das Suchfeld und wähl ein Ergebnis. Name, Adresse und Koordinaten füllen sich daraus.',
  'help.guide.add-place.step.3':
    'Setz den Status und, wenn du magst, Kategorie, Beschreibung und Links, dann klick auf Hinzufügen. Der Dialog bleibt für den nächsten Ort offen; Abbrechen schließt ihn.',
  'help.guide.add-place.result': 'Der Ort erscheint in der Liste und, wenn er Koordinaten hat, als Pin auf der Karte.',
  'help.guide.add-place.tip.1':
    'Aus einer Reise heraus legt In Sammlung speichern im Ort-Inspektor oder im Ortsmenü einen Reiseort auf eine Liste, ohne die Reise zu verlassen.',
  'help.guide.add-place.tip.2':
    'Die Liste muss dir gehören oder eine sein, in der du Bearbeiter oder Admin bist; auf Alle gespeicherten oder einer Liste, die du nur ansiehst, gibt es das + nicht.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Orte aus einer Reise übernehmen',
  'help.guide.import-from-trip.goal':
    'Hol die Orte einer ganzen Reise auf einmal auf eine Liste, statt sie einzeln zu speichern.',
  'help.guide.import-from-trip.step.1':
    'Klick auf den Übernehmen-Button mit dem Wolkenpfeil in der Filterzeile. Auf einer leeren Liste sitzt dieselbe Aktion neben Ort hinzufügen.',
  'help.guide.import-from-trip.step.2': 'Wähl eine deiner Reisen.',
  'help.guide.import-from-trip.step.3':
    'Hak die Orte ab, die du willst. Orte, die schon auf der Liste sind, sind ausgegraut; die, die in keinem Tag der Reise stecken, sind vorab ausgewählt. Nur neue blendet aus, was du schon hast.',
  'help.guide.import-from-trip.step.4': 'Klick auf Übernehmen. Der Button sagt immer, wie viele gleich hinzukommen.',
  'help.guide.import-from-trip.result':
    'Die Orte werden mit Name, Adresse, Koordinaten, Beschreibung und Kategorie auf die Liste kopiert. Die Reise bleibt, wie sie war.',
  'help.guide.import-from-trip.tip.1':
    'Dubletten nach Name oder Koordinaten werden automatisch übersprungen, zweimal übernehmen schadet also nicht.',
  'help.guide.import-from-trip.tip.2':
    'In der Ortsliste einer Reise bietet der Auswahlmodus stattdessen In Sammlung speichern für eine handverlesene Menge von Orten.',
  // place-status
  'help.guide.place-status.title': 'Den Status eines Orts setzen',
  'help.guide.place-status.goal':
    'Behalt im Blick, was eine Idee ist, was auf der Shortlist steht und wo du schon warst.',
  'help.guide.place-status.step.1':
    'Klick auf die Status-Pille am rechten Ende einer Ortszeile. Aus Idee wird Will hin.',
  'help.guide.place-status.step.2':
    'Klick noch einmal für Besucht und ein weiteres Mal, um wieder bei Idee anzufangen.',
  'help.guide.place-status.result': 'Pille und Farbe wechseln sofort; der Statusfilter über der Liste zählt mit.',
  'help.guide.place-status.tip.1':
    'Der Status gehört zu Collections: Einen Ort in eine Reise zu kopieren nimmt ihn nicht mit.',
  'help.guide.place-status.tip.2':
    'Aus einer Reise zeigt In Sammlung speichern eine Status-Pille je Liste, auf der der Ort liegt, und das Orte-Panel hat für eine Auswahl die Aktion Als besucht markieren.',
  // place-detail
  'help.guide.place-detail.title': 'Einen gespeicherten Ort öffnen',
  'help.guide.place-detail.goal': 'Sieh alles zu einem Ort und handle: bearbeiten, in eine Reise kopieren, entfernen.',
  'help.guide.place-detail.step.1':
    'Klick auf eine Ortszeile. Das Detailblatt öffnet sich neben der Liste und die Karte schwenkt zum Ort.',
  'help.guide.place-detail.step.2':
    'Unten sitzen Bearbeiten, In Reise kopieren und Aus Liste entfernen; die Kamera auf dem Cover tauscht das automatische Foto gegen ein eigenes.',
  'help.guide.place-detail.result':
    'Bearbeiten schaltet Name, Kategorie, Labels, Adresse, Koordinaten, Beschreibung und Links direkt im Blatt frei.',
  'help.guide.place-detail.tip.1':
    'Das Cover wird automatisch geholt, wenn der Ort kein eigenes Bild hat. Dein eigener Upload darf JPG, PNG, GIF oder WebP bis 20 MB sein.',
  'help.guide.place-detail.tip.2':
    'Mitglieder einer geteilten Liste können hier auch eine Sternebewertung hinterlassen, und der Bewertungsfilter in der Filterzeile nutzt den Durchschnitt.',
  // labels
  'help.guide.labels.title': 'Orte mit Labels gruppieren',
  'help.guide.labels.goal':
    'Gib einer Liste eigene Labels, etwa Stadtviertel oder Tage, jenseits der gemeinsamen Kategorien.',
  'help.guide.labels.step.1': 'Öffne die Labelverwaltung über das Label-Element in der Filterzeile.',
  'help.guide.labels.step.2':
    'Tipp einen Namen ein, wähl eine Farbe und klick auf Label hinzufügen. Umbenennen, umfärben oder löschen kannst du bestehende Labels im selben Dialog.',
  'help.guide.labels.step.3':
    'Schalte Wählen ein, hak die Orte ab und klick in der Auswahlleiste auf Label zuweisen. Ein einzelner Ort nimmt Labels auch über Bearbeiten auf seinem Detailblatt an.',
  'help.guide.labels.step.4':
    'Wähl ein oder mehrere Labels in der Filterzeile, um Liste und Karte auf Orte einzugrenzen, die eines davon tragen.',
  'help.guide.labels.result':
    'Gelabelte Orte zeigen ihre Labels in der Zeile; der Label-Filter steht jedem Mitglied offen, auch Betrachtern.',
  'help.guide.labels.tip.1':
    'Labels gehören zu der einen Liste, in der sie angelegt wurden. Einen Ort in eine andere Liste zu verschieben streift sie ab.',
  'help.guide.labels.tip.2': 'Labels verwalten und zuweisen braucht Bearbeitungsrechte auf der Liste.',
  // filter-select
  'help.guide.filter-select.title': 'Orte filtern und auswählen',
  'help.guide.filter-select.goal': 'Grenz die Liste ein und bearbeite viele Orte auf einmal.',
  'help.guide.filter-select.step.1':
    'Nutz die Dropdowns in der Filterzeile: Status, Kategorie, Mindestbewertung und Sortierung. Jedes zeigt, wie viele Orte es übrig ließe.',
  'help.guide.filter-select.step.2':
    'Klick auf Wählen. Jede Zeile bekommt ein Kästchen und eine Auswahlleiste erscheint.',
  'help.guide.filter-select.step.3':
    'Hak Orte ab oder nimm Alle auswählen für alles, was gerade gefiltert ist, dann wähl Label zuweisen, In Liste verschieben, In Liste duplizieren, In Reise kopieren oder Löschen.',
  'help.guide.filter-select.result':
    'Die Aktionen gelten für die ganze Auswahl auf einmal. Das × rechts verlässt den Auswahlmodus.',
  'help.guide.filter-select.tip.1':
    'Alle auswählen folgt dem Filter, also ist auf Will hin filtern und alle auswählen der schnelle Weg, die Shortlist zu bearbeiten.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Orte in eine Reise kopieren',
  'help.guide.copy-to-trip.goal': 'Mach aus gespeicherten Orten Stationen auf einer deiner Reisen.',
  'help.guide.copy-to-trip.step.1':
    'Schalte Wählen ein und hak die Orte ab, oder öffne einen Ort und nutz In Reise kopieren auf seinem Detailblatt.',
  'help.guide.copy-to-trip.step.2': 'Klick in der Auswahlleiste auf In Reise kopieren.',
  'help.guide.copy-to-trip.step.3': 'Wähl die Reise. Das Suchfeld grenzt eine lange Liste ein.',
  'help.guide.copy-to-trip.result':
    'Die Orte landen in der Ortsliste dieser Reise mit Name, Beschreibung, Kategorie, Notizen, Preis, Koordinaten, Foto und Tags. In der Sammlung ändert sich nichts.',
  'help.guide.copy-to-trip.tip.1':
    'Betrachter einer geteilten Liste können das auch; es kopiert aus der Liste heraus, es verändert sie nicht.',
  // share-list
  'help.guide.share-list.title': 'Eine Liste mit jemandem teilen',
  'help.guide.share-list.goal': 'Plan eine Liste live zusammen mit anderen Leuten auf diesem TREK.',
  'help.guide.share-list.step.1': 'Klick auf Teilen im Kopfbereich deiner Liste.',
  'help.guide.share-list.step.2': 'Wähl den Nutzer und eine Rolle: Betrachter, Bearbeiter oder Admin.',
  'help.guide.share-list.step.3':
    'Klick auf Einladung senden. Die Person steht als ausstehende Einladung, bis sie die Einladung in ihrer Listenleiste annimmt.',
  'help.guide.share-list.result':
    'Nach dem Annehmen erscheint die Liste bei ihr unter Geteilt und jede Änderung synchronisiert live. Mitglieder und ihre Rollen bleiben im selben Dialog bearbeitbar.',
  'help.guide.share-list.tip.1':
    'Betrachter können schauen, bewerten und Orte in eigene Reisen kopieren. Bearbeiter fügen Orte und Labels hinzu und bearbeiten sie. Admins dürfen auch löschen.',
  'help.guide.share-list.tip.2':
    'Nur der Besitzer lädt Leute ein und entfernt sie; ein Mitglied kann eine geteilte Liste selbst verlassen.',
  // export-list
  'help.guide.export-list.title': 'Eine Liste als Datei exportieren',
  'help.guide.export-list.goal':
    'Gib eine Liste an jemanden auf einem anderen TREK weiter oder nimm sie in eine Karten-App mit.',
  'help.guide.export-list.step.1': 'Klick auf Exportieren im Kopfbereich der Liste.',
  'help.guide.export-list.step.2':
    'Wähl TREK-Liste für ein anderes TREK, mit Labels und Status, oder GPX für OsmAnd, Organic Maps, ein Garmin und andere Apps, die Wegpunkte lesen.',
  'help.guide.export-list.result':
    'Die Datei wird heruntergeladen. Jedes Mitglied einer geteilten Liste darf sie exportieren.',
  'help.guide.export-list.tip.1':
    'Ein Ort ohne Koordinaten kann kein GPX-Wegpunkt sein; er bleibt außen vor und TREK sagt dir, wie viele das waren.',
  'help.guide.export-list.tip.2':
    'Bewertungen, Mitglieder und hochgeladene Fotos bleiben absichtlich zurück; sie gehören zu diesem TREK, nicht zur Liste.',
  // import-file
  'help.guide.import-file.title': 'Eine Liste aus einer Datei importieren',
  'help.guide.import-file.goal':
    'Hol eine TREK-Listendatei oder eine GPX-Datei herein, als neue Liste oder in eine, die du hast.',
  'help.guide.import-file.step.1':
    'Klick auf den Import-Button mit dem Upload-Pfeil neben Neue Liste in der Listenleiste.',
  'help.guide.import-file.step.2':
    'Wähl die Datei. TREK zeigt, was drinsteckt, bevor etwas passiert: den Namen, wie viele Orte und Labels.',
  'help.guide.import-file.step.3':
    'Lass Neue Liste stehen und ändere den Namen, wenn du magst, oder wähl Zu einer Liste hinzufügen, um die Orte in eine Liste zu legen, die du bearbeiten kannst, dann klick auf Importieren.',
  'help.guide.import-file.result':
    'Du landest auf der Liste mit den importierten Orten. Zu einer Liste hinzufügen fügt immer nur hinzu; Orte, die schon da sind, behalten Status, Notizen und Labels.',
  'help.guide.import-file.tip.1':
    'Aus einer GPX wird jeder benannte Wegpunkt ein Ort; Tracks sind Linien und bleiben außen vor, und die Vorschau sagt, wie viele Punkte das waren.',
  'help.guide.import-file.tip.2':
    'Eine Datei, die weder TREK-Liste noch GPX ist, wird mit Begründung abgelehnt; ein einzelner unlesbarer Ort wird übersprungen, nicht die ganze Datei.',
  // edit-list
  'help.guide.edit-list.title': 'Eine Liste bearbeiten oder löschen',
  'help.guide.edit-list.goal':
    'Ändere Name, Farbe, Cover, Beschreibung oder Links einer Liste, oder entferne die Liste.',
  'help.guide.edit-list.step.1': 'Klick auf Bearbeiten im Kopfbereich der Liste. Nur der Besitzer sieht es.',
  'help.guide.edit-list.step.2':
    'Ändere, was du magst, und klick auf Speichern. Liste löschen unten links entfernt die Liste mit all ihren Orten, nach einer Bestätigung.',
  'help.guide.edit-list.result': 'Der Kopfbereich übernimmt neue Farbe, Cover und Beschreibung sofort.',
  'help.guide.edit-list.tip.1':
    'Eine Liste zu löschen lässt sich nicht rückgängig machen. Exportier sie vorher, wenn du eine Kopie behalten willst.',
  // all-saved
  'help.guide.all-saved.title': 'Deine ganze Bibliothek durchsuchen',
  'help.guide.all-saved.goal': 'Schau über alle Listen, die dir gehören, auf einmal.',
  'help.guide.all-saved.step.1':
    'Klick auf Alle gespeicherten in der Listenleiste. Es vereint die Orte jeder Liste, die dir gehört oder die du mitbesitzt.',
  'help.guide.all-saved.step.2':
    'Nutz das Suchfeld und die Filter wie auf jeder Liste; Wählen geht auch hier, zum Kopieren in eine Reise.',
  'help.guide.all-saved.result':
    'Eine Ansicht über all deine gespeicherten Orte, ohne Hinzufügen oder Importieren, weil es keine einzelne Liste gibt, auf die sie könnten.',
  'help.guide.all-saved.tip.1': 'Labels sind je Liste, also gibt es den Label-Filter auf Alle gespeicherten nicht.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Journey',
  'help.ctx.journey.summary':
    'Journey ist dein Reisetagebuch mit den Fotos im Mittelpunkt. Jede Journey hängt an einer oder mehreren Reisen und wächst Tag für Tag aus Einträgen mit Geschichte, Fotos, Stimmung und Wetter. Diese Ansicht listet deine Journeys; öffne eine, um zu schreiben.',
  'help.ctx.journey.bullet.1':
    'Das Banner oben zeigt die laufende Journey oder deine neueste, mit ihren Zahlen zu Einträgen, Fotos und Orten. Weiterschreiben öffnet sie auf dem heutigen Tag.',
  'help.ctx.journey.bullet.2':
    'Darunter eine Karte je Journey mit Cover, Untertitel, Daten und Zahlen. Klick auf eine Karte, um sie zu öffnen.',
  'help.ctx.journey.bullet.3': 'Die letzte Karte im Raster, Neue Journey erstellen, startet eine aus deinen Reisen.',
  // create-journey
  'help.guide.create-journey.title': 'Eine Journey erstellen',
  'help.guide.create-journey.goal':
    'Ein Tagebuch für eine Reise anlegen, in dem die Orte der Reise schon als Vorschläge warten.',
  'help.guide.create-journey.step.1': 'Klick auf Neue Journey erstellen, die letzte Karte im Raster.',
  'help.guide.create-journey.step.2':
    'Gib ihr einen Namen und, wenn du magst, einen Untertitel, dann hak die Reisen an, zu denen sie gehört. Der Zähler sagt, wie viele Orte hereinkommen.',
  'help.guide.create-journey.step.3': 'Klick auf Journey erstellen.',
  'help.guide.create-journey.result':
    'Das Tagebuch öffnet sich. Jeder Ort der verknüpften Reisen steht als Vorschlag im Zeitstrahl, einer je Tag, an dem er liegt, bereit zum Beschreiben.',
  'help.guide.create-journey.tip.1': 'Weitere Reisen lassen sich später in den Journey-Einstellungen verknüpfen.',
  'help.guide.create-journey.tip.2': 'Eine Journey ohne Reisen geht auch; Einträge legst du dann von Hand an.',
  // open-journey
  'help.guide.open-journey.title': 'Eine Journey öffnen',
  'help.guide.open-journey.goal': 'In ein Tagebuch hineinkommen und wissen, wo es aufgeht.',
  'help.guide.open-journey.step.1':
    'Klick auf eine Karte. Jede zeigt das Cover, die Daten und wie viele Einträge, Fotos und Orte die Journey enthält.',
  'help.guide.open-journey.result':
    'Eine laufende Journey öffnet sich auf dem heutigen Tag, oder auf dem letzten Eintrag davor, wenn heute noch nichts geschrieben ist; eine abgeschlossene öffnet sich am Anfang.',
  'help.guide.open-journey.tip.1':
    'Das Cover ist das erste Foto der Journey, solange du in den Journey-Einstellungen keins festlegst.',
  // continue-writing
  'help.guide.continue-writing.title': 'Die laufende Journey weiterschreiben',
  'help.guide.continue-writing.goal': 'Direkt auf die heutige Seite der Journey springen, auf der du gerade bist.',
  'help.guide.continue-writing.step.1':
    'Klick im Banner oben auf Weiterschreiben. Es zeigt die laufende Journey, oder die neueste, wenn keine läuft.',
  'help.guide.continue-writing.result':
    'Das Tagebuch öffnet sich auf dem heutigen Tag, oder auf dem letzten Eintrag davor, wenn heute noch nichts geschrieben ist.',
  'help.guide.continue-writing.tip.1':
    'Das Banner schlägt außerdem eine Reise vor, die noch keine Journey hat; Schließen blendet diesen Vorschlag aus.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Tagebuch',
  'help.ctx.journey-detail.summary':
    'Eine geöffnete Journey: links der Zeitstrahl, Tag für Tag, rechts die Karte mit jedem Eintrag und den Orten der verknüpften Reisen. Alles, was etwas zum Tagebuch hinzufügt, sitzt oben; der Kopf trägt die Zahlen, Studio, den Vorschläge-Schalter und die Journey-Einstellungen.',
  'help.ctx.journey-detail.bullet.1':
    'Kopf: Cover, Titel und Untertitel, die Zahlen zu Tagen, Orten, Einträgen und Fotos, und rechts Studio, der Vorschläge-Schalter und die Journey-Einstellungen.',
  'help.ctx.journey-detail.bullet.2':
    'Werkzeugleiste: die Tabs Zeitstrahl und Galerie, In dieser Reise suchen und Eintrag hinzufügen.',
  'help.ctx.journey-detail.bullet.3':
    'Zeitstrahl: ein Abschnitt je Tag mit einem + für einen Eintrag an diesem Tag; Eintragskarten mit Fotos, Stimmung, Wetter und Geschichte; Vorschläge aus den Reisen heller dargestellt, mit Diesen Vorschlag verwerfen.',
  'help.ctx.journey-detail.bullet.4':
    'Karte: Einträge als Pins, in Datumsreihenfolge durch eine gestrichelte Linie verbunden, die Orte der Reisen und alle GPX-Tracks, die in diese Reisen importiert wurden.',
  'help.ctx.journey-detail.bullet.5':
    'Journey-Einstellungen: Cover, Name und Untertitel, Tracks auf der Karte, Felder im Eintrag, verworfene Vorschläge, verknüpfte Reisen, Mitwirkende, öffentliches Teilen, Archivieren und Löschen.',
  'help.ctx.journey-detail.bullet.6':
    'Über einem langen Zeitstrahl schweben zwei runde Buttons: zurück nach oben und zum letzten Eintrag springen.',
  // add-entry
  'help.guide.add-entry.title': 'Einen Eintrag schreiben',
  'help.guide.add-entry.goal': 'Die Geschichte eines Tages mit Titel, Text, Stimmung und Wetter hinzufügen.',
  'help.guide.add-entry.step.1':
    'Klick in der Werkzeugleiste auf Eintrag hinzufügen, oder auf das + in einem Tageskopf, um an diesem Tag zu beginnen.',
  'help.guide.add-entry.step.2':
    'Gib dem Moment einen Namen und schreib die Geschichte. Die Leiste über dem Text fügt Fett, Kursiv, Überschriften, Zitate, Links und Listen in Markdown ein.',
  'help.guide.add-entry.step.3':
    'Wähl eine Stimmung und das Wetter, prüf das Datum und setz, wenn du magst, einen Ort: such einen Ort oder nimm deine aktuelle Position.',
  'help.guide.add-entry.step.4': 'Klick auf Speichern.',
  'help.guide.add-entry.result':
    'Der Eintrag erscheint an seinem Tag im Zeitstrahl und als Pin auf der Karte. Seine Zahlen im Kopf werden aktualisiert.',
  'help.guide.add-entry.tip.1': 'In einen Vorschlag zu schreiben ist derselbe Editor, nur mit schon gesetztem Ort.',
  'help.guide.add-entry.tip.2': 'Tags unten sind Freitext, Geheimtipp oder bestes Essen, und die Suche findet sie.',
  // entry-photos
  'help.guide.entry-photos.title': 'Fotos und Videos an einen Eintrag hängen',
  'help.guide.entry-photos.goal': 'Bilder auf einen Tag legen; das erste wird das Cover des Eintrags.',
  'help.guide.entry-photos.step.1': 'Öffne das Menü eines Eintrags über das ⋯ auf seiner Karte und wähl Bearbeiten.',
  'help.guide.entry-photos.step.2':
    'Klick auf Fotos hochladen und wähl die Dateien. Aus Galerie nimmt Bilder, die schon in der Galerie der Journey liegen; External photos durchsucht eine verbundene Immich- oder Synology-Bibliothek nach diesem Tag.',
  'help.guide.entry-photos.step.3':
    'Fahr über ein Bild und klick auf Als 1. setzen, um das Cover zu wählen, dann auf Speichern.',
  'help.guide.entry-photos.result':
    'Die Fotos erscheinen auf der Karte und in der Galerie; das erste ist überall das Vorschaubild.',
  'help.guide.entry-photos.tip.1':
    'Videos kommen genauso an einen Eintrag: mp4, m4v, webm oder mov bis 500 MB, gespeichert wie hochgeladen.',
  'help.guide.entry-photos.tip.2':
    'HEIC-Dateien vom iPhone werden beim Hochladen zu JPEG umgewandelt, dabei gehen GPS- und Kameradaten verloren.',
  // suggestions
  'help.guide.suggestions.title': 'Vorschläge nutzen oder verwerfen',
  'help.guide.suggestions.goal':
    'Die Orte deiner Reisen zu Einträgen machen und die wegräumen, über die du nichts schreiben wirst.',
  'help.guide.suggestions.step.1':
    'Ein Vorschlag ist eine hellere Karte mit dem Ortsnamen in Kursiv. Klick darauf, um den Editor mit schon gesetztem Ort und Tag zu öffnen.',
  'help.guide.suggestions.step.2':
    'Klick auf Diesen Vorschlag verwerfen bei einer Karte, die du nicht brauchst. Sie verlässt den Zeitstrahl, ohne gelöscht zu werden, und der Reise-Abgleich bietet sie nicht noch einmal an.',
  'help.guide.suggestions.step.3':
    'Anders überlegt? Die Journey-Einstellungen zeigen, wie viele verworfen sind, und Verworfene Vorschläge zurückholen bringt sie alle zurück.',
  'help.guide.suggestions.result':
    'Der Zeitstrahl enthält nur, was du wirklich schreiben willst; der Schalter im Kopf blendet beim Lesen alle Vorschläge auf einmal aus.',
  'help.guide.suggestions.tip.1': 'Ein Ort, der über zwei Tage geht, ergibt an jedem davon einen Vorschlag.',
  'help.guide.suggestions.tip.2': 'Vorschläge zählen nie in der Statistik; nur geschriebene Einträge zählen.',
  // add-on-day
  'help.guide.add-on-day.title': 'Einen Eintrag an einem früheren Tag hinzufügen',
  'help.guide.add-on-day.goal':
    'Über einen Tag schreiben, der schon vorbei ist, ohne hinterher das Datum zu korrigieren.',
  'help.guide.add-on-day.step.1': 'Klick auf das + im Kopf dieses Tages.',
  'help.guide.add-on-day.step.2': 'Der Editor öffnet sich mit diesem Datum. Schreib und Speichern wie gewohnt.',
  'help.guide.add-on-day.result': 'Der Eintrag landet sofort am richtigen Tag.',
  'help.guide.add-on-day.tip.1':
    'Innerhalb eines Tages verschieben die Pfeile im Menü eines Eintrags ihn nach vorn oder hinten.',
  // pros-cons
  'help.guide.pros-cons.title': 'Ein Fazit hinzufügen',
  'help.guide.pros-cons.goal': 'Einen Tag zusammenfassen mit dem, was toll war und was nicht.',
  'help.guide.pros-cons.step.1':
    'Im Editor findest du Pro & Contra unter der Geschichte. Tipp einen Punkt in Pro oder Contra und nimm Hinzufügen für den nächsten.',
  'help.guide.pros-cons.step.2': 'Speichern. Das Fazit erscheint auf der Karte als zwei kurze Listen.',
  'help.guide.pros-cons.result': 'Daumen hoch und Daumen runter auf einen Blick, unter der Geschichte.',
  'help.guide.pros-cons.tip.1':
    'Eine Journey ohne Fazit kann den Abschnitt in den Journey-Einstellungen unter Felder im Eintrag abschalten.',
  // search-journey
  'help.guide.search-journey.title': 'Etwas in einem langen Tagebuch finden',
  'help.guide.search-journey.goal': 'Zum gemeinten Eintrag kommen, ohne durch Wochen zu scrollen.',
  'help.guide.search-journey.step.1':
    'Tipp in der Werkzeugleiste in In dieser Reise suchen. Der Zeitstrahl filtert beim Tippen über Titel, Geschichten, Orte und Tags. Akzente und Groß- und Kleinschreibung spielen keine Rolle.',
  'help.guide.search-journey.step.2':
    'Der Vorschläge-Schalter im Kopf blendet beim Lesen die ungeschriebenen Karten aus. Wird der Zeitstrahl lang, schweben zwei runde Buttons über seiner Unterkante: zurück nach oben und zum letzten Eintrag springen.',
  'help.guide.search-journey.result': 'Nur passende Einträge bleiben; leer das Feld, um wieder alles zu sehen.',
  'help.guide.search-journey.tip.1':
    'Eine laufende Journey öffnet sich auf dem heutigen Tag, die aktuelle Seite ist also meist schon im Blick.',
  'help.guide.search-journey.tip.2': 'Tags zählen mit: Die Suche nach Geheimtipp findet jeden Eintrag mit diesem Tag.',
  // gallery-map
  'help.guide.gallery-map.title': 'Galerie und Karte durchstöbern',
  'help.guide.gallery-map.goal': 'Die ganze Journey als Bilder sehen, und als Orte auf der Karte.',
  'help.guide.gallery-map.step.1':
    'Wechsle in der Werkzeugleiste zu Galerie: jedes Foto jedes Eintrags, plus Bilder, die direkt in die Galerie hochgeladen wurden. Klick auf eins für die Lightbox.',
  'help.guide.gallery-map.step.2':
    'Die Karte rechts zeigt die Einträge als Pins in Datumsreihenfolge, die Orte der verknüpften Reisen und jeden GPX-Track, der in diese Reisen importiert wurde, in der Farbe, die er im Planer hat.',
  'help.guide.gallery-map.result':
    'Fahr über einen Track für seinen Namen. Die gestrichelte Linie zwischen Einträgen zeichnet TREK; ein Track ist die Route, die du tatsächlich aufgezeichnet hast.',
  'help.guide.gallery-map.tip.1': 'Tracks lassen sich je Journey in den Journey-Einstellungen abschalten.',
  'help.guide.gallery-map.tip.2':
    'Galeriefotos mit Standort erscheinen auch auf der öffentlichen Karte, wenn Galerie und Karte beide geteilt sind.',
  // entry-fields
  'help.guide.entry-fields.title': 'Felder im Eintrag abschalten',
  'help.guide.entry-fields.goal': 'Den Editor auf das beschränken, was diese Journey nutzt.',
  'help.guide.entry-fields.step.1': 'Öffne die Journey-Einstellungen über den Kopf.',
  'help.guide.entry-fields.step.2': 'Schalte unter Felder im Eintrag Stimmung, Wetter oder Pro & Contra ab.',
  'help.guide.entry-fields.result':
    'Der Editor fragt nicht mehr danach. Nichts Geschriebenes geht verloren: Ein Feld wieder einschalten holt die gespeicherten Werte zurück, und eine geteilte Journey blendet dieselben Felder aus.',
  'help.guide.entry-fields.tip.1':
    'Die Schalter gelten je Journey, eine Dienstreise und ein Urlaub dürfen sich also unterscheiden.',
  // link-trip
  'help.guide.link-trip.title': 'Eine weitere Reise verknüpfen',
  'help.guide.link-trip.goal': 'Die Orte einer zweiten Reise als Vorschläge ins Tagebuch holen.',
  'help.guide.link-trip.step.1': 'Öffne die Journey-Einstellungen über den Kopf.',
  'help.guide.link-trip.step.2': 'Klick unter den verknüpften Reisen auf Trip hinzufügen.',
  'help.guide.link-trip.step.3': 'Wähl die Reise.',
  'help.guide.link-trip.result':
    'Ihre Orte kommen als Vorschläge an ihren Tagen in den Zeitstrahl, und ihre GPX-Tracks auf die Karte.',
  'help.guide.link-trip.tip.1':
    'Das × neben einer verknüpften Reise löst sie wieder; Einträge, die du geschrieben hast, bleiben.',
  'help.guide.link-trip.tip.2': 'Einträge mit einem Tag zählen nur einmal, egal wie viele Reisen diesen Tag abdecken.',
  // share-public
  'help.guide.share-public.title': 'Die Journey öffentlich teilen',
  'help.guide.share-public.goal': 'Leuten ohne TREK-Konto einen Nur-Lesen-Link geben.',
  'help.guide.share-public.step.1': 'Öffne die Journey-Einstellungen und such den Abschnitt Öffentlicher Link.',
  'help.guide.share-public.step.2': 'Klick auf Link erstellen.',
  'help.guide.share-public.step.3':
    'Wähl, was Besucher sehen: Zeitstrahl, Galerie und Karte sind getrennte Schalter. Kopieren legt den Link in deine Zwischenablage.',
  'help.guide.share-public.result':
    'Wer den Link hat, sieht die freigegebenen Bereiche und sonst nichts; Felder, die du unter Felder im Eintrag abgeschaltet hast, bleiben auch dort verborgen.',
  'help.guide.share-public.tip.1':
    'Fotos erscheinen auf der öffentlichen Karte nur, wenn Galerie und Karte beide an sind; ist Karte aus, werden ihre Koordinaten entfernt, bevor sie den Server verlassen.',
  'help.guide.share-public.tip.2': 'Lösch den Link an derselben Stelle, um das Teilen zu beenden.',
  // contributors
  'help.guide.contributors.title': 'Gemeinsam schreiben',
  'help.guide.contributors.goal': 'Jemanden, der mitreist, eigene Einträge und Fotos hinzufügen lassen.',
  'help.guide.contributors.step.1': 'Öffne die Journey-Einstellungen und scroll zu den Mitwirkenden.',
  'help.guide.contributors.step.2': 'Klick auf Mitwirkenden einladen und such die Person nach Name oder E-Mail.',
  'help.guide.contributors.step.3': 'Wähl eine Rolle und bestätige.',
  'help.guide.contributors.result':
    'Die Journey erscheint in ihrer Liste, und ihre Einträge tragen ihren Namen. Entferne jemanden über das × daneben.',
  'help.guide.contributors.tip.1':
    'Mitwirkende sind für Leute auf diesem TREK. Für alle anderen gibt es den öffentlichen Link.',
  // studio
  'help.guide.studio.title': 'Die Journey als Fotobuch gestalten',
  'help.guide.studio.goal': 'Das Tagebuch in druckbare Seiten verwandeln.',
  'help.guide.studio.step.1': 'Klick im Kopf auf Studio. Der Designer öffnet sich über der Journey.',
  'help.guide.studio.step.2':
    'Der Name der Journey links in der oberen Leiste ist der Weg zurück; er bringt dich dorthin, wo du warst.',
  'help.guide.studio.result':
    'Links die Seitenleiste, in der Mitte die Doppelseite auf der Werkbank, rechts die Eigenschaften. Automatisch anordnen baut das Buch aus deinen Einträgen; Exportieren erzeugt ein druckfertiges PDF.',
  'help.guide.studio.tip.1':
    'Studio braucht ein Fenster von mindestens 1024 px Breite und wird auf dem Handy nicht angeboten.',
  'help.guide.studio.tip.2':
    'Das Buch erbt den Zugriff der Journey: Wer die Journey lesen darf, darf es öffnen, wer sie bearbeiten darf, darf speichern.',
  // archive-journey
  'help.guide.archive-journey.title': 'Eine Journey archivieren oder löschen',
  'help.guide.archive-journey.goal': 'Eine abgeschlossene Journey schließen oder eine endgültig entfernen.',
  'help.guide.archive-journey.step.1': 'Öffne die Journey-Einstellungen.',
  'help.guide.archive-journey.step.2':
    'Ganz unten beendet Reise archivieren sie und markiert sie als archiviert; Reise wiederherstellen holt sie zurück. Löschen entfernt sie mit allen Einträgen und Fotos, nach einer Bestätigung.',
  'help.guide.archive-journey.result':
    'Eine archivierte Journey bleibt lesbar und teilbar; sie öffnet sich nur nicht mehr auf dem heutigen Tag.',
  'help.guide.archive-journey.tip.1':
    'Löschen lässt sich nicht rückgängig machen, und es rührt die Reisen nicht an, mit denen die Journey verknüpft war.',
  'help.guide.archive-journey.tip.2': 'Cover, Name und Untertitel liegen im selben Dialog, ganz oben.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio legt eine Journey als druckbares Fotobuch an. Es öffnet sich über dem Tagebuch: links die Leiste mit den Seiten und Inhalten, in der Mitte die Doppelseite, an der du gerade arbeitest, rechts ihre Eigenschaften. Automatisch anordnen baut aus deinen Einträgen einen ersten Entwurf; alles danach gehört dir zum Verschieben, Zuschneiden und Umgestalten, mit Rückgängig für jeden Schritt.',
  'help.ctx.journey-studio.bullet.1':
    'Obere Leiste: Zurück zur Journey, Buchansicht, Rückgängig und Wiederherstellen, Seitenformat, Automatisch anordnen und Exportieren. Der Vermerk Gespeichert neben dem Titel zeigt dir, wann das Buch gespeichert ist.',
  'help.ctx.journey-studio.bullet.2':
    'Leiste links mit fünf Bereichen: Seiten, Inhalte (die Fotos und Einträge der Journey), Elemente (Text, Formen, Linien, Raster, Rahmen, Symbole), Reise (Karten, Länder, Flaggen und Marken aus der Journey) und Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Arbeitsfläche: die aktuelle Doppelseite mit Anschnitt und Schutzzone, darunter die Zoomleiste, Einpassen und rechts Diese Doppelseite herunterladen.',
  'help.ctx.journey-studio.bullet.4':
    'Eigenschaften rechts: Position und Größe, Ausschnitt und Fokuspunkt, Füllen oder Einpassen, Look, Ecken, Rahmen, Stapelreihenfolge und Sperre der Auswahl; Seitenzahlen und das Dokument, wenn nichts ausgewählt ist.',
  'help.ctx.journey-studio.bullet.5':
    'Das Buch hat die Form eines gebundenen: Cover, eine einzelne erste Seite, die Doppelseiten, eine einzelne letzte Seite und die Rückseite. Seitenzahlen zählen ab der ersten Seite und werden so gedruckt, wie sie angezeigt werden.',
  'help.ctx.journey-studio.bullet.6':
    'Mehrere Leute können gleichzeitig gestalten: Jeder sieht die Zeiger der anderen mit ihren Namen, und ein Speichern auf einer Version, die jemand anderes geändert hat, kommt als Konflikt zurück, statt dessen Arbeit zu überschreiben.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Das Buch automatisch bauen',
  'help.guide.studio-auto-layout.goal':
    'Hol dir mit einem Klick einen kompletten ersten Entwurf aus den Einträgen und Fotos des Tagebuchs.',
  'help.guide.studio-auto-layout.step.1': 'Klick in der oberen Leiste auf Automatisch anordnen.',
  'help.guide.studio-auto-layout.step.2':
    'Wähl Das ganze Buch: Es ersetzt jede Seite und behält deinen Titel und die Seiteneinstellungen. Diese Seite baut nur die auf dem Bildschirm neu und wird auf einer Doppelseite angeboten, die aus einem Eintrag entstanden ist.',
  'help.guide.studio-auto-layout.step.3':
    'Geh die Seitenleiste durch. Rückgängig nimmt das ganze Layout zurück, wenn dir das vorherige lieber war.',
  'help.guide.studio-auto-layout.result':
    'Eine Doppelseite pro Eintrag, in Reihenfolge, mit Fotos, Titel und Text für dich platziert. Jedes Element folgt seinem Eintrag weiter, bis du es bearbeitest.',
  'help.guide.studio-auto-layout.tip.1': 'Beide Einträge sind normale Rückgängig-Schritte, also probier sie ruhig aus.',
  'help.guide.studio-auto-layout.tip.2':
    'Ein Element, das Automatisch anordnen an einen Eintrag gebunden hat, geht Änderungen an diesem Eintrag mit, bis du es in Eigenschaften anfasst; das löst die Verbindung.',
  // studio-pages
  'help.guide.studio-pages.title': 'Doppelseiten hinzufügen, verschieben und entfernen',
  'help.guide.studio-pages.goal': 'Gib dem Buch Seite für Seite seine Form.',
  'help.guide.studio-pages.step.1':
    'Öffne Seiten in der Leiste. Die Vorschaubilder sind das Buch in Reihenfolge: Cover, erste Seite, Doppelseiten, letzte Seite, Rückseite.',
  'help.guide.studio-pages.step.2':
    'Seite hinzufügen unten setzt eine neue vor die letzte Seite; das + zwischen zwei Vorschaubildern fügt genau dort eine ein.',
  'help.guide.studio-pages.step.3':
    'Fahr über ein Vorschaubild für seine Aktionen: Nach vorne, Nach hinten, Seite duplizieren und Seite löschen. Klick auf ein Vorschaubild, um diese Doppelseite auf der Arbeitsfläche zu öffnen.',
  'help.guide.studio-pages.result':
    'Cover, erste und letzte Seite und Rückseite bleiben, wo sie sind; neue Doppelseiten landen immer dazwischen.',
  'help.guide.studio-pages.tip.1':
    'Buchansicht in der oberen Leiste zeigt das ganze Buch als Blätter, so wie es gebunden wird.',
  'help.guide.studio-pages.tip.2':
    'Seitenzahlen schaltest du unter Dokument in Eigenschaften ein, ohne dass etwas ausgewählt ist.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Ein Layout auf eine Doppelseite anwenden',
  'help.guide.studio-layouts.goal': 'Gib einer Doppelseite eine fertige Anordnung aus Foto- und Textrahmen.',
  'help.guide.studio-layouts.step.1':
    'Öffne Layouts in der Leiste. Dreizehn Layouts für Doppelseiten und ein eigener Satz für Cover, Rückseite und die Einzelseiten.',
  'help.guide.studio-layouts.step.2':
    'Klick eines an. Die Doppelseite auf der Arbeitsfläche übernimmt seine Rahmen; Fotos und Texte, die du schon hattest, fließen hinein.',
  'help.guide.studio-layouts.result':
    'Leere Rahmen warten auf Inhalt: Zieh ein Foto aus Inhalte darauf oder nutz Auf diese Seite setzen.',
  'help.guide.studio-layouts.tip.1': 'Ein Layout ist ein Rückgängig-Schritt wie jeder andere.',
  // studio-content
  'help.guide.studio-content.title': 'Fotos und Einträge auf eine Seite bringen',
  'help.guide.studio-content.goal': 'Hol das eigene Material der Journey auf die Doppelseite.',
  'help.guide.studio-content.step.1':
    'Öffne Inhalte in der Leiste. Fotos listet jedes Bild der Journey; Einträge listet die Einträge mit ihrem Text.',
  'help.guide.studio-content.step.2':
    'Zieh ein Foto auf die Doppelseite oder auf einen leeren Rahmen, oder klick darunter auf Auf diese Seite setzen. Fotos hochladen ergänzt Bilder, die noch nicht in der Journey sind.',
  'help.guide.studio-content.step.3':
    'Unter einem Eintrag setzen Titel, Text und Ort diesen Text als Textelement auf die Seite; Datum und die Koordinaten kommen als Marken, und die Fotos des Eintrags sind gleich dort aufgelistet.',
  'help.guide.studio-content.result':
    'Ein abgelegtes Foto wird zum Fotoelement; Text folgt dem Eintrag weiter, bis du ihn bearbeitest.',
  'help.guide.studio-content.tip.1': 'Das Suchfeld oben in Inhalte filtert beide Listen.',
  'help.guide.studio-content.tip.2':
    'Eine Datei vom Desktop auf die Arbeitsfläche zu ziehen lädt sie hoch und platziert sie in einem Zug.',
  // studio-elements
  'help.guide.studio-elements.title': 'Text, Formen und Symbole hinzufügen',
  'help.guide.studio-elements.goal': 'Gestalte eine Doppelseite über Fotos und Texte hinaus.',
  'help.guide.studio-elements.step.1': 'Öffne Elemente in der Leiste.',
  'help.guide.studio-elements.step.2':
    'Klick auf einen Textstil für Überschrift oder Bildunterschrift, eine Form, eine Linie, ein Raster, einen leeren Rahmen mit Rahmenstil oder ein Symbol aus der durchsuchbaren Bibliothek. Jedes landet in der Mitte der Doppelseite, bereit zum Verschieben.',
  'help.guide.studio-elements.result':
    'Doppelklick auf ein Textelement, um hineinzuschreiben; Eigenschaften hält Schrift, Schriftschnitt, Größe, Abstand und Ausrichtung.',
  'help.guide.studio-elements.tip.1': 'Rahmen sind leere Fotoplätze: Leg später ein Bild hinein.',
  // studio-travel
  'help.guide.studio-travel.title': 'Karte, Flaggen und Zahlen hinzufügen',
  'help.guide.studio-travel.goal': 'Bring die Reise selbst als Zahlen auf die Seite.',
  'help.guide.studio-travel.step.1': 'Öffne Reise in der Leiste.',
  'help.guide.studio-travel.step.2':
    'Wähl, was du hinzufügen willst: eine Routenkarte der Einträge, Länder als Umrisse, eine Länderliste oder ein Ländergitter, Flaggen, eine Marke für Datum, Tageszähler oder Distanz oder eine Übersicht der ganzen Reise. Jedes entsteht aus den Daten der Journey und aktualisiert sich mit ihnen.',
  'help.guide.studio-travel.result':
    'Das Element erscheint auf der Doppelseite; Eigenschaften stellt seinen Stil ein, bei der Karte auch den Ausschnitt.',
  'help.guide.studio-travel.tip.1':
    'Marken folgen dem Eintrag, aus dem die Doppelseite entstanden ist, deshalb zeigt eine Datumsmarke auf einer automatisch angeordneten Doppelseite schon diesen Tag.',
  // studio-properties
  'help.guide.studio-properties.title': 'Deine Auswahl bearbeiten',
  'help.guide.studio-properties.goal': 'Verschieb, beschneid, gestalte und staple ein Element über Eigenschaften.',
  'help.guide.studio-properties.step.1':
    'Klick ein Element auf der Doppelseite an. Griffe erscheinen für Größe und Drehung; zieh es, um es zu verschieben.',
  'help.guide.studio-properties.step.2':
    'Eigenschaften rechts folgt der Auswahl: Position und Größe, Ausschnitt mit dem Fokuspunkt, der entscheidet, was im Rahmen bleibt, Füllen oder Einpassen, Look-Filter, Ecke für den Radius, Rahmen für den Stil, Stapelreihenfolge und Sperren.',
  'help.guide.studio-properties.step.3':
    'Duplizieren und Löschen sitzen oben in Eigenschaften; Rückgängig in der oberen Leiste macht alles davon rückgängig.',
  'help.guide.studio-properties.result':
    'Ein gesperrtes Element lässt sich auf der Seite nicht mehr greifen; so bleibt ein fertiges Layout sicher, während du drumherum arbeitest.',
  'help.guide.studio-properties.tip.1':
    'Shift-Klick wählt mehrere Elemente; Eigenschaften bearbeitet sie dann gemeinsam.',
  'help.guide.studio-properties.tip.2':
    'Ein Element zu bearbeiten, das Automatisch anordnen platziert hat, löst seine Verbindung zum Eintrag; es folgt späteren Änderungen an diesem Eintrag nicht mehr.',
  // studio-format
  'help.guide.studio-format.title': 'Das Seitenformat wählen',
  'help.guide.studio-format.goal': 'Leg die Größe fest, in der das Buch gedruckt wird, bevor das Layout davon abhängt.',
  'help.guide.studio-format.step.1': 'Klick in der oberen Leiste auf Seitenformat.',
  'help.guide.studio-format.step.2':
    'Wähl Quadratisch 21 × 21 cm, Quadratisch 30 × 30 cm, A4 oder A5 quer oder hoch, oder gib unter Eigenes Format Breite und Höhe in Millimetern ein. Anschnitt und Schutzzone sitzen darunter.',
  'help.guide.studio-format.result':
    'Jede Doppelseite wird in dieser Größe gezeichnet, standardmäßig mit 3 mm Anschnitt und 5 mm Schutzzone.',
  'help.guide.studio-format.tip.1':
    'Ändere erst das Format, dann starte Automatisch anordnen; das Layout wird für die Größe gebaut, die es vorfindet.',
  'help.guide.studio-format.tip.2':
    'Frag deine Druckerei nach ihren Werten für Anschnitt und Schutzzone und trag die ein.',
  // studio-export
  'help.guide.studio-export.title': 'Das Buch als PDF exportieren',
  'help.guide.studio-export.goal': 'Hol dir eine druckfertige Datei oder eine zum Lesen am Bildschirm.',
  'help.guide.studio-export.step.1': 'Klick in der oberen Leiste auf Exportieren.',
  'help.guide.studio-export.step.2':
    'Wähl Einzelseiten, eine Seite pro Blatt in Lesereihenfolge, was eine Druckerei will, oder Doppelseiten, zwei Seiten auf einmal, so wie sich das Buch öffnet. Beschnittmarken ergänzen den Anschnitt an jeder Kante und markieren, wo geschnitten wird.',
  'help.guide.studio-export.step.3':
    'Klick auf Druckansicht. Dein Browser öffnet die Seiten, und Als PDF sichern macht daraus die Datei.',
  'help.guide.studio-export.result':
    'Ein PDF mit so vielen Blättern, wie der Dialog angekündigt hat, im Seitenformat, das du gesetzt hast.',
  'help.guide.studio-export.tip.1': 'Das PDF entsteht nur am Desktop, wie Studio selbst.',
  'help.guide.studio-export.tip.2':
    'Für einen Korrekturabzug exportier Doppelseiten ohne Beschnittmarken; für die Druckerei Einzelseiten mit.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Eine Doppelseite in einem anderen Buch wiederverwenden',
  'help.guide.studio-spread-file.goal':
    'Nimm ein Design, das dir gefällt, aus dem Buch einer Journey ins Buch einer anderen mit.',
  'help.guide.studio-spread-file.step.1':
    'Mit der Doppelseite auf der Arbeitsfläche klick rechts am Ende der Zoomleiste auf Diese Doppelseite herunterladen. Die Datei enthält das Design, nicht die Fotos.',
  'help.guide.studio-spread-file.step.2':
    'Öffne im anderen Buch Seiten und klick neben Seite hinzufügen auf Importieren, dann wähl die Datei.',
  'help.guide.studio-spread-file.result':
    'Die Doppelseite kommt mit ihren Rahmen und Textstilen an; leg die Fotos der neuen Journey in die Rahmen.',
  'help.guide.studio-spread-file.tip.1': 'Eine Datei, die kein Doppelseiten-Design ist, wird mit Begründung abgelehnt.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Einstellungen',
  'help.ctx.settings.summary':
    'Deine persönlichen Einstellungen, ein Tab pro Thema in der Seitenleiste links. Die meisten Schalter greifen in dem Moment, in dem du sie umlegst; ein Formular mit einem Speichern-Button unten wartet darauf. Nichts hier verändert das TREK von jemand anderem.',
  'help.ctx.settings.bullet.1':
    'Seitenleiste links: Allgemein, Erscheinungsbild, Karte, Mitteilungen, Integrationen, Offline und Konto. Plugins erscheint, sobald eines installiert ist, Über auf einem selbst gehosteten TREK.',
  'help.ctx.settings.bullet.2':
    'Allgemein ist Sprache, Einheiten, Währung und womit die App öffnet; Erscheinungsbild ist Theme, Farben, Textgröße und die Dashboard-Widgets.',
  'help.ctx.settings.bullet.3':
    'Karte wählt den Renderer und seinen Stil; Mitteilungen die Kanäle, die dich erreichen; Integrationen Fotobibliotheken, API-Schlüssel und MCP; Offline, was die App auf diesem Gerät behält.',
  'help.ctx.settings.bullet.4':
    'Konto hält dein Profil, Passwort, Zwei-Faktor-Authentifizierung, Passkeys und das Löschen deines Kontos.',
  'help.ctx.settings-display.title': 'Allgemein',
  'help.ctx.settings-display.summary':
    'Sprache, Einheiten und Währung, wie sich Karte und Buchungen verhalten, und womit TREK öffnet. Jede Änderung hier greift sofort.',
  'help.ctx.settings-display.bullet.1':
    'Sprache & Region: die Sprache der Oberfläche, das Zeitformat, die Anzeigewährung sowie Entfernungs- und Temperatureinheit.',
  'help.ctx.settings-display.bullet.2':
    'Reise & Karte: Buchungsrouten immer auf der Karte, die Pille zum Entdecken von Orten, Routenoptimierung ab deiner Unterkunft, verborgene Buchungscodes und beschriftete Buchungsrouten.',
  'help.ctx.settings-display.bullet.3':
    'Start: ob TREK auf dem Dashboard oder auf der aktiven Reise öffnet, und welcher Tab einer Reise zuerst kommt.',
  'help.ctx.settings-appearance.title': 'Erscheinungsbild',
  'help.ctx.settings-appearance.summary':
    'Wie TREK auf diesem Konto aussieht: hell oder dunkel, die Akzentfarbe, Glas und Bewegung, Textgröße, und welche Widgets das Dashboard zeigt. Alles greift live, auf jedem Gerät, auf dem du dich anmeldest.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Hell, Dunkel oder Automatisch, und das Farbschema mit Eigene Akzentfarbe für eine Farbe von dir.',
  'help.ctx.settings-appearance.bullet.2':
    'Lesbarkeit: Transparenz, Bewegung reduzieren, Dichte und Textgröße, mit erweiterten Größen pro Stufe.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard-Widgets: ein Schalter pro Widget, getrennt für Desktop und Mobil.',
  'help.ctx.settings-appearance.bullet.4': 'Auf Standard zurücksetzen unten stellt alles wieder her.',
  'help.ctx.settings-map.title': 'Karte',
  'help.ctx.settings-map.summary':
    'Welche Engine die Karten zeichnet und in welchem Stil. Leaflet ist die klassische Rasterkarte, MapLibre zeichnet Vektorkacheln ganz ohne Token, Mapbox ergänzt 3D-Gebäude und Gelände mit deinem eigenen Token.',
  'help.ctx.settings-map.bullet.1':
    'Kartenanbieter: Leaflet, MapLibre oder Mapbox, jeder mit einer Zeile dazu, was er braucht.',
  'help.ctx.settings-map.bullet.2':
    'Kartenstil und Karten-Vorlage: das Aussehen der Kacheln, plus den Token oder Key, den ein Anbieter verlangt.',
  'help.ctx.settings-map.bullet.3':
    'Hochqualitäts-Modus für Antialiasing und die Globus-Projektion; Karte speichern schreibt die Wahl.',
  'help.ctx.settings-notifications.title': 'Mitteilungen',
  'help.ctx.settings-notifications.summary':
    'Wo TREK dich außerhalb der App erreicht: ein ntfy-Thema, ein Webhook oder ein Kanal, den ein Plugin bereitstellt. Unter den Kanälen entscheidet eine Zeile pro Ereignis, was wohin geht.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: das Thema, optional ein eigener Server und ein optionaler Zugriffstoken, mit Testen, um sofort eine Nachricht zu schicken.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: eine URL, die jedes Ereignis als JSON empfängt, mit Testen.',
  'help.ctx.settings-notifications.bullet.3':
    'Die Zeilen mit den Präferenzen: pro Ereignis, welcher Kanal an ist. Plugin-Kanäle zeigen Einrichten, bis sie eingerichtet sind.',
  'help.ctx.settings-integrations.title': 'Integrationen',
  'help.ctx.settings-integrations.summary':
    'Alles, was von außen an TREK andockt: Fotobibliotheken für die Journey, API-Schlüssel für Skripte und der MCP-Endpunkt mit seinen Tokens und OAuth-Clients für KI-Assistenten.',
  'help.ctx.settings-integrations.bullet.1':
    'Foto-Anbieter: Immich und Synology Photos, jeder mit seiner URL und seinem Key, Verbindung testen und Speichern.',
  'help.ctx.settings-integrations.bullet.2':
    'API-Schlüssel: persönliche Schlüssel für Skripte und andere Tools, die die TREK-API in deinem Namen aufrufen.',
  'help.ctx.settings-integrations.bullet.3':
    'MCP-Konfiguration: der Endpunkt, eine fertige Client-Konfiguration zum Kopieren und die API-Tokens.',
  'help.ctx.settings-integrations.bullet.4':
    'OAuth 2.1-Clients: Apps, die sich über TREK anmelden, mit Redirect-URIs, erlaubten Berechtigungen, maschinellen Clients und den aktiven Sessions.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Was TREK auf diesem Gerät behält, damit eine Reise auch ohne Verbindung öffnet, und was passiert, wenn eine offline gemachte Änderung mit einer von anderswo kollidiert.',
  'help.ctx.settings-offline.bullet.1':
    'Offline-Modus: Offline-Modus erzwingen lässt die App so tun, als wäre das Netz weg, zum Testen oder bei einer getakteten Verbindung.',
  'help.ctx.settings-offline.bullet.2':
    'Für Offline vorbereiten: Für Offline-Nutzung herunterladen holt deine Reisen und ihre Kartenkacheln jetzt.',
  'help.ctx.settings-offline.bullet.3':
    'Was offline gespeichert wird: Kartenkacheln an oder aus, und ein Schalter pro Reise.',
  'help.ctx.settings-offline.bullet.4':
    'Synchronisierungskonflikte und Offline-Cache: die Strategie bei Kollisionen, die Zahl der ausstehenden und fehlgeschlagenen Änderungen, Jetzt neu synchronisieren und Cache leeren.',
  'help.ctx.settings-account.title': 'Konto',
  'help.ctx.settings-account.summary':
    'Wer du auf diesem TREK bist und wie du dich anmeldest: Profil und Avatar, Passwort, Zwei-Faktor-Authentifizierung, Passkeys und ganz unten das Löschen des Kontos.',
  'help.ctx.settings-account.bullet.1': 'Profil: Benutzername, E-Mail und Avatar, gesichert mit Speichern.',
  'help.ctx.settings-account.bullet.2':
    'Passwort ändern: aktuelles Passwort, neues Passwort zweimal, Passwort aktualisieren.',
  'help.ctx.settings-account.bullet.3':
    'Zwei-Faktor-Authentifizierung (2FA) mit einer Authenticator-App und Backup-Codes; Passkeys für die Anmeldung ohne Passwort.',
  'help.ctx.settings-account.bullet.4':
    'Der Button Löschen ganz unten entfernt dein Konto, hinter einer Bestätigung. Der letzte Admin kann sich nicht selbst löschen.',
  // language-region
  'help.guide.language-region.title': 'Sprache, Einheiten und Währung festlegen',
  'help.guide.language-region.goal': 'Lass TREK deine Sprache sprechen und so rechnen wie du.',
  'help.guide.language-region.step.1':
    'Wähl die Sprache der Oberfläche unter Sprache & Region. TREK wechselt sofort, auf jedem Gerät, auf dem du dich anmeldest.',
  'help.guide.language-region.step.2':
    'Darunter wählst du das Zeitformat, die Anzeigewährung sowie Entfernungs- und Temperatureinheit.',
  'help.guide.language-region.result':
    'Daten, Entfernungen und Geld lesen sich so, wie du es erwartest; die eigene Währung einer Reise steht weiterhin neben umgerechneten Beträgen.',
  'help.guide.language-region.tip.1':
    'Die Anzeigewährung ist für Summen über Reisen hinweg; jede Reise behält die Währung, die du ihr gegeben hast.',
  'help.guide.language-region.tip.2':
    'Die Sprache bestimmt auch die Tages- und Monatsnamen in Vacay und in der Journey.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Einstellen, wie sich Karte und Buchungen verhalten',
  'help.guide.travel-map-prefs.goal': 'Leg fest, was die Reisekarte standardmäßig zeigt.',
  'help.guide.travel-map-prefs.step.1':
    'Unter Reise & Karte hält Buchungsrouten immer anzeigen Flüge und Züge auf der Karte, auch wenn ihr Tag nicht geöffnet ist; Orte auf der Karte entdecken zeigt die Pille zum Finden von Orten; Route ab der Unterkunft optimieren startet die Route dort, wo du schläfst.',
  'help.guide.travel-map-prefs.step.2':
    'Buchungscodes verbergen versteckt Bestätigungsnummern, bis du darüberfährst; Orts-Labels auf Buchungsrouten schreibt den Namen der Buchung an ihre Route.',
  'help.guide.travel-map-prefs.result': 'Die Reisekarte folgt dem auf jeder Reise, bis du es wieder umlegst.',
  'help.guide.travel-map-prefs.tip.1':
    'Das gilt pro Konto, nicht pro Reise. Mitglieder einer geteilten Reise sehen jeweils ihre eigene Wahl.',
  // startup
  'help.guide.startup.title': 'Wählen, womit TREK öffnet',
  'help.guide.startup.goal': 'Lande dort, wo du am meisten arbeitest, nicht jedes Mal auf dem Dashboard.',
  'help.guide.startup.step.1': 'Setz unter Start die Startseite auf Dashboard oder Aktive Reise.',
  'help.guide.startup.step.2': 'Start-Tab bestimmt, welcher Tab einer Reise zuerst kommt, wenn du eine öffnest.',
  'help.guide.startup.result': 'Die nächste Anmeldung und der nächste Tipp auf das Logo führen direkt dorthin.',
  'help.guide.startup.tip.1': 'Aktive Reise meint die Reise, die heute läuft, oder die nächste, wenn keine läuft.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Theme und Akzentfarbe festlegen',
  'help.guide.theme-scheme.goal': 'Mach TREK hell, dunkel oder wie dein Gerät, in der Farbe, die dir gefällt.',
  'help.guide.theme-scheme.step.1': 'Wähl unter Theme Hell, Dunkel oder Automatisch. Automatisch folgt deinem Gerät.',
  'help.guide.theme-scheme.step.2':
    'Wähl ein Farbschema: Standard, Hoher Kontrast, Indigo, Türkis, Rosé, Bernstein, Violett oder Eigene.',
  'help.guide.theme-scheme.step.3':
    'Mit Eigene wählst du einen Akzent aus den Vorgaben oder gibst deinen eigenen ein. Eine Kontrastprüfung daneben sagt, ob Text darauf lesbar bleibt.',
  'help.guide.theme-scheme.result':
    'Buttons, Links und Hervorhebungen nehmen den Akzent überall an, auf jedem Gerät, auf dem du dich anmeldest.',
  'help.guide.theme-scheme.tip.1':
    'Die Navigationsleiste hat auch einen schnellen Hell-Dunkel-Schalter; er setzt dasselbe Theme.',
  'help.guide.theme-scheme.tip.2': 'Hoher Kontrast ist das Schema der Wahl, wenn der Standard zu weich wirkt.',
  // readability
  'help.guide.readability.title': 'Lesbarkeit und Textgröße anpassen',
  'help.guide.readability.goal': 'Weniger Glas, weniger Bewegung, mehr Platz oder größere Schrift.',
  'help.guide.readability.step.1':
    'Unter Lesbarkeit schaltet Transparenz die Glas-Panels auf feste Flächen, Bewegung reduzieren minimiert Animationen, und Dichte wählt Komfortabel oder Kompakt.',
  'help.guide.readability.step.2':
    'Textgröße skaliert Alles auf einmal; Erweiterte Textgrößen lässt Titel, Untertitel, Fließtext und Bildunterschriften voneinander abweichen.',
  'help.guide.readability.result': 'Die ganze App folgt sofort, inklusive der Karten-Panels und der Journey.',
  'help.guide.readability.tip.1':
    'Bewegung reduzieren folgt auch der Einstellung deines Systems, wenn du es in Ruhe lässt.',
  'help.guide.readability.tip.2':
    'Die Textgröße wird über die Typografie-Stufen angewendet, sodass nichts abgeschnitten wird; eine Größe, die nicht mehr passt, bricht um.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Die Dashboard-Widgets wählen',
  'help.guide.dashboard-widgets.goal':
    'Zeig nur die Widgets, die du nutzt, getrennt auf dem Desktop und auf dem Handy.',
  'help.guide.dashboard-widgets.step.1':
    'Schalte unter Dashboard-Widgets jedes Widget für Desktop und für Mobil an oder aus: die rechte Seitenleiste als Ganzes, Währung, Sammlungen, Zeitzonen, anstehende Reservierungen, Atlas-Länder und die Reisezahlen.',
  'help.guide.dashboard-widgets.step.2':
    'Auf Standard zurücksetzen unten bringt den ganzen Tab zurück in den Auslieferungszustand.',
  'help.guide.dashboard-widgets.result':
    'Das Dashboard ordnet sich sofort neu; ohne rechte Seitenleiste zentriert es sich.',
  'help.guide.dashboard-widgets.tip.1': 'Widgets eines Addons erscheinen nur, solange der Admin dieses Addon an hat.',
  'help.guide.dashboard-widgets.tip.2':
    'Das Dashboard selbst merkt sich deine Raster- oder Listenansicht und die Sortierung pro Gerät.',
  // map-provider
  'help.guide.map-provider.title': 'Karten-Engine und Stil wählen',
  'help.guide.map-provider.goal': 'Wechsle zwischen der klassischen Karte, Vektorkacheln und der 3D-Karte von Mapbox.',
  'help.guide.map-provider.step.1':
    'Wähl unter Kartenanbieter Leaflet für die klassische 2D-Karte mit beliebigen Rasterkacheln, MapLibre für OpenFreeMap-Vektorkacheln ohne Token oder Mapbox für Vektorkacheln mit 3D-Gebäuden und Gelände.',
  'help.guide.map-provider.step.2':
    'Wähl einen Kartenstil oder eine Karten-Vorlage für das Aussehen. Mapbox braucht einen Mapbox Access Token, manche Rasterstile einen CARTO-API-Key; der Link neben dem Feld führt dorthin, wo du einen bekommst.',
  'help.guide.map-provider.step.3':
    'Hochqualitäts-Modus ergänzt Antialiasing und die Globus-Projektion. Klick auf Karte speichern.',
  'help.guide.map-provider.result':
    'Jede Karte in TREK, Reisen, Atlas, Sammlungen und Journey, wird von der Engine gezeichnet, die du gewählt hast.',
  'help.guide.map-provider.tip.1': 'Ohne Token fällt Mapbox auf die Standardkarte zurück, statt nichts zu zeigen.',
  'help.guide.map-provider.tip.2':
    'Die Kartenkacheln, die du offline speicherst, kommen vom Anbieter, der beim Herunterladen aktiv ist.',
  // notification-channels
  'help.guide.notification-channels.title': 'Einrichten, wo dich Mitteilungen erreichen',
  'help.guide.notification-channels.goal':
    'Bekomm Reise-Erinnerungen und Ereignisse aus der Zusammenarbeit aufs Handy oder in ein anderes Tool.',
  'help.guide.notification-channels.step.1':
    'Trag unter Mitteilungen ein Ntfy-Thema ein; ergänze eine eigene Ntfy-Server-URL (optional) und einen Zugriffstoken (optional), wenn du einen Server betreibst. Testen schickt sofort eine Nachricht.',
  'help.guide.notification-channels.step.2':
    'Oder gib eine Webhook-URL an, die jedes Ereignis als JSON empfängt, und prüf sie mit Testen genauso.',
  'help.guide.notification-channels.step.3':
    'In den Zeilen darunter schaltest du jedes Ereignis pro Kanal an oder aus. Ein Plugin-Kanal sagt Einrichten, bis er in den Einstellungen des Plugins eingerichtet ist; Test senden probiert einen aus.',
  'help.guide.notification-channels.result':
    'Ereignisse gehen über die Kanäle raus, die an sind. Die Glocke in der Navigationsleiste zeigt sie in der App trotzdem weiter.',
  'help.guide.notification-channels.tip.1':
    'Einstellungen pro Reise liegen auf der Reise selbst, unter ihren Mitteilungseinstellungen.',
  'help.guide.notification-channels.tip.2':
    'Der Admin kann einen Standard-ntfy-Server für alle vorbelegen; dein Thema wählst du trotzdem selbst.',
  // photo-providers
  'help.guide.photo-providers.title': 'Eine Fotobibliothek verbinden',
  'help.guide.photo-providers.goal': 'Lass die Journey die Fotos des Tages aus Immich oder Synology Photos ziehen.',
  'help.guide.photo-providers.step.1':
    'Such unter Integrationen den Abschnitt des Anbieters und trag seine URL und seinen API-Key ein. Immich bietet auch an, Journey-Uploads zurück in die Bibliothek zu spiegeln.',
  'help.guide.photo-providers.step.2': 'Klick auf Verbindung testen, dann auf Speichern.',
  'help.guide.photo-providers.result':
    'Der Tab External photos im Eintrags-Editor durchsucht die verbundene Bibliothek nach dem Tag des Eintrags, die nächsten zum Ort des Eintrags zuerst.',
  'help.guide.photo-providers.tip.1':
    'Die Verbindung gehört dir: andere Mitglieder einer Journey verbinden ihre eigenen Bibliotheken.',
  'help.guide.photo-providers.tip.2':
    'Ein Anbieter ohne GPS-Daten in seinen Fotos funktioniert trotzdem; die Liste ist dann zeitlich sortiert.',
  // api-keys
  'help.guide.api-keys.title': 'Einen API-Schlüssel erstellen',
  'help.guide.api-keys.goal': 'Lass ein Skript oder ein anderes Tool die TREK-API als dich aufrufen.',
  'help.guide.api-keys.step.1':
    'Klick unter API-Schlüssel auf Schlüssel erstellen und gib ihm einen Namen, der sagt, wo er verwendet wird.',
  'help.guide.api-keys.step.2':
    'Kopier den Schlüssel aus dem Dialog: er wird nur einmal gezeigt. Lösch einen Schlüssel aus der Liste, wenn das Tool ihn nicht mehr braucht.',
  'help.guide.api-keys.result':
    'Anfragen mit diesem Schlüssel handeln mit deinen Berechtigungen; die Liste zeigt, wann jeder Schlüssel erstellt und zuletzt benutzt wurde.',
  'help.guide.api-keys.tip.1': 'Ein Schlüssel pro Tool macht das Zurückziehen schmerzlos.',
  'help.guide.api-keys.tip.2':
    'Für einen KI-Assistenten nimm stattdessen MCP mit OAuth; API-Schlüssel sind für einfache HTTP-Clients.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Einen KI-Assistenten über MCP verbinden',
  'help.guide.mcp-oauth.goal': 'Gib Claude, einer IDE oder einem anderen MCP-Client Zugriff auf deine Reisen.',
  'help.guide.mcp-oauth.step.1':
    'Kopier unter MCP-Konfiguration den MCP-Endpunkt, oder die ganze Client-Konfiguration für einen Client, der einen JSON-Schnipsel nimmt.',
  'help.guide.mcp-oauth.step.2':
    'Clients, die sich über den Browser anmelden, nutzen OAuth 2.1: Neuer Client unter OAuth 2.1-Clients, mit seinen Redirect-URIs, Erlaubte Berechtigungen und, für einen Server ohne Browser, Maschineller Client.',
  'help.guide.mcp-oauth.step.3':
    'Secret erneuern und Client löschen sitzen an jedem Client; Aktive OAuth-Sessions listet, was angemeldet ist, und lässt dich es widerrufen. API-Tokens mit Neuen Token erstellen ist der ältere Weg hinein.',
  'help.guide.mcp-oauth.result':
    'Der Client kann lesen und ändern, was seine Berechtigungen erlauben, als du, und jede Aktion erscheint unter deinem Namen.',
  'help.guide.mcp-oauth.tip.1':
    'Berechtigungen sind das Sicherheitsnetz: gib einem Client nur die Leseberechtigung, bis er mehr braucht.',
  'help.guide.mcp-oauth.tip.2':
    'Der Admin kann MCP für die ganze Instanz abschalten; dann ist dieser Abschnitt nicht da.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Reisen offline mitnehmen',
  'help.guide.offline-prepare.goal': 'Hab deine Reisen und ihre Karten auf diesem Gerät, bevor die Verbindung abreißt.',
  'help.guide.offline-prepare.step.1':
    'Lass unter Was offline gespeichert wird Kartenkacheln offline speichern an und schalte die Reisen an, die du auf diesem Gerät haben willst.',
  'help.guide.offline-prepare.step.2':
    'Klick unter Für Offline vorbereiten auf Für Offline-Nutzung herunterladen. Das holt die Reisen und die Kacheln rund um ihre Orte.',
  'help.guide.offline-prepare.step.3':
    'Offline-Modus erzwingen unter Offline-Modus lässt dich prüfen, ob alles da ist, bevor du losfährst.',
  'help.guide.offline-prepare.result':
    'Die Reisen öffnen ohne Verbindung; Änderungen, die du machst, warten in einer Warteschlange und gehen beim Wiederverbinden raus.',
  'help.guide.offline-prepare.tip.1':
    'Kacheln brauchen den meisten Platz: der Abschnitt Offline-Cache zeigt, was gespeichert ist, pro Reise.',
  'help.guide.offline-prepare.tip.2': 'Installier TREK aus dem Browser als App für den flüssigsten Offline-Start.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Entscheiden, was bei einem Synchronisierungskonflikt gewinnt',
  'help.guide.offline-conflicts.goal': 'Wähl, wie TREK eine offline gemachte Änderung gegen eine von anderswo auflöst.',
  'help.guide.offline-conflicts.step.1':
    'Wähl unter Synchronisierungskonflikte Jedes Mal nachfragen, Immer meine Version behalten oder Immer die Server-Version behalten.',
  'help.guide.offline-conflicts.step.2':
    'Offline-Cache zeigt Reisen, ausstehende und fehlgeschlagene Änderungen und Konflikte; Jetzt neu synchronisieren schiebt die Warteschlange raus, Cache leeren leert das Gerät.',
  'help.guide.offline-conflicts.result':
    'Mit Nachfragen zeigt ein Konflikt beide Versionen und lässt dich wählen; mit den anderen beiden wird er still aufgelöst.',
  'help.guide.offline-conflicts.tip.1':
    'Cache leeren entfernt nur die Kopie auf diesem Gerät; auf dem Server wird nichts angerührt.',
  // profile
  'help.guide.profile.title': 'Dein Profil ändern',
  'help.guide.profile.goal': 'Aktualisiere Name, E-Mail und Bild.',
  'help.guide.profile.step.1':
    'Bearbeite unter Konto Benutzername und E-Mail. Der Avatar nimmt einen eigenen Upload; entfern ihn, um zu den Initialen zurückzukehren.',
  'help.guide.profile.step.2': 'Klick auf Speichern.',
  'help.guide.profile.result': 'Name und Bild aktualisieren sich überall auf einmal, auch auf Reisen, die du teilst.',
  'help.guide.profile.tip.1':
    'Ein Konto, das sich über OIDC anmeldet, zeigt das hier; die E-Mail kommt dann vom Anbieter.',
  // password
  'help.guide.password.title': 'Dein Passwort ändern',
  'help.guide.password.goal': 'Setz ein neues Passwort.',
  'help.guide.password.step.1': 'Gib unter Passwort ändern dein aktuelles Passwort ein, dann zweimal das neue.',
  'help.guide.password.step.2': 'Klick auf Passwort aktualisieren.',
  'help.guide.password.result':
    'Das neue Passwort gilt ab der nächsten Anmeldung; andere Sitzungen bleiben angemeldet.',
  'help.guide.password.tip.1': 'Ein Konto, das sich über OIDC anmeldet, hat kein TREK-Passwort zum Ändern.',
  // mfa
  'help.guide.mfa.title': 'Zwei-Faktor-Authentifizierung einschalten',
  'help.guide.mfa.goal': 'Schütz das Konto mit einem Code aus einer Authenticator-App.',
  'help.guide.mfa.step.1': 'Klick unter Zwei-Faktor-Authentifizierung (2FA) auf Authenticator einrichten.',
  'help.guide.mfa.step.2':
    'Scann den QR-Code mit deiner App oder gib das Secret von Hand ein, dann tipp den sechsstelligen Code ein, den sie zeigt, und klick auf 2FA aktivieren.',
  'help.guide.mfa.step.3':
    'Sichere die Backup-Codes: kopieren, herunterladen oder drucken. Jeder gilt einmal, wenn du kein Handy zur Hand hast.',
  'help.guide.mfa.result': 'Jede Anmeldung fragt nach dem Passwort nach einem Code.',
  'help.guide.mfa.tip.1': '2FA deaktivieren braucht dein Passwort und einen aktuellen Code.',
  'help.guide.mfa.tip.2': 'Der Admin kann 2FA für alle vorschreiben; dann lässt es sich hier nicht abschalten.',
  // passkeys
  'help.guide.passkeys.title': 'Mit einem Passkey anmelden',
  'help.guide.passkeys.goal': 'Nutz Fingerabdruck, Gesicht oder PIN deines Geräts statt eines Passworts.',
  'help.guide.passkeys.step.1':
    'Klick unter Passkeys auf Passkey hinzufügen und bestätige mit deinem Gerät. Gib ihm einen Namen, der sagt, welches Gerät es ist.',
  'help.guide.passkeys.step.2':
    'Die Liste zeigt jeden Passkey mit Namen und letzter Nutzung; der Löschen-Button entfernt einen.',
  'help.guide.passkeys.result': 'Die Anmeldeseite bietet den Passkey an; das Passwort bleibt als Rückfall.',
  'help.guide.passkeys.tip.1':
    'Ein Passkey lebt auf dem Gerät oder in dessen Passwort-Manager, also leg einen pro Gerät an.',
  'help.guide.passkeys.tip.2':
    'Passkeys brauchen HTTPS; auf einer reinen HTTP-Instanz erklärt der Abschnitt, warum sie nicht verfügbar sind.',
  // delete-account
  'help.guide.delete-account.title': 'Dein Konto löschen',
  'help.guide.delete-account.goal': 'Entfern dein Konto und die Daten, die nur dir gehören.',
  'help.guide.delete-account.step.1': 'Klick ganz unten in Konto auf Löschen und bestätige.',
  'help.guide.delete-account.result':
    'Dein Konto, deine eigenen Reisen und deine Journeys sind weg; Reisen, die du mit anderen teilst, bleiben bei ihnen.',
  'help.guide.delete-account.tip.1':
    'Der letzte Admin einer Instanz kann sich nicht selbst löschen; mach vorher jemand anderen zum Admin.',
  'help.guide.delete-account.tip.2': 'Es gibt kein Zurück. Exportier, was du behalten willst, bevor du bestätigst.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administration',
  'help.ctx.admin.summary':
    'Die Instanz hinter dem TREK aller: wer sich wie anmelden darf, was eingeschaltet ist, wo Dateien liegen, wie der Server die Leute erreicht und wie er gesichert wird. Nur Admins sehen diese Seite; jeder Tab ist eine eigene Ansicht in der Seitenleiste.',
  'help.ctx.admin.bullet.1':
    'Die vier Karten oben zählen Benutzer, Reisen, Orte und Dateien; ein Banner darüber kündigt ein neueres TREK-Release an.',
  'help.ctx.admin.bullet.2':
    'Benutzer und Benutzer-Standards: Konten, Einladungslinks und die Karteneinstellungen, mit denen ein neues Konto startet.',
  'help.ctx.admin.bullet.3':
    'Personalisierung, Einstellungen, Addons und Plugins: Packvorlagen, Kategorien und Schulferien; Anmeldemethoden und API-Schlüssel; die Funktionsmodule; Plugins von Dritten.',
  'help.ctx.admin.bullet.4':
    'Speicher, Benachrichtigungen, MCP-Zugang und GitHub: wohin Uploads gehen, die instanzweiten Kanäle, Tokens und Sitzungen von KI-Clients und der Release-Verlauf.',
  'help.ctx.admin.bullet.5':
    'Backup und Audit: Sicherungen auf Abruf und nach Zeitplan, und das Protokoll sicherheitsrelevanter Ereignisse.',
  'help.ctx.admin-users.title': 'Benutzer',
  'help.ctx.admin-users.summary':
    'Jedes Konto auf diesem TREK, mit Rolle, E-Mail und letzter Anmeldung, und die Einladungslinks, über die sich Leute auf einer geschlossenen Instanz registrieren können.',
  'help.ctx.admin-users.bullet.1':
    'Die Tabelle: Benutzername, E-Mail, Rolle, Erstellungsdatum, letzter Login und die Aktionen pro Zeile. Du selbst bist als du markiert.',
  'help.ctx.admin-users.bullet.2':
    'Benutzer anlegen oben legt ein Konto von Hand an, mit einem Passwort, das du weitergibst.',
  'help.ctx.admin-users.bullet.3':
    'Einladungslinks darunter: einmalige Registrierungslinks mit Nutzungslimit, Ablauf und, wenn du magst, einer Reise, der der neue Benutzer bei Ankunft beitritt.',
  'help.ctx.admin-users.bullet.4':
    'Berechtigungseinstellungen ganz unten: pro Aktion, wer sie ausführen darf, Alle, Reise-Mitglieder, Reise-Eigentümer oder Nur Administrator.',
  'help.ctx.admin-defaults.title': 'Benutzer-Standards',
  'help.ctx.admin-defaults.summary':
    'Die Einstellungen, mit denen ein neues Konto startet, damit niemand erst den Karten-Tab suchen muss: Kartendienst, Stil, Tokens und Qualität.',
  'help.ctx.admin-defaults.bullet.1':
    'Kartendienst, Mapbox-Stil und -Token, CARTO-Key und Mapbox-Qualität, genau so, wie ein Benutzer sie unter Einstellungen, Karte setzen würde.',
  'help.ctx.admin-defaults.bullet.2':
    'Neben jedem Feld holt zurücksetzen die eingebaute Vorgabe von TREK zurück; die eigene Einstellung eines Benutzers gewinnt immer gegen diese.',
  'help.ctx.admin-config.title': 'Personalisierung',
  'help.ctx.admin-config.summary':
    'Was jede Reise auf der Instanz teilt: Packvorlagen, der Kategoriensatz für Orte und Sammlungen und der Schulferienkatalog, aus dem Vacay schöpft.',
  'help.ctx.admin-config.bullet.1':
    'Packvorlagen: benannte Listen aus Kategorien und Einträgen, mit denen die Packliste einer Reise starten kann.',
  'help.ctx.admin-config.bullet.2':
    'Kategorien: Name, Icon und Farbe der Kategorien, die überall in TREK gelten, vom Orts-Inspektor bis zu den Sammlungen.',
  'help.ctx.admin-config.bullet.3':
    'Schulferien: der Katalog der Länder und Regionen, für Orte, die die eingebauten Feeds nicht abdecken.',
  'help.ctx.admin-settings.title': 'Einstellungen',
  'help.ctx.admin-settings.summary':
    'Wie Leute reinkommen und womit der Server reden darf: Anmelde- und Registrierungsmethoden, SSO, Passkeys, die Zwei-Faktor-Regel, die API-Schlüssel für Karten, Orte und Bilder, die Such- und Verkehrsanbieter und die Dateitypen, die Uploads haben dürfen.',
  'help.ctx.admin-settings.bullet.1':
    'Authentication Methods: Password Login, Password Registration, SSO Login, SSO Auto-Provisioning und Zwei-Faktor-Authentifizierung (2FA) für alle verlangen.',
  'help.ctx.admin-settings.bullet.2':
    'Single Sign-On (OIDC) mit Issuer, Client und Anzeigename; Passkey-Anmeldung mit Relying Party ID und Origins.',
  'help.ctx.admin-settings.bullet.3':
    'API-Schlüssel: Google Maps, Unsplash und Amap, jeder mit Test; Wofür der Schlüssel genutzt wird grenzt den Google-Schlüssel auf die Funktionen ein, für die du zahlen willst.',
  'help.ctx.admin-settings.bullet.4':
    'Anbieter für die Ortssuche und Verkehrsanbieter legen fest, wer Suchen und Routen beantwortet; Erlaubte Dateitypen begrenzt Uploads.',
  'help.ctx.admin-addons.title': 'Addons',
  'help.ctx.admin-addons.summary':
    'Die Funktionsmodule von TREK, jedes mit einem Schalter: Listen, Kosten, Dokumente, Vacay, Atlas, Collab, Journey, Sammlungen, Roadtrip, MCP, AirTrail, Dawarich und das KI-Parsing. Aus heißt: Navigationseintrag, Routen und API sind für alle weg.',
  'help.ctx.admin-addons.bullet.1':
    'Eine Kachel pro Addon mit seinem Schalter und, wo es welche hat, Unterzeilen für seine Optionen.',
  'help.ctx.admin-addons.bullet.2':
    'Foto-Anbieter und Dokument-Anbieter erscheinen hier ebenfalls als Kacheln, damit Immich oder Synology den Benutzern angeboten werden kann.',
  'help.ctx.admin-addons.bullet.3': 'Gepäck-Tracking hat seinen eigenen Schalter unter den Kacheln.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Plugins von Dritten, die in einem eigenen Prozess neben TREK laufen, jedes mit den Berechtigungen, die es bei der Installation angefragt hat. Installiere aus dem Katalog, lade ein Paket hoch oder verknüpfe einen Ordner, während du eines entwickelst.',
  'help.ctx.admin-plugins.bullet.1':
    'Die Liste: jedes installierte Plugin mit Version, Status, Signatur und seinen Berechtigungen; pro Zeile aktivieren, deaktivieren, aktualisieren oder deinstallieren.',
  'help.ctx.admin-plugins.bullet.2':
    'Plugin hochladen nimmt eine Paketdatei; Neu scannen findet einen Plugin-Ordner, der zur Entwicklung verknüpft ist.',
  'help.ctx.admin-plugins.bullet.3':
    'Erlaubte Hosts pro Plugin: die Adressen, die ein Plugin aufrufen darf, denn ausgehende Verbindungen sind standardmäßig gesperrt.',
  'help.ctx.admin-storage.title': 'Speicher',
  'help.ctx.admin-storage.summary':
    'Wo Uploads liegen: auf der lokalen Platte, in einem S3-Bucket oder in einem Spiegel, der in beide schreibt. Jede Upload-Kategorie kann auf ein anderes Backend gehen, und Zustand sagt, ob jedes Backend antwortet.',
  'help.ctx.admin-storage.bullet.1':
    'Backends: Name und Typ von jedem, mit Testen, Bearbeiten und Entfernen; eines, das über die Umgebung gesetzt ist, ist hier schreibgeschützt.',
  'help.ctx.admin-storage.bullet.2':
    'Kategorien: Cover, Dokumente, Journey-Fotos und der Rest, jede einem Backend zugewiesen; eine zu ändern bietet an, die vorhandenen Dateien zu verschieben.',
  'help.ctx.admin-storage.bullet.3':
    'Zustand: eine Prüfung pro Backend und die Seed-Datei, die belegt, dass die Konfiguration die ist, die der Server sieht.',
  'help.ctx.admin-notifications.title': 'Benachrichtigungen',
  'help.ctx.admin-notifications.summary':
    'Die Kanäle, die die Instanz ihren Benutzern anbietet, und die, die dich als Admin erreichen. Benutzer wählen ihre eigenen Themen und URLs unter Einstellungen; du entscheidest, was es gibt, und richtest E-Mail ein.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy und Webhook: je ein Panel, mit einem Schalter, der den Kanal den Benutzern anbietet, und der serverseitigen Konfiguration, die er braucht.',
  'help.ctx.admin-notifications.bullet.2': 'Reiseerinnerungen: ob der Server die Erinnerung vor Reisebeginn schickt.',
  'help.ctx.admin-notifications.bullet.3':
    'Admin-Ntfy und Admin-Webhook: wohin Admin-Ereignisse wie ein fehlgeschlagenes Backup oder ein neues Release gehen, mit Test.',
  'help.ctx.admin-mcp-tokens.title': 'MCP-Zugang',
  'help.ctx.admin-mcp-tokens.summary':
    'Jedes Token und jede OAuth-Sitzung, die KI-Clients gegenüber diesem TREK halten, über alle Benutzer hinweg, mit der Möglichkeit, jede davon zu widerrufen.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'API-Tokens: wer es erstellt hat, wann es zuletzt benutzt wurde, und Löschen.',
  'help.ctx.admin-mcp-tokens.bullet.2':
    'OAuth-Sitzungen: der Client, der Benutzer und die gewährten Scopes, und Widerrufen.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Was neu ist in TREK: der Release-Verlauf von GitHub, die Version, die du betreibst, und ob eine neuere draußen ist. Das Update selbst passiert außerhalb der App, auf dem Host.',
  'help.ctx.admin-github.bullet.1':
    'Update-Verlauf listet die Releases mit ihren Notizen; das neueste trägt Aktuell, und deine Version ist markiert.',
  'help.ctx.admin-github.bullet.2':
    'Update verfügbar erscheint im Kopfbereich, sobald ein neueres Release existiert, mit einer Anleitung fürs Update bei Docker und anderen Installationen.',
  'help.ctx.admin-backup.title': 'Backup',
  'help.ctx.admin-backup.summary':
    'Vollständige Sicherungen der Datenbank und der Uploads, von Hand oder nach Zeitplan, auf dem Server aufbewahrt und als eine Datei herunterladbar. Wiederherstellen spielt eine zurück.',
  'help.ctx.admin-backup.bullet.1':
    'Datensicherung: Backup erstellen und die Liste der vorhandenen mit Herunterladen, Wiederherstellen und Löschen.',
  'help.ctx.admin-backup.bullet.2':
    'Backup hochladen bringt eine Datei von einer anderen Instanz oder einem früheren Tag herein.',
  'help.ctx.admin-backup.bullet.3':
    'Auto-Backup: an oder aus, Intervall, Stunde und Tag, und wie viele aufbewahrt werden.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'Das Protokoll sicherheitsrelevanter und administrativer Ereignisse: Anmeldungen und Fehlversuche, MFA-Änderungen, Benutzer- und Einstellungsänderungen, Backups und Wiederherstellungen. Nur lesbar, Neuestes zuerst.',
  'help.ctx.admin-audit.bullet.1': 'Eine Zeile pro Ereignis mit Zeit, Benutzer, Aktion, Ressource, IP und Details.',
  'help.ctx.admin-audit.bullet.2': 'Aktualisieren lädt neu; Mehr laden geht weiter zurück.',
  // create-user
  'help.guide.create-user.title': 'Einen Benutzer anlegen',
  'help.guide.create-user.goal': 'Leg ein Konto von Hand an, ohne Einladung.',
  'help.guide.create-user.step.1': 'Klick oben im Tab Benutzer auf Benutzer anlegen.',
  'help.guide.create-user.step.2':
    'Gib Benutzername, E-Mail und ein Passwort ein und wähl die Rolle: Benutzer oder Administrator.',
  'help.guide.create-user.step.3': 'Klick auf Benutzer anlegen.',
  'help.guide.create-user.result':
    'Das Konto erscheint in der Tabelle und kann sich sofort anmelden; gib das Passwort über einen Kanal weiter, dem du vertraust.',
  'help.guide.create-user.tip.1':
    'Für jemanden, der sein Passwort selbst wählen soll, ist ein Einladungslink der bessere Weg hinein.',
  'help.guide.create-user.tip.2':
    'Admins sehen diese Seite und das Audit-Protokoll; alles andere ist für beide Rollen gleich.',
  // edit-user
  'help.guide.edit-user.title': 'Rolle oder Passwort eines Benutzers ändern',
  'help.guide.edit-user.goal':
    'Befördere jemanden, stuf ihn zurück oder hol ihn nach einem verlorenen Passwort wieder rein.',
  'help.guide.edit-user.step.1':
    'Klick auf den Stift in der Zeile des Benutzers. Benutzer bearbeiten öffnet sich mit den Details des Kontos.',
  'help.guide.edit-user.step.2':
    'Ändere die Rolle, setz ein Neues Passwort oder klick auf Passkeys zurücksetzen, wenn die Person das Gerät mit ihren Passkeys verloren hat, dann Speichern.',
  'help.guide.edit-user.result':
    'Die Änderung greift bei der nächsten Anfrage; ein neues Passwort gilt ab der nächsten Anmeldung.',
  'help.guide.edit-user.tip.1': 'Du kannst dir die Admin-Rolle nicht selbst nehmen, solange du der letzte Admin bist.',
  'help.guide.edit-user.tip.2':
    'Passkeys zurücksetzen behält das Passwort; die Person fügt neue Passkeys unter Einstellungen, Konto hinzu.',
  // invite-links
  'help.guide.invite-links.title': 'Jemanden per Link einladen',
  'help.guide.invite-links.goal':
    'Lass eine Person sich auf einer geschlossenen Instanz registrieren und, wenn du magst, direkt in einer Reise landen.',
  'help.guide.invite-links.step.1': 'Klick unter Einladungslinks auf Link erstellen.',
  'help.guide.invite-links.step.2':
    'Setz Max. Nutzungen und Gültig für, optional Zu Trip hinzufügen (optional), und klick auf Erstellen & kopieren.',
  'help.guide.invite-links.step.3':
    'Schick den Link. Jede Zeile zeigt, wie oft er genutzt wurde und wer ihn erstellt hat; Link kopieren kopiert ihn erneut, und aufgebrauchte oder abgelaufene Links sind markiert.',
  'help.guide.invite-links.result':
    'Wer den Link öffnet, registriert sich mit eigenem Passwort und tritt, wenn eine Reise gewählt ist, ihr sofort bei.',
  'help.guide.invite-links.tip.1':
    'Einladungslinks funktionieren auch, wenn Password Registration unter Einstellungen ausgeschaltet ist.',
  'help.guide.invite-links.tip.2':
    'Ein Link mit einer Nutzung und kurzer Gültigkeit ist der sicherste Standard für eine einzelne Person.',
  // delete-user
  'help.guide.delete-user.title': 'Einen Benutzer löschen',
  'help.guide.delete-user.goal': 'Entfern ein Konto und alles, was nur ihm gehört.',
  'help.guide.delete-user.step.1':
    'Klick auf das Papierkorb-Symbol in der Zeile des Benutzers und bestätige Benutzer löschen.',
  'help.guide.delete-user.result':
    'Das Konto, seine eigenen Reisen und seine Journeys sind weg; mit anderen geteilte Reisen bleiben bei den übrigen Mitgliedern.',
  'help.guide.delete-user.tip.1': 'Es gibt kein Zurück. Mach vorher ein Backup, wenn du nicht sicher bist.',
  'help.guide.delete-user.tip.2': 'Der letzte Admin lässt sich nicht löschen; mach vorher jemand anderen zum Admin.',
  // permissions
  'help.guide.permissions.title': 'Festlegen, wer was darf',
  'help.guide.permissions.goal': 'Leg pro Aktion fest, welche Rolle sie auf diesem TREK ausführen darf.',
  'help.guide.permissions.step.1':
    'Such unter Berechtigungseinstellungen die Aktion in ihrer Gruppe, etwa Reisen löschen unter Reiseverwaltung, und wähl die Stufe: Alle, Reise-Mitglieder, Reise-Eigentümer oder Nur Administrator. Eine geänderte Zeile ist als angepasst markiert.',
  'help.guide.permissions.step.2':
    'Klick auf Speichern. Auf Standard zurücksetzen bringt jede Zeile zurück auf die eingebaute Stufe.',
  'help.guide.permissions.result':
    'Die Regel gilt sofort für alle Reisen; die Buttons und Menüs der Leute unterhalb der Stufe verschwinden.',
  'help.guide.permissions.tip.1':
    'Reise-Eigentümer meint die Person, die die Reise angelegt hat; Admins dürfen immer alles.',
  'help.guide.permissions.tip.2':
    'Senk lieber eine Stufe, statt ein Mitglied zu löschen: Wer nicht bearbeiten darf, kann trotzdem lesen und kommentieren.',
  // default-map
  'help.guide.default-map.title': 'Die Karten-Standards für neue Benutzer setzen',
  'help.guide.default-map.goal': 'Gib jedem neuen Konto eine funktionierende Karte ohne eigenes Token.',
  'help.guide.default-map.step.1':
    'Wähl unter Karte den Kartendienst und, für Mapbox oder MapLibre, Kartenstil, Gemeinsames Mapbox-Token und Hochqualitätsmodus; für eine Rasterkarte Karten-Vorlage und Gemeinsamer CARTO-Key.',
  'help.guide.default-map.step.2':
    'Neben jedem Feld, das du geändert hast, holt zurücksetzen die eingebaute Vorgabe von TREK zurück. Standard-Benutzereinstellungen links tut dasselbe für Farbmodus, Einheiten und die Währung.',
  'help.guide.default-map.result':
    'Neue Konten starten damit; wer unter Einstellungen eine eigene Karte gesetzt hat, behält seine.',
  'help.guide.default-map.tip.1':
    'Ein hier eingetragenes Token teilen sich alle, die kein eigenes haben, also behalte sein Kontingent im Blick.',
  'help.guide.default-map.tip.2':
    'Bestehende Konten, die den Karten-Tab nie angefasst haben, folgen diesen Standards ebenfalls.',
  // packing-templates
  'help.guide.packing-templates.title': 'Eine Packvorlage bauen',
  'help.guide.packing-templates.goal': 'Gib Reisen eine Packliste zum Starten statt einer leeren.',
  'help.guide.packing-templates.step.1': 'Klick auf Neue Vorlage, tipp einen Namen ein und bestätige mit dem Haken.',
  'help.guide.packing-templates.step.2':
    'Öffne die Vorlage und klick auf Kategorie hinzufügen; unter jeder Kategorie fügt das + Einträge hinzu, und ein Eintrag braucht nur einen Namen.',
  'help.guide.packing-templates.step.3':
    'Alles speichert sich laufend. Der Stift benennt eine Vorlage, eine Kategorie oder einen Eintrag um, der Papierkorb löscht sie.',
  'help.guide.packing-templates.result':
    'Die Vorlage wird auf der Packliste jeder Reise angeboten; sie anzuwenden kopiert die Einträge, also kann eine Reise sie frei ändern.',
  'help.guide.packing-templates.tip.1':
    'Eine Vorlage pro Reiseart, Strand, Stadt, Wandern, schlägt eine riesige Liste.',
  'help.guide.packing-templates.tip.2':
    'Eine Vorlage zu löschen rührt Reisen nicht an, die sie schon angewendet haben.',
  // categories
  'help.guide.categories.title': 'Den Kategoriensatz verwalten',
  'help.guide.categories.goal': 'Leg fest, welche Kategorien Orte und Sammlungen tragen können und wie sie aussehen.',
  'help.guide.categories.step.1':
    'Klick auf Neue Kategorie, gib ihr einen Namen, wähl ein Icon und eine Farbe; die Vorschau zeigt das Ergebnis. Klick auf Erstellen.',
  'help.guide.categories.step.2':
    'Fahr über eine Kategorie in der Liste, um sie zu bearbeiten oder zu löschen. Löschen fragt nach Bestätigung.',
  'help.guide.categories.result':
    'Der Satz gilt überall auf einmal: im Orts-Inspektor, auf den Karten-Pins, in den Sammlungen und in den Filtern.',
  'help.guide.categories.tip.1':
    'Orte behalten ihre Kategorie-ID, also benennt das Umbenennen einer Kategorie sie auf jedem Ort um.',
  'help.guide.categories.tip.2':
    'Eine gelöschte Kategorie lässt ihre Orte ohne eine zurück; weise sie vorher neu zu, wenn das wichtig ist.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Schulferien von Hand pflegen',
  'help.guide.school-holiday-catalog.goal':
    'Deck ein Land oder eine Region ab, die die eingebauten Ferien-Feeds nicht kennen.',
  'help.guide.school-holiday-catalog.step.1':
    'Klick unter Schulferien auf Land hinzufügen, gib Land und Ländercode (z. B. US) ein und Speichern; dann Region hinzufügen für jeden Teil davon, der abweicht.',
  'help.guide.school-holiday-catalog.step.2':
    'Klick auf eine Region, um Region oder Schulbezirk zu öffnen: Ferienzeitraum hinzufügen, gib jedem Name der Ferien, Startdatum und Enddatum und Speichern. Der Papierkorb entfernt einen Zeitraum, eine Region oder, sobald es keine Regionen mehr hat, ein Land.',
  'help.guide.school-holiday-catalog.result':
    'Benutzer finden Land und Region unter Einstellungen in Vacay und sehen die Zeiträume auf ihrem Jahresraster.',
  'help.guide.school-holiday-catalog.tip.1':
    'Regionen aus den eingebauten Feeds lassen sich hier nicht bearbeiten; leg daneben eine manuelle Region an, wenn ein Datum falsch ist.',
  // auth-methods
  'help.guide.auth-methods.title': 'Festlegen, wie sich Leute anmelden',
  'help.guide.auth-methods.goal': 'Öffne oder schließe Passwort-Anmeldung, SSO und Registrierung und verlange 2FA.',
  'help.guide.auth-methods.step.1':
    'Schalte unter Authentication Methods Password Login und Password Registration an oder aus. Registrierung aus heißt: neue Konten nur über Einladungslinks, SSO oder von Hand.',
  'help.guide.auth-methods.step.2':
    'SSO Login und SSO Auto-Provisioning brauchen ein unten konfiguriertes Single Sign-On (OIDC); Auto-Provisioning legt ein Konto an, wenn sich jemand zum ersten Mal über SSO anmeldet.',
  'help.guide.auth-methods.step.3':
    'Zwei-Faktor-Authentifizierung (2FA) für alle verlangen lässt jede Passwort-Anmeldung beim nächsten Login einen Authenticator einrichten. Passkey-Anmeldung braucht die Relying Party ID und die Origins, unter denen dein TREK erreichbar ist.',
  'help.guide.auth-methods.result': 'Die Anmeldeseite bietet genau die Methoden an, die du angelassen hast.',
  'help.guide.auth-methods.tip.1':
    'Eine Warnung erscheint, bevor du dich aussperrst: mindestens ein Weg hinein bleibt für Admins an.',
  'help.guide.auth-methods.tip.2': 'Werte, die über Umgebungsvariablen gesetzt sind, erscheinen hier schreibgeschützt.',
  // oidc
  'help.guide.oidc.title': 'Single Sign-On anbinden',
  'help.guide.oidc.goal': 'Lass Leute sich mit deinem Identitätsanbieter anmelden.',
  'help.guide.oidc.step.1':
    'Gib unter Single Sign-On (OIDC) den Anzeigename für den Button sowie Issuer URL, Client ID und Client Secret von deinem Anbieter ein, dann Speichern.',
  'help.guide.oidc.step.2': 'Schalte SSO Login unter Authentication Methods an.',
  'help.guide.oidc.result':
    'Die Anmeldeseite zeigt den SSO-Button; mit eingeschaltetem SSO Auto-Provisioning bekommen Erstnutzer automatisch ein Konto.',
  'help.guide.oidc.tip.1':
    'Die Redirect-URI, die dein Anbieter braucht, ist die Adresse deines TREK plus der OIDC-Callback-Pfad aus der Doku.',
  'help.guide.oidc.tip.2':
    'Das Claim-Mapping entscheidet, welche SSO-Gruppen Admins werden; siehe die OIDC-Seite in der Doku.',
  // instance-keys
  'help.guide.instance-keys.title': 'Die API-Schlüssel eintragen',
  'help.guide.instance-keys.goal': 'Schalte Google-Ortssuche, Unsplash-Cover und Amap für die ganze Instanz frei.',
  'help.guide.instance-keys.step.1':
    'Füg unter API-Schlüssel den Google Maps API-Schlüssel ein und klick auf Test; das Feld sagt, ob der Schlüssel antwortet.',
  'help.guide.instance-keys.step.2':
    'Schalte unter Wofür der Schlüssel genutzt wird nur die Funktionen an, die über diesen Schlüssel abgerechnet werden sollen: Autovervollständigung, Details, Fotos, Anreicherung, das Suchprotokoll.',
  'help.guide.instance-keys.step.3':
    'Unsplash-API-Schlüssel treibt die Cover-Suche an; Amap (高德地图) API-Key die Ortssuche in China. Teste jeden genauso.',
  'help.guide.instance-keys.result':
    'Benutzer bekommen die Funktionen ohne eigene Schlüssel; ohne Google-Schlüssel sucht TREK über den freien OpenStreetMap-Stack und die TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'Der persönliche Schlüssel eines Benutzers unter Einstellungen gewinnt für diesen Benutzer gegen den Instanz-Schlüssel.',
  'help.guide.instance-keys.tip.2':
    'Schlüssel können auch aus Umgebungsvariablen kommen; die erscheinen hier schreibgeschützt.',
  // places-transit
  'help.guide.places-transit.title': 'Such- und Verkehrsanbieter wählen',
  'help.guide.places-transit.goal': 'Leg fest, wer Ortssuchen und ÖPNV-Routen beantwortet.',
  'help.guide.places-transit.step.1':
    'Wähl unter Anbieter für die Ortssuche Automatisch, Google Places, Amap (高德地图) oder OpenStreetMap. Automatisch nimmt den besten Schlüssel, der da ist.',
  'help.guide.places-transit.step.2':
    'Wähl unter Verkehrsanbieter Transitous (kostenlos), weltweit und ohne Schlüssel, oder Google, das den Google-Schlüssel braucht.',
  'help.guide.places-transit.result': 'Jedes Suchfeld und jede ÖPNV-Route in TREK folgt der Wahl.',
  'help.guide.places-transit.tip.1':
    'Ein Anbieter ohne seinen Schlüssel zeigt hier eine Warnung und fällt auf OpenStreetMap zurück.',
  'help.guide.places-transit.tip.2': 'Google-Verkehrsrouten werden pro Anfrage abgerechnet; Transitous nicht.',
  // file-types
  'help.guide.file-types.title': 'Die Dateitypen begrenzen',
  'help.guide.file-types.goal': 'Leg fest, welche Dateiendungen Uploads haben dürfen.',
  'help.guide.file-types.step.1':
    'Bearbeite unter Erlaubte Dateitypen die kommagetrennte Liste der Endungen und speichere.',
  'help.guide.file-types.result':
    'Uploads jedes anderen Typs werden mit einer klaren Meldung abgelehnt, in den Dokumenten, im Journal und bei den Covern.',
  'help.guide.file-types.tip.1':
    'Behalte Bildtypen in der Liste; Cover und Journey-Fotos gehen durch dieselbe Prüfung.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Ein Addon an- oder ausschalten',
  'help.guide.toggle-addon.goal': 'Biete allen ein Funktionsmodul an, oder nimm es weg.',
  'help.guide.toggle-addon.step.1':
    'Leg den Schalter auf der Kachel des Addons um. Der Navigationseintrag erscheint oder verschwindet für alle auf einmal.',
  'help.guide.toggle-addon.step.2':
    'Manche Kacheln tragen Unterzeilen für ihre Optionen, etwa Gepäck-Tracking unter Listen oder die Foto-Anbieter unter Journey; sie erscheinen nur, solange das Addon an ist.',
  'help.guide.toggle-addon.result':
    'Daten eines ausgeschalteten Addons bleiben erhalten; wieder einschalten zeigt sie erneut.',
  'help.guide.toggle-addon.tip.1':
    'MCP aus entfernt den Endpunkt und die Integrationen-Abschnitte, die davon abhängen.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas und Journey sind die Addons, nach denen Benutzer am meisten fragen; Dokumente braucht Speicher für Uploads.',
  // install-plugin
  'help.guide.install-plugin.title': 'Ein Plugin installieren',
  'help.guide.install-plugin.goal':
    'Füg ein Plugin von Dritten hinzu und gib ihm genau die Berechtigungen, die es verlangt.',
  'help.guide.install-plugin.step.1':
    'Öffne Entdecken, wähl ein Plugin und klick auf Installieren; oder klick auf Plugin hochladen und wähl ein .zip- oder .tar.gz-Paket.',
  'help.guide.install-plugin.step.2':
    'Zurück unter Installiert lies die Zeile: was das Plugin lesen oder schreiben darf, welche Hosts es aufruft und ob es signiert ist. Schalte Plugin aktivieren an.',
  'help.guide.install-plugin.step.3':
    'Das Menü der Zeile bietet Neu starten, Fehlerprotokoll ansehen, Erlaubte Hosts und Version wechseln…; Löschen deinstalliert es. Ein Update wird in der Zeile angeboten, sobald eine neuere Version existiert, und eines, das neue Rechte verlangt, bleibt aus, bis du sie genehmigst.',
  'help.guide.install-plugin.result':
    'Das Plugin läuft in seinem eigenen Prozess; was es hinzufügt, Widgets, Kartenebenen, Tools, erscheint dort, wo das Plugin es deklariert.',
  'help.guide.install-plugin.tip.1': 'Neu scannen findet einen zur Entwicklung verknüpften Plugin-Ordner ohne Paket.',
  'help.guide.install-plugin.tip.2':
    'Ein unsigniertes Plugin ist als solches markiert; installiere es nur, wenn du seiner Quelle vertraust.',
  // storage-backends
  'help.guide.storage-backends.title': 'Uploads auf S3 oder einen Spiegel verlegen',
  'help.guide.storage-backends.goal': 'Halte Dateien auf Objektspeicher, oder auf Platte und Bucket zugleich.',
  'help.guide.storage-backends.step.1':
    'Klick unter Backends auf Backend hinzufügen, füll Name aus, wähl den Typ, Lokal, S3 oder Spiegel, füll die übrigen Felder aus und klick auf Übernehmen. Testen prüft die Verbindung, Änderungen speichern schreibt sie.',
  'help.guide.storage-backends.step.2':
    'Weis unter Kategorien jede Upload-Kategorie einem Backend zu. Eine zu ändern fragt, ob Vorhandene Objekte verschieben oder Nur neue Schreibvorgänge umleiten.',
  'help.guide.storage-backends.step.3':
    'Zustand oben prüft jedes Backend; ein roter Eintrag nennt, was fehlgeschlagen ist.',
  'help.guide.storage-backends.result':
    'Neue Uploads gehen auf das zugewiesene Backend; verschobene Dateien werden von dort ausgeliefert.',
  'help.guide.storage-backends.tip.1':
    'Ein über Umgebungsvariablen konfiguriertes Backend wird angezeigt, lässt sich hier aber nicht bearbeiten.',
  'help.guide.storage-backends.tip.2':
    'Ein Spiegel schreibt in beide Ziele und liest vom ersten; nutz ihn, um ohne Ausfallzeit zu migrieren.',
  // channels-instance
  'help.guide.channels-instance.title': 'Die Benachrichtigungskanäle einrichten',
  'help.guide.channels-instance.goal': 'Leg fest, welche Kanäle Benutzer wählen dürfen, und richte E-Mail ein.',
  'help.guide.channels-instance.step.1':
    'Trag unter Email (SMTP) SMTP Host, SMTP Port, SMTP User, SMTP Password und die From Address ein; Test-E-Mail senden schickt eine Mail an dich.',
  'help.guide.channels-instance.step.2':
    'Schalte Ntfy und Webhook an, um sie anzubieten; Benutzer tragen dann ihr eigenes Thema oder ihre URL unter Einstellungen, Mitteilungen ein.',
  'help.guide.channels-instance.step.3':
    'Reiseerinnerungen schaltet die Erinnerung vor Reisebeginn; In-App ist immer an und wird hier nur erklärt.',
  'help.guide.channels-instance.result':
    'Der Tab Mitteilungen jedes Benutzers zeigt die Kanäle, die du angeschaltet hast.',
  'help.guide.channels-instance.tip.1':
    'Ein hier eingetragener Standard-ntfy-Server ist für Benutzer vorbelegt; sie können trotzdem ihren eigenen nennen.',
  'help.guide.channels-instance.tip.2':
    'Plugin-Kanäle erscheinen von selbst, sobald ein Plugin mit dieser Fähigkeit aktiv ist.',
  // admin-channels
  'help.guide.admin-channels.title': 'Admin-Ereignisse aufs Handy bekommen',
  'help.guide.admin-channels.goal':
    'Erfahre von fehlgeschlagenen Backups, neuen Releases und anderen Instanz-Ereignissen.',
  'help.guide.admin-channels.step.1':
    'Trag unter Admin-Ntfy ein Thema und, falls nötig, Server und Token ein; unter Admin-Webhook eine URL.',
  'help.guide.admin-channels.step.2':
    'Klick auf Test-Ntfy senden oder Test-Webhook senden, um eine Nachricht ankommen zu sehen.',
  'help.guide.admin-channels.result': 'Admin-Ereignisse gehen dorthin, zusätzlich zur In-App-Glocke jedes Admins.',
  'help.guide.admin-channels.tip.1':
    'Halte das Admin-Thema getrennt von deinem persönlichen, damit ein Ausfall nicht im Reise-Geplauder untergeht.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'KI-Zugriff widerrufen',
  'help.guide.mcp-tokens-admin.goal':
    'Sieh und kappe jedes Token und jede Sitzung, die ein KI-Client hält, für jeden Benutzer.',
  'help.guide.mcp-tokens-admin.step.1':
    'Such unter API-Tokens das Token nach Benutzer und Name; der Papierkorb löscht es und der Client stoppt sofort.',
  'help.guide.mcp-tokens-admin.step.2':
    'Unter OAuth-Sitzungen dasselbe für browserbasierte Clients: Client, Benutzer und Datum, und der Papierkorb widerruft die Sitzung.',
  'help.guide.mcp-tokens-admin.result':
    'Der Client muss von seinem Benutzer neu verbunden werden; sonst ändert sich nichts.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Scopes sagen dir, was ein Client tun konnte; einen Nur-Lese-Scope stehen zu lassen ist harmlos.',
  'help.guide.mcp-tokens-admin.tip.2': 'Das MCP-Addon auszuschalten widerruft alles auf einmal.',
  // release-history
  'help.guide.release-history.title': 'Nach einem neuen Release schauen',
  'help.guide.release-history.goal': 'Wisse, ob dein TREK aktuell ist und was die nächste Version bringt.',
  'help.guide.release-history.step.1':
    'Wenn ein neueres Release existiert, erscheint Update verfügbar oben auf der Admin-Seite; Auf GitHub ansehen öffnet es, und Update-Anleitung erklärt das Update für Docker und andere Installationen.',
  'help.guide.release-history.step.2':
    'Update-Verlauf listet jedes Release mit seinen Notizen; Details anzeigen klappt sie auf, das neueste trägt Aktuell, und Mehr laden geht weiter zurück.',
  'help.guide.release-history.result':
    'Das Update passiert auf dem Host, durch Ziehen des neuen Images oder Bauen des neuen Tags; das Datenverzeichnis bleibt.',
  'help.guide.release-history.tip.1': 'Mach vor einem Update ein Backup; der Tab Backup liegt gleich nebenan.',
  'help.guide.release-history.tip.2':
    'Pre-Releases werden angezeigt, aber nicht als Update angekündigt, es sei denn, du betreibst eines.',
  // create-backup
  'help.guide.create-backup.title': 'Ein Backup machen und wiederherstellen',
  'help.guide.create-backup.goal':
    'Sichere die ganze Instanz, bewahre eine Kopie woanders auf und sei in der Lage, sie zurückzuspielen.',
  'help.guide.create-backup.step.1':
    'Klick unter Datensicherung auf Backup erstellen. Es packt die Datenbank und die Uploads in eine Datei auf dem Server.',
  'help.guide.create-backup.step.2':
    'Herunterladen holt eine Kopie von der Maschine; der Papierkorb löscht alte, um Platz zu schaffen.',
  'help.guide.create-backup.step.3':
    'Wiederherstellen bei einem Backup, oder Backup hochladen mit einer Datei, ersetzt die aktuellen Daten, nachdem Backup wiederherstellen? einmal gefragt hat.',
  'help.guide.create-backup.result':
    'Eine Wiederherstellung bringt Benutzer, Reisen, Dateien und Einstellungen auf den Stand dieses Backups zurück; alle werden abgemeldet.',
  'help.guide.create-backup.tip.1':
    'Wiederherstellen ist die eine Aktion hier, die sich nicht rückgängig machen lässt. Mach vorher ein frisches Backup.',
  'help.guide.create-backup.tip.2':
    'Backups liegen im Datenverzeichnis; erst eine Kopie auf einer anderen Maschine macht sie zu einem Backup.',
  // auto-backup
  'help.guide.auto-backup.title': 'Backups planen',
  'help.guide.auto-backup.goal': 'Lass den Server sich selbst sichern und nur die letzten paar behalten.',
  'help.guide.auto-backup.step.1':
    'Schalte unter Auto-Backup Auto-Backup aktivieren an und wähl Intervall, Ausführung um und, für wöchentlich oder monatlich, Wochentag oder Tag des Monats.',
  'help.guide.auto-backup.step.2':
    'Alte Backups löschen nach legt fest, wie lange ein Backup aufbewahrt wird; ältere gehen, wenn ein neues entsteht.',
  'help.guide.auto-backup.result':
    'Backups erscheinen nach Zeitplan in der Liste; ein Fehlschlag erreicht die Admin-Kanäle.',
  'help.guide.auto-backup.tip.1': 'Zeiten folgen der Zeitzone des Servers, die im Tab Audit steht.',
  'help.guide.auto-backup.tip.2': 'Speicher auf dem Server ist endlich; drei bis fünf zu behalten reicht meistens.',
  // audit-log
  'help.guide.audit-log.title': 'Das Audit-Protokoll lesen',
  'help.guide.audit-log.goal': 'Finde heraus, wer was gemacht hat, und wann.',
  'help.guide.audit-log.step.1':
    'Lies die Zeilen: Zeit, Benutzer, Aktion, Ressource, IP und Details, Neuestes zuerst. Aktionen sind nach dem benannt, was passiert ist, etwa ein fehlgeschlagener Login, eine MFA-Änderung oder eine Wiederherstellung.',
  'help.guide.audit-log.step.2': 'Aktualisieren lädt den Anfang neu; Mehr laden geht weiter zurück.',
  'help.guide.audit-log.result': 'Eine Spur, die du jedem geben kannst, der fragt, warum sich etwas geändert hat.',
  'help.guide.audit-log.tip.1': 'Zeiten werden in der Zeitzone des Servers gezeigt, die über der Tabelle steht.',
  'help.guide.audit-log.tip.2':
    'Das Protokoll ist nur anhängend; nichts hier lässt sich aus der App heraus bearbeiten oder löschen.',
};

export default help;
