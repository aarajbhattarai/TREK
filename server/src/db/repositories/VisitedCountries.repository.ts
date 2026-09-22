import type { VisitedCountries } from '../entities/VisitedCountries.entity';
import { TrekRepository } from './_shared/trek-repository';

export class VisitedCountriesRepository extends TrekRepository<VisitedCountries> {}
