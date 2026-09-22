import type { DocumentSyncItems } from '../entities/DocumentSyncItems.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class DocumentSyncItemsRepository extends EntityRepository<DocumentSyncItems> {}
