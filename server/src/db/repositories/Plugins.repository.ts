import type { Plugins } from '../entities/Plugins.entity';
import { currentTimestamp } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

/**
 * Plan 3j Task 2 — `plugins` is this plan's most-reused table (`plugin-runtime.service.ts`
 * ~28 of 53 sites, `plugins.service.ts` 5 of 13). Every method below is named after the
 * statement it replaces (PR#/PS# per `plan3j-sql-inventory.md` §4/§5); several methods
 * serve more than one call site that shared byte-identical SQL text in the legacy file
 * (documented per method).
 */

/** PR15/PR16/PR25 — `SELECT id, version, enabled, dependencies FROM plugins`, the shape
 * `dependencies.ts`'s dependency-graph helpers reason over (structurally compatible with
 * `PluginDepRow` there; not imported here to keep `db/repositories` free of `nest/` imports). */
export interface PluginDepListRow {
  id: string;
  version: string | null;
  enabled: number;
  dependencies: string | null;
}

/** PR7/PR11 — `SELECT id, permissions FROM plugins` (the GDPR erasure enqueue's + the export's own full-table scan). */
export interface PluginIdPermissionRow {
  id: string;
  permissions: string | null;
}

/** PR17 — `SELECT permissions, granted_permissions, dependencies, trek_range, api_version FROM plugins WHERE id = ?` (`assertActivatable`'s one-row activation gate). */
export interface PluginActivationGateRow {
  permissions: string;
  granted_permissions: string;
  dependencies: string | null;
  trek_range: string | null;
  api_version: number | null;
}

/** PR18 — `SELECT permissions, config FROM plugins WHERE id = ?` (`spawnActivated`). */
export interface PluginPermissionsConfigRow {
  permissions: string;
  config: string;
}

/** PR26 — `SELECT enabled, granted_permissions, version FROM plugins WHERE id = ?` (`update`'s pre-update snapshot). */
export interface PluginPreUpdateRow {
  enabled: number;
  granted_permissions: string;
  version: string | null;
}

/** PR51 — `SELECT name, capabilities FROM plugins WHERE id = ?` (`notificationChannels`). */
export interface PluginNameCapabilitiesRow {
  name: string;
  capabilities: string;
}

/** PS-list — `list()`'s admin projection, every column `PluginsService.list()` re-shapes. */
export interface PluginAdminRow {
  id: string;
  name: string;
  description: string | null;
  type: string;
  icon: string | null;
  version: string | null;
  status: string;
  enabled: number;
  last_error: string | null;
  reviewed_at: string | null;
  source_repo: string | null;
  permissions: string;
  capabilities: string;
  dependencies: string | null;
  operator_egress: number;
  trek_range: string | null;
  author_pubkey: string | null;
  update_block_code: string | null;
  update_block_detail: string | null;
  update_block_version: string | null;
  update_hold: number;
}

export class PluginsRepository extends TrekRepository<Plugins> {
  // -----------------------------------------------------------------------
  // PR1 — status/log persistence (onStatus callback, lazily resolved — §4a)
  // -----------------------------------------------------------------------

