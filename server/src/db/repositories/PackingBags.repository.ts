import type { PackingBags } from '../entities/PackingBags.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PackingBagsRepository extends EntityRepository<PackingBags> {}
