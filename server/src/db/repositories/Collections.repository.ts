import type { Collections } from '../entities/Collections.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollectionsRepository extends EntityRepository<Collections> {}
