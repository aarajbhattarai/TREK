import type { PluginMetaMigrations } from '../entities/PluginMetaMigrations.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginMetaMigrationsRepository extends EntityRepository<PluginMetaMigrations> {}
