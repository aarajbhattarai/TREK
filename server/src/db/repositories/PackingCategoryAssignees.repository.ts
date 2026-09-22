import type { PackingCategoryAssignees } from '../entities/PackingCategoryAssignees.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PackingCategoryAssigneesRepository extends EntityRepository<PackingCategoryAssignees> {}
