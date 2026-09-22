import type { AuditLog } from '../entities/AuditLog.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class AuditLogRepository extends EntityRepository<AuditLog> {}
