import { type Opt, type Ref, defineEntity, p } from '@mikro-orm/core';
import { ReservationTravelersRepository } from '../repositories/ReservationTravelers.repository';
import { Reservations } from './Reservations.entity';
import { Users } from './Users.entity';

export class ReservationTravelers {
  id!: number & Opt;
  reservation!: Ref<Reservations>;
  reservation_id!: number;
  user!: Ref<Users>;
  user_id!: number;
}

export const ReservationTravelersSchema = defineEntity({
  class: ReservationTravelers,
  repository: () => ReservationTravelersRepository,
  properties: {
    id: p.integer().primary(),
    reservation: () => p.manyToOne(Reservations).ref().hidden().index('idx_reservation_travelers_res'),
    reservation_id: p.integer().persist(false).index('idx_reservation_travelers_res'),
    user: () => p.manyToOne(Users).ref().hidden().index('idx_reservation_travelers_user'),
    user_id: p.integer().persist(false).index('idx_reservation_travelers_user'),
  },
});
