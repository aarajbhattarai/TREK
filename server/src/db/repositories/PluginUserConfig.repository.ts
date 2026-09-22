import type { PluginUserConfig } from '../entities/PluginUserConfig.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PluginUserConfigRepository extends TrekRepository<PluginUserConfig> {}
