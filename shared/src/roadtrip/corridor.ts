import type { RoadtripStop } from './planning-types';

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Bbox {
  south: number;
  west: number;
  north: number;
  east: number;
}

const EARTH_RADIUS_KM = 6371;
const KM_PER_DEG_LAT = 111.32;

const toRad = (deg: number): number => (deg * Math.PI) / 180;

export function haversineKm(a: LatLng, b: LatLng): number {
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

export function distanceToSegmentKm(p: LatLng, a: LatLng, b: LatLng): number {
  return projectOnSegment(p, a, b).distanceKm;
}

const DEGENERATE_SEGMENT_KM2 = 1e-12;

export function projectOnSegment(p: LatLng, a: LatLng, b: LatLng): { distanceKm: number; t: number } {
  const latScale = KM_PER_DEG_LAT;
  const lngScale = KM_PER_DEG_LAT * Math.cos(toRad((a.lat + b.lat) / 2));
  const ax = a.lng * lngScale;
  const ay = a.lat * latScale;
  const bx = b.lng * lngScale;
  const by = b.lat * latScale;
  const px = p.lng * lngScale;
  const py = p.lat * latScale;
  const dx = bx - ax;
  const dy = by - ay;
  const lenSq = dx * dx + dy * dy;

  if (lenSq < DEGENERATE_SEGMENT_KM2) return { distanceKm: haversineKm(p, a), t: 0 };

  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq));
  const cx = ax + t * dx;
  const cy = ay + t * dy;
  return { distanceKm: Math.hypot(px - cx, py - cy), t };
}

export interface CorridorHit {
  offRouteKm: number;

  alongKm: number;
}

export function projectOntoRoute(p: LatLng, line: LatLng[]): CorridorHit | null {
  if (line.length < 2) return null;
  let best = Number.POSITIVE_INFINITY;
  let bestAlong = 0;
  let travelled = 0;
  for (let i = 0; i < line.length - 1; i++) {
    const a = line[i]!;
    const b = line[i + 1]!;
    const segment = haversineKm(a, b);
    const { distanceKm: d, t } = projectOnSegment(p, a, b);
    if (d < best) {
      best = d;
      bestAlong = travelled + t * segment;
    }
    travelled += segment;
  }
  return { offRouteKm: best, alongKm: bestAlong };
}

function densify(line: LatLng[], maxStepDeg: number): LatLng[] {
  if (line.length < 2) return line;
  const out: LatLng[] = [line[0]!];
  for (let i = 1; i < line.length; i++) {
    const a = line[i - 1]!;
    const b = line[i]!;
    const span = Math.max(Math.abs(b.lat - a.lat), Math.abs(b.lng - a.lng));
    const steps = Math.max(1, Math.ceil(span / maxStepDeg));
    for (let s = 1; s <= steps; s++) {
      out.push({
        lat: a.lat + ((b.lat - a.lat) * s) / steps,
        lng: a.lng + ((b.lng - a.lng) * s) / steps,
      });
    }
  }
  return out;
}

export function corridorTiles(line: LatLng[], widthKm: number, maxSpanDeg = 0.45): Bbox[] {
  if (line.length === 0) return [];
  const padLat = widthKm / KM_PER_DEG_LAT;
  const tiles: Bbox[] = [];
  let current: Bbox | null = null;

  const padded = (b: Bbox): Bbox => {
    const midLat = (b.north + b.south) / 2;
    const padLng = padLat / Math.max(0.2, Math.cos(toRad(midLat)));
    return {
      south: b.south - padLat,
      north: b.north + padLat,
      west: b.west - padLng,
      east: b.east + padLng,
    };
  };

  let previous: LatLng | null = null;

  for (const p of densify(line, maxSpanDeg / 2)) {
    if (!current) {
      current = { south: p.lat, north: p.lat, west: p.lng, east: p.lng };
      previous = p;
      continue;
    }
    const next: Bbox = {
      south: Math.min(current.south, p.lat),
      north: Math.max(current.north, p.lat),
      west: Math.min(current.west, p.lng),
      east: Math.max(current.east, p.lng),
    };
    const grown = padded(next);
    if (grown.north - grown.south > maxSpanDeg || grown.east - grown.west > maxSpanDeg) {
      tiles.push(padded(current));
      const from = previous ?? p;
      current = {
        south: Math.min(from.lat, p.lat),
        north: Math.max(from.lat, p.lat),
        west: Math.min(from.lng, p.lng),
        east: Math.max(from.lng, p.lng),
      };
    } else {
      current = next;
    }
    previous = p;
  }
  if (current) tiles.push(padded(current));
  return tiles;
}

export function simplifyLine(line: LatLng[], toleranceKm: number): LatLng[] {
  if (line.length < 3) return line.slice();
  let maxDist = 0;
  let index = 0;
  const first = line[0]!;
  const last = line[line.length - 1]!;
  for (let i = 1; i < line.length - 1; i++) {
    const d = distanceToSegmentKm(line[i]!, first, last);
    if (d > maxDist) {
      maxDist = d;
      index = i;
    }
  }
  if (maxDist <= toleranceKm) return [first, last];
  const left = simplifyLine(line.slice(0, index + 1), toleranceKm);
  const right = simplifyLine(line.slice(index), toleranceKm);
  return [...left.slice(0, -1), ...right];
}

export function pointAtMeters(line: LatLng[], metres: number): LatLng | null {
  if (!line.length) return null;
  if (line.length === 1 || metres <= 0) return line[0]!;

  let covered = 0;
  for (let i = 1; i < line.length; i++) {
    const step = haversineKm(line[i - 1]!, line[i]!) * 1000;
    if (covered + step >= metres) {
      const t = step > 0 ? (metres - covered) / step : 0;
      return {
        lat: line[i - 1]!.lat + (line[i]!.lat - line[i - 1]!.lat) * t,
        lng: line[i - 1]!.lng + (line[i]!.lng - line[i - 1]!.lng) * t,
      };
    }
    covered += step;
  }
  return line[line.length - 1]!;
}

