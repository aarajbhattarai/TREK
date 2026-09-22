import type { PluginScheduledTasks } from '../entities/PluginScheduledTasks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginScheduledTasksRepository extends EntityRepository<PluginScheduledTasks> {}
