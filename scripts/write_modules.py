import os
import shutil

# Clean stale components
if os.path.exists('src/components/MappingDrawer'):
    shutil.rmtree('src/components/MappingDrawer')
if os.path.exists('src/components/MacroEditor/ActionStepEditor.tsx'):
    os.remove('src/components/MacroEditor/ActionStepEditor.tsx')

os.makedirs('src/types', exist_ok=True)
os.makedirs('src/constants', exist_ok=True)
os.makedirs('src/utils', exist_ok=True)
os.makedirs('src/views', exist_ok=True)
os.makedirs('src/components/KeyMatrix', exist_ok=True)
os.makedirs('src/components/LightingControls', exist_ok=True)
os.makedirs('src/components/HardwareSync', exist_ok=True)
os.makedirs('src/components/MacroEditor', exist_ok=True)
os.makedirs('src/hooks', exist_ok=True)
os.makedirs('src/__tests__', exist_ok=True)

# 1. Header.tsx
with open('src/components/Header.tsx', 'w') as f:
    f.write('''import React from 'react';
import { Layers, Sliders, Cpu, Sparkles } from 'lucide-react';

export interface HeaderProps {
  activeNav: string;
  setActiveNav: (tab: string) => void;
  hardwareConnected: boolean;
  onConnectHardware: () => void;
  onDisconnectHardware: () => void;
  hardwareSyncStatus: 'idle' | 'syncing' | 'synced' | 'error';
  onNavigateToHardware: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  setActiveNav,
  hardwareConnected,
  onConnectHardware,
  onDisconnectHardware,
  hardwareSyncStatus,
  onNavigateToHardware,
}) => {
  return (
    <header className="h-16 border-b border-white/5 bg-[#090c14]/90 backdrop-blur-xl px-6 flex items-center justify-between select-none z-30 sticky top-0">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-mono font-black text-white text-base shadow-lg shadow-blue-500/20">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-widest text-white uppercase font-mono">
              NØDE
            </span>
            <span className="text-[10px] text-neutral-400 font-mono -mt-1 tracking-tight">
              GRID MACRO 1
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5">
          {[
            { id: 'Keymap', label: 'Keymap Studio', icon: Layers },
            { id: 'Presets', label: 'Presets Library', icon: Sparkles },
            { id: 'Hardware', label: 'RP2040 Hardware', icon: Cpu },
            { id: 'Settings', label: 'App Settings', icon: Sliders },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeNav === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveNav(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={hardwareConnected ? onDisconnectHardware : onConnectHardware}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
            hardwareConnected
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
              : 'bg-neutral-900 border-white/10 text-neutral-400 hover:text-white hover:border-white/20'
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              hardwareConnected ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-600'
            }`}
          />
          {hardwareConnected ? 'RP2040 Connected' : 'Connect Device'}
        </button>

        <button
          onClick={onNavigateToHardware}
          className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-neutral-400 hover:text-white transition-all text-xs"
          title="Hardware Manager & Pinout"
        >
          <Cpu className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
''')

# 2. CustomPickerIcon.tsx
with open('src/components/CustomPickerIcon.tsx', 'w') as f:
    f.write('''import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface CustomPickerIconProps {
  name: string;
  className?: string;
}

export const CustomPickerIcon: React.FC<CustomPickerIconProps> = ({ name, className = 'w-4 h-4' }) => {
  const IconComp = (LucideIcons as any)[name] || LucideIcons.Sparkles;
  return <IconComp className={className} />;
};
''')

# 3. EmptyKeyPlusIcon.tsx
with open('src/components/EmptyKeyPlusIcon.tsx', 'w') as f:
    f.write('''import React from 'react';
import { Plus } from 'lucide-react';

export const EmptyKeyPlusIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <div className="flex flex-col items-center justify-center text-neutral-500 group-hover:text-neutral-300 transition-colors">
      <Plus className={className} />
    </div>
  );
};
''')

