import type { CollectionMembers } from '../entities/CollectionMembers.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollectionMembersRepository extends EntityRepository<CollectionMembers> {}
