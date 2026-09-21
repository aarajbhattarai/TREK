import { test, expect, type Page, type Locator } from '@playwright/test'
import { captureGuide, captureHero, beat, typeInto, settle, VIEWPORT, type GuideScript } from './guide'
import { seededTrip, gpxFixture, ensureTrack } from './fixtures'
import { openTrip, modal, dialog } from './trip-shared'
import { tripPlacesContext, tripPlacesGuides } from '../../src/help/contexts/tripPlaces'
import type { HelpGuide } from '../../src/help/types'

/**
 * Actions for the places column of a trip, keyed by the ids in
 * `src/help/contexts/tripPlaces.ts`. They run on the seeded "Autumn in Japan"
 * with one walk imported up front, so the Tracks filter exists; what a guide
 * creates it takes away again in `cleanup`, so the next one starts the same.
 */

const guide = (id: string): HelpGuide => {
  const g = tripPlacesGuides.find(x => x.id === id)
  if (!g) throw new Error(`no registered guide "${id}"`)
  return g
}

const SPARE = { name: 'Tsukiji Outer Market', lat: 35.6654, lng: 139.7707, address: '4 Chome Tsukiji, Chuo City, Tokyo' }

/** A row of the places column by the place's name (the rows are options of a list). */
const row = (page: Page, name: string) => page.getByRole('option', { name: new RegExp(`^${name}`) }).first()
/** The context menu is a fixed popover of plain buttons; the item texts tell it apart. */
const menu = (page: Page) => page.locator('.trek-popover-enter').filter({ has: page.getByRole('button', { name: 'Delete' }) }).last()
/** The add button: "Add Place/Activity" with no day open, "New place" with one. */
const addButton = (page: Page) => page.getByRole('button', { name: /^(Add Place\/Activity|New place)$/ })
/** The filter row's controls. */
const filterSelect = (page: Page) => page.getByTestId('places-filter').getByRole('button').first()
const searchBox = (page: Page) => page.getByPlaceholder('Search places...').last()
/** The column itself: the header block around the search box. */
const column = (page: Page) => searchBox(page).locator('xpath=ancestor::div[contains(@class,"scroll") or @data-places-sidebar][1]')

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

const closeModal = async (page: Page): Promise<void> => {
  if (await modal(page).isVisible().catch(() => false)) {
    await page.keyboard.press('Escape')
    await expect(modal(page)).toHaveCount(0)
  }
}

const only = (target: (p: Page) => Locator) => ({ target })

