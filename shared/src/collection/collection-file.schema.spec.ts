import {
  COLLECTION_GPX_PLACE_FIELDS,
  MAX_COLLECTION_FILE_BYTES,
  collectionFilePlaceSchema,
  collectionGpxReadRequestSchema,
} from './collection-file.schema';

import { describe, expect, it } from 'vitest';

describe('COLLECTION_GPX_PLACE_FIELDS (#2301)', () => {
  // The type already refuses a missing key; this is the same promise at runtime,
  // for a field that reaches the schema through a spread the type cannot see.
  it('gives every field of a place in a list file a home in a GPX waypoint', () => {
    const fields = Object.keys(COLLECTION_GPX_PLACE_FIELDS).sort();
    expect(fields).toEqual(Object.keys(collectionFilePlaceSchema.shape).sort());
  });

  it('keeps what GPX has an element for out of the extension', () => {
    const native = Object.entries(COLLECTION_GPX_PLACE_FIELDS)
      .filter(([, home]) => home === 'waypoint')
      .map(([field]) => field);
    expect(native.sort()).toEqual(['category', 'description', 'lat', 'lng', 'name', 'notes', 'website']);
  });
});

describe('collectionGpxReadRequestSchema (#2301)', () => {
  const accepts = (body: unknown) => collectionGpxReadRequestSchema.safeParse(body).success;

  it('takes the document as text, with the file name optional', () => {
    expect(collectionGpxReadRequestSchema.parse({ gpx: '<gpx/>' })).toEqual({ gpx: '<gpx/>' });
    const named = collectionGpxReadRequestSchema.parse({ gpx: '<gpx/>', file_name: 'favourites.gpx' });
    expect(named.file_name).toBe('favourites.gpx');
  });

  it('refuses an empty document and one past the size a list file may have', () => {
    expect(accepts({ gpx: '' })).toBe(false);
    expect(accepts({ gpx: 'x'.repeat(MAX_COLLECTION_FILE_BYTES + 1) })).toBe(false);
  });

  it('refuses anything that is not text', () => {
    expect(accepts({ gpx: { wpt: [] } })).toBe(false);
    expect(accepts({})).toBe(false);
  });
});
