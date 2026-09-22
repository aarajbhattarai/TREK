import type { CollectionLabels } from '../entities/CollectionLabels.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollectionLabelsRepository extends EntityRepository<CollectionLabels> {}
