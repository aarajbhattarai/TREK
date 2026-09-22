import { chronoOrder } from '../day/chrono-order';
import type { CarrierTerminal, RoadtripStop, RoutedLeg } from './planning-types';
import { formatClock, formatDurationShort, parseClock } from './roadtripModel';

/**
 * Bookings the traveller rides and then leaves behind, the same set the day plan calls a
 * carrier (`isCarrierTransport` in the client): the vehicle carries them out of the day's
 * geography and keeps going without them. A hire car, a taxi or a transit hop is not one
 * of these, because the traveller stays in the drive's geography the whole way.
 *
 * On the road trip such a booking is a seam: the road ends at the terminal it leaves
 * from and starts again at the one it lands at. Routing straight across it drew a
 * two-thousand-kilometre drive where a flight was booked (#2428).
 */
export const CARRIER_TYPES = ['flight', 'train', 'ferry', 'cruise', 'bus'] as const;

export function isCarrierType(type: string | null | undefined): boolean {
  return !!type && (CARRIER_TYPES as readonly string[]).includes(type);
}

/**
 * A hire car: the traveller drives it, so its booking is no seam. Its pick-up and return
 * desks are still where the drive starts and ends, and the day plan routes to them the
 * same way, so they take their place on the road as points of their own.
 */
export function isRentalType(type: string | null | undefined): boolean {
  return type === 'car';
}

/** A leg mode that is a ride rather than a road: the booking's own type is the mode. */
export function isCarrierMode(mode: string | null | undefined): boolean {
  return isCarrierType(mode);
}

/**
 * How long before the timetable's departure the traveller has to be at the terminal.
 *
 * The pin on the departure terminal is this much before the departure, not the departure
 * itself: a drive that reaches the airport as the doors close is late, however the model
 * counts it. The ride then leaves at the timetable's minute.
 */
export const CHECK_IN_MINUTES: Record<string, number> = {
  flight: 60,
  cruise: 60,
  ferry: 30,
  train: 10,
  bus: 10,
};

/**
 * Whether the car goes along. A range budget carries across a ride the car takes too
 * (a car ferry, a motorail) and starts afresh after one it cannot (nobody flies a car),
 * because the tank the drive continues on is a different tank.
 */
export function carriesTheCar(type: string): boolean {
  return type === 'ferry' || type === 'train';
}

/** A booking as either side stores it: the row with its endpoints and positions joined on. */
export interface CarrierBooking {
  id: number;
  type: string;
  title: string;
  day_id?: number | null;
  end_day_id?: number | null;
  /** 'HH:mm' or 'YYYY-MM-DDTHH:mm', as the reservation form writes it. */
  reservation_time?: string | null;
  reservation_end_time?: string | null;
  /** JSON as stored, or the parsed object; only `legs` is read here. */
  metadata?: string | Record<string, unknown> | null;
  endpoints?: readonly {
    role: string;
    sequence?: number | null;
    name: string;
    code?: string | null;
    lat: number | null;
    lng: number | null;
  }[];
  day_positions?: Record<string, number> | null;
  day_plan_position?: number | null;
}

/** One end of a seam: where, when and on which day the drive stops or resumes. */
export interface CarrierEnd {
  dayId: number;
  /** Where the terminal sits among the day's stops, when somebody placed the booking by hand. */
  position: number | null;
  /** The timetable's clock at this terminal, 'HH:mm', null when the booking names none. */
  clock: string | null;
  name: string;
  code: string | null;
  lat: number;
  lng: number;
}

export interface CarrierSeam {
  reservationId: number;
  type: string;
  title: string;
  /** A ride seams the drive; a rental only puts its two desks on it. */
  kind: 'ride' | 'rental';
  departure: CarrierEnd;
  /**
   * A ride always has both ends. A hire car has a return only when the booking says
   * when and where: without a return day or a located return desk, nothing is guessed
   * and only the pick-up stands on the road.
   */
  arrival: CarrierEnd | null;
}

interface LegRecord {
  dep_day_id?: number | null;
  dep_time?: string | null;
  arr_day_id?: number | null;
  arr_time?: string | null;
  day_positions?: Record<string, number> | null;
}

