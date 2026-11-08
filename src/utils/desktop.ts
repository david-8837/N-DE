import type { LaunchAtStartupState, RuntimePolicy } from '../types/electron';

/**
 * Thin, defensive wrapper around the preload bridge.
 * Everything degrades to a no-op in the browser build, so callers never have to
 * branch on `window.electronAPI`.
 */
function bridge(): Partial<NonNullable<Window['electronAPI']>> | null {
  if (typeof window === 'undefined') return null;
  return window.electronAPI ?? null;
}

export function isDesktopApp(): boolean {
  return !!bridge()?.isElectron;
}

export function desktopPlatform(): string | null {
  return bridge()?.platform ?? null;
}

/** Pushes the user's preferences to the main process, which enforces them. */
export async function pushRuntimePolicy(
  policy: RuntimePolicy
): Promise<{ success: boolean; policy?: RuntimePolicy }> {
  const api = bridge();
  if (!api?.setRuntimePolicy) return { success: false, policy };
  try {
    return await api.setRuntimePolicy(policy);
  } catch {
    return { success: false, policy };
  }
}

export async function readLaunchAtStartup(): Promise<LaunchAtStartupState | null> {
  const api = bridge();
  if (!api?.getLaunchAtStartup) return null;
  try {
    return await api.getLaunchAtStartup();
  } catch {
    return null;
  }
}

export async function writeLaunchAtStartup(enabled: boolean): Promise<{
  success: boolean;
  supported: boolean;
  error?: string;
}> {
  const api = bridge();
  if (!api?.setLaunchAtStartup) {
    return { success: false, supported: false, error: 'Desktop app required' };
  }
  try {
    return await api.setLaunchAtStartup(enabled);
  } catch (error) {
    return {
      success: false,
      supported: true,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function notifyDeviceEvent(
  connected: boolean,
  device?: string
): Promise<{ success: boolean; suppressed?: boolean }> {
  const api = bridge();
  if (!api?.notifyDeviceEvent) return { success: false };
  try {
    return await api.notifyDeviceEvent({ connected, device });
  } catch {
    return { success: false };
  }
}

export async function reportDiagnostic(payload: {
  message: string;
  stack?: string;
}): Promise<{ success: boolean; suppressed?: boolean }> {
  const api = bridge();
  if (!api?.reportDiagnostic) return { success: false };
  try {
    return await api.reportDiagnostic(payload);
  } catch {
    return { success: false };
  }
}
