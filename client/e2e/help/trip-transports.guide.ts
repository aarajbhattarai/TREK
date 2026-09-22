import { test, expect, type Locator, type Page } from '@playwright/test'
import { captureGuide, captureHero, beat, typeInto, settle, VIEWPORT, type GuideScript } from './guide'
import { seededTrip, ensureTransportFixtures, TRANSIT_JOURNEY } from './fixtures'
import { openTrip, openTripOnDay, selectDay, modal, dialog, portalDialog } from './trip-shared'
import { tripTransportsContext, tripTransportsGuides } from '../../src/help/contexts/tripTransports'
import type { HelpGuide } from '../../src/help/types'

/**
 * Actions for the Transports tab of a trip, keyed by the ids in
 * `src/help/contexts/tripTransports.ts`. They run on the seeded "Autumn in
 * Japan" with the transports `ensureTransportFixtures` adds up front, so the
 * tab has a type chip per group and a planned connection to open; what a guide
 * creates it takes away again in `cleanup`, so the next one starts the same.
 */

const guide = (id: string): HelpGuide => {
  const g = tripTransportsGuides.find(x => x.id === id)
  if (!g) throw new Error(`no registered guide "${id}"`)
  return g
}

/** The flight the seed creates. Its row on day 1 carries the Departure span label. */
const FLIGHT = { title: 'LH716', row: /^Departure LH716/ }
/**
 * The connection the fixtures store on day 6, so no guide has to search for one
 * first. Its card writes the two ends either side of an arrow icon, with no
 * text between them, so `hasText` gets the first end rather than the title.
 */
const JOURNEY = { title: TRANSIT_JOURNEY, onCard: 'Arashiyama Bamboo Grove' }
/** What plan-transit plans on day 1; the title the panel builds from the two ends. */
const PLANNED = 'Senso-ji Temple → teamLab Planets'
/** What add-transport creates. Both ends are searched, so the map has something to draw. */
const TAXI = {
  title: 'Taxi to teamLab Planets',
  from: { query: 'Senso-ji Temple Tokyo', match: /^Sens/ },
  to: { query: 'teamLab Planets', match: /^teamLab/ },
}

/** A day card's header: number, weather, "Day n", date, and the four action buttons. */
const dayHeader = (page: Page, n: number) => page.getByRole('button', { name: new RegExp(`^${n} .*Day ${n} `) })
/** A booking card in the tab, told apart by what is written on it. */
const card = (page: Page, text: string) => page.locator('.bg-surface-card').filter({ hasText: text }).first()
/** A transport's row in the day plan; the whole row is the button that opens it. */
const transportRow = (page: Page, name: RegExp) => page.getByRole('button', { name }).first()
/** A toolbar type chip or a section heading — both are a label followed by their count. */
const counted = (page: Page, label: string) => page.getByRole('button', { name: new RegExp(`^${label} \\d+$`) })
/** A labelled field block inside the open dialog. */
const block = (page: Page, label: string) => modal(page).getByText(label, { exact: true }).locator('xpath=..')
/** The leg-mode popover, told apart from the connector's tooltip by what stands in it. */
const legMenu = (page: Page) =>
  page.locator('.trek-popover-enter').filter({ has: page.getByRole('button', { name: 'Use day default' }) }).last()
/** The travel-time connector between two stops of the open day. */
const connector = (page: Page) => page.getByRole('button', { name: 'Change travel mode' }).first()
/** The transit search's stop boxes, and the transport form's location boxes. */
const stopBox = (page: Page, n: number) => modal(page).getByPlaceholder('Search stop or station…').nth(n)
const locationBox = (page: Page, n: number) => modal(page).getByPlaceholder('Search station, port, address…').nth(n)
/**
 * Both pickers are an input in its own relative wrapper with the result list as
 * the wrapper's second child, so one expression finds either one's suggestions.
 */
const suggestions = (box: Locator) => box.locator('xpath=../..').locator('> div').nth(1)
/** A result of the transit search: the card's own toggle carries the times as its name. */
const itinerary = (page: Page, n: number) =>
  modal(page).getByRole('button', { name: /^\d{1,2}:\d{2} – \d{1,2}:\d{2} / }).nth(n)
/** The read-only sheet an endpoint marker on the map opens; its own portal, no shared class. */
const transportSheet = (page: Page) => portalDialog(page, page.getByRole('button', { name: 'Close' }))

async function searchLocation(page: Page, box: Locator, query: string, match: RegExp): Promise<void> {
  await box.click()
  await typeInto(page, box, query)
  const options = suggestions(box).locator('button')
  await expect(options.first()).toBeVisible({ timeout: 25_000 })
  // The suggestion that answers the query, not whatever came back first: this
  // list is a live geocoder and its top hit for a landmark is as often a shop
  // down the road, which then travels into the picture as the wrong address.
  const wanted = options.filter({ hasText: match }).first()
  await expect(wanted, `no suggestion for "${query}" matching ${match}`).toBeVisible({ timeout: 25_000 })
  await wanted.click()
  await expect(box).toHaveValue(match, { timeout: 15_000 })
}

