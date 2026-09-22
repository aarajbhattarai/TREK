import type { ReservationTravelers } from '../entities/ReservationTravelers.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class ReservationTravelersRepository extends EntityRepository<ReservationTravelers> {}
