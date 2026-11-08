import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Sparkles,
  Download,
  Layers,
  RotateCw,
  RotateCcw,
  Sliders,
  Play,
  Check,
  Disc,
} from '../icons';
import {
  KeySlotId,
  EncoderSubActionId,
  MappingTabId,
  LayerKeymap,
  ProfileData,
  KeyAssignment,
} from '../types';
import { BASIC_KEY_SECTIONS } from '../constants/basicKeys';
import { MacropadDevice } from '../components/MacropadDevice';
import { FlatDialControl } from '../components/FlatDialControl';
import { EncoderPopupCapsule } from '../components/EncoderPopupCapsule';
import { MultiActionEditor } from '../components/MacroEditor/MultiActionEditor';
import { SmartActionEditor } from '../components/MacroEditor/SmartActionEditor';
import { IconPickerPopover } from '../components/MacroEditor/IconPickerPopover';

export interface KeymapStudioViewProps {
  currentProfile: ProfileData;
  profiles: ProfileData[];
  activeProfileIndex: number;
  onSelectProfile: (idx: number) => void;
  activeLayerIndex: number;
  onSelectLayer: (idx: number) => void;
  currentLayer: LayerKeymap;
  currentLayerName: string;
  onRenameLayer: (name: string) => void;
  onAddLayer: () => void;
  onDeleteLayer: (index: number) => void;
  isSimulating: boolean;
  onToggleSimulating: () => void;
  activeSimulatedKey: string | null;
  dialAngle: number;
  onRotateCW: () => void;
  onRotateCCW: () => void;
  onDialPress: () => void;
  onUpdateKeyAssignment: (slot: KeySlotId, assignment: KeyAssignment) => void;
  onUpdateEncoderSubAction: (subAction: EncoderSubActionId, binding: KeyAssignment) => void;
  onFlashKeymap: () => void;
  hardwareConnected: boolean;
  hardwareSyncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  /** Optional first-run guidance rendered above the macropad. */
  onboarding?: React.ReactNode;
}

