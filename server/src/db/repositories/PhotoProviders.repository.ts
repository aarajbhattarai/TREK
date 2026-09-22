import type { PhotoProviders } from '../entities/PhotoProviders.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

/** A `photo_providers` row as the API emits it. */
export interface PhotoProviderRow {
  id: string | null;
  name: string;
  description: string | null;
  icon: string | null;
  enabled: number | null;
  sort_order: number | null;
}

const _photoProviderRowKeys: AssertRowKeys<PhotoProviderRow, PhotoProviders> = true;

export class PhotoProvidersRepository extends EntityRepository<PhotoProviders> {
  /**
   * `SELECT id, name, icon, enabled, sort_order FROM photo_providers WHERE
   * enabled = 1 ORDER BY sort_order, id` — `enabled` is `p.integer()` on this
   * entity (unlike `Addons.enabled`, which is `p.boolean()`), so it comes
   * back as the raw stored `0`/`1`; `AddonsService.list()` does the `!!`
   * coercion itself, matching the legacy `!!p.enabled`.
   *
   * `disableIdentityMap: true` (Plan 3b Task 1 fix round) — a "rows out"
   * read, converted via `toRow` and discarded.
   */
  async listEnabled(): Promise<PhotoProviderRow[]> {
    const rows = await this.find({ enabled: 1 }, { orderBy: { sort_order: 'asc', id: 'asc' }, disableIdentityMap: true });
    return rows.map((row) => toRow(row) as PhotoProviderRow);
  }
}
