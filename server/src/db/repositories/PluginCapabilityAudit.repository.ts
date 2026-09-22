import type { PluginCapabilityAudit } from '../entities/PluginCapabilityAudit.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PluginCapabilityAuditRepository extends EntityRepository<PluginCapabilityAudit> {}
