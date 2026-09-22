import type { SchoolHolidayCountries } from '../entities/SchoolHolidayCountries.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class SchoolHolidayCountriesRepository extends EntityRepository<SchoolHolidayCountries> {}
