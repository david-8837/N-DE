import { STORAGE_KEYS, readStorage, writeStorage } from './storage';

export const RATING_MIN = 1;
export const RATING_MAX = 100;

/** presetId -> personal score (integer, 1..100). */
export type PresetRatings = Record<string, number>;

export function clampScore(value: number): number {
  if (!Number.isFinite(value)) return RATING_MIN;
  return Math.min(RATING_MAX, Math.max(RATING_MIN, Math.round(value)));
}

export function isValidScore(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    value >= RATING_MIN &&
    value <= RATING_MAX
  );
}

/** Drops unknown/corrupt entries instead of trusting whatever is on disk. */
export function sanitizeRatings(value: unknown): PresetRatings {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return {};
  const clean: PresetRatings = {};
  for (const [presetId, score] of Object.entries(value as Record<string, unknown>)) {
    if (presetId && isValidScore(score)) clean[presetId] = score;
  }
  return clean;
}

export function ratingLabel(score: number | null | undefined): string {
  if (!isValidScore(score)) return 'Unrated';
  if (score <= 20) return 'Needs work';
  if (score <= 40) return 'Rough';
  if (score <= 60) return 'Decent';
  if (score <= 80) return 'Solid';
  if (score <= 90) return 'Great';
  return 'Outstanding';
}

/** Mean of the supplied scores, rounded to one decimal. Null when empty. */
export function averageRating(scores: number[]): number | null {
  const valid = scores.filter(isValidScore);
  if (valid.length === 0) return null;
  const mean = valid.reduce((sum, n) => sum + n, 0) / valid.length;
  return Math.round(mean * 10) / 10;
}

export function applyRating(ratings: PresetRatings, presetId: string, score: number): PresetRatings {
  if (!presetId) return ratings;
  return { ...ratings, [presetId]: clampScore(score) };
}

export function removeRating(ratings: PresetRatings, presetId: string): PresetRatings {
  if (!(presetId in ratings)) return ratings;
  const next = { ...ratings };
  delete next[presetId];
  return next;
}

/**
 * Highest-rated first. Unrated presets keep their curated order at the end so
 * the library never looks shuffled before the user has rated anything.
 */
export function rankPresetsByRating<T extends { id: string }>(
  presets: T[],
  ratings: PresetRatings
): T[] {
  return presets
    .map((preset, index) => ({ preset, index, score: ratings[preset.id] }))
    .sort((a, b) => {
      const aRated = isValidScore(a.score);
      const bRated = isValidScore(b.score);
      if (aRated && bRated) return b.score! - a.score! || a.index - b.index;
      if (aRated) return -1;
      if (bRated) return 1;
      return a.index - b.index;
    })
    .map((entry) => entry.preset);
}

export function loadRatings(): PresetRatings {
  return sanitizeRatings(readStorage<unknown>(STORAGE_KEYS.ratings, {}));
}

export function saveRatings(ratings: PresetRatings): boolean {
  return writeStorage(STORAGE_KEYS.ratings, ratings);
}
