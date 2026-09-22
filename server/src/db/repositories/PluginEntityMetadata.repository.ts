import type { PluginEntityMetadata } from '../entities/PluginEntityMetadata.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginEntityMetadataRepository extends EntityRepository<PluginEntityMetadata> {}
