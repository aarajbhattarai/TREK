import type { PluginOauthTokens } from '../entities/PluginOauthTokens.entity';
import { TrekRepository } from './_shared/trek-repository';

/**
 * Plan 3j Task 2 note: this repository's ONLY method today is the uninstall
 * cascade's own delete (`plugin-runtime.service.ts`'s `uninstall()`, PR42) — the
 * statement lives in Task 2's file even though the rest of this table's surface
 * (`storeToken`'s COALESCE-preserving composite upsert, R-oauth-upsert) belongs to
 * Task 4's `oauth/plugin-oauth.service.ts`. Task 4 adds its own methods to this
 * same repository; this one is additive and does not collide with them.
 */
export class PluginOauthTokensRepository extends TrekRepository<PluginOauthTokens> {
  /** PR42 (uninstall cascade, `deleteData` branch) — `DELETE FROM plugin_oauth_tokens WHERE plugin_id = ?`. */
  async deleteAllForPlugin(pluginId: string): Promise<void> {
    await this.nativeDelete({ plugin_id: pluginId });
  }

  /** `exportUserData`'s GDPR fold — `SELECT DISTINCT plugin_id FROM plugin_oauth_tokens WHERE user_id = ?` (which plugins a user OAuth-linked; raw tokens are never exported). */
  async listDistinctPluginIdsForUser(userId: number): Promise<string[]> {
    const rows = await this.find({ user_id: userId }, { fields: ['plugin_id'] });
    return [...new Set(rows.map((r) => r.plugin_id))];
  }
}
