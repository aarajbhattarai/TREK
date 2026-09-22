import type { VacayUserSettings } from '../entities/VacayUserSettings.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayUserSettingsRepository extends EntityRepository<VacayUserSettings> {}
