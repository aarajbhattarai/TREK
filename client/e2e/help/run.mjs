// `npm run help:media`: the help-center media run on its own port pair, so it
// can record while `npm run dev` keeps serving 5173/3001 to whoever is
// watching. The ports travel as environment variables because Playwright's
// workers re-read the config, and only the environment reaches all of them.
//
// Extra arguments go straight to Playwright, e.g.
//   npm run help:media -- --grep "pictures"
import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'

const env = {
  ...process.env,
  E2E_WEB_PORT: process.env.E2E_WEB_PORT || '5183',
  E2E_API_PORT: process.env.E2E_API_PORT || '3011',
}
// The CLI's own entry, run by this node: no shell in between, so a --grep
// pattern with a `|` reaches Playwright untouched.
const cli = createRequire(import.meta.url).resolve('@playwright/test/cli')
const res = spawnSync(process.execPath, [cli, 'test', '--project=help-media', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env,
})
process.exit(res.status ?? 1)
