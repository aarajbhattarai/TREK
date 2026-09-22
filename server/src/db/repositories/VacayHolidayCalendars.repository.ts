import type { VacayHolidayCalendars } from '../entities/VacayHolidayCalendars.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayHolidayCalendarsRepository extends EntityRepository<VacayHolidayCalendars> {}
