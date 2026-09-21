import sharp from 'sharp'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { gzipSync } from 'node:zlib'
import type { APIRequestContext, Page } from '@playwright/test'
import { OUT_DIR } from './guide'

/**
 * What the dashboard guides act on beyond the seeded trip.
 *
 * The seed's "Autumn in Japan" is the running trip, so it sits in the boarding
 * pass rather than in the grid. The card actions (edit, duplicate, archive,
 * delete) need cards, so two more trips are created over the API once, before
 * the first guide runs. Uploads use a drawn dusk-over-mountains cover rather
 * than a photograph: nothing in the repo may carry someone's picture.
 */

export const EXTRA_TRIPS = [
  { title: 'Weekend in Lisbon', description: 'Pastéis, miradouros and a day trip to Sintra.', start_date: '2026-10-16', end_date: '2026-10-18', currency: 'EUR' },
  { title: 'Norway Road Trip', description: 'Bergen to the Lofoten, fjord by fjord.', start_date: '2027-06-05', end_date: '2027-06-19', currency: 'NOK' },
]

export async function ensureExtraTrips(api: APIRequestContext): Promise<void> {
  const res = await api.get('/api/trips')
  const body = (await res.json()) as { trips?: { title: string }[] } | { title: string }[]
  const trips = Array.isArray(body) ? body : (body.trips ?? [])
  for (const trip of EXTRA_TRIPS) {
    if (trips.some(t => t.title === trip.title)) continue
    const created = await api.post('/api/trips', { data: trip })
    if (!created.ok()) throw new Error(`could not create "${trip.title}": ${created.status()} ${await created.text()}`)
  }
}

