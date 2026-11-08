import React from 'react';
import { RotateCw, RotateCcw, Disc } from '../icons';
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
