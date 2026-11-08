import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  KeySlotId,
  KeyAssignment,
  LayerKeymap,
  PresetItem,
  ProfileData,
  EncoderSubActionId,
} from './types';
import {
  INITIAL_LAYER_1,
  BLANK_LAYER,
  INITIAL_PROFILES,
} from './constants/basicKeys';
import { buildPresetLayer } from './constants/presets';
import { isPresetAppliedInProfile } from './utils/helpers';
import { Header } from './components/Header';
import { KeymapStudioView } from './views/KeymapStudioView';
import { PresetsLibraryView } from './views/PresetsLibraryView';
import { PresetPreviewView } from './views/PresetPreviewView';
import { SettingsView } from './views/SettingsView';
import { HardwareManagerView } from './views/HardwareManagerView';
import { useHardwareState } from './hooks/useHardwareState';
import { usePersistentState } from './hooks/usePersistentState';
import { usePresetRatings } from './hooks/usePresetRatings';
import { useDocumentHistory } from './hooks/useDocumentHistory';
import {
  pushRuntimePolicy,
  readLaunchAtStartup,
  writeLaunchAtStartup,
} from './utils/desktop';
import {
  DEFAULT_SETTINGS,
  PersistedSettings,
  STORAGE_KEYS,
  clearStudioStorage,
  isIndex,
  isProfileList,
  isSettings,
  isStringRecord,
} from './utils/storage';

const DEFAULT_LAYER_NAMES: Record<string, string> = {
  'default-0': 'Base Layer',
  'default-1': 'Media & Volume',
  'default-2': 'Numpad & Nav',
  'default-3': 'Function & Macro',
};

/** Editing a key means the layer is no longer a pristine copy of a preset. */
function withoutPresetTag(layer: LayerKeymap): LayerKeymap {
  if (!layer.presetId) return layer;
  const { presetId, ...slots } = layer;
  return slots as LayerKeymap;
}

