import type { PackingItemContributors } from '../entities/PackingItemContributors.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PackingItemContributorsRepository extends EntityRepository<PackingItemContributors> {}
