import type { ReservationEndpoints } from '../entities/ReservationEndpoints.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class ReservationEndpointsRepository extends EntityRepository<ReservationEndpoints> {}
