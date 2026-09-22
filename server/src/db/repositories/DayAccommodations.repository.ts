import type { DayAccommodations } from '../entities/DayAccommodations.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class DayAccommodationsRepository extends EntityRepository<DayAccommodations> {}
