import React from 'react';
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
