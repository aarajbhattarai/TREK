import { test, expect, type Page, type Locator } from '@playwright/test'
import { captureGuide, captureHero, beat, typeInto, settle, VIEWPORT, type GuideScript } from './guide'
import { seededTrip, ensureDaysFixtures } from './fixtures'
import { openTrip, modal, dialog, selectDay, closeDayDetails } from './trip-shared'
import { tripDaysContext, tripDaysGuides } from '../../src/help/contexts/tripDays'
import type { HelpGuide } from '../../src/help/types'

/**
 * Actions for the days column of a trip, keyed by the ids in
 * `src/help/contexts/tripDays.ts`. The seeded trip gets a timed stop, a
 * reservation at a stop, a train and a hotel first, so the cards show every
 * kind of row; a guide that changes the plan puts it back in `cleanup`.
 */

const guide = (id: string): HelpGuide => {
  const g = tripDaysGuides.find(x => x.id === id)
  if (!g) throw new Error(`no registered guide "${id}"`)
  return g
}

const SPARE = { name: 'Tsukiji Outer Market', lat: 35.6654, lng: 139.7707, address: '4 Chome Tsukiji, Chuo City, Tokyo' }

/** A day card's header button. */
const dayHeader = (page: Page, n: number) => page.getByRole('button', { name: new RegExp(`^${n} .*Day ${n} `) })
/** A stop row: the button that holds the lock button and the place's name. */
const stop = (page: Page, name: string) =>
  page.locator('button').filter({ has: page.getByRole('button', { name: /Keep position during route optimization|Click to unlock/ }) }).filter({ hasText: name }).first()
/** A row of the places column. */
const placeRow = (page: Page, name: string) => page.getByRole('option', { name: new RegExp(`^${name}`) }).first()
/** The context menu of a stop or a note. */
const menu = (page: Page) => page.locator('.trek-popover-enter').last()
/** The route bar of the open day. */
const routeBar = (page: Page) => page.getByRole('button', { name: 'Route', exact: true }).locator('xpath=..')
const toolbar = (page: Page) => page.getByRole('button', { name: 'Export' }).locator('xpath=..')
/** A connector between two stops, once the day's route is computed. */
const connector = (page: Page) => page.locator('div[role="button"]').filter({ has: page.locator('svg.lucide-car, svg.lucide-footprints') }).first()

async function createSpare(page: Page): Promise<void> {
  const { tripId } = seededTrip()
  const created = await page.request.post(`/api/trips/${tripId}/places`, { data: SPARE })
  if (!created.ok()) throw new Error(`could not create the spare place: ${created.status()} ${await created.text()}`)
}

async function deleteByName(page: Page, ...names: string[]): Promise<void> {
  const { tripId } = seededTrip()
  const res = await page.request.get(`/api/trips/${tripId}/places`)
  const body = (await res.json()) as { places?: { id: number; name: string }[] } | { id: number; name: string }[]
  const places = Array.isArray(body) ? body : (body.places ?? [])
  for (const place of places.filter(x => names.includes(x.name))) {
    await page.request.delete(`/api/trips/${tripId}/places/${place.id}`)
  }
}

/** Open the trip on day 1 and draw its route, so the connectors between the stops exist. */
async function openWithRoute(page: Page): Promise<void> {
  await openTrip(page)
  await page.getByRole('button', { name: 'Route', exact: true }).click()
  await expect(connector(page)).toBeVisible({ timeout: 30_000 })
  await settle(page)
}

const closeModal = async (page: Page): Promise<void> => {
  if (await modal(page).isVisible().catch(() => false)) {
    await page.keyboard.press('Escape')
    await expect(modal(page)).toHaveCount(0)
  }
}

const only = (target: (p: Page) => Locator) => ({ target })