# 4. PresetAppIcon.tsx
with open('src/components/PresetAppIcon.tsx', 'w') as f:
    f.write('''import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface PresetAppIconProps {
  iconId: string;
  className?: string;
}

export const PresetAppIcon: React.FC<PresetAppIconProps> = ({ iconId, className = 'w-6 h-6' }) => {
  const iconMap: Record<string, string> = {
    Framer: 'Layers',
    Photoshop: 'Brush',
    Premiere: 'Video',
    VSCode: 'Code2',
    Blender: 'Box',
    Figma: 'PenTool',
    Ableton: 'Music',
    Discord: 'MessageSquare',
  };

  const resolved = iconMap[iconId] || iconId || 'Sparkles';
  const IconComp = (LucideIcons as any)[resolved] || LucideIcons.Sparkles;

  return <IconComp className={className} />;
};
''')

# 5. IsometricKeyIcon.tsx
with open('src/components/IsometricKeyIcon.tsx', 'w') as f:
    f.write('''import React from 'react';
import * as LucideIcons from 'lucide-react';
import { KeyAssignment } from '../types';

export interface IsometricKeyIconProps {
  assignment: KeyAssignment;
  isSimulating?: boolean;
}

export const IsometricKeyIcon: React.FC<IsometricKeyIconProps> = ({ assignment }) => {
  if (assignment.type === 'none') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600">
        <LucideIcons.Plus className="w-5 h-5 opacity-40 group-hover:opacity-80 transition-opacity" />
      </div>
    );
  }

  if (assignment.customEmoji) {
    return (
      <div className="text-2xl select-none filter drop-shadow-md">
        {assignment.customEmoji}
      </div>
    );
  }

  const iconName = assignment.customIcon || 'Sparkles';
  const IconComp = (LucideIcons as any)[iconName] || LucideIcons.Sparkles;

  return (
    <div className="flex flex-col items-center justify-center gap-1.5 w-full">
      <IconComp className="w-5 h-5 text-neutral-200 drop-shadow" />
      {assignment.label && (
        <span className="text-[11px] font-semibold text-white/90 tracking-tight text-center max-w-[70px] truncate leading-none">
          {assignment.label}
        </span>
      )}
    </div>
  );
};
''')

# 6. KnobControl.tsx
with open('src/components/KnobControl.tsx', 'w') as f:
    f.write('''import React from 'react';
import { KeyAssignment } from '../types';

export interface KnobControlProps {
  assignment: KeyAssignment;
  dialAngle: number;
  isSelected?: boolean;
  onClick?: () => void;
  onRotateCW?: () => void;
  onRotateCCW?: () => void;
  onPress?: () => void;
  isSimulating?: boolean;
}

export const KnobControl: React.FC<KnobControlProps> = ({
  dialAngle,
  isSelected,
  onClick,
  onRotateCW,
  onRotateCCW,
  onPress,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-20 h-20 rounded-full cursor-pointer flex items-center justify-center transition-all group select-none ${
        isSelected
          ? 'ring-2 ring-blue-500 ring-offset-4 ring-offset-[#0e121b]'
          : 'hover:ring-1 hover:ring-white/20'
      }`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#2a3042] to-[#121520] shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.15)]" />
      <div
        className="relative w-16 h-16 rounded-full bg-[#181d2a] border border-white/10 flex items-center justify-center transition-transform duration-100 ease-out shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]"
        style={{ transform: `rotate(${dialAngle}deg)` }}
      >
        <div className="absolute top-2 w-1.5 h-3 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
        <div className="w-8 h-8 rounded-full bg-[#0d1017] border border-white/5 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-blue-600/30" />
        </div>
      </div>
    </div>
  );
};
''')

