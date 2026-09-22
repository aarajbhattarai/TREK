import type { JourneyTrips } from '../entities/JourneyTrips.entity';
import { TrekRepository } from './_shared/trek-repository';

export class JourneyTripsRepository extends TrekRepository<JourneyTrips> {}
