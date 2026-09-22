import type { HiddenCountries } from '../entities/HiddenCountries.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class HiddenCountriesRepository extends EntityRepository<HiddenCountries> {}
