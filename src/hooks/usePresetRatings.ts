import { useCallback, useEffect, useState } from 'react';
import {
  PresetRatings,
  applyRating,
  averageRating,
  loadRatings,
  removeRating,
  saveRatings,
} from '../utils/ratings';
import { STORAGE_KEYS } from '../utils/storage';

export function usePresetRatings() {
  const [ratings, setRatings] = useState<PresetRatings>(() => loadRatings());

  useEffect(() => {
    saveRatings(ratings);
  }, [ratings]);

  // Keep a second window/tab of the studio in sync.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEYS.ratings) setRatings(loadRatings());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const ratePreset = useCallback((presetId: string, score: number) => {
    setRatings((prev) => applyRating(prev, presetId, score));
  }, []);

  const clearPresetRating = useCallback((presetId: string) => {
    setRatings((prev) => removeRating(prev, presetId));
  }, []);

  const clearAllRatings = useCallback(() => {
    setRatings({});
  }, []);

  const getRating = useCallback(
    (presetId: string): number | null => ratings[presetId] ?? null,
    [ratings]
  );

  const values = Object.values(ratings);

  return {
    ratings,
    ratePreset,
    clearPresetRating,
    clearAllRatings,
    getRating,
    ratedCount: values.length,
    averageScore: averageRating(values),
  };
}
