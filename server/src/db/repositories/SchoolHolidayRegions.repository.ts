import type { SchoolHolidayRegions } from '../entities/SchoolHolidayRegions.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class SchoolHolidayRegionsRepository extends EntityRepository<SchoolHolidayRegions> {}
