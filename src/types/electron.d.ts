export interface RuntimePolicy {
  allowTerminal: boolean;
  allowNotifications: boolean;
  allowAnalytics: boolean;
}

export interface LaunchAtStartupState {
  supported: boolean;
  enabled: boolean;
}

export interface ElectronAPI {
  isElectron?: boolean;
  platform?: string;
  minimize: () => Promise<void>;
  maximize: () => Promise<void>;
  close: () => Promise<void>;
  isMaximized: () => Promise<boolean>;
  getVersion: () => Promise<string | null>;
  detectRp2040Bootloader: () => Promise<{
    detected: boolean;
    drivePath?: string;
    volumeLabel?: string;
    info?: string;
  }>;
  flashUf2Firmware: (payload?: {
    drivePath?: string;
    firmwareType?: 'qmk' | 'circuitpy' | 'arduino' | string;
    customUf2Base64?: string;
  }) => Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  executeSmartAction: (payload: { type: string; value: string }) => Promise<{
    success: boolean;
    message?: string;
    error?: string;
  }>;
  setRuntimePolicy: (policy: RuntimePolicy) => Promise<{
    success: boolean;
    policy?: RuntimePolicy;
  }>;
  setLaunchAtStartup: (enabled: boolean) => Promise<{
    success: boolean;
    supported: boolean;
    enabled?: boolean;
    error?: string;
  }>;
  getLaunchAtStartup: () => Promise<LaunchAtStartupState>;
  notifyDeviceEvent: (payload: { connected: boolean; device?: string }) => Promise<{
    success: boolean;
    suppressed?: boolean;
    unsupported?: boolean;
  }>;
  reportDiagnostic: (payload: { message: string; stack?: string }) => Promise<{
    success: boolean;
    suppressed?: boolean;
    path?: string;
  }>;
  onHardwareSync: (callback: () => void) => void;
  onOpenHardwareModal: (callback: () => void) => void;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}