# 7. FlatDialControl.tsx
with open('src/components/FlatDialControl.tsx', 'w') as f:
    f.write('''import React from 'react';
import { RotateCw, RotateCcw, Disc } from 'lucide-react';
import { KeyAssignment } from '../types';

export interface FlatDialControlProps {
  assignment: KeyAssignment;
  onSelectAction?: (action: 'cw' | 'press' | 'ccw') => void;
  selectedAction?: 'cw' | 'press' | 'ccw';
  interactive?: boolean;
}

export const FlatDialControl: React.FC<FlatDialControlProps> = ({
  assignment,
  onSelectAction,
  selectedAction,
  interactive = true,
}) => {
  const cw = assignment?.encoderActions?.cw;
  const press = assignment?.encoderActions?.press;
  const ccw = assignment?.encoderActions?.ccw;

  return (
    <div className="flex flex-col items-center select-none">
      <div className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 mb-2 font-semibold">
        Dial / Rotary Knob
      </div>
      <div className="flex items-center gap-1.5 p-1.5 bg-[#0e121b] border border-blue-500/30 rounded-2xl shadow-xl backdrop-blur-md">
        <button
          onClick={() => interactive && onSelectAction && onSelectAction('ccw')}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
            selectedAction === 'ccw'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-semibold'
              : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-neutral-400 uppercase font-mono">CCW</span>
            <span className="text-xs font-medium max-w-[80px] truncate">
              {ccw?.label || 'Turn Left'}
            </span>
          </div>
        </button>

        <button
          onClick={() => interactive && onSelectAction && onSelectAction('press')}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all ${
            selectedAction === 'press'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-semibold'
              : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white'
          }`}
        >
          <Disc className="w-3.5 h-3.5" />
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-neutral-400 uppercase font-mono">Press</span>
            <span className="text-xs font-medium max-w-[80px] truncate">
              {press?.label || 'Click'}
            </span>
          </div>
        </button>

        <button
          onClick={() => interactive && onSelectAction && onSelectAction('cw')}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
            selectedAction === 'cw'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-semibold'
              : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white'
          }`}
        >
          <RotateCw className="w-3.5 h-3.5" />
          <div className="flex flex-col text-left">
            <span className="text-[9px] text-neutral-400 uppercase font-mono">CW</span>
            <span className="text-xs font-medium max-w-[80px] truncate">
              {cw?.label || 'Turn Right'}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
''')

# 8. EncoderPopupCapsule.tsx
with open('src/components/EncoderPopupCapsule.tsx', 'w') as f:
    f.write('''import React from 'react';
import { RotateCw, RotateCcw, Disc } from 'lucide-react';
import { EncoderSubActionId, KeyAssignment } from '../types';

export interface EncoderPopupCapsuleProps {
  assignment: KeyAssignment;
  selectedSubAction: EncoderSubActionId;
  onSelectSubAction: (sub: EncoderSubActionId) => void;
}

export const EncoderPopupCapsule: React.FC<EncoderPopupCapsuleProps> = ({
  assignment,
  selectedSubAction,
  onSelectSubAction,
}) => {
  const cw = assignment?.encoderActions?.cw;
  const press = assignment?.encoderActions?.press;
  const ccw = assignment?.encoderActions?.ccw;

  return (
    <div className="flex items-center gap-2 p-1.5 bg-[#0a0d14]/90 border border-blue-500/40 rounded-2xl shadow-2xl backdrop-blur-xl">
      <button
        onClick={() => onSelectSubAction('ccw')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all ${
          selectedSubAction === 'ccw'
            ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/30'
            : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08]'
        }`}
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span className="truncate max-w-[70px]">{ccw?.label || 'CCW'}</span>
      </button>

      <button
        onClick={() => onSelectSubAction('press')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all ${
          selectedSubAction === 'press'
            ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/30'
            : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08]'
        }`}
      >
        <Disc className="w-3.5 h-3.5" />
        <span className="truncate max-w-[70px]">{press?.label || 'Press'}</span>
      </button>

      <button
        onClick={() => onSelectSubAction('cw')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all ${
          selectedSubAction === 'cw'
            ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/30'
            : 'bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08]'
        }`}
      >
        <RotateCw className="w-3.5 h-3.5" />
        <span className="truncate max-w-[70px]">{cw?.label || 'CW'}</span>
      </button>
    </div>
  );
};
''')

