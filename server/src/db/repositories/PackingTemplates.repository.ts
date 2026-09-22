import type { PackingTemplates } from '../entities/PackingTemplates.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PackingTemplatesRepository extends EntityRepository<PackingTemplates> {}
