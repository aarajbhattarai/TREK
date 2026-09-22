import { test, expect, type Page, type Locator } from '@playwright/test'
import { captureGuide, captureHero, typeInto, settle, VIEWPORT, type GuideScript } from './guide'
import { seededTrip, ensureFilesFixtures, filesPdfFixture, filesImageFixture } from './fixtures'
import { openTrip, portalDialog } from './trip-shared'
import { tripFilesContext, tripFilesGuides } from '../../src/help/contexts/tripFiles'
import type { HelpGuide } from '../../src/help/types'

/**
 * Actions for the Files tab of a trip, keyed by the ids in
 * `src/help/contexts/tripFiles.ts`. The seed creates no documents at all, so
 * `ensureFilesFixtures` puts a small set of drawn ones in before the first
 * picture; what a guide uploads, links, stars or throws away it undoes in
 * `cleanup`, so the next one starts from that same set.
 */

const guide = (id: string): HelpGuide => {
  const g = tripFilesGuides.find(x => x.id === id)
  if (!g) throw new Error(`no registered guide "${id}"`)
  return g
}

/** The fixture documents each guide acts on, by the name their row carries. */
const STARRED = 'JR-Pass-voucher.pdf'
const LINKED = 'LH716-boarding-pass.pdf'
const DOOMED = 'old-draft-itinerary.pdf'
const PHOTO = 'nishiki-market.jpg'
const DOCUMENT = 'travel-notes.md'
/** What the upload guide brings in; these two names exist nowhere else, so cleanup can take them out. */
const UPLOADED_PDF = 'kyoto-bus-pass.pdf'
const UPLOADED_PHOTO = 'arashiyama.jpg'
const UPLOADED = [UPLOADED_PDF, UPLOADED_PHOTO]
/** What the link guide ties the boarding pass to, spelled as the dialog spells them. */
const PLACE = 'teamLab Planets'
const FLIGHT = 'LH716 FRA → HND'
const NOTE = 'Seat 34K, boarding 12:20'

const openFiles = (page: Page) => openTrip(page, { tab: 'dateien' })

/** A file row: the only `.group` block the Files panel renders, one per file. */
const row = (page: Page, name: string) => page.locator('div.group').filter({ hasText: name }).first()
/** A row's action buttons take their accessible name from their `title`. */
const action = (page: Page, name: string, title: string) =>
  row(page, name).getByRole('button', { name: title, exact: true })
/** react-dropzone always sets `role="presentation"` on the box it wraps. */
const dropzone = (page: Page) => page.locator('div[role="presentation"]').filter({ hasText: 'Drop files here' }).first()
/** The filter row, found through the one tab that is always there. */
const tabRow = (page: Page) => page.getByRole('button', { name: /^All \d+$/ }).locator('xpath=..')
/** The star tab has no text: its accessible name is the count alone. */
const starTab = (page: Page) => tabRow(page).getByRole('button').filter({ has: page.locator('svg.lucide-star') }).first()
/**
 * The number on a filter tab. Reading it rather than counting the fixture keeps
 * the step honest about the one thing it is really claiming: that the tab shows
 * exactly as many rows as its badge promises, and it survives another screen's
 * fixture adding a file of its own.
 */
const tabCount = async (tab: Locator): Promise<number> => Number(((await tab.textContent()) ?? '').replace(/\D+/g, ''))
/** Trash and Empty Trash both contain "Trash", so the toolbar's own button needs `exact`. */
const trashTab = (page: Page) => page.getByRole('button', { name: 'Trash', exact: true })
/** Assign File is a raw portal with no shared backdrop class; `portalDialog` finds its card. */
const assignDialog = (page: Page) => portalDialog(page, page.getByText('Assign File', { exact: true }))
const noteBox = (page: Page) => assignDialog(page).getByPlaceholder('Add a note...')
/**
 * The lightbox, found by the one header button only it and the document preview
 * carry, and they are never open at the same time. Its three direct children
 * are the header, the picture and the strip of thumbnails.
 */
const lightbox = (page: Page) =>
  page.locator('div[role="presentation"]').filter({ has: page.getByRole('button', { name: 'Open in new tab' }) }).first()
/** The preview for everything that is not a picture; markdown renders in `.collab-note-md`. */
const docPreview = (page: Page) => portalDialog(page, page.locator('.collab-note-md'))
/**
 * The × of a portal. The assign dialog and the document preview have no key
 * handler at all, so it is their only way out; the lightbox does listen for
 * Escape, which is what its own step uses.
 */
