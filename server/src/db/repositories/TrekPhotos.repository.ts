import type { TrekPhotos } from '../entities/TrekPhotos.entity';
import { TrekRepository } from './_shared/trek-repository';

export class TrekPhotosRepository extends TrekRepository<TrekPhotos> {}
