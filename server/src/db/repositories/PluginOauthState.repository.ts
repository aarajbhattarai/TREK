import type { PluginOauthState } from '../entities/PluginOauthState.entity';
import { TrekRepository } from './_shared/trek-repository';

/**
 * Plan 3j Task 2 note: this repository's ONLY method today is the uninstall
 * cascade's own delete (PR43) — the rest of this table's surface belongs to
 * Task 4's `oauth/plugin-oauth.service.ts`, which adds its own additive methods.
 */
export class PluginOauthStateRepository extends TrekRepository<PluginOauthState> {
  /** PR43 (uninstall cascade, `deleteData` branch) — `DELETE FROM plugin_oauth_state WHERE plugin_id = ?`. */
  async deleteAllForPlugin(pluginId: string): Promise<void> {
    await this.nativeDelete({ plugin_id: pluginId });
  }
}