const SCRIPTS: Record<string, GuideScript> = {
  'create-place': {
    guide: guide('create-place'),
    start: p => openTrip(p),
    steps: [
      {
        // A running trip always has a day open, so the button reads New place.
        target: addButton,
        act: async p => {
          await addButton(p).click()
          await expect(modal(p).getByPlaceholder('Search places...')).toBeVisible()
          await settle(p)
        },
      },
      {
        prepare: async p => {
          const box = modal(p).getByPlaceholder('Search places...')
          await typeInto(p, box, 'Tokyo Tower')
          // The suggestions drop down under the box; the first one is the tower.
          const suggestion = modal(p).locator('.shadow-dropdown button').filter({ hasText: /Tokyo Tower/ }).first()
          await expect(suggestion).toBeVisible({ timeout: 20_000 })
          await suggestion.click()
          await expect(modal(p).getByPlaceholder('e.g. Eiffel Tower')).toHaveValue(/Tokyo Tower/, { timeout: 20_000 })
          await settle(p)
        },
        target: p => modal(p).getByPlaceholder('Search places...').locator('xpath=../..'),
      },
      only(p => modal(p).getByText('Place details', { exact: true }).locator('xpath=ancestor::div[2]')),
      only(p => modal(p).getByPlaceholder('e.g. Eiffel Tower').locator('xpath=ancestor::div[3]')),
      {
        target: p => modal(p).getByRole('button', { name: 'Add', exact: true }),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Add', exact: true }).click()
          await expect(modal(p)).toHaveCount(0)
          await expect(row(p, 'Tokyo Tower')).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => deleteByName(p, 'Tokyo Tower'),
  },
  'place-to-open-day': {
    guide: guide('place-to-open-day'),
    start: async p => {
      await createSpare(p)
      await openTrip(p, { day: null })
    },
    steps: [
      {
        target: p => p.getByRole('button', { name: /^1 .*Day 1 / }),
        act: async p => {
          await p.getByRole('button', { name: /^1 .*Day 1 / }).click()
          await expect(p.getByRole('button', { name: 'Add to the open day' })).toBeVisible()
          await settle(p)
        },
      },
      {
        target: p => p.getByRole('button', { name: 'Add to the open day' }),
        act: async p => {
          await p.getByRole('button', { name: 'Add to the open day' }).click()
          await expect(modal(p).getByPlaceholder('Search places...')).toBeVisible()
          await beat(p, 400)
          await closeModal(p)
        },
      },
      {
        prepare: async p => { await row(p, SPARE.name).hover() },
        target: p => row(p, SPARE.name).locator('button').last(),
        act: async p => {
          await row(p, SPARE.name).locator('button').last().click()
          await expect(p.getByRole('button', { name: 'Undo' })).toBeEnabled({ timeout: 15_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => deleteByName(p, SPARE.name),
  },
  'filter-places': {
    guide: guide('filter-places'),
    start: async p => {
      await createSpare(p)
      await openTrip(p)
    },
    steps: [
      {
        prepare: async p => { await filterSelect(p).click(); await beat(p, 300) },
        target: filterSelect,
        // The lists close on a second click of their trigger, not on Escape.
        act: async p => { await filterSelect(p).click(); await settle(p) },
      },
      {
        prepare: async p => { await typeInto(p, searchBox(p), 'temple'); await settle(p) },
        target: p => searchBox(p).locator('xpath=..'),
        act: async p => { await searchBox(p).fill(''); await settle(p) },
      },
      {
        prepare: async p => { await p.getByRole('button', { name: 'All Categories' }).click(); await beat(p, 300) },
        target: p => p.getByRole('button', { name: 'All Categories' }),
        act: async p => { await p.getByRole('button', { name: 'All Categories' }).click(); await settle(p) },
      },
      {
        prepare: async p => { await p.getByRole('button', { name: 'Filter by rating' }).click(); await beat(p, 300) },
        target: p => p.getByRole('button', { name: 'Filter by rating' }),
        act: async p => { await p.getByRole('button', { name: 'Filter by rating' }).click() },
      },
    ],
    cleanup: p => deleteByName(p, SPARE.name),
  },
  'edit-place': {
    guide: guide('edit-place'),
    start: p => openTrip(p),
    steps: [
      {
        prepare: async p => {
          await row(p, 'Shibuya Crossing').click({ button: 'right' })
          await expect(menu(p).getByRole('button', { name: 'Edit' })).toBeVisible()
          await beat(p, 300)
        },
        target: menu,
        act: async p => {
          await menu(p).getByRole('button', { name: 'Edit' }).click()
          await expect(modal(p).getByPlaceholder('e.g. Eiffel Tower')).toHaveValue('Shibuya Crossing')
          await settle(p)
        },
      },
      only(dialog),
      {
        target: p => modal(p).getByRole('button', { name: 'Update', exact: true }),
        act: closeModal,
      },
    ],
  },
  'delete-place': {
    guide: guide('delete-place'),
    start: async p => {
      await createSpare(p)
      await openTrip(p)
    },
    steps: [
      {
        prepare: async p => {
          await row(p, SPARE.name).click({ button: 'right' })
          await expect(menu(p).getByRole('button', { name: 'Delete' })).toBeVisible()
          await beat(p, 300)
        },
        target: p => menu(p).getByRole('button', { name: 'Delete' }),
        act: async p => {
          await menu(p).getByRole('button', { name: 'Delete' }).click()
          await expect(modal(p)).toBeVisible()
          await settle(p)
        },
      },
      {
        target: dialog,
        act: async p => {
          await modal(p).getByRole('button', { name: 'Delete', exact: true }).click()
          await expect(row(p, SPARE.name)).toHaveCount(0, { timeout: 15_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => deleteByName(p, SPARE.name),
  },
  'select-places': {
    guide: guide('select-places'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => p.getByRole('button', { name: 'Select', exact: true }),
        act: async p => {
          await p.getByRole('button', { name: 'Select', exact: true }).click()
          await expect(p.getByRole('button', { name: 'Select all' })).toBeVisible()
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await row(p, 'Shibuya Crossing').click()
          await row(p, 'Meiji Jingu').click()
          await expect(p.getByText('2 selected')).toBeVisible()
          await beat(p, 300)
        },
        target: p => p.getByText('2 selected').locator('xpath=..'),
      },
      only(p => p.getByRole('button', { name: 'Delete selected' }).locator('xpath=..')),
      {
        target: p => p.getByRole('button', { name: 'Select', exact: true }),
        act: async p => {
          await p.getByRole('button', { name: 'Select', exact: true }).click()
          await expect(p.getByRole('button', { name: 'Select all' })).toHaveCount(0)
        },
      },
    ],
  },
  'import-places-file': {
    guide: guide('import-places-file'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => p.getByRole('button', { name: 'Import file' }),
        act: async p => {
          await p.getByRole('button', { name: 'Import file' }).click()
          await expect(modal(p).getByText('Import file')).toBeVisible()
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await modal(p).locator('input[type="file"]').setInputFiles(gpxFixture('arashiyama-loop'))
          await expect(modal(p).getByText('Tracks (with path geometry)')).toBeVisible({ timeout: 15_000 })
          await settle(p)
        },
        target: dialog,
      },
      only(p => modal(p).getByText('Enrich places via Google').locator('xpath=ancestor::label[1] | xpath=..').first()),
      {
        target: p => modal(p).getByRole('button', { name: 'Import', exact: true }),
        act: async p => {
          await modal(p).getByRole('button', { name: 'Import', exact: true }).click()
          await expect(modal(p)).toHaveCount(0, { timeout: 30_000 })
          await expect(row(p, 'Arashiyama loop')).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => deleteByName(p, 'Arashiyama loop', 'Togetsukyo Bridge', 'Okochi Sanso Villa'),
  },
  'import-places-list': {
    guide: guide('import-places-list'),
    start: p => openTrip(p),
    steps: [
      {
        target: p => p.getByRole('button', { name: 'List Import' }),
        act: async p => {
          await p.getByRole('button', { name: 'List Import' }).click()
          await expect(modal(p).getByPlaceholder(/goo\.gl|naver/)).toBeVisible()
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await typeInto(p, modal(p).getByPlaceholder(/goo\.gl|naver/), 'https://maps.app.goo.gl/kyoto-favourites')
          await beat(p, 300)
        },
        target: dialog,
      },
      only(p => modal(p).getByRole('button', { name: 'Import', exact: true })),
    ],
    cleanup: closeModal,
  },
}

// ── Run ───────────────────────────────────────────────────────────────────────

test.describe.configure({ mode: 'serial' })

test.beforeAll(async ({ request }) => {
  await ensureTrack(request, seededTrip().tripId, 'kyoto-walk')
})

test('every registered places guide has a script, and only those', async () => {
  expect(Object.keys(SCRIPTS).sort()).toEqual([...tripPlacesContext.guides].sort())
})

test('hero: trip-places', async ({ page }) => {
  await page.setViewportSize(VIEWPORT)
  await captureHero(page, tripPlacesContext.id, p => openTrip(p))
})

for (const id of tripPlacesContext.guides) {
  test(`pictures: ${id}`, async ({ page }) => {
    await page.setViewportSize(VIEWPORT)
    await captureGuide(page, SCRIPTS[id])
  })
}
