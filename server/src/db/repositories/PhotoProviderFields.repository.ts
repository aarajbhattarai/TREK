import type { PhotoProviderFields } from '../entities/PhotoProviderFields.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PhotoProviderFieldsRepository extends EntityRepository<PhotoProviderFields> {}
