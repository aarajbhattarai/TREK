import type { TranslationStrings } from '../types';

// English fallback until 'fr' is translated.
const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // center
  'help.center.button': 'Aide pour cet écran',
  'help.center.title': 'Aide',
  'help.center.onThisScreen': 'Sur cet écran',
  'help.center.screens': 'Écrans',
  'help.center.thisScreen': 'Cet écran',
  'help.center.subScreens': 'Sous-écrans : {count}',
  'help.center.subScreensLabel': 'Sous-écrans',
  'help.center.guidesCount': '{count} guides',
  'help.center.goToScreen': 'Aller à {screen}',
  'help.center.overview': 'Aperçu',
  'help.center.howTo': 'Comment faire pour…',
  'help.center.searchPlaceholder': 'Rechercher dans les guides et la doc…',
  'help.center.searchEmpty': 'Aucun résultat pour « {query} ».',
  'help.center.searchGuides': 'Guides',
  'help.center.searchDocs': 'Documentation',
  'help.center.searchError': 'La recherche est indisponible pour le moment.',
  'help.center.back': 'Retour',
  'help.center.close': "Fermer l'aide",
  'help.center.steps': '{count} étapes',
  'help.center.step': 'Étape {n}',
  'help.center.stepsLabel': 'Étapes',
  'help.center.stepOf': 'Étape {n} sur {total}',
  'help.center.screenshot': 'Capture',
  'help.center.result': 'Résultat',
  'help.center.tips': 'Bon à savoir',
  'help.center.related': 'En lien',
  'help.center.openDocs': 'Ouvrir dans Aide & Doc',
  'help.center.docsSection': 'Dans la doc',
  'help.center.noContext': 'Pas encore de guide pour cet écran.',
  'help.center.noContextHint': 'Cherchez dans la doc, ou dites-nous ce que vous cherchiez.',
  'help.center.feedback': 'Il manque quelque chose ?',
  'help.center.feedbackLink': 'Dites-le-nous sur GitHub',
  'help.center.discord': 'Demander sur Discord',
  'help.center.quick': 'Rapide',
  'help.center.guide': 'Guide',
  'help.center.tour': 'Démonstration',
  'help.center.imageAlt': 'Étape {n} de « {title} »',

  // ctx
  'help.ctx.dashboard.title': 'Tableau de bord',
  'help.ctx.dashboard.summary':
    "Le tableau de bord est la porte d'entrée de tous vos voyages. La carte d'embarquement en haut met en avant le voyage en cours ou le prochain, la rangée en dessous compte ce que vous avez déjà parcouru, et les cartes listent tout ce que vous planifiez, avez archivé ou déjà terminé.",
  'help.ctx.dashboard.bullet.1':
    "Carte d'embarquement : le voyage en cours ou le prochain, avec ses dates, ses voyageurs, ses lieux et un compte à rebours. Cliquez dessus pour ouvrir le voyage.",
  'help.ctx.dashboard.bullet.2':
    "Statistiques : pays visités, voyages, jours sur la route et distance parcourue en avion, sur l'ensemble de vos voyages.",
  'help.ctx.dashboard.bullet.3':
    'Cartes de voyage, filtrées par Planifiés, Archivé et Terminé, en grille ou en liste. Survolez une carte pour modifier, dupliquer, archiver et supprimer.',
  'help.ctx.dashboard.bullet.4':
    'Widgets à droite : convertisseur de devises, horloges mondiales, réservations à venir et collections. Chacun peut être désactivé.',
  'help.ctx.dashboard.bullet.5':
    'La carte « Nouveau voyage » et le bouton en bas à droite démarrent tous deux un nouveau voyage.',

  // create-trip
  'help.guide.create-trip.title': 'Créer un voyage',
  'help.guide.create-trip.goal': 'Démarrer un nouveau voyage avec un nom, des dates et une photo de couverture.',
  'help.guide.create-trip.step.1':
    'Cliquez sur « Nouveau voyage ». La carte à la fin de vos voyages et le bouton en bas à droite font la même chose.',
  'help.guide.create-trip.step.2':
    "Donnez un nom au voyage. C'est le seul champ obligatoire ; tout le reste peut être ajouté plus tard.",
  'help.guide.create-trip.step.3':
    'Choisissez une date de début et une date de fin. TREK crée un jour par date, votre itinéraire est prêt à être rempli.',
  'help.guide.create-trip.step.4':
    'Facultatif : ajoutez une photo de couverture. Téléversez la vôtre, glissez-en une, ou cherchez la destination sur Unsplash.',
  'help.guide.create-trip.step.5': 'Cliquez sur « Créer un nouveau voyage ».',
  'help.guide.create-trip.result':
    "Le voyage apparaît sur votre tableau de bord. Si c'est le prochain, il prend la carte d'embarquement en haut.",
  'help.guide.create-trip.tip.1':
    "Les dates peuvent être changées plus tard. S'il existe déjà des réservations, TREK demande s'il faut les déplacer avec les jours.",
  'help.guide.create-trip.tip.2':
    'La devise du voyage choisie ici est celle dans laquelle chaque dépense est convertie. Prenez la devise de la destination.',

  // edit-trip
  'help.guide.edit-trip.title': 'Modifier un voyage',
  'help.guide.edit-trip.goal': 'Renommer un voyage, changer ses dates ou ajuster ses réglages.',
  'help.guide.edit-trip.step.1': "Survolez la carte du voyage (ou la carte d'embarquement) et cliquez sur le crayon.",
  'help.guide.edit-trip.step.2':
    "Changez ce qu'il faut : nom, description, dates, couverture, devise, rappel ou membres.",
  'help.guide.edit-trip.step.3': 'Cliquez sur « Mettre à jour ».',
  'help.guide.edit-trip.result': 'La carte se met à jour immédiatement, pour chaque membre du voyage.',
  'help.guide.edit-trip.tip.1':
    "Déplacer les dates d'un voyage qui a déjà des réservations ouvre une seconde étape qui demande si les réservations doivent suivre.",

  // cover-image
  'help.guide.cover-image.title': 'Définir une photo de couverture',
  'help.guide.cover-image.goal':
    "Donner au voyage une image qui s'affiche sur sa carte et sur la carte d'embarquement.",
  'help.guide.cover-image.step.1': 'Ouvrez le formulaire de modification du voyage via le crayon sur sa carte.',
  'help.guide.cover-image.step.2':
    'Dans « Image de couverture », déposez une photo, cliquez pour en téléverser une, ou tapez une destination dans la recherche Unsplash.',
  'help.guide.cover-image.step.3': 'Choisissez une photo et cliquez sur « Mettre à jour ».',
  'help.guide.cover-image.result':
    "La photo est enregistrée avec le voyage et s'affiche partout où le voyage est listé.",
  'help.guide.cover-image.tip.1':
    'Les photos de la recherche Unsplash sont créditées automatiquement ; vos propres envois restent sur votre serveur.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Dupliquer un voyage',
  'help.guide.duplicate-trip.goal': 'Réutiliser un voyage comme modèle pour un nouveau.',
  'help.guide.duplicate-trip.step.1': "Survolez la carte et cliquez sur l'icône de duplication.",
  'help.guide.duplicate-trip.step.2': 'Lisez ce qui sera copié et ce qui ne le sera pas, puis confirmez.',
  'help.guide.duplicate-trip.result': "Une copie apparaît à côté de l'original, prête à être renommée et redatée.",
  'help.guide.duplicate-trip.tip.1':
    'Jours, lieux, réservations, postes de budget, listes de bagages et notes de jour sont copiés. Membres, chat, sondages, fichiers et liens de partage ne le sont pas.',

  // archive-trip
  'help.guide.archive-trip.title': 'Archiver et restaurer un voyage',
  'help.guide.archive-trip.goal': 'Ranger un voyage sans le supprimer, et le récupérer plus tard.',
  'help.guide.archive-trip.step.1': 'Survolez la carte et cliquez sur « Archiver ».',
  'help.guide.archive-trip.step.2': 'Passez le filtre au-dessus des cartes sur « Archivé » pour le revoir.',
  'help.guide.archive-trip.step.3': 'Cliquez sur « Restaurer » sur la carte pour le ramener dans « Planifiés ».',
  'help.guide.archive-trip.result':
    "Les voyages archivés gardent tout. Ils cessent simplement d'encombrer le tableau de bord et le flux de calendrier de tous les voyages.",

  // delete-trip
  'help.guide.delete-trip.title': 'Supprimer un voyage',
  'help.guide.delete-trip.goal': 'Retirer un voyage pour de bon.',
  'help.guide.delete-trip.step.1': 'Survolez la carte et cliquez sur la corbeille.',
  'help.guide.delete-trip.step.2': 'Confirmez. La boîte de dialogue nomme le voyage, pour être sûr de tenir le bon.',
  'help.guide.delete-trip.result':
    "Le voyage, ses jours, lieux, réservations et fichiers disparaissent. Il n'y a pas de retour possible : archivez plutôt en cas de doute.",

  // filter-and-view
  'help.guide.filter-and-view.title': 'Retrouver les voyages terminés, passer de la grille à la liste',
  'help.guide.filter-and-view.goal':
    'Voir les voyages terminés ou archivés et choisir la disposition qui vous convient.',
  'help.guide.filter-and-view.step.1':
    'Utilisez « Planifiés », « Archivé » et « Terminé » au-dessus des cartes. Terminé regroupe tout voyage dont la date de fin est passée.',
  'help.guide.filter-and-view.step.2':
    "Cliquez sur l'icône de liste pour passer à une liste compacte ; cliquez de nouveau pour la grille.",
  'help.guide.filter-and-view.result': 'Le tableau de bord retient votre disposition sur cet appareil.',

  // calendar-feed
  'help.guide.calendar-feed.title': "S'abonner à tous les voyages dans son calendrier",
  'help.guide.calendar-feed.goal':
    'Voir les jours et les réservations de chaque voyage actif dans votre application de calendrier, toujours synchronisés.',
  'help.guide.calendar-feed.step.1': "Cliquez sur l'icône de calendrier à côté du sélecteur de vue.",
  'help.guide.calendar-feed.step.2': 'Cliquez sur « Enable calendar subscription ». TREK génère un lien de flux privé.',
  'help.guide.calendar-feed.step.3':
    "Ajoutez le flux avec l'un des boutons (Google, Apple, Outlook) ou copiez le lien dans toute application de calendrier qui s'abonne à des URL.",
  'help.guide.calendar-feed.result':
    'Chaque voyage actif apparaît dans votre calendrier et se met à jour tout seul. Les voyages archivés et ceux terminés depuis plus de 90 jours sont exclus.',
  'help.guide.calendar-feed.tip.1':
    "Le lien est un secret. Quiconque l'a peut lire le flux ; révoquez-le depuis la même boîte de dialogue s'il fuite.",

  // widgets
  'help.guide.widgets.title': 'Choisir les widgets du tableau de bord',
  'help.guide.widgets.goal': 'Afficher ou masquer la rangée de statistiques et les widgets de droite.',
  'help.guide.widgets.step.1': 'Ouvrez le menu de votre avatar en haut à droite et choisissez « Paramètres ».',
  'help.guide.widgets.step.2': "Passez à l'onglet « Appearance ».",
  'help.guide.widgets.step.3':
    'Sous « Dashboard widgets », activez ou désactivez chaque widget. Ordinateur et mobile se règlent séparément.',
  'help.guide.widgets.step.4': "Revenez au tableau de bord. Le changement s'applique immédiatement.",
  'help.guide.widgets.result':
    'Les widgets masqués libèrent de la place pour vos voyages ; désactivez toute la colonne de droite pour centrer la disposition.',
  'help.guide.widgets.link': "Ouvrir les réglages d'apparence",

  // currency-widget
  'help.guide.currency-widget.title': 'Convertir des devises',
  'help.guide.currency-widget.goal': 'Convertir un montant entre deux devises avec les taux du jour.',
  'help.guide.currency-widget.step.1': 'Saisissez le montant et choisissez les deux devises.',
  'help.guide.currency-widget.step.2':
    'La flèche entre les deux inverse la paire ; la flèche circulaire rafraîchit le taux.',
  'help.guide.currency-widget.result':
    'Votre paire de devises est mémorisée sur votre compte, elle est donc la même sur tous vos appareils.',
  'help.guide.currency-widget.tip.1':
    'Les taux viennent de la Banque centrale européenne et sont mis à jour une fois par jour.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Ajouter des horloges mondiales',
  'help.guide.timezones-widget.goal': "Garder un œil sur l'heure locale de vos destinations.",
  'help.guide.timezones-widget.step.1': 'Cliquez sur + dans le widget « Fuseau horaire » et cherchez une ville.',
  'help.guide.timezones-widget.step.2': 'Retirez une horloge avec le × à côté.',
  'help.guide.timezones-widget.result': 'Vos horloges sont enregistrées avec votre compte.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    "Vacay est votre planificateur de congés personnel : combien de jours de vacances vous avez dans l'année, lesquels vous avez posés et ce qu'il reste. La grille montre toute l'année d'un coup d'œil ; la barre latérale contient le sélecteur d'année, les personnes avec qui vous planifiez, les calendriers partagés avec vous, la légende et votre solde.",
  'help.ctx.vacay.bullet.1':
    "Grille annuelle : douze cartes de mois, une cellule par jour. Cliquez sur un jour pour le poser ou l'effacer. Un petit point bleu marque les jours déjà couverts par un voyage.",
  'help.ctx.vacay.bullet.2':
    "Barre en bas : mode Vacances ou Jour férié d'entreprise, plus les interrupteurs Demi-journée et Récup / RTT qui changent ce qu'un clic enregistre.",
  'help.ctx.vacay.bullet.3':
    "Droits : vos jours pour l'année, combien sont utilisés et combien il en reste, avec le report de la période précédente.",
  'help.ctx.vacay.bullet.4':
    'Les Personnes sont les gens fusionnés à votre plan, chacun dans sa couleur. Les Calendriers partagés sont des anneaux en lecture seule des jours de congé des autres.',
  'help.ctx.vacay.bullet.5':
    "Les Paramètres couvrent les week-ends, le début de semaine, le report, votre année de congés, les jours fériés d'entreprise et les calendriers de jours fériés ou de vacances scolaires.",
  // log-day
  'help.guide.log-day.title': 'Poser un jour de congé',
  'help.guide.log-day.goal': 'Marquer un jour de repos dans la grille et voir le solde suivre.',
  'help.guide.log-day.step.1':
    "Regardez la barre en bas : le bouton de gauche, à votre couleur, signifie qu'un clic pose un jour de congé pour vous.",
  'help.guide.log-day.step.2':
    "Cliquez sur un jour dans n'importe quelle carte de mois. Il se remplit de votre couleur et Utilisés compte un jour de plus.",
  'help.guide.log-day.step.3': "Cliquez à nouveau sur le même jour pour l'effacer.",
  'help.guide.log-day.result':
    'Le jour est posé, Jours, Utilisés et Restants se mettent à jour aussitôt, et toute personne fusionnée à votre plan le voit en direct.',
  'help.guide.log-day.tip.1':
    'Les week-ends ne peuvent pas être posés tant que Bloquer les week-ends est activé dans les Paramètres.',
  'help.guide.log-day.tip.2':
    "Un point bleu dans une cellule signifie qu'un de vos voyages couvre ce jour : vous voyez où congés et voyages coïncident.",
  // half-day
  'help.guide.half-day.title': 'Poser une demi-journée',
  'help.guide.half-day.goal': 'Prendre un après-midi sans dépenser une journée entière de congé.',
  'help.guide.half-day.step.1':
    "Activez Demi-journée dans la barre. Son point orange est le marqueur qu'une demi-journée reçoit dans la grille.",
  'help.guide.half-day.step.2': 'Cliquez sur un jour. Il est posé comme 0,5 et porte le point orange dans son coin.',
  'help.guide.half-day.step.3':
    "Désactivez Demi-journée quand vous avez fini ; cliquer sur une demi-journée avec d'autres réglages la convertit sur place.",
  'help.guide.half-day.result':
    'Utilisés augmente de 0,5. Demi-journée et Récup / RTT sont indépendants : une demi-journée de récup est donc possible aussi.',
  'help.guide.half-day.tip.1':
    'La barre montre toujours le marqueur que votre prochain clic placera, pour vérifier avant de poser.',
  // comp-day
  'help.guide.comp-day.title': 'Poser une récup ou du flex',
  'help.guide.comp-day.goal': 'Prendre du temps compensatoire qui ne coûte pas de jours de congé.',
  'help.guide.comp-day.step.1':
    "Activez Récup / RTT dans la barre. Le disque hachuré est l'apparence d'un jour de récup dans la grille.",
  'help.guide.comp-day.step.2':
    "Cliquez sur un jour. Il se remplit de hachures diagonales à votre couleur au lieu d'un bloc plein.",
  'help.guide.comp-day.result':
    'Les jours de récup sont comptés à côté des tuiles de solde et ne réduisent jamais Restants.',
  'help.guide.comp-day.tip.1':
    'Heures sup récupérées, flextime, jour de compensation : tout ce qui est du repos mais pas des vacances va ici.',
  // entitlement
  'help.guide.entitlement.title': 'Définir votre solde de congés',
  'help.guide.entitlement.goal': "Dire à Vacay combien de jours de congé vous avez dans l'année.",
  'help.guide.entitlement.step.1': 'Dans la barre latérale, cliquez sur la tuile Jours sous Droits.',
  'help.guide.entitlement.step.2': 'Saisissez votre nombre de jours et appuyez sur Entrée.',
  'help.guide.entitlement.result':
    "Restants est recalculé à partir de votre solde, d'un éventuel report et des jours utilisés.",
  'help.guide.entitlement.tip.1':
    "Chaque année a son propre solde : un changement ici ne concerne que l'année sélectionnée.",
  // years
  'help.guide.years.title': "Ajouter et changer d'année",
  'help.guide.years.goal': "Planifier déjà l'an prochain, ou revoir l'an dernier.",
  'help.guide.years.step.1':
    "Cliquez sur le + à droite de l'année pour ajouter la suivante, ou sur le + à gauche pour la précédente.",
  'help.guide.years.step.2': "Passez d'une année à l'autre avec les flèches ou les pastilles d'année en dessous.",
  'help.guide.years.step.3':
    'Pour retirer une année, survolez sa pastille et cliquez sur le petit moins. Ses entrées partent avec elle, confirmez avec soin.',
  'help.guide.years.result': 'Chaque année garde son propre solde et ses entrées ; le report les relie.',
  // company-holidays
  'help.guide.company-holidays.title': "Marquer les jours fériés d'entreprise",
  'help.guide.company-holidays.goal':
    "Bloquer les jours où toute l'entreprise est fermée sans entamer le solde de personne.",
  'help.guide.company-holidays.step.1':
    "Ouvrez les Paramètres et vérifiez que Jours fériés d'entreprise est activé. C'est le réglage par défaut ; la barre ne propose ce mode que s'il l'est.",
  'help.guide.company-holidays.step.2': "De retour dans la grille, passez la barre en mode Jour férié d'entreprise.",
  'help.guide.company-holidays.step.3': 'Cliquez sur les jours. Ils deviennent ambre et apparaissent dans la légende.',
  'help.guide.company-holidays.result':
    "Les jours fériés d'entreprise sont visibles par toutes les personnes fusionnées au plan et ne réduisent jamais Restants.",
  'help.guide.company-holidays.tip.1':
    "Toute personne fusionnée peut modifier les jours fériés d'entreprise : mettez-vous d'accord sur qui les gère.",
  // public-holidays
  'help.guide.public-holidays.title': 'Afficher les jours fériés',
  'help.guide.public-holidays.goal': 'Mettre les jours fériés de votre pays ou de votre région sur la grille.',
  'help.guide.public-holidays.step.1': 'Ouvrez les Paramètres et activez Jours fériés.',
  'help.guide.public-holidays.step.2':
    "Cliquez sur Ajouter un calendrier, puis choisissez le pays et, quand c'est utile, la région. Donnez-lui une couleur et un libellé si vous voulez.",
  'help.guide.public-holidays.step.3':
    'Fermez les Paramètres. Les jours fériés apparaissent sur la grille et dans la légende.',
  'help.guide.public-holidays.result':
    'Les jours fériés sont marqués de la couleur du calendrier et ne comptent jamais contre votre solde.',
  'help.guide.public-holidays.tip.1':
    "Vous pouvez ajouter plusieurs calendriers, par exemple votre région et celle d'un collègue fusionné.",
  // school-holidays
  'help.guide.school-holidays.title': 'Afficher les vacances scolaires',
  'help.guide.school-holidays.goal': 'Voir les vacances scolaires de votre région à côté de vos propres congés.',
  'help.guide.school-holidays.step.1': 'Ouvrez les Paramètres et activez School Holidays.',
  'help.guide.school-holidays.step.2':
    'Cliquez sur Ajouter un calendrier et choisissez le pays. Quand un pays découpe son calendrier, choisissez aussi la région ou la zone.',
  'help.guide.school-holidays.step.3':
    'Fermez les Paramètres. Chaque période reçoit une bande colorée en bas de ses jours.',
  'help.guide.school-holidays.result':
    'Les vacances scolaires sont purement visuelles : elles ne réduisent le solde de personne.',
  'help.guide.school-holidays.tip.1':
    'Région manquante ? Votre administrateur peut gérer les vacances scolaires à la main dans Admin, Personnalisation, Vacances scolaires.',
  // weekends
  'help.guide.weekends.title': 'Bloquer les week-ends et fixer le début de semaine',
  'help.guide.weekends.goal':
    "Garder les week-ends hors du décompte et commencer la semaine le jour dont vous avez l'habitude.",
  'help.guide.weekends.step.1': 'Ouvrez les Paramètres.',
  'help.guide.weekends.step.2':
    'Activez Bloquer les week-ends et choisissez quels jours comptent comme votre week-end.',
  'help.guide.weekends.step.3': 'Sous La semaine commence le, choisissez lundi ou dimanche.',
  'help.guide.weekends.result': 'Les jours bloqués sont grisés dans la grille et ne peuvent pas être posés par erreur.',
  // leave-year
  'help.guide.leave-year.title': 'Définir votre année de congés',
  'help.guide.leave-year.goal':
    "Compter votre solde sur un exercice fiscal ou depuis votre date d'embauche plutôt que de janvier à décembre.",
  'help.guide.leave-year.step.1': 'Ouvrez les Paramètres et trouvez Année de congés.',
  'help.guide.leave-year.step.2':
    "Choisissez Année civile, Année fiscale (avec le mois et le jour de début) ou Date d'embauche (avec la date de votre embauche).",
  'help.guide.leave-year.result':
    'Solde, jours utilisés et report suivent cette période, et la grille commence par son premier mois.',
  'help.guide.leave-year.tip.1':
    'Ce réglage est personnel : dans un plan fusionné, chacun garde sa propre année de congés et ses chiffres.',
  // carry-over
  'help.guide.carry-over.title': 'Reporter les jours non pris',
  'help.guide.carry-over.goal': "Ajouter ce qui reste à la fin d'une période à la suivante.",
  'help.guide.carry-over.step.1': 'Ouvrez les Paramètres.',
  'help.guide.carry-over.step.2': 'Activez Report.',
  'help.guide.carry-over.result': 'Le montant reporté est recalculé sur toutes vos années et affiché sous le solde.',
  'help.guide.carry-over.tip.1': 'Le désactiver remet chaque report à zéro.',
  // invite
  'help.guide.invite.title': "Planifier avec quelqu'un",
  'help.guide.invite.goal':
    'Fusionner votre plan avec un autre utilisateur TREK pour voir vos congés respectifs dans une seule grille.',
  'help.guide.invite.step.1': "Cliquez sur l'icône de personne dans le panneau Personnes.",
  'help.guide.invite.step.2': "Choisissez l'utilisateur et envoyez l'invitation.",
  'help.guide.invite.step.3':
    "Il reçoit une notification et accepte. D'ici là, l'invitation apparaît comme en attente.",
  'help.guide.invite.result':
    "Les deux plans fusionnent : chacun a une couleur, vous pouvez poser des jours l'un pour l'autre, et tout se synchronise en direct.",
  'help.guide.invite.tip.1':
    'Pour annuler une fusion, utilisez Dissoudre dans les Paramètres. Les entrées de chacun reviennent dans son propre plan.',
  'help.guide.invite.tip.2':
    "Si l'autre personne doit seulement voir vos jours, partagez votre calendrier au lieu de fusionner.",
  // share-calendar
  'help.guide.share-calendar.title': 'Partager votre calendrier en lecture seule',
  'help.guide.share-calendar.goal':
    "Laisser quelqu'un voir quand vous êtes absent sans lui donner la main sur votre plan.",
  'help.guide.share-calendar.step.1': "Cliquez sur l'icône de partage dans le panneau Calendriers partagés.",
  'help.guide.share-calendar.step.2':
    "Choisissez l'utilisateur et cliquez sur Partager. Aucune acceptation n'est nécessaire.",
  'help.guide.share-calendar.step.3':
    "Les calendriers partagés avec vous apparaissent dans le même panneau ; l'œil en masque un, Arrêter le partage révoque le vôtre.",
  'help.guide.share-calendar.result':
    "Vos congés apparaissent sous forme d'anneau coloré sur sa grille. Rien de ce que vous partagez ne peut être modifié de son côté.",
  'help.guide.share-calendar.tip.1':
    "Partage et fusion sont indépendants : vous pouvez être fusionné avec une personne et partager avec d'autres.",
  'help.guide.share-calendar.tip.2': 'Survolez un jour entouré pour voir qui est absent et pour combien de temps.',

  // ── Screen: atlas ─────────────────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'L’Atlas est votre empreinte de voyage sur une carte du monde : chaque pays où un voyage vous a emmené est colorié, et vous ajoutez à la main ceux visités avant TREK. Zoomez pour les régions, tenez une bucket list des lieux qu’il vous reste à voir et lisez vos chiffres dans le panneau de verre en bas.',
  'help.ctx.atlas.bullet.1':
    'La carte : les pays visités portent une couleur qui leur reste, les pays prévus ont un contour en pointillés, ceux de la bucket list des hachures, tout le reste est gris. Survolez un pays pour ses voyages, ses lieux et ses première et dernière visites.',
  'help.ctx.atlas.bullet.2':
    'Recherche en haut : tapez un pays ou un lieu. Choisir un pays y fait voler la carte et ouvre sa fenêtre ; choisir un lieu atterrit dans sa région pour que vous puissiez la marquer.',
  'help.ctx.atlas.bullet.3':
    'Afficher les pays prévus, en haut à droite : révèle les pays de vos voyages à venir. L’interrupteur n’apparaît que tant que vous en avez.',
  'help.ctx.atlas.bullet.4':
    'Panneau en bas : l’onglet Statistiques avec pays, voyages, lieux, villes, jours, continents et votre série ; l’onglet Bucket List avec ce qui vous attend encore.',
  'help.ctx.atlas.bullet.5':
    'Régions : à partir du niveau de zoom 5, la carte passe aux états et provinces, chacun cliquable pour le marquer ou le retirer.',
  'help.ctx.atlas.bullet.6':
    'Dawarich : avec le module connecté, un panneau à gauche des statistiques coche des envies et ajoute des pays depuis vos enregistrements, jamais sans votre confirmation.',
  // mark-country
  'help.guide.mark-country.title': 'Marquer un pays comme visité',
  'help.guide.mark-country.goal':
    'Ajoutez un pays où vous êtes allé avant TREK, pour que la carte et votre compte l’incluent.',
  'help.guide.mark-country.step.1': 'Tapez le pays dans le champ de recherche en haut de la carte.',
  'help.guide.mark-country.step.2': 'Choisissez-le dans la liste. La carte y vole et une fenêtre s’ouvre pour ce pays.',
  'help.guide.mark-country.step.3': 'Choisissez Marquer comme visité.',
  'help.guide.mark-country.result':
    'Le pays prend sa couleur sur la carte et Pays compte un de plus. Cette couleur est permanente : marquer d’autres pays ne rebat jamais les autres.',
  'help.guide.mark-country.tip.1':
    'Cliquer un pays gris sur la carte ouvre la même fenêtre ; la recherche est le chemin sûr pour les petits pays.',
  'help.guide.mark-country.tip.2':
    'Un pays marqué à la main compte toujours comme visité, quelles que soient les dates d’un voyage qui y va.',
  // unmark-country
  'help.guide.unmark-country.title': 'Retirer un pays marqué',
  'help.guide.unmark-country.goal': 'Retirez de la carte un pays marqué à la main.',
  'help.guide.unmark-country.step.1':
    'Cherchez le pays et choisissez-le, ou cliquez-le sur la carte. Pour un pays que vous avez marqué vous-même, la fenêtre demande s’il faut le retirer.',
  'help.guide.unmark-country.step.2': 'Confirmez avec Retirer.',
  'help.guide.unmark-country.result': 'Le pays redevient gris et quitte votre compte.',
  'help.guide.unmark-country.tip.1':
    'Seuls les pays marqués à la main se retirent ainsi. Un pays avec des voyages ou des lieux reste tant qu’ils y sont ; Retirer figure aussi dans sa carte de détail du panneau quand il a été marqué à la main.',
  // country-details
  'help.guide.country-details.title': 'Voir ce que vous avez fait dans un pays',
  'help.guide.country-details.goal': 'Ouvrez un pays visité et sautez aux voyages qui vous y ont emmené.',
  'help.guide.country-details.step.1': 'Cherchez un pays que vous avez visité.',
  'help.guide.country-details.step.2':
    'Choisissez-le. La carte y vole et le panneau en bas gagne une carte avec son drapeau, ses lieux, ses voyages et une puce par voyage.',
  'help.guide.country-details.result': 'Cliquez une puce de voyage pour ouvrir ce voyage dans le planificateur.',
  'help.guide.country-details.tip.1':
    'Survoler le pays sur la carte montre les mêmes chiffres plus les première et dernière visites.',
  // planned-countries
  'help.guide.planned-countries.title': 'Afficher les pays où vous allez',
  'help.guide.planned-countries.goal':
    'Mettez sur la carte les pays de vos voyages à venir sans les compter comme visités.',
  'help.guide.planned-countries.step.1':
    'Activez Afficher les pays prévus, en haut à droite. Le nombre à côté dit combien attendent.',
  'help.guide.planned-countries.step.2':
    'Cherchez un pays prévu et choisissez-le : le panneau dit Prévu et l’infobulle de la carte montre quand vous partez.',
  'help.guide.planned-countries.result':
    'Les pays prévus apparaissent avec un contour en pointillés, pour ne jamais ressembler à un endroit déjà visité. L’interrupteur retient votre choix.',
  'help.guide.planned-countries.tip.1':
    'Un pays compte comme visité dès que le voyage là-bas a commencé ; un voyage en cours compte aussi. Les voyages sans dates restent tout à fait hors des statistiques.',
  'help.guide.planned-countries.tip.2': 'L’interrupteur n’existe que tant que vous avez des voyages à venir.',
  // regions
  'help.guide.regions.title': 'Marquer une région',
  'help.guide.regions.goal': 'Plus fin que les pays : marquez les états, provinces ou préfectures où vous êtes allé.',
  'help.guide.regions.step.1':
    'Zoomez dans un pays jusqu’à ce que ses régions apparaissent, à partir du niveau 5. Chercher le pays et le choisir vous amène assez près.',
  'help.guide.regions.step.2': 'Cliquez une région. Le survol la nomme ; la fenêtre montre la région et son pays.',
  'help.guide.regions.step.3': 'Choisissez Marquer comme visité.',
  'help.guide.regions.result':
    'La région se remplit de la couleur du pays. Marquer une région compte aussi le pays comme visité s’il ne l’était pas déjà.',
  'help.guide.regions.tip.1':
    'Cliquer une région visitée propose Retirer, que vous l’ayez marquée ou qu’un lieu l’y ait mise.',
  'help.guide.regions.tip.2': 'Les régions où vous avez de vrais lieux sont marquées pour vous ; rien à faire là.',
  // search-place
  'help.guide.search-place.title': 'Trouver un lieu et marquer sa région',
  'help.guide.search-place.goal':
    'Marquez la Bavière en cherchant Munich, sans savoir dans quelle région se trouve une ville.',
  'help.guide.search-place.step.1':
    'Tapez une ville, un monument ou une adresse dans le champ de recherche. Les pays viennent d’abord ; les lieux correspondants apparaissent dessous, sous Lieux.',
  'help.guide.search-place.step.2':
    'Choisissez le lieu. La carte y vole et détermine dans quelle région se trouve l’endroit.',
  'help.guide.search-place.step.3':
    'Choisissez Marquer comme visité pour cette région, ou Ajouter à la bucket list si elle vous attend encore.',
  'help.guide.search-place.result':
    'La région est marquée, et le pays avec elle. Les pays sans données de régions dans le paquet cartographique retombent sur le pays lui-même.',
  'help.guide.search-place.tip.1':
    'Les lieux viennent de la même recherche que partout dans TREK, ils suivent donc le fournisseur configuré par votre admin.',
  // bucket-country
  'help.guide.bucket-country.title': 'Mettre un pays sur la bucket list',
  'help.guide.bucket-country.goal':
    'Tenez une bucket list de pays directement sur la carte, à part de ceux où vous êtes allé.',
  'help.guide.bucket-country.step.1': 'Cherchez le pays et choisissez-le, ou cliquez-le sur la carte.',
  'help.guide.bucket-country.step.2': 'Choisissez Ajouter à la bucket list.',
  'help.guide.bucket-country.step.3':
    'Choisissez un mois et une année si vous savez déjà quand, puis confirmez avec Ajouter à la bucket list.',
  'help.guide.bucket-country.result':
    'Le pays est dessiné avec des hachures dans la couleur qu’il portera une fois que vous y serez, et il apparaît dans l’onglet Bucket List du panneau.',
  'help.guide.bucket-country.tip.1': 'La même fenêtre propose Retirer de la bucket list une fois le pays sur la liste.',
  'help.guide.bucket-country.tip.2':
    'Une entrée par date cible : le même pays peut être sur la liste pour deux mois différents, mais pas deux fois pour le même.',
  // bucket-place
  'help.guide.bucket-place.title': 'Ajouter un lieu à la bucket list',
  'help.guide.bucket-place.goal':
    'Enregistrez une ville, un site ou une adresse dont vous rêvez, avec coordonnées et date cible.',
  'help.guide.bucket-place.step.1': 'Ouvrez l’onglet Bucket List dans le panneau en bas.',
  'help.guide.bucket-place.step.2': 'Cliquez Ajouter un lieu.',
  'help.guide.bucket-place.step.3':
    'Tapez le nom et appuyez sur le bouton de recherche ; choisissez le résultat pour que le lieu ait des coordonnées. Taper un nom et sauter la recherche marche aussi.',
  'help.guide.bucket-place.step.4': 'Choisissez un mois et une année si vous voulez et cliquez Ajouter.',
  'help.guide.bucket-place.result':
    'Le lieu se place en haut de votre bucket list avec sa date cible ; le × à côté le retire.',
  'help.guide.bucket-place.tip.1':
    'Une envie avec des coordonnées est ce que Dawarich pourra cocher pour vous plus tard, une fois que vos enregistrements montrent que vous y étiez.',
  // stats
  'help.guide.stats.title': 'Lire vos statistiques',
  'help.guide.stats.goal': 'Savoir ce que comptent les chiffres du panneau, et ce qu’ils ne comptent pas.',
  'help.guide.stats.step.1':
    'Pays est le nombre de pays distincts où vous êtes vraiment allé ; les prévus sont affichés à côté, pas dedans. Voyages, Lieux et Jours sont des totaux sur tous vos voyages. Villes est déduit des adresses de vos lieux, c’est donc une estimation.',
  'help.guide.stats.step.2':
    'Les continents montrent les pays visités par continent ; l’Antarctique rejoint la rangée dès que vous y êtes allé. Puis votre série, années consécutives avec au moins un voyage, et le nombre de voyages faits cette année.',
  'help.guide.stats.result':
    'Les chiffres suivent vos voyages à mesure que vous les planifiez ; rien ici ne demande d’entretien.',
  'help.guide.stats.tip.1':
    'Les villes sont lues dans le texte de l’adresse, pas cherchées, donc une adresse courte comme « Osteria Francescana, Italy » ou une qui finit sur une préfecture peut donner une région plutôt qu’une ville.',
  'help.guide.stats.tip.2':
    'Les pays marqués à la main comptent dans Pays et les continents, mais n’apportent ni voyages, ni lieux, ni jours.',

  // ── Screen: collections ───────────────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Collections',
  'help.ctx.collections.summary':
    'Collections est votre bibliothèque de lieux en dehors de tout voyage : des listes nommées de lieux que vous avez trouvés et voulez garder, chaque lieu avec un statut Idée, À visiter ou Visité. Les lieux sont copiés vers et depuis les voyages, jamais liés, si bien qu’une liste et un voyage ne se modifient jamais l’un l’autre.',
  'help.ctx.collections.bullet.1':
    'Barre des listes à gauche : vos propres listes, celles partagées avec vous, les invitations qui attendent un oui, Tous les enregistrés comme réunion de tout ce qui vous appartient, et Nouvelle liste plus l’import de fichier tout en haut.',
  'help.ctx.collections.bullet.2':
    'En-tête de la liste ouverte : sa couleur, sa couverture, sa description et ses liens, les membres, et les actions Modifier, Exporter et Partager à droite.',
  'help.ctx.collections.bullet.3':
    'Ligne de filtres au-dessus des lieux : statut, catégorie, note et tri, le filtre par libellé, le + pour ajouter un lieu, l’import depuis un voyage et Choisir pour les actions groupées.',
  'help.ctx.collections.bullet.4':
    'Lignes de lieux : avatar, nom et adresse, libellés et catégorie, et la pastille de statut à droite qui change d’un clic.',
  'help.ctx.collections.bullet.5':
    'Carte à droite : une épingle par lieu ayant des coordonnées, le sélecteur liste ou carte, le champ de recherche et le filtre par libellé. Cliquer une épingle ouvre ce lieu.',
  'help.ctx.collections.bullet.6':
    'Fiche de détail : cliquez une ligne pour la couverture, la catégorie, les libellés, le statut, la description et les liens, avec Modifier, Copier vers un voyage et Retirer de la liste.',
  // create-list
  'help.guide.create-list.title': 'Créer une liste',
  'help.guide.create-list.goal':
    'Démarrez une nouvelle liste nommée, avec une couleur et une couverture, prête pour des lieux.',
  'help.guide.create-list.step.1': 'Cliquez Nouvelle liste en haut de la barre des listes.',
  'help.guide.create-list.step.2':
    'Donnez un nom à la liste et choisissez une couleur. Image de couverture, description et liens sont facultatifs ; vous pourrez les ajouter plus tard avec Modifier.',
  'help.guide.create-list.step.3': 'Cliquez Créer.',
  'help.guide.create-list.result':
    'La liste s’ouvre vide, avec Ajouter un lieu et Importer depuis un voyage comme les deux façons de la remplir.',
  'help.guide.create-list.tip.1':
    'La couverture peut être un envoi de votre part ou une image trouvée via la recherche Unsplash dans le même dialogue.',
  // add-place
  'help.guide.add-place.title': 'Ajouter un lieu',
  'help.guide.add-place.goal':
    'Trouvez un lieu et enregistrez-le dans la liste ouverte avec nom, catégorie, statut et notes en une fois.',
  'help.guide.add-place.step.1': 'Cliquez le + dans la ligne de filtres au-dessus des lieux.',
  'help.guide.add-place.step.2':
    'Tapez le lieu dans le champ de recherche et choisissez un résultat. Nom, adresse et coordonnées se remplissent à partir de lui.',
  'help.guide.add-place.step.3':
    'Définissez le statut et, si vous voulez, une catégorie, une description et des liens, puis cliquez Ajouter. Le dialogue reste ouvert pour le lieu suivant ; Annuler le ferme.',
  'help.guide.add-place.result':
    'Le lieu apparaît dans la liste et, s’il a des coordonnées, comme épingle sur la carte.',
  'help.guide.add-place.tip.1':
    'Depuis un voyage, Enregistrer dans une collection dans l’inspecteur de lieu ou le menu du lieu met un lieu du voyage sur une liste sans quitter le voyage.',
  'help.guide.add-place.tip.2':
    'La liste doit être à vous ou une où vous êtes éditeur ou admin ; le + n’est pas là sur Tous les enregistrés ni sur une liste que vous ne faites que consulter.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Importer les lieux d’un voyage',
  'help.guide.import-from-trip.goal':
    'Amenez d’un coup tous les lieux d’un voyage sur une liste au lieu de les enregistrer un par un.',
  'help.guide.import-from-trip.step.1':
    'Cliquez le bouton d’import avec la flèche nuage dans la ligne de filtres. Sur une liste vide, la même action se trouve à côté de Ajouter un lieu.',
  'help.guide.import-from-trip.step.2': 'Choisissez l’un de vos voyages.',
  'help.guide.import-from-trip.step.3':
    'Cochez les lieux que vous voulez. Les lieux déjà sur la liste sont grisés ; ceux qu’aucun jour du voyage ne contient sont cochés d’avance. Nouveaux seulement masque ce que vous avez déjà.',
  'help.guide.import-from-trip.step.4': 'Cliquez Importer. Le bouton dit toujours combien vont être ajoutés.',
  'help.guide.import-from-trip.result':
    'Les lieux sont copiés sur la liste avec leur nom, adresse, coordonnées, description et catégorie. Le voyage reste tel quel.',
  'help.guide.import-from-trip.tip.1':
    'Les doublons par nom ou coordonnées sont ignorés automatiquement, importer deux fois ne fait donc aucun mal.',
  'help.guide.import-from-trip.tip.2':
    'Dans la liste des lieux d’un voyage, le mode sélection propose plutôt Enregistrer dans une collection pour un ensemble de lieux choisis à la main.',
  // place-status
  'help.guide.place-status.title': 'Définir le statut d’un lieu',
  'help.guide.place-status.goal':
    'Gardez trace de ce qui est une idée, de ce qui est sur la liste courte et de là où vous êtes allé.',
  'help.guide.place-status.step.1':
    'Cliquez la pastille de statut au bout droit d’une ligne de lieu. Idée devient À visiter.',
  'help.guide.place-status.step.2': 'Cliquez-la encore pour Visité, et une fois de plus pour repartir à Idée.',
  'help.guide.place-status.result':
    'La pastille et sa couleur changent aussitôt ; le filtre de statut au-dessus de la liste compte avec.',
  'help.guide.place-status.tip.1':
    'Le statut est propre à Collections : copier un lieu dans un voyage ne l’emporte pas.',
  'help.guide.place-status.tip.2':
    'Depuis un voyage, Enregistrer dans une collection montre une pastille de statut par liste où se trouve le lieu, et le panneau des lieux a une action Marquer comme visité pour une sélection.',
  // place-detail
  'help.guide.place-detail.title': 'Ouvrir un lieu enregistré',
  'help.guide.place-detail.goal': 'Voyez tout sur un lieu et agissez : modifier, copier vers un voyage, retirer.',
  'help.guide.place-detail.step.1':
    'Cliquez une ligne de lieu. La fiche de détail s’ouvre à côté de la liste et la carte se déplace vers le lieu.',
  'help.guide.place-detail.step.2':
    'En bas se trouvent Modifier, Copier vers un voyage et Retirer de la liste ; l’appareil photo sur la couverture remplace la photo automatique par une des vôtres.',
  'help.guide.place-detail.result':
    'Modifier déverrouille nom, catégorie, libellés, adresse, coordonnées, description et liens directement dans la fiche.',
  'help.guide.place-detail.tip.1':
    'La couverture est récupérée automatiquement quand le lieu n’a pas d’image à lui. Votre propre envoi peut être un JPG, PNG, GIF ou WebP jusqu’à 20 Mo.',
  'help.guide.place-detail.tip.2':
    'Les membres d’une liste partagée peuvent aussi laisser ici une note en étoiles, et le filtre de note dans la ligne de filtres utilise la moyenne.',
  // labels
  'help.guide.labels.title': 'Grouper des lieux avec des libellés',
  'help.guide.labels.goal':
    'Donnez à une liste ses propres libellés, comme des quartiers ou des jours, au-delà des catégories communes.',
  'help.guide.labels.step.1':
    'Ouvrez le gestionnaire de libellés depuis le contrôle des libellés dans la ligne de filtres.',
  'help.guide.labels.step.2':
    'Tapez un nom, choisissez une couleur et cliquez Ajouter un libellé. Renommez, recolorez ou supprimez les libellés existants dans le même dialogue.',
  'help.guide.labels.step.3':
    'Activez Choisir, cochez les lieux et cliquez Attribuer un libellé dans la barre de sélection. Un seul lieu prend aussi des libellés via Modifier sur sa fiche de détail.',
  'help.guide.labels.step.4':
    'Choisissez un ou plusieurs libellés dans la ligne de filtres pour restreindre la liste et la carte aux lieux qui en portent au moins un.',
  'help.guide.labels.result':
    'Les lieux libellés montrent leurs libellés sur la ligne ; le filtre par libellé est là pour chaque membre, lecteurs compris.',
  'help.guide.labels.tip.1':
    'Les libellés appartiennent à la seule liste où ils ont été créés. Déplacer un lieu vers une autre liste les fait tomber.',
  'help.guide.labels.tip.2': 'Gérer et attribuer des libellés demande des droits d’édition sur la liste.',
  // filter-select
  'help.guide.filter-select.title': 'Filtrer et sélectionner des lieux',
  'help.guide.filter-select.goal': 'Restreignez la liste et agissez sur beaucoup de lieux à la fois.',
  'help.guide.filter-select.step.1':
    'Utilisez les menus déroulants de la ligne de filtres : statut, catégorie, note minimale et ordre de tri. Chacun montre combien de lieux il laisserait.',
  'help.guide.filter-select.step.2':
    'Cliquez Choisir. Chaque ligne reçoit une case à cocher et une barre de sélection apparaît.',
  'help.guide.filter-select.step.3':
    'Cochez des lieux ou utilisez Tout sélectionner pour tout ce qui est filtré en ce moment, puis choisissez Attribuer un libellé, Déplacer vers une liste, Dupliquer dans une liste, Copier vers un voyage ou Supprimer.',
  'help.guide.filter-select.result':
    'Les actions s’appliquent à toute la sélection d’un coup. Le × à droite quitte le mode sélection.',
  'help.guide.filter-select.tip.1':
    'Tout sélectionner suit le filtre, donc filtrer sur À visiter et tout sélectionner est le moyen rapide d’agir sur la liste courte.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Copier des lieux dans un voyage',
  'help.guide.copy-to-trip.goal': 'Transformez des lieux enregistrés en étapes de l’un de vos voyages.',
  'help.guide.copy-to-trip.step.1':
    'Activez Choisir et cochez les lieux, ou ouvrez un lieu et utilisez Copier vers un voyage sur sa fiche de détail.',
  'help.guide.copy-to-trip.step.2': 'Cliquez Copier vers un voyage dans la barre de sélection.',
  'help.guide.copy-to-trip.step.3': 'Choisissez le voyage. Le champ de recherche restreint une longue liste.',
  'help.guide.copy-to-trip.result':
    'Les lieux atterrissent dans la liste des lieux de ce voyage avec nom, description, catégorie, notes, prix, coordonnées, photo et tags. Rien ne change dans la collection.',
  'help.guide.copy-to-trip.tip.1':
    'Les lecteurs d’une liste partagée peuvent le faire aussi ; cela copie hors de la liste, cela ne la modifie pas.',
  // share-list
  'help.guide.share-list.title': 'Partager une liste avec quelqu’un',
  'help.guide.share-list.goal': 'Planifiez une liste avec d’autres personnes de ce TREK, en direct.',
  'help.guide.share-list.step.1': 'Cliquez Partager dans l’en-tête de votre liste.',
  'help.guide.share-list.step.2': 'Sélectionnez l’utilisateur et un rôle : Lecteur, Éditeur ou Admin.',
  'help.guide.share-list.step.3':
    'Cliquez Envoyer l’invitation. La personne apparaît en invitation en attente jusqu’à ce qu’elle accepte l’invitation dans sa barre des listes.',
  'help.guide.share-list.result':
    'Une fois acceptée, la liste apparaît pour elle sous Partagée et chaque changement se synchronise en direct. Les membres et leurs rôles restent modifiables dans le même dialogue.',
  'help.guide.share-list.tip.1':
    'Les lecteurs peuvent regarder, noter et copier des lieux dans leurs propres voyages. Les éditeurs ajoutent et modifient lieux et libellés. Les admins peuvent aussi supprimer.',
  'help.guide.share-list.tip.2':
    'Seul le propriétaire invite et retire des personnes ; un membre peut quitter lui-même une liste partagée.',
  // export-list
  'help.guide.export-list.title': 'Exporter une liste en fichier',
  'help.guide.export-list.goal':
    'Remettez une liste à quelqu’un sur un autre TREK, ou emportez-la dans une appli de cartes.',
  'help.guide.export-list.step.1': 'Cliquez Exporter dans l’en-tête de la liste.',
  'help.guide.export-list.step.2':
    'Choisissez Liste TREK pour un autre TREK, avec libellés et statut, ou GPX pour OsmAnd, Organic Maps, un Garmin et d’autres applis qui lisent des waypoints.',
  'help.guide.export-list.result': 'Le fichier se télécharge. Tout membre d’une liste partagée peut l’exporter.',
  'help.guide.export-list.tip.1':
    'Un lieu sans coordonnées ne peut pas être un waypoint GPX ; il est laissé de côté et TREK vous dit combien l’ont été.',
  'help.guide.export-list.tip.2':
    'Les notes, les membres et les photos envoyées restent volontairement en arrière ; ils appartiennent à ce TREK, pas à la liste.',
  // import-file
  'help.guide.import-file.title': 'Importer une liste depuis un fichier',
  'help.guide.import-file.goal':
    'Faites entrer un fichier de liste TREK ou un fichier GPX, comme nouvelle liste ou dans une que vous avez.',
  'help.guide.import-file.step.1':
    'Cliquez le bouton d’import avec la flèche d’envoi à côté de Nouvelle liste dans la barre des listes.',
  'help.guide.import-file.step.2':
    'Choisissez le fichier. TREK montre ce qu’il contient avant que quoi que ce soit n’arrive : le nom, combien de lieux et de libellés.',
  'help.guide.import-file.step.3':
    'Gardez Nouvelle liste et changez le nom si vous voulez, ou choisissez Ajouter à une liste pour mettre les lieux dans une liste que vous pouvez modifier, puis cliquez Importer.',
  'help.guide.import-file.result':
    'Vous arrivez sur la liste avec les lieux importés. Ajouter à une liste ne fait jamais qu’ajouter ; les lieux déjà là gardent leur statut, leurs notes et leurs libellés.',
  'help.guide.import-file.tip.1':
    'D’un GPX, chaque waypoint nommé devient un lieu ; les traces sont des lignes et sont laissées de côté, et l’aperçu dit combien de points cela faisait.',
  'help.guide.import-file.tip.2':
    'Un fichier qui n’est ni une liste TREK ni un GPX est refusé avec une raison ; un seul lieu illisible est ignoré, pas tout le fichier.',
  // edit-list
  'help.guide.edit-list.title': 'Modifier ou supprimer une liste',
  'help.guide.edit-list.goal':
    'Changez le nom, la couleur, la couverture, la description ou les liens d’une liste, ou retirez la liste.',
  'help.guide.edit-list.step.1': 'Cliquez Modifier dans l’en-tête de la liste. Seul le propriétaire le voit.',
  'help.guide.edit-list.step.2':
    'Changez ce que vous voulez et cliquez Enregistrer. Supprimer la liste en bas à gauche retire la liste avec tous ses lieux, après une confirmation.',
  'help.guide.edit-list.result': 'L’en-tête prend aussitôt la nouvelle couleur, la couverture et la description.',
  'help.guide.edit-list.tip.1':
    'Supprimer une liste ne peut pas être annulé. Exportez-la d’abord si vous voulez en garder une copie.',
  // all-saved
  'help.guide.all-saved.title': 'Chercher dans toute votre bibliothèque',
  'help.guide.all-saved.goal': 'Regardez d’un coup toutes les listes qui vous appartiennent.',
  'help.guide.all-saved.step.1':
    'Cliquez Tous les enregistrés dans la barre des listes. Il réunit les lieux de chaque liste que vous possédez ou copossédez.',
  'help.guide.all-saved.step.2':
    'Utilisez le champ de recherche et les filtres comme sur n’importe quelle liste ; Choisir marche ici aussi pour copier vers un voyage.',
  'help.guide.all-saved.result':
    'Une seule vue sur tous vos lieux enregistrés, sans ajout ni import, puisqu’il n’y a pas de liste unique où les mettre.',
  'help.guide.all-saved.tip.1':
    'Les libellés sont par liste, le filtre par libellé n’est donc pas proposé sur Tous les enregistrés.',

  // ── Screen: journey ───────────────────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Journal de voyage',
  'help.ctx.journey.summary':
    'Journal de voyage est votre carnet de voyage où les photos passent en premier. Chaque journal est lié à un ou plusieurs voyages et grandit jour après jour à partir d’entrées avec un récit, des photos, une humeur et la météo. Cet écran liste vos journaux ; ouvrez-en un pour écrire.',
  'help.ctx.journey.bullet.1':
    'La bannière en haut montre le journal en cours, ou le plus récent, avec ses nombres d’entrées, de photos et de lieux. Continuer à écrire l’ouvre sur aujourd’hui.',
  'help.ctx.journey.bullet.2':
    'En dessous, une carte par journal avec sa couverture, son sous-titre, ses dates et ses nombres. Cliquez une carte pour l’ouvrir.',
  'help.ctx.journey.bullet.3':
    'La dernière carte de la grille, Créer un nouveau journal, en démarre un à partir de vos voyages.',
  // create-journey
  'help.guide.create-journey.title': 'Créer un journal',
  'help.guide.create-journey.goal':
    'Commencer un carnet pour un voyage, avec les lieux du voyage déjà en attente comme suggestions.',
  'help.guide.create-journey.step.1': 'Cliquez Créer un nouveau journal, la dernière carte de la grille.',
  'help.guide.create-journey.step.2':
    'Donnez-lui un nom et, si vous voulez, un sous-titre, puis cochez les voyages auxquels il appartient. Le compteur indique combien de lieux vont arriver.',
  'help.guide.create-journey.step.3': 'Cliquez Créer un journal.',
  'help.guide.create-journey.result':
    'Le carnet s’ouvre. Chaque lieu des voyages liés se trouve dans la chronologie comme suggestion, une par jour où il figure, prête à être écrite.',
  'help.guide.create-journey.tip.1': 'D’autres voyages peuvent être liés plus tard depuis Paramètres du journal.',
  'help.guide.create-journey.tip.2':
    'Un journal sans voyage fonctionne aussi ; vous ajoutez alors les entrées à la main.',
  // open-journey
  'help.guide.open-journey.title': 'Ouvrir un journal',
  'help.guide.open-journey.goal': 'Entrer dans un carnet, et savoir où il s’ouvre.',
  'help.guide.open-journey.step.1':
    'Cliquez une carte. Chacune montre la couverture, les dates et combien d’entrées, de photos et de lieux le journal contient.',
  'help.guide.open-journey.result':
    'Un journal en cours s’ouvre sur aujourd’hui, ou sur la dernière entrée avant aujourd’hui quand rien n’est encore écrit ; un journal terminé s’ouvre au début.',
  'help.guide.open-journey.tip.1':
    'La couverture est la première photo du journal, sauf si vous en définissez une dans Paramètres du journal.',
  // continue-writing
  'help.guide.continue-writing.title': 'Continuer le journal en cours',
  'help.guide.continue-writing.goal': 'Aller directement à la page d’aujourd’hui du journal que vous vivez.',
  'help.guide.continue-writing.step.1':
    'Cliquez Continuer à écrire dans la bannière en haut. Elle montre le journal en cours, ou le plus récent quand aucun n’est en cours.',
  'help.guide.continue-writing.result':
    'Le carnet s’ouvre sur aujourd’hui, ou sur la dernière entrée avant aujourd’hui quand rien n’est encore écrit.',
  'help.guide.continue-writing.tip.1':
    'La bannière propose aussi une suggestion pour un voyage qui n’a pas encore de journal ; Ignorer masque celle-ci.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Carnet',
  'help.ctx.journey-detail.summary':
    'Un journal ouvert : la chronologie à gauche, jour par jour, et la carte à droite avec chaque entrée et les lieux des voyages liés. Tout ce qui ajoute au carnet se trouve en haut ; l’en-tête contient les nombres, Studio, l’interrupteur des suggestions et Paramètres du journal.',
  'help.ctx.journey-detail.bullet.1':
    'En-tête : couverture, titre et sous-titre, les nombres de jours, de lieux, d’entrées et de photos, et à droite Studio, l’interrupteur des suggestions et Paramètres du journal.',
  'help.ctx.journey-detail.bullet.2':
    'Barre d’outils : les onglets Chronologie et Galerie, Rechercher dans ce carnet et Ajouter une entrée.',
  'help.ctx.journey-detail.bullet.3':
    'Chronologie : une section par jour avec un + pour ajouter une entrée ce jour-là ; des cartes d’entrée avec photos, humeur, météo et récit ; des suggestions issues des voyages, dans un style plus clair, avec Écarter cette suggestion.',
  'help.ctx.journey-detail.bullet.4':
    'Carte : les entrées comme épingles, reliées par ordre de date par une ligne en pointillés, les lieux des voyages, et les traces GPX importées dans ces voyages.',
  'help.ctx.journey-detail.bullet.5':
    'Paramètres du journal : couverture, nom et sous-titre, traces sur la carte, champs de l’entrée, suggestions écartées, voyages liés, contributeurs, partage public, archivage et suppression.',
  'help.ctx.journey-detail.bullet.6':
    'Deux boutons ronds flottent sur une longue chronologie : retour en haut, et saut à la dernière entrée.',
  // add-entry
  'help.guide.add-entry.title': 'Écrire une entrée',
  'help.guide.add-entry.goal': 'Ajouter le récit d’une journée avec titre, texte, humeur et météo.',
  'help.guide.add-entry.step.1':
    'Cliquez Ajouter une entrée dans la barre d’outils, ou le + dans l’en-tête d’un jour pour commencer ce jour-là.',
  'help.guide.add-entry.step.2':
    'Donnez un nom au moment et écrivez le récit. La barre au-dessus du texte ajoute gras, italique, titres, citations, liens et listes en Markdown.',
  'help.guide.add-entry.step.3':
    'Choisissez une humeur et la météo, vérifiez la date, et épinglez un lieu si vous voulez : cherchez un lieu ou utilisez votre position actuelle.',
  'help.guide.add-entry.step.4': 'Cliquez Enregistrer.',
  'help.guide.add-entry.result':
    'L’entrée apparaît à son jour dans la chronologie et comme épingle sur la carte. Ses nombres se mettent à jour dans l’en-tête.',
  'help.guide.add-entry.tip.1': 'Écrire dans une suggestion, c’est le même éditeur, avec le lieu déjà renseigné.',
  'help.guide.add-entry.tip.2':
    'Les tags en bas sont du texte libre, pépite cachée ou meilleur repas, et la recherche les trouve.',
  // entry-photos
  'help.guide.entry-photos.title': 'Ajouter des photos et des vidéos à une entrée',
  'help.guide.entry-photos.goal': 'Mettre des images sur une journée ; la première devient la couverture de l’entrée.',
  'help.guide.entry-photos.step.1': 'Ouvrez le menu d’une entrée avec le ⋯ sur sa carte et choisissez Modifier.',
  'help.guide.entry-photos.step.2':
    'Cliquez Téléverser des photos et choisissez les fichiers. Depuis la galerie prend des images déjà dans la galerie du journal ; External photos cherche ce jour-là dans une bibliothèque Immich ou Synology connectée.',
  'help.guide.entry-photos.step.3':
    'Survolez une image pour Mettre en 1er afin de choisir la couverture, puis cliquez Enregistrer.',
  'help.guide.entry-photos.result':
    'Les photos apparaissent sur la carte et dans la galerie ; la première est la vignette partout.',
  'help.guide.entry-photos.tip.1':
    'Les vidéos vont sur une entrée de la même façon : mp4, m4v, webm ou mov jusqu’à 500 Mo, stockées telles que téléversées.',
  'help.guide.entry-photos.tip.2':
    'Les fichiers HEIC d’un iPhone sont convertis en JPEG au téléversement, ce qui supprime leurs métadonnées GPS et appareil.',
  // suggestions
  'help.guide.suggestions.title': 'Utiliser ou écarter les suggestions',
  'help.guide.suggestions.goal':
    'Transformer les lieux de vos voyages en entrées, et écarter ceux dont vous n’écrirez pas.',
  'help.guide.suggestions.step.1':
    'Une suggestion est une carte plus claire avec le nom du lieu en italique. Cliquez-la pour ouvrir l’éditeur avec le lieu et le jour déjà renseignés.',
  'help.guide.suggestions.step.2':
    'Cliquez Écarter cette suggestion sur une carte que vous n’utiliserez pas. Elle quitte la chronologie sans être supprimée, et la synchronisation du voyage ne la proposera plus.',
  'help.guide.suggestions.step.3':
    'Changement d’avis ? Paramètres du journal indique combien sont écartées, et Récupérer les suggestions écartées les ramène toutes.',
  'help.guide.suggestions.result':
    'La chronologie ne contient que ce que vous comptez écrire ; l’interrupteur de l’en-tête masque toutes les suggestions d’un coup pendant que vous lisez.',
  'help.guide.suggestions.tip.1': 'Un lieu gardé sur deux jours donne une suggestion sur chacun d’eux.',
  'help.guide.suggestions.tip.2':
    'Les suggestions ne comptent jamais dans les statistiques ; seules les entrées écrites comptent.',
  // add-on-day
  'help.guide.add-on-day.title': 'Ajouter une entrée un jour antérieur',
  'help.guide.add-on-day.goal': 'Écrire sur un jour déjà passé sans corriger la date ensuite.',
  'help.guide.add-on-day.step.1': 'Cliquez le + dans l’en-tête de ce jour.',
  'help.guide.add-on-day.step.2':
    'L’éditeur s’ouvre avec cette date renseignée. Écrivez et Enregistrer comme d’habitude.',
  'help.guide.add-on-day.result': 'L’entrée arrive directement au bon jour.',
  'help.guide.add-on-day.tip.1':
    'Dans une journée, les flèches du menu d’une entrée la déplacent plus tôt ou plus tard.',
  // pros-cons
  'help.guide.pros-cons.title': 'Ajouter un verdict',
  'help.guide.pros-cons.goal': 'Résumer une journée avec ce qui était formidable et ce qui ne l’était pas.',
  'help.guide.pros-cons.step.1':
    'Dans l’éditeur, trouvez Pour et contre sous le récit. Tapez un point dans Pour ou Contre et utilisez Ajouter un autre pour le suivant.',
  'help.guide.pros-cons.step.2': 'Enregistrer. Le verdict apparaît sur la carte sous forme de deux courtes listes.',
  'help.guide.pros-cons.result': 'Pouce levé et pouce baissé en un coup d’œil, sous le récit.',
  'help.guide.pros-cons.tip.1':
    'Un journal qui n’utilise pas les verdicts peut désactiver la section sous Champs de l’entrée dans Paramètres du journal.',
  // search-journey
  'help.guide.search-journey.title': 'Trouver quelque chose dans un long carnet',
  'help.guide.search-journey.goal': 'Atteindre l’entrée voulue sans faire défiler des semaines.',
  'help.guide.search-journey.step.1':
    'Tapez dans Rechercher dans ce carnet dans la barre d’outils. La chronologie se filtre à mesure, sur les titres, les récits, les lieux et les tags. Accents et majuscules n’ont pas d’importance.',
  'help.guide.search-journey.step.2':
    'L’interrupteur des suggestions dans l’en-tête masque les cartes non écrites pendant que vous lisez. Quand la chronologie devient longue, deux boutons ronds flottent au-dessus de son bord inférieur : retour en haut, et saut à la dernière entrée.',
  'help.guide.search-journey.result': 'Seules les entrées correspondantes restent ; videz le champ pour tout revoir.',
  'help.guide.search-journey.tip.1':
    'Un journal en cours s’ouvre sur aujourd’hui, la page du jour est donc généralement déjà visible.',
  'help.guide.search-journey.tip.2':
    'Les tags comptent aussi : chercher pépite cachée trouve chaque entrée qui porte ce tag.',
  // gallery-map
  'help.guide.gallery-map.title': 'Parcourir la galerie et la carte',
  'help.guide.gallery-map.goal': 'Voir tout le journal en images, et en lieux sur la carte.',
  'help.guide.gallery-map.step.1':
    'Passez à Galerie dans la barre d’outils : chaque photo de chaque entrée, plus les images téléversées directement dans la galerie. Cliquez-en une pour la visionneuse.',
  'help.guide.gallery-map.step.2':
    'La carte à droite montre les entrées comme épingles par ordre de date, les lieux des voyages liés et toute trace GPX importée dans ces voyages, dans la couleur qu’elle a dans le planificateur.',
  'help.guide.gallery-map.result':
    'Survolez une trace pour son nom. La ligne en pointillés entre les entrées est tracée par TREK ; une trace est l’itinéraire que vous avez réellement enregistré.',
  'help.guide.gallery-map.tip.1': 'Les traces peuvent être désactivées pour un journal sous Paramètres du journal.',
  'help.guide.gallery-map.tip.2':
    'Les photos de la galerie avec un lieu apparaissent aussi sur la carte publique, quand Galerie et Carte sont toutes deux partagées.',
  // entry-fields
  'help.guide.entry-fields.title': 'Désactiver des champs de l’entrée',
  'help.guide.entry-fields.goal': 'Limiter l’éditeur à ce que ce journal utilise.',
  'help.guide.entry-fields.step.1': 'Ouvrez Paramètres du journal depuis l’en-tête.',
  'help.guide.entry-fields.step.2': 'Sous Champs de l’entrée, désactivez Humeur, Météo ou Pour et contre.',
  'help.guide.entry-fields.result':
    'L’éditeur ne les demande plus. Rien d’écrit n’est perdu : réactiver un champ ramène les valeurs enregistrées, et un journal partagé masque les mêmes champs.',
  'help.guide.entry-fields.tip.1':
    'Les interrupteurs sont propres à chaque journal, un voyage de travail et des vacances peuvent donc différer.',
  // link-trip
  'help.guide.link-trip.title': 'Lier un autre voyage',
  'help.guide.link-trip.goal': 'Amener les lieux d’un second voyage dans le carnet comme suggestions.',
  'help.guide.link-trip.step.1': 'Ouvrez Paramètres du journal depuis l’en-tête.',
  'help.guide.link-trip.step.2': 'Sous les voyages liés, cliquez Ajouter un voyage.',
  'help.guide.link-trip.step.3': 'Choisissez le voyage.',
  'help.guide.link-trip.result':
    'Ses lieux arrivent dans la chronologie comme suggestions à leurs jours, et ses traces GPX rejoignent la carte.',
  'help.guide.link-trip.tip.1': 'Le × à côté d’un voyage lié le délie ; les entrées que vous avez écrites restent.',
  'help.guide.link-trip.tip.2':
    'Les entrées d’un jour ne comptent qu’une fois, quel que soit le nombre de voyages couvrant ce jour.',
  // share-public
  'help.guide.share-public.title': 'Partager le journal publiquement',
  'help.guide.share-public.goal': 'Donner aux personnes sans compte TREK un lien en lecture seule.',
  'help.guide.share-public.step.1': 'Ouvrez Paramètres du journal et trouvez Partage public.',
  'help.guide.share-public.step.2': 'Cliquez Créer un lien de partage.',
  'help.guide.share-public.step.3':
    'Choisissez ce que les visiteurs voient : Chronologie, Galerie et Carte sont des interrupteurs séparés. Copier met le lien dans votre presse-papiers.',
  'help.guide.share-public.result':
    'Quiconque a le lien voit les sections activées et rien d’autre ; les champs désactivés sous Champs de l’entrée y restent masqués aussi.',
  'help.guide.share-public.tip.1':
    'Les photos n’apparaissent sur la carte publique que si Galerie et Carte sont toutes deux activées ; avec Carte désactivée, leurs coordonnées sont retirées avant de quitter le serveur.',
  'help.guide.share-public.tip.2': 'Supprimez le lien au même endroit pour mettre fin au partage.',
  // contributors
  'help.guide.contributors.title': 'Écrire à plusieurs',
  'help.guide.contributors.goal': 'Laisser un compagnon de voyage ajouter ses propres entrées et photos.',
  'help.guide.contributors.step.1': 'Ouvrez Paramètres du journal et descendez jusqu’aux contributeurs.',
  'help.guide.contributors.step.2': 'Cliquez Inviter un contributeur et cherchez l’utilisateur par nom ou e-mail.',
  'help.guide.contributors.step.3': 'Choisissez un rôle et confirmez.',
  'help.guide.contributors.result':
    'Le journal apparaît dans sa liste et ses entrées portent son nom. Retirez un contributeur avec le × à côté de lui.',
  'help.guide.contributors.tip.1':
    'Les contributeurs sont pour les personnes de ce TREK. Pour tous les autres, il y a le lien public.',
  // studio
  'help.guide.studio.title': 'Mettre le journal en page comme un livre photo',
  'help.guide.studio.goal': 'Transformer le carnet en pages imprimables.',
  'help.guide.studio.step.1': 'Cliquez Studio dans l’en-tête. Le concepteur s’ouvre par-dessus le journal.',
  'help.guide.studio.step.2':
    'Le nom du journal à gauche de la barre du haut est le chemin du retour ; il vous ramène là où vous étiez.',
  'help.guide.studio.result':
    'La bande des pages à gauche, la double page sur l’établi, les propriétés à droite. Auto layout construit le livre à partir de vos entrées ; Export produit un PDF prêt à imprimer.',
  'help.guide.studio.tip.1':
    'Studio a besoin d’une fenêtre d’au moins 1024 px de large et n’est pas proposé sur téléphone.',
  'help.guide.studio.tip.2':
    'Le livre hérite de l’accès du journal : qui peut lire le journal peut l’ouvrir, qui peut le modifier peut enregistrer.',
  // archive-journey
  'help.guide.archive-journey.title': 'Archiver ou supprimer un journal',
  'help.guide.archive-journey.goal': 'Clore un journal terminé, ou en retirer un pour de bon.',
  'help.guide.archive-journey.step.1': 'Ouvrez Paramètres du journal.',
  'help.guide.archive-journey.step.2':
    'Tout en bas, Archiver le journal le termine et le marque archivé ; Restaurer le journal le ramène. Supprimer le retire avec toutes ses entrées et photos, après une confirmation.',
  'help.guide.archive-journey.result':
    'Un journal archivé reste lisible et partageable ; il ne s’ouvre simplement plus sur aujourd’hui.',
  'help.guide.archive-journey.tip.1':
    'La suppression est irréversible, et elle ne touche pas aux voyages auxquels le journal était lié.',
  'help.guide.archive-journey.tip.2':
    'La couverture, le nom et le sous-titre se trouvent dans le même dialogue, en haut.',

  // ── Screen: journey-studio ────────────────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio met en page un journal de voyage sous forme de livre photo imprimable. Il s’ouvre par-dessus le journal : la liste des pages et le contenu à gauche, la double page sur laquelle vous travaillez au milieu, ses propriétés à droite. Auto layout construit un premier brouillon à partir de vos entrées ; tout ce qui suit vous appartient, à déplacer, recadrer et restyler, avec une annulation pour chaque étape.',
  'help.ctx.journey-studio.bullet.1':
    'Barre du haut : Back to the journey, Book view, Undo et Redo, Page format, Auto layout et Export. La marque Enregistré à côté du titre vous dit quand le livre est sauvegardé.',
  'help.ctx.journey-studio.bullet.2':
    'Colonne de gauche en cinq sections : Pages, Content (les photos et les entrées du journal), Elements (texte, formes, lignes, grilles, cadres, icônes), Voyage (cartes, pays, drapeaux et repères construits à partir du journal) et Layouts.',
  'help.ctx.journey-studio.bullet.3':
    'Plan de travail : la double page en cours avec son fond perdu et sa marge de sécurité, la barre de zoom en dessous, Fit to view, et Télécharger cette double page à droite.',
  'help.ctx.journey-studio.bullet.4':
    'Properties à droite : position et taille, recadrage et point focal, remplissage ou ajustement, look, coins, cadre, ordre d’empilement et verrouillage de ce qui est sélectionné ; numéros de page et document quand rien ne l’est.',
  'help.ctx.journey-studio.bullet.5':
    'Le livre a la forme d’un livre relié : couverture, une première page seule, les doubles pages, une dernière page seule et la quatrième de couverture. Les numéros de page comptent à partir de la première page et s’impriment tels qu’affichés.',
  'help.ctx.journey-studio.bullet.6':
    'Plusieurs personnes peuvent concevoir en même temps : chacun voit les pointeurs des autres avec leur nom, et un enregistrement sur une version que quelqu’un d’autre a modifiée revient comme un conflit au lieu d’écraser son travail.',
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Construire le livre automatiquement',
  'help.guide.studio-auto-layout.goal':
    'Obtenez en un clic un premier brouillon complet à partir des entrées et des photos du journal.',
  'help.guide.studio-auto-layout.step.1': 'Cliquez sur Auto layout dans la barre du haut.',
  'help.guide.studio-auto-layout.step.2':
    'Choisissez Tout le livre : cela remplace chaque page en conservant votre titre et la configuration de page. Cette page ne reconstruit que celle à l’écran, et n’est proposée que sur une double page issue d’une entrée.',
  'help.guide.studio-auto-layout.step.3':
    'Parcourez la liste des pages. Undo reprend toute la mise en page si vous préfériez ce que vous aviez.',
  'help.guide.studio-auto-layout.result':
    'Une double page par entrée, dans l’ordre, avec ses photos, son titre et son récit placés pour vous. Chaque élément continue de suivre son entrée jusqu’à ce que vous le modifiiez.',
  'help.guide.studio-auto-layout.tip.1':
    'Les deux options sont des étapes d’annulation ordinaires, essayez-les librement.',
  'help.guide.studio-auto-layout.tip.2':
    'Un élément qu’Auto layout a lié à une entrée suit les modifications de cette entrée jusqu’à ce que vous y touchiez dans Properties ; cela rompt le lien.',
  // studio-pages
  'help.guide.studio-pages.title': 'Ajouter, déplacer et retirer des doubles pages',
  'help.guide.studio-pages.goal': 'Façonnez le livre page par page.',
  'help.guide.studio-pages.step.1':
    'Ouvrez Pages dans la colonne. Les vignettes sont le livre dans l’ordre : couverture, première page, doubles pages, dernière page, quatrième de couverture.',
  'help.guide.studio-pages.step.2':
    'Ajouter une page en bas en place une nouvelle avant la dernière page ; le + entre deux vignettes en insère une juste là.',
  'help.guide.studio-pages.step.3':
    'Survolez une vignette pour ses actions : Déplacer avant, Déplacer après, Dupliquer la page et Supprimer la page. Cliquez sur une vignette pour ouvrir cette double page sur le plan de travail.',
  'help.guide.studio-pages.result':
    'La couverture, la première et la dernière page et la quatrième de couverture restent où elles sont ; les nouvelles doubles pages atterrissent toujours entre elles.',
  'help.guide.studio-pages.tip.1':
    'Book view dans la barre du haut montre tout le livre en feuilles, tel qu’il sera relié.',
  'help.guide.studio-pages.tip.2':
    'Les numéros de page s’activent sous Document dans Properties, sans rien de sélectionné.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Appliquer une mise en page à une double page',
  'help.guide.studio-layouts.goal': 'Donnez à une double page un agencement tout prêt de cadres photo et texte.',
  'help.guide.studio-layouts.step.1':
    'Ouvrez Layouts dans la colonne. Treize mises en page de double page, et un jeu à part pour la couverture, le dos et les pages seules.',
  'help.guide.studio-layouts.step.2':
    'Cliquez sur l’une d’elles. La double page sur le plan de travail prend ses cadres ; les photos et le texte que vous aviez déjà y sont versés.',
  'help.guide.studio-layouts.result':
    'Les cadres vides attendent du contenu : glissez une photo depuis Content sur l’un d’eux, ou utilisez Add to this page.',
  'help.guide.studio-layouts.tip.1': 'Une mise en page est une étape d’annulation comme une autre.',
  // studio-content
  'help.guide.studio-content.title': 'Mettre des photos et des entrées sur une page',
  'help.guide.studio-content.goal': 'Amenez le matériel propre du journal sur la double page.',
  'help.guide.studio-content.step.1':
    'Ouvrez Content dans la colonne. Photos liste chaque image du journal ; Entries liste les entrées avec leur texte.',
  'help.guide.studio-content.step.2':
    'Glissez une photo sur la double page, ou sur un cadre vide, ou cliquez sur Add to this page en dessous. Téléverser des photos ajoute des images qui ne sont pas encore dans le journal.',
  'help.guide.studio-content.step.3':
    'Sous une entrée, Title, Story et Place posent ce texte sur la page comme élément texte ; Date et les coordonnées arrivent comme repères, et les photos de l’entrée sont listées juste là.',
  'help.guide.studio-content.result':
    'Une photo déposée devient un élément photo ; le texte continue de suivre l’entrée jusqu’à ce que vous le modifiiez.',
  'help.guide.studio-content.tip.1': 'Le champ de recherche en haut de Content filtre les deux listes.',
  'help.guide.studio-content.tip.2':
    'Déposer un fichier depuis votre bureau sur le plan de travail le téléverse et le place en une fois.',
  // studio-elements
  'help.guide.studio-elements.title': 'Ajouter du texte, des formes et des icônes',
  'help.guide.studio-elements.goal': 'Décorez une double page au-delà des photos et des récits.',
  'help.guide.studio-elements.step.1': 'Ouvrez Elements dans la colonne.',
  'help.guide.studio-elements.step.2':
    'Cliquez sur un style de texte pour un titre ou une légende, une forme, une ligne, une grille, un cadre vide avec un style de cadre, ou une icône de la bibliothèque consultable. Chacun atterrit au milieu de la double page, prêt à être déplacé.',
  'help.guide.studio-elements.result':
    'Double-cliquez sur un élément texte pour y écrire ; Properties contient police, graisse, taille, espacement et alignement.',
  'help.guide.studio-elements.tip.1': 'Les cadres sont des emplacements photo vides : déposez-y une image plus tard.',
  // studio-travel
  'help.guide.studio-travel.title': 'Ajouter une carte, des drapeaux et des chiffres',
  'help.guide.studio-travel.goal': 'Transformez le voyage lui-même en chiffres sur la page.',
  'help.guide.studio-travel.step.1': 'Ouvrez Voyage dans la colonne.',
  'help.guide.studio-travel.step.2':
    'Choisissez quoi ajouter : une carte de l’itinéraire des entrées, des contours de pays, une liste ou une grille des pays, des drapeaux, un repère de date, de jour ou de distance, ou un résumé de tout le voyage. Chacun est construit à partir des données du journal et se rafraîchit avec elles.',
  'help.guide.studio-travel.result':
    'L’élément apparaît sur la double page ; Properties règle son style, et pour la carte sa zone.',
  'help.guide.studio-travel.tip.1':
    'Les repères suivent l’entrée dont la double page est issue, donc un repère de date sur une double page mise en page automatiquement montre déjà ce jour-là.',
  // studio-properties
  'help.guide.studio-properties.title': 'Modifier ce que vous avez sélectionné',
  'help.guide.studio-properties.goal': 'Déplacez, recadrez, stylisez et empilez un élément avec l’inspecteur.',
  'help.guide.studio-properties.step.1':
    'Cliquez sur un élément de la double page. Des poignées apparaissent pour la taille et la rotation ; faites-le glisser pour le déplacer.',
  'help.guide.studio-properties.step.2':
    'Properties à droite suit la sélection : position et taille, Crop avec le point focal qui décide de ce qui reste dans le cadre, Fill ou Fit, les filtres Look, le rayon Corner, le style Cadre, l’ordre d’empilement et Lock.',
  'help.guide.studio-properties.step.3':
    'Dupliquer et Delete sont en haut de l’inspecteur ; Undo dans la barre du haut annule tout cela.',
  'help.guide.studio-properties.result':
    'Un élément verrouillé ne peut plus être saisi sur la page, ce qui protège une mise en page terminée pendant que vous travaillez autour.',
  'help.guide.studio-properties.tip.1':
    'Maj-clic sélectionne plusieurs éléments ; l’inspecteur les modifie alors ensemble.',
  'help.guide.studio-properties.tip.2':
    'Modifier un élément placé par Auto layout rompt son lien avec l’entrée ; il cesse de suivre les changements ultérieurs de cette entrée.',
  // studio-format
  'help.guide.studio-format.title': 'Choisir le format de page',
  'help.guide.studio-format.goal':
    'Fixez la taille à laquelle le livre sera imprimé, avant que la mise en page n’en dépende.',
  'help.guide.studio-format.step.1': 'Cliquez sur Page format dans la barre du haut.',
  'help.guide.studio-format.step.2':
    'Choisissez Square 21 × 21 cm, Square 30 × 30 cm, A4 ou A5 landscape ou portrait, ou saisissez une largeur et une hauteur libres en millimètres. Fond perdu et Sécurité sont juste en dessous.',
  'help.guide.studio-format.result':
    'Chaque double page est dessinée à cette taille, avec 3 mm de fond perdu et 5 mm de marge de sécurité par défaut.',
  'help.guide.studio-format.tip.1':
    'Changez d’abord le format, puis lancez Auto layout ; la mise en page est construite pour la taille qu’elle trouve.',
  'help.guide.studio-format.tip.2':
    'Demandez à votre imprimeur ses valeurs de fond perdu et de sécurité, et saisissez-les.',
  // studio-export
  'help.guide.studio-export.title': 'Exporter le livre en PDF',
  'help.guide.studio-export.goal': 'Obtenez un fichier prêt à imprimer, ou un fichier à lire à l’écran.',
  'help.guide.studio-export.step.1': 'Cliquez sur Export dans la barre du haut.',
  'help.guide.studio-export.step.2':
    'Choisissez Pages simples, une page par feuille dans l’ordre de lecture, ce que veut un imprimeur, ou Doubles pages, deux pages à la fois comme le livre s’ouvre. Traits de coupe ajoute le fond perdu sur chaque bord et marque où couper.',
  'help.guide.studio-export.step.3':
    'Cliquez sur Aperçu avant impression. Votre navigateur ouvre les pages et Enregistrer en PDF en fait le fichier.',
  'help.guide.studio-export.result':
    'Un PDF avec autant de feuilles que le dialogue l’a annoncé, au format de page que vous avez défini.',
  'help.guide.studio-export.tip.1': 'Créer le PDF n’est possible que sur ordinateur, comme Studio lui-même.',
  'help.guide.studio-export.tip.2':
    'Pour une épreuve, exportez Doubles pages sans traits de coupe ; pour l’imprimerie, Pages simples avec.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Réutiliser une double page dans un autre livre',
  'help.guide.studio-spread-file.goal': 'Emportez un design qui vous plaît du livre d’un journal vers un autre.',
  'help.guide.studio-spread-file.step.1':
    'Avec la double page sur le plan de travail, cliquez sur Télécharger cette double page à l’extrémité droite de la barre de zoom. Le fichier contient le design, pas les photographies.',
  'help.guide.studio-spread-file.step.2':
    'Dans l’autre livre, ouvrez Pages et cliquez sur Importer à côté d’Ajouter une page, puis choisissez le fichier.',
  'help.guide.studio-spread-file.result':
    'La double page arrive avec ses cadres et ses styles de texte ; déposez les photos du nouveau journal dans les cadres.',
  'help.guide.studio-spread-file.tip.1': 'Un fichier qui n’est pas un design de double page est refusé avec un motif.',

  // ── Screen: settings (all tabs) ───────────────────────────────────────────────────────
  'help.ctx.settings.title': 'Paramètres',
  'help.ctx.settings.summary':
    'Vos réglages personnels, un onglet par sujet dans la barre latérale à gauche. La plupart des interrupteurs s’appliquent dès que vous les basculez ; un formulaire avec un bouton Enregistrer en bas l’attend. Rien ici ne change le TREK de quelqu’un d’autre.',
  'help.ctx.settings.bullet.1':
    'Barre latérale à gauche : Affichage, Appearance, Carte, Notifications, Intégrations, Offline et Compte. Modules apparaît dès qu’un module est installé, À propos sur un TREK auto-hébergé.',
  'help.ctx.settings.bullet.2':
    'Affichage, c’est la langue, les unités, la devise et ce sur quoi l’application s’ouvre ; Appearance, c’est le thème, les couleurs, la taille du texte et les widgets du tableau de bord.',
  'help.ctx.settings.bullet.3':
    'Carte choisit le moteur de rendu et son style ; Notifications les canaux qui vous joignent ; Intégrations les photothèques, les clés API et MCP ; Offline ce que l’application garde sur cet appareil.',
  'help.ctx.settings.bullet.4':
    'Compte contient votre profil, votre mot de passe, l’authentification à deux facteurs, les passkeys et la suppression de votre compte.',
  'help.ctx.settings-display.title': 'Affichage',
  'help.ctx.settings-display.summary':
    'Langue, unités et devise, le comportement de la carte et des réservations, et ce sur quoi TREK s’ouvre. Chaque changement ici s’applique aussitôt.',
  'help.ctx.settings-display.bullet.1':
    'Language & region : la langue de l’interface, le format de l’heure, la devise d’affichage, et les unités de distance et de température.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map : les itinéraires de réservation toujours sur la carte, la pastille Explorer les lieux, l’optimisation de l’itinéraire depuis votre hébergement, les codes de réservation masqués et les itinéraires de réservation étiquetés.',
  'help.ctx.settings-display.bullet.3':
    'Démarrage : si TREK s’ouvre sur le tableau de bord ou sur le voyage en cours, et quel onglet d’un voyage vient en premier.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'L’apparence de TREK sur ce compte : clair ou sombre, la couleur d’accent, le verre et le mouvement, la taille du texte, et les widgets que le tableau de bord affiche. Tout s’applique en direct, sur chaque appareil où vous vous connectez.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme : Clair, Sombre ou Auto, et le Color scheme avec un Custom accent à vous.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability : Transparency, Reduce motion, Density et Text size, avec des tailles avancées par niveau.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets : un interrupteur par widget, séparément pour Desktop et Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults, en bas, remet tout en place.',
  'help.ctx.settings-map.title': 'Carte',
  'help.ctx.settings-map.summary':
    'Quel moteur dessine les cartes et dans quel style. Leaflet est la carte raster classique, MapLibre dessine des tuiles vectorielles sans aucun jeton, Mapbox ajoute bâtiments 3D et relief avec votre propre jeton.',
  'help.ctx.settings-map.bullet.1':
    'Fournisseur de carte : Leaflet, MapLibre ou Mapbox, chacun avec une ligne sur ce qu’il lui faut.',
  'help.ctx.settings-map.bullet.2':
    'Style de carte et Modèle de carte : l’aspect des tuiles, plus le jeton ou la clé qu’un fournisseur demande.',
  'help.ctx.settings-map.bullet.3':
    'Mode haute qualité pour l’anticrénelage et la projection en globe ; Enregistrer la carte écrit le choix.',
  'help.ctx.settings-notifications.title': 'Notifications',
  'help.ctx.settings-notifications.summary':
    'Où TREK vous joint en dehors de l’application : un sujet ntfy, un webhook ou un canal fourni par un module. Sous les canaux, une ligne par événement décide de ce qui va où.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy : le sujet, un serveur à vous en option et un jeton d’accès en option, avec Tester pour en envoyer un tout de suite.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook : une URL qui reçoit chaque événement en JSON, avec Tester.',
  'help.ctx.settings-notifications.bullet.3':
    'Les lignes de préférences : par événement, quel canal est actif. Les canaux de modules affichent Configurer tant qu’ils ne sont pas configurés.',
  'help.ctx.settings-integrations.title': 'Intégrations',
  'help.ctx.settings-integrations.summary':
    'Tout ce qui se connecte à TREK de l’extérieur : les photothèques pour le journal, les clés API pour les scripts, et le point de terminaison MCP avec ses tokens et ses clients OAuth pour les assistants IA.',
  'help.ctx.settings-integrations.bullet.1':
    'Fournisseurs de photos : Immich et Synology Photos, chacun avec son URL et sa clé, Tester la connexion et Enregistrer.',
  'help.ctx.settings-integrations.bullet.2':
    'Clés API : des clés personnelles pour les scripts et autres outils qui appellent l’API TREK en votre nom.',
  'help.ctx.settings-integrations.bullet.3':
    'Configuration MCP : le point de terminaison, une configuration de client prête à copier, et les tokens API.',
  'help.ctx.settings-integrations.bullet.4':
    'Clients OAuth 2.1 : les applications qui se connectent via TREK, avec URIs de redirection, portées autorisées, clients machine et sessions actives.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'Ce que TREK garde sur cet appareil pour qu’un voyage s’ouvre encore sans connexion, et ce qui se passe quand un changement fait hors ligne entre en collision avec un autre fait ailleurs.',
  'help.ctx.settings-offline.bullet.1':
    'Mode hors ligne : Forcer le mode hors ligne fait se comporter l’application comme si le réseau avait disparu, pour tester ou sur une connexion facturée au volume.',
  'help.ctx.settings-offline.bullet.2':
    'Préparer le mode hors ligne : Télécharger pour une utilisation hors ligne récupère vos voyages et leurs tuiles de carte maintenant.',
  'help.ctx.settings-offline.bullet.3':
    'Que stocker hors ligne : les tuiles de carte, actives ou non, et un interrupteur par voyage.',
  'help.ctx.settings-offline.bullet.4':
    'Conflits de synchronisation et Cache hors ligne : la stratégie en cas de collision, le nombre de changements en attente et en échec, Resynchroniser maintenant et Vider le cache.',
  'help.ctx.settings-account.title': 'Compte',
  'help.ctx.settings-account.summary':
    'Qui vous êtes sur ce TREK et comment vous vous connectez : profil et avatar, mot de passe, authentification à deux facteurs, passkeys, et tout en bas la suppression du compte.',
  'help.ctx.settings-account.bullet.1':
    'Profil : nom d’utilisateur, e-mail et avatar, enregistrés avec Enregistrer le profil.',
  'help.ctx.settings-account.bullet.2':
    'Changer le mot de passe : mot de passe actuel, nouveau mot de passe deux fois, Mettre à jour le mot de passe.',
  'help.ctx.settings-account.bullet.3':
    'Authentification à deux facteurs (2FA) avec une application d’authentification et des codes de secours ; Passkeys pour se connecter sans mot de passe.',
  'help.ctx.settings-account.bullet.4':
    'Supprimer le compte, en bas, derrière une confirmation. Le dernier admin ne peut pas se supprimer lui-même.',
  // language-region
  'help.guide.language-region.title': 'Régler la langue, les unités et la devise',
  'help.guide.language-region.goal': 'Faites parler TREK dans votre langue et compter comme vous.',
  'help.guide.language-region.step.1':
    'Choisissez la langue de l’interface dans Language & region. TREK change aussitôt, sur chaque appareil où vous vous connectez.',
  'help.guide.language-region.step.2':
    'En dessous, choisissez le format de l’heure, la devise d’affichage, et les unités de distance et de température.',
  'help.guide.language-region.result':
    'Dates, distances et montants se lisent comme vous l’attendez ; la devise propre à un voyage reste affichée à côté des montants convertis.',
  'help.guide.language-region.tip.1':
    'La devise d’affichage sert aux totaux entre voyages ; chaque voyage garde la devise que vous lui avez donnée.',
  'help.guide.language-region.tip.2': 'La langue fixe aussi les noms des jours et des mois dans Vacay et le journal.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Régler le comportement de la carte et des réservations',
  'help.guide.travel-map-prefs.goal': 'Décidez ce que la carte du voyage affiche par défaut.',
  'help.guide.travel-map-prefs.step.1':
    "Dans Travel & map, Toujours afficher les itinéraires de réservation garde vols et trains sur la carte même quand leur jour n’est pas ouvert ; Explorer les lieux sur la carte affiche la pastille pour trouver des lieux ; Optimiser l'itinéraire depuis l'hébergement fait partir l’itinéraire de là où vous dormez.",
  'help.guide.travel-map-prefs.step.2':
    'Masquer les codes de réservation cache les numéros de confirmation jusqu’au survol ; Étiquettes des itinéraires écrit le nom de la réservation le long de son itinéraire.',
  'help.guide.travel-map-prefs.result':
    'La carte du voyage suit ces réglages sur chaque voyage, jusqu’à ce que vous les rebasculiez.',
  'help.guide.travel-map-prefs.tip.1':
    'Ces réglages sont par compte, pas par voyage. Les membres d’un voyage partagé voient chacun leurs propres choix.',
  // startup
  'help.guide.startup.title': 'Choisir ce sur quoi TREK s’ouvre',
  'help.guide.startup.goal': 'Arrivez là où vous travaillez le plus, pas sur le tableau de bord à chaque fois.',
  'help.guide.startup.step.1': 'Sous Démarrage, réglez Page de démarrage sur Tableau de bord ou Voyage en cours.',
  'help.guide.startup.step.2':
    'Onglet de démarrage choisit quel onglet d’un voyage vient en premier quand vous en ouvrez un.',
  'help.guide.startup.result': 'La prochaine connexion et le prochain appui sur le logo y mènent directement.',
  'help.guide.startup.tip.1':
    'Voyage en cours désigne le voyage en route aujourd’hui, ou le prochain s’il n’y en a aucun.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Régler le thème et la couleur d’accent',
  'help.guide.theme-scheme.goal':
    'Rendez TREK clair, sombre ou fidèle à votre appareil, dans la couleur qui vous plaît.',
  'help.guide.theme-scheme.step.1': 'Sous Theme, choisissez Clair, Sombre ou Auto. Auto suit votre appareil.',
  'help.guide.theme-scheme.step.2':
    'Choisissez un Color scheme : Default, High contrast, Indigo, Teal, Rose, Amber, Violet ou Custom.',
  'help.guide.theme-scheme.step.3':
    'Avec Custom, choisissez un accent parmi les préréglages ou saisissez le vôtre. Un contrôle de contraste à côté dit si le texte reste lisible dessus.',
  'help.guide.theme-scheme.result':
    'Boutons, liens et surlignages prennent l’accent partout, sur chaque appareil où vous vous connectez.',
  'help.guide.theme-scheme.tip.1':
    'La barre du haut a aussi un interrupteur rapide clair ou sombre ; il règle le même thème.',
  'help.guide.theme-scheme.tip.2': 'High contrast est le schéma à choisir quand le défaut paraît trop doux.',
  // readability
  'help.guide.readability.title': 'Ajuster la lisibilité et la taille du texte',
  'help.guide.readability.goal': 'Moins de verre, moins de mouvement, plus d’espace ou des caractères plus grands.',
  'help.guide.readability.step.1':
    'Sous Readability, Transparency passe les panneaux de verre en surfaces opaques, Reduce motion réduit les animations au minimum, et Density choisit Comfortable ou Compact.',
  'help.guide.readability.step.2':
    'Text size met Everything à l’échelle d’un coup ; Advanced text sizes laisse titres, sous-titres, corps et légendes différer.',
  'help.guide.readability.result':
    'Toute l’application suit aussitôt, y compris les panneaux de la carte et le journal.',
  'help.guide.readability.tip.1': 'Reduce motion suit aussi le réglage de votre système quand vous n’y touchez pas.',
  'help.guide.readability.tip.2':
    'La taille du texte passe par les niveaux typographiques, donc rien n’est coupé ; une taille qui ne tient plus passe à la ligne.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Choisir les widgets du tableau de bord',
  'help.guide.dashboard-widgets.goal':
    'N’affichez que les widgets que vous utilisez, séparément sur l’ordinateur et sur le téléphone.',
  'help.guide.dashboard-widgets.step.1':
    'Sous Dashboard widgets, activez ou désactivez chaque widget pour Desktop et pour Mobile : la barre latérale droite dans son ensemble, la devise, les collections, les fuseaux horaires, les réservations à venir, les pays de l’Atlas et les chiffres de voyage.',
  'help.guide.dashboard-widgets.step.2': 'Reset to defaults, en bas, ramène tout l’onglet à son état de livraison.',
  'help.guide.dashboard-widgets.result':
    'Le tableau de bord se réorganise aussitôt ; sans la barre latérale droite, il se centre.',
  'help.guide.dashboard-widgets.tip.1':
    'Les widgets d’un module n’apparaissent que tant que l’admin a ce module activé.',
  'help.guide.dashboard-widgets.tip.2':
    'Le tableau de bord lui-même retient votre vue en grille ou en liste et l’ordre de tri par appareil.',
  // map-provider
  'help.guide.map-provider.title': 'Choisir le moteur et le style de carte',
  'help.guide.map-provider.goal': 'Passez de la carte classique aux tuiles vectorielles ou à la carte 3D de Mapbox.',
  'help.guide.map-provider.step.1':
    'Sous Fournisseur de carte, choisissez Leaflet pour la carte 2D classique avec n’importe quelles tuiles raster, MapLibre pour les tuiles vectorielles OpenFreeMap sans jeton, ou Mapbox pour des tuiles vectorielles avec bâtiments 3D et relief.',
  'help.guide.map-provider.step.2':
    "Choisissez un Style de carte ou un Modèle de carte pour l’aspect. Mapbox demande un Jeton d'accès Mapbox, certains styles raster une Clé d'API CARTO ; le lien à côté du champ mène là où en obtenir.",
  'help.guide.map-provider.step.3':
    'Mode haute qualité ajoute l’anticrénelage et la projection en globe. Cliquez sur Enregistrer la carte.',
  'help.guide.map-provider.result':
    'Chaque carte de TREK, voyages, Atlas, Collections et journal, est dessinée par le moteur que vous avez choisi.',
  'help.guide.map-provider.tip.1':
    'Sans jeton, Mapbox se rabat sur la carte par défaut plutôt que de ne rien afficher.',
  'help.guide.map-provider.tip.2':
    'Les tuiles de carte que vous stockez hors ligne viennent du fournisseur actif au moment du téléchargement.',
  // notification-channels
  'help.guide.notification-channels.title': 'Régler où les notifications vous joignent',
  'help.guide.notification-channels.goal':
    'Recevez les rappels de voyage et les événements de collaboration sur votre téléphone ou dans un autre outil.',
  'help.guide.notification-channels.step.1':
    "Sous Notifications, renseignez un Sujet Ntfy ; ajoutez votre propre URL du serveur Ntfy (optionnel) et un Jeton d'accès (optionnel) si vous en faites tourner un. Tester envoie un message tout de suite.",
  'help.guide.notification-channels.step.2':
    'Ou donnez une URL du webhook qui reçoit chaque événement en JSON, et testez-la de la même façon avec Tester.',
  'help.guide.notification-channels.step.3':
    'Dans les lignes en dessous, activez ou désactivez chaque événement par canal. Un canal de module affiche Configurer tant qu’il n’est pas configuré dans les paramètres du module ; Envoyer un test en essaie un.',
  'help.guide.notification-channels.result':
    'Les événements partent par les canaux actifs. La cloche de la barre du haut continue de les afficher dans l’application quoi qu’il arrive.',
  'help.guide.notification-channels.tip.1':
    'Les préférences par voyage vivent sur le voyage lui-même, dans ses paramètres de notification.',
  'help.guide.notification-channels.tip.2':
    'L’admin peut préremplir un serveur ntfy par défaut pour tout le monde ; vous choisissez quand même votre propre sujet.',
  // photo-providers
  'help.guide.photo-providers.title': 'Connecter une photothèque',
  'help.guide.photo-providers.goal': 'Laissez le journal tirer les photos du jour depuis Immich ou Synology Photos.',
  'help.guide.photo-providers.step.1':
    'Sous Intégrations, trouvez la section du fournisseur et saisissez son URL et sa clé API. Immich propose aussi de renvoyer les envois du journal dans la photothèque.',
  'help.guide.photo-providers.step.2': 'Cliquez sur Tester la connexion, puis sur Enregistrer.',
  'help.guide.photo-providers.result':
    'L’onglet External photos de l’éditeur d’entrée cherche dans la photothèque connectée le jour de l’entrée, les plus proches du lieu de l’entrée en premier.',
  'help.guide.photo-providers.tip.1':
    'La connexion est à vous : les autres membres d’un journal connectent leurs propres photothèques.',
  'help.guide.photo-providers.tip.2':
    'Un fournisseur sans données GPS dans ses photos fonctionne quand même ; la liste est alors dans l’ordre chronologique.',
  // api-keys
  'help.guide.api-keys.title': 'Créer une clé API',
  'help.guide.api-keys.goal': 'Laissez un script ou un autre outil appeler l’API TREK en votre nom.',
  'help.guide.api-keys.step.1':
    'Sous Clés API, cliquez sur Créer une clé et donnez-lui un nom qui dit où elle sera utilisée.',
  'help.guide.api-keys.step.2':
    'Copiez la clé depuis la boîte de dialogue : elle n’est affichée qu’une fois. Supprimez une clé de la liste quand l’outil n’en a plus besoin.',
  'help.guide.api-keys.result':
    'Les requêtes avec cette clé agissent avec vos permissions ; la liste montre quand chaque clé a été créée et utilisée pour la dernière fois.',
  'help.guide.api-keys.tip.1': 'Une clé par outil rend la révocation indolore.',
  'help.guide.api-keys.tip.2':
    'Pour un assistant IA, utilisez plutôt MCP avec OAuth ; les clés API sont pour les clients HTTP simples.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Connecter un assistant IA via MCP',
  'help.guide.mcp-oauth.goal': 'Donnez à Claude, à un IDE ou à un autre client MCP l’accès à vos voyages.',
  'help.guide.mcp-oauth.step.1':
    'Sous Configuration MCP, copiez le Point de terminaison MCP, ou toute la Configuration du client pour un client qui prend un extrait JSON.',
  'help.guide.mcp-oauth.step.2':
    'Les clients qui se connectent via le navigateur utilisent OAuth 2.1 : Nouveau client sous Clients OAuth 2.1, avec ses URIs de redirection, les Portées autorisées et, pour un serveur sans navigateur, Client machine.',
  'help.guide.mcp-oauth.step.3':
    'Renouveler le secret et Supprimer le client sont sur chaque client ; Sessions OAuth actives liste ce qui est connecté et vous laisse le révoquer. Tokens API avec Créer un token est l’ancienne voie d’entrée.',
  'help.guide.mcp-oauth.result':
    'Le client peut lire et modifier ce que ses portées permettent, en votre nom, et chaque action apparaît sous votre nom.',
  'help.guide.mcp-oauth.tip.1':
    'Les portées sont le filet de sécurité : ne donnez à un client que la portée de lecture tant qu’il n’a pas besoin de plus.',
  'help.guide.mcp-oauth.tip.2': 'L’admin peut désactiver MCP pour toute l’instance ; cette section n’est alors pas là.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Emporter des voyages hors ligne',
  'help.guide.offline-prepare.goal':
    'Ayez vos voyages et leurs cartes sur cet appareil avant que la connexion ne tombe.',
  'help.guide.offline-prepare.step.1':
    'Sous Que stocker hors ligne, laissez Stocker les tuiles de carte hors ligne actif et activez les voyages que vous voulez sur cet appareil.',
  'help.guide.offline-prepare.step.2':
    'Cliquez sur Télécharger pour une utilisation hors ligne sous Préparer le mode hors ligne. Cela récupère les voyages et les tuiles autour de leurs lieux.',
  'help.guide.offline-prepare.step.3':
    'Forcer le mode hors ligne sous Mode hors ligne vous laisse vérifier que tout est là avant de partir.',
  'help.guide.offline-prepare.result':
    'Les voyages s’ouvrent sans connexion ; les changements que vous faites attendent dans une file et partent à la reconnexion.',
  'help.guide.offline-prepare.tip.1':
    'Les tuiles prennent le plus de place : la section Cache hors ligne montre ce qui est stocké, par voyage.',
  'help.guide.offline-prepare.tip.2':
    'Installez TREK comme application depuis le navigateur pour le démarrage hors ligne le plus fluide.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Décider qui gagne en cas de conflit de synchronisation',
  'help.guide.offline-conflicts.goal':
    'Choisissez comment TREK tranche entre un changement fait hors ligne et un autre fait ailleurs.',
  'help.guide.offline-conflicts.step.1':
    'Sous Conflits de synchronisation, choisissez Me demander à chaque fois, Toujours conserver ma version ou Toujours conserver la version du serveur.',
  'help.guide.offline-conflicts.step.2':
    'Cache hors ligne montre les voyages, les changements en attente et en échec et les conflits ; Resynchroniser maintenant pousse la file, Vider le cache vide l’appareil.',
  'help.guide.offline-conflicts.result':
    'Avec Me demander, un conflit montre les deux versions et vous laisse choisir ; avec les deux autres, il est tranché en silence.',
  'help.guide.offline-conflicts.tip.1':
    'Vider le cache ne retire que la copie sur cet appareil ; rien n’est touché sur le serveur.',
  // profile
  'help.guide.profile.title': 'Modifier votre profil',
  'help.guide.profile.goal': 'Mettez à jour votre nom, votre e-mail et votre photo.',
  'help.guide.profile.step.1':
    "Sous Compte, modifiez Nom d'utilisateur et E-mail. L’avatar accepte un envoi à vous ; retirez-le pour revenir aux initiales.",
  'help.guide.profile.step.2': 'Cliquez sur Enregistrer le profil.',
  'help.guide.profile.result':
    'Votre nom et votre photo se mettent à jour partout d’un coup, y compris sur les voyages que vous partagez.',
  'help.guide.profile.tip.1': 'Un compte qui se connecte via OIDC l’indique ici ; l’e-mail vient alors du fournisseur.',
  // password
  'help.guide.password.title': 'Changer votre mot de passe',
  'help.guide.password.goal': 'Définissez un nouveau mot de passe.',
  'help.guide.password.step.1':
    'Sous Changer le mot de passe, saisissez votre mot de passe actuel, puis le nouveau deux fois.',
  'help.guide.password.step.2': 'Cliquez sur Mettre à jour le mot de passe.',
  'help.guide.password.result':
    'Le nouveau mot de passe vaut dès la prochaine connexion ; les autres sessions restent connectées.',
  'help.guide.password.tip.1': 'Un compte qui se connecte via OIDC n’a pas de mot de passe TREK à changer.',
  // mfa
  'help.guide.mfa.title': 'Activer l’authentification à deux facteurs',
  'help.guide.mfa.goal': 'Protégez le compte avec un code d’une application d’authentification.',
  'help.guide.mfa.step.1': "Sous Authentification à deux facteurs (2FA), cliquez sur Configurer l'authentificateur.",
  'help.guide.mfa.step.2':
    'Scannez le code QR avec votre application, ou saisissez le secret à la main, puis tapez le code à six chiffres qu’elle affiche et cliquez sur Activer 2FA.',
  'help.guide.mfa.step.3':
    'Conservez les codes de secours : copiez-les, téléchargez-les ou imprimez-les. Chacun sert une fois, quand vous n’avez pas de téléphone sous la main.',
  'help.guide.mfa.result': 'Chaque connexion demande un code après le mot de passe.',
  'help.guide.mfa.tip.1': 'Désactiver 2FA demande votre mot de passe et un code en cours.',
  'help.guide.mfa.tip.2': 'L’admin peut imposer la 2FA à tout le monde ; elle ne peut alors pas être désactivée ici.',
  // passkeys
  'help.guide.passkeys.title': 'Se connecter avec une passkey',
  'help.guide.passkeys.goal':
    'Utilisez l’empreinte, le visage ou le code PIN de votre appareil au lieu d’un mot de passe.',
  'help.guide.passkeys.step.1':
    'Sous Passkeys, cliquez sur Ajouter une passkey et confirmez avec votre appareil. Donnez-lui un nom qui dit de quel appareil il s’agit.',
  'help.guide.passkeys.step.2':
    'La liste montre chaque passkey avec son nom et sa dernière utilisation ; le bouton de suppression en retire une.',
  'help.guide.passkeys.result': 'La page de connexion propose la passkey ; le mot de passe reste en secours.',
  'help.guide.passkeys.tip.1':
    'Une passkey vit sur l’appareil ou dans son gestionnaire de mots de passe, ajoutez-en donc une par appareil.',
  'help.guide.passkeys.tip.2':
    'Les passkeys exigent HTTPS ; sur une instance en simple HTTP, la section explique pourquoi elles sont indisponibles.',
  // delete-account
  'help.guide.delete-account.title': 'Supprimer votre compte',
  'help.guide.delete-account.goal': 'Retirez votre compte et les données qui ne sont qu’à vous.',
  'help.guide.delete-account.step.1': 'Tout en bas de Compte, cliquez sur Supprimer le compte et confirmez.',
  'help.guide.delete-account.result':
    'Votre compte, vos propres voyages et vos journaux disparaissent ; les voyages que vous partagez avec d’autres restent chez eux.',
  'help.guide.delete-account.tip.1':
    'Le dernier admin d’une instance ne peut pas se supprimer lui-même ; nommez d’abord quelqu’un d’autre admin.',
  'help.guide.delete-account.tip.2':
    'Il n’y a pas de retour en arrière. Exportez ce que vous voulez garder avant de confirmer.',

  // ── Screen: admin (all tabs) ──────────────────────────────────────────────────────────
  'help.ctx.admin.title': 'Administration',
  'help.ctx.admin.summary':
    'L’instance derrière le TREK de tout le monde : qui peut se connecter et comment, ce qui est activé, où vivent les fichiers, comment le serveur joint les gens et comment il est sauvegardé. Seuls les admins voient cette page ; chaque onglet est un écran à part dans la barre latérale.',
  'help.ctx.admin.bullet.1':
    'Les quatre cartes en haut comptent utilisateurs, voyages, lieux et fichiers ; une bannière au-dessus annonce une version plus récente de TREK.',
  'help.ctx.admin.bullet.2':
    'Utilisateurs et Valeurs par défaut : les comptes, les liens d’invitation et les réglages de carte avec lesquels un nouveau compte démarre.',
  'help.ctx.admin.bullet.3':
    'Personnalisation, Paramètres, Extensions et Plugins : modèles de bagages, catégories et vacances scolaires ; méthodes de connexion et clés API ; les modules de fonctionnalités ; les plugins tiers.',
  'help.ctx.admin.bullet.4':
    'Stockage, Notifications, Accès MCP et GitHub : où vont les envois, les canaux de toute l’instance, les tokens et sessions des clients IA, et l’historique des versions.',
  'help.ctx.admin.bullet.5':
    'Sauvegarde et Audit : sauvegardes à la demande et planifiées, et le journal des événements liés à la sécurité.',
  'help.ctx.admin-users.title': 'Utilisateurs',
  'help.ctx.admin-users.summary':
    'Chaque compte de ce TREK, avec rôle, e-mail et dernière connexion, et les liens d’invitation qui permettent aux gens de s’inscrire sur une instance fermée.',
  'help.ctx.admin-users.bullet.1':
    'Le tableau : nom d’utilisateur, e-mail, rôle, date de création, dernière connexion et les actions par ligne. Vous êtes marqué comme vous.',
  'help.ctx.admin-users.bullet.2':
    'Créer un utilisateur en haut ajoute un compte à la main, avec un mot de passe que vous transmettez.',
  'help.ctx.admin-users.bullet.3':
    "Liens d'invitation en dessous : des liens d’inscription à usage unique avec une limite d’utilisations, une expiration et, si vous voulez, un voyage que le nouvel utilisateur rejoint à son arrivée.",
  'help.ctx.admin-users.bullet.4':
    'Paramètres des permissions tout en bas : par action, qui peut la faire, Tout le monde, Membres du voyage, Propriétaire du voyage ou Administrateur uniquement.',
  'help.ctx.admin-defaults.title': 'Valeurs par défaut',
  'help.ctx.admin-defaults.summary':
    'Les réglages avec lesquels un nouveau compte démarre, pour que personne n’ait à chercher d’abord l’onglet carte : moteur cartographique, style, jetons et qualité.',
  'help.ctx.admin-defaults.bullet.1':
    'Moteur cartographique, style et jeton Mapbox, clé CARTO et qualité Mapbox, exactement comme un utilisateur les réglerait sous Paramètres, Carte.',
  'help.ctx.admin-defaults.bullet.2':
    'Réinitialiser par champ rend le choix propre à TREK ; le réglage personnel d’un utilisateur l’emporte toujours sur ceux-ci.',
  'help.ctx.admin-config.title': 'Personnalisation',
  'help.ctx.admin-config.summary':
    'Ce que tous les voyages de l’instance partagent : les modèles de bagages, le jeu de catégories pour les lieux et les collections, et le catalogue de vacances scolaires où puise Vacay.',
  'help.ctx.admin-config.bullet.1':
    'Modèles de bagages : des listes nommées de catégories et d’articles dont la liste de bagages d’un voyage peut partir.',
  'help.ctx.admin-config.bullet.2':
    'Catégories : nom, icône et couleur des catégories utilisées dans tout TREK, de l’inspecteur de lieu aux Collections.',
  'help.ctx.admin-config.bullet.3':
    'Vacances scolaires : le catalogue des pays et régions, pour les endroits que les flux intégrés ne couvrent pas.',
  'help.ctx.admin-settings.title': 'Paramètres',
  'help.ctx.admin-settings.summary':
    'Comment les gens entrent et à quoi le serveur peut parler : méthodes de connexion et d’inscription, SSO, passkeys, politique de double authentification, les clés API pour les cartes, les lieux et les images, les fournisseurs de recherche et de transports, et les types de fichiers que les envois peuvent avoir.',
  'help.ctx.admin-settings.bullet.1':
    "Authentication Methods : Password Login, Password Registration, SSO Login, SSO Auto-Provisioning et Exiger l'authentification à deux facteurs (2FA).",
  'help.ctx.admin-settings.bullet.2':
    'Authentification unique (OIDC) avec émetteur, client et nom d’affichage ; Connexion par passkey avec Relying Party ID et origines.',
  'help.ctx.admin-settings.bullet.3':
    'Clés API : Google Maps, Unsplash et Amap, chacune avec Tester ; Ce à quoi sert la clé restreint la clé Google aux fonctions que vous voulez payer.',
  'help.ctx.admin-settings.bullet.4':
    'Fournisseur de recherche de lieux et Fournisseur de transports en commun choisissent qui répond aux recherches et aux itinéraires ; Types de fichiers autorisés limite les envois.',
  'help.ctx.admin-addons.title': 'Extensions',
  'help.ctx.admin-addons.summary':
    'Les modules de fonctionnalités de TREK, chacun avec un interrupteur : Listes, Coûts, Documents, Vacay, Atlas, Collaboration, Journal de voyage, Collections, Road trip, MCP, AirTrail, Dawarich et l’analyse par IA. Désactivé veut dire que l’entrée de navigation, les routes et l’API disparaissent pour tout le monde.',
  'help.ctx.admin-addons.bullet.1':
    'Une tuile par extension avec son interrupteur et, quand elle en a, des sous-lignes pour ses options.',
  'help.ctx.admin-addons.bullet.2':
    'Les fournisseurs de photos et de documents apparaissent ici aussi comme tuiles, pour proposer Immich ou Synology aux utilisateurs.',
  'help.ctx.admin-addons.bullet.3': 'Suivi des bagages a son propre interrupteur sous les tuiles.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Des plugins tiers qui tournent dans leur propre processus à côté de TREK, chacun avec les permissions demandées à l’installation. Installez depuis le catalogue, téléversez un paquet, ou liez un dossier pendant que vous en développez un.',
  'help.ctx.admin-plugins.bullet.1':
    'La liste : chaque plugin installé avec version, état, signature et les permissions qu’il détient ; activer, désactiver, mettre à jour ou désinstaller par ligne.',
  'help.ctx.admin-plugins.bullet.2':
    'Téléverser un plugin prend un fichier de paquet ; Réanalyser détecte un dossier de plugin lié pour le développement.',
  'help.ctx.admin-plugins.bullet.3':
    'Hôtes autorisés par plugin : les adresses qu’un plugin peut appeler, puisque les sorties sont refusées par défaut.',
  'help.ctx.admin-storage.title': 'Stockage',
  'help.ctx.admin-storage.summary':
    'Où vivent les envois : le disque local, un bucket S3, ou un miroir qui écrit dans les deux. Chaque catégorie d’envoi peut aller vers un backend différent, et État dit si chaque backend répond.',
  'help.ctx.admin-storage.bullet.1':
    'Backends : nom et type de chacun, avec Tester, Modifier et Supprimer ; un backend défini par l’environnement est en lecture seule ici.',
  'help.ctx.admin-storage.bullet.2':
    'Catégories : couvertures, documents, photos du journal et le reste, chacune assignée à un backend ; en changer une propose de déplacer les fichiers existants.',
  'help.ctx.admin-storage.bullet.3':
    'État : une vérification par backend, et le fichier témoin qui prouve que la configuration est bien celle que le serveur voit.',
  'help.ctx.admin-notifications.title': 'Notifications',
  'help.ctx.admin-notifications.summary':
    'Les canaux que l’instance propose à ses utilisateurs, et ceux qui vous joignent en tant qu’admin. Les utilisateurs choisissent leurs propres sujets et URL sous Paramètres ; vous décidez de ce qui existe et configurez l’e-mail.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy et Webhook : un panneau chacun, avec un interrupteur qui propose le canal aux utilisateurs et la configuration côté serveur dont il a besoin.',
  'help.ctx.admin-notifications.bullet.2':
    'Rappels de voyage : si le serveur envoie le rappel avant le début d’un voyage.',
  'help.ctx.admin-notifications.bullet.3':
    'Ntfy admin et Webhook admin : où vont les événements admin comme une sauvegarde échouée ou une nouvelle version, avec Tester.',
  'help.ctx.admin-mcp-tokens.title': 'Accès MCP',
  'help.ctx.admin-mcp-tokens.summary':
    'Chaque token et session OAuth que des clients IA détiennent sur ce TREK, tous utilisateurs confondus, avec le pouvoir de révoquer n’importe lequel.',
  'help.ctx.admin-mcp-tokens.bullet.1':
    'Tokens API : qui l’a créé, quand il a servi pour la dernière fois, et Supprimer.',
  'help.ctx.admin-mcp-tokens.bullet.2':
    'Sessions OAuth : le client, l’utilisateur et les portées accordées, et Révoquer.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'Ce qui est nouveau dans TREK : l’historique des versions depuis GitHub, la version que vous faites tourner, et si une plus récente est sortie. La mise à jour elle-même se fait hors de l’application, sur l’hôte.',
  'help.ctx.admin-github.bullet.1':
    'Historique des versions liste les versions avec leurs notes ; la plus récente porte Dernière, et la vôtre est marquée.',
  'help.ctx.admin-github.bullet.2':
    'Mise à jour disponible apparaît dans l’en-tête dès qu’une version plus récente existe, avec la marche à suivre pour Docker et les autres installations.',
  'help.ctx.admin-backup.title': 'Sauvegarde',
  'help.ctx.admin-backup.summary':
    'Des sauvegardes complètes de la base de données et des envois, faites à la main ou selon un planning, conservées sur le serveur et téléchargeables en un seul fichier. Restaurer en remet une en place.',
  'help.ctx.admin-backup.bullet.1':
    'Sauvegarde des données : Créer une sauvegarde, et la liste des sauvegardes existantes avec Télécharger, Restaurer et supprimer.',
  'help.ctx.admin-backup.bullet.2':
    'Importer une sauvegarde apporte un fichier fait sur une autre instance ou un autre jour.',
  'help.ctx.admin-backup.bullet.3':
    'Sauvegarde automatique : activée ou non, intervalle, heure et jour, et combien en garder.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'Le journal des événements de sécurité et d’administration : connexions et échecs, changements de MFA, changements d’utilisateurs et de réglages, sauvegardes et restaurations. En lecture seule, le plus récent en premier.',
  'help.ctx.admin-audit.bullet.1': 'Une ligne par événement avec heure, utilisateur, action, ressource, IP et détails.',
  'help.ctx.admin-audit.bullet.2': 'Actualiser recharge ; Charger plus remonte plus loin.',
  // create-user
  'help.guide.create-user.title': 'Créer un utilisateur',
  'help.guide.create-user.goal': 'Ajoutez un compte à la main, sans invitation.',
  'help.guide.create-user.step.1': 'Cliquez sur Créer un utilisateur en haut de l’onglet Utilisateurs.',
  'help.guide.create-user.step.2':
    "Saisissez Nom d'utilisateur, E-mail et un Mot de passe, et choisissez le Rôle : Utilisateur ou Administrateur.",
  'help.guide.create-user.step.3': 'Cliquez sur Créer un utilisateur.',
  'help.guide.create-user.result':
    'Le compte apparaît dans le tableau et peut se connecter tout de suite ; transmettez le mot de passe par un canal de confiance.',
  'help.guide.create-user.tip.1':
    'Pour une personne qui doit choisir son propre mot de passe, un lien d’invitation est la meilleure porte d’entrée.',
  'help.guide.create-user.tip.2':
    'Les admins voient cette page et le journal d’audit ; tout le reste est identique pour les deux rôles.',
  // edit-user
  'help.guide.edit-user.title': 'Changer le rôle ou le mot de passe d’un utilisateur',
  'help.guide.edit-user.goal': 'Promouvez quelqu’un, rétrogradez-le, ou faites-le revenir après un mot de passe perdu.',
  'help.guide.edit-user.step.1':
    "Cliquez sur le crayon dans la ligne de l’utilisateur. Modifier l'utilisateur s’ouvre avec les détails du compte.",
  'help.guide.edit-user.step.2':
    'Changez le Rôle, définissez un Nouveau mot de passe, ou cliquez sur Réinitialiser les passkeys quand la personne a perdu l’appareil qui portait ses passkeys, puis Enregistrer.',
  'help.guide.edit-user.result':
    'Le changement s’applique à la requête suivante ; un nouveau mot de passe fonctionne dès la prochaine connexion.',
  'help.guide.edit-user.tip.1': 'Vous ne pouvez pas vous retirer le rôle d’admin tant que vous êtes le dernier admin.',
  'help.guide.edit-user.tip.2':
    'Réinitialiser les passkeys garde le mot de passe ; la personne ajoute de nouvelles passkeys sous Paramètres, Compte.',
  // invite-links
  'help.guide.invite-links.title': 'Inviter quelqu’un avec un lien',
  'help.guide.invite-links.goal':
    'Laissez une personne s’inscrire sur une instance fermée, et atterrir dans un voyage si vous voulez.',
  'help.guide.invite-links.step.1': "Sous Liens d'invitation, cliquez sur Créer un lien.",
  'help.guide.invite-links.step.2':
    'Réglez Utilisations max. et Expire après, éventuellement Ajouter à un voyage (facultatif), et cliquez sur Créer et copier.',
  'help.guide.invite-links.step.3':
    'Envoyez le lien. Chaque ligne montre combien de fois il a servi et qui l’a créé ; Copier le lien le copie de nouveau, et les liens épuisés ou expirés sont marqués.',
  'help.guide.invite-links.result':
    'Qui ouvre le lien s’inscrit avec son propre mot de passe et, si un voyage est choisi, le rejoint aussitôt.',
  'help.guide.invite-links.tip.1':
    'Les liens d’invitation fonctionnent même quand Password Registration est désactivé sous Paramètres.',
  'help.guide.invite-links.tip.2':
    'Un lien à une seule utilisation et à expiration courte est le réglage le plus sûr pour une seule personne.',
  // delete-user
  'help.guide.delete-user.title': 'Supprimer un utilisateur',
  'help.guide.delete-user.goal': 'Retirez un compte et tout ce qui n’appartient qu’à lui.',
  'help.guide.delete-user.step.1':
    "Cliquez sur l’icône de corbeille dans la ligne de l’utilisateur et confirmez Supprimer l'utilisateur.",
  'help.guide.delete-user.result':
    'Le compte, ses propres voyages et ses journaux disparaissent ; les voyages partagés avec d’autres restent aux membres restants.',
  'help.guide.delete-user.tip.1':
    'Il n’y a pas de retour en arrière. Faites d’abord une sauvegarde si vous n’êtes pas sûr.',
  'help.guide.delete-user.tip.2':
    'Le dernier admin ne peut pas être supprimé ; nommez d’abord quelqu’un d’autre admin.',
  // permissions
  'help.guide.permissions.title': 'Décider qui peut faire quoi',
  'help.guide.permissions.goal': 'Définissez, par action, quel rôle a le droit de la faire sur ce TREK.',
  'help.guide.permissions.step.1':
    'Sous Paramètres des permissions, trouvez l’action dans son groupe, par exemple Supprimer des voyages sous Gestion des voyages, et choisissez le niveau : Tout le monde, Membres du voyage, Propriétaire du voyage ou Administrateur uniquement. Une ligne modifiée est marquée personnalisé.',
  'help.guide.permissions.step.2':
    'Cliquez sur Enregistrer. Réinitialiser par défaut remet chaque ligne au niveau intégré.',
  'help.guide.permissions.result':
    'La règle s’applique à tous les voyages d’un coup ; les boutons et menus des personnes sous le niveau disparaissent.',
  'help.guide.permissions.tip.1':
    'Propriétaire du voyage désigne la personne qui a créé le voyage ; les admins peuvent toujours tout faire.',
  'help.guide.permissions.tip.2':
    'Abaissez un niveau plutôt que de supprimer un membre : un membre qui ne peut pas modifier peut encore lire et commenter.',
  // default-map
  'help.guide.default-map.title': 'Régler la carte par défaut des nouveaux utilisateurs',
  'help.guide.default-map.goal': 'Donnez à chaque nouveau compte une carte qui fonctionne sans jeton personnel.',
  'help.guide.default-map.step.1':
    'Sous Carte, choisissez le Moteur cartographique et, pour Mapbox ou MapLibre, le Style de carte, le Jeton Mapbox partagé et le Mode haute qualité ; pour une carte raster, le Modèle de carte et la Clé CARTO partagée.',
  'help.guide.default-map.step.2':
    'À côté de tout champ modifié, réinitialiser rend le choix propre à TREK. Paramètres utilisateur par défaut à gauche fait de même pour Mode de couleur, les unités et la devise.',
  'help.guide.default-map.result':
    'Les nouveaux comptes démarrent avec ces réglages ; qui a réglé sa propre carte sous Paramètres garde la sienne.',
  'help.guide.default-map.tip.1':
    'Un jeton saisi ici est partagé par tous ceux qui n’en ont pas, alors surveillez son quota.',
  'help.guide.default-map.tip.2':
    'Les comptes existants qui n’ont jamais touché l’onglet carte suivent aussi ces valeurs par défaut.',
  // packing-templates
  'help.guide.packing-templates.title': 'Construire un modèle de bagages',
  'help.guide.packing-templates.goal': 'Donnez aux voyages une liste de bagages de départ plutôt qu’une liste vide.',
  'help.guide.packing-templates.step.1': 'Cliquez sur Nouveau modèle, tapez un nom et confirmez avec la coche.',
  'help.guide.packing-templates.step.2':
    'Ouvrez le modèle et cliquez sur Ajouter une catégorie ; sous chaque catégorie, le + ajoute des articles, et un article n’a besoin que d’un nom.',
  'help.guide.packing-templates.step.3':
    'Tout s’enregistre au fur et à mesure. Le crayon renomme un modèle, une catégorie ou un article, la corbeille le supprime.',
  'help.guide.packing-templates.result':
    'Le modèle est proposé sur la liste de bagages de chaque voyage ; l’appliquer copie les articles, donc un voyage peut les changer librement.',
  'help.guide.packing-templates.tip.1':
    'Un modèle par type de voyage, plage, ville, randonnée, vaut mieux qu’une liste géante.',
  'help.guide.packing-templates.tip.2': 'Supprimer un modèle ne touche pas aux voyages qui l’ont déjà appliqué.',
  // categories
  'help.guide.categories.title': 'Gérer le jeu de catégories',
  'help.guide.categories.goal':
    'Décidez quelles catégories les lieux et les collections peuvent porter, et à quoi elles ressemblent.',
  'help.guide.categories.step.1':
    'Cliquez sur Nouvelle catégorie, donnez-lui un nom, choisissez une icône et une couleur ; l’Aperçu montre le résultat. Cliquez sur Créer.',
  'help.guide.categories.step.2':
    'Survolez une catégorie dans la liste pour la modifier ou la supprimer. La suppression demande confirmation.',
  'help.guide.categories.result':
    'Le jeu s’applique partout à la fois : l’inspecteur de lieu, les épingles de la carte, Collections et les filtres.',
  'help.guide.categories.tip.1':
    'Les lieux gardent leur id de catégorie, donc renommer une catégorie la renomme sur chaque lieu.',
  'help.guide.categories.tip.2':
    'Une catégorie supprimée laisse ses lieux sans catégorie ; réassignez-les d’abord si cela compte.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Tenir les vacances scolaires à la main',
  'help.guide.school-holiday-catalog.goal':
    'Couvrez un pays ou une région que les flux de vacances intégrés ne couvrent pas.',
  'help.guide.school-holiday-catalog.step.1':
    'Sous Vacances scolaires, cliquez sur Ajouter un pays, saisissez le Pays et son Code du pays (ex. US), et Enregistrer ; puis Ajouter une région pour chaque partie qui diffère.',
  'help.guide.school-holiday-catalog.step.2':
    'Cliquez sur une région pour ouvrir Région ou district scolaire : Ajouter une période, donnez à chacune un Nom des vacances, une Date de début et une Date de fin, et Enregistrer. La corbeille retire une période, une région ou, une fois qu’il n’a plus de régions, un pays.',
  'help.guide.school-holiday-catalog.result':
    'Les utilisateurs trouvent le pays et la région sous Paramètres dans Vacay et voient les périodes sur leur grille annuelle.',
  'help.guide.school-holiday-catalog.tip.1':
    'Les régions des flux intégrés ne se modifient pas ici ; ajoutez une région manuelle à côté si une date est fausse.',
  // auth-methods
  'help.guide.auth-methods.title': 'Décider comment les gens se connectent',
  'help.guide.auth-methods.goal':
    'Ouvrez ou fermez la connexion par mot de passe, le SSO et l’inscription, et exigez la 2FA.',
  'help.guide.auth-methods.step.1':
    'Sous Authentication Methods, activez ou désactivez Password Login et Password Registration. Inscription désactivée veut dire : nouveaux comptes uniquement par liens d’invitation, SSO ou à la main.',
  'help.guide.auth-methods.step.2':
    'SSO Login et SSO Auto-Provisioning ont besoin d’une Authentification unique (OIDC) configurée plus bas ; l’auto-provisionnement crée un compte la première fois que quelqu’un se connecte par SSO.',
  'help.guide.auth-methods.step.3':
    "Exiger l'authentification à deux facteurs (2FA) oblige chaque connexion par mot de passe à configurer un authentificateur à la prochaine connexion. Connexion par passkey a besoin du Relying Party ID et des origines par lesquelles votre TREK est joint.",
  'help.guide.auth-methods.result':
    'La page de connexion propose exactement les méthodes que vous avez laissées actives.',
  'help.guide.auth-methods.tip.1':
    'Un avertissement apparaît avant que vous ne vous enfermiez dehors : au moins une porte d’entrée reste ouverte aux admins.',
  'help.guide.auth-methods.tip.2':
    'Les valeurs définies par variables d’environnement s’affichent ici en lecture seule.',
  // oidc
  'help.guide.oidc.title': 'Connecter l’authentification unique',
  'help.guide.oidc.goal': 'Laissez les gens se connecter avec votre fournisseur d’identité.',
  'help.guide.oidc.step.1':
    "Sous Authentification unique (OIDC), saisissez le Nom d'affichage du bouton et l’URL de l'émetteur, le Client ID et le Client Secret de votre fournisseur, puis Enregistrer.",
  'help.guide.oidc.step.2': 'Activez SSO Login sous Authentication Methods.',
  'help.guide.oidc.result':
    'La page de connexion montre le bouton SSO ; avec SSO Auto-Provisioning activé, les nouveaux venus reçoivent un compte automatiquement.',
  'help.guide.oidc.tip.1':
    'L’URI de redirection dont votre fournisseur a besoin est l’adresse de votre TREK plus le chemin de rappel OIDC indiqué dans la documentation.',
  'help.guide.oidc.tip.2':
    'Le mappage des claims décide quels groupes SSO deviennent admins ; voir la page OIDC de la documentation.',
  // instance-keys
  'help.guide.instance-keys.title': 'Saisir les clés API',
  'help.guide.instance-keys.goal':
    'Débloquez la recherche de lieux Google, les couvertures Unsplash et Amap pour toute l’instance.',
  'help.guide.instance-keys.step.1':
    'Sous Clés API, collez la Clé API Google Maps et cliquez sur Tester ; le champ dit si la clé répond.',
  'help.guide.instance-keys.step.2':
    'Sous Ce à quoi sert la clé, n’activez que les fonctions que vous voulez facturer sur cette clé : autocomplétion, détails, photos, enrichissement, le journal des recherches.',
  'help.guide.instance-keys.step.3':
    'Clé API Unsplash alimente la recherche de couvertures ; Clé API Amap (高德地图) la recherche de lieux en Chine. Testez chacune de la même façon.',
  'help.guide.instance-keys.result':
    'Les utilisateurs obtiennent les fonctions sans clés personnelles ; sans clé Google, TREK cherche via la pile OpenStreetMap gratuite et la TREK Places API.',
  'help.guide.instance-keys.tip.1':
    'La clé personnelle d’un utilisateur sous Paramètres l’emporte sur la clé de l’instance pour cet utilisateur.',
  'help.guide.instance-keys.tip.2':
    'Les clés peuvent aussi venir de variables d’environnement ; celles-là s’affichent ici en lecture seule.',
  // places-transit
  'help.guide.places-transit.title': 'Choisir les fournisseurs de recherche et de transports',
  'help.guide.places-transit.goal':
    'Décidez qui répond aux recherches de lieux et aux itinéraires en transports en commun.',
  'help.guide.places-transit.step.1':
    'Sous Fournisseur de recherche de lieux, choisissez Automatique, Google Places, Amap (高德地图) ou OpenStreetMap. Automatique utilise la meilleure clé disponible.',
  'help.guide.places-transit.step.2':
    'Sous Fournisseur de transports en commun, choisissez Transitous (gratuit), mondial et sans clé, ou Google, qui a besoin de la clé Google.',
  'help.guide.places-transit.result':
    'Chaque champ de recherche et chaque itinéraire en transports de TREK suit ce choix.',
  'help.guide.places-transit.tip.1':
    'Un fournisseur sans sa clé affiche un avertissement ici et se rabat sur OpenStreetMap.',
  'help.guide.places-transit.tip.2':
    'Les itinéraires de transports Google sont facturés à la requête ; Transitous non.',
  // file-types
  'help.guide.file-types.title': 'Limiter les types de fichiers',
  'help.guide.file-types.goal': 'Décidez quelles extensions de fichiers les envois peuvent avoir.',
  'help.guide.file-types.step.1':
    'Sous Types de fichiers autorisés, modifiez la liste d’extensions séparées par des virgules et enregistrez.',
  'help.guide.file-types.result':
    'Les envois de tout autre type sont refusés avec un message clair, dans les documents, le journal et les couvertures.',
  'help.guide.file-types.tip.1':
    'Gardez les types d’images dans la liste ; les couvertures et les photos du journal passent par le même contrôle.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Activer ou désactiver une extension',
  'help.guide.toggle-addon.goal': 'Proposez un module de fonctionnalités à tout le monde, ou retirez-le.',
  'help.guide.toggle-addon.step.1':
    'Basculez l’interrupteur sur la tuile de l’extension. L’entrée de navigation apparaît ou disparaît pour tout le monde d’un coup.',
  'help.guide.toggle-addon.step.2':
    'Certaines tuiles portent des sous-lignes pour leurs options, comme Suivi des bagages sous Listes ou les fournisseurs de photos sous Journal de voyage ; elles ne s’affichent que tant que l’extension est active.',
  'help.guide.toggle-addon.result':
    'Les données d’une extension désactivée sont conservées ; la réactiver les montre de nouveau.',
  'help.guide.toggle-addon.tip.1':
    'MCP désactivé retire le point de terminaison et les sections Intégrations qui en dépendent.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas et Journal de voyage sont les extensions que les utilisateurs demandent le plus ; Documents a besoin d’un stockage pour les envois.',
  // install-plugin
  'help.guide.install-plugin.title': 'Installer un plugin',
  'help.guide.install-plugin.goal': 'Ajoutez un plugin tiers et donnez-lui exactement les permissions qu’il demande.',
  'help.guide.install-plugin.step.1':
    'Ouvrez Découvrir, choisissez un plugin et cliquez sur Installer ; ou cliquez sur Téléverser un plugin et choisissez un paquet .zip ou .tar.gz.',
  'help.guide.install-plugin.step.2':
    'De retour sous Installé, lisez la ligne : ce que le plugin peut lire ou écrire, les hôtes qu’il appelle et s’il est signé. Activez Activer le plugin.',
  'help.guide.install-plugin.step.3':
    "Le menu de la ligne propose Redémarrer, Voir le journal d'erreurs, Hôtes autorisés et Changer de version… ; Supprimer le désinstalle. Une mise à jour est proposée sur la ligne quand une version plus récente existe, et celle qui demande de nouveaux droits reste inactive jusqu’à ce que vous les approuviez.",
  'help.guide.install-plugin.result':
    'Le plugin tourne dans son propre processus ; ce qu’il ajoute, widgets, couches de carte, outils, apparaît là où le plugin le déclare.',
  'help.guide.install-plugin.tip.1': 'Réanalyser détecte un dossier de plugin lié pour le développement, sans paquet.',
  'help.guide.install-plugin.tip.2':
    'Un plugin non signé est marqué comme tel ; ne l’installez que si vous faites confiance à sa source.',
  // storage-backends
  'help.guide.storage-backends.title': 'Déplacer les envois vers S3 ou un miroir',
  'help.guide.storage-backends.goal':
    'Gardez les fichiers sur un stockage objet, ou à la fois sur disque et dans un bucket.',
  'help.guide.storage-backends.step.1':
    'Sous Backends, cliquez sur Ajouter un backend, donnez-lui un Nom, choisissez le Type, Local, S3 ou Miroir, remplissez les champs et Appliquer. Tester vérifie la connexion, Enregistrer les modifications l’écrit.',
  'help.guide.storage-backends.step.2':
    'Sous Catégories, assignez chaque catégorie d’envoi à un backend. En changer une demande s’il faut Déplacer les objets existants ou Router uniquement les nouvelles écritures.',
  'help.guide.storage-backends.step.3': 'État en haut vérifie chaque backend ; une entrée rouge nomme ce qui a échoué.',
  'help.guide.storage-backends.result':
    'Les nouveaux envois vont vers le backend assigné ; les fichiers déplacés sont servis depuis là.',
  'help.guide.storage-backends.tip.1':
    'Un backend configuré par variables d’environnement est affiché mais ne peut pas être modifié ici.',
  'help.guide.storage-backends.tip.2':
    'Un miroir écrit dans les deux cibles et lit depuis la première ; servez-vous-en pour migrer sans interruption.',
  // channels-instance
  'help.guide.channels-instance.title': 'Configurer les canaux de notification',
  'help.guide.channels-instance.goal': 'Décidez quels canaux les utilisateurs peuvent choisir, et configurez l’e-mail.',
  'help.guide.channels-instance.step.1':
    'Sous Email (SMTP), saisissez SMTP Host, SMTP Port, SMTP User, SMTP Password et la From Address ; Envoyer un e-mail de test vous envoie un message.',
  'help.guide.channels-instance.step.2':
    'Activez Ntfy et Webhook pour les proposer ; les utilisateurs saisissent ensuite leur propre sujet ou URL sous Paramètres, Notifications.',
  'help.guide.channels-instance.step.3':
    'Rappels de voyage commande le rappel avant le début d’un voyage ; In-App est toujours actif et seulement expliqué ici.',
  'help.guide.channels-instance.result':
    'L’onglet Notifications de chaque utilisateur montre les canaux que vous avez activés.',
  'help.guide.channels-instance.tip.1':
    'Un serveur ntfy par défaut saisi ici est prérempli pour les utilisateurs ; ils peuvent quand même indiquer le leur.',
  'help.guide.channels-instance.tip.2':
    'Les canaux de plugins apparaissent d’eux-mêmes dès qu’un plugin avec cette capacité est actif.',
  // admin-channels
  'help.guide.admin-channels.title': 'Recevoir les événements admin sur votre téléphone',
  'help.guide.admin-channels.goal':
    'Soyez informé des sauvegardes échouées, des nouvelles versions et des autres événements de l’instance.',
  'help.guide.admin-channels.step.1':
    'Sous Ntfy admin, saisissez un sujet et, au besoin, serveur et jeton ; sous Webhook admin, une URL.',
  'help.guide.admin-channels.step.2':
    'Cliquez sur Envoyer un Ntfy de test ou Envoyer un webhook de test pour voir un message arriver.',
  'help.guide.admin-channels.result': 'Les événements admin y partent en plus de la cloche in-app de chaque admin.',
  'help.guide.admin-channels.tip.1':
    'Gardez le sujet admin séparé de votre sujet personnel, pour qu’une panne ne se noie pas dans le bavardage des voyages.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Révoquer l’accès des IA',
  'help.guide.mcp-tokens-admin.goal':
    'Voyez et coupez chaque token et session qu’un client IA détient, pour n’importe quel utilisateur.',
  'help.guide.mcp-tokens-admin.step.1':
    'Sous Tokens API, trouvez le token par utilisateur et nom ; la corbeille le supprime et le client s’arrête aussitôt.',
  'help.guide.mcp-tokens-admin.step.2':
    'Sous Sessions OAuth, la même chose pour les clients passant par le navigateur : client, utilisateur et date, et la corbeille révoque la session.',
  'help.guide.mcp-tokens-admin.result': 'Le client doit être reconnecté par son utilisateur ; rien d’autre ne change.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Les portées vous disent ce qu’un client pouvait faire ; une portée en lecture seule ne fait pas de mal si on la laisse.',
  'help.guide.mcp-tokens-admin.tip.2': 'Désactiver l’extension MCP révoque tout d’un coup.',
  // release-history
  'help.guide.release-history.title': 'Vérifier s’il y a une nouvelle version',
  'help.guide.release-history.goal': 'Sachez si votre TREK est à jour et ce que la prochaine version apporte.',
  'help.guide.release-history.step.1':
    'Quand une version plus récente existe, Mise à jour disponible s’affiche en haut de la page admin ; Voir sur GitHub l’ouvre, et Comment mettre à jour explique la mise à jour pour Docker et pour les autres installations.',
  'help.guide.release-history.step.2':
    'Historique des versions liste chaque version avec ses notes ; Afficher les détails les déplie, la plus récente porte Dernière, et Charger plus remonte plus loin.',
  'help.guide.release-history.result':
    'La mise à jour se fait sur l’hôte, en tirant la nouvelle image ou en construisant le nouveau tag ; le répertoire de données reste.',
  'help.guide.release-history.tip.1':
    'Faites une sauvegarde avant une mise à jour ; l’onglet Sauvegarde est juste à côté.',
  'help.guide.release-history.tip.2':
    'Les préversions sont affichées mais pas annoncées comme mises à jour, sauf si vous en faites tourner une.',
  // create-backup
  'help.guide.create-backup.title': 'Faire et restaurer une sauvegarde',
  'help.guide.create-backup.goal':
    'Prenez un instantané de toute l’instance, gardez-en une copie ailleurs, et soyez capable de la remettre en place.',
  'help.guide.create-backup.step.1':
    'Sous Sauvegarde des données, cliquez sur Créer une sauvegarde. Elle empaquette la base de données et les envois dans un seul fichier sur le serveur.',
  'help.guide.create-backup.step.2':
    'Télécharger garde une copie hors de la machine ; la corbeille supprime les anciennes pour libérer de l’espace.',
  'help.guide.create-backup.step.3':
    'Restaurer sur une sauvegarde, ou Importer une sauvegarde avec un fichier, remplace les données actuelles après que Restaurer la sauvegarde ? a demandé une fois.',
  'help.guide.create-backup.result':
    'Une restauration ramène utilisateurs, voyages, fichiers et réglages à l’état de cette sauvegarde ; tout le monde est déconnecté.',
  'help.guide.create-backup.tip.1':
    'La restauration est la seule action ici qui ne peut pas être annulée. Faites d’abord une sauvegarde fraîche.',
  'help.guide.create-backup.tip.2':
    'Les sauvegardes vivent dans le répertoire de données ; c’est une copie sur une autre machine qui en fait une vraie sauvegarde.',
  // auto-backup
  'help.guide.auto-backup.title': 'Planifier les sauvegardes',
  'help.guide.auto-backup.goal': 'Laissez le serveur se sauvegarder lui-même et ne garder que les dernières.',
  'help.guide.auto-backup.step.1':
    "Sous Sauvegarde automatique, activez Activer la sauvegarde automatique et choisissez l’Intervalle, Exécuter à l'heure et, pour hebdomadaire ou mensuel, le Jour de la semaine ou le Jour du mois.",
  'help.guide.auto-backup.step.2':
    'Supprimer les anciennes sauvegardes après règle combien de temps une sauvegarde est gardée ; les plus anciennes partent quand une nouvelle est faite.',
  'help.guide.auto-backup.result':
    'Les sauvegardes apparaissent dans la liste selon le planning ; un échec atteint les canaux admin.',
  'help.guide.auto-backup.tip.1': 'Les heures suivent le fuseau horaire du serveur, indiqué dans l’onglet Audit.',
  'help.guide.auto-backup.tip.2': 'Le stockage du serveur n’est pas infini ; en garder trois à cinq suffit en général.',
  // audit-log
  'help.guide.audit-log.title': 'Lire le journal d’audit',
  'help.guide.audit-log.goal': 'Découvrez qui a fait quoi, et quand.',
  'help.guide.audit-log.step.1':
    'Lisez les lignes : heure, utilisateur, action, ressource, IP et détails, le plus récent en premier. Les actions sont nommées d’après ce qui s’est passé, comme un échec de connexion, un changement de MFA ou une restauration.',
  'help.guide.audit-log.step.2': 'Actualiser recharge le haut ; Charger plus remonte plus loin.',
  'help.guide.audit-log.result':
    'Une trace que vous pouvez remettre à quiconque demande pourquoi quelque chose a changé.',
  'help.guide.audit-log.tip.1':
    'Les heures sont affichées dans le fuseau horaire du serveur, nommé au-dessus du tableau.',
  'help.guide.audit-log.tip.2':
    'Le journal est en ajout seul ; rien ici ne peut être modifié ou supprimé depuis l’application.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Voyage',
  'help.ctx.trip.summary':
    'Un voyage, tout entier : le plan avec ses jours, sa carte et ses lieux, et les onglets pour les transports, les réservations, les listes, les coûts, les fichiers et la collaboration. Chacun d’eux a sa propre page d’aide sous celle-ci.',
  'help.ctx.trip.bullet.1':
    'La barre d’onglets : Plan, Transports, Réservations, Listes, Coûts, Fichiers et Collaboration. Les modules et les plugins décident quels onglets existent sur votre TREK.',
  'help.ctx.trip.bullet.2':
    'Plan, ce sont trois colonnes : les jours à gauche, la carte au milieu, les lieux à droite. Les réservations et les transports vivent dans le plan, à l’étape et entre les étapes ; les onglets les listent.',
  'help.ctx.trip.bullet.3':
    'Partager, en haut à droite, ouvre les personnes du voyage : membres, invités, le lien d’invitation et le lien public en lecture seule.',
  'help.ctx.trip.bullet.4':
    'Le titre, les dates, la couverture et la devise se modifient depuis Mes voyages, avec le crayon sur la carte du voyage.',
  'help.ctx.trip.bullet.5':
    'Les chevrons au bord intérieur d’une colonne la replient et la carte prend la place ; le fin séparateur à côté d’une colonne change sa largeur.',
  'help.ctx.trip.bullet.6':
    'La flèche d’annulation dans la barre d’outils des jours reprend la dernière modification du plan.',
  // add-member
  'help.guide.add-member.title': 'Ajouter un membre',
  'help.guide.add-member.goal': 'Donnez à quelqu’un qui a un compte TREK l’accès à ce voyage.',
  'help.guide.add-member.step.1': 'Cliquez sur Partager en haut à droite.',
  'help.guide.add-member.step.2':
    'Sous Inviter un utilisateur, choisissez la personne dans la liste et cliquez sur Inviter.',
  'help.guide.add-member.step.3':
    'La personne apparaît maintenant sous Accès. La couronne marque le propriétaire ; l’icône au bout d’une ligne retire l’accès.',
  'help.guide.add-member.result':
    'Le membre voit et modifie le voyage comme vous, dans les limites des niveaux fixés par l’admin sous Paramètres des permissions.',
  'help.guide.add-member.tip.1':
    'Quelqu’un qui manque dans la liste n’a pas encore de compte TREK : ajoutez-le comme invité, ou laissez-le s’inscrire via un lien d’invitation.',
  'help.guide.add-member.tip.2':
    'Le nombre à côté d’Accès compte les personnes du voyage ; les invités sont listés à part, en dessous.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Inviter par lien',
  'help.guide.trip-invite-link.goal': 'Laissez les gens rejoindre le voyage eux-mêmes.',
  'help.guide.trip-invite-link.step.1':
    'Cliquez sur Partager, puis sous Lien d’invitation au voyage, cliquez sur Créer un lien d’invitation.',
  'help.guide.trip-invite-link.step.2':
    'Cliquez sur Copier et envoyez le lien. Quiconque a un compte TREK et l’ouvre rejoint le voyage comme membre.',
  'help.guide.trip-invite-link.step.3':
    'Régénérer remplace le lien et rend l’ancien inutilisable ; Désactiver l’éteint.',
  'help.guide.trip-invite-link.result': 'Quiconque ouvre le lien est dans le voyage et apparaît sous Accès.',
  'help.guide.trip-invite-link.tip.1':
    'Quelqu’un sans compte ne peut pas l’utiliser. Un admin distribue des liens d’inscription sous Administration, Utilisateurs, et peut en lier un à ce voyage.',
  'help.guide.trip-invite-link.tip.2':
    'Régénérez quand un lien est parti dans le mauvais chat : l’ancien cesse de fonctionner aussitôt.',
  // add-guest
  'help.guide.add-guest.title': 'Ajouter un invité sans compte',
  'help.guide.add-guest.goal': 'Comptez quelqu’un qui n’utilise pas TREK.',
  'help.guide.add-guest.step.1': 'Cliquez sur Partager et faites défiler jusqu’à Invités.',
  'help.guide.add-guest.step.2': 'Tapez le nom dans Nom de l’invité et cliquez sur Ajouter un invité.',
  'help.guide.add-guest.result':
    'L’invité peut être assigné à des coûts, des articles de bagages et des tâches, mais ne peut pas se connecter.',
  'help.guide.add-guest.tip.1':
    'Le crayon renomme un invité ; l’icône au bout de la ligne le retire avec ses parts et ses assignations.',
  'help.guide.add-guest.tip.2':
    'Si la personne obtient un compte plus tard, invitez-la comme membre et retirez l’invité.',
  // public-link
  'help.guide.public-link.title': 'Publier un lien en lecture seule',
  'help.guide.public-link.goal': 'Montrez le voyage à des personnes qui ne doivent pas le modifier.',
  'help.guide.public-link.step.1':
    'Cliquez sur Partager ; à droite, sous Lien public, cochez ce que le lien peut montrer. Carte et plan est toujours actif ; Réservations, Bagages, Coûts et Chat sont à votre choix.',
  'help.guide.public-link.step.2': 'Cliquez sur Créer un lien, puis sur Copier.',
  'help.guide.public-link.step.3':
    'Les cases peuvent être changées tant que le lien existe ; Supprimer le lien l’arrête.',
  'help.guide.public-link.result':
    'Quiconque a le lien voit les parties choisies sans se connecter et ne peut rien changer.',
  'help.guide.public-link.tip.1':
    'Le lien n’est listé nulle part ; quiconque l’a peut l’ouvrir, traitez-le donc comme un mot de passe.',
  'help.guide.public-link.tip.2': 'Pour des droits de modification, ajoutez plutôt la personne comme membre.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Transmettre le voyage ou le quitter',
  'help.guide.transfer-ownership.goal':
    'Faites de quelqu’un d’autre le propriétaire, ou sortez d’un voyage qui n’est pas le vôtre.',
  'help.guide.transfer-ownership.step.1':
    'Cliquez sur Partager. Sous Accès, la couronne sur la ligne d’un membre fait de cette personne le propriétaire ; confirmez la question.',
  'help.guide.transfer-ownership.step.2':
    'Quitter le voyage sur votre propre ligne vous sort du voyage ; en tant que propriétaire, transmettez-le d’abord.',
  'help.guide.transfer-ownership.result':
    'Le nouveau propriétaire gère les membres et peut supprimer le voyage ; vous restez un membre ordinaire.',
  'help.guide.transfer-ownership.tip.1':
    'Le propriétaire est celui qui a créé le voyage, jusqu’à ce qu’il soit transmis ; supprimer le voyage n’appartient qu’à lui.',
  'help.guide.transfer-ownership.tip.2':
    'Retirer l’accès sur une autre ligne est le même bouton dans l’autre sens : le propriétaire sort un membre.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Faire de la place pour la carte',
  'help.guide.collapse-columns.goal': 'Repliez une colonne ou donnez-lui plus de largeur.',
  'help.guide.collapse-columns.step.1':
    'Cliquez sur le chevron au bord intérieur de la colonne des jours pour la replier ; la carte prend l’espace. La colonne des lieux a le même chevron.',
  'help.guide.collapse-columns.step.2': 'Cliquez de nouveau sur le chevron pour ramener la colonne.',
  'help.guide.collapse-columns.step.3':
    'Faites glisser le fin séparateur entre une colonne et la carte pour changer la largeur de la colonne.',
  'help.guide.collapse-columns.result':
    'Les largeurs sont mémorisées ; les colonnes reviennent ouvertes à la prochaine visite.',
  'help.guide.collapse-columns.tip.1': 'Les deux colonnes peuvent être repliées à la fois pour une vue carte seule.',
  'help.guide.collapse-columns.tip.2':
    'Sur un téléphone, il n’y a pas de colonnes : Plan et Lieux sont les deux boutons en bas de la carte.',
  // undo-change
  'help.guide.undo-change.title': 'Annuler la dernière modification',
  'help.guide.undo-change.goal': 'Reprenez ce que vous venez de faire au plan.',
  'help.guide.undo-change.step.1':
    'Cliquez sur la flèche d’annulation dans la barre d’outils au-dessus des jours ; son infobulle nomme la modification qu’elle va reprendre.',
  'help.guide.undo-change.result':
    'Le plan est revenu tel qu’il était, et la flèche se grise jusqu’à la prochaine modification.',
  'help.guide.undo-change.tip.1':
    'L’annulation couvre le plan : assigner, retirer, réordonner et déplacer des lieux, optimiser un itinéraire, supprimer des lieux, les changements de catégorie et les imports.',
  'help.guide.undo-change.tip.2':
    'Elle n’a qu’un cran de profondeur : seule la dernière modification peut être reprise, et une nouvelle modification la remplace.',
};

export default help;