# 9. KeycapButton.tsx
with open('src/components/KeycapButton.tsx', 'w') as f:
    f.write('''import React from 'react';
import { KeyAssignment, KeySlotId } from '../types';
import { IsometricKeyIcon } from './IsometricKeyIcon';

export interface KeycapButtonProps {
  slot: KeySlotId;
  assignment: KeyAssignment;
  isSelected?: boolean;
  isSimulating?: boolean;
  isPressed?: boolean;
  onClick?: () => void;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
}

export const KeycapButton: React.FC<KeycapButtonProps> = ({
  slot,
  assignment,
  isSelected,
  isSimulating,
  isPressed,
  onClick,
  onDragStart,
  onDragOver,
  onDrop,
}) => {
  const hasColor = assignment.type === 'preset' && assignment.themeColor;
  const bgStyle = hasColor ? { backgroundColor: assignment.themeColor } : {};

  return (
    <div
      draggable={!isSimulating}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={onClick}
      className={`relative w-20 h-20 rounded-2xl p-1.5 flex flex-col items-center justify-center cursor-pointer transition-all duration-150 select-none group ${
        isPressed ? 'scale-95 translate-y-1' : 'hover:-translate-y-0.5'
      } ${
        isSelected
          ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-[#0e121b]'
          : 'hover:ring-1 hover:ring-blue-400/50'
      }`}
    >
      <div
        className={`w-full h-full rounded-xl flex flex-col items-center justify-center border transition-all ${
          hasColor
            ? 'border-white/20 text-white shadow-lg'
            : 'bg-[#151924] border-white/10 text-neutral-300 group-hover:border-white/20 group-hover:bg-[#1a2030]'
        }`}
        style={bgStyle}
      >
        <IsometricKeyIcon assignment={assignment} isSimulating={isSimulating} />
      </div>
    </div>
  );
};
''')

# 10. MacropadDevice.tsx
with open('src/components/MacropadDevice.tsx', 'w') as f:
    f.write('''import React from 'react';
import { KeySlotId, LayerKeymap } from '../types';
import { KeycapButton } from './KeycapButton';
import { KnobControl } from './KnobControl';

export interface MacropadDeviceProps {
  currentLayer: LayerKeymap;
  selectedKey: KeySlotId;
  onSelectKey: (slot: KeySlotId) => void;
  isSimulating: boolean;
  activeSimulatedKey: string | null;
  dialAngle: number;
  onRotateCW: () => void;
  onRotateCCW: () => void;
  onDialPress: () => void;
  onKeyDragStart?: (slot: KeySlotId, e: React.DragEvent) => void;
  onKeyDragOver?: (e: React.DragEvent) => void;
  onKeyDrop?: (targetSlot: KeySlotId, e: React.DragEvent) => void;
}

export const MacropadDevice: React.FC<MacropadDeviceProps> = ({
  currentLayer,
  selectedKey,
  onSelectKey,
  isSimulating,
  activeSimulatedKey,
  dialAngle,
  onRotateCW,
  onRotateCCW,
  onDialPress,
  onKeyDragStart,
  onKeyDragOver,
  onKeyDrop,
}) => {
  return (
    <div className="relative p-7 bg-[#0b0e17] border border-white/10 rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col items-center">
      {/* Top Status & Accent */}
      <div className="w-full flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
            NØDE RP2040-ZERO
          </span>
        </div>
        <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
          {isSimulating ? 'SIMULATION MODE' : 'EDIT MODE'}
        </div>
      </div>

      {/* 3x3 Grid Matrix + Encoder */}
      <div className="grid grid-cols-3 gap-3.5">
        {(['r1c1', 'r1c2', 'r1c3', 'r2c1', 'r2c2', 'r2c3', 'r3c1', 'r3c2', 'r3c3'] as KeySlotId[]).map(
          (slot) => (
            <KeycapButton
              key={slot}
              slot={slot}
              assignment={currentLayer[slot] || { type: 'none' }}
              isSelected={selectedKey === slot}
              isSimulating={isSimulating}
              isPressed={activeSimulatedKey === slot}
              onClick={() => onSelectKey(slot)}
              onDragStart={(e) => onKeyDragStart && onKeyDragStart(slot, e)}
              onDragOver={onKeyDragOver}
              onDrop={(e) => onKeyDrop && onKeyDrop(slot, e)}
            />
          )
        )}
      </div>

      {/* Rotary Encoder Knob */}
      <div className="mt-6 flex flex-col items-center">
        <KnobControl
          assignment={currentLayer.encoder || { type: 'none' }}
          dialAngle={dialAngle}
          isSelected={selectedKey === 'encoder'}
          onClick={() => onSelectKey('encoder')}
          onRotateCW={onRotateCW}
          onRotateCCW={onRotateCCW}
          onPress={onDialPress}
          isSimulating={isSimulating}
        />
      </div>
    </div>
  );
};
''')