function parseMetadata(raw: CarrierBooking['metadata']): Record<string, unknown> {
  if (!raw) return {};
  if (typeof raw !== 'string') return raw;
  try {
    let parsed: unknown = JSON.parse(raw);
    // A booking saved by an earlier bug carries its JSON encoded twice; the day plan
    // unwraps it once more on read and so does this.
    if (typeof parsed === 'string') parsed = JSON.parse(parsed);
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : {};
  } catch {
    return {};
  }
}

/** The legs of a booking with a stopover, in order; none for a direct one. */
function legsOf(booking: CarrierBooking): LegRecord[] {
  const legs = parseMetadata(booking.metadata).legs;
  return Array.isArray(legs) ? (legs as LegRecord[]) : [];
}

/** 'HH:mm' out of either form the reservation columns hold, null for anything else. */
export function carrierClock(value: string | null | undefined): string | null {
  if (!value) return null;
  const text = value.includes('T') ? value.slice(value.indexOf('T') + 1) : value;
  const minutes = parseClock(text);
  return minutes === null ? null : formatClock(minutes);
}

function positionOn(positions: Record<string, number> | null | undefined, dayId: number): number | null {
  const value = positions?.[String(dayId)] ?? (positions as Record<number, number> | null | undefined)?.[dayId];
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

/**
 * The seam a booking makes, or null when it makes none: a booking on no day is not on the
 * plan, and one without a located terminal at BOTH ends cannot say where the drive stops
 * or where it goes on, so it is left to the day plan.
 *
 * A booking with a stopover is one seam from its first departure to its last arrival. The
 * change of planes happens inside the ride, and the drive has no say in it.
 */
export function carrierSeam(booking: CarrierBooking): CarrierSeam | null {
  const kind: CarrierSeam['kind'] | null = isCarrierType(booking.type)
    ? 'ride'
    : isRentalType(booking.type)
      ? 'rental'
      : null;
  if (!kind) return null;
  const located = (booking.endpoints ?? [])
    .filter(
      (e) => typeof e.lat === 'number' && typeof e.lng === 'number' && Number.isFinite(e.lat) && Number.isFinite(e.lng),
    )
    .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0));
  // A ride needs both ends to say where the drive stops and where it resumes, and takes
  // the first and the last located stop for them when no endpoint is marked. A hire car's
  // desks are only ever the ones marked as such: guessing one would put a stop on the
  // road nobody booked, and a return desk read as the pick-up starts the drive where it
  // ends. The same desk twice is fine for a car, and no seam for a ride.
  const from =
    kind === 'ride' ? (located.find((e) => e.role === 'from') ?? located[0]) : located.find((e) => e.role === 'from');
  const to =
    kind === 'ride'
      ? ([...located].reverse().find((e) => e.role === 'to') ?? located[located.length - 1])
      : [...located].reverse().find((e) => e.role === 'to');
  if (!from) return null;
  if (kind === 'ride' && (!to || from === to)) return null;

  const legs = legsOf(booking);
  const first = legs[0];
  const last = legs[legs.length - 1];
  const depDayId = first?.dep_day_id ?? booking.day_id ?? null;
  if (depDayId == null) return null;
  // A ride lands on the day it left unless the booking says otherwise. A hire car is
  // handed back on the day the booking names, and on no day when it names none.
  const arrDayId = last?.arr_day_id ?? booking.end_day_id ?? (kind === 'ride' ? depDayId : null);
  const depClock = carrierClock(first?.dep_time ?? booking.reservation_time);
  const arrClock = carrierClock(last?.arr_time ?? booking.reservation_end_time);
  const bookingPosition = (dayId: number): number | null =>
    positionOn(booking.day_positions, dayId) ??
    (typeof booking.day_plan_position === 'number' ? booking.day_plan_position : null);

  return {
    reservationId: booking.id,
    type: booking.type,
    title: booking.title,
    kind,
    departure: {
      dayId: depDayId,
      position: positionOn(first?.day_positions, depDayId) ?? bookingPosition(depDayId),
      clock: depClock,
      name: from.name,
      code: from.code ?? null,
      lat: from.lat!,
      lng: from.lng!,
    },
    arrival:
      to && arrDayId != null
        ? {
            dayId: arrDayId,
            position: positionOn(last?.day_positions, arrDayId) ?? bookingPosition(arrDayId),
            clock: arrClock,
            name: to.name,
            code: to.code ?? null,
            lat: to.lat!,
            lng: to.lng!,
          }
        : null,
  };
}

