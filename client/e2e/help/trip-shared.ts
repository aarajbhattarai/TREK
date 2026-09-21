import { expect, type Page } from '@playwright/test'
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

