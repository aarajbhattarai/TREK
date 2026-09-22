import type { VisitedCountries } from '../entities/VisitedCountries.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VisitedCountriesRepository extends EntityRepository<VisitedCountries> {}
