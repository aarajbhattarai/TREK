import type { BucketList } from '../entities/BucketList.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class BucketListRepository extends EntityRepository<BucketList> {}
