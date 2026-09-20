import Database from 'better-sqlite3';

type DayRow = { id: number; at: string | null; located: number };
type Via = { id: number; after_order_index: number; sequence: number };

/**
 * Seat every booked night where its check-in says, the way a night booked today is
 * seated (AccommodationsService.positionForCheckIn).
 *
 * The stop a booking puts on its check-in day used to go last unless a stop pinned to
 * a later hour pulled it forward, and the backfill that gave older bookings their stop
 * appended it too. The night leads its day now: first, behind only a stop whose own
 * clock is at or before the check-in, with the stops that carry no hour following it.
 * Without this step every trip planned before the change keeps the old order until
 * somebody edits the check-in.
 *
 * Only the stops a booking owns move (accommodation_id). A stop the traveller placed
 * themselves and then booked a night on is theirs, wherever it sits. The drawn roads
 * (roadtrip_vias) are pinned to positions among the day's located stops, so they are
 * carried along by the rules the service applies (AccommodationsService.reanchorVias):
 * a via follows the stop it was drawn after, a via behind a stop that is last stays
 * with it, and one left without a leg goes.
 *
 * Runs inside the migration's transaction. Re-runnable: a night already in its seat is
 * passed over. Returns how many nights moved.
 */
export function reseatBookedNights(db: Database.Database): number {
  const nights = db.prepare(`
    SELECT da.id, da.day_id, a.check_in
    FROM day_assignments da
    JOIN day_accommodations a ON a.id = da.accommodation_id
    ORDER BY da.day_id, da.order_index, da.id
  `).all() as Array<{ id: number; day_id: number; check_in: string | null }>;
  // Another night on the same day counts by its check-in, so two bookings on one
  // day settle by the clock instead of by whichever was seated last.
  const dayRows = db.prepare(`
    SELECT da.id, COALESCE(da.assignment_time, p.place_time, other.check_in) AS at,
           (p.lat IS NOT NULL AND p.lng IS NOT NULL) AS located
    FROM day_assignments da JOIN places p ON p.id = da.place_id
    LEFT JOIN day_accommodations other ON other.id = da.accommodation_id
    WHERE da.day_id = ?
    ORDER BY da.order_index ASC, da.created_at ASC, da.id ASC
  `);
  const setIndex = db.prepare('UPDATE day_assignments SET order_index = ? WHERE id = ?');
  const viasOf = db.prepare('SELECT id, after_order_index, sequence FROM roadtrip_vias WHERE day_id = ?');
  const dropVia = db.prepare('DELETE FROM roadtrip_vias WHERE id = ?');
  const moveVia = db.prepare('UPDATE roadtrip_vias SET after_order_index = ? WHERE id = ?');
  const setSequence = db.prepare('UPDATE roadtrip_vias SET sequence = ? WHERE id = ?');

  let seated = 0;
  for (const night of nights) {
    const rows = dayRows.all(night.day_id) as DayRow[];
    const own = rows.findIndex((row) => row.id === night.id);
    if (own < 0) continue;
    const others = rows.filter((row) => row.id !== night.id);
    let seat = 0;
    if (night.check_in) {
      others.forEach((row, i) => {
        if (row.at !== null && row.at <= night.check_in!) seat = i + 1;
      });
    }
    const next = [...others.slice(0, seat), rows[own]!, ...others.slice(seat)];
    if (next.every((row, i) => row.id === rows[i]!.id)) continue;

    const previousLocated = rows.filter((row) => row.located).map((row) => row.id);
    next.forEach((row, i) => setIndex.run(i, row.id));
    seated += 1;

    const nextLocated = next.filter((row) => row.located).map((row) => row.id);
    const vias = viasOf.all(night.day_id) as Via[];
    if (!vias.length) continue;
    const previousLast = previousLocated.length - 1;
    const nextLast = nextLocated.length - 1;
    const lastStayed = previousLast >= 0 && previousLocated[previousLast] === nextLocated[nextLast];
    const landed = new Set<number>();
    const kept: Array<Via & { was: number }> = [];
    for (const via of vias) {
      const leg = lastStayed && via.after_order_index === previousLast
        ? nextLast
        : legAfter(via.after_order_index, previousLocated, nextLocated);
      if (leg === null) {
        dropVia.run(via.id);
        continue;
      }
      if (leg !== via.after_order_index) {
        moveVia.run(leg, via.id);
        landed.add(via.id);
      }
      kept.push({ ...via, was: via.after_order_index, after_order_index: leg });
    }
    // Two legs that merged carry two sequence series side by side. Renumbered the way
    // the service does it: the earlier leg's points first, then by their old sequence,
    // then by id. Only a leg that received a via is touched.
    const byLeg = new Map<number, Array<Via & { was: number }>>();
    for (const via of kept) byLeg.set(via.after_order_index, [...(byLeg.get(via.after_order_index) ?? []), via]);
    for (const onLeg of byLeg.values()) {
      if (!onLeg.some((via) => landed.has(via.id))) continue;
      onLeg.sort((a, b) => a.was - b.was || a.sequence - b.sequence || a.id - b.id);
      onLeg.forEach((via, i) => {
        if (via.sequence !== i) setSequence.run(i, via.id);
      });
    }
  }
  return seated;
}

/**
 * The leg a via pinned behind the n-th stop of the old order is on in the new one
 * (AccommodationsService.legAfter). Null when no leg is left for it.
 */
function legAfter(index: number, previousIds: number[], nextIds: number[]): number | null {
  if (index > previousIds.length - 1) return null;
  let at = index;
  while (at >= 0 && !nextIds.includes(previousIds[at]!)) at -= 1;
  if (at < 0) return null;
  const next = nextIds.indexOf(previousIds[at]!);
  return next >= nextIds.length - 1 ? null : next;
}
