import type { Settings } from '../entities/Settings.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

/** A `settings` row (the per-user key/value table) as the API emits it. */
export interface SettingRow {
  id: number;
  user_id: number;
  key: string;
  value: string | null;
}

const _settingRowKeys: AssertRowKeys<SettingRow, Settings> = true;

export class SettingsRepository extends EntityRepository<Settings> {
  /** `SELECT key, value FROM settings WHERE user_id = ?` */
  async getForUser(userId: number): Promise<SettingRow[]> {
    const rows = await this.find({ user: userId });
    return rows.map((row) => toRow(row) as SettingRow);
  }

  /**
   * `SELECT value FROM settings WHERE user_id = ? AND key = ?`
   *
   * No `refresh: true`: the identity-map short-circuit (Task 0 review, I1;
   * corrected by the Task 3 review — it is NOT about a `fields` restriction)
   * only fires for a PRIMARY-KEY-ONLY filter (`findOne({ id })` / `findOne(pk)`):
   * MikroORM answers that shape straight from the identity map with zero
   * queries, invisible to a write on the same row earlier in the request.
   * This filter is `(user, key)` — `Settings`'s PK is the surrogate `id`, not
   * this composite — so it is never PK-only and always re-queries, the same
   * guarantee a `find()` call gets. `SETTINGSREPO-012`/`013` pin this
   * directly (a raw UPDATE/DELETE on the same row, then `getOne` in the same
   * request, sees it) rather than assume it.
   */
  async getOne(userId: number, key: string): Promise<SettingRow | null> {
    const row = await this.findOne({ user: userId, key });
    return row ? (toRow(row) as SettingRow) : null;
  }

  /**
   * `INSERT INTO settings (user_id, key, value) VALUES (?, ?, ?)
   *  ON CONFLICT(user_id, key) DO UPDATE SET value = excluded.value`
   *
   * The composite conflict target is the relation field (`user`), never its
   * `persist(false)` scalar twin (`user_id`) — same rule as every other
   * `create`/`upsert` call in this migration (D4's defaults rule): the
   * relation is the one column MikroORM actually writes, the twin is filled
   * by a subsequent read. `Settings`'s own `uniques: [{ properties: ['user',
   * 'key'] }]` (`Settings.entity.ts`, generated off the schema's inline
   * `UNIQUE(user_id, key)` by the `fix(db)` commit that precedes this one)
   * names that same relation field — `Settings.repository.test.ts` asserts
   * both the schema-level unique index and the entity metadata.
   *
   * `onConflictFields` is passed explicitly here for CLARITY at the call
   * site, not because `em.upsert` needs it to find the conflict target: the
   * `uniques` entry above is fidelity to the schema first, but as a
   * consequence it is also consumable — `em.upsert` infers the same
   * `(user, key)` target from it alone when `onConflictFields` is omitted
   * (`getWhereCondition` in `@mikro-orm/core/utils/upsert-utils.js` matches a
   * `uniques` entry's `properties` against the payload's own property-named
   * keys). `SETTINGSREPO-014` proves that inference directly, independent of
   * this method's explicit option.
   *
   * Only `value` is ever updated on conflict, matching the legacy statement's
   * `DO UPDATE SET value = excluded.value` exactly (no other column, no
   * `updated_at` — the `settings` table has none).
   */
  async upsertForUser(userId: number, key: string, value: string): Promise<void> {
    await this.upsert({ user: userId, key, value }, { onConflictFields: ['user', 'key'], onConflictAction: 'merge' });
  }
}
