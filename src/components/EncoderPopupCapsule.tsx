import React from 'react';
import { RotateCw, RotateCcw, Disc } from '../icons';
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
