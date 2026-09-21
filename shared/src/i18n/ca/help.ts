import type { TranslationStrings } from '../types';

const help: TranslationStrings = {
  'help.title': 'Ajuda i documentació',
  'help.search': 'Cerca a la documentació…',
  'help.contents': 'Continguts',
  'help.noResults': 'No hi ha pàgines que coincideixin.',
  'help.errorTitle': "No s'ha pogut carregar aquesta pàgina",
  'help.errorBody': "El contingut d'ajuda s'obté del wiki de TREK. Comprova la teva connexió i torna-ho a provar.",

  // center
  'help.center.button': 'Ajuda per a aquesta pantalla',
  'help.center.title': 'Ajuda',
  'help.center.onThisScreen': 'En aquesta pantalla',
  'help.center.screens': 'Pantalles',
  'help.center.thisScreen': 'Aquesta pantalla',
  'help.center.subScreens': 'Subpantalles: {count}',
  'help.center.subScreensLabel': 'Subpantalles',
  'help.center.guidesCount': '{count} guies',
  'help.center.goToScreen': 'Ves a {screen}',
  'help.center.overview': 'Resum',
  'help.center.howTo': 'Com puc…',
  'help.center.searchPlaceholder': 'Cerca a les guies i la documentació…',
  'help.center.searchEmpty': "No s'ha trobat res per a «{query}».",
  'help.center.searchGuides': 'Guies',
  'help.center.searchDocs': 'Documentació',
  'help.center.searchError': 'La cerca no està disponible ara mateix.',
  'help.center.back': 'Enrere',
  'help.center.close': "Tanca l'ajuda",
  'help.center.steps': '{count} passos',
  'help.center.step': 'Pas {n}',
  'help.center.stepsLabel': 'Passos',
  'help.center.stepOf': 'Pas {n} de {total}',
  'help.center.screenshot': 'Captura',
  'help.center.result': 'El que obtens',
  'help.center.tips': 'Convé saber',
  'help.center.related': 'Relacionat',
  'help.center.openDocs': 'Obre a Ajuda i documentació',
  'help.center.docsSection': 'A la documentació',
  'help.center.noContext': 'Encara no hi ha cap guia per a aquesta pantalla.',
  'help.center.noContextHint': 'Cerca a la documentació o digues-nos què buscaves.',
  'help.center.feedback': 'Hi falta alguna cosa?',
  'help.center.feedbackLink': 'Digues-nos-ho a GitHub',
  'help.center.discord': 'Pregunta a Discord',
  'help.center.quick': 'Ràpid',
  'help.center.guide': 'Guia',
  'help.center.tour': 'Recorregut',
  'help.center.imageAlt': 'Pas {n} de «{title}»',

  // ctx
  'help.ctx.dashboard.title': 'Tauler',
  'help.ctx.dashboard.summary':
    "El tauler és la porta d'entrada a tots els teus viatges. La targeta d'embarcament de dalt destaca el viatge en curs o el següent, la fila de sota compta el que ja has viatjat, i les targetes llisten tot el que planifiques, has arxivat o ja has acabat.",
  'help.ctx.dashboard.bullet.1':
    "Targeta d'embarcament: el viatge en curs o el següent, amb dates, viatgers, llocs i un compte enrere. Fes-hi clic per obrir el viatge.",
  'help.ctx.dashboard.bullet.2':
    'Estadístiques: països visitats, viatges, dies de viatge i distància volada, sumant tots els teus viatges.',
  'help.ctx.dashboard.bullet.3':
    'Targetes de viatge, filtrades per Planificats, Arxivat i Completat, en graella o en llista. Passa el ratolí per una targeta per editar, duplicar, arxivar i eliminar.',
  'help.ctx.dashboard.bullet.4':
    'Ginys a la dreta: convertidor de moneda, rellotges mundials, properes reserves i col·leccions. Cadascun es pot desactivar.',
  'help.ctx.dashboard.bullet.5':
    'La targeta «Viatge nou» i el botó de la cantonada inferior dreta inicien tots dos un viatge nou.',

  // create-trip
  'help.guide.create-trip.title': 'Crear un viatge',
  'help.guide.create-trip.goal': 'Començar un viatge nou amb nom, dates i foto de portada.',
  'help.guide.create-trip.step.1':
    'Fes clic a «Viatge nou». La targeta al final dels teus viatges i el botó de la cantonada inferior dreta fan el mateix.',
  'help.guide.create-trip.step.2':
    "Posa un nom al viatge. És l'únic camp obligatori; tota la resta es pot afegir més tard.",
  'help.guide.create-trip.step.3':
    "Tria una data d'inici i una de fi. TREK crea un dia per data, així l'itinerari queda a punt per omplir.",
  'help.guide.create-trip.step.4':
    "Opcional: afegeix una foto de portada. Puja la teva, arrossega'n una o cerca la destinació a Unsplash.",
  'help.guide.create-trip.step.5': 'Fes clic a «Crea un viatge nou».',
  'help.guide.create-trip.result':
    "El viatge apareix al teu tauler. Si és el següent, ocupa la targeta d'embarcament de dalt.",
  'help.guide.create-trip.tip.1':
    "Les dates es poden canviar més tard. Si ja hi ha reserves, TREK pregunta si s'han de moure juntament amb els dies.",
  'help.guide.create-trip.tip.2':
    'La moneda del viatge que tries aquí és a la qual es converteix cada despesa. Tria la moneda de la destinació.',

  // edit-trip
  'help.guide.edit-trip.title': 'Editar un viatge',
  'help.guide.edit-trip.goal': "Canviar el nom d'un viatge, les dates o la configuració.",
  'help.guide.edit-trip.step.1':
    "Passa el ratolí per la targeta del viatge (o la targeta d'embarcament) i fes clic al llapis.",
  'help.guide.edit-trip.step.2':
    'Canvia el que calgui: nom, descripció, dates, portada, moneda, recordatori o membres.',
  'help.guide.edit-trip.step.3': 'Fes clic a «Actualitzar».',
  'help.guide.edit-trip.result': "La targeta s'actualitza a l'instant, per a tots els membres del viatge.",
  'help.guide.edit-trip.tip.1':
    "Moure les dates d'un viatge que ja té reserves obre un segon pas que pregunta si les reserves també s'han de moure.",

  // cover-image
  'help.guide.cover-image.title': 'Posar una foto de portada',
  'help.guide.cover-image.goal': "Donar al viatge una imatge que es vegi a la targeta i a la targeta d'embarcament.",
  'help.guide.cover-image.step.1': "Obre el formulari d'edició del viatge amb el llapis de la targeta.",
  'help.guide.cover-image.step.2':
    "A «Imatge de portada», deixa-hi anar una foto, fes clic per pujar-ne una o escriu una destinació a la cerca d'Unsplash.",
  'help.guide.cover-image.step.3': 'Tria una foto i fes clic a «Actualitzar».',
  'help.guide.cover-image.result': 'La foto es desa amb el viatge i es mostra a tot arreu on apareix el viatge.',
  'help.guide.cover-image.tip.1':
    "Les fotos de la cerca d'Unsplash s'acrediten automàticament; les teves pujades es queden al teu servidor.",

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Duplicar un viatge',
  'help.guide.duplicate-trip.goal': 'Reutilitzar un viatge com a plantilla per a un de nou.',
  'help.guide.duplicate-trip.step.1': 'Passa el ratolí per la targeta i fes clic a la icona de duplicar.',
  'help.guide.duplicate-trip.step.2': 'Llegeix què es copiarà i què no, i confirma.',
  'help.guide.duplicate-trip.result':
    "Apareix una còpia al costat de l'original, a punt per canviar-li el nom i les dates.",
  'help.guide.duplicate-trip.tip.1':
    "Es copien dies, llocs, reserves, partides del pressupost, llistes d'equipatge i notes del dia. No es copien membres, xat, enquestes, fitxers ni enllaços compartits.",

  // archive-trip
  'help.guide.archive-trip.title': 'Arxivar i restaurar un viatge',
  'help.guide.archive-trip.goal': 'Apartar un viatge sense esborrar-lo i recuperar-lo més endavant.',
  'help.guide.archive-trip.step.1': 'Passa el ratolí per la targeta i fes clic a «Arxiva».',
  'help.guide.archive-trip.step.2': 'Canvia el filtre de sobre les targetes a «Arxivat» per tornar-lo a veure.',
  'help.guide.archive-trip.step.3': 'Fes clic a «Restaura» a la targeta per tornar-lo a «Planificats».',
  'help.guide.archive-trip.result':
    "Els viatges arxivats ho conserven tot. Només deixen d'ocupar el tauler i el calendari de tots els viatges.",

  // delete-trip
  'help.guide.delete-trip.title': 'Eliminar un viatge',
  'help.guide.delete-trip.goal': 'Treure un viatge per sempre.',
  'help.guide.delete-trip.step.1': 'Passa el ratolí per la targeta i fes clic a la paperera.',
  'help.guide.delete-trip.step.2': 'Confirma. El diàleg anomena el viatge, perquè sàpigues que és el correcte.',
  'help.guide.delete-trip.result':
    "El viatge, els seus dies, llocs, reserves i fitxers desapareixen. No es pot desfer; si dubtes, arxiva'l.",

  // filter-and-view
  'help.guide.filter-and-view.title': 'Trobar viatges completats, canviar entre graella i llista',
  'help.guide.filter-and-view.goal': 'Veure viatges acabats o arxivats i triar la disposició que prefereixis.',
  'help.guide.filter-and-view.step.1':
    'Fes servir «Planificats», «Arxivat» i «Completat» a sobre de les targetes. Completat és tot viatge amb la data de fi passada.',
  'help.guide.filter-and-view.step.2':
    'Fes clic a la icona de llista per passar a una llista compacta; torna-hi a fer clic per a la graella.',
  'help.guide.filter-and-view.result': 'El tauler recorda la teva disposició en aquest dispositiu.',

  // calendar-feed
  'help.guide.calendar-feed.title': "Subscriure't a tots els viatges al teu calendari",
  'help.guide.calendar-feed.goal':
    'Veure els dies i les reserves de cada viatge actiu a la teva app de calendari, sempre sincronitzats.',
  'help.guide.calendar-feed.step.1': 'Fes clic a la icona de calendari al costat del selector de vista.',
  'help.guide.calendar-feed.step.2':
    'Fes clic a «Enable calendar subscription». TREK genera un enllaç privat del feed.',
  'help.guide.calendar-feed.step.3':
    "Afegeix el feed amb un dels botons (Google, Apple, Outlook) o copia l'enllaç a qualsevol app de calendari que se subscrigui a URL.",
  'help.guide.calendar-feed.result':
    "Cada viatge actiu apareix al teu calendari i s'actualitza sol. En queden fora els viatges arxivats i els que van acabar fa més de 90 dies.",
  'help.guide.calendar-feed.tip.1':
    "L'enllaç és secret. Qui el tingui pot llegir el feed; revoca'l des del mateix diàleg si es filtra.",

  // widgets
  'help.guide.widgets.title': 'Triar els ginys del tauler',
  'help.guide.widgets.goal': "Mostrar o amagar la fila d'estadístiques i els ginys de la dreta.",
  'help.guide.widgets.step.1': 'Obre el menú del teu avatar a dalt a la dreta i tria «Configuració».',
  'help.guide.widgets.step.2': 'Canvia a la pestanya «Aparença».',
  'help.guide.widgets.step.3':
    'A «Ginys del tauler», activa o desactiva cada giny. Escriptori i mòbil es configuren per separat.',
  'help.guide.widgets.step.4': "Torna al tauler. El canvi s'aplica a l'instant.",
  'help.guide.widgets.result':
    'Els ginys amagats deixen espai per als teus viatges; desactiva tota la columna dreta per centrar la disposició.',
  'help.guide.widgets.link': "Obre la configuració d'aparença",

  // currency-widget
  'help.guide.currency-widget.title': 'Convertir monedes',
  'help.guide.currency-widget.goal': 'Convertir un import entre dues monedes amb tipus de canvi actuals.',
  'help.guide.currency-widget.step.1': "Escriu l'import i tria les dues monedes.",
  'help.guide.currency-widget.step.2':
    'La fletxa entremig intercanvia el parell; la fletxa circular actualitza el tipus de canvi.',
  'help.guide.currency-widget.result':
    'El teu parell de monedes es recorda al teu compte, així que és el mateix a tots els dispositius.',
  'help.guide.currency-widget.tip.1':
    "Els tipus de canvi vénen del Banc Central Europeu i s'actualitzen un cop al dia.",

  // timezones-widget
  'help.guide.timezones-widget.title': 'Afegir rellotges mundials',
  'help.guide.timezones-widget.goal': "Tenir a la vista l'hora local de les teves destinacions.",
  'help.guide.timezones-widget.step.1': 'Fes clic a + al giny «Fusos horaris» i cerca una ciutat.',
  'help.guide.timezones-widget.step.2': 'Treu un rellotge amb la × del costat.',
  'help.guide.timezones-widget.result': 'Els teus rellotges es desen amb el teu compte.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    "Vacay és el teu planificador personal de vacances: quants dies tens a l'any, quins has registrat i quants en queden. La graella mostra tot l'any d'un cop d'ull; la barra lateral reuneix el selector d'any, les persones amb qui planifiques, els calendaris compartits amb tu, la llegenda i el teu saldo.",
  'help.ctx.vacay.bullet.1':
    'Graella anual: dotze targetes de mes, una cel·la per dia. Fes clic en un dia per registrar-lo o esborrar-lo. Un puntet blau marca els dies que ja cobreix un viatge.',
  'help.ctx.vacay.bullet.2':
    "Barra inferior: mode Vacances o Festiu de l'empresa, més els interruptors Mitja jornada i Comp. / Flexi que canvien què registra un clic.",
  'help.ctx.vacay.bullet.3':
    "Dret: els teus dies de l'any, quants n'has fet servir i quants en queden, amb el traspàs del període anterior.",
  'help.ctx.vacay.bullet.4':
    "Persones són qui s'ha fusionat amb el teu pla, cadascú amb el seu color. Calendaris compartits són anells de només lectura dels dies lliures d'altres.",
  'help.ctx.vacay.bullet.5':
    "La configuració cobreix caps de setmana, inici de setmana, traspàs, el teu any de vacances, festius de l'empresa i calendaris de festius o vacances escolars.",
  // log-day
  'help.guide.log-day.title': 'Registrar un dia de vacances',
  'help.guide.log-day.goal': 'Marcar un dia lliure a la graella i veure com el saldo el segueix.',
  'help.guide.log-day.step.1':
    "Mira la barra inferior: el botó de l'esquerra, amb el teu color, vol dir que un clic registra un dia de vacances per a tu.",
  'help.guide.log-day.step.2':
    "Fes clic en un dia de qualsevol targeta de mes. S'omple amb el teu color i Utilitzats compta un dia més.",
  'help.guide.log-day.step.3': 'Torna a fer clic al mateix dia per esborrar-lo.',
  'help.guide.log-day.result':
    "El dia queda registrat, Dies, Utilitzats i Restants s'actualitzen a l'instant, i qui estigui fusionat amb el teu pla ho veu en directe.",
  'help.guide.log-day.tip.1':
    'Els caps de setmana no es poden registrar mentre Bloqueja els caps de setmana estigui activat a la configuració.',
  'help.guide.log-day.tip.2':
    'Un punt blau en una cel·la vol dir que un dels teus viatges cobreix aquell dia, així veus on coincideixen vacances i viatge.',
  // half-day
  'help.guide.half-day.title': 'Registrar mig dia',
  'help.guide.half-day.goal': 'Agafar una tarda sense gastar un dia sencer de saldo.',
  'help.guide.half-day.step.1':
    'Activa Mitja jornada a la barra. El seu punt taronja és la marca que rep un mig dia a la graella.',
  'help.guide.half-day.step.2': 'Fes clic en un dia. Es registra com a 0,5 i porta el punt taronja al racó.',
  'help.guide.half-day.step.3':
    'Desactiva Mitja jornada quan acabis; fer clic en un mig dia amb altres ajustos el converteix al mateix lloc.',
  'help.guide.half-day.result':
    'Utilitzats creix 0,5. Mitja jornada i Comp. / Flexi són independents, així que també hi cap mig dia de compensació.',
  'help.guide.half-day.tip.1':
    'La barra sempre mostra la marca que posarà el teu proper clic, per comprovar-ho abans de registrar.',
  // comp-day
  'help.guide.comp-day.title': 'Registrar compensació o flex',
  'help.guide.comp-day.goal': 'Agafar temps compensatori que no costa dies de vacances.',
  'help.guide.comp-day.step.1':
    "Activa Comp. / Flexi a la barra. El disc ratllat és l'aspecte d'un dia de compensació a la graella.",
  'help.guide.comp-day.step.2':
    "Fes clic en un dia. S'omple amb ratlles diagonals del teu color en lloc d'un bloc sòlid.",
  'help.guide.comp-day.result':
    'Els dies de compensació es compten al costat de les targetes de saldo i mai no redueixen Restants.',
  'help.guide.comp-day.tip.1':
    'Hores extra recuperades, flexibilitat horària, un dia de compensació: tot el que és lliure però no vacances va aquí.',
  // entitlement
  'help.guide.entitlement.title': 'Definir el teu saldo de vacances',
  'help.guide.entitlement.goal': "Dir a Vacay quants dies de vacances tens a l'any.",
  'help.guide.entitlement.step.1': 'A la barra lateral, fes clic a la targeta Dies sota Dret.',
  'help.guide.entitlement.step.2': 'Escriu el teu nombre de dies i prem Retorn.',
  'help.guide.entitlement.result':
    "Restants es recalcula a partir del teu saldo, del traspàs si n'hi ha i dels dies fets.",
  'help.guide.entitlement.tip.1':
    "Cada any té el seu propi saldo, així que un canvi aquí només afecta l'any seleccionat.",
  // years
  'help.guide.years.title': 'Afegir anys i canviar-ne',
  'help.guide.years.goal': "Planificar ja l'any vinent, o repassar l'anterior.",
  'help.guide.years.step.1':
    "Fes clic al + a la dreta de l'any per afegir el següent, o al + de l'esquerra per a l'anterior.",
  'help.guide.years.step.2': "Canvia d'any amb les fletxes o amb les fitxes d'any de sota.",
  'help.guide.years.step.3':
    "Per treure un any, passa el ratolí per la seva fitxa i fes clic al petit menys. Les seves entrades se'n van amb ell, així que confirma amb compte.",
  'help.guide.years.result': 'Cada any conserva el seu propi saldo i les seves entrades; el traspàs els enllaça.',
  // company-holidays
  'help.guide.company-holidays.title': "Marcar festius de l'empresa",
  'help.guide.company-holidays.goal': "Bloquejar els dies en què tota l'empresa tanca sense gastar el saldo de ningú.",
  'help.guide.company-holidays.step.1':
    "Obre la configuració i comprova que Festius de l'empresa està activat. Ho està per defecte; la barra només ofereix el mode mentre ho estigui.",
  'help.guide.company-holidays.step.2': "De tornada a la graella, posa la barra en mode Festiu de l'empresa.",
  'help.guide.company-holidays.step.3': 'Fes clic als dies. Es tornen ambre i apareixen a la llegenda.',
  'help.guide.company-holidays.result':
    "Els festius de l'empresa els veu tothom que està fusionat amb el pla i mai no redueixen Restants.",
  'help.guide.company-holidays.tip.1':
    "Qualsevol persona fusionada pot editar els festius de l'empresa, així que acordeu qui les manté.",
  // public-holidays
  'help.guide.public-holidays.title': 'Mostrar festius',
  'help.guide.public-holidays.goal': 'Posar a la graella els festius del teu país o regió.',
  'help.guide.public-holidays.step.1': 'Obre la configuració i activa Festius.',
  'help.guide.public-holidays.step.2':
    'Fes clic a Afegeix un calendari, tria el país i, quan importi, la regió. Dona-li un color i una etiqueta si vols.',
  'help.guide.public-holidays.step.3': 'Tanca la configuració. Els festius apareixen a la graella i a la llegenda.',
  'help.guide.public-holidays.result':
    'Els festius es marquen amb el color del calendari i mai no compten contra el teu saldo.',
  'help.guide.public-holidays.tip.1':
    "Pots afegir diversos calendaris, per exemple la teva regió i la d'un company fusionat.",
  // school-holidays
  'help.guide.school-holidays.title': 'Mostrar vacances escolars',
  'help.guide.school-holidays.goal': 'Veure les vacances escolars de la teva regió al costat dels teus dies lliures.',
  'help.guide.school-holidays.step.1': 'Obre la configuració i activa School Holidays.',
  'help.guide.school-holidays.step.2':
    'Fes clic a Afegeix un calendari i tria el país. Si un país divideix el calendari, tria també la regió o el grup.',
  'help.guide.school-holidays.step.3':
    'Tanca la configuració. Cada període rep una banda de color a la part baixa dels seus dies.',
  'help.guide.school-holidays.result':
    'Les vacances escolars són purament visuals: mai no redueixen el saldo de ningú.',
  'help.guide.school-holidays.tip.1':
    "Falta la teva regió? L'administrador pot mantenir les vacances escolars a mà a Admin, Personalització, Vacances escolars.",
  // weekends
  'help.guide.weekends.title': "Bloquejar caps de setmana i fixar l'inici de setmana",
  'help.guide.weekends.goal':
    'Deixar els caps de setmana fora del còmput i començar la setmana el dia a què estàs acostumat.',
  'help.guide.weekends.step.1': 'Obre la configuració.',
  'help.guide.weekends.step.2':
    'Activa Bloqueja els caps de setmana i tria quins dies compten com el teu cap de setmana.',
  'help.guide.weekends.step.3': 'A La setmana comença el, tria dilluns o diumenge.',
  'help.guide.weekends.result': 'Els dies bloquejats surten en gris a la graella i no es poden registrar per error.',
  // leave-year
  'help.guide.leave-year.title': 'Definir el teu any de vacances',
  'help.guide.leave-year.goal':
    'Comptar el saldo per any fiscal o des de la data de contractació en lloc de gener a desembre.',
  'help.guide.leave-year.step.1': 'Obre la configuració i busca Any de vacances.',
  'help.guide.leave-year.step.2':
    'Tria Natural, Fiscal (amb el mes i el dia en què comença) o Contractació (amb la data en què et van contractar).',
  'help.guide.leave-year.result':
    'Saldo, dies fets i traspàs segueixen aquest període, i la graella comença pel seu primer mes.',
  'help.guide.leave-year.tip.1':
    'Aquest ajust és personal: en un pla fusionat cadascú conserva el seu propi any de vacances i les seves xifres.',
  // carry-over
  'help.guide.carry-over.title': 'Traspassar els dies no fets',
  'help.guide.carry-over.goal': "Sumar el que sobra al final d'un període al següent.",
  'help.guide.carry-over.step.1': 'Obre la configuració.',
  'help.guide.carry-over.step.2': 'Activa Arrossega el saldo.',
  'help.guide.carry-over.result':
    'La quantitat traspassada es recalcula en tots els teus anys i es mostra sota el saldo.',
  'help.guide.carry-over.tip.1': 'Desactivar-ho posa tots els saldos de traspàs a zero.',
  // invite
  'help.guide.invite.title': 'Planificar amb algú',
  'help.guide.invite.goal':
    'Fusionar el teu pla amb un altre usuari de TREK per veure els dies lliures de tots dos en una sola graella.',
  'help.guide.invite.step.1': 'Fes clic a la icona de persona del panell Persones.',
  'help.guide.invite.step.2': "Tria l'usuari i envia la invitació.",
  'help.guide.invite.step.3': 'Rep una notificació i accepta. Fins llavors la invitació apareix com a pendent.',
  'help.guide.invite.result':
    "Els dos plans es fusionen: cada persona té un color, podeu registrar dies l'un per l'altre i tot se sincronitza en directe.",
  'help.guide.invite.tip.1':
    'Per desfer una fusió, fes servir Dissol a la configuració. Les entrades de cadascú tornen al seu propi pla.',
  'help.guide.invite.tip.2':
    "Si l'altra persona només ha de veure els teus dies, comparteix el calendari en lloc de fusionar.",
  // share-calendar
  'help.guide.share-calendar.title': 'Compartir el calendari en només lectura',
  'help.guide.share-calendar.goal': 'Deixar que algú vegi quan ets lliure sense donar-li veu al teu pla.',
  'help.guide.share-calendar.step.1': 'Fes clic a la icona de compartir del panell Calendaris compartits.',
  'help.guide.share-calendar.step.2': "Tria l'usuari i fes clic a Comparteix. No cal cap acceptació.",
  'help.guide.share-calendar.step.3':
    "Els calendaris compartits amb tu apareixen al mateix panell; l'ull n'amaga un, Deixa de compartir revoca el teu.",
  'help.guide.share-calendar.result':
    "Els teus dies lliures apareixen com un anell de color a la seva graella. Res del que comparteixes es pot editar des d'allà.",
  'help.guide.share-calendar.tip.1':
    "Compartir i fusionar són independents: pots estar fusionat amb una persona i compartir amb d'altres.",
  'help.guide.share-calendar.tip.2':
    'Passa el ratolí per un dia amb anell per veure qui és lliure i durant quant de temps.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'L’Atlas és la teva empremta viatgera en un mapa del món: cada país on t’ha dut un viatge està acolorit, i els que vas visitar abans de TREK els afegeixes a mà. Fes zoom per veure regions, mantén una llista de desitjos de llocs que encara vols veure i llegeix les teves xifres al panell de vidre de baix.',
  'help.ctx.atlas.bullet.1':
    'El mapa: els països visitats porten un color que és seu, els planificats tenen contorn discontinu, els de la llista de desitjos un ratllat diagonal i tota la resta és gris. Passa el ratolí per un país per veure viatges, llocs i primera i última visita.',
  'help.ctx.atlas.bullet.2':
    'Cerca a dalt: escriu un país o un lloc. Triar un país hi vola i obre la seva finestra; triar un lloc aterra a la seva regió perquè la puguis marcar.',
  'help.ctx.atlas.bullet.3':
    'Mostra els països planificats, a dalt a la dreta: revela els països dels teus propers viatges. L’interruptor només apareix mentre en tinguis.',
  'help.ctx.atlas.bullet.4':
    'Panell de baix: la pestanya Estadístiques amb països, viatges, llocs, ciutats, dies, continents i la teva ratxa; la pestanya Llista de desitjos amb el que encara t’espera.',
  'help.ctx.atlas.bullet.5':
    'Regions: a partir del nivell de zoom 5 el mapa passa a estats i províncies, cadascun clicable per marcar-lo o treure’l.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: amb l’addon connectat, un panell a l’esquerra de les estadístiques ratlla desitjos i afegeix països dels teus registres, mai sense la teva confirmació.',
  // mark-country
  'help.guide.mark-country.title': 'Marcar un país com a visitat',
  'help.guide.mark-country.goal':
    'Afegeix un país on vas ser abans de TREK, perquè el mapa i el teu recompte l’incloguin.',
  'help.guide.mark-country.step.1': 'Escriu el país al quadre de cerca de la part superior del mapa.',
  'help.guide.mark-country.step.2': 'Tria’l de la llista. El mapa hi vola i s’obre una finestra per a aquest país.',
  'help.guide.mark-country.step.3': 'Tria Marca com a visitat.',
  'help.guide.mark-country.result':
    'El país agafa el seu color al mapa i Països en compta un més. Aquest color és permanent: marcar més països mai reordena la resta.',
  'help.guide.mark-country.tip.1':
    'Fer clic en un país gris del mapa obre la mateixa finestra; la cerca és el camí segur per als països petits.',
  'help.guide.mark-country.tip.2':
    'Un país marcat a mà sempre compta com a visitat, siguin quines siguin les dates de qualsevol viatge que hi vagi.',
  // unmark-country
  'help.guide.unmark-country.title': 'Treure un país que has marcat',
  'help.guide.unmark-country.goal': 'Torna a treure del mapa un país marcat a mà.',
  'help.guide.unmark-country.step.1':
    'Cerca el país i tria’l, o fes-hi clic al mapa. Per a un país que has marcat tu, la finestra pregunta si cal treure’l.',
  'help.guide.unmark-country.step.2': 'Confirma amb Elimina.',
  'help.guide.unmark-country.result': 'El país torna a ser gris i surt del teu recompte.',
  'help.guide.unmark-country.tip.1':
    'Només els països marcats a mà es poden treure així. Un país amb viatges o llocs es queda mentre els tingui; Elimina també és a la seva targeta de detall del panell quan es va marcar a mà.',
  // country-details
  'help.guide.country-details.title': 'Veure què vas fer en un país',
  'help.guide.country-details.goal': 'Obre un país visitat i salta als viatges que t’hi van dur.',
  'help.guide.country-details.step.1': 'Cerca un país que hagis visitat.',
  'help.guide.country-details.step.2':
    'Tria’l. El mapa hi vola i el panell de baix afegeix una targeta amb la bandera, llocs, viatges i un xip per viatge.',
  'help.guide.country-details.result': 'Fes clic en un xip de viatge per obrir aquell viatge al planificador.',
  'help.guide.country-details.tip.1':
    'Passar el ratolí pel país al mapa mostra les mateixes xifres més la primera i l’última visita.',
  // planned-countries
  'help.guide.planned-countries.title': 'Mostrar els països on vas',
  'help.guide.planned-countries.goal':
    'Porta al mapa els països dels teus propers viatges sense comptar-los com a visitats.',
  'help.guide.planned-countries.step.1':
    'Activa Mostra els països planificats, a dalt a la dreta. El nombre del costat diu quants n’esperen.',
  'help.guide.planned-countries.step.2':
    'Cerca un país planificat i tria’l: el panell diu Planificat i el rètol del mapa mostra quan hi vas.',
  'help.guide.planned-countries.result':
    'Els països planificats apareixen amb contorn discontinu, perquè mai semblin un lloc on ja has estat. L’interruptor recorda la teva tria.',
  'help.guide.planned-countries.tip.1':
    'Un país compta com a visitat quan el viatge cap allà ha començat; un viatge en curs també compta. Els viatges sense dates queden del tot fora de les estadístiques.',
  'help.guide.planned-countries.tip.2': 'L’interruptor només existeix mentre tinguis viatges propers.',
  // regions
  'help.guide.regions.title': 'Marcar una regió',
  'help.guide.regions.goal': 'Més fi que països: marca els estats, províncies o prefectures on has estat.',
  'help.guide.regions.step.1':
    'Fes zoom en un país fins que apareguin les seves regions, a partir del nivell 5. Cercar el país i triar-lo t’hi acosta prou.',
  'help.guide.regions.step.2':
    'Fes clic en una regió. En passar-hi el ratolí surt el nom; la finestra mostra la regió i el seu país.',
  'help.guide.regions.step.3': 'Tria Marca com a visitat.',
  'help.guide.regions.result':
    'La regió s’omple amb el color del país. Marcar una regió també compta el país com a visitat si encara no ho era.',
  'help.guide.regions.tip.1':
    'Fer clic en una regió visitada ofereix Elimina, tant si l’has marcat tu com si un lloc l’hi ha posat.',
  'help.guide.regions.tip.2': 'Les regions on tens llocs reals es marquen per tu; allà no hi ha res a fer.',
  // search-place
  'help.guide.search-place.title': 'Trobar un lloc i marcar la seva regió',
  'help.guide.search-place.goal': 'Marca Baviera cercant Munic, sense saber a quina regió és una ciutat.',
  'help.guide.search-place.step.1':
    'Escriu una ciutat, un monument o una adreça al quadre de cerca. Els països van primer; els llocs coincidents apareixen a sota, sota Llocs.',
  'help.guide.search-place.step.2': 'Tria el lloc. El mapa hi vola i esbrina a quina regió és el punt.',
  'help.guide.search-place.step.3':
    'Tria Marca com a visitat per a aquella regió, o Afegeix a la llista de desitjos si encara t’espera.',
  'help.guide.search-place.result':
    'La regió queda marcada, i amb ella el país. Els països sense dades de regions al paquet de mapes recorren al país mateix.',
  'help.guide.search-place.tip.1':
    'Els llocs vénen de la mateixa cerca que a tot TREK, així que segueixen el proveïdor que va configurar el teu admin.',
  // bucket-country
  'help.guide.bucket-country.title': 'Posar un país a la llista de desitjos',
  'help.guide.bucket-country.goal':
    'Mantén una llista de desitjos de països directament al mapa, a part dels que ja has visitat.',
  'help.guide.bucket-country.step.1': 'Cerca el país i tria’l, o fes-hi clic al mapa.',
  'help.guide.bucket-country.step.2': 'Tria Afegeix a la llista de desitjos.',
  'help.guide.bucket-country.step.3': 'Tria mes i any si ja saps quan, i confirma amb Afegeix a la llista de desitjos.',
  'help.guide.bucket-country.result':
    'El país es dibuixa amb ratllat diagonal en el color que tindrà quan hi arribis, i apareix a la pestanya Llista de desitjos del panell.',
  'help.guide.bucket-country.tip.1':
    'La mateixa finestra ofereix Elimina de la llista de desitjos un cop el país és a la llista.',
  'help.guide.bucket-country.tip.2':
    'Una entrada per data objectiu: el mateix país pot ser a la llista per a dos mesos diferents, però no dues vegades per al mateix.',
  // bucket-place
  'help.guide.bucket-place.title': 'Afegir un lloc a la llista de desitjos',
  'help.guide.bucket-place.goal':
    'Desa una ciutat, un monument o una adreça que somies, amb coordenades i data objectiu.',
  'help.guide.bucket-place.step.1': 'Obre la pestanya Llista de desitjos al panell de baix.',
  'help.guide.bucket-place.step.2': 'Fes clic a Afegeix un lloc.',
  'help.guide.bucket-place.step.3':
    'Escriu el nom i prem el botó de cerca; tria la coincidència perquè el lloc tingui coordenades. Escriure només un nom i saltar-te la cerca també funciona.',
  'help.guide.bucket-place.step.4': 'Tria mes i any si vols i fes clic a Afegir.',
  'help.guide.bucket-place.result':
    'El lloc queda a dalt de la teva llista de desitjos amb la seva data objectiu; la × del costat el torna a treure.',
  'help.guide.bucket-place.tip.1':
    'Un desig amb coordenades és el que Dawarich pot ratllar per tu més endavant, quan els teus registres mostrin que hi vas ser.',
  // stats
  'help.guide.stats.title': 'Llegir les teves estadístiques',
  'help.guide.stats.goal': 'Saber què compten les xifres del panell, i què no.',
  'help.guide.stats.step.1':
    'Països és el nombre de països diferents on realment has estat; els planificats es mostren al costat, no a dins. Viatges, Llocs i Dies són totals de tots els teus viatges. Ciutats es dedueix de les adreces dels teus llocs, així que és una estimació.',
  'help.guide.stats.step.2':
    'Els continents mostren països visitats per continent; l’Antàrtida s’afegeix a la fila quan hi hagis estat. Després la teva ratxa, anys consecutius amb almenys un viatge, i quants viatges has fet aquest any.',
  'help.guide.stats.result':
    'Les xifres segueixen els teus viatges a mesura que els planifiques; aquí no cal mantenir res.',
  'help.guide.stats.tip.1':
    'Les ciutats es llegeixen del text de l’adreça, no es consulten, així que una adreça curta com «Osteria Francescana, Italy» o una que acaba en una prefectura pot donar una regió en lloc d’una ciutat.',
  'help.guide.stats.tip.2':
    'Els països marcats a mà compten a Països i als continents, però no aporten viatges, llocs ni dies.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Col·leccions',
  'help.ctx.collections.summary':
    'Collections és la teva biblioteca de llocs fora de qualsevol viatge: llistes amb nom de llocs que has trobat i vols conservar, cada lloc amb un estat Idea, Hi vull anar o Visitat. Els llocs es copien cap a dins i cap a fora dels viatges, mai s’enllacen, de manera que una llista i un viatge no es canvien mai l’un a l’altre.',
  'help.ctx.collections.bullet.1':
    'Barra de llistes a l’esquerra: les teves llistes, les compartides amb tu, invitacions que esperen un sí, Tot el desat com la unió de tot el que és teu, i Nova llista més la importació de fitxer a dalt de tot.',
  'help.ctx.collections.bullet.2':
    'Capçalera de la llista oberta: el seu color, portada, descripció i enllaços, els membres, i les accions Editar, Exporta i Compartir a la dreta.',
  'help.ctx.collections.bullet.3':
    'Fila de filtres sobre els llocs: estat, categoria, valoració i ordre, el filtre d’etiquetes, el + per afegir un lloc, la importació des d’un viatge i Triar per a accions en bloc.',
  'help.ctx.collections.bullet.4':
    'Files de llocs: avatar, nom i adreça, etiquetes i categoria, i la píndola d’estat a la dreta, que canvia amb un clic.',
  'help.ctx.collections.bullet.5':
    'Mapa a la dreta: una xinxeta per lloc amb coordenades, el commutador llista o mapa, el quadre de cerca i el filtre d’etiquetes. Fer clic en una xinxeta obre aquell lloc.',
  'help.ctx.collections.bullet.6':
    'Fitxa de detall: fes clic en una fila per veure portada, categoria, etiquetes, estat, descripció i enllaços, amb Editar, Copiar al viatge i Eliminar de la llista.',
  // create-list
  'help.guide.create-list.title': 'Crear una llista',
  'help.guide.create-list.goal': 'Comença una llista nova amb nom, amb un color i una portada, a punt per rebre llocs.',
  'help.guide.create-list.step.1': 'Fes clic a Nova llista a dalt de la barra de llistes.',
  'help.guide.create-list.step.2':
    'Posa un nom a la llista i tria un color. Imatge de portada, descripció i enllaços són opcionals; els pots afegir més tard amb Editar.',
  'help.guide.create-list.step.3': 'Fes clic a Crear.',
  'help.guide.create-list.result':
    'La llista s’obre buida, amb Afegir un lloc i Importa des d’un viatge com les dues maneres d’omplir-la.',
  'help.guide.create-list.tip.1':
    'La portada pot ser una pujada teva o una imatge trobada amb la cerca d’Unsplash al mateix diàleg.',
  // add-place
  'help.guide.add-place.title': 'Afegir un lloc',
  'help.guide.add-place.goal':
    'Troba un lloc i desa’l a la llista oberta amb nom, categoria, estat i notes d’una vegada.',
  'help.guide.add-place.step.1': 'Fes clic al + de la fila de filtres sobre els llocs.',
  'help.guide.add-place.step.2':
    'Escriu el lloc al camp de cerca i tria un resultat. Nom, adreça i coordenades s’omplen a partir d’ell.',
  'help.guide.add-place.step.3':
    'Posa l’estat i, si vols, una categoria, una descripció i enllaços, i després fes clic a Afegir. El diàleg es queda obert per al lloc següent; Cancel·lar el tanca.',
  'help.guide.add-place.result': 'El lloc apareix a la llista i, quan té coordenades, com una xinxeta al mapa.',
  'help.guide.add-place.tip.1':
    'Des de dins d’un viatge, Desar a la col·lecció a l’inspector del lloc o al menú del lloc posa un lloc del viatge en una llista sense sortir del viatge.',
  'help.guide.add-place.tip.2':
    'La llista ha de ser teva o una on siguis editor o administrador; el + no hi és a Tot el desat ni en una llista que només mires.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Importar llocs d’un viatge',
  'help.guide.import-from-trip.goal':
    'Porta d’un cop tots els llocs d’un viatge a una llista en lloc de desar-los un per un.',
  'help.guide.import-from-trip.step.1':
    'Fes clic al botó d’importar amb la fletxa de núvol a la fila de filtres. En una llista buida la mateixa acció és al costat d’Afegir un lloc.',
  'help.guide.import-from-trip.step.2': 'Tria un dels teus viatges.',
  'help.guide.import-from-trip.step.3':
    'Marca els llocs que vulguis. Els que ja són a la llista surten en gris; els que no són en cap dia del viatge comencen seleccionats. Només nous amaga el que ja tens.',
  'help.guide.import-from-trip.step.4': 'Fes clic a Importa. El botó sempre diu quants estan a punt d’afegir-se.',
  'help.guide.import-from-trip.result':
    'Els llocs es copien a la llista amb nom, adreça, coordenades, descripció i categoria. El viatge es queda com estava.',
  'help.guide.import-from-trip.tip.1':
    'Els duplicats per nom o coordenades se salten automàticament, així que importar dues vegades no fa cap mal.',
  'help.guide.import-from-trip.tip.2':
    'Dins la llista de llocs d’un viatge, el mode de selecció ofereix en canvi Desar a la col·lecció per a un conjunt de llocs triats a mà.',
  // place-status
  'help.guide.place-status.title': 'Posar l’estat d’un lloc',
  'help.guide.place-status.goal': 'Tingues clar què és una idea, què és a la llista curta i on has estat.',
  'help.guide.place-status.step.1':
    'Fes clic a la píndola d’estat a l’extrem dret d’una fila de lloc. Idea passa a Hi vull anar.',
  'help.guide.place-status.step.2': 'Torna-hi a fer clic per a Visitat, i un cop més per tornar a començar a Idea.',
  'help.guide.place-status.result':
    'La píndola i el seu color canvien a l’instant; el filtre d’estat sobre la llista en porta el compte.',
  'help.guide.place-status.tip.1': 'L’estat és cosa de Collections: copiar un lloc a un viatge no se l’endú.',
  'help.guide.place-status.tip.2':
    'Des d’un viatge, Desar a la col·lecció mostra una píndola d’estat per cada llista on és el lloc, i el panell de llocs té l’acció Marca com a visitat per a una selecció.',
  // place-detail
  'help.guide.place-detail.title': 'Obrir un lloc desat',
  'help.guide.place-detail.goal': 'Mira-ho tot d’un lloc i actua: editar, copiar a un viatge, eliminar.',
  'help.guide.place-detail.step.1':
    'Fes clic en una fila de lloc. La fitxa de detall s’obre al costat de la llista i el mapa es desplaça fins al lloc.',
  'help.guide.place-detail.step.2':
    'A baix hi ha Editar, Copiar al viatge i Eliminar de la llista; la càmera de la portada canvia la foto automàtica per una de teva.',
  'help.guide.place-detail.result':
    'Editar desbloqueja nom, categoria, etiquetes, adreça, coordenades, descripció i enllaços directament a la fitxa.',
  'help.guide.place-detail.tip.1':
    'La portada s’obté automàticament quan el lloc no té imatge pròpia. La teva pujada pot ser JPG, PNG, GIF o WebP fins a 20 MB.',
  'help.guide.place-detail.tip.2':
    'Els membres d’una llista compartida també hi poden deixar una valoració amb estrelles, i el filtre de valoració de la fila de filtres fa servir la mitjana.',
  // labels
  'help.guide.labels.title': 'Agrupar llocs amb etiquetes',
  'help.guide.labels.goal':
    'Dona a una llista les seves pròpies etiquetes, com barris o dies, més enllà de les categories comunes.',
  'help.guide.labels.step.1': 'Obre el gestor d’etiquetes des del control d’etiquetes de la fila de filtres.',
  'help.guide.labels.step.2':
    'Escriu un nom, tria un color i fes clic a Afegir etiqueta. Reanomena, recolora o elimina etiquetes existents al mateix diàleg.',
  'help.guide.labels.step.3':
    'Activa Triar, marca els llocs i fes clic a Assignar etiqueta a la barra de selecció. Un sol lloc també rep etiquetes amb Editar a la seva fitxa de detall.',
  'help.guide.labels.step.4':
    'Tria una o més etiquetes a la fila de filtres per reduir la llista i el mapa als llocs que en portin alguna.',
  'help.guide.labels.result':
    'Els llocs etiquetats mostren les seves etiquetes a la fila; el filtre d’etiquetes hi és per a tots els membres, lectors inclosos.',
  'help.guide.labels.tip.1':
    'Les etiquetes pertanyen a l’única llista on es van crear. Moure un lloc a una altra llista les deixa enrere.',
  'help.guide.labels.tip.2': 'Gestionar i assignar etiquetes requereix drets d’edició a la llista.',
  // filter-select
  'help.guide.filter-select.title': 'Filtrar i seleccionar llocs',
  'help.guide.filter-select.goal': 'Redueix la llista i actua sobre molts llocs alhora.',
  'help.guide.filter-select.step.1':
    'Fes servir els desplegables de la fila de filtres: estat, categoria, valoració mínima i ordre. Cadascun mostra quants llocs deixaria.',
  'help.guide.filter-select.step.2': 'Fes clic a Triar. Cada fila rep una casella i apareix una barra de selecció.',
  'help.guide.filter-select.step.3':
    'Marca llocs o fes servir Seleccionar-ho tot per a tot el que ara està filtrat, i després tria Assignar etiqueta, Moure a la llista, Duplicar a la llista, Copiar al viatge o Eliminar.',
  'help.guide.filter-select.result':
    'Les accions s’apliquen a tota la selecció d’un cop. La × de la dreta surt del mode de selecció.',
  'help.guide.filter-select.tip.1':
    'Seleccionar-ho tot segueix el filtre, així que filtrar per Hi vull anar i seleccionar-ho tot és la manera ràpida d’actuar sobre la llista curta.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Copiar llocs a un viatge',
  'help.guide.copy-to-trip.goal': 'Converteix llocs desats en parades d’un dels teus viatges.',
  'help.guide.copy-to-trip.step.1':
    'Activa Triar i marca els llocs, o obre un lloc i fes servir Copiar al viatge a la seva fitxa de detall.',
  'help.guide.copy-to-trip.step.2': 'Fes clic a Copiar al viatge a la barra de selecció.',
  'help.guide.copy-to-trip.step.3': 'Tria el viatge. El quadre de cerca escurça una llista llarga.',
  'help.guide.copy-to-trip.result':
    'Els llocs aterren a la llista de llocs d’aquell viatge amb nom, descripció, categoria, notes, preu, coordenades, foto i tags. No canvia res a la col·lecció.',
  'help.guide.copy-to-trip.tip.1':
    'Els lectors d’una llista compartida també ho poden fer; copia des de la llista, no la canvia.',
  // share-list
  'help.guide.share-list.title': 'Compartir una llista amb algú',
  'help.guide.share-list.goal': 'Planifica una llista juntament amb altres persones d’aquest TREK, en directe.',
  'help.guide.share-list.step.1': 'Fes clic a Compartir a la capçalera de la teva llista.',
  'help.guide.share-list.step.2': 'Selecciona l’usuari i un rol: Lector, Editor o Administrador.',
  'help.guide.share-list.step.3':
    'Fes clic a Envia la invitació. La persona apareix com a invitació pendent fins que accepta la invitació a la seva barra de llistes.',
  'help.guide.share-list.result':
    'Un cop acceptada, la llista li apareix sota Compartit i cada canvi se sincronitza en directe. Els membres i els seus rols continuen sent editables al mateix diàleg.',
  'help.guide.share-list.tip.1':
    'Els lectors poden mirar, valorar i copiar llocs als seus propis viatges. Els editors afegeixen i editen llocs i etiquetes. Els administradors també poden eliminar.',
  'help.guide.share-list.tip.2':
    'Només el propietari convida i treu persones; un membre pot deixar una llista compartida pel seu compte.',
  // export-list
  'help.guide.export-list.title': 'Exportar una llista com a fitxer',
  'help.guide.export-list.goal': 'Passa una llista a algú d’un altre TREK, o emporta-te-la a una app de mapes.',
  'help.guide.export-list.step.1': 'Fes clic a Exporta a la capçalera de la llista.',
  'help.guide.export-list.step.2':
    'Tria Llista del TREK per a un altre TREK, amb etiquetes i estat, o GPX per a OsmAnd, Organic Maps, un Garmin i altres apps que llegeixen waypoints.',
  'help.guide.export-list.result': 'El fitxer es descarrega. Qualsevol membre d’una llista compartida la pot exportar.',
  'help.guide.export-list.tip.1':
    'Un lloc sense coordenades no pot ser un waypoint GPX; es deixa fora i TREK et diu quants n’han quedat.',
  'help.guide.export-list.tip.2':
    'Valoracions, membres i fotos pujades es queden enrere a propòsit; pertanyen a aquest TREK, no a la llista.',
  // import-file
  'help.guide.import-file.title': 'Importar una llista des d’un fitxer',
  'help.guide.import-file.goal':
    'Porta un fitxer de Llista del TREK o un fitxer GPX, com a llista nova o a una que ja tens.',
  'help.guide.import-file.step.1':
    'Fes clic al botó d’importar amb la fletxa de pujada al costat de Nova llista a la barra de llistes.',
  'help.guide.import-file.step.2':
    'Tria el fitxer. TREK mostra què hi ha abans que passi res: el nom, quants llocs i quantes etiquetes.',
  'help.guide.import-file.step.3':
    'Deixa Llista nova i canvia el nom si vols, o tria Afegeix a una llista per posar els llocs en una llista que puguis editar, i després fes clic a Importa.',
  'help.guide.import-file.result':
    'Aterres a la llista amb els llocs importats. Afegeix a una llista només afegeix; els llocs que ja hi eren conserven l’estat, les notes i les etiquetes.',
  'help.guide.import-file.tip.1':
    'D’un GPX, cada waypoint amb nom es converteix en un lloc; els tracks són línies i es deixen fora, i la vista prèvia diu quants punts eren.',
  'help.guide.import-file.tip.2':
    'Un fitxer que no és ni una Llista del TREK ni un GPX es rebutja amb un motiu; un sol lloc il·legible se salta, no tot el fitxer.',
  // edit-list
  'help.guide.edit-list.title': 'Editar o eliminar una llista',
  'help.guide.edit-list.goal':
    'Canvia el nom, el color, la portada, la descripció o els enllaços d’una llista, o elimina la llista.',
  'help.guide.edit-list.step.1': 'Fes clic a Editar a la capçalera de la llista. Només el propietari ho veu.',
  'help.guide.edit-list.step.2':
    'Canvia el que vulguis i fes clic a Desar. Eliminar llista, a baix a l’esquerra, elimina la llista amb tots els seus llocs, després d’una confirmació.',
  'help.guide.edit-list.result': 'La capçalera agafa el nou color, la portada i la descripció de seguida.',
  'help.guide.edit-list.tip.1':
    'Eliminar una llista no es pot desfer. Exporta-la abans si vols conservar-ne una còpia.',
  // all-saved
  'help.guide.all-saved.title': 'Cercar a tota la teva biblioteca',
  'help.guide.all-saved.goal': 'Mira d’un cop totes les llistes que són teves.',
  'help.guide.all-saved.step.1':
    'Fes clic a Tot el desat a la barra de llistes. Uneix els llocs de cada llista que tens en propietat o en copropietat.',
  'help.guide.all-saved.step.2':
    'Fes servir el quadre de cerca i els filtres com a qualsevol llista; Triar també funciona aquí per copiar a un viatge.',
  'help.guide.all-saved.result':
    'Una sola vista sobre tots els teus llocs desats, sense afegir ni importar, ja que no hi ha cap llista concreta on posar-los.',
  'help.guide.all-saved.tip.1':
    'Les etiquetes són per llista, així que el filtre d’etiquetes no s’ofereix a Tot el desat.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Travesia',
  'help.ctx.journey.summary':
    'Travesia és el teu diari de viatge amb les fotos al davant. Cada travesia està lligada a un o més viatges i creix dia a dia a partir d’entrades amb relat, fotos, estat d’ànim i temps. Aquesta pantalla llista les teves travesies; obre’n una per escriure.',
  'help.ctx.journey.bullet.1':
    'El bàner de dalt mostra la travesia en curs, o la més recent, amb els seus recomptes d’entrades, fotos i llocs. Continua escrivint l’obre al dia d’avui.',
  'help.ctx.journey.bullet.2':
    'A sota, una targeta per travesia amb la portada, el subtítol, les dates i els recomptes. Fes clic en una targeta per obrir-la.',
  'help.ctx.journey.bullet.3':
    'L’última targeta de la graella, Crea una travesia nova, en comença una a partir dels teus viatges.',
  // create-journey
  'help.guide.create-journey.title': 'Crear una travesia',
  'help.guide.create-journey.goal':
    'Començar un diari per a un viatge, amb els llocs del viatge ja esperant com a suggeriments.',
  'help.guide.create-journey.step.1': 'Fes clic a Crea una travesia nova, l’última targeta de la graella.',
  'help.guide.create-journey.step.2':
    'Posa-li un nom i, si vols, un subtítol, i marca els viatges als quals pertany. El comptador diu quants llocs hi entraran.',
  'help.guide.create-journey.step.3': 'Fes clic a Crea una travesia.',
  'help.guide.create-journey.result':
    'El diari s’obre. Cada lloc dels viatges vinculats és a la cronologia com a suggeriment, un per cada dia en què es troba, a punt per escriure-hi.',
  'help.guide.create-journey.tip.1': 'Més viatges es poden vincular després des de Configuració de la travesia.',
  'help.guide.create-journey.tip.2':
    'Una travesia sense viatges també funciona; aleshores afegeixes les entrades a mà.',
  // open-journey
  'help.guide.open-journey.title': 'Obrir una travesia',
  'help.guide.open-journey.goal': 'Entrar en un diari, i saber on s’obre.',
  'help.guide.open-journey.step.1':
    'Fes clic en una targeta. Cadascuna mostra la portada, les dates i quantes entrades, fotos i llocs conté la travesia.',
  'help.guide.open-journey.result':
    'Una travesia en curs s’obre al dia d’avui, o a l’última entrada abans d’avui quan encara no hi ha res escrit; una d’acabada s’obre al principi.',
  'help.guide.open-journey.tip.1':
    'La portada és la primera foto de la travesia, tret que en fixis una a Configuració de la travesia.',
  // continue-writing
  'help.guide.continue-writing.title': 'Continuar la travesia en curs',
  'help.guide.continue-writing.goal': 'Anar directament a la pàgina d’avui de la travesia en què ets.',
  'help.guide.continue-writing.step.1':
    'Fes clic a Continua escrivint al bàner de dalt. Mostra la travesia en curs, o la més recent quan no n’hi ha cap.',
  'help.guide.continue-writing.result':
    'El diari s’obre al dia d’avui, o a l’última entrada abans d’avui quan encara no hi ha res escrit.',
  'help.guide.continue-writing.tip.1':
    'El bàner també ofereix un suggeriment per a un viatge que encara no té travesia; Descarta l’amaga.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Diari',
  'help.ctx.journey-detail.summary':
    'Una travesia oberta: la cronologia a l’esquerra, dia a dia, i el mapa a la dreta amb cada entrada i els llocs dels viatges vinculats. Tot el que afegeix al diari és a dalt; la capçalera té els recomptes, Studio, l’interruptor de suggeriments i Configuració de la travesia.',
  'help.ctx.journey-detail.bullet.1':
    'Capçalera: portada, títol i subtítol, els recomptes de dies, llocs, entrades i fotos, i a la dreta Studio, l’interruptor de suggeriments i Configuració de la travesia.',
  'help.ctx.journey-detail.bullet.2':
    'Barra d’eines: les pestanyes Cronologia i Galeria, Cerca en aquest viatge i Afegeix una entrada.',
  'help.ctx.journey-detail.bullet.3':
    'Cronologia: una secció per dia amb un + per afegir una entrada aquell dia; targetes d’entrada amb fotos, estat d’ànim, temps i relat; suggeriments dels viatges en un estil més clar, amb Descarta aquest suggeriment.',
  'help.ctx.journey-detail.bullet.4':
    'Mapa: les entrades com a xinxetes, unides per ordre de data amb una línia discontínua, els llocs dels viatges i les traces GPX importades en aquests viatges.',
  'help.ctx.journey-detail.bullet.5':
    'Configuració de la travesia: portada, nom i subtítol, traces al mapa, camps de l’entrada, suggeriments descartats, viatges vinculats, col·laboradors, compartició pública, arxivar i eliminar.',
  'help.ctx.journey-detail.bullet.6':
    'Dos botons rodons suren sobre una cronologia llarga: tornar a dalt i saltar a l’última entrada.',
  // add-entry
  'help.guide.add-entry.title': 'Escriure una entrada',
  'help.guide.add-entry.goal': 'Afegir el relat d’un dia amb títol, text, estat d’ànim i temps.',
  'help.guide.add-entry.step.1':
    'Fes clic a Afegeix una entrada a la barra d’eines, o al + de la capçalera d’un dia per començar aquell dia.',
  'help.guide.add-entry.step.2':
    'Posa nom al moment i escriu el relat. La barra sobre el text afegeix negreta, cursiva, títols, cites, enllaços i llistes en Markdown.',
  'help.guide.add-entry.step.3':
    'Tria un estat d’ànim i el temps, comprova la data i fixa una ubicació si vols: cerca un lloc o fes servir la teva posició actual.',
  'help.guide.add-entry.step.4': 'Fes clic a Desar.',
  'help.guide.add-entry.result':
    'L’entrada apareix al seu dia a la cronologia i com a xinxeta al mapa. Els seus recomptes s’actualitzen a la capçalera.',
  'help.guide.add-entry.tip.1': 'Escriure en un suggeriment és el mateix editor, amb el lloc ja posat.',
  'help.guide.add-entry.tip.2':
    'Les etiquetes de baix són text lliure, joia amagada o millor menjar, i la cerca les troba.',
  // entry-photos
  'help.guide.entry-photos.title': 'Afegir fotos i vídeos a una entrada',
  'help.guide.entry-photos.goal': 'Posar imatges en un dia; la primera es converteix en la portada de l’entrada.',
  'help.guide.entry-photos.step.1': 'Obre el menú d’una entrada amb el ⋯ de la seva targeta i tria Editar.',
  'help.guide.entry-photos.step.2':
    'Fes clic a Puja fotos i tria els fitxers. Des de la galeria agafa imatges que ja són a la galeria de la travesia; External photos cerca aquell dia en una biblioteca Immich o Synology connectada.',
  'help.guide.entry-photos.step.3':
    'Passa el ratolí per una imatge per Fes 1r i triar la portada, després fes clic a Desar.',
  'help.guide.entry-photos.result':
    'Les fotos es veuen a la targeta i a la galeria; la primera és la miniatura a tot arreu.',
  'help.guide.entry-photos.tip.1':
    'Els vídeos van en una entrada de la mateixa manera: mp4, m4v, webm o mov fins a 500 MB, desats tal com es pugen.',
  'help.guide.entry-photos.tip.2':
    'Els fitxers HEIC d’un iPhone es converteixen a JPEG en pujar-los, cosa que n’elimina les metadades de GPS i càmera.',
  // suggestions
  'help.guide.suggestions.title': 'Usar o descartar els suggeriments',
  'help.guide.suggestions.goal':
    'Convertir els llocs dels teus viatges en entrades, i treure del mig aquells sobre els quals no escriuràs.',
  'help.guide.suggestions.step.1':
    'Un suggeriment és una targeta més clara amb el nom del lloc en cursiva. Fes-hi clic per obrir l’editor amb el lloc i el dia ja posats.',
  'help.guide.suggestions.step.2':
    'Fes clic a Descarta aquest suggeriment en una targeta que no faràs servir. Surt de la cronologia sense esborrar-se, i la sincronització del viatge no el tornarà a oferir.',
  'help.guide.suggestions.step.3':
    'Has canviat d’idea? Configuració de la travesia mostra quants n’hi ha de descartats, i Recupera els suggeriments descartats els retorna tots.',
  'help.guide.suggestions.result':
    'La cronologia només conté el que penses escriure; l’interruptor de la capçalera amaga tots els suggeriments de cop mentre llegeixes.',
  'help.guide.suggestions.tip.1': 'Un lloc mantingut durant dos dies dona un suggeriment a cadascun.',
  'help.guide.suggestions.tip.2':
    'Els suggeriments mai no compten a les estadístiques; només compten les entrades escrites.',
  // add-on-day
  'help.guide.add-on-day.title': 'Afegir una entrada en un dia anterior',
  'help.guide.add-on-day.goal': 'Escriure sobre un dia que ja ha passat sense corregir la data després.',
  'help.guide.add-on-day.step.1': 'Fes clic al + de la capçalera d’aquell dia.',
  'help.guide.add-on-day.step.2': 'L’editor s’obre amb aquella data posada. Escriu i Desar com sempre.',
  'help.guide.add-on-day.result': 'L’entrada cau directament al dia correcte.',
  'help.guide.add-on-day.tip.1': 'Dins d’un dia, les fletxes del menú d’una entrada la mouen abans o després.',
  // pros-cons
  'help.guide.pros-cons.title': 'Afegir un veredicte',
  'help.guide.pros-cons.goal': 'Resumir un dia amb el que va ser genial i el que no.',
  'help.guide.pros-cons.step.1':
    'A l’editor, busca Pros i contres sota el relat. Escriu un punt a Pros o Contres i fes servir Afegeix-ne un altre per al següent.',
  'help.guide.pros-cons.step.2': 'Desar. El veredicte apareix a la targeta com dues llistes curtes.',
  'help.guide.pros-cons.result': 'Polze amunt i polze avall d’un cop d’ull, sota el relat.',
  'help.guide.pros-cons.tip.1':
    'Una travesia que no fa servir veredictes pot apagar la secció a Camps de l’entrada, a Configuració de la travesia.',
  // search-journey
  'help.guide.search-journey.title': 'Trobar alguna cosa en un diari llarg',
  'help.guide.search-journey.goal': 'Arribar a l’entrada que busques sense desplaçar-te per setmanes.',
  'help.guide.search-journey.step.1':
    'Escriu a Cerca en aquest viatge, a la barra d’eines. La cronologia es filtra mentre escrius, en títols, relats, llocs i etiquetes. Els accents i les majúscules no importen.',
  'help.guide.search-journey.step.2':
    'L’interruptor de suggeriments de la capçalera amaga les targetes sense escriure mentre llegeixes. Quan la cronologia es fa llarga, dos botons rodons suren sobre la vora inferior: tornar a dalt i saltar a l’última entrada.',
  'help.guide.search-journey.result':
    'Només queden les entrades que coincideixen; buida el quadre per tornar-ho a veure tot.',
  'help.guide.search-journey.tip.1':
    'Una travesia en curs s’obre al dia d’avui, així que la pàgina actual sol estar ja a la vista.',
  'help.guide.search-journey.tip.2':
    'Les etiquetes també compten: cercar joia amagada troba cada entrada etiquetada així.',
  // gallery-map
  'help.guide.gallery-map.title': 'Recórrer la galeria i el mapa',
  'help.guide.gallery-map.goal': 'Veure tota la travesia com a imatges, i com a llocs al mapa.',
  'help.guide.gallery-map.step.1':
    'Canvia a Galeria a la barra d’eines: cada foto de cada entrada, més les imatges pujades directament a la galeria. Fes clic en una per al visor.',
  'help.guide.gallery-map.step.2':
    'El mapa de la dreta mostra les entrades com a xinxetes per ordre de data, els llocs dels viatges vinculats i qualsevol traça GPX importada en aquests viatges, amb el color que té al planificador.',
  'help.guide.gallery-map.result':
    'Passa el ratolí per una traça per veure’n el nom. La línia discontínua entre entrades la dibuixa TREK; una traça és el recorregut que vas enregistrar de debò.',
  'help.guide.gallery-map.tip.1': 'Les traces es poden apagar per a una travesia a Configuració de la travesia.',
  'help.guide.gallery-map.tip.2':
    'Les fotos de la galeria amb ubicació també apareixen al mapa públic, quan Galeria i Mapa es comparteixen tots dos.',
  // entry-fields
  'help.guide.entry-fields.title': 'Apagar camps de l’entrada',
  'help.guide.entry-fields.goal': 'Limitar l’editor al que fa servir aquesta travesia.',
  'help.guide.entry-fields.step.1': 'Obre Configuració de la travesia des de la capçalera.',
  'help.guide.entry-fields.step.2': 'A Camps de l’entrada, apaga Estat d’ànim, Temps o Pros i contres.',
  'help.guide.entry-fields.result':
    'L’editor deixa de demanar-los. Res del que has escrit es perd: tornar a encendre un camp porta a la vista els valors desats, i una travesia compartida amaga els mateixos camps.',
  'help.guide.entry-fields.tip.1':
    'Els interruptors són per travesia, així que un viatge de feina i unes vacances poden diferir.',
  // link-trip
  'help.guide.link-trip.title': 'Vincular un altre viatge',
  'help.guide.link-trip.goal': 'Portar els llocs d’un segon viatge al diari com a suggeriments.',
  'help.guide.link-trip.step.1': 'Obre Configuració de la travesia des de la capçalera.',
  'help.guide.link-trip.step.2': 'Sota els viatges vinculats, fes clic a Afegeix un viatge.',
  'help.guide.link-trip.step.3': 'Tria el viatge.',
  'help.guide.link-trip.result':
    'Els seus llocs arriben a la cronologia com a suggeriments als seus dies, i les seves traces GPX s’afegeixen al mapa.',
  'help.guide.link-trip.tip.1':
    'La × al costat d’un viatge vinculat el desvincula de nou; les entrades que vas escriure es queden.',
  'help.guide.link-trip.tip.2':
    'Les entrades d’un dia compten només una vegada, per molts viatges que cobreixin aquell dia.',
  // share-public
  'help.guide.share-public.title': 'Compartir la travesia públicament',
  'help.guide.share-public.goal': 'Donar a gent sense compte de TREK un enllaç de només lectura.',
  'help.guide.share-public.step.1': 'Obre Configuració de la travesia i busca Compartició pública.',
  'help.guide.share-public.step.2': 'Fes clic a Crea un enllaç per compartir.',
  'help.guide.share-public.step.3':
    'Tria què veuen els visitants: Cronologia, Galeria i Mapa són interruptors separats. Copia posa l’enllaç al teu porta-retalls.',
  'help.guide.share-public.result':
    'Qui tingui l’enllaç veu les seccions activades i res més; els camps que vas apagar a Camps de l’entrada també hi queden amagats.',
  'help.guide.share-public.tip.1':
    'Les fotos apareixen al mapa públic només quan Galeria i Mapa estan tots dos encesos; amb Mapa apagat, les seves coordenades s’eliminen abans de sortir del servidor.',
  'help.guide.share-public.tip.2': 'Elimina l’enllaç al mateix lloc per acabar de compartir.',
  // contributors
  'help.guide.contributors.title': 'Escriure junts',
  'help.guide.contributors.goal': 'Deixar que un company de viatge afegeixi les seves pròpies entrades i fotos.',
  'help.guide.contributors.step.1': 'Obre Configuració de la travesia i baixa fins als col·laboradors.',
  'help.guide.contributors.step.2': 'Fes clic a Convida un col·laborador i cerca l’usuari per nom o correu.',
  'help.guide.contributors.step.3': 'Tria un rol i confirma.',
  'help.guide.contributors.result':
    'La travesia apareix a la seva llista i les seves entrades porten el seu nom. Treu un col·laborador amb la × del costat.',
  'help.guide.contributors.tip.1':
    'Els col·laboradors són per a gent d’aquest TREK. Per a tots els altres hi ha l’enllaç públic.',
  // studio
  'help.guide.studio.title': 'Maquetar la travesia com un àlbum de fotos',
  'help.guide.studio.goal': 'Convertir el diari en pàgines imprimibles.',
  'help.guide.studio.step.1': 'Fes clic a Studio a la capçalera. El dissenyador s’obre damunt de la travesia.',
  'help.guide.studio.step.2':
    'El nom de la travesia a l’esquerra de la barra superior és el camí de tornada; et deixa on eres.',
  'help.guide.studio.result':
    'La tira de pàgines a l’esquerra, la doble pàgina a la taula de treball, les propietats a la dreta. Auto layout construeix l’àlbum a partir de les teves entrades; Export genera un PDF a punt per imprimir.',
  'help.guide.studio.tip.1': 'Studio necessita una finestra d’almenys 1024 px d’amplada i no s’ofereix al mòbil.',
  'help.guide.studio.tip.2':
    'L’àlbum hereta l’accés de la travesia: qui pot llegir la travesia pot obrir-lo, qui pot editar-la pot desar.',
  // archive-journey
  'help.guide.archive-journey.title': 'Arxivar o eliminar una travesia',
  'help.guide.archive-journey.goal': 'Tancar una travesia acabada, o treure’n una per sempre.',
  'help.guide.archive-journey.step.1': 'Obre Configuració de la travesia.',
  'help.guide.archive-journey.step.2':
    'A baix de tot, Arxiva el viatge l’acaba i la marca com a arxivada; Restaura el viatge la torna. Eliminar la treu amb totes les entrades i fotos, després d’una confirmació.',
  'help.guide.archive-journey.result':
    'Una travesia arxivada continua sent llegible i compartible; només deixa d’obrir-se al dia d’avui.',
  'help.guide.archive-journey.tip.1':
    'Eliminar no es pot desfer, i no toca els viatges als quals la travesia estava vinculada.',
  'help.guide.archive-journey.tip.2': 'La portada, el nom i el subtítol són al mateix diàleg, a dalt.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio maqueta una travesia com un llibre de fotos imprimible. S’obre sobre el diari: la llista de pàgines i el contingut a l’esquerra, la doble pàgina en què treballes al mig, les seves propietats a la dreta. Auto layout construeix un primer esborrany a partir de les teves entrades; tot el que ve després és teu per moure, retallar i canviar d’estil, amb desfer per a cada pas.',
  'help.ctx.journey-studio.bullet.1':
    'Barra superior: Back to the journey, Book view, Undo i Redo, Page format, Auto layout i Export. La marca Desat al costat del títol et diu quan el llibre està emmagatzemat.',
  'help.ctx.journey-studio.bullet.2':
    'Columna a l’esquerra amb cinc seccions: Pages, Content (les fotos i entrades de la travesia), Elements (text, formes, línies, graelles, marcs, icones), Viatge (mapes, països, banderes i marques construïdes a partir de la travesia) i Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Taula de treball: la doble pàgina actual amb el sagnat i els marges de seguretat, la barra de zoom a sota, Fit to view i Baixa aquesta doble pàgina a la dreta.',
  'help.ctx.journey-studio.bullet.4':
    'Properties a la dreta: posició i mida, retall i punt focal, emplenar o ajustar, look, cantonades, marc, ordre d’apilament i bloqueig del que hi ha seleccionat; números de pàgina i el document quan no hi ha res.',
  'help.ctx.journey-studio.bullet.5':
    'El llibre té la forma d’un d’enquadernat: coberta, una primera pàgina solta, les dobles pàgines, una última pàgina solta i la contracoberta. Els números de pàgina compten des de la primera pàgina i s’imprimeixen tal com es mostren.',
  'help.ctx.journey-studio.bullet.6':
    'Diverses persones poden dissenyar alhora: cadascú veu els punters dels altres amb els seus noms, i desar sobre una versió que algú altre ha canviat torna com un conflicte en lloc de sobreescriure la seva feina.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Construir el llibre automàticament',
  'help.guide.studio-auto-layout.goal':
    'Aconsegueix amb un clic un primer esborrany complet a partir de les entrades i fotos del diari.',
  'help.guide.studio-auto-layout.step.1': 'Fes clic a Auto layout a la barra superior.',
  'help.guide.studio-auto-layout.step.2':
    'Tria Tot el llibre: substitueix totes les pàgines i conserva el teu títol i la configuració de pàgina. Aquesta pàgina només reconstrueix la que hi ha a la pantalla, i s’ofereix en una doble pàgina que ha sortit d’una entrada.',
  'help.guide.studio-auto-layout.step.3':
    'Repassa la llista de pàgines. Undo retorna tot el disseny si preferies el que tenies.',
  'help.guide.studio-auto-layout.result':
    'Una doble pàgina per entrada, en ordre, amb les fotos, el títol i la història col·locats per tu. Cada element continua seguint la seva entrada fins que l’edites.',
  'help.guide.studio-auto-layout.tip.1': 'Les dues opcions són passos de desfer normals, així que prova-les sense por.',
  'help.guide.studio-auto-layout.tip.2':
    'Un element que Auto layout ha lligat a una entrada segueix els canvis d’aquesta entrada fins que el toques a Properties; això trenca el vincle.',
  // studio-pages
  'help.guide.studio-pages.title': 'Afegir, moure i treure dobles pàgines',
  'help.guide.studio-pages.goal': 'Dona forma al llibre pàgina a pàgina.',
  'help.guide.studio-pages.step.1':
    'Obre Pages a la columna. Les miniatures són el llibre en ordre: coberta, primera pàgina, dobles pàgines, última pàgina, contracoberta.',
  'help.guide.studio-pages.step.2':
    'Afegeix una pàgina, a baix, en posa una de nova abans de l’última pàgina; el + entre dues miniatures n’insereix una just allà.',
  'help.guide.studio-pages.step.3':
    'Passa el ratolí per una miniatura per veure’n les accions: Mou abans, Mou després, Duplica la pàgina i Elimina la pàgina. Fes clic en una miniatura per obrir aquella doble pàgina a la taula de treball.',
  'help.guide.studio-pages.result':
    'La coberta, la primera i l’última pàgina i la contracoberta es queden on són; les dobles pàgines noves sempre cauen entremig.',
  'help.guide.studio-pages.tip.1':
    'Book view a la barra superior mostra tot el llibre en fulls, tal com s’enquadernarà.',
  'help.guide.studio-pages.tip.2': 'Els números de pàgina s’activen sota Document a Properties, sense res seleccionat.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Aplicar un layout a una doble pàgina',
  'help.guide.studio-layouts.goal': 'Dona a una doble pàgina una disposició a punt de marcs de foto i text.',
  'help.guide.studio-layouts.step.1':
    'Obre Layouts a la columna. Tretze layouts de doble pàgina i un joc a part per a la coberta, la contracoberta i les pàgines soltes.',
  'help.guide.studio-layouts.step.2':
    'Fes clic en un. La doble pàgina de la taula de treball n’agafa els marcs; les fotos i el text que ja tenies s’hi aboquen.',
  'help.guide.studio-layouts.result':
    'Els marcs buits esperen contingut: arrossega-hi una foto des de Content, o fes servir Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Un layout és un pas de desfer com qualsevol altre.',
  // studio-content
  'help.guide.studio-content.title': 'Posar fotos i entrades en una pàgina',
  'help.guide.studio-content.goal': 'Porta el material propi de la travesia a la doble pàgina.',
  'help.guide.studio-content.step.1':
    'Obre Content a la columna. Photos llista cada imatge de la travesia; Entries llista les entrades amb el seu text.',
  'help.guide.studio-content.step.2':
    'Arrossega una foto a la doble pàgina, o a un marc buit, o fes clic a Add to this page a sota. Puja fotos afegeix imatges que encara no són a la travesia.',
  'help.guide.studio-content.step.3':
    'Sota una entrada, Title, Story i Place posen aquell text a la pàgina com a element de text; Data i les coordenades arriben com a marques, i les fotos de l’entrada apareixen llistades allà mateix.',
  'help.guide.studio-content.result':
    'Una foto deixada anar es converteix en un element de foto; el text continua seguint l’entrada fins que l’edites.',
  'help.guide.studio-content.tip.1': 'El quadre de cerca a dalt de Content filtra les dues llistes.',
  'help.guide.studio-content.tip.2':
    'Deixar anar un fitxer des de l’escriptori a la taula de treball el puja i el col·loca d’un sol cop.',
  // studio-elements
  'help.guide.studio-elements.title': 'Afegir text, formes i icones',
  'help.guide.studio-elements.goal': 'Decora una doble pàgina més enllà de fotos i històries.',
  'help.guide.studio-elements.step.1': 'Obre Elements a la columna.',
  'help.guide.studio-elements.step.2':
    'Fes clic en un estil de text per a un titular o un peu, una forma, una línia, una graella, un marc buit amb un estil de marc o una icona de la biblioteca amb cercador. Cadascun cau al mig de la doble pàgina, a punt per moure.',
  'help.guide.studio-elements.result':
    'Fes doble clic en un element de text per escriure-hi; Properties conté tipus de lletra, pes, mida, espaiat i alineació.',
  'help.guide.studio-elements.tip.1': 'Els marcs són espais de foto buits: deixa-hi anar una imatge més tard.',
  // studio-travel
  'help.guide.studio-travel.title': 'Afegir un mapa, banderes i xifres',
  'help.guide.studio-travel.goal': 'Converteix la travesia mateixa en xifres sobre la pàgina.',
  'help.guide.studio-travel.step.1': 'Obre Viatge a la columna.',
  'help.guide.studio-travel.step.2':
    'Tria què afegir: un mapa del recorregut de les entrades, siluetes de països, una llista o graella de països, banderes, una marca de data, de dia o de distància, o un resum de tot el viatge. Cadascun es construeix amb les dades de la travesia i s’actualitza amb elles.',
  'help.guide.studio-travel.result':
    'L’element apareix a la doble pàgina; Properties n’ajusta l’estil, i al mapa l’àrea.',
  'help.guide.studio-travel.tip.1':
    'Les marques segueixen l’entrada d’on ha sortit la doble pàgina, així que una marca de data en una doble pàgina maquetada automàticament ja mostra aquell dia.',
  // studio-properties
  'help.guide.studio-properties.title': 'Editar el que has seleccionat',
  'help.guide.studio-properties.goal': 'Mou, retalla, dona estil i apila un element amb l’inspector.',
  'help.guide.studio-properties.step.1':
    'Fes clic en un element de la doble pàgina. Apareixen nanses per a la mida i la rotació; arrossega’l per moure’l.',
  'help.guide.studio-properties.step.2':
    'Properties a la dreta segueix la selecció: posició i mida, Crop amb el punt focal que decideix què queda dins del marc, Fill o Fit, els filtres de Look, el radi a Corner, l’estil a Marc, l’ordre d’apilament i Lock.',
  'help.guide.studio-properties.step.3':
    'Duplica i Delete són a dalt de l’inspector; Undo a la barra superior reverteix qualsevol d’aquests canvis.',
  'help.guide.studio-properties.result':
    'Un element bloquejat ja no es pot agafar a la pàgina, cosa que manté segur un disseny acabat mentre hi treballes al voltant.',
  'help.guide.studio-properties.tip.1': 'Maj+clic selecciona diversos elements; l’inspector els edita llavors junts.',
  'help.guide.studio-properties.tip.2':
    'Editar un element que Auto layout ha col·locat trenca el seu vincle amb l’entrada; deixa de seguir els canvis posteriors d’aquesta entrada.',
  // studio-format
  'help.guide.studio-format.title': 'Triar el format de pàgina',
  'help.guide.studio-format.goal': 'Fixa la mida a què s’imprimirà el llibre, abans que el disseny en depengui.',
  'help.guide.studio-format.step.1': 'Fes clic a Page format a la barra superior.',
  'help.guide.studio-format.step.2':
    'Tria Square 21 × 21 cm, Square 30 × 30 cm, A4 o A5 landscape o portrait, o introdueix una amplada i una alçada pròpies en mil·límetres. Sagnat i Seguretat són just a sota.',
  'help.guide.studio-format.result':
    'Cada doble pàgina es dibuixa a aquesta mida, amb 3 mm de sagnat i 5 mm de marge de seguretat per defecte.',
  'help.guide.studio-format.tip.1':
    'Canvia primer el format i després executa Auto layout; el disseny es construeix per a la mida que troba.',
  'help.guide.studio-format.tip.2': 'Demana a la teva impremta els seus valors de sagnat i seguretat i introdueix-los.',
  // studio-export
  'help.guide.studio-export.title': 'Exportar el llibre com a PDF',
  'help.guide.studio-export.goal': 'Aconsegueix un fitxer a punt per imprimir, o un per llegir en pantalla.',
  'help.guide.studio-export.step.1': 'Fes clic a Export a la barra superior.',
  'help.guide.studio-export.step.2':
    'Tria Pàgines soltes, una pàgina per full en ordre de lectura, que és el que vol una impremta, o Doble pàgina, dues pàgines alhora tal com s’obre el llibre. Marques de tall afegeix el sagnat a cada vora i marca per on tallar.',
  'help.guide.studio-export.step.3':
    'Fes clic a Vista d’impressió. El navegador obre les pàgines i Desa com a PDF les converteix en el fitxer.',
  'help.guide.studio-export.result':
    'Un PDF amb tants fulls com ha anunciat el diàleg, en el format de pàgina que has fixat.',
  'help.guide.studio-export.tip.1': 'Crear el PDF només es pot fer a l’escriptori, com Studio mateix.',
  'help.guide.studio-export.tip.2':
    'Per a una prova, exporta Doble pàgina sense marques de tall; per a la impremta, Pàgines soltes amb marques.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Reutilitzar una doble pàgina en un altre llibre',
  'help.guide.studio-spread-file.goal': 'Emporta’t un disseny que t’agrada del llibre d’una travesia a un altre.',
  'help.guide.studio-spread-file.step.1':
    'Amb la doble pàgina a la taula de treball, fes clic a Baixa aquesta doble pàgina a l’extrem dret de la barra de zoom. El fitxer conté el disseny, no les fotografies.',
  'help.guide.studio-spread-file.step.2':
    'A l’altre llibre, obre Pages i fes clic a Importa al costat d’Afegeix una pàgina, i després tria el fitxer.',
  'help.guide.studio-spread-file.result':
    'La doble pàgina arriba amb els seus marcs i estils de text; deixa anar les fotos de la nova travesia als marcs.',
  'help.guide.studio-spread-file.tip.1': 'Un fitxer que no és un disseny de doble pàgina es rebutja amb un motiu.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Configuració',
  'help.ctx.settings.summary':
    'La teva configuració personal, una pestanya per tema a la barra lateral de l’esquerra. La majoria d’interruptors s’apliquen en el moment que els canvies; un formulari amb un botó Desar a baix l’espera. Res d’aquí no canvia el TREK de ningú més.',
  'help.ctx.settings.bullet.1':
    'Barra lateral esquerra: Pantalla, Aparença, Mapa, Notificacions, Integracions, Fora de línia i Compte. Connectors apareix quan n’hi ha un d’instal·lat, Quant a en un TREK autoallotjat.',
  'help.ctx.settings.bullet.2':
    'Pantalla és idioma, unitats, divisa i amb què s’obre l’app; Aparença és tema, colors, mida del text i els ginys del tauler.',
  'help.ctx.settings.bullet.3':
    'Mapa tria el motor de renderització i el seu estil; Notificacions els canals que t’arriben; Integracions biblioteques de fotos, claus API i MCP; Fora de línia el que l’app guarda en aquest dispositiu.',
  'help.ctx.settings.bullet.4':
    'Compte conté el teu perfil, contrasenya, autenticació de dos factors, passkeys i l’eliminació del teu compte.',
  'help.ctx.settings-display.title': 'Pantalla',
  'help.ctx.settings-display.summary':
    'Idioma, unitats i divisa, com es comporten el mapa i les reserves, i amb què s’obre TREK. Cada canvi aquí s’aplica a l’instant.',
  'help.ctx.settings-display.bullet.1':
    'Idioma i regió: l’idioma de la interfície, el format d’hora, la divisa de visualització, i les unitats de distància i temperatura.',
  'help.ctx.settings-display.bullet.2':
    'Viatge i mapa: rutes de reserva sempre al mapa, la píndola Explora llocs, optimització de la ruta des del teu allotjament, codis de reserva difuminats i rutes de reserva etiquetades.',
  'help.ctx.settings-display.bullet.3':
    'Inici: si TREK s’obre al tauler o al viatge actiu, i quina pestanya d’un viatge surt primer.',
  'help.ctx.settings-appearance.title': 'Aparença',
  'help.ctx.settings-appearance.summary':
    'Com es veu TREK en aquest compte: clar o fosc, el color d’accent, vidre i moviment, mida del text, i quins ginys mostra el tauler. Tot s’aplica en viu, a cada dispositiu on inicies sessió.',
  'help.ctx.settings-appearance.bullet.1':
    "Tema: Clar, Fosc o Automàtic, i l’Esquema de colors amb un Color d'accent personalitzat teu.",
  'help.ctx.settings-appearance.bullet.2':
    'Llegibilitat: Transparència, Reduir el moviment, Densitat i Mida del text, amb mides avançades per nivell.',
  'help.ctx.settings-appearance.bullet.3':
    'Ginys del tauler: un interruptor per giny, per separat per a Escriptori i Mòbil.',
  'help.ctx.settings-appearance.bullet.4': 'Restablir valors per defecte a baix ho torna tot al seu lloc.',
  'help.ctx.settings-map.title': 'Mapa',
  'help.ctx.settings-map.summary':
    'Quin motor dibuixa els mapes i amb quin estil. Leaflet és el mapa ràster clàssic, MapLibre dibuixa tessel·les vectorials sense cap token, Mapbox hi afegeix edificis 3D i relleu amb el teu propi token.',
  'help.ctx.settings-map.bullet.1':
    'Proveïdor de mapa: Leaflet, MapLibre o Mapbox, cadascun amb una línia sobre què necessita.',
  'help.ctx.settings-map.bullet.2':
    'Estil de mapa i Plantilla del mapa: l’aspecte de les tessel·les, més el token o la clau que demana un proveïdor.',
  'help.ctx.settings-map.bullet.3':
    "Mode d'alta qualitat per a l’antialiàsing i la projecció de globus; Desa el mapa escriu la tria.",
  'help.ctx.settings-notifications.title': 'Notificacions',
  'help.ctx.settings-notifications.summary':
    'On et troba TREK fora de l’app: un tema de ntfy, un webhook o un canal que aporta un connector. Sota els canals, una fila per esdeveniment decideix què va on.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: el tema, un servidor propi opcional i un token d’accés opcional, amb Prova per enviar-ne un a l’instant.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: una URL que rep cada esdeveniment com a JSON, amb Prova.',
  'help.ctx.settings-notifications.bullet.3':
    'Les files de preferències: per esdeveniment, quin canal està actiu. Els canals de connectors mostren Configura fins que estan configurats.',
  'help.ctx.settings-integrations.title': 'Integracions',
  'help.ctx.settings-integrations.summary':
    'Tot el que es connecta a TREK des de fora: biblioteques de fotos per a la travesia, claus API per a scripts, i l’endpoint MCP amb els seus tokens i clients OAuth per a assistents d’IA.',
  'help.ctx.settings-integrations.bullet.1':
    'Proveïdors de fotos: Immich i Synology Photos, cadascun amb la seva URL i clau, Prova la connexió i Desar.',
  'help.ctx.settings-integrations.bullet.2':
    'Claus API: claus personals per a scripts i altres eines que criden l’API de TREK en nom teu.',
  'help.ctx.settings-integrations.bullet.3':
    'Configuració MCP: l’endpoint, una configuració de client a punt per copiar, i els tokens API.',
  'help.ctx.settings-integrations.bullet.4':
    'Clients OAuth 2.1: apps que inicien sessió a través de TREK, amb URIs de redirecció, àmbits permesos, clients de màquina i les sessions actives.',
  'help.ctx.settings-offline.title': 'Fora de línia',
  'help.ctx.settings-offline.summary':
    'El que TREK guarda en aquest dispositiu perquè un viatge s’obri igualment sense connexió, i què passa quan un canvi fet fora de línia xoca amb un de fet en un altre lloc.',
  'help.ctx.settings-offline.bullet.1':
    'Mode fora de línia: Forçar mode fora de línia fa que l’app es comporti com si la xarxa hagués desaparegut, per provar o en una connexió amb dades limitades.',
  'help.ctx.settings-offline.bullet.2':
    "Preparar per a l'ús fora de línia: Descarregar per a ús fora de línia baixa ara els teus viatges i les seves tessel·les de mapa.",
  'help.ctx.settings-offline.bullet.3':
    'Què desar fora de línia: tessel·les de mapa actives o no, i un interruptor per viatge.',
  'help.ctx.settings-offline.bullet.4':
    'Conflictes de sincronització i Memòria cau fora de línia: l’estratègia per a les col·lisions, el recompte de canvis pendents i fallits, Sincronitzar ara i Netejar memòria cau.',
  'help.ctx.settings-account.title': 'Compte',
  'help.ctx.settings-account.summary':
    'Qui ets en aquest TREK i com inicies sessió: perfil i avatar, contrasenya, autenticació de dos factors, passkeys, i al final de tot l’eliminació del compte.',
  'help.ctx.settings-account.bullet.1': 'Perfil: usuari, correu i avatar, desats amb Desa el perfil.',
  'help.ctx.settings-account.bullet.2':
    'Canvia la contrasenya: contrasenya actual, la nova dues vegades, Actualitza la contrasenya.',
  'help.ctx.settings-account.bullet.3':
    'Autenticació de dos factors (2FA) amb una app d’autenticació i codis de reserva; Passkeys per iniciar sessió sense contrasenya.',
  'help.ctx.settings-account.bullet.4':
    'Elimina el compte a baix, darrere d’una confirmació. L’últim admin no es pot eliminar a si mateix.',
  // language-region
  'help.guide.language-region.title': 'Definir idioma, unitats i divisa',
  'help.guide.language-region.goal': 'Fes que TREK parli la teva llengua i compti com tu.',
  'help.guide.language-region.step.1':
    'Tria l’idioma de la interfície a Idioma i regió. TREK canvia a l’instant, a cada dispositiu on inicies sessió.',
  'help.guide.language-region.step.2':
    'A sota, tria el format d’hora, la divisa de visualització, i les unitats de distància i temperatura.',
  'help.guide.language-region.result':
    'Dates, distàncies i diners es llegeixen com esperes; la divisa pròpia d’un viatge continua apareixent al costat dels imports convertits.',
  'help.guide.language-region.tip.1':
    'La divisa de visualització és per als totals entre viatges; cada viatge conserva la divisa que li vas donar.',
  'help.guide.language-region.tip.2': 'L’idioma també fixa els noms de dies i mesos a Vacay i a la travesia.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Ajustar com es comporten el mapa i les reserves',
  'help.guide.travel-map-prefs.goal': 'Decideix què mostra el mapa del viatge per defecte.',
  'help.guide.travel-map-prefs.step.1':
    "A Viatge i mapa, Mostra sempre les rutes de reserva manté vols i trens al mapa encara que el seu dia no estigui obert; Explora llocs al mapa mostra la píndola per trobar llocs; Optimitza la ruta des de l'allotjament comença la ruta on dorms.",
  'help.guide.travel-map-prefs.step.2':
    'Difumina els codis de reserva amaga els números de confirmació fins que hi passes el ratolí; Etiquetes de rutes de reserves escriu el nom de la reserva al llarg de la seva ruta.',
  'help.guide.travel-map-prefs.result':
    'El mapa del viatge segueix aquests ajustos a tots els viatges, fins que els tornis a canviar.',
  'help.guide.travel-map-prefs.tip.1':
    'Són per compte, no per viatge. Cada membre d’un viatge compartit veu les seves pròpies tries.',
  // startup
  'help.guide.startup.title': 'Triar amb què s’obre TREK',
  'help.guide.startup.goal': 'Aterra on més treballes, no al tauler cada vegada.',
  'help.guide.startup.step.1': "A Inici, posa Pàgina d'inici a Tauler o Viatge actiu.",
  'help.guide.startup.step.2': "Pestanya d'inici tria quina pestanya d’un viatge surt primer quan n’obres un.",
  'help.guide.startup.result': 'El proper inici de sessió i el proper toc al logo hi porten directament.',
  'help.guide.startup.tip.1': 'Viatge actiu és el viatge en curs avui, o el següent quan no n’hi ha cap.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Definir el tema i el color d’accent',
  'help.guide.theme-scheme.goal': 'Fes TREK clar, fosc o com el teu dispositiu, en el color que t’agradi.',
  'help.guide.theme-scheme.step.1': 'A Tema, tria Clar, Fosc o Automàtic. Automàtic segueix el teu dispositiu.',
  'help.guide.theme-scheme.step.2':
    'Tria un Esquema de colors: Per defecte, Alt contrast, Anil, Xarxet, Rosa, Ambre, Violeta o Personalitzat.',
  'help.guide.theme-scheme.step.3':
    'Amb Personalitzat, tria un accent dels predefinits o introdueix el teu. Una comprovació de contrast al costat diu si el text s’hi continua llegint.',
  'help.guide.theme-scheme.result':
    'Botons, enllaços i ressaltats prenen l’accent a tot arreu, a cada dispositiu on inicies sessió.',
  'help.guide.theme-scheme.tip.1':
    'La barra de navegació també té un interruptor ràpid clar o fosc; fixa el mateix tema.',
  'help.guide.theme-scheme.tip.2': 'Alt contrast és l’esquema a triar quan el per defecte es llegeix massa suau.',
  // readability
  'help.guide.readability.title': 'Ajustar la llegibilitat i la mida del text',
  'help.guide.readability.goal': 'Menys vidre, menys moviment, més espai o lletra més gran.',
  'help.guide.readability.step.1':
    'A Llegibilitat, Transparència canvia els panells de vidre per superfícies sòlides, Reduir el moviment redueix les animacions al mínim, i Densitat tria Còmode o Compacte.',
  'help.guide.readability.step.2':
    'Mida del text escala Tot d’una vegada; Mides de text avançades deixa que títols, subtítols, cos i peus difereixin.',
  'help.guide.readability.result': 'Tota l’app segueix a l’instant, inclosos els panells del mapa i la travesia.',
  'help.guide.readability.tip.1': 'Reduir el moviment també segueix l’ajust del teu sistema quan no el toques.',
  'help.guide.readability.tip.2':
    'La mida del text s’aplica a través dels nivells tipogràfics, així que res no es talla; una mida que ja no hi cap salta de línia.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Triar els ginys del tauler',
  'help.guide.dashboard-widgets.goal': 'Mostra només els ginys que fas servir, per separat a l’escriptori i al mòbil.',
  'help.guide.dashboard-widgets.step.1':
    'A Ginys del tauler, activa o desactiva cada giny per a Escriptori i per a Mòbil: la barra lateral dreta sencera, divisa, col·leccions, zones horàries, properes reserves, països de l’Atlas i les xifres de viatge.',
  'help.guide.dashboard-widgets.step.2': 'Restablir valors per defecte a baix torna tota la pestanya a com venia.',
  'help.guide.dashboard-widgets.result':
    'El tauler es reordena a l’instant; amb la barra lateral dreta apagada es centra.',
  'help.guide.dashboard-widgets.tip.1':
    'Els ginys d’un addon només apareixen mentre l’admin tingui aquell addon actiu.',
  'help.guide.dashboard-widgets.tip.2':
    'El mateix tauler recorda la teva vista de quadrícula o llista i l’ordre per dispositiu.',
  // map-provider
  'help.guide.map-provider.title': 'Triar el motor i l’estil del mapa',
  'help.guide.map-provider.goal': 'Canvia entre el mapa clàssic, les tessel·les vectorials i el mapa 3D de Mapbox.',
  'help.guide.map-provider.step.1':
    'A Proveïdor de mapa, tria Leaflet per al mapa 2D clàssic amb qualsevol tessel·la ràster, MapLibre per a tessel·les vectorials d’OpenFreeMap sense token, o Mapbox per a tessel·les vectorials amb edificis 3D i relleu.',
  'help.guide.map-provider.step.2':
    "Tria un Estil de mapa o una Plantilla del mapa per a l’aspecte. Mapbox necessita un Token d'accés de Mapbox, alguns estils ràster una Clau d'API de CARTO; l’enllaç al costat del camp porta on aconseguir-ne una.",
  'help.guide.map-provider.step.3':
    "Mode d'alta qualitat afegeix antialiàsing i la projecció de globus. Fes clic a Desa el mapa.",
  'help.guide.map-provider.result':
    'Cada mapa de TREK, viatges, Atlas, Col·leccions i la travesia, el dibuixa el motor que has triat.',
  'help.guide.map-provider.tip.1': 'Sense token, Mapbox recorre al mapa per defecte en lloc de no mostrar res.',
  'help.guide.map-provider.tip.2':
    'Les tessel·les de mapa que deses fora de línia vénen del proveïdor actiu quan les descarregues.',
  // notification-channels
  'help.guide.notification-channels.title': 'Configurar on t’arriben les notificacions',
  'help.guide.notification-channels.goal':
    'Rep recordatoris de viatge i esdeveniments de col·laboració al mòbil o en una altra eina.',
  'help.guide.notification-channels.step.1':
    "A Notificacions, omple un Tema de Ntfy; afegeix la teva pròpia URL del servidor Ntfy (opcional) i un Token d'accés (opcional) si en tens un. Prova envia un missatge a l’instant.",
  'help.guide.notification-channels.step.2':
    'O indica una URL del webhook que rebi cada esdeveniment com a JSON, i prova-la igual amb Prova.',
  'help.guide.notification-channels.step.3':
    'A les files de sota, activa o desactiva cada esdeveniment per canal. Un canal de connector diu Configura fins que està configurat a la configuració del connector; Envia una prova en prova un.',
  'help.guide.notification-channels.result':
    'Els esdeveniments surten pels canals actius. La campana de la barra de navegació els continua mostrant a l’app igualment.',
  'help.guide.notification-channels.tip.1':
    'Les preferències per viatge viuen al mateix viatge, a la seva configuració de notificacions.',
  'help.guide.notification-channels.tip.2':
    'L’admin pot preomplir un servidor ntfy per defecte per a tothom; tu continues triant el teu propi tema.',
  // photo-providers
  'help.guide.photo-providers.title': 'Connectar una biblioteca de fotos',
  'help.guide.photo-providers.goal': 'Deixa que la travesia agafi les fotos del dia d’Immich o Synology Photos.',
  'help.guide.photo-providers.step.1':
    'A Integracions, busca la secció del proveïdor i introdueix la seva URL i clau API. Immich també ofereix reflectir les pujades de la travesia de tornada a la biblioteca.',
  'help.guide.photo-providers.step.2': 'Fes clic a Prova la connexió i després a Desar.',
  'help.guide.photo-providers.result':
    'La pestanya External photos de l’editor d’entrades cerca a la biblioteca connectada el dia de l’entrada, primer les més properes a la ubicació de l’entrada.',
  'help.guide.photo-providers.tip.1':
    'La connexió és teva: els altres membres d’una travesia connecten les seves pròpies biblioteques.',
  'help.guide.photo-providers.tip.2':
    'Un proveïdor sense dades GPS a les fotos funciona igualment; la llista va llavors en ordre de temps.',
  // api-keys
  'help.guide.api-keys.title': 'Crear una clau API',
  'help.guide.api-keys.goal': 'Deixa que un script o una altra eina cridi l’API de TREK com tu.',
  'help.guide.api-keys.step.1': 'A Claus API, fes clic a Crea una clau i posa-li un nom que digui on es farà servir.',
  'help.guide.api-keys.step.2':
    'Copia la clau del diàleg: només es mostra una vegada. Elimina una clau de la llista quan l’eina ja no la necessiti.',
  'help.guide.api-keys.result':
    'Les peticions amb aquesta clau actuen amb els teus permisos; la llista mostra quan es va crear i es va usar per última vegada cada clau.',
  'help.guide.api-keys.tip.1': 'Una clau per eina fa que revocar sigui indolor.',
  'help.guide.api-keys.tip.2':
    'Per a un assistent d’IA fes servir MCP amb OAuth; les claus API són per a clients HTTP senzills.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Connectar un assistent d’IA per MCP',
  'help.guide.mcp-oauth.goal': 'Dóna a Claude, a un IDE o a un altre client MCP accés als teus viatges.',
  'help.guide.mcp-oauth.step.1':
    'A Configuració MCP, copia l’Endpoint MCP, o tota la Configuració del client per a un client que accepti un fragment JSON.',
  'help.guide.mcp-oauth.step.2':
    'Els clients que inicien sessió pel navegador fan servir OAuth 2.1: Client nou a Clients OAuth 2.1, amb les seves URIs de redirecció, els Àmbits permesos i, per a un servidor sense navegador, Client de màquina.',
  'help.guide.mcp-oauth.step.3':
    'Renova el secret i Elimina el client són a cada client; Sessions OAuth actives llista què té la sessió iniciada i et deixa revocar-ho. Tokens API amb Crea un token nou és la via antiga d’entrada.',
  'help.guide.mcp-oauth.result':
    'El client pot llegir i canviar el que els seus àmbits permeten, com tu, i cada acció apareix amb el teu nom.',
  'help.guide.mcp-oauth.tip.1':
    'Els àmbits són la xarxa de seguretat: dóna a un client només l’àmbit de lectura fins que en necessiti més.',
  'help.guide.mcp-oauth.tip.2': 'L’admin pot desactivar MCP per a tota la instància; llavors aquesta secció no hi és.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Endur-se viatges fora de línia',
  'help.guide.offline-prepare.goal':
    'Tingues els teus viatges i els seus mapes en aquest dispositiu abans que caigui la connexió.',
  'help.guide.offline-prepare.step.1':
    'A Què desar fora de línia, deixa Desar tessel·les de mapes fora de línia activat i activa els viatges que vols en aquest dispositiu.',
  'help.guide.offline-prepare.step.2':
    "Fes clic a Descarregar per a ús fora de línia a Preparar per a l'ús fora de línia. Baixa els viatges i les tessel·les al voltant dels seus llocs.",
  'help.guide.offline-prepare.step.3':
    'Forçar mode fora de línia a Mode fora de línia et deixa comprovar que hi és tot abans de marxar.',
  'help.guide.offline-prepare.result':
    'Els viatges s’obren sense connexió; els canvis que fas esperen en una cua i surten en reconnectar.',
  'help.guide.offline-prepare.tip.1':
    'Les tessel·les són el que més espai ocupa: la secció Memòria cau fora de línia mostra què hi ha desat, per viatge.',
  'help.guide.offline-prepare.tip.2':
    'Instal·la TREK com a app des del navegador per a l’inici fora de línia més fluid.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Decidir què guanya en un conflicte de sincronització',
  'help.guide.offline-conflicts.goal':
    'Tria com resol TREK un canvi fet fora de línia davant d’un de fet en un altre lloc.',
  'help.guide.offline-conflicts.step.1':
    "A Conflictes de sincronització, tria Pregunta'm cada vegada, Mantingues sempre la meva versió o Mantingues sempre la versió del servidor.",
  'help.guide.offline-conflicts.step.2':
    'Memòria cau fora de línia mostra viatges, canvis pendents i fallits i conflictes; Sincronitzar ara empeny la cua, Netejar memòria cau buida el dispositiu.',
  'help.guide.offline-conflicts.result':
    "Amb Pregunta'm, un conflicte mostra les dues versions i et deixa triar; amb les altres dues es resol en silenci.",
  'help.guide.offline-conflicts.tip.1':
    'Netejar memòria cau només elimina la còpia d’aquest dispositiu; res del servidor no es toca.',
  // profile
  'help.guide.profile.title': 'Canviar el teu perfil',
  'help.guide.profile.goal': 'Actualitza el teu nom, correu i imatge.',
  'help.guide.profile.step.1':
    'A Compte, edita Usuari i Correu. L’avatar admet una pujada teva; treu-lo per tornar a les inicials.',
  'help.guide.profile.step.2': 'Fes clic a Desa el perfil.',
  'help.guide.profile.result':
    'El teu nom i la teva imatge s’actualitzen a tot arreu alhora, inclosos els viatges que comparteixes.',
  'help.guide.profile.tip.1':
    'Un compte que inicia sessió per OIDC ho mostra aquí; el correu ve llavors del proveïdor.',
  // password
  'help.guide.password.title': 'Canviar la teva contrasenya',
  'help.guide.password.goal': 'Posa una contrasenya nova.',
  'help.guide.password.step.1':
    'A Canvia la contrasenya, escriu la teva contrasenya actual i després la nova dues vegades.',
  'help.guide.password.step.2': 'Fes clic a Actualitza la contrasenya.',
  'help.guide.password.result':
    'La contrasenya nova val des del proper inici de sessió; les altres sessions continuen obertes.',
  'help.guide.password.tip.1': 'Un compte que inicia sessió per OIDC no té contrasenya de TREK per canviar.',
  // mfa
  'help.guide.mfa.title': 'Activar l’autenticació de dos factors',
  'help.guide.mfa.goal': 'Protegeix el compte amb un codi d’una app d’autenticació.',
  'help.guide.mfa.step.1': "A Autenticació de dos factors (2FA), fes clic a Configura l'autenticador.",
  'help.guide.mfa.step.2':
    'Escaneja el codi QR amb la teva app, o introdueix el secret a mà, després tecleja el codi de sis dígits que mostra i fes clic a Activa el 2FA.',
  'help.guide.mfa.step.3':
    'Guarda els codis de reserva: copia’ls, descarrega’ls o imprimeix-los. Cadascun serveix una vegada, quan no tens el mòbil a mà.',
  'help.guide.mfa.result': 'Cada inici de sessió demana un codi després de la contrasenya.',
  'help.guide.mfa.tip.1': 'Desactiva el 2FA necessita la teva contrasenya i un codi vigent.',
  'help.guide.mfa.tip.2': 'L’admin pot exigir el 2FA a tothom; llavors no es pot desactivar aquí.',
  // passkeys
  'help.guide.passkeys.title': 'Iniciar sessió amb una passkey',
  'help.guide.passkeys.goal': 'Fes servir l’empremta, la cara o el PIN del teu dispositiu en lloc d’una contrasenya.',
  'help.guide.passkeys.step.1':
    'A Passkeys, fes clic a Afegeix una passkey i confirma amb el teu dispositiu. Posa-li un nom que digui quin dispositiu és.',
  'help.guide.passkeys.step.2':
    'La llista mostra cada passkey amb el seu nom i l’últim ús; el botó d’eliminar en treu una.',
  'help.guide.passkeys.result':
    'La pàgina d’inici de sessió ofereix la passkey; la contrasenya queda com a alternativa.',
  'help.guide.passkeys.tip.1':
    'Una passkey viu al dispositiu o al seu gestor de contrasenyes, així que afegeix-ne una per dispositiu.',
  'help.guide.passkeys.tip.2':
    'Les passkeys necessiten HTTPS; en una instància amb HTTP senzill la secció explica per què no estan disponibles.',
  // delete-account
  'help.guide.delete-account.title': 'Eliminar el teu compte',
  'help.guide.delete-account.goal': 'Elimina el teu compte i les dades que són només teves.',
  'help.guide.delete-account.step.1': 'Al final de tot de Compte, fes clic a Elimina el compte i confirma.',
  'help.guide.delete-account.result':
    'El teu compte, els teus propis viatges i les teves travesies desapareixen; els viatges que comparteixes amb altres es queden amb ells.',
  'help.guide.delete-account.tip.1':
    'L’últim admin d’una instància no es pot eliminar a si mateix; fes admin algú altre abans.',
  'help.guide.delete-account.tip.2': 'No es pot desfer. Exporta el que vulguis conservar abans de confirmar.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administració',
  'help.ctx.admin.summary':
    'La instància darrere del TREK de tothom: qui pot iniciar sessió i com, què està activat, on viuen els fitxers, com el servidor arriba a la gent i com es fa la còpia de seguretat. Només els admins veuen aquesta pàgina; cada pestanya és una pantalla pròpia a la barra lateral.',
  'help.ctx.admin.bullet.1':
    'Les quatre targetes de dalt compten usuaris, viatges, llocs i fitxers; un bàner a sobre anuncia una versió més nova de TREK.',
  'help.ctx.admin.bullet.2':
    'Usuaris i Valors per defecte: comptes, enllaços d’invitació i la configuració de mapa amb què comença un compte nou.',
  'help.ctx.admin.bullet.3':
    'Personalització, Configuració, Complements i Connectors: plantilles d’equipatge, categories i vacances escolars; mètodes d’inici de sessió i claus API; els mòduls de funcions; connectors de tercers.',
  'help.ctx.admin.bullet.4':
    'Emmagatzematge, Notificacions, Accés MCP i GitHub: on van les pujades, els canals de tota la instància, tokens i sessions de clients d’IA, i l’historial de versions.',
  'help.ctx.admin.bullet.5':
    'Còpia de seguretat i Auditoria: còpies a demanda i programades, i el registre d’esdeveniments rellevants per a la seguretat.',
  'help.ctx.admin-users.title': 'Usuaris',
  'help.ctx.admin-users.summary':
    'Cada compte d’aquest TREK, amb rol, correu i últim inici de sessió, i els enllaços d’invitació que permeten a la gent registrar-se en una instància tancada.',
  'help.ctx.admin-users.bullet.1':
    'La taula: usuari, correu, rol, data de creació, últim accés i les accions per fila. Tu apareixes marcat com a tu.',
  'help.ctx.admin-users.bullet.2': 'Crea usuari a dalt afegeix un compte a mà, amb una contrasenya que entregues tu.',
  'help.ctx.admin-users.bullet.3':
    "Enllaços d'invitació a sota: enllaços de registre d’un sol ús amb un límit d’usos, una caducitat i, si vols, un viatge al qual el nou usuari s’uneix en arribar.",
  'help.ctx.admin-users.bullet.4':
    "Configuració de permisos a baix de tot: per acció, qui la pot fer, Tothom, Membres del viatge, Propietari del viatge o Només l'administrador.",
  'help.ctx.admin-defaults.title': 'Valors per defecte',
  'help.ctx.admin-defaults.summary':
    'La configuració amb què comença un compte nou, perquè ningú hagi de buscar primer la pestanya del mapa: motor de mapes, estil, tokens i qualitat.',
  'help.ctx.admin-defaults.bullet.1':
    'Motor de mapes, estil i token de Mapbox, clau CARTO i qualitat de Mapbox, exactament com els posaria un usuari a Configuració, Mapa.',
  'help.ctx.admin-defaults.bullet.2':
    'Restaurar per camp torna la tria pròpia de TREK; la configuració pròpia d’un usuari sempre guanya a aquestes.',
  'help.ctx.admin-config.title': 'Personalització',
  'help.ctx.admin-config.summary':
    'El que comparteixen tots els viatges de la instància: plantilles d’equipatge, el conjunt de categories per a llocs i col·leccions, i el catàleg de vacances escolars del qual beu Vacay.',
  'help.ctx.admin-config.bullet.1':
    "Plantilles d'equipatge: llistes amb nom de categories i articles de les quals pot partir la llista d’equipatge d’un viatge.",
  'help.ctx.admin-config.bullet.2':
    'Categories: nom, icona i color de les categories que s’usen a tot TREK, de l’inspector de llocs a Col·leccions.',
  'help.ctx.admin-config.bullet.3':
    'Vacances escolars: el catàleg de països i regions, per a llocs que les fonts integrades no cobreixen.',
  'help.ctx.admin-settings.title': 'Configuració',
  'help.ctx.admin-settings.summary':
    'Com entra la gent i amb què pot parlar el servidor: mètodes d’inici de sessió i registre, SSO, claus d’accés, política de dos factors, les claus API per a mapes, llocs i imatges, els proveïdors de cerca i transport, i els tipus de fitxer que poden tenir les pujades.',
  'help.ctx.admin-settings.bullet.1':
    "Mètodes d'autenticació: Inici de sessió amb contrasenya, Registre amb contrasenya, Inici de sessió SSO, Aprovisionament automàtic SSO i Exigir autenticació de dos factors (2FA).",
  'help.ctx.admin-settings.bullet.2':
    "Inici de sessió únic (OIDC) amb emissor, client i nom visible; Inici de sessió amb clau d'accés amb ID de la part confiable i orígens.",
  'help.ctx.admin-settings.bullet.3':
    "Claus API: Google Maps, Unsplash i Amap, cadascuna amb Provar; Per a què s'utilitza la clau limita la clau de Google a les funcions que vols pagar.",
  'help.ctx.admin-settings.bullet.4':
    'Proveïdor de la cerca de llocs i Proveïdor de transport públic trien qui respon cerques i rutes; Tipus de fitxer permesos limita les pujades.',
  'help.ctx.admin-addons.title': 'Complements',
  'help.ctx.admin-addons.summary':
    'Els mòduls de funcions de TREK, cadascun amb un interruptor: Llistes, Pressupost, Documents, Vacay, Atlas, Col·laboració, Travessia, Col·leccions, Viatge per carretera, MCP, AirTrail, Dawarich i l’anàlisi amb IA. Desactivat vol dir que l’entrada de navegació, les rutes i l’API desapareixen per a tothom.',
  'help.ctx.admin-addons.bullet.1':
    'Un mosaic per complement amb el seu interruptor i, quan en té, subfiles per a les seves opcions.',
  'help.ctx.admin-addons.bullet.2':
    'Els proveïdors de fotos i de documents també apareixen aquí com a mosaics, per oferir Immich o Synology als usuaris.',
  'help.ctx.admin-addons.bullet.3': "Seguiment d'equipatge té el seu propi interruptor sota els mosaics.",
  'help.ctx.admin-plugins.title': 'Connectors',
  'help.ctx.admin-plugins.summary':
    'Connectors de tercers que corren en un procés propi al costat de TREK, cadascun amb els permisos que va demanar en instal·lar-se. Instal·la des del catàleg, puja un paquet o enllaça una carpeta mentre en desenvolupes un.',
  'help.ctx.admin-plugins.bullet.1':
    'La llista: cada connector instal·lat amb versió, estat, signatura i els permisos que té; activa, desactiva, actualitza o desinstal·la per fila.',
  'help.ctx.admin-plugins.bullet.2':
    'Puja el connector accepta un fitxer de paquet; Torna a escanejar detecta una carpeta de connector enllaçada per al desenvolupament.',
  'help.ctx.admin-plugins.bullet.3':
    'Amfitrions permesos per connector: les adreces que un connector pot cridar, ja que la sortida es denega per defecte.',
  'help.ctx.admin-storage.title': 'Emmagatzematge',
  'help.ctx.admin-storage.summary':
    'On viuen les pujades: el disc local, un bucket S3 o un mirall que escriu a tots dos. Cada categoria de pujada pot anar a un backend diferent, i Estat diu si cada backend respon.',
  'help.ctx.admin-storage.bullet.1':
    'Backends: nom i tipus de cadascun, amb Provar, Editar i Suprimir; un de definit per l’entorn és només de lectura aquí.',
  'help.ctx.admin-storage.bullet.2':
    'Categories: portades, documents, fotos de la travessia i la resta, cadascuna assignada a un backend; canviar-ne una ofereix moure els fitxers existents.',
  'help.ctx.admin-storage.bullet.3':
    'Estat: una comprovació per backend, i el fitxer llavor que demostra que la configuració és la que veu el servidor.',
  'help.ctx.admin-notifications.title': 'Notificacions',
  'help.ctx.admin-notifications.summary':
    'Els canals que la instància ofereix als seus usuaris, i els que t’arriben a tu com a admin. Els usuaris trien els seus propis temes i URL a Configuració; tu decideixes què existeix i configures el correu.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Correu (SMTP), Ntfy i Webhook: un panell cadascun, amb un interruptor que ofereix el canal als usuaris i la configuració del costat del servidor que necessita.',
  'help.ctx.admin-notifications.bullet.2':
    'Recordatoris de viatge: si el servidor envia el recordatori abans que comenci un viatge.',
  'help.ctx.admin-notifications.bullet.3':
    "Ntfy d'administrador i Webhook d'administrador: on van els esdeveniments d’admin com una còpia fallida o una versió nova, amb Provar.",
  'help.ctx.admin-mcp-tokens.title': 'Accés MCP',
  'help.ctx.admin-mcp-tokens.summary':
    'Cada token i sessió OAuth que els clients d’IA tenen contra aquest TREK, de tots els usuaris, amb el poder de revocar-ne qualsevol.',
  'help.ctx.admin-mcp-tokens.bullet.1': "Tokens d'API: qui el va crear, quan es va usar per última vegada, i Eliminar.",
  'help.ctx.admin-mcp-tokens.bullet.2': 'Sessions OAuth: el client, l’usuari i els àmbits concedits, i Revocar.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Què hi ha de nou a TREK: l’historial de versions de GitHub, la versió que executes, i si n’ha sortit una de més nova. L’actualització en si passa fora de l’app, a l’amfitrió.',
  'help.ctx.admin-github.bullet.1':
    'Historial de versions llista les versions amb les seves notes; la més nova porta Última, i la teva està marcada.',
  'help.ctx.admin-github.bullet.2':
    'Actualització disponible apareix a la capçalera quan existeix una versió més nova, amb com actualitzar a Docker i a altres instal·lacions.',
  'help.ctx.admin-backup.title': 'Còpia de seguretat',
  'help.ctx.admin-backup.summary':
    'Còpies completes de la base de dades i les pujades, fetes a mà o programades, guardades al servidor i descarregables com un sol fitxer. Restaura en torna a posar una.',
  'help.ctx.admin-backup.bullet.1':
    'Còpia de seguretat de les dades: Crea una còpia, i la llista de les existents amb Baixa, Restaura i eliminar.',
  'help.ctx.admin-backup.bullet.2':
    'Puja una còpia de seguretat porta un fitxer fet en una altra instància o en un dia anterior.',
  'help.ctx.admin-backup.bullet.3': 'Còpia automàtica: activada o no, interval, hora i dia, i quantes conservar.',
  'help.ctx.admin-audit.title': 'Auditoria',
  'help.ctx.admin-audit.summary':
    'El registre d’esdeveniments administratius i rellevants per a la seguretat: inicis de sessió i errors, canvis d’MFA, canvis d’usuaris i de configuració, còpies i restauracions. Només lectura, el més nou primer.',
  'help.ctx.admin-audit.bullet.1': 'Una fila per esdeveniment amb hora, usuari, acció, recurs, IP i detalls.',
  'help.ctx.admin-audit.bullet.2': 'Actualitzar recarrega; Carregar més va més enrere.',
  // create-user
  'help.guide.create-user.title': 'Crear un usuari',
  'help.guide.create-user.goal': 'Afegeix un compte a mà, sense invitació.',
  'help.guide.create-user.step.1': 'Fes clic a Crea usuari a la part superior de la pestanya Usuaris.',
  'help.guide.create-user.step.2':
    'Introdueix Usuari, Correu i una Contrasenya, i tria el Rol: Usuari o Administrador.',
  'help.guide.create-user.step.3': 'Fes clic a Crea usuari.',
  'help.guide.create-user.result':
    'El compte apareix a la taula i pot iniciar sessió de seguida; entrega la contrasenya per un canal en què confiïs.',
  'help.guide.create-user.tip.1':
    'Per a algú que hagi de triar la seva pròpia contrasenya, un enllaç d’invitació és la millor manera d’entrar.',
  'help.guide.create-user.tip.2':
    'Els admins veuen aquesta pàgina i el registre d’auditoria; tota la resta és igual per als dos rols.',
  // edit-user
  'help.guide.edit-user.title': 'Canviar el rol o la contrasenya d’un usuari',
  'help.guide.edit-user.goal': 'Ascendeix algú, degrada’l o torna’l a fer entrar després d’una contrasenya perduda.',
  'help.guide.edit-user.step.1':
    'Fes clic al llapis de la fila de l’usuari. Editar usuari s’obre amb les dades del compte.',
  'help.guide.edit-user.step.2':
    "Canvia el Rol, posa una Contrasenya nova, o fes clic a Restablir claus d'accés quan la persona hagi perdut el dispositiu on tenia les claus d’accés, i després Desar.",
  'help.guide.edit-user.result':
    'El canvi s’aplica a la petició següent; una contrasenya nova funciona des del següent inici de sessió.',
  'help.guide.edit-user.tip.1': 'No et pots treure el rol d’admin mentre siguis l’últim admin.',
  'help.guide.edit-user.tip.2':
    'Restablir les claus d’accés conserva la contrasenya; la persona afegeix claus d’accés noves a Configuració, Compte.',
  // invite-links
  'help.guide.invite-links.title': 'Convidar algú amb un enllaç',
  'help.guide.invite-links.goal':
    'Deixa que una persona es registri en una instància tancada i, si vols, aterri en un viatge.',
  'help.guide.invite-links.step.1': "A Enllaços d'invitació, fes clic a Crea enllaç.",
  'help.guide.invite-links.step.2':
    'Posa Usos màx. i Expira després de, opcionalment Afegeix al viatge (opcional), i fes clic a Crea i copia.',
  'help.guide.invite-links.step.3':
    'Envia l’enllaç. Cada fila mostra quantes vegades s’ha usat i qui el va crear; Copia enllaç el torna a copiar, i els enllaços esgotats o expirats estan marcats.',
  'help.guide.invite-links.result':
    'Qui obre l’enllaç es registra amb la seva pròpia contrasenya i, si hi ha un viatge triat, s’hi uneix de seguida.',
  'help.guide.invite-links.tip.1':
    'Els enllaços d’invitació funcionen encara que Registre amb contrasenya estigui desactivat a Configuració.',
  'help.guide.invite-links.tip.2':
    'Un enllaç d’un sol ús i caducitat curta és el valor més segur per a una sola persona.',
  // delete-user
  'help.guide.delete-user.title': 'Eliminar un usuari',
  'help.guide.delete-user.goal': 'Treu un compte i tot el que només li pertany a ell.',
  'help.guide.delete-user.step.1': 'Fes clic a la icona de paperera de la fila de l’usuari i confirma Eliminar usuari.',
  'help.guide.delete-user.result':
    'El compte, els seus propis viatges i les seves travessies desapareixen; els viatges compartits amb altres es queden amb els membres restants.',
  'help.guide.delete-user.tip.1': 'No es pot desfer. Fes abans una còpia de seguretat si no n’estàs segur.',
  'help.guide.delete-user.tip.2': 'L’últim admin no es pot eliminar; fes abans admin algú altre.',
  // permissions
  'help.guide.permissions.title': 'Decidir qui pot fer què',
  'help.guide.permissions.goal': 'Defineix, per acció, quin rol la pot fer en aquest TREK.',
  'help.guide.permissions.step.1':
    "A Configuració de permisos, busca l’acció dins del seu grup, per exemple Elimina viatges dins de Gestió de viatges, i tria el nivell: Tothom, Membres del viatge, Propietari del viatge o Només l'administrador. Una fila canviada queda marcada com a personalitzat.",
  'help.guide.permissions.step.2':
    'Fes clic a Desar. Restableix els valors per defecte torna cada fila al nivell integrat.',
  'help.guide.permissions.result':
    'La regla s’aplica a tots els viatges alhora; els botons i menús de qui és per sota del nivell desapareixen.',
  'help.guide.permissions.tip.1':
    'Propietari del viatge és la persona que ha creat el viatge; els admins sempre poden fer-ho tot.',
  'help.guide.permissions.tip.2':
    'Abaixa un nivell en lloc d’eliminar un membre: un membre que no pot editar encara pot llegir i comentar.',
  // default-map
  'help.guide.default-map.title': 'Definir el mapa per defecte per als usuaris nous',
  'help.guide.default-map.goal': 'Dona a cada compte nou un mapa que funcioni sense token personal.',
  'help.guide.default-map.step.1':
    "A Mapa, tria el Motor de mapes i, per a Mapbox o MapLibre, l’Estil de mapa, el Token de Mapbox compartit i el Mode d'alta qualitat; per a un mapa ràster, la Plantilla del mapa i la Clau CARTO compartida.",
  'help.guide.default-map.step.2':
    'Al costat de qualsevol camp que hagis canviat, Restaurar torna la tria pròpia de TREK. Configuració per defecte dels usuaris a l’esquerra fa el mateix per a Mode de color, les unitats i la divisa.',
  'help.guide.default-map.result':
    'Els comptes nous comencen amb això; qui hagi posat el seu propi mapa a Configuració conserva el seu.',
  'help.guide.default-map.tip.1':
    'Un token introduït aquí el comparteixen tots els que no en tenen un de propi, així que vigila la seva quota.',
  'help.guide.default-map.tip.2':
    'Els comptes existents que mai han tocat la pestanya del mapa també segueixen aquests valors.',
  // packing-templates
  'help.guide.packing-templates.title': 'Construir una plantilla d’equipatge',
  'help.guide.packing-templates.goal': 'Dona als viatges una llista d’equipatge de partida en lloc d’una de buida.',
  'help.guide.packing-templates.step.1': 'Fes clic a Nova plantilla, escriu un nom i confirma amb la marca.',
  'help.guide.packing-templates.step.2':
    'Obre la plantilla i fes clic a Afegeix una categoria; sota cada categoria, el + afegeix articles, i un article només necessita un nom.',
  'help.guide.packing-templates.step.3':
    'Tot es desa a mesura que avances. El llapis reanomena una plantilla, una categoria o un article, la paperera l’elimina.',
  'help.guide.packing-templates.result':
    'La plantilla s’ofereix a la llista d’equipatge de cada viatge; aplicar-la copia els articles, així que un viatge els pot canviar lliurement.',
  'help.guide.packing-templates.tip.1':
    'Una plantilla per tipus de viatge, platja, ciutat, senderisme, és millor que una llista gegant.',
  'help.guide.packing-templates.tip.2': 'Eliminar una plantilla no toca els viatges que ja l’han aplicada.',
  // categories
  'help.guide.categories.title': 'Gestionar el conjunt de categories',
  'help.guide.categories.goal':
    'Decideix quines categories poden portar els llocs i les col·leccions, i quin aspecte tenen.',
  'help.guide.categories.step.1':
    'Fes clic a Categoria nova, posa-li un nom, tria una icona i un color; la Vista prèvia mostra el resultat. Fes clic a Crea.',
  'help.guide.categories.step.2':
    'Passa el ratolí per una categoria de la llista per editar-la o eliminar-la. Eliminar demana confirmació.',
  'help.guide.categories.result':
    'El conjunt s’aplica a tot arreu alhora: l’inspector de llocs, els pins del mapa, Col·leccions i els filtres.',
  'help.guide.categories.tip.1':
    'Els llocs conserven l’id de categoria, així que reanomenar una categoria la reanomena a cada lloc.',
  'help.guide.categories.tip.2':
    'Una categoria eliminada deixa els seus llocs sense cap; reassigna’ls abans si això importa.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Mantenir les vacances escolars a mà',
  'help.guide.school-holiday-catalog.goal':
    'Cobreix un país o una regió que les fonts de vacances integrades no cobreixen.',
  'help.guide.school-holiday-catalog.step.1':
    'A Vacances escolars, fes clic a Afegeix un país, introdueix el País i el seu Codi del país (p. ex. US), i Desar; després Afegeix una regió per a cada part que sigui diferent.',
  'help.guide.school-holiday-catalog.step.2':
    'Fes clic en una regió per obrir Regió o districte escolar: Afegeix un període, dona a cadascun un Nom de les vacances, Data inicial i Data final, i Desar. La paperera treu un període, una regió o, quan ja no li queden regions, un país.',
  'help.guide.school-holiday-catalog.result':
    'Els usuaris troben el país i la regió a Configuració dins de Vacay i veuen els períodes a la seva graella anual.',
  'help.guide.school-holiday-catalog.tip.1':
    'Les regions de les fonts integrades no es poden editar aquí; afegeix al costat una regió manual si una data és errònia.',
  // auth-methods
  'help.guide.auth-methods.title': 'Decidir com inicia sessió la gent',
  'help.guide.auth-methods.goal': 'Obre o tanca l’inici de sessió amb contrasenya, l’SSO i el registre, i exigeix 2FA.',
  'help.guide.auth-methods.step.1':
    "A Mètodes d'autenticació, activa o desactiva Inici de sessió amb contrasenya i Registre amb contrasenya. Registre desactivat vol dir comptes nous només per enllaços d’invitació, SSO o a mà.",
  'help.guide.auth-methods.step.2':
    'Inici de sessió SSO i Aprovisionament automàtic SSO necessiten un Inici de sessió únic (OIDC) configurat més avall; l’aprovisionament automàtic crea un compte la primera vegada que algú entra per SSO.',
  'help.guide.auth-methods.step.3':
    "Exigir autenticació de dos factors (2FA) fa que cada inici de sessió amb contrasenya configuri un autenticador al següent accés. Inici de sessió amb clau d'accés necessita l’ID de la part confiable i els orígens pels quals s’arriba al teu TREK.",
  'help.guide.auth-methods.result':
    'La pàgina d’inici de sessió ofereix exactament els mètodes que has deixat activats.',
  'help.guide.auth-methods.tip.1':
    'Apareix un avís abans que et deixis fora: almenys una via d’entrada per als admins es manté activa.',
  'help.guide.auth-methods.tip.2': 'Els valors definits per variables d’entorn es mostren aquí com a només lectura.',
  // oidc
  'help.guide.oidc.title': 'Connectar l’inici de sessió únic',
  'help.guide.oidc.goal': 'Deixa que la gent iniciï sessió amb el teu proveïdor d’identitat.',
  'help.guide.oidc.step.1':
    "A Inici de sessió únic (OIDC), introdueix el Nom visible per al botó i l’URL de l'emissor, el Client ID i el Client Secret del teu proveïdor, i després Desar.",
  'help.guide.oidc.step.2': "Activa Inici de sessió SSO a Mètodes d'autenticació.",
  'help.guide.oidc.result':
    'La pàgina d’inici de sessió mostra el botó d’SSO; amb Aprovisionament automàtic SSO activat, qui entra per primera vegada rep un compte automàticament.',
  'help.guide.oidc.tip.1':
    'L’URI de redirecció que necessita el teu proveïdor és l’adreça del teu TREK més el camí de callback d’OIDC de la documentació.',
  'help.guide.oidc.tip.2':
    'El mapatge de claims decideix quins grups d’SSO es converteixen en admins; mira la pàgina d’OIDC a la documentació.',
  // instance-keys
  'help.guide.instance-keys.title': 'Introduir les claus API',
  'help.guide.instance-keys.goal':
    'Desbloqueja la cerca de llocs de Google, les portades d’Unsplash i Amap per a tota la instància.',
  'help.guide.instance-keys.step.1':
    'A Claus API, enganxa la Clau API de Google Maps i fes clic a Provar; el camp diu si la clau respon.',
  'help.guide.instance-keys.step.2':
    "A Per a què s'utilitza la clau, activa només les funcions que vols que es facturin a aquesta clau: autocompletat, detalls, fotos, enriquiment, el registre de cerques.",
  'help.guide.instance-keys.step.3':
    "Clau API d'Unsplash alimenta la cerca de portades; Clau API d'Amap (高德地图) la cerca de llocs a la Xina. Prova cadascuna de la mateixa manera.",
  'help.guide.instance-keys.result':
    'Els usuaris obtenen les funcions sense claus pròpies; sense clau de Google, TREK cerca a través de la pila lliure d’OpenStreetMap i la TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'La clau personal d’un usuari a Configuració guanya a la clau de la instància per a aquest usuari.',
  'help.guide.instance-keys.tip.2':
    'Les claus també poden venir de variables d’entorn; aquestes es mostren aquí com a només lectura.',
  // places-transit
  'help.guide.places-transit.title': 'Triar els proveïdors de cerca i transport',
  'help.guide.places-transit.goal': 'Decideix qui respon les cerques de llocs i les rutes de transport públic.',
  'help.guide.places-transit.step.1':
    'A Proveïdor de la cerca de llocs, tria Automàtic, Google Places, Amap (高德地图) o OpenStreetMap. Automàtic fa servir la millor clau que existeixi.',
  'help.guide.places-transit.step.2':
    'A Proveïdor de transport públic, tria Transitous (gratuït), mundial i sense clau, o Google, que necessita la clau de Google.',
  'help.guide.places-transit.result': 'Cada quadre de cerca i cada ruta de transport públic de TREK segueix la tria.',
  'help.guide.places-transit.tip.1': 'Un proveïdor sense la seva clau mostra un avís aquí i recorre a OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Les rutes de transport de Google es facturen per petició; Transitous no.',
  // file-types
  'help.guide.file-types.title': 'Limitar els tipus de fitxer',
  'help.guide.file-types.goal': 'Decideix quines extensions de fitxer poden tenir les pujades.',
  'help.guide.file-types.step.1':
    'A Tipus de fitxer permesos, edita la llista d’extensions separades per comes i desa.',
  'help.guide.file-types.result':
    'Les pujades de qualsevol altre tipus es rebutgen amb un missatge clar, als documents, al diari i a les portades.',
  'help.guide.file-types.tip.1':
    'Mantén els tipus d’imatge a la llista; les portades i les fotos de la travessia passen per la mateixa comprovació.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Activar o desactivar un complement',
  'help.guide.toggle-addon.goal': 'Ofereix un mòdul de funcions a tothom, o treu-lo.',
  'help.guide.toggle-addon.step.1':
    'Canvia l’interruptor del mosaic del complement. L’entrada de navegació apareix o desapareix per a tothom alhora.',
  'help.guide.toggle-addon.step.2':
    "Alguns mosaics porten subfiles per a les seves opcions, com Seguiment d'equipatge sota Llistes o els proveïdors de fotos sota Travessia; només es mostren mentre el complement està activat.",
  'help.guide.toggle-addon.result':
    'Les dades d’un complement desactivat es conserven; tornar-lo a activar les mostra de nou.',
  'help.guide.toggle-addon.tip.1': 'MCP desactivat treu l’endpoint i les seccions d’Integracions que en depenen.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas i Travessia són els complements que més demanen els usuaris; Documents necessita emmagatzematge per a les pujades.',
  // install-plugin
  'help.guide.install-plugin.title': 'Instal·lar un connector',
  'help.guide.install-plugin.goal': 'Afegeix un connector de tercers i dona-li exactament els permisos que demana.',
  'help.guide.install-plugin.step.1':
    'Obre Descobreix, tria un connector i fes clic a Instal·la; o fes clic a Puja el connector i tria un paquet .zip o .tar.gz.',
  'help.guide.install-plugin.step.2':
    'De tornada a Instal·lat, llegeix la fila: què pot llegir o escriure el connector, els amfitrions que crida i si està signat. Activa Activar el connector.',
  'help.guide.install-plugin.step.3':
    "El menú de la fila ofereix Reinicia, Mostra el registre d'errors, Amfitrions permesos i Canvia la versió…; Eliminar el desinstal·la. S’ofereix una actualització a la fila quan existeix una versió més nova, i una que demana drets nous es queda desactivada fins que els aprovis.",
  'help.guide.install-plugin.result':
    'El connector corre en un procés propi; el que afegeix, ginys, capes de mapa, eines, apareix on el connector ho declara.',
  'help.guide.install-plugin.tip.1':
    'Torna a escanejar detecta una carpeta de connector enllaçada per al desenvolupament sense paquet.',
  'help.guide.install-plugin.tip.2':
    'Un connector sense signar es marca com a tal; instal·la’l només quan confiïs en la seva font.',
  // storage-backends
  'help.guide.storage-backends.title': 'Moure les pujades a S3 o a un mirall',
  'help.guide.storage-backends.goal': 'Mantén els fitxers en emmagatzematge d’objectes, o en disc i bucket alhora.',
  'help.guide.storage-backends.step.1':
    'A Backends, fes clic a Afegir backend, posa-li un Nom, tria el Tipus, Local, S3 o Mirall, omple els camps i Aplicar. Provar comprova la connexió, Desar els canvis l’escriu.',
  'help.guide.storage-backends.step.2':
    'A Categories, assigna cada categoria de pujada a un backend. Canviar-ne una pregunta si Mou els objectes existents o Només enruta les escriptures noves.',
  'help.guide.storage-backends.step.3':
    'Estat a dalt comprova cada backend; una entrada vermella anomena què ha fallat.',
  'help.guide.storage-backends.result':
    'Les pujades noves van al backend assignat; els fitxers moguts se serveixen des d’allà.',
  'help.guide.storage-backends.tip.1':
    'Un backend configurat per variables d’entorn es mostra però no es pot editar aquí.',
  'help.guide.storage-backends.tip.2':
    'Un mirall escriu a tots dos destins i llegeix del primer; fes-lo servir per migrar sense temps d’inactivitat.',
  // channels-instance
  'help.guide.channels-instance.title': 'Configurar els canals de notificació',
  'help.guide.channels-instance.goal': 'Decideix quins canals poden triar els usuaris, i configura el correu.',
  'help.guide.channels-instance.step.1':
    'A Correu (SMTP), introdueix SMTP Host, SMTP Port, SMTP User, SMTP Password i la From Address; Enviar correu de prova t’envia un correu a tu.',
  'help.guide.channels-instance.step.2':
    'Activa Ntfy i Webhook per oferir-los; els usuaris introdueixen llavors el seu propi tema o URL a Configuració, Notificacions.',
  'help.guide.channels-instance.step.3':
    'Recordatoris de viatge controla el recordatori abans que comenci un viatge; In-App sempre està activat i aquí només s’explica.',
  'help.guide.channels-instance.result': 'La pestanya Notificacions de cada usuari mostra els canals que has activat.',
  'help.guide.channels-instance.tip.1':
    'Un servidor ntfy per defecte introduït aquí apareix preomplert per als usuaris; tot i així poden indicar el seu.',
  'help.guide.channels-instance.tip.2':
    'Els canals de connectors apareixen sols quan hi ha actiu un connector amb aquesta capacitat.',
  // admin-channels
  'help.guide.admin-channels.title': 'Rebre els esdeveniments d’admin al mòbil',
  'help.guide.admin-channels.goal':
    'Assabenta’t de còpies fallides, versions noves i altres esdeveniments de la instància.',
  'help.guide.admin-channels.step.1':
    "A Ntfy d'administrador, introdueix un tema i, si cal, servidor i token; a Webhook d'administrador, un URL.",
  'help.guide.admin-channels.step.2':
    'Fes clic a Enviar Ntfy de prova o Enviar webhook de prova per veure arribar un missatge.',
  'help.guide.admin-channels.result': 'Els esdeveniments d’admin hi van a més de la campana de l’app de cada admin.',
  'help.guide.admin-channels.tip.1':
    'Mantén el tema d’admin separat del personal, perquè una caiguda no s’ofegui en la xerrameca dels viatges.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Revocar l’accés de la IA',
  'help.guide.mcp-tokens-admin.goal': 'Mira i talla cada token i sessió que té un client d’IA, de qualsevol usuari.',
  'help.guide.mcp-tokens-admin.step.1':
    "A Tokens d'API, troba el token per usuari i nom; la paperera l’elimina i el client s’atura de seguida.",
  'help.guide.mcp-tokens-admin.step.2':
    'A Sessions OAuth, el mateix per als clients basats en navegador: client, usuari i data, i la paperera revoca la sessió.',
  'help.guide.mcp-tokens-admin.result': 'El client ha de ser connectat de nou pel seu usuari; res més no canvia.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Els àmbits et diuen què podia fer un client; deixar un àmbit de només lectura és inofensiu.',
  'help.guide.mcp-tokens-admin.tip.2': 'Desactivar el complement MCP ho revoca tot d’una vegada.',
  // release-history
  'help.guide.release-history.title': 'Comprovar si hi ha una versió nova',
  'help.guide.release-history.goal': 'Sàpigues si el teu TREK està al dia i què porta la següent versió.',
  'help.guide.release-history.step.1':
    'Quan existeix una versió més nova, Actualització disponible apareix a la part superior de la pàgina d’admin; Veure a GitHub l’obre, i Com actualitzar explica l’actualització per a Docker i per a altres instal·lacions.',
  'help.guide.release-history.step.2':
    'Historial de versions llista cada versió amb les seves notes; Mostrar els detalls les desplega, la més nova porta Última, i Carregar més va més enrere.',
  'help.guide.release-history.result':
    'L’actualització passa a l’amfitrió, baixant la imatge nova o construint l’etiqueta nova; el directori de dades es queda.',
  'help.guide.release-history.tip.1':
    'Fes una còpia de seguretat abans d’actualitzar; la pestanya Còpia de seguretat és al costat.',
  'help.guide.release-history.tip.2':
    'Les versions preliminars es mostren però no s’anuncien com a actualitzacions, tret que n’executis una.',
  // create-backup
  'help.guide.create-backup.title': 'Fer i restaurar una còpia de seguretat',
  'help.guide.create-backup.goal':
    'Fes una instantània de tota la instància, guarda’n una còpia en un altre lloc, i sigues capaç de tornar-la a posar.',
  'help.guide.create-backup.step.1':
    'A Còpia de seguretat de les dades, fes clic a Crea una còpia. Empaqueta la base de dades i les pujades en un sol fitxer al servidor.',
  'help.guide.create-backup.step.2':
    'Baixa guarda una còpia fora de la màquina; la paperera elimina les antigues per alliberar espai.',
  'help.guide.create-backup.step.3':
    'Restaura sobre una còpia, o Puja una còpia de seguretat amb un fitxer, substitueix les dades actuals després que Vols restaurar la còpia? pregunti una vegada.',
  'help.guide.create-backup.result':
    'Una restauració torna usuaris, viatges, fitxers i configuració a l’estat d’aquella còpia; tothom queda desconnectat.',
  'help.guide.create-backup.tip.1': 'Restaurar és l’única acció d’aquí que no es pot desfer. Fes abans una còpia nova.',
  'help.guide.create-backup.tip.2':
    'Les còpies viuen al directori de dades; una còpia en una altra màquina és el que les converteix en còpia de seguretat.',
  // auto-backup
  'help.guide.auto-backup.title': 'Programar còpies de seguretat',
  'help.guide.auto-backup.goal': 'Deixa que el servidor es faci còpies sol i conservi només les últimes.',
  'help.guide.auto-backup.step.1':
    'A Còpia automàtica, activa Activa la còpia automàtica i tria l’Interval, Executa a les i, per a setmanal o mensual, el Dia de la setmana o el Dia del mes.',
  'help.guide.auto-backup.step.2':
    'Elimina les còpies antigues després de fixa quant de temps es conserva una còpia; les més antigues se’n van quan se’n fa una de nova.',
  'help.guide.auto-backup.result':
    'Les còpies apareixen a la llista segons la programació; una fallada arriba als canals d’admin.',
  'help.guide.auto-backup.tip.1':
    'Les hores segueixen la zona horària del servidor, que es mostra a la pestanya Auditoria.',
  'help.guide.auto-backup.tip.2':
    'L’emmagatzematge del servidor és finit; conservar-ne de tres a cinc sol ser suficient.',
  // audit-log
  'help.guide.audit-log.title': 'Llegir el registre d’auditoria',
  'help.guide.audit-log.goal': 'Esbrina qui va fer què, i quan.',
  'help.guide.audit-log.step.1':
    'Llegeix les files: hora, usuari, acció, recurs, IP i detalls, el més nou primer. Les accions s’anomenen pel que va passar, com un error d’inici de sessió, un canvi d’MFA o una restauració.',
  'help.guide.audit-log.step.2': 'Actualitzar recarrega la part de dalt; Carregar més va més enrere.',
  'help.guide.audit-log.result': 'Un rastre que pots entregar a qui pregunti per què ha canviat alguna cosa.',
  'help.guide.audit-log.tip.1': 'Les hores es mostren en la zona horària del servidor, indicada a sobre de la taula.',
  'help.guide.audit-log.tip.2': 'El registre és només d’afegir; res d’aquí no es pot editar ni eliminar des de l’app.',
};

export default help;