const SCRIPTS: Record<string, GuideScript> = {
  'read-day-plan': {
    guide: guide('read-day-plan'),
    start: openWithRoute,
    steps: [
      only(p => dayHeader(p, 1)),
      only(p => stop(p, 'Senso-ji Temple')),
      only(p => p.locator('button').filter({ hasText: /Departure.*LH716/ }).first()),
      only(connector),
      only(routeBar),
    ],
  },
  'place-onto-day': {
    guide: guide('place-onto-day'),
    start: async p => {
      await createSpare(p)
      await openTrip(p)
    },
    steps: [
      {
        target: p => placeRow(p, SPARE.name),
        dropTo: p => dayHeader(p, 2).locator('xpath=..'),
        act: async p => {
          await placeRow(p, SPARE.name).dragTo(dayHeader(p, 2))
          await expect(stop(p, SPARE.name)).toBeVisible({ timeout: 15_000 })
          await settle(p)
        },
      },
      {
        prepare: async p => {
          // Back to the list for the second way in.
          await stop(p, SPARE.name).click({ button: 'right' })
          await menu(p).getByRole('button', { name: 'Remove from day' }).click()
          await expect(stop(p, SPARE.name)).toHaveCount(0, { timeout: 15_000 })
          await placeRow(p, SPARE.name).hover()
          await settle(p)
        },
        target: p => placeRow(p, SPARE.name).locator('button').last(),
      },
      only(p => p.getByRole('button', { name: 'Add place to this day' }).first()),
      only(p => p.getByRole('button', { name: 'Add to the open day' })),
    ],
    cleanup: p => deleteByName(p, SPARE.name),
  },
  'reorder-stops': {
    guide: guide('reorder-stops'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => stop(p, 'teamLab Planets').locator('svg.lucide-grip-vertical').locator('xpath=..'),
        dropTo: p => stop(p, 'Senso-ji Temple'),
      },
      {
        prepare: async p => { await stop(p, 'teamLab Planets').hover() },
        target: p => stop(p, 'teamLab Planets').locator('button:has(svg.lucide-chevron-up)'),
      },
      {
        target: p => stop(p, 'teamLab Planets'),
        dropTo: p => dayHeader(p, 2).locator('xpath=..'),
      },
      {
        prepare: async p => {
          // Moving the timed stop asks first; the question is the picture.
          await stop(p, 'Senso-ji Temple').hover()
          await stop(p, 'Senso-ji Temple').locator('button:has(svg.lucide-chevron-down)').click()
          await expect(modal(p).getByText('Remove time?')).toBeVisible({ timeout: 10_000 })
          await settle(p)
        },
        target: dialog,
        act: closeModal,
      },
    ],
  },
  'set-stop-times': {
    guide: guide('set-stop-times'),
    start: p => openTrip(p),
    steps: [
      {
        prepare: async p => {
          await stop(p, 'teamLab Planets').click({ button: 'right' })
          await expect(menu(p).getByRole('button', { name: 'Edit' })).toBeVisible()
          await beat(p, 300)
        },
        target: menu,
        act: async p => {
          await menu(p).getByRole('button', { name: 'Edit' }).click()
          await expect(modal(p).getByText('Start', { exact: true })).toBeVisible({ timeout: 10_000 })
          await settle(p)
        },
      },
      {
        prepare: async p => {
          // The time pickers are text fields that parse on blur.
          const times = modal(p).getByPlaceholder(/^(00:00|2:30 PM)$/)
          await times.first().fill('13:00')
          await times.first().blur()
          await times.nth(1).fill('15:00')
          await times.nth(1).blur()
          await beat(p, 300)
        },
        target: p => modal(p).getByText('Start', { exact: true }).locator('xpath=../..'),
      },
      {
        target: p => modal(p).getByRole('button', { name: 'Update', exact: true }),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Update', exact: true }).click()
          await expect(modal(p)).toHaveCount(0)
          await expect(stop(p, 'teamLab Planets').getByText('13:00')).toBeVisible({ timeout: 15_000 })
          await settle(p)
        },
      },
    ],
    cleanup: async p => {
      const { tripId, dayIds } = seededTrip()
      const res = await p.request.get(`/api/trips/${tripId}/days/${dayIds[0]}/assignments`)
      const body = (await res.json()) as { assignments?: { id: number; place?: { name: string }; place_name?: string }[] }
      for (const a of body.assignments ?? []) {
        if ((a.place?.name ?? a.place_name) === 'teamLab Planets') {
          await p.request.put(`/api/trips/${tripId}/assignments/${a.id}/time`, { data: { place_time: null, end_time: null } })
        }
      }
    },
  },
  'remove-from-day': {
    guide: guide('remove-from-day'),
    start: async p => {
      await createSpare(p)
      await openTrip(p)
      await placeRow(p, SPARE.name).hover()
      await placeRow(p, SPARE.name).locator('button').last().click()
      await expect(stop(p, SPARE.name)).toBeVisible({ timeout: 15_000 })
      await settle(p)
    },
    steps: [
      {
        prepare: async p => {
          await stop(p, SPARE.name).click({ button: 'right' })
          await expect(menu(p).getByRole('button', { name: 'Remove from day' })).toBeVisible()
          await beat(p, 300)
        },
        target: p => menu(p).getByRole('button', { name: 'Remove from day' }),
        act: async p => {
          await menu(p).getByRole('button', { name: 'Remove from day' }).click()
          await expect(stop(p, SPARE.name)).toHaveCount(0, { timeout: 15_000 })
          await settle(p)
        },
      },
      only(p => placeRow(p, SPARE.name)),
    ],
    cleanup: p => deleteByName(p, SPARE.name),
  },
  'lock-stop': {
    guide: guide('lock-stop'),
    start: p => openTrip(p),
    steps: [
      {
        prepare: async p => { await stop(p, 'teamLab Planets').hover() },
        target: p => stop(p, 'teamLab Planets').getByRole('button', { name: 'Keep position during route optimization' }),
        act: async p => {
          await stop(p, 'teamLab Planets').getByRole('button', { name: 'Keep position during route optimization' }).click()
          await expect(stop(p, 'teamLab Planets').getByRole('button', { name: 'Click to unlock' })).toBeVisible()
          await settle(p)
        },
      },
      {
        target: p => stop(p, 'teamLab Planets').getByRole('button', { name: 'Click to unlock' }),
        act: async p => {
          await stop(p, 'teamLab Planets').getByRole('button', { name: 'Click to unlock' }).click()
        },
      },
    ],
  },
  'day-note': {
    guide: guide('day-note'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => dayHeader(p, 2).getByRole('button', { name: 'Add Note' }),
        act: async p => {
          await dayHeader(p, 2).getByRole('button', { name: 'Add Note' }).click()
          await expect(modal(p).getByPlaceholder('Details, links, reminders…')).toBeVisible()
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await typeInto(p, modal(p).getByPlaceholder('Details, links, reminders…'), 'Rain plan: **Tokyo National Museum** instead of the shrine, tickets at the gate.')
          await beat(p, 300)
        },
        target: p => modal(p).getByPlaceholder('Details, links, reminders…').locator('xpath=ancestor::div[2]'),
      },
      {
        target: p => modal(p).getByText('Colour', { exact: true }).locator('xpath=..'),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Save', exact: true }).click()
          await expect(modal(p)).toHaveCount(0)
          await expect(p.getByText('Rain plan:')).toBeVisible({ timeout: 15_000 })
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await p.locator('button').filter({ hasText: 'Rain plan:' }).first().click({ button: 'right' })
          await expect(menu(p).getByRole('button', { name: 'Edit' })).toBeVisible()
          await beat(p, 300)
        },
        target: p => p.locator('button').filter({ hasText: 'Rain plan:' }).first(),
        act: async p => { await p.keyboard.press('Escape') },
      },
    ],
    cleanup: async p => {
      const { tripId, dayIds } = seededTrip()
      const res = await p.request.get(`/api/trips/${tripId}/days/${dayIds[1]}/notes`)
      const body = (await res.json()) as { notes?: { id: number; text: string }[] } | { id: number; text: string }[]
      const notes = Array.isArray(body) ? body : (body.notes ?? [])
      for (const note of notes.filter(n => n.text.startsWith('Rain plan:'))) {
        await p.request.delete(`/api/trips/${tripId}/days/${dayIds[1]}/notes/${note.id}`)
      }
    },
  },
  'day-route': {
    guide: guide('day-route'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => p.getByRole('button', { name: 'Route', exact: true }),
        act: async p => {
          await p.getByRole('button', { name: 'Route', exact: true }).click()
          await expect(connector(p)).toBeVisible({ timeout: 30_000 })
          await settle(p)
        },
      },
      only(p => routeBar(p).getByRole('button', { name: 'Driving' }).locator('xpath=..')),
      {
        prepare: async p => {
          await connector(p).click()
          await expect(menu(p).getByRole('button', { name: 'Use day default' })).toBeVisible()
          await beat(p, 300)
        },
        target: menu,
        act: async p => { await p.keyboard.press('Escape') },
      },
      only(p => p.getByRole('button', { name: 'Optimize' })),
      only(p => p.getByRole('button', { name: 'Open in Google Maps' }).locator('xpath=..')),
    ],
  },
  'manage-days': {
    guide: guide('manage-days'),
    start: p => openTrip(p),
    steps: [
      only(p => dayHeader(p, 1)),
      {
        prepare: async p => {
          await p.getByRole('button', { name: 'Reorder days' }).click()
          await expect(p.getByText('Reorder days').first()).toBeVisible()
          await settle(p)
        },
        target: p => p.getByRole('button', { name: 'Add day' }).locator('xpath=ancestor::div[3]'),
        act: async p => { await p.keyboard.press('Escape'); await settle(p) },
      },
      {
        prepare: async p => {
          await selectDay(p, 1)
          await expect(p.getByRole('button', { name: 'Edit', exact: true })).toBeVisible()
          await settle(p)
        },
        target: p => p.getByRole('button', { name: 'Edit', exact: true }).locator('xpath=..'),
        act: closeDayDetails,
      },
      only(p => p.getByRole('button', { name: /Expand all days|Collapse all days/ })),
    ],
  },
  'bookings-in-plan': {
    guide: guide('bookings-in-plan'),
    start: async p => {
      await openTrip(p, { day: 5 })
    },
    steps: [
      only(p => p.locator('button').filter({ hasText: /Departure.*Nozomi 21/ }).first()),
      {
        prepare: async p => { await selectDay(p, 6); await closeDayDetails(p) },
        target: p => stop(p, 'Nishiki Market'),
      },
      {
        prepare: async p => {
          await selectDay(p, 1)
          await expect(p.getByText('Accommodation', { exact: true }).first()).toBeVisible()
          await settle(p)
        },
        target: p => p.getByText('Accommodation', { exact: true }).first().locator('xpath=..'),
        act: closeDayDetails,
      },
      only(p => toolbar(p).getByRole('button', { name: /Show all booking routes|Hide all booking routes/ })),
      {
        prepare: async p => { await stop(p, 'Senso-ji Temple').hover() },
        target: p => stop(p, 'Senso-ji Temple').getByRole('button', { name: 'Add booking' }),
      },
    ],
  },
  'export-plan': {
    guide: guide('export-plan'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => p.getByRole('button', { name: 'Export' }),
        act: async p => {
          await p.getByRole('button', { name: 'Export' }).click()
          await expect(modal(p).getByText('Document', { exact: true })).toBeVisible()
          await settle(p)
        },
      },
      only(p => modal(p).getByText('Document', { exact: true }).locator('xpath=..')),
      only(p => modal(p).getByText('Calendar', { exact: true }).locator('xpath=..')),
      only(p => modal(p).getByText(/^Maps & GPS/).locator('xpath=..')),
    ],
    cleanup: closeModal,
  },
}

// ── Run ───────────────────────────────────────────────────────────────────────

test.describe.configure({ mode: 'serial' })

test.beforeAll(async ({ request }) => {
  await ensureDaysFixtures(request)
})

test('every registered days guide has a script, and only those', async () => {
  expect(Object.keys(SCRIPTS).sort()).toEqual([...tripDaysContext.guides].sort())
})

test('hero: trip-days', async ({ page }) => {
  await page.setViewportSize(VIEWPORT)
  await captureHero(page, tripDaysContext.id, openWithRoute)
})

for (const id of tripDaysContext.guides) {
  test(`pictures: ${id}`, async ({ page }) => {
    await page.setViewportSize(VIEWPORT)
    await captureGuide(page, SCRIPTS[id])
  })
}