# 11. PresetsLibraryView.tsx
with open('src/views/PresetsLibraryView.tsx', 'w') as f:
    f.write('''import React, { useState } from 'react';
import { Search, Sparkles, Download, Check, Eye } from 'lucide-react';
import { PresetItem, ProfileData } from '../types';
import { PRESET_LIBRARY } from '../constants/presets';
import { PresetAppIcon } from '../components/PresetAppIcon';
import { isPresetAppliedInProfile } from '../utils/helpers';

export interface PresetsLibraryViewProps {
  currentProfile: ProfileData;
  onPreviewPreset: (preset: PresetItem) => void;
  onApplyPreset: (presetId: string) => void;
}

export const PresetsLibraryView: React.FC<PresetsLibraryViewProps> = ({
  currentProfile,
  onPreviewPreset,
  onApplyPreset,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPresets = PRESET_LIBRARY.filter((preset) => {
    const q = searchQuery.toLowerCase();
    return (
      preset.name.toLowerCase().includes(q) ||
      preset.tagline.toLowerCase().includes(q) ||
      preset.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex-1 flex flex-col p-8 max-w-6xl mx-auto w-full select-none">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-blue-400" />
            Preset Community Library
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Production-ready workflow templates for Framer, Photoshop, Premiere, VS Code and more.
          </p>
        </div>

        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search workflows, tools, tags..."
            className="w-full bg-[#0b0e17] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
      </div>

      {/* Preset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPresets.map((preset) => {
          const isApplied = isPresetAppliedInProfile(currentProfile, preset.id);

          return (
            <div
              key={preset.id}
              className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div
                className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br ${preset.bannerGradient} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: preset.color }}
                    >
                      <PresetAppIcon iconId={preset.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {preset.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5 font-mono">
                        <span>by {preset.author}</span>
                        <span>•</span>
                        <span>{preset.downloads} users</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                  {preset.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {preset.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => onPreviewPreset(preset)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-neutral-300 hover:text-white transition-all border border-white/5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Preview Details
                </button>

                <button
                  onClick={() => onApplyPreset(preset.id)}
                  disabled={isApplied}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                    isApplied
                      ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 active:scale-95'
                  }`}
                >
                  {isApplied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Applied
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      Apply Preset
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
''')

