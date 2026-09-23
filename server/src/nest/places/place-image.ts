import path from 'node:path';
import { db } from '../../db/database';
import type { StorageService } from '../storage/storage.service';

const URL_PREFIX = '/uploads/places/';

export function placeImageUrl(filename: string): string {
  return `${URL_PREFIX}${filename}`;
}

export function isUploadedPlaceImage(url: string | null | undefined): url is string {
  return typeof url === 'string' && url.startsWith(URL_PREFIX);
}

/**
 * Delete a custom place-image object once nothing references it any more. A trip
 * place and a collection saved-place can share the same uploaded file — save-to-
 * collection and copy-to-trip copy image_url by reference — so we ref-count across
 * both tables before deleting. basename() keeps the storage name confined to the
 * 'places' category, mirroring tripService.deleteOldCover. Best-effort: never
 * throws (central key validation rejects a hostile stored value; the catch
 * swallows it exactly like the old unlink guard).
 *
 * Plan 3c Task 4: `PlacesService` no longer calls this free function — it has
 * its own converted private `reclaimPlaceImage` method (`places.service.ts`),
 * which does the same job through `PlacesRepository.existsByImageUrl` for
 * PI1 and one raw `// Plan 3h` statement for PI2. This copy, and the raw `db`
 * proxy import it still needs, stay here UNCHANGED because
 * `collections.service.ts` (`src/nest/collections/`, Plan 3h's file — the
 * `collection_places` table is Plan 3h's) also imports and calls this exact
 * function on four of its own call sites, verified by grep
 * (`grep -rn "from '.*place-image'" server/src`) — contradicting the
 * inventory's stated "every caller is this service" premise
 * (`plan3c-sql-inventory.md` §8d). Converting that caller means wiring a
 * `PlacesRepository` injection into `CollectionsModule`, a change to an
 * unowned domain's DI graph out of this task's file ownership and test
 * budget — flagged for whoever next owns `src/nest/collections/**` (Plan 3h)
 * to finish, the same `// Plan 3h` carve-out pattern PI2/PP6 already use in
 * this cluster.
 */
export async function reclaimPlaceImage(storage: StorageService, url: string | null | undefined): Promise<void> {
  if (!isUploadedPlaceImage(url)) return;
  const referenced =
    db.prepare('SELECT 1 FROM places WHERE image_url = ? LIMIT 1').get(url) ||
    db.prepare('SELECT 1 FROM collection_places WHERE image_url = ? LIMIT 1').get(url);
  if (referenced) return;
  await storage.delete('places', path.basename(url)).catch(() => {
    /* best-effort */
  });
}