export const KeymapStudioView: React.FC<KeymapStudioViewProps> = ({
  currentProfile,
  profiles,
  activeProfileIndex,
  onSelectProfile,
  activeLayerIndex,
  onSelectLayer,
  currentLayer,
  currentLayerName,
  onRenameLayer,
  onAddLayer,
  onDeleteLayer,
  isSimulating,
  onToggleSimulating,
  activeSimulatedKey,
  dialAngle,
  onRotateCW,
  onRotateCCW,
  onDialPress,
  onUpdateKeyAssignment,
  onUpdateEncoderSubAction,
  onFlashKeymap,
  hardwareConnected,
  hardwareSyncStatus,
  onboarding,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<KeySlotId>('r1c1');
  const [selectedEncoderSub, setSelectedEncoderSub] = useState<EncoderSubActionId>('press');
  const [activeTab, setActiveTab] = useState<MappingTabId>('basic');
  const [iconPickerOpen, setIconPickerOpen] = useState(false);

  const currentAssignment: KeyAssignment =
    selectedSlot === 'encoder'
      ? currentLayer.encoder?.encoderActions?.[selectedEncoderSub] || { type: 'none' }
      : currentLayer[selectedSlot] || { type: 'none' };

  const handleApplyBasicKey = (code: string, label: string, icon?: string) => {
    const assignment: KeyAssignment = {
      type: 'macro',
      code,
      label,
      customIcon: icon || 'Sparkles',
      themeColor: '#3b82f6',
    };

    if (selectedSlot === 'encoder') {
      onUpdateEncoderSubAction(selectedEncoderSub, assignment);
    } else {
      onUpdateKeyAssignment(selectedSlot, assignment);
    }
  };

  const handleClearSlot = () => {
    if (selectedSlot === 'encoder') {
      onUpdateEncoderSubAction(selectedEncoderSub, { type: 'none' });
    } else {
      onUpdateKeyAssignment(selectedSlot, { type: 'none' });
    }
  };

  const handleSelectIcon = (iconName: string) => {
    const updated = {
      ...currentAssignment,
      customIcon: iconName,
      customEmoji: undefined,
    };
    if (selectedSlot === 'encoder') {
      onUpdateEncoderSubAction(selectedEncoderSub, updated);
    } else {
      onUpdateKeyAssignment(selectedSlot, updated);
    }
    setIconPickerOpen(false);
  };

  const handleSelectEmoji = (emojiChar: string) => {
    const updated = {
      ...currentAssignment,
      customEmoji: emojiChar,
      customIcon: undefined,
    };
    if (selectedSlot === 'encoder') {
      onUpdateEncoderSubAction(selectedEncoderSub, updated);
    } else {
      onUpdateKeyAssignment(selectedSlot, updated);
    }
    setIconPickerOpen(false);
  };

  const handleSaveSmartAction = (smartData: any) => {
    const updated: KeyAssignment = {
      ...currentAssignment,
      type: 'macro',
      smartAction: smartData,
      label: smartData.terminalCmd ? 'Shell Run' : smartData.textPayload?.substring(0, 10) || 'Smart Action',
      customIcon: smartData.terminalCmd ? 'Terminal' : 'Sparkles',
    };
    if (selectedSlot === 'encoder') {
      onUpdateEncoderSubAction(selectedEncoderSub, updated);
    } else {
      onUpdateKeyAssignment(selectedSlot, updated);
    }
  };

  return (
    <div className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-4rem)] overflow-hidden select-none">
      {/* Left Workspace Panel: Macropad Visualizer & Layer Controls */}
      <div className="flex-1 flex flex-col items-center justify-between p-6 bg-[#07090e] border-r border-white/5 overflow-y-auto">
        {/* Top Controls: Profile & Layer Selectors */}
        <div className="w-full flex items-center justify-between gap-4 max-w-xl">
          {/* Profile Switcher */}
          <div className="flex items-center gap-2 bg-[#0e121b] p-1 rounded-xl border border-white/5">
            {profiles.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => onSelectProfile(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  idx === activeProfileIndex
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Simulation Mode Toggle Button (Preserves Pill Button Style) */}
          <button
            onClick={onToggleSimulating}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
              isSimulating
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 shadow-lg shadow-emerald-500/20'
                : 'bg-white/[0.04] border-white/10 text-neutral-300 hover:border-white/20 hover:text-white'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isSimulating ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500'
              }`}
            />
            {isSimulating ? 'Simulation on' : 'Simulation off'}
          </button>
        </div>

        {/* Layer Tabs Pill Navigation */}
        <div className="w-full max-w-xl flex items-center justify-between my-4 bg-[#0a0d14] p-1.5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {currentProfile.layers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSelectLayer(idx)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  idx === activeLayerIndex
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Layer {idx + 1}
              </button>
            ))}

            <button
              onClick={onAddLayer}
              className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white border border-white/5 transition-all"
              title="Add New Blank Layer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {currentProfile.layers.length > 1 && (
            <button
              onClick={() => onDeleteLayer(activeLayerIndex)}
              className="p-1.5 rounded-xl text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
              title="Delete Active Layer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Center: The Physical Macropad Visualizer */}
        {onboarding && <div className="w-full max-w-xl mt-3">{onboarding}</div>}

        <div className="my-auto py-2 flex flex-col items-center">
          <MacropadDevice
            currentLayer={currentLayer}
            selectedKey={selectedSlot}
            onSelectKey={(slot) => setSelectedSlot(slot)}
            isSimulating={isSimulating}
            activeSimulatedKey={activeSimulatedKey}
            dialAngle={dialAngle}
            onRotateCW={onRotateCW}
            onRotateCCW={onRotateCCW}
            onDialPress={onDialPress}
          />

          {/* Rotary Dial Sub-Action Capsule */}
          {selectedSlot === 'encoder' && (
            <div className="mt-4">
              <EncoderPopupCapsule
                assignment={currentLayer.encoder || { type: 'none' }}
                selectedSubAction={selectedEncoderSub}
                onSelectSubAction={setSelectedEncoderSub}
              />
            </div>
          )}
        </div>

        {/* Bottom Hardware Flash & Web Serial Action */}
        <div className="w-full max-w-xl flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span
              className={`w-2 h-2 rounded-full ${
                hardwareConnected ? 'bg-emerald-400' : 'bg-neutral-600'
              }`}
            />
            {hardwareConnected ? 'Ready for Flash' : 'Device not connected'}
          </div>

          <button
            onClick={onFlashKeymap}
            disabled={!hardwareConnected || hardwareSyncStatus === 'syncing'}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              !hardwareConnected
                ? 'bg-white/[0.04] text-neutral-500 cursor-not-allowed border border-white/5'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-95'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            {hardwareSyncStatus === 'syncing' ? 'Writing to Flash...' : 'Flash to RP2040'}
          </button>
        </div>
      </div>

      {/* Right Mapping Drawer Panel */}
      <div className="w-full lg:w-[460px] bg-[#0b0e17] border-l border-white/5 flex flex-col h-full overflow-hidden">
        {/* Drawer Header & Selected Slot Details */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                {selectedSlot === 'encoder'
                  ? `Dial [${selectedEncoderSub.toUpperCase()}]`
                  : `Key [${selectedSlot.toUpperCase()}]`}
              </span>
              <span className="text-xs text-neutral-400">Assignment Editor</span>
            </div>
            <div className="text-sm font-semibold text-white mt-0.5 truncate max-w-[260px]">
              {currentAssignment.label || currentAssignment.code || 'Unassigned'}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIconPickerOpen(true)}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-neutral-300 hover:text-white border border-white/5 text-xs transition-all"
              title="Change Key Icon"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </button>
            <button
              onClick={handleClearSlot}
              className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs transition-all"
              title="Clear Key Assignment"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mapping Sub-Tabs */}
        <div className="flex items-center gap-1 p-2 bg-[#080a11] border-b border-white/5 overflow-x-auto">
          {[
            { id: 'basic', label: 'Basic' },
            { id: 'media', label: 'Media' },
            { id: 'smart', label: 'Smart Action' },
            { id: 'multi-action', label: 'Multi-Step' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MappingTabId)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
          {activeTab === 'basic' && (
            <div className="space-y-6">
              {BASIC_KEY_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                    {section.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleApplyBasicKey(item.code, item.label, item.icon)}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-left text-xs text-neutral-200 hover:text-white transition-all group"
                      >
                        <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center font-mono text-[10px] text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {item.label.substring(0, 3)}
                        </span>
                        <div className="flex flex-col truncate">
                          <span className="font-medium truncate">{item.label}</span>
                          <span className="text-[10px] text-neutral-500 font-mono truncate">
                            {item.code}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-3">
              {[
                { label: 'Volume Up', code: 'KC_VOLU', icon: 'Volume2' },
                { label: 'Volume Down', code: 'KC_VOLD', icon: 'Volume2' },
                { label: 'Mute Audio', code: 'KC_MUTE', icon: 'VolumeX' },
                { label: 'Play / Pause', code: 'KC_MPLY', icon: 'Play' },
                { label: 'Next Track', code: 'KC_MNXT', icon: 'FastForward' },
                { label: 'Previous Track', code: 'KC_MPRV', icon: 'Rewind' },
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => handleApplyBasicKey(item.code, item.label, item.icon)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-xs text-neutral-200 hover:text-white transition-all"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="font-mono text-neutral-500">{item.code}</span>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'smart' && (
            <SmartActionEditor
              initialData={currentAssignment.smartAction}
              onSave={handleSaveSmartAction}
            />
          )}

          {activeTab === 'multi-action' && (
            <MultiActionEditor
              actionSteps={currentAssignment.actionSteps || []}
              onChange={(steps) => {
                const updated = {
                  ...currentAssignment,
                  type: 'macro' as const,
                  actionSteps: steps,
                };
                if (selectedSlot === 'encoder') {
                  onUpdateEncoderSubAction(selectedEncoderSub, updated);
                } else {
                  onUpdateKeyAssignment(selectedSlot, updated);
                }
              }}
            />
          )}
        </div>
      </div>

      {/* Dynamic Lazy Icon / Emoji Picker Popover */}
      {iconPickerOpen && (
        <IconPickerPopover
          isOpen={iconPickerOpen}
          onClose={() => setIconPickerOpen(false)}
          onSelectIcon={handleSelectIcon}
          onSelectEmoji={handleSelectEmoji}
        />
      )}
    </div>
  );
};
