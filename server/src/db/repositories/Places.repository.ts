import type { Places } from '../entities/Places.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PlacesRepository extends TrekRepository<Places> {}
