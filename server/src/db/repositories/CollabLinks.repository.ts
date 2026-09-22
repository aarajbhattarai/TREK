import type { CollabLinks } from '../entities/CollabLinks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollabLinksRepository extends EntityRepository<CollabLinks> {}