# 12. PresetPreviewView.tsx
with open('src/views/PresetPreviewView.tsx', 'w') as f:
    f.write('''import React from 'react';
import { ArrowLeft, Check, Download, Layers } from 'lucide-react';
import { PresetItem } from '../types';
import { FlatDialControl } from '../components/FlatDialControl';
import { PresetAppIcon } from '../components/PresetAppIcon';
import { getToolIconId } from '../constants/presets';
import * as LucideIcons from 'lucide-react';

export interface PresetPreviewViewProps {
  preset: PresetItem;
  onBack: () => void;
  onApply: () => void;
  isApplied: boolean;
}

export const PresetPreviewView: React.FC<PresetPreviewViewProps> = ({
  preset,
  onBack,
  onApply,
  isApplied,
}) => {
  const slots = ['r1c1', 'r1c2', 'r1c3', 'r2c1', 'r2c2', 'r2c3', 'r3c1', 'r3c2', 'r3c3'];

  return (
    <div className="flex-1 flex flex-col p-8 max-w-5xl mx-auto w-full select-none">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-sm text-neutral-300 hover:text-white transition-all border border-white/5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Presets
        </button>

        <button
          onClick={onApply}
          disabled={isApplied}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg ${
            isApplied
              ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/25 active:scale-95'
          }`}
        >
          {isApplied ? (
            <>
              <Check className="w-4 h-4" />
              Applied to Current Profile
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Apply Preset to Profile
            </>
          )}
        </button>
      </div>

      {/* Preset Hero Card */}
      <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden">
        <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br ${preset.bannerGradient} blur-3xl opacity-40`} />
        <div className="relative z-10 flex items-start gap-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0"
            style={{ backgroundColor: preset.color }}
          >
            <PresetAppIcon iconId={preset.icon} className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">{preset.name}</h1>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed mb-4">
              {preset.tagline}
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
              <span>Author: <span className="text-neutral-300">{preset.author}</span></span>
              <span>Downloads: <span className="text-neutral-300">{preset.downloads}</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Breakdown Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Visual Macropad Grid */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-6 flex flex-col items-center">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
            Macropad Layout Mapping (3×3 Grid)
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {slots.map((slot) => {
              const label = preset.breakdown[slot] || 'Unassigned';
              const iconName = getToolIconId(label);
              const IconComp = (LucideIcons as any)[iconName] || LucideIcons.Sparkles;

              return (
                <div
                  key={slot}
                  className="w-20 h-20 rounded-2xl p-2 flex flex-col items-center justify-center text-white shadow-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: preset.color }}
                >
                  <IconComp className="w-5 h-5 mb-1 opacity-90 drop-shadow" />
                  <span className="text-[10px] font-semibold tracking-tight text-center truncate max-w-[65px]">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Rotary Knob Preview */}
          <div className="w-full pt-4 border-t border-white/5 flex flex-col items-center">
            <FlatDialControl
              assignment={{
                type: 'preset',
                label: preset.encoderConfig?.press || 'Dial',
                themeColor: preset.color,
                encoderActions: {
                  cw: { type: 'preset', label: preset.encoderConfig?.cw || 'CW', themeColor: preset.color },
                  press: { type: 'preset', label: preset.encoderConfig?.press || 'Press', themeColor: preset.color },
                  ccw: { type: 'preset', label: preset.encoderConfig?.ccw || 'CCW', themeColor: preset.color },
                },
              }}
              interactive={false}
            />
          </div>
        </div>

        {/* Detailed Breakdown List */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-6">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
            Key Binding Specifications
          </div>

          <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
            {slots.map((slot, index) => {
              const label = preset.breakdown[slot] || 'Unassigned';
              const iconName = getToolIconId(label);
              const IconComp = (LucideIcons as any)[iconName] || LucideIcons.Sparkles;

              return (
                <div
                  key={slot}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white/5 text-[11px] font-mono font-bold text-neutral-400 flex items-center justify-center">
                      K{index + 1}
                    </span>
                    <IconComp className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 uppercase">{slot}</span>
                </div>
              );
            })}

            {preset.encoderConfig && (
              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-neutral-400 uppercase">
                  Rotary Dial Actions
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-neutral-400">CCW (Left Turn)</span>
                  <span className="text-white font-mono">{preset.encoderConfig.ccw}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-neutral-400">Press (Click)</span>
                  <span className="text-white font-mono">{preset.encoderConfig.press}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-neutral-400">CW (Right Turn)</span>
                  <span className="text-white font-mono">{preset.encoderConfig.cw}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
''')

