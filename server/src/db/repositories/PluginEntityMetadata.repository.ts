import type { PluginEntityMetadata } from '../entities/PluginEntityMetadata.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PluginEntityMetadataRepository extends TrekRepository<PluginEntityMetadata> {
  /** PR40 (uninstall cascade, `deleteData` branch) — `DELETE FROM plugin_entity_metadata WHERE plugin_id = ?`. */
  async deleteAllForPlugin(pluginId: string): Promise<void> {
    await this.nativeDelete({ plugin_id: pluginId });
  }
}
