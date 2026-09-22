import { type Opt, defineEntity, p } from '@mikro-orm/core';
import { PluginEntityMetadataRepository } from '../repositories/PluginEntityMetadata.repository';

export class PluginEntityMetadata {
  id!: number & Opt;
  plugin_id!: string;
  entity_type!: string;
  entity_id!: number;
  key!: string;
  value?: string | null;
  updated_at!: string & Opt;
}

export const PluginEntityMetadataSchema = defineEntity({
  class: PluginEntityMetadata,
  repository: () => PluginEntityMetadataRepository,
  indexes: [
    {
      name: 'idx_plugin_meta_entity',
      properties: ['plugin_id', 'entity_type', 'entity_id'],
    },
  ],
  properties: {
    id: p.integer().primary(),
    plugin_id: p.text(),
    entity_type: p.text(),
    entity_id: p.integer(),
    key: p.text(),
    value: p.text().nullable(),
    updated_at: p.text().defaultRaw(`(datetime('now'))`),
  },
});
