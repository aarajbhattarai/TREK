import type { PluginScheduledTasks } from '../entities/PluginScheduledTasks.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PluginScheduledTasksRepository extends TrekRepository<PluginScheduledTasks> {}
