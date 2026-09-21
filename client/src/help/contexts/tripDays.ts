import type { HelpContext, HelpGuide } from '../types'

/**
 * Help for the days column of a trip's plan: the day cards, the stops on them,
 * their order and times, notes, the day's route, and everything that leaves
 * the plan (PDF, calendar, GPX). Bookings and transports show up here too, so
 * one guide reads them and points at the screens that create them.
 * A screen under `trip`; the step actions live in `e2e/help/trip-days.guide.ts`.
 */

const DAYS = 'Day-Plans-and-Notes'
const MAP = 'Map-Features'

const guide = (
  id: string, icon: HelpGuide['icon'], size: HelpGuide['size'], steps: number, tips: number,
  docs: HelpGuide['docs'], related: string[], result = false,
): HelpGuide => ({ id, context: 'trip-days', icon, size, steps, tips, media: { steps: true, result }, docs, related })

export const tripDaysGuides: HelpGuide[] = [
  guide('read-day-plan', 'eye', 'guide', 5, 2, { slug: DAYS, anchor: 'day-timeline' }, ['bookings-in-plan', 'day-route']),
  guide('place-onto-day', 'calendarCheck', 'guide', 4, 3, { slug: DAYS, anchor: 'assigning-places-to-a-day' }, ['place-to-open-day', 'reorder-stops', 'undo-change'], true),
  guide('reorder-stops', 'repeat', 'quick', 4, 2, { slug: DAYS, anchor: 'assigning-places-to-a-day' }, ['place-onto-day', 'set-stop-times', 'lock-stop']),
  guide('set-stop-times', 'clock', 'quick', 3, 3, { slug: DAYS, anchor: 'day-timeline' }, ['reorder-stops', 'edit-place']),
  guide('remove-from-day', 'minusCircle', 'quick', 2, 2, { slug: DAYS, anchor: 'assigning-places-to-a-day' }, ['delete-place', 'undo-change']),
  guide('lock-stop', 'lock', 'quick', 2, 2, { slug: DAYS, anchor: 'toolbar-actions' }, ['day-route', 'reorder-stops']),
  guide('day-note', 'pencil', 'quick', 4, 2, { slug: DAYS, anchor: 'day-notes' }, ['read-day-plan'], true),
  guide('day-route', 'route', 'guide', 5, 3, { slug: MAP, anchor: 'route-lines' }, ['lock-stop', 'read-day-plan']),
  guide('manage-days', 'calendarDays', 'quick', 4, 2, { slug: DAYS, anchor: 'the-day-plan-sidebar' }, ['edit-trip']),
  guide('bookings-in-plan', 'ticket', 'guide', 5, 2, { slug: DAYS, anchor: 'multi-day-reservations' }, ['read-day-plan']),
  guide('export-plan', 'download', 'quick', 4, 3, { slug: MAP, anchor: 'exporting-a-trip-as-gpx' }, ['calendar-feed']),
]

export const tripDaysContext: HelpContext = {
  id: 'trip-days',
  parent: 'trip',
  route: '/trips/:id?tab=plan',
  icon: 'calendarDays',
  bullets: 6,
  guides: tripDaysGuides.map(g => g.id),
  docs: [{ slug: DAYS }, { slug: MAP }],
  hero: true,
}
