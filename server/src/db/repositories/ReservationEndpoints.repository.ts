import type { ReservationEndpoints } from '../entities/ReservationEndpoints.entity';
import { TrekRepository } from './_shared/trek-repository';

export class ReservationEndpointsRepository extends TrekRepository<ReservationEndpoints> {}
