import type { PluginUserErasureQueue } from '../entities/PluginUserErasureQueue.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginUserErasureQueueRepository extends EntityRepository<PluginUserErasureQueue> {}
