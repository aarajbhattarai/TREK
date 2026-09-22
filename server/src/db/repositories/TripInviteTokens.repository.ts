import type { TripInviteTokens } from '../entities/TripInviteTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TripInviteTokensRepository extends EntityRepository<TripInviteTokens> {}
