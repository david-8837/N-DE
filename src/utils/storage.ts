import { ProfileData } from '../types';
import { KEY_SLOTS } from '../constants/slots';

const PREFIX = 'node.grid-macro-1.v1';

export const STORAGE_KEYS = {
  profiles: `${PREFIX}.profiles`,
  activeProfile: `${PREFIX}.activeProfile`,
  activeLayer: `${PREFIX}.activeLayer`,
  layerNames: `${PREFIX}.layerNames`,
  settings: `${PREFIX}.settings`,
  ratings: `${PREFIX}.ratings`,
} as const;

function storage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    return window.localStorage;
  } catch {
    // Private mode / blocked storage still has to render the app.
    return null;
  }
}

export function readStorage<T>(
  key: string,
  fallback: T,
  validate?: (value: unknown) => value is T
): T {
  const store = storage();
  if (!store) return fallback;
  try {
    const raw = store.getItem(key);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (validate && !validate(parsed)) return fallback;
    return parsed as T;
  } catch {
    return fallback;
  }
}

export function writeStorage(key: string, value: unknown): boolean {
  const store = storage();
  if (!store) return false;
  try {
    store.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeStorage(key: string): void {
  const store = storage();
  if (!store) return;
  try {
    store.removeItem(key);
  } catch {
    /* ignore */
  }
}

/** Wipes every key this studio owns (used by "Reset to factory defaults"). */
export function clearStudioStorage(): void {
  const store = storage();
  if (!store) return;
  for (const key of Object.values(STORAGE_KEYS)) removeStorage(key);
}

/* ------------------------------- validators ------------------------------ */

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isProfileData(value: unknown): value is ProfileData {
  if (!isObject(value)) return false;
  if (typeof value.id !== 'string' || typeof value.name !== 'string') return false;
  if (!Array.isArray(value.layers) || value.layers.length === 0) return false;
  return value.layers.every((layer) => {
    if (!isObject(layer)) return false;
    // Every layer must at least describe all nine matrix slots.
    return KEY_SLOTS.every((slot) => isObject(layer[slot]));
  });
}

export function isProfileList(value: unknown): value is ProfileData[] {
  return Array.isArray(value) && value.length > 0 && value.every(isProfileData);
}

export function isIndex(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0;
}

export function isStringRecord(value: unknown): value is Record<string, string> {
  return isObject(value) && Object.values(value).every((v) => typeof v === 'string');
}

export interface PersistedSettings {
  allowAnalytics: boolean;
  launchAtStartup: boolean;
  allowTerminalSmartActions: boolean;
  allowDeviceNotifications: boolean;
}

export const DEFAULT_SETTINGS: PersistedSettings = {
  allowAnalytics: false,
  launchAtStartup: false,
  allowTerminalSmartActions: true,
  allowDeviceNotifications: true,
};

export function isSettings(value: unknown): value is PersistedSettings {
  if (!isObject(value)) return false;
  return Object.keys(DEFAULT_SETTINGS).every((k) => typeof value[k] === 'boolean');
}
