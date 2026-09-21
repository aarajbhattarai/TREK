# Help-center media

Every picture the help center shows is made here, by Playwright, against the real
app. Nothing is drawn or cropped by hand, so a new screen gets pictures in exactly
the same style by following the same path.

## The style, in one place

Everything visual is fixed in `guide.ts` and `promote.mjs`; change it there, never
in a script.

| What | Where | Value |
|---|---|---|
| Viewport | `guide.ts` `VIEWPORT` | 1920 × 1080, device scale 2 (`playwright.config.ts`, project `help-media`) |
| Step picture frame | `guide.ts` `frameFor` | 16:10, at least 960 px wide, 64 px padding around the target, centred on it; a target taller than the frame is shown from its top |
| Ring around the target | `guide.ts` `ring` | 3 px in the app's `--accent`, 12 px radius, 6 px outside the element, the rest dimmed 30 %; a numbered badge (step number) at the top-left corner |
| Drag & drop | `guide.ts` `ringDrag` (a step with `dropTo`) | source ringed and numbered, destination ringed dashed, a bowed arrow from the one to the other, both undimmed |
| Hover | `captureGuide` | the target is hovered before the shot (tooltips, hover-only buttons show); `hover` overrides where the centre is wrong |
| Result picture | `guide.media.result` | the full frame after the last step, pointer parked in the corner |
| Hero (screen overview) | `captureHero` | the full frame of the screen as the reader finds it |
| Output | `promote.mjs` | PNG → WebP quality 84; steps 1440 px wide, heroes and results 1920 px; into `public/help-media/<guide-id>/step-<n>.webp`, `result.webp`, `ctx/<screen-id>.webp` |
| No videos | | stills only, by decision |

The app's own appearance is the default theme, English, light mode, the seeded
demo data (`e2e/screenshots/seed.ts`) plus the fixtures in `fixtures.ts`. Do not
change the theme, the language or the zoom for a picture.

## How a screen gets its pictures

1. Register the screen and its guides in `src/help/contexts/<screen>.ts` and
   `src/help/registry.ts`; write the English texts as a block in
   `shared/src/i18n/en/help.ts` (`// ── Screen: <id>`). Guide ids are global: one id,
   one picture directory, so never reuse an id from another screen
   (`registry.test.ts` refuses duplicates).
2. Write `e2e/help/<screen>.guide.ts`: one `GuideScript` per guide, exactly one
   `StepAction` per registered step, `start` that opens the screen, `cleanup` that
   puts the seed back. A step's `target` is the element the text tells the reader
   to use; `prepare` gets there, `act` does what the text says.
3. Run `npm run help:media -- <screen>.guide.ts` (own ports 5183/3011, fresh
   database, the seed, then the file). Fix until every guide passes; a failing
   step is a text that no longer matches the UI.
4. Look at the pictures in `e2e/.tmp/help-media/`, then `node e2e/help/promote.mjs`.
5. Translate the block into all 22 locales (`i18n:parity:strict` is the gate) and
   run `src/help/registry.test.ts`, which checks every promised picture is on disk.

## Rules learned the hard way

- Never edit `shared/` while a media run is going: the watcher rebuilds `dist`
  mid-run and the pictures show raw i18n keys.
- Never `npm run build --workspace=shared` while `npm run dev` is running; restart
  the dev server if it happened.
- Each run boots a fresh server (~2 min); batch fixes, and dump the accessibility
  tree once (`page.locator('body').ariaSnapshot()`) instead of guessing locators.
- A plugin installed by a run lives in `server/data/plugins/`; the dev server
  imports it on its next restart. Guides that install one uninstall it in `cleanup`.
- The trip is running on the seed's dates: the plan opens on today's (empty) day;
  `openTrip` in `trip-shared.ts` selects day 1 and closes its details panel.
