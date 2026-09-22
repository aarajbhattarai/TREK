import type { AppSettings } from '../entities/AppSettings.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

/** An `app_settings` row as the API emits it. */
export interface AppSettingsRow {
  key: string | null;
  value: string | null;
}

const _appSettingsRowKeys: AssertRowKeys<AppSettingsRow, AppSettings> = true;

export class AppSettingsRepository extends EntityRepository<AppSettings> {
  /**
   * `SELECT value FROM app_settings WHERE key = ?`
   *
   * `refresh: true` (Task 0 review, I1): this is a primary-key lookup, so
   * without it MikroORM answers a repeat call from the identity map rather
   * than re-querying — invisible to a raw/native write or `deleteValue` on
   * the same key inside the same request, which is exactly the coexistence
   * case this plan is built on (raw SQL and the ORM sharing one connection
   * while callers convert one at a time). `refresh` keeps this a single
   * query either way; only a stale identity-map hit is avoided.
   * Side effect of `refresh`: an UNFLUSHED in-memory change to the selected
   * field on that entity is discarded (the entity reverts to the row). No
   * caller mutates these entities before reading, by design (D4: rows out).
   */
  async getValue(key: string): Promise<string | null> {
    const row = await this.findOne({ key }, { fields: ['value'], refresh: true });
    return row?.value ?? null;
  }

  /**
   * `SELECT key, value FROM app_settings WHERE key IN (?, ?, ...)` — a
   * NULL-valued row is silently dropped from the returned Map, matching the
   * legacy callers, which never distinguished "row present with a NULL
   * value" from "no row" (both read as absent).
   */
  async getValues(keys: string[]): Promise<Map<string, string>> {
    const rows = await this.find({ key: { $in: keys } });
    const values = new Map<string, string>();
    for (const row of rows) {
      if (row.key != null && row.value != null) values.set(row.key, row.value);
    }
    return values;
  }

  /**
   * Upsert ruling: `app_settings` (`Migration20200101000000_baseline_schema.ts`)
   * is `CREATE TABLE app_settings (key TEXT PRIMARY KEY, value TEXT)` and no
   * later migration adds a column or a timestamp — the table has never carried
   * anything beyond `key`/`value`. Every legacy call site across settings,
   * addons and permissions is either `INSERT OR REPLACE INTO app_settings
   * (key, value) VALUES (?, ?)` or `INSERT INTO app_settings (key, value)
   * VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value` —
   * with no other column whose reset by REPLACE could be observable, both
   * spellings are exactly `em.upsert`'s job, with the sole unique field
   * (`key`, the primary key) as the conflict target.
   *
   * The one difference from `INSERT OR REPLACE` — verified, unobservable
   * here — is the row's implicit SQLite rowid: REPLACE deletes and
   * reinserts (rowid moves), `em.upsert`'s `ON CONFLICT ... DO UPDATE`
   * keeps the original row (rowid stays). `app_settings` has no `INTEGER
   * PRIMARY KEY`, no `AUTOINCREMENT`, no trigger and no foreign key
   * referencing it, so nothing here reads the rowid — but the next table
   * converted off `INSERT OR REPLACE` that does have one of those needs its
   * own check, not an assumption from this comment.
   */
  async setValue(key: string, value: string): Promise<void> {
    await this.upsert({ key, value }, { onConflictFields: ['key'], onConflictAction: 'merge' });
  }

  /**
   * `SELECT key, value FROM app_settings WHERE key LIKE ?` — the caller
   * passes the bare prefix; this appends the trailing `%` itself, matching
   * every legacy call site (`'perm_%'`, `'default_user_setting_%'`).
   *
   * Escaping: neither the legacy `LIKE 'prefix%'` literals nor `$like`'s
   * parameter binding here escape `%`/`_` in the prefix — both are plain
   * SQL LIKE, where a bound parameter's `%`/`_` are wildcards exactly like a
   * literal's are. The repository test proves the two behave identically for
   * a prefix that itself contains `%`/`_`.
   */
  async findByKeyPrefix(prefix: string): Promise<AppSettingsRow[]> {
    const rows = await this.find({ key: { $like: `${prefix}%` } });
    return rows.map((row) => toRow(row) as AppSettingsRow);
  }

  /** `DELETE FROM app_settings WHERE key = ?` */
  async deleteValue(key: string): Promise<number> {
    return this.nativeDelete({ key });
  }
}
