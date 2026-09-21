import type { HelpContext, HelpGuide } from '../types'

/**
 * Help for the places column of a trip's plan: bringing places in (by hand,
 * from a file, from a shared list), finding them, changing and deleting them.
 * A screen under `trip`; the step actions live in `e2e/help/trip-places.guide.ts`.
 */

const PLACES = 'Places-and-Search'
const IMPORT = { slug: PLACES, anchor: 'importing-places' }

const guide = (
  id: string, icon: HelpGuide['icon'], size: HelpGuide['size'], steps: number, tips: number,
  docs: HelpGuide['docs'], related: string[], result = false,
): HelpGuide => ({ id, context: 'trip-places', icon, size, steps, tips, media: { steps: true, result }, docs, related })

export const tripPlacesGuides: HelpGuide[] = [
  guide('create-place', 'plus', 'guide', 5, 3, { slug: PLACES }, ['place-to-open-day', 'edit-place'], true),
  guide('place-to-open-day', 'calendarCheck', 'quick', 3, 2, { slug: PLACES }, ['create-place']),
  guide('filter-places', 'filter', 'quick', 4, 2, { slug: PLACES }, ['select-places']),
  guide('edit-place', 'pencil', 'quick', 3, 2, { slug: PLACES }, ['create-place', 'delete-place']),
  guide('delete-place', 'trash', 'quick', 2, 2, { slug: PLACES }, ['edit-place', 'select-places', 'undo-change']),
  guide('select-places', 'checkCircle', 'quick', 4, 2, { slug: PLACES }, ['filter-places', 'delete-place'], true),
  guide('import-places-file', 'fileInput', 'guide', 4, 2, IMPORT, ['import-places-list', 'filter-places'], true),
  guide('import-places-list', 'upload', 'quick', 3, 2, IMPORT, ['import-places-file']),
]

export const tripPlacesContext: HelpContext = {
  id: 'trip-places',
  parent: 'trip',
  route: '/trips/:id?tab=plan',
  icon: 'mapPin',
  bullets: 6,
  guides: tripPlacesGuides.map(g => g.id),
  docs: [{ slug: PLACES }, IMPORT],
  hero: true,
}