/**
 * Minutes of a ride as the clocks tell them, across the days it spans.
 *
 * Wall clocks on purpose, not elapsed time: the chain runs on the local clock, and after
 * landing the day goes on in the destination's time. A ride that lands earlier on the
 * clock than it left (westward across the date line) cannot be told from a ride of no
 * length this way and counts as one. Null when either clock is missing.
 */
function rideMinutes(dep: number | null, arr: number | null, dayDelta: number): number | null {
  if (dep === null || arr === null) return null;
  return Math.max(0, arr + Math.max(0, dayDelta) * 1440 - dep);
}

/** Below the automatic nights (-2e9 and down): a terminal is no assignment and no night. */
const TERMINAL_ID_BASE = -3_000_000_000;

export function terminalAssignmentId(reservationId: number, role: CarrierTerminal['role']): number {
  return TERMINAL_ID_BASE - reservationId * 2 - (role === 'arrival' || role === 'return' ? 1 : 0);
}

/** The two roles of a seam, by which end of it a terminal stands at. */
function rolesOf(seam: CarrierSeam): { start: CarrierTerminal['role']; end: CarrierTerminal['role'] } {
  return seam.kind === 'rental' ? { start: 'pickup', end: 'return' } : { start: 'departure', end: 'arrival' };
}

function terminalStop(
  seam: CarrierSeam,
  role: CarrierTerminal['role'],
  dayId: number,
  ownerIndex: number,
): RoadtripStop {
  // The callers only ask for an arrival or a return the seam has.
  const end = role === 'departure' || role === 'pickup' ? seam.departure : seam.arrival!;
  const checkIn = CHECK_IN_MINUTES[seam.type] ?? 0;
  const depart = parseClock(end.clock);
  // The departure terminal is pinned a check-in ahead of the timetable and left at the
  // timetable's minute; the arrival one is pinned at the timetable's minute and left at
  // once. Neither has a stay of its own. A hire car's desks are pinned at the booking's
  // own clock, and the drive goes on from them without a stay. The pin never goes past
  // midnight: a red-eye inside its allowance would otherwise read as the evening before,
  // and the chain would file every stop after it on the next day's card.
  const pinnedAt = role === 'departure' && depart !== null ? Math.max(0, depart - checkIn) : null;
  return {
    carrier: {
      reservationId: seam.reservationId,
      type: seam.type,
      role,
      title: seam.title,
      code: end.code,
      at: end.clock,
    },
    assignmentId: terminalAssignmentId(seam.reservationId, role),
    ownerDayId: dayId,
    ownerIndex,
    placeId: -seam.reservationId,
    name: end.name,
    lat: end.lat,
    lng: end.lng,
    time: pinnedAt === null ? end.clock : formatClock(pinnedAt),
    leaveAt: role === 'departure' ? end.clock : null,
    dwellMinutes: depart !== null && pinnedAt !== null ? depart - pinnedAt : 0,
    checkInTime: null,
    night: false,
    endDay: false,
    legMode: role === 'departure' ? seam.type : null,
    incomingLegMode: role === 'arrival' ? seam.type : null,
    stopType: null,
    fillPercent: null,
  };
}

/** Whether a terminal opens a day it has no timed stop before it on: an arrival or a pick-up. */
function opensTheDay(role: CarrierTerminal['role']): boolean {
  return role === 'arrival' || role === 'pickup';
}

