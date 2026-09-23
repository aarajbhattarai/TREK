import path from 'node:path';

/**
 * The storage domain's one `__dirname` anchor (the uploads-root.ts idiom, and
 * eventually its replacement: the registry's defaults make this the single
 * source of truth the other 16 copies collapse onto in later slices).
 *
 * `__dirname` moves with the file — `server/{src,dist}/nest/storage` sits
 * three levels under `server/`, so three `..` hops resolve to `<server>/`
 * under both the src (vitest) and dist (runtime) layouts. The depth is stated
 * rather than counted by hand and pinned by storage-keys.test.ts, exactly
 * like uploads-root.test.ts pins UPLOADS_ROOT. In Docker both anchors are
 * symlinks (`/app/server/uploads → /app/uploads`, `/app/server/data →
 * /app/data`), which is why LocalDriver realpaths its root at init.
 */
export const DEFAULT_UPLOADS_ROOT = path.resolve(__dirname, '..', '..', '..', 'uploads');
export const DATA_ROOT = path.resolve(__dirname, '..', '..', '..', 'data');
export const DEFAULT_BACKUPS_ROOT = path.join(DATA_ROOT, 'backups');
/** Driver-agnostic global scratch space (`data/tmp`) — see StorageService.tempDir(). */
export const GLOBAL_TEMP_DIR = path.join(DATA_ROOT, 'tmp');
/** Seed-once boot provisioning file — imported only when no storage.* row exists. */
const DEFAULT_SEED_CONFIG_PATH = path.join(DATA_ROOT, 'storage-config.json');

/**
 * Test-only override for the seed-config path (Plan 3i, R5 defect 1 — the
 * `storage-config.json` test-harness race, 3c's deferred L13). Production
 * never calls the setter, so `getSeedConfigPath()` always resolves to the
 * real source-tree default there.
 *
 * Why a seam here rather than an env var read through `src/app-config`: this
 * repo's env-config layer (`src/app-config/env.schema.ts` + the
 * `no-restricted-syntax` ESLint ban on raw `process.env` outside its
 * documented exemption list) would need a new schema entry and an ESLint
 * exemption-list edit for a value that is NEVER read from a real environment
 * variable in production — it only exists to redirect one test suite away
 * from the real file. A DI/constructor parameter on `StorageRegistryService`
 * was the brief's other named option; it was rejected too, because
 * `storage-admin.service.ts#state()` also reads this path (for
 * `seedFilePresent`) and is a SIBLING service, not a consumer of
 * `StorageRegistryService` — giving the registry alone a constructor
 * override would still leave the admin service reading the real path,
 * reintroducing the same race for that one read. A plain module-level seam
 * in this file (the one place both services already import the path from)
 * covers both call sites with the smallest, most local change, and needs no
 * new provider/token wiring in `storage.module.ts`.
 */
let seedConfigPathOverride: string | null = null;

/** Test-only — see `seedConfigPathOverride`'s doc comment. Pass `null` to restore the production default. */
export function setSeedConfigPathForTests(overridePath: string | null): void {
  seedConfigPathOverride = overridePath;
}

/** The effective seed-config path: the test override when one is set, else the real source-tree default. */
export function getSeedConfigPath(): string {
  return seedConfigPathOverride ?? DEFAULT_SEED_CONFIG_PATH;
}