export default function App() {
  const [activeNav, setActiveNav] = useState('Keymap');
  const [profiles, setProfiles] = usePersistentState<ProfileData[]>(
    STORAGE_KEYS.profiles,
    INITIAL_PROFILES,
    isProfileList
  );
  const [activeProfileIndex, setActiveProfileIndex] = usePersistentState<number>(
    STORAGE_KEYS.activeProfile,
    0,
    isIndex
  );
  const [activeLayerIndex, setActiveLayerIndex] = usePersistentState<number>(
    STORAGE_KEYS.activeLayer,
    0,
    isIndex
  );
  const [layerNames, setLayerNames] = usePersistentState<Record<string, string>>(
    STORAGE_KEYS.layerNames,
    DEFAULT_LAYER_NAMES,
    isStringRecord
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeSimulatedKey, setActiveSimulatedKey] = useState<string | null>(null);
  const [dialAngle, setDialAngle] = useState(45);
  const [previewPreset, setPreviewPreset] = useState<PresetItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Settings State (persisted)
  const [settings, setSettings] = usePersistentState<PersistedSettings>(
    STORAGE_KEYS.settings,
    DEFAULT_SETTINGS,
    isSettings
  );
  const { allowAnalytics, launchAtStartup, allowTerminalSmartActions, allowDeviceNotifications } =
    settings;

  const setAllowAnalytics = (val: boolean) =>
    setSettings((prev) => ({ ...prev, allowAnalytics: val }));
  const setLaunchAtStartup = (val: boolean) =>
    setSettings((prev) => ({ ...prev, launchAtStartup: val }));
  const setAllowTerminalSmartActions = (val: boolean) =>
    setSettings((prev) => ({ ...prev, allowTerminalSmartActions: val }));
  const setAllowDeviceNotifications = (val: boolean) =>
    setSettings((prev) => ({ ...prev, allowDeviceNotifications: val }));

  const { ratings, ratePreset, clearPresetRating, clearAllRatings } = usePresetRatings();

  // Keep persisted selections valid after a profile/layer edit or reset.
  useEffect(() => {
    if (activeProfileIndex > profiles.length - 1) setActiveProfileIndex(0);
  }, [activeProfileIndex, profiles.length, setActiveProfileIndex]);

  useEffect(() => {
    const layerCount = profiles[activeProfileIndex]?.layers?.length ?? 1;
    if (activeLayerIndex > layerCount - 1) setActiveLayerIndex(0);
  }, [activeLayerIndex, profiles, activeProfileIndex, setActiveLayerIndex]);

  const currentProfile = profiles[activeProfileIndex] || profiles[0];
  const currentLayer =
    currentProfile.layers[activeLayerIndex] || currentProfile.layers[0];
  const currentLayerNameKey = `${currentProfile.id}-${activeLayerIndex}`;
  const currentLayerName = layerNames[currentLayerNameKey] ?? '';

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMessage(msg);
    toastTimer.current = setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
      toastTimer.current = null;
    }, 2200);
  };

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    []
  );

  // Undo/redo covers the editable document: profiles + layer names.
  const history = useDocumentHistory<{
    profiles: ProfileData[];
    layerNames: Record<string, string>;
  }>(
    { profiles, layerNames },
    (next) => {
      setProfiles(next.profiles);
      setLayerNames(next.layerNames);
    }
  );

  const checkpoint = (coalesceKey?: string) =>
    history.record({ profiles, layerNames }, coalesceKey);

  const handleUndo = () => {
    showToast(history.undo() ? 'Undid last change' : 'Nothing left to undo');
  };

  const handleRedo = () => {
    showToast(history.redo() ? 'Redid change' : 'Nothing left to redo');
  };

  // Ctrl/Cmd+Z and Ctrl/Cmd+Shift+Z (or Ctrl+Y), but never while typing in a field.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable) return;

      const key = event.key.toLowerCase();
      if (key === 'z') {
        event.preventDefault();
        if (event.shiftKey) handleRedo();
        else handleUndo();
      } else if (key === 'y') {
        event.preventDefault();
        handleRedo();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // No dependency array on purpose: re-bind each render so the handler always
    // sees the current undo/redo stack.
  });

  // Keep the main process's enforcement policy in sync with the UI toggles.
  useEffect(() => {
    void pushRuntimePolicy({
      allowTerminal: allowTerminalSmartActions,
      allowNotifications: allowDeviceNotifications,
      allowAnalytics,
    });
  }, [allowTerminalSmartActions, allowDeviceNotifications, allowAnalytics]);

  // Reflect the real OS login-item state instead of trusting stale local state.
  useEffect(() => {
    let cancelled = false;
    void readLaunchAtStartup().then((state) => {
      if (!cancelled && state?.supported && state.enabled !== settings.launchAtStartup) {
        setSettings((prev) => ({ ...prev, launchAtStartup: state.enabled }));
      }
    });
    return () => {
      cancelled = true;
    };
    // Runs once: this only reconciles the stored toggle with the OS on launch.
  }, []);

  const handleSetLaunchAtStartup = (val: boolean) => {
    setLaunchAtStartup(val);
    void writeLaunchAtStartup(val).then((result) => {
      if (!result.supported) {
        showToast('Launch at startup needs the desktop app; saved for later');
        return;
      }
      if (!result.success) {
        setLaunchAtStartup(!val);
        showToast(`Could not update startup: ${result.error ?? 'unknown error'}`);
        return;
      }
      showToast(val ? 'Studio will launch at startup' : 'Removed from startup');
    });
  };

  const handleSetAllowAnalytics = (val: boolean) => {
    setAllowAnalytics(val);
    showToast(
      val ? 'Local crash diagnostics enabled (never uploaded)' : 'Crash diagnostics disabled'
    );
  };

  const handleSetAllowDeviceNotifications = (val: boolean) => {
    setAllowDeviceNotifications(val);
    showToast(val ? 'Device notifications enabled' : 'Device notifications muted');
  };

  const {
    hardwareConnected,
    hardwareSyncStatus,
    hardwareLogs,
    testedHardwareKeys,
    handleConnectHardware,
    handleDisconnectHardware,
    handleSyncKeymapToHardware,
    clearHardwareLogs,
  } = useHardwareState({
    currentLayer,
    currentProfile,
    activeLayerIndex,
    showToast,
    setDialAngle,
    onNavigateToHardware: () => setActiveNav('Hardware'),
    allowDeviceNotifications,
    allowTerminalSmartActions,
  });

  const handleUpdateKeyAssignment = (slot: KeySlotId, newAssignment: KeyAssignment) => {
    checkpoint(`key:${slot}`);
    const updatedLayers = [...currentProfile.layers];
    updatedLayers[activeLayerIndex] = {
      ...withoutPresetTag(updatedLayers[activeLayerIndex]),
      [slot]: newAssignment,
    };

    const updatedProfiles = profiles.map((p, idx) =>
      idx === activeProfileIndex ? { ...p, layers: updatedLayers } : p
    );

    setProfiles(updatedProfiles);
    showToast(`Updated key ${slot.toUpperCase()}`);
  };

  const handleUpdateEncoderSubAction = (
    subAction: EncoderSubActionId,
    newSubBinding: KeyAssignment
  ) => {
    checkpoint(`encoder:${subAction}`);
    const updatedLayers = [...currentProfile.layers];
    const prevEncoder = updatedLayers[activeLayerIndex].encoder || {
      type: 'macro',
      encoderActions: {},
    };

    updatedLayers[activeLayerIndex] = {
      ...withoutPresetTag(updatedLayers[activeLayerIndex]),
      encoder: {
        ...prevEncoder,
        type: prevEncoder.type || 'macro',
        encoderActions: {
          ...prevEncoder.encoderActions,
          [subAction]: newSubBinding,
        },
      },
    };

    const updatedProfiles = profiles.map((p, idx) =>
      idx === activeProfileIndex ? { ...p, layers: updatedLayers } : p
    );

    setProfiles(updatedProfiles);
    showToast(`Updated Dial ${subAction.toUpperCase()}`);
  };

  const handleAddLayer = () => {
    checkpoint();
    const nextLayers = [
      ...currentProfile.layers,
      JSON.parse(JSON.stringify(BLANK_LAYER)),
    ];
    const updatedProfiles = profiles.map((p, idx) =>
      idx === activeProfileIndex ? { ...p, layers: nextLayers } : p
    );
    setProfiles(updatedProfiles);
    setActiveLayerIndex(nextLayers.length - 1);
    showToast(`Created Layer ${nextLayers.length}`);
  };

  const handleDeleteLayer = (indexToDelete: number) => {
    if (currentProfile.layers.length <= 1) {
      showToast('Cannot delete the last remaining layer');
      return;
    }
    checkpoint();
    const nextLayers = currentProfile.layers.filter(
      (_, idx) => idx !== indexToDelete
    );
    const updatedProfiles = profiles.map((p, idx) =>
      idx === activeProfileIndex ? { ...p, layers: nextLayers } : p
    );
    setProfiles(updatedProfiles);
    setActiveLayerIndex(Math.max(0, indexToDelete - 1));
    showToast(`Deleted Layer ${indexToDelete + 1}`);
  };

  const handleRenameLayer = (name: string) => {
    checkpoint('layer-name');
    setLayerNames((prev) => ({
      ...prev,
      [currentLayerNameKey]: name,
    }));
  };

  const handleApplyPreset = (presetId: string) => {
    checkpoint();
    const newLayer = buildPresetLayer(presetId);
    const updatedLayers = [...currentProfile.layers];
    updatedLayers[activeLayerIndex] = newLayer;

    const updatedProfiles = profiles.map((p, idx) =>
      idx === activeProfileIndex ? { ...p, layers: updatedLayers } : p
    );

    setProfiles(updatedProfiles);
    showToast(`Applied preset to Layer ${activeLayerIndex + 1}!`);
    setActiveNav('Keymap');
    setPreviewPreset(null);
  };

  const handleResetFactoryDefaults = () => {
    checkpoint();
    clearStudioStorage();
    setProfiles(JSON.parse(JSON.stringify(INITIAL_PROFILES)));
    setLayerNames(DEFAULT_LAYER_NAMES);
    setSettings(DEFAULT_SETTINGS);
    clearAllRatings();
    setActiveProfileIndex(0);
    setActiveLayerIndex(0);
    showToast('Reset profiles, presets and settings to factory defaults');
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white flex flex-col font-sans select-none overflow-x-hidden">
      {/* Top Header */}
      <Header
        activeNav={activeNav}
        setActiveNav={(tab) => {
          setActiveNav(tab);
          if (tab !== 'Presets') setPreviewPreset(null);
        }}
        hardwareConnected={hardwareConnected}
        onConnectHardware={handleConnectHardware}
        onDisconnectHardware={handleDisconnectHardware}
        hardwareSyncStatus={hardwareSyncStatus}
        onNavigateToHardware={() => setActiveNav('Hardware')}
        canUndo={history.canUndo}
        canRedo={history.canRedo}
        onUndo={handleUndo}
        onRedo={handleRedo}
      />

      {/* Main View Router */}
      <main className="flex-1 flex flex-col">
        {activeNav === 'Keymap' && (
          <KeymapStudioView
            currentProfile={currentProfile}
            profiles={profiles}
            activeProfileIndex={activeProfileIndex}
            onSelectProfile={setActiveProfileIndex}
            activeLayerIndex={activeLayerIndex}
            onSelectLayer={setActiveLayerIndex}
            currentLayer={currentLayer}
            currentLayerName={currentLayerName}
            onRenameLayer={handleRenameLayer}
            onAddLayer={handleAddLayer}
            onDeleteLayer={handleDeleteLayer}
            isSimulating={isSimulating}
            onToggleSimulating={() => setIsSimulating(!isSimulating)}
            activeSimulatedKey={activeSimulatedKey}
            dialAngle={dialAngle}
            onRotateCW={() => setDialAngle((prev) => prev + 18)}
            onRotateCCW={() => setDialAngle((prev) => prev - 18)}
            onDialPress={() => {
              setActiveSimulatedKey('encoder');
              setTimeout(() => setActiveSimulatedKey(null), 180);
            }}
            onUpdateKeyAssignment={handleUpdateKeyAssignment}
            onUpdateEncoderSubAction={handleUpdateEncoderSubAction}
            onFlashKeymap={handleSyncKeymapToHardware}
            hardwareConnected={hardwareConnected}
            hardwareSyncStatus={hardwareSyncStatus}
          />
        )}

        {activeNav === 'Presets' && !previewPreset && (
          <PresetsLibraryView
            currentProfile={currentProfile}
            onPreviewPreset={(p) => setPreviewPreset(p)}
            onApplyPreset={handleApplyPreset}
            ratings={ratings}
            onRatePreset={ratePreset}
            onClearPresetRating={clearPresetRating}
          />
        )}

        {activeNav === 'Presets' && previewPreset && (
          <PresetPreviewView
            preset={previewPreset}
            onBack={() => setPreviewPreset(null)}
            onApply={() => handleApplyPreset(previewPreset.id)}
            isApplied={isPresetAppliedInProfile(currentProfile, previewPreset.id)}
            rating={ratings[previewPreset.id] ?? null}
            onRate={(score) => ratePreset(previewPreset.id, score)}
            onClearRating={() => clearPresetRating(previewPreset.id)}
          />
        )}

        {activeNav === 'Hardware' && (
          <HardwareManagerView
            onBack={() => setActiveNav('Keymap')}
            hardwareConnected={hardwareConnected}
            onConnectHardware={handleConnectHardware}
            onDisconnectHardware={handleDisconnectHardware}
            hardwareSyncStatus={hardwareSyncStatus}
            onSyncKeymap={handleSyncKeymapToHardware}
            hardwareLogs={hardwareLogs}
            onClearLogs={clearHardwareLogs}
            testedKeys={testedHardwareKeys}
            onTestKey={(slot) => showToast(`Hardware Test: ${slot}`)}
            currentLayer={currentLayer}
          />
        )}

        {activeNav === 'Settings' && (
          <SettingsView
            allowAnalytics={allowAnalytics}
            setAllowAnalytics={handleSetAllowAnalytics}
            launchAtStartup={launchAtStartup}
            setLaunchAtStartup={handleSetLaunchAtStartup}
            allowTerminalSmartActions={allowTerminalSmartActions}
            setAllowTerminalSmartActions={setAllowTerminalSmartActions}
            allowDeviceNotifications={allowDeviceNotifications}
            setAllowDeviceNotifications={handleSetAllowDeviceNotifications}
            onResetFactoryDefaults={handleResetFactoryDefaults}
          />
        )}
      </main>

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0d111a] border border-blue-500/40 text-white text-xs font-mono font-medium px-4 py-2 rounded-xl shadow-2xl z-50 backdrop-blur-md"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
