import React from 'react';
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
