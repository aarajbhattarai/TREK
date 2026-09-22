import { Collection, PrimaryKeyProp, defineEntity, p } from '@mikro-orm/core';
import { SchoolHolidayCountriesRepository } from '../repositories/SchoolHolidayCountries.repository';
import { SchoolHolidayRegions } from './SchoolHolidayRegions.entity';

export class SchoolHolidayCountries {
  [PrimaryKeyProp]?: 'code';
  code?: string | null;
  name!: string;
  school_holiday_regions_collection = new Collection<SchoolHolidayRegions>(this);
}

export const SchoolHolidayCountriesSchema = defineEntity({
  class: SchoolHolidayCountries,
  repository: () => SchoolHolidayCountriesRepository,
  properties: {
    code: p.text().primary().nullable(),
    name: p.text(),
    school_holiday_regions_collection: () => p.oneToMany(SchoolHolidayRegions).mappedBy('countryRef').hidden(),
  },
});
