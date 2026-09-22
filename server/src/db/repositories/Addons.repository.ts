import type { Addons, AddonConfig } from '../entities/Addons.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

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

export class AddonsRepository extends EntityRepository<Addons> {
  /**
   * `SELECT enabled FROM addons WHERE id = ?`
   *
   * `refresh: true` (Task 0 review, I1 — carried forward for every PK read in
   * this plan): a primary-key `findOne` answers a repeat call from the
   * identity map, invisible to a write on the same id inside the same
   * request (`setEnabled`, below, or `admin.service.ts`'s still-raw
   * `UPDATE addons SET enabled = ?` on the same connection).
   */
  async isEnabled(id: string): Promise<boolean> {
    const row = await this.findOne({ id }, { fields: ['enabled'], refresh: true });
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

  /**
   * `UPDATE addons SET enabled = ? WHERE id = ?` — the write half of the
   * enablement toggle `admin.service.ts` still issues as raw SQL
   * (`updateAddon`, outside this plan's six domains). Declared here, on the
   * repository that owns the `addons` table, so that conversion has a
   * ready-made method rather than inventing its own; nothing in this domain
   * calls it yet.
   *
   * `enabled` is `p.boolean()` on the entity, so `nativeUpdate` stores the
   * legacy `1`/`0` through MikroORM's own boolean type mapper — the
   * repository test asserts the raw stored value directly, and that a
   * following read (with `refresh: true`) comes back as a JS boolean, not
   * the raw int.
   */
  async setEnabled(id: string, enabled: boolean): Promise<void> {
    await this.nativeUpdate({ id }, { enabled });
  }
}
