export interface ElectronAPI {
  isElectron?: boolean;
  platform?: string;
  minimize: () => Promise<void>;
  maximize: () => Promise<void>;
  close: () => Promise<void>;
  isMaximized: () => Promise<boolean>;
  getVersion: () => Promise<string>;
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
  onHardwareSync: (callback: () => void) => void;
  onOpenHardwareModal: (callback: () => void) => void;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

