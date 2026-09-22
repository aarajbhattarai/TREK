import type { OauthClients } from '../entities/OauthClients.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class OauthClientsRepository extends EntityRepository<OauthClients> {}
