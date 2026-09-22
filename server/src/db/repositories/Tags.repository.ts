import type { Tags } from '../entities/Tags.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TagsRepository extends EntityRepository<Tags> {}
