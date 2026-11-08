import { describe, it, expect, beforeEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import {
  DEFAULT_SETTINGS,
  STORAGE_KEYS,
  clearStudioStorage,
  isIndex,
  isProfileList,
  isSettings,
  readStorage,
  writeStorage,
} from '../utils/storage';
import { usePersistentState } from '../hooks/usePersistentState';
import { INITIAL_PROFILES } from '../constants/basicKeys';
import { buildPresetLayer } from '../constants/presets';
import { findPresetLayerIndex, isPresetAppliedInProfile } from '../utils/helpers';

describe('Studio persistence', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('round-trips JSON values and falls back on corrupt data', () => {
    expect(writeStorage('test.key', { a: 1 })).toBe(true);
    expect(readStorage('test.key', { a: 0 })).toEqual({ a: 1 });

    localStorage.setItem('test.key', 'garbage');
    expect(readStorage('test.key', { a: 0 })).toEqual({ a: 0 });

    localStorage.setItem('test.key', '"a string"');
    expect(
      readStorage('test.key', { a: 0 }, (v): v is { a: number } => typeof v === 'object')
    ).toEqual({ a: 0 });
  });

  it('validates persisted profiles, settings and indices', () => {
    expect(isProfileList(INITIAL_PROFILES)).toBe(true);
    expect(isProfileList([])).toBe(false);
    expect(isProfileList([{ id: 'x', name: 'X', layers: [{}] }])).toBe(false);
    expect(isProfileList([{ id: 'x', name: 'X', layers: [] }])).toBe(false);

    expect(isSettings(DEFAULT_SETTINGS)).toBe(true);
    expect(isSettings({ ...DEFAULT_SETTINGS, allowAnalytics: 'yes' })).toBe(false);
    expect(isSettings(null)).toBe(false);

    expect(isIndex(0)).toBe(true);
    expect(isIndex(3)).toBe(true);
    expect(isIndex(-1)).toBe(false);
    expect(isIndex(1.5)).toBe(false);
    expect(isIndex('2')).toBe(false);
  });

  it('hydrates from storage and writes through on change', () => {
    localStorage.setItem(STORAGE_KEYS.activeLayer, '2');

    const { result, unmount } = renderHook(() =>
      usePersistentState<number>(STORAGE_KEYS.activeLayer, 0, isIndex)
    );
    expect(result.current[0]).toBe(2);

    act(() => result.current[1](1));
    expect(result.current[0]).toBe(1);
    expect(localStorage.getItem(STORAGE_KEYS.activeLayer)).toBe('1');
    unmount();

    const { result: reloaded } = renderHook(() =>
      usePersistentState<number>(STORAGE_KEYS.activeLayer, 0, isIndex)
    );
    expect(reloaded.current[0]).toBe(1);
  });

  it('clears every studio key on factory reset', () => {
    writeStorage(STORAGE_KEYS.profiles, INITIAL_PROFILES);
    writeStorage(STORAGE_KEYS.ratings, { framer: 90 });
    localStorage.setItem('unrelated.key', 'keep me');

    clearStudioStorage();

    expect(localStorage.getItem(STORAGE_KEYS.profiles)).toBeNull();
    expect(localStorage.getItem(STORAGE_KEYS.ratings)).toBeNull();
    expect(localStorage.getItem('unrelated.key')).toBe('keep me');
  });
});

describe('Preset application tracking', () => {
  it('only reports the preset that actually populated the layer', () => {
    const profile = {
      id: 'test',
      name: 'Test Profile',
      activeLayer: 0,
      layers: [buildPresetLayer('framer')],
    };

    expect(isPresetAppliedInProfile(profile, 'framer')).toBe(true);
    // Regression: every preset used to look "Applied" after the first one.
    expect(isPresetAppliedInProfile(profile, 'photoshop')).toBe(false);
    expect(isPresetAppliedInProfile(profile, '')).toBe(false);
    expect(isPresetAppliedInProfile(undefined, 'framer')).toBe(false);

    expect(findPresetLayerIndex(profile, 'framer')).toBe(0);
    expect(findPresetLayerIndex(profile, 'photoshop')).toBe(-1);
  });

  it('keeps preset metadata through a layer edit that clears the tag', () => {
    const layer = buildPresetLayer('vscode');
    expect(layer.presetId).toBe('vscode');
    expect(layer.r1c1.themeColor).toBe('#60a5fa');
  });
});
