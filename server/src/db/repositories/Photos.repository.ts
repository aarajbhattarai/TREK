import type { Photos } from '../entities/Photos.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PhotosRepository extends TrekRepository<Photos> {}