/** The transit search offers the day's own stops as soon as the box has focus. */
async function pickStop(page: Page, box: Locator, name: string): Promise<void> {
  await box.click()
  const option = suggestions(box).getByRole('button', { name })
  await expect(option).toBeVisible({ timeout: 20_000 })
  await option.click()
  await expect(box).toHaveValue(name, { timeout: 10_000 })
}

async function deleteByTitle(page: Page, ...titles: string[]): Promise<void> {
  const { tripId } = seededTrip()
  const res = await page.request.get(`/api/trips/${tripId}/reservations`)
  const body = (await res.json()) as { reservations?: { id: number; title: string }[] } | { id: number; title: string }[]
  const list = Array.isArray(body) ? body : (body.reservations ?? [])
  for (const r of list.filter(x => titles.includes(x.title))) {
    await page.request.delete(`/api/trips/${tripId}/reservations/${r.id}`)
  }
}

/** Give a day's legs back to the day's own mode, whichever stop carries the one that was set. */
async function resetLegModes(page: Page, dayIndex: number): Promise<void> {
  const { tripId, dayIds } = seededTrip()
  const res = await page.request.get(`/api/trips/${tripId}/days/${dayIds[dayIndex]}/assignments`)
  const body = (await res.json()) as { assignments?: { id: number }[] }
  for (const a of body.assignments ?? []) {
    await page.request.put(`/api/trips/${tripId}/assignments/${a.id}/transport`, { data: { transport_mode: null } })
  }
}

/** The day route toggle stays on until it is clicked again; it is only there while a day is open. */
async function switchRouteOff(page: Page): Promise<void> {
  const route = page.getByRole('button', { name: 'Route', exact: true }).first()
  if (await route.isVisible().catch(() => false)) {
    await route.click()
    await settle(page)
  }
}

const closeModal = async (page: Page): Promise<void> => {
  if (await modal(page).isVisible().catch(() => false)) {
    await page.keyboard.press('Escape')
    await expect(modal(page)).toHaveCount(0)
  }
}

const only = (target: (p: Page) => Locator) => ({ target })

