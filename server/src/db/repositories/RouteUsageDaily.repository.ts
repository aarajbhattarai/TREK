import type { RouteUsageDaily } from '../entities/RouteUsageDaily.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class RouteUsageDailyRepository extends EntityRepository<RouteUsageDaily> {}
