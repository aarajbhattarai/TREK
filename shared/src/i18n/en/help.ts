import type { TranslationStrings } from '../types';

const help: TranslationStrings = {
  'help.title': 'Help & Docs',
  'help.search': 'Search docs…',
  'help.contents': 'Contents',
  'help.noResults': 'No matching pages.',
  'help.errorTitle': "Couldn't load this page",
  'help.errorBody': 'The help content is fetched from the TREK wiki. Check your connection and try again.',

  // ── Help center (the contextual panel behind the ? in the navbar) ──────────
  'help.center.button': 'Help for this screen',
  'help.center.title': 'Help',
  'help.center.onThisScreen': 'On this screen',
  'help.center.screens': 'Screens',
  'help.center.thisScreen': 'This screen',
  'help.center.subScreens': '{count} sub-screens',
  'help.center.subScreensLabel': 'Sub-screens',
  'help.center.guidesCount': '{count} guides',
  'help.center.goToScreen': 'Go to {screen}',
  'help.center.overview': 'Overview',
  'help.center.howTo': 'How do I…',
  'help.center.searchPlaceholder': 'Search guides and docs…',
  'help.center.searchEmpty': 'Nothing found for “{query}”.',
  'help.center.searchGuides': 'Guides',
  'help.center.searchDocs': 'Docs',
  'help.center.searchError': 'Search is unavailable right now.',
  'help.center.back': 'Back',
  'help.center.close': 'Close help',
  'help.center.steps': '{count} steps',
  'help.center.step': 'Step {n}',
  'help.center.stepsLabel': 'Steps',
  'help.center.stepOf': 'Step {n} of {total}',
  'help.center.screenshot': 'Screenshot',
  'help.center.result': 'What you get',
  'help.center.tips': 'Good to know',
  'help.center.related': 'Related',
  'help.center.openDocs': 'Open in Help & Docs',
  'help.center.docsSection': 'In the docs',
  'help.center.noContext': 'No guide for this screen yet.',
  'help.center.noContextHint': 'Search the docs, or tell us what you were looking for.',
  'help.center.feedback': 'Missing something?',
  'help.center.feedbackLink': 'Tell us on GitHub',
  'help.center.discord': 'Ask on Discord',
  'help.center.quick': 'Quick',
  'help.center.guide': 'Guide',
  'help.center.tour': 'Walkthrough',
  'help.center.imageAlt': 'Step {n} of “{title}”',

  // ── Screen: dashboard ──────────────────────────────────────────────────────
  'help.ctx.dashboard.title': 'Dashboard',
  'help.ctx.dashboard.summary':
    'Your dashboard is the front door to every trip. The boarding pass at the top spotlights the trip that is running or coming up next, the row below it counts what you have travelled so far, and the cards list everything you are planning, have archived or already finished.',
  'help.ctx.dashboard.bullet.1':
    'Boarding pass: the running or next trip with its dates, travellers, places and a countdown. Click it to open the trip.',
  'help.ctx.dashboard.bullet.2':
    'Travel stats: countries visited, trips, days on the road and distance flown, across all your trips.',
  'help.ctx.dashboard.bullet.3':
    'Trip cards, filtered by Planned, Archived and Completed, as a grid or a list. Hover a card for edit, duplicate, archive and delete.',
  'help.ctx.dashboard.bullet.4':
    'Widgets on the right: currency converter, world clocks, upcoming reservations and collections. Every one of them can be switched off.',
  'help.ctx.dashboard.bullet.5': 'The New Trip card and the button in the bottom-right corner both start a new trip.',

  // create-trip
  'help.guide.create-trip.title': 'Create a trip',
  'help.guide.create-trip.goal': 'Start a new trip with a name, dates and a cover photo.',
  'help.guide.create-trip.step.1':
    'Click New Trip. The card at the end of your trips and the button in the bottom-right corner do the same thing.',
  'help.guide.create-trip.step.2':
    'Give the trip a name. That is the only field you need; everything else can be added later.',
  'help.guide.create-trip.step.3':
    'Pick a start and an end date. TREK creates one day per date, so your itinerary is ready to fill.',
  'help.guide.create-trip.step.4':
    'Optional: add a cover photo. Upload your own, drag one in, or search Unsplash for the destination.',
  'help.guide.create-trip.step.5': 'Click Create New Trip.',
  'help.guide.create-trip.result':
    'The trip appears on your dashboard. If it is your next one, it takes over the boarding pass at the top.',
  'help.guide.create-trip.tip.1':
    'Dates can be changed later. If bookings already exist, TREK asks whether to move them along with the days.',
  'help.guide.create-trip.tip.2':
    'The trip currency you pick here is what every cost is converted into. Choose the currency of the destination.',

  // edit-trip
  'help.guide.edit-trip.title': 'Edit a trip',
  'help.guide.edit-trip.goal': 'Rename a trip, change its dates or adjust its settings.',
  'help.guide.edit-trip.step.1': 'Hover the trip card (or the boarding pass) and click the pencil.',
  'help.guide.edit-trip.step.2':
    'Change what you need: name, description, dates, cover, currency, reminder or members.',
  'help.guide.edit-trip.step.3': 'Click Update.',
  'help.guide.edit-trip.result': 'The card updates right away, for every member of the trip.',
  'help.guide.edit-trip.tip.1':
    'Moving the dates of a trip that already has bookings opens a second step that asks whether the bookings should move too.',

  // cover-image
  'help.guide.cover-image.title': 'Set a cover photo',
  'help.guide.cover-image.goal': 'Give a trip a picture that shows on its card and on the boarding pass.',
  'help.guide.cover-image.step.1': 'Open the trip’s edit form via the pencil on its card.',
  'help.guide.cover-image.step.2':
    'In Cover Image, drop a photo, click to upload one, or type a destination into the Unsplash search.',
  'help.guide.cover-image.step.3': 'Pick a photo and click Update.',
  'help.guide.cover-image.result': 'The photo is saved with the trip and shows everywhere the trip is listed.',
  'help.guide.cover-image.tip.1':
    'Photos from the Unsplash search are credited automatically; your own uploads stay on your server.',

  // duplicate-trip
  'help.guide.duplicate-trip.title': 'Duplicate a trip',
  'help.guide.duplicate-trip.goal': 'Reuse a trip as the template for a new one.',
  'help.guide.duplicate-trip.step.1': 'Hover the card and click the duplicate icon.',
  'help.guide.duplicate-trip.step.2': 'Read what will be copied and what will not, then confirm.',
  'help.guide.duplicate-trip.result': 'A copy appears next to the original, ready to be renamed and re-dated.',
  'help.guide.duplicate-trip.tip.1':
    'Days, places, reservations, budget items, packing lists and day notes come along. Members, chat, polls, files and share links do not.',

  // archive-trip
  'help.guide.archive-trip.title': 'Archive and restore a trip',
  'help.guide.archive-trip.goal': 'Tuck a trip away without deleting it, and bring it back later.',
  'help.guide.archive-trip.step.1': 'Hover the card and click Archive.',
  'help.guide.archive-trip.step.2': 'Switch the filter above the cards to Archived to see it again.',
  'help.guide.archive-trip.step.3': 'Click Restore on the card to move it back to Planned.',
  'help.guide.archive-trip.result':
    'Archived trips keep everything. They just stop cluttering the dashboard and the all-trips calendar feed.',

  // delete-trip
  'help.guide.delete-trip.title': 'Delete a trip',
  'help.guide.delete-trip.goal': 'Remove a trip for good.',
  'help.guide.delete-trip.step.1': 'Hover the card and click the trash icon.',
  'help.guide.delete-trip.step.2': 'Confirm. The dialog names the trip, so you know you have the right one.',
  'help.guide.delete-trip.result':
    'The trip, its days, places, bookings and files are gone. There is no undo, so archive instead if you are unsure.',

  // filter-and-view
  'help.guide.filter-and-view.title': 'Find completed trips, switch grid and list',
  'help.guide.filter-and-view.goal': 'See finished or archived trips and pick the layout you like.',
  'help.guide.filter-and-view.step.1':
    'Use Planned, Archived and Completed above the cards. Completed is every trip whose end date has passed.',
  'help.guide.filter-and-view.step.2': 'Click the list icon to switch to a compact list; click it again for the grid.',
  'help.guide.filter-and-view.result': 'The dashboard remembers your layout on this device.',

  // calendar-feed
  'help.guide.calendar-feed.title': 'Subscribe to all trips in your calendar',
  'help.guide.calendar-feed.goal': 'See the days and bookings of every active trip in your calendar app, kept in sync.',
  'help.guide.calendar-feed.step.1': 'Click the calendar icon next to the view toggle.',
  'help.guide.calendar-feed.step.2': 'Click Enable calendar subscription. TREK generates a private feed link.',
  'help.guide.calendar-feed.step.3':
    'Add the feed with one of the buttons (Google, Apple, Outlook) or copy the link into any calendar app that subscribes to URLs.',
  'help.guide.calendar-feed.result':
    'Every active trip shows in your calendar and updates on its own. Archived trips and trips that ended more than 90 days ago are left out.',
  'help.guide.calendar-feed.tip.1':
    'The link is a secret. Anyone who has it can read the feed; revoke it from the same dialog if it leaks.',

  // widgets
  'help.guide.widgets.title': 'Choose your dashboard widgets',
  'help.guide.widgets.goal': 'Show or hide the stats row and the widgets on the right.',
  'help.guide.widgets.step.1': 'Open your avatar menu in the top-right corner and choose Settings.',
  'help.guide.widgets.step.2': 'Switch to the Appearance tab.',
  'help.guide.widgets.step.3':
    'Under Dashboard widgets, switch each widget on or off. Desktop and mobile are set separately.',
  'help.guide.widgets.step.4': 'Go back to the dashboard. The change is applied immediately.',
  'help.guide.widgets.result':
    'Hidden widgets free the space for your trips; switch the whole right sidebar off to centre the layout.',
  'help.guide.widgets.link': 'Open Appearance settings',

  // currency-widget
  'help.guide.currency-widget.title': 'Convert currencies',
  'help.guide.currency-widget.goal': 'Convert an amount between two currencies with current rates.',
  'help.guide.currency-widget.step.1': 'Type the amount and pick the two currencies.',
  'help.guide.currency-widget.step.2': 'The arrow between them swaps the pair; the circular arrow refreshes the rate.',
  'help.guide.currency-widget.result':
    'Your currency pair is remembered on your account, so it is the same on every device.',
  'help.guide.currency-widget.tip.1': 'Rates come from the European Central Bank and update once a day.',

  // timezones-widget
  'help.guide.timezones-widget.title': 'Add world clocks',
  'help.guide.timezones-widget.goal': 'Keep an eye on the local time at your destinations.',
  'help.guide.timezones-widget.step.1': 'Click + in the Timezones widget and search for a city.',
  'help.guide.timezones-widget.step.2': 'Remove a clock with the × next to it.',
  'help.guide.timezones-widget.result': 'Your clocks are saved with your account.',

  // ── Screen: vacay ──────────────────────────────────────────────────────────
  'help.ctx.vacay.title': 'Vacay',
  'help.ctx.vacay.summary':
    'Vacay is your personal leave planner: how many vacation days you have in a year, which ones you have logged and what is left. The grid shows the whole year at a glance; the sidebar holds the year selector, the people you plan with, calendars shared with you, the legend and your entitlement.',
  'help.ctx.vacay.bullet.1':
    'Year grid: twelve month cards, one cell per day. Click a day to log or clear it. A small blue dot marks days a trip already covers.',
  'help.ctx.vacay.bullet.2':
    'Toolbar at the bottom: Vacation or Company Holiday mode, plus the Half day and Comp / Flex switches that change what a click logs.',
  'help.ctx.vacay.bullet.3':
    'Entitlement: your days for the year, how many are used and how many are left, with carry-over from the previous period.',
  'help.ctx.vacay.bullet.4':
    'Persons are people fused into your plan, each in their own colour. Shared Calendars are read-only rings of other people’s days off.',
  'help.ctx.vacay.bullet.5':
    'Settings cover weekends, week start, carry-over, your leave year, company holidays and public or school holiday calendars.',

  // log-day
  'help.guide.log-day.title': 'Log a vacation day',
  'help.guide.log-day.goal': 'Mark a day off in the year grid and see your balance follow.',
  'help.guide.log-day.step.1':
    'Check the toolbar at the bottom: the left button, in your colour, means a click logs a vacation day for you.',
  'help.guide.log-day.step.2': 'Click a day in any month card. It fills with your colour and Used counts one more day.',
  'help.guide.log-day.step.3': 'Click the same day again to clear it.',
  'help.guide.log-day.result':
    'The day is logged, Days, Used and Left update at once, and anyone fused into your plan sees it live.',
  'help.guide.log-day.tip.1': 'Weekends cannot be logged while Block Weekends is on in Settings.',
  'help.guide.log-day.tip.2':
    'A blue dot in a cell means one of your trips covers that day, so you can see where leave and travel line up.',

  // half-day
  'help.guide.half-day.title': 'Log a half day',
  'help.guide.half-day.goal': 'Take an afternoon off without spending a whole day of entitlement.',
  'help.guide.half-day.step.1':
    'Switch Half day on in the toolbar. Its orange dot is the marker a half day gets in the grid.',
  'help.guide.half-day.step.2': 'Click a day. It is logged as 0.5 and carries the orange dot in its corner.',
  'help.guide.half-day.step.3':
    'Switch Half day off again when you are done; clicking a half day with different settings converts it in place.',
  'help.guide.half-day.result':
    'Used grows by 0.5. Half day and Comp / Flex are independent, so a half comp day is possible too.',
  'help.guide.half-day.tip.1':
    'The toolbar always shows the marker your next click will place, so you can check before you log.',

  // comp-day
  'help.guide.comp-day.title': 'Log comp or flex time',
  'help.guide.comp-day.goal': 'Take time off in lieu that does not cost vacation days.',
  'help.guide.comp-day.step.1':
    'Switch Comp / Flex on in the toolbar. The hatched disc is how a comp day looks in the grid.',
  'help.guide.comp-day.step.2': 'Click a day. It fills with a diagonal hatch in your colour instead of a solid block.',
  'help.guide.comp-day.result': 'Comp days are counted beside the entitlement tiles and never reduce Left.',
  'help.guide.comp-day.tip.1':
    'Overtime taken back, flextime, a day in lieu: anything that is time off but not vacation belongs here.',

  // entitlement
  'help.guide.entitlement.title': 'Set your entitlement',
  'help.guide.entitlement.goal': 'Tell Vacay how many vacation days you have in the year.',
  'help.guide.entitlement.step.1': 'In the sidebar, click the Days tile under Entitlement.',
  'help.guide.entitlement.step.2': 'Type your number of days and press Enter.',
  'help.guide.entitlement.result':
    'Left is recalculated from your entitlement, any carry-over and the days you have used.',
  'help.guide.entitlement.tip.1': 'Each year has its own entitlement, so a change here affects the selected year only.',

  // years
  'help.guide.years.title': 'Add and switch years',
  'help.guide.years.goal': 'Plan next year already, or look back at the last one.',
  'help.guide.years.step.1':
    'Click the + to the right of the year to add the next year, or the + on the left for the previous one.',
  'help.guide.years.step.2': 'Switch between years with the arrows or the year chips underneath.',
  'help.guide.years.step.3':
    'To remove a year, hover its chip and click the small minus. Its entries go with it, so confirm carefully.',
  'help.guide.years.result': 'Every year keeps its own entitlement and entries; carry-over links them together.',

  // company-holidays
  'help.guide.company-holidays.title': 'Mark company holidays',
  'help.guide.company-holidays.goal': 'Block days the whole company is off without spending anyone’s entitlement.',
  'help.guide.company-holidays.step.1':
    'Open Settings and check that Company Holidays is on. It is on by default; the toolbar only offers the mode while it is.',
  'help.guide.company-holidays.step.2': 'Back in the grid, switch the toolbar to Company Holiday mode.',
  'help.guide.company-holidays.step.3': 'Click the days. They turn amber and show up in the legend.',
  'help.guide.company-holidays.result':
    'Company holidays are visible to everyone fused into the plan and never reduce Left.',
  'help.guide.company-holidays.tip.1': 'Any fused person can edit company holidays, so agree on who maintains them.',

  // public-holidays
  'help.guide.public-holidays.title': 'Show public holidays',
  'help.guide.public-holidays.goal': 'Put the public holidays of your country or region on the grid.',
  'help.guide.public-holidays.step.1': 'Open Settings and switch Public Holidays on.',
  'help.guide.public-holidays.step.2':
    'Click Add calendar, then pick the country and, where it matters, the region. Give it a colour and a label if you like.',
  'help.guide.public-holidays.step.3': 'Close Settings. The holidays appear on the grid and in the legend.',
  'help.guide.public-holidays.result':
    'Public holidays are marked in the calendar’s colour and never count against your entitlement.',
  'help.guide.public-holidays.tip.1':
    'You can add several calendars, for example your own region and the one of a fused colleague.',

  // school-holidays
  'help.guide.school-holidays.title': 'Show school holidays',
  'help.guide.school-holidays.goal': 'See the school breaks of your region alongside your own days off.',
  'help.guide.school-holidays.step.1': 'Open Settings and switch School Holidays on.',
  'help.guide.school-holidays.step.2':
    'Click Add calendar and pick the country. Where a country splits its calendar, pick the region or group as well.',
  'help.guide.school-holidays.step.3': 'Close Settings. Each break gets a coloured band along the bottom of its days.',
  'help.guide.school-holidays.result': 'School holidays are purely visual: they never reduce anyone’s entitlement.',
  'help.guide.school-holidays.tip.1':
    'Missing region? Your administrator can maintain school holidays by hand under Admin, Personalization, School holidays.',

  // weekends
  'help.guide.weekends.title': 'Block weekends and set the week start',
  'help.guide.weekends.goal': 'Keep weekends out of your count and start the week on the day you are used to.',
  'help.guide.weekends.step.1': 'Open Settings.',
  'help.guide.weekends.step.2': 'Switch Block Weekends on and pick which days count as your weekend.',
  'help.guide.weekends.step.3': 'Under Week starts on, choose Monday or Sunday.',
  'help.guide.weekends.result': 'Blocked days are greyed out in the grid and cannot be logged by mistake.',

  // leave-year
  'help.guide.leave-year.title': 'Set your leave year',
  'help.guide.leave-year.goal':
    'Count your entitlement over a fiscal year or from your hire date instead of January to December.',
  'help.guide.leave-year.step.1': 'Open Settings and find Vacation year.',
  'help.guide.leave-year.step.2':
    'Choose Calendar, Fiscal (with the month and day it starts) or Hire date (with the date you were hired).',
  'help.guide.leave-year.result':
    'Entitlement, used days and carry-over follow that period, and the grid starts on its first month.',
  'help.guide.leave-year.tip.1':
    'This setting is personal: in a fused plan everyone keeps their own leave year and numbers.',

  // carry-over
  'help.guide.carry-over.title': 'Carry unused days over',
  'help.guide.carry-over.goal': 'Add what is left at the end of a period to the next one.',
  'help.guide.carry-over.step.1': 'Open Settings.',
  'help.guide.carry-over.step.2': 'Switch Carry Over on.',
  'help.guide.carry-over.result':
    'The carried amount is recalculated across all your years and shown under the entitlement.',
  'help.guide.carry-over.tip.1': 'Switching it off sets every carry-over balance back to zero.',

  // invite
  'help.guide.invite.title': 'Plan together with someone',
  'help.guide.invite.goal': 'Fuse your plan with another TREK user so you see each other’s days off in one grid.',
  'help.guide.invite.step.1': 'Click the person icon in the Persons panel.',
  'help.guide.invite.step.2': 'Pick the user and send the invite.',
  'help.guide.invite.step.3': 'They get a notification and accept. Until then the invite shows as pending.',
  'help.guide.invite.result':
    'Both plans merge: each person has a colour, you can log days for each other, and everything syncs live.',
  'help.guide.invite.tip.1': 'To undo a fusion, use Dissolve in Settings. Everyone’s entries return to their own plan.',
  'help.guide.invite.tip.2': 'If the other person should only see your days, share your calendar instead of fusing.',

  // share-calendar
  'help.guide.share-calendar.title': 'Share your calendar read-only',
  'help.guide.share-calendar.goal': 'Let someone see when you are off without giving them a say in your plan.',
  'help.guide.share-calendar.step.1': 'Click the share icon in the Shared Calendars panel.',
  'help.guide.share-calendar.step.2': 'Pick the user and click Share. No acceptance is needed.',
  'help.guide.share-calendar.step.3':
    'Calendars shared with you appear in the same panel; the eye hides one, Stop sharing revokes yours.',
  'help.guide.share-calendar.result':
    'Your days off appear as a coloured ring on their grid. Nothing you share can be edited by them.',
  'help.guide.share-calendar.tip.1':
    'Sharing and fusion are independent: you can be fused with one person and share with others.',
  'help.guide.share-calendar.tip.2': 'Hover a ringed day to see who is off and for how long.',

  // ── Screen: atlas ──────────────────────────────────────────────────────────
  'help.ctx.atlas.title': 'Atlas',
  'help.ctx.atlas.summary':
    'Atlas is your travel footprint on a world map: every country a trip has taken you to is coloured in, and you can add the ones you visited before TREK by hand. Zoom in for regions, keep a bucket list of places you still want to see, and read your numbers in the glass panel at the bottom.',
  'help.ctx.atlas.bullet.1':
    'The map: visited countries carry a colour that stays theirs, planned countries have a dashed outline, bucket-list countries a diagonal hatch, everywhere else is grey. Hover a country for its trips, places and first and last visit.',
  'help.ctx.atlas.bullet.2':
    'Search at the top: type a country or a place. Picking a country flies there and opens its popup; picking a place lands in its region so you can mark that.',
  'help.ctx.atlas.bullet.3':
    'Show planned countries, top right: reveals the countries of your upcoming trips. The switch only appears while you have some.',
  'help.ctx.atlas.bullet.4':
    'Panel at the bottom: the Stats tab with countries, trips, places, cities, days, continents and your streak; the Bucket List tab with what is still ahead.',
  'help.ctx.atlas.bullet.5':
    'Regions: from zoom level 5 the map switches to states and provinces, each one clickable to mark or unmark.',
  'help.ctx.atlas.bullet.6':
    'Dawarich: with the addon connected, a panel left of the statistics ticks off wishes and adds countries from your recordings, never without your confirmation.',
  // mark-country
  'help.guide.mark-country.title': 'Mark a country as visited',
  'help.guide.mark-country.goal': 'Add a country you have been to before TREK, so the map and your count include it.',
  'help.guide.mark-country.step.1': 'Type the country into the search box at the top of the map.',
  'help.guide.mark-country.step.2': 'Pick it from the list. The map flies there and a popup opens for that country.',
  'help.guide.mark-country.step.3': 'Choose Mark as visited.',
  'help.guide.mark-country.result':
    'The country takes its colour on the map and Countries counts one more. That colour is permanent: marking further countries never reshuffles the rest.',
  'help.guide.mark-country.tip.1':
    'Clicking a grey country on the map opens the same popup; search is the sure way in for small countries.',
  'help.guide.mark-country.tip.2':
    'A country you mark by hand always counts as visited, whatever the dates of any trip going there.',
  // unmark-country
  'help.guide.unmark-country.title': 'Remove a country you marked',
  'help.guide.unmark-country.goal': 'Take a hand-marked country off the map again.',
  'help.guide.unmark-country.step.1':
    'Search the country and pick it, or click it on the map. For a country you marked yourself the popup asks whether to remove it.',
  'help.guide.unmark-country.step.2': 'Confirm with Remove.',
  'help.guide.unmark-country.result': 'The country goes back to grey and leaves your count.',
  'help.guide.unmark-country.tip.1':
    'Only hand-marked countries can be removed this way. A country with trips or places stays until those do; Remove also sits in its detail card in the panel when it was marked by hand.',
  // country-details
  'help.guide.country-details.title': 'See what you did in a country',
  'help.guide.country-details.goal': 'Open a visited country and jump to the trips that took you there.',
  'help.guide.country-details.step.1': 'Search a country you have visited.',
  'help.guide.country-details.step.2':
    'Pick it. The map flies there and the panel at the bottom grows a card with its flag, places, trips and a chip per trip.',
  'help.guide.country-details.result': 'Click a trip chip to open that trip in the planner.',
  'help.guide.country-details.tip.1':
    'Hovering the country on the map shows the same numbers plus the first and last visit.',
  // planned-countries
  'help.guide.planned-countries.title': 'Show the countries you are going to',
  'help.guide.planned-countries.goal':
    'Bring the countries of your upcoming trips onto the map without counting them as visited.',
  'help.guide.planned-countries.step.1':
    'Turn on Show planned countries, top right. The number next to it is how many are waiting.',
  'help.guide.planned-countries.step.2':
    'Search a planned country and pick it: the panel says Planned and the map tooltip shows when you are going.',
  'help.guide.planned-countries.result':
    'Planned countries appear with a dashed outline, so they never look like somewhere you have already been. The switch remembers your choice.',
  'help.guide.planned-countries.tip.1':
    'A country counts as visited once the trip there has started; a trip under way counts too. Trips without dates stay out of the statistics entirely.',
  'help.guide.planned-countries.tip.2': 'The switch only exists while you have upcoming trips.',
  // regions
  'help.guide.regions.title': 'Mark a region',
  'help.guide.regions.goal': 'Go finer than countries: mark the states, provinces or prefectures you have been to.',
  'help.guide.regions.step.1':
    'Zoom into a country until its regions appear, from zoom level 5. Searching the country and picking it flies you close enough.',
  'help.guide.regions.step.2': 'Click a region. Hovering names it; the popup shows the region and its country.',
  'help.guide.regions.step.3': 'Choose Mark as visited.',
  'help.guide.regions.result':
    'The region fills with the country’s colour. Marking a region also counts the country as visited if it was not already.',
  'help.guide.regions.tip.1': 'Clicking a visited region offers Remove, whether you marked it or a place put it there.',
  'help.guide.regions.tip.2': 'Regions you have real places in are marked for you; nothing to do there.',
  // search-place
  'help.guide.search-place.title': 'Find a place and mark its region',
  'help.guide.search-place.goal': 'Mark Lombardy by searching for Milan, without knowing which region a city is in.',
  'help.guide.search-place.step.1':
    'Type a city, a landmark or an address into the search box. Countries come first; the matching places appear under Places below them.',
  'help.guide.search-place.step.2': 'Pick the place. The map flies there and works out which region the spot is in.',
  'help.guide.search-place.step.3':
    'Choose Mark as visited for that region, or Add to bucket list if it is still ahead of you.',
  'help.guide.search-place.result':
    'The region is marked, and with it the country. Countries without region data in the map bundle fall back to the country itself.',
  'help.guide.search-place.tip.1':
    'Places come from the same search as everywhere else in TREK, so they follow the provider your admin set up.',
  // bucket-country
  'help.guide.bucket-country.title': 'Put a country on the bucket list',
  'help.guide.bucket-country.goal':
    'Keep a wishlist of countries right on the map, apart from the ones you have been to.',
  'help.guide.bucket-country.step.1': 'Search the country and pick it, or click it on the map.',
  'help.guide.bucket-country.step.2': 'Choose Add to bucket list.',
  'help.guide.bucket-country.step.3':
    'Pick a month and year if you already know when, then confirm with Add to bucket list.',
  'help.guide.bucket-country.result':
    'The country is drawn with a diagonal hatch in the colour it will carry once you get there, and it appears in the Bucket List tab of the panel.',
  'help.guide.bucket-country.tip.1': 'The same popup offers Remove from wishlist once the country is on the list.',
  'help.guide.bucket-country.tip.2':
    'One entry per target date: the same country can be on the list for two different months, but not twice for the same one.',
  // bucket-place
  'help.guide.bucket-place.title': 'Add a place to the bucket list',
  'help.guide.bucket-place.goal':
    'Save a city, a sight or an address you dream of, with coordinates and a target date.',
  'help.guide.bucket-place.step.1': 'Open the Bucket List tab in the panel at the bottom.',
  'help.guide.bucket-place.step.2': 'Click Add place.',
  'help.guide.bucket-place.step.3':
    'Type the name and press the search button; pick the match so the place carries coordinates. Typing a name and skipping the search works too.',
  'help.guide.bucket-place.step.4': 'Pick a month and year if you like and click Add.',
  'help.guide.bucket-place.result':
    'The place sits at the top of your bucket list with its target date; the × next to it removes it again.',
  'help.guide.bucket-place.tip.1':
    'A wish with coordinates is what Dawarich can tick off for you later, once your recordings show you were there.',
  // stats
  'help.guide.stats.title': 'Read your statistics',
  'help.guide.stats.goal': 'Know what the numbers in the panel count, and what they do not.',
  'help.guide.stats.step.1':
    'Countries is the number of distinct countries you have actually been to; planned ones are shown next to it, not in it. Trips, Places and Days are totals across all your trips. Cities is worked out from your places’ addresses, so it is an estimate.',
  'help.guide.stats.step.2':
    'The continents show visited countries per continent; Antarctica joins the row once you have been. Then your streak, consecutive years with at least one trip, and how many trips you took this year.',
  'help.guide.stats.result': 'The numbers follow your trips as you plan them; nothing here needs maintaining.',
  'help.guide.stats.tip.1':
    'Cities are read from the address text, not looked up, so a short address like “Osteria Francescana, Italy” or one ending on a prefecture can land a region rather than a city.',
  'help.guide.stats.tip.2':
    'Countries you marked by hand count in Countries and the continents, but bring no trips, places or days.',

  // ── Screen: collections ────────────────────────────────────────────────────
  'help.ctx.collections.title': 'Collections',
  'help.ctx.collections.summary':
    'Collections is your place library outside of any trip: named lists of places you found and want to keep, each place with a status of Idea, Want to go or Visited. Places are copied into and out of trips, never linked, so a list and a trip never change each other.',
  'help.ctx.collections.bullet.1':
    'Lists rail on the left: your own lists, the ones shared with you, invites waiting for a yes, All saved as the union of everything you own, and New list plus the file import at the top.',
  'help.ctx.collections.bullet.2':
    'Hero of the open list: its colour, cover, description and links, the members, and the Edit, Export and Share actions on the right.',
  'help.ctx.collections.bullet.3':
    'Filter row above the places: status, category, rating and sort, the label filter, the + to add a place, the trip import, and Select for bulk actions.',
  'help.ctx.collections.bullet.4':
    'Place rows: avatar, name and address, labels and category, and the status pill on the right that cycles with one click.',
  'help.ctx.collections.bullet.5':
    'Map on the right: a pin per place with coordinates, the list or map toggle, the search box and the label filter. Clicking a pin opens that place.',
  'help.ctx.collections.bullet.6':
    'Detail sheet: click a row for the cover, category, labels, status, description and links, with Edit, Copy to trip and Remove from list.',
  // create-list
  'help.guide.create-list.title': 'Create a list',
  'help.guide.create-list.goal': 'Start a new named list, with a colour and a cover, ready for places.',
  'help.guide.create-list.step.1': 'Click New list at the top of the lists rail.',
  'help.guide.create-list.step.2':
    'Give the list a name and pick a colour. Cover image, description and links are optional; you can add them later with Edit.',
  'help.guide.create-list.step.3': 'Click Create.',
  'help.guide.create-list.result':
    'The list opens empty, with Add a place and Import from a trip as the two ways to fill it.',
  'help.guide.create-list.tip.1':
    'The cover can be an upload of your own or a picture found through the Unsplash search in the same dialog.',
  // add-place
  'help.guide.add-place.title': 'Add a place',
  'help.guide.add-place.goal':
    'Find a place and save it to the open list with name, category, status and notes in one go.',
  'help.guide.add-place.step.1': 'Click the + in the filter row above the places.',
  'help.guide.add-place.step.2':
    'Type the place into the search field and pick a result. Name, address and coordinates fill in from it.',
  'help.guide.add-place.step.3':
    'Set the status and, if you like, a category, a description and links, then click Add. The dialog stays open for the next place; Cancel closes it.',
  'help.guide.add-place.result': 'The place appears in the list and, when it has coordinates, as a pin on the map.',
  'help.guide.add-place.tip.1':
    'From inside a trip, Save to collection in the place inspector or the place menu puts a trip place on a list without leaving the trip.',
  'help.guide.add-place.tip.2':
    'The list must be yours or one where you are an editor or admin; the + is not there on All saved or on a list you only view.',
  // import-from-trip
  'help.guide.import-from-trip.title': 'Import places from a trip',
  'help.guide.import-from-trip.goal':
    "Bring a whole trip's places onto a list at once instead of saving them one by one.",
  'help.guide.import-from-trip.step.1':
    'Click the import button with the cloud arrow in the filter row. On an empty list the same action sits next to Add a place.',
  'help.guide.import-from-trip.step.2': 'Pick one of your trips.',
  'help.guide.import-from-trip.step.3':
    'Tick the places you want. Places already on the list are greyed out; the ones no day of the trip holds start out selected. Only new hides what you already have.',
  'help.guide.import-from-trip.step.4': 'Click Import. The button always says how many are about to be added.',
  'help.guide.import-from-trip.result':
    'The places are copied onto the list with their name, address, coordinates, description and category. The trip stays as it was.',
  'help.guide.import-from-trip.tip.1':
    'Duplicates by name or coordinates are skipped automatically, so importing twice does no harm.',
  'help.guide.import-from-trip.tip.2':
    "Inside a trip's place list, select mode offers Save to collection for a hand-picked set of places instead.",
  // place-status
  'help.guide.place-status.title': "Set a place's status",
  'help.guide.place-status.goal': 'Keep track of what is an idea, what is on the shortlist and where you have been.',
  'help.guide.place-status.step.1': 'Click the status pill at the right end of a place row. Idea becomes Want to go.',
  'help.guide.place-status.step.2': 'Click it again for Visited, and once more to start over at Idea.',
  'help.guide.place-status.result':
    'The pill and its colour change at once; the status filter above the list counts along.',
  'help.guide.place-status.tip.1':
    'Status is a Collections thing: copying a place into a trip does not carry it along.',
  'help.guide.place-status.tip.2':
    'From a trip, Save to list shows a status pill per list the place is on, and the places panel has a mark visited action for a selection.',
  // place-detail
  'help.guide.place-detail.title': 'Open a saved place',
  'help.guide.place-detail.goal': 'See everything about a place and act on it: edit, copy to a trip, remove.',
  'help.guide.place-detail.step.1':
    'Click a place row. The detail sheet opens beside the list and the map pans to the place.',
  'help.guide.place-detail.step.2':
    'At the bottom sit Edit, Copy to trip and Remove from list; the camera on the cover swaps the automatic photo for one of your own.',
  'help.guide.place-detail.result':
    'Edit unlocks name, category, labels, address, coordinates, description and links right in the sheet.',
  'help.guide.place-detail.tip.1':
    'The cover is fetched automatically when the place has no picture of its own. Your own upload can be JPG, PNG, GIF or WebP up to 20 MB.',
  'help.guide.place-detail.tip.2':
    'Members of a shared list can also leave a star rating here, and the rating filter in the filter row uses the average.',
  // labels
  'help.guide.labels.title': 'Group places with labels',
  'help.guide.labels.goal': 'Give a list its own labels, such as districts or days, beyond the shared categories.',
  'help.guide.labels.step.1': 'Open the label manager from the label control in the filter row.',
  'help.guide.labels.step.2':
    'Type a name, pick a colour and click Add label. Rename, recolour or delete existing labels in the same dialog.',
  'help.guide.labels.step.3':
    'Turn on Select, tick the places and click Assign label in the selection bar. A single place also takes labels through Edit on its detail sheet.',
  'help.guide.labels.step.4':
    'Pick one or more labels in the filter row to narrow the list and the map to places carrying any of them.',
  'help.guide.labels.result':
    'Labelled places show their labels on the row; the label filter is there for every member, including viewers.',
  'help.guide.labels.tip.1':
    'Labels belong to the one list they were created in. Moving a place to another list drops them.',
  'help.guide.labels.tip.2': 'Managing and assigning labels needs edit rights on the list.',
  // filter-select
  'help.guide.filter-select.title': 'Filter and select places',
  'help.guide.filter-select.goal': 'Narrow the list down and act on many places at once.',
  'help.guide.filter-select.step.1':
    'Use the dropdowns in the filter row: status, category, minimum rating and sort order. Each one shows how many places it would leave.',
  'help.guide.filter-select.step.2': 'Click Select. Every row gets a checkbox and a selection bar appears.',
  'help.guide.filter-select.step.3':
    'Tick places or use Select all for everything currently filtered, then choose Assign label, Move to list, Duplicate to list, Copy to trip or Delete.',
  'help.guide.filter-select.result':
    'The actions apply to the whole selection at once. The × on the right leaves select mode.',
  'help.guide.filter-select.tip.1':
    'Select all follows the filter, so filtering to Want to go and selecting all is the quick way to act on the shortlist.',
  // copy-to-trip
  'help.guide.copy-to-trip.title': 'Copy places into a trip',
  'help.guide.copy-to-trip.goal': 'Turn saved places into stops on one of your trips.',
  'help.guide.copy-to-trip.step.1':
    'Turn on Select and tick the places, or open one place and use Copy to trip on its detail sheet.',
  'help.guide.copy-to-trip.step.2': 'Click Copy to trip in the selection bar.',
  'help.guide.copy-to-trip.step.3': 'Pick the trip. The search box narrows a long list.',
  'help.guide.copy-to-trip.result':
    "The places land in that trip's place list with name, description, category, notes, price, coordinates, photo and tags. Nothing changes in the collection.",
  'help.guide.copy-to-trip.tip.1':
    'Viewers of a shared list can do this too; it copies out of the list, it does not change it.',
  // share-list
  'help.guide.share-list.title': 'Share a list with someone',
  'help.guide.share-list.goal': 'Plan a list together with other people on this TREK, live.',
  'help.guide.share-list.step.1': 'Click Share in the hero of your list.',
  'help.guide.share-list.step.2': 'Select the user and a role: Viewer, Editor or Admin.',
  'help.guide.share-list.step.3':
    'Click Send invite. The person shows as pending until they accept the invite in their lists rail.',
  'help.guide.share-list.result':
    'Once accepted, the list appears under Shared for them and every change syncs live. Members and their roles stay editable in the same dialog.',
  'help.guide.share-list.tip.1':
    'Viewers can look, rate and copy places into their own trips. Editors add and edit places and labels. Admins can also delete.',
  'help.guide.share-list.tip.2':
    'Only the owner invites and removes people; a member can leave a shared list themselves.',
  // export-list
  'help.guide.export-list.title': 'Export a list as a file',
  'help.guide.export-list.goal': 'Hand a list to someone on another TREK, or take it into a map app.',
  'help.guide.export-list.step.1': 'Click Export in the hero of the list.',
  'help.guide.export-list.step.2':
    'Pick TREK list for another TREK, with labels and status, or GPX for OsmAnd, Organic Maps, a Garmin and other apps that read waypoints.',
  'help.guide.export-list.result': 'The file downloads. Any member of a shared list may export it.',
  'help.guide.export-list.tip.1':
    'A place without coordinates cannot be a GPX waypoint; it is left out and TREK tells you how many were.',
  'help.guide.export-list.tip.2':
    'Ratings, members and uploaded photos stay behind on purpose; they belong to this TREK, not to the list.',
  // import-file
  'help.guide.import-file.title': 'Import a list from a file',
  'help.guide.import-file.goal': 'Bring in a TREK list file or a GPX file, as a new list or into one you have.',
  'help.guide.import-file.step.1': 'Click the import button with the upload arrow next to New list in the lists rail.',
  'help.guide.import-file.step.2':
    'Choose the file. TREK shows what is in it before anything happens: the name, how many places and labels.',
  'help.guide.import-file.step.3':
    'Keep New list and change the name if you like, or pick Add to a list to put the places into a list you can edit, then click Import.',
  'help.guide.import-file.result':
    'You land on the list with the imported places. Adding to a list only ever adds; places already there keep their status, notes and labels.',
  'help.guide.import-file.tip.1':
    'From a GPX every named waypoint becomes a place; tracks are lines and are left out, and the preview says how many points that was.',
  'help.guide.import-file.tip.2':
    'A file that is neither a TREK list nor a GPX is refused with a reason; a single unreadable place is skipped, not the whole file.',
  // edit-list
  'help.guide.edit-list.title': 'Edit or delete a list',
  'help.guide.edit-list.goal': "Change a list's name, colour, cover, description or links, or remove the list.",
  'help.guide.edit-list.step.1': 'Click Edit in the hero of the list. Only the owner sees it.',
  'help.guide.edit-list.step.2':
    'Change what you like and click Save. Delete list at the bottom left removes the list with all of its places, after a confirmation.',
  'help.guide.edit-list.result': 'The hero takes the new colour, cover and description right away.',
  'help.guide.edit-list.tip.1': 'Deleting a list cannot be undone. Export it first if you want to keep a copy.',
  // all-saved
  'help.guide.all-saved.title': 'Search your whole library',
  'help.guide.all-saved.goal': 'Look across every list you own at once.',
  'help.guide.all-saved.step.1':
    'Click All saved in the lists rail. It unions the places of every list you own or co-own.',
  'help.guide.all-saved.step.2':
    'Use the search box and the filters as on any list; Select works here too for copying to a trip.',
  'help.guide.all-saved.result':
    'One view over all your saved places, without adding or importing, since it has no single list to put them on.',
  'help.guide.all-saved.tip.1': 'Labels are per list, so the label filter is not offered on All saved.',

  // ── Screen: journey ───────────────────────────────────────────────────────
  'help.ctx.journey.title': 'Journey',
  'help.ctx.journey.summary':
    'Journey is your photo-first travel journal. Every journey is tied to one or more trips and grows day by day from entries with a story, photos, mood and weather. This screen lists your journeys; open one to write.',
  'help.ctx.journey.bullet.1':
    'The banner at the top shows the journey under way, or your latest one, with its entry, photo and place counts. Continue writing opens it on today.',
  'help.ctx.journey.bullet.2':
    'Below, one card per journey with its cover, subtitle, dates and counts. Click a card to open it.',
  'help.ctx.journey.bullet.3': 'The last card in the grid, Create a new Journey, starts one from your trips.',
  // create-journey
  'help.guide.create-journey.title': 'Create a journey',
  'help.guide.create-journey.goal':
    "Start a journal for a trip, with the trip's places already waiting as suggestions.",
  'help.guide.create-journey.step.1': 'Click Create a new Journey, the last card in the grid.',
  'help.guide.create-journey.step.2':
    'Give it a name and, if you like, a subtitle, then tick the trips it belongs to. The counter says how many places will come in.',
  'help.guide.create-journey.step.3': 'Click Create Journey.',
  'help.guide.create-journey.result':
    'The journal opens. Every place of the linked trips sits in the timeline as a suggestion, one per day it stands on, ready to be written into.',
  'help.guide.create-journey.tip.1': 'More trips can be linked later from Journey Settings.',
  'help.guide.create-journey.tip.2': 'A journey without trips works too; you then add entries by hand.',
  // open-journey
  'help.guide.open-journey.title': 'Open a journey',
  'help.guide.open-journey.goal': 'Get into a journal, and know where it opens.',
  'help.guide.open-journey.step.1':
    'Click a card. Each one shows the cover, the dates and how many entries, photos and places the journey holds.',
  'help.guide.open-journey.result':
    'A journey under way opens on today, or on the last entry before today when nothing is written yet; a finished one opens at the beginning.',
  'help.guide.open-journey.tip.1':
    'The cover is the first photo of the journey unless you set one in Journey Settings.',
  // continue-writing
  'help.guide.continue-writing.title': 'Continue the journey under way',
  'help.guide.continue-writing.goal': "Jump straight into today's page of the journey you are on.",
  'help.guide.continue-writing.step.1':
    'Click Continue writing in the banner at the top. It shows the journey under way, or the latest one when none is.',
  'help.guide.continue-writing.result':
    'The journal opens on today, or on the last entry before today when nothing is written yet.',
  'help.guide.continue-writing.tip.1':
    'The banner also offers a suggestion for a trip that has no journey yet; Dismiss hides that one.',

  // ── Screen: journey-detail ────────────────────────────────────────────────────────────
  'help.ctx.journey-detail.title': 'Journal',
  'help.ctx.journey-detail.summary':
    'One open journey: the timeline on the left, day by day, and the map on the right with every entry and the places of the linked trips. Everything that adds to the journal sits at the top; the header holds the counts, Studio, the suggestions switch and Journey Settings.',
  'help.ctx.journey-detail.bullet.1':
    'Header: cover, title and subtitle, the day, place, entry and photo counts, and on the right Studio, the suggestions switch and Journey Settings.',
  'help.ctx.journey-detail.bullet.2': 'Toolbar: Timeline and Gallery tabs, Search this journey, and Add Entry.',
  'help.ctx.journey-detail.bullet.3':
    'Timeline: one section per day with a + to add an entry on that day; entry cards with photos, mood, weather and story; suggestions from the trips in a lighter style with Dismiss this suggestion.',
  'help.ctx.journey-detail.bullet.4':
    "Map: entries as pins, linked in date order by a dashed line, the trips' places, and any GPX tracks imported into those trips.",
  'help.ctx.journey-detail.bullet.5':
    'Journey Settings: cover, name and subtitle, tracks on the map, entry fields, dismissed suggestions, linked trips, contributors, public sharing, archive and delete.',
  'help.ctx.journey-detail.bullet.6':
    'Two round buttons float over a long timeline: back to the top, and jump to the last entry.',
  // add-entry
  'help.guide.add-entry.title': 'Write an entry',
  'help.guide.add-entry.goal': "Add a day's story with title, text, mood and weather.",
  'help.guide.add-entry.step.1': 'Click Add Entry in the toolbar, or the + on a day header to start on that day.',
  'help.guide.add-entry.step.2':
    'Give the moment a name and write the story. The toolbar above the text adds bold, italic, headings, quotes, links and lists in Markdown.',
  'help.guide.add-entry.step.3':
    'Pick a mood and the weather, check the date, and pin a location if you like: search a place or use your current position.',
  'help.guide.add-entry.step.4': 'Click Save.',
  'help.guide.add-entry.result':
    'The entry appears on its day in the timeline and as a pin on the map. Its counts update in the header.',
  'help.guide.add-entry.tip.1': 'Writing into a suggestion is the same editor, with the place already set.',
  'help.guide.add-entry.tip.2': 'Tags at the bottom are free text, hidden gem or best meal, and the search finds them.',
  // entry-photos
  'help.guide.entry-photos.title': 'Add photos and videos to an entry',
  'help.guide.entry-photos.goal': "Put pictures on a day; the first one becomes the entry's cover.",
  'help.guide.entry-photos.step.1': "Open an entry's menu with the ⋯ on its card and choose Edit.",
  'help.guide.entry-photos.step.2':
    "Click Upload photos and pick the files. From Gallery takes pictures already in the journey's gallery; External photos searches a connected Immich or Synology library for that day.",
  'help.guide.entry-photos.step.3': 'Hover a picture for Make 1st to choose the cover, then click Save.',
  'help.guide.entry-photos.result':
    'The photos show on the card and in the gallery; the first one is the thumbnail everywhere.',
  'help.guide.entry-photos.tip.1':
    'Videos go on an entry the same way: mp4, m4v, webm or mov up to 500 MB, stored as uploaded.',
  'help.guide.entry-photos.tip.2':
    'HEIC files from an iPhone are converted to JPEG on upload, which drops their GPS and camera metadata.',
  // suggestions
  'help.guide.suggestions.title': 'Use or dismiss the suggestions',
  'help.guide.suggestions.goal':
    'Turn the places of your trips into entries, and clear away the ones you will not write about.',
  'help.guide.suggestions.step.1':
    'A suggestion is a lighter card with the place name in italics. Click it to open the editor with the place and day already set.',
  'help.guide.suggestions.step.2':
    'Click Dismiss this suggestion on a card you will not use. It leaves the timeline without being deleted, and the trip sync will not offer it again.',
  'help.guide.suggestions.step.3':
    'Changed your mind? Journey Settings shows how many are dismissed, and Bring back dismissed suggestions returns them all.',
  'help.guide.suggestions.result':
    'The timeline holds only what you mean to write; the header switch hides all suggestions at once while you read.',
  'help.guide.suggestions.tip.1': 'A place kept across two days gives a suggestion on each of them.',
  'help.guide.suggestions.tip.2': 'Suggestions never count in the statistics; only written entries do.',
  // add-on-day
  'help.guide.add-on-day.title': 'Add an entry on an earlier day',
  'help.guide.add-on-day.goal': 'Write about a day that already passed without fixing the date afterwards.',
  'help.guide.add-on-day.step.1': 'Click the + in the header of that day.',
  'help.guide.add-on-day.step.2': 'The editor opens with that date set. Write and Save as usual.',
  'help.guide.add-on-day.result': 'The entry lands on the right day straight away.',
  'help.guide.add-on-day.tip.1': "Within a day, the arrows in an entry's menu move it earlier or later.",
  // pros-cons
  'help.guide.pros-cons.title': 'Add a verdict',
  'help.guide.pros-cons.goal': 'Sum up a day with what was great and what was not.',
  'help.guide.pros-cons.step.1':
    'In the editor, find Pros & Cons under the story. Type a point into Pros or Cons and use Add another for the next one.',
  'help.guide.pros-cons.step.2': 'Save. The verdict shows on the card as two short lists.',
  'help.guide.pros-cons.result': 'Thumbs up and thumbs down at a glance, under the story.',
  'help.guide.pros-cons.tip.1':
    'A journey that does not use verdicts can switch the section off under Entry fields in Journey Settings.',
  // search-journey
  'help.guide.search-journey.title': 'Find something in a long journal',
  'help.guide.search-journey.goal': 'Get to the entry you mean without scrolling through weeks.',
  'help.guide.search-journey.step.1':
    'Type into Search this journey in the toolbar. The timeline filters as you type, across titles, stories, places and tags. Accents and case do not matter.',
  'help.guide.search-journey.step.2':
    'The suggestions switch in the header hides the unwritten cards while you read. Once the timeline is long, two round buttons float above its bottom edge: back to the top, and jump to the last entry.',
  'help.guide.search-journey.result': 'Only matching entries stay; clear the box to see everything again.',
  'help.guide.search-journey.tip.1':
    'A journey under way opens on today, so the current page is usually already in view.',
  'help.guide.search-journey.tip.2': 'Tags count too: searching for hidden gem finds every entry tagged with it.',
  // gallery-map
  'help.guide.gallery-map.title': 'Browse the gallery and the map',
  'help.guide.gallery-map.goal': 'See the whole journey as pictures, and as places on the map.',
  'help.guide.gallery-map.step.1':
    'Switch to Gallery in the toolbar: every photo of every entry, plus pictures uploaded to the gallery directly. Click one for the lightbox.',
  'help.guide.gallery-map.step.2':
    'The map on the right shows the entries as pins in date order, the places of the linked trips, and any GPX track imported into those trips, in the colour it has in the planner.',
  'help.guide.gallery-map.result':
    'Hover a track for its name. The dashed line between entries is drawn by TREK; a track is the route you actually recorded.',
  'help.guide.gallery-map.tip.1': 'Tracks can be switched off for a journey under Journey Settings.',
  'help.guide.gallery-map.tip.2':
    'Gallery photos with a location show up on the public map too, when both Gallery and Map are shared.',
  // entry-fields
  'help.guide.entry-fields.title': 'Switch entry fields off',
  'help.guide.entry-fields.goal': 'Keep the editor to what this journey uses.',
  'help.guide.entry-fields.step.1': 'Open Journey Settings from the header.',
  'help.guide.entry-fields.step.2': 'Under Entry fields, switch Mood, Weather or Pros & cons off.',
  'help.guide.entry-fields.result':
    'The editor stops asking for them. Nothing written is lost: switching a field back on brings the stored values into view, and a shared journey hides the same fields.',
  'help.guide.entry-fields.tip.1': 'The switches are per journey, so a work trip and a holiday can differ.',
  // link-trip
  'help.guide.link-trip.title': 'Link another trip',
  'help.guide.link-trip.goal': "Bring a second trip's places into the journal as suggestions.",
  'help.guide.link-trip.step.1': 'Open Journey Settings from the header.',
  'help.guide.link-trip.step.2': 'Under the linked trips, click Add Trip.',
  'help.guide.link-trip.step.3': 'Pick the trip.',
  'help.guide.link-trip.result':
    'Its places arrive in the timeline as suggestions on their days, and its GPX tracks join the map.',
  'help.guide.link-trip.tip.1': 'The × next to a linked trip unlinks it again; entries you wrote stay.',
  'help.guide.link-trip.tip.2': 'Entries with a day count only once, however many trips cover that day.',
  // share-public
  'help.guide.share-public.title': 'Share the journey publicly',
  'help.guide.share-public.goal': 'Give people without a TREK account a read-only link.',
  'help.guide.share-public.step.1': 'Open Journey Settings and find Public Share.',
  'help.guide.share-public.step.2': 'Click Create share link.',
  'help.guide.share-public.step.3':
    'Choose what visitors see: Timeline, Gallery and Map are separate switches. Copy puts the link on your clipboard.',
  'help.guide.share-public.result':
    'Anyone with the link sees the enabled sections and nothing else; fields you switched off in Entry fields stay hidden there too.',
  'help.guide.share-public.tip.1':
    'Photos appear on the public map only when Gallery and Map are both on; with Map off their coordinates are stripped before they leave the server.',
  'help.guide.share-public.tip.2': 'Delete the link in the same place to end the sharing.',
  // contributors
  'help.guide.contributors.title': 'Write together',
  'help.guide.contributors.goal': 'Let a fellow traveller add their own entries and photos.',
  'help.guide.contributors.step.1': 'Open Journey Settings and scroll to the contributors.',
  'help.guide.contributors.step.2': 'Click Invite Contributor and search the user by name or email.',
  'help.guide.contributors.step.3': 'Pick a role and confirm.',
  'help.guide.contributors.result':
    'The journey appears in their list and their entries carry their name. Remove a contributor with the × next to them.',
  'help.guide.contributors.tip.1':
    'Contributors are for people on this TREK. For everyone else there is the public link.',
  // studio
  'help.guide.studio.title': 'Lay the journey out as a photo book',
  'help.guide.studio.goal': 'Turn the journal into printable pages.',
  'help.guide.studio.step.1': 'Click Studio in the header. The designer opens on top of the journey.',
  'help.guide.studio.step.2':
    "The journey's name at the left of the top bar is the way back; it drops you where you were.",
  'help.guide.studio.result':
    'Pages rail on the left, the spread on the workbench, properties on the right. Auto layout builds the book from your entries; Export makes a print-ready PDF.',
  'help.guide.studio.tip.1': 'Studio needs a window at least 1024 px wide and is not offered on a phone.',
  'help.guide.studio.tip.2':
    "The book inherits the journey's access: whoever may read the journey may open it, whoever may edit may save.",
  // archive-journey
  'help.guide.archive-journey.title': 'Archive or delete a journey',
  'help.guide.archive-journey.goal': 'Close a finished journey, or remove one for good.',
  'help.guide.archive-journey.step.1': 'Open Journey Settings.',
  'help.guide.archive-journey.step.2':
    'At the bottom, Archive Journey ends it and marks it archived; Restore Journey brings it back. Delete removes it with all entries and photos, after a confirmation.',
  'help.guide.archive-journey.result':
    'An archived journey stays readable and shareable; it just no longer opens on today.',
  'help.guide.archive-journey.tip.1':
    'Deleting cannot be undone, and it does not touch the trips the journey was linked to.',
  'help.guide.archive-journey.tip.2': 'The cover, name and subtitle live in the same dialog, at the top.',

  // ── Screen: journey-studio ─────────────────────────────────────────────────
  'help.ctx.journey-studio.title': 'Studio',
  'help.ctx.journey-studio.summary':
    'TREK Studio lays a journey out as a printable photo book. It opens over the journal: the pages rail and the content on the left, the spread you are working on in the middle, its properties on the right. Auto layout builds a first draft from your entries; everything after that is yours to move, crop and restyle, with undo for every step.',
  'help.ctx.journey-studio.bullet.1':
    'Top bar: Back to the journey, Book view, undo and redo, Page format, Auto layout and Export. The Saved mark next to the title tells you when the book is stored.',
  'help.ctx.journey-studio.bullet.2':
    "Rail on the left with five sections: Pages, Content (the journey's photos and entries), Elements (text, shapes, lines, grids, frames, icons), Travel (maps, countries, flags and marks built from the journey) and Layouts.",
  'help.ctx.journey-studio.bullet.3':
    'Workbench: the current spread with its bleed and safe margins, the zoom bar underneath, Fit to view, and Download this spread on the right.',
  'help.ctx.journey-studio.bullet.4':
    'Properties on the right: position and size, crop and focal point, fill or fit, look, corners, frame, stacking order and lock of whatever is selected; page numbers and the document when nothing is.',
  'help.ctx.journey-studio.bullet.5':
    'The book has the shape of a bound one: cover, a single first page, the spreads, a single last page and the back cover. Page numbers count from the first page and print as shown.',
  'help.ctx.journey-studio.bullet.6':
    "Several people can design at once: everyone sees the others' pointers with their names, and a save on a version somebody else changed comes back as a conflict instead of overwriting their work.",
  // studio-auto-layout
  'help.guide.studio-auto-layout.title': 'Build the book automatically',
  'help.guide.studio-auto-layout.goal':
    "Get a complete first draft from the journal's entries and photos in one click.",
  'help.guide.studio-auto-layout.step.1': 'Click Auto layout in the top bar.',
  'help.guide.studio-auto-layout.step.2':
    'Pick The whole book: it replaces every page, keeping your title and page setup. This spread rebuilds only the one on screen, and is offered on a spread that came from an entry.',
  'help.guide.studio-auto-layout.step.3':
    'Look through the pages rail. Undo takes the whole layout back if you preferred what you had.',
  'help.guide.studio-auto-layout.result':
    'One spread per entry, in order, with its photos, title and story placed for you. Every element still follows its entry until you edit it.',
  'help.guide.studio-auto-layout.tip.1': 'Both entries are ordinary undo steps, so try them freely.',
  'help.guide.studio-auto-layout.tip.2':
    'An element auto layout tied to an entry keeps up with edits to that entry until you touch it in Properties; that breaks the link.',
  // studio-pages
  'help.guide.studio-pages.title': 'Add, move and remove spreads',
  'help.guide.studio-pages.goal': 'Shape the book page by page.',
  'help.guide.studio-pages.step.1':
    'Open Pages in the rail. The thumbnails are the book in order: cover, first page, spreads, last page, back cover.',
  'help.guide.studio-pages.step.2':
    'Add spread at the bottom puts a new one before the last page; the + between two thumbnails inserts one right there.',
  'help.guide.studio-pages.step.3':
    'Hover a thumbnail for its actions: Move earlier, Move later, Duplicate spread and Delete spread. Click a thumbnail to open that spread on the workbench.',
  'help.guide.studio-pages.result':
    'The cover, the first and last pages and the back cover stay where they are; new spreads always land between them.',
  'help.guide.studio-pages.tip.1': 'Book view in the top bar shows the whole book as sheets, the way it will be bound.',
  'help.guide.studio-pages.tip.2': 'Page numbers are switched on under Document in Properties, with nothing selected.',
  // studio-layouts
  'help.guide.studio-layouts.title': 'Apply a layout to a spread',
  'help.guide.studio-layouts.goal': 'Give a spread a ready-made arrangement of photo and text frames.',
  'help.guide.studio-layouts.step.1':
    'Open Layouts in the rail. Thirteen spread layouts, and a separate set for the cover, the back and the single pages.',
  'help.guide.studio-layouts.step.2':
    'Click one. The spread on the workbench takes its frames; photos and text you already had are poured into them.',
  'help.guide.studio-layouts.result':
    'Empty frames wait for content: drag a photo from Content onto one, or use Add to this page.',
  'help.guide.studio-layouts.tip.1': 'A layout is an undo step like any other.',
  // studio-content
  'help.guide.studio-content.title': 'Put photos and entries on a page',
  'help.guide.studio-content.goal': "Bring the journey's own material onto the spread.",
  'help.guide.studio-content.step.1':
    'Open Content in the rail. Photos lists every picture of the journey; Entries lists the entries with their text.',
  'help.guide.studio-content.step.2':
    'Drag a photo onto the spread, or onto an empty frame, or click Add to this page under it. Upload photos adds pictures that are not in the journey yet.',
  'help.guide.studio-content.step.3':
    "Under an entry, Title, Story and Place put that text on the page as a text element; Date and the coordinates come as marks, and the entry's photos are listed right there.",
  'help.guide.studio-content.result':
    'A dropped photo becomes a photo element; text keeps following the entry until you edit it.',
  'help.guide.studio-content.tip.1': 'The search box at the top of Content filters both lists.',
  'help.guide.studio-content.tip.2':
    'Dropping a file from your desktop onto the workbench uploads it and places it in one go.',
  // studio-elements
  'help.guide.studio-elements.title': 'Add text, shapes and icons',
  'help.guide.studio-elements.goal': 'Decorate a spread beyond photos and stories.',
  'help.guide.studio-elements.step.1': 'Open Elements in the rail.',
  'help.guide.studio-elements.step.2':
    'Click a text style for a headline or caption, a shape, a line, a grid, an empty frame with a frame style, or an icon from the searchable library. Each lands in the middle of the spread, ready to move.',
  'help.guide.studio-elements.result':
    'Double-click a text element to type into it; Properties holds font, weight, size, spacing and alignment.',
  'help.guide.studio-elements.tip.1': 'Frames are empty photo slots: drop a picture in later.',
  // studio-travel
  'help.guide.studio-travel.title': 'Add a map, flags and figures',
  'help.guide.studio-travel.goal': 'Turn the journey itself into figures on the page.',
  'help.guide.studio-travel.step.1': 'Open Travel in the rail.',
  'help.guide.studio-travel.step.2':
    "Pick what to add: a route map of the entries, country outlines, a country list or grid, flags, a date, day or distance mark, or a summary of the whole trip. Each is built from the journey's data and refreshes with it.",
  'help.guide.studio-travel.result':
    'The element appears on the spread; Properties adjusts its style, and the map its area.',
  'help.guide.studio-travel.tip.1':
    'Marks follow the entry the spread came from, so a date mark on an auto-laid spread already shows that day.',
  // studio-properties
  'help.guide.studio-properties.title': 'Edit what you selected',
  'help.guide.studio-properties.goal': 'Move, crop, style and stack an element with the inspector.',
  'help.guide.studio-properties.step.1':
    'Click an element on the spread. Handles appear for size and rotation; drag it to move it.',
  'help.guide.studio-properties.step.2':
    'Properties on the right follows the selection: position and size, Crop with the focal point that decides what stays in frame, Fill or Fit, Look filters, Corner radius, Frame style, stacking order and Lock.',
  'help.guide.studio-properties.step.3':
    'Duplicate and Delete sit at the top of the inspector; Undo in the top bar reverts any of it.',
  'help.guide.studio-properties.result':
    'A locked element cannot be grabbed on the page any more, which keeps a finished layout safe while you work around it.',
  'help.guide.studio-properties.tip.1': 'Shift-click selects several elements; the inspector then edits them together.',
  'help.guide.studio-properties.tip.2':
    'Editing an element that auto layout placed breaks its link to the entry; it stops following later changes to that entry.',
  // studio-format
  'help.guide.studio-format.title': 'Choose the page format',
  'help.guide.studio-format.goal': 'Set the size the book will be printed at, before the layout depends on it.',
  'help.guide.studio-format.step.1': 'Click Page format in the top bar.',
  'help.guide.studio-format.step.2':
    'Pick Square 21 × 21 cm, Square 30 × 30 cm, A4 or A5 landscape or portrait, or enter a custom width and height in millimetres. Bleed and safe margin sit underneath.',
  'help.guide.studio-format.result':
    'Every spread is drawn at that size, with 3 mm bleed and a 5 mm safe margin by default.',
  'help.guide.studio-format.tip.1':
    'Change the format first, then run Auto layout; the layout is built for the size it finds.',
  'help.guide.studio-format.tip.2': 'Ask your printer for their bleed and safe values and enter those.',
  // studio-export
  'help.guide.studio-export.title': 'Export the book as a PDF',
  'help.guide.studio-export.goal': 'Get a print-ready file, or one to read on screen.',
  'help.guide.studio-export.step.1': 'Click Export in the top bar.',
  'help.guide.studio-export.step.2':
    'Choose Single pages, one leaf per sheet in reading order, which is what a printer wants, or Spreads, two pages at a time the way the book opens. Crop marks add the bleed on every edge and mark where to cut.',
  'help.guide.studio-export.step.3':
    'Click Print view. Your browser opens the pages and Save as PDF turns them into the file.',
  'help.guide.studio-export.result': 'A PDF with as many sheets as the dialog announced, at the page format you set.',
  'help.guide.studio-export.tip.1': 'Making the PDF is desktop only, like Studio itself.',
  'help.guide.studio-export.tip.2':
    'For a proof, export Spreads without crop marks; for the print shop, Single pages with them.',
  // studio-spread-file
  'help.guide.studio-spread-file.title': 'Reuse a spread in another book',
  'help.guide.studio-spread-file.goal': "Carry a design you like from one journey's book to another.",
  'help.guide.studio-spread-file.step.1':
    'With the spread on the workbench, click Download this spread at the right end of the zoom bar. The file holds the design, not the photographs.',
  'help.guide.studio-spread-file.step.2':
    'In the other book, open Pages and click Import next to Add spread, then pick the file.',
  'help.guide.studio-spread-file.result':
    "The spread arrives with its frames and text styles; drop the new journey's photos into the frames.",
  'help.guide.studio-spread-file.tip.1': 'A file that is not a spread design is refused with a reason.',

  // ── Screen: settings (all tabs) ────────────────────────────────────────────
  'help.ctx.settings.title': 'Settings',
  'help.ctx.settings.summary':
    "Your personal settings, one tab per topic in the sidebar on the left. Most switches apply the moment you flip them; a form with a Save button at the bottom waits for it. Nothing here changes anyone else's TREK.",
  'help.ctx.settings.bullet.1':
    'Sidebar on the left: General, Appearance, Map, Notifications, Integrations, Offline and Account. Plugins appears once one is installed, About on a self-hosted TREK.',
  'help.ctx.settings.bullet.2':
    'General is language, units, currency and what the app opens with; Appearance is theme, colours, text size and the dashboard widgets.',
  'help.ctx.settings.bullet.3':
    'Map picks the renderer and its style; Notifications the channels that reach you; Integrations photo libraries, API keys and MCP; Offline what the app keeps on this device.',
  'help.ctx.settings.bullet.4':
    'Account holds your profile, password, two-factor authentication, passkeys and the deletion of your account.',
  'help.ctx.settings-display.title': 'General',
  'help.ctx.settings-display.summary':
    'Language, units and currency, how the map and bookings behave, and what TREK opens with. Every change here applies at once.',
  'help.ctx.settings-display.bullet.1':
    'Language & region: the interface language, the time format, the display currency, and distance and temperature units.',
  'help.ctx.settings-display.bullet.2':
    'Travel & map: booking routes always on the map, the Explore places pill, route optimisation from your accommodation, blurred booking codes and labelled booking routes.',
  'help.ctx.settings-display.bullet.3':
    'Startup: whether TREK opens on the dashboard or on the active trip, and which tab of a trip comes up first.',
  'help.ctx.settings-appearance.title': 'Appearance',
  'help.ctx.settings-appearance.summary':
    'How TREK looks on this account: light or dark, the accent colour, glass and motion, text size, and which widgets the dashboard shows. Everything applies live, on every device you sign in on.',
  'help.ctx.settings-appearance.bullet.1':
    'Theme: Light, Dark or Auto, and the Color scheme with a Custom accent of your own.',
  'help.ctx.settings-appearance.bullet.2':
    'Readability: Transparency, Reduce motion, Density and Text size, with advanced sizes per tier.',
  'help.ctx.settings-appearance.bullet.3':
    'Dashboard widgets: one switch per widget, separately for Desktop and Mobile.',
  'help.ctx.settings-appearance.bullet.4': 'Reset to defaults at the bottom puts everything back.',
  'help.ctx.settings-map.title': 'Map',
  'help.ctx.settings-map.summary':
    'Which engine draws the maps and in what style. Leaflet is the classic raster map, MapLibre draws vector tiles without any token, Mapbox adds 3D buildings and terrain with your own token.',
  'help.ctx.settings-map.bullet.1': 'Map Provider: Leaflet, MapLibre or Mapbox, each with a line on what it needs.',
  'help.ctx.settings-map.bullet.2':
    'Map Style and Map Template: the look of the tiles, plus the token or key a provider asks for.',
  'help.ctx.settings-map.bullet.3':
    'High Quality Mode for antialiasing and the globe projection; Save Map writes the choice.',
  'help.ctx.settings-notifications.title': 'Notifications',
  'help.ctx.settings-notifications.summary':
    'Where TREK reaches you outside the app: an ntfy topic, a webhook, or a channel a plugin provides. Below the channels, one row per event decides what goes where.',
  'help.ctx.settings-notifications.bullet.1':
    'ntfy: the topic, an optional server of your own and an optional access token, with Test to send one right away.',
  'help.ctx.settings-notifications.bullet.2': 'Webhook: one URL that receives every event as JSON, with Test.',
  'help.ctx.settings-notifications.bullet.3':
    'The preference rows: per event, which channel is on. Plugin channels show Configure until they are set up.',
  'help.ctx.settings-integrations.title': 'Integrations',
  'help.ctx.settings-integrations.summary':
    'Everything that connects to TREK from outside: photo libraries for the journal, API keys for scripts, and the MCP endpoint with its tokens and OAuth clients for AI assistants.',
  'help.ctx.settings-integrations.bullet.1':
    'Photo providers: Immich and Synology Photos, each with its URL and key, Test connection and Save.',
  'help.ctx.settings-integrations.bullet.2':
    'API Keys: personal keys for scripts and other tools that call the TREK API in your name.',
  'help.ctx.settings-integrations.bullet.3':
    'MCP Configuration: the endpoint, a ready-made client configuration to copy, and the API tokens.',
  'help.ctx.settings-integrations.bullet.4':
    'OAuth 2.1 Clients: apps that log in through TREK, with redirect URIs, allowed scopes, machine clients and the active sessions.',
  'help.ctx.settings-offline.title': 'Offline',
  'help.ctx.settings-offline.summary':
    'What TREK keeps on this device so a trip still opens without a connection, and what happens when a change made offline collides with one made elsewhere.',
  'help.ctx.settings-offline.bullet.1':
    'Offline mode: Force offline mode makes the app behave as if the network were gone, for testing or a metered connection.',
  'help.ctx.settings-offline.bullet.2':
    'Prepare for offline: Download for offline use fetches your trips and their map tiles now.',
  'help.ctx.settings-offline.bullet.3': 'What to store offline: map tiles on or off, and a switch per trip.',
  'help.ctx.settings-offline.bullet.4':
    'Sync conflicts and Offline cache: the strategy for collisions, the pending and failed counts, Re-sync now and Clear cache.',
  'help.ctx.settings-account.title': 'Account',
  'help.ctx.settings-account.summary':
    'Who you are on this TREK and how you sign in: profile and avatar, password, two-factor authentication, passkeys, and at the very bottom the deletion of the account.',
  'help.ctx.settings-account.bullet.1': 'Profile: username, email and avatar, saved with Save Profile.',
  'help.ctx.settings-account.bullet.2': 'Change Password: current password, new password twice, Update password.',
  'help.ctx.settings-account.bullet.3':
    'Two-factor authentication (2FA) with an authenticator app and backup codes; Passkeys for signing in without a password.',
  'help.ctx.settings-account.bullet.4':
    'Delete account at the bottom, behind a confirmation. The last admin cannot delete themselves.',
  // language-region
  'help.guide.language-region.title': 'Set language, units and currency',
  'help.guide.language-region.goal': 'Make TREK speak your language and count the way you do.',
  'help.guide.language-region.step.1':
    'Pick the interface language in Language & region. TREK switches at once, on every device you sign in on.',
  'help.guide.language-region.step.2':
    'Below it, choose the time format, the display currency, and the distance and temperature units.',
  'help.guide.language-region.result':
    "Dates, distances and money read the way you expect; a trip's own currency still shows next to converted amounts.",
  'help.guide.language-region.tip.1':
    'The display currency is for totals across trips; each trip keeps the currency you gave it.',
  'help.guide.language-region.tip.2': 'The language also sets the day and month names in Vacay and the journal.',
  // travel-map-prefs
  'help.guide.travel-map-prefs.title': 'Tune how the map and bookings behave',
  'help.guide.travel-map-prefs.goal': 'Decide what the trip map shows by default.',
  'help.guide.travel-map-prefs.step.1':
    'In Travel & map, Always show booking routes keeps flights and trains on the map even when their day is not open; Explore places on the map shows the pill for finding places; Optimize route from accommodation starts the route at where you sleep.',
  'help.guide.travel-map-prefs.step.2':
    'Blur Booking Codes hides confirmation numbers until you hover; Booking route labels writes the booking name along its route.',
  'help.guide.travel-map-prefs.result': 'The trip map follows these on every trip, until you flip them back.',
  'help.guide.travel-map-prefs.tip.1':
    'These are per account, not per trip. Members of a shared trip each see their own choices.',
  // startup
  'help.guide.startup.title': 'Choose what TREK opens with',
  'help.guide.startup.goal': 'Land where you work most, not on the dashboard every time.',
  'help.guide.startup.step.1': 'Under Startup, set Start page to Dashboard or Active trip.',
  'help.guide.startup.step.2': 'Start tab picks which tab of a trip comes up first when you open one.',
  'help.guide.startup.result': 'The next sign-in and the next tap on the logo go straight there.',
  'help.guide.startup.tip.1': 'Active trip means the trip under way today, or the next one when none is.',
  // theme-scheme
  'help.guide.theme-scheme.title': 'Set the theme and the accent colour',
  'help.guide.theme-scheme.goal': 'Make TREK light, dark or follow your device, in the colour you like.',
  'help.guide.theme-scheme.step.1': 'Under Theme, pick Light, Dark or Auto. Auto follows your device.',
  'help.guide.theme-scheme.step.2':
    'Choose a Color scheme: Default, High contrast, Indigo, Teal, Rose, Amber, Violet or Custom.',
  'help.guide.theme-scheme.step.3':
    'With Custom, pick an accent from the presets or enter your own. A contrast check next to it says whether text stays readable on it.',
  'help.guide.theme-scheme.result':
    'Buttons, links and highlights take the accent everywhere, on every device you sign in on.',
  'help.guide.theme-scheme.tip.1': 'The navbar has a quick light or dark switch too; it sets the same theme.',
  'help.guide.theme-scheme.tip.2': 'High contrast is the scheme to pick when the default reads too soft.',
  // readability
  'help.guide.readability.title': 'Adjust readability and text size',
  'help.guide.readability.goal': 'Less glass, less motion, more room or bigger type.',
  'help.guide.readability.step.1':
    'Under Readability, Transparency switches the glass panels to solid surfaces, Reduce motion minimises animations, and Density chooses Comfortable or Compact.',
  'help.guide.readability.step.2':
    'Text size scales Everything at once; Advanced text sizes lets titles, subtitles, body and captions differ.',
  'help.guide.readability.result': 'The whole app follows at once, including the map panels and the journal.',
  'help.guide.readability.tip.1': "Reduce motion also follows your system's setting when you leave it alone.",
  'help.guide.readability.tip.2':
    'Text size is applied through the typography tiers, so nothing is cut off; a size that no longer fits wraps.',
  // dashboard-widgets
  'help.guide.dashboard-widgets.title': 'Choose the dashboard widgets',
  'help.guide.dashboard-widgets.goal': 'Show only the widgets you use, separately on desktop and on the phone.',
  'help.guide.dashboard-widgets.step.1':
    'Under Dashboard widgets, switch each widget on or off for Desktop and for Mobile: the right sidebar as a whole, currency, collections, timezones, upcoming reservations, Atlas countries and the travel figures.',
  'help.guide.dashboard-widgets.step.2': 'Reset to defaults at the bottom returns the whole tab to how it shipped.',
  'help.guide.dashboard-widgets.result': 'The dashboard rearranges at once; with the right sidebar off it centres.',
  'help.guide.dashboard-widgets.tip.1': 'Widgets of an addon only appear while the admin has that addon on.',
  'help.guide.dashboard-widgets.tip.2':
    'The dashboard itself remembers your grid or list view and the sort order per device.',
  // map-provider
  'help.guide.map-provider.title': 'Pick the map engine and style',
  'help.guide.map-provider.goal': "Switch between the classic map, vector tiles and Mapbox's 3D map.",
  'help.guide.map-provider.step.1':
    'Under Map Provider, choose Leaflet for the classic 2D map with any raster tiles, MapLibre for OpenFreeMap vector tiles without a token, or Mapbox for vector tiles with 3D buildings and terrain.',
  'help.guide.map-provider.step.2':
    'Pick a Map Style or a Map Template for the look. Mapbox needs a Mapbox Access Token, some raster styles a CARTO API key; the link next to the field leads to where you get one.',
  'help.guide.map-provider.step.3': 'High Quality Mode adds antialiasing and the globe projection. Click Save Map.',
  'help.guide.map-provider.result':
    'Every map in TREK, trips, Atlas, Collections and the journal, is drawn by the engine you picked.',
  'help.guide.map-provider.tip.1': 'Without a token, Mapbox falls back to the default map rather than showing nothing.',
  'help.guide.map-provider.tip.2':
    'The map tiles you store offline come from the provider that is active when you download them.',
  // notification-channels
  'help.guide.notification-channels.title': 'Set up where notifications reach you',
  'help.guide.notification-channels.goal':
    'Get trip reminders and collaboration events on your phone or in another tool.',
  'help.guide.notification-channels.step.1':
    'Under Notifications, fill in an Ntfy Topic; add your own Ntfy Server URL and an Access Token if you run one. Test sends a message straight away.',
  'help.guide.notification-channels.step.2':
    'Or give a Webhook URL that receives every event as JSON, and Test it the same way.',
  'help.guide.notification-channels.step.3':
    "In the rows below, switch each event on or off per channel. A plugin channel says Configure until it is set up in the plugin's settings; Send test tries one.",
  'help.guide.notification-channels.result':
    'Events go out through the channels that are on. The bell in the navbar keeps showing them in the app regardless.',
  'help.guide.notification-channels.tip.1':
    'Per-trip preferences live on the trip itself, under its notification settings.',
  'help.guide.notification-channels.tip.2':
    'The admin can pre-fill a default ntfy server for everyone; you still choose your own topic.',
  // photo-providers
  'help.guide.photo-providers.title': 'Connect a photo library',
  'help.guide.photo-providers.goal': "Let the journal pull the day's photos from Immich or Synology Photos.",
  'help.guide.photo-providers.step.1':
    "Under Integrations, find the provider's section and enter its URL and API key. Immich also offers to mirror journey uploads back into the library.",
  'help.guide.photo-providers.step.2': 'Click Test connection, then Save.',
  'help.guide.photo-providers.result':
    "The entry editor's External photos tab searches the connected library for the entry's day, nearest to the entry's location first.",
  'help.guide.photo-providers.tip.1':
    'The connection is yours: other members of a journey connect their own libraries.',
  'help.guide.photo-providers.tip.2':
    'A provider without GPS data in its photos still works; the list is then in time order.',
  // api-keys
  'help.guide.api-keys.title': 'Create an API key',
  'help.guide.api-keys.goal': 'Let a script or another tool call the TREK API as you.',
  'help.guide.api-keys.step.1': 'Under API Keys, click Create key and give it a name that says where it will be used.',
  'help.guide.api-keys.step.2':
    'Copy the key from the dialog: it is shown once. Delete a key from the list when the tool no longer needs it.',
  'help.guide.api-keys.result':
    'Requests with that key act with your permissions; the list shows when each key was created and last used.',
  'help.guide.api-keys.tip.1': 'One key per tool makes revoking painless.',
  'help.guide.api-keys.tip.2': 'For an AI assistant use MCP with OAuth instead; API keys are for plain HTTP clients.',
  // mcp-oauth
  'help.guide.mcp-oauth.title': 'Connect an AI assistant over MCP',
  'help.guide.mcp-oauth.goal': 'Give Claude, an IDE or another MCP client access to your trips.',
  'help.guide.mcp-oauth.step.1':
    'Under MCP Configuration, copy the MCP Endpoint, or the whole Client Configuration for a client that takes a JSON snippet.',
  'help.guide.mcp-oauth.step.2':
    'Clients that log in through the browser use OAuth 2.1: New Client under OAuth 2.1 Clients, with its Redirect URIs, the Allowed Scopes and, for a server without a browser, Machine client.',
  'help.guide.mcp-oauth.step.3':
    'Rotate Secret and Delete Client sit on each client; Active OAuth Sessions lists what is signed in and lets you revoke it. API Tokens with Create New Token is the older way in.',
  'help.guide.mcp-oauth.result':
    'The client can read and change what its scopes allow, as you, and every action shows up under your name.',
  'help.guide.mcp-oauth.tip.1': 'Scopes are the safety net: give a client only the read scope until it needs more.',
  'help.guide.mcp-oauth.tip.2': 'The admin can switch MCP off for the whole instance; then this section is not there.',
  // offline-prepare
  'help.guide.offline-prepare.title': 'Take trips offline',
  'help.guide.offline-prepare.goal': 'Have your trips and their maps on this device before the connection drops.',
  'help.guide.offline-prepare.step.1':
    'Under What to store offline, keep Store map tiles offline on and switch on the trips you want on this device.',
  'help.guide.offline-prepare.step.2':
    'Click Download for offline use under Prepare for offline. It fetches the trips and the tiles around their places.',
  'help.guide.offline-prepare.step.3':
    'Force offline mode under Offline mode lets you check that everything is there before you leave.',
  'help.guide.offline-prepare.result':
    'The trips open without a connection; changes you make wait in a queue and go out on reconnect.',
  'help.guide.offline-prepare.tip.1':
    'Tiles take the most space: the Offline cache section shows what is stored, per trip.',
  'help.guide.offline-prepare.tip.2': 'Install TREK as an app from the browser for the smoothest offline start.',
  // offline-conflicts
  'help.guide.offline-conflicts.title': 'Decide what wins on a sync conflict',
  'help.guide.offline-conflicts.goal': 'Choose how TREK settles a change made offline against one made elsewhere.',
  'help.guide.offline-conflicts.step.1':
    'Under Sync conflicts, pick Ask me each time, Always keep my version or Always keep the server version.',
  'help.guide.offline-conflicts.step.2':
    'Offline cache shows trips, pending and failed changes and conflicts; Re-sync now pushes the queue, Clear cache empties the device.',
  'help.guide.offline-conflicts.result':
    'With Ask, a conflict shows both versions and lets you pick; with the other two it is settled silently.',
  'help.guide.offline-conflicts.tip.1':
    'Clear cache removes only the copy on this device; nothing on the server is touched.',
  // profile
  'help.guide.profile.title': 'Change your profile',
  'help.guide.profile.goal': 'Update your name, email and picture.',
  'help.guide.profile.step.1':
    'Under Account, edit Username and Email. The avatar takes an upload of your own; remove it to go back to the initials.',
  'help.guide.profile.step.2': 'Click Save Profile.',
  'help.guide.profile.result': 'Your name and picture update everywhere at once, including on trips you share.',
  'help.guide.profile.tip.1':
    'An account that signs in through OIDC shows that here; the email then comes from the provider.',
  // password
  'help.guide.password.title': 'Change your password',
  'help.guide.password.goal': 'Set a new password.',
  'help.guide.password.step.1': 'Under Change Password, enter your current password, then the new one twice.',
  'help.guide.password.step.2': 'Click Update password.',
  'help.guide.password.result': 'The new password works at the next sign-in; other sessions stay signed in.',
  'help.guide.password.tip.1': 'An account that signs in through OIDC has no TREK password to change.',
  // mfa
  'help.guide.mfa.title': 'Turn on two-factor authentication',
  'help.guide.mfa.goal': 'Protect the account with a code from an authenticator app.',
  'help.guide.mfa.step.1': 'Under Two-factor authentication (2FA), click Set up authenticator.',
  'help.guide.mfa.step.2':
    'Scan the QR code with your app, or enter the secret by hand, then type the six-digit code it shows and click Enable 2FA.',
  'help.guide.mfa.step.3':
    'Save the backup codes: copy, download or print them. Each works once, when you have no phone at hand.',
  'help.guide.mfa.result': 'Every sign-in asks for a code after the password.',
  'help.guide.mfa.tip.1': 'Disable 2FA needs your password and a current code.',
  'help.guide.mfa.tip.2': 'The admin can require 2FA for everyone; then it cannot be switched off here.',
  // passkeys
  'help.guide.passkeys.title': 'Sign in with a passkey',
  'help.guide.passkeys.goal': "Use your device's fingerprint, face or PIN instead of a password.",
  'help.guide.passkeys.step.1':
    'Under Passkeys, click Add a passkey and confirm with your device. Give it a name that says which device it is.',
  'help.guide.passkeys.step.2':
    'The list shows every passkey with its name and when it was last used; the delete button removes one.',
  'help.guide.passkeys.result': 'The sign-in page offers the passkey; the password stays as a fallback.',
  'help.guide.passkeys.tip.1': 'A passkey lives on the device or in its password manager, so add one per device.',
  'help.guide.passkeys.tip.2':
    'Passkeys need HTTPS; on a plain HTTP instance the section explains why they are unavailable.',
  // delete-account
  'help.guide.delete-account.title': 'Delete your account',
  'help.guide.delete-account.goal': 'Remove your account and the data that is only yours.',
  'help.guide.delete-account.step.1': 'At the very bottom of Account, click Delete account and confirm.',
  'help.guide.delete-account.result':
    'Your account, your own trips and your journeys are gone; trips you share with others stay with them.',
  'help.guide.delete-account.tip.1':
    'The last admin of an instance cannot delete themselves; make someone else admin first.',
  'help.guide.delete-account.tip.2': 'There is no undo. Export what you want to keep before you confirm.',

  // ── Screen: admin (all tabs) ───────────────────────────────────────────────
  'help.ctx.admin.title': 'Admin',
  'help.ctx.admin.summary':
    "The instance behind everyone's TREK: who may sign in and how, what is switched on, where files live, how the server reaches people, and how it is backed up. Only admins see this page; every tab is a screen of its own in the sidebar.",
  'help.ctx.admin.bullet.1':
    'The four cards at the top count users, trips, places and files; a banner above them announces a newer TREK release.',
  'help.ctx.admin.bullet.2':
    'Users and User Defaults: accounts, invite links, and the map settings a new account starts with.',
  'help.ctx.admin.bullet.3':
    'Personalization, Settings, Addons and Plugins: packing templates, categories and school holidays; sign-in methods and API keys; the feature modules; third-party plugins.',
  'help.ctx.admin.bullet.4':
    'Storage, Notifications, MCP Access and GitHub: where uploads go, the instance-wide channels, tokens and sessions of AI clients, and the release history.',
  'help.ctx.admin.bullet.5':
    'Backup and Audit: on-demand and scheduled backups, and the log of security-relevant events.',
  'help.ctx.admin-users.title': 'Users',
  'help.ctx.admin-users.summary':
    'Every account on this TREK, with role, email and last sign-in, and the invite links that let people register on a closed instance.',
  'help.ctx.admin-users.bullet.1':
    'The table: username, email, role, creation date, last login and the actions per row. You are marked as you.',
  'help.ctx.admin-users.bullet.2': 'Create User at the top adds an account by hand, with a password you hand over.',
  'help.ctx.admin-users.bullet.3':
    'Invite Links below: one-time registration links with a use limit, an expiry and, if you like, a trip the new user joins on arrival.',
  'help.ctx.admin-users.bullet.4':
    'Permission Settings at the bottom: per action, who may do it, Everyone, Trip members, Trip owner or Admin only.',
  'help.ctx.admin-defaults.title': 'User Defaults',
  'help.ctx.admin-defaults.summary':
    'The settings a new account starts with, so nobody has to find the map tab first: map provider, style, tokens and quality.',
  'help.ctx.admin-defaults.bullet.1':
    'Map provider, Mapbox style and token, CARTO key and Mapbox quality, exactly as a user would set them under Settings, Map.',
  'help.ctx.admin-defaults.bullet.2':
    "Reset to built-in default per field returns TREK's own choice; a user's own setting always wins over these.",
  'help.ctx.admin-config.title': 'Personalization',
  'help.ctx.admin-config.summary':
    'What every trip on the instance shares: packing templates, the category set for places and collections, and the school-holiday catalogue Vacay draws from.',
  'help.ctx.admin-config.bullet.1':
    "Packing Templates: named lists of categories and items that a trip's packing list can start from.",
  'help.ctx.admin-config.bullet.2':
    'Categories: name, icon and colour of the categories used across TREK, from the place inspector to Collections.',
  'help.ctx.admin-config.bullet.3':
    'School holidays: the catalogue of countries and regions, for places the built-in feeds do not cover.',
  'help.ctx.admin-settings.title': 'Settings',
  'help.ctx.admin-settings.summary':
    'How people get in and what the server may talk to: sign-in and registration methods, SSO, passkeys, two-factor policy, the API keys for maps, places and images, the search and transit providers, and the file types uploads may have.',
  'help.ctx.admin-settings.bullet.1':
    'Authentication Methods: Password Login, Password Registration, SSO Login, SSO Auto-Provisioning, and Require two-factor authentication (2FA).',
  'help.ctx.admin-settings.bullet.2':
    'Single Sign-On (OIDC) with issuer, client and display name; Passkey login with relying-party id and origins.',
  'help.ctx.admin-settings.bullet.3':
    'API Keys: Google Maps, Unsplash and Amap, each with Test; What the key may be used for narrows the Google key to the features you want to pay for.',
  'help.ctx.admin-settings.bullet.4':
    'Place search provider and Transit Provider pick who answers searches and routes; Allowed File Types limits uploads.',
  'help.ctx.admin-addons.title': 'Addons',
  'help.ctx.admin-addons.summary':
    'The feature modules of TREK, each with a switch: Packing, Budget, Documents, Vacay, Atlas, Collab, Journey, Collections, Road trip, MCP, AirTrail, Dawarich and the AI parsing. Off means the navigation entry, the routes and the API are gone for everyone.',
  'help.ctx.admin-addons.bullet.1':
    'One tile per addon with its switch and, where it has any, sub-rows for its options.',
  'help.ctx.admin-addons.bullet.2':
    'Photo providers and document providers appear here as tiles too, so Immich or Synology can be offered to users.',
  'help.ctx.admin-addons.bullet.3': 'Bag Tracking has its own switch below the tiles.',
  'help.ctx.admin-plugins.title': 'Plugins',
  'help.ctx.admin-plugins.summary':
    'Third-party plugins that run in their own process next to TREK, each with the permissions it asked for at install. Install from the catalogue, upload a package, or link a folder while developing one.',
  'help.ctx.admin-plugins.bullet.1':
    'The list: every installed plugin with version, status, signature and the permissions it holds; activate, deactivate, update or uninstall per row.',
  'help.ctx.admin-plugins.bullet.2':
    'Upload plugin takes a package file; Rescan picks up a plugin folder linked for development.',
  'help.ctx.admin-plugins.bullet.3':
    'Allowed hosts per plugin: the addresses a plugin may call, since egress is denied by default.',
  'help.ctx.admin-storage.title': 'Storage',
  'help.ctx.admin-storage.summary':
    'Where uploads live: the local disk, an S3 bucket, or a mirror that writes to both. Each upload category can go to a different backend, and Health says whether every backend answers.',
  'help.ctx.admin-storage.bullet.1':
    'Backends: name and type of each, with Test, Edit and Remove; one set by the environment is read-only here.',
  'help.ctx.admin-storage.bullet.2':
    'Categories: covers, documents, journey photos and the rest, each assigned to a backend; changing one offers to move the existing files.',
  'help.ctx.admin-storage.bullet.3':
    'Health: a check per backend, and the seed file that proves the configuration is what the server sees.',
  'help.ctx.admin-notifications.title': 'Notifications',
  'help.ctx.admin-notifications.summary':
    'The channels the instance offers its users, and the ones that reach you as the admin. Users pick their own topics and URLs under Settings; you decide what exists and configure email.',
  'help.ctx.admin-notifications.bullet.1':
    'In-App, Email (SMTP), Ntfy and Webhook: one panel each, with a switch that offers the channel to users and the server-side configuration it needs.',
  'help.ctx.admin-notifications.bullet.2':
    'Trip Reminders: whether the server sends the reminder before a trip starts.',
  'help.ctx.admin-notifications.bullet.3':
    'Admin Ntfy and Admin Webhook: where admin events such as a failed backup or a new release go, with Test.',
  'help.ctx.admin-mcp-tokens.title': 'MCP Access',
  'help.ctx.admin-mcp-tokens.summary':
    'Every token and OAuth session that AI clients hold against this TREK, across all users, with the power to revoke any of them.',
  'help.ctx.admin-mcp-tokens.bullet.1': 'API Tokens: who created it, when it was last used, and Delete.',
  'help.ctx.admin-mcp-tokens.bullet.2':
    'OAuth Sessions: the client, the user and the scopes it was granted, and Revoke.',
  'help.ctx.admin-github.title': 'GitHub',
  'help.ctx.admin-github.summary':
    'What is new in TREK: the release history from GitHub, the version you run, and whether a newer one is out. Updating itself happens outside the app, on the host.',
  'help.ctx.admin-github.bullet.1':
    'Release History lists the releases with their notes; the newest carries Latest, and your version is marked.',
  'help.ctx.admin-github.bullet.2':
    'Update available appears in the header once a newer release exists, with how to update for Docker and other installs.',
  'help.ctx.admin-backup.title': 'Backup',
  'help.ctx.admin-backup.summary':
    'Full backups of the database and the uploads, made by hand or on a schedule, kept on the server and downloadable as one file. Restore puts one back.',
  'help.ctx.admin-backup.bullet.1':
    'Data Backup: Create Backup, and the list of existing ones with Download, Restore and delete.',
  'help.ctx.admin-backup.bullet.2': 'Upload Backup brings a file made on another instance or an earlier day.',
  'help.ctx.admin-backup.bullet.3': 'Auto-Backup: on or off, interval, hour and day, and how many to keep.',
  'help.ctx.admin-audit.title': 'Audit',
  'help.ctx.admin-audit.summary':
    'The log of security-relevant and administrative events: sign-ins and failures, MFA changes, user and setting changes, backups and restores. Read-only, newest first.',
  'help.ctx.admin-audit.bullet.1': 'One row per event with time, user, action, resource, IP and details.',
  'help.ctx.admin-audit.bullet.2': 'Refresh reloads; Load more walks further back.',
  // create-user
  'help.guide.create-user.title': 'Create a user',
  'help.guide.create-user.goal': 'Add an account by hand, without an invite.',
  'help.guide.create-user.step.1': 'Click Create User at the top of the Users tab.',
  'help.guide.create-user.step.2': 'Enter Username, Email and a Password, and pick the Role: User or Administrator.',
  'help.guide.create-user.step.3': 'Click Create User.',
  'help.guide.create-user.result':
    'The account appears in the table and can sign in at once; hand over the password on a channel you trust.',
  'help.guide.create-user.tip.1':
    'For a person who should choose their own password, an invite link is the better way in.',
  'help.guide.create-user.tip.2': 'Admins see this page and the audit log; everything else is the same for both roles.',
  // edit-user
  'help.guide.edit-user.title': "Change a user's role or password",
  'help.guide.edit-user.goal': 'Promote someone, demote them, or get them back in after a lost password.',
  'help.guide.edit-user.step.1': "Click the pencil in the user's row. Edit User opens with the account's details.",
  'help.guide.edit-user.step.2':
    'Change the Role, set a New Password, or click Reset passkeys when the person lost the device their passkeys were on, then Save.',
  'help.guide.edit-user.result': 'The change applies at the next request; a new password works from the next sign-in.',
  'help.guide.edit-user.tip.1': 'You cannot take the admin role from yourself while you are the last admin.',
  'help.guide.edit-user.tip.2':
    'Resetting passkeys keeps the password; the person adds new passkeys under Settings, Account.',
  // invite-links
  'help.guide.invite-links.title': 'Invite someone with a link',
  'help.guide.invite-links.goal': 'Let a person register on a closed instance, and land in a trip if you like.',
  'help.guide.invite-links.step.1': 'Under Invite Links, click Create Link.',
  'help.guide.invite-links.step.2':
    'Set Max. Uses and Expires after, optionally Add to trip (optional), and click Create & Copy.',
  'help.guide.invite-links.step.3':
    'Send the link. Each row shows how often it was used and who created it; Copy link copies it again, and used-up or expired links are marked.',
  'help.guide.invite-links.result':
    'Whoever opens the link registers with their own password and, with a trip chosen, joins it straight away.',
  'help.guide.invite-links.tip.1': 'Invite links work even while Password Registration is switched off under Settings.',
  'help.guide.invite-links.tip.2': 'A link with one use and a short expiry is the safest default for a single person.',
  // delete-user
  'help.guide.delete-user.title': 'Delete a user',
  'help.guide.delete-user.goal': 'Remove an account and everything only it owns.',
  'help.guide.delete-user.step.1': "Click the trash icon in the user's row and confirm Delete user.",
  'help.guide.delete-user.result':
    'The account, its own trips and its journeys are gone; trips shared with others stay with the remaining members.',
  'help.guide.delete-user.tip.1': 'There is no undo. Take a backup first if you are not sure.',
  'help.guide.delete-user.tip.2': 'The last admin cannot be deleted; make someone else admin first.',
  // permissions
  'help.guide.permissions.title': 'Decide who may do what',
  'help.guide.permissions.goal': 'Set, per action, which role is allowed to do it on this TREK.',
  'help.guide.permissions.step.1':
    'Under Permission Settings, find the action in its group, such as Delete trips under Trip Management, and pick the level: Everyone, Trip members, Trip owner or Admin only. A changed row is marked customized.',
  'help.guide.permissions.step.2': 'Click Save. Reset to defaults puts every row back to the built-in level.',
  'help.guide.permissions.result':
    'The rule applies to every trip at once; the buttons and menus of people below the level disappear.',
  'help.guide.permissions.tip.1': 'Trip owner means the person who created the trip; admins may always do everything.',
  'help.guide.permissions.tip.2':
    'Lower a level rather than deleting a member: a member who may not edit can still read and comment.',
  // default-map
  'help.guide.default-map.title': 'Set the map defaults for new users',
  'help.guide.default-map.goal': 'Give every new account a working map without a personal token.',
  'help.guide.default-map.step.1':
    'Under Map, pick the Map engine and, for Mapbox or MapLibre, the Map style, the Shared Mapbox token and High-quality mode; for a raster map the Map Template and the Shared CARTO key.',
  'help.guide.default-map.step.2':
    "Next to any field you changed, reset returns TREK's own choice. Default User Settings on the left does the same for Color Mode, units and the currency.",
  'help.guide.default-map.result':
    'New accounts start with these; anyone who set their own map under Settings keeps theirs.',
  'help.guide.default-map.tip.1':
    'A token entered here is shared by everyone who has none of their own, so mind its quota.',
  'help.guide.default-map.tip.2': 'Existing accounts that never touched the map tab follow these defaults too.',
  // packing-templates
  'help.guide.packing-templates.title': 'Build a packing template',
  'help.guide.packing-templates.goal': 'Give trips a packing list to start from instead of an empty one.',
  'help.guide.packing-templates.step.1': 'Click New Template, type a name and confirm with the tick.',
  'help.guide.packing-templates.step.2':
    'Open the template and click Add category; under each category, the + adds items, and an item needs only a name.',
  'help.guide.packing-templates.step.3':
    'Everything saves as you go. The pencil renames a template, a category or an item, the bin deletes it.',
  'help.guide.packing-templates.result':
    "The template is offered on every trip's packing list; applying it copies the items, so a trip can change them freely.",
  'help.guide.packing-templates.tip.1': 'A template per kind of trip, beach, city, hiking, beats one giant list.',
  'help.guide.packing-templates.tip.2': 'Deleting a template does not touch trips that already applied it.',
  // categories
  'help.guide.categories.title': 'Manage the category set',
  'help.guide.categories.goal': 'Decide which categories places and collections can carry, and how they look.',
  'help.guide.categories.step.1':
    'Click New Category, give it a name, pick an icon and a colour; the Preview shows the result. Click Create.',
  'help.guide.categories.step.2': 'Hover a category in the list to edit or delete it. Deleting asks for confirmation.',
  'help.guide.categories.result':
    'The set applies everywhere at once: the place inspector, the map pins, Collections and the filters.',
  'help.guide.categories.tip.1': 'Places keep their category id, so renaming a category renames it on every place.',
  'help.guide.categories.tip.2': 'A deleted category leaves its places without one; reassign first if that matters.',
  // school-holiday-catalog
  'help.guide.school-holiday-catalog.title': 'Maintain school holidays by hand',
  'help.guide.school-holiday-catalog.goal': 'Cover a country or region the built-in holiday feeds do not.',
  'help.guide.school-holiday-catalog.step.1':
    'Under School holidays, click Add country, enter the Country and its Country code (e.g. US), and Save; then Add region for each part of it that differs.',
  'help.guide.school-holiday-catalog.step.2':
    'Click a region to open Region or school district: Add holiday period, give each one a Holiday name, Start date and End date, and Save. The bin removes a period, a region or, once it has no regions left, a country.',
  'help.guide.school-holiday-catalog.result':
    'Users find the country and region under Settings in Vacay and see the periods on their year grid.',
  'help.guide.school-holiday-catalog.tip.1':
    'Regions from the built-in feeds cannot be edited here; add a manual region alongside if a date is wrong.',
  // auth-methods
  'help.guide.auth-methods.title': 'Decide how people sign in',
  'help.guide.auth-methods.goal': 'Open or close password sign-in, SSO and registration, and require 2FA.',
  'help.guide.auth-methods.step.1':
    'Under Authentication Methods, switch Password Login and Password Registration on or off. Registration off means new accounts only through invite links, SSO or by hand.',
  'help.guide.auth-methods.step.2':
    'SSO Login and SSO Auto-Provisioning need Single Sign-On (OIDC) configured below; auto-provisioning creates an account the first time someone signs in through SSO.',
  'help.guide.auth-methods.step.3':
    'Require two-factor authentication (2FA) makes every password sign-in set up an authenticator on the next login. Passkey login needs the relying-party id and the origins your TREK is reached at.',
  'help.guide.auth-methods.result': 'The sign-in page offers exactly the methods you left on.',
  'help.guide.auth-methods.tip.1':
    'A warning appears before you lock yourself out: at least one way in for admins stays on.',
  'help.guide.auth-methods.tip.2': 'Values set through environment variables show as read-only here.',
  // oidc
  'help.guide.oidc.title': 'Connect single sign-on',
  'help.guide.oidc.goal': 'Let people sign in with your identity provider.',
  'help.guide.oidc.step.1':
    'Under Single Sign-On (OIDC), enter the Display Name for the button and the Issuer URL, Client ID and Client Secret from your provider, then Save.',
  'help.guide.oidc.step.2': 'Switch SSO Login on under Authentication Methods.',
  'help.guide.oidc.result':
    'The sign-in page shows the SSO button; with SSO Auto-Provisioning on, first-time users get an account automatically.',
  'help.guide.oidc.tip.1':
    "The redirect URI your provider needs is your TREK's address plus the OIDC callback path from the docs.",
  'help.guide.oidc.tip.2': 'Claim mapping decides which SSO groups become admins; see the OIDC page in the docs.',
  // instance-keys
  'help.guide.instance-keys.title': 'Enter the API keys',
  'help.guide.instance-keys.goal': 'Unlock Google place search, Unsplash covers and Amap for the whole instance.',
  'help.guide.instance-keys.step.1':
    'Under API Keys, paste the Google Maps API Key and click Test; the field says whether the key answers.',
  'help.guide.instance-keys.step.2':
    'Under What the key may be used for, switch on only the features you want billed to that key: autocomplete, details, photos, enrichment, the place shadow.',
  'help.guide.instance-keys.step.3':
    'Unsplash API Key powers cover search; Amap (高德地图) API Key place search in China. Test each the same way.',
  'help.guide.instance-keys.result':
    'Users get the features without keys of their own; without a Google key TREK searches through the free OpenStreetMap stack and the TREK Places API.',
  'help.guide.instance-keys.tip.1': "A user's personal key under Settings wins over the instance key for that user.",
  'help.guide.instance-keys.tip.2': 'Keys can also come from environment variables; those show as read-only here.',
  // places-transit
  'help.guide.places-transit.title': 'Pick the search and transit providers',
  'help.guide.places-transit.goal': 'Decide who answers place searches and public-transport routes.',
  'help.guide.places-transit.step.1':
    'Under Place search provider, choose Automatic, Google Places, Amap (高德地图) or OpenStreetMap. Automatic uses the best key that exists.',
  'help.guide.places-transit.step.2':
    'Under Transit Provider, choose Transitous (free), worldwide and without a key, or Google, which needs the Google key.',
  'help.guide.places-transit.result': 'Every search box and every transit route in TREK follows the choice.',
  'help.guide.places-transit.tip.1': 'A provider without its key shows a warning here and falls back to OpenStreetMap.',
  'help.guide.places-transit.tip.2': 'Google transit routes are billed per request; Transitous is not.',
  // file-types
  'help.guide.file-types.title': 'Limit the file types',
  'help.guide.file-types.goal': 'Decide which file extensions uploads may have.',
  'help.guide.file-types.step.1': 'Under Allowed File Types, edit the comma-separated list of extensions and save.',
  'help.guide.file-types.result':
    'Uploads of any other type are refused with a clear message, in the documents, the journal and the covers.',
  'help.guide.file-types.tip.1': 'Keep image types in the list; covers and journey photos go through the same check.',
  // toggle-addon
  'help.guide.toggle-addon.title': 'Switch an addon on or off',
  'help.guide.toggle-addon.goal': 'Offer a feature module to everyone, or take it away.',
  'help.guide.toggle-addon.step.1':
    "Flip the switch on the addon's tile. The navigation entry appears or disappears for everyone at once.",
  'help.guide.toggle-addon.step.2':
    'Some tiles carry sub-rows for their options, such as Bag Tracking under Lists or the photo providers under Journey; they show only while the addon is on.',
  'help.guide.toggle-addon.result': 'Data of an addon switched off is kept; switching it back on shows it again.',
  'help.guide.toggle-addon.tip.1': 'MCP off removes the endpoint and the Integrations sections that depend on it.',
  'help.guide.toggle-addon.tip.2':
    'Vacay, Atlas and Journey are the addons users ask for most; Documents needs storage for uploads.',
  // install-plugin
  'help.guide.install-plugin.title': 'Install a plugin',
  'help.guide.install-plugin.goal': 'Add a third-party plugin and give it exactly the permissions it asks for.',
  'help.guide.install-plugin.step.1':
    'Open Discover, pick a plugin and click Install; or click Upload plugin and choose a .zip or .tar.gz package.',
  'help.guide.install-plugin.step.2':
    'Back under Installed, read the row: what the plugin may read or write, the hosts it calls and whether it is signed. Switch Enable plugin on.',
  'help.guide.install-plugin.step.3':
    "The row's menu offers Restart, View error log, Allowed hosts and Change version…; Delete uninstalls it. An update is offered on the row when a newer version exists, and one that asks for new rights stays off until you approve them.",
  'help.guide.install-plugin.result':
    'The plugin runs in its own process; what it adds, widgets, map layers, tools, appears where the plugin declares it.',
  'help.guide.install-plugin.tip.1': 'Rescan picks up a plugin folder linked for development without a package.',
  'help.guide.install-plugin.tip.2': 'An unsigned plugin is marked as such; install it only when you trust its source.',
  // storage-backends
  'help.guide.storage-backends.title': 'Move uploads to S3 or a mirror',
  'help.guide.storage-backends.goal': 'Keep files on object storage, or on both disk and bucket.',
  'help.guide.storage-backends.step.1':
    'Under Backends, click Add backend, give it a Name, pick the Type, Local, S3 or Mirror, fill in the fields and Apply. Test checks the connection, Save changes writes it.',
  'help.guide.storage-backends.step.2':
    'Under Categories, assign each upload category to a backend. Changing one asks whether to Move existing objects or Just route new writes.',
  'help.guide.storage-backends.step.3': 'Health at the top checks every backend; a red entry names what failed.',
  'help.guide.storage-backends.result': 'New uploads go to the assigned backend; moved files are served from there.',
  'help.guide.storage-backends.tip.1':
    'A backend configured through environment variables is shown but cannot be edited here.',
  'help.guide.storage-backends.tip.2':
    'A mirror writes to both targets and reads from the first; use it to migrate without downtime.',
  // channels-instance
  'help.guide.channels-instance.title': 'Configure the notification channels',
  'help.guide.channels-instance.goal': 'Decide which channels users may pick, and set up email.',
  'help.guide.channels-instance.step.1':
    'Under Email (SMTP), enter SMTP Host, SMTP Port, SMTP User, SMTP Password and the From Address; Send test email sends a mail to you.',
  'help.guide.channels-instance.step.2':
    'Switch Ntfy and Webhook on to offer them; users then enter their own topic or URL under Settings, Notifications.',
  'help.guide.channels-instance.step.3':
    'Trip Reminders switches the reminder before a trip starts; In-App is always on and only explained here.',
  'help.guide.channels-instance.result': 'The Notifications tab of every user shows the channels you switched on.',
  'help.guide.channels-instance.tip.1':
    'A default ntfy server entered here is pre-filled for users; they can still name their own.',
  'help.guide.channels-instance.tip.2':
    'Plugin channels appear on their own once a plugin with that capability is active.',
  // admin-channels
  'help.guide.admin-channels.title': 'Get admin events on your phone',
  'help.guide.admin-channels.goal': 'Hear about failed backups, new releases and other instance events.',
  'help.guide.admin-channels.step.1':
    'Under Admin Ntfy, enter a topic and, if needed, server and token; under Admin Webhook a URL.',
  'help.guide.admin-channels.step.2': 'Click Send test ntfy or Send test webhook to see a message arrive.',
  'help.guide.admin-channels.result': 'Admin events go there in addition to the in-app bell of every admin.',
  'help.guide.admin-channels.tip.1':
    'Keep the admin topic separate from your personal one, so an outage does not drown in trip chatter.',
  // mcp-tokens-admin
  'help.guide.mcp-tokens-admin.title': 'Revoke AI access',
  'help.guide.mcp-tokens-admin.goal': 'See and cut every token and session an AI client holds, for any user.',
  'help.guide.mcp-tokens-admin.step.1':
    'Under API Tokens, find the token by user and name; the bin deletes it and the client stops at once.',
  'help.guide.mcp-tokens-admin.step.2':
    'Under OAuth Sessions, the same for browser-based clients: client, user and date, and the bin revokes the session.',
  'help.guide.mcp-tokens-admin.result': 'The client has to be connected again by its user; nothing else changes.',
  'help.guide.mcp-tokens-admin.tip.1':
    'Scopes tell you what a client could do; a read-only scope is harmless to leave.',
  'help.guide.mcp-tokens-admin.tip.2': 'Switching the MCP addon off revokes everything at once.',
  // release-history
  'help.guide.release-history.title': 'Check for a new release',
  'help.guide.release-history.goal': 'Know whether your TREK is current and what the next version brings.',
  'help.guide.release-history.step.1':
    'When a newer release exists, Update available shows at the top of the admin page; View on GitHub opens it, and How to Update explains the update for Docker and for other installs.',
  'help.guide.release-history.step.2':
    'Release History lists every release with its notes; Show details expands them, the newest carries Latest, and Load more walks further back.',
  'help.guide.release-history.result':
    'Updating happens on the host, by pulling the new image or building the new tag; the data directory stays.',
  'help.guide.release-history.tip.1': 'Take a backup before an update; the Backup tab is next door.',
  'help.guide.release-history.tip.2': 'Pre-releases are shown but not announced as updates unless you run one.',
  // create-backup
  'help.guide.create-backup.title': 'Make and restore a backup',
  'help.guide.create-backup.goal': 'Snapshot the whole instance, keep a copy elsewhere, and be able to put it back.',
  'help.guide.create-backup.step.1':
    'Under Data Backup, click Create Backup. It packs the database and the uploads into one file on the server.',
  'help.guide.create-backup.step.2': 'Download keeps a copy off the machine; the bin deletes old ones to free space.',
  'help.guide.create-backup.step.3':
    'Restore on a backup, or Upload Backup with a file, replaces the current data after Restore Backup? asks once.',
  'help.guide.create-backup.result':
    'A restore brings back users, trips, files and settings as of that backup; everyone is signed out.',
  'help.guide.create-backup.tip.1':
    'Restoring is the one action here that cannot be undone. Make a fresh backup first.',
  'help.guide.create-backup.tip.2':
    'Backups live in the data directory; a copy on another machine is what makes them a backup.',
  // auto-backup
  'help.guide.auto-backup.title': 'Schedule backups',
  'help.guide.auto-backup.goal': 'Let the server back itself up and keep only the last few.',
  'help.guide.auto-backup.step.1':
    'Under Auto-Backup, switch Enable auto-backup on and pick the Interval, Run at hour and, for weekly or monthly, the Day of week or Day of month.',
  'help.guide.auto-backup.step.2':
    'Delete old backups after sets how long a backup is kept; older ones go when a new one is made.',
  'help.guide.auto-backup.result': 'Backups appear in the list on schedule; a failure reaches the admin channels.',
  'help.guide.auto-backup.tip.1': "Times follow the server's timezone, shown in the Audit tab.",
  'help.guide.auto-backup.tip.2': 'Storage on the server is finite; keeping three to five is usually enough.',
  // audit-log
  'help.guide.audit-log.title': 'Read the audit log',
  'help.guide.audit-log.goal': 'Find out who did what, and when.',
  'help.guide.audit-log.step.1':
    'Read the rows: time, user, action, resource, IP and details, newest first. Actions are named by what happened, such as a login failure, an MFA change or a restore.',
  'help.guide.audit-log.step.2': 'Refresh reloads the top; Load more walks further back.',
  'help.guide.audit-log.result': 'A trail you can hand to whoever asks why something changed.',
  'help.guide.audit-log.tip.1': "Times are shown in the server's timezone, named above the table.",
  'help.guide.audit-log.tip.2': 'The log is append-only; nothing here can be edited or deleted from the app.',

  // ── Screen: trip ──────────────────────────────────────────────────────────────────────
  'help.ctx.trip.title': 'Trip',
  'help.ctx.trip.summary':
    'One trip, all of it: the plan with its days, map and places, and the tabs for transports, bookings, lists, costs, files and collaboration. Each of those is its own help screen below this one.',
  'help.ctx.trip.bullet.1':
    'The tab bar: Plan, Transports, Bookings, Lists, Costs, Files and Collab. Addons and plugins decide which tabs exist on your TREK.',
  'help.ctx.trip.bullet.2':
    'Plan is three columns: the days on the left, the map in the middle, the places on the right. Bookings and transports live inside the plan, at the stop and between stops; the tabs list them.',
  'help.ctx.trip.bullet.3':
    'Share at the top right opens the people of the trip: members, guests, the invite link and the read-only public link.',
  'help.ctx.trip.bullet.4':
    'The title, dates, cover and currency are edited from My Trips, with the pencil on the trip card.',
  'help.ctx.trip.bullet.5':
    'The chevrons at the inner edge of a column fold it away and the map takes the room; the thin divider next to a column changes its width.',
  'help.ctx.trip.bullet.6': 'The undo arrow in the toolbar of the days takes back the last change to the plan.',
  // add-member
  'help.guide.add-member.title': 'Add a member',
  'help.guide.add-member.goal': 'Give someone with a TREK account access to this trip.',
  'help.guide.add-member.step.1': 'Click Share at the top right.',
  'help.guide.add-member.step.2': 'Under Invite User, pick the person from the list and click Invite.',
  'help.guide.add-member.step.3':
    'The person now appears under Access. The crown marks the owner; the icon at the end of a row removes access again.',
  'help.guide.add-member.result':
    'The member sees and edits the trip like you, within the levels the admin set under Permission Settings.',
  'help.guide.add-member.tip.1':
    'Someone missing from the list has no TREK account yet: add them as a guest, or let them register through an invite link.',
  'help.guide.add-member.tip.2':
    'The number next to Access counts the people in the trip; guests are listed separately below.',
  // trip-invite-link
  'help.guide.trip-invite-link.title': 'Invite by link',
  'help.guide.trip-invite-link.goal': 'Let people join the trip themselves.',
  'help.guide.trip-invite-link.step.1': 'Click Share, then under Trip invite link click Create invite link.',
  'help.guide.trip-invite-link.step.2':
    'Click Copy and send the link. Anyone with a TREK account who opens it joins as a member.',
  'help.guide.trip-invite-link.step.3':
    'Regenerate replaces the link and makes the old one useless; Disable switches it off.',
  'help.guide.trip-invite-link.result': 'Whoever opens the link is in the trip and shows up under Access.',
  'help.guide.trip-invite-link.tip.1':
    'Someone without an account cannot use it. An admin hands out registration links under Admin, Users, and can tie one to this trip.',
  'help.guide.trip-invite-link.tip.2':
    'Regenerate when a link went to the wrong chat: the old one stops working at once.',
  // add-guest
  'help.guide.add-guest.title': 'Add a guest without an account',
  'help.guide.add-guest.goal': 'Count someone in who does not use TREK.',
  'help.guide.add-guest.step.1': 'Click Share and scroll to Guests.',
  'help.guide.add-guest.step.2': 'Type the name into Guest name and click Add guest.',
  'help.guide.add-guest.result': 'The guest can be assigned to costs, packing items and tasks, but cannot sign in.',
  'help.guide.add-guest.tip.1':
    'The pencil renames a guest; the icon at the end of the row removes them together with their shares and assignments.',
  'help.guide.add-guest.tip.2': 'If the person gets an account later, invite them as a member and remove the guest.',
  // public-link
  'help.guide.public-link.title': 'Publish a read-only link',
  'help.guide.public-link.goal': 'Show the trip to people who should not edit it.',
  'help.guide.public-link.step.1':
    'Click Share; on the right, under Public Link, tick what the link may show. Map & Plan is always on; Bookings, Packing, Costs and Chat are your choice.',
  'help.guide.public-link.step.2': 'Click Create link, then Copy.',
  'help.guide.public-link.step.3': 'The ticks can be changed while the link exists; Delete link stops it.',
  'help.guide.public-link.result':
    'Anyone with the link sees the chosen parts without logging in and cannot change anything.',
  'help.guide.public-link.tip.1':
    'The link is listed nowhere; whoever has it can open it, so treat it like a password.',
  'help.guide.public-link.tip.2': 'For editing rights, add the person as a member instead.',
  // transfer-ownership
  'help.guide.transfer-ownership.title': 'Hand the trip over or leave it',
  'help.guide.transfer-ownership.goal': 'Make someone else the owner, or step out of a trip that is not yours.',
  'help.guide.transfer-ownership.step.1':
    'Click Share. Under Access, the crown on a member’s row makes that person the owner; confirm the question.',
  'help.guide.transfer-ownership.step.2':
    'Leave trip on your own row takes you out of the trip; as the owner, hand over first.',
  'help.guide.transfer-ownership.result':
    'The new owner manages members and can delete the trip; you stay a regular member.',
  'help.guide.transfer-ownership.tip.1':
    'The owner is whoever created the trip until it is handed over; deleting the trip is theirs alone.',
  'help.guide.transfer-ownership.tip.2':
    'Remove access on another row is the same button the other way round: the owner takes a member out.',
  // collapse-columns
  'help.guide.collapse-columns.title': 'Make room for the map',
  'help.guide.collapse-columns.goal': 'Fold a column away or give it more width.',
  'help.guide.collapse-columns.step.1':
    'Click the chevron at the inner edge of the days column to collapse it; the map takes the space. The places column has the same chevron.',
  'help.guide.collapse-columns.step.2': 'Click the chevron again to bring the column back.',
  'help.guide.collapse-columns.step.3':
    'Drag the thin divider between a column and the map to change the column’s width.',
  'help.guide.collapse-columns.result': 'The widths are remembered; the columns come back open on the next visit.',
  'help.guide.collapse-columns.tip.1': 'Both columns can be folded at once for a map-only view.',
  'help.guide.collapse-columns.tip.2':
    'On a phone there are no columns: Plan and Places are the two buttons at the bottom of the map.',
  // undo-change
  'help.guide.undo-change.title': 'Undo the last change',
  'help.guide.undo-change.goal': 'Take back what you just did to the plan.',
  'help.guide.undo-change.step.1':
    'Click the undo arrow in the toolbar above the days; its tooltip names the change it will take back.',
  'help.guide.undo-change.result': 'The plan is back the way it was, and the arrow greys out until the next change.',
  'help.guide.undo-change.tip.1':
    'Undo covers the plan: assigning, removing, reordering and moving places, optimizing a route, deleting places, category changes and imports.',
  'help.guide.undo-change.tip.2':
    'It is one step deep: only the latest change can be taken back, and a new change replaces it.',

  // ── Screen: trip-places ───────────────────────────────────────────────────────────────
  'help.ctx.trip-places.title': 'Places',
  'help.ctx.trip-places.summary':
    'The right column of the plan: every place of the trip, planned or not, with search and filters, and the ways to bring places in, by hand, from a file or from a shared list.',
  'help.ctx.trip-places.bullet.1':
    'Add Place/Activity at the top opens the form for a place you type or search. While a day is open the button reads New place, and To day next to it creates the place straight on that day.',
  'help.ctx.trip-places.bullet.2':
    'Import file takes .gpx, .kml and .kmz files; List Import takes a shared Google Maps or Naver Maps list. A file can also just be dropped onto the column.',
  'help.ctx.trip-places.bullet.3':
    'The dropdown switches between All, Unplanned, Planned and, once a track was imported, Tracks; below it sit the search, the category filter and the star for a minimum rating.',
  'help.ctx.trip-places.bullet.4':
    'A row shows picture, name and description or address. Click it for the place’s details, drag it onto a day, or right-click it for Edit, Add to day, Open Website, Google Maps, Save to Collection and Delete.',
  'help.ctx.trip-places.bullet.5':
    'With a day open, a + at the end of an unplanned row puts the place on that day, and Planned lists only that day, with Show the whole trip to widen again.',
  'help.ctx.trip-places.bullet.6':
    'The tick at the right end of the filter row starts a selection: several rows at once get a new category, go into a collection or are deleted.',
  // create-place
  'help.guide.create-place.title': 'Create a place',
  'help.guide.create-place.goal': 'Add a place or activity by hand, with everything the plan needs to know about it.',
  'help.guide.create-place.step.1':
    'Click Add Place/Activity at the top of the places column (New place while a day is open). The form opens.',
  'help.guide.create-place.step.2':
    'Type the place into Search places… at the top and pick a result. Name, Address, Latitude, Longitude and Website fill in, and Place details on the left shows pictures, opening hours and a description for it. On a TREK with a Google key, Not the right place? Search Google instead sits under the list and runs the same search through Google.',
  'help.guide.create-place.step.3':
    'In Place details, a click on a picture under Pick a picture makes it the place’s image; Use this text takes the description over into the form.',
  'help.guide.create-place.step.4':
    'Check the fields: Name is required; Description and Notes are yours; Address, Latitude and Longitude come from the search or are typed; Category picks one of the trip’s categories, and the + next to it creates a new one on the spot; Website takes the link.',
  'help.guide.create-place.step.5':
    'Click Add. If a place of the same name is already in the trip, the form says so and the button turns into Add anyway.',
  'help.guide.create-place.result':
    'The place is in the list and on the map, under Unplanned until it is put on a day.',
  'help.guide.create-place.tip.1':
    'Files and Costs at the bottom of the form attach a document to the place, or open the Costs editor for its expense right after saving.',
  'help.guide.create-place.tip.2':
    'The TREK index and OpenStreetMap answer the search on every TREK, and Place details fills itself from Wikipedia, Wikivoyage and Wikimedia. Google is asked only where both come up empty, and only it brings ratings.',
  'help.guide.create-place.tip.3':
    'A place can also start on the map: right-click the spot, and the form opens with the coordinates and address filled in.',
  // place-to-open-day
  'help.guide.place-to-open-day.title': 'Add a place straight to the open day',
  'help.guide.place-to-open-day.goal': 'Skip the second step: create or pick the place and have it on the day at once.',
  'help.guide.place-to-open-day.step.1':
    'Click a day’s header in the days column. The day is open: its card is highlighted, and the places column gains the To day button.',
  'help.guide.place-to-open-day.step.2':
    'To day opens the same form as New place, only the place lands on the open day the moment you click Add.',
  'help.guide.place-to-open-day.step.3':
    'A place that already exists goes onto the open day with the + at the end of its row, or by right-click, Add to day.',
  'help.guide.place-to-open-day.result':
    'The place is listed under the day, at the end; drag it up or down to where it belongs.',
  'help.guide.place-to-open-day.tip.1':
    'Dragging a row onto a day works as well, and it can drop the place between two stops right away.',
  'help.guide.place-to-open-day.tip.2': 'Undo in the toolbar above the days takes the assignment back.',
  // filter-places
  'help.guide.filter-places.title': 'Find a place in the list',
  'help.guide.filter-places.goal': 'Narrow the column to the places you are after.',
  'help.guide.filter-places.step.1':
    'The dropdown at the top switches between All, Unplanned (not on any day yet), Planned (on a day) and Tracks (imported GPX tracks), each with its count.',
  'help.guide.filter-places.step.2': 'Type into Search places…; the list narrows as you type.',
  'help.guide.filter-places.step.3':
    'All Categories opens a list to tick one or more categories, No Category among them; Clear filter at its bottom resets it.',
  'help.guide.filter-places.step.4':
    'The star next to it sets a minimum rating: 5+, 4+ and so on show only places you rated at least that high.',
  'help.guide.filter-places.result': 'The count above the rows says how many places match; the filters combine.',
  'help.guide.filter-places.tip.1':
    'With a day open, Planned lists that day only and says so: Showing the open day only, with Show the whole trip next to it.',
  'help.guide.filter-places.tip.2':
    'The map narrows to the open day as well; All in the list still shows every place of the trip.',
  // edit-place
  'help.guide.edit-place.title': 'Change a place',
  'help.guide.edit-place.goal': 'Fix a name, move the pin, add a website or change the category.',
  'help.guide.edit-place.step.1':
    'Right-click the row and choose Edit, or open the place and click Edit in its details.',
  'help.guide.edit-place.step.2':
    'Change what you need: Name, Description, Notes, Address, Latitude and Longitude, Category, Website. Opened from a day, the form also has Notes for this day and Start and End for that day.',
  'help.guide.edit-place.step.3': 'Click Update.',
  'help.guide.edit-place.result':
    'The change applies everywhere the place appears: the list, the map and every day it is on.',
  'help.guide.edit-place.tip.1':
    'Notes for this day belong to the place on that one day; Notes belong to the place itself.',
  'help.guide.edit-place.tip.2':
    'An End before the Start blocks Update; Time overlap with: only warns that another stop of the day has the same time.',
  // delete-place
  'help.guide.delete-place.title': 'Delete a place',
  'help.guide.delete-place.goal': 'Take a place out of the trip for good.',
  'help.guide.delete-place.step.1': 'Right-click the row and choose Delete, or click Delete in the place’s details.',
  'help.guide.delete-place.step.2':
    'Confirm. If a night was booked at the place, or a booking is linked to it, the question says what goes with it.',
  'help.guide.delete-place.result':
    'The place is gone from the list, the map and every day; Undo in the toolbar above the days brings it back.',
  'help.guide.delete-place.tip.1': 'To take a place off one day only, use Remove from Day on that stop instead.',
  'help.guide.delete-place.tip.2': 'Several places at once: the tick next to the filters starts a selection.',
  // select-places
  'help.guide.select-places.title': 'Change or delete several places at once',
  'help.guide.select-places.goal': 'Tidy the list in one go instead of place by place.',
  'help.guide.select-places.step.1':
    'Click the tick at the right end of the filter row. The rows get checkboxes and a bar with the actions appears.',
  'help.guide.select-places.step.2': 'Tick the rows, or Select all in the bar; the bar counts what is selected.',
  'help.guide.select-places.step.3':
    'Change category gives all of them one category; Save to Collection copies them into one of your collections; Delete selected removes them after a confirmation.',
  'help.guide.select-places.step.4': 'Click the tick again to leave the selection.',
  'help.guide.select-places.result':
    'The change applies to every selected place; a deletion can be undone from the toolbar above the days.',
  'help.guide.select-places.tip.1':
    'The filters keep working while you select: filter to Unplanned first, then Select all catches exactly those.',
  'help.guide.select-places.tip.2':
    'Mark visited in your lists appears in the bar when the Collections addon is on: it ticks the places off in the collections they are saved in.',
  // import-places-file
  'help.guide.import-places-file.title': 'Import places from a GPX, KML or KMZ file',
  'help.guide.import-places-file.goal': 'Bring in what Google My Maps, Google Earth or a GPS tracker exported.',
  'help.guide.import-places-file.step.1': 'Click Import file, or drop the file anywhere on the places column.',
  'help.guide.import-places-file.step.2':
    'Pick the file or drag it into the box. For a GPX, tick what to import: Waypoints, Routes, Tracks (with path geometry); for KML and KMZ, Points (Placemarks) and Paths (LineStrings).',
  'help.guide.import-places-file.step.3':
    'The box takes several files at once, and only .gpx, .kml and .kmz. Another kind of file, or one over 10 MB, is refused in the dialog and not imported.',
  'help.guide.import-places-file.step.4':
    'Click Import. A message says how many places came in; for a KML or KMZ file the dialog stays open with a summary of what was created and what was skipped.',
  'help.guide.import-places-file.result':
    'The places are in the list; a track carries a route marker on its row, draws on the map and gets its own Tracks filter.',
  'help.guide.import-places-file.tip.1':
    'A file that is too big is refused with the size limit; export it again without photos, or split it.',
  'help.guide.import-places-file.tip.2': 'The import can be undone as a whole from the toolbar above the days.',
  // import-places-list
  'help.guide.import-places-list.title': 'Import a shared Google Maps or Naver Maps list',
  'help.guide.import-places-list.goal': 'Turn a shared list link into places.',
  'help.guide.import-places-list.step.1': 'Click List Import and choose Google List or Naver List.',
  'help.guide.import-places-list.step.2':
    'Paste the shared link of the list. A Google Maps directions link works too: its stops become places, in driving order.',
  'help.guide.import-places-list.step.3': 'Click Import.',
  'help.guide.import-places-list.result':
    'Every place of the list is in the trip, named as in the list; places already in the trip are skipped.',
  'help.guide.import-places-list.tip.1':
    'The list has to be shared publicly; the link of a private list imports nothing.',
  'help.guide.import-places-list.tip.2':
    'Enrich places via Google appears in the dialog when your TREK has a Google key: it looks every imported place up and fills in photos, address and details.',

  // ── Screen: trip-days ─────────────────────────────────────────────────────────────────
  'help.ctx.trip-days.title': 'Days',
  'help.ctx.trip-days.summary':
    'The left column of the plan: one card per day with its stops in order, the notes, the bookings and transports of the day, and the route between the stops. This is where the trip is actually planned.',
  'help.ctx.trip-days.bullet.1':
    'The toolbar at the top: Export (PDF, calendar, GPX), Expand all days / Collapse all days, the undo arrow, Reorder days and Show all booking routes.',
  'help.ctx.trip-days.bullet.2':
    'A day card: number, weather, title, date and the day’s cost in the header; click the header to open the day, its chevron folds it. Public transit, Add transport and Add Note sit in the header as well.',
  'help.ctx.trip-days.bullet.3':
    'Inside a day: the stops in order, each with picture, name, time and a lock on the picture; notes; bookings that belong to the day; and between the stops the travel time of each leg.',
  'help.ctx.trip-days.bullet.4':
    'Under the stops the route bar: Route draws the day on the map, Optimize sorts the stops, Driving / Walking sets the day’s travel mode, Open in Google Maps and Open in CoMaps hand the day over.',
  'help.ctx.trip-days.bullet.5':
    'Places come onto a day by dragging a row from the places column, with the + on that row, with Add place to this day on an empty day, or from the place’s details.',
  'help.ctx.trip-days.bullet.6':
    'Total Cost at the bottom adds up every stop and booking with a price, in the trip’s currency.',
  // read-day-plan
  'help.guide.read-day-plan.title': 'Read a day',
  'help.guide.read-day-plan.goal': 'Know what every part of a day card tells you before you change anything.',
  'help.guide.read-day-plan.step.1':
    'The header: the day number, the forecast for the day, Day 1 or the title you gave it, the date and the cost of the day. Click the header to open the day (its details panel opens over the map); the chevron at the right folds and unfolds the card.',
  'help.guide.read-day-plan.step.2':
    'A stop: the grip on the left drags it, the picture carries a lock for route optimization, then the name, the description and, if set, the notes for this day. A time badge shows Start and End when the stop has them; the arrows that appear at its right end move it up or down.',
  'help.guide.read-day-plan.step.3':
    'A booking on the day: a transport shows as Departure or Arrival with its time and route, a reservation at a stop marks the stop Reservation confirmed or Reservation pending. The small toggle on a transport shows its route on the map.',
  'help.guide.read-day-plan.step.4':
    'Between two stops the connector says how long the leg takes and how far it is, in the day’s travel mode; click it to change the mode for that one leg.',
  'help.guide.read-day-plan.step.5':
    'The route bar at the end: Route draws the day’s way on the map, Optimize reorders the stops, the mode buttons pick Driving or Walking, Open in Google Maps and Open in CoMaps open the day there.',
  'help.guide.read-day-plan.result': 'Every symbol on the card has a meaning; the guides below change each of them.',
  'help.guide.read-day-plan.tip.1':
    'Right-click a stop for its menu: Edit, Remove from day, Open Website, Save to Collection, Delete.',
  'help.guide.read-day-plan.tip.2':
    'Hover a stop and Add booking appears at its end: a reservation created there is tied to this stop on this day.',
  // place-onto-day
  'help.guide.place-onto-day.title': 'Put a place on a day',
  'help.guide.place-onto-day.goal': 'Turn a place from the list into a stop of a day, where it belongs in the order.',
  'help.guide.place-onto-day.step.1':
    'Drag a row from the places column onto the day card. Drop it between two stops to put it exactly there, or anywhere on the card to append it.',
  'help.guide.place-onto-day.step.2':
    'Without dragging: open the day by clicking its header, then click the + at the end of the place’s row, or right-click the row and choose Add to day.',
  'help.guide.place-onto-day.step.3':
    'On an empty day, Add place to this day opens the place form, and the new place lands on the day at once.',
  'help.guide.place-onto-day.step.4':
    'From a place’s details, Add to Day asks which day; from the day’s header, To day in the places column creates a new place on the open day.',
  'help.guide.place-onto-day.result':
    'The place is a stop of the day, on the map with the day’s number, and the places column counts it under Planned.',
  'help.guide.place-onto-day.tip.1':
    'A place can be on several days: put it on the second day from the places column. Dragging a stop from one day card to another moves it instead.',
  'help.guide.place-onto-day.tip.2': 'The undo arrow in the toolbar takes the assignment back.',
  'help.guide.place-onto-day.tip.3':
    'A stop cannot be dropped between two entries that have fixed times, or before a booking that is already timed; the plan keeps its chronology.',
  // reorder-stops
  'help.guide.reorder-stops.title': 'Change the order of a day',
  'help.guide.reorder-stops.goal': 'Move a stop up or down, or to another day.',
  'help.guide.reorder-stops.step.1': 'Drag the stop by its grip to the new position in the card.',
  'help.guide.reorder-stops.step.2': 'Or use the arrows at the right end of the stop: one step up or down per click.',
  'help.guide.reorder-stops.step.3': 'Drag the stop onto another day card to move it there; it leaves the old day.',
  'help.guide.reorder-stops.step.4':
    'A stop with a fixed time asks Remove time? when you move it, because the time decided its place: Remove time & move drops the time and lets it go anywhere.',
  'help.guide.reorder-stops.result': 'The route and the travel times follow the new order at once.',
  'help.guide.reorder-stops.tip.1':
    'Bookings with a fixed time cannot be reordered; they sit where their time puts them.',
  'help.guide.reorder-stops.tip.2':
    'Optimize in the route bar orders the whole day by the shortest way; lock a stop first to keep it where it is.',
  // set-stop-times
  'help.guide.set-stop-times.title': 'Give a stop a time',
  'help.guide.set-stop-times.goal': 'Fix when a stop starts and ends, so the day reads like a schedule.',
  'help.guide.set-stop-times.step.1':
    'Right-click the stop and choose Edit. Opened from the day, the form has Start and End at the bottom.',
  'help.guide.set-stop-times.step.2':
    'Enter Start and, if you like, End. Time overlap with: warns that another timed stop of the day overlaps; an End before the Start blocks Update.',
  'help.guide.set-stop-times.step.3':
    'Click Update. The stop gets a time badge and moves to where its time belongs in the day.',
  'help.guide.set-stop-times.result': 'Timed stops keep their place in the order; untimed stops sort around them.',
  'help.guide.set-stop-times.tip.1':
    'The time belongs to the stop on that day; the same place on another day can have another time.',
  'help.guide.set-stop-times.tip.2':
    'To move a timed stop by hand, drag it: Remove time & move drops the time on the way.',
  'help.guide.set-stop-times.tip.3':
    'Notes for this day in the same form hold what only applies on this day, a table reserved, a ticket number.',
  // remove-from-day
  'help.guide.remove-from-day.title': 'Take a stop off a day',
  'help.guide.remove-from-day.goal': 'Unplan a place without deleting it from the trip.',
  'help.guide.remove-from-day.step.1': 'Right-click the stop and choose Remove from day.',
  'help.guide.remove-from-day.step.2':
    'The stop is gone from the day; the place stays in the places column, under Unplanned if it is on no other day.',
  'help.guide.remove-from-day.result': 'The day, its route and its cost update; the undo arrow brings the stop back.',
  'help.guide.remove-from-day.tip.1':
    'Delete in the same menu removes the place from the whole trip, every day included.',
  'help.guide.remove-from-day.tip.2': 'Remove from Day also sits in the place’s details panel, next to Add to Day.',
  // lock-stop
  'help.guide.lock-stop.title': 'Lock a stop in place',
  'help.guide.lock-stop.goal': 'Keep a stop where it is when the route is optimized.',
  'help.guide.lock-stop.step.1':
    'Hover the stop’s picture and click the lock: Keep position during route optimization.',
  'help.guide.lock-stop.step.2':
    'Optimize now sorts the other stops around it; click the lock again (Click to unlock) to release it.',
  'help.guide.lock-stop.result': 'The lock shows on the picture; the stop keeps its position until you unlock it.',
  'help.guide.lock-stop.tip.1': 'A stop with a fixed time is locked by its time; it never moves during optimization.',
  'help.guide.lock-stop.tip.2':
    'The lock lasts for this visit: after a reload every stop is free again, only timed stops stay fixed.',
  // day-note
  'help.guide.day-note.title': 'Add a note to a day',
  'help.guide.day-note.goal': 'Keep a reminder, a ticket number or a plan B right in the day.',
  'help.guide.day-note.step.1': 'Click Add Note in the day’s header.',
  'help.guide.day-note.step.2':
    'Write the note; the toolbar above the text formats it (bold, lists, links, quotes) and Preview shows the result. Time (optional) puts the note at that time of the day.',
  'help.guide.day-note.step.3': 'Pick an Icon and a Colour, so the note stands out from the stops, then Save.',
  'help.guide.day-note.step.4':
    'The note sits in the day like a stop: drag it into place, right-click it for Edit and Delete.',
  'help.guide.day-note.result': 'The note is part of the day, in the PDF too; a timed note sorts with the timed stops.',
  'help.guide.day-note.tip.1':
    'A note with a time can stand in for a transport you have no booking for: “08:15 S3 from central station”.',
  'help.guide.day-note.tip.2': 'Notes are per day; a note for the whole trip belongs in Collab.',
  // day-route
  'help.guide.day-route.title': 'Show and optimize the day’s route',
  'help.guide.day-route.goal': 'See the way between the stops, pick how you travel, and let TREK sort the order.',
  'help.guide.day-route.step.1':
    'Open the day and click Route in the route bar: the way between the stops draws on the map, and the connectors between the stops show the time and distance of each leg.',
  'help.guide.day-route.step.2':
    'Driving and Walking next to it set the travel mode of the day; the legs recalculate. Plugins can add modes of their own.',
  'help.guide.day-route.step.3':
    'Click a connector to change the mode of that one leg: pick a mode, or Use day default to fall back to the day’s.',
  'help.guide.day-route.step.4':
    'Optimize reorders the stops by the shortest way. Stops with a lock or a fixed time keep their place; with an accommodation on the day, the route starts there.',
  'help.guide.day-route.step.5':
    'Open in Google Maps or Open in CoMaps opens the whole day as a route in that app, for navigating on the way.',
  'help.guide.day-route.result': 'The day is a route with times; Total Cost and the legs update as the order changes.',
  'help.guide.day-route.tip.1':
    'Routes come from OSRM by default; the admin can point TREK at another routing engine under User Defaults.',
  'help.guide.day-route.tip.2': 'A leg that could not be routed shows no time; check that both stops have coordinates.',
  'help.guide.day-route.tip.3': 'The undo arrow takes an optimization back.',
  // manage-days
  'help.guide.manage-days.title': 'Add, reorder and rename days',
  'help.guide.manage-days.goal': 'Shape the days themselves, not just what is on them.',
  'help.guide.manage-days.step.1':
    'The days come from the trip’s dates; change the dates on the trip card under Dashboard and days are added or dropped at the ends.',
  'help.guide.manage-days.step.2':
    'Reorder days in the toolbar opens a list: Move up and Move down shift a day with everything on it; Add day appends a day at the end.',
  'help.guide.manage-days.step.3':
    'To rename a day, open it and click the pencil next to its title in the details panel over the map; the name replaces Day 1 in the card and in the PDF.',
  'help.guide.manage-days.step.4':
    'Expand all days and Collapse all days in the toolbar fold every card at once; a single card folds with its chevron.',
  'help.guide.manage-days.result':
    'The dates stay with the position: a day moved up takes the earlier date, its stops, notes and bookings travel with it.',
  'help.guide.manage-days.tip.1': 'Reorder days can be undone from the toolbar.',
  'help.guide.manage-days.tip.2':
    'The cost in a day’s header adds up the stops and bookings of that day that carry a price.',
  // bookings-in-plan
  'help.guide.bookings-in-plan.title': 'Read bookings and transports in the plan',
  'help.guide.bookings-in-plan.goal': 'Know where a booking shows up once it exists, and which screen creates it.',
  'help.guide.bookings-in-plan.step.1':
    'A transport (flight, train, ferry, bus, car) shows in the day it departs as Departure and in the day it arrives as Arrival, with time and route; a multi-day one spans the days in between.',
  'help.guide.bookings-in-plan.step.2':
    'A reservation tied to a stop (a restaurant, a tour) marks that stop Reservation confirmed or Reservation pending; a booking with a day but no stop is its own row in the day.',
  'help.guide.bookings-in-plan.step.3':
    'A night at a hotel is an accommodation: it sits in the day’s details panel under Accommodation, from check-in to check-out, and the route of each of those days starts there.',
  'help.guide.bookings-in-plan.step.4':
    'On the map, the toggle on a transport row draws its route; Show all booking routes in the toolbar draws them all.',
  'help.guide.bookings-in-plan.step.5':
    'Creating: Add booking on a hovered stop, Add transport and Public transit in the day header, and the Bookings and Transports tabs for the full list with import and files.',
  'help.guide.bookings-in-plan.result': 'One booking, one place in the plan; the tabs are the same bookings as a list.',
  'help.guide.bookings-in-plan.tip.1':
    'Confirmed and pending is a status you set on the booking; the plan shows it on the stop, the Bookings tab counts both.',
  'help.guide.bookings-in-plan.tip.2':
    'A transport with a fixed time cannot be dragged; change its time in the booking instead.',
  // export-plan
  'help.guide.export-plan.title': 'Export the plan',
  'help.guide.export-plan.goal': 'Take the plan along as a document, into your calendar or onto a GPS.',
  'help.guide.export-plan.step.1': 'Click Export in the toolbar above the days.',
  'help.guide.export-plan.step.2':
    'Document: PDF opens the print view of every day with its stops, notes and bookings; Page break per day starts each day on a new page, Save as PDF downloads it.',
  'help.guide.export-plan.step.3':
    'Calendar: Download .ics saves the bookings as a calendar file; Subscribe to calendar gives a link your calendar app refreshes by itself.',
  'help.guide.export-plan.step.4':
    'Maps & GPS · GPX: Whole trip exports places, day routes and tracks; Places only the pins; Days as routes one route per day, for offline maps and GPS devices.',
  'help.guide.export-plan.result': 'The file downloads; nothing in the trip changes.',
  'help.guide.export-plan.tip.1':
    'A single day goes to a map app from its route bar: Open in Google Maps or Open in CoMaps.',
  'help.guide.export-plan.tip.2':
    'Subscribe to calendar needs calendar feeds switched on in your settings; Dashboard has a guide for it.',
  'help.guide.export-plan.tip.3': 'Exporting is reading: every member of the trip can do it.',
};

export default help;
