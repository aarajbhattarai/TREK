import type { HelpContext, HelpGuide } from '../types'

/**
 * Help for a trip (`/trips/:id`). The trip is a family of screens: this one is
 * the frame (the tabs, the three columns of the plan, the people in the trip),
 * the columns, the overlays and the other tabs each get their own screen under
 * it, anchored by the page for whatever is open. The step actions that produce
 * the pictures live in `e2e/help/trip.guide.ts`.
 */

const SHARING = 'Sharing-and-Collaboration'
const PLANNER = 'Trip-Planner'

const guide = (
  id: string, icon: HelpGuide['icon'], size: HelpGuide['size'], steps: number, tips: number,
  docs: HelpGuide['docs'], related: string[], result = false,
): HelpGuide => ({ id, context: 'trip', icon, size, steps, tips, media: { steps: true, result }, docs, related })

export const tripGuides: HelpGuide[] = [
  guide('add-member', 'userPlus', 'quick', 3, 2, { slug: SHARING }, ['trip-invite-link', 'add-guest'], true),
  guide('trip-invite-link', 'link', 'quick', 3, 2, { slug: SHARING }, ['add-member', 'invite-links']),
  guide('add-guest', 'userRound', 'quick', 2, 2, { slug: SHARING, anchor: 'guests' }, ['add-member'], true),
  guide('public-link', 'share', 'quick', 3, 2, { slug: SHARING, anchor: 'public-share-links' }, ['add-member']),
  guide('transfer-ownership', 'crown', 'quick', 2, 2, { slug: SHARING }, ['add-member']),
  guide('collapse-columns', 'panelLeft', 'quick', 3, 2, { slug: PLANNER }, []),
  guide('undo-change', 'undo', 'quick', 1, 2, { slug: PLANNER }, []),
]

export const tripContext: HelpContext = {
  id: 'trip',
  route: '/trips/:id?tab=plan',
  icon: 'route',
  bullets: 6,
  guides: tripGuides.map(g => g.id),
  docs: [{ slug: PLANNER }, { slug: SHARING }],
  hero: true,
}
