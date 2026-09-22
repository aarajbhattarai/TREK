import type { Categories } from '../entities/Categories.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CategoriesRepository extends EntityRepository<Categories> {}
