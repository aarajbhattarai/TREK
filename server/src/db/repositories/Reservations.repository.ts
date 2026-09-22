import type { Reservations } from '../entities/Reservations.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class ReservationsRepository extends EntityRepository<Reservations> {}
