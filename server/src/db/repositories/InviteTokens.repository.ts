import type { InviteTokens } from '../entities/InviteTokens.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class InviteTokensRepository extends EntityRepository<InviteTokens> {}
