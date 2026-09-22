import type { TripMembers } from '../entities/TripMembers.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TripMembersRepository extends EntityRepository<TripMembers> {}
