import React, { useState } from 'react';
import { Plus, Trash2, ArrowDown, Zap, Clock } from '../../icons';
import { ActionAdvanceStep, ActionToken } from '../../types';

export interface MultiActionEditorProps {
  actionSteps: ActionAdvanceStep[];
  onChange: (steps: ActionAdvanceStep[]) => void;
}

export function MultiActionEditor({ actionSteps, onChange }: MultiActionEditorProps) {
  const [tokens, setTokens] = useState<ActionToken[]>(
    actionSteps.length > 0 && actionSteps[0].actions ? actionSteps[0].actions : []
  );

  const handleAddKeyToken = (code: string, label: string) => {
    const next: ActionToken[] = [
      ...tokens,
      { id: Math.random().toString(36).slice(2), type: 'key', code, label },
    ];
    setTokens(next);
    onChange([{ id: 'step-1', trigger: 'press', actions: next }]);
  };

  const handleAddDelayToken = (ms: number) => {
    const next: ActionToken[] = [
      ...tokens,
      { id: Math.random().toString(36).slice(2), type: 'delay', label: `${ms}ms Pause`, delayMs: ms },
    ];
    setTokens(next);
    onChange([{ id: 'step-1', trigger: 'press', actions: next }]);
  };

  const handleRemoveToken = (idx: number) => {
    const next = tokens.filter((_, i) => i !== idx);
    setTokens(next);
    onChange([{ id: 'step-1', trigger: 'press', actions: next }]);
  };

  return (
    <div className="flex-1 flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          Sequential Macro Steps ({tokens.length})
        </h4>
        <div className="flex gap-1.5">
          <button
            onClick={() => handleAddDelayToken(50)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[11px] text-neutral-300 border border-white/5"
          >
            <Clock className="w-3 h-3 text-amber-400" />
            +50ms Delay
          </button>
        </div>
      </div>

      {/* Sequence List */}
      <div className="space-y-2 min-h-[140px] max-h-[220px] overflow-y-auto bg-[#080a11] border border-white/5 rounded-xl p-2 custom-scrollbar">
        {tokens.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-xs text-neutral-500 py-8">
            Click keys below to append actions to this macro sequence.
          </div>
        ) : (
          tokens.map((token, idx) => (
            <div
              key={token.id}
              className="flex items-center justify-between p-2 rounded-lg bg-[#151924] border border-white/5 text-xs text-white"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-white/10 text-[10px] font-mono flex items-center justify-center text-neutral-400">
                  {idx + 1}
                </span>
                <span className="font-medium">{token.label}</span>
                {token.type === 'delay' && (
                  <span className="text-[10px] text-amber-400 font-mono">Pause</span>
                )}
              </div>
              <button
                onClick={() => handleRemoveToken(idx)}
                className="text-neutral-500 hover:text-red-400 p-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Quick Add Palette */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono text-neutral-500 uppercase">Quick Add Key Event</span>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: 'Ctrl+C', code: 'LCTL(KC_C)' },
            { label: 'Ctrl+V', code: 'LCTL(KC_V)' },
            { label: 'Enter ⏎', code: 'KC_ENT' },
            { label: 'Tab ⇥', code: 'KC_TAB' },
            { label: 'Esc', code: 'KC_ESC' },
            { label: 'Space ␣', code: 'KC_SPC' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleAddKeyToken(item.code, item.label)}
              className="py-1.5 px-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-xs text-neutral-300 hover:text-white font-mono text-center"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
