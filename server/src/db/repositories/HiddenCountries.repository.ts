import type { HiddenCountries } from '../entities/HiddenCountries.entity';
import { TrekRepository } from './_shared/trek-repository';

export class HiddenCountriesRepository extends TrekRepository<HiddenCountries> {}
