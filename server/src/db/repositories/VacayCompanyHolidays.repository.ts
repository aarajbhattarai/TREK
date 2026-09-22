import type { VacayCompanyHolidays } from '../entities/VacayCompanyHolidays.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayCompanyHolidaysRepository extends EntityRepository<VacayCompanyHolidays> {}