const SCRIPTS: Record<string, GuideScript> = {
  'transports-list': {
    guide: guide('transports-list'),
    start: p => openTrip(p, { tab: 'transports' }),
    steps: [
      only(p => p.getByRole('button', { name: 'Transports', exact: true })),
      {
        target: p => counted(p, 'All').locator('xpath=..'),
        act: async p => {
          await counted(p, 'Train').click()
          await expect(card(p, FLIGHT.title)).toHaveCount(0)
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await counted(p, 'All').click()
          await expect(card(p, FLIGHT.title)).toBeVisible()
          await settle(p)
        },
        target: p => counted(p, 'Automated public transit'),
      },
      only(p => card(p, FLIGHT.title)),
      {
        prepare: async p => {
          await card(p, FLIGHT.title).getByRole('button', { name: 'Delete' }).click()
          await expect(p.getByText('Delete booking?')).toBeVisible()
          await beat(p, 300)
        },
        target: p => portalDialog(p, p.getByText('Delete booking?')),
        // Cancel, not Confirm: the flight has to survive for the next guide.
        act: async p => {
          await portalDialog(p, p.getByText('Delete booking?')).getByRole('button', { name: 'Cancel' }).click()
          await expect(p.getByText('Delete booking?')).toHaveCount(0)
          await expect(card(p, FLIGHT.title)).toBeVisible()
        },
      },
    ],
    cleanup: async p => {
      await p.evaluate(() => { try { sessionStorage.clear() } catch { /* a locked-down browser keeps its filters */ } })
    },
  },
  'add-transport': {
    guide: guide('add-transport'),
    start: p => openTrip(p),
    steps: [
      {
        // captureGuide hovers the target before the shot, so the tooltip is in the picture.
        target: p => dayHeader(p, 1).getByRole('button', { name: 'Add transport' }),
        act: async p => {
          await dayHeader(p, 1).getByRole('button', { name: 'Add transport' }).click()
          await expect(modal(p).getByRole('heading', { name: 'Add transport' })).toBeVisible()
          await settle(p)
        },
      },
      {
        target: p => block(p, 'Booking Type'),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Taxi', exact: true }).click()
          await expect(modal(p).getByText('Start time', { exact: true })).toBeVisible()
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await typeInto(p, modal(p).getByPlaceholder('e.g. Lufthansa LH123, Hotel Adlon, ...'), TAXI.title)
          await settle(p)
        },
        target: p => block(p, 'Title *'),
      },
      {
        prepare: async p => {
          await searchLocation(p, locationBox(p, 0), TAXI.from.query, TAXI.from.match)
          await searchLocation(p, locationBox(p, 1), TAXI.to.query, TAXI.to.match)
          await settle(p)
        },
        target: p => modal(p).getByText('From', { exact: true }).locator('xpath=../..'),
      },
      {
        prepare: async p => {
          // Between the two stops of day 1, which the fixtures give 09:30 and 13:00.
          await modal(p).getByPlaceholder('00:00').nth(0).fill('12:00')
          await modal(p).getByPlaceholder('00:00').nth(1).fill('12:30')
          await settle(p)
        },
        target: p => modal(p).getByText('Date', { exact: true }).locator('xpath=../..'),
      },
      {
        target: p => modal(p).getByRole('button', { name: 'Add', exact: true }),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Add', exact: true }).click()
          await expect(modal(p)).toHaveCount(0)
          await expect(transportRow(p, new RegExp(TAXI.title))).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => deleteByTitle(p, TAXI.title),
  },
  'plan-transit': {
    guide: guide('plan-transit'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => dayHeader(p, 1).getByRole('button', { name: 'Public transit' }),
        act: async p => {
          await dayHeader(p, 1).getByRole('button', { name: 'Public transit' }).click()
          await expect(modal(p).getByRole('heading', { name: 'Public transit' })).toBeVisible()
          await settle(p)
        },
      },
      {
        // The quick picks open on focus, so the day's own stops are in the picture.
        prepare: async p => {
          await stopBox(p, 0).click()
          await expect(suggestions(stopBox(p, 0)).getByRole('button', { name: 'Senso-ji Temple' })).toBeVisible()
          await beat(p, 300)
        },
        target: p => modal(p).getByText('From', { exact: true }).locator('xpath=../..'),
        act: async p => {
          await pickStop(p, stopBox(p, 0), 'Senso-ji Temple')
          await pickStop(p, stopBox(p, 1), 'teamLab Planets')
          await expect(modal(p).getByRole('button', { name: 'Search' })).toBeEnabled()
          await settle(p)
        },
      },
      {
        target: p => modal(p).getByRole('button', { name: 'Depart' }).locator('xpath=ancestor::div[3]'),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Fewer transfers' }).click()
          await settle(p)
        },
      },
      {
        target: p => modal(p).getByRole('button', { name: 'Tram' }).locator('xpath=ancestor::div[2]'),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Search' }).click()
          await expect(modal(p).getByText('Routing data via')).toBeVisible({ timeout: 60_000 })
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await itinerary(p, 0).click()
          await expect(modal(p).getByRole('button', { name: 'Add to day' })).toBeVisible()
          await beat(p, 300)
        },
        target: p => itinerary(p, 0).locator('xpath=..'),
      },
      {
        target: p => modal(p).getByRole('button', { name: 'Add to day' }),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Add to day' }).click()
          await expect(modal(p)).toHaveCount(0, { timeout: 30_000 })
          await expect(transportRow(p, /Senso-ji Temple.*teamLab Planets/)).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => deleteByTitle(p, PLANNED),
  },
  'change-transit-route': {
    guide: guide('change-transit-route'),
    start: p => openTrip(p, { tab: 'transports' }),
    steps: [
      {
        target: p => card(p, JOURNEY.onCard),
        act: async p => {
          await card(p, JOURNEY.onCard).click()
          await expect(modal(p).getByRole('heading', { name: 'Public transit journey' })).toBeVisible()
          await settle(p)
        },
      },
      only(p => modal(p).getByText('Itinerary', { exact: true }).locator('xpath=..')),
      {
        target: p => modal(p).getByRole('button', { name: 'Change route' }),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Change route' }).click()
          await expect(modal(p).getByRole('button', { name: 'Search' })).toBeVisible()
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await modal(p).getByRole('button', { name: 'Search' }).click()
          await expect(modal(p).getByText('Routing data via')).toBeVisible({ timeout: 60_000 })
          await itinerary(p, 1).click()
          await expect(modal(p).getByRole('button', { name: 'Add to day' })).toBeVisible()
          await beat(p, 300)
        },
        target: p => modal(p).getByRole('button', { name: 'Add to day' }),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Add to day' }).click()
          await expect(modal(p)).toHaveCount(0, { timeout: 30_000 })
          await settle(p)
        },
      },
    ],
    // The connection now carries another itinerary: put the canned one back.
    cleanup: async p => {
      await deleteByTitle(p, JOURNEY.title)
      await ensureTransportFixtures(p.request)
    },
  },
  'leg-travel-mode': {
    guide: guide('leg-travel-mode'),
    // The route tools only render for the day that is open, and closing its
    // details panel closes the day again, so day 1 stays open here.
    start: p => openTripOnDay(p, 1),
    steps: [
      {
        target: p => p.getByRole('button', { name: 'Route', exact: true }).first(),
        act: async p => {
          await p.getByRole('button', { name: 'Route', exact: true }).first().click()
          await expect(connector(p)).toBeVisible({ timeout: 30_000 })
          await settle(p)
        },
      },
      only(connector),
      {
        prepare: async p => {
          await connector(p).click()
          await expect(legMenu(p)).toBeVisible()
          await beat(p, 300)
        },
        target: legMenu,
      },
      {
        target: p => legMenu(p).getByRole('button', { name: 'Walking' }),
        act: async p => {
          await legMenu(p).getByRole('button', { name: 'Walking' }).click()
          await expect(connector(p).locator('svg.lucide-footprints')).toBeVisible({ timeout: 30_000 })
          await settle(p)
        },
      },
    ],
    cleanup: async p => {
      await switchRouteOff(p)
      await resetLegModes(p, 0)
    },
  },
  'edit-transport': {
    guide: guide('edit-transport'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => transportRow(p, FLIGHT.row),
        act: async p => {
          await transportRow(p, FLIGHT.row).click()
          await expect(modal(p).getByRole('heading', { name: 'Edit transport' })).toBeVisible()
          await settle(p)
        },
      },
      only(dialog),
      only(p => block(p, 'Route')),
      {
        // Escape rather than Update: nothing about the seeded flight may change.
        target: p => modal(p).getByRole('button', { name: 'Update', exact: true }),
        act: closeModal,
      },
    ],
  },
  'transport-on-map': {
    guide: guide('transport-on-map'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => transportRow(p, FLIGHT.row).getByRole('button', { name: 'Show booking routes' }),
        act: async p => {
          await transportRow(p, FLIGHT.row).getByRole('button', { name: 'Show booking routes' }).click()
          await expect(transportRow(p, FLIGHT.row).getByRole('button', { name: 'Hide booking routes' })).toBeVisible()
          await settle(p)
          await p.waitForTimeout(1500)
        },
      },
      // The map is on Tokyo, so the Frankfurt end is off screen and the Haneda
      // one, drawn second, is the marker the reader can actually see.
      only(p => p.locator('.trek-endpoint-marker').last()),
      {
        prepare: async p => {
          await p.locator('.trek-endpoint-marker').last().click()
          await expect(transportSheet(p)).toBeVisible()
          await settle(p)
        },
        target: transportSheet,
        act: async p => {
          await transportSheet(p).getByRole('button', { name: 'Close' }).click()
          await expect(transportSheet(p)).toHaveCount(0)
          await settle(p)
        },
      },
      {
        target: p => p.getByRole('button', { name: 'Show all booking routes' }),
        act: async p => {
          await p.getByRole('button', { name: 'Show all booking routes' }).click()
          await expect(p.getByRole('button', { name: 'Hide all booking routes' })).toBeVisible()
          await settle(p)
          await p.waitForTimeout(1500)
        },
      },
      {
        // Day 6 carries the stored connection, and it has the two located stops
        // the route tools need, so its Route toggle is there to switch on.
        prepare: async p => {
          await selectDay(p, 6)
          await expect(p.getByRole('button', { name: 'Route', exact: true }).first()).toBeVisible()
          await beat(p, 300)
        },
        target: p => p.getByRole('button', { name: 'Route', exact: true }).first(),
        act: async p => {
          await p.getByRole('button', { name: 'Route', exact: true }).first().click()
          await settle(p)
          await p.waitForTimeout(1500)
        },
      },
    ],
    cleanup: async p => {
      await switchRouteOff(p)
      const { tripId } = seededTrip()
      await p.evaluate(id => {
        try { localStorage.removeItem(`trek:visible-connections:${id}`) } catch { /* nothing was stored */ }
      }, tripId)
    },
  },
}

// ── Run ───────────────────────────────────────────────────────────────────────

test.describe.configure({ mode: 'serial' })

test.beforeAll(async ({ request }) => {
  await ensureTransportFixtures(request)
})

test('every registered transports guide has a script, and only those', async () => {
  expect(Object.keys(SCRIPTS).sort()).toEqual([...tripTransportsContext.guides].sort())
})

test('hero: trip-transports', async ({ page }) => {
  await page.setViewportSize(VIEWPORT)
  await captureHero(page, tripTransportsContext.id, p => openTrip(p, { tab: 'transports' }))
})

for (const id of tripTransportsContext.guides) {
  test(`pictures: ${id}`, async ({ page }) => {
    await page.setViewportSize(VIEWPORT)
    await captureGuide(page, SCRIPTS[id])
  })
}
