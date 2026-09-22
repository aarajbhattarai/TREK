import type { PackingTemplateCategories } from '../entities/PackingTemplateCategories.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PackingTemplateCategoriesRepository extends EntityRepository<PackingTemplateCategories> {}
