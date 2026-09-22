import type { VacayUserSettings } from '../entities/VacayUserSettings.entity';
import { TrekRepository } from './_shared/trek-repository';

export class VacayUserSettingsRepository extends TrekRepository<VacayUserSettings> {}
