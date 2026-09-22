import type { Journeys } from '../entities/Journeys.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneysRepository extends EntityRepository<Journeys> {}
