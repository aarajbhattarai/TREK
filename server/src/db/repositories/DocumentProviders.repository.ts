import type { DocumentProviders } from '../entities/DocumentProviders.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class DocumentProvidersRepository extends EntityRepository<DocumentProviders> {}
