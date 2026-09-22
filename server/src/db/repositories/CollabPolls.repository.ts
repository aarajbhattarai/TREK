import type { CollabPolls } from '../entities/CollabPolls.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollabPollsRepository extends EntityRepository<CollabPolls> {}
