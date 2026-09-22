import type { ReservationTravelers } from '../entities/ReservationTravelers.entity';
import { TrekRepository } from './_shared/trek-repository';

export class ReservationTravelersRepository extends TrekRepository<ReservationTravelers> {}