# 13. SettingsView.tsx
with open('src/views/SettingsView.tsx', 'w') as f:
    f.write('''import React from 'react';
import { Sliders, Shield, Bell, RefreshCw } from 'lucide-react';
import { SettingsSwitch } from '../utils/helpers';

export interface SettingsViewProps {
  allowAnalytics: boolean;
  setAllowAnalytics: (val: boolean) => void;
  launchAtStartup: boolean;
  setLaunchAtStartup: (val: boolean) => void;
  allowTerminalSmartActions: boolean;
  setAllowTerminalSmartActions: (val: boolean) => void;
  allowDeviceNotifications: boolean;
  setAllowDeviceNotifications: (val: boolean) => void;
  onResetFactoryDefaults: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  allowAnalytics,
  setAllowAnalytics,
  launchAtStartup,
  setLaunchAtStartup,
  allowTerminalSmartActions,
  setAllowTerminalSmartActions,
  allowDeviceNotifications,
  setAllowDeviceNotifications,
  onResetFactoryDefaults,
}) => {
  return (
    <div className="flex-1 flex flex-col p-8 max-w-4xl mx-auto w-full select-none">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
          <Sliders className="w-6 h-6 text-blue-400" />
          Application Settings
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          Configure desktop application preferences, security sandboxing, and device interaction.
        </p>
      </div>

      <div className="space-y-6">
        {/* Security & Smart Action Permissions */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Shield className="w-5 h-5 text-blue-400" />
            <h2 className="text-base font-semibold text-white">Security & Execution Sandbox</h2>
          </div>
          <div className="space-y-3">
            <SettingsSwitch
              checked={allowTerminalSmartActions}
              onChange={setAllowTerminalSmartActions}
              title="Allow Local Terminal & Shell Execution"
              description="Permit Smart Actions to run developer commands (git, npm, docker) via sanitized background execution."
            />
            <SettingsSwitch
              checked={allowAnalytics}
              onChange={setAllowAnalytics}
              title="Anonymous Telemetry & Crash Reporting"
              description="Help improve NØDE firmware stability by sharing anonymous diagnostics."
            />
          </div>
        </div>

        {/* System & Startup */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <Bell className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base font-semibold text-white">System & Notifications</h2>
          </div>
          <div className="space-y-3">
            <SettingsSwitch
              checked={launchAtStartup}
              onChange={setLaunchAtStartup}
              title="Launch at Windows Startup"
              description="Start NØDE Grid Macro 1 background daemon in system tray on boot."
            />
            <SettingsSwitch
              checked={allowDeviceNotifications}
              onChange={setAllowDeviceNotifications}
              title="Hardware Connection Notifications"
              description="Show OS desktop toast notifications when RP2040-Zero is connected or disconnected."
            />
          </div>
        </div>

        {/* Version and Diagnostics */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Node app version:</div>
            <div className="text-xs font-mono text-neutral-400 mt-0.5">v1.0.2 (Build 2026.11)</div>
          </div>

          <button
            onClick={onResetFactoryDefaults}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-medium transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset to Factory Defaults
          </button>
        </div>
      </div>
    </div>
  );
};
''')

# 14. HardwareManagerView.tsx
with open('src/views/HardwareManagerView.tsx', 'w') as f:
    f.write('''import React, { useState } from 'react';
import { ArrowLeft, Cpu, Download, RefreshCw, Terminal } from 'lucide-react';
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
        <div className="bg-[#0b0e17] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
            <RefreshCw className={`w-8 h-8 ${hardwareSyncStatus === 'syncing' ? 'animate-spin' : ''}`} />
          </div>

          <h3 className="text-lg font-bold text-white mb-2">Web Serial Keymap Flash</h3>
          <p className="text-xs text-neutral-400 max-w-md mb-6 leading-relaxed">
            Transmit active 3×3 matrix bindings, multi-gesture triggers, and dial macros directly to RP2040-Zero flash memory without installing external drivers.
          </p>

          <button
            onClick={onSyncKeymap}
            disabled={!hardwareConnected || hardwareSyncStatus === 'syncing'}
            className={`px-8 py-3 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all shadow-xl ${
              !hardwareConnected
                ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30 active:scale-95'
            }`}
          >
            {hardwareSyncStatus === 'syncing' ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Flashing Keymap Payload...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Write Active Keymap to Device Flash
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
''')

print('Wrote all submodules successfully!')
