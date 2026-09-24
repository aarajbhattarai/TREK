import type { PluginActions } from '../entities/PluginActions.entity';
import type { PluginActionScope } from '@trek/shared';
import { TrekRepository } from './_shared/trek-repository';

/** `actionsOf`'s own projection — mapped to `PluginActionDescriptor` in the service. */
export interface PluginActionRow {
  action_key: string;
  label: string;
  hint: string | null;
  danger: number;
  scope: PluginActionScope;
}

export class PluginActionsRepository extends TrekRepository<PluginActions> {
  /** PS3 (`plugins.service.ts#instanceActionsCount`) — `SELECT COUNT(*) AS n FROM plugin_actions WHERE plugin_id = ? AND scope = 'instance'`. Caller wraps this in its own try/catch → 0. */
  async countForPluginScope(pluginId: string, scope: PluginActionScope): Promise<number> {
    return await this.count({ plugin_id: pluginId, scope });
  }

  /** `actionsOf` — `SELECT action_key, label, hint, danger, scope FROM plugin_actions WHERE plugin_id = ? AND scope = ? ORDER BY sort_order`. Caller wraps this in its own try/catch → []. */
  async listForPluginScope(pluginId: string, scope: PluginActionScope): Promise<PluginActionRow[]> {
    const rows = await this.find(
      { plugin_id: pluginId, scope },
      { fields: ['action_key', 'label', 'hint', 'danger', 'scope'], orderBy: { sort_order: 'asc' } },
    );
    return rows.map((r) => ({ action_key: r.action_key, label: r.label, hint: r.hint ?? null, danger: r.danger, scope: r.scope as PluginActionScope }));
  }

  /** PR35 (uninstall cascade) — `DELETE FROM plugin_actions WHERE plugin_id = ?`. The caller wraps this in its own try/catch (table absent on a slimmed test schema is tolerated here). */
  async deleteAllForPlugin(pluginId: string): Promise<void> {
    await this.nativeDelete({ plugin_id: pluginId });
  }
}