  /** PR1 — `UPDATE plugins SET status = ?, last_error = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`. */
  async updateStatusAndError(id: string, status: string, lastError: string | null): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { status, last_error: lastError, updated_at: currentTimestamp(platform) });
  }

  // -----------------------------------------------------------------------
  // PR7 / PR11 — GDPR erasure enqueue + export's own full-table scan
  // -----------------------------------------------------------------------

  /** PR7/PR11 — `SELECT id, permissions FROM plugins` (identical text, two call sites: `enqueueUserErasure`, `exportUserData`). */
  async listIdsAndPermissions(): Promise<PluginIdPermissionRow[]> {
    const rows = await this.find({}, { fields: ['id', 'permissions'] });
    // `Plugins.id` is typed `string | null` at the entity level (accommodates a
    // pre-insert state MikroORM's own typing requires) but is the table's real
    // PRIMARY KEY — never null on a row read back from the DB (same shape as
    // `listForAdmin`'s `id: r.id ?? ''` below).
    return rows.map((r) => ({ id: r.id ?? '', permissions: r.permissions ?? null }));
  }

  // -----------------------------------------------------------------------
  // PR15 / PR16 / PR25 — dependency-graph reads
  // -----------------------------------------------------------------------

  /** PR15/PR16/PR25 — `SELECT id, version, enabled, dependencies FROM plugins` (identical text, three call sites: `installedDepRows`, `deactivateForDisabledAddon`, `deactivateWithDependents`). */
  async listDepRows(): Promise<PluginDepListRow[]> {
    const rows = await this.find({}, { fields: ['id', 'version', 'enabled', 'dependencies'] });
    return rows.map((r) => ({ id: r.id ?? '', version: r.version ?? null, enabled: r.enabled, dependencies: r.dependencies ?? null }));
  }

  // -----------------------------------------------------------------------
  // PR17 — activation gate
  // -----------------------------------------------------------------------

  /** PR17 — `SELECT permissions, granted_permissions, dependencies, trek_range, api_version FROM plugins WHERE id = ?`. */
  async findActivationGate(id: string): Promise<PluginActivationGateRow | null> {
    const row = await this.findOne({ id }, { fields: ['permissions', 'granted_permissions', 'dependencies', 'trek_range', 'api_version'] });
    return row
      ? {
          permissions: row.permissions ?? '[]',
          granted_permissions: row.granted_permissions ?? '',
          dependencies: row.dependencies ?? null,
          trek_range: row.trek_range ?? null,
          api_version: row.api_version ?? null,
        }
      : null;
  }

  // -----------------------------------------------------------------------
  // PR18 — spawnActivated
  // -----------------------------------------------------------------------

  /** PR18 — `SELECT permissions, config FROM plugins WHERE id = ?`. */
  async findPermissionsAndConfig(id: string): Promise<PluginPermissionsConfigRow | null> {
    const row = await this.findOne({ id }, { fields: ['permissions', 'config'] });
    return row ? { permissions: row.permissions ?? '[]', config: row.config ?? '{}' } : null;
  }

  // -----------------------------------------------------------------------
  // PR19 — spawnActivated's admin-intent write
  // -----------------------------------------------------------------------

  /** PR19 — `UPDATE plugins SET granted_permissions = ?, enabled = 1 WHERE id = ?`. */
  async grantPermissionsAndEnable(id: string, grantedPermissionsJson: string): Promise<void> {
    await this.nativeUpdate({ id }, { granted_permissions: grantedPermissionsJson, enabled: 1 });
  }

  // -----------------------------------------------------------------------
  // PR21 — wantsOperatorEgress
  // -----------------------------------------------------------------------

  /** PR21 — `SELECT operator_egress FROM plugins WHERE id = ?`. */
  async findOperatorEgressFlag(id: string): Promise<number | null> {
    const row = await this.findOne({ id }, { fields: ['operator_egress'] });
    return row?.operator_egress ?? null;
  }

  // -----------------------------------------------------------------------
  // PR24 — deactivate / markInactive
  // -----------------------------------------------------------------------

  /** PR24 — `UPDATE plugins SET status = 'inactive', enabled = 0, updated_at = CURRENT_TIMESTAMP WHERE id = ?`. */
  async markInactive(id: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { status: 'inactive', enabled: 0, updated_at: currentTimestamp(platform) });
  }

  // -----------------------------------------------------------------------
  // PR26 — update's pre-update snapshot
  // -----------------------------------------------------------------------

  /** PR26 — `SELECT enabled, granted_permissions, version FROM plugins WHERE id = ?`. */
  async findPreUpdateSnapshot(id: string): Promise<PluginPreUpdateRow | null> {
    const row = await this.findOne({ id }, { fields: ['enabled', 'granted_permissions', 'version'] });
    return row ? { enabled: row.enabled, granted_permissions: row.granted_permissions ?? '', version: row.version ?? null } : null;
  }

  // -----------------------------------------------------------------------
  // PR27 — update's post-install re-read of declared permissions
  // -----------------------------------------------------------------------

  /** PR27 — `SELECT permissions FROM plugins WHERE id = ?`. */
  async findPermissions(id: string): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['permissions'] });
    return row?.permissions ?? null;
  }

  // -----------------------------------------------------------------------
  // PR28 — retrust's signing-key TOFU comparison
  // -----------------------------------------------------------------------

  /** PR28 — `SELECT author_pubkey FROM plugins WHERE id = ?`. Security-sensitive: feeds the TOFU comparison. */
  async findAuthorPubkey(id: string): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['author_pubkey'] });
    return row?.author_pubkey ?? null;
  }

  // -----------------------------------------------------------------------
  // PR29 — sideload's replace-existing check
  // -----------------------------------------------------------------------

  /** PR29 — `SELECT id FROM plugins WHERE id = ?`, as a boolean existence check. */
  async existsById(id: string): Promise<boolean> {
    const row = await this.findOne({ id }, { fields: ['id'] });
    return row !== null;
  }

  // -----------------------------------------------------------------------
  // PR30 / PR32 — dev-link install + reload's source_repo read
  // -----------------------------------------------------------------------

  /**
   * PR30/PR32 — `SELECT source_repo FROM plugins WHERE id = ?` (identical text, two call
   * sites: `link`, `reload`). Returns the ROW, not the bare column: both callers need "no
   * row" (`null`) told apart from "row present with `source_repo` unset" (`{ source_repo:
   * null }`) — a plugin installed through the registry/sideload (never dev-linked) has a
   * real row with a NULL `source_repo`, and both legacy call sites treat that as "already
   * installed"/"not dev-linked", not as "not found".
   */
  async findSourceRepoRow(id: string): Promise<{ source_repo: string | null } | null> {
    const row = await this.findOne({ id }, { fields: ['source_repo'] });
    return row ? { source_repo: row.source_repo ?? null } : null;
  }

  // -----------------------------------------------------------------------
  // PR31 — dev-link install's cascade clear
  // -----------------------------------------------------------------------

  /**
   * PR31 — `` UPDATE plugins SET source_repo = ?, source_commit = NULL, sha256 = NULL,
   * author_pubkey = NULL, update_block_code = NULL, update_block_detail = NULL,
   * update_block_version = NULL, status = 'inactive', enabled = 0 WHERE id = ? `` — the
   * plugin has left the registry trust model, so every registry-trust column is cleared
   * in the same statement that re-points `source_repo` to the dev-link marker.
   */
  async clearForDevLink(id: string, sourceRepo: string): Promise<void> {
    await this.nativeUpdate(
      { id },
      {
        source_repo: sourceRepo,
        source_commit: null,
        sha256: null,
        author_pubkey: null,
        update_block_code: null,
        update_block_detail: null,
        update_block_version: null,
        status: 'inactive',
        enabled: 0,
      },
    );
  }

  // -----------------------------------------------------------------------
  // PR33 — uninstall cascade's own row
  // -----------------------------------------------------------------------

  /** PR33 — `DELETE FROM plugins WHERE id = ?` (the uninstall cascade's first statement). */
  async deleteById(id: string): Promise<void> {
    await this.nativeDelete({ id });
  }

  // -----------------------------------------------------------------------
  // PR47 — the inter-plugin call/event router's grant check
  // -----------------------------------------------------------------------

  /** PR47 — `SELECT granted_permissions FROM plugins WHERE id = ?`. */
  async findGrantedPermissions(id: string): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['granted_permissions'] });
    return row?.granted_permissions ?? null;
  }

  // -----------------------------------------------------------------------
  // PR48 / PR49 — dependsOnSatisfied (caller + target side)
  // -----------------------------------------------------------------------

  /** PR48 — `SELECT dependencies FROM plugins WHERE id = ?` (the caller side of `dependsOnSatisfied`). `null` return means "no row" — `dependsOnSatisfied` refuses on a missing caller the same as a missing target. */
  async findDependenciesRow(id: string): Promise<{ dependencies: string | null } | null> {
    const row = await this.findOne({ id }, { fields: ['dependencies'] });
    return row ? { dependencies: row.dependencies ?? null } : null;
  }

  /** PR49 — `SELECT version FROM plugins WHERE id = ?` (the target side of `dependsOnSatisfied`). Distinct return shape from `findDependenciesColumn`: this one must tell "no row" apart from "row with a null version", which `dependsOnSatisfied` needs (a vanished target plugin refuses, a real one with no version falls back to `'0.0.0'` in the caller). */
  async findVersionRow(id: string): Promise<{ version: string | null } | null> {
    const row = await this.findOne({ id }, { fields: ['version'] });
    return row ? { version: row.version ?? null } : null;
  }

  // -----------------------------------------------------------------------
  // PR51 — notificationChannels
  // -----------------------------------------------------------------------

  /** PR51 — `SELECT name, capabilities FROM plugins WHERE id = ?`. */
  async findNameAndCapabilities(id: string): Promise<PluginNameCapabilitiesRow | null> {
    const row = await this.findOne({ id }, { fields: ['name', 'capabilities'] });
    return row ? { name: row.name, capabilities: row.capabilities } : null;
  }

  // -----------------------------------------------------------------------
  // PR52 / PR53 — capabilityList / mcpToolCapabilities
  // -----------------------------------------------------------------------

  /** PR52/PR53 — `SELECT capabilities FROM plugins WHERE id = ?` (identical text, two call sites: `capabilityList`, `mcpToolCapabilities`). */
  async findCapabilities(id: string): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['capabilities'] });
    return row?.capabilities ?? null;
  }

  // -----------------------------------------------------------------------
  // PS-list — plugins.service.ts#list()
  // -----------------------------------------------------------------------

  /**
   * PS-list — `plugins.service.ts#list()`'s own admin-listing SELECT: `SELECT id, name,
   * description, type, icon, version, status, enabled, last_error, reviewed_at,
   * source_repo, permissions, capabilities, dependencies, operator_egress, trek_range,
   * author_pubkey, update_block_code, update_block_detail, update_block_version,
   * update_hold FROM plugins ORDER BY sort_order, name`.
   */
  async listForAdmin(): Promise<PluginAdminRow[]> {
    const rows = await this.find(
      {},
      {
        fields: [
          'id', 'name', 'description', 'type', 'icon', 'version', 'status', 'enabled', 'last_error', 'reviewed_at', 'source_repo',
          'permissions', 'capabilities', 'dependencies', 'operator_egress', 'trek_range', 'author_pubkey',
          'update_block_code', 'update_block_detail', 'update_block_version', 'update_hold',
        ],
        orderBy: [{ sort_order: 'asc' }, { name: 'asc' }],
      },
    );
    return rows.map((r) => ({
      id: r.id ?? '',
      name: r.name,
      description: r.description ?? null,
      type: r.type,
      icon: r.icon ?? null,
      version: r.version ?? null,
      status: r.status,
      enabled: r.enabled,
      last_error: r.last_error ?? null,
      reviewed_at: r.reviewed_at ?? null,
      source_repo: r.source_repo ?? null,
      permissions: r.permissions ?? '[]',
      capabilities: r.capabilities,
      dependencies: r.dependencies ?? null,
      operator_egress: r.operator_egress,
      trek_range: r.trek_range ?? null,
      author_pubkey: r.author_pubkey ?? null,
      update_block_code: r.update_block_code ?? null,
      update_block_detail: r.update_block_detail ?? null,
      update_block_version: r.update_block_version ?? null,
      update_hold: r.update_hold,
    }));
  }

  // -----------------------------------------------------------------------
  // PS4 — resumeUpdates / clearUpdateHold
  // -----------------------------------------------------------------------

  /** PS4 — `UPDATE plugins SET update_hold = 0 WHERE id = ?`, returning whether a row existed (`.changes > 0`). */
  async clearUpdateHold(id: string): Promise<boolean> {
    const changed = await this.nativeUpdate({ id }, { update_hold: 0 });
    return changed > 0;
  }

  // -----------------------------------------------------------------------
  // PS5 / PS13 — getInstanceConfig / updateInstanceConfig's config read
  // -----------------------------------------------------------------------

  /** PS5/PS13 — `SELECT config FROM plugins WHERE id = ?` (identical text, two call sites: `updateInstanceConfig`, `getInstanceConfig`). */
  async findConfig(id: string): Promise<string | null> {
    const row = await this.findOne({ id }, { fields: ['config'] });
    return row?.config ?? null;
  }

  // -----------------------------------------------------------------------
  // PS6 — updateInstanceConfig's write / plugins.service's setConfig
  // -----------------------------------------------------------------------

  /** PS6 — `UPDATE plugins SET config = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`. `config` already encrypted by the caller (3e's R6 pattern) — this repository never calls `encrypt_api_key`/`decrypt_api_key`. */
  async setConfig(id: string, config: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { config, updated_at: currentTimestamp(platform) });
  }
}
