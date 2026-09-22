import type { GooglePlacePhotoMeta } from '../entities/GooglePlacePhotoMeta.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class GooglePlacePhotoMetaRepository extends EntityRepository<GooglePlacePhotoMeta> {}
