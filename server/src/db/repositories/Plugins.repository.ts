import type { Plugins } from '../entities/Plugins.entity';
import { TrekRepository } from './_shared/trek-repository';

export class PluginsRepository extends TrekRepository<Plugins> {}
