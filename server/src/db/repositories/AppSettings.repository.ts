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
  /** `SELECT value FROM app_settings WHERE key = ?` */
  async getValue(key: string): Promise<string | null> {
    const row = await this.findOne({ key }, { fields: ['value'] });
    return row?.value ?? null;
  }

  /** `SELECT key, value FROM app_settings WHERE key IN (?, ?, ...)` */
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
