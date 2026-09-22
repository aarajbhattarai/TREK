import type { ReservationDayPositions } from '../entities/ReservationDayPositions.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class ReservationDayPositionsRepository extends EntityRepository<ReservationDayPositions> {}
