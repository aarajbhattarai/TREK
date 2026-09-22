import type { Plugins } from '../entities/Plugins.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginsRepository extends EntityRepository<Plugins> {}