/**
 * The day's stops with the terminals of its rides, and the desks of its hire cars, seated
 * among them.
 *
 * Each terminal takes the slot the day plan shows the booking in, worked out by the same
 * rules (`getMergedItems` in the client): a position somebody dragged it to wins, otherwise
 * it goes behind the last stop whose time is at or before its own, otherwise at the end,
 * and the whole list is then read in clock order. Only the terminal moves, though. The
 * stops keep the order they are stored in, which is the order the road trip has always
 * driven them in, and the terminal is slotted in behind the stop that precedes it in the
 * day plan's reading.
 *
 * A ride that leaves and lands on the same day seats its arrival right behind its
 * departure: nothing is visited in between. One that lands on a later day seats the
 * arrival on that day, where it opens the drive. A hire car's pick-up opens the day the
 * same way when nothing timed comes before it, and its return closes the day it is
 * handed back on; the two are seated on their own, because the drive itself runs
 * between them.
 *
 * `orderIndex` is each stop's stored `order_index`, which is what a dragged position is
 * measured against; `clockOf` its time in minutes, or null.
 */
export function seatCarrierStops(
  dayId: number,
  stops: RoadtripStop[],
  orderIndex: number[],
  seams: CarrierSeam[],
): RoadtripStop[] {
  const departing = seams.filter((s) => s.departure.dayId === dayId);
  // A ride landing on the day it left seats its arrival behind its departure below. A
  // hire car handed back on the day it was picked up has two desks with nothing tying
  // them together, so both are seated on their own.
  const arriving = seams.filter(
    (s) => s.arrival?.dayId === dayId && (s.departure.dayId !== dayId || s.kind === 'rental'),
  );
  if (!departing.length && !arriving.length) return stops;

  type Item =
    | { kind: 'stop'; index: number; key: number; minutes: number | null }
    | { kind: 'end'; seam: CarrierSeam; role: CarrierTerminal['role']; key: number; minutes: number | null };
  const base: Item[] = stops.map((stop, index) => ({
    kind: 'stop',
    index,
    key: orderIndex[index] ?? index,
    minutes: parseClock(stop.time ?? stop.checkInTime ?? null),
  }));
  const ends: { seam: CarrierSeam; role: CarrierTerminal['role']; end: CarrierEnd }[] = [
    ...departing.map((seam) => ({ seam, role: rolesOf(seam).start, end: seam.departure })),
    ...arriving.map((seam) => ({ seam, role: rolesOf(seam).end, end: seam.arrival! })),
  ];
  const items: Item[] = [...base];
  const lastKey = base.length ? Math.max(...base.map((b) => b.key)) : 0;
  const firstKey = base.length ? Math.min(...base.map((b) => b.key)) : 0;
  ends
    .map((e) => ({ ...e, minutes: parseClock(e.end.clock) }))
    .sort((a, b) => (a.minutes ?? 0) - (b.minutes ?? 0))
    .forEach((e, ti) => {
      let key = e.end.position;
      if (key === null) {
        const minutes = e.minutes ?? 0;
        let after = -Infinity;
        for (const item of items)
          if (item.minutes !== null && item.minutes <= minutes) after = Math.max(after, item.key);
        // With no timed stop ahead of it, a departure closes the day, the way the day plan
        // lists it. An arrival that landed overnight OPENS the day it lands on: the day
        // plan happens to file it last there too, but read as a drive that puts the
        // morning's stops on the road before the traveller has landed.
        const opens = opensTheDay(e.role);
        key =
          after === -Infinity
            ? opens
              ? firstKey - 0.5 - ti * 0.01
              : lastKey + 0.5 + ti * 0.01
            : after + 0.01 + ti * 0.001;
      }
      items.push({ kind: 'end', seam: e.seam, role: e.role, key, minutes: e.minutes });
    });
  items.sort((a, b) => a.key - b.key || (a.kind === 'stop' ? -1 : 1));
  // Untimed stops keep their place behind the timed item before them, as in the day plan.
  // An arrival opening the day is timed and first, so the untimed stops behind it follow
  // it rather than sorting ahead of it on a clock they never had.
  const read = chronoOrder(items, (item) => item.minutes);

  // Where each terminal lands: behind the stop before it in the day plan's reading, in
  // the stored order. Two terminals behind the same stop keep their reading order.
  const slots: { seam: CarrierSeam; role: CarrierTerminal['role']; after: number }[] = [];
  let lastStop = -1;
  for (const item of read) {
    if (item.kind === 'stop') lastStop = item.index;
    else slots.push({ seam: item.seam, role: item.role, after: lastStop });
  }
  const out: RoadtripStop[] = [];
  const emit = (slot: (typeof slots)[number]): void => {
    const insertAt = out.filter((s) => !s.carrier).length;
    out.push(terminalStop(slot.seam, slot.role, dayId, insertAt));
    if (slot.role === 'departure' && slot.seam.arrival?.dayId === dayId) {
      out.push(terminalStop(slot.seam, 'arrival', dayId, insertAt));
    }
  };
  for (const slot of slots.filter((s) => s.after < 0)) emit(slot);
  stops.forEach((stop, index) => {
    out.push(stop);
    for (const slot of slots.filter((s) => s.after === index)) emit(slot);
  });
  return out;
}

