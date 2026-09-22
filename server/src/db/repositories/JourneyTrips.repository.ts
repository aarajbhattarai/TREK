import type { JourneyTrips } from '../entities/JourneyTrips.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneyTripsRepository extends EntityRepository<JourneyTrips> {}
