import React from 'react';
import { Plus } from '../icons';
import { KeyAssignment } from '../types';
import { LazyIcon } from './LazyIcon';

export interface IsometricKeyIconProps {
  assignment: KeyAssignment;
  isSimulating?: boolean;
}

export const IsometricKeyIcon: React.FC<IsometricKeyIconProps> = ({ assignment }) => {
  if (assignment.type === 'none') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-neutral-600">
        <Plus className="w-5 h-5 opacity-40 group-hover:opacity-80 transition-opacity" />
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

  return (
    <div className="flex flex-col items-center justify-center gap-1.5 w-full">
      <LazyIcon name={iconName} className="w-5 h-5 text-neutral-200 drop-shadow" />
      {assignment.label && (
        <span className="text-[11px] font-semibold text-white/90 tracking-tight text-center max-w-[70px] truncate leading-none">
          {assignment.label}
        </span>
      )}
    </div>
  );
};