/**
 * The ride between a departure terminal and its arrival, in the shape of a routed leg.
 *
 * Its mode is the booking's type, so every reader that tells driving from walking tells
 * a ride apart the same way. No line and no distance: the map draws the booking's own
 * arc for it, and the line here is what the corridor and the via points measure along,
 * which a flight is not. The minutes are what the chain needs.
 */
export function carrierLeg(from: RoadtripStop, to: RoadtripStop, minutes: number | null): RoutedLeg {
  const seconds = (minutes ?? 0) * 60;
  const a: [number, number] = [from.lat, from.lng];
  const b: [number, number] = [to.lat, to.lng];
  const durationText = minutes === null ? '' : formatDurationShort(seconds);
  return {
    seg: {
      from: a,
      to: b,
      mid: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2],
      distance: 0,
      duration: seconds,
      mode: from.carrier?.type ?? to.carrier?.type ?? 'flight',
      distanceText: '',
      durationText,
      drivingText: durationText,
      walkingText: durationText,
    },
    line: [],
    vias: [],
  };
}

/**
 * The seams a run of stops asks for, when the run is a ride and not a road: one leg per
 * consecutive pair, each the ride between them. Null for a run that is a road.
 */
export function carrierLegsFor(
  run: RoadtripStop[],
  mode: string,
  dayDelta: (from: RoadtripStop, to: RoadtripStop) => number,
  key: (from: RoadtripStop, to: RoadtripStop) => string,
): Record<string, RoutedLeg> | null {
  if (!isCarrierMode(mode)) return null;
  const legs: Record<string, RoutedLeg> = {};
  for (let i = 0; i < run.length - 1; i++) {
    const from = run[i]!;
    const to = run[i + 1]!;
    const minutes = rideMinutes(parseClock(from.carrier?.at), parseClock(to.carrier?.at), dayDelta(from, to));
    legs[key(from, to)] = carrierLeg(from, to, minutes);
  }
  return legs;
}

/**
 * The via points shaping the drive that leaves a stop. None leave a terminal: a via is
 * filed by the position of a stored stop, and a terminal stands in for none, so the
 * points filed at its index belong to the stop that really has that index.
 */
export function viasLeaving<V extends { day_id: number; after_order_index: number; sequence: number }>(
  stop: Pick<RoadtripStop, 'carrier' | 'ownerDayId' | 'ownerIndex'>,
  vias: readonly V[],
): V[] {
  if (stop.carrier) return [];
  return vias
    .filter((v) => v.day_id === stop.ownerDayId && v.after_order_index === stop.ownerIndex)
    .sort((a, b) => a.sequence - b.sequence);
}

/**
 * The bookings whose ride the days draw, for the map to show their arcs beside the roads.
 * A hire car is left out: its line on the map is the road the drive already draws.
 */
export function carrierReservationIds(days: readonly { stops: readonly Pick<RoadtripStop, 'carrier'>[] }[]): number[] {
  const ids = new Set<number>();
  for (const day of days)
    for (const stop of day.stops)
      if (stop.carrier && isCarrierType(stop.carrier.type)) ids.add(stop.carrier.reservationId);
  return [...ids];
}

/** Whether a stop is where a hire car is picked up: the tank the drive goes on with is full. */
export function isPickupStop(stop: Pick<RoadtripStop, 'carrier'> | null | undefined): boolean {
  return stop?.carrier?.role === 'pickup';
}
