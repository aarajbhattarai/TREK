import type { PackingItems } from '../entities/PackingItems.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PackingItemsRepository extends EntityRepository<PackingItems> {}
