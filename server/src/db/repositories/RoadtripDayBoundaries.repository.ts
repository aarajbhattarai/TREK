import type { RoadtripDayBoundaries } from '../entities/RoadtripDayBoundaries.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class RoadtripDayBoundariesRepository extends EntityRepository<RoadtripDayBoundaries> {}
