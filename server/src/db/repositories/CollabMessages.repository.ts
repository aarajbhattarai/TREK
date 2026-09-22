import type { CollabMessages } from '../entities/CollabMessages.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollabMessagesRepository extends EntityRepository<CollabMessages> {}
