import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  KeySlotId,
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

export default function App() {
  const [activeNav, setActiveNav] = useState('Keymap');
  const [profiles, setProfiles] = useState<ProfileData[]>(INITIAL_PROFILES);
  const [activeProfileIndex, setActiveProfileIndex] = useState(0);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [layerNames, setLayerNames] = useState<Record<string, string>>({
    'default-0': 'Base Layer',
    'default-1': 'Media & Volume',
    'default-2': 'Numpad & Nav',
    'default-3': 'Function & Macro',
  });
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeSimulatedKey, setActiveSimulatedKey] = useState<string | null>(null);
  const [dialAngle, setDialAngle] = useState(45);
  const [previewPreset, setPreviewPreset] = useState<PresetItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Settings State
  const [allowAnalytics, setAllowAnalytics] = useState(false);
  const [launchAtStartup, setLaunchAtStartup] = useState(false);
  const [allowTerminalSmartActions, setAllowTerminalSmartActions] = useState(true);
  const [allowDeviceNotifications, setAllowDeviceNotifications] = useState(true);

  const currentProfile = profiles[activeProfileIndex] || profiles[0];
  const currentLayer =
    currentProfile.layers[activeLayerIndex] || currentProfile.layers[0];
  const currentLayerNameKey = `${currentProfile.id}-${activeLayerIndex}`;
  const currentLayerName = layerNames[currentLayerNameKey] ?? '';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2200);
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
  });

  const handleUpdateKeyAssignment = (slot: KeySlotId, newAssignment: any) => {
    const updatedLayers = [...currentProfile.layers];
    updatedLayers[activeLayerIndex] = {
      ...updatedLayers[activeLayerIndex],
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
    newSubBinding: any
  ) => {
    const updatedLayers = [...currentProfile.layers];
    const prevEncoder = updatedLayers[activeLayerIndex].encoder || {
      type: 'macro',
      encoderActions: {},
    };

    updatedLayers[activeLayerIndex] = {
      ...updatedLayers[activeLayerIndex],
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
    setLayerNames((prev) => ({
      ...prev,
      [currentLayerNameKey]: name,
    }));
  };

  const handleApplyPreset = (presetId: string) => {
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
    setProfiles(JSON.parse(JSON.stringify(INITIAL_PROFILES)));
    setActiveProfileIndex(0);
    setActiveLayerIndex(0);
    showToast('Reset all profiles and layers to factory defaults');
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
          />
        )}

        {activeNav === 'Presets' && previewPreset && (
          <PresetPreviewView
            preset={previewPreset}
            onBack={() => setPreviewPreset(null)}
            onApply={() => handleApplyPreset(previewPreset.id)}
            isApplied={isPresetAppliedInProfile(currentProfile, previewPreset.id)}
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
            setAllowAnalytics={setAllowAnalytics}
            launchAtStartup={launchAtStartup}
            setLaunchAtStartup={setLaunchAtStartup}
            allowTerminalSmartActions={allowTerminalSmartActions}
            setAllowTerminalSmartActions={setAllowTerminalSmartActions}
            allowDeviceNotifications={allowDeviceNotifications}
            setAllowDeviceNotifications={setAllowDeviceNotifications}
            onResetFactoryDefaults={handleResetFactoryDefaults}
          />
        )}
      </main>

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
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
