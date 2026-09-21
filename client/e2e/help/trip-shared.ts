import { expect, type Locator, type Page } from '@playwright/test'
import { clearNotices } from '../screenshots/shot'
import { dismissReleaseNotice, settle } from './guide'
import { seededTrip } from './fixtures'

/**
 * What every trip screen's script needs: the way into the seeded trip, the
 * day selection and the dialogs. Not a `.guide.ts`, so importing it registers
 * no tests twice.
 */

export const modal = (page: Page) => page.locator('.trek-modal-backdrop').last()
export const dialog = (page: Page) => modal(page).locator('> [role="presentation"], > div').first()
/**
 * ConfirmDialog is its own portal and carries `trek-backdrop-enter` without the
 * `trek-modal-backdrop` of `Modal`, so the yes/no questions need their own
 * locator: `modal` would never see them.
 */
export const confirmBackdrop = (page: Page) => page.locator('.trek-backdrop-enter:not(.trek-modal-backdrop)').last()
export const confirmDialog = (page: Page) => confirmBackdrop(page).locator('.trek-modal-enter').last()
/**
 * The import dialogs of the places column are portals of their own with no
 * shared backdrop class at all, so they are found by what stands inside them.
 * Both the overlay and the card carry `role="presentation"`, and the card comes
 * second in document order, which is the one worth a picture.
 */
export const portalDialog = (page: Page, contains: Locator): Locator =>
  page.locator('div[role="presentation"]').filter({ has: contains }).last()

export async function openTrip(page: Page, opts: { tab?: string; day?: number | null } = {}): Promise<void> {
  const { tripId } = seededTrip()
  const { tab, day = 1 } = opts
  await page.goto(`/trips/${tripId}${tab ? `?tab=${tab}` : ''}`)
  await clearNotices(page)
  await dismissReleaseNotice(page)
  await expect(page.getByRole('button', { name: 'Share' })).toBeVisible({ timeout: 30_000 })
  await settle(page)
  if (!tab && day) {
    // The trip is running, so the plan opens on today, an empty day at the
    // bottom. Day 1 has the places; its details panel would cover the map.
    await selectDay(page, day)
    await closeDayDetails(page)
  }
  // The map tiles land after the page says it is idle.
  await page.waitForTimeout(1200)
}

/** Click the day's header: selects it and opens its details panel. */
export async function selectDay(page: Page, n: number): Promise<void> {
  await page.getByRole('button', { name: new RegExp(`^${n} .*Day ${n} `) }).click()
  await settle(page)
}

/** The details panel's close is the one unlabelled X button over the map. */
export async function closeDayDetails(page: Page): Promise<void> {
  const close = page.locator('button:has(svg.lucide-x)').last()
  if (await close.isVisible().catch(() => false)) {
    await close.click()
    await settle(page)
  }
}

