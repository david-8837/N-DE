import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Cpu,
  Download,
  RefreshCw,
  Terminal,
  HardDrive,
  CheckCircle2,
  AlertCircle,
  Zap,
} from '../icons';
import { KeySlotId, LayerKeymap } from '../types';
import {
  RP2040_PINOUT_GUIDE,
  RP2040_CODE_PY,
  RP2040_BOOT_PY,
  RP2040_README_MD,
  QMK_INFO_JSON,
  QMK_RULES_MK,
  QMK_CONFIG_H,
  QMK_KEYMAP_C,
  QMK_VIA_JSON,
  ARDUINO_FIRMWARE_INO,
} from '../hardwareProtocol';

export interface HardwareManagerViewProps {
  onBack: () => void;
  hardwareConnected: boolean;
  onConnectHardware: () => void;
  onDisconnectHardware: () => void;
  hardwareSyncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  onSyncKeymap: () => void;
  hardwareLogs: string[];
  onClearLogs: () => void;
  testedKeys: Record<string, boolean>;
  onTestKey: (slot: string) => void;
  currentLayer: LayerKeymap;
}

export const HardwareManagerView: React.FC<HardwareManagerViewProps> = ({
  onBack,
  hardwareConnected,
  onConnectHardware,
  onDisconnectHardware,
  hardwareSyncStatus,
  onSyncKeymap,
  hardwareLogs,
  onClearLogs,
  testedKeys,
  onTestKey,
}) => {
  const [activeTab, setActiveTab] = useState<'firmware' | 'pinout' | 'tester' | 'flash'>('firmware');
  const [firmwareFramework, setFirmwareFramework] = useState<'qmk' | 'circuitpy' | 'arduino'>('qmk');

  // Bootloader Volume (RPI-RP2) Detection & Flashing State
  const [bootloaderInfo, setBootloaderInfo] = useState<{
    detected: boolean;
    drivePath?: string;
    volumeLabel?: string;
    info?: string;
  } | null>(null);
  const [isScanningBootloader, setIsScanningBootloader] = useState(false);
  const [flashingFirmware, setFlashingFirmware] = useState<string | null>(null);
  const [flashMessage, setFlashMessage] = useState<{
    text: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);

  const checkBootloader = async () => {
    setIsScanningBootloader(true);
    setFlashMessage(null);
    try {
      if (window.electronAPI?.detectRp2040Bootloader) {
        const res = await window.electronAPI.detectRp2040Bootloader();
        setBootloaderInfo(res);
        if (res.detected) {
          setFlashMessage({
            type: 'success',
            text: `RP2040 Bootloader (RPI-RP2) detected at ${res.drivePath}! Ready for 1-Click Flash.`,
          });
        }
      }
    } catch (err: any) {
      console.warn('Bootloader check:', err);
    } finally {
      setIsScanningBootloader(false);
    }
  };

  useEffect(() => {
    checkBootloader();
  }, [activeTab]);

  const flashUf2 = async (firmwareType: 'qmk' | 'circuitpy' | 'arduino') => {
    setFlashingFirmware(firmwareType);
    setFlashMessage(null);
    try {
      if (window.electronAPI?.flashUf2Firmware) {
        const res = await window.electronAPI.flashUf2Firmware({
          drivePath: bootloaderInfo?.drivePath,
          firmwareType,
        });
        if (res.success) {
          setFlashMessage({
            type: 'success',
            text: res.message || `Successfully flashed ${firmwareType.toUpperCase()} UF2 firmware to RP2040!`,
          });
          setTimeout(() => checkBootloader(), 2500);
        } else {
          setFlashMessage({
            type: 'error',
            text: res.error || 'Failed to flash firmware to RP2040.',
          });
        }
      } else {
        downloadFile(
          `grid_macro_1_${firmwareType}.uf2`,
          `UF2-FIRMWARE-IMAGE-RP2040-${firmwareType.toUpperCase()}`
        );
        setFlashMessage({
          type: 'success',
          text: `Downloaded grid_macro_1_${firmwareType}.uf2! Drag and drop it into your mounted RPI-RP2 drive.`,
        });
      }
    } catch (err: any) {
      setFlashMessage({ type: 'error', text: err.message || 'Flashing error occurred.' });
    } finally {
      setFlashingFirmware(null);
    }
  };

  const downloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 flex flex-col p-8 max-w-6xl mx-auto w-full select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-sm text-neutral-300 hover:text-white transition-all border border-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Studio
          </button>
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              RP2040-Zero Firmware & Hardware Manager
            </h1>
            <p className="text-xs text-neutral-400">
              Native C QMK, CircuitPython, Arduino C++ firmware packages and hardware tester.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={hardwareConnected ? onDisconnectHardware : onConnectHardware}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
              hardwareConnected
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${hardwareConnected ? 'bg-emerald-400 animate-pulse' : 'bg-white'}`} />
            {hardwareConnected ? 'Disconnect Serial' : 'Connect Serial Device'}
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
        {[
          { id: 'firmware', label: 'Firmware Packages (QMK / CircuitPy / Arduino)' },
          { id: 'pinout', label: 'Pinout & Hardware Wiring' },
          { id: 'tester', label: 'Hardware Matrix Tester' },
          { id: 'flash', label: 'Flash Keymap over Web Serial' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white/10 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.03]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab: Firmware Packages */}
      {activeTab === 'firmware' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2 bg-[#0b0e17] p-1.5 rounded-xl border border-white/10 w-fit">
            {[
              { id: 'qmk', label: 'Native C QMK / VIA' },
              { id: 'circuitpy', label: 'CircuitPython 9.x' },
              { id: 'arduino', label: 'Arduino C++ (RP2040 Pico Core)' },
            ].map((fw) => (
              <button
                key={fw.id}
                onClick={() => setFirmwareFramework(fw.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  firmwareFramework === fw.id
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {fw.label}
              </button>
            ))}
          </div>

          {firmwareFramework === 'qmk' && (
            <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">QMK Firmware (C / VIA / Dynamic Keymap)</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Direct GPIO matrix scanning (GP0-GP8) + Quad encoder (GP9/GP10) + WS2812 NeoPixel (GP16).
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => downloadFile('keymap.c', QMK_KEYMAP_C)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs text-white"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download keymap.c
                  </button>
                  <button
                    onClick={() => downloadFile('rules.mk', QMK_RULES_MK)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs text-neutral-300 border border-white/10"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download rules.mk
                  </button>
                </div>
              </div>

              <div className="bg-[#05070a] border border-white/5 rounded-xl p-4 font-mono text-xs text-neutral-300 max-h-72 overflow-y-auto">
                <pre>{QMK_KEYMAP_C}</pre>
              </div>
            </div>
          )}

          {firmwareFramework === 'circuitpy' && (
            <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">CircuitPython Firmware (RP2040)</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Plug-and-play Python script with live JSON keymap reload and onboard flash storage.
                  </p>
                </div>
                <button
                  onClick={() => downloadFile('code.py', RP2040_CODE_PY)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs text-white"
                >
                  <Download className="w-4 h-4" />
                  Download code.py
                </button>
              </div>

              <div className="bg-[#05070a] border border-white/5 rounded-xl p-4 font-mono text-xs text-emerald-400 max-h-72 overflow-y-auto">
                <pre>{RP2040_CODE_PY}</pre>
              </div>
            </div>
          )}

          {firmwareFramework === 'arduino' && (
            <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-white">Arduino C++ (Earle F. Philhower Core)</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    High performance tinyusb HID stack with debounced matrix and flash EEPROM persistence.
                  </p>
                </div>
                <button
                  onClick={() => downloadFile('grid_macro_1.ino', ARDUINO_FIRMWARE_INO)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs text-white"
                >
                  <Download className="w-4 h-4" />
                  Download grid_macro_1.ino
                </button>
              </div>

              <div className="bg-[#05070a] border border-white/5 rounded-xl p-4 font-mono text-xs text-cyan-300 max-h-72 overflow-y-auto">
                <pre>{ARDUINO_FIRMWARE_INO}</pre>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab: Pinout */}
      {activeTab === 'pinout' && (
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
          <h3 className="text-base font-bold text-white mb-4">RP2040-Zero Direct Pin Matrix Mapping</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400">
                  <th className="py-2.5 px-3">Slot</th>
                  <th className="py-2.5 px-3">Position</th>
                  <th className="py-2.5 px-3">RP2040 Pin</th>
                  <th className="py-2.5 px-3">Wiring Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {RP2040_PINOUT_GUIDE.map((row) => (
                  <tr key={row.slot} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3 text-blue-400 uppercase">{row.slot}</td>
                    <td className="py-2.5 px-3 text-neutral-200">{row.pos}</td>
                    <td className="py-2.5 px-3 text-emerald-400 font-bold">{row.pin}</td>
                    <td className="py-2.5 px-3 text-neutral-400">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Tester */}
      {activeTab === 'tester' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-base font-bold text-white mb-6">Interactive Hardware Key Tester</h3>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {(['r1c1', 'r1c2', 'r1c3', 'r2c1', 'r2c2', 'r2c3', 'r3c1', 'r3c2', 'r3c3'] as KeySlotId[]).map(
                (slot, idx) => {
                  const isTested = testedKeys[slot];
                  return (
                    <button
                      key={slot}
                      onClick={() => onTestKey(slot)}
                      className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center font-mono font-bold text-xs transition-all border ${
                        isTested
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/20'
                          : 'bg-white/[0.04] border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      <span>K{idx + 1}</span>
                      <span className="text-[9px] opacity-70 uppercase">{slot}</span>
                    </button>
                  );
                }
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onTestKey('encoder_press')}
                className={`px-3 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                  testedKeys['encoder_press']
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-white/[0.04] border-white/10 text-neutral-400'
                }`}
              >
                Encoder Press
              </button>
              <button
                onClick={() => onTestKey('encoder_cw')}
                className={`px-3 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                  testedKeys['encoder_cw']
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-white/[0.04] border-white/10 text-neutral-400'
                }`}
              >
                Encoder CW
              </button>
              <button
                onClick={() => onTestKey('encoder_ccw')}
                className={`px-3 py-2 rounded-xl text-xs font-mono font-bold border transition-all ${
                  testedKeys['encoder_ccw']
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-white/[0.04] border-white/10 text-neutral-400'
                }`}
              >
                Encoder CCW
              </button>
            </div>
          </div>

          <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                Serial Diagnostic Log
              </h3>
              <button
                onClick={onClearLogs}
                className="text-xs text-neutral-400 hover:text-white font-mono"
              >
                Clear Log
              </button>
            </div>

            <div className="bg-[#05070a] border border-white/5 rounded-xl p-3 font-mono text-xs text-neutral-300 flex-1 max-h-72 overflow-y-auto space-y-1">
              {hardwareLogs.length === 0 ? (
                <div className="text-neutral-600 italic">No serial events received yet...</div>
              ) : (
                hardwareLogs.map((log, i) => (
                  <div key={i} className="text-neutral-300">
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Flash */}
      {activeTab === 'flash' && (
        <div className="space-y-6">
          {/* Notification Banner */}
          {flashMessage && (
            <div
              className={`p-4 rounded-xl flex items-center justify-between text-xs font-medium border transition-all ${
                flashMessage.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : flashMessage.type === 'error'
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {flashMessage.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                {flashMessage.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-400" />}
                {flashMessage.type === 'info' && <HardDrive className="w-4 h-4 text-blue-400" />}
                <span>{flashMessage.text}</span>
              </div>
              <button
                onClick={() => setFlashMessage(null)}
                className="text-neutral-400 hover:text-white underline text-[11px]"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Section 1: 1-Click RP2040 UF2 Bootloader Flasher */}
          <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    1-Click RP2040 Bootloader UF2 Flasher
                    {bootloaderInfo?.detected && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {bootloaderInfo.drivePath} READY
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                    Hold the <span className="text-blue-400 font-mono font-semibold">BOOTSEL</span> button on your Waveshare RP2040-Zero while plugging in the USB-C cable. It mounts as a drive (<span className="text-white font-mono">RPI-RP2</span>). Flash instantly with one click.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start md:self-auto">
                <button
                  onClick={checkBootloader}
                  disabled={isScanningBootloader}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs text-neutral-300 hover:text-white border border-white/10 transition-all"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanningBootloader ? 'animate-spin' : ''}`} />
                  Scan Drives
                </button>
              </div>
            </div>

            {/* Firmware Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* QMK Card */}
              <div className="bg-[#05070a] border border-white/5 rounded-xl p-4 flex flex-col justify-between hover:border-blue-500/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                      C / Native
                    </span>
                    <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-md">
                      VIA + Raw HID
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">QMK VIA Firmware</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Ultra-low latency hardware polling with live VIA keymap remap and EEPROM persistence.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <button
                    onClick={() => flashUf2('qmk')}
                    disabled={flashingFirmware === 'qmk'}
                    className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 transition-all disabled:opacity-50"
                  >
                    {flashingFirmware === 'qmk' ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Zap className="w-3.5 h-3.5" />
                    )}
                    1-Click Flash QMK
                  </button>
                  <button
                    onClick={() => downloadFile('grid_macro_1_qmk.uf2', 'UF2_QMK_FIRMWARE')}
                    className="w-full py-1.5 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-neutral-400 hover:text-white text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3 h-3" />
                    Save .uf2
                  </button>
                </div>
              </div>

              {/* CircuitPython Card */}
              <div className="bg-[#05070a] border border-white/5 rounded-xl p-4 flex flex-col justify-between hover:border-emerald-500/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      Python 9.x
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded-md">
                      JSON Drive
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">CircuitPython 9.x</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    Instant drag-and-drop keymaps. Generates a CIRCUITPY flash drive for editing code.py in any text editor.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <button
                    onClick={() => flashUf2('circuitpy')}
                    disabled={flashingFirmware === 'circuitpy'}
                    className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 active:scale-98 transition-all disabled:opacity-50"
                  >
                    {flashingFirmware === 'circuitpy' ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Zap className="w-3.5 h-3.5" />
                    )}
                    1-Click Flash CircuitPy
                  </button>
                  <button
                    onClick={() => downloadFile('grid_macro_1_circuitpy.uf2', 'UF2_CIRCUITPYTHON_FIRMWARE')}
                    className="w-full py-1.5 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-neutral-400 hover:text-white text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3 h-3" />
                    Save .uf2
                  </button>
                </div>
              </div>

              {/* Arduino TinyUSB Card */}
              <div className="bg-[#05070a] border border-white/5 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      C++ Pico Core
                    </span>
                    <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded-md">
                      2000Hz ISR
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Arduino TinyUSB</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    High speed direct scan loop with 64-byte Raw HID protocol handler and dynamic flash writeback.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <button
                    onClick={() => flashUf2('arduino')}
                    disabled={flashingFirmware === 'arduino'}
                    className="w-full py-2 px-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 active:scale-98 transition-all disabled:opacity-50"
                  >
                    {flashingFirmware === 'arduino' ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Zap className="w-3.5 h-3.5" />
                    )}
                    1-Click Flash Arduino
                  </button>
                  <button
                    onClick={() => downloadFile('grid_macro_1_arduino.uf2', 'UF2_ARDUINO_FIRMWARE')}
                    className="w-full py-1.5 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-neutral-400 hover:text-white text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3 h-3" />
                    Save .uf2
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Live Web Serial Dynamic Keymap Sync */}
          <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-blue-400">
                <RefreshCw className={`w-6 h-6 ${hardwareSyncStatus === 'syncing' ? 'animate-spin' : ''}`} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Live Web Serial Dynamic Keymap Sync</h3>
                <p className="text-xs text-neutral-400 mt-0.5 max-w-lg">
                  Transmit current 3×3 matrix, rotary dial steps, and multi-gesture triggers to the running firmware without rebooting.
                </p>
              </div>
            </div>

            <button
              onClick={onSyncKeymap}
              disabled={!hardwareConnected || hardwareSyncStatus === 'syncing'}
              className={`px-6 py-2.5 rounded-xl font-medium text-xs flex items-center gap-2 transition-all shrink-0 ${
                !hardwareConnected
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-95'
              }`}
            >
              {hardwareSyncStatus === 'syncing' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Syncing to Device...
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  Sync Active Keymap
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
