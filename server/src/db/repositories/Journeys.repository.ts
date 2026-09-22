import type { Journeys } from '../entities/Journeys.entity';
import { TrekRepository } from './_shared/trek-repository';

export class JourneysRepository extends TrekRepository<Journeys> {}