/** Path of a 1600×900 JPEG the cover guide uploads; drawn on first use. */
export async function coverFixture(): Promise<string> {
  mkdirSync(OUT_DIR, { recursive: true })
  const file = path.join(OUT_DIR, 'cover-fixture.jpg')
  if (existsSync(file)) return file
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1b1f3b"/>
      <stop offset="0.45" stop-color="#6b3d7a"/>
      <stop offset="0.75" stop-color="#e8865a"/>
      <stop offset="1" stop-color="#f7c36b"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fff2c2"/>
      <stop offset="0.6" stop-color="#ffb35c"/>
      <stop offset="1" stop-color="#ffb35c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#sky)"/>
  <circle cx="1090" cy="560" r="150" fill="url(#sun)"/>
  <path d="M0 640 L180 520 L330 600 L480 470 L640 590 L800 500 L960 610 L1120 540 L1280 620 L1440 560 L1600 640 L1600 900 L0 900 Z" fill="#2a2140" opacity="0.85"/>
  <path d="M0 720 L200 640 L360 700 L560 600 L720 690 L900 640 L1080 720 L1260 660 L1440 730 L1600 700 L1600 900 L0 900 Z" fill="#1a1530"/>
  <path d="M0 820 Q400 760 800 800 T1600 790 L1600 900 L0 900 Z" fill="#100c1f"/>
</svg>`
  await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(file)
  return file
}

/** Trip card in the grid by its title. */
export function card(page: Page, title: string) {
  return page.locator('.trip-card').filter({ hasText: title }).first()
}

// ── Atlas ─────────────────────────────────────────────────────────────────────

/**
 * What the Atlas guides act on. The seed's Japan trip colours one country;
 * a map with a single country on it says nothing about what the screen does,
 * so a handful of countries are marked by hand (the way someone catching up
 * on their pre-TREK travels would), one wish goes on the bucket list, and the
 * Lisbon trip gets a place so Portugal shows up as planned and the "Show
 * planned countries" switch exists at all.
 */
export const ATLAS_MARKED = ['IT', 'ES', 'FR', 'TH', 'MA']
export const ATLAS_WISH = { name: 'New Zealand', country_code: 'NZ' }
export const PLANNED_PLACE = {
  trip: 'Weekend in Lisbon',
  place: { name: 'Belém Tower', lat: 38.6916, lng: -9.216, address: 'Av. Brasília, 1400-038 Lisboa, Portugal' },
}

export async function ensureAtlasFixtures(api: APIRequestContext): Promise<void> {
  await ensureExtraTrips(api)

  const res = await api.get('/api/trips')
  const body = (await res.json()) as { trips?: { id: number; title: string }[] } | { id: number; title: string }[]
  const trips = Array.isArray(body) ? body : (body.trips ?? [])
  const lisbon = trips.find(t => t.title === PLANNED_PLACE.trip)
  if (!lisbon) throw new Error(`fixture trip "${PLANNED_PLACE.trip}" is missing`)
  const placesRes = await api.get(`/api/trips/${lisbon.id}/places`)
  const placesBody = (await placesRes.json()) as { places?: { name: string }[] } | { name: string }[]
  const places = Array.isArray(placesBody) ? placesBody : (placesBody.places ?? [])
  if (!places.some(p => p.name === PLANNED_PLACE.place.name)) {
    const created = await api.post(`/api/trips/${lisbon.id}/places`, { data: PLANNED_PLACE.place })
    if (!created.ok()) throw new Error(`could not create "${PLANNED_PLACE.place.name}": ${created.status()} ${await created.text()}`)
  }

  // Idempotent on the server (INSERT OR IGNORE), so no lookup first.
  for (const code of ATLAS_MARKED) {
    const marked = await api.post(`/api/addons/atlas/country/${code}/mark`)
    if (!marked.ok()) throw new Error(`could not mark ${code}: ${marked.status()}`)
  }

  const listRes = await api.get('/api/addons/atlas/bucket-list')
  const { items } = (await listRes.json()) as { items: { country_code: string | null; target_date: string | null }[] }
  if (!items.some(i => i.country_code === ATLAS_WISH.country_code && !i.target_date)) {
    const wish = await api.post('/api/addons/atlas/bucket-list', { data: ATLAS_WISH })
    if (!wish.ok()) throw new Error(`could not add the ${ATLAS_WISH.name} wish: ${wish.status()} ${await wish.text()}`)
  }
}

// ── Journey ───────────────────────────────────────────────────────────────────

/**
 * What the Journey guides act on. The seed creates "Autumn in Japan" from the
 * trip, which leaves a timeline of suggestions and nothing written. Three of
 * them get a story, a mood and the weather, and the first one a photo, so the
 * journal looks lived-in; the rest stay suggestions for the guide about them.
 */
export const JOURNEY_TITLE = 'Autumn in Japan'
const ENTRIES = [
  {
    title: 'First morning in Asakusa',
    story: 'Up before the shops. The Kaminarimon lantern with nobody under it, incense smoke drifting across the courtyard, and a bowl of soba from a counter that opened just as we arrived.',
    mood: 'amazing', weather: 'sunny', tags: ['hidden gem', 'early start'],
  },
  {
    title: 'Barefoot through the light',
    story: 'teamLab Planets is best without expectations. You wade through warm water while koi drawn from light swim around your ankles, then lie under a ceiling of orchids that moves out of your way.',
    mood: 'good', weather: 'partly', tags: ['best moment'],
  },
  {
    title: 'The crossing, from above',
    story: 'Shibuya from the Sky deck at dusk: the scramble fills and empties every ninety seconds like a tide. Rough evening otherwise, the rain came in sideways and the umbrella did not make it home.',
    mood: 'rough', weather: 'rainy', tags: ['viewpoint'],
    pros_cons: { pros: ['The view at blue hour', 'Timed entry, no queue'], cons: ['Rain, then more rain', 'Crowded lift'] },
  },
]

/** A second, future journey, so the list has a card below the banner. */
export const SECOND_JOURNEY = { title: 'Fjords and ferries', subtitle: 'Norway, next summer', trip: 'Norway Road Trip' }
/** A trip no journey has claimed, for the guide that links one. */
export const SPARE_TRIP = { title: 'Alps by rail', description: 'Zurich to Venice over the Bernina.', start_date: '2027-02-12', end_date: '2027-02-19', currency: 'CHF' }

export async function ensureJourneyFixtures(api: APIRequestContext): Promise<number> {
  const listRes = await api.get('/api/journeys')
  const { journeys } = (await listRes.json()) as { journeys: { id: number; title: string }[] }
  const journey = journeys.find(j => j.title === JOURNEY_TITLE)
  if (!journey) throw new Error(`fixture journey "${JOURNEY_TITLE}" is missing`)

  if (!journeys.some(j => j.title === SECOND_JOURNEY.title)) {
    const tripsRes = await api.get('/api/trips')
    const tripsBody = (await tripsRes.json()) as { trips?: { id: number; title: string }[] } | { id: number; title: string }[]
    const trips = Array.isArray(tripsBody) ? tripsBody : (tripsBody.trips ?? [])
    const norway = trips.find(t => t.title === SECOND_JOURNEY.trip)
    if (!norway) throw new Error(`fixture trip "${SECOND_JOURNEY.trip}" is missing`)
    const created = await api.post('/api/journeys', { data: { title: SECOND_JOURNEY.title, subtitle: SECOND_JOURNEY.subtitle, trip_ids: [norway.id] } })
    if (!created.ok()) throw new Error(`could not create "${SECOND_JOURNEY.title}": ${created.status()} ${await created.text()}`)
  }
  const spareRes = await api.get('/api/trips')
  const spareBody = (await spareRes.json()) as { trips?: { title: string }[] } | { title: string }[]
  const allTrips = Array.isArray(spareBody) ? spareBody : (spareBody.trips ?? [])
  if (!allTrips.some(t => t.title === SPARE_TRIP.title)) {
    const created = await api.post('/api/trips', { data: SPARE_TRIP })
    if (!created.ok()) throw new Error(`could not create "${SPARE_TRIP.title}": ${created.status()} ${await created.text()}`)
  }

  const entriesRes = await api.get(`/api/journeys/${journey.id}/entries`)
  const { entries } = (await entriesRes.json()) as { entries: { id: number; type: string; title: string | null }[] }
  if (entries.some(e => e.title === ENTRIES[0].title)) return journey.id

  const skeletons = entries.filter(e => e.type === 'skeleton')
  for (let i = 0; i < ENTRIES.length && i < skeletons.length; i++) {
    const res = await api.patch(`/api/journeys/entries/${skeletons[i].id}`, { data: { type: 'entry', ...ENTRIES[i] } })
    if (!res.ok()) throw new Error(`could not write entry "${ENTRIES[i].title}": ${res.status()} ${await res.text()}`)
  }
  const photo = await coverFixture()
  const upload = await api.post(`/api/journeys/entries/${skeletons[0].id}/photos`, {
    multipart: { photos: { name: 'asakusa.jpg', mimeType: 'image/jpeg', buffer: readFileSync(photo) } },
  })
  if (!upload.ok()) throw new Error(`could not upload the entry photo: ${upload.status()} ${await upload.text()}`)
  return journey.id
}

// ── Admin ─────────────────────────────────────────────────────────────────────

/**
 * What the admin guides act on. Two more accounts so the user table has rows
 * to edit and delete, one invite link, a packing template with categories and
 * items, a school-holiday country with one region, the MCP addon (the tab only
 * exists while it is on) with a token, and the ntfy and webhook channels.
 */
export const ADMIN_USERS = [
  { username: 'mara', email: 'mara.lind@example.com', password: 'Mara12345!', role: 'user' },
  { username: 'jonas', email: 'jonas.b@example.com', password: 'Jonas12345!', role: 'user' },
]
const PACKING_TEMPLATE = {
  name: 'Beach Holiday',
  categories: [
    { name: 'Clothing', items: ['Swimsuit', 'Sandals', 'Sun hat', 'Light jacket'] },
    { name: 'Toiletries', items: ['Sunscreen', 'After sun', 'Toothbrush'] },
  ],
}
const SCHOOL_COUNTRY = { code: 'DE', name: 'Germany' }
const SCHOOL_REGION = {
  name: 'Bavaria',
  revision: 0,
  holidays: [
    { name: 'Autumn break', startDate: '2026-11-02', endDate: '2026-11-06' },
    { name: 'Christmas break', startDate: '2026-12-24', endDate: '2027-01-06' },
    { name: 'Easter break', startDate: '2027-03-29', endDate: '2027-04-09' },
  ],
}

async function listOf<T>(api: APIRequestContext, url: string, key: string): Promise<T[]> {
  const res = await api.get(url)
  if (!res.ok()) throw new Error(`${url}: ${res.status()} ${await res.text()}`)
  const body = (await res.json()) as Record<string, T[]> | T[]
  return Array.isArray(body) ? body : (body[key] ?? [])
}

/** Accounts by username; existing ones are left alone. */
export async function ensureUsers(api: APIRequestContext, wanted: { username: string; email: string; password: string; role: string }[]): Promise<void> {
  const users = await listOf<{ username: string }>(api, '/api/admin/users', 'users')
  for (const user of wanted) {
    if (users.some(u => u.username === user.username)) continue
    const created = await api.post('/api/admin/users', { data: user })
    if (!created.ok()) throw new Error(`could not create user "${user.username}": ${created.status()} ${await created.text()}`)
  }
}

/** The demo trip the screenshot seed creates; its ids are on disk because Playwright projects share no memory. */
export function seededTrip(): { tripId: number; dayIds: number[]; placeIds: number[]; memberIds: number[] } {
  return JSON.parse(readFileSync(path.join(process.cwd(), 'e2e', '.tmp', 'seed.json'), 'utf8'))
}

export async function ensureAdminFixtures(api: APIRequestContext): Promise<void> {
  await ensureUsers(api, ADMIN_USERS)

  const invites = await listOf<{ id: number }>(api, '/api/admin/invites', 'invites')
  if (invites.length === 0) {
    const created = await api.post('/api/admin/invites', { data: { max_uses: 3, expires_in_days: 14 } })
    if (!created.ok()) throw new Error(`could not create the invite link: ${created.status()} ${await created.text()}`)
  }

  const templates = await listOf<{ id: number; name: string }>(api, '/api/admin/packing-templates', 'templates')
  if (!templates.some(t => t.name === PACKING_TEMPLATE.name)) {
    const created = await api.post('/api/admin/packing-templates', { data: { name: PACKING_TEMPLATE.name } })
    if (!created.ok()) throw new Error(`could not create the packing template: ${created.status()} ${await created.text()}`)
    const template = (await created.json()) as { id?: number; template?: { id: number } }
    const templateId = template.id ?? template.template?.id
    if (!templateId) throw new Error('packing template came back without an id')
    for (const cat of PACKING_TEMPLATE.categories) {
      const catRes = await api.post(`/api/admin/packing-templates/${templateId}/categories`, { data: { name: cat.name } })
      if (!catRes.ok()) throw new Error(`could not add category "${cat.name}": ${catRes.status()} ${await catRes.text()}`)
      const category = (await catRes.json()) as { id?: number; category?: { id: number } }
      const catId = category.id ?? category.category?.id
      for (const item of cat.items) {
        const itemRes = await api.post(`/api/admin/packing-templates/${templateId}/categories/${catId}/items`, { data: { name: item } })
        if (!itemRes.ok()) throw new Error(`could not add item "${item}": ${itemRes.status()} ${await itemRes.text()}`)
      }
    }
  }

  const catalogRes = await api.get('/api/school-holiday-catalog')
  if (!catalogRes.ok()) throw new Error(`school holiday catalog: ${catalogRes.status()} ${await catalogRes.text()}`)
  const catalog = (await catalogRes.json()) as { countries: { code: string; regions?: { name: string }[] }[]; regions?: { country: string; name: string }[] }
  if (!catalog.countries.some(c => c.code === SCHOOL_COUNTRY.code)) {
    const created = await api.post('/api/school-holiday-catalog/countries', { data: SCHOOL_COUNTRY })
    if (!created.ok()) throw new Error(`could not create the holiday country: ${created.status()} ${await created.text()}`)
  }
  const regions = catalog.regions ?? catalog.countries.find(c => c.code === SCHOOL_COUNTRY.code)?.regions ?? []
  if (!regions.some(r => r.name === SCHOOL_REGION.name)) {
    const created = await api.post(`/api/school-holiday-catalog/countries/${SCHOOL_COUNTRY.code}/regions`, { data: SCHOOL_REGION })
    if (!created.ok()) throw new Error(`could not create the holiday region: ${created.status()} ${await created.text()}`)
  }

  const mcp = await api.put('/api/admin/addons/mcp', { data: { enabled: true } })
  if (!mcp.ok()) throw new Error(`could not enable the MCP addon: ${mcp.status()} ${await mcp.text()}`)
  const tokens = await listOf<{ id: number }>(api, '/api/auth/mcp-tokens', 'tokens')
  if (tokens.length === 0) {
    const created = await api.post('/api/auth/mcp-tokens', { data: { name: 'Claude Desktop' } })
    if (!created.ok()) throw new Error(`could not create the MCP token: ${created.status()} ${await created.text()}`)
  }

  const channels = await api.put('/api/auth/app-settings', { data: { notification_channels: 'ntfy,webhook' } })
  if (!channels.ok()) throw new Error(`could not enable the notification channels: ${channels.status()} ${await channels.text()}`)
}

/** A minimal ustar tar.gz, enough for the plugin upload route. */
function tarGz(files: { name: string; data: Buffer }[]): Buffer {
  const blocks: Buffer[] = []
  for (const f of files) {
    const h = Buffer.alloc(512)
    h.write(f.name, 0, 100, 'utf8')
    h.write('0000644\0', 100, 8, 'utf8')
    h.write('0000000\0', 108, 8, 'utf8')
    h.write('0000000\0', 116, 8, 'utf8')
    h.write(f.data.length.toString(8).padStart(11, '0') + '\0', 124, 12, 'utf8')
    h.write(Math.floor(Date.now() / 1000).toString(8).padStart(11, '0') + '\0', 136, 12, 'utf8')
    h.write('        ', 148, 8, 'utf8')
    h.write('0', 156, 1, 'utf8')
    h.write('ustar\0', 257, 6, 'utf8')
    h.write('00', 263, 2, 'utf8')
    let sum = 0
    for (const b of h) sum += b
    h.write(sum.toString(8).padStart(6, '0') + '\0 ', 148, 8, 'utf8')
    blocks.push(h, f.data, Buffer.alloc((512 - (f.data.length % 512)) % 512))
  }
  blocks.push(Buffer.alloc(1024))
  return gzipSync(Buffer.concat(blocks))
}

/**
 * The SDK's Trip Doctor example packed for upload. Its manifest pins TREK 3.x,
 * so the range is widened to the running major; nothing else changes.
 */
export function pluginPackage(): Buffer {
  const dir = path.join(process.cwd(), '..', 'plugin-sdk', 'examples', 'trip-doctor')
  const manifest = JSON.parse(readFileSync(path.join(dir, 'trek-plugin.json'), 'utf8')) as Record<string, unknown>
  manifest.trek = '>=4.0.0'
  return tarGz([
    { name: 'trip-doctor/trek-plugin.json', data: Buffer.from(JSON.stringify(manifest, null, 2)) },
    { name: 'trip-doctor/server/index.js', data: readFileSync(path.join(dir, 'server', 'index.js')) },
  ])
}

// ── Trip ──────────────────────────────────────────────────────────────────────

/** Two short Kyoto walks as GPX, each a track with two waypoints; drawn once, on first use. */
const WALKS: Record<string, { name: string; waypoints: [string, number, number][]; track: [number, number][] }> = {
  'kyoto-walk': {
    name: "Philosopher's Path",
    waypoints: [['Ginkaku-ji', 35.0270, 135.7982], ['Nanzen-ji', 35.0113, 135.7943]],
    track: [[35.0270, 135.7982], [35.0248, 135.7969], [35.0221, 135.7957], [35.0194, 135.7951], [35.0166, 135.7948], [35.0140, 135.7945], [35.0113, 135.7943]],
  },
  'arashiyama-loop': {
    name: 'Arashiyama loop',
    waypoints: [['Togetsukyo Bridge', 35.0128, 135.6777], ['Okochi Sanso Villa', 35.0177, 135.6700]],
    track: [[35.0128, 135.6777], [35.0141, 135.6752], [35.0158, 135.6728], [35.0170, 135.6716], [35.0177, 135.6700], [35.0165, 135.6740], [35.0140, 135.6765]],
  },
}

export function gpxFixture(id: keyof typeof WALKS): string {
  const dir = path.join(process.cwd(), 'e2e', '.tmp')
  mkdirSync(dir, { recursive: true })
  const file = path.join(dir, `${id}.gpx`)
  if (existsSync(file)) return file
  const walk = WALKS[id]
  const wpts = walk.waypoints.map(([name, lat, lon]) => `  <wpt lat="${lat}" lon="${lon}"><name>${name}</name></wpt>`).join('\n')
  const pts = walk.track.map(([lat, lon]) => `      <trkpt lat="${lat}" lon="${lon}"></trkpt>`).join('\n')
  writeFileSync(file, `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="TREK help" xmlns="http://www.topografix.com/GPX/1/1">
${wpts}
  <trk><name>${walk.name}</name><trkseg>
${pts}
  </trkseg></trk>
</gpx>
`)
  return file
}

/** Import a walk over the API, so the trip has a track before the pictures start. */
export async function ensureTrack(api: APIRequestContext, tripId: number, id: keyof typeof WALKS): Promise<void> {
  const res = await api.get(`/api/trips/${tripId}/places`)
  const body = (await res.json()) as { places?: { name: string }[] } | { name: string }[]
  const places = Array.isArray(body) ? body : (body.places ?? [])
  if (places.some(p => p.name === WALKS[id].name)) return
  const imported = await api.post(`/api/trips/${tripId}/places/import/gpx`, {
    multipart: {
      file: { name: `${id}.gpx`, mimeType: 'application/gpx+xml', buffer: readFileSync(gpxFixture(id)) },
      importWaypoints: 'true', importRoutes: 'true', importTracks: 'true',
    },
  })
  if (!imported.ok()) throw new Error(`could not import ${id}: ${imported.status()} ${await imported.text()}`)
}

/**
 * What the day guides need on the seeded trip beyond its places: a stop with a
 * time, a reservation tied to a stop, a train between two cities and a hotel
 * over the first nights, so the day cards show every kind of row.
 */
export async function ensureDaysFixtures(api: APIRequestContext): Promise<void> {
  const { tripId, dayIds } = seededTrip()
  const assignmentsOf = async (dayId: number) => {
    const res = await api.get(`/api/trips/${tripId}/days/${dayId}/assignments`)
    const body = (await res.json()) as { assignments?: { id: number; place_id: number; place?: { name: string } }[] }
    return body.assignments ?? []
  }
  const placesRes = await api.get(`/api/trips/${tripId}/places`)
  const placesBody = (await placesRes.json()) as { places?: { id: number; name: string }[] } | { id: number; name: string }[]
  const places = Array.isArray(placesBody) ? placesBody : (placesBody.places ?? [])
  const byName = (name: string) => places.find(p => p.name === name)

  // A time on the first stop of day 1.
  const day1 = await assignmentsOf(dayIds[0])
  const senso = day1.find(a => a.place_id === byName('Senso-ji Temple')?.id)
  if (senso) await api.put(`/api/trips/${tripId}/assignments/${senso.id}/time`, { data: { place_time: '09:30', end_time: '11:00' } })

  const resRes = await api.get(`/api/trips/${tripId}/reservations`)
  const resBody = (await resRes.json()) as { reservations?: { title: string }[] } | { title: string }[]
  const reservations = Array.isArray(resBody) ? resBody : (resBody.reservations ?? [])
  const has = (title: string) => reservations.some(r => r.title === title)

  // A reservation at the market stop on day 6.
  const day6 = await assignmentsOf(dayIds[5])
  const market = day6.find(a => a.place_id === byName('Nishiki Market')?.id)
  if (market && !has('Lunch at Nishiki')) {
    await api.post(`/api/trips/${tripId}/reservations`, {
      data: {
        title: 'Lunch at Nishiki', type: 'restaurant', status: 'confirmed', day_id: dayIds[5],
        place_id: market.place_id, assignment_id: market.id, reservation_time: '2026-09-17T12:30:00', confirmation_number: 'NK-2211',
      },
    })
  }

  // The train from Tokyo to Kyoto on day 5.
  if (!has('Nozomi 21 Tokyo → Kyoto')) {
    await api.post(`/api/trips/${tripId}/reservations`, {
      data: {
        title: 'Nozomi 21 Tokyo → Kyoto', type: 'train', status: 'confirmed', location: 'Tokyo Station',
        reservation_time: '2026-09-16T08:30:00', reservation_end_time: '2026-09-16T10:45:00', confirmation_number: 'JR-58204',
        metadata: { train_number: 'Nozomi 21', platform: '17', seat: '8A' },
        endpoints: [
          { role: 'from', sequence: 0, name: 'Tokyo Station', lat: 35.6812, lng: 139.7671, timezone: 'Asia/Tokyo', local_date: '2026-09-16', local_time: '08:30' },
          { role: 'to', sequence: 1, name: 'Kyoto Station', lat: 34.9858, lng: 135.7588, timezone: 'Asia/Tokyo', local_date: '2026-09-16', local_time: '10:45' },
        ],
      },
    })
  }

  // A hotel over the Tokyo nights.
  if (!byName('Hotel Gracery Shinjuku')) {
    const created = await api.post(`/api/trips/${tripId}/places`, {
      data: { name: 'Hotel Gracery Shinjuku', lat: 35.6946, lng: 139.7012, address: '1-19-1 Kabukicho, Shinjuku City, Tokyo' },
    })
    const place = (await created.json()) as { place?: { id: number }; id?: number }
    const placeId = place.place?.id ?? place.id
    await api.post(`/api/trips/${tripId}/accommodations`, {
      data: { place_id: placeId, start_day_id: dayIds[0], end_day_id: dayIds[3], check_in: '15:00', check_out: '11:00', confirmation: 'GRC-7731' },
    })
  }
}
