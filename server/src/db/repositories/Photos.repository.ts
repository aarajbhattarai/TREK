import type { Photos } from '../entities/Photos.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PhotosRepository extends EntityRepository<Photos> {}
