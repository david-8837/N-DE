import { describe, it, expect, beforeEach } from 'vitest';
import {
  RATING_MAX,
  RATING_MIN,
  applyRating,
  averageRating,
  clampScore,
  isValidScore,
  loadRatings,
  rankPresetsByRating,
  ratingLabel,
  removeRating,
  sanitizeRatings,
  saveRatings,
} from '../utils/ratings';
import { STORAGE_KEYS } from '../utils/storage';

const preset = (id: string) => ({ id });

describe('Rating helpers', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('clamps scores into the 1-100 range', () => {
    expect(clampScore(-20)).toBe(RATING_MIN);
    expect(clampScore(0)).toBe(RATING_MIN);
    expect(clampScore(100)).toBe(RATING_MAX);
    expect(clampScore(640)).toBe(RATING_MAX);
    expect(clampScore(87.4)).toBe(87);
    expect(clampScore(87.6)).toBe(88);
    expect(clampScore(Number.NaN)).toBe(RATING_MIN);
  });

  it('only accepts integers inside the range', () => {
    expect(isValidScore(1)).toBe(true);
    expect(isValidScore(100)).toBe(true);
    expect(isValidScore(0)).toBe(false);
    expect(isValidScore(101)).toBe(false);
    expect(isValidScore(50.5)).toBe(false);
    expect(isValidScore('50')).toBe(false);
    expect(isValidScore(null)).toBe(false);
  });

  it('maps scores to readable labels at the boundaries', () => {
    expect(ratingLabel(null)).toBe('Unrated');
    expect(ratingLabel(1)).toBe('Needs work');
    expect(ratingLabel(20)).toBe('Needs work');
    expect(ratingLabel(21)).toBe('Rough');
    expect(ratingLabel(41)).toBe('Decent');
    expect(ratingLabel(61)).toBe('Solid');
    expect(ratingLabel(81)).toBe('Great');
    expect(ratingLabel(91)).toBe('Outstanding');
    expect(ratingLabel(100)).toBe('Outstanding');
  });

  it('averages valid scores only, to one decimal', () => {
    expect(averageRating([])).toBeNull();
    expect(averageRating([50, 100])).toBe(75);
    expect(averageRating([33, 66, 100])).toBe(66.3);
    // 0 and 101 are invalid and must not drag the mean down/up.
    expect(averageRating([50, 0, 101])).toBe(50);
  });

  it('applies and removes ratings without mutating the input', () => {
    const original = { framer: 80 };
    const rated = applyRating(original, 'photoshop', 300);
    expect(rated).toEqual({ framer: 80, photoshop: 100 });
    expect(original).toEqual({ framer: 80 });

    const cleared = removeRating(rated, 'framer');
    expect(cleared).toEqual({ photoshop: 100 });
    expect(rated).toEqual({ framer: 80, photoshop: 100 });
    expect(removeRating(cleared, 'missing')).toEqual({ photoshop: 100 });
  });

  it('drops corrupt entries when sanitizing', () => {
    expect(sanitizeRatings(null)).toEqual({});
    expect(sanitizeRatings([1, 2, 3])).toEqual({});
    expect(
      sanitizeRatings({ framer: 90, photoshop: 0, premiere: '77', vscode: 101, figma: 42.5 })
    ).toEqual({ framer: 90 });
    expect(sanitizeRatings({ framer: 90, vscode: 78 })).toEqual({ framer: 90, vscode: 78 });
  });

  it('ranks rated presets first and keeps curated order as a tie-breaker', () => {
    const presets = [preset('a'), preset('b'), preset('c'), preset('d')];
    const ranked = rankPresetsByRating(presets, { c: 90, b: 40 });
    expect(ranked.map((p) => p.id)).toEqual(['c', 'b', 'a', 'd']);

    const tied = rankPresetsByRating(presets, { d: 70, a: 70 });
    expect(tied.map((p) => p.id)).toEqual(['a', 'd', 'b', 'c']);
  });

  it('persists ratings and survives a reload', () => {
    expect(saveRatings({ framer: 91, photoshop: 64 })).toBe(true);
    expect(loadRatings()).toEqual({ framer: 91, photoshop: 64 });

    localStorage.setItem(STORAGE_KEYS.ratings, '{not json');
    expect(loadRatings()).toEqual({});

    localStorage.setItem(STORAGE_KEYS.ratings, JSON.stringify({ framer: 5000 }));
    expect(loadRatings()).toEqual({});
  });
});
