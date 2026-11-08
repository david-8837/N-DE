import React from 'react';
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
