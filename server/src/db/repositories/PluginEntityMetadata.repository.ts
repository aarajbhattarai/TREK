import type { PluginEntityMetadata } from '../entities/PluginEntityMetadata.entity';
import { currentTimestamp } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

export class PluginEntityMetadataRepository extends TrekRepository<PluginEntityMetadata> {
  /** PR40 (uninstall cascade, `deleteData` branch) — `DELETE FROM plugin_entity_metadata WHERE plugin_id = ?`. */
  async deleteAllForPlugin(pluginId: string): Promise<void> {
    await this.nativeDelete({ plugin_id: pluginId });
  }

  // -----------------------------------------------------------------------
  // MR1–MR6 (Plan 3j Task 5, `plugins/host/rpc/meta.rpc.ts`'s `meta.get`/
  // `meta.set`/`meta.list`/`meta.delete` RPC handlers — a plugin's own
  // namespaced key/value store on a core entity).
  // -----------------------------------------------------------------------

  /**
   * MR1/MR2 — `SELECT value FROM plugin_entity_metadata WHERE plugin_id=?
   * AND entity_type=? AND entity_id=? AND key=?` — MR2 (`set`'s pre-write
   * existence check) is byte-identical text, existence-only; the caller
   * checks `!== null` rather than this repository exposing a second,
   * narrower method for the same 4-column read.
   */
  async findValue(pluginId: string, entityType: string, entityId: number, key: string): Promise<string | null> {
    const row = await this.findOne({ plugin_id: pluginId, entity_type: entityType, entity_id: entityId, key }, { fields: ['value'] });
    return row?.value ?? null;
  }

  /** MR3 — `SELECT COUNT(*) AS n FROM plugin_entity_metadata WHERE plugin_id=? AND entity_type=? AND entity_id=?`, the `META_KEYS_MAX` per-entity quota. */
  async countForEntity(pluginId: string, entityType: string, entityId: number): Promise<number> {
    return await this.count({ plugin_id: pluginId, entity_type: entityType, entity_id: entityId });
  }

  /**
   * MR4 — `` INSERT INTO plugin_entity_metadata (plugin_id, entity_type,
   * entity_id, key, value, updated_at) VALUES (?, ?, ?, ?, ?, datetime('now'))
   * ON CONFLICT(plugin_id, entity_type, entity_id, key) DO UPDATE SET value
   * = excluded.value, updated_at = excluded.updated_at `` — the WIDEST
   * composite-key upsert in the plan (4 key columns, the entity's own
   * `uniques`). `PluginUserConfigRepository.upsertConfig`'s own precedent:
   * `currentTimestamp(platform)` bound once so the inserted row and the
   * `excluded.updated_at` merge target agree, matching the legacy
   * single-statement `datetime('now')` call exactly.
   */
  async upsertValue(pluginId: string, entityType: string, entityId: number, key: string, value: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.upsert(
      { plugin_id: pluginId, entity_type: entityType, entity_id: entityId, key, value, updated_at: currentTimestamp(platform) },
      {
        onConflictFields: ['plugin_id', 'entity_type', 'entity_id', 'key'],
        onConflictAction: 'merge',
        onConflictMergeFields: ['value', 'updated_at'],
      },
    );
  }

  /** MR5 — `SELECT key, value FROM plugin_entity_metadata WHERE plugin_id=? AND entity_type=? AND entity_id=? ORDER BY key`. */
  async listForEntity(pluginId: string, entityType: string, entityId: number): Promise<{ key: string; value: string }[]> {
    const rows = await this.find(
      { plugin_id: pluginId, entity_type: entityType, entity_id: entityId },
      { fields: ['key', 'value'], orderBy: { key: 'asc' } },
    );
    return rows.map((r) => ({ key: r.key, value: r.value ?? '' }));
  }

  /** MR6 — `DELETE FROM plugin_entity_metadata WHERE plugin_id=? AND entity_type=? AND entity_id=? AND key=?`, returning whether a row existed (`.changes > 0`). */
  async deleteValue(pluginId: string, entityType: string, entityId: number, key: string): Promise<boolean> {
    const changed = await this.nativeDelete({ plugin_id: pluginId, entity_type: entityType, entity_id: entityId, key });
    return changed > 0;
  }
}
