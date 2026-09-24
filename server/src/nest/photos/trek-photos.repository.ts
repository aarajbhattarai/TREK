/**
 * Legacy re-export stub (the same shape `src/websocket.ts` is) — the real
 * implementation moved to `trek-photo-registration.service.ts` (Plan 4 Task
 * 8a: 3e Task 6 renamed the CLASS off `TrekPhotosRepository` because it
 * collided with the generated ORM `TrekPhotos.repository.ts`, but left the
 * FILE and test names unchanged; this finishes that rename).
 *
 * Kept here only because several importers of this path currently sit in
 * two sibling tasks' exclusively-owned file windows on this shared branch
 * (Task 3's `nest/{budget,packing,todo,accommodations,places}/**` ripple,
 * which reaches this file through `tests/helpers/plugin-host.ts` and
 * `mcp-test-controllers.ts`; Task 5c's held-back
 * `tests/unit/services/{trekPhotoMedia,conflictUpdate}.test.ts`) and cannot
 * be edited here. Delete this stub and repoint every remaining importer at
 * `./trek-photo-registration.service` once those tasks land.
 */
export { TrekPhotoRegistrationService } from './trek-photo-registration.service';