const closeX = (dialog: Locator) => dialog.locator('button:has(svg.lucide-x)').first()

interface ApiFile {
  id: number
  original_name: string
  starred?: number
}

async function listFiles(page: Page, trash = false): Promise<ApiFile[]> {
  const { tripId } = seededTrip()
  const res = await page.request.get(`/api/trips/${tripId}/files${trash ? '?trash=true' : ''}`)
  const body = (await res.json()) as { files?: ApiFile[] }
  return body.files ?? []
}

/** Take the guide's own uploads out of the trip for good: to the trash, then off the disk. */
async function removeFiles(page: Page, names: string[]): Promise<void> {
  const { tripId } = seededTrip()
  for (const file of (await listFiles(page)).filter(f => names.includes(f.original_name))) {
    await page.request.delete(`/api/trips/${tripId}/files/${file.id}`)
  }
  for (const file of (await listFiles(page, true)).filter(f => names.includes(f.original_name))) {
    await page.request.delete(`/api/trips/${tripId}/files/${file.id}/permanent`)
  }
}

/** Put the note and every link the guide made back to nothing. */
async function unlinkFile(page: Page, name: string): Promise<void> {
  const { tripId } = seededTrip()
  const file = (await listFiles(page)).find(f => f.original_name === name)
  if (!file) return
  await page.request.put(`/api/trips/${tripId}/files/${file.id}`, {
    data: { place_id: null, reservation_id: null, description: '' },
  })
  const res = await page.request.get(`/api/trips/${tripId}/files/${file.id}/links`)
  const { links = [] } = (await res.json()) as { links?: { id: number }[] }
  for (const link of links) {
    await page.request.delete(`/api/trips/${tripId}/files/${file.id}/link/${link.id}`)
  }
}

/** The star route toggles, so it is only called back when the file really is starred. */
async function unstarFile(page: Page, name: string): Promise<void> {
  const { tripId } = seededTrip()
  const file = (await listFiles(page)).find(f => f.original_name === name)
  if (file?.starred) await page.request.patch(`/api/trips/${tripId}/files/${file.id}/star`)
}

/** Bring a file the guide threw away back out of the trash, if it is still in there. */
async function untrashFile(page: Page, name: string): Promise<void> {
  const { tripId } = seededTrip()
  const file = (await listFiles(page, true)).find(f => f.original_name === name)
  if (file) await page.request.post(`/api/trips/${tripId}/files/${file.id}/restore`)
}

const only = (target: (p: Page) => Locator) => ({ target })

