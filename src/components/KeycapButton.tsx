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

function slotLabel(slot: KeySlotId): string {
  if (slot === 'encoder') return 'Rotary dial';
  return `Row ${slot[1]} column ${slot[3]}`;
}

function assignmentLabel(assignment: KeyAssignment): string {
  if (assignment.label) return assignment.label;
  if (assignment.code) return assignment.code.replace(/^KC_/, '').replace(/_/g, ' ');
  if (assignment.type === 'none') return 'unassigned';
  if (assignment.type === 'layer' && assignment.targetLayer !== undefined) {
    return `Layer ${assignment.targetLayer + 1}`;
  }
  return assignment.type;
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
  const label = `${slotLabel(slot)}: ${assignmentLabel(assignment)}`;

  return (
    <button
      type="button"
      draggable={!isSimulating}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={onClick}
      aria-label={label}
      aria-pressed={!!isSelected}
      className={`relative w-20 h-20 rounded-2xl p-1.5 flex flex-col items-center justify-center cursor-pointer transition-all duration-150 select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e121b] ${
        isPressed ? 'scale-95 translate-y-1' : 'hover:-translate-y-0.5'
      } ${
        isSelected
          ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-[#0e121b]'
          : 'hover:ring-1 hover:ring-blue-400/50'
      }`}
    >
      <span
        className={`w-full h-full rounded-xl flex flex-col items-center justify-center border transition-all ${
          hasColor
            ? 'border-white/20 text-white shadow-lg'
            : 'bg-[#151924] border-white/10 text-neutral-300 group-hover:border-white/20 group-hover:bg-[#1a2030]'
        }`}
        style={bgStyle}
      >
        <IsometricKeyIcon assignment={assignment} isSimulating={isSimulating} />
      </span>
    </button>
  );
};
