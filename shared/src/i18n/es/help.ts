import type { TranslationStrings } from '../types';

// English fallback until 'es' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Ayuda para esta pantalla',
  'help.center.title': 'Ayuda',
  'help.center.onThisScreen': 'En esta pantalla',
  'help.center.screens': 'Pantallas',
  'help.center.thisScreen': 'Esta pantalla',
  'help.center.subScreens': 'Subpantallas: {count}',
  'help.center.subScreensLabel': 'Subpantallas',
  'help.center.guidesCount': '{count} guías',
  'help.center.goToScreen': 'Ir a {screen}',
  'help.center.overview': 'Resumen',
  'help.center.howTo': 'Cómo puedo…',
  'help.center.searchPlaceholder': 'Buscar en guías y documentación…',
  'help.center.searchEmpty': 'No hay resultados para «{query}».',
  'help.center.searchGuides': 'Guías',
  'help.center.searchDocs': 'Documentación',
  'help.center.searchError': 'La búsqueda no está disponible ahora mismo.',
  'help.center.back': 'Atrás',
  'help.center.close': 'Cerrar la ayuda',
  'help.center.steps': '{count} pasos',
  'help.center.step': 'Paso {n}',
  'help.center.stepsLabel': 'Pasos',
  'help.center.stepOf': 'Paso {n} de {total}',
  'help.center.screenshot': 'Captura',
  'help.center.result': 'Lo que obtienes',
  'help.center.tips': 'Conviene saber',
  'help.center.related': 'Relacionado',
  'help.center.openDocs': 'Abrir en Ayuda y documentación',
  'help.center.docsSection': 'En la documentación',
  'help.center.noContext': 'Todavía no hay guía para esta pantalla.',
  'help.center.noContextHint': 'Busca en la documentación o cuéntanos qué buscabas.',
  'help.center.feedback': '¿Falta algo?',
  'help.center.feedbackLink': 'Cuéntanoslo en GitHub',
  'help.center.discord': 'Pregunta en Discord',
  'help.center.quick': 'Rápido',
  'help.center.guide': 'Guía',
  'help.center.tour': 'Recorrido',
  'help.center.imageAlt': 'Paso {n} de «{title}»',

  // ctx
  'help.ctx.dashboard.title': 'Panel',
  'help.ctx.dashboard.summary':
    'El panel es la puerta de entrada a todos tus viajes. La tarjeta de embarque de arriba destaca el viaje en curso o el siguiente, la fila de debajo cuenta lo que ya has viajado, y las tarjetas listan todo lo que planificas, has archivado o ya has terminado.',
  'help.ctx.dashboard.bullet.1':
    'Tarjeta de embarque: el viaje en curso o el siguiente, con sus fechas, viajeros, lugares y una cuenta atrás. Haz clic para abrir el viaje.',
  'help.ctx.dashboard.bullet.2':
    'Estadísticas: países visitados, viajes, días de viaje y distancia volada, sumando todos tus viajes.',
  'help.ctx.dashboard.bullet.3':
    'Tarjetas de viaje, filtradas por Planificados, Archivado y Completado, en cuadrícula o en lista. Pasa el ratón por una tarjeta para editar, duplicar, archivar y eliminar.',
  'help.ctx.dashboard.bullet.4':
    'Widgets a la derecha: conversor de divisas, relojes mundiales, próximas reservas y colecciones. Cada uno se puede desactivar.',
  'help.ctx.dashboard.bullet.5':
    'La tarjeta «Nuevo viaje» y el botón de la esquina inferior derecha inician un viaje nuevo.',

  // create-trip
  'help.guide.create-trip.title': 'Crear un viaje',
  'help.guide.create-trip.goal': 'Empezar un viaje nuevo con nombre, fechas y foto de portada.',
  'help.guide.create-trip.step.1':
    'Haz clic en «Nuevo viaje». La tarjeta al final de tus viajes y el botón de la esquina inferior derecha hacen lo mismo.',
  'help.guide.create-trip.step.2':
    'Ponle un nombre al viaje. Es el único campo obligatorio; todo lo demás se puede añadir después.',
  'help.guide.create-trip.step.3':
    'Elige fecha de inicio y de fin. TREK crea un día por fecha, así el itinerario queda listo para rellenar.',
  'help.guide.create-trip.step.4':
    'Opcional: añade una foto de portada. Sube la tuya, arrastra una o busca el destino en Unsplash.',
  'help.guide.create-trip.step.5': 'Haz clic en «Crear nuevo viaje».',
  'help.guide.create-trip.result':
    'El viaje aparece en tu panel. Si es el siguiente, ocupa la tarjeta de embarque de arriba.',
  'help.guide.create-trip.tip.1':
    'Las fechas se pueden cambiar más tarde. Si ya hay reservas, TREK pregunta si deben moverse junto con los días.',
  'help.guide.create-trip.tip.2':
    'La divisa del viaje que eliges aquí es a la que se convierte cada gasto. Elige la divisa del destino.',

  // edit-trip
  'help.guide.edit-trip.title': 'Editar un viaje',
  'help.guide.edit-trip.goal': 'Renombrar un viaje, cambiar sus fechas o ajustar su configuración.',
  'help.guide.edit-trip.step.1':
    'Pasa el ratón por la tarjeta del viaje (o la tarjeta de embarque) y haz clic en el lápiz.',
  'help.guide.edit-trip.step.2':
    'Cambia lo que necesites: nombre, descripción, fechas, portada, divisa, recordatorio o miembros.',
  'help.guide.edit-trip.step.3': 'Haz clic en «Actualizar».',
  'help.guide.edit-trip.result': 'La tarjeta se actualiza al momento, para todos los miembros del viaje.',
  'help.guide.edit-trip.tip.1':
    'Mover las fechas de un viaje que ya tiene reservas abre un segundo paso que pregunta si las reservas deben moverse también.',

  // cover-image
  'help.guide.cover-image.title': 'Poner una foto de portada',
  'help.guide.cover-image.goal': 'Darle al viaje una imagen que se vea en su tarjeta y en la tarjeta de embarque.',
  'help.guide.cover-image.step.1': 'Abre el formulario de edición del viaje con el lápiz de su tarjeta.',
  'help.guide.cover-image.step.2':
    'En «Imagen de portada», suelta una foto, haz clic para subir una o escribe un destino en la búsqueda de Unsplash.',
  'help.guide.cover-image.step.3': 'Elige una foto y haz clic en «Actualizar».',
  'help.guide.cover-image.result':
    'La foto se guarda con el viaje y se muestra en todos los sitios donde aparece el viaje.',
  'help.guide.cover-image.tip.1':
    'Las fotos de la búsqueda de Unsplash se acreditan automáticamente; tus propias subidas se quedan en tu servidor.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Duplicar un viaje',
  'help.guide.duplicate-trip.goal': 'Reutilizar un viaje como plantilla para uno nuevo.',
  'help.guide.duplicate-trip.step.1': 'Pasa el ratón por la tarjeta y haz clic en el icono de duplicar.',
  'help.guide.duplicate-trip.step.2': 'Lee qué se copiará y qué no, y confirma.',
  'help.guide.duplicate-trip.result': 'Aparece una copia junto al original, lista para renombrar y cambiar de fechas.',
  'help.guide.duplicate-trip.tip.1':
    'Se copian días, lugares, reservas, partidas del presupuesto, listas de equipaje y notas de día. No se copian miembros, chat, encuestas, archivos ni enlaces compartidos.',

  // archive-trip
  'help.guide.archive-trip.title': 'Archivar y restaurar un viaje',
  'help.guide.archive-trip.goal': 'Apartar un viaje sin borrarlo y recuperarlo más adelante.',
  'help.guide.archive-trip.step.1': 'Pasa el ratón por la tarjeta y haz clic en «Archivar».',
  'help.guide.archive-trip.step.2': 'Cambia el filtro de encima de las tarjetas a «Archivado» para volver a verlo.',
  'help.guide.archive-trip.step.3': 'Haz clic en «Restaurar» en la tarjeta para devolverlo a «Planificados».',
  'help.guide.archive-trip.result':
    'Los viajes archivados lo conservan todo. Solo dejan de ocupar el panel y el calendario de todos los viajes.',

  // delete-trip
  'help.guide.delete-trip.title': 'Eliminar un viaje',
  'help.guide.delete-trip.goal': 'Quitar un viaje para siempre.',
  'help.guide.delete-trip.step.1': 'Pasa el ratón por la tarjeta y haz clic en la papelera.',
  'help.guide.delete-trip.step.2': 'Confirma. El diálogo nombra el viaje para que sepas que es el correcto.',
  'help.guide.delete-trip.result':
    'El viaje, sus días, lugares, reservas y archivos desaparecen. No hay vuelta atrás; si dudas, archívalo.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Encontrar viajes completados, cambiar entre cuadrícula y lista',
  'help.guide.filter-and-view.goal': 'Ver viajes terminados o archivados y elegir la disposición que prefieras.',
  'help.guide.filter-and-view.step.1':
    'Usa «Planificados», «Archivado» y «Completado» encima de las tarjetas. Completado es todo viaje cuya fecha de fin ya pasó.',
  'help.guide.filter-and-view.step.2':
    'Haz clic en el icono de lista para pasar a una lista compacta; vuelve a hacer clic para la cuadrícula.',
  'help.guide.filter-and-view.result': 'El panel recuerda tu disposición en este dispositivo.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Suscribirte a todos los viajes en tu calendario',
  'help.guide.calendar-feed.goal':
    'Ver los días y las reservas de cada viaje activo en tu app de calendario, siempre sincronizados.',
  'help.guide.calendar-feed.step.1': 'Haz clic en el icono de calendario junto al selector de vista.',
  'help.guide.calendar-feed.step.2':
    'Haz clic en «Enable calendar subscription». TREK genera un enlace privado del feed.',
  'help.guide.calendar-feed.step.3':
    'Añade el feed con uno de los botones (Google, Apple, Outlook) o copia el enlace en cualquier app de calendario que se suscriba a URL.',
  'help.guide.calendar-feed.result':
    'Cada viaje activo aparece en tu calendario y se actualiza solo. Quedan fuera los viajes archivados y los que terminaron hace más de 90 días.',
  'help.guide.calendar-feed.tip.1':
    'El enlace es secreto. Quien lo tenga puede leer el feed; revócalo desde el mismo diálogo si se filtra.',

  // widgets
  'help.guide.widgets.title': 'Elegir los widgets del panel',
  'help.guide.widgets.goal': 'Mostrar u ocultar la fila de estadísticas y los widgets de la derecha.',
  'help.guide.widgets.step.1': 'Abre el menú de tu avatar arriba a la derecha y elige «Ajustes».',
  'help.guide.widgets.step.2': 'Cambia a la pestaña «Appearance».',
  'help.guide.widgets.step.3':
    'En «Dashboard widgets», activa o desactiva cada widget. Escritorio y móvil se configuran por separado.',
  'help.guide.widgets.step.4': 'Vuelve al panel. El cambio se aplica al instante.',
  'help.guide.widgets.result':
    'Los widgets ocultos dejan sitio a tus viajes; desactiva toda la columna derecha para centrar la disposición.',
  'help.guide.widgets.link': 'Abrir los ajustes de apariencia',

  // currency-widget
  'help.guide.currency-widget.title': 'Convertir divisas',
  'help.guide.currency-widget.goal': 'Convertir un importe entre dos divisas con tipos actuales.',
  'help.guide.currency-widget.step.1': 'Escribe el importe y elige las dos divisas.',
  'help.guide.currency-widget.step.2':
    'La flecha entre ambas intercambia el par; la flecha circular actualiza el tipo de cambio.',
  'help.guide.currency-widget.result':
    'Tu par de divisas se recuerda en tu cuenta, así que es el mismo en todos tus dispositivos.',
  'help.guide.currency-widget.tip.1': 'Los tipos vienen del Banco Central Europeo y se actualizan una vez al día.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Añadir relojes mundiales',
  'help.guide.timezones-widget.goal': 'Tener a la vista la hora local de tus destinos.',
  'help.guide.timezones-widget.step.1': 'Haz clic en + en el widget «Zonas horarias» y busca una ciudad.',
  'help.guide.timezones-widget.step.2': 'Quita un reloj con la × de al lado.',
  'help.guide.timezones-widget.result': 'Tus relojes se guardan con tu cuenta.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay es tu planificador personal de vacaciones: cuántos días tienes al año, cuáles has registrado y cuántos quedan. La cuadrícula muestra el año entero de un vistazo; la barra lateral reúne el selector de año, las personas con las que planificas, los calendarios compartidos contigo, la leyenda y tu saldo.',
  'help.ctx.vacay.bullet.1':
    'Cuadrícula anual: doce tarjetas de mes, una celda por día. Haz clic en un día para registrarlo o borrarlo. Un puntito azul marca los días que ya cubre un viaje.',
  'help.ctx.vacay.bullet.2':
    'Barra inferior: modo Vacaciones o Festivo de empresa, más los interruptores Medio día y Compensación que cambian lo que registra un clic.',
  'help.ctx.vacay.bullet.3':
    'Derecho: tus días del año, cuántos has usado y cuántos quedan, con el arrastre del periodo anterior.',
  'help.ctx.vacay.bullet.4':
    'Personas son quienes se han fusionado con tu plan, cada una con su color. Calendarios compartidos son anillos de solo lectura con los días libres de otros.',
  'help.ctx.vacay.bullet.5':
    'Los ajustes cubren fines de semana, inicio de semana, arrastre, tu año de vacaciones, festivos de empresa y calendarios de festivos o vacaciones escolares.',
  // log-day
  'help.guide.log-day.title': 'Registrar un día de vacaciones',
  'help.guide.log-day.goal': 'Marcar un día libre en la cuadrícula y ver cómo el saldo lo sigue.',
  'help.guide.log-day.step.1':
    'Mira la barra inferior: el botón de la izquierda, con tu color, significa que un clic registra un día de vacaciones para ti.',
  'help.guide.log-day.step.2':
    'Haz clic en un día de cualquier tarjeta de mes. Se rellena con tu color y Usados cuenta un día más.',
  'help.guide.log-day.step.3': 'Vuelve a hacer clic en el mismo día para borrarlo.',
  'help.guide.log-day.result':
    'El día queda registrado, Días, Usados y Restantes se actualizan al instante, y quien esté fusionado con tu plan lo ve en directo.',
  'help.guide.log-day.tip.1':
    'Los fines de semana no se pueden registrar mientras Bloquear fines de semana esté activado en Ajustes.',
  'help.guide.log-day.tip.2':
    'Un punto azul en una celda significa que uno de tus viajes cubre ese día, así ves dónde coinciden vacaciones y viajes.',
  // half-day
  'help.guide.half-day.title': 'Registrar medio día',
  'help.guide.half-day.goal': 'Tomarte una tarde sin gastar un día entero de saldo.',
  'help.guide.half-day.step.1':
    'Activa Medio día en la barra. Su punto naranja es la marca que recibe un medio día en la cuadrícula.',
  'help.guide.half-day.step.2': 'Haz clic en un día. Se registra como 0,5 y lleva el punto naranja en la esquina.',
  'help.guide.half-day.step.3':
    'Desactiva Medio día cuando termines; hacer clic en un medio día con otros ajustes lo convierte en el sitio.',
  'help.guide.half-day.result':
    'Usados crece 0,5. Medio día y Compensación son independientes, así que también cabe medio día de compensación.',
  'help.guide.half-day.tip.1':
    'La barra siempre muestra la marca que pondrá tu próximo clic, para comprobarlo antes de registrar.',
  // comp-day
  'help.guide.comp-day.title': 'Registrar compensación o flex',
  'help.guide.comp-day.goal': 'Tomar tiempo compensatorio que no cuesta días de vacaciones.',
  'help.guide.comp-day.step.1':
    'Activa Compensación en la barra. El disco rayado es el aspecto de un día de compensación en la cuadrícula.',
  'help.guide.comp-day.step.2':
    'Haz clic en un día. Se rellena con rayas diagonales de tu color en vez de un bloque sólido.',
  'help.guide.comp-day.result':
    'Los días de compensación se cuentan junto a las tarjetas de saldo y nunca reducen Restantes.',
  'help.guide.comp-day.tip.1':
    'Horas extra recuperadas, flextime, un día compensatorio: todo lo que es libre pero no vacaciones va aquí.',
  // entitlement
  'help.guide.entitlement.title': 'Definir tu saldo de vacaciones',
  'help.guide.entitlement.goal': 'Decirle a Vacay cuántos días de vacaciones tienes al año.',
  'help.guide.entitlement.step.1': 'En la barra lateral, haz clic en la tarjeta Días bajo Derecho.',
  'help.guide.entitlement.step.2': 'Escribe tu número de días y pulsa Intro.',
  'help.guide.entitlement.result':
    'Restantes se recalcula a partir de tu saldo, el arrastre si lo hay y los días usados.',
  'help.guide.entitlement.tip.1':
    'Cada año tiene su propio saldo, así que un cambio aquí solo afecta al año seleccionado.',
  // years
  'help.guide.years.title': 'Añadir años y cambiar entre ellos',
  'help.guide.years.goal': 'Planificar ya el año que viene, o repasar el anterior.',
  'help.guide.years.step.1':
    'Haz clic en el + a la derecha del año para añadir el siguiente, o en el + de la izquierda para el anterior.',
  'help.guide.years.step.2': 'Cambia de año con las flechas o con las fichas de año de debajo.',
  'help.guide.years.step.3':
    'Para quitar un año, pasa el ratón por su ficha y haz clic en el pequeño menos. Sus entradas se van con él, así que confirma con cuidado.',
  'help.guide.years.result': 'Cada año conserva su propio saldo y sus entradas; el arrastre los enlaza.',
  // company-holidays
  'help.guide.company-holidays.title': 'Marcar festivos de empresa',
  'help.guide.company-holidays.goal': 'Bloquear los días en que toda la empresa cierra sin gastar el saldo de nadie.',
  'help.guide.company-holidays.step.1':
    'Abre Ajustes y comprueba que Festivos de empresa está activado. Lo está por defecto; la barra solo ofrece el modo mientras lo esté.',
  'help.guide.company-holidays.step.2': 'De vuelta en la cuadrícula, pon la barra en modo Festivo de empresa.',
  'help.guide.company-holidays.step.3': 'Haz clic en los días. Se vuelven ámbar y aparecen en la leyenda.',
  'help.guide.company-holidays.result':
    'Los festivos de empresa los ve todo el que esté fusionado con el plan y nunca reducen Restantes.',
  'help.guide.company-holidays.tip.1':
    'Cualquier persona fusionada puede editar los festivos de empresa, así que acordad quién las mantiene.',
  // public-holidays
  'help.guide.public-holidays.title': 'Mostrar festivos',
  'help.guide.public-holidays.goal': 'Poner en la cuadrícula los festivos de tu país o región.',
  'help.guide.public-holidays.step.1': 'Abre Ajustes y activa Festivos.',
  'help.guide.public-holidays.step.2':
    'Haz clic en Añadir calendario, elige el país y, cuando importe, la región. Dale un color y una etiqueta si quieres.',
  'help.guide.public-holidays.step.3': 'Cierra Ajustes. Los festivos aparecen en la cuadrícula y en la leyenda.',
  'help.guide.public-holidays.result':
    'Los festivos se marcan con el color del calendario y nunca cuentan contra tu saldo.',
  'help.guide.public-holidays.tip.1':
    'Puedes añadir varios calendarios, por ejemplo tu región y la de un compañero fusionado.',
  // school-holidays
  'help.guide.school-holidays.title': 'Mostrar vacaciones escolares',
  'help.guide.school-holidays.goal': 'Ver las vacaciones escolares de tu región junto a tus propios días libres.',
  'help.guide.school-holidays.step.1': 'Abre Ajustes y activa School Holidays.',
  'help.guide.school-holidays.step.2':
    'Haz clic en Añadir calendario y elige el país. Si un país divide su calendario, elige también la región o el grupo.',
  'help.guide.school-holidays.step.3':
    'Cierra Ajustes. Cada periodo recibe una banda de color en la parte baja de sus días.',
  'help.guide.school-holidays.result':
    'Las vacaciones escolares son puramente visuales: nunca reducen el saldo de nadie.',
  'help.guide.school-holidays.tip.1':
    '¿Falta tu región? Tu administrador puede mantener las vacaciones escolares a mano en Admin, Personalización, Vacaciones escolares.',
  // weekends
  'help.guide.weekends.title': 'Bloquear fines de semana y fijar el inicio de semana',
  'help.guide.weekends.goal':
    'Dejar los fines de semana fuera del cómputo y empezar la semana el día al que estás acostumbrado.',
  'help.guide.weekends.step.1': 'Abre Ajustes.',
  'help.guide.weekends.step.2': 'Activa Bloquear fines de semana y elige qué días cuentan como tu fin de semana.',
  'help.guide.weekends.step.3': 'En La semana comienza el, elige lunes o domingo.',
  'help.guide.weekends.result':
    'Los días bloqueados aparecen en gris en la cuadrícula y no se pueden registrar por error.',
  // leave-year
  'help.guide.leave-year.title': 'Definir tu año de vacaciones',
  'help.guide.leave-year.goal':
    'Contar tu saldo por año fiscal o desde tu fecha de contratación en vez de enero a diciembre.',
  'help.guide.leave-year.step.1': 'Abre Ajustes y busca Año de vacaciones.',
  'help.guide.leave-year.step.2':
    'Elige Año natural, Año fiscal (con el mes y el día en que empieza) o Fecha de alta (con la fecha en que te contrataron).',
  'help.guide.leave-year.result':
    'Saldo, días usados y arrastre siguen ese periodo, y la cuadrícula empieza por su primer mes.',
  'help.guide.leave-year.tip.1':
    'Este ajuste es personal: en un plan fusionado cada uno conserva su propio año de vacaciones y sus cifras.',
  // carry-over
  'help.guide.carry-over.title': 'Arrastrar los días no usados',
  'help.guide.carry-over.goal': 'Sumar lo que sobra al final de un periodo al siguiente.',
  'help.guide.carry-over.step.1': 'Abre Ajustes.',
  'help.guide.carry-over.step.2': 'Activa Arrastrar saldo.',
  'help.guide.carry-over.result': 'La cantidad arrastrada se recalcula en todos tus años y se muestra bajo el saldo.',
  'help.guide.carry-over.tip.1': 'Desactivarlo pone todos los saldos de arrastre a cero.',
  // invite
  'help.guide.invite.title': 'Planificar junto a alguien',
  'help.guide.invite.goal':
    'Fusionar tu plan con otro usuario de TREK para ver los días libres de ambos en una sola cuadrícula.',
  'help.guide.invite.step.1': 'Haz clic en el icono de persona del panel Personas.',
  'help.guide.invite.step.2': 'Elige al usuario y envía la invitación.',
  'help.guide.invite.step.3': 'Recibe una notificación y acepta. Hasta entonces la invitación aparece como pendiente.',
  'help.guide.invite.result':
    'Ambos planes se fusionan: cada persona tiene un color, podéis registrar días el uno para el otro y todo se sincroniza en directo.',
  'help.guide.invite.tip.1':
    'Para deshacer una fusión, usa Disolver en Ajustes. Las entradas de cada uno vuelven a su propio plan.',
  'help.guide.invite.tip.2': 'Si la otra persona solo debe ver tus días, comparte tu calendario en vez de fusionar.',
  // share-calendar
  'help.guide.share-calendar.title': 'Compartir tu calendario en solo lectura',
  'help.guide.share-calendar.goal': 'Dejar que alguien vea cuándo estás libre sin darle voz en tu plan.',
  'help.guide.share-calendar.step.1': 'Haz clic en el icono de compartir del panel Calendarios compartidos.',
  'help.guide.share-calendar.step.2': 'Elige al usuario y haz clic en Compartir. No hace falta aceptación.',
  'help.guide.share-calendar.step.3':
    'Los calendarios compartidos contigo aparecen en el mismo panel; el ojo oculta uno, Dejar de compartir revoca el tuyo.',
  'help.guide.share-calendar.result':
    'Tus días libres aparecen como un anillo de color en su cuadrícula. Nada de lo que compartes puede editarse desde allí.',
  'help.guide.share-calendar.tip.1':
    'Compartir y fusionar son independientes: puedes estar fusionado con una persona y compartir con otras.',
  'help.guide.share-calendar.tip.2': 'Pasa el ratón por un día con anillo para ver quién está libre y cuánto tiempo.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'El Atlas es tu huella viajera en un mapa del mundo: cada país al que te ha llevado un viaje está coloreado, y los que visitaste antes de TREK los añades a mano. Acerca el zoom para ver regiones, lleva una lista de deseos de lugares que aún quieres ver y lee tus cifras en el panel de cristal de abajo.',
  'help.ctx.atlas.bullet.1':
    'El mapa: los países visitados llevan un color que es suyo, los planificados tienen contorno discontinuo, los de la lista de deseos un rayado diagonal y todo lo demás es gris. Pasa el ratón por un país para ver sus viajes, lugares y primera y última visita.',
  'help.ctx.atlas.bullet.2':
    'Búsqueda arriba: escribe un país o un lugar. Elegir un país vuela hasta él y abre su ventana; elegir un lugar aterriza en su región para que puedas marcarla.',
  'help.ctx.atlas.bullet.3':
    'Mostrar países planeados, arriba a la derecha: revela los países de tus próximos viajes. El interruptor solo aparece mientras tengas alguno.',
  'help.ctx.atlas.bullet.4':
    'Panel de abajo: la pestaña Estadísticas con países, viajes, lugares, ciudades, días, continentes y tu racha; la pestaña Lista de deseos con lo que aún te espera.',
  'help.ctx.atlas.bullet.5':
    'Regiones: a partir del nivel de zoom 5 el mapa pasa a estados y provincias, cada uno clicable para marcarlo o quitarlo.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: con el addon conectado, un panel a la izquierda de las estadísticas tacha deseos y añade países desde tus registros, nunca sin tu confirmación.',
  // mark-country
  'help.guide.mark-country.title': 'Marcar un país como visitado',
  'help.guide.mark-country.goal':
    'Añade un país en el que estuviste antes de TREK, para que el mapa y tu recuento lo incluyan.',
  'help.guide.mark-country.step.1': 'Escribe el país en el cuadro de búsqueda de la parte superior del mapa.',
  'help.guide.mark-country.step.2':
    'Elígelo de la lista. El mapa vuela hasta allí y se abre una ventana para ese país.',
  'help.guide.mark-country.step.3': 'Elige Marcar como visitado.',
  'help.guide.mark-country.result':
    'El país toma su color en el mapa y Países cuenta uno más. Ese color es permanente: marcar más países nunca reordena el resto.',
  'help.guide.mark-country.tip.1':
    'Hacer clic en un país gris del mapa abre la misma ventana; la búsqueda es el camino seguro para países pequeños.',
  'help.guide.mark-country.tip.2':
    'Un país marcado a mano siempre cuenta como visitado, sean cuales sean las fechas de cualquier viaje allí.',
  // unmark-country
  'help.guide.unmark-country.title': 'Quitar un país que marcaste',
  'help.guide.unmark-country.goal': 'Vuelve a quitar del mapa un país marcado a mano.',
  'help.guide.unmark-country.step.1':
    'Busca el país y elígelo, o haz clic en él en el mapa. Para un país que marcaste tú, la ventana pregunta si quitarlo.',
  'help.guide.unmark-country.step.2': 'Confirma con Eliminar.',
  'help.guide.unmark-country.result': 'El país vuelve a gris y sale de tu recuento.',
  'help.guide.unmark-country.tip.1':
    'Solo los países marcados a mano se quitan así. Un país con viajes o lugares se queda mientras los tenga; Eliminar también está en su tarjeta de detalle del panel cuando se marcó a mano.',
  // country-details
  'help.guide.country-details.title': 'Ver qué hiciste en un país',
  'help.guide.country-details.goal': 'Abre un país visitado y salta a los viajes que te llevaron allí.',
  'help.guide.country-details.step.1': 'Busca un país que hayas visitado.',
  'help.guide.country-details.step.2':
    'Elígelo. El mapa vuela hasta allí y el panel de abajo añade una tarjeta con su bandera, lugares, viajes y un chip por viaje.',
  'help.guide.country-details.result': 'Haz clic en un chip de viaje para abrir ese viaje en el planificador.',
  'help.guide.country-details.tip.1':
    'Pasar el ratón por el país en el mapa muestra las mismas cifras más la primera y la última visita.',
  // planned-countries
  'help.guide.planned-countries.title': 'Mostrar los países a los que vas',
  'help.guide.planned-countries.goal': 'Lleva al mapa los países de tus próximos viajes sin contarlos como visitados.',
  'help.guide.planned-countries.step.1':
    'Activa Mostrar países planeados, arriba a la derecha. El número de al lado dice cuántos esperan.',
  'help.guide.planned-countries.step.2':
    'Busca un país planificado y elígelo: el panel dice Planeado y el tooltip del mapa muestra cuándo vas.',
  'help.guide.planned-countries.result':
    'Los países planificados aparecen con contorno discontinuo, para que nunca parezcan un sitio donde ya estuviste. El interruptor recuerda tu elección.',
  'help.guide.planned-countries.tip.1':
    'Un país cuenta como visitado en cuanto el viaje allí ha empezado; un viaje en curso también cuenta. Los viajes sin fechas quedan completamente fuera de las estadísticas.',
  'help.guide.planned-countries.tip.2': 'El interruptor solo existe mientras tengas viajes próximos.',
  // regions
  'help.guide.regions.title': 'Marcar una región',
  'help.guide.regions.goal': 'Más fino que países: marca los estados, provincias o prefecturas en los que has estado.',
  'help.guide.regions.step.1':
    'Acerca el zoom a un país hasta que aparezcan sus regiones, desde el nivel de zoom 5. Buscar el país y elegirlo te acerca lo suficiente.',
  'help.guide.regions.step.2':
    'Haz clic en una región. Al pasar el ratón sale su nombre; la ventana muestra la región y su país.',
  'help.guide.regions.step.3': 'Elige Marcar como visitado.',
  'help.guide.regions.result':
    'La región se rellena con el color del país. Marcar una región también cuenta el país como visitado si aún no lo estaba.',
  'help.guide.regions.tip.1':
    'Hacer clic en una región visitada ofrece Eliminar, la hayas marcado tú o la haya puesto ahí un lugar.',
  'help.guide.regions.tip.2':
    'Las regiones en las que tienes lugares reales se marcan por ti; ahí no hay nada que hacer.',
  // search-place
  'help.guide.search-place.title': 'Encontrar un lugar y marcar su región',
  'help.guide.search-place.goal': 'Marca Baviera buscando Múnich, sin saber en qué región está una ciudad.',
  'help.guide.search-place.step.1':
    'Escribe una ciudad, un monumento o una dirección en el cuadro de búsqueda. Los países van primero; los lugares que coinciden aparecen debajo, bajo Lugares.',
  'help.guide.search-place.step.2': 'Elige el lugar. El mapa vuela hasta allí y averigua en qué región está el punto.',
  'help.guide.search-place.step.3':
    'Elige Marcar como visitado para esa región, o Añadir a lista de deseos si aún te espera.',
  'help.guide.search-place.result':
    'La región queda marcada, y con ella el país. Los países sin datos de regiones en el paquete de mapas recurren al país en sí.',
  'help.guide.search-place.tip.1':
    'Los lugares vienen de la misma búsqueda que en todo TREK, así que siguen al proveedor que configuró tu admin.',
  // bucket-country
  'help.guide.bucket-country.title': 'Poner un país en la lista de deseos',
  'help.guide.bucket-country.goal':
    'Lleva una lista de deseos de países directamente en el mapa, aparte de los que ya visitaste.',
  'help.guide.bucket-country.step.1': 'Busca el país y elígelo, o haz clic en él en el mapa.',
  'help.guide.bucket-country.step.2': 'Elige Añadir a lista de deseos.',
  'help.guide.bucket-country.step.3': 'Elige mes y año si ya sabes cuándo, y confirma con Añadir a lista de deseos.',
  'help.guide.bucket-country.result':
    'El país se dibuja con rayado diagonal en el color que llevará cuando llegues, y aparece en la pestaña Lista de deseos del panel.',
  'help.guide.bucket-country.tip.1':
    'La misma ventana ofrece Quitar de la lista de deseos una vez que el país está en la lista.',
  'help.guide.bucket-country.tip.2':
    'Una entrada por fecha objetivo: el mismo país puede estar en la lista para dos meses distintos, pero no dos veces para el mismo.',
  // bucket-place
  'help.guide.bucket-place.title': 'Añadir un lugar a la lista de deseos',
  'help.guide.bucket-place.goal':
    'Guarda una ciudad, un monumento o una dirección con la que sueñas, con coordenadas y fecha objetivo.',
  'help.guide.bucket-place.step.1': 'Abre la pestaña Lista de deseos en el panel de abajo.',
  'help.guide.bucket-place.step.2': 'Haz clic en Añadir lugar.',
  'help.guide.bucket-place.step.3':
    'Escribe el nombre y pulsa el botón de búsqueda; elige la coincidencia para que el lugar tenga coordenadas. Escribir solo un nombre y saltarte la búsqueda también funciona.',
  'help.guide.bucket-place.step.4': 'Elige mes y año si quieres y haz clic en Añadir.',
  'help.guide.bucket-place.result':
    'El lugar queda arriba de tu lista de deseos con su fecha objetivo; la × de al lado lo quita de nuevo.',
  'help.guide.bucket-place.tip.1':
    'Un deseo con coordenadas es lo que Dawarich puede tachar por ti más tarde, cuando tus registros muestren que estuviste allí.',
  // stats
  'help.guide.stats.title': 'Leer tus estadísticas',
  'help.guide.stats.goal': 'Saber qué cuentan las cifras del panel, y qué no.',
  'help.guide.stats.step.1':
    'Países es el número de países distintos en los que has estado de verdad; los planificados se muestran al lado, no dentro. Viajes, Lugares y Días son totales de todos tus viajes. Ciudades se deduce de las direcciones de tus lugares, así que es una estimación.',
  'help.guide.stats.step.2':
    'Los continentes muestran países visitados por continente; la Antártida se une a la fila en cuanto hayas estado. Luego tu racha, años consecutivos con al menos un viaje, y cuántos viajes hiciste este año.',
  'help.guide.stats.result': 'Las cifras siguen a tus viajes mientras los planificas; aquí no hay nada que mantener.',
  'help.guide.stats.tip.1':
    'Las ciudades se leen del texto de la dirección, no se consultan, así que una dirección corta como «Osteria Francescana, Italy» o una que termina en una prefectura puede dar una región en vez de una ciudad.',
  'help.guide.stats.tip.2':
    'Los países marcados a mano cuentan en Países y en los continentes, pero no aportan viajes, lugares ni días.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Colecciones',
  'help.ctx.collections.summary':
    'Collections es tu biblioteca de lugares fuera de cualquier viaje: listas con nombre de lugares que encontraste y quieres guardar, cada lugar con un estado Idea, Quiero ir o Visitado. Los lugares se copian hacia y desde los viajes, nunca se enlazan, así que una lista y un viaje nunca se cambian entre sí.',
  'help.ctx.collections.bullet.1':
    'Barra de listas a la izquierda: tus propias listas, las compartidas contigo, invitaciones que esperan un sí, Todos los guardados como la unión de todo lo tuyo, y Nueva lista más la importación de archivo arriba del todo.',
  'help.ctx.collections.bullet.2':
    'Cabecera de la lista abierta: su color, portada, descripción y enlaces, los miembros, y las acciones Editar, Exportar y Compartir a la derecha.',
  'help.ctx.collections.bullet.3':
    'Fila de filtros sobre los lugares: estado, categoría, valoración y orden, el filtro de etiquetas, el + para añadir un lugar, la importación desde un viaje y Elegir para acciones en bloque.',
  'help.ctx.collections.bullet.4':
    'Filas de lugares: avatar, nombre y dirección, etiquetas y categoría, y la píldora de estado a la derecha, que cambia con un clic.',
  'help.ctx.collections.bullet.5':
    'Mapa a la derecha: un pin por lugar con coordenadas, el conmutador lista o mapa, el cuadro de búsqueda y el filtro de etiquetas. Hacer clic en un pin abre ese lugar.',
  'help.ctx.collections.bullet.6':
    'Ficha de detalle: haz clic en una fila para ver portada, categoría, etiquetas, estado, descripción y enlaces, con Editar, Copiar al viaje y Quitar de la lista.',
  // create-list
  'help.guide.create-list.title': 'Crear una lista',
  'help.guide.create-list.goal':
    'Empieza una nueva lista con nombre, con un color y una portada, lista para recibir lugares.',
  'help.guide.create-list.step.1': 'Haz clic en Nueva lista arriba de la barra de listas.',
  'help.guide.create-list.step.2':
    'Dale un nombre a la lista y elige un color. Imagen de portada, descripción y enlaces son opcionales; puedes añadirlos más tarde con Editar.',
  'help.guide.create-list.step.3': 'Haz clic en Crear.',
  'help.guide.create-list.result':
    'La lista se abre vacía, con Añadir un lugar e Importar de un viaje como las dos formas de llenarla.',
  'help.guide.create-list.tip.1':
    'La portada puede ser una subida tuya o una imagen encontrada con la búsqueda de Unsplash en el mismo diálogo.',
  // add-place
  'help.guide.add-place.title': 'Añadir un lugar',
  'help.guide.add-place.goal':
    'Encuentra un lugar y guárdalo en la lista abierta con nombre, categoría, estado y notas de una vez.',
  'help.guide.add-place.step.1': 'Haz clic en el + de la fila de filtros sobre los lugares.',
  'help.guide.add-place.step.2':
    'Escribe el lugar en el campo de búsqueda y elige un resultado. Nombre, dirección y coordenadas se rellenan a partir de él.',
  'help.guide.add-place.step.3':
    'Pon el estado y, si quieres, una categoría, una descripción y enlaces, y luego haz clic en Añadir. El diálogo sigue abierto para el siguiente lugar; Cancelar lo cierra.',
  'help.guide.add-place.result': 'El lugar aparece en la lista y, cuando tiene coordenadas, como un pin en el mapa.',
  'help.guide.add-place.tip.1':
    'Desde dentro de un viaje, Guardar en colección en el inspector del lugar o en el menú del lugar pone un lugar del viaje en una lista sin salir del viaje.',
  'help.guide.add-place.tip.2':
    'La lista debe ser tuya o una en la que seas editor o administrador; el + no está en Todos los guardados ni en una lista que solo ves.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Importar lugares de un viaje',
  'help.guide.import-from-trip.goal':
    'Trae de una vez todos los lugares de un viaje a una lista en vez de guardarlos uno a uno.',
  'help.guide.import-from-trip.step.1':
    'Haz clic en el botón de importar con la flecha de nube en la fila de filtros. En una lista vacía la misma acción está junto a Añadir un lugar.',
  'help.guide.import-from-trip.step.2': 'Elige uno de tus viajes.',
  'help.guide.import-from-trip.step.3':
    'Marca los lugares que quieras. Los que ya están en la lista aparecen en gris; los que no están en ningún día del viaje salen seleccionados de entrada. Solo nuevos oculta lo que ya tienes.',
  'help.guide.import-from-trip.step.4':
    'Haz clic en Importar. El botón siempre dice cuántos están a punto de añadirse.',
  'help.guide.import-from-trip.result':
    'Los lugares se copian a la lista con su nombre, dirección, coordenadas, descripción y categoría. El viaje se queda como estaba.',
  'help.guide.import-from-trip.tip.1':
    'Los duplicados por nombre o coordenadas se saltan automáticamente, así que importar dos veces no hace daño.',
  'help.guide.import-from-trip.tip.2':
    'Dentro de la lista de lugares de un viaje, el modo de selección ofrece en cambio Guardar en colección para un conjunto de lugares elegidos a mano.',
  // place-status
  'help.guide.place-status.title': 'Poner el estado de un lugar',
  'help.guide.place-status.goal': 'Lleva la cuenta de qué es una idea, qué está en la lista corta y dónde has estado.',
  'help.guide.place-status.step.1':
    'Haz clic en la píldora de estado al final derecho de una fila de lugar. Idea pasa a Quiero ir.',
  'help.guide.place-status.step.2': 'Haz clic otra vez para Visitado, y una más para volver a empezar en Idea.',
  'help.guide.place-status.result':
    'La píldora y su color cambian al momento; el filtro de estado sobre la lista lleva la cuenta.',
  'help.guide.place-status.tip.1': 'El estado es cosa de Collections: copiar un lugar a un viaje no se lo lleva.',
  'help.guide.place-status.tip.2':
    'Desde un viaje, Guardar en colección muestra una píldora de estado por cada lista en la que está el lugar, y el panel de lugares tiene la acción Marcar como visitado para una selección.',
  // place-detail
  'help.guide.place-detail.title': 'Abrir un lugar guardado',
  'help.guide.place-detail.goal': 'Ve todo sobre un lugar y actúa: editar, copiar a un viaje, quitar.',
  'help.guide.place-detail.step.1':
    'Haz clic en una fila de lugar. La ficha de detalle se abre junto a la lista y el mapa se desplaza hasta el lugar.',
  'help.guide.place-detail.step.2':
    'Abajo están Editar, Copiar al viaje y Quitar de la lista; la cámara sobre la portada cambia la foto automática por una tuya.',
  'help.guide.place-detail.result':
    'Editar desbloquea nombre, categoría, etiquetas, dirección, coordenadas, descripción y enlaces ahí mismo en la ficha.',
  'help.guide.place-detail.tip.1':
    'La portada se obtiene automáticamente cuando el lugar no tiene imagen propia. Tu propia subida puede ser JPG, PNG, GIF o WebP hasta 20 MB.',
  'help.guide.place-detail.tip.2':
    'Los miembros de una lista compartida también pueden dejar aquí una valoración con estrellas, y el filtro de valoración de la fila de filtros usa la media.',
  // labels
  'help.guide.labels.title': 'Agrupar lugares con etiquetas',
  'help.guide.labels.goal':
    'Dale a una lista sus propias etiquetas, como barrios o días, más allá de las categorías comunes.',
  'help.guide.labels.step.1': 'Abre el gestor de etiquetas desde el control de etiquetas de la fila de filtros.',
  'help.guide.labels.step.2':
    'Escribe un nombre, elige un color y haz clic en Añadir etiqueta. Renombra, recolorea o elimina etiquetas existentes en el mismo diálogo.',
  'help.guide.labels.step.3':
    'Activa Elegir, marca los lugares y haz clic en Asignar etiqueta en la barra de selección. Un solo lugar también recibe etiquetas con Editar en su ficha de detalle.',
  'help.guide.labels.step.4':
    'Elige una o más etiquetas en la fila de filtros para reducir la lista y el mapa a los lugares que lleven cualquiera de ellas.',
  'help.guide.labels.result':
    'Los lugares etiquetados muestran sus etiquetas en la fila; el filtro de etiquetas está ahí para todos los miembros, lectores incluidos.',
  'help.guide.labels.tip.1':
    'Las etiquetas pertenecen a la única lista en la que se crearon. Mover un lugar a otra lista las deja atrás.',
  'help.guide.labels.tip.2': 'Gestionar y asignar etiquetas requiere derechos de edición en la lista.',
  // filter-select
  'help.guide.filter-select.title': 'Filtrar y seleccionar lugares',
  'help.guide.filter-select.goal': 'Reduce la lista y actúa sobre muchos lugares a la vez.',
  'help.guide.filter-select.step.1':
    'Usa los desplegables de la fila de filtros: estado, categoría, valoración mínima y orden. Cada uno muestra cuántos lugares dejaría.',
  'help.guide.filter-select.step.2':
    'Haz clic en Elegir. Cada fila recibe una casilla y aparece una barra de selección.',
  'help.guide.filter-select.step.3':
    'Marca lugares o usa Seleccionar todo para todo lo filtrado ahora mismo, y luego elige Asignar etiqueta, Mover a lista, Duplicar en lista, Copiar al viaje o Eliminar.',
  'help.guide.filter-select.result':
    'Las acciones se aplican a toda la selección de una vez. La × de la derecha sale del modo de selección.',
  'help.guide.filter-select.tip.1':
    'Seleccionar todo sigue al filtro, así que filtrar por Quiero ir y seleccionar todo es la forma rápida de actuar sobre la lista corta.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Copiar lugares a un viaje',
  'help.guide.copy-to-trip.goal': 'Convierte lugares guardados en paradas de uno de tus viajes.',
  'help.guide.copy-to-trip.step.1':
    'Activa Elegir y marca los lugares, o abre un lugar y usa Copiar al viaje en su ficha de detalle.',
  'help.guide.copy-to-trip.step.2': 'Haz clic en Copiar al viaje en la barra de selección.',
  'help.guide.copy-to-trip.step.3': 'Elige el viaje. El cuadro de búsqueda acorta una lista larga.',
  'help.guide.copy-to-trip.result':
    'Los lugares aterrizan en la lista de lugares de ese viaje con nombre, descripción, categoría, notas, precio, coordenadas, foto y tags. Nada cambia en la colección.',
  'help.guide.copy-to-trip.tip.1':
    'Los lectores de una lista compartida también pueden hacerlo; copia desde la lista, no la cambia.',
  // share-list
  'help.guide.share-list.title': 'Compartir una lista con alguien',
  'help.guide.share-list.goal': 'Planifica una lista junto con otras personas de este TREK, en directo.',
  'help.guide.share-list.step.1': 'Haz clic en Compartir en la cabecera de tu lista.',
  'help.guide.share-list.step.2': 'Selecciona al usuario y un rol: Lector, Editor o Administrador.',
  'help.guide.share-list.step.3':
    'Haz clic en Enviar invitación. La persona aparece como invitación pendiente hasta que acepta la invitación en su barra de listas.',
  'help.guide.share-list.result':
    'Una vez aceptada, la lista le aparece bajo Compartida y cada cambio se sincroniza en directo. Los miembros y sus roles siguen siendo editables en el mismo diálogo.',
  'help.guide.share-list.tip.1':
    'Los lectores pueden mirar, valorar y copiar lugares a sus propios viajes. Los editores añaden y editan lugares y etiquetas. Los administradores además pueden eliminar.',
  'help.guide.share-list.tip.2':
    'Solo el propietario invita y quita personas; un miembro puede salir por sí mismo de una lista compartida.',
  // export-list
  'help.guide.export-list.title': 'Exportar una lista como archivo',
  'help.guide.export-list.goal': 'Entrega una lista a alguien de otro TREK, o llévatela a una app de mapas.',
  'help.guide.export-list.step.1': 'Haz clic en Exportar en la cabecera de la lista.',
  'help.guide.export-list.step.2':
    'Elige Lista de TREK para otro TREK, con etiquetas y estado, o GPX para OsmAnd, Organic Maps, un Garmin y otras apps que leen waypoints.',
  'help.guide.export-list.result':
    'El archivo se descarga. Cualquier miembro de una lista compartida puede exportarla.',
  'help.guide.export-list.tip.1':
    'Un lugar sin coordenadas no puede ser un waypoint GPX; se deja fuera y TREK te dice cuántos han sido.',
  'help.guide.export-list.tip.2':
    'Valoraciones, miembros y fotos subidas se quedan atrás a propósito; pertenecen a este TREK, no a la lista.',
  // import-file
  'help.guide.import-file.title': 'Importar una lista desde un archivo',
  'help.guide.import-file.goal':
    'Trae un archivo de Lista de TREK o un archivo GPX, como lista nueva o a una que ya tengas.',
  'help.guide.import-file.step.1':
    'Haz clic en el botón de importar con la flecha de subida junto a Nueva lista en la barra de listas.',
  'help.guide.import-file.step.2':
    'Elige el archivo. TREK muestra lo que contiene antes de que pase nada: el nombre, cuántos lugares y etiquetas.',
  'help.guide.import-file.step.3':
    'Deja Nueva lista y cambia el nombre si quieres, o elige Añadir a una lista para meter los lugares en una lista que puedas editar, y luego haz clic en Importar.',
  'help.guide.import-file.result':
    'Aterrizas en la lista con los lugares importados. Añadir a una lista únicamente añade; los lugares que ya estaban conservan su estado, sus notas y sus etiquetas.',
  'help.guide.import-file.tip.1':
    'De un GPX, cada waypoint con nombre se convierte en un lugar; los tracks son líneas y se dejan fuera, y la vista previa dice cuántos puntos eran.',
  'help.guide.import-file.tip.2':
    'Un archivo que no es ni una Lista de TREK ni un GPX se rechaza con un motivo; un solo lugar ilegible se salta, no el archivo entero.',
  // edit-list
  'help.guide.edit-list.title': 'Editar o eliminar una lista',
  'help.guide.edit-list.goal':
    'Cambia el nombre, el color, la portada, la descripción o los enlaces de una lista, o quita la lista.',
  'help.guide.edit-list.step.1': 'Haz clic en Editar en la cabecera de la lista. Solo el propietario lo ve.',
  'help.guide.edit-list.step.2':
    'Cambia lo que quieras y haz clic en Guardar. Eliminar lista, abajo a la izquierda, quita la lista con todos sus lugares, tras una confirmación.',
  'help.guide.edit-list.result': 'La cabecera toma el nuevo color, la portada y la descripción de inmediato.',
  'help.guide.edit-list.tip.1':
    'Eliminar una lista no se puede deshacer. Expórtala antes si quieres conservar una copia.',
  // all-saved
  'help.guide.all-saved.title': 'Buscar en toda tu biblioteca',
  'help.guide.all-saved.goal': 'Mira a la vez todas las listas que te pertenecen.',
  'help.guide.all-saved.step.1':
    'Haz clic en Todos los guardados en la barra de listas. Une los lugares de todas las listas que posees o de las que eres copropietario.',
  'help.guide.all-saved.step.2':
    'Usa el cuadro de búsqueda y los filtros como en cualquier lista; Elegir también funciona aquí para copiar a un viaje.',
  'help.guide.all-saved.result':
    'Una sola vista sobre todos tus lugares guardados, sin añadir ni importar, ya que no hay una lista concreta donde ponerlos.',
  'help.guide.all-saved.tip.1':
    'Las etiquetas son por lista, así que el filtro de etiquetas no se ofrece en Todos los guardados.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Travesía',
  'help.ctx.journey.summary':
    'Travesía es tu diario de viaje con las fotos por delante. Cada travesía está ligada a uno o más viajes y crece día a día a partir de entradas con relato, fotos, ánimo y tiempo. Esta pantalla lista tus travesías; abre una para escribir.',
  'help.ctx.journey.bullet.1':
    'El banner de arriba muestra la travesía en curso, o la más reciente, con sus recuentos de entradas, fotos y lugares. Seguir escribiendo la abre en el día de hoy.',
  'help.ctx.journey.bullet.2':
    'Debajo, una tarjeta por travesía con su portada, subtítulo, fechas y recuentos. Haz clic en una tarjeta para abrirla.',
  'help.ctx.journey.bullet.3':
    'La última tarjeta de la cuadrícula, Crear una nueva travesía, empieza una a partir de tus viajes.',
  // create-journey
  'help.guide.create-journey.title': 'Crear una travesía',
  'help.guide.create-journey.goal':
    'Empezar un diario para un viaje, con los lugares del viaje ya esperando como sugerencias.',
  'help.guide.create-journey.step.1': 'Haz clic en Crear una nueva travesía, la última tarjeta de la cuadrícula.',
  'help.guide.create-journey.step.2':
    'Ponle un nombre y, si quieres, un subtítulo, y marca los viajes a los que pertenece. El contador dice cuántos lugares entrarán.',
  'help.guide.create-journey.step.3': 'Haz clic en Crear travesía.',
  'help.guide.create-journey.result':
    'El diario se abre. Cada lugar de los viajes vinculados está en la cronología como sugerencia, una por cada día en el que está, lista para escribirse.',
  'help.guide.create-journey.tip.1': 'Más viajes se pueden vincular después desde Ajustes de la travesía.',
  'help.guide.create-journey.tip.2': 'Una travesía sin viajes también funciona; entonces añades las entradas a mano.',
  // open-journey
  'help.guide.open-journey.title': 'Abrir una travesía',
  'help.guide.open-journey.goal': 'Entrar en un diario, y saber dónde se abre.',
  'help.guide.open-journey.step.1':
    'Haz clic en una tarjeta. Cada una muestra la portada, las fechas y cuántas entradas, fotos y lugares contiene la travesía.',
  'help.guide.open-journey.result':
    'Una travesía en curso se abre en el día de hoy, o en la última entrada antes de hoy cuando aún no hay nada escrito; una terminada se abre al principio.',
  'help.guide.open-journey.tip.1':
    'La portada es la primera foto de la travesía, salvo que fijes una en Ajustes de la travesía.',
  // continue-writing
  'help.guide.continue-writing.title': 'Seguir con la travesía en curso',
  'help.guide.continue-writing.goal': 'Ir directo a la página de hoy de la travesía en la que estás.',
  'help.guide.continue-writing.step.1':
    'Haz clic en Seguir escribiendo en el banner de arriba. Muestra la travesía en curso, o la más reciente cuando no hay ninguna.',
  'help.guide.continue-writing.result':
    'El diario se abre en el día de hoy, o en la última entrada antes de hoy cuando aún no hay nada escrito.',
  'help.guide.continue-writing.tip.1':
    'El banner también ofrece una sugerencia para un viaje que aún no tiene travesía; Descartar la oculta.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Diario',
  'help.ctx.journey-detail.summary':
    'Una travesía abierta: la cronología a la izquierda, día a día, y el mapa a la derecha con cada entrada y los lugares de los viajes vinculados. Todo lo que añade al diario está arriba; la cabecera tiene los recuentos, Studio, el interruptor de sugerencias y Ajustes de la travesía.',
  'help.ctx.journey-detail.bullet.1':
    'Cabecera: portada, título y subtítulo, los recuentos de días, lugares, entradas y fotos, y a la derecha Studio, el interruptor de sugerencias y Ajustes de la travesía.',
  'help.ctx.journey-detail.bullet.2':
    'Barra de herramientas: las pestañas Cronología y Galería, Buscar en este viaje y Añadir entrada.',
  'help.ctx.journey-detail.bullet.3':
    'Cronología: una sección por día con un + para añadir una entrada ese día; tarjetas de entrada con fotos, ánimo, tiempo y relato; sugerencias de los viajes en un estilo más claro, con Descartar esta sugerencia.',
  'help.ctx.journey-detail.bullet.4':
    'Mapa: las entradas como pines, unidos por orden de fecha con una línea discontinua, los lugares de los viajes y las rutas GPX importadas en esos viajes.',
  'help.ctx.journey-detail.bullet.5':
    'Ajustes de la travesía: portada, nombre y subtítulo, rutas en el mapa, campos de la entrada, sugerencias descartadas, viajes vinculados, colaboradores, compartir público, archivar y eliminar.',
  'help.ctx.journey-detail.bullet.6':
    'Dos botones redondos flotan sobre una cronología larga: volver arriba y saltar a la última entrada.',
  // add-entry
  'help.guide.add-entry.title': 'Escribir una entrada',
  'help.guide.add-entry.goal': 'Añadir el relato de un día con título, texto, ánimo y tiempo.',
  'help.guide.add-entry.step.1':
    'Haz clic en Añadir entrada en la barra de herramientas, o en el + de la cabecera de un día para empezar ese día.',
  'help.guide.add-entry.step.2':
    'Ponle nombre al momento y escribe el relato. La barra sobre el texto añade negrita, cursiva, títulos, citas, enlaces y listas en Markdown.',
  'help.guide.add-entry.step.3':
    'Elige un ánimo y el tiempo, comprueba la fecha y fija una ubicación si quieres: busca un lugar o usa tu posición actual.',
  'help.guide.add-entry.step.4': 'Haz clic en Guardar.',
  'help.guide.add-entry.result':
    'La entrada aparece en su día en la cronología y como pin en el mapa. Sus recuentos se actualizan en la cabecera.',
  'help.guide.add-entry.tip.1': 'Escribir en una sugerencia es el mismo editor, con el lugar ya puesto.',
  'help.guide.add-entry.tip.2':
    'Las etiquetas de abajo son texto libre, joya oculta o mejor comida, y la búsqueda las encuentra.',
  // entry-photos
  'help.guide.entry-photos.title': 'Añadir fotos y vídeos a una entrada',
  'help.guide.entry-photos.goal': 'Poner imágenes en un día; la primera se convierte en la portada de la entrada.',
  'help.guide.entry-photos.step.1': 'Abre el menú de una entrada con el ⋯ de su tarjeta y elige Editar.',
  'help.guide.entry-photos.step.2':
    'Haz clic en Subir fotos y elige los archivos. Desde galería toma imágenes que ya están en la galería de la travesía; External photos busca ese día en una biblioteca Immich o Synology conectada.',
  'help.guide.entry-photos.step.3':
    'Pasa el ratón por una imagen para Hacer 1º y elegir la portada, y haz clic en Guardar.',
  'help.guide.entry-photos.result':
    'Las fotos se ven en la tarjeta y en la galería; la primera es la miniatura en todas partes.',
  'help.guide.entry-photos.tip.1':
    'Los vídeos van en una entrada de la misma forma: mp4, m4v, webm o mov hasta 500 MB, guardados tal como se suben.',
  'help.guide.entry-photos.tip.2':
    'Los archivos HEIC de un iPhone se convierten a JPEG al subirlos, lo que elimina sus metadatos de GPS y cámara.',
  // suggestions
  'help.guide.suggestions.title': 'Usar o descartar las sugerencias',
  'help.guide.suggestions.goal':
    'Convertir los lugares de tus viajes en entradas, y quitar de en medio aquellos sobre los que no vas a escribir.',
  'help.guide.suggestions.step.1':
    'Una sugerencia es una tarjeta más clara con el nombre del lugar en cursiva. Haz clic en ella para abrir el editor con el lugar y el día ya puestos.',
  'help.guide.suggestions.step.2':
    'Haz clic en Descartar esta sugerencia en una tarjeta que no vas a usar. Sale de la cronología sin borrarse, y la sincronización del viaje no la volverá a ofrecer.',
  'help.guide.suggestions.step.3':
    '¿Cambiaste de idea? Ajustes de la travesía muestra cuántas están descartadas, y Recuperar las sugerencias descartadas las devuelve todas.',
  'help.guide.suggestions.result':
    'La cronología solo contiene lo que piensas escribir; el interruptor de la cabecera oculta todas las sugerencias de golpe mientras lees.',
  'help.guide.suggestions.tip.1': 'Un lugar que abarca dos días da una sugerencia en cada uno.',
  'help.guide.suggestions.tip.2':
    'Las sugerencias nunca cuentan en las estadísticas; solo cuentan las entradas escritas.',
  // add-on-day
  'help.guide.add-on-day.title': 'Añadir una entrada en un día anterior',
  'help.guide.add-on-day.goal': 'Escribir sobre un día que ya pasó sin corregir la fecha después.',
  'help.guide.add-on-day.step.1': 'Haz clic en el + de la cabecera de ese día.',
  'help.guide.add-on-day.step.2': 'El editor se abre con esa fecha puesta. Escribe y Guardar como siempre.',
  'help.guide.add-on-day.result': 'La entrada cae directamente en el día correcto.',
  'help.guide.add-on-day.tip.1': 'Dentro de un día, las flechas del menú de una entrada la mueven antes o después.',
  // pros-cons
  'help.guide.pros-cons.title': 'Añadir un veredicto',
  'help.guide.pros-cons.goal': 'Resumir un día con lo que fue genial y lo que no.',
  'help.guide.pros-cons.step.1':
    'En el editor, busca Pros y contras bajo el relato. Escribe un punto en Pros o Contras y usa Añadir otro para el siguiente.',
  'help.guide.pros-cons.step.2': 'Guardar. El veredicto aparece en la tarjeta como dos listas cortas.',
  'help.guide.pros-cons.result': 'Pulgar arriba y pulgar abajo de un vistazo, bajo el relato.',
  'help.guide.pros-cons.tip.1':
    'Una travesía que no usa veredictos puede apagar la sección en Campos de la entrada, en Ajustes de la travesía.',
  // search-journey
  'help.guide.search-journey.title': 'Encontrar algo en un diario largo',
  'help.guide.search-journey.goal': 'Llegar a la entrada que buscas sin desplazarte por semanas.',
  'help.guide.search-journey.step.1':
    'Escribe en Buscar en este viaje, en la barra de herramientas. La cronología se filtra mientras escribes, en títulos, relatos, lugares y etiquetas. Los acentos y las mayúsculas no importan.',
  'help.guide.search-journey.step.2':
    'El interruptor de sugerencias de la cabecera oculta las tarjetas sin escribir mientras lees. Cuando la cronología se hace larga, dos botones redondos flotan sobre su borde inferior: volver arriba y saltar a la última entrada.',
  'help.guide.search-journey.result':
    'Solo quedan las entradas que coinciden; vacía el cuadro para volver a verlo todo.',
  'help.guide.search-journey.tip.1':
    'Una travesía en curso se abre en el día de hoy, así que la página actual suele estar ya a la vista.',
  'help.guide.search-journey.tip.2':
    'Las etiquetas también cuentan: buscar joya oculta encuentra cada entrada etiquetada así.',
  // gallery-map
  'help.guide.gallery-map.title': 'Recorrer la galería y el mapa',
  'help.guide.gallery-map.goal': 'Ver toda la travesía como imágenes, y como lugares en el mapa.',
  'help.guide.gallery-map.step.1':
    'Cambia a Galería en la barra de herramientas: cada foto de cada entrada, más las imágenes subidas directamente a la galería. Haz clic en una para el visor.',
  'help.guide.gallery-map.step.2':
    'El mapa de la derecha muestra las entradas como pines por orden de fecha, los lugares de los viajes vinculados y cualquier ruta GPX importada en esos viajes, con el color que tiene en el planificador.',
  'help.guide.gallery-map.result':
    'Pasa el ratón por una ruta para ver su nombre. La línea discontinua entre entradas la dibuja TREK; una ruta es el recorrido que grabaste de verdad.',
  'help.guide.gallery-map.tip.1': 'Las rutas se pueden apagar para una travesía en Ajustes de la travesía.',
  'help.guide.gallery-map.tip.2':
    'Las fotos de la galería con ubicación también aparecen en el mapa público, cuando Galería y Mapa se comparten los dos.',
  // entry-fields
  'help.guide.entry-fields.title': 'Apagar campos de la entrada',
  'help.guide.entry-fields.goal': 'Limitar el editor a lo que usa esta travesía.',
  'help.guide.entry-fields.step.1': 'Abre Ajustes de la travesía desde la cabecera.',
  'help.guide.entry-fields.step.2': 'En Campos de la entrada, apaga Ánimo, Tiempo o Pros y contras.',
  'help.guide.entry-fields.result':
    'El editor deja de pedirlos. Nada escrito se pierde: volver a encender un campo trae a la vista los valores guardados, y una travesía compartida oculta los mismos campos.',
  'help.guide.entry-fields.tip.1':
    'Los interruptores son por travesía, así que un viaje de trabajo y unas vacaciones pueden diferir.',
  // link-trip
  'help.guide.link-trip.title': 'Vincular otro viaje',
  'help.guide.link-trip.goal': 'Traer los lugares de un segundo viaje al diario como sugerencias.',
  'help.guide.link-trip.step.1': 'Abre Ajustes de la travesía desde la cabecera.',
  'help.guide.link-trip.step.2': 'Bajo los viajes vinculados, haz clic en Añadir viaje.',
  'help.guide.link-trip.step.3': 'Elige el viaje.',
  'help.guide.link-trip.result':
    'Sus lugares llegan a la cronología como sugerencias en sus días, y sus rutas GPX se suman al mapa.',
  'help.guide.link-trip.tip.1':
    'La × junto a un viaje vinculado lo desvincula de nuevo; las entradas que escribiste se quedan.',
  'help.guide.link-trip.tip.2': 'Las entradas de un día cuentan solo una vez, por muchos viajes que cubran ese día.',
  // share-public
  'help.guide.share-public.title': 'Compartir la travesía públicamente',
  'help.guide.share-public.goal': 'Dar a gente sin cuenta de TREK un enlace de solo lectura.',
  'help.guide.share-public.step.1': 'Abre Ajustes de la travesía y busca Compartir público.',
  'help.guide.share-public.step.2': 'Haz clic en Crear enlace para compartir.',
  'help.guide.share-public.step.3':
    'Elige qué ven los visitantes: Cronología, Galería y Mapa son interruptores separados. Copiar pone el enlace en tu portapapeles.',
  'help.guide.share-public.result':
    'Quien tenga el enlace ve las secciones activadas y nada más; los campos que apagaste en Campos de la entrada también quedan ocultos allí.',
  'help.guide.share-public.tip.1':
    'Las fotos aparecen en el mapa público solo cuando Galería y Mapa están los dos encendidos; con Mapa apagado, sus coordenadas se eliminan antes de salir del servidor.',
  'help.guide.share-public.tip.2': 'Elimina el enlace en el mismo sitio para terminar de compartir.',
  // contributors
  'help.guide.contributors.title': 'Escribir juntos',
  'help.guide.contributors.goal': 'Dejar que un compañero de viaje añada sus propias entradas y fotos.',
  'help.guide.contributors.step.1': 'Abre Ajustes de la travesía y baja hasta los colaboradores.',
  'help.guide.contributors.step.2': 'Haz clic en Invitar colaborador y busca al usuario por nombre o correo.',
  'help.guide.contributors.step.3': 'Elige un rol y confirma.',
  'help.guide.contributors.result':
    'La travesía aparece en su lista y sus entradas llevan su nombre. Quita a un colaborador con la × que tiene al lado.',
  'help.guide.contributors.tip.1':
    'Los colaboradores son para gente de este TREK. Para todos los demás está el enlace público.',
  // studio
  'help.guide.studio.title': 'Maquetar la travesía como un álbum de fotos',
  'help.guide.studio.goal': 'Convertir el diario en páginas imprimibles.',
  'help.guide.studio.step.1': 'Haz clic en Studio en la cabecera. El diseñador se abre encima de la travesía.',
  'help.guide.studio.step.2':
    'El nombre de la travesía a la izquierda de la barra superior es el camino de vuelta; te deja donde estabas.',
  'help.guide.studio.result':
    'La tira de páginas a la izquierda, el pliego en la mesa de trabajo, las propiedades a la derecha. Auto layout construye el álbum a partir de tus entradas; Export genera un PDF listo para imprimir.',
  'help.guide.studio.tip.1': 'Studio necesita una ventana de al menos 1024 px de ancho y no se ofrece en el móvil.',
  'help.guide.studio.tip.2':
    'El álbum hereda el acceso de la travesía: quien puede leer la travesía puede abrirlo, quien puede editarla puede guardar.',
  // archive-journey
  'help.guide.archive-journey.title': 'Archivar o eliminar una travesía',
  'help.guide.archive-journey.goal': 'Cerrar una travesía terminada, o quitar una para siempre.',
  'help.guide.archive-journey.step.1': 'Abre Ajustes de la travesía.',
  'help.guide.archive-journey.step.2':
    'Abajo del todo, Archivar viaje la termina y la marca como archivada; Restaurar viaje la trae de vuelta. Eliminar la quita con todas sus entradas y fotos, tras una confirmación.',
  'help.guide.archive-journey.result':
    'Una travesía archivada sigue siendo legible y compartible; solo deja de abrirse en el día de hoy.',
  'help.guide.archive-journey.tip.1':
    'Eliminar no se puede deshacer, y no toca los viajes a los que la travesía estaba vinculada.',
  'help.guide.archive-journey.tip.2': 'La portada, el nombre y el subtítulo están en el mismo diálogo, arriba.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio maqueta una travesía como un libro de fotos imprimible. Se abre sobre el diario: la lista de páginas y el contenido a la izquierda, la doble página en la que trabajas en el centro, sus propiedades a la derecha. Auto layout construye un primer borrador con tus entradas; todo lo que viene después es tuyo para mover, recortar y cambiar de estilo, con deshacer para cada paso.',
  'help.ctx.journey-studio.bullet.1':
    'Barra superior: Back to the journey, Book view, Undo y Redo, Page format, Auto layout y Export. La marca Guardado junto al título te dice cuándo el libro está almacenado.',
  'help.ctx.journey-studio.bullet.2':
    'Columna a la izquierda con cinco secciones: Pages, Content (las fotos y entradas de la travesía), Elements (texto, formas, líneas, cuadrículas, marcos, iconos), Viaje (mapas, países, banderas y marcas construidas a partir de la travesía) y Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Mesa de trabajo: la doble página actual con su sangrado y sus márgenes de seguridad, la barra de zoom debajo, Fit to view y Descargar esta doble página a la derecha.',
  'help.ctx.journey-studio.bullet.4':
    'Properties a la derecha: posición y tamaño, recorte y punto focal, rellenar o ajustar, look, esquinas, marco, orden de apilamiento y bloqueo de lo que esté seleccionado; números de página y el documento cuando no hay nada.',
  'help.ctx.journey-studio.bullet.5':
    'El libro tiene la forma de uno encuadernado: cubierta, una primera página suelta, las dobles páginas, una última página suelta y la contracubierta. Los números de página cuentan desde la primera página y se imprimen tal como se muestran.',
  'help.ctx.journey-studio.bullet.6':
    'Varias personas pueden diseñar a la vez: cada una ve los punteros de las demás con sus nombres, y guardar sobre una versión que otra persona cambió vuelve como un conflicto en lugar de sobrescribir su trabajo.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Construir el libro automáticamente',
  'help.guide.studio-auto-layout.goal':
    'Consigue con un clic un primer borrador completo a partir de las entradas y fotos del diario.',
  'help.guide.studio-auto-layout.step.1': 'Haz clic en Auto layout en la barra superior.',
  'help.guide.studio-auto-layout.step.2':
    'Elige Todo el libro: reemplaza todas las páginas y conserva tu título y la configuración de página. Esta página reconstruye solo la que está en pantalla, y se ofrece en una doble página que salió de una entrada.',
  'help.guide.studio-auto-layout.step.3':
    'Repasa la lista de páginas. Undo devuelve todo el diseño si preferías lo que tenías.',
  'help.guide.studio-auto-layout.result':
    'Una doble página por entrada, en orden, con sus fotos, título e historia colocados por ti. Cada elemento sigue a su entrada hasta que lo editas.',
  'help.guide.studio-auto-layout.tip.1':
    'Las dos opciones son pasos de deshacer normales, así que pruébalas sin miedo.',
  'help.guide.studio-auto-layout.tip.2':
    'Un elemento que Auto layout ató a una entrada sigue los cambios de esa entrada hasta que lo tocas en Properties; eso rompe el vínculo.',
  // studio-pages
  'help.guide.studio-pages.title': 'Añadir, mover y quitar dobles páginas',
  'help.guide.studio-pages.goal': 'Da forma al libro página a página.',
  'help.guide.studio-pages.step.1':
    'Abre Pages en la columna. Las miniaturas son el libro en orden: cubierta, primera página, dobles páginas, última página, contracubierta.',
  'help.guide.studio-pages.step.2':
    'Añadir página, abajo, pone una nueva antes de la última página; el + entre dos miniaturas inserta una justo ahí.',
  'help.guide.studio-pages.step.3':
    'Pasa el ratón por una miniatura para ver sus acciones: Mover antes, Mover después, Duplicar página y Eliminar página. Haz clic en una miniatura para abrir esa doble página en la mesa de trabajo.',
  'help.guide.studio-pages.result':
    'La cubierta, la primera y la última página y la contracubierta se quedan donde están; las dobles páginas nuevas siempre caen entre ellas.',
  'help.guide.studio-pages.tip.1':
    'Book view en la barra superior muestra el libro entero en hojas, tal como se encuadernará.',
  'help.guide.studio-pages.tip.2':
    'Los números de página se activan bajo Documento en Properties, sin nada seleccionado.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Aplicar un layout a una doble página',
  'help.guide.studio-layouts.goal': 'Dale a una doble página una disposición lista de marcos de foto y texto.',
  'help.guide.studio-layouts.step.1':
    'Abre Layouts en la columna. Trece layouts de doble página y un juego aparte para la cubierta, la contracubierta y las páginas sueltas.',
  'help.guide.studio-layouts.step.2':
    'Haz clic en uno. La doble página de la mesa de trabajo toma sus marcos; las fotos y el texto que ya tenías se vierten en ellos.',
  'help.guide.studio-layouts.result':
    'Los marcos vacíos esperan contenido: arrastra una foto desde Content a uno, o usa Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Un layout es un paso de deshacer como cualquier otro.',
  // studio-content
  'help.guide.studio-content.title': 'Poner fotos y entradas en una página',
  'help.guide.studio-content.goal': 'Lleva el material propio de la travesía a la doble página.',
  'help.guide.studio-content.step.1':
    'Abre Content en la columna. Photos lista cada imagen de la travesía; Entries lista las entradas con su texto.',
  'help.guide.studio-content.step.2':
    'Arrastra una foto a la doble página, o a un marco vacío, o haz clic en Add to this page debajo de ella. Subir fotos añade imágenes que aún no están en la travesía.',
  'help.guide.studio-content.step.3':
    'Bajo una entrada, Title, Story y Place ponen ese texto en la página como elemento de texto; Fecha y las coordenadas llegan como marcas, y las fotos de la entrada aparecen listadas ahí mismo.',
  'help.guide.studio-content.result':
    'Una foto soltada se convierte en un elemento de foto; el texto sigue a la entrada hasta que lo editas.',
  'help.guide.studio-content.tip.1': 'El cuadro de búsqueda arriba de Content filtra las dos listas.',
  'help.guide.studio-content.tip.2':
    'Soltar un archivo desde tu escritorio en la mesa de trabajo lo sube y lo coloca de una vez.',
  // studio-elements
  'help.guide.studio-elements.title': 'Añadir texto, formas e iconos',
  'help.guide.studio-elements.goal': 'Decora una doble página más allá de fotos e historias.',
  'help.guide.studio-elements.step.1': 'Abre Elements en la columna.',
  'help.guide.studio-elements.step.2':
    'Haz clic en un estilo de texto para un titular o un pie, una forma, una línea, una cuadrícula, un marco vacío con un estilo de marco o un icono de la biblioteca con buscador. Cada uno cae en el centro de la doble página, listo para moverse.',
  'help.guide.studio-elements.result':
    'Haz doble clic en un elemento de texto para escribir en él; Properties guarda fuente, peso, tamaño, espaciado y alineación.',
  'help.guide.studio-elements.tip.1': 'Los marcos son huecos de foto vacíos: suelta una imagen dentro más tarde.',
  // studio-travel
  'help.guide.studio-travel.title': 'Añadir un mapa, banderas y cifras',
  'help.guide.studio-travel.goal': 'Convierte la propia travesía en cifras sobre la página.',
  'help.guide.studio-travel.step.1': 'Abre Viaje en la columna.',
  'help.guide.studio-travel.step.2':
    'Elige qué añadir: un mapa de ruta de las entradas, siluetas de países, una lista o cuadrícula de países, banderas, una marca de fecha, de día o de distancia, o un resumen de todo el viaje. Cada uno se construye con los datos de la travesía y se actualiza con ellos.',
  'help.guide.studio-travel.result':
    'El elemento aparece en la doble página; Properties ajusta su estilo, y en el mapa su área.',
  'help.guide.studio-travel.tip.1':
    'Las marcas siguen a la entrada de la que salió la doble página, así que una marca de fecha en una doble página maquetada automáticamente ya muestra ese día.',
  // studio-properties
  'help.guide.studio-properties.title': 'Editar lo que seleccionaste',
  'help.guide.studio-properties.goal': 'Mueve, recorta, da estilo y apila un elemento con el inspector.',
  'help.guide.studio-properties.step.1':
    'Haz clic en un elemento de la doble página. Aparecen asas para tamaño y rotación; arrástralo para moverlo.',
  'help.guide.studio-properties.step.2':
    'Properties a la derecha sigue a la selección: posición y tamaño, Crop con el punto focal que decide qué queda dentro del marco, Fill o Fit, los filtros de Look, el radio en Corner, el estilo en Marco, el orden de apilamiento y Lock.',
  'help.guide.studio-properties.step.3':
    'Duplicar y Delete están arriba del inspector; Undo en la barra superior revierte cualquiera de ellos.',
  'help.guide.studio-properties.result':
    'Un elemento bloqueado ya no se puede agarrar en la página, lo que mantiene a salvo un diseño terminado mientras trabajas alrededor.',
  'help.guide.studio-properties.tip.1':
    'Mayús+clic selecciona varios elementos; el inspector los edita entonces juntos.',
  'help.guide.studio-properties.tip.2':
    'Editar un elemento que colocó Auto layout rompe su vínculo con la entrada; deja de seguir los cambios posteriores de esa entrada.',
  // studio-format
  'help.guide.studio-format.title': 'Elegir el formato de página',
  'help.guide.studio-format.goal': 'Fija el tamaño al que se imprimirá el libro, antes de que el diseño dependa de él.',
  'help.guide.studio-format.step.1': 'Haz clic en Page format en la barra superior.',
  'help.guide.studio-format.step.2':
    'Elige Square 21 × 21 cm, Square 30 × 30 cm, A4 o A5 landscape o portrait, o introduce un ancho y un alto propios en milímetros. Sangrado y Seguridad están justo debajo.',
  'help.guide.studio-format.result':
    'Cada doble página se dibuja a ese tamaño, con 3 mm de sangrado y 5 mm de margen de seguridad por defecto.',
  'help.guide.studio-format.tip.1':
    'Cambia primero el formato y después lanza Auto layout; el diseño se construye para el tamaño que encuentra.',
  'help.guide.studio-format.tip.2': 'Pide a tu imprenta sus valores de sangrado y seguridad e introduce esos.',
  // studio-export
  'help.guide.studio-export.title': 'Exportar el libro como PDF',
  'help.guide.studio-export.goal': 'Consigue un archivo listo para imprimir, o uno para leer en pantalla.',
  'help.guide.studio-export.step.1': 'Haz clic en Export en la barra superior.',
  'help.guide.studio-export.step.2':
    'Elige Páginas sueltas, una página por hoja en orden de lectura, que es lo que quiere una imprenta, o Pliegos, dos páginas a la vez tal como se abre el libro. Marcas de corte añade el sangrado en cada borde y marca por dónde cortar.',
  'help.guide.studio-export.step.3':
    'Haz clic en Vista de impresión. Tu navegador abre las páginas y Guardar como PDF las convierte en el archivo.',
  'help.guide.studio-export.result':
    'Un PDF con tantas hojas como anunció el diálogo, en el formato de página que fijaste.',
  'help.guide.studio-export.tip.1': 'Crear el PDF es solo para escritorio, como el propio Studio.',
  'help.guide.studio-export.tip.2':
    'Para una prueba, exporta Pliegos sin marcas de corte; para la imprenta, Páginas sueltas con ellas.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Reutilizar una doble página en otro libro',
  'help.guide.studio-spread-file.goal': 'Llévate un diseño que te gusta del libro de una travesía a otro.',
  'help.guide.studio-spread-file.step.1':
    'Con la doble página en la mesa de trabajo, haz clic en Descargar esta doble página en el extremo derecho de la barra de zoom. El archivo guarda el diseño, no las fotografías.',
  'help.guide.studio-spread-file.step.2':
    'En el otro libro, abre Pages y haz clic en Importar junto a Añadir página, después elige el archivo.',
  'help.guide.studio-spread-file.result':
    'La doble página llega con sus marcos y estilos de texto; suelta las fotos de la nueva travesía en los marcos.',
  'help.guide.studio-spread-file.tip.1': 'Un archivo que no es un diseño de doble página se rechaza con un motivo.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Ajustes',
  'help.ctx.settings.summary':
    'Tus ajustes personales, una pestaña por tema en la barra lateral de la izquierda. La mayoría de los interruptores se aplican en cuanto los cambias; un formulario con un botón Guardar abajo espera a que lo pulses. Nada de aquí cambia el TREK de nadie más.',
  'help.ctx.settings.bullet.1':
    'Barra lateral izquierda: Pantalla, Appearance, Mapa, Notificaciones, Integraciones, Offline y Cuenta. Complementos aparece en cuanto hay uno instalado, Acerca de en un TREK autoalojado.',
  'help.ctx.settings.bullet.2':
    'Pantalla es idioma, unidades, moneda y con qué se abre la app; Appearance es tema, colores, tamaño del texto y los widgets del panel.',
  'help.ctx.settings.bullet.3':
    'Mapa elige el motor de renderizado y su estilo; Notificaciones los canales que te llegan; Integraciones bibliotecas de fotos, claves API y MCP; Offline lo que la app guarda en este dispositivo.',
  'help.ctx.settings.bullet.4':
    'Cuenta contiene tu perfil, contraseña, autenticación de dos factores, passkeys y la eliminación de tu cuenta.',
  'help.ctx.settings-display.title': 'Pantalla',
  'help.ctx.settings-display.summary':
    'Idioma, unidades y moneda, cómo se comportan el mapa y las reservas, y con qué se abre TREK. Cada cambio aquí se aplica al momento.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: el idioma de la interfaz, el formato de hora, la moneda de visualización, y las unidades de distancia y temperatura.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: rutas de reserva siempre en el mapa, la píldora Explorar lugares, optimización de la ruta desde tu alojamiento, códigos de reserva difuminados y rutas de reserva etiquetadas.',
  'help.ctx.settings-display.bullet.3':
    'Inicio: si TREK se abre en el panel o en el viaje activo, y qué pestaña de un viaje sale primero.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'Cómo se ve TREK en esta cuenta: claro u oscuro, el color de acento, cristal y movimiento, tamaño del texto, y qué widgets muestra el panel. Todo se aplica en vivo, en cada dispositivo en el que inicies sesión.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Claro, Oscuro o Automático, y el Color scheme con un Custom accent tuyo.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density y Text size, con tamaños avanzados por nivel.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets: un interruptor por widget, por separado para Desktop y Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults abajo lo devuelve todo a su sitio.',
  'help.ctx.settings-map.title': 'Mapa',
  'help.ctx.settings-map.summary':
    'Qué motor dibuja los mapas y con qué estilo. Leaflet es el mapa ráster clásico, MapLibre dibuja mosaicos vectoriales sin ningún token, Mapbox añade edificios 3D y terreno con tu propio token.',
  'help.ctx.settings-map.bullet.1':
    'Proveedor de mapa: Leaflet, MapLibre o Mapbox, cada uno con una línea sobre lo que necesita.',
  'help.ctx.settings-map.bullet.2':
    'Estilo de mapa y Plantilla del mapa: el aspecto de los mosaicos, más el token o la clave que pide un proveedor.',
  'help.ctx.settings-map.bullet.3':
    'Modo de alta calidad para el antialiasing y la proyección de globo; Guardar mapa escribe la elección.',
  'help.ctx.settings-notifications.title': 'Notificaciones',
  'help.ctx.settings-notifications.summary':
    'Dónde te localiza TREK fuera de la app: un tema de ntfy, un webhook o un canal que aporta un complemento. Bajo los canales, una fila por evento decide qué va a dónde.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: el tema, un servidor propio opcional y un token de acceso opcional, con Probar para enviar uno al momento.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: una URL que recibe cada evento como JSON, con Probar.',
  'help.ctx.settings-notifications.bullet.3':
    'Las filas de preferencias: por evento, qué canal está activo. Los canales de complementos muestran Configurar hasta que estén configurados.',
  'help.ctx.settings-integrations.title': 'Integraciones',
  'help.ctx.settings-integrations.summary':
    'Todo lo que se conecta a TREK desde fuera: bibliotecas de fotos para la travesía, claves API para scripts, y el endpoint MCP con sus tokens y clientes OAuth para asistentes de IA.',
  'help.ctx.settings-integrations.bullet.1':
    'Proveedores de fotos: Immich y Synology Photos, cada uno con su URL y su clave, Probar conexión y Guardar.',
  'help.ctx.settings-integrations.bullet.2':
    'Claves API: claves personales para scripts y otras herramientas que llaman a la API de TREK en tu nombre.',
  'help.ctx.settings-integrations.bullet.3':
    'Configuración MCP: el endpoint, una configuración de cliente lista para copiar, y los tokens de API.',
  'help.ctx.settings-integrations.bullet.4':
    'Clientes OAuth 2.1: apps que inician sesión a través de TREK, con URIs de redirección, ámbitos permitidos, clientes de máquina y las sesiones activas.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Lo que TREK guarda en este dispositivo para que un viaje siga abriéndose sin conexión, y qué pasa cuando un cambio hecho offline choca con otro hecho en otro sitio.',
  'help.ctx.settings-offline.bullet.1':
    'Modo offline: Forzar el modo offline hace que la app se comporte como si no hubiera red, para probar o en una conexión con datos limitados.',
  'help.ctx.settings-offline.bullet.2':
    'Prepárate para estar offline: Descargar para uso offline trae ahora tus viajes y sus mosaicos del mapa.',
  'help.ctx.settings-offline.bullet.3':
    'Qué almacenar offline: mosaicos del mapa activados o no, y un interruptor por viaje.',
  'help.ctx.settings-offline.bullet.4':
    'Conflictos de sincronización y Caché offline: la estrategia para las colisiones, el recuento de cambios pendientes y fallidos, Volver a sincronizar ahora y Vaciar caché.',
  'help.ctx.settings-account.title': 'Cuenta',
  'help.ctx.settings-account.summary':
    'Quién eres en este TREK y cómo inicias sesión: perfil y avatar, contraseña, autenticación de dos factores, passkeys, y al final del todo la eliminación de la cuenta.',
  'help.ctx.settings-account.bullet.1': 'Perfil: usuario, correo y avatar, guardados con Guardar perfil.',
  'help.ctx.settings-account.bullet.2':
    'Cambiar contraseña: contraseña actual, la nueva dos veces, Actualizar contraseña.',
  'help.ctx.settings-account.bullet.3':
    'Autenticación de dos factores (2FA) con una app de autenticación y códigos de respaldo; Passkeys para iniciar sesión sin contraseña.',
  'help.ctx.settings-account.bullet.4':
    'Eliminar cuenta abajo, tras una confirmación. El último admin no puede eliminarse a sí mismo.',
  // language-region
  'help.guide.language-region.title': 'Elegir idioma, unidades y moneda',
  'help.guide.language-region.goal': 'Haz que TREK hable tu idioma y cuente como tú.',
  'help.guide.language-region.step.1':
    'Elige el idioma de la interfaz en Language & region. TREK cambia al momento, en cada dispositivo en el que inicies sesión.',
  'help.guide.language-region.step.2':
    'Debajo, elige el formato de hora, la moneda de visualización, y las unidades de distancia y temperatura.',
  'help.guide.language-region.result':
    'Fechas, distancias y dinero se leen como esperas; la moneda propia de un viaje sigue apareciendo junto a los importes convertidos.',
  'help.guide.language-region.tip.1':
    'La moneda de visualización es para los totales entre viajes; cada viaje conserva la moneda que le diste.',
  'help.guide.language-region.tip.2': 'El idioma también fija los nombres de días y meses en Vacay y en la travesía.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Ajustar cómo se comportan el mapa y las reservas',
  'help.guide.travel-map-prefs.goal': 'Decide qué muestra el mapa del viaje por defecto.',
  'help.guide.travel-map-prefs.step.1':
    'En Travel & map, Mostrar siempre las rutas de reserva mantiene vuelos y trenes en el mapa aunque su día no esté abierto; Explorar lugares en el mapa muestra la píldora para encontrar lugares; Optimizar la ruta desde el alojamiento empieza la ruta donde duermes.',
  'help.guide.travel-map-prefs.step.2':
    'Difuminar códigos de reserva oculta los números de confirmación hasta que pasas el ratón; Etiquetas de rutas de reservas escribe el nombre de la reserva a lo largo de su ruta.',
  'help.guide.travel-map-prefs.result':
    'El mapa del viaje sigue estos ajustes en todos los viajes, hasta que los vuelvas a cambiar.',
  'help.guide.travel-map-prefs.tip.1':
    'Son por cuenta, no por viaje. Cada miembro de un viaje compartido ve sus propias elecciones.',
  // startup
  'help.guide.startup.title': 'Elegir con qué se abre TREK',
  'help.guide.startup.goal': 'Aterriza donde más trabajas, no en el panel cada vez.',
  'help.guide.startup.step.1': 'En Inicio, pon Página de inicio en Panel o Viaje activo.',
  'help.guide.startup.step.2': 'Pestaña de inicio elige qué pestaña de un viaje sale primero cuando abres uno.',
  'help.guide.startup.result': 'El próximo inicio de sesión y el próximo toque en el logo te llevan directo allí.',
  'help.guide.startup.tip.1': 'Viaje activo es el viaje en curso hoy, o el siguiente cuando no hay ninguno.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Elegir el tema y el color de acento',
  'help.guide.theme-scheme.goal': 'Pon TREK claro, oscuro o como tu dispositivo, en el color que te guste.',
  'help.guide.theme-scheme.step.1': 'En Theme, elige Claro, Oscuro o Automático. Automático sigue a tu dispositivo.',
  'help.guide.theme-scheme.step.2':
    'Elige un Color scheme: Default, High contrast, Indigo, Teal, Rose, Amber, Violet o Custom.',
  'help.guide.theme-scheme.step.3':
    'Con Custom, elige un acento de los predefinidos o introduce el tuyo. Una comprobación de contraste al lado dice si el texto sigue siendo legible encima.',
  'help.guide.theme-scheme.result':
    'Botones, enlaces y resaltados toman el acento en todas partes, en cada dispositivo en el que inicies sesión.',
  'help.guide.theme-scheme.tip.1':
    'La barra de navegación también tiene un interruptor rápido claro u oscuro; fija el mismo tema.',
  'help.guide.theme-scheme.tip.2':
    'High contrast es el esquema a elegir cuando el predeterminado se lee demasiado suave.',
  // readability
  'help.guide.readability.title': 'Ajustar la legibilidad y el tamaño del texto',
  'help.guide.readability.goal': 'Menos cristal, menos movimiento, más espacio o letra más grande.',
  'help.guide.readability.step.1':
    'En Readability, Transparency cambia los paneles de cristal por superficies sólidas, Reduce motion reduce las animaciones al mínimo, y Density elige Comfortable o Compact.',
  'help.guide.readability.step.2':
    'Text size escala Everything de una vez; Advanced text sizes deja que títulos, subtítulos, cuerpo y pies difieran.',
  'help.guide.readability.result': 'Toda la app sigue al momento, incluidos los paneles del mapa y la travesía.',
  'help.guide.readability.tip.1': 'Reduce motion también sigue el ajuste de tu sistema cuando lo dejas en paz.',
  'help.guide.readability.tip.2':
    'El tamaño del texto se aplica a través de los niveles tipográficos, así que nada se corta; un tamaño que ya no cabe salta de línea.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Elegir los widgets del panel',
  'help.guide.dashboard-widgets.goal':
    'Muestra solo los widgets que usas, por separado en el escritorio y en el móvil.',
  'help.guide.dashboard-widgets.step.1':
    'En Dashboard widgets, activa o desactiva cada widget para Desktop y para Mobile: la barra lateral derecha entera, moneda, colecciones, zonas horarias, próximas reservas, países del Atlas y las cifras de viaje.',
  'help.guide.dashboard-widgets.step.2': 'Reset to defaults abajo devuelve toda la pestaña a como venía.',
  'help.guide.dashboard-widgets.result':
    'El panel se reordena al momento; con la barra lateral derecha apagada se centra.',
  'help.guide.dashboard-widgets.tip.1':
    'Los widgets de un addon solo aparecen mientras el admin tenga ese addon activado.',
  'help.guide.dashboard-widgets.tip.2':
    'El propio panel recuerda tu vista de cuadrícula o lista y el orden por dispositivo.',
  // map-provider
  'help.guide.map-provider.title': 'Elegir el motor y el estilo del mapa',
  'help.guide.map-provider.goal': 'Cambia entre el mapa clásico, los mosaicos vectoriales y el mapa 3D de Mapbox.',
  'help.guide.map-provider.step.1':
    'En Proveedor de mapa, elige Leaflet para el mapa 2D clásico con cualquier mosaico ráster, MapLibre para mosaicos vectoriales de OpenFreeMap sin token, o Mapbox para mosaicos vectoriales con edificios 3D y terreno.',
  'help.guide.map-provider.step.2':
    'Elige un Estilo de mapa o una Plantilla del mapa para el aspecto. Mapbox necesita un Token de acceso de Mapbox, algunos estilos ráster una Clave de API de CARTO; el enlace junto al campo lleva a donde conseguir uno.',
  'help.guide.map-provider.step.3':
    'Modo de alta calidad añade antialiasing y la proyección de globo. Haz clic en Guardar mapa.',
  'help.guide.map-provider.result':
    'Cada mapa de TREK, viajes, Atlas, Colecciones y la travesía, lo dibuja el motor que elegiste.',
  'help.guide.map-provider.tip.1': 'Sin token, Mapbox recurre al mapa predeterminado en lugar de no mostrar nada.',
  'help.guide.map-provider.tip.2':
    'Los mosaicos del mapa que almacenas offline vienen del proveedor activo cuando los descargas.',
  // notification-channels
  'help.guide.notification-channels.title': 'Configurar dónde te llegan las notificaciones',
  'help.guide.notification-channels.goal':
    'Recibe recordatorios de viaje y eventos de colaboración en tu móvil o en otra herramienta.',
  'help.guide.notification-channels.step.1':
    'En Notificaciones, rellena un Tema de Ntfy; añade tu propia URL del servidor Ntfy (opcional) y un Token de acceso (opcional) si tienes uno. Probar envía un mensaje al instante.',
  'help.guide.notification-channels.step.2':
    'O indica una URL del webhook que reciba cada evento como JSON, y pruébala igual con Probar.',
  'help.guide.notification-channels.step.3':
    'En las filas de abajo, activa o desactiva cada evento por canal. Un canal de complemento dice Configurar hasta que esté configurado en los ajustes del complemento; Enviar prueba prueba uno.',
  'help.guide.notification-channels.result':
    'Los eventos salen por los canales activos. La campana de la barra de navegación sigue mostrándolos en la app de todos modos.',
  'help.guide.notification-channels.tip.1':
    'Las preferencias por viaje viven en el propio viaje, en sus ajustes de notificación.',
  'help.guide.notification-channels.tip.2':
    'El admin puede prerrellenar un servidor ntfy predeterminado para todos; tú sigues eligiendo tu propio tema.',
  // photo-providers
  'help.guide.photo-providers.title': 'Conectar una biblioteca de fotos',
  'help.guide.photo-providers.goal': 'Deja que la travesía tome las fotos del día desde Immich o Synology Photos.',
  'help.guide.photo-providers.step.1':
    'En Integraciones, busca la sección del proveedor e introduce su URL y su clave API. Immich también ofrece reflejar las subidas de la travesía de vuelta en la biblioteca.',
  'help.guide.photo-providers.step.2': 'Haz clic en Probar conexión y luego en Guardar.',
  'help.guide.photo-providers.result':
    'La pestaña External photos del editor de entradas busca en la biblioteca conectada el día de la entrada, primero las más cercanas a la ubicación de la entrada.',
  'help.guide.photo-providers.tip.1':
    'La conexión es tuya: los demás miembros de una travesía conectan sus propias bibliotecas.',
  'help.guide.photo-providers.tip.2':
    'Un proveedor sin datos GPS en sus fotos funciona igual; la lista va entonces en orden de tiempo.',
  // api-keys
  'help.guide.api-keys.title': 'Crear una clave API',
  'help.guide.api-keys.goal': 'Deja que un script u otra herramienta llame a la API de TREK como tú.',
  'help.guide.api-keys.step.1': 'En Claves API, haz clic en Crear clave y dale un nombre que diga dónde se usará.',
  'help.guide.api-keys.step.2':
    'Copia la clave del diálogo: se muestra una sola vez. Elimina una clave de la lista cuando la herramienta ya no la necesite.',
  'help.guide.api-keys.result':
    'Las peticiones con esa clave actúan con tus permisos; la lista muestra cuándo se creó y se usó por última vez cada clave.',
  'help.guide.api-keys.tip.1': 'Una clave por herramienta hace que revocar sea indoloro.',
  'help.guide.api-keys.tip.2':
    'Para un asistente de IA usa MCP con OAuth en su lugar; las claves API son para clientes HTTP simples.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Conectar un asistente de IA por MCP',
  'help.guide.mcp-oauth.goal': 'Da a Claude, a un IDE o a otro cliente MCP acceso a tus viajes.',
  'help.guide.mcp-oauth.step.1':
    'En Configuración MCP, copia el Endpoint MCP, o toda la Configuración del cliente para un cliente que acepte un fragmento JSON.',
  'help.guide.mcp-oauth.step.2':
    'Los clientes que inician sesión por el navegador usan OAuth 2.1: Nuevo cliente en Clientes OAuth 2.1, con sus URIs de redirección, los Ámbitos permitidos y, para un servidor sin navegador, Cliente de máquina.',
  'help.guide.mcp-oauth.step.3':
    'Renovar secreto y Eliminar cliente están en cada cliente; Sesiones OAuth activas lista lo que tiene sesión iniciada y te deja revocarlo. Tokens de API con Crear nuevo token es la vía antigua de entrada.',
  'help.guide.mcp-oauth.result':
    'El cliente puede leer y cambiar lo que sus ámbitos permiten, como tú, y cada acción aparece con tu nombre.',
  'help.guide.mcp-oauth.tip.1':
    'Los ámbitos son la red de seguridad: da a un cliente solo el ámbito de lectura hasta que necesite más.',
  'help.guide.mcp-oauth.tip.2': 'El admin puede desactivar MCP para toda la instancia; entonces esta sección no está.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Llevarte viajes offline',
  'help.guide.offline-prepare.goal':
    'Ten tus viajes y sus mapas en este dispositivo antes de que se caiga la conexión.',
  'help.guide.offline-prepare.step.1':
    'En Qué almacenar offline, deja Almacenar mosaicos del mapa offline activado y activa los viajes que quieras en este dispositivo.',
  'help.guide.offline-prepare.step.2':
    'Haz clic en Descargar para uso offline en Prepárate para estar offline. Trae los viajes y los mosaicos alrededor de sus lugares.',
  'help.guide.offline-prepare.step.3':
    'Forzar el modo offline en Modo offline te deja comprobar que está todo antes de salir.',
  'help.guide.offline-prepare.result':
    'Los viajes se abren sin conexión; los cambios que hagas esperan en una cola y salen al reconectar.',
  'help.guide.offline-prepare.tip.1':
    'Los mosaicos son lo que más espacio ocupa: la sección Caché offline muestra lo que hay almacenado, por viaje.',
  'help.guide.offline-prepare.tip.2': 'Instala TREK como app desde el navegador para el arranque offline más fluido.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Decidir qué gana en un conflicto de sincronización',
  'help.guide.offline-conflicts.goal':
    'Elige cómo resuelve TREK un cambio hecho offline frente a otro hecho en otro sitio.',
  'help.guide.offline-conflicts.step.1':
    'En Conflictos de sincronización, elige Preguntarme cada vez, Conservar siempre mi versión o Conservar siempre la versión del servidor.',
  'help.guide.offline-conflicts.step.2':
    'Caché offline muestra viajes, cambios pendientes y fallidos y conflictos; Volver a sincronizar ahora empuja la cola, Vaciar caché vacía el dispositivo.',
  'help.guide.offline-conflicts.result':
    'Con Preguntarme, un conflicto muestra ambas versiones y te deja elegir; con las otras dos se resuelve en silencio.',
  'help.guide.offline-conflicts.tip.1':
    'Vaciar caché solo elimina la copia de este dispositivo; nada del servidor se toca.',
  // profile
  'help.guide.profile.title': 'Cambiar tu perfil',
  'help.guide.profile.goal': 'Actualiza tu nombre, correo e imagen.',
  'help.guide.profile.step.1':
    'En Cuenta, edita Usuario y Correo. El avatar admite una subida tuya; quítalo para volver a las iniciales.',
  'help.guide.profile.step.2': 'Haz clic en Guardar perfil.',
  'help.guide.profile.result':
    'Tu nombre e imagen se actualizan en todas partes a la vez, incluidos los viajes que compartes.',
  'help.guide.profile.tip.1':
    'Una cuenta que inicia sesión por OIDC lo muestra aquí; el correo viene entonces del proveedor.',
  // password
  'help.guide.password.title': 'Cambiar tu contraseña',
  'help.guide.password.goal': 'Pon una contraseña nueva.',
  'help.guide.password.step.1': 'En Cambiar contraseña, escribe tu contraseña actual y luego la nueva dos veces.',
  'help.guide.password.step.2': 'Haz clic en Actualizar contraseña.',
  'help.guide.password.result':
    'La nueva contraseña vale desde el próximo inicio de sesión; las demás sesiones siguen abiertas.',
  'help.guide.password.tip.1': 'Una cuenta que inicia sesión por OIDC no tiene contraseña de TREK que cambiar.',
  // mfa
  'help.guide.mfa.title': 'Activar la autenticación de dos factores',
  'help.guide.mfa.goal': 'Protege la cuenta con un código de una app de autenticación.',
  'help.guide.mfa.step.1': 'En Autenticación de dos factores (2FA), haz clic en Configurar autenticador.',
  'help.guide.mfa.step.2':
    'Escanea el código QR con tu app, o introduce el secreto a mano, luego teclea el código de seis dígitos que muestra y haz clic en Activar 2FA.',
  'help.guide.mfa.step.3':
    'Guarda los códigos de respaldo: cópialos, descárgalos o imprímelos. Cada uno sirve una vez, cuando no tienes el móvil a mano.',
  'help.guide.mfa.result': 'Cada inicio de sesión pide un código después de la contraseña.',
  'help.guide.mfa.tip.1': 'Desactivar 2FA necesita tu contraseña y un código vigente.',
  'help.guide.mfa.tip.2': 'El admin puede exigir 2FA a todos; entonces no se puede desactivar aquí.',
  // passkeys
  'help.guide.passkeys.title': 'Iniciar sesión con una passkey',
  'help.guide.passkeys.goal': 'Usa la huella, la cara o el PIN de tu dispositivo en lugar de una contraseña.',
  'help.guide.passkeys.step.1':
    'En Passkeys, haz clic en Añadir una passkey y confirma con tu dispositivo. Dale un nombre que diga qué dispositivo es.',
  'help.guide.passkeys.step.2':
    'La lista muestra cada passkey con su nombre y su último uso; el botón de eliminar quita una.',
  'help.guide.passkeys.result': 'La página de inicio de sesión ofrece la passkey; la contraseña queda como respaldo.',
  'help.guide.passkeys.tip.1':
    'Una passkey vive en el dispositivo o en su gestor de contraseñas, así que añade una por dispositivo.',
  'help.guide.passkeys.tip.2':
    'Las passkeys necesitan HTTPS; en una instancia con HTTP simple la sección explica por qué no están disponibles.',
  // delete-account
  'help.guide.delete-account.title': 'Eliminar tu cuenta',
  'help.guide.delete-account.goal': 'Elimina tu cuenta y los datos que son solo tuyos.',
  'help.guide.delete-account.step.1': 'Al final del todo de Cuenta, haz clic en Eliminar cuenta y confirma.',
  'help.guide.delete-account.result':
    'Tu cuenta, tus propios viajes y tus travesías desaparecen; los viajes que compartes con otros se quedan con ellos.',
  'help.guide.delete-account.tip.1':
    'El último admin de una instancia no puede eliminarse a sí mismo; haz admin a otra persona antes.',
  'help.guide.delete-account.tip.2': 'No hay vuelta atrás. Exporta lo que quieras conservar antes de confirmar.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administración',
  'help.ctx.admin.summary':
    'La instancia detrás del TREK de todos: quién puede iniciar sesión y cómo, qué está activado, dónde viven los archivos, cómo llega el servidor a la gente y cómo se respalda. Solo los admins ven esta página; cada pestaña es una pantalla propia en la barra lateral.',
  'help.ctx.admin.bullet.1':
    'Las cuatro tarjetas de arriba cuentan usuarios, viajes, lugares y archivos; un banner encima anuncia una versión más nueva de TREK.',
  'help.ctx.admin.bullet.2':
    'Usuarios y Valores predeterminados: cuentas, enlaces de invitación y los ajustes de mapa con los que arranca una cuenta nueva.',
  'help.ctx.admin.bullet.3':
    'Personalización, Ajustes, Complementos y Plugins: plantillas de equipaje, categorías y vacaciones escolares; métodos de inicio de sesión y claves API; los módulos de funciones; plugins de terceros.',
  'help.ctx.admin.bullet.4':
    'Almacenamiento, Notificaciones, Acceso MCP y GitHub: adónde van las subidas, los canales de toda la instancia, tokens y sesiones de clientes de IA, y el historial de versiones.',
  'help.ctx.admin.bullet.5':
    'Copia de seguridad y Auditoría: copias bajo demanda y programadas, y el registro de eventos relevantes para la seguridad.',
  'help.ctx.admin-users.title': 'Usuarios',
  'help.ctx.admin-users.summary':
    'Cada cuenta de este TREK, con rol, correo y último inicio de sesión, y los enlaces de invitación que permiten a la gente registrarse en una instancia cerrada.',
  'help.ctx.admin-users.bullet.1':
    'La tabla: usuario, correo, rol, fecha de creación, último acceso y las acciones por fila. Tú apareces marcado como tú.',
  'help.ctx.admin-users.bullet.2': 'Crear usuario arriba añade una cuenta a mano, con una contraseña que entregas tú.',
  'help.ctx.admin-users.bullet.3':
    'Enlaces de invitación debajo: enlaces de registro de un solo uso con un límite de usos, una caducidad y, si quieres, un viaje al que el nuevo usuario se une al llegar.',
  'help.ctx.admin-users.bullet.4':
    'Configuración de permisos al final: por acción, quién puede hacerla, Todos, Miembros del viaje, Propietario del viaje o Solo administrador.',
  'help.ctx.admin-defaults.title': 'Valores predeterminados',
  'help.ctx.admin-defaults.summary':
    'Los ajustes con los que arranca una cuenta nueva, para que nadie tenga que buscar primero la pestaña del mapa: motor de mapas, estilo, tokens y calidad.',
  'help.ctx.admin-defaults.bullet.1':
    'Motor de mapas, estilo y token de Mapbox, clave de CARTO y calidad de Mapbox, exactamente como los pondría un usuario en Ajustes, Mapa.',
  'help.ctx.admin-defaults.bullet.2':
    'Restaurar por campo devuelve la elección propia de TREK; el ajuste propio de un usuario siempre gana a estos.',
  'help.ctx.admin-config.title': 'Personalización',
  'help.ctx.admin-config.summary':
    'Lo que comparten todos los viajes de la instancia: plantillas de equipaje, el conjunto de categorías para lugares y colecciones, y el catálogo de vacaciones escolares del que bebe Vacay.',
  'help.ctx.admin-config.bullet.1':
    'Plantillas de equipaje: listas con nombre de categorías y artículos de las que puede partir la lista de equipaje de un viaje.',
  'help.ctx.admin-config.bullet.2':
    'Categorías: nombre, icono y color de las categorías que se usan en todo TREK, del inspector de lugares a Colecciones.',
  'help.ctx.admin-config.bullet.3':
    'Vacaciones escolares: el catálogo de países y regiones, para sitios que las fuentes integradas no cubren.',
  'help.ctx.admin-settings.title': 'Ajustes',
  'help.ctx.admin-settings.summary':
    'Cómo entra la gente y con qué puede hablar el servidor: métodos de inicio de sesión y registro, SSO, passkeys, política de dos factores, las claves API para mapas, lugares e imágenes, los proveedores de búsqueda y transporte, y los tipos de archivo que pueden tener las subidas.',
  'help.ctx.admin-settings.bullet.1':
    'Authentication Methods: Password Login, Password Registration, SSO Login, SSO Auto-Provisioning y Exigir autenticación en dos factores (2FA).',
  'help.ctx.admin-settings.bullet.2':
    'Inicio de sesión único (OIDC) con emisor, cliente y nombre visible; Inicio de sesión con passkey con Relying Party ID y orígenes.',
  'help.ctx.admin-settings.bullet.3':
    'Claves API: Google Maps, Unsplash y Amap, cada una con Probar; Para qué se usa la clave limita la clave de Google a las funciones que quieres pagar.',
  'help.ctx.admin-settings.bullet.4':
    'Proveedor de búsqueda de lugares y Proveedor de transporte público eligen quién responde a búsquedas y rutas; Tipos de archivo permitidos limita las subidas.',
  'help.ctx.admin-addons.title': 'Complementos',
  'help.ctx.admin-addons.summary':
    'Los módulos de funciones de TREK, cada uno con un interruptor: Listas, Costes, Documentos, Vacay, Atlas, Colaboración, Travesía, Colecciones, Viaje por carretera, MCP, AirTrail, Dawarich y el análisis con IA. Apagado significa que la entrada de navegación, las rutas y la API desaparecen para todos.',
  'help.ctx.admin-addons.bullet.1':
    'Un mosaico por complemento con su interruptor y, cuando las tiene, subfilas para sus opciones.',
  'help.ctx.admin-addons.bullet.2':
    'Los proveedores de fotos y de documentos también aparecen aquí como mosaicos, para ofrecer Immich o Synology a los usuarios.',
  'help.ctx.admin-addons.bullet.3': 'Seguimiento de equipaje tiene su propio interruptor bajo los mosaicos.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Plugins de terceros que corren en su propio proceso junto a TREK, cada uno con los permisos que pidió al instalarse. Instala desde el catálogo, sube un paquete o enlaza una carpeta mientras desarrollas uno.',
  'help.ctx.admin-plugins.bullet.1':
    'La lista: cada plugin instalado con versión, estado, firma y los permisos que tiene; activar, desactivar, actualizar o desinstalar por fila.',
  'help.ctx.admin-plugins.bullet.2':
    'Subir plugin toma un archivo de paquete; Volver a escanear detecta una carpeta de plugin enlazada para desarrollo.',
  'help.ctx.admin-plugins.bullet.3':
    'Hosts permitidos por plugin: las direcciones a las que un plugin puede llamar, ya que la salida se deniega por defecto.',
  'help.ctx.admin-storage.title': 'Almacenamiento',
  'help.ctx.admin-storage.summary':
    'Dónde viven las subidas: el disco local, un bucket de S3 o un espejo que escribe en ambos. Cada categoría de subida puede ir a un backend distinto, y Estado dice si cada backend responde.',
  'help.ctx.admin-storage.bullet.1':
    'Backends: nombre y tipo de cada uno, con Probar, Editar y Quitar; uno fijado por el entorno es de solo lectura aquí.',
  'help.ctx.admin-storage.bullet.2':
    'Categorías: portadas, documentos, fotos de la travesía y el resto, cada una asignada a un backend; cambiar una ofrece mover los archivos existentes.',
  'help.ctx.admin-storage.bullet.3':
    'Estado: una comprobación por backend, y el archivo semilla que demuestra que la configuración es la que ve el servidor.',
  'help.ctx.admin-notifications.title': 'Notificaciones',
  'help.ctx.admin-notifications.summary':
    'Los canales que la instancia ofrece a sus usuarios, y los que te llegan a ti como admin. Los usuarios eligen sus propios temas y URL en Ajustes; tú decides qué existe y configuras el correo.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy y Webhook: un panel cada uno, con un interruptor que ofrece el canal a los usuarios y la configuración del lado del servidor que necesita.',
  'help.ctx.admin-notifications.bullet.2':
    'Recordatorios de viaje: si el servidor envía el recordatorio antes de que empiece un viaje.',
  'help.ctx.admin-notifications.bullet.3':
    'Ntfy de admin y Webhook de admin: adónde van los eventos de admin como una copia fallida o una versión nueva, con Probar.',
  'help.ctx.admin-mcp-tokens.title': 'Acceso MCP',
  'help.ctx.admin-mcp-tokens.summary':
    'Cada token y sesión OAuth que los clientes de IA tienen contra este TREK, de todos los usuarios, con el poder de revocar cualquiera.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'Tokens de API: quién lo creó, cuándo se usó por última vez, y Eliminar.',
  'help.ctx.admin-mcp-tokens.bullet.2': 'Sesiones OAuth: el cliente, el usuario y los ámbitos concedidos, y Revocar.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Qué hay de nuevo en TREK: el historial de versiones desde GitHub, la versión que ejecutas y si ha salido una más nueva. La actualización en sí ocurre fuera de la app, en el host.',
  'help.ctx.admin-github.bullet.1':
    'Historial de versiones lista las versiones con sus notas; la más nueva lleva Última, y la tuya está marcada.',
  'help.ctx.admin-github.bullet.2':
    'Actualización disponible aparece en la cabecera en cuanto existe una versión más nueva, con cómo actualizar en Docker y en otras instalaciones.',
  'help.ctx.admin-backup.title': 'Copia de seguridad',
  'help.ctx.admin-backup.summary':
    'Copias completas de la base de datos y las subidas, hechas a mano o programadas, guardadas en el servidor y descargables en un solo archivo. Restaurar devuelve una.',
  'help.ctx.admin-backup.bullet.1':
    'Copia de seguridad de datos: Crear copia, y la lista de las existentes con Descargar, Restaurar y eliminar.',
  'help.ctx.admin-backup.bullet.2':
    'Subir copia de seguridad trae un archivo hecho en otra instancia o en un día anterior.',
  'help.ctx.admin-backup.bullet.3': 'Copia automática: activada o no, intervalo, hora y día, y cuántas conservar.',
  'help.ctx.admin-audit.title': 'Auditoría',
  'help.ctx.admin-audit.summary':
    'El registro de eventos administrativos y relevantes para la seguridad: inicios de sesión y fallos, cambios de MFA, cambios de usuarios y ajustes, copias y restauraciones. Solo lectura, lo más nuevo primero.',
  'help.ctx.admin-audit.bullet.1': 'Una fila por evento con hora, usuario, acción, recurso, IP y detalles.',
  'help.ctx.admin-audit.bullet.2': 'Actualizar recarga; Cargar más retrocede más.',
  // create-user
  'help.guide.create-user.title': 'Crear un usuario',
  'help.guide.create-user.goal': 'Añade una cuenta a mano, sin invitación.',
  'help.guide.create-user.step.1': 'Haz clic en Crear usuario en la parte superior de la pestaña Usuarios.',
  'help.guide.create-user.step.2':
    'Introduce Usuario, Correo y una Contraseña, y elige el Rol: Usuario o Administrador.',
  'help.guide.create-user.step.3': 'Haz clic en Crear usuario.',
  'help.guide.create-user.result':
    'La cuenta aparece en la tabla y puede iniciar sesión de inmediato; entrega la contraseña por un canal en el que confíes.',
  'help.guide.create-user.tip.1':
    'Para alguien que deba elegir su propia contraseña, un enlace de invitación es la mejor forma de entrar.',
  'help.guide.create-user.tip.2':
    'Los admins ven esta página y el registro de auditoría; todo lo demás es igual para ambos roles.',
  // edit-user
  'help.guide.edit-user.title': 'Cambiar el rol o la contraseña de un usuario',
  'help.guide.edit-user.goal': 'Asciende a alguien, degrádalo o devuélvele el acceso tras perder la contraseña.',
  'help.guide.edit-user.step.1':
    'Haz clic en el lápiz de la fila del usuario. Editar usuario se abre con los datos de la cuenta.',
  'help.guide.edit-user.step.2':
    'Cambia el Rol, pon una Nueva contraseña, o haz clic en Restablecer passkeys cuando la persona haya perdido el dispositivo donde estaban sus passkeys, y luego Guardar.',
  'help.guide.edit-user.result':
    'El cambio se aplica en la siguiente petición; una contraseña nueva funciona desde el siguiente inicio de sesión.',
  'help.guide.edit-user.tip.1': 'No puedes quitarte el rol de admin mientras seas el último admin.',
  'help.guide.edit-user.tip.2':
    'Restablecer passkeys conserva la contraseña; la persona añade passkeys nuevas en Ajustes, Cuenta.',
  // invite-links
  'help.guide.invite-links.title': 'Invitar a alguien con un enlace',
  'help.guide.invite-links.goal':
    'Deja que una persona se registre en una instancia cerrada y, si quieres, aterrice en un viaje.',
  'help.guide.invite-links.step.1': 'En Enlaces de invitación, haz clic en Crear enlace.',
  'help.guide.invite-links.step.2':
    'Pon Usos máx. y Expira después de, opcionalmente Añadir a un viaje (opcional), y haz clic en Crear y copiar.',
  'help.guide.invite-links.step.3':
    'Envía el enlace. Cada fila muestra cuántas veces se usó y quién lo creó; Copiar enlace lo copia de nuevo, y los enlaces agotados o expirados están marcados.',
  'help.guide.invite-links.result':
    'Quien abra el enlace se registra con su propia contraseña y, si hay un viaje elegido, se une a él al momento.',
  'help.guide.invite-links.tip.1':
    'Los enlaces de invitación funcionan aunque Password Registration esté desactivado en Ajustes.',
  'help.guide.invite-links.tip.2':
    'Un enlace de un solo uso y caducidad corta es el valor más seguro para una sola persona.',
  // delete-user
  'help.guide.delete-user.title': 'Eliminar un usuario',
  'help.guide.delete-user.goal': 'Quita una cuenta y todo lo que solo le pertenece a ella.',
  'help.guide.delete-user.step.1':
    'Haz clic en el icono de papelera de la fila del usuario y confirma Eliminar usuario.',
  'help.guide.delete-user.result':
    'La cuenta, sus propios viajes y sus travesías desaparecen; los viajes compartidos con otros se quedan con los miembros restantes.',
  'help.guide.delete-user.tip.1': 'No se puede deshacer. Haz antes una copia de seguridad si no estás seguro.',
  'help.guide.delete-user.tip.2': 'El último admin no se puede eliminar; haz antes admin a otra persona.',
  // permissions
  'help.guide.permissions.title': 'Decidir quién puede hacer qué',
  'help.guide.permissions.goal': 'Define, por acción, qué rol tiene permiso para hacerla en este TREK.',
  'help.guide.permissions.step.1':
    'En Configuración de permisos, busca la acción en su grupo, por ejemplo Eliminar viajes en Gestión de viajes, y elige el nivel: Todos, Miembros del viaje, Propietario del viaje o Solo administrador. Una fila cambiada aparece marcada como personalizado.',
  'help.guide.permissions.step.2':
    'Haz clic en Guardar. Restablecer valores predeterminados devuelve cada fila al nivel integrado.',
  'help.guide.permissions.result':
    'La regla se aplica a todos los viajes a la vez; los botones y menús de quienes están por debajo del nivel desaparecen.',
  'help.guide.permissions.tip.1':
    'Propietario del viaje es la persona que creó el viaje; los admins siempre pueden hacerlo todo.',
  'help.guide.permissions.tip.2':
    'Baja un nivel antes que eliminar a un miembro: un miembro que no puede editar aún puede leer y comentar.',
  // default-map
  'help.guide.default-map.title': 'Fijar el mapa por defecto para usuarios nuevos',
  'help.guide.default-map.goal': 'Da a cada cuenta nueva un mapa que funcione sin token personal.',
  'help.guide.default-map.step.1':
    'En Mapa, elige el Motor de mapas y, para Mapbox o MapLibre, el Estilo de mapa, el Token de Mapbox compartido y el Modo de alta calidad; para un mapa ráster, la Plantilla del mapa y la Clave de CARTO compartida.',
  'help.guide.default-map.step.2':
    'Junto a cualquier campo que hayas cambiado, restaurar devuelve la elección propia de TREK. Configuración predeterminada de usuarios a la izquierda hace lo mismo para Modo de color, las unidades y la moneda.',
  'help.guide.default-map.result':
    'Las cuentas nuevas arrancan con esto; quien haya puesto su propio mapa en Ajustes conserva el suyo.',
  'help.guide.default-map.tip.1':
    'Un token introducido aquí lo comparten todos los que no tienen uno propio, así que vigila su cuota.',
  'help.guide.default-map.tip.2':
    'Las cuentas existentes que nunca tocaron la pestaña del mapa siguen también estos valores.',
  // packing-templates
  'help.guide.packing-templates.title': 'Crear una plantilla de equipaje',
  'help.guide.packing-templates.goal': 'Da a los viajes una lista de equipaje de partida en lugar de una vacía.',
  'help.guide.packing-templates.step.1': 'Haz clic en Nueva plantilla, escribe un nombre y confirma con la marca.',
  'help.guide.packing-templates.step.2':
    'Abre la plantilla y haz clic en Añadir categoría; bajo cada categoría, el + añade artículos, y un artículo solo necesita un nombre.',
  'help.guide.packing-templates.step.3':
    'Todo se guarda sobre la marcha. El lápiz renombra una plantilla, una categoría o un artículo, la papelera lo elimina.',
  'help.guide.packing-templates.result':
    'La plantilla se ofrece en la lista de equipaje de cada viaje; aplicarla copia los artículos, así que un viaje puede cambiarlos libremente.',
  'help.guide.packing-templates.tip.1':
    'Una plantilla por tipo de viaje, playa, ciudad, senderismo, es mejor que una lista gigante.',
  'help.guide.packing-templates.tip.2': 'Eliminar una plantilla no toca los viajes que ya la aplicaron.',
  // categories
  'help.guide.categories.title': 'Gestionar el conjunto de categorías',
  'help.guide.categories.goal':
    'Decide qué categorías pueden llevar los lugares y las colecciones, y qué aspecto tienen.',
  'help.guide.categories.step.1':
    'Haz clic en Nueva categoría, dale un nombre, elige un icono y un color; la Vista previa muestra el resultado. Haz clic en Crear.',
  'help.guide.categories.step.2':
    'Pasa el ratón por una categoría de la lista para editarla o eliminarla. Eliminar pide confirmación.',
  'help.guide.categories.result':
    'El conjunto se aplica en todas partes a la vez: el inspector de lugares, los pines del mapa, Colecciones y los filtros.',
  'help.guide.categories.tip.1':
    'Los lugares conservan su id de categoría, así que renombrar una categoría la renombra en cada lugar.',
  'help.guide.categories.tip.2':
    'Una categoría eliminada deja a sus lugares sin ninguna; reasígnalos antes si eso importa.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Mantener las vacaciones escolares a mano',
  'help.guide.school-holiday-catalog.goal':
    'Cubre un país o región que las fuentes de vacaciones integradas no cubren.',
  'help.guide.school-holiday-catalog.step.1':
    'En Vacaciones escolares, haz clic en Añadir país, introduce el País y su Código de país (p. ej. US), y Guardar; después Añadir región por cada parte que sea distinta.',
  'help.guide.school-holiday-catalog.step.2':
    'Haz clic en una región para abrir Región o distrito escolar: Añadir período, dale a cada uno un Nombre de las vacaciones, Fecha de inicio y Fecha de fin, y Guardar. La papelera quita un período, una región o, cuando ya no le quedan regiones, un país.',
  'help.guide.school-holiday-catalog.result':
    'Los usuarios encuentran el país y la región en Ajustes dentro de Vacay y ven los períodos en su cuadrícula anual.',
  'help.guide.school-holiday-catalog.tip.1':
    'Las regiones de las fuentes integradas no se pueden editar aquí; añade al lado una región manual si una fecha está mal.',
  // auth-methods
  'help.guide.auth-methods.title': 'Decidir cómo inicia sesión la gente',
  'help.guide.auth-methods.goal':
    'Abre o cierra el inicio de sesión con contraseña, el SSO y el registro, y exige 2FA.',
  'help.guide.auth-methods.step.1':
    'En Authentication Methods, activa o desactiva Password Login y Password Registration. Registro desactivado significa cuentas nuevas solo por enlaces de invitación, SSO o a mano.',
  'help.guide.auth-methods.step.2':
    'SSO Login y SSO Auto-Provisioning necesitan un Inicio de sesión único (OIDC) configurado más abajo; el aprovisionamiento automático crea una cuenta la primera vez que alguien entra por SSO.',
  'help.guide.auth-methods.step.3':
    'Exigir autenticación en dos factores (2FA) hace que cada inicio de sesión con contraseña configure un autenticador en el siguiente acceso. Inicio de sesión con passkey necesita el Relying Party ID y los orígenes por los que se llega a tu TREK.',
  'help.guide.auth-methods.result':
    'La página de inicio de sesión ofrece exactamente los métodos que dejaste activados.',
  'help.guide.auth-methods.tip.1':
    'Aparece un aviso antes de que te dejes fuera: al menos una vía de entrada para admins sigue activa.',
  'help.guide.auth-methods.tip.2': 'Los valores fijados por variables de entorno se muestran aquí como solo lectura.',
  // oidc
  'help.guide.oidc.title': 'Conectar el inicio de sesión único',
  'help.guide.oidc.goal': 'Deja que la gente inicie sesión con tu proveedor de identidad.',
  'help.guide.oidc.step.1':
    'En Inicio de sesión único (OIDC), introduce el Nombre visible para el botón y la URL del emisor, el Client ID y el Client Secret de tu proveedor, y luego Guardar.',
  'help.guide.oidc.step.2': 'Activa SSO Login en Authentication Methods.',
  'help.guide.oidc.result':
    'La página de inicio de sesión muestra el botón de SSO; con SSO Auto-Provisioning activado, quien entra por primera vez recibe una cuenta automáticamente.',
  'help.guide.oidc.tip.1':
    'La URI de redirección que necesita tu proveedor es la dirección de tu TREK más la ruta de callback de OIDC de la documentación.',
  'help.guide.oidc.tip.2':
    'El mapeo de claims decide qué grupos de SSO se convierten en admins; mira la página de OIDC en la documentación.',
  // instance-keys
  'help.guide.instance-keys.title': 'Introducir las claves API',
  'help.guide.instance-keys.goal':
    'Desbloquea la búsqueda de lugares de Google, las portadas de Unsplash y Amap para toda la instancia.',
  'help.guide.instance-keys.step.1':
    'En Claves API, pega la Clave API de Google Maps y haz clic en Probar; el campo dice si la clave responde.',
  'help.guide.instance-keys.step.2':
    'En Para qué se usa la clave, activa solo las funciones que quieres que se facturen a esa clave: autocompletado, detalles, fotos, enriquecimiento, el registro de búsquedas.',
  'help.guide.instance-keys.step.3':
    'Clave de API de Unsplash alimenta la búsqueda de portadas; Clave de API de Amap (高德地图) la búsqueda de lugares en China. Prueba cada una de la misma forma.',
  'help.guide.instance-keys.result':
    'Los usuarios obtienen las funciones sin claves propias; sin clave de Google, TREK busca a través de la pila libre de OpenStreetMap y la TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'La clave personal de un usuario en Ajustes gana a la clave de la instancia para ese usuario.',
  'help.guide.instance-keys.tip.2':
    'Las claves también pueden venir de variables de entorno; esas se muestran aquí como solo lectura.',
  // places-transit
  'help.guide.places-transit.title': 'Elegir los proveedores de búsqueda y transporte',
  'help.guide.places-transit.goal':
    'Decide quién responde a las búsquedas de lugares y a las rutas de transporte público.',
  'help.guide.places-transit.step.1':
    'En Proveedor de búsqueda de lugares, elige Automático, Google Places, Amap (高德地图) u OpenStreetMap. Automático usa la mejor clave que exista.',
  'help.guide.places-transit.step.2':
    'En Proveedor de transporte público, elige Transitous (gratis), mundial y sin clave, o Google, que necesita la clave de Google.',
  'help.guide.places-transit.result':
    'Cada cuadro de búsqueda y cada ruta de transporte público en TREK sigue esa elección.',
  'help.guide.places-transit.tip.1': 'Un proveedor sin su clave muestra un aviso aquí y recurre a OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Las rutas de transporte de Google se facturan por petición; Transitous no.',
  // file-types
  'help.guide.file-types.title': 'Limitar los tipos de archivo',
  'help.guide.file-types.goal': 'Decide qué extensiones de archivo pueden tener las subidas.',
  'help.guide.file-types.step.1':
    'En Tipos de archivo permitidos, edita la lista de extensiones separadas por comas y guarda.',
  'help.guide.file-types.result':
    'Las subidas de cualquier otro tipo se rechazan con un mensaje claro, en los documentos, el diario y las portadas.',
  'help.guide.file-types.tip.1':
    'Mantén los tipos de imagen en la lista; las portadas y las fotos de la travesía pasan por la misma comprobación.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Activar o desactivar un complemento',
  'help.guide.toggle-addon.goal': 'Ofrece un módulo de funciones a todos, o quítalo.',
  'help.guide.toggle-addon.step.1':
    'Cambia el interruptor en el mosaico del complemento. La entrada de navegación aparece o desaparece para todos a la vez.',
  'help.guide.toggle-addon.step.2':
    'Algunos mosaicos llevan subfilas para sus opciones, como Seguimiento de equipaje bajo Listas o los proveedores de fotos bajo Travesía; solo se muestran mientras el complemento está activado.',
  'help.guide.toggle-addon.result':
    'Los datos de un complemento desactivado se conservan; volver a activarlo los muestra de nuevo.',
  'help.guide.toggle-addon.tip.1':
    'MCP desactivado quita el endpoint y las secciones de Integraciones que dependen de él.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas y Travesía son los complementos que más piden los usuarios; Documentos necesita almacenamiento para las subidas.',
  // install-plugin
  'help.guide.install-plugin.title': 'Instalar un plugin',
  'help.guide.install-plugin.goal': 'Añade un plugin de terceros y dale exactamente los permisos que pide.',
  'help.guide.install-plugin.step.1':
    'Abre Descubrir, elige un plugin y haz clic en Instalar; o haz clic en Subir plugin y elige un paquete .zip o .tar.gz.',
  'help.guide.install-plugin.step.2':
    'De vuelta en Instalado, lee la fila: qué puede leer o escribir el plugin, los hosts a los que llama y si está firmado. Activa Activar plugin.',
  'help.guide.install-plugin.step.3':
    'El menú de la fila ofrece Reiniciar, Ver registro de errores, Hosts permitidos y Cambiar versión…; Eliminar lo desinstala. Se ofrece una actualización en la fila cuando existe una versión más nueva, y una que pide permisos nuevos se queda apagada hasta que los apruebes.',
  'help.guide.install-plugin.result':
    'El plugin corre en su propio proceso; lo que añade, widgets, capas de mapa, herramientas, aparece donde el plugin lo declara.',
  'help.guide.install-plugin.tip.1':
    'Volver a escanear detecta una carpeta de plugin enlazada para desarrollo sin paquete.',
  'help.guide.install-plugin.tip.2':
    'Un plugin sin firmar aparece marcado como tal; instálalo solo si confías en su origen.',
  // storage-backends
  'help.guide.storage-backends.title': 'Mover las subidas a S3 o a un espejo',
  'help.guide.storage-backends.goal': 'Guarda los archivos en almacenamiento de objetos, o en disco y bucket a la vez.',
  'help.guide.storage-backends.step.1':
    'En Backends, haz clic en Añadir backend, dale un Nombre, elige el Tipo, Local, S3 o Espejo, rellena los campos y Aplicar. Probar comprueba la conexión, Guardar cambios la escribe.',
  'help.guide.storage-backends.step.2':
    'En Categorías, asigna cada categoría de subida a un backend. Cambiar una pregunta si Mover objetos existentes o Solo enrutar las escrituras nuevas.',
  'help.guide.storage-backends.step.3': 'Estado arriba comprueba cada backend; una entrada roja nombra lo que falló.',
  'help.guide.storage-backends.result':
    'Las subidas nuevas van al backend asignado; los archivos movidos se sirven desde allí.',
  'help.guide.storage-backends.tip.1':
    'Un backend configurado por variables de entorno se muestra pero no se puede editar aquí.',
  'help.guide.storage-backends.tip.2':
    'Un espejo escribe en ambos destinos y lee del primero; úsalo para migrar sin tiempo de inactividad.',
  // channels-instance
  'help.guide.channels-instance.title': 'Configurar los canales de notificación',
  'help.guide.channels-instance.goal': 'Decide qué canales pueden elegir los usuarios y configura el correo.',
  'help.guide.channels-instance.step.1':
    'En Email (SMTP), introduce SMTP Host, SMTP Port, SMTP User, SMTP Password y la From Address; Enviar correo de prueba te manda un correo a ti.',
  'help.guide.channels-instance.step.2':
    'Activa Ntfy y Webhook para ofrecerlos; los usuarios introducen entonces su propio tema o URL en Ajustes, Notificaciones.',
  'help.guide.channels-instance.step.3':
    'Recordatorios de viaje controla el recordatorio antes de que empiece un viaje; In-App siempre está activo y aquí solo se explica.',
  'help.guide.channels-instance.result': 'La pestaña Notificaciones de cada usuario muestra los canales que activaste.',
  'help.guide.channels-instance.tip.1':
    'Un servidor ntfy por defecto introducido aquí aparece prerrellenado para los usuarios; aun así pueden indicar el suyo.',
  'help.guide.channels-instance.tip.2':
    'Los canales de plugins aparecen por sí solos en cuanto está activo un plugin con esa capacidad.',
  // admin-channels
  'help.guide.admin-channels.title': 'Recibir los eventos de admin en el móvil',
  'help.guide.admin-channels.goal': 'Entérate de copias fallidas, versiones nuevas y otros eventos de la instancia.',
  'help.guide.admin-channels.step.1':
    'En Ntfy de admin, introduce un tema y, si hace falta, servidor y token; en Webhook de admin, una URL.',
  'help.guide.admin-channels.step.2':
    'Haz clic en Enviar Ntfy de prueba o Enviar webhook de prueba para ver llegar un mensaje.',
  'help.guide.admin-channels.result': 'Los eventos de admin van allí además de a la campana de la app de cada admin.',
  'help.guide.admin-channels.tip.1':
    'Mantén el tema de admin separado del personal, para que una caída no se ahogue entre la charla de los viajes.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Revocar el acceso de la IA',
  'help.guide.mcp-tokens-admin.goal':
    'Ve y corta cada token y sesión que tenga un cliente de IA, de cualquier usuario.',
  'help.guide.mcp-tokens-admin.step.1':
    'En Tokens de API, busca el token por usuario y nombre; la papelera lo elimina y el cliente se detiene al momento.',
  'help.guide.mcp-tokens-admin.step.2':
    'En Sesiones OAuth, lo mismo para los clientes basados en navegador: cliente, usuario y fecha, y la papelera revoca la sesión.',
  'help.guide.mcp-tokens-admin.result': 'Su usuario tiene que volver a conectar el cliente; nada más cambia.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Los ámbitos te dicen qué podía hacer un cliente; dejar un ámbito de solo lectura es inofensivo.',
  'help.guide.mcp-tokens-admin.tip.2': 'Desactivar el complemento MCP lo revoca todo de una vez.',
  // release-history
  'help.guide.release-history.title': 'Comprobar si hay una versión nueva',
  'help.guide.release-history.goal': 'Sabe si tu TREK está al día y qué trae la siguiente versión.',
  'help.guide.release-history.step.1':
    'Cuando existe una versión más nueva, Actualización disponible aparece en la parte superior de la página de admin; Ver en GitHub la abre, y Cómo actualizar explica la actualización para Docker y para otras instalaciones.',
  'help.guide.release-history.step.2':
    'Historial de versiones lista cada versión con sus notas; Mostrar detalles las despliega, la más nueva lleva Última, y Cargar más retrocede más.',
  'help.guide.release-history.result':
    'La actualización ocurre en el host, descargando la imagen nueva o construyendo la etiqueta nueva; el directorio de datos se queda.',
  'help.guide.release-history.tip.1':
    'Haz una copia de seguridad antes de actualizar; la pestaña Copia de seguridad está al lado.',
  'help.guide.release-history.tip.2':
    'Las versiones preliminares se muestran pero no se anuncian como actualizaciones, salvo que ejecutes una.',
  // create-backup
  'help.guide.create-backup.title': 'Hacer y restaurar una copia de seguridad',
  'help.guide.create-backup.goal':
    'Haz una instantánea de toda la instancia, guarda una copia en otro sitio y sé capaz de devolverla.',
  'help.guide.create-backup.step.1':
    'En Copia de seguridad de datos, haz clic en Crear copia. Empaqueta la base de datos y las subidas en un solo archivo en el servidor.',
  'help.guide.create-backup.step.2':
    'Descargar guarda una copia fuera de la máquina; la papelera elimina las antiguas para liberar espacio.',
  'help.guide.create-backup.step.3':
    'Restaurar sobre una copia, o Subir copia de seguridad con un archivo, sustituye los datos actuales después de que ¿Restaurar copia? pregunte una vez.',
  'help.guide.create-backup.result':
    'Una restauración devuelve usuarios, viajes, archivos y ajustes al estado de esa copia; todos quedan desconectados.',
  'help.guide.create-backup.tip.1':
    'Restaurar es la única acción de aquí que no se puede deshacer. Haz antes una copia fresca.',
  'help.guide.create-backup.tip.2':
    'Las copias viven en el directorio de datos; una copia en otra máquina es lo que las convierte en copia de seguridad.',
  // auto-backup
  'help.guide.auto-backup.title': 'Programar copias de seguridad',
  'help.guide.auto-backup.goal': 'Deja que el servidor se respalde solo y conserve solo las últimas.',
  'help.guide.auto-backup.step.1':
    'En Copia automática, activa Activar copia automática y elige el Intervalo, Ejecutar a la hora y, para semanal o mensual, el Día de la semana o el Día del mes.',
  'help.guide.auto-backup.step.2':
    'Eliminar copias antiguas después de fija cuánto tiempo se conserva una copia; las más antiguas se van cuando se hace una nueva.',
  'help.guide.auto-backup.result':
    'Las copias aparecen en la lista según lo programado; un fallo llega a los canales de admin.',
  'help.guide.auto-backup.tip.1':
    'Las horas siguen la zona horaria del servidor, que se muestra en la pestaña Auditoría.',
  'help.guide.auto-backup.tip.2': 'El almacenamiento del servidor es finito; conservar de tres a cinco suele bastar.',
  // audit-log
  'help.guide.audit-log.title': 'Leer el registro de auditoría',
  'help.guide.audit-log.goal': 'Averigua quién hizo qué, y cuándo.',
  'help.guide.audit-log.step.1':
    'Lee las filas: hora, usuario, acción, recurso, IP y detalles, lo más nuevo primero. Las acciones se nombran por lo que pasó, como un fallo de inicio de sesión, un cambio de MFA o una restauración.',
  'help.guide.audit-log.step.2': 'Actualizar recarga la parte superior; Cargar más retrocede más.',
  'help.guide.audit-log.result': 'Un rastro que puedes entregar a quien pregunte por qué cambió algo.',
  'help.guide.audit-log.tip.1': 'Las horas se muestran en la zona horaria del servidor, indicada encima de la tabla.',
  'help.guide.audit-log.tip.2':
    'El registro es solo de adición; nada de aquí se puede editar ni eliminar desde la app.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Viaje',
  'help.ctx.trip.summary':
    'Un viaje, todo él: el plan con sus días, mapa y lugares, y las pestañas de transportes, reservas, listas, costes, archivos y colaboración. Cada una es su propia pantalla de ayuda debajo de esta.',
  'help.ctx.trip.bullet.1':
    'La barra de pestañas: Plan, Transportes, Reservas, Listas, Costes, Archivos y Colaboración. Los addons y los plugins deciden qué pestañas existen en tu TREK.',
  'help.ctx.trip.bullet.2':
    'Plan son tres columnas: los días a la izquierda, el mapa en el centro, los lugares a la derecha. Las reservas y los transportes viven dentro del plan, en la parada y entre paradas; las pestañas los listan.',
  'help.ctx.trip.bullet.3':
    'Compartir, arriba a la derecha, abre a la gente del viaje: miembros, invitados, el enlace de invitación y el enlace público de solo lectura.',
  'help.ctx.trip.bullet.4':
    'El título, las fechas, la portada y la moneda se editan desde Mis viajes, con el lápiz de la tarjeta del viaje.',
  'help.ctx.trip.bullet.5':
    'Los chevrones del borde interior de una columna la pliegan y el mapa ocupa el sitio; el separador fino junto a una columna cambia su anchura.',
  'help.ctx.trip.bullet.6':
    'La flecha de deshacer en la barra de herramientas de los días revierte el último cambio al plan.',
  // add-member
  'help.guide.add-member.title': 'Añadir un miembro',
  'help.guide.add-member.goal': 'Da acceso a este viaje a alguien con cuenta de TREK.',
  'help.guide.add-member.step.1': 'Haz clic en Compartir, arriba a la derecha.',
  'help.guide.add-member.step.2': 'En Invitar usuario, elige a la persona de la lista y haz clic en Invitar.',
  'help.guide.add-member.step.3':
    'La persona aparece ahora en Acceso. La corona marca al propietario; el icono al final de una fila quita el acceso de nuevo.',
  'help.guide.add-member.result':
    'El miembro ve y edita el viaje como tú, dentro de los niveles que el admin fijó en Configuración de permisos.',
  'help.guide.add-member.tip.1':
    'Quien falte en la lista aún no tiene cuenta de TREK: añádelo como invitado, o deja que se registre con un enlace de invitación.',
  'help.guide.add-member.tip.2':
    'El número junto a Acceso cuenta a la gente del viaje; los invitados se listan aparte, debajo.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Invitar por enlace',
  'help.guide.trip-invite-link.goal': 'Deja que la gente se una al viaje por su cuenta.',
  'help.guide.trip-invite-link.step.1':
    'Haz clic en Compartir y luego, en Enlace de invitación al viaje, en Crear enlace de invitación.',
  'help.guide.trip-invite-link.step.2':
    'Haz clic en Copiar y envía el enlace. Cualquiera con cuenta de TREK que lo abra se une como miembro.',
  'help.guide.trip-invite-link.step.3':
    'Regenerar sustituye el enlace y deja el antiguo inservible; Desactivar lo apaga.',
  'help.guide.trip-invite-link.result': 'Quien abra el enlace está en el viaje y aparece en Acceso.',
  'help.guide.trip-invite-link.tip.1':
    'Alguien sin cuenta no puede usarlo. Un admin reparte enlaces de registro en Administración, Usuarios, y puede vincular uno a este viaje.',
  'help.guide.trip-invite-link.tip.2':
    'Regenera cuando un enlace haya ido al chat equivocado: el antiguo deja de funcionar al instante.',
  // add-guest
  'help.guide.add-guest.title': 'Añadir un invitado sin cuenta',
  'help.guide.add-guest.goal': 'Cuenta con alguien que no usa TREK.',
  'help.guide.add-guest.step.1': 'Haz clic en Compartir y baja hasta Invitados.',
  'help.guide.add-guest.step.2': 'Escribe el nombre en Nombre del invitado y haz clic en Añadir invitado.',
  'help.guide.add-guest.result':
    'El invitado puede asignarse a costes, artículos de equipaje y tareas, pero no puede iniciar sesión.',
  'help.guide.add-guest.tip.1':
    'El lápiz renombra a un invitado; el icono al final de la fila lo quita junto con sus partes y asignaciones.',
  'help.guide.add-guest.tip.2':
    'Si la persona consigue una cuenta más adelante, invítala como miembro y quita al invitado.',
  // public-link
  'help.guide.public-link.title': 'Publicar un enlace de solo lectura',
  'help.guide.public-link.goal': 'Muestra el viaje a gente que no debe editarlo.',
  'help.guide.public-link.step.1':
    'Haz clic en Compartir; a la derecha, en Enlace público, marca lo que el enlace puede mostrar. Mapa y plan está siempre activo; Reservas, Equipaje, Costes y Chat los eliges tú.',
  'help.guide.public-link.step.2': 'Haz clic en Crear enlace y luego en Copiar.',
  'help.guide.public-link.step.3': 'Las marcas pueden cambiarse mientras el enlace exista; Eliminar enlace lo detiene.',
  'help.guide.public-link.result':
    'Cualquiera con el enlace ve las partes elegidas sin iniciar sesión y no puede cambiar nada.',
  'help.guide.public-link.tip.1':
    'El enlace no aparece listado en ningún sitio; quien lo tenga puede abrirlo, así que trátalo como una contraseña.',
  'help.guide.public-link.tip.2': 'Para derechos de edición, añade a la persona como miembro en su lugar.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Ceder el viaje o abandonarlo',
  'help.guide.transfer-ownership.goal': 'Haz propietario a otra persona, o sal de un viaje que no es tuyo.',
  'help.guide.transfer-ownership.step.1':
    'Haz clic en Compartir. En Acceso, la corona en la fila de un miembro hace propietaria a esa persona; confirma la pregunta.',
  'help.guide.transfer-ownership.step.2':
    'Abandonar viaje en tu propia fila te saca del viaje; como propietario, cédelo primero.',
  'help.guide.transfer-ownership.result':
    'El nuevo propietario gestiona a los miembros y puede eliminar el viaje; tú te quedas como miembro normal.',
  'help.guide.transfer-ownership.tip.1':
    'El propietario es quien creó el viaje hasta que lo cede; eliminar el viaje es solo cosa suya.',
  'help.guide.transfer-ownership.tip.2':
    'Quitar acceso en otra fila es el mismo botón al revés: el propietario saca a un miembro.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Hacer sitio para el mapa',
  'help.guide.collapse-columns.goal': 'Pliega una columna o dale más anchura.',
  'help.guide.collapse-columns.step.1':
    'Haz clic en el chevrón del borde interior de la columna de días para plegarla; el mapa ocupa el espacio. La columna de lugares tiene el mismo chevrón.',
  'help.guide.collapse-columns.step.2': 'Haz clic de nuevo en el chevrón para recuperar la columna.',
  'help.guide.collapse-columns.step.3':
    'Arrastra el separador fino entre una columna y el mapa para cambiar la anchura de la columna.',
  'help.guide.collapse-columns.result':
    'Las anchuras se recuerdan; las columnas vuelven abiertas en la próxima visita.',
  'help.guide.collapse-columns.tip.1': 'Las dos columnas pueden plegarse a la vez para una vista solo de mapa.',
  'help.guide.collapse-columns.tip.2':
    'En un teléfono no hay columnas: Plan y Lugares son los dos botones en la parte inferior del mapa.',
  // undo-change
  'help.guide.undo-change.title': 'Deshacer el último cambio',
  'help.guide.undo-change.goal': 'Revierte lo que acabas de hacer en el plan.',
  'help.guide.undo-change.step.1':
    'Haz clic en la flecha de deshacer de la barra de herramientas sobre los días; su tooltip nombra el cambio que va a revertir.',
  'help.guide.undo-change.result':
    'El plan vuelve a estar como estaba, y la flecha se pone gris hasta el próximo cambio.',
  'help.guide.undo-change.tip.1':
    'Deshacer cubre el plan: asignar, quitar, reordenar y mover lugares, optimizar una ruta, eliminar lugares, cambios de categoría e importaciones.',
  'help.guide.undo-change.tip.2':
    'Tiene un solo paso de profundidad: solo el último cambio puede revertirse, y un cambio nuevo lo sustituye.',

  // ── Screen: trip-places ───────────────────────────────────────────────────────────────
  'help.ctx.trip-places.title': 'Lugares',
  'help.ctx.trip-places.summary':
    'La columna derecha del plan: todos los lugares del viaje, planificados o no, con búsqueda y filtros, y las formas de traer lugares, a mano, desde un archivo o desde una lista compartida.',
  'help.ctx.trip-places.bullet.1':
    'Añadir lugar/actividad, arriba, abre el formulario de un lugar que escribes o buscas. Mientras hay un día abierto el botón dice Nuevo lugar, y Al día, a su lado, crea el lugar directamente en ese día.',
  'help.ctx.trip-places.bullet.2':
    'Importar archivo acepta archivos .gpx, .kml y .kmz; Importar lista acepta una lista compartida de Google Maps o de Naver Maps. Un archivo también se puede soltar sin más sobre la columna.',
  'help.ctx.trip-places.bullet.3':
    'El desplegable cambia entre Todo, Sin planificar, Planificados y, en cuanto se importa una ruta, Rutas; debajo están la búsqueda, el filtro de categoría y la estrella para una valoración mínima.',
  'help.ctx.trip-places.bullet.4':
    'Una fila muestra imagen, nombre y descripción o dirección. Haz clic en ella para ver los detalles del lugar, arrástrala a un día, o haz clic derecho para Editar, + Día, Abrir la web, Google Maps, Guardar en colección y Eliminar.',
  'help.ctx.trip-places.bullet.5':
    'Con un día abierto, un + al final de una fila sin planificar pone el lugar en ese día, y Planificados lista solo ese día, con Mostrar todo el viaje para volver a ampliar.',
  'help.ctx.trip-places.bullet.6':
    'La marca al extremo derecho de la fila de filtros inicia una selección: varias filas a la vez reciben una categoría nueva, van a una colección o se eliminan.',
  // create-place
  'help.guide.create-place.title': 'Crear un lugar',
  'help.guide.create-place.goal':
    'Añade un lugar o una actividad a mano, con todo lo que el plan necesita saber de él.',
  'help.guide.create-place.step.1':
    'Haz clic en Añadir lugar/actividad, arriba en la columna de lugares (Nuevo lugar mientras hay un día abierto). Se abre el formulario.',
  'help.guide.create-place.step.2':
    'Escribe el lugar en Buscar lugares... arriba y elige un resultado. Nombre, Dirección, Latitud, Longitud y Página web se rellenan, y Detalles del lugar, a la izquierda, muestra imágenes, el horario de apertura y una descripción. En un TREK con clave de Google, ¿No es el lugar correcto? Buscar en Google está bajo la lista y repite la misma búsqueda a través de Google.',
  'help.guide.create-place.step.3':
    'En Detalles del lugar, un clic en una imagen bajo Elegir una imagen la convierte en la imagen del lugar; Usar este texto lleva la descripción al formulario.',
  'help.guide.create-place.step.4':
    'Revisa los campos: Nombre es obligatorio; Descripción y Notas son tuyas; Dirección, Latitud y Longitud vienen de la búsqueda o se escriben; Categoría elige una de las categorías del viaje, y el + de al lado crea una nueva en el acto; Página web recoge el enlace.',
  'help.guide.create-place.step.5':
    'Haz clic en Añadir. Si ya hay un lugar con el mismo nombre en el viaje, el formulario lo avisa y el botón pasa a ser Añadir de todos modos.',
  'help.guide.create-place.result':
    'El lugar está en la lista y en el mapa, bajo Sin planificar hasta que se pone en un día.',
  'help.guide.create-place.tip.1':
    'Archivos y Costs, al final del formulario, adjuntan un documento al lugar, o abren el editor Costs para su gasto justo después de guardar.',
  'help.guide.create-place.tip.2':
    'El índice de TREK y OpenStreetMap responden a la búsqueda en cualquier TREK, y Detalles del lugar se rellena desde Wikipedia, Wikivoyage y Wikimedia. A Google solo se le pregunta donde los dos salen vacíos, y solo él trae las valoraciones.',
  'help.guide.create-place.tip.3':
    'Un lugar también puede empezar en el mapa: haz clic derecho en el punto y el formulario se abre con las coordenadas y la dirección puestas.',
  // place-to-open-day
  'help.guide.place-to-open-day.title': 'Añadir un lugar directamente al día abierto',
  'help.guide.place-to-open-day.goal': 'Ahórrate el segundo paso: crea o elige el lugar y tenlo en el día de una vez.',
  'help.guide.place-to-open-day.step.1':
    'Haz clic en la cabecera de un día en la columna de días. El día está abierto: su tarjeta queda resaltada y la columna de lugares gana el botón Al día.',
  'help.guide.place-to-open-day.step.2':
    'Al día abre el mismo formulario que Nuevo lugar, solo que el lugar cae en el día abierto en cuanto haces clic en Añadir.',
  'help.guide.place-to-open-day.step.3':
    'Un lugar que ya existe va al día abierto con el + al final de su fila, o con clic derecho, + Día.',
  'help.guide.place-to-open-day.result':
    'El lugar queda listado bajo el día, al final; arrástralo arriba o abajo hasta donde le toca.',
  'help.guide.place-to-open-day.tip.1':
    'Arrastrar una fila a un día funciona igual, y así el lugar se puede soltar entre dos paradas de una vez.',
  'help.guide.place-to-open-day.tip.2': 'Deshacer, en la barra de herramientas sobre los días, revierte la asignación.',
  // filter-places
  'help.guide.filter-places.title': 'Encontrar un lugar en la lista',
  'help.guide.filter-places.goal': 'Estrecha la columna a los lugares que buscas.',
  'help.guide.filter-places.step.1':
    'El desplegable de arriba cambia entre Todo, Sin planificar (aún en ningún día), Planificados (en un día) y Rutas (rutas GPX importadas), cada uno con su número.',
  'help.guide.filter-places.step.2': 'Escribe en Buscar lugares...; la lista se estrecha mientras escribes.',
  'help.guide.filter-places.step.3':
    'Todas las categorías abre una lista para marcar una o varias categorías, Sin categoría entre ellas; Borrar filtro, abajo del todo, lo reinicia.',
  'help.guide.filter-places.step.4':
    'La estrella de al lado fija una valoración mínima: 5+, 4+ y así sucesivamente muestran solo lugares que has valorado al menos así de alto.',
  'help.guide.filter-places.result': 'El número sobre las filas dice cuántos lugares encajan; los filtros se combinan.',
  'help.guide.filter-places.tip.1':
    'Con un día abierto, Planificados lista solo ese día y lo dice: Se muestra solo el día abierto, con Mostrar todo el viaje al lado.',
  'help.guide.filter-places.tip.2':
    'El mapa también se estrecha al día abierto; Todo en la lista sigue mostrando todos los lugares del viaje.',
  // edit-place
  'help.guide.edit-place.title': 'Cambiar un lugar',
  'help.guide.edit-place.goal': 'Corrige un nombre, mueve el pin, añade una página web o cambia la categoría.',
  'help.guide.edit-place.step.1':
    'Haz clic derecho en la fila y elige Editar, o abre el lugar y haz clic en Editar en sus detalles.',
  'help.guide.edit-place.step.2':
    'Cambia lo que necesites: Nombre, Descripción, Notas, Dirección, Latitud y Longitud, Categoría, Página web. Abierto desde un día, el formulario tiene además Notas para este día e Inicio y Fin para ese día.',
  'help.guide.edit-place.step.3': 'Haz clic en Actualizar.',
  'help.guide.edit-place.result':
    'El cambio se aplica en todos los sitios donde aparece el lugar: la lista, el mapa y cada día en el que está.',
  'help.guide.edit-place.tip.1':
    'Notas para este día pertenece al lugar en ese único día; Notas pertenece al lugar en sí.',
  'help.guide.edit-place.tip.2':
    'Un Fin anterior al Inicio bloquea Actualizar; Solapamiento horario con: solo avisa de que otra parada del día tiene la misma hora.',
  // delete-place
  'help.guide.delete-place.title': 'Eliminar un lugar',
  'help.guide.delete-place.goal': 'Saca un lugar del viaje para siempre.',
  'help.guide.delete-place.step.1':
    'Haz clic derecho en la fila y elige Eliminar, o haz clic en Eliminar en los detalles del lugar.',
  'help.guide.delete-place.step.2':
    'Confirma. Si se reservó una noche en el lugar, o hay una reserva vinculada a él, la pregunta dice qué se va con él.',
  'help.guide.delete-place.result':
    'El lugar desaparece de la lista, del mapa y de cada día; Deshacer, en la barra de herramientas sobre los días, lo trae de vuelta.',
  'help.guide.delete-place.tip.1': 'Para quitar un lugar de un solo día, usa en su lugar Quitar del día en esa parada.',
  'help.guide.delete-place.tip.2': 'Varios lugares a la vez: la marca junto a los filtros inicia una selección.',
  // select-places
  'help.guide.select-places.title': 'Cambiar o eliminar varios lugares a la vez',
  'help.guide.select-places.goal': 'Ordena la lista de una sola vez en lugar de uno por uno.',
  'help.guide.select-places.step.1':
    'Haz clic en la marca al extremo derecho de la fila de filtros. Las filas reciben casillas y aparece una barra con las acciones.',
  'help.guide.select-places.step.2':
    'Marca las filas, o usa Seleccionar todo en la barra; la barra cuenta lo que está seleccionado.',
  'help.guide.select-places.step.3':
    'Change category les da a todos una misma categoría; Guardar en colección los copia a una de tus colecciones; Eliminar selección los quita tras una confirmación.',
  'help.guide.select-places.step.4': 'Haz clic de nuevo en la marca para salir de la selección.',
  'help.guide.select-places.result':
    'El cambio se aplica a cada lugar seleccionado; un borrado se puede deshacer desde la barra de herramientas sobre los días.',
  'help.guide.select-places.tip.1':
    'Los filtros siguen funcionando mientras seleccionas: filtra primero a Sin planificar y así Seleccionar todo coge justo esos.',
  'help.guide.select-places.tip.2':
    'Marcar como visitado en tus listas aparece en la barra cuando el addon Colecciones está activo: marca los lugares en las colecciones en las que están guardados.',
  // import-places-file
  'help.guide.import-places-file.title': 'Importar lugares desde un archivo GPX, KML o KMZ',
  'help.guide.import-places-file.goal': 'Trae lo que exportaron Google My Maps, Google Earth o un rastreador GPS.',
  'help.guide.import-places-file.step.1':
    'Haz clic en Importar archivo, o suelta el archivo en cualquier punto de la columna de lugares.',
  'help.guide.import-places-file.step.2':
    'Elige el archivo o arrástralo al recuadro. Para un GPX, marca qué importar: Puntos de ruta, Rutas, Tracks (con geometría de ruta); para KML y KMZ, Puntos (Placemarks) y Rutas (LineStrings).',
  'help.guide.import-places-file.step.3':
    'El recuadro acepta varios archivos a la vez, y solo .gpx, .kml y .kmz. Otro tipo de archivo, o uno de más de 10 MB, se rechaza en el diálogo y no se importa.',
  'help.guide.import-places-file.step.4':
    'Haz clic en Importar. Un mensaje dice cuántos lugares han entrado; con un archivo KML o KMZ el diálogo se queda abierto con un resumen de lo que se ha creado y de lo que se ha omitido.',
  'help.guide.import-places-file.result':
    'Los lugares están en la lista; una ruta lleva una marca de itinerario en su fila, se dibuja en el mapa y recibe su propio filtro Rutas.',
  'help.guide.import-places-file.tip.1':
    'Un archivo demasiado grande se rechaza indicando el límite de tamaño; expórtalo de nuevo sin fotos, o divídelo.',
  'help.guide.import-places-file.tip.2':
    'La importación se puede deshacer entera desde la barra de herramientas sobre los días.',
  // import-places-list
  'help.guide.import-places-list.title': 'Importar una lista compartida de Google Maps o de Naver Maps',
  'help.guide.import-places-list.goal': 'Convierte el enlace de una lista compartida en lugares.',
  'help.guide.import-places-list.step.1': 'Haz clic en Importar lista y elige Lista Google o Lista Naver.',
  'help.guide.import-places-list.step.2':
    'Pega el enlace compartido de la lista. Un enlace de indicaciones de Google Maps también sirve: sus paradas se convierten en lugares, en orden de conducción.',
  'help.guide.import-places-list.step.3': 'Haz clic en Importar.',
  'help.guide.import-places-list.result':
    'Todos los lugares de la lista están en el viaje, con el nombre que tienen en la lista; los lugares que ya están en el viaje se omiten.',
  'help.guide.import-places-list.tip.1':
    'La lista tiene que estar compartida públicamente; el enlace de una lista privada no importa nada.',
  'help.guide.import-places-list.tip.2':
    'Enriquecer lugares con Google aparece en el diálogo cuando tu TREK tiene una clave de Google: busca cada lugar importado y completa fotos, dirección y detalles.',

  // ── Screen: trip-days ─────────────────────────────────────────────────────────────────
  'help.ctx.trip-days.title': 'Días',
  'help.ctx.trip-days.summary':
    'La columna izquierda del plan: una tarjeta por día con sus paradas en orden, las notas, las reservas y los transportes del día, y la ruta entre las paradas. Aquí es donde el viaje se planifica de verdad.',
  'help.ctx.trip-days.bullet.1':
    'La barra de arriba: Exportar (PDF, calendario, GPX), Expand all days / Collapse all days, la flecha de Deshacer, Reordenar días y Mostrar todas las rutas de reservas.',
  'help.ctx.trip-days.bullet.2':
    'Una tarjeta de día: número, tiempo, título, fecha y el coste del día en la cabecera; haz clic en la cabecera para abrir el día, su flecha la pliega. Transporte público, Añadir transporte y Añadir nota están también en la cabecera.',
  'help.ctx.trip-days.bullet.3':
    'Dentro de un día: las paradas en orden, cada una con imagen, nombre, hora y un candado sobre la imagen; las notas; las reservas que pertenecen al día; y entre las paradas el tiempo de viaje de cada tramo.',
  'help.ctx.trip-days.bullet.4':
    'Bajo las paradas, la barra de ruta: Ruta dibuja el día en el mapa, Optimizar ordena las paradas, En coche / A pie fija el medio de transporte del día, Abrir en Google Maps y Abrir en CoMaps entregan el día.',
  'help.ctx.trip-days.bullet.5':
    'Los lugares llegan a un día arrastrando una fila de la columna de lugares, con el + de esa fila, con Añadir lugar a este día en un día vacío, o desde los detalles del lugar.',
  'help.ctx.trip-days.bullet.6':
    'Coste total, abajo, suma cada parada y cada reserva con precio, en la moneda del viaje.',
  // read-day-plan
  'help.guide.read-day-plan.title': 'Leer un día',
  'help.guide.read-day-plan.goal': 'Saber qué te dice cada parte de una tarjeta de día antes de cambiar nada.',
  'help.guide.read-day-plan.step.1':
    'La cabecera: el número del día, el pronóstico para el día, Día 1 o el título que le pusiste, la fecha y el coste del día. Haz clic en la cabecera para abrir el día (sus Detalles del día se abren sobre el mapa); la flecha de la derecha pliega y despliega la tarjeta.',
  'help.guide.read-day-plan.step.2':
    'Una parada: el asidero de la izquierda la arrastra, la imagen lleva un candado para la optimización de ruta, luego el nombre, la descripción y, si las hay, las Notas para este día. Una insignia de hora muestra Inicio y Fin cuando la parada los tiene; las flechas que aparecen en su extremo derecho la suben o la bajan.',
  'help.guide.read-day-plan.step.3':
    'Una reserva del día: un transporte aparece como Salida o Llegada con su hora y su trayecto, una reserva en una parada la marca como Reserva confirmada o Reserva pendiente. El pequeño interruptor de un transporte muestra su ruta en el mapa.',
  'help.guide.read-day-plan.step.4':
    'Entre dos paradas el conector dice cuánto dura el tramo y qué distancia tiene, en el medio de transporte del día; haz clic en él para cambiar el medio de ese único tramo.',
  'help.guide.read-day-plan.step.5':
    'La barra de ruta al final: Ruta dibuja el camino del día en el mapa, Optimizar reordena las paradas, los botones de modo eligen En coche o A pie, Abrir en Google Maps y Abrir en CoMaps abren el día allí.',
  'help.guide.read-day-plan.result':
    'Cada símbolo de la tarjeta tiene un significado; las guías de abajo cambian cada uno de ellos.',
  'help.guide.read-day-plan.tip.1':
    'Haz clic derecho en una parada para su menú: Editar, Quitar del día, Abrir la web, las apps de navegación (Google Maps, Waze, Apple Maps, OpenStreetMap, CoMaps), Guardar en colección, Eliminar.',
  'help.guide.read-day-plan.tip.2':
    'Pasa el ratón por una parada y Añadir reserva aparece en su extremo: una reserva creada ahí queda atada a esta parada en este día.',
  // place-onto-day
  'help.guide.place-onto-day.title': 'Poner un lugar en un día',
  'help.guide.place-onto-day.goal': 'Convertir un lugar de la lista en una parada del día, donde le toca en el orden.',
  'help.guide.place-onto-day.step.1':
    'Arrastra una fila de la columna de lugares hasta la tarjeta del día. Suéltala entre dos paradas para ponerla exactamente ahí, o en cualquier punto de la tarjeta para añadirla al final.',
  'help.guide.place-onto-day.step.2':
    'Sin arrastrar: abre el día haciendo clic en su cabecera, luego haz clic en el + del final de la fila del lugar, o haz clic derecho en la fila y elige + Día.',
  'help.guide.place-onto-day.step.3':
    'En un día vacío, Añadir lugar a este día abre el formulario de lugar, y el lugar nuevo cae en el día de inmediato.',
  'help.guide.place-onto-day.step.4':
    'Desde los detalles de un lugar, Añadir al día pregunta a qué día; desde la cabecera del día, Al día en la columna de lugares crea un lugar nuevo en el día abierto.',
  'help.guide.place-onto-day.result':
    'El lugar es una parada del día, en el mapa con el número del día, y la columna de lugares lo cuenta bajo Planificados.',
  'help.guide.place-onto-day.tip.1':
    'Un lugar puede estar en varios días: ponlo en el segundo día desde la columna de lugares. Arrastrar una parada de una tarjeta de día a otra la mueve en vez de copiarla.',
  'help.guide.place-onto-day.tip.2': 'La flecha de Deshacer de la barra deshace la asignación.',
  'help.guide.place-onto-day.tip.3':
    'Una parada no se puede soltar entre dos entradas con hora fija, ni antes de una reserva que ya tiene hora; el plan mantiene su cronología.',
  // reorder-stops
  'help.guide.reorder-stops.title': 'Cambiar el orden de un día',
  'help.guide.reorder-stops.goal': 'Subir o bajar una parada, o llevarla a otro día.',
  'help.guide.reorder-stops.step.1': 'Arrastra la parada por su asidero hasta la nueva posición dentro de la tarjeta.',
  'help.guide.reorder-stops.step.2':
    'O usa las flechas del extremo derecho de la parada: un paso arriba o abajo por clic.',
  'help.guide.reorder-stops.step.3': 'Arrastra la parada a otra tarjeta de día para moverla allí; deja el día antiguo.',
  'help.guide.reorder-stops.step.4':
    'Una parada con hora fija pregunta ¿Eliminar hora? cuando moverla rompería el orden del día, porque la hora decidía su sitio: Confirmar quita la hora y la deja ir a cualquier parte.',
  'help.guide.reorder-stops.result': 'La ruta y los tiempos de viaje siguen el nuevo orden al instante.',
  'help.guide.reorder-stops.tip.1':
    'Las reservas con hora fija no se pueden reordenar; se quedan donde su hora las coloca.',
  'help.guide.reorder-stops.tip.2':
    'Optimizar, en la barra de ruta, ordena todo el día por el camino más corto; bloquea antes una parada para que se quede donde está.',
  // set-stop-times
  'help.guide.set-stop-times.title': 'Darle una hora a una parada',
  'help.guide.set-stop-times.goal':
    'Fijar cuándo empieza y termina una parada, para que el día se lea como un horario.',
  'help.guide.set-stop-times.step.1':
    'Haz clic derecho en la parada y elige Editar. Abierto desde el día, el formulario tiene Inicio y Fin abajo.',
  'help.guide.set-stop-times.step.2':
    'Pon Inicio y, si quieres, Fin. Solapamiento horario con: avisa de que otra parada del día con hora se solapa; un Fin anterior al Inicio bloquea Actualizar.',
  'help.guide.set-stop-times.step.3':
    'Haz clic en Actualizar. La parada recibe una insignia de hora y se mueve al sitio que su hora le da en el día.',
  'help.guide.set-stop-times.result':
    'Las paradas con hora mantienen su sitio en el orden; las paradas sin hora se ordenan a su alrededor.',
  'help.guide.set-stop-times.tip.1':
    'La hora pertenece a la parada de ese día; el mismo lugar puede tener otra hora en otro día.',
  'help.guide.set-stop-times.tip.2':
    'Para mover a mano una parada con hora, arrástrala: la pregunta ¿Eliminar hora? quita la hora por el camino, en cuanto haces clic en Confirmar.',
  'help.guide.set-stop-times.tip.3':
    'El campo Notas para este día, en el mismo formulario, guarda lo que solo vale en este día, una mesa reservada, un número de entrada.',
  // remove-from-day
  'help.guide.remove-from-day.title': 'Sacar una parada de un día',
  'help.guide.remove-from-day.goal': 'Desplanificar un lugar sin borrarlo del viaje.',
  'help.guide.remove-from-day.step.1': 'Haz clic derecho en la parada y elige Quitar del día.',
  'help.guide.remove-from-day.step.2':
    'La parada ya no está en el día; el lugar sigue en la columna de lugares, bajo Sin planificar si no está en ningún otro día.',
  'help.guide.remove-from-day.result':
    'El día, su ruta y su coste se actualizan; la flecha de Deshacer devuelve la parada.',
  'help.guide.remove-from-day.tip.1':
    'Eliminar, en el mismo menú, quita el lugar de todo el viaje, con todos sus días.',
  'help.guide.remove-from-day.tip.2':
    'Quitar del día está también en el panel de detalles del lugar, junto a Añadir al día.',
  // lock-stop
  'help.guide.lock-stop.title': 'Fijar una parada en su sitio',
  'help.guide.lock-stop.goal': 'Mantener una parada donde está cuando se optimiza la ruta.',
  'help.guide.lock-stop.step.1':
    'Pasa el ratón por la imagen de la parada y haz clic en el candado: Mantener posición durante la optimización de ruta.',
  'help.guide.lock-stop.step.2':
    'Optimizar ordena ahora las demás paradas a su alrededor; haz clic otra vez en el candado (Haz clic para desbloquear) para soltarla.',
  'help.guide.lock-stop.result':
    'El candado se ve sobre la imagen; la parada conserva su posición hasta que la desbloquees.',
  'help.guide.lock-stop.tip.1':
    'Una parada con hora fija queda bloqueada por su hora; nunca se mueve durante la optimización.',
  'help.guide.lock-stop.tip.2':
    'El candado dura esta visita: tras recargar, cada parada vuelve a estar libre, solo las paradas con hora siguen fijas.',
  // day-note
  'help.guide.day-note.title': 'Añadir una nota a un día',
  'help.guide.day-note.goal': 'Guardar un recordatorio, un número de entrada o un plan B dentro del día.',
  'help.guide.day-note.step.1': 'Haz clic en Añadir nota en la cabecera del día.',
  'help.guide.day-note.step.2':
    'Dale un nombre en Nota, que es lo que se ve en el día, y escribe el resto en Nota diaria. La barra de herramientas de encima da formato al texto (Negrita, Lista con viñetas, Enlace, Cita), y Vista previa, a la izquierda, muestra cómo quedará la nota en el día.',
  'help.guide.day-note.step.3':
    'Elige un Icono y un Color, para que la nota destaque entre las paradas, y luego Añadir.',
  'help.guide.day-note.step.4':
    'La nota está en el día como una parada: arrástrala a su sitio, haz clic derecho para Editar y Eliminar.',
  'help.guide.day-note.result':
    'La nota forma parte del día, también en el PDF; una nota con hora se ordena con las paradas que tienen hora.',
  'help.guide.day-note.tip.1':
    'Una nota con hora puede hacer de transporte del que no tienes reserva: «08:15 S3 desde la estación central».',
  'help.guide.day-note.tip.2': 'Las notas son por día; una nota para todo el viaje va en Colaboración.',
  // day-route
  'help.guide.day-route.title': 'Mostrar y optimizar la ruta del día',
  'help.guide.day-route.goal':
    'Ver el camino entre las paradas, elegir cómo viajas y dejar que TREK ordene la secuencia.',
  'help.guide.day-route.step.1':
    'Abre el día y haz clic en Ruta en la barra de ruta: el camino entre las paradas se dibuja en el mapa, y los conectores entre las paradas muestran el tiempo y la distancia de cada tramo.',
  'help.guide.day-route.step.2':
    'En coche y A pie, al lado, fijan el medio de transporte del día; los tramos se recalculan. Los plugins pueden añadir medios propios.',
  'help.guide.day-route.step.3':
    'Haz clic en un conector para cambiar el medio de ese único tramo: elige uno, o Usar predet. del día para volver al del día.',
  'help.guide.day-route.step.4':
    'Optimizar reordena las paradas por el camino más corto. Las paradas con candado o con hora fija conservan su sitio; con un alojamiento en el día, la ruta empieza ahí.',
  'help.guide.day-route.step.5':
    'Abrir en Google Maps o Abrir en CoMaps abre el día entero como ruta en esa aplicación, para navegar por el camino.',
  'help.guide.day-route.result':
    'El día es una ruta con horas; Coste total y los tramos se actualizan según cambia el orden.',
  'help.guide.day-route.tip.1':
    'Las rutas vienen de OSRM por defecto; el administrador puede apuntar TREK a otro motor de rutas en Valores predeterminados.',
  'help.guide.day-route.tip.2':
    'Un tramo que no se ha podido calcular no muestra tiempo; comprueba que las dos paradas tengan coordenadas.',
  'help.guide.day-route.tip.3': 'La flecha de Deshacer deshace una optimización.',
  // manage-days
  'help.guide.manage-days.title': 'Añadir, reordenar y renombrar días',
  'help.guide.manage-days.goal': 'Dar forma a los días en sí, no solo a lo que hay en ellos.',
  'help.guide.manage-days.step.1':
    'Los días salen de las fechas del viaje; cambia las fechas en la tarjeta del viaje en Panel y se añaden o se quitan días en los extremos.',
  'help.guide.manage-days.step.2':
    'Reordenar días, en la barra, abre una lista: Subir y Bajar mueven un día con todo lo que lleva; Añadir día añade un día al final.',
  'help.guide.manage-days.step.3':
    'Para renombrar un día, ábrelo y haz clic en el lápiz junto a su título en los Detalles del día sobre el mapa; el nombre sustituye a Día 1 en la tarjeta y en el PDF.',
  'help.guide.manage-days.step.4':
    'Expand all days y Collapse all days, en la barra, pliegan todas las tarjetas a la vez; una sola tarjeta se pliega con su flecha.',
  'help.guide.manage-days.result':
    'Las fechas se quedan con la posición: un día que sube toma la fecha anterior, y sus paradas, notas y reservas viajan con él.',
  'help.guide.manage-days.tip.1': 'Reordenar días se puede deshacer desde la barra.',
  'help.guide.manage-days.tip.2':
    'El coste en la cabecera de un día suma las paradas y reservas de ese día que llevan precio.',
  // bookings-in-plan
  'help.guide.bookings-in-plan.title': 'Leer reservas y transportes en el plan',
  'help.guide.bookings-in-plan.goal': 'Saber dónde aparece una reserva una vez existe, y qué pantalla la crea.',
  'help.guide.bookings-in-plan.step.1':
    'Un transporte (Vuelo, Tren, Ferry, Autobús, Coche) aparece en el día en que sale como Salida y en el día en que llega como Llegada, con hora y trayecto; uno de varios días abarca los días intermedios.',
  'help.guide.bookings-in-plan.step.2':
    'Una reserva atada a una parada (un Restaurante, una Excursión) marca esa parada como Reserva confirmada o Reserva pendiente; una reserva con día pero sin parada es una fila propia dentro del día.',
  'help.guide.bookings-in-plan.step.3':
    'Una noche de hotel es un alojamiento: está en los Detalles del día bajo Alojamiento, del Registro de entrada al Registro de salida, y la ruta de cada uno de esos días empieza ahí.',
  'help.guide.bookings-in-plan.step.4':
    'En el mapa, el interruptor de una fila de transporte dibuja su ruta; Mostrar todas las rutas de reservas, en la barra, las dibuja todas.',
  'help.guide.bookings-in-plan.step.5':
    'Para crearlas: Añadir reserva en una parada con el ratón encima, Añadir transporte y Transporte público en la cabecera del día, y las pestañas Reservas y Transportes para la lista completa con importación y archivos.',
  'help.guide.bookings-in-plan.result':
    'Una reserva, un sitio en el plan; las pestañas son las mismas reservas en forma de lista.',
  'help.guide.bookings-in-plan.tip.1':
    'Confirmada y Pendiente es un estado que pones en la reserva; el plan lo muestra en la parada, la pestaña Reservas cuenta las dos.',
  'help.guide.bookings-in-plan.tip.2':
    'Un transporte con hora fija no se puede arrastrar; cambia en su lugar su hora en la reserva.',
  // export-plan
  'help.guide.export-plan.title': 'Exportar el plan',
  'help.guide.export-plan.goal': 'Llevarte el plan como documento, a tu calendario o a un GPS.',
  'help.guide.export-plan.step.1': 'Haz clic en Exportar en la barra sobre los días.',
  'help.guide.export-plan.step.2':
    'Documento: PDF abre la vista de impresión de cada día con sus paradas, notas y reservas; Salto de página por día empieza cada día en una página nueva, Guardar como PDF lo descarga.',
  'help.guide.export-plan.step.3':
    'Calendario: Descargar .ics guarda las reservas como archivo de calendario; Suscribirse al calendario da un enlace que tu aplicación de calendario actualiza sola.',
  'help.guide.export-plan.step.4':
    'Mapas y GPS · GPX: Todo el viaje exporta lugares, rutas de los días y tracks; Solo lugares, los puntos; Días como rutas, una ruta por día, para mapas sin conexión y dispositivos GPS.',
  'help.guide.export-plan.result': 'El archivo se descarga; en el viaje no cambia nada.',
  'help.guide.export-plan.tip.1':
    'Un día suelto va a una aplicación de mapas desde su barra de ruta: Abrir en Google Maps o Abrir en CoMaps.',
  'help.guide.export-plan.tip.2':
    'Suscribirse al calendario necesita los feeds de calendario activados en tus ajustes; Panel tiene una guía para ello.',
  'help.guide.export-plan.tip.3': 'Exportar es leer: cualquier miembro del viaje puede hacerlo.',

  // ── Screen: trip-place ────────────────────────────────────────────────────────────────
  'help.ctx.trip-place.title': 'Detalles del lugar',
  'help.ctx.trip-place.summary':
    'La ficha que se abre sobre el mapa cuando eliges un lugar: todo lo que el viaje sabe de él, las estrellas que le ha dado cada uno, su imagen y sus archivos, y los botones que lo ponen en el día abierto, en una lista o en una aplicación de mapas.',
  'help.ctx.trip-place.bullet.1':
    'Haz clic en una fila de la columna de lugares, en una parada dentro de un día o en un marcador del mapa, y la ficha se abre sobre el mapa. Elegirlo dentro de un día le dice a la ficha a qué parada te refieres, y eso es lo que trae consigo los participantes de la parada y su reserva.',
  'help.ctx.trip-place.bullet.2':
    'La cabecera lleva la imagen redonda, el nombre, la categoría, la dirección y las coordenadas. Haz clic en la imagen para poner una tuya, doble clic en el nombre para renombrar el lugar en el acto, y la X de la derecha cierra la ficha.',
  'help.ctx.trip-place.bullet.3':
    'Debajo: las estrellas que cada viajero le ha dado al lugar, el precio si lo tiene, la descripción y las notas, y Notas para este día cuando la parada lleva alguna.',
  'help.ctx.trip-place.bullet.4':
    'Horario de apertura, Color de la ruta, Datos de la ruta y Archivos siguen a continuación, en la medida en que apliquen. Archivos acepta cualquier cosa de tus carpetas y lista además lo que cuelga de la reserva de esta parada.',
  'help.ctx.trip-place.bullet.5':
    'La fila de abajo: Añadir al día o Quitar del día mientras hay un día abierto, luego Guardar en colección, Navegación, Abrir la web, Editar y Eliminar.',
  'help.ctx.trip-place.bullet.6':
    'Un lugar que TREK ha podido emparejar con un proveedor de mapas muestra más: la valoración de ese proveedor con una reseña, el número de teléfono y un anillo Abierto o Cerrado alrededor de la imagen, con el horario de la semana detrás.',
  // read-place
  'help.guide.read-place.title': 'Lo que la ficha te dice de un lugar',
  'help.guide.read-place.goal': 'Lee todo lo que el viaje sabe de un lugar, en una sola ficha.',
  'help.guide.read-place.step.1':
    'En la columna de días, haz clic en la parada que quieres leer. La ficha se abre sobre el mapa y la parada se queda marcada en su día.',
  'help.guide.read-place.step.2':
    'La cabecera: la imagen redonda, el nombre, la dirección y las coordenadas exactas. La X de la derecha vuelve a cerrar la ficha.',
  'help.guide.read-place.step.3':
    'Debajo, las estrellas que cada viajero le ha dado al lugar, con la media y cuántos han votado. Sin valorar todavía mientras no lo haya hecho nadie.',
  'help.guide.read-place.step.4':
    'Luego la descripción y, bajo ella, las notas. Ambas son el texto del formulario del lugar, renderizado: listas, enlaces y negritas funcionan.',
  'help.guide.read-place.step.5': 'Participantes dice quién va a esta parada. Están todos hasta que saques a alguien.',
  'help.guide.read-place.step.6':
    'La fila de abajo es lo que puedes hacer desde aquí: quitar el lugar del día abierto o ponerlo en él, guardarlo en una lista, abrirlo en una aplicación de mapas, editarlo o eliminarlo.',
  'help.guide.read-place.result':
    'La ficha sigue abierta hasta que la cierras con la X o eliges otro lugar, y la parada a la que pertenece se queda marcada en la columna de días.',
  'help.guide.read-place.tip.1':
    'Elegida desde la columna de lugares, la ficha conoce el lugar pero no una parada, así que no muestra ni participantes ni reserva. Elige la parada dentro del día y ahí están los dos.',
  'help.guide.read-place.tip.2':
    'Haz doble clic en el nombre para renombrar el lugar sin abrir el formulario. Intro guarda, Escape descarta el cambio.',
  'help.guide.read-place.tip.3':
    'Un lugar que TREK ha podido emparejar con un proveedor de mapas muestra también la valoración de ese proveedor, una reseña, el número de teléfono y el horario de apertura.',
  // rate-place
  'help.guide.rate-place.title': 'Valorar un lugar',
  'help.guide.rate-place.goal': 'Dale a un lugar tus propias estrellas, y mira las que le han dado todos los demás.',
  'help.guide.rate-place.step.1':
    'Abre el lugar. La fila de estrellas está justo bajo la cabecera y lleva la media de los votos hasta ahora, con su número entre paréntesis.',
  'help.guide.rate-place.step.2':
    'Haz clic en la estrella que quieres. Las estrellas se llenan a medida que las recorres, así ves lo que estás a punto de dar.',
  'help.guide.rate-place.step.3':
    'Tu voto entra en la media al momento, y las caras de al lado son quienes han votado. Deja el puntero sobre la fila para ver las estrellas de cada uno.',
  'help.guide.rate-place.step.4':
    'La misma media está en la fila del lugar en la columna de lugares, así los buenos destacan en la lista.',
  'help.guide.rate-place.result':
    'Tus estrellas están en el lugar, a la vista de todo el viaje, y la estrella de la fila de filtros sobre la lista ya puede dejar solo los lugares que llegan a un mínimo.',
  'help.guide.rate-place.tip.1':
    'Todo viajero puede valorar, incluso en un viaje donde solo algunos tienen el permiso Añadir / editar / eliminar lugares.',
  'help.guide.rate-place.tip.2':
    'Haz clic en la estrella que ya diste para retirar tu voto. Sin nadie votando, el lugar vuelve a decir Sin valorar todavía.',
  'help.guide.rate-place.tip.3':
    'Junto a las estrellas caben hasta seis votantes como caras; el tooltip los nombra a todos, y marca el tuyo.',
  // place-image
  'help.guide.place-image.title': 'Poner tu propia imagen en un lugar',
  'help.guide.place-image.goal': 'Sustituye la miniatura automática por una foto tuya.',
  'help.guide.place-image.step.1': 'Abre el lugar desde la columna de lugares.',
  'help.guide.place-image.step.2':
    'Deja el puntero sobre la imagen redonda de la cabecera: aparece una cámara y el tooltip dice Subir imagen. Haz clic en ella y elige tu archivo.',
  'help.guide.place-image.step.3': 'La cabecera muestra ahora tu imagen, con una pequeña X roja en su esquina.',
  'help.guide.place-image.step.4':
    'La misma imagen está en la fila del lugar en la columna de lugares, y en su marcador en el mapa.',
  'help.guide.place-image.result':
    'Tu imagen es la imagen del lugar en todas partes: la ficha, la columna de lugares, la parada en el día, el marcador en el mapa y un viaje compartido.',
  'help.guide.place-image.tip.1': 'Se aceptan JPG, PNG, GIF y WebP, y un HEIC de un iPhone se convierte por el camino.',
  'help.guide.place-image.tip.2':
    'La X de la esquina vuelve a quitar tu imagen y regresa la automática. El lugar en sí queda intacto.',
  'help.guide.place-image.tip.3':
    'Sin una imagen tuya, TREK busca una a partir de las coordenadas del lugar, y recurre al icono de la categoría.',
  // place-day-assign
  'help.guide.place-day-assign.title': 'Poner el lugar en el día abierto, o quitarlo',
  'help.guide.place-day-assign.goal':
    'Usa el botón de la propia ficha en vez de arrastrar la fila por el planificador.',
  'help.guide.place-day-assign.step.1':
    'Haz clic en la cabecera de un día en la columna de días. Ese día es ahora el abierto, y la ficha trabaja sobre él.',
  'help.guide.place-day-assign.step.2':
    'Haz clic en la columna de lugares en un lugar que no esté en ese día. Su ficha se abre y la fila de abajo ofrece Añadir al día.',
  'help.guide.place-day-assign.step.3':
    'Haz clic en Añadir al día. La parada aterriza al final del día y el botón pasa a ser Quitar del día.',
  'help.guide.place-day-assign.step.4':
    'La parada ya está en el día, la última de la lista. Arrástrala hacia arriba hasta su sitio.',
  'help.guide.place-day-assign.step.5':
    'Quitar del día saca esa parada del día otra vez, y la ficha vuelve a ofrecer Añadir al día.',
  'help.guide.place-day-assign.result':
    'El día lleva la parada, o ya no la lleva, y el lugar en sí queda intacto en cualquiera de los dos casos.',
  'help.guide.place-day-assign.tip.1':
    'El botón solo existe mientras hay un día abierto. Sin uno, la ficha no tiene a qué añadir el lugar.',
  'help.guide.place-day-assign.tip.2':
    'Sacar una parada de un día deja el lugar en el viaje y en la columna de lugares. Eliminar es lo que lo quita de todas partes.',
  'help.guide.place-day-assign.tip.3':
    'Una parada que ha puesto en el día una reserva de alojamiento no ofrece ninguno de los dos botones: esa noche se añade y se quita en el bloque Alojamiento del día.',
  // place-participants
  'help.guide.place-participants.title': 'Decir quién va a esta parada',
  'help.guide.place-participants.goal': 'Divide el grupo para una parada sin dividir el viaje.',
  'help.guide.place-participants.step.1':
    'Haz clic en la parada dentro del día. La ficha se abre y Participantes lista a todos los del viaje.',
  'help.guide.place-participants.step.2':
    'Haz clic en el nombre de un viajero para sacarlo de esta parada. El nombre se tacha al pasar el puntero por encima.',
  'help.guide.place-participants.step.3':
    'Aparece un + discontinuo en cuanto falta alguien. Haz clic en él para ver quién no está en la parada.',
  'help.guide.place-participants.step.4':
    'Haz clic en un nombre para devolverlo. Con todos de vuelta, la parada vuelve a ser de todo el grupo.',
  'help.guide.place-participants.result':
    'La parada lleva a los viajeros que has elegido, y el resto del grupo tiene esa tarde para sí.',
  'help.guide.place-participants.tip.1':
    'Participantes solo aparece con una parada seleccionada, así que elige el lugar dentro del día y no en la columna de lugares, y solo en un viaje con más de un viajero.',
  'help.guide.place-participants.tip.2': 'Nadie elegido significa que van todos. Sacar al último devuelve a todos.',
  'help.guide.place-participants.tip.3':
    'Un invitado, que no tiene cuenta propia, puede ser participante como cualquier otro.',
  // place-booking
  'help.guide.place-booking.title': 'La reserva de una parada',
  'help.guide.place-booking.goal': 'Lee la reserva que pertenece a una parada, ábrela y engancha una nueva a ella.',
  'help.guide.place-booking.step.1':
    'Abre la parada a la que pertenece la reserva. La ficha muestra una franja con Confirmada o Pendiente y el nombre de la reserva.',
  'help.guide.place-booking.step.2':
    'La franja lleva la Fecha, la Hora y el Código de reserva, y las notas que tenga la reserva.',
  'help.guide.place-booking.step.3': 'Haz clic en la franja. Se abre encima el formulario de la reserva.',
  'help.guide.place-booking.step.4':
    'Vincular a una asignación del día es lo que engancha una reserva a una parada, y aquí ya nombra esta. Cierra el formulario otra vez.',
  'help.guide.place-booking.step.5':
    'Una reserva nueva para una parada empieza en la columna de días: pasa el puntero por la parada y haz clic en el + de su extremo. El formulario se abre como Nueva reserva, ya vinculada a ella.',
  'help.guide.place-booking.result':
    'La reserva cuelga de la parada: está en la ficha, está en el día, y sus archivos aparecen aquí también bajo Archivos.',
  'help.guide.place-booking.tip.1':
    'La franja solo se muestra en la parada a la que la reserva está enganchada. Una reserva sin parada vive en la pestaña Reservas.',
  'help.guide.place-booking.tip.2':
    'Varias reservas pueden compartir una parada: la comida y la visita que sale de la misma puerta.',
  'help.guide.place-booking.tip.3':
    'Un tren, un vuelo o un ferry abre en su lugar el formulario de transporte, el que usa la pestaña Transportes.',
  // place-files
  'help.guide.place-files.title': 'Guardar las entradas de un lugar junto al lugar',
  'help.guide.place-files.goal': 'Pon la entrada, el bono o el plano de un lugar donde lo vas a buscar.',
  'help.guide.place-files.step.1':
    'Abre el lugar. Archivos está al pie de la ficha y dice Archivos mientras el lugar no tiene ninguno.',
  'help.guide.place-files.step.2': 'Haz clic en Subir, a su lado, y elige el archivo.',
  'help.guide.place-files.step.3': 'El botón cuenta lo que el lugar guarda, y la lista se abre sola.',
  'help.guide.place-files.step.4':
    'Cada fila es el nombre del archivo con su tamaño. Haz clic en ella para abrir el archivo.',
  'help.guide.place-files.result':
    'El archivo está en el lugar, contado en la ficha, y está también en la pestaña Archivos del viaje.',
  'help.guide.place-files.tip.1':
    'Archivos lista también lo que cuelga de la reserva de esta parada, así que una confirmación de hotel aparece en el hotel.',
  'help.guide.place-files.tip.2': 'Subir acepta varios archivos a la vez.',
  'help.guide.place-files.tip.3':
    'Sin el permiso Subir archivos, el botón Subir no está; los archivos que ya están en el lugar siguen ahí.',
  // place-navigation
  'help.guide.place-navigation.title': 'Abrir un lugar en una aplicación de mapas o en su web',
  'help.guide.place-navigation.goal': 'Entrega el lugar a la aplicación que de verdad te va a llevar allí.',
  'help.guide.place-navigation.step.1': 'Abre el lugar y haz clic en Navegación en la fila de abajo.',
  'help.guide.place-navigation.step.2':
    'La lista son las aplicaciones de mapas que encajan con este lugar: Google Maps, Waze, Apple Maps, OpenStreetMap y CoMaps.',
  'help.guide.place-navigation.step.3':
    'Haz clic en la que uses. TREK le pasa el lugar en sí donde puede, no solo un par de coordenadas, así llegas a la entrada correcta.',
  'help.guide.place-navigation.step.4':
    'Abrir la web, a su lado, abre la página propia del lugar, sus horarios y sus entradas, en una pestaña nueva.',
  'help.guide.place-navigation.result':
    'La aplicación de mapas se abre en el lugar, la web en una pestaña propia, y nada cambia en el viaje.',
  'help.guide.place-navigation.tip.1':
    'Waze empieza a navegar de inmediato. Las demás abren el lugar, y arrancar desde ahí es un toque más.',
  'help.guide.place-navigation.tip.2':
    'Qué aplicaciones se ofrecen depende del lugar y de tu dispositivo: Apple Maps se queda fuera en Android, 高德地图 solo sale con un lugar en China, y Waze, Apple Maps y CoMaps necesitan las coordenadas del lugar.',
  'help.guide.place-navigation.tip.3':
    'Cuando solo encaja una aplicación, el botón lleva el nombre de esa aplicación y la abre directamente.',
  // place-to-collection
  'help.guide.place-to-collection.title': 'Guardar un lugar en una de tus listas',
  'help.guide.place-to-collection.goal': 'Conserva para el próximo viaje un lugar que has encontrado en este.',
  'help.guide.place-to-collection.step.1': 'Abre el lugar y haz clic en Guardar en colección, al final de la ficha.',
  'help.guide.place-to-collection.step.2':
    'Guardar en una lista muestra todas las listas que tienes o compartes. Una marca señala las que ya contienen este lugar.',
  'help.guide.place-to-collection.step.3': 'Haz clic en la lista. El lugar está en ella al momento.',
  'help.guide.place-to-collection.step.4': 'Cierra, y el botón de la ficha dice Guardado.',
  'help.guide.place-to-collection.result':
    'El lugar está en tu lista con su imagen, sus notas y sus estrellas, listo para el próximo viaje.',
  'help.guide.place-to-collection.tip.1':
    'El botón solo está mientras el complemento Colecciones está activo, que el administrador enciende en Complementos.',
  'help.guide.place-to-collection.tip.2':
    'Un lugar puede estar en varias listas a la vez, con su propio estado en cada una: una Idea en una, Visitado en otra.',
  'help.guide.place-to-collection.tip.3':
    'Marcar como visitado, junto al nombre del lugar en el selector, lo marca en la lista; con el lugar en varias de tus listas la píldora dice Visitado en todas y las hace todas de una vez.',
  // place-track
  'help.guide.place-track.title': 'Leer una ruta y darle su propio color',
  'help.guide.place-track.goal':
    'Mira lo larga que es una caminata importada, y distingue su línea de las demás en el mapa.',
  'help.guide.place-track.step.1':
    'En la columna de lugares, la fila de una ruta lleva un trazo corto del color con el que está dibujada su línea. Haz clic en ella.',
  'help.guide.place-track.step.2':
    'Datos de la ruta da la longitud del camino, en la Unidad de distancia que hayas puesto.',
  'help.guide.place-track.step.3':
    'Color de la ruta, encima, muestra el color en uso. Haz clic en la fila para abrir las muestras.',
  'help.guide.place-track.step.4': 'Elige un color. La línea del mapa y el trazo de la fila cambian con él.',
  'help.guide.place-track.step.5':
    'La celda discontinua de la izquierda, Color automático, le devuelve a la ruta el color que hereda; la pipeta de la derecha abre el selector de color de tu sistema para cualquier otro.',
  'help.guide.place-track.result':
    'La ruta se dibuja en el color que has elegido, en la ficha, en su fila de la columna de lugares y en el mapa.',
  'help.guide.place-track.tip.1':
    'Solo un lugar que lleva un camino, importado de un archivo GPX, KML o KMZ, tiene estos dos bloques.',
  'help.guide.place-track.tip.2':
    'Una ruta grabada con alturas muestra además su punto más alto y más bajo, los metros de subida y de bajada, y el perfil de la caminata.',
  'help.guide.place-track.tip.3':
    'Una importación da a cada ruta que trae un color propio, así que dos caminatas nunca llegan con el mismo.',

  // ── Screen: trip-files ────────────────────────────────────────────────────────────────
  'help.ctx.trip-files.title': 'Archivos',
  'help.ctx.trip-files.summary':
    'Todos los documentos del viaje en una lista: billetes, confirmaciones, pases y fotos, cada uno con una nota, un vínculo al lugar o a la reserva a la que pertenece, y una papelera de la que puede volver a salir.',
  'help.ctx.trip-files.bullet.1':
    'Arrastra aquí los archivos, arriba, acepta los archivos; un clic en el recuadro abre el selector de archivos. La línea de debajo enumera los tipos de archivo que acepta este TREK y el límite de 50 MB por archivo.',
  'help.ctx.trip-files.bullet.2':
    'Las pestañas dicen qué muestra la lista: Todo, PDF, Imágenes y Documentos, cada una con su recuento. Una pestaña de estrella se les une en cuanto un archivo está destacado, y Notas de colaboración en cuanto una nota lleva un adjunto.',
  'help.ctx.trip-files.bullet.3':
    'Una fila lleva quién la subió, el nombre, la nota debajo, el tamaño y la fecha, y una etiqueta por cada vínculo: Plan diario y el lugar, Reserva o Transporte y la reserva, Desde notas de colaboración.',
  'help.ctx.trip-files.bullet.4':
    'Al final de una fila están Destacar, Asignar, Abrir, Descargar y Eliminar. Eliminar no pregunta: el archivo va a la papelera, de donde se puede recuperar.',
  'help.ctx.trip-files.bullet.5':
    'Una imagen o un vídeo se abre a pantalla completa, con las teclas de flecha y una tira de miniaturas; cualquier otro documento se abre en una vista previa sobre la página, con Abrir en una pestaña nueva y Descargar. Un pase de wallet se descarga de inmediato.',
  'help.ctx.trip-files.bullet.6':
    'Papelera, en el extremo derecho, cambia la lista a los archivos eliminados, donde cada uno se restaura o se elimina para siempre y Vaciar papelera los quita todos. Donde un administrador ha conectado un almacén de documentos, Sincronización de documentos está al lado.',
  // files-upload
  'help.guide.files-upload.title': 'Meter un documento en el viaje',
  'help.guide.files-upload.goal':
    'Saca un billete, una confirmación o una foto de tu carpeta de descargas y ponlos en el viaje, donde todos los que están en él pueden alcanzarlos.',
  'help.guide.files-upload.step.1':
    'Abre el viaje y haz clic en Archivos en la barra de pestañas. Ahí están los documentos del viaje, con el recuadro de subida encima.',
  'help.guide.files-upload.step.2':
    'Haz clic en Arrastra aquí los archivos y elige uno o varios archivos. Se suben uno tras otro y en el recuadro pone Subiendo... mientras dura. La línea de debajo dice qué tipos acepta este TREK y que un archivo puede tener 50 MB como máximo.',
  'help.guide.files-upload.step.3':
    'En cuanto el último archivo está arriba, Asignar archivo se abre solo para él. Añadir una nota... le da al archivo una línea propia, y las listas de debajo lo atan a un lugar o a una reserva. Ciérralo con la ×; al cerrarlo no se pierde nada.',
  'help.guide.files-upload.step.4':
    'Los archivos nuevos quedan arriba del todo en la lista. Una fila muestra quién lo subió, el nombre, el tamaño y la fecha; una imagen recibe una miniatura, cualquier otro archivo su tipo.',
  'help.guide.files-upload.result':
    'Los documentos están en el viaje, y todo el que puede ver el viaje puede abrirlos y descargarlos.',
  'help.guide.files-upload.tip.1':
    'Un archivo también se puede arrastrar desde el escritorio directamente al recuadro, que se ilumina mientras el archivo está encima.',
  'help.guide.files-upload.tip.2':
    'Una imagen del portapapeles entra en la lista con Ctrl+V, así que nunca hay que guardar antes una captura de una reserva.',
  'help.guide.files-upload.tip.3':
    'Subir necesita el permiso Subir archivos; sin él el recuadro no está siquiera. Un tipo que no está en la lista, o un archivo de más de 50 MB, se rechaza con un mensaje y no se sube nada.',
  // files-link
  'help.guide.files-link.title': 'Atar un documento a un lugar o a una reserva',
  'help.guide.files-link.goal':
    'Haz que el billete se encuentre desde el día al que pertenece, y no solo desde esta lista.',
  'help.guide.files-link.step.1':
    'Haz clic en Asignar, el lápiz al final de la fila. Se abre Asignar archivo, con el nombre del archivo.',
  'help.guide.files-link.step.2':
    'Bajo Nota, Añadir una nota... admite una línea, que después queda bajo el nombre del archivo en la lista. Se guarda en el momento en que sales del campo.',
  'help.guide.files-link.step.3':
    'Bajo Lugar están los lugares del viaje, agrupados por el día en el que están, con Sin asignar al final para los que no están en ningún día. Haz clic en uno y recibe una marca.',
  'help.guide.files-link.step.4':
    'Bajo Reserva y Transporte están las reservas del viaje. Haz clic en aquella a la que pertenece el documento; también recibe su marca.',
  'help.guide.files-link.step.5':
    'Cierra con la ×. Aquí no hay botón de guardar: cada clic se escribió en cuanto lo hiciste.',
  'help.guide.files-link.result':
    'La fila lleva la nota y una etiqueta por cada vínculo, Plan diario y el nombre del lugar, Transporte y el nombre del vuelo, y el documento cuelga además del lugar y de la reserva.',
  'help.guide.files-link.tip.1':
    'Un archivo puede tener varios vínculos a la vez, así que la misma confirmación pertenece al hotel y a la noche que cubre.',
  'help.guide.files-link.tip.2':
    'Volver a hacer clic en una entrada marcada quita ese vínculo; el archivo en sí se queda.',
  'help.guide.files-link.tip.3':
    'Funciona también al revés: un documento adjunto a un lugar o a una reserva está también en esta lista, con la misma etiqueta en su fila.',
  // files-star
  'help.guide.files-star.title': 'Mantener arriba los documentos importantes',
  'help.guide.files-star.goal':
    'Saca los dos o tres papeles que vas a necesitar de verdad de una lista que crece durante todo el viaje.',
  'help.guide.files-star.step.1':
    'Haz clic en Destacar al final de una fila. La estrella se llena de amarillo, aparece una segunda estrella delante del nombre del archivo y el botón pasa a decir Quitar destacado.',
  'help.guide.files-star.step.2':
    'La lista se vuelve a ordenar: los archivos destacados quedan por encima de todos los demás, los más nuevos primero dentro de cada grupo.',
  'help.guide.files-star.step.3':
    'Arriba se ha unido una estrella a las pestañas, con el número de archivos destacados detrás. Haz clic en ella para ver solo esos.',
  'help.guide.files-star.result':
    'Los papeles que necesitas en el mostrador están arriba del todo en la lista, y una pestaña no muestra nada más.',
  'help.guide.files-star.tip.1':
    'La pestaña de estrella solo existe mientras algo está destacado. Quita el destacado al último archivo y la pestaña se va con él.',
  'help.guide.files-star.tip.2':
    'Destacar cuenta como una edición: un miembro que solo puede leer los archivos del viaje ve las estrellas pero no puede ponerlas.',
  // files-filter
  'help.guide.files-filter.title': 'Encontrar un documento en la lista',
  'help.guide.files-filter.goal': 'Reduce una lista con todo al único tipo de papel que buscas.',
  'help.guide.files-filter.step.1':
    'Las pestañas encima de la lista son Todo, PDF, Imágenes y Documentos, cada una con el número de archivos detrás.',
  'help.guide.files-filter.step.2': 'Haz clic en PDF: la lista se queda con los archivos PDF y con nada más.',
  'help.guide.files-filter.step.3':
    'Otras dos pestañas van y vienen según lo que hay en el viaje: una estrella en cuanto un archivo está destacado, y Notas de colaboración en cuanto una nota de la pestaña Colaboración lleva un adjunto.',
  'help.guide.files-filter.step.4': 'Todo devuelve la lista entera.',
  'help.guide.files-filter.result':
    'La lista muestra solo lo que nombra la pestaña, y el recuento de cada pestaña dice cuántos son.',
  'help.guide.files-filter.tip.1':
    'Aquí no hay carpetas ni cambios de nombre: la nota de Asignar archivo, los vínculos a lugares y reservas, y la estrella son aquello por lo que se ordena un documento.',
  'help.guide.files-filter.tip.2':
    'La lista en sí va siempre destacados primero y después los más nuevos primero, así que un documento subido hoy queda por encima de uno del mes pasado.',
  // files-preview
  'help.guide.files-preview.title': 'Leer un documento sin salir de TREK',
  'help.guide.files-preview.goal':
    'Mira un billete o una imagen en el sitio, y llévatelos a tu propia máquina cuando los necesites ahí.',
  'help.guide.files-preview.step.1':
    'Haz clic en el nombre de una imagen o en su miniatura. Se abre a pantalla completa, con el nombre del archivo y su posición entre las imágenes en la cabecera.',
  'help.guide.files-preview.step.2':
    'Las flechas redondas de los lados, las teclas de flecha izquierda y derecha y la tira de miniaturas de abajo recorren todas las imágenes que la lista muestra en ese momento.',
  'help.guide.files-preview.step.3':
    'Abrir en una pestaña nueva y Descargar están en la cabecera; la × o Escape vuelve a cerrar la imagen.',
  'help.guide.files-preview.step.4':
    'Un documento que no es una imagen se abre en cambio en una vista previa sobre la página, con los mismos dos botones en su cabecera. Esta se cierra con la × o con un clic al lado.',
  'help.guide.files-preview.step.5':
    'Descargar al final de una fila guarda el archivo directamente en tu máquina, sin abrir nada antes.',
  'help.guide.files-preview.result':
    'El documento está en pantalla, y los mismos dos botones lo ponen en una pestaña del navegador o en tu disco.',
  'help.guide.files-preview.tip.1':
    'En una pantalla táctil pasas las imágenes con el dedo en vez de hacer clic en las flechas.',
  'help.guide.files-preview.tip.2':
    'Un pase de wallet nunca abre una vista previa: se descarga de inmediato, para que el teléfono pueda pasárselo a su aplicación wallet.',
  'help.guide.files-preview.tip.3':
    'Abrir en una pestaña nueva y Descargar traen ambos el archivo con tu sesión, así que un enlace copiado de la barra de direcciones no le sirve a nadie más.',
  // files-trash
  'help.guide.files-trash.title': 'Tirar un documento y recuperarlo',
  'help.guide.files-trash.goal':
    'Quita de en medio lo que el viaje ya no necesita, sin perder nada que al final sí necesitabas.',
  'help.guide.files-trash.step.1':
    'Haz clic en Eliminar al final de una fila. El archivo deja la lista al instante y el mensaje dice Movido a la papelera. Nada pregunta antes.',
  'help.guide.files-trash.step.2':
    'Papelera, en el extremo derecho de la barra de herramientas, cambia la lista a lo que se ha tirado. El título dice Papelera y las pestañas de filtro ya no están.',
  'help.guide.files-trash.step.3':
    'Una fila tirada queda en gris y le quedan dos botones: Restaurar, que devuelve el archivo, y Eliminar, que lo quita para siempre tras una pregunta.',
  'help.guide.files-trash.step.4':
    'Haz clic en Restaurar. El mensaje dice Archivo restaurado y la fila deja la papelera, con su nota y sus vínculos todavía puestos.',
  'help.guide.files-trash.step.5':
    'Vaciar papelera, arriba, quita para siempre todo lo que quede aquí, y el navegador pregunta una vez antes de hacerlo. Papelera vuelve a cambiar a los archivos.',
  'help.guide.files-trash.result':
    'El archivo está de vuelta en la lista donde estaba, como si no hubiera pasado nada.',
  'help.guide.files-trash.tip.1':
    'Eliminar en una fila no pregunta antes, y para eso está la papelera: nada sale de TREK hasta que lo dices aquí dentro.',
  'help.guide.files-trash.tip.2':
    'Tirar un archivo y recuperarlo necesita el permiso Eliminar archivos. Un miembro que no lo tiene no ve ni Eliminar en la fila ni los botones de la papelera.',
  'help.guide.files-trash.tip.3': 'Un archivo eliminado para siempre en la papelera no se puede recuperar.',

  // ── Screen: trip-day-detail ───────────────────────────────────────────────────────────
  'help.ctx.trip-day-detail.title': 'Detalles del día',
  'help.ctx.trip-day-detail.summary':
    'El panel que la cabecera de un día abre sobre el mapa: el día entero, su nombre y su fecha, el tiempo donde vas a estar, las reservas que caen en él y las noches reservadas para él.',
  'help.ctx.trip-day-detail.bullet.1':
    'Haz clic en la cabecera de un día en la columna de días y el panel se abre sobre el centro del mapa. La misma cabecera otra vez, o la equis a su derecha, lo cierra y suelta el día.',
  'help.ctx.trip-day-detail.bullet.2':
    'La cabecera lleva el nombre del día y su fecha. El lápiz junto al nombre renombra el día, el doble chevrón pliega el panel a una barra estrecha para dejar el mapa libre otra vez.',
  'help.ctx.trip-day-detail.bullet.3':
    'Arriba del todo, el tiempo del día. Pronóstico para nombra el lugar al que corresponde: la primera parada del día, o el alojamiento donde te despiertas.',
  'help.ctx.trip-day-detail.bullet.4':
    'Reservas lista las reservas de ese día, cada una con su tipo, la parada a la que pertenece y sus horas. Verde significa confirmada, ámbar todavía pendiente; es solo una lectura, las reservas se cambian en la pestaña Reservas.',
  'help.ctx.trip-day-detail.bullet.5':
    'Alojamiento muestra cada noche reservada sobre este día, con Registro de entrada y Registro de salida en los días en que ocurren, la franja de entrada, la hora de salida y el número de confirmación.',
  'help.ctx.trip-day-detail.bullet.6':
    'Añadir alojamiento reserva una noche en este día: elige el establecimiento entre los lugares del viaje, di qué días cubre, y añade las horas y el código.',
  // day-panel
  'help.guide.day-panel.title': 'Abrir un día y leer sus detalles',
  'help.guide.day-panel.goal': 'Ver un día entero, su tiempo, sus reservas y dónde duermes, sin salir del mapa.',
  'help.guide.day-panel.step.1':
    'Haz clic en la cabecera de un día en la columna de días. El día queda seleccionado y sus detalles se abren sobre el centro del mapa.',
  'help.guide.day-panel.step.2': 'La cabecera nombra el día, Día 1 hasta que le des un nombre, con su fecha debajo.',
  'help.guide.day-panel.step.3':
    'Arriba del todo, el tiempo del día. Pronóstico para dice a qué lugar corresponde: la primera parada del día, o el alojamiento donde te despiertas.',
  'help.guide.day-panel.step.4': 'Reservas, debajo, lista las reservas que caen en este día, con sus horas.',
  'help.guide.day-panel.step.5':
    'Alojamiento muestra las noches reservadas sobre este día, con Registro de entrada y Registro de salida en los días en que ocurren.',
  'help.guide.day-panel.step.6':
    'El doble chevrón de la cabecera pliega el panel a una barra estrecha. La equis de al lado cierra el panel y suelta el día.',
  'help.guide.day-panel.result':
    'Plegado a su barra, el panel deja el mapa libre y mantiene el día seleccionado; cerrado, el día se deselecciona y el plan queda como estaba.',
  'help.guide.day-panel.tip.1':
    'Hacer clic en cualquier punto de la barra de cabecera del panel también lo pliega. El chevrón es solo el botón para ello.',
  'help.guide.day-panel.tip.2':
    'Abrir un lugar desde la columna de lugares pone los detalles del lugar en el sitio del panel. Ciérralos y el día vuelve.',
  // day-weather
  'help.guide.day-weather.title': 'Leer el tiempo del día',
  'help.guide.day-weather.goal': 'Saber cómo será el día allí donde de verdad estás ese día.',
  'help.guide.day-weather.step.1':
    'Pronóstico para nombra el lugar al que corresponden los números: la primera parada del día o, en un día sin ninguna, el alojamiento donde te despiertas.',
  'help.guide.day-weather.step.2':
    'El número grande es la temperatura del día, a su lado la mínima y la máxima, y la condición en palabras.',
  'help.guide.day-weather.step.3':
    'Los chips de debajo: la probabilidad de lluvia, cuánta cae, el viento más fuerte, y el amanecer y el atardecer.',
  'help.guide.day-weather.step.4':
    'Abajo del todo, el día hora por hora, cada dos horas: la hora, el icono, la temperatura y la probabilidad de lluvia. Una hora por encima del 50 por ciento se sombrea en azul.',
  'help.guide.day-weather.result':
    'La tarjeta del día en la columna de días lleva el mismo tiempo en pequeño bajo su número, así que todo el viaje se lee de un vistazo.',
  'help.guide.day-weather.tip.1':
    'Los grados y el viento siguen tu elección en Pantalla, dentro de Ajustes: cambia a Fahrenheit y el mismo pronóstico se da en °F y mph.',
  'help.guide.day-weather.tip.2':
    'Un día sin parada localizada y sin alojamiento donde despertarse no muestra ningún tiempo: el pronóstico es siempre para un lugar, nunca para el viaje.',
  'help.guide.day-weather.tip.3':
    'Más allá de 16 días no hay pronóstico que obtener. Los números son entonces los promedios de años anteriores para esa fecha, marcados con Ø, y debajo se dice que es así.',
  // rename-day
  'help.guide.rename-day.title': 'Dar un nombre al día',
  'help.guide.rename-day.goal': 'Llamar a un día por lo que es, Llegada a Kyoto o Día de descanso, en vez de Día 5.',
  'help.guide.rename-day.step.1': 'Abre el día. Su cabecera dice Día 5, con la fecha debajo.',
  'help.guide.rename-day.step.2': 'Haz clic en el lápiz junto al nombre.',
  'help.guide.rename-day.step.3': 'El nombre se convierte en un campo. Escribe el nombre que quieras.',
  'help.guide.rename-day.step.4':
    'Pulsa Intro, o simplemente haz clic en otro sitio; Esc descarta el cambio. La tarjeta del día en la columna de días lleva el nombre también.',
  'help.guide.rename-day.result':
    'El nombre sustituye a Día 5 en el panel y en la tarjeta del día de la columna de días; la fecha se queda donde estaba.',
  'help.guide.rename-day.tip.1':
    'Vacía el campo y guarda, y el día vuelve a ser Día 5: el número es lo que se ve cuando no hay nombre.',
  'help.guide.rename-day.tip.2':
    'El nombre pertenece al día, no a su fecha. Reordena los días y el nombre viaja con todo lo demás de ese día.',
  // add-accommodation
  'help.guide.add-accommodation.title': 'Reservar una noche en un día',
  'help.guide.add-accommodation.goal':
    'Poner el hotel en el plan una sola vez, con los días que cubre, sus horas y su número de confirmación.',
  'help.guide.add-accommodation.step.1':
    'El establecimiento tiene que ser primero un lugar del viaje. Créalo en la columna de lugares como cualquier otro lugar: el selector solo ofrece lo que ya está ahí.',
  'help.guide.add-accommodation.step.2':
    'Abre el día de tu llegada y haz clic en Añadir alojamiento, bajo Alojamiento.',
  'help.guide.add-accommodation.step.3':
    'Aplicar a los días dice qué noches cubre la estancia: el día de entrada a la izquierda, el día de salida a la derecha. Todos toma el viaje entero.',
  'help.guide.add-accommodation.step.4':
    'Rellena Registro de entrada, Hasta y Registro de salida, y pon el número de la reserva bajo Confirmación. Los cuatro pueden quedar vacíos.',
  'help.guide.add-accommodation.step.5':
    'Elige el establecimiento entre los lugares del viaje. Los chips sobre la lista la reducen a una categoría.',
  'help.guide.add-accommodation.step.6': 'Haz clic en Guardar.',
  'help.guide.add-accommodation.result':
    'La estancia aparece en cada día que cubre, Registro de entrada en el primero y Registro de salida en el último. El establecimiento se convierte en parada del día de entrada, de modo que el mapa dibuja el camino hasta allí, y en la pestaña Reservas aparece una reserva de tipo Alojamiento.',
  'help.guide.add-accommodation.tip.1':
    'El selector se abre en el día del que venías, con la salida al día siguiente; ambos se pueden mover antes de guardar.',
  'help.guide.add-accommodation.tip.2':
    'Dale al hotel la categoría Hotel del viaje al crearlo y los chips sobre la lista la reducen a tus hoteles con un solo clic.',
  'help.guide.add-accommodation.tip.3':
    'Las horas son todas opcionales: una estancia sin entrada y sin código cubre igualmente sus noches y dibuja igualmente su ruta.',
  // edit-accommodation
  'help.guide.edit-accommodation.title': 'Cambiar o cancelar una noche reservada',
  'help.guide.edit-accommodation.goal': 'Mover una estancia, corregir sus horas, o sacarla del plan otra vez.',
  'help.guide.edit-accommodation.step.1':
    'En cada día de la estancia, la tarjeta muestra el establecimiento, la franja de entrada, la hora de salida y el número de confirmación.',
  'help.guide.edit-accommodation.step.2':
    'El lápiz de su derecha vuelve a abrir la estancia. La ventana dice ahora Editar alojamiento.',
  'help.guide.edit-accommodation.step.3':
    'Cambia lo que necesites: los días que cubre, Registro de entrada, Hasta, Registro de salida, Confirmación, o el propio establecimiento.',
  'help.guide.edit-accommodation.step.4': 'Haz clic en Guardar.',
  'help.guide.edit-accommodation.step.5':
    'La equis de al lado del lápiz termina la estancia. No pregunta nada, y la reserva de tipo Alojamiento que le pertenece se va con ella.',
  'help.guide.edit-accommodation.result':
    'El cambio llega de una vez a cada día que la estancia cubre, y con él a la reserva de tipo Alojamiento de la pestaña Reservas.',
  'help.guide.edit-accommodation.tip.1':
    'Una noche en medio de una estancia no lleva ni la etiqueta Registro de entrada ni Registro de salida: solo las llevan el primer y el último día del rango.',
  'help.guide.edit-accommodation.tip.2':
    'Cancelar una estancia se lleva también la parada que puso en el día de entrada y cualquier coste unido a su reserva. Reserva la noche de nuevo si fue un error.',
  // day-bookings
  'help.guide.day-bookings.title': 'Las reservas del día de un vistazo',
  'help.guide.day-bookings.goal': 'Ver en un solo sitio qué hay ya reservado para este día y si está confirmado.',
  'help.guide.day-bookings.step.1':
    'Reservas lista las reservas del día: las fechadas en él, y las que cuelgan de alguna de sus paradas.',
  'help.guide.day-bookings.step.2':
    'Una fila muestra de qué tipo de reserva se trata, su nombre y, cuando pertenece a una parada, esa parada tras un punto. Sus horas van al extremo derecho.',
  'help.guide.day-bookings.step.3':
    'El color dice cómo está una reserva: una fila verde está confirmada, una ámbar sigue pendiente. Los alojamientos no están en esta lista, tienen su propio bloque debajo.',
  'help.guide.day-bookings.step.4':
    'La lista solo lee las reservas. Una reserva se crea y se cambia en la pestaña Reservas.',
  'help.guide.day-bookings.result':
    'Todo lo fechado en el día, y todo lo que cuelga de alguna de sus paradas, está en esta única lista.',
  'help.guide.day-bookings.tip.1':
    'Una reserva cae en un día por su propia fecha. Cambia la fecha en la pestaña Reservas y se muda al otro día por sí sola.',
  'help.guide.day-bookings.tip.2':
    'Que no haya bloque Reservas significa que el día no tiene reservas: se oculta en vez de mostrarse vacío.',

  // ── Screen: trip-map ──────────────────────────────────────────────────────────────────
  'help.ctx.trip-map.title': 'Mapa',
  'help.ctx.trip-map.summary':
    'El centro del plan: cada lugar del viaje como un pin, las rutas que los unen y los interruptores en los bordes del mapa para el satélite, para todo el viaje de una vez y para los lugares alrededor de la zona que estás mirando.',
  'help.ctx.trip-map.bullet.1':
    'Un pin es un lugar: su propia foto cuando la tiene, si no el color de su categoría con el icono de la categoría. Deja el puntero encima para ver una ficha con su nombre, su valoración, su categoría y su dirección.',
  'help.ctx.trip-map.bullet.2':
    'Los pines demasiado juntos para distinguirse se pliegan en una burbuja oscura con un recuento. Haz clic en la burbuja y el mapa se acerca a lo que hay dentro.',
  'help.ctx.trip-map.bullet.3':
    'Haz clic en un pin para abrir el lugar bajo el mapa, con su valoración, sus archivos y lo que puedes hacer con él a continuación; haz clic en un trozo vacío del mapa para soltarlo otra vez.',
  'help.ctx.trip-map.bullet.4':
    'Con un día abierto en la columna de días, sus paradas llevan una pequeña insignia blanca con su número dentro de ese día, y un lugar planificado en dos días lleva los dos números, unidos por ·.',
  'help.ctx.trip-map.bullet.5':
    'La fila de iconos de arriba busca en la parte del mapa que ves: Restaurantes, Cafés, Bares y ocio nocturno, Alojamiento, Lugares de interés, Museos y cultura, Naturaleza y parques y Actividades. Buscar en esta zona la repite después de que muevas el mapa.',
  'help.ctx.trip-map.bullet.6':
    'Un clic derecho en cualquier punto del mapa abre el formulario de lugar en ese punto, con la dirección ya consultada. El botón redondo de abajo a la izquierda cambia el mapa dibujado por imágenes aéreas.',
  'help.ctx.trip-map.bullet.7':
    'Mostrar todo el viaje, abajo a la derecha, dibuja todos los días de trayecto a la vez y lista lo que cubre cada uno; el icono de ruta en la fila de una reserva dibuja esa reserva, y el de la barra de herramientas sobre los días las dibuja todas.',
  // map-markers
  'help.guide.map-markers.title': 'Leer el mapa',
  'help.guide.map-markers.goal': 'Saber qué te dice cada pin, insignia y burbuja del mapa.',
  'help.guide.map-markers.step.1':
    'El mapa lleva todos los lugares del viaje. Donde los pines quedan demasiado juntos para distinguirse, se pliegan en una burbuja oscura que lleva el número de lugares que hay dentro.',
  'help.guide.map-markers.step.2':
    'Haz clic en la burbuja. El mapa se acerca a lo que había dentro y los pines se separan; en el zoom más profundo los abre en abanico en vez de acercarse más.',
  'help.guide.map-markers.step.3':
    'Un pin es la propia foto del lugar cuando la tiene, si no el color de su categoría con el icono de la categoría. Deja el puntero encima y una ficha da su nombre, su valoración, su categoría y su dirección.',
  'help.guide.map-markers.step.4':
    'Haz clic en un pin y el lugar se abre bajo el mapa: sus coordenadas, su valoración, sus archivos, y Añadir al día, Guardar en colección, Navegación, Editar y Eliminar. Haz clic en un trozo vacío del mapa para soltarlo otra vez.',
  'help.guide.map-markers.step.5':
    'Abre un día en la columna de días y sus paradas se numeran: la pequeña insignia blanca en la esquina de un pin es el puesto de esa parada en el día. Un lugar planificado en dos días lleva los dos números, unidos por ·. Sin un día abierto no hay números, y la esquina lleva la valoración en su lugar.',
  'help.guide.map-markers.result':
    'Nada del viaje ha cambiado: el mapa es una vista de él, y cada pin dice qué lugar, qué día y en qué orden.',
  'help.guide.map-markers.tip.1':
    'Un día plegado en la columna de días se lleva sus paradas fuera del mapa; vuelve a abrir el día y están de vuelta.',
  'help.guide.map-markers.tip.2':
    'El filtro sobre la lista de lugares decide también lo que dibuja el mapa: elige Sin planificar y solo quedan en él los lugares que aún no tienen día.',
  'help.guide.map-markers.tip.3':
    'Este mapa no tiene botones de zoom: la rueda acerca y aleja, un doble clic acerca un paso, y arrastrar lo mueve.',
  // map-nearby-places
  'help.guide.map-nearby-places.title': 'Encontrar lugares a tu alrededor en el mapa',
  'help.guide.map-nearby-places.goal':
    'Deja que el mapa busque restaurantes, lugares de interés o un hotel en la zona que estás mirando, y llévate uno al viaje.',
  'help.guide.map-nearby-places.step.1':
    'La fila de iconos de la parte alta del mapa es la búsqueda por categoría: Restaurantes, Cafés, Bares y ocio nocturno, Alojamiento, Lugares de interés, Museos y cultura, Naturaleza y parques y Actividades.',
  'help.guide.map-nearby-places.step.2':
    'Haz clic en una categoría. TREK busca ese tipo de lugar en la parte del mapa que ves y suelta un pin del color de la categoría por cada resultado. Una categoría cada vez: hacer clic en otra la cambia, y hacer clic en la que está activa la apaga.',
  'help.guide.map-nearby-places.step.3':
    'Mueve el mapa y aparece un segundo botón bajo la fila: Buscar en esta zona repite la misma búsqueda para la vista nueva. Moverlo por sí solo nunca vuelve a buscar, lo que mantiene bajo el número de peticiones.',
  'help.guide.map-nearby-places.step.4':
    'Los pines llevan el nombre de lo que se ha encontrado. Haz clic en uno y el formulario de lugar se abre ya rellenado a partir de él: Nombre, Dirección, Latitud y Longitud, y la página web y el teléfono donde OpenStreetMap los tiene.',
  'help.guide.map-nearby-places.step.5':
    'Revisa lo que ha rellenado y añade lo que la búsqueda no podía saber: una Descripción, una Categoría, notas tuyas.',
  'help.guide.map-nearby-places.step.6':
    'Haz clic en Añadir. Si ya hay un lugar con el mismo nombre en el viaje, el formulario lo avisa y el botón pasa a ser Añadir de todos modos.',
  'help.guide.map-nearby-places.result':
    'El lugar está en la lista de lugares y en el mapa como uno de los pines propios del viaje, bajo Sin planificar hasta que lo pongas en un día. Los pines de la búsqueda se quedan hasta que apagues la categoría.',
  'help.guide.map-nearby-places.tip.1':
    'La fila no está cuando Explorar lugares en el mapa está apagado en Ajustes, bajo Travel & map.',
  'help.guide.map-nearby-places.tip.2':
    'Las respuestas vienen del índice de lugares de TREK y de OpenStreetMap, así que esta es una de las pocas cosas del plan que necesita conexión.',
  'help.guide.map-nearby-places.tip.3':
    'Una búsqueda cubre lo que hay en pantalla, así que acércate a la calle por la que preguntas: una ciudad entera responde con los primeros sesenta resultados y con poco orden entre ellos.',
  // map-add-place
  'help.guide.map-add-place.title': 'Crear un lugar con un clic derecho en el mapa',
  'help.guide.map-add-place.goal': 'Pon un lugar exactamente donde lo quieres, sin buscarlo antes.',
  'help.guide.map-add-place.step.1':
    'Haz clic derecho en el punto del mapa que quieres. Se abre el formulario de lugar, titulado Añadir lugar/actividad.',
  'help.guide.map-add-place.step.2':
    'Latitud y Longitud ya están en ese punto, y TREK consulta las coordenadas y rellena Dirección con lo que encuentra allí. Todavía no hay nada guardado, así que sobrescribe lo que esté mal.',
  'help.guide.map-add-place.step.3':
    'Dale un Nombre que reconozcas, y el resto de lo que el plan debe saber: Descripción, Notas, Categoría, Página web.',
  'help.guide.map-add-place.step.4':
    'Haz clic en Añadir. El lugar cae en la lista como sin planificar incluso con un día abierto: un clic derecho en el mapa dice dónde, no cuándo.',
  'help.guide.map-add-place.result':
    'El lugar está en la lista y en el mapa, bajo Sin planificar hasta que lo pongas en un día.',
  'help.guide.map-add-place.tip.1':
    'La dirección viene de una consulta de las coordenadas, así que puede leerse como una calle y no como un nombre, y en campo abierto puede volver vacía. Los dos campos son tuyos para sobrescribirlos.',
  'help.guide.map-add-place.tip.2':
    'En los mapas MapLibre GL y Mapbox GL un clic con el botón central hace lo mismo, y en una pantalla táctil una pulsación larga.',
  // map-satellite
  'help.guide.map-satellite.title': 'Cambiar a satélite',
  'help.guide.map-satellite.goal': 'Cambia el mapa dibujado por imágenes aéreas, y vuelve.',
  'help.guide.map-satellite.step.1':
    'El botón redondo de abajo a la izquierda del mapa es el conmutador de capa base. Su icono muestra siempre la capa a la que pasaría, y al poner el puntero encima dice cuál: Cambiar a vista de satélite.',
  'help.guide.map-satellite.step.2':
    'Haz clic en él. El mapa pasa a imágenes aéreas, con detalle suficiente para distinguir un solo edificio, y sin ninguna clave tuya.',
  'help.guide.map-satellite.step.3':
    'Todo lo que dibuja TREK se queda encima: los pines, la ruta del día, las rutas importadas y las rutas de reservas. Haz clic otra vez en el botón, que ahora dice Cambiar a vista de mapa, para volver.',
  'help.guide.map-satellite.result':
    'El mapa vuelve a estar dibujado, y la capa en la que lo dejaste queda recordada en tu cuenta.',
  'help.guide.map-satellite.tip.1':
    'La elección se guarda en tu cuenta y no en el viaje, así que cada viaje se abre como lo dejaste, sea cual sea el motor de mapas que uses.',
  'help.guide.map-satellite.tip.2':
    'Las imágenes no llevan texto: los nombres de calle, los barrios y los números están en el mapa dibujado, así que vuelve a él cuando busques una dirección.',
  // map-whole-trip
  'help.guide.map-whole-trip.title': 'Ver todo el viaje y sus distancias',
  'help.guide.map-whole-trip.goal':
    'Cambia el único día abierto por todos los días de trayecto del viaje, y lee cuánto recorre cada uno.',
  'help.guide.map-whole-trip.step.1': 'El botón redondo Mostrar todo el viaje está abajo a la derecha del mapa.',
  'help.guide.map-whole-trip.step.2':
    'Haz clic en él. Todos los días de trayecto del viaje se dibujan a la vez, cada uno en su propio color sobre un borde blanco, para que los días vecinos no se confundan.',
  'help.guide.map-whole-trip.step.3':
    'La ficha sobre el botón lista esos días: un punto de color, el nombre del día, un icono por cada forma en que lo recorres, y la distancia que cubre. Distancia total está arriba del todo.',
  'help.guide.map-whole-trip.step.4':
    'Haz clic en un día de la ficha para seleccionarlo, igual que si lo eligieras en la columna de días. Haz clic otra vez en el botón, que ahora dice Ocultar todo el viaje, para volver al único día.',
  'help.guide.map-whole-trip.result':
    'Todos los días de trayecto están dibujados en su propio color, y la ficha dice lo que cubre cada uno y a cuánto llega el viaje.',
  'help.guide.map-whole-trip.tip.1':
    'El total llega por tramos, unos pocos cada vez. Mientras le sigue un …, el número es aún una suma parcial; se asienta en cuanto cada tramo ha respondido.',
  'help.guide.map-whole-trip.tip.2':
    'Un tramo que el router rechaza queda como una línea recta y no cuenta nada, y la ficha lo dice en lugar de mostrar en silencio una cifra demasiado baja.',
  'help.guide.map-whole-trip.tip.3':
    'Un día con menos de dos paradas localizadas no tiene ruta que dibujar, así que se deja fuera de la ficha por completo.',
  // map-booking-routes
  'help.guide.map-booking-routes.title': 'Mostrar la ruta de una reserva en el mapa',
  'help.guide.map-booking-routes.goal':
    'Dibuja en el mapa los vuelos, trenes y trayectos en coche que has reservado, y quítalos de nuevo.',
  'help.guide.map-booking-routes.step.1':
    'Las rutas de reservas están apagadas hasta que pidas una. En la fila de una reserva, en la columna de días, hay un pequeño icono de ruta: Mostrar rutas de reservas.',
  'help.guide.map-booking-routes.step.2':
    'Haz clic en él. La reserva aparece en el mapa: un vuelo como un arco de círculo máximo, un trayecto en coche por las carreteras reales, un tren como la cadena de sus estaciones. Confirmada se dibuja continua, Pendiente discontinua.',
  'help.guide.map-booking-routes.step.3':
    'Los extremos de la ruta son píldoras azules con el icono del transporte. Haz clic en uno para abrir la reserva que hay detrás, con sus horas, su Código de reserva y su Ubicación / dirección; Cerrar la guarda otra vez.',
  'help.guide.map-booking-routes.step.4':
    'El icono de ruta de la barra de herramientas sobre los días hace todo el viaje de una vez: Mostrar todas las rutas de reservas dibuja todas las reservas que tienen una.',
  'help.guide.map-booking-routes.step.5':
    'Es un borrón y cuenta nueva y no una capa encima, así que lo que hayas elegido reserva a reserva se descarta. Púlsalo otra vez, que ahora dice Ocultar todas las rutas de reservas, y el mapa queda limpio.',
  'help.guide.map-booking-routes.result':
    'Las reservas que has pedido están dibujadas en el mapa, y la elección se guarda para este viaje en este navegador hasta que la cambies.',
  'help.guide.map-booking-routes.tip.1':
    'Los extremos llevan el código del aeropuerto o el nombre de la estación solo cuando Etiquetas de rutas de reservas está activado en Ajustes, bajo Travel & map; si no, muestran solo el icono.',
  'help.guide.map-booking-routes.tip.2':
    'Mostrar siempre las rutas de reserva, en los mismos ajustes, las dibuja desde el principio en todos los viajes sobre los que aún no has decidido.',
  'help.guide.map-booking-routes.tip.3':
    'Una reserva necesita dos extremos con coordenadas antes de poder dibujarse, así que un hotel o un restaurante no lleva icono de ruta.',
};

export default help;
