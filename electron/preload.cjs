// electron/preload.cjs - Safe IPC Bridge for Windows Desktop App
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  isElectron: true,
  platform: process.platform,
  minimize: () => ipcRenderer.invoke('window-minimize'),
  maximize: () => ipcRenderer.invoke('window-maximize'),
  close: () => ipcRenderer.invoke('window-close'),
  isMaximized: () => ipcRenderer.invoke('window-is-maximized'),
  getVersion: () => ipcRenderer.invoke('get-app-version'),
  detectRp2040Bootloader: () => ipcRenderer.invoke('detect-rp2040-bootloader'),
  flashUf2Firmware: (payload) => ipcRenderer.invoke('flash-uf2-firmware', payload),
  executeSmartAction: (payload) => ipcRenderer.invoke('execute-smart-action', payload),
  onHardwareSync: (callback) => {
    ipcRenderer.on('trigger-hardware-sync', () => callback());
  },
  onOpenHardwareModal: (callback) => {
    ipcRenderer.on('open-hardware-modal', () => callback());
  },
});
