import type { PackingTemplateItems } from '../entities/PackingTemplateItems.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PackingTemplateItemsRepository extends EntityRepository<PackingTemplateItems> {}
