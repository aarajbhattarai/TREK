import type Database from 'better-sqlite3';
import { AddonsService } from '../../src/nest/addons/addons.service';
import { DatabaseService } from '../../src/nest/database/database.service';
import { sharedTestOrm } from './test-uow';
import { Addons } from '../../src/db/entities/Addons.entity';
import type { AddonsRepository } from '../../src/db/repositories/Addons.repository';
import { PhotoProviders } from '../../src/db/entities/PhotoProviders.entity';
import type { PhotoProvidersRepository } from '../../src/db/repositories/PhotoProviders.repository';
import { PhotoProviderFields } from '../../src/db/entities/PhotoProviderFields.entity';
import type { PhotoProviderFieldsRepository } from '../../src/db/repositories/PhotoProviderFields.repository';
import { AppSettings } from '../../src/db/entities/AppSettings.entity';
import type { AppSettingsRepository } from '../../src/db/repositories/AppSettings.repository';
import { Users } from '../../src/db/entities/Users.entity';
import type { UsersRepository } from '../../src/db/repositories/Users.repository';

/**
 * AddonsService's constructor grew from one `DatabaseService` to four
 * injected repositories plus `DatabaseService` (Plan 3a Task 4, addons.md —
 * the `AppSettingsRepository`/`AddonsRepository`/`PhotoProvidersRepository`/
 * `PhotoProviderFieldsRepository` wiring). Every hand-constructed
 * `new AddonsService(dbs)` in the test tree needs the same four repositories
 * a real `@InjectRepository` graph would hand it — this file is that
 * factory, named `test-addons.ts` per the Task 4 brief (owned by Task 4;
 * `tests/helpers/test-uow.ts` stays Task 3's file to extend).
 *
 * Built on the shared per-handle ORM (`test-uow.ts`'s `sharedTestOrm`, not a
 * fresh `createTestOrm` here) — the SAME one `createTestAppSettingsRepo`/
 * `createTestUnitOfWork` draw from, so a repository built here and a
 * `UnitOfWork`/repository built elsewhere for the same handle resolve
 * through the identical context-resolving `EntityManager`, exactly like
 * Nest's real DI graph (task-2-review.md I2's fix, carried forward for this
 * domain).
 */
/**
 * The full `AddonsService` a hand-constructed test collaborator needs, bound
 * to the suite's own better-sqlite3 handle.
 *
 * `dbs` defaults to a fresh `DatabaseService` over the same handle when the
 * caller has no existing one to pass through — AddonsService still needs one
 * (see `addons.service.ts`'s constructor doc) purely to forward to
 * `transit-provider.ts`'s readTransitProvider/writeTransitProvider and
 * `instance-api-keys.ts`'s resolveApiKey, neither of which is one of this
 * plan's six domains.
 */
export async function createTestAddonsService(db: Database.Database, dbs: DatabaseService = new DatabaseService(db)): Promise<AddonsService> {
  const t = await sharedTestOrm(db);
  return new AddonsService(
    t.repo(Addons) as AddonsRepository,
    t.repo(PhotoProviders) as PhotoProvidersRepository,
    t.repo(PhotoProviderFields) as PhotoProviderFieldsRepository,
    t.repo(AppSettings) as AppSettingsRepository,
    t.repo(Users) as UsersRepository,
    dbs,
  );
}
