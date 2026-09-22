import type { CollabMessageReactions } from '../entities/CollabMessageReactions.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollabMessageReactionsRepository extends EntityRepository<CollabMessageReactions> {}