const SCRIPTS: Record<string, GuideScript> = {
  'files-upload': {
    guide: guide('files-upload'),
    // Starts on the plan, because the first step is reaching the tab.
    start: p => openTrip(p, { day: null }),
    steps: [
      {
        target: p => p.getByRole('button', { name: 'Files', exact: true }),
        act: async p => {
          await p.getByRole('button', { name: 'Files', exact: true }).click()
          await expect(p.getByRole('heading', { name: 'Files' })).toBeVisible({ timeout: 20_000 })
          await expect(dropzone(p)).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
      {
        target: dropzone,
        // The hidden input takes the files directly: clicking the box would open
        // the operating system's picker, which Playwright cannot answer.
        act: async p => {
          await dropzone(p).locator('input[type="file"]').setInputFiles([
            filesPdfFixture('kyoto-bus-pass'),
            await filesImageFixture('arashiyama'),
          ])
          await expect(assignDialog(p)).toBeVisible({ timeout: 60_000 })
          await settle(p)
        },
      },
      {
        target: assignDialog,
        act: async p => {
          await closeX(assignDialog(p)).click()
          await expect(assignDialog(p)).toHaveCount(0)
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await expect(row(p, UPLOADED_PHOTO)).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
        target: p => row(p, UPLOADED_PHOTO),
      },
    ],
    cleanup: p => removeFiles(p, UPLOADED),
  },
  'files-link': {
    guide: guide('files-link'),
    start: openFiles,
    steps: [
      {
        prepare: async p => {
          await row(p, LINKED).hover()
        },
        target: p => action(p, LINKED, 'Assign'),
        act: async p => {
          await action(p, LINKED, 'Assign').click()
          await expect(assignDialog(p)).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await typeInto(p, noteBox(p), NOTE)
        },
        // The label above the box belongs in the picture, so the step rings the
        // block rather than the input.
        target: p => noteBox(p).locator('xpath=..'),
        // The note is written on blur, and Enter blurs; the row behind the
        // dialog picks it up, which is the proof that it was saved.
        act: async p => {
          await noteBox(p).press('Enter')
          await expect(row(p, LINKED).getByText(NOTE)).toBeVisible({ timeout: 20_000 })
        },
      },
      {
        // Exact: the bookings fixture names a booking after this place, and the
        // dialog lists both under the same opening words.
        target: p => assignDialog(p).getByRole('button', { name: PLACE, exact: true }),
        act: async p => {
          await assignDialog(p).getByRole('button', { name: PLACE, exact: true }).click()
          await expect(assignDialog(p).getByRole('button', { name: PLACE, exact: true }).locator('svg.lucide-check')).toBeVisible({ timeout: 20_000 })
        },
      },
      {
        target: p => assignDialog(p).getByRole('button', { name: FLIGHT }),
        act: async p => {
          await assignDialog(p).getByRole('button', { name: FLIGHT }).click()
          await expect(assignDialog(p).getByRole('button', { name: FLIGHT }).locator('svg.lucide-check')).toBeVisible({ timeout: 20_000 })
        },
      },
      {
        target: p => closeX(assignDialog(p)),
        act: async p => {
          await closeX(assignDialog(p)).click()
          await expect(assignDialog(p)).toHaveCount(0)
          await expect(row(p, LINKED).getByText(`Transport · ${FLIGHT}`)).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => unlinkFile(p, LINKED),
  },
  'files-star': {
    guide: guide('files-star'),
    start: openFiles,
    steps: [
      {
        prepare: async p => {
          await row(p, STARRED).hover()
        },
        target: p => action(p, STARRED, 'Star'),
        act: async p => {
          await action(p, STARRED, 'Star').click()
          await expect(action(p, STARRED, 'Unstar')).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
      {
        // Sorting is the server's (starred first, then newest first), so the
        // list is only right once the reload has come back.
        prepare: async p => {
          await expect(p.locator('div.group').first()).toContainText(STARRED, { timeout: 20_000 })
          await settle(p)
        },
        target: p => p.locator('div.group').first(),
      },
      {
        target: starTab,
        act: async p => {
          const starred = await tabCount(starTab(p))
          await starTab(p).click()
          await expect(p.locator('div.group')).toHaveCount(starred)
          await settle(p)
        },
      },
    ],
    cleanup: p => unstarFile(p, STARRED),
  },
  'files-filter': {
    guide: guide('files-filter'),
    start: openFiles,
    steps: [
      only(tabRow),
      {
        target: p => p.getByRole('button', { name: /^PDFs \d+$/ }),
        act: async p => {
          const pdfs = await tabCount(p.getByRole('button', { name: /^PDFs \d+$/ }))
          await p.getByRole('button', { name: /^PDFs \d+$/ }).click()
          await expect(p.locator('div.group')).toHaveCount(pdfs)
          await settle(p)
        },
      },
      {
        target: p => p.getByRole('button', { name: /^Collab Notes \d+$/ }),
        act: async p => {
          await p.getByRole('button', { name: /^Collab Notes \d+$/ }).click()
          await expect(p.getByText('From Collab Notes')).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
      {
        target: p => p.getByRole('button', { name: /^All \d+$/ }),
        act: async p => {
          const all = await tabCount(p.getByRole('button', { name: /^All \d+$/ }))
          await p.getByRole('button', { name: /^All \d+$/ }).click()
          await expect(p.locator('div.group')).toHaveCount(all)
          await settle(p)
        },
      },
    ],
  },
  'files-preview': {
    guide: guide('files-preview'),
    start: openFiles,
    steps: [
      {
        prepare: async p => {
          await row(p, PHOTO).hover()
        },
        // Two buttons in the row carry the file's name: the thumbnail and the
        // name itself. The reader is told about the name, which comes second.
        target: p => row(p, PHOTO).getByRole('button', { name: PHOTO }).last(),
        act: async p => {
          await row(p, PHOTO).getByRole('button', { name: PHOTO }).last().click()
          await expect(p.getByRole('img', { name: PHOTO })).toBeVisible({ timeout: 30_000 })
          await settle(p)
        },
      },
      {
        target: p => lightbox(p).locator('> div').last(),
        // Which way the picture can move depends on where it sits in the strip,
        // and the right chevron is there only while there is a next one.
        act: async p => {
          const forward = (await lightbox(p).locator('svg.lucide-chevron-right').count()) > 0
          await p.keyboard.press(forward ? 'ArrowRight' : 'ArrowLeft')
          await expect(p.getByRole('img', { name: PHOTO })).toHaveCount(0, { timeout: 20_000 })
          await settle(p)
        },
      },
      {
        // The header's button group, not the whole header bar: the bar runs the
        // full width of the frame, so ringing it rings mostly empty space.
        target: p => lightbox(p).getByRole('button', { name: 'Open in new tab' }).locator('xpath=..'),
        // The group's own centre falls between its buttons, where the picture
        // underneath takes the pointer, so hovering it never lands. The pointer
        // goes on a button instead; the ring is still round the group.
        hover: p => lightbox(p).getByRole('button', { name: 'Open in new tab' }).hover(),
        act: async p => {
          await p.keyboard.press('Escape')
          await expect(lightbox(p)).toHaveCount(0, { timeout: 20_000 })
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await row(p, DOCUMENT).getByRole('button', { name: DOCUMENT }).last().click()
          await expect(docPreview(p)).toBeVisible({ timeout: 30_000 })
          await settle(p)
        },
        target: docPreview,
        act: async p => {
          await closeX(docPreview(p)).click()
          await expect(docPreview(p)).toHaveCount(0, { timeout: 20_000 })
          await settle(p)
        },
      },
      {
        prepare: async p => {
          await row(p, STARRED).hover()
        },
        target: p => action(p, STARRED, 'Download'),
        // The button fetches the bytes and clicks a synthetic anchor, so the
        // browser reports a real download.
        act: async p => {
          const download = p.waitForEvent('download', { timeout: 30_000 })
          await action(p, STARRED, 'Download').click()
          await (await download).delete()
          await settle(p)
        },
      },
    ],
  },
  'files-trash': {
    guide: guide('files-trash'),
    start: openFiles,
    steps: [
      {
        prepare: async p => {
          await row(p, DOOMED).hover()
        },
        target: p => action(p, DOOMED, 'Delete'),
        act: async p => {
          await action(p, DOOMED, 'Delete').click()
          await expect(row(p, DOOMED)).toHaveCount(0, { timeout: 20_000 })
          await settle(p)
        },
      },
      {
        target: trashTab,
        act: async p => {
          await trashTab(p).click()
          await expect(p.getByRole('heading', { name: 'Trash' })).toBeVisible({ timeout: 20_000 })
          await expect(row(p, DOOMED)).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
      only(p => row(p, DOOMED)),
      {
        target: p => action(p, DOOMED, 'Restore'),
        act: async p => {
          await action(p, DOOMED, 'Restore').click()
          await expect(row(p, DOOMED)).toHaveCount(0, { timeout: 20_000 })
          await settle(p)
        },
      },
      {
        // Empty Trash is there because the fixture leaves one document in the
        // trash. It asks with the browser's own confirm, which Playwright
        // dismisses, so clicking it would do nothing at all; the step shows the
        // button and leaves the trash by the toolbar instead.
        target: p => p.getByRole('button', { name: 'Empty Trash' }),
        act: async p => {
          await trashTab(p).click()
          await expect(p.getByRole('heading', { name: 'Files' })).toBeVisible({ timeout: 20_000 })
          await expect(row(p, DOOMED)).toBeVisible({ timeout: 20_000 })
          await settle(p)
        },
      },
    ],
    cleanup: p => untrashFile(p, DOOMED),
  },
}

// ── Run ───────────────────────────────────────────────────────────────────────

test.describe.configure({ mode: 'serial' })

test.beforeAll(async ({ request }) => {
  await ensureFilesFixtures(request)
})

test('every registered files guide has a script, and only those', async () => {
  expect(Object.keys(SCRIPTS).sort()).toEqual([...tripFilesContext.guides].sort())
})

test('hero: trip-files', async ({ page }) => {
  await page.setViewportSize(VIEWPORT)
  await captureHero(page, tripFilesContext.id, openFiles)
})

for (const id of tripFilesContext.guides) {
  test(`pictures: ${id}`, async ({ page }) => {
    await page.setViewportSize(VIEWPORT)
    await captureGuide(page, SCRIPTS[id])
  })
}