export function lineMetres(line: LatLng[]): number {
  let total = 0;
  for (let i = 1; i < line.length; i++) total += haversineKm(line[i - 1]!, line[i]!) * 1000;
  return total;
}

export function sliceAtMeters(line: LatLng[], fromMetres: number, toMetres: number): LatLng[] {
  if (line.length < 2 || toMetres <= fromMetres) return [];
  const from = Math.max(0, fromMetres);
  const out: LatLng[] = [];
  let covered = 0;
  for (let i = 1; i < line.length; i++) {
    const step = haversineKm(line[i - 1]!, line[i]!) * 1000;
    const segStart = covered;
    const segEnd = covered + step;
    covered = segEnd;
    if (segEnd < from) continue;
    if (segStart > toMetres) break;

    const at = (m: number): LatLng => {
      const t = step > 0 ? (m - segStart) / step : 0;
      return {
        lat: line[i - 1]!.lat + (line[i]!.lat - line[i - 1]!.lat) * t,
        lng: line[i - 1]!.lng + (line[i]!.lng - line[i - 1]!.lng) * t,
      };
    };
    if (!out.length) out.push(segStart >= from ? line[i - 1]! : at(from));
    out.push(segEnd <= toMetres ? line[i]! : at(toMetres));
  }
  return out.length > 1 ? out : [];
}

export function boxAround(point: LatLng, radiusKm: number): Bbox {
  const dLat = radiusKm / KM_PER_DEG_LAT;
  const dLng = radiusKm / (KM_PER_DEG_LAT * Math.max(0.01, Math.cos(toRad(point.lat))));
  return {
    south: point.lat - dLat,
    west: point.lng - dLng,
    north: point.lat + dLat,
    east: point.lng + dLng,
  };
}

/** A stretch of the spine, in kilometres along it. */
export interface KmRange {
  fromKm: number;
  toKm: number;
}

/** A ride among a day's stops: the departure terminal, at `index`, and the arrival it jumps to. */
export interface RideGap {
  index: number;
  from: LatLng;
  to: LatLng;
}

/**
 * The rides on a day (#2428): each departure terminal followed by the arrival of the same
 * booking. The line runs straight from the one to the other there, and the car is not on
 * it, so a corridor search leaves the stretch out and drops what it finds under it.
 */
export function rideGaps(stops: readonly Pick<RoadtripStop, 'carrier' | 'lat' | 'lng'>[]): RideGap[] {
  const out: RideGap[] = [];
  stops.forEach((stop, i) => {
    const next = stops[i + 1];
    if (stop.carrier?.role === 'departure' && next?.carrier?.reservationId === stop.carrier.reservationId) {
      out.push({ index: i, from: { lat: stop.lat, lng: stop.lng }, to: { lat: next.lat, lng: next.lng } });
    }
  });
  return out;
}

/**
 * The ridden stretches as kilometres along the spine, in order. A ride whose two ends
 * land on the same point of the spine, or that has no spine to be measured against, is
 * no stretch. A terminal well off the line still projects onto its nearest point, so a
 * ride is never dropped for standing away from the road.
 */
export function riddenRanges(spine: LatLng[], gaps: readonly { from: LatLng; to: LatLng }[]): KmRange[] {
  const out: KmRange[] = [];
  for (const gap of gaps) {
    const a = projectOntoRoute(gap.from, spine)?.alongKm;
    const b = projectOntoRoute(gap.to, spine)?.alongKm;
    if (a === undefined || b === undefined) continue;
    const range = { fromKm: Math.min(a, b), toKm: Math.max(a, b) };
    if (range.toKm > range.fromKm) out.push(range);
  }
  return out.sort((a, b) => a.fromKm - b.fromKm);
}

// The terminals themselves stand at the ends of a ride and stay on the road.
const TERMINAL_SLACK_KM = 0.05;

export function inRiddenRange(ridden: readonly KmRange[], alongKm: number): boolean {
  return ridden.some((r) => alongKm > r.fromKm + TERMINAL_SLACK_KM && alongKm < r.toKm - TERMINAL_SLACK_KM);
}

/**
 * The spine cut into the pieces the car drives: the window, or the whole line, with every
 * ridden stretch left out. Only the pieces to tile are cut, never the spine itself: every
 * alongKm is a distance along the spine, and cutting that would renumber every hit and
 * every stop the moment a window moved.
 */
export function drivenPieces(spine: LatLng[], ridden: readonly KmRange[], window?: KmRange | null): LatLng[][] {
  const start = window?.fromKm ?? 0;
  const end = window?.toKm ?? Number.POSITIVE_INFINITY;
  const slice = (fromKm: number, toKm: number): LatLng[] =>
    sliceAtMeters(spine, fromKm * 1000, Number.isFinite(toKm) ? toKm * 1000 : Number.MAX_SAFE_INTEGER);
  const pieces: LatLng[][] = [];
  if (!ridden.length) {
    pieces.push(window ? slice(start, end) : spine);
  } else {
    let cursor = start;
    for (const range of ridden) {
      if (range.fromKm >= end) break;
      if (range.fromKm > cursor) pieces.push(slice(cursor, range.fromKm));
      cursor = Math.max(cursor, range.toKm);
    }
    if (cursor < end) pieces.push(slice(cursor, end));
  }
  return pieces.filter((piece) => piece.length > 1);
}
