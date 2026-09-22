import type { Addons, AddonConfig } from '../entities/Addons.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/** An `addons` row as the API emits it. */
export interface AddonRow {
  id: string | null;
  name: string;
  description: string | null;
  type: string;
  icon: string | null;
  enabled: boolean | null;
  config: AddonConfig | null;
  sort_order: number | null;
}

const _addonRowKeys: AssertRowKeys<AddonRow, Addons> = true;

export class AddonsRepository extends TrekRepository<Addons> {
  /**
   * `SELECT enabled FROM addons WHERE id = ?`
   *
   * `disableIdentityMap: true`, applied by the base class's default (Plan 3b
   * interlude B — `_shared/trek-repository.ts`; supersedes Plan 3a's I1
   * "`refresh: true` on every PK-only `findOne`" — see
   * `Users.repository.ts`'s class-level docstring and
   * `.superpowers/sdd/2026-09-22-orm-phase3b/task-1-review.md` B1): a
   * throwaway forked context always sees a write on the same id inside the
   * same request (`admin.service.ts`'s still-raw `UPDATE addons SET enabled
   * = ?` on the same connection), and the entity never lands in the
   * request's identity map.
   */
  async isEnabled(id: string): Promise<boolean> {
    const row = await this.findOne({ id }, { fields: ['enabled'] });
    return !!row?.enabled;
  }

  /**
   * `SELECT id, name, type, icon, enabled FROM addons WHERE enabled = 1
   * ORDER BY sort_order` — this reads every scalar column (not just the
   * legacy statement's five), because `AddonsService.list()` already
   * explicitly picks the five fields it forwards to the client; narrowing the
   * query itself would need a second, `AssertRowKeys`-incompatible row type
   * for no parity benefit.
   */
  async listEnabled(): Promise<AddonRow[]> {
    const rows = await this.find({ enabled: true }, { orderBy: { sort_order: 'asc' } });
    return rows.map((row) => toRow(row) as AddonRow);
  }
}
