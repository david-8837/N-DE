import { describe, it, expect, afterEach, vi } from 'vitest';
import {
  desktopPlatform,
  isDesktopApp,
  notifyDeviceEvent,
  pushRuntimePolicy,
  readLaunchAtStartup,
  reportDiagnostic,
  writeLaunchAtStartup,
} from '../utils/desktop';

afterEach(() => {
  delete window.electronAPI;
  vi.restoreAllMocks();
});

describe('Desktop bridge', () => {
  it('degrades to safe no-ops in the browser', async () => {
    expect(isDesktopApp()).toBe(false);
    expect(desktopPlatform()).toBeNull();
    await expect(readLaunchAtStartup()).resolves.toBeNull();
    await expect(writeLaunchAtStartup(true)).resolves.toMatchObject({
      success: false,
      supported: false,
    });
    await expect(notifyDeviceEvent(true)).resolves.toEqual({ success: false });
    await expect(reportDiagnostic({ message: 'boom' })).resolves.toEqual({ success: false });
  });

  it('forwards the runtime policy and launch preference to the bridge', async () => {
    const setRuntimePolicy = vi.fn(async (policy) => ({ success: true, policy }));
    const setLaunchAtStartup = vi.fn(async (enabled: boolean) => ({
      success: true,
      supported: true,
      enabled,
    }));
    const notifyDeviceEventSpy = vi.fn(async () => ({ success: true }));
    const reportDiagnosticSpy = vi.fn(async () => ({ success: true }));

    window.electronAPI = {
      isElectron: true,
      platform: 'win32',
      setRuntimePolicy,
      setLaunchAtStartup,
      getLaunchAtStartup: async () => ({ supported: true, enabled: true }),
      notifyDeviceEvent: notifyDeviceEventSpy,
      reportDiagnostic: reportDiagnosticSpy,
    } as unknown as Window['electronAPI'];

    expect(isDesktopApp()).toBe(true);
    expect(desktopPlatform()).toBe('win32');

    const policy = { allowTerminal: true, allowNotifications: false, allowAnalytics: false };
    await expect(pushRuntimePolicy(policy)).resolves.toEqual({ success: true, policy });
    expect(setRuntimePolicy).toHaveBeenCalledWith(policy);

    await expect(writeLaunchAtStartup(true)).resolves.toMatchObject({ success: true, enabled: true });
    await expect(readLaunchAtStartup()).resolves.toEqual({ supported: true, enabled: true });

    await notifyDeviceEvent(true, 'RP2040-Zero');
    expect(notifyDeviceEventSpy).toHaveBeenCalledWith({
      connected: true,
      device: 'RP2040-Zero',
    });

    await reportDiagnostic({ message: 'boom', stack: 'trace' });
    expect(reportDiagnosticSpy).toHaveBeenCalledWith({ message: 'boom', stack: 'trace' });
  });

  it('survives a bridge that throws', async () => {
    window.electronAPI = {
      isElectron: true,
      setRuntimePolicy: async () => {
        throw new Error('ipc down');
      },
      setLaunchAtStartup: async () => {
        throw new Error('ipc down');
      },
      notifyDeviceEvent: async () => {
        throw new Error('ipc down');
      },
      reportDiagnostic: async () => {
        throw new Error('ipc down');
      },
    } as unknown as Window['electronAPI'];

    await expect(
      pushRuntimePolicy({ allowTerminal: false, allowNotifications: true, allowAnalytics: false })
    ).resolves.toMatchObject({ success: false });
    await expect(writeLaunchAtStartup(false)).resolves.toMatchObject({
      success: false,
      error: 'ipc down',
    });
    await expect(notifyDeviceEvent(false)).resolves.toEqual({ success: false });
    await expect(reportDiagnostic({ message: 'x' })).resolves.toEqual({ success: false });
  });
});
