import type { CollabPollVotes } from '../entities/CollabPollVotes.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollabPollVotesRepository extends EntityRepository<CollabPollVotes> {}
