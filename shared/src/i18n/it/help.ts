import type { TranslationStrings } from '../types';

// English fallback until 'it' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Aiuto per questa schermata',
  'help.center.title': 'Aiuto',
  'help.center.onThisScreen': 'In questa schermata',
  'help.center.screens': 'Schermate',
  'help.center.thisScreen': 'Questa schermata',
  'help.center.subScreens': 'Sottoschermate: {count}',
  'help.center.subScreensLabel': 'Sottoschermate',
  'help.center.guidesCount': '{count} guide',
  'help.center.goToScreen': 'Vai a {screen}',
  'help.center.overview': 'Panoramica',
  'help.center.howTo': 'Come faccio a…',
  'help.center.searchPlaceholder': 'Cerca in guide e documentazione…',
  'help.center.searchEmpty': 'Nessun risultato per «{query}».',
  'help.center.searchGuides': 'Guide',
  'help.center.searchDocs': 'Documentazione',
  'help.center.searchError': 'La ricerca non è disponibile al momento.',
  'help.center.back': 'Indietro',
  'help.center.close': "Chiudi l'aiuto",
  'help.center.steps': '{count} passaggi',
  'help.center.step': 'Passaggio {n}',
  'help.center.stepsLabel': 'Passaggi',
  'help.center.stepOf': 'Passaggio {n} di {total}',
  'help.center.screenshot': 'Schermata',
  'help.center.result': 'Cosa ottieni',
  'help.center.tips': 'Buono a sapersi',
  'help.center.related': 'Correlati',
  'help.center.openDocs': 'Apri in Aiuto e documentazione',
  'help.center.docsSection': 'Nella documentazione',
  'help.center.noContext': "Non c'è ancora una guida per questa schermata.",
  'help.center.noContextHint': 'Cerca nella documentazione o dicci cosa stavi cercando.',
  'help.center.feedback': 'Manca qualcosa?',
  'help.center.feedbackLink': 'Diccelo su GitHub',
  'help.center.discord': 'Chiedi su Discord',
  'help.center.quick': 'Rapido',
  'help.center.guide': 'Guida',
  'help.center.tour': 'Dimostrazione',
  'help.center.imageAlt': 'Passaggio {n} di «{title}»',

  // ctx
  'help.ctx.dashboard.title': 'Dashboard',
  'help.ctx.dashboard.summary':
    "La dashboard è la porta d'ingresso a ogni viaggio. La carta d'imbarco in alto mette in evidenza il viaggio in corso o il prossimo, la riga sotto conta quanto hai già viaggiato, e le schede elencano tutto ciò che stai pianificando, hai archiviato o hai già concluso.",
  'help.ctx.dashboard.bullet.1':
    "Carta d'imbarco: il viaggio in corso o il prossimo, con date, viaggiatori, luoghi e un conto alla rovescia. Cliccala per aprire il viaggio.",
  'help.ctx.dashboard.bullet.2':
    'Statistiche: paesi visitati, viaggi, giorni in viaggio e distanza in volo, su tutti i tuoi viaggi.',
  'help.ctx.dashboard.bullet.3':
    'Schede dei viaggi, filtrate per Pianificati, Archiviati e Completato, a griglia o a elenco. Passa il mouse su una scheda per modificare, duplicare, archiviare ed eliminare.',
  'help.ctx.dashboard.bullet.4':
    'Widget a destra: convertitore di valute, orologi mondiali, prenotazioni imminenti e collezioni. Ognuno può essere disattivato.',
  'help.ctx.dashboard.bullet.5':
    'La scheda «Nuovo Viaggio» e il pulsante in basso a destra avviano entrambi un nuovo viaggio.',

  // create-trip
  'help.guide.create-trip.title': 'Creare un viaggio',
  'help.guide.create-trip.goal': 'Iniziare un nuovo viaggio con nome, date e foto di copertina.',
  'help.guide.create-trip.step.1':
    'Clicca «Nuovo Viaggio». La scheda in fondo ai tuoi viaggi e il pulsante in basso a destra fanno la stessa cosa.',
  'help.guide.create-trip.step.2':
    "Dai un nome al viaggio. È l'unico campo obbligatorio; tutto il resto si può aggiungere dopo.",
  'help.guide.create-trip.step.3':
    "Scegli una data di inizio e una di fine. TREK crea un giorno per ogni data, così l'itinerario è pronto da riempire.",
  'help.guide.create-trip.step.4':
    'Facoltativo: aggiungi una foto di copertina. Carica la tua, trascinane una o cerca la destinazione su Unsplash.',
  'help.guide.create-trip.step.5': 'Clicca «Crea Nuovo Viaggio».',
  'help.guide.create-trip.result':
    "Il viaggio compare nella dashboard. Se è il prossimo, prende il posto sulla carta d'imbarco in alto.",
  'help.guide.create-trip.tip.1':
    'Le date si possono cambiare in seguito. Se esistono già prenotazioni, TREK chiede se spostarle insieme ai giorni.',
  'help.guide.create-trip.tip.2':
    'La valuta del viaggio scelta qui è quella in cui viene convertita ogni spesa. Scegli la valuta della destinazione.',

  // edit-trip
  'help.guide.edit-trip.title': 'Modificare un viaggio',
  'help.guide.edit-trip.goal': 'Rinominare un viaggio, cambiarne le date o regolarne le impostazioni.',
  'help.guide.edit-trip.step.1':
    "Passa il mouse sulla scheda del viaggio (o sulla carta d'imbarco) e clicca la matita.",
  'help.guide.edit-trip.step.2':
    'Cambia ciò che serve: nome, descrizione, date, copertina, valuta, promemoria o membri.',
  'help.guide.edit-trip.step.3': 'Clicca «Aggiorna».',
  'help.guide.edit-trip.result': 'La scheda si aggiorna subito, per ogni membro del viaggio.',
  'help.guide.edit-trip.tip.1':
    'Spostare le date di un viaggio che ha già prenotazioni apre un secondo passaggio che chiede se anche le prenotazioni devono spostarsi.',

  // cover-image
  'help.guide.cover-image.title': 'Impostare una foto di copertina',
  'help.guide.cover-image.goal': "Dare al viaggio un'immagine che compaia sulla scheda e sulla carta d'imbarco.",
  'help.guide.cover-image.step.1': 'Apri il modulo di modifica del viaggio con la matita sulla sua scheda.',
  'help.guide.cover-image.step.2':
    'In «Immagine di copertina», trascina una foto, clicca per caricarne una o scrivi una destinazione nella ricerca Unsplash.',
  'help.guide.cover-image.step.3': 'Scegli una foto e clicca «Aggiorna».',
  'help.guide.cover-image.result': 'La foto viene salvata con il viaggio e compare ovunque il viaggio sia elencato.',
  'help.guide.cover-image.tip.1':
    'Le foto dalla ricerca Unsplash vengono attribuite automaticamente; i tuoi caricamenti restano sul tuo server.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Duplicare un viaggio',
  'help.guide.duplicate-trip.goal': 'Riutilizzare un viaggio come modello per uno nuovo.',
  'help.guide.duplicate-trip.step.1': "Passa il mouse sulla scheda e clicca l'icona di duplicazione.",
  'help.guide.duplicate-trip.step.2': 'Leggi cosa verrà copiato e cosa no, poi conferma.',
  'help.guide.duplicate-trip.result': "Accanto all'originale compare una copia, pronta da rinominare e ridatare.",
  'help.guide.duplicate-trip.tip.1':
    'Giorni, luoghi, prenotazioni, voci di budget, liste bagagli e note dei giorni vengono copiati. Membri, chat, sondaggi, file e link di condivisione no.',

  // archive-trip
  'help.guide.archive-trip.title': 'Archiviare e ripristinare un viaggio',
  'help.guide.archive-trip.goal': 'Mettere da parte un viaggio senza eliminarlo e recuperarlo più avanti.',
  'help.guide.archive-trip.step.1': 'Passa il mouse sulla scheda e clicca «Archivia».',
  'help.guide.archive-trip.step.2': 'Imposta il filtro sopra le schede su «Archiviati» per rivederlo.',
  'help.guide.archive-trip.step.3': 'Clicca «Ripristina» sulla scheda per riportarlo in «Pianificati».',
  'help.guide.archive-trip.result':
    'I viaggi archiviati conservano tutto. Smettono solo di ingombrare la dashboard e il feed calendario di tutti i viaggi.',

  // delete-trip
  'help.guide.delete-trip.title': 'Eliminare un viaggio',
  'help.guide.delete-trip.goal': 'Rimuovere un viaggio per sempre.',
  'help.guide.delete-trip.step.1': 'Passa il mouse sulla scheda e clicca il cestino.',
  'help.guide.delete-trip.step.2':
    'Conferma. La finestra riporta il nome del viaggio, così sai di avere quello giusto.',
  'help.guide.delete-trip.result':
    'Il viaggio, i suoi giorni, luoghi, prenotazioni e file spariscono. Non si può annullare: nel dubbio, archivia.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Trovare i viaggi completati, passare da griglia a elenco',
  'help.guide.filter-and-view.goal': 'Vedere i viaggi conclusi o archiviati e scegliere il layout che preferisci.',
  'help.guide.filter-and-view.step.1':
    'Usa «Pianificati», «Archiviati» e «Completato» sopra le schede. Completato è ogni viaggio la cui data di fine è passata.',
  'help.guide.filter-and-view.step.2':
    "Clicca l'icona elenco per passare a un elenco compatto; cliccala di nuovo per la griglia.",
  'help.guide.filter-and-view.result': 'La dashboard ricorda il tuo layout su questo dispositivo.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Iscriversi a tutti i viaggi nel calendario',
  'help.guide.calendar-feed.goal':
    'Vedere giorni e prenotazioni di ogni viaggio attivo nella tua app di calendario, sempre sincronizzati.',
  'help.guide.calendar-feed.step.1': "Clicca l'icona del calendario accanto al selettore di vista.",
  'help.guide.calendar-feed.step.2': 'Clicca «Enable calendar subscription». TREK genera un link privato al feed.',
  'help.guide.calendar-feed.step.3':
    'Aggiungi il feed con uno dei pulsanti (Google, Apple, Outlook) o copia il link in qualsiasi app di calendario che si iscrive a URL.',
  'help.guide.calendar-feed.result':
    'Ogni viaggio attivo compare nel tuo calendario e si aggiorna da solo. Restano fuori i viaggi archiviati e quelli conclusi da più di 90 giorni.',
  'help.guide.calendar-feed.tip.1':
    'Il link è un segreto. Chiunque lo abbia può leggere il feed; revocalo dalla stessa finestra se dovesse trapelare.',

  // widgets
  'help.guide.widgets.title': 'Scegliere i widget della dashboard',
  'help.guide.widgets.goal': 'Mostrare o nascondere la riga delle statistiche e i widget a destra.',
  'help.guide.widgets.step.1': 'Apri il menu del tuo avatar in alto a destra e scegli «Impostazioni».',
  'help.guide.widgets.step.2': 'Passa alla scheda «Appearance».',
  'help.guide.widgets.step.3':
    'Sotto «Dashboard widgets», attiva o disattiva ogni widget. Desktop e mobile si impostano separatamente.',
  'help.guide.widgets.step.4': 'Torna alla dashboard. La modifica è immediata.',
  'help.guide.widgets.result':
    "I widget nascosti lasciano spazio ai tuoi viaggi; disattiva l'intera colonna destra per centrare il layout.",
  'help.guide.widgets.link': "Apri le impostazioni dell'aspetto",

  // currency-widget
  'help.guide.currency-widget.title': 'Convertire valute',
  'help.guide.currency-widget.goal': 'Convertire un importo tra due valute con i tassi attuali.',
  'help.guide.currency-widget.step.1': "Digita l'importo e scegli le due valute.",
  'help.guide.currency-widget.step.2': 'La freccia in mezzo scambia la coppia; la freccia circolare aggiorna il tasso.',
  'help.guide.currency-widget.result':
    'La tua coppia di valute viene ricordata nel tuo account, quindi è la stessa su ogni dispositivo.',
  'help.guide.currency-widget.tip.1':
    'I tassi arrivano dalla Banca centrale europea e si aggiornano una volta al giorno.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Aggiungere orologi mondiali',
  'help.guide.timezones-widget.goal': "Tenere d'occhio l'ora locale delle tue destinazioni.",
  'help.guide.timezones-widget.step.1': 'Clicca + nel widget «Fusi orari» e cerca una città.',
  'help.guide.timezones-widget.step.2': 'Rimuovi un orologio con la × accanto.',
  'help.guide.timezones-widget.result': 'I tuoi orologi vengono salvati con il tuo account.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    "Vacay è il tuo pianificatore personale delle ferie: quanti giorni hai nell'anno, quali hai registrato e quanti restano. La griglia mostra l'intero anno a colpo d'occhio; la barra laterale contiene il selettore dell'anno, le persone con cui pianifichi, i calendari condivisi con te, la legenda e le tue ferie spettanti.",
  'help.ctx.vacay.bullet.1':
    'Griglia annuale: dodici schede mensili, una cella per giorno. Clicca un giorno per registrarlo o cancellarlo. Un puntino blu segna i giorni già coperti da un viaggio.',
  'help.ctx.vacay.bullet.2':
    'Barra in basso: modalità Ferie o Ferie aziendali, più gli interruttori Mezza giornata e Recupero / Flex che cambiano cosa registra un clic.',
  'help.ctx.vacay.bullet.3':
    "Disponibilità: i tuoi giorni dell'anno, quanti usati e quanti restano, con il riporto dal periodo precedente.",
  'help.ctx.vacay.bullet.4':
    'Persone sono chi si è fuso col tuo piano, ognuno col suo colore. Calendari condivisi sono anelli in sola lettura dei giorni liberi degli altri.',
  'help.ctx.vacay.bullet.5':
    'Le Impostazioni coprono weekend, inizio settimana, riporto, il tuo anno di ferie, ferie aziendali e calendari di festività o vacanze scolastiche.',
  // log-day
  'help.guide.log-day.title': 'Registrare un giorno di ferie',
  'help.guide.log-day.goal': 'Segnare un giorno libero nella griglia e vedere il saldo seguirlo.',
  'help.guide.log-day.step.1':
    'Guarda la barra in basso: il pulsante a sinistra, nel tuo colore, significa che un clic registra un giorno di ferie per te.',
  'help.guide.log-day.step.2':
    'Clicca un giorno in una scheda mensile. Si riempie del tuo colore e Usati conta un giorno in più.',
  'help.guide.log-day.step.3': 'Clicca di nuovo lo stesso giorno per cancellarlo.',
  'help.guide.log-day.result':
    'Il giorno è registrato, Giorni, Usati e Rimanenti si aggiornano subito, e chi è fuso col tuo piano lo vede dal vivo.',
  'help.guide.log-day.tip.1': 'I weekend non si possono registrare finché Blocca weekend è attivo nelle Impostazioni.',
  'help.guide.log-day.tip.2':
    'Un punto blu in una cella significa che uno dei tuoi viaggi copre quel giorno: così vedi dove ferie e viaggi coincidono.',
  // half-day
  'help.guide.half-day.title': 'Registrare una mezza giornata',
  'help.guide.half-day.goal': 'Prendersi un pomeriggio senza spendere un giorno intero di ferie.',
  'help.guide.half-day.step.1':
    'Attiva Mezza giornata nella barra. Il suo punto arancione è il segno che una mezza giornata riceve nella griglia.',
  'help.guide.half-day.step.2': "Clicca un giorno. Viene registrato come 0,5 e porta il punto arancione nell'angolo.",
  'help.guide.half-day.step.3':
    'Disattiva Mezza giornata quando hai finito; cliccare una mezza giornata con altre impostazioni la converte sul posto.',
  'help.guide.half-day.result':
    'Usati cresce di 0,5. Mezza giornata e Recupero / Flex sono indipendenti, quindi è possibile anche mezza giornata di recupero.',
  'help.guide.half-day.tip.1':
    'La barra mostra sempre il segno che il prossimo clic metterà, così puoi controllare prima di registrare.',
  // comp-day
  'help.guide.comp-day.title': 'Registrare recupero o flex',
  'help.guide.comp-day.goal': 'Prendere tempo compensativo che non costa giorni di ferie.',
  'help.guide.comp-day.step.1':
    "Attiva Recupero / Flex nella barra. Il disco tratteggiato è l'aspetto di un giorno di recupero nella griglia.",
  'help.guide.comp-day.step.2':
    'Clicca un giorno. Si riempie di un tratteggio diagonale nel tuo colore invece di un blocco pieno.',
  'help.guide.comp-day.result':
    'I giorni di recupero sono contati accanto alle tessere delle ferie e non riducono mai Rimanenti.',
  'help.guide.comp-day.tip.1':
    'Straordinari recuperati, flessibilità, un giorno di compensazione: tutto ciò che è libero ma non ferie va qui.',
  // entitlement
  'help.guide.entitlement.title': 'Impostare le ferie spettanti',
  'help.guide.entitlement.goal': "Dire a Vacay quanti giorni di ferie hai nell'anno.",
  'help.guide.entitlement.step.1': 'Nella barra laterale, clicca la tessera Giorni sotto Disponibilità.',
  'help.guide.entitlement.step.2': 'Digita il numero di giorni e premi Invio.',
  'help.guide.entitlement.result':
    "Rimanenti viene ricalcolato dalle ferie spettanti, dall'eventuale riporto e dai giorni usati.",
  'help.guide.entitlement.tip.1':
    "Ogni anno ha le sue ferie spettanti, quindi una modifica qui riguarda solo l'anno selezionato.",
  // years
  'help.guide.years.title': 'Aggiungere e cambiare anno',
  'help.guide.years.goal': "Pianificare già l'anno prossimo, o rivedere quello passato.",
  'help.guide.years.step.1':
    "Clicca il + a destra dell'anno per aggiungere il successivo, o il + a sinistra per il precedente.",
  'help.guide.years.step.2': "Passa da un anno all'altro con le frecce o con le etichette degli anni sotto.",
  'help.guide.years.step.3':
    'Per rimuovere un anno, passa il mouse sulla sua etichetta e clicca il piccolo meno. Le sue voci se ne vanno con lui, quindi conferma con attenzione.',
  'help.guide.years.result': 'Ogni anno conserva le proprie ferie spettanti e le proprie voci; il riporto li collega.',
  // company-holidays
  'help.guide.company-holidays.title': 'Segnare le ferie aziendali',
  'help.guide.company-holidays.goal':
    "Bloccare i giorni in cui tutta l'azienda è chiusa senza intaccare le ferie di nessuno.",
  'help.guide.company-holidays.step.1':
    'Apri le Impostazioni e verifica che Ferie aziendali sia attivo. Lo è di default; la barra offre la modalità solo finché lo è.',
  'help.guide.company-holidays.step.2': 'Tornato nella griglia, porta la barra in modalità Ferie aziendali.',
  'help.guide.company-holidays.step.3': 'Clicca i giorni. Diventano ambra e compaiono nella legenda.',
  'help.guide.company-holidays.result':
    'Le ferie aziendali sono visibili a tutti quelli fusi nel piano e non riducono mai Rimanenti.',
  'help.guide.company-holidays.tip.1':
    'Qualsiasi persona fusa può modificare le ferie aziendali: accordatevi su chi le mantiene.',
  // public-holidays
  'help.guide.public-holidays.title': 'Mostrare le festività',
  'help.guide.public-holidays.goal': 'Mettere sulla griglia le festività del tuo paese o della tua regione.',
  'help.guide.public-holidays.step.1': 'Apri le Impostazioni e attiva Festività pubbliche.',
  'help.guide.public-holidays.step.2':
    "Clicca Aggiungi calendario, poi scegli il paese e, dove conta, la regione. Dagli un colore e un'etichetta se vuoi.",
  'help.guide.public-holidays.step.3': 'Chiudi le Impostazioni. Le festività compaiono nella griglia e nella legenda.',
  'help.guide.public-holidays.result':
    'Le festività sono segnate nel colore del calendario e non contano mai contro le tue ferie.',
  'help.guide.public-holidays.tip.1':
    'Puoi aggiungere più calendari, ad esempio la tua regione e quella di un collega fuso.',
  // school-holidays
  'help.guide.school-holidays.title': 'Mostrare le vacanze scolastiche',
  'help.guide.school-holidays.goal': 'Vedere le vacanze scolastiche della tua regione accanto ai tuoi giorni liberi.',
  'help.guide.school-holidays.step.1': 'Apri le Impostazioni e attiva School Holidays.',
  'help.guide.school-holidays.step.2':
    'Clicca Aggiungi calendario e scegli il paese. Dove un paese divide il suo calendario, scegli anche la regione o il gruppo.',
  'help.guide.school-holidays.step.3':
    'Chiudi le Impostazioni. Ogni periodo riceve una banda colorata in basso nei suoi giorni.',
  'help.guide.school-holidays.result':
    'Le vacanze scolastiche sono puramente visive: non riducono le ferie di nessuno.',
  'help.guide.school-holidays.tip.1':
    "Manca la regione? L'amministratore può gestire le vacanze scolastiche a mano in Admin, Personalizzazione, Vacanze scolastiche.",
  // weekends
  'help.guide.weekends.title': "Bloccare i weekend e impostare l'inizio settimana",
  'help.guide.weekends.goal':
    'Tenere i weekend fuori dal conteggio e iniziare la settimana dal giorno a cui sei abituato.',
  'help.guide.weekends.step.1': 'Apri le Impostazioni.',
  'help.guide.weekends.step.2': 'Attiva Blocca weekend e scegli quali giorni contano come weekend.',
  'help.guide.weekends.step.3': 'Sotto La settimana inizia il, scegli lunedì o domenica.',
  'help.guide.weekends.result':
    'I giorni bloccati sono in grigio nella griglia e non si possono registrare per sbaglio.',
  // leave-year
  'help.guide.leave-year.title': 'Impostare il tuo anno di ferie',
  'help.guide.leave-year.goal':
    'Contare le ferie su un anno fiscale o dalla data di assunzione invece che da gennaio a dicembre.',
  'help.guide.leave-year.step.1': 'Apri le Impostazioni e trova Anno delle ferie.',
  'help.guide.leave-year.step.2':
    'Scegli Anno solare, Anno fiscale (con mese e giorno di inizio) o Assunzione (con la data in cui sei stato assunto).',
  'help.guide.leave-year.result':
    'Ferie spettanti, giorni usati e riporto seguono quel periodo, e la griglia inizia dal suo primo mese.',
  'help.guide.leave-year.tip.1':
    'Questa impostazione è personale: in un piano fuso ognuno mantiene il proprio anno di ferie e i propri numeri.',
  // carry-over
  'help.guide.carry-over.title': 'Riportare i giorni non usati',
  'help.guide.carry-over.goal': 'Aggiungere ciò che resta alla fine di un periodo a quello successivo.',
  'help.guide.carry-over.step.1': 'Apri le Impostazioni.',
  'help.guide.carry-over.step.2': 'Attiva Riporto.',
  'help.guide.carry-over.result':
    "L'importo riportato viene ricalcolato su tutti i tuoi anni e mostrato sotto le ferie spettanti.",
  'help.guide.carry-over.tip.1': 'Disattivarlo azzera ogni saldo di riporto.',
  // invite
  'help.guide.invite.title': 'Pianificare insieme a qualcuno',
  'help.guide.invite.goal':
    'Fondere il tuo piano con un altro utente TREK per vedere i giorni liberi di entrambi in una sola griglia.',
  'help.guide.invite.step.1': "Clicca l'icona della persona nel pannello Persone.",
  'help.guide.invite.step.2': "Scegli l'utente e invia l'invito.",
  'help.guide.invite.step.3': "Riceve una notifica e accetta. Fino ad allora l'invito risulta in attesa.",
  'help.guide.invite.result':
    "I due piani si fondono: ogni persona ha un colore, potete registrare giorni l'uno per l'altro, e tutto si sincronizza dal vivo.",
  'help.guide.invite.tip.1':
    'Per annullare una fusione, usa Sciogli nelle Impostazioni. Le voci di ognuno tornano al proprio piano.',
  'help.guide.invite.tip.2':
    "Se l'altra persona deve solo vedere i tuoi giorni, condividi il calendario invece di fondere.",
  // share-calendar
  'help.guide.share-calendar.title': 'Condividere il calendario in sola lettura',
  'help.guide.share-calendar.goal': 'Far vedere a qualcuno quando sei libero senza dargli voce sul tuo piano.',
  'help.guide.share-calendar.step.1': "Clicca l'icona di condivisione nel pannello Calendari condivisi.",
  'help.guide.share-calendar.step.2': "Scegli l'utente e clicca Condividi. Non serve alcuna accettazione.",
  'help.guide.share-calendar.step.3':
    "I calendari condivisi con te compaiono nello stesso pannello; l'occhio ne nasconde uno, Interrompi condivisione revoca il tuo.",
  'help.guide.share-calendar.result':
    'I tuoi giorni liberi compaiono come un anello colorato nella sua griglia. Nulla di ciò che condividi può essere modificato da lì.',
  'help.guide.share-calendar.tip.1':
    'Condivisione e fusione sono indipendenti: puoi essere fuso con una persona e condividere con altre.',
  'help.guide.share-calendar.tip.2': 'Passa il mouse su un giorno con anello per vedere chi è libero e per quanto.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'L’Atlas è la tua impronta di viaggio su una mappa del mondo: ogni paese in cui un viaggio ti ha portato è colorato, e quelli visitati prima di TREK li aggiungi a mano. Ingrandisci per le regioni, tieni una lista desideri dei luoghi che vuoi ancora vedere e leggi i tuoi numeri nel pannello di vetro in basso.',
  'help.ctx.atlas.bullet.1':
    'La mappa: i paesi visitati portano un colore che resta loro, quelli pianificati hanno un contorno tratteggiato, quelli della lista desideri un tratteggio diagonale, tutto il resto è grigio. Passa sopra un paese per vedere viaggi, luoghi e prima e ultima visita.',
  'help.ctx.atlas.bullet.2':
    'Ricerca in alto: digita un paese o un luogo. Scegliere un paese fa volare la mappa lì e apre la sua finestra; scegliere un luogo atterra nella sua regione, così puoi segnarla.',
  'help.ctx.atlas.bullet.3':
    'Mostra i paesi in programma, in alto a destra: rivela i paesi dei tuoi prossimi viaggi. L’interruttore compare solo finché ne hai.',
  'help.ctx.atlas.bullet.4':
    'Pannello in basso: la scheda Statistiche con paesi, viaggi, luoghi, città, giorni, continenti e la tua serie; la scheda Lista desideri con ciò che ti aspetta ancora.',
  'help.ctx.atlas.bullet.5':
    'Regioni: dal livello di zoom 5 la mappa passa a stati e province, ognuno cliccabile per segnarlo o rimuoverlo.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: con l’addon collegato, un pannello a sinistra delle statistiche spunta desideri e aggiunge paesi dalle tue registrazioni, mai senza la tua conferma.',
  // mark-country
  'help.guide.mark-country.title': 'Segnare un paese come visitato',
  'help.guide.mark-country.goal':
    'Aggiungi un paese in cui sei stato prima di TREK, così mappa e conteggio lo includono.',
  'help.guide.mark-country.step.1': 'Digita il paese nella casella di ricerca in cima alla mappa.',
  'help.guide.mark-country.step.2':
    'Scegli il paese dalla lista. La mappa vola lì e si apre una finestra per quel paese.',
  'help.guide.mark-country.step.3': 'Scegli Segna come visitato.',
  'help.guide.mark-country.result':
    'Il paese prende il suo colore sulla mappa e Paesi conta uno in più. Quel colore è permanente: segnare altri paesi non rimescola mai gli altri.',
  'help.guide.mark-country.tip.1':
    'Cliccare un paese grigio sulla mappa apre la stessa finestra; la ricerca è la via sicura per i paesi piccoli.',
  'help.guide.mark-country.tip.2':
    'Un paese segnato a mano conta sempre come visitato, qualunque siano le date di un viaggio che ci va.',
  // unmark-country
  'help.guide.unmark-country.title': 'Rimuovere un paese che hai segnato',
  'help.guide.unmark-country.goal': 'Togli di nuovo dalla mappa un paese segnato a mano.',
  'help.guide.unmark-country.step.1':
    'Cerca il paese e scegli, oppure cliccalo sulla mappa. Per un paese segnato da te la finestra chiede se rimuoverlo.',
  'help.guide.unmark-country.step.2': 'Conferma con Rimuovi.',
  'help.guide.unmark-country.result': 'Il paese torna grigio ed esce dal tuo conteggio.',
  'help.guide.unmark-country.tip.1':
    'Solo i paesi segnati a mano si rimuovono così. Un paese con viaggi o luoghi resta finché li ha; Rimuovi sta anche nella sua scheda di dettaglio nel pannello quando è stato segnato a mano.',
  // country-details
  'help.guide.country-details.title': 'Vedere cosa hai fatto in un paese',
  'help.guide.country-details.goal': 'Apri un paese visitato e salta ai viaggi che ti hanno portato lì.',
  'help.guide.country-details.step.1': 'Cerca un paese che hai visitato.',
  'help.guide.country-details.step.2':
    'Scegli il paese. La mappa vola lì e il pannello in basso aggiunge una scheda con bandiera, luoghi, viaggi e un chip per viaggio.',
  'help.guide.country-details.result': 'Clicca un chip di viaggio per aprire quel viaggio nel pianificatore.',
  'help.guide.country-details.tip.1':
    'Passando sopra il paese sulla mappa vedi gli stessi numeri più la prima e l’ultima visita.',
  // planned-countries
  'help.guide.planned-countries.title': 'Mostrare i paesi in cui andrai',
  'help.guide.planned-countries.goal':
    'Porta sulla mappa i paesi dei tuoi prossimi viaggi senza contarli come visitati.',
  'help.guide.planned-countries.step.1':
    'Attiva Mostra i paesi in programma, in alto a destra. Il numero accanto dice quanti aspettano.',
  'help.guide.planned-countries.step.2':
    'Cerca un paese pianificato e scegli: il pannello dice In programma e il tooltip della mappa mostra quando parti.',
  'help.guide.planned-countries.result':
    'I paesi pianificati compaiono con contorno tratteggiato, così non sembrano mai un posto dove sei già stato. L’interruttore ricorda la tua scelta.',
  'help.guide.planned-countries.tip.1':
    'Un paese conta come visitato appena il viaggio lì è iniziato; anche un viaggio in corso conta. I viaggi senza date restano del tutto fuori dalle statistiche.',
  'help.guide.planned-countries.tip.2': 'L’interruttore esiste solo finché hai viaggi in arrivo.',
  // regions
  'help.guide.regions.title': 'Segnare una regione',
  'help.guide.regions.goal': 'Più fine dei paesi: segna gli stati, le province o le prefetture in cui sei stato.',
  'help.guide.regions.step.1':
    'Ingrandisci un paese finché compaiono le sue regioni, dal livello di zoom 5. Cercare il paese e sceglierlo ti porta abbastanza vicino.',
  'help.guide.regions.step.2':
    'Clicca una regione. Passandoci sopra compare il nome; la finestra mostra la regione e il suo paese.',
  'help.guide.regions.step.3': 'Scegli Segna come visitato.',
  'help.guide.regions.result':
    'La regione si riempie del colore del paese. Segnare una regione conta anche il paese come visitato se non lo era già.',
  'help.guide.regions.tip.1':
    'Cliccare una regione visitata offre Rimuovi, che l’abbia segnata tu o che ce l’abbia messa un luogo.',
  'help.guide.regions.tip.2': 'Le regioni in cui hai luoghi reali vengono segnate per te; lì non c’è nulla da fare.',
  // search-place
  'help.guide.search-place.title': 'Trovare un luogo e segnare la sua regione',
  'help.guide.search-place.goal': 'Segna la Baviera cercando Monaco, senza sapere in quale regione si trova una città.',
  'help.guide.search-place.step.1':
    'Digita una città, un monumento o un indirizzo nella casella di ricerca. I paesi vengono prima; i luoghi corrispondenti compaiono sotto, sotto Luoghi.',
  'help.guide.search-place.step.2': 'Scegli il luogo. La mappa vola lì e capisce in quale regione si trova il punto.',
  'help.guide.search-place.step.3':
    'Scegli Segna come visitato per quella regione, oppure Aggiungi alla lista desideri se ti aspetta ancora.',
  'help.guide.search-place.result':
    'La regione è segnata, e con lei il paese. I paesi senza dati regionali nel pacchetto mappe ripiegano sul paese stesso.',
  'help.guide.search-place.tip.1':
    'I luoghi vengono dalla stessa ricerca usata ovunque in TREK, quindi seguono il provider impostato dal tuo admin.',
  // bucket-country
  'help.guide.bucket-country.title': 'Mettere un paese nella lista desideri',
  'help.guide.bucket-country.goal':
    'Tieni una lista desideri di paesi direttamente sulla mappa, separata da quelli in cui sei stato.',
  'help.guide.bucket-country.step.1': 'Cerca il paese e scegli, oppure cliccalo sulla mappa.',
  'help.guide.bucket-country.step.2': 'Scegli Aggiungi alla lista desideri.',
  'help.guide.bucket-country.step.3':
    'Scegli mese e anno se sai già quando, poi conferma con Aggiungi alla lista desideri.',
  'help.guide.bucket-country.result':
    'Il paese è disegnato con un tratteggio diagonale nel colore che avrà quando ci arriverai, e compare nella scheda Lista desideri del pannello.',
  'help.guide.bucket-country.tip.1':
    'La stessa finestra offre Rimuovi dalla lista desideri una volta che il paese è in lista.',
  'help.guide.bucket-country.tip.2':
    'Una voce per data obiettivo: lo stesso paese può stare in lista per due mesi diversi, ma non due volte per lo stesso.',
  // bucket-place
  'help.guide.bucket-place.title': 'Aggiungere un luogo alla lista desideri',
  'help.guide.bucket-place.goal':
    'Salva una città, un’attrazione o un indirizzo che sogni, con coordinate e data obiettivo.',
  'help.guide.bucket-place.step.1': 'Apri la scheda Lista desideri nel pannello in basso.',
  'help.guide.bucket-place.step.2': 'Clicca Aggiungi luogo.',
  'help.guide.bucket-place.step.3':
    'Digita il nome e premi il pulsante di ricerca; scegli il risultato così il luogo ha le coordinate. Anche digitare un nome e saltare la ricerca funziona.',
  'help.guide.bucket-place.step.4': 'Scegli mese e anno se vuoi e clicca Aggiungi.',
  'help.guide.bucket-place.result':
    'Il luogo sta in cima alla tua lista desideri con la sua data obiettivo; la × accanto lo rimuove.',
  'help.guide.bucket-place.tip.1':
    'Un desiderio con coordinate è ciò che Dawarich potrà spuntare per te più avanti, quando le tue registrazioni mostrano che eri lì.',
  // stats
  'help.guide.stats.title': 'Leggere le tue statistiche',
  'help.guide.stats.goal': 'Sapere cosa contano i numeri nel pannello, e cosa no.',
  'help.guide.stats.step.1':
    'Paesi è il numero di paesi distinti in cui sei stato davvero; quelli pianificati sono mostrati accanto, non dentro. Viaggi, Luoghi e Giorni sono totali su tutti i tuoi viaggi. Città è ricavato dagli indirizzi dei tuoi luoghi, quindi è una stima.',
  'help.guide.stats.step.2':
    'I continenti mostrano i paesi visitati per continente; l’Antartide entra nella riga appena ci sei stato. Poi la tua serie, anni consecutivi con almeno un viaggio, e quanti viaggi hai fatto quest’anno.',
  'help.guide.stats.result': 'I numeri seguono i tuoi viaggi mentre li pianifichi; qui non c’è nulla da mantenere.',
  'help.guide.stats.tip.1':
    'Le città si leggono dal testo dell’indirizzo, non si cercano, quindi un indirizzo corto come «Osteria Francescana, Italy» o uno che finisce su una prefettura può dare una regione anziché una città.',
  'help.guide.stats.tip.2':
    'I paesi segnati a mano contano in Paesi e nei continenti, ma non portano viaggi, luoghi o giorni.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Raccolte',
  'help.ctx.collections.summary':
    'Collections è la tua libreria di luoghi fuori da qualsiasi viaggio: liste con un nome, fatte di luoghi che hai trovato e vuoi tenere, ogni luogo con uno stato Idea, Da visitare o Visitato. I luoghi vengono copiati dentro e fuori dai viaggi, mai collegati, così una lista e un viaggio non si modificano mai a vicenda.',
  'help.ctx.collections.bullet.1':
    'Barra delle liste a sinistra: le tue liste, quelle condivise con te, gli inviti in attesa di un sì, Tutti i salvati come unione di tutto ciò che possiedi, e Nuova lista più l’importazione da file in cima.',
  'help.ctx.collections.bullet.2':
    'Intestazione della lista aperta: colore, copertina, descrizione e link, i membri, e a destra le azioni Modifica, Esporta e Condividi.',
  'help.ctx.collections.bullet.3':
    'Riga dei filtri sopra i luoghi: stato, categoria, valutazione e ordinamento, il filtro per etichetta, il + per aggiungere un luogo, l’importazione da un viaggio e Scegli per le azioni in blocco.',
  'help.ctx.collections.bullet.4':
    'Righe dei luoghi: avatar, nome e indirizzo, etichette e categoria, e a destra la pillola di stato che cambia con un clic.',
  'help.ctx.collections.bullet.5':
    'Mappa a destra: un segnaposto per ogni luogo con coordinate, il selettore lista o mappa, la casella di ricerca e il filtro per etichetta. Cliccare un segnaposto apre quel luogo.',
  'help.ctx.collections.bullet.6':
    'Scheda di dettaglio: clicca una riga per copertina, categoria, etichette, stato, descrizione e link, con Modifica, Copia nel viaggio e Rimuovi dalla lista.',
  // create-list
  'help.guide.create-list.title': 'Creare una lista',
  'help.guide.create-list.goal': 'Avvia una nuova lista con un nome, un colore e una copertina, pronta per i luoghi.',
  'help.guide.create-list.step.1': 'Clicca Nuova lista in cima alla barra delle liste.',
  'help.guide.create-list.step.2':
    'Dai un nome alla lista e scegli un colore. Immagine di copertina, descrizione e link sono facoltativi; puoi aggiungerli più tardi con Modifica.',
  'help.guide.create-list.step.3': 'Clicca Crea.',
  'help.guide.create-list.result':
    'La lista si apre vuota, con Aggiungi un luogo e Importa da un viaggio come i due modi per riempirla.',
  'help.guide.create-list.tip.1':
    'La copertina può essere un caricamento tuo o un’immagine trovata con la ricerca Unsplash nella stessa finestra.',
  // add-place
  'help.guide.add-place.title': 'Aggiungere un luogo',
  'help.guide.add-place.goal':
    'Trova un luogo e salvalo nella lista aperta con nome, categoria, stato e note in un colpo solo.',
  'help.guide.add-place.step.1': 'Clicca il + nella riga dei filtri sopra i luoghi.',
  'help.guide.add-place.step.2':
    'Digita il luogo nel campo di ricerca e scegli un risultato. Nome, indirizzo e coordinate si compilano da lì.',
  'help.guide.add-place.step.3':
    'Imposta lo stato e, se vuoi, una categoria, una descrizione e dei link, poi clicca Aggiungi. La finestra resta aperta per il luogo successivo; Annulla la chiude.',
  'help.guide.add-place.result': 'Il luogo compare nella lista e, se ha coordinate, come segnaposto sulla mappa.',
  'help.guide.add-place.tip.1':
    'Da dentro un viaggio, Salva nella raccolta nell’ispettore del luogo o nel menu del luogo mette un luogo del viaggio in una lista senza uscire dal viaggio.',
  'help.guide.add-place.tip.2':
    'La lista deve essere tua o una in cui sei editore o admin; il + non c’è su Tutti i salvati né su una lista che puoi solo guardare.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Importare luoghi da un viaggio',
  'help.guide.import-from-trip.goal':
    'Porta in una lista tutti i luoghi di un viaggio in una volta invece di salvarli uno per uno.',
  'help.guide.import-from-trip.step.1':
    'Clicca il pulsante di importazione con la freccia sulla nuvola nella riga dei filtri. Su una lista vuota la stessa azione sta accanto a Aggiungi un luogo.',
  'help.guide.import-from-trip.step.2': 'Scegli uno dei tuoi viaggi.',
  'help.guide.import-from-trip.step.3':
    'Spunta i luoghi che vuoi. Quelli già nella lista sono in grigio; quelli che nessun giorno del viaggio contiene partono già selezionati. Solo nuovi nasconde ciò che hai già.',
  'help.guide.import-from-trip.step.4': 'Clicca Importa. Il pulsante dice sempre quanti stanno per essere aggiunti.',
  'help.guide.import-from-trip.result':
    'I luoghi vengono copiati nella lista con nome, indirizzo, coordinate, descrizione e categoria. Il viaggio resta com’era.',
  'help.guide.import-from-trip.tip.1':
    'I duplicati per nome o coordinate vengono saltati in automatico, quindi importare due volte non fa danni.',
  'help.guide.import-from-trip.tip.2':
    'Nell’elenco dei luoghi di un viaggio, la modalità di selezione offre invece Salva nella raccolta per un insieme di luoghi scelti a mano.',
  // place-status
  'help.guide.place-status.title': 'Impostare lo stato di un luogo',
  'help.guide.place-status.goal': 'Tieni traccia di cos’è un’idea, cosa è in lista ristretta e dove sei già stato.',
  'help.guide.place-status.step.1':
    'Clicca la pillola di stato all’estremità destra di una riga. Idea diventa Da visitare.',
  'help.guide.place-status.step.2': 'Cliccala di nuovo per Visitato, e ancora una volta per ricominciare da Idea.',
  'help.guide.place-status.result':
    'La pillola e il suo colore cambiano subito; il filtro di stato sopra la lista conta di pari passo.',
  'help.guide.place-status.tip.1':
    'Lo stato è una cosa di Collections: copiare un luogo in un viaggio non lo porta con sé.',
  'help.guide.place-status.tip.2':
    'Da un viaggio, Salva nella raccolta mostra una pillola di stato per ogni lista in cui c’è il luogo, e il pannello dei luoghi ha l’azione Segna come visitato per una selezione.',
  // place-detail
  'help.guide.place-detail.title': 'Aprire un luogo salvato',
  'help.guide.place-detail.goal': 'Vedi tutto di un luogo e agisci: modifica, copia in un viaggio, rimuovi.',
  'help.guide.place-detail.step.1':
    'Clicca una riga. La scheda di dettaglio si apre accanto alla lista e la mappa si sposta sul luogo.',
  'help.guide.place-detail.step.2':
    'In fondo ci sono Modifica, Copia nel viaggio e Rimuovi dalla lista; la fotocamera sulla copertina sostituisce la foto automatica con una tua.',
  'help.guide.place-detail.result':
    'Modifica sblocca nome, categoria, etichette, indirizzo, coordinate, descrizione e link direttamente nella scheda.',
  'help.guide.place-detail.tip.1':
    'La copertina viene recuperata in automatico quando il luogo non ha un’immagine propria. Il tuo caricamento può essere JPG, PNG, GIF o WebP fino a 20 MB.',
  'help.guide.place-detail.tip.2':
    'I membri di una lista condivisa possono anche lasciare qui una valutazione a stelle, e il filtro per valutazione nella riga dei filtri usa la media.',
  // labels
  'help.guide.labels.title': 'Raggruppare luoghi con le etichette',
  'help.guide.labels.goal':
    'Dai a una lista etichette tutte sue, come quartieri o giorni, oltre alle categorie comuni.',
  'help.guide.labels.step.1': 'Apri il gestore delle etichette dal controllo etichette nella riga dei filtri.',
  'help.guide.labels.step.2':
    'Digita un nome, scegli un colore e clicca Aggiungi etichetta. Rinomina, ricolora o elimina le etichette esistenti nella stessa finestra.',
  'help.guide.labels.step.3':
    'Attiva Scegli, spunta i luoghi e clicca Assegna etichetta nella barra di selezione. Un singolo luogo prende etichette anche con Modifica sulla sua scheda di dettaglio.',
  'help.guide.labels.step.4':
    'Scegli una o più etichette nella riga dei filtri per restringere lista e mappa ai luoghi che ne portano almeno una.',
  'help.guide.labels.result':
    'I luoghi etichettati mostrano le loro etichette sulla riga; il filtro per etichetta c’è per ogni membro, visualizzatori compresi.',
  'help.guide.labels.tip.1':
    'Le etichette appartengono alla sola lista in cui sono state create. Spostare un luogo in un’altra lista le fa cadere.',
  'help.guide.labels.tip.2': 'Gestire e assegnare etichette richiede i diritti di modifica sulla lista.',
  // filter-select
  'help.guide.filter-select.title': 'Filtrare e selezionare luoghi',
  'help.guide.filter-select.goal': 'Restringi la lista e agisci su molti luoghi in una volta.',
  'help.guide.filter-select.step.1':
    'Usa i menu a tendina nella riga dei filtri: stato, categoria, valutazione minima e ordinamento. Ognuno mostra quanti luoghi lascerebbe.',
  'help.guide.filter-select.step.2': 'Clicca Scegli. Ogni riga riceve una casella e compare una barra di selezione.',
  'help.guide.filter-select.step.3':
    'Spunta i luoghi o usa Seleziona tutto per tutto ciò che è filtrato al momento, poi scegli Assegna etichetta, Sposta in lista, Duplica in lista, Copia nel viaggio o Elimina.',
  'help.guide.filter-select.result':
    'Le azioni valgono per l’intera selezione in una volta. La × a destra esce dalla modalità di selezione.',
  'help.guide.filter-select.tip.1':
    'Seleziona tutto segue il filtro, quindi filtrare per Da visitare e selezionare tutto è la via rapida per agire sulla lista ristretta.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Copiare luoghi in un viaggio',
  'help.guide.copy-to-trip.goal': 'Trasforma i luoghi salvati in tappe di uno dei tuoi viaggi.',
  'help.guide.copy-to-trip.step.1':
    'Attiva Scegli e spunta i luoghi, oppure apri un luogo e usa Copia nel viaggio sulla sua scheda di dettaglio.',
  'help.guide.copy-to-trip.step.2': 'Clicca Copia nel viaggio nella barra di selezione.',
  'help.guide.copy-to-trip.step.3': 'Scegli il viaggio. La casella di ricerca restringe una lista lunga.',
  'help.guide.copy-to-trip.result':
    'I luoghi finiscono nell’elenco dei luoghi di quel viaggio con nome, descrizione, categoria, note, prezzo, coordinate, foto e tag. Nella raccolta non cambia nulla.',
  'help.guide.copy-to-trip.tip.1':
    'Anche i visualizzatori di una lista condivisa possono farlo; copia fuori dalla lista, non la modifica.',
  // share-list
  'help.guide.share-list.title': 'Condividere una lista con qualcuno',
  'help.guide.share-list.goal': 'Pianifica una lista insieme ad altre persone su questo TREK, dal vivo.',
  'help.guide.share-list.step.1': 'Clicca Condividi nell’intestazione della tua lista.',
  'help.guide.share-list.step.2': 'Seleziona l’utente e un ruolo: Visualizzatore, Editore o Admin.',
  'help.guide.share-list.step.3':
    'Clicca Invia invito. La persona compare come invito in sospeso finché non accetta l’invito nella sua barra delle liste.',
  'help.guide.share-list.result':
    'Una volta accettato, la lista compare per lei sotto Condivisa e ogni modifica si sincronizza dal vivo. Membri e ruoli restano modificabili nella stessa finestra.',
  'help.guide.share-list.tip.1':
    'I visualizzatori possono guardare, valutare e copiare luoghi nei propri viaggi. Gli editori aggiungono e modificano luoghi ed etichette. Gli admin possono anche eliminare.',
  'help.guide.share-list.tip.2':
    'Solo il proprietario invita e rimuove persone; un membro può lasciare da sé una lista condivisa.',
  // export-list
  'help.guide.export-list.title': 'Esportare una lista come file',
  'help.guide.export-list.goal': 'Passa una lista a qualcuno su un altro TREK, o portala in un’app di mappe.',
  'help.guide.export-list.step.1': 'Clicca Esporta nell’intestazione della lista.',
  'help.guide.export-list.step.2':
    'Scegli Elenco TREK per un altro TREK, con etichette e stato, oppure GPX per OsmAnd, Organic Maps, un Garmin e altre app che leggono waypoint.',
  'help.guide.export-list.result': 'Il file viene scaricato. Qualsiasi membro di una lista condivisa può esportarla.',
  'help.guide.export-list.tip.1':
    'Un luogo senza coordinate non può essere un waypoint GPX; viene lasciato fuori e TREK ti dice quanti sono stati.',
  'help.guide.export-list.tip.2':
    'Valutazioni, membri e foto caricate restano indietro di proposito; appartengono a questo TREK, non alla lista.',
  // import-file
  'help.guide.import-file.title': 'Importare una lista da un file',
  'help.guide.import-file.goal':
    'Porta dentro un file Elenco TREK o un file GPX, come nuova lista o in una che hai già.',
  'help.guide.import-file.step.1':
    'Clicca il pulsante di importazione con la freccia di caricamento accanto a Nuova lista nella barra delle liste.',
  'help.guide.import-file.step.2':
    'Scegli il file. TREK mostra cosa contiene prima che succeda qualsiasi cosa: il nome, quanti luoghi e quante etichette.',
  'help.guide.import-file.step.3':
    'Lascia Nuova lista e cambia il nome se vuoi, oppure scegli Aggiungi a una lista per mettere i luoghi in una lista che puoi modificare, poi clicca Importa.',
  'help.guide.import-file.result':
    'Atterri sulla lista con i luoghi importati. Aggiungi a una lista si limita sempre ad aggiungere; i luoghi già presenti tengono stato, note ed etichette.',
  'help.guide.import-file.tip.1':
    'Da un GPX ogni waypoint con un nome diventa un luogo; le tracce sono linee e restano fuori, e l’anteprima dice quanti punti erano.',
  'help.guide.import-file.tip.2':
    'Un file che non è né un Elenco TREK né un GPX viene rifiutato con un motivo; un singolo luogo illeggibile viene saltato, non l’intero file.',
  // edit-list
  'help.guide.edit-list.title': 'Modificare o eliminare una lista',
  'help.guide.edit-list.goal':
    'Cambia nome, colore, copertina, descrizione o link di una lista, oppure rimuovi la lista.',
  'help.guide.edit-list.step.1': 'Clicca Modifica nell’intestazione della lista. Solo il proprietario lo vede.',
  'help.guide.edit-list.step.2':
    'Cambia ciò che vuoi e clicca Salva. Elimina lista in basso a sinistra rimuove la lista con tutti i suoi luoghi, dopo una conferma.',
  'help.guide.edit-list.result': 'L’intestazione prende subito il nuovo colore, la copertina e la descrizione.',
  'help.guide.edit-list.tip.1': 'Eliminare una lista non si può annullare. Esportala prima se vuoi tenerne una copia.',
  // all-saved
  'help.guide.all-saved.title': 'Cercare in tutta la tua libreria',
  'help.guide.all-saved.goal': 'Guarda in una volta tutte le liste che possiedi.',
  'help.guide.all-saved.step.1':
    'Clicca Tutti i salvati nella barra delle liste. Unisce i luoghi di ogni lista che possiedi o di cui sei comproprietario.',
  'help.guide.all-saved.step.2':
    'Usa la casella di ricerca e i filtri come su qualsiasi lista; Scegli funziona anche qui per copiare in un viaggio.',
  'help.guide.all-saved.result':
    'Una sola vista su tutti i tuoi luoghi salvati, senza aggiungere né importare, perché non c’è una singola lista in cui metterli.',
  'help.guide.all-saved.tip.1':
    'Le etichette sono per lista, quindi il filtro per etichetta non è offerto su Tutti i salvati.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Diario di viaggio',
  'help.ctx.journey.summary':
    'Diario di viaggio è il tuo diario con le foto in primo piano. Ogni diario è legato a uno o più viaggi e cresce giorno dopo giorno da voci con racconto, foto, umore e meteo. Questa schermata elenca i tuoi diari; aprine uno per scrivere.',
  'help.ctx.journey.bullet.1':
    'Il banner in alto mostra il diario in corso, o il più recente, con i suoi conteggi di voci, foto e luoghi. Continua a scrivere lo apre su oggi.',
  'help.ctx.journey.bullet.2':
    'Sotto, una scheda per diario con copertina, sottotitolo, date e conteggi. Clicca una scheda per aprirla.',
  'help.ctx.journey.bullet.3': 'L’ultima scheda della griglia, Crea un nuovo diario, ne avvia uno dai tuoi viaggi.',
  // create-journey
  'help.guide.create-journey.title': 'Creare un diario',
  'help.guide.create-journey.goal':
    'Iniziare un diario per un viaggio, con i luoghi del viaggio già in attesa come suggerimenti.',
  'help.guide.create-journey.step.1': 'Clicca Crea un nuovo diario, l’ultima scheda della griglia.',
  'help.guide.create-journey.step.2':
    'Dagli un nome e, se vuoi, un sottotitolo, poi spunta i viaggi a cui appartiene. Il contatore dice quanti luoghi entreranno.',
  'help.guide.create-journey.step.3': 'Clicca Crea diario.',
  'help.guide.create-journey.result':
    'Il diario si apre. Ogni luogo dei viaggi collegati sta nella cronologia come suggerimento, uno per ogni giorno in cui si trova, pronto per essere scritto.',
  'help.guide.create-journey.tip.1': 'Altri viaggi si possono collegare più tardi da Impostazioni del diario.',
  'help.guide.create-journey.tip.2': 'Un diario senza viaggi funziona lo stesso; le voci le aggiungi allora a mano.',
  // open-journey
  'help.guide.open-journey.title': 'Aprire un diario',
  'help.guide.open-journey.goal': 'Entrare in un diario, e sapere dove si apre.',
  'help.guide.open-journey.step.1':
    'Clicca una scheda. Ognuna mostra la copertina, le date e quante voci, foto e luoghi contiene il diario.',
  'help.guide.open-journey.result':
    'Un diario in corso si apre su oggi, o sull’ultima voce prima di oggi quando non è ancora scritto nulla; uno concluso si apre all’inizio.',
  'help.guide.open-journey.tip.1':
    'La copertina è la prima foto del diario, a meno che tu ne imposti una in Impostazioni del diario.',
  // continue-writing
  'help.guide.continue-writing.title': 'Continuare il diario in corso',
  'help.guide.continue-writing.goal': 'Saltare dritto alla pagina di oggi del diario che stai vivendo.',
  'help.guide.continue-writing.step.1':
    'Clicca Continua a scrivere nel banner in alto. Mostra il diario in corso, o il più recente quando non ce n’è uno.',
  'help.guide.continue-writing.result':
    'Il diario si apre su oggi, o sull’ultima voce prima di oggi quando non è ancora scritto nulla.',
  'help.guide.continue-writing.tip.1':
    'Il banner offre anche un suggerimento per un viaggio che non ha ancora un diario; Ignora lo nasconde.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Diario',
  'help.ctx.journey-detail.summary':
    'Un diario aperto: la cronologia a sinistra, giorno per giorno, e la mappa a destra con ogni voce e i luoghi dei viaggi collegati. Tutto ciò che aggiunge al diario sta in alto; l’intestazione contiene i conteggi, Studio, l’interruttore dei suggerimenti e Impostazioni del diario.',
  'help.ctx.journey-detail.bullet.1':
    'Intestazione: copertina, titolo e sottotitolo, i conteggi di giorni, luoghi, voci e foto, e a destra Studio, l’interruttore dei suggerimenti e Impostazioni del diario.',
  'help.ctx.journey-detail.bullet.2':
    'Barra degli strumenti: le schede Cronologia e Galleria, Cerca in questo diario e Aggiungi voce.',
  'help.ctx.journey-detail.bullet.3':
    'Cronologia: una sezione per giorno con un + per aggiungere una voce in quel giorno; schede delle voci con foto, umore, meteo e racconto; suggerimenti dai viaggi in uno stile più chiaro, con Scarta questo suggerimento.',
  'help.ctx.journey-detail.bullet.4':
    'Mappa: le voci come segnaposti, uniti in ordine di data da una linea tratteggiata, i luoghi dei viaggi e le tracce GPX importate in quei viaggi.',
  'help.ctx.journey-detail.bullet.5':
    'Impostazioni del diario: copertina, nome e sottotitolo, tracce sulla mappa, campi della voce, suggerimenti scartati, viaggi collegati, contributori, condivisione pubblica, archiviazione ed eliminazione.',
  'help.ctx.journey-detail.bullet.6':
    'Due pulsanti rotondi fluttuano su una cronologia lunga: torna in cima e salta all’ultima voce.',
  // add-entry
  'help.guide.add-entry.title': 'Scrivere una voce',
  'help.guide.add-entry.goal': 'Aggiungere il racconto di un giorno con titolo, testo, umore e meteo.',
  'help.guide.add-entry.step.1':
    'Clicca Aggiungi voce nella barra degli strumenti, o il + nell’intestazione di un giorno per iniziare in quel giorno.',
  'help.guide.add-entry.step.2':
    'Dai un nome al momento e scrivi il racconto. La barra sopra il testo aggiunge grassetto, corsivo, titoli, citazioni, link ed elenchi in Markdown.',
  'help.guide.add-entry.step.3':
    'Scegli un umore e il meteo, controlla la data e fissa un luogo se vuoi: cerca un luogo o usa la tua posizione attuale.',
  'help.guide.add-entry.step.4': 'Clicca Salva.',
  'help.guide.add-entry.result':
    'La voce compare nel suo giorno nella cronologia e come segnaposto sulla mappa. I suoi conteggi si aggiornano nell’intestazione.',
  'help.guide.add-entry.tip.1': 'Scrivere in un suggerimento è lo stesso editor, con il luogo già impostato.',
  'help.guide.add-entry.tip.2':
    'I tag in fondo sono testo libero, gioiello nascosto o miglior pasto, e la ricerca li trova.',
  // entry-photos
  'help.guide.entry-photos.title': 'Aggiungere foto e video a una voce',
  'help.guide.entry-photos.goal': 'Mettere immagini su un giorno; la prima diventa la copertina della voce.',
  'help.guide.entry-photos.step.1': 'Apri il menu di una voce con il ⋯ sulla sua scheda e scegli Modifica.',
  'help.guide.entry-photos.step.2':
    'Clicca Carica foto e scegli i file. Dalla galleria prende immagini già nella galleria del diario; External photos cerca quel giorno in una libreria Immich o Synology collegata.',
  'help.guide.entry-photos.step.3': 'Passa sopra un’immagine per Metti 1° e scegliere la copertina, poi clicca Salva.',
  'help.guide.entry-photos.result': 'Le foto compaiono sulla scheda e nella galleria; la prima è la miniatura ovunque.',
  'help.guide.entry-photos.tip.1':
    'I video vanno su una voce allo stesso modo: mp4, m4v, webm o mov fino a 500 MB, salvati così come caricati.',
  'help.guide.entry-photos.tip.2':
    'I file HEIC di un iPhone vengono convertiti in JPEG al caricamento, il che elimina i loro metadati GPS e della fotocamera.',
  // suggestions
  'help.guide.suggestions.title': 'Usare o scartare i suggerimenti',
  'help.guide.suggestions.goal':
    'Trasformare i luoghi dei tuoi viaggi in voci, e togliere di mezzo quelli di cui non scriverai.',
  'help.guide.suggestions.step.1':
    'Un suggerimento è una scheda più chiara con il nome del luogo in corsivo. Cliccalo per aprire l’editor con luogo e giorno già impostati.',
  'help.guide.suggestions.step.2':
    'Clicca Scarta questo suggerimento su una scheda che non userai. Lascia la cronologia senza essere eliminata, e la sincronizzazione del viaggio non la proporrà di nuovo.',
  'help.guide.suggestions.step.3':
    'Cambiato idea? Impostazioni del diario mostra quanti sono scartati, e Recupera i suggerimenti scartati li riporta tutti.',
  'help.guide.suggestions.result':
    'La cronologia contiene solo ciò che intendi scrivere; l’interruttore nell’intestazione nasconde tutti i suggerimenti in una volta mentre leggi.',
  'help.guide.suggestions.tip.1': 'Un luogo tenuto su due giorni dà un suggerimento su ciascuno di essi.',
  'help.guide.suggestions.tip.2': 'I suggerimenti non contano mai nelle statistiche; contano solo le voci scritte.',
  // add-on-day
  'help.guide.add-on-day.title': 'Aggiungere una voce in un giorno precedente',
  'help.guide.add-on-day.goal': 'Scrivere di un giorno già passato senza correggere la data dopo.',
  'help.guide.add-on-day.step.1': 'Clicca il + nell’intestazione di quel giorno.',
  'help.guide.add-on-day.step.2': 'L’editor si apre con quella data impostata. Scrivi e Salva come al solito.',
  'help.guide.add-on-day.result': 'La voce finisce subito nel giorno giusto.',
  'help.guide.add-on-day.tip.1': 'Dentro un giorno, le frecce nel menu di una voce la spostano prima o dopo.',
  // pros-cons
  'help.guide.pros-cons.title': 'Aggiungere un verdetto',
  'help.guide.pros-cons.goal': 'Riassumere un giorno con ciò che è stato fantastico e ciò che non lo è stato.',
  'help.guide.pros-cons.step.1':
    'Nell’editor, trova Pro e contro sotto il racconto. Scrivi un punto in Pro o Contro e usa Aggiungi un altro per il successivo.',
  'help.guide.pros-cons.step.2': 'Salva. Il verdetto compare sulla scheda come due brevi elenchi.',
  'help.guide.pros-cons.result': 'Pollice su e pollice giù a colpo d’occhio, sotto il racconto.',
  'help.guide.pros-cons.tip.1':
    'Un diario che non usa i verdetti può spegnere la sezione sotto Campi della voce in Impostazioni del diario.',
  // search-journey
  'help.guide.search-journey.title': 'Trovare qualcosa in un diario lungo',
  'help.guide.search-journey.goal': 'Arrivare alla voce che intendi senza scorrere settimane.',
  'help.guide.search-journey.step.1':
    'Scrivi in Cerca in questo diario nella barra degli strumenti. La cronologia si filtra mentre scrivi, su titoli, racconti, luoghi e tag. Accenti e maiuscole non contano.',
  'help.guide.search-journey.step.2':
    'L’interruttore dei suggerimenti nell’intestazione nasconde le schede non scritte mentre leggi. Quando la cronologia è lunga, due pulsanti rotondi fluttuano sopra il suo bordo inferiore: torna in cima e salta all’ultima voce.',
  'help.guide.search-journey.result': 'Restano solo le voci corrispondenti; svuota la casella per rivedere tutto.',
  'help.guide.search-journey.tip.1':
    'Un diario in corso si apre su oggi, quindi la pagina attuale di solito è già in vista.',
  'help.guide.search-journey.tip.2': 'Contano anche i tag: cercare gioiello nascosto trova ogni voce con quel tag.',
  // gallery-map
  'help.guide.gallery-map.title': 'Sfogliare la galleria e la mappa',
  'help.guide.gallery-map.goal': 'Vedere tutto il diario come immagini, e come luoghi sulla mappa.',
  'help.guide.gallery-map.step.1':
    'Passa a Galleria nella barra degli strumenti: ogni foto di ogni voce, più le immagini caricate direttamente nella galleria. Cliccane una per la lightbox.',
  'help.guide.gallery-map.step.2':
    'La mappa a destra mostra le voci come segnaposti in ordine di data, i luoghi dei viaggi collegati e ogni traccia GPX importata in quei viaggi, nel colore che ha nel pianificatore.',
  'help.guide.gallery-map.result':
    'Passa sopra una traccia per il suo nome. La linea tratteggiata tra le voci la disegna TREK; una traccia è il percorso che hai davvero registrato.',
  'help.guide.gallery-map.tip.1': 'Le tracce si possono spegnere per un diario sotto Impostazioni del diario.',
  'help.guide.gallery-map.tip.2':
    'Le foto della galleria con una posizione compaiono anche sulla mappa pubblica, quando Galleria e Mappa sono entrambe condivise.',
  // entry-fields
  'help.guide.entry-fields.title': 'Spegnere i campi della voce',
  'help.guide.entry-fields.goal': 'Limitare l’editor a ciò che questo diario usa.',
  'help.guide.entry-fields.step.1': 'Apri Impostazioni del diario dall’intestazione.',
  'help.guide.entry-fields.step.2': 'Sotto Campi della voce, spegni Umore, Meteo o Pro e contro.',
  'help.guide.entry-fields.result':
    'L’editor smette di chiederli. Nulla di scritto va perso: riaccendere un campo riporta in vista i valori salvati, e un diario condiviso nasconde gli stessi campi.',
  'help.guide.entry-fields.tip.1':
    'Gli interruttori sono per diario, quindi un viaggio di lavoro e una vacanza possono differire.',
  // link-trip
  'help.guide.link-trip.title': 'Collegare un altro viaggio',
  'help.guide.link-trip.goal': 'Portare i luoghi di un secondo viaggio nel diario come suggerimenti.',
  'help.guide.link-trip.step.1': 'Apri Impostazioni del diario dall’intestazione.',
  'help.guide.link-trip.step.2': 'Sotto i viaggi collegati, clicca Aggiungi viaggio.',
  'help.guide.link-trip.step.3': 'Scegli il viaggio.',
  'help.guide.link-trip.result':
    'I suoi luoghi arrivano nella cronologia come suggerimenti nei loro giorni, e le sue tracce GPX si aggiungono alla mappa.',
  'help.guide.link-trip.tip.1':
    'La × accanto a un viaggio collegato lo scollega di nuovo; le voci che hai scritto restano.',
  'help.guide.link-trip.tip.2': 'Le voci di un giorno contano una volta sola, per quanti viaggi coprano quel giorno.',
  // share-public
  'help.guide.share-public.title': 'Condividere il diario pubblicamente',
  'help.guide.share-public.goal': 'Dare a chi non ha un account TREK un link di sola lettura.',
  'help.guide.share-public.step.1': 'Apri Impostazioni del diario e trova Condivisione pubblica.',
  'help.guide.share-public.step.2': 'Clicca Crea link di condivisione.',
  'help.guide.share-public.step.3':
    'Scegli cosa vedono i visitatori: Cronologia, Galleria e Mappa sono interruttori separati. Copia mette il link negli appunti.',
  'help.guide.share-public.result':
    'Chiunque abbia il link vede le sezioni attive e nient’altro; i campi che hai spento in Campi della voce restano nascosti anche lì.',
  'help.guide.share-public.tip.1':
    'Le foto compaiono sulla mappa pubblica solo quando Galleria e Mappa sono entrambe attive; con Mappa spenta le loro coordinate vengono rimosse prima di lasciare il server.',
  'help.guide.share-public.tip.2': 'Elimina il link nello stesso punto per terminare la condivisione.',
  // contributors
  'help.guide.contributors.title': 'Scrivere insieme',
  'help.guide.contributors.goal': 'Lasciare che un compagno di viaggio aggiunga le proprie voci e foto.',
  'help.guide.contributors.step.1': 'Apri Impostazioni del diario e scorri fino ai contributori.',
  'help.guide.contributors.step.2': 'Clicca Invita contributore e cerca l’utente per nome o email.',
  'help.guide.contributors.step.3': 'Scegli un ruolo e conferma.',
  'help.guide.contributors.result':
    'Il diario compare nel suo elenco e le sue voci portano il suo nome. Rimuovi un contributore con la × accanto a lui.',
  'help.guide.contributors.tip.1':
    'I contributori sono per le persone su questo TREK. Per tutti gli altri c’è il link pubblico.',
  // studio
  'help.guide.studio.title': 'Impaginare il diario come un fotolibro',
  'help.guide.studio.goal': 'Trasformare il diario in pagine stampabili.',
  'help.guide.studio.step.1': 'Clicca Studio nell’intestazione. Il designer si apre sopra il diario.',
  'help.guide.studio.step.2':
    'Il nome del diario a sinistra della barra in alto è la via del ritorno; ti riporta dov’eri.',
  'help.guide.studio.result':
    'La striscia delle pagine a sinistra, la doppia pagina sul banco di lavoro, le proprietà a destra. Auto layout costruisce il libro dalle tue voci; Export produce un PDF pronto per la stampa.',
  'help.guide.studio.tip.1': 'Studio ha bisogno di una finestra larga almeno 1024 px e non è offerto sul telefono.',
  'help.guide.studio.tip.2':
    'Il libro eredita l’accesso del diario: chi può leggere il diario può aprirlo, chi può modificarlo può salvare.',
  // archive-journey
  'help.guide.archive-journey.title': 'Archiviare o eliminare un diario',
  'help.guide.archive-journey.goal': 'Chiudere un diario concluso, o rimuoverne uno per sempre.',
  'help.guide.archive-journey.step.1': 'Apri Impostazioni del diario.',
  'help.guide.archive-journey.step.2':
    'In fondo, Archivia il viaggio lo termina e lo segna come archiviato; Ripristina il viaggio lo riporta. Elimina lo rimuove con tutte le voci e le foto, dopo una conferma.',
  'help.guide.archive-journey.result':
    'Un diario archiviato resta leggibile e condivisibile; solo non si apre più su oggi.',
  'help.guide.archive-journey.tip.1':
    'L’eliminazione non si può annullare, e non tocca i viaggi a cui il diario era collegato.',
  'help.guide.archive-journey.tip.2': 'Copertina, nome e sottotitolo stanno nello stesso dialogo, in cima.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio impagina un diario di viaggio come un libro fotografico stampabile. Si apre sopra il diario: l’elenco delle pagine e i contenuti a sinistra, la doppia pagina su cui stai lavorando al centro, le sue proprietà a destra. Auto layout costruisce una prima bozza dalle tue voci; tutto ciò che segue è tuo da spostare, ritagliare e ristilizzare, con un annulla per ogni passo.',
  'help.ctx.journey-studio.bullet.1':
    'Barra in alto: Back to the journey, Book view, Undo e Redo, Page format, Auto layout ed Export. Il segno Salvato accanto al titolo ti dice quando il libro è archiviato.',
  'help.ctx.journey-studio.bullet.2':
    'Colonna a sinistra con cinque sezioni: Pages, Content (le foto e le voci del diario), Elements (testo, forme, linee, griglie, cornici, icone), Viaggio (mappe, paesi, bandiere e contrassegni costruiti dal diario) e Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Piano di lavoro: la doppia pagina corrente con abbondanza e margini di sicurezza, la barra dello zoom sotto, Fit to view e Scarica questa doppia pagina a destra.',
  'help.ctx.journey-studio.bullet.4':
    'Properties a destra: posizione e dimensioni, ritaglio e punto focale, riempi o adatta, look, angoli, cornice, ordine di sovrapposizione e blocco di ciò che è selezionato; numeri di pagina e documento quando non lo è nulla.',
  'help.ctx.journey-studio.bullet.5':
    'Il libro ha la forma di uno rilegato: copertina, una prima pagina singola, le doppie pagine, un’ultima pagina singola e la quarta di copertina. I numeri di pagina contano dalla prima pagina e si stampano come mostrati.',
  'help.ctx.journey-studio.bullet.6':
    'Più persone possono progettare insieme: ognuno vede i puntatori degli altri con i loro nomi, e un salvataggio su una versione che qualcun altro ha cambiato torna come conflitto invece di sovrascrivere il suo lavoro.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Costruire il libro automaticamente',
  'help.guide.studio-auto-layout.goal':
    'Ottieni con un clic una prima bozza completa dalle voci e dalle foto del diario.',
  'help.guide.studio-auto-layout.step.1': 'Clicca Auto layout nella barra in alto.',
  'help.guide.studio-auto-layout.step.2':
    'Scegli Tutto il libro: sostituisce ogni pagina, mantenendo il tuo titolo e l’impostazione della pagina. Questa pagina ricostruisce solo quella sullo schermo, ed è offerta su una doppia pagina nata da una voce.',
  'help.guide.studio-auto-layout.step.3':
    'Scorri l’elenco delle pagine. Undo riporta indietro l’intero layout se preferivi quello che avevi.',
  'help.guide.studio-auto-layout.result':
    'Una doppia pagina per voce, in ordine, con foto, titolo e racconto sistemati per te. Ogni elemento continua a seguire la sua voce finché non lo modifichi.',
  'help.guide.studio-auto-layout.tip.1':
    'Entrambe le opzioni sono normali passi di annulla, quindi provale liberamente.',
  'help.guide.studio-auto-layout.tip.2':
    'Un elemento che Auto layout ha legato a una voce segue le modifiche a quella voce finché non lo tocchi in Properties; quello spezza il legame.',
  // studio-pages
  'help.guide.studio-pages.title': 'Aggiungere, spostare e rimuovere doppie pagine',
  'help.guide.studio-pages.goal': 'Dai forma al libro pagina per pagina.',
  'help.guide.studio-pages.step.1':
    'Apri Pages nella colonna. Le miniature sono il libro in ordine: copertina, prima pagina, doppie pagine, ultima pagina, quarta di copertina.',
  'help.guide.studio-pages.step.2':
    'Aggiungi pagina in basso ne mette una nuova prima dell’ultima pagina; il + tra due miniature ne inserisce una proprio lì.',
  'help.guide.studio-pages.step.3':
    'Passa sopra una miniatura per le sue azioni: Sposta prima, Sposta dopo, Duplica pagina ed Elimina pagina. Clicca una miniatura per aprire quella doppia pagina sul piano di lavoro.',
  'help.guide.studio-pages.result':
    'Copertina, prima e ultima pagina e quarta di copertina restano dove sono; le nuove doppie pagine finiscono sempre in mezzo.',
  'help.guide.studio-pages.tip.1': 'Book view nella barra in alto mostra tutto il libro in fogli, come sarà rilegato.',
  'help.guide.studio-pages.tip.2':
    'I numeri di pagina si attivano sotto Documento in Properties, senza nulla selezionato.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Applicare un layout a una doppia pagina',
  'help.guide.studio-layouts.goal': 'Dai a una doppia pagina una disposizione pronta di cornici per foto e testo.',
  'help.guide.studio-layouts.step.1':
    'Apri Layouts nella colonna. Tredici layout per doppie pagine, e un set a parte per copertina, retro e pagine singole.',
  'help.guide.studio-layouts.step.2':
    'Cliccane uno. La doppia pagina sul piano di lavoro prende le sue cornici; foto e testo che avevi già vengono versati dentro.',
  'help.guide.studio-layouts.result':
    'Le cornici vuote aspettano contenuto: trascina una foto da Content su una, o usa Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Un layout è un passo di annulla come qualsiasi altro.',
  // studio-content
  'help.guide.studio-content.title': 'Mettere foto e voci su una pagina',
  'help.guide.studio-content.goal': 'Porta il materiale del diario stesso sulla doppia pagina.',
  'help.guide.studio-content.step.1':
    'Apri Content nella colonna. Photos elenca ogni immagine del diario; Entries elenca le voci con il loro testo.',
  'help.guide.studio-content.step.2':
    'Trascina una foto sulla doppia pagina, o su una cornice vuota, oppure clicca Add to this page sotto di essa. Carica foto aggiunge immagini che non sono ancora nel diario.',
  'help.guide.studio-content.step.3':
    'Sotto una voce, Title, Story e Place mettono quel testo sulla pagina come elemento di testo; Data e le coordinate arrivano come contrassegni, e le foto della voce sono elencate proprio lì.',
  'help.guide.studio-content.result':
    'Una foto rilasciata diventa un elemento foto; il testo continua a seguire la voce finché non lo modifichi.',
  'help.guide.studio-content.tip.1': 'La casella di ricerca in cima a Content filtra entrambi gli elenchi.',
  'help.guide.studio-content.tip.2':
    'Rilasciare un file dal desktop sul piano di lavoro lo carica e lo posiziona in un colpo solo.',
  // studio-elements
  'help.guide.studio-elements.title': 'Aggiungere testo, forme e icone',
  'help.guide.studio-elements.goal': 'Decora una doppia pagina oltre foto e racconti.',
  'help.guide.studio-elements.step.1': 'Apri Elements nella colonna.',
  'help.guide.studio-elements.step.2':
    'Clicca uno stile di testo per un titolo o una didascalia, una forma, una linea, una griglia, una cornice vuota con uno stile di cornice, o un’icona dalla libreria con ricerca. Ognuno atterra al centro della doppia pagina, pronto da spostare.',
  'help.guide.studio-elements.result':
    'Fai doppio clic su un elemento di testo per scriverci; Properties contiene carattere, peso, dimensione, spaziatura e allineamento.',
  'help.guide.studio-elements.tip.1': 'Le cornici sono spazi foto vuoti: rilasciaci un’immagine più tardi.',
  // studio-travel
  'help.guide.studio-travel.title': 'Aggiungere una mappa, bandiere e numeri',
  'help.guide.studio-travel.goal': 'Trasforma il viaggio stesso in numeri sulla pagina.',
  'help.guide.studio-travel.step.1': 'Apri Viaggio nella colonna.',
  'help.guide.studio-travel.step.2':
    'Scegli cosa aggiungere: una mappa del percorso delle voci, sagome dei paesi, un elenco o una griglia dei paesi, bandiere, un contrassegno di data, giorno o distanza, o un riepilogo dell’intero viaggio. Ognuno è costruito dai dati del diario e si aggiorna con essi.',
  'help.guide.studio-travel.result':
    'L’elemento compare sulla doppia pagina; Properties ne regola lo stile, e per la mappa l’area.',
  'help.guide.studio-travel.tip.1':
    'I contrassegni seguono la voce da cui è nata la doppia pagina, quindi un contrassegno di data su una doppia pagina impaginata automaticamente mostra già quel giorno.',
  // studio-properties
  'help.guide.studio-properties.title': 'Modificare ciò che hai selezionato',
  'help.guide.studio-properties.goal': 'Sposta, ritaglia, stilizza e sovrapponi un elemento con l’ispettore.',
  'help.guide.studio-properties.step.1':
    'Clicca un elemento sulla doppia pagina. Compaiono le maniglie per dimensione e rotazione; trascinalo per spostarlo.',
  'help.guide.studio-properties.step.2':
    'Properties a destra segue la selezione: posizione e dimensioni, Crop con il punto focale che decide cosa resta nella cornice, Fill o Fit, i filtri Look, il raggio in Corner, lo stile in Cornice, l’ordine di sovrapposizione e Lock.',
  'help.guide.studio-properties.step.3':
    'Duplica e Delete stanno in cima all’ispettore; Undo nella barra in alto annulla qualsiasi di queste modifiche.',
  'help.guide.studio-properties.result':
    'Un elemento bloccato non si può più afferrare sulla pagina, il che tiene al sicuro un layout finito mentre ci lavori intorno.',
  'help.guide.studio-properties.tip.1': 'Maiusc-clic seleziona più elementi; l’ispettore li modifica poi insieme.',
  'help.guide.studio-properties.tip.2':
    'Modificare un elemento posizionato da Auto layout spezza il suo legame con la voce; smette di seguire le modifiche successive a quella voce.',
  // studio-format
  'help.guide.studio-format.title': 'Scegliere il formato di pagina',
  'help.guide.studio-format.goal':
    'Imposta la dimensione a cui sarà stampato il libro, prima che il layout ne dipenda.',
  'help.guide.studio-format.step.1': 'Clicca Page format nella barra in alto.',
  'help.guide.studio-format.step.2':
    'Scegli Square 21 × 21 cm, Square 30 × 30 cm, A4 o A5 landscape o portrait, oppure inserisci larghezza e altezza personalizzate in millimetri. Abbondanza e Sicurezza stanno subito sotto.',
  'help.guide.studio-format.result':
    'Ogni doppia pagina è disegnata a quella dimensione, con 3 mm di abbondanza e 5 mm di margine di sicurezza come impostazione predefinita.',
  'help.guide.studio-format.tip.1':
    'Cambia prima il formato, poi lancia Auto layout; il layout è costruito per la dimensione che trova.',
  'help.guide.studio-format.tip.2':
    'Chiedi alla tua tipografia i suoi valori di abbondanza e sicurezza e inserisci quelli.',
  // studio-export
  'help.guide.studio-export.title': 'Esportare il libro come PDF',
  'help.guide.studio-export.goal': 'Ottieni un file pronto per la stampa, o uno da leggere a schermo.',
  'help.guide.studio-export.step.1': 'Clicca Export nella barra in alto.',
  'help.guide.studio-export.step.2':
    'Scegli Pagine singole, una pagina per foglio in ordine di lettura, ciò che vuole una tipografia, oppure Doppie pagine, due pagine alla volta come si apre il libro. Segni di taglio aggiunge l’abbondanza su ogni bordo e segna dove tagliare.',
  'help.guide.studio-export.step.3':
    'Clicca Anteprima di stampa. Il browser apre le pagine e Salva come PDF le trasforma nel file.',
  'help.guide.studio-export.result':
    'Un PDF con tanti fogli quanti ne ha annunciati la finestra, nel formato di pagina che hai impostato.',
  'help.guide.studio-export.tip.1': 'Creare il PDF è solo per desktop, come Studio stesso.',
  'help.guide.studio-export.tip.2':
    'Per una bozza, esporta Doppie pagine senza segni di taglio; per la tipografia, Pagine singole con i segni.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Riutilizzare una doppia pagina in un altro libro',
  'help.guide.studio-spread-file.goal': 'Porta un design che ti piace dal libro di un diario a un altro.',
  'help.guide.studio-spread-file.step.1':
    'Con la doppia pagina sul piano di lavoro, clicca Scarica questa doppia pagina all’estremità destra della barra dello zoom. Il file contiene il design, non le fotografie.',
  'help.guide.studio-spread-file.step.2':
    'Nell’altro libro, apri Pages e clicca Importa accanto ad Aggiungi pagina, poi scegli il file.',
  'help.guide.studio-spread-file.result':
    'La doppia pagina arriva con le sue cornici e i suoi stili di testo; rilascia le foto del nuovo diario nelle cornici.',
  'help.guide.studio-spread-file.tip.1':
    'Un file che non è un design di doppia pagina viene rifiutato con una motivazione.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Impostazioni',
  'help.ctx.settings.summary':
    'Le tue impostazioni personali, una scheda per argomento nella barra laterale a sinistra. La maggior parte degli interruttori si applica nel momento in cui li sposti; un modulo con un pulsante Salva in fondo lo aspetta. Niente qui cambia il TREK di qualcun altro.',
  'help.ctx.settings.bullet.1':
    'Barra laterale a sinistra: Visualizzazione, Appearance, Mappa, Notifiche, Integrazioni, Offline e Account. Plugin compare appena ne è installato uno, Informazioni su un TREK self-hosted.',
  'help.ctx.settings.bullet.2':
    'Visualizzazione è lingua, unità, valuta e con cosa si apre l’app; Appearance è tema, colori, dimensione del testo e i widget della dashboard.',
  'help.ctx.settings.bullet.3':
    'Mappa sceglie il renderer e il suo stile; Notifiche i canali che ti raggiungono; Integrazioni librerie foto, chiavi API e MCP; Offline ciò che l’app tiene su questo dispositivo.',
  'help.ctx.settings.bullet.4':
    'Account contiene profilo, password, autenticazione a due fattori, passkey e l’eliminazione del tuo account.',
  'help.ctx.settings-display.title': 'Visualizzazione',
  'help.ctx.settings-display.summary':
    'Lingua, unità e valuta, come si comportano mappa e prenotazioni, e con cosa si apre TREK. Ogni modifica qui si applica subito.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: la lingua dell’interfaccia, il formato dell’ora, la valuta di visualizzazione, e le unità di distanza e temperatura.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: i percorsi delle prenotazioni sempre sulla mappa, la pillola Esplora luoghi, l’ottimizzazione del percorso dal tuo alloggio, i codici di prenotazione nascosti e i percorsi delle prenotazioni etichettati.',
  'help.ctx.settings-display.bullet.3':
    'Avvio: se TREK si apre sulla dashboard o sul viaggio attivo, e quale scheda di un viaggio compare per prima.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Come appare TREK su questo account: chiaro o scuro, il colore d’accento, vetro e movimento, dimensione del testo, e quali widget mostra la dashboard. Tutto si applica dal vivo, su ogni dispositivo in cui accedi.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Chiara, Scura o Automatica, e il Color scheme con un Custom accent tutto tuo.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density e Text size, con dimensioni avanzate per livello.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets: un interruttore per widget, separatamente per Desktop e Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults in fondo rimette tutto a posto.',
  'help.ctx.settings-map.title': 'Mappa',
  'help.ctx.settings-map.summary':
    'Quale motore disegna le mappe e in che stile. Leaflet è la classica mappa raster, MapLibre disegna tile vettoriali senza alcun token, Mapbox aggiunge edifici 3D e terreno con il tuo token.',
  'help.ctx.settings-map.bullet.1':
    'Provider mappa: Leaflet, MapLibre o Mapbox, ognuno con una riga su cosa gli serve.',
  'help.ctx.settings-map.bullet.2':
    'Stile mappa e Modello Mappa: l’aspetto dei tile, più il token o la chiave che un provider richiede.',
  'help.ctx.settings-map.bullet.3':
    'Modalità alta qualità per l’antialiasing e la proiezione a globo; Salva Mappa scrive la scelta.',
  'help.ctx.settings-notifications.title': 'Notifiche',
  'help.ctx.settings-notifications.summary':
    'Dove TREK ti raggiunge fuori dall’app: un argomento ntfy, un webhook o un canale fornito da un plugin. Sotto i canali, una riga per evento decide cosa va dove.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: l’argomento, un server tuo opzionale e un token di accesso opzionale, con Testa per inviarne uno subito.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: un URL che riceve ogni evento come JSON, con Testa.',
  'help.ctx.settings-notifications.bullet.3':
    'Le righe delle preferenze: per evento, quale canale è attivo. I canali dei plugin mostrano Configura finché non sono impostati.',
  'help.ctx.settings-integrations.title': 'Integrazioni',
  'help.ctx.settings-integrations.summary':
    'Tutto ciò che si collega a TREK dall’esterno: librerie foto per il diario, chiavi API per gli script, e l’endpoint MCP con i suoi token e client OAuth per gli assistenti IA.',
  'help.ctx.settings-integrations.bullet.1':
    'Provider foto: Immich e Synology Photos, ognuno con il suo URL e la sua chiave, Test connessione e Salva.',
  'help.ctx.settings-integrations.bullet.2':
    'Chiavi API: chiavi personali per script e altri strumenti che chiamano l’API di TREK a tuo nome.',
  'help.ctx.settings-integrations.bullet.3':
    'Configurazione MCP: l’endpoint, una configurazione client pronta da copiare, e i token API.',
  'help.ctx.settings-integrations.bullet.4':
    'Client OAuth 2.1: app che accedono tramite TREK, con URI di reindirizzamento, ambiti consentiti, client macchina e le sessioni attive.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Cosa TREK tiene su questo dispositivo perché un viaggio si apra anche senza connessione, e cosa succede quando una modifica fatta offline si scontra con una fatta altrove.',
  'help.ctx.settings-offline.bullet.1':
    'Modalità offline: Forza la modalità offline fa comportare l’app come se la rete fosse sparita, per test o su una connessione a consumo.',
  'help.ctx.settings-offline.bullet.2':
    "Prepara per l'offline: Scarica per l'uso offline scarica ora i tuoi viaggi e i loro tile della mappa.",
  'help.ctx.settings-offline.bullet.3':
    'Cosa archiviare offline: tile della mappa attivi o no, e un interruttore per viaggio.',
  'help.ctx.settings-offline.bullet.4':
    'Conflitti di sincronizzazione e Cache offline: la strategia per gli scontri, il conteggio delle modifiche in sospeso e fallite, Risincronizza ora e Svuota la cache.',
  'help.ctx.settings-account.title': 'Account',
  'help.ctx.settings-account.summary':
    'Chi sei su questo TREK e come accedi: profilo e avatar, password, autenticazione a due fattori, passkey, e in fondo a tutto l’eliminazione dell’account.',
  'help.ctx.settings-account.bullet.1': 'Profilo: nome utente, email e avatar, salvati con Salva Profilo.',
  'help.ctx.settings-account.bullet.2':
    'Cambia Password: password attuale, nuova password due volte, Aggiorna password.',
  'help.ctx.settings-account.bullet.3':
    'Autenticazione a due fattori (2FA) con un’app authenticator e codici di backup; Passkey per accedere senza password.',
  'help.ctx.settings-account.bullet.4':
    'Elimina account in fondo, dietro una conferma. L’ultimo admin non può eliminare sé stesso.',
  // language-region
  'help.guide.language-region.title': 'Impostare lingua, unità e valuta',
  'help.guide.language-region.goal': 'Fai parlare TREK la tua lingua e contare come te.',
  'help.guide.language-region.step.1':
    'Scegli la lingua dell’interfaccia in Language & region. TREK cambia subito, su ogni dispositivo in cui accedi.',
  'help.guide.language-region.step.2':
    'Sotto, scegli il formato dell’ora, la valuta di visualizzazione, e le unità di distanza e temperatura.',
  'help.guide.language-region.result':
    'Date, distanze e soldi si leggono come ti aspetti; la valuta propria di un viaggio resta accanto agli importi convertiti.',
  'help.guide.language-region.tip.1':
    'La valuta di visualizzazione serve per i totali tra viaggi; ogni viaggio mantiene la valuta che gli hai dato.',
  'help.guide.language-region.tip.2': 'La lingua imposta anche i nomi di giorni e mesi in Vacay e nel diario.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Regolare come si comportano mappa e prenotazioni',
  'help.guide.travel-map-prefs.goal': 'Decidi cosa mostra la mappa del viaggio per impostazione predefinita.',
  'help.guide.travel-map-prefs.step.1':
    "In Travel & map, Mostra sempre i percorsi delle prenotazioni tiene voli e treni sulla mappa anche quando il loro giorno non è aperto; Esplora luoghi sulla mappa mostra la pillola per trovare luoghi; Ottimizza il percorso dall'alloggio fa partire il percorso da dove dormi.",
  'help.guide.travel-map-prefs.step.2':
    'Nascondi codici di prenotazione nasconde i numeri di conferma finché non ci passi sopra; Etichette percorsi prenotati scrive il nome della prenotazione lungo il suo percorso.',
  'help.guide.travel-map-prefs.result':
    'La mappa del viaggio segue queste scelte su ogni viaggio, finché non le cambi di nuovo.',
  'help.guide.travel-map-prefs.tip.1':
    'Valgono per account, non per viaggio. I membri di un viaggio condiviso vedono ciascuno le proprie scelte.',
  // startup
  'help.guide.startup.title': 'Scegliere con cosa si apre TREK',
  'help.guide.startup.goal': 'Atterra dove lavori di più, non ogni volta sulla dashboard.',
  'help.guide.startup.step.1': 'Sotto Avvio, imposta Pagina iniziale su Dashboard o Viaggio attivo.',
  'help.guide.startup.step.2':
    'Scheda iniziale sceglie quale scheda di un viaggio compare per prima quando ne apri uno.',
  'help.guide.startup.result': 'Il prossimo accesso e il prossimo tocco sul logo portano dritti lì.',
  'help.guide.startup.tip.1': 'Viaggio attivo è il viaggio in corso oggi, o il prossimo quando non ce n’è nessuno.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Impostare il tema e il colore d’accento',
  'help.guide.theme-scheme.goal': 'Rendi TREK chiaro, scuro o come il tuo dispositivo, nel colore che ti piace.',
  'help.guide.theme-scheme.step.1':
    'Sotto Theme, scegli Chiara, Scura o Automatica. Automatica segue il tuo dispositivo.',
  'help.guide.theme-scheme.step.2':
    'Scegli un Color scheme: Default, High contrast, Indigo, Teal, Rose, Amber, Violet o Custom.',
  'help.guide.theme-scheme.step.3':
    'Con Custom, scegli un accento dai preset o inserisci il tuo. Un controllo del contrasto accanto dice se il testo resta leggibile sopra.',
  'help.guide.theme-scheme.result':
    'Pulsanti, link ed evidenziazioni prendono l’accento ovunque, su ogni dispositivo in cui accedi.',
  'help.guide.theme-scheme.tip.1':
    'Anche la barra di navigazione ha un interruttore rapido chiaro o scuro; imposta lo stesso tema.',
  'help.guide.theme-scheme.tip.2':
    'High contrast è lo schema da scegliere quando il predefinito si legge troppo tenue.',
  // readability
  'help.guide.readability.title': 'Regolare leggibilità e dimensione del testo',
  'help.guide.readability.goal': 'Meno vetro, meno movimento, più spazio o caratteri più grandi.',
  'help.guide.readability.step.1':
    'Sotto Readability, Transparency passa i pannelli di vetro a superfici piene, Reduce motion riduce al minimo le animazioni, e Density sceglie Comfortable o Compact.',
  'help.guide.readability.step.2':
    'Text size scala Everything in una volta; Advanced text sizes lascia che titoli, sottotitoli, corpo e didascalie differiscano.',
  'help.guide.readability.result': 'Tutta l’app segue subito, compresi i pannelli della mappa e il diario.',
  'help.guide.readability.tip.1': 'Reduce motion segue anche l’impostazione del tuo sistema quando lo lasci stare.',
  'help.guide.readability.tip.2':
    'La dimensione del testo passa per i livelli tipografici, così niente viene tagliato; una dimensione che non ci sta più va a capo.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Scegliere i widget della dashboard',
  'help.guide.dashboard-widgets.goal': 'Mostra solo i widget che usi, separatamente su desktop e sul telefono.',
  'help.guide.dashboard-widgets.step.1':
    'Sotto Dashboard widgets, attiva o disattiva ogni widget per Desktop e per Mobile: la barra laterale destra nel suo insieme, valuta, raccolte, fusi orari, prenotazioni in arrivo, paesi dell’Atlas e i numeri di viaggio.',
  'help.guide.dashboard-widgets.step.2': 'Reset to defaults in fondo riporta l’intera scheda a com’era all’origine.',
  'help.guide.dashboard-widgets.result':
    'La dashboard si riorganizza subito; con la barra laterale destra spenta si centra.',
  'help.guide.dashboard-widgets.tip.1': 'I widget di un addon compaiono solo finché l’admin tiene quell’addon attivo.',
  'help.guide.dashboard-widgets.tip.2':
    'La dashboard stessa ricorda la tua vista a griglia o a elenco e l’ordinamento per dispositivo.',
  // map-provider
  'help.guide.map-provider.title': 'Scegliere il motore e lo stile della mappa',
  'help.guide.map-provider.goal': 'Passa dalla mappa classica ai tile vettoriali o alla mappa 3D di Mapbox.',
  'help.guide.map-provider.step.1':
    'Sotto Provider mappa, scegli Leaflet per la classica mappa 2D con qualsiasi tile raster, MapLibre per i tile vettoriali OpenFreeMap senza token, o Mapbox per tile vettoriali con edifici 3D e terreno.',
  'help.guide.map-provider.step.2':
    'Scegli uno Stile mappa o un Modello Mappa per l’aspetto. Mapbox richiede un Token di accesso Mapbox, alcuni stili raster una Chiave API CARTO; il link accanto al campo porta dove ottenerne una.',
  'help.guide.map-provider.step.3':
    'Modalità alta qualità aggiunge antialiasing e la proiezione a globo. Clicca Salva Mappa.',
  'help.guide.map-provider.result':
    'Ogni mappa in TREK, viaggi, Atlas, Raccolte e il diario, è disegnata dal motore che hai scelto.',
  'help.guide.map-provider.tip.1': 'Senza token, Mapbox ripiega sulla mappa predefinita invece di non mostrare nulla.',
  'help.guide.map-provider.tip.2':
    'I tile della mappa che archivi offline vengono dal provider attivo quando li scarichi.',
  // notification-channels
  'help.guide.notification-channels.title': 'Impostare dove ti raggiungono le notifiche',
  'help.guide.notification-channels.goal':
    'Ricevi promemoria di viaggio ed eventi di collaborazione sul telefono o in un altro strumento.',
  'help.guide.notification-channels.step.1':
    'Sotto Notifiche, compila un Argomento Ntfy; aggiungi il tuo URL server Ntfy (opzionale) e un Token di accesso (opzionale) se ne gestisci uno. Testa invia subito un messaggio.',
  'help.guide.notification-channels.step.2':
    'Oppure indica un URL webhook che riceve ogni evento come JSON, e provalo allo stesso modo con Testa.',
  'help.guide.notification-channels.step.3':
    'Nelle righe sotto, attiva o disattiva ogni evento per canale. Un canale di plugin dice Configura finché non è impostato nelle impostazioni del plugin; Invia test ne prova uno.',
  'help.guide.notification-channels.result':
    'Gli eventi escono dai canali attivi. La campanella nella barra di navigazione continua comunque a mostrarli nell’app.',
  'help.guide.notification-channels.tip.1':
    'Le preferenze per viaggio stanno sul viaggio stesso, nelle sue impostazioni di notifica.',
  'help.guide.notification-channels.tip.2':
    'L’admin può precompilare un server ntfy predefinito per tutti; l’argomento lo scegli comunque tu.',
  // photo-providers
  'help.guide.photo-providers.title': 'Collegare una libreria foto',
  'help.guide.photo-providers.goal': 'Lascia che il diario prenda le foto del giorno da Immich o Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Sotto Integrazioni, trova la sezione del provider e inserisci il suo URL e la chiave API. Immich offre anche di rispecchiare i caricamenti del diario nella libreria.',
  'help.guide.photo-providers.step.2': 'Clicca Test connessione, poi Salva.',
  'help.guide.photo-providers.result':
    'La scheda External photos dell’editor delle voci cerca nella libreria collegata il giorno della voce, prima le più vicine alla posizione della voce.',
  'help.guide.photo-providers.tip.1':
    'La connessione è tua: gli altri membri di un diario collegano le proprie librerie.',
  'help.guide.photo-providers.tip.2':
    'Un provider senza dati GPS nelle foto funziona lo stesso; l’elenco è allora in ordine di tempo.',
  // api-keys
  'help.guide.api-keys.title': 'Creare una chiave API',
  'help.guide.api-keys.goal': 'Lascia che uno script o un altro strumento chiami l’API di TREK come te.',
  'help.guide.api-keys.step.1': 'Sotto Chiavi API, clicca Crea chiave e dalle un nome che dica dove verrà usata.',
  'help.guide.api-keys.step.2':
    'Copia la chiave dalla finestra: viene mostrata una volta sola. Elimina una chiave dall’elenco quando lo strumento non ne ha più bisogno.',
  'help.guide.api-keys.result':
    'Le richieste con quella chiave agiscono con i tuoi permessi; l’elenco mostra quando ogni chiave è stata creata e usata l’ultima volta.',
  'help.guide.api-keys.tip.1': 'Una chiave per strumento rende la revoca indolore.',
  'help.guide.api-keys.tip.2':
    'Per un assistente IA usa invece MCP con OAuth; le chiavi API sono per semplici client HTTP.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Collegare un assistente IA via MCP',
  'help.guide.mcp-oauth.goal': 'Dai a Claude, a un IDE o a un altro client MCP l’accesso ai tuoi viaggi.',
  'help.guide.mcp-oauth.step.1':
    'Sotto Configurazione MCP, copia l’Endpoint MCP, o l’intera Configurazione client per un client che accetta uno snippet JSON.',
  'help.guide.mcp-oauth.step.2':
    'I client che accedono tramite browser usano OAuth 2.1: Nuovo client sotto Client OAuth 2.1, con i suoi URI di reindirizzamento, gli Ambiti consentiti e, per un server senza browser, Client macchina.',
  'help.guide.mcp-oauth.step.3':
    'Rinnova segreto ed Elimina client stanno su ogni client; Sessioni OAuth attive elenca cosa è connesso e ti permette di revocarlo. Token API con Crea nuovo token è la via d’accesso più vecchia.',
  'help.guide.mcp-oauth.result':
    'Il client può leggere e modificare ciò che i suoi ambiti consentono, come te, e ogni azione compare a tuo nome.',
  'help.guide.mcp-oauth.tip.1':
    'Gli ambiti sono la rete di sicurezza: dai a un client solo l’ambito di lettura finché non gli serve di più.',
  'help.guide.mcp-oauth.tip.2': 'L’admin può spegnere MCP per l’intera istanza; allora questa sezione non c’è.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Portare i viaggi offline',
  'help.guide.offline-prepare.goal':
    'Tieni i tuoi viaggi e le loro mappe su questo dispositivo prima che la connessione cada.',
  'help.guide.offline-prepare.step.1':
    'Sotto Cosa archiviare offline, lascia attivo Archivia i tile della mappa offline e attiva i viaggi che vuoi su questo dispositivo.',
  'help.guide.offline-prepare.step.2':
    "Clicca Scarica per l'uso offline sotto Prepara per l'offline. Scarica i viaggi e i tile intorno ai loro luoghi.",
  'help.guide.offline-prepare.step.3':
    'Forza la modalità offline sotto Modalità offline ti lascia controllare che ci sia tutto prima di partire.',
  'help.guide.offline-prepare.result':
    'I viaggi si aprono senza connessione; le modifiche che fai aspettano in coda ed escono alla riconnessione.',
  'help.guide.offline-prepare.tip.1':
    'I tile occupano più spazio di tutto: la sezione Cache offline mostra cosa è archiviato, per viaggio.',
  'help.guide.offline-prepare.tip.2': 'Installa TREK come app dal browser per l’avvio offline più fluido.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Decidere chi vince in un conflitto di sincronizzazione',
  'help.guide.offline-conflicts.goal': 'Scegli come TREK risolve una modifica fatta offline contro una fatta altrove.',
  'help.guide.offline-conflicts.step.1':
    'Sotto Conflitti di sincronizzazione, scegli Chiedimi ogni volta, Mantieni sempre la mia versione o Mantieni sempre la versione del server.',
  'help.guide.offline-conflicts.step.2':
    'Cache offline mostra viaggi, modifiche in sospeso e fallite e conflitti; Risincronizza ora spinge la coda, Svuota la cache svuota il dispositivo.',
  'help.guide.offline-conflicts.result':
    'Con Chiedimi, un conflitto mostra entrambe le versioni e ti lascia scegliere; con le altre due si risolve in silenzio.',
  'help.guide.offline-conflicts.tip.1':
    'Svuota la cache rimuove solo la copia su questo dispositivo; niente sul server viene toccato.',
  // profile
  'help.guide.profile.title': 'Modificare il tuo profilo',
  'help.guide.profile.goal': 'Aggiorna nome, email e immagine.',
  'help.guide.profile.step.1':
    'Sotto Account, modifica Nome utente ed Email. L’avatar accetta un tuo caricamento; rimuovilo per tornare alle iniziali.',
  'help.guide.profile.step.2': 'Clicca Salva Profilo.',
  'help.guide.profile.result': 'Nome e immagine si aggiornano ovunque in una volta, anche sui viaggi che condividi.',
  'help.guide.profile.tip.1': 'Un account che accede tramite OIDC lo mostra qui; l’email arriva allora dal provider.',
  // password
  'help.guide.password.title': 'Cambiare la tua password',
  'help.guide.password.goal': 'Imposta una nuova password.',
  'help.guide.password.step.1': 'Sotto Cambia Password, inserisci la password attuale, poi la nuova due volte.',
  'help.guide.password.step.2': 'Clicca Aggiorna password.',
  'help.guide.password.result': 'La nuova password vale dal prossimo accesso; le altre sessioni restano connesse.',
  'help.guide.password.tip.1': 'Un account che accede tramite OIDC non ha una password TREK da cambiare.',
  // mfa
  'help.guide.mfa.title': 'Attivare l’autenticazione a due fattori',
  'help.guide.mfa.goal': 'Proteggi l’account con un codice da un’app authenticator.',
  'help.guide.mfa.step.1': 'Sotto Autenticazione a due fattori (2FA), clicca Configura authenticator.',
  'help.guide.mfa.step.2':
    'Scansiona il codice QR con la tua app, o inserisci il segreto a mano, poi digita il codice a sei cifre che mostra e clicca Abilita 2FA.',
  'help.guide.mfa.step.3':
    'Salva i codici di backup: copiali, scaricali o stampali. Ognuno vale una volta, quando non hai il telefono a portata di mano.',
  'help.guide.mfa.result': 'Ogni accesso chiede un codice dopo la password.',
  'help.guide.mfa.tip.1': 'Disabilita 2FA richiede la tua password e un codice corrente.',
  'help.guide.mfa.tip.2': 'L’admin può imporre la 2FA a tutti; allora non si può disattivare qui.',
  // passkeys
  'help.guide.passkeys.title': 'Accedere con una passkey',
  'help.guide.passkeys.goal': 'Usa impronta, volto o PIN del tuo dispositivo al posto di una password.',
  'help.guide.passkeys.step.1':
    'Sotto Passkey, clicca Aggiungi una passkey e conferma con il tuo dispositivo. Dalle un nome che dica quale dispositivo è.',
  'help.guide.passkeys.step.2':
    'L’elenco mostra ogni passkey con il nome e l’ultimo utilizzo; il pulsante elimina ne rimuove una.',
  'help.guide.passkeys.result': 'La pagina di accesso propone la passkey; la password resta come riserva.',
  'help.guide.passkeys.tip.1':
    'Una passkey vive sul dispositivo o nel suo gestore di password, quindi aggiungine una per dispositivo.',
  'help.guide.passkeys.tip.2':
    'Le passkey richiedono HTTPS; su un’istanza in semplice HTTP la sezione spiega perché non sono disponibili.',
  // delete-account
  'help.guide.delete-account.title': 'Eliminare il tuo account',
  'help.guide.delete-account.goal': 'Rimuovi il tuo account e i dati che sono solo tuoi.',
  'help.guide.delete-account.step.1': 'In fondo a tutto in Account, clicca Elimina account e conferma.',
  'help.guide.delete-account.result':
    'Il tuo account, i tuoi viaggi e i tuoi diari spariscono; i viaggi che condividi con altri restano a loro.',
  'help.guide.delete-account.tip.1':
    'L’ultimo admin di un’istanza non può eliminare sé stesso; prima rendi admin qualcun altro.',
  'help.guide.delete-account.tip.2': 'Non si torna indietro. Esporta ciò che vuoi tenere prima di confermare.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Amministrazione',
  'help.ctx.admin.summary':
    'L’istanza dietro il TREK di tutti: chi può accedere e come, cosa è attivo, dove vivono i file, come il server raggiunge le persone e come viene salvato. Solo gli admin vedono questa pagina; ogni scheda è una schermata a sé nella barra laterale.',
  'help.ctx.admin.bullet.1':
    'Le quattro card in alto contano utenti, viaggi, luoghi e file; un banner sopra annuncia una release più recente di TREK.',
  'help.ctx.admin.bullet.2':
    'Utenti e Impostazioni predefinite: account, link di invito e le impostazioni della mappa con cui parte un nuovo account.',
  'help.ctx.admin.bullet.3':
    'Personalizzazione, Impostazioni, Moduli e Plugin: modelli lista valigia, categorie e vacanze scolastiche; metodi di accesso e chiavi API; i moduli funzionali; plugin di terze parti.',
  'help.ctx.admin.bullet.4':
    'Archiviazione, Notifiche, Accesso MCP e GitHub: dove vanno i caricamenti, i canali dell’intera istanza, token e sessioni dei client IA, e la cronologia dei rilasci.',
  'help.ctx.admin.bullet.5':
    'Backup e Audit: backup su richiesta e pianificati, e il registro degli eventi rilevanti per la sicurezza.',
  'help.ctx.admin-users.title': 'Utenti',
  'help.ctx.admin-users.summary':
    'Ogni account di questo TREK, con ruolo, email e ultimo accesso, e i link di invito che permettono alle persone di registrarsi su un’istanza chiusa.',
  'help.ctx.admin-users.bullet.1':
    'La tabella: nome utente, email, ruolo, data di creazione, ultimo accesso e le azioni per riga. Tu sei contrassegnato come te.',
  'help.ctx.admin-users.bullet.2': 'Crea Utente in alto aggiunge un account a mano, con una password che consegni tu.',
  'help.ctx.admin-users.bullet.3':
    'Link di Invito sotto: link di registrazione monouso con un limite di utilizzi, una scadenza e, se vuoi, un viaggio a cui il nuovo utente si unisce all’arrivo.',
  'help.ctx.admin-users.bullet.4':
    'Impostazioni dei permessi in fondo: per ogni azione, chi può farla, Tutti, Membri del viaggio, Proprietario del viaggio o Solo amministratore.',
  'help.ctx.admin-defaults.title': 'Impostazioni predefinite',
  'help.ctx.admin-defaults.summary':
    'Le impostazioni con cui parte un nuovo account, così nessuno deve prima cercare la scheda della mappa: motore mappe, stile, token e qualità.',
  'help.ctx.admin-defaults.bullet.1':
    'Motore mappe, stile e token Mapbox, chiave CARTO e qualità Mapbox, esattamente come li imposterebbe un utente sotto Impostazioni, Mappa.',
  'help.ctx.admin-defaults.bullet.2':
    'Ripristina per campo riporta la scelta di TREK; l’impostazione personale di un utente vince sempre su queste.',
  'help.ctx.admin-config.title': 'Personalizzazione',
  'help.ctx.admin-config.summary':
    'Ciò che ogni viaggio dell’istanza condivide: modelli lista valigia, l’insieme di categorie per luoghi e raccolte, e il catalogo delle vacanze scolastiche da cui attinge Vacay.',
  'help.ctx.admin-config.bullet.1':
    'Modelli lista valigia: liste con nome di categorie e oggetti da cui può partire la lista valigia di un viaggio.',
  'help.ctx.admin-config.bullet.2':
    'Categorie: nome, icona e colore delle categorie usate in tutto TREK, dall’ispettore dei luoghi alle Raccolte.',
  'help.ctx.admin-config.bullet.3':
    'Vacanze scolastiche: il catalogo di paesi e regioni, per i posti che i feed integrati non coprono.',
  'help.ctx.admin-settings.title': 'Impostazioni',
  'help.ctx.admin-settings.summary':
    'Come entrano le persone e con cosa può parlare il server: metodi di accesso e registrazione, SSO, passkey, regola sui due fattori, le chiavi API per mappe, luoghi e immagini, i provider di ricerca e trasporto, e i tipi di file che i caricamenti possono avere.',
  'help.ctx.admin-settings.bullet.1':
    'Authentication Methods: Password Login, Password Registration, SSO Login, SSO Auto-Provisioning e Richiedi autenticazione a due fattori (2FA).',
  'help.ctx.admin-settings.bullet.2':
    'Single Sign-On (OIDC) con emittente, client e nome visualizzato; Accesso con passkey con Relying Party ID e origini.',
  'help.ctx.admin-settings.bullet.3':
    'Chiavi API: Google Maps, Unsplash e Amap, ognuna con Testa; A cosa serve la chiave restringe la chiave Google alle funzioni che vuoi pagare.',
  'help.ctx.admin-settings.bullet.4':
    'Provider per la ricerca di luoghi e Provider del trasporto pubblico scelgono chi risponde a ricerche e percorsi; Tipi di File Consentiti limita i caricamenti.',
  'help.ctx.admin-addons.title': 'Moduli',
  'help.ctx.admin-addons.summary':
    'I moduli funzionali di TREK, ognuno con un interruttore: Liste, Costi, Documenti, Vacay, Atlas, Collaborazione, Diario di viaggio, Raccolte, Viaggio su strada, MCP, AirTrail, Dawarich e l’analisi con IA. Spento significa che la voce di navigazione, le route e l’API spariscono per tutti.',
  'help.ctx.admin-addons.bullet.1':
    'Un riquadro per modulo con il suo interruttore e, dove ne ha, sotto-righe per le sue opzioni.',
  'help.ctx.admin-addons.bullet.2':
    'Anche i provider di foto e di documenti compaiono qui come riquadri, così Immich o Synology possono essere offerti agli utenti.',
  'help.ctx.admin-addons.bullet.3': 'Tracciamento valigia ha il proprio interruttore sotto i riquadri.',
  'help.ctx.admin-plugins.title': 'Plugin',
  'help.ctx.admin-plugins.summary':
    'Plugin di terze parti che girano in un processo proprio accanto a TREK, ognuno con i permessi chiesti all’installazione. Installa dal catalogo, carica un pacchetto, o collega una cartella mentre ne sviluppi uno.',
  'help.ctx.admin-plugins.bullet.1':
    'La lista: ogni plugin installato con versione, stato, firma e i permessi che ha; attiva, disattiva, aggiorna o disinstalla per riga.',
  'help.ctx.admin-plugins.bullet.2':
    'Carica plugin prende un file pacchetto; Riscansiona rileva una cartella plugin collegata per lo sviluppo.',
  'help.ctx.admin-plugins.bullet.3':
    'Host consentiti per plugin: gli indirizzi che un plugin può chiamare, dato che le connessioni in uscita sono negate per impostazione predefinita.',
  'help.ctx.admin-storage.title': 'Archiviazione',
  'help.ctx.admin-storage.summary':
    'Dove vivono i caricamenti: il disco locale, un bucket S3, o un mirror che scrive su entrambi. Ogni categoria di caricamento può andare su un backend diverso, e Stato dice se ogni backend risponde.',
  'help.ctx.admin-storage.bullet.1':
    'Backend: nome e tipo di ciascuno, con Testa, Modifica e Rimuovi; uno impostato dall’ambiente qui è in sola lettura.',
  'help.ctx.admin-storage.bullet.2':
    'Categorie: copertine, documenti, foto del diario e il resto, ognuna assegnata a un backend; cambiarne una propone di spostare i file esistenti.',
  'help.ctx.admin-storage.bullet.3':
    'Stato: un controllo per backend, e il file seme che prova che la configurazione è quella che il server vede.',
  'help.ctx.admin-notifications.title': 'Notifiche',
  'help.ctx.admin-notifications.summary':
    'I canali che l’istanza offre ai suoi utenti, e quelli che raggiungono te come admin. Gli utenti scelgono i propri topic e URL sotto Impostazioni; tu decidi cosa esiste e configuri l’email.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy e Webhook: un pannello ciascuno, con un interruttore che offre il canale agli utenti e la configurazione lato server di cui ha bisogno.',
  'help.ctx.admin-notifications.bullet.2':
    'Promemoria viaggio: se il server invia il promemoria prima che un viaggio inizi.',
  'help.ctx.admin-notifications.bullet.3':
    'Ntfy admin e Webhook admin: dove vanno gli eventi admin come un backup fallito o una nuova release, con Testa.',
  'help.ctx.admin-mcp-tokens.title': 'Accesso MCP',
  'help.ctx.admin-mcp-tokens.summary':
    'Ogni token e sessione OAuth che i client IA detengono verso questo TREK, per tutti gli utenti, con il potere di revocarne qualsiasi.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'Token API: chi l’ha creato, quando è stato usato l’ultima volta, ed Elimina.',
  'help.ctx.admin-mcp-tokens.bullet.2': 'Sessioni OAuth: il client, l’utente e gli scope concessi, e Revoca.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Cosa c’è di nuovo in TREK: la cronologia dei rilasci da GitHub, la versione che usi, e se ne è uscita una più recente. L’aggiornamento vero e proprio avviene fuori dall’app, sull’host.',
  'help.ctx.admin-github.bullet.1':
    'Cronologia rilasci elenca le release con le loro note; la più recente porta Ultimo, e la tua versione è contrassegnata.',
  'help.ctx.admin-github.bullet.2':
    'Aggiornamento disponibile compare nell’intestazione appena esiste una release più recente, con le istruzioni per aggiornare Docker e le altre installazioni.',
  'help.ctx.admin-backup.title': 'Backup',
  'help.ctx.admin-backup.summary':
    'Backup completi del database e dei caricamenti, fatti a mano o pianificati, conservati sul server e scaricabili come un unico file. Ripristina ne rimette uno al suo posto.',
  'help.ctx.admin-backup.bullet.1':
    'Backup dati: Crea backup, e la lista di quelli esistenti con Scarica, Ripristina ed elimina.',
  'help.ctx.admin-backup.bullet.2': 'Carica backup porta un file fatto su un’altra istanza o in un giorno precedente.',
  'help.ctx.admin-backup.bullet.3': 'Auto-Backup: acceso o spento, intervallo, ora e giorno, e quanti conservarne.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'Il registro degli eventi amministrativi e rilevanti per la sicurezza: accessi e fallimenti, modifiche MFA, modifiche a utenti e impostazioni, backup e ripristini. Sola lettura, il più recente per primo.',
  'help.ctx.admin-audit.bullet.1': 'Una riga per evento con ora, utente, azione, risorsa, IP e dettagli.',
  'help.ctx.admin-audit.bullet.2': 'Aggiorna ricarica; Carica altro va più indietro.',
  // create-user
  'help.guide.create-user.title': 'Creare un utente',
  'help.guide.create-user.goal': 'Aggiungi un account a mano, senza invito.',
  'help.guide.create-user.step.1': 'Clicca Crea Utente in cima alla scheda Utenti.',
  'help.guide.create-user.step.2':
    'Inserisci Nome utente, Email e una Password, e scegli il Ruolo: Utente o Amministratore.',
  'help.guide.create-user.step.3': 'Clicca Crea Utente.',
  'help.guide.create-user.result':
    'L’account compare nella tabella e può accedere subito; consegna la password su un canale di cui ti fidi.',
  'help.guide.create-user.tip.1':
    'Per una persona che deve scegliere la propria password, un link di invito è la via d’ingresso migliore.',
  'help.guide.create-user.tip.2':
    'Gli admin vedono questa pagina e il registro di audit; tutto il resto è uguale per entrambi i ruoli.',
  // edit-user
  'help.guide.edit-user.title': 'Cambiare ruolo o password di un utente',
  'help.guide.edit-user.goal': 'Promuovi qualcuno, retrocedilo, o fallo rientrare dopo una password persa.',
  'help.guide.edit-user.step.1':
    'Clicca la matita nella riga dell’utente. Modifica Utente si apre con i dettagli dell’account.',
  'help.guide.edit-user.step.2':
    'Cambia il Ruolo, imposta una Nuova Password, o clicca Reimposta passkey quando la persona ha perso il dispositivo su cui stavano le sue passkey, poi Salva.',
  'help.guide.edit-user.result':
    'La modifica vale dalla richiesta successiva; una nuova password funziona dal prossimo accesso.',
  'help.guide.edit-user.tip.1': 'Non puoi toglierti il ruolo admin finché sei l’ultimo admin.',
  'help.guide.edit-user.tip.2':
    'Reimpostare le passkey mantiene la password; la persona aggiunge nuove passkey sotto Impostazioni, Account.',
  // invite-links
  'help.guide.invite-links.title': 'Invitare qualcuno con un link',
  'help.guide.invite-links.goal':
    'Lascia che una persona si registri su un’istanza chiusa e, se vuoi, atterri in un viaggio.',
  'help.guide.invite-links.step.1': 'Sotto Link di Invito, clicca Crea Link.',
  'help.guide.invite-links.step.2':
    'Imposta Usi Max. e Scade tra, facoltativamente Aggiungi a un viaggio (opzionale), e clicca Crea & Copia.',
  'help.guide.invite-links.step.3':
    'Invia il link. Ogni riga mostra quante volte è stato usato e chi l’ha creato; Copia link lo copia di nuovo, e i link esauriti o scaduti sono contrassegnati.',
  'help.guide.invite-links.result':
    'Chi apre il link si registra con la propria password e, se è stato scelto un viaggio, vi si unisce subito.',
  'help.guide.invite-links.tip.1':
    'I link di invito funzionano anche quando Password Registration è spento sotto Impostazioni.',
  'help.guide.invite-links.tip.2':
    'Un link con un solo uso e una scadenza breve è l’impostazione più sicura per una singola persona.',
  // delete-user
  'help.guide.delete-user.title': 'Eliminare un utente',
  'help.guide.delete-user.goal': 'Rimuovi un account e tutto ciò che appartiene solo a lui.',
  'help.guide.delete-user.step.1': 'Clicca l’icona del cestino nella riga dell’utente e conferma Elimina utente.',
  'help.guide.delete-user.result':
    'L’account, i suoi viaggi e i suoi diari spariscono; i viaggi condivisi con altri restano ai membri rimasti.',
  'help.guide.delete-user.tip.1': 'Non si può annullare. Fai prima un backup se non sei sicuro.',
  'help.guide.delete-user.tip.2': 'L’ultimo admin non può essere eliminato; rendi prima admin qualcun altro.',
  // permissions
  'help.guide.permissions.title': 'Decidere chi può fare cosa',
  'help.guide.permissions.goal': 'Imposta, per ogni azione, quale ruolo può eseguirla su questo TREK.',
  'help.guide.permissions.step.1':
    'Sotto Impostazioni dei permessi, trova l’azione nel suo gruppo, per esempio Eliminare viaggi sotto Gestione viaggi, e scegli il livello: Tutti, Membri del viaggio, Proprietario del viaggio o Solo amministratore. Una riga modificata è contrassegnata come personalizzato.',
  'help.guide.permissions.step.2': 'Clicca Salva. Ripristina predefiniti riporta ogni riga al livello integrato.',
  'help.guide.permissions.result':
    'La regola vale per tutti i viaggi in una volta; i pulsanti e i menu delle persone sotto il livello spariscono.',
  'help.guide.permissions.tip.1':
    'Proprietario del viaggio è la persona che ha creato il viaggio; gli admin possono sempre fare tutto.',
  'help.guide.permissions.tip.2':
    'Abbassa un livello invece di eliminare un membro: un membro che non può modificare può comunque leggere e commentare.',
  // default-map
  'help.guide.default-map.title': 'Impostare la mappa predefinita per i nuovi utenti',
  'help.guide.default-map.goal': 'Dai a ogni nuovo account una mappa funzionante senza un token personale.',
  'help.guide.default-map.step.1':
    'Sotto Mappa, scegli il Motore mappe e, per Mapbox o MapLibre, lo Stile mappa, il Token Mapbox condiviso e la Modalità alta qualità; per una mappa raster il Modello Mappa e la Chiave CARTO condivisa.',
  'help.guide.default-map.step.2':
    'Accanto a ogni campo che hai cambiato, ripristina riporta la scelta di TREK. Impostazioni predefinite utente a sinistra fa lo stesso per Modalità Colore, unità e valuta.',
  'help.guide.default-map.result':
    'I nuovi account partono con queste; chi ha impostato la propria mappa sotto Impostazioni tiene la sua.',
  'help.guide.default-map.tip.1':
    'Un token inserito qui è condiviso da tutti quelli che non ne hanno uno proprio, quindi tieni d’occhio la sua quota.',
  'help.guide.default-map.tip.2':
    'Anche gli account esistenti che non hanno mai toccato la scheda della mappa seguono queste impostazioni.',
  // packing-templates
  'help.guide.packing-templates.title': 'Costruire un modello lista valigia',
  'help.guide.packing-templates.goal': 'Dai ai viaggi una lista valigia da cui partire invece di una vuota.',
  'help.guide.packing-templates.step.1': 'Clicca Nuovo modello, digita un nome e conferma con la spunta.',
  'help.guide.packing-templates.step.2':
    'Apri il modello e clicca Aggiungi categoria; sotto ogni categoria, il + aggiunge oggetti, e a un oggetto basta un nome.',
  'help.guide.packing-templates.step.3':
    'Tutto si salva man mano. La matita rinomina un modello, una categoria o un oggetto, il cestino lo elimina.',
  'help.guide.packing-templates.result':
    'Il modello viene offerto sulla lista valigia di ogni viaggio; applicarlo copia gli oggetti, così un viaggio può cambiarli liberamente.',
  'help.guide.packing-templates.tip.1':
    'Un modello per tipo di viaggio, mare, città, trekking, batte un’unica lista gigante.',
  'help.guide.packing-templates.tip.2': 'Eliminare un modello non tocca i viaggi che l’hanno già applicato.',
  // categories
  'help.guide.categories.title': 'Gestire l’insieme delle categorie',
  'help.guide.categories.goal': 'Decidi quali categorie possono portare luoghi e raccolte, e che aspetto hanno.',
  'help.guide.categories.step.1':
    'Clicca Nuova categoria, dalle un nome, scegli un’icona e un colore; l’Anteprima mostra il risultato. Clicca Crea.',
  'help.guide.categories.step.2':
    'Passa sopra una categoria nella lista per modificarla o eliminarla. L’eliminazione chiede conferma.',
  'help.guide.categories.result':
    'L’insieme vale ovunque in una volta: l’ispettore dei luoghi, i pin sulla mappa, Raccolte e i filtri.',
  'help.guide.categories.tip.1':
    'I luoghi mantengono l’id della categoria, quindi rinominare una categoria la rinomina su ogni luogo.',
  'help.guide.categories.tip.2':
    'Una categoria eliminata lascia i suoi luoghi senza categoria; riassegnali prima se conta.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Gestire le vacanze scolastiche a mano',
  'help.guide.school-holiday-catalog.goal':
    'Copri un paese o una regione che i feed integrati delle vacanze non coprono.',
  'help.guide.school-holiday-catalog.step.1':
    'Sotto Vacanze scolastiche, clicca Aggiungi paese, inserisci il Paese e il suo Codice paese (es. US), e Salva; poi Aggiungi regione per ogni sua parte che differisce.',
  'help.guide.school-holiday-catalog.step.2':
    'Clicca una regione per aprire Regione o distretto scolastico: Aggiungi periodo, dai a ognuno un Nome delle vacanze, una Data di inizio e una Data di fine, e Salva. Il cestino rimuove un periodo, una regione o, quando non ha più regioni, un paese.',
  'help.guide.school-holiday-catalog.result':
    'Gli utenti trovano paese e regione sotto Impostazioni in Vacay e vedono i periodi sulla loro griglia annuale.',
  'help.guide.school-holiday-catalog.tip.1':
    'Le regioni dei feed integrati non si possono modificare qui; aggiungi accanto una regione manuale se una data è sbagliata.',
  // auth-methods
  'help.guide.auth-methods.title': 'Decidere come accedono le persone',
  'help.guide.auth-methods.goal': 'Apri o chiudi l’accesso con password, l’SSO e la registrazione, e richiedi la 2FA.',
  'help.guide.auth-methods.step.1':
    'Sotto Authentication Methods, accendi o spegni Password Login e Password Registration. Registrazione spenta significa nuovi account solo tramite link di invito, SSO o a mano.',
  'help.guide.auth-methods.step.2':
    'SSO Login e SSO Auto-Provisioning richiedono un Single Sign-On (OIDC) configurato più in basso; l’auto-provisioning crea un account la prima volta che qualcuno accede tramite SSO.',
  'help.guide.auth-methods.step.3':
    'Richiedi autenticazione a due fattori (2FA) fa configurare un’app di autenticazione a ogni accesso con password al login successivo. Accesso con passkey richiede il Relying Party ID e le origini da cui il tuo TREK è raggiunto.',
  'help.guide.auth-methods.result': 'La pagina di accesso offre esattamente i metodi che hai lasciato accesi.',
  'help.guide.auth-methods.tip.1':
    'Un avviso compare prima che ti chiudi fuori: almeno una via d’ingresso per gli admin resta accesa.',
  'help.guide.auth-methods.tip.2': 'I valori impostati tramite variabili d’ambiente compaiono qui in sola lettura.',
  // oidc
  'help.guide.oidc.title': 'Collegare il single sign-on',
  'help.guide.oidc.goal': 'Lascia che le persone accedano con il tuo identity provider.',
  'help.guide.oidc.step.1':
    'Sotto Single Sign-On (OIDC), inserisci il Nome Visualizzato per il pulsante e l’URL Emittente, il Client ID e il Client Secret del tuo provider, poi Salva.',
  'help.guide.oidc.step.2': 'Accendi SSO Login sotto Authentication Methods.',
  'help.guide.oidc.result':
    'La pagina di accesso mostra il pulsante SSO; con SSO Auto-Provisioning acceso, chi entra per la prima volta riceve un account in automatico.',
  'help.guide.oidc.tip.1':
    'L’URI di redirect di cui il tuo provider ha bisogno è l’indirizzo del tuo TREK più il percorso di callback OIDC indicato nella documentazione.',
  'help.guide.oidc.tip.2':
    'Il mapping dei claim decide quali gruppi SSO diventano admin; vedi la pagina OIDC nella documentazione.',
  // instance-keys
  'help.guide.instance-keys.title': 'Inserire le chiavi API',
  'help.guide.instance-keys.goal':
    'Sblocca la ricerca di luoghi Google, le copertine Unsplash e Amap per tutta l’istanza.',
  'help.guide.instance-keys.step.1':
    'Sotto Chiavi API, incolla la Chiave API Google Maps e clicca Testa; il campo dice se la chiave risponde.',
  'help.guide.instance-keys.step.2':
    'Sotto A cosa serve la chiave, accendi solo le funzioni che vuoi far addebitare a quella chiave: completamento automatico, dettagli, foto, arricchimento, il registro delle ricerche.',
  'help.guide.instance-keys.step.3':
    'Chiave API Unsplash alimenta la ricerca delle copertine; Chiave API Amap (高德地图) la ricerca di luoghi in Cina. Testa ognuna allo stesso modo.',
  'help.guide.instance-keys.result':
    'Gli utenti ottengono le funzioni senza chiavi proprie; senza una chiave Google, TREK cerca tramite lo stack gratuito OpenStreetMap e la TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'La chiave personale di un utente sotto Impostazioni vince sulla chiave dell’istanza per quell’utente.',
  'help.guide.instance-keys.tip.2':
    'Le chiavi possono arrivare anche da variabili d’ambiente; quelle compaiono qui in sola lettura.',
  // places-transit
  'help.guide.places-transit.title': 'Scegliere i provider di ricerca e trasporto',
  'help.guide.places-transit.goal': 'Decidi chi risponde alle ricerche di luoghi e ai percorsi con i mezzi pubblici.',
  'help.guide.places-transit.step.1':
    'Sotto Provider per la ricerca di luoghi, scegli Automatico, Google Places, Amap (高德地图) o OpenStreetMap. Automatico usa la migliore chiave disponibile.',
  'help.guide.places-transit.step.2':
    'Sotto Provider del trasporto pubblico, scegli Transitous (gratuito), mondiale e senza chiave, o Google, che richiede la chiave Google.',
  'help.guide.places-transit.result': 'Ogni casella di ricerca e ogni percorso con i mezzi in TREK segue la scelta.',
  'help.guide.places-transit.tip.1': 'Un provider senza la sua chiave mostra qui un avviso e ripiega su OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'I percorsi con i mezzi di Google si pagano per richiesta; Transitous no.',
  // file-types
  'help.guide.file-types.title': 'Limitare i tipi di file',
  'help.guide.file-types.goal': 'Decidi quali estensioni di file possono avere i caricamenti.',
  'help.guide.file-types.step.1':
    'Sotto Tipi di File Consentiti, modifica la lista di estensioni separate da virgola e salva.',
  'help.guide.file-types.result':
    'I caricamenti di qualsiasi altro tipo vengono rifiutati con un messaggio chiaro, nei documenti, nel diario e nelle copertine.',
  'help.guide.file-types.tip.1':
    'Tieni i tipi immagine nella lista; copertine e foto del diario passano dallo stesso controllo.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Accendere o spegnere un modulo',
  'help.guide.toggle-addon.goal': 'Offri un modulo funzionale a tutti, o toglilo.',
  'help.guide.toggle-addon.step.1':
    'Sposta l’interruttore sul riquadro del modulo. La voce di navigazione compare o sparisce per tutti in una volta.',
  'help.guide.toggle-addon.step.2':
    'Alcuni riquadri portano sotto-righe per le loro opzioni, come Tracciamento valigia sotto Liste o i provider di foto sotto Diario di viaggio; compaiono solo finché il modulo è acceso.',
  'help.guide.toggle-addon.result': 'I dati di un modulo spento vengono conservati; riaccenderlo li mostra di nuovo.',
  'help.guide.toggle-addon.tip.1': 'MCP spento rimuove l’endpoint e le sezioni Integrazioni che ne dipendono.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas e Diario di viaggio sono i moduli che gli utenti chiedono di più; Documenti richiede spazio di archiviazione per i caricamenti.',
  // install-plugin
  'help.guide.install-plugin.title': 'Installare un plugin',
  'help.guide.install-plugin.goal': 'Aggiungi un plugin di terze parti e dagli esattamente i permessi che chiede.',
  'help.guide.install-plugin.step.1':
    'Apri Scopri, scegli un plugin e clicca Installa; oppure clicca Carica plugin e scegli un pacchetto .zip o .tar.gz.',
  'help.guide.install-plugin.step.2':
    'Tornato sotto Installato, leggi la riga: cosa può leggere o scrivere il plugin, gli host che chiama e se è firmato. Accendi Abilita plugin.',
  'help.guide.install-plugin.step.3':
    'Il menu della riga offre Riavvia, Visualizza log errori, Host consentiti e Cambia versione…; Elimina lo disinstalla. Un aggiornamento viene offerto sulla riga quando esiste una versione più recente, e uno che chiede nuovi diritti resta spento finché non li approvi.',
  'help.guide.install-plugin.result':
    'Il plugin gira in un processo proprio; ciò che aggiunge, widget, livelli mappa, strumenti, compare dove il plugin lo dichiara.',
  'help.guide.install-plugin.tip.1':
    'Riscansiona rileva una cartella plugin collegata per lo sviluppo senza pacchetto.',
  'help.guide.install-plugin.tip.2':
    'Un plugin non firmato è contrassegnato come tale; installalo solo se ti fidi della sua fonte.',
  // storage-backends
  'help.guide.storage-backends.title': 'Spostare i caricamenti su S3 o un mirror',
  'help.guide.storage-backends.goal': 'Tieni i file su uno storage a oggetti, o sia su disco che su bucket.',
  'help.guide.storage-backends.step.1':
    'Sotto Backend, clicca Aggiungi backend, dagli un Nome, scegli il Tipo, Locale, S3 o Mirror, compila i campi e Applica. Testa verifica la connessione, Salva modifiche la scrive.',
  'help.guide.storage-backends.step.2':
    'Sotto Categorie, assegna ogni categoria di caricamento a un backend. Cambiarne una chiede se Sposta oggetti esistenti o Instrada solo le nuove scritture.',
  'help.guide.storage-backends.step.3': 'Stato in alto controlla ogni backend; una voce rossa indica cosa è fallito.',
  'help.guide.storage-backends.result':
    'I nuovi caricamenti vanno sul backend assegnato; i file spostati vengono serviti da lì.',
  'help.guide.storage-backends.tip.1':
    'Un backend configurato tramite variabili d’ambiente viene mostrato ma non si può modificare qui.',
  'help.guide.storage-backends.tip.2':
    'Un mirror scrive su entrambe le destinazioni e legge dalla prima; usalo per migrare senza fermi.',
  // channels-instance
  'help.guide.channels-instance.title': 'Configurare i canali di notifica',
  'help.guide.channels-instance.goal': 'Decidi quali canali possono scegliere gli utenti, e configura l’email.',
  'help.guide.channels-instance.step.1':
    'Sotto Email (SMTP), inserisci SMTP Host, SMTP Port, SMTP User, SMTP Password e la From Address; Invia email di prova manda una mail a te.',
  'help.guide.channels-instance.step.2':
    'Accendi Ntfy e Webhook per offrirli; gli utenti inseriscono poi il proprio topic o URL sotto Impostazioni, Notifiche.',
  'help.guide.channels-instance.step.3':
    'Promemoria viaggio comanda il promemoria prima che un viaggio inizi; In-App è sempre acceso e qui viene solo spiegato.',
  'help.guide.channels-instance.result': 'La scheda Notifiche di ogni utente mostra i canali che hai acceso.',
  'help.guide.channels-instance.tip.1':
    'Un server ntfy predefinito inserito qui è precompilato per gli utenti; possono comunque indicare il proprio.',
  'help.guide.channels-instance.tip.2':
    'I canali dei plugin compaiono da soli appena è attivo un plugin con quella capacità.',
  // admin-channels
  'help.guide.admin-channels.title': 'Ricevere gli eventi admin sul telefono',
  'help.guide.admin-channels.goal': 'Vieni a sapere di backup falliti, nuove release e altri eventi dell’istanza.',
  'help.guide.admin-channels.step.1':
    'Sotto Ntfy admin, inserisci un topic e, se serve, server e token; sotto Webhook admin un URL.',
  'help.guide.admin-channels.step.2':
    'Clicca Invia Ntfy di test o Invia webhook di test per vedere arrivare un messaggio.',
  'help.guide.admin-channels.result': 'Gli eventi admin vanno lì oltre che alla campanella in-app di ogni admin.',
  'help.guide.admin-channels.tip.1':
    'Tieni il topic admin separato da quello personale, così un guasto non affoga nel chiacchiericcio dei viaggi.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Revocare l’accesso delle IA',
  'help.guide.mcp-tokens-admin.goal':
    'Vedi e taglia ogni token e sessione che un client IA detiene, per qualsiasi utente.',
  'help.guide.mcp-tokens-admin.step.1':
    'Sotto Token API, trova il token per utente e nome; il cestino lo elimina e il client si ferma subito.',
  'help.guide.mcp-tokens-admin.step.2':
    'Sotto Sessioni OAuth, lo stesso per i client via browser: client, utente e data, e il cestino revoca la sessione.',
  'help.guide.mcp-tokens-admin.result': 'Il client deve essere ricollegato dal suo utente; nient’altro cambia.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Gli scope ti dicono cosa poteva fare un client; uno scope di sola lettura è innocuo da lasciare.',
  'help.guide.mcp-tokens-admin.tip.2': 'Spegnere il modulo MCP revoca tutto in una volta.',
  // release-history
  'help.guide.release-history.title': 'Controllare se c’è una nuova release',
  'help.guide.release-history.goal': 'Sappi se il tuo TREK è aggiornato e cosa porta la prossima versione.',
  'help.guide.release-history.step.1':
    'Quando esiste una release più recente, Aggiornamento disponibile compare in cima alla pagina admin; Vedi su GitHub la apre, e Come aggiornare spiega l’aggiornamento per Docker e per le altre installazioni.',
  'help.guide.release-history.step.2':
    'Cronologia rilasci elenca ogni release con le sue note; Mostra dettagli le espande, la più recente porta Ultimo, e Carica altro va più indietro.',
  'help.guide.release-history.result':
    'L’aggiornamento avviene sull’host, scaricando la nuova immagine o compilando il nuovo tag; la directory dei dati resta.',
  'help.guide.release-history.tip.1': 'Fai un backup prima di un aggiornamento; la scheda Backup è accanto.',
  'help.guide.release-history.tip.2':
    'Le pre-release vengono mostrate ma non annunciate come aggiornamenti, a meno che tu non ne usi una.',
  // create-backup
  'help.guide.create-backup.title': 'Fare e ripristinare un backup',
  'help.guide.create-backup.goal':
    'Fotografa l’intera istanza, tieni una copia altrove, e sii in grado di rimetterla al suo posto.',
  'help.guide.create-backup.step.1':
    'Sotto Backup dati, clicca Crea backup. Impacchetta il database e i caricamenti in un unico file sul server.',
  'help.guide.create-backup.step.2':
    'Scarica tiene una copia fuori dalla macchina; il cestino elimina quelli vecchi per liberare spazio.',
  'help.guide.create-backup.step.3':
    'Ripristina su un backup, o Carica backup con un file, sostituisce i dati attuali dopo che Ripristinare il backup? ha chiesto una volta.',
  'help.guide.create-backup.result':
    'Un ripristino riporta utenti, viaggi, file e impostazioni allo stato di quel backup; tutti vengono disconnessi.',
  'help.guide.create-backup.tip.1':
    'Il ripristino è l’unica azione qui che non si può annullare. Fai prima un backup fresco.',
  'help.guide.create-backup.tip.2':
    'I backup vivono nella directory dei dati; è una copia su un’altra macchina a renderli un vero backup.',
  // auto-backup
  'help.guide.auto-backup.title': 'Pianificare i backup',
  'help.guide.auto-backup.goal': 'Lascia che il server si salvi da solo e tenga solo gli ultimi.',
  'help.guide.auto-backup.step.1':
    "Sotto Auto-Backup, accendi Abilita auto-backup e scegli l’Intervallo, Esegui all'ora e, per settimanale o mensile, il Giorno della settimana o il Giorno del mese.",
  'help.guide.auto-backup.step.2':
    'Elimina i vecchi backup dopo imposta per quanto tempo un backup viene conservato; quelli più vecchi se ne vanno quando ne viene fatto uno nuovo.',
  'help.guide.auto-backup.result':
    'I backup compaiono nella lista secondo il piano; un fallimento raggiunge i canali admin.',
  'help.guide.auto-backup.tip.1': 'Gli orari seguono il fuso orario del server, mostrato nella scheda Audit.',
  'help.guide.auto-backup.tip.2': 'Lo spazio sul server è finito; tenerne da tre a cinque di solito basta.',
  // audit-log
  'help.guide.audit-log.title': 'Leggere il registro di audit',
  'help.guide.audit-log.goal': 'Scopri chi ha fatto cosa, e quando.',
  'help.guide.audit-log.step.1':
    'Leggi le righe: ora, utente, azione, risorsa, IP e dettagli, il più recente per primo. Le azioni prendono il nome da ciò che è successo, come un accesso fallito, una modifica MFA o un ripristino.',
  'help.guide.audit-log.step.2': 'Aggiorna ricarica la parte in alto; Carica altro va più indietro.',
  'help.guide.audit-log.result': 'Una traccia che puoi consegnare a chiunque chieda perché qualcosa è cambiato.',
  'help.guide.audit-log.tip.1': 'Gli orari sono mostrati nel fuso orario del server, indicato sopra la tabella.',
  'help.guide.audit-log.tip.2':
    'Il registro è in sola aggiunta; niente qui può essere modificato o eliminato dall’app.',
};

export default help;
