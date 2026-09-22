import type { WebauthnCredentials } from '../entities/WebauthnCredentials.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class WebauthnCredentialsRepository extends EntityRepository<WebauthnCredentials> {}
