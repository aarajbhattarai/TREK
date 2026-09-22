import type { TrekPhotoCacheMeta } from '../entities/TrekPhotoCacheMeta.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TrekPhotoCacheMetaRepository extends EntityRepository<TrekPhotoCacheMeta> {}
