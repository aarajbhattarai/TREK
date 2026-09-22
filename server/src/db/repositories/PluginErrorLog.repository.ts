import type { PluginErrorLog } from '../entities/PluginErrorLog.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PluginErrorLogRepository extends TrekRepository<PluginErrorLog> {}
