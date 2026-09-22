import type { PluginUserConfig } from '../entities/PluginUserConfig.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginUserConfigRepository extends EntityRepository<PluginUserConfig> {}
