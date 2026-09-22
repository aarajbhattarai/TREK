import type { Reservations } from '../entities/Reservations.entity';
import { TrekRepository } from './_shared/trek-repository';

export class ReservationsRepository extends TrekRepository<Reservations> {}
