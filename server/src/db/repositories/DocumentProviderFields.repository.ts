import type { DocumentProviderFields } from '../entities/DocumentProviderFields.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class DocumentProviderFieldsRepository extends EntityRepository<DocumentProviderFields> {}
