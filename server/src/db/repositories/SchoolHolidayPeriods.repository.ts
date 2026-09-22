import type { SchoolHolidayPeriods } from '../entities/SchoolHolidayPeriods.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class SchoolHolidayPeriodsRepository extends EntityRepository<SchoolHolidayPeriods> {}
