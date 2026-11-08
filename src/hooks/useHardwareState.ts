import { useState, useRef } from 'react';
import {
  KeySlotId,
  LayerKeymap,
  ProfileData,
} from '../types';
import { getEncoderActions } from '../utils/helpers';

interface UseHardwareStateProps {
  currentLayer: LayerKeymap;
  currentProfile: ProfileData;
  activeLayerIndex: number;
  showToast: (msg: string) => void;
  setDialAngle: React.Dispatch<React.SetStateAction<number>>;
  onNavigateToHardware: () => void;
}

export function useHardwareState({
  currentLayer,
  currentProfile,
  activeLayerIndex,
  showToast,
  setDialAngle,
}: UseHardwareStateProps) {
  const [hardwareConnected, setHardwareConnected] = useState(false);
  const [hardwarePort, setHardwarePort] = useState<any>(null);
  const [hardwareSyncStatus, setHardwareSyncStatus] = useState<
    'idle' | 'syncing' | 'synced' | 'error'
  >('idle');
  const [hardwareModalTab, setHardwareModalTab] = useState<
    'sync' | 'firmware' | 'pinout' | 'tester' | 'desktop'
  >('sync');
  const [firmwareSubTab, setFirmwareSubTab] = useState<
    'qmk' | 'circuitpy' | 'arduino'
  >('qmk');
  const [pipelineInspectSlot, setPipelineInspectSlot] =
    useState<KeySlotId>('r1c1');
  const [hardwareLogs, setHardwareLogs] = useState<string[]>([]);
  const [lastHardwareEvent, setLastHardwareEvent] = useState<{
    slot: string;
    type: string;
    timestamp: number;
  } | null>(null);
  const [testedHardwareKeys, setTestedHardwareKeys] = useState<
    Record<string, boolean>
  >({});
  const serialReaderRef = useRef<any>(null);

  const addHardwareLog = (msg: string) => {
    setHardwareLogs((prev) => [
      `[${new Date().toLocaleTimeString()}] ${msg}`,
      ...prev.slice(0, 49),
    ]);
  };

  const clearHardwareLogs = () => {
    setHardwareLogs([]);
  };

  const sendHardwareCommand = async (cmdData: any) => {
    if (!hardwarePort || !hardwarePort.writable) {
      return false;
    }
    try {
      const textEncoder = new TextEncoderStream();
      textEncoder.readable.pipeTo(hardwarePort.writable);
      const writer = textEncoder.writable.getWriter();
      await writer.write(JSON.stringify(cmdData) + '\n');
      writer.releaseLock();
      return true;
    } catch (e: any) {
      addHardwareLog(`Send Error: ${e.message}`);
      return false;
    }
  };

  const executeSmartActionDispatch = async (bindingStr: string) => {
    if (!bindingStr || !bindingStr.startsWith('smart:')) return;
    try {
      const payload = JSON.parse(bindingStr.slice(6));
      if (payload.type === 'terminal' && payload.terminalCmd) {
        if ((window as any).electronAPI?.executeSmartAction) {
          const res = await (window as any).electronAPI.executeSmartAction(
            payload
          );
          if (res.success) {
            showToast(`Executed: ${payload.terminalCmd}`);
          } else {
            showToast(`Cmd error: ${res.error}`);
          }
        }
      }
    } catch (e) {}
  };

  const handleConnectHardware = async () => {
    if (!('serial' in navigator)) {
      showToast('Web Serial API not supported in this browser environment');
      return;
    }
    try {
      const port = await (navigator as any).serial.requestPort({
        filters: [{ usbVendorId: 0x2e8a }],
      });
      await port.open({ baudRate: 115200 });
      setHardwarePort(port);
      setHardwareConnected(true);
      addHardwareLog('Connected to RP2040-Zero at 115200 baud');
      showToast('RP2040-Zero Connected over Web Serial');

      const textDecoder = new TextDecoderStream();
      port.readable.pipeTo(textDecoder.writable);
      const reader = textDecoder.readable.getReader();
      serialReaderRef.current = reader;

      let buffer = '';
      (async () => {
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            if (value) {
              buffer += value;
              const lines = buffer.split('\n');
              buffer = lines.pop() || '';
              for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed) {
                  addHardwareLog(`RX: ${trimmed}`);
                  try {
                    const data = JSON.parse(trimmed);
                    if (data.event === 'KEY_DOWN') {
                      setTestedHardwareKeys((prev) => ({
                        ...prev,
                        [data.slot]: true,
                      }));
                      setLastHardwareEvent({
                        slot: data.slot,
                        type: 'down',
                        timestamp: Date.now(),
                      });
                      if (data.slot) {
                        const assignment = currentLayer[data.slot as KeySlotId];
                        const label =
                          assignment?.label ||
                          assignment?.code ||
                          data.slot.toUpperCase();
                        showToast(`[RP2040 Key]: ${label}`);
                      }
                    } else if (data.event === 'DIAL_ROTATED') {
                      setDialAngle(
                        (a) =>
                          (a + (data.dir === 'cw' ? 18 : -18) + 360) % 360
                      );
                      setTestedHardwareKeys((prev) => ({
                        ...prev,
                        [`encoder_${data.dir}`]: true,
                      }));
                      setLastHardwareEvent({
                        slot: 'encoder',
                        type: data.dir,
                        timestamp: Date.now(),
                      });
                      const actions = getEncoderActions(currentLayer.encoder);
                      const subLabel =
                        actions[data.dir as 'cw' | 'ccw']?.label ||
                        actions[data.dir as 'cw' | 'ccw']?.code;
                      showToast(
                        `[RP2040 Dial]: ${data.dir.toUpperCase()}${
                          subLabel ? ` (${subLabel})` : ''
                        }`
                      );
                    } else if (
                      data.event === 'DIAL_PRESS' &&
                      data.state === 'down'
                    ) {
                      setTestedHardwareKeys((prev) => ({
                        ...prev,
                        encoder_press: true,
                      }));
                      setLastHardwareEvent({
                        slot: 'encoder',
                        type: 'press',
                        timestamp: Date.now(),
                      });
                      const actions = getEncoderActions(currentLayer.encoder);
                      const pressLabel =
                        actions.press?.label || actions.press?.code;
                      showToast(
                        `[RP2040 Dial Press]${
                          pressLabel ? `: ${pressLabel}` : ''
                        }`
                      );
                    } else if (data.status === 'OK' && data.device) {
                      showToast(`Connected to ${data.device} (${data.mcu})`);
                    }
                  } catch (e) {}
                }
              }
            }
          }
        } catch (err: any) {
          if (hardwareConnected) {
            addHardwareLog(`Read Error: ${err.message}`);
          }
        }
      })();
    } catch (err: any) {
      addHardwareLog(`Connection Failed: ${err.message}`);
      showToast('Could not open serial connection');
    }
  };

  const handleDisconnectHardware = async () => {
    try {
      if (serialReaderRef.current) {
        await serialReaderRef.current.cancel();
      }
      if (hardwarePort) {
        await hardwarePort.close();
      }
    } catch (e) {}
    setHardwarePort(null);
    setHardwareConnected(false);
    addHardwareLog('Disconnected from RP2040-Zero');
    showToast('Disconnected from hardware');
  };

  const handleSyncKeymapToHardware = async () => {
    if (!hardwareConnected) {
      showToast('Connect RP2040-Zero first to write keymap');
      return;
    }
    setHardwareSyncStatus('syncing');
    addHardwareLog('Flashing keymap payload to RP2040-Zero...');

    const payload = {
      cmd: 'SAVE_KEYMAP',
      profile: currentProfile.name,
      activeLayer: activeLayerIndex,
      keymap: currentProfile.layers,
    };

    const success = await sendHardwareCommand(payload);
    if (success) {
      setHardwareSyncStatus('synced');
      showToast('Keymap flashed to RP2040-Zero flash storage!');
      setTimeout(() => setHardwareSyncStatus('idle'), 3000);
    } else {
      setHardwareSyncStatus('error');
      showToast('Failed to flash keymap over serial');
    }
  };

  return {
    hardwareConnected,
    hardwarePort,
    hardwareSyncStatus,
    hardwareModalTab,
    setHardwareModalTab,
    firmwareSubTab,
    setFirmwareSubTab,
    pipelineInspectSlot,
    setPipelineInspectSlot,
    hardwareLogs,
    lastHardwareEvent,
    testedHardwareKeys,
    handleConnectHardware,
    handleDisconnectHardware,
    handleSyncKeymapToHardware,
    addHardwareLog,
    clearHardwareLogs,
    executeSmartActionDispatch,
  };
}
