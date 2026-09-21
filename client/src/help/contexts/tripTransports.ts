import { defineScreen } from '../defineScreen'

/**
 * Help for the Transports tab of a trip and for the transports themselves: the
 * rides that carry the traveller between the stops, flights, trains, buses,
 * cars, taxis and ferries, plus the automated public-transit connections the
 * Transitous search plans and the lines all of them draw on the map. A screen
 * under `trip`; the step actions live in `e2e/help/trip-transports.guide.ts`.
 */

const TRANSPORT = 'Transport-Flights-Trains-Cars'
const MAP = 'Map-Features'
const OVERLAY = { slug: MAP, anchor: 'reservation-and-transport-overlay' }

export const { context: tripTransportsContext, guides: tripTransportsGuides } = defineScreen({
  id: 'trip-transports',
  parent: 'trip',
  route: '/trips/:id?tab=transports',
  icon: 'train',
  bullets: 6,
  docs: [{ slug: TRANSPORT }, OVERLAY],
  guides: [
    ['transports-list', 'eye', 'guide', 5, 2, { slug: TRANSPORT, anchor: 'where-to-create' }, ['edit-transport', 'bookings-in-plan', 'filter-bookings']],
    ['add-transport', 'plus', 'guide', 6, 3, { slug: TRANSPORT, anchor: 'common-fields' }, ['plan-transit', 'edit-transport', 'transports-list'], true],
    ['plan-transit', 'train', 'guide', 6, 3, { slug: TRANSPORT, anchor: 'public-transit-search' }, ['change-transit-route', 'leg-travel-mode', 'add-transport'], true],
    ['change-transit-route', 'repeat', 'quick', 4, 2, { slug: TRANSPORT, anchor: 'public-transit-search' }, ['plan-transit', 'edit-transport']],
    ['leg-travel-mode', 'route', 'quick', 4, 3, { slug: MAP, anchor: 'travel-times-between-stops' }, ['plan-transit', 'day-route', 'read-day-plan']],
    ['edit-transport', 'pencil', 'quick', 4, 2, { slug: TRANSPORT, anchor: 'in-the-day-plan' }, ['add-transport', 'transports-list', 'bookings-in-plan']],
    ['transport-on-map', 'map', 'guide', 5, 3, OVERLAY, ['transports-list', 'day-route'], true],
  ],
})
