import type { VisitedRegions } from '../entities/VisitedRegions.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VisitedRegionsRepository extends EntityRepository<VisitedRegions> {}
