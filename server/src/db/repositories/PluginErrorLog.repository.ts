import type { PluginErrorLog } from '../entities/PluginErrorLog.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginErrorLogRepository extends EntityRepository<PluginErrorLog> {}
