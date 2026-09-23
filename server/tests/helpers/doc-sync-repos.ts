/**
 * Plan 3h Task 5 (doc-sync) — the repositories a hand-constructed
 * `DocSyncConfigService`/`DocSyncService`/`DocSyncController`/
 * `DocSyncWebhookController`/`DocSyncJob` needs, bound to a suite's own
 * better-sqlite3 handle.
 *
 * A separate file from `tests/helpers/test-uow.ts` on purpose: that file is
 * a shared-window append target for THREE concurrent Plan 3h tasks
 * (collections, dawarich, doc-sync — the plan's own "shared-file windows"
 * note), and this task's brief names this file specifically so its own
 * repository helpers land without racing another task's append to the same
 * file. Same memoisation-per-handle pattern as every helper in
 * `test-uow.ts` (one `sharedTestOrm(db)` per test file's better-sqlite3
 * handle, imported from there rather than opening a second `MikroORM.init`
 * over the same connection — `test-uow.ts`'s own `sharedTestOrm` docstring
 * explains why a second ORM instance is a real, if subtle, bug: two
 * identity maps and two Kysely clients, neither closed).
 */
import type Database from 'better-sqlite3';
import { sharedTestOrm } from './test-uow';
import { DocumentConnections } from '../../src/db/entities/DocumentConnections.entity';
import type { DocumentConnectionsRepository } from '../../src/db/repositories/DocumentConnections.repository';
import { DocumentProviders } from '../../src/db/entities/DocumentProviders.entity';
import type { DocumentProvidersRepository } from '../../src/db/repositories/DocumentProviders.repository';
import { DocumentProviderFields } from '../../src/db/entities/DocumentProviderFields.entity';
import type { DocumentProviderFieldsRepository } from '../../src/db/repositories/DocumentProviderFields.repository';
import { TripDocumentLinks } from '../../src/db/entities/TripDocumentLinks.entity';
import type { TripDocumentLinksRepository } from '../../src/db/repositories/TripDocumentLinks.repository';
import { DocumentSyncItems } from '../../src/db/entities/DocumentSyncItems.entity';
import type { DocumentSyncItemsRepository } from '../../src/db/repositories/DocumentSyncItems.repository';
import { TripFiles } from '../../src/db/entities/TripFiles.entity';
import type { TripFilesRepository } from '../../src/db/repositories/TripFiles.repository';
import { FileLinks } from '../../src/db/entities/FileLinks.entity';
import type { FileLinksRepository } from '../../src/db/repositories/FileLinks.repository';

const documentConnectionsPerHandle = new WeakMap<Database.Database, Promise<DocumentConnectionsRepository>>();
const documentProvidersPerHandle = new WeakMap<Database.Database, Promise<DocumentProvidersRepository>>();
const documentProviderFieldsPerHandle = new WeakMap<Database.Database, Promise<DocumentProviderFieldsRepository>>();
const tripDocumentLinksPerHandle = new WeakMap<Database.Database, Promise<TripDocumentLinksRepository>>();
const documentSyncItemsPerHandle = new WeakMap<Database.Database, Promise<DocumentSyncItemsRepository>>();
const tripFilesPerHandle = new WeakMap<Database.Database, Promise<TripFilesRepository>>();
const fileLinksPerHandle = new WeakMap<Database.Database, Promise<FileLinksRepository>>();

/** The `DocumentConnectionsRepository` a hand-constructed `DocSyncConfigService` needs. */
export function createTestDocumentConnectionsRepo(db: Database.Database): Promise<DocumentConnectionsRepository> {
  const existing = documentConnectionsPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(DocumentConnections));
  documentConnectionsPerHandle.set(db, pending);
  return pending;
}

/** The `DocumentProvidersRepository` a hand-constructed `DocSyncConfigService` needs. */
export function createTestDocumentProvidersRepo(db: Database.Database): Promise<DocumentProvidersRepository> {
  const existing = documentProvidersPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(DocumentProviders));
  documentProvidersPerHandle.set(db, pending);
  return pending;
}

/** The `DocumentProviderFieldsRepository` a hand-constructed `DocSyncConfigService` needs. */
export function createTestDocumentProviderFieldsRepo(db: Database.Database): Promise<DocumentProviderFieldsRepository> {
  const existing = documentProviderFieldsPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(DocumentProviderFields));
  documentProviderFieldsPerHandle.set(db, pending);
  return pending;
}

/** The `TripDocumentLinksRepository` a hand-constructed `DocSyncConfigService`/`DocSyncService` needs. */
export function createTestTripDocumentLinksRepo(db: Database.Database): Promise<TripDocumentLinksRepository> {
  const existing = tripDocumentLinksPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(TripDocumentLinks));
  tripDocumentLinksPerHandle.set(db, pending);
  return pending;
}

/** The `DocumentSyncItemsRepository` a hand-constructed `DocSyncService` needs. */
export function createTestDocumentSyncItemsRepo(db: Database.Database): Promise<DocumentSyncItemsRepository> {
  const existing = documentSyncItemsPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(DocumentSyncItems));
  documentSyncItemsPerHandle.set(db, pending);
  return pending;
}

/** The `TripFilesRepository` a hand-constructed `DocSyncService` needs (cross-domain, 3e — DS4/DS15/DS19/DS29/DS32/DS36). */
export function createTestTripFilesRepo(db: Database.Database): Promise<TripFilesRepository> {
  const existing = tripFilesPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(TripFiles));
  tripFilesPerHandle.set(db, pending);
  return pending;
}

/** The `FileLinksRepository` a hand-constructed `DocSyncService` needs (cross-domain, 3e — DS16). */
export function createTestFileLinksRepo(db: Database.Database): Promise<FileLinksRepository> {
  const existing = fileLinksPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(FileLinks));
  fileLinksPerHandle.set(db, pending);
  return pending;
}
