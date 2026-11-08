import React, { useState } from 'react';
import { Terminal, Type, Zap, Mouse, Check } from '../../icons';
import { MouseActionId, SmartActionPayload, SmartActionSubTab } from '../../types';

export interface SmartActionEditorProps {
  initialData?: SmartActionPayload;
  onSave?: (data: SmartActionPayload) => void;
}

export function SmartActionEditor({ initialData, onSave }: SmartActionEditorProps) {
  const [subTab, setSubTab] = useState<SmartActionSubTab>(initialData?.type || 'text');
  const [textVal, setTextVal] = useState(initialData?.textPayload || '');
  const [cmdVal, setCmdVal] = useState(initialData?.terminalCmd || '');
  const [mouseVal, setMouseVal] = useState<MouseActionId>(
    initialData?.mouseAction ?? 'left_click'
  );

  const handleApply = () => {
    if (!onSave) return;
    if (subTab === 'text') {
      onSave({ type: 'text', textPayload: textVal });
    } else if (subTab === 'terminal') {
      onSave({ type: 'terminal', terminalCmd: cmdVal });
    } else if (subTab === 'mouse') {
      onSave({ type: 'mouse', mouseAction: mouseVal });
    }
  };

  return (
    <div className="flex-1 flex flex-col space-y-4">
      {/* Sub Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/[0.03] rounded-xl border border-white/5">
        {[
          { id: 'text', label: 'Type Text', icon: Type },
          { id: 'terminal', label: 'Run Shell', icon: Terminal },
          { id: 'mouse', label: 'Mouse Click', icon: Mouse },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = subTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSubTab(tab.id as SmartActionSubTab)}
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      {subTab === 'text' && (
        <div className="space-y-3">
          <label className="text-xs font-mono text-neutral-400">Text to Type Automatically</label>
          <textarea
            aria-label="Text to type"
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            placeholder="Enter words, snippet, or URL to type instantly..."
            rows={4}
            className="w-full bg-[#151924] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 resize-none font-mono"
          />
        </div>
      )}

      {subTab === 'terminal' && (
        <div className="space-y-3">
          <label className="text-xs font-mono text-neutral-400">Terminal Shell Command</label>
          <input
            type="text"
            aria-label="Terminal command"
            value={cmdVal}
            onChange={(e) => setCmdVal(e.target.value)}
            placeholder="e.g. git status, npm run build, docker ps"
            className="w-full bg-[#151924] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 font-mono"
          />
          <p className="text-[11px] text-neutral-500 leading-relaxed">
            Executed with safe sandboxed args via the host companion app without terminal flash.
          </p>
        </div>
      )}

      {subTab === 'mouse' && (
        <div className="space-y-3">
          <label className="text-xs font-mono text-neutral-400">Mouse Click Action</label>
          <div className="grid grid-cols-2 gap-2">
            {([
              { id: 'left_click', label: 'Left Click' },
              { id: 'right_click', label: 'Right Click' },
              { id: 'middle_click', label: 'Middle Click' },
              { id: 'double_click', label: 'Double Click' },
              { id: 'scroll_up', label: 'Scroll Up' },
              { id: 'scroll_down', label: 'Scroll Down' },
            ] as { id: MouseActionId; label: string }[]).map((m) => (
              <button
                key={m.id}
                onClick={() => setMouseVal(m.id)}
                className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                  mouseVal === m.id
                    ? 'bg-blue-600/20 border-blue-500 text-blue-400'
                    : 'bg-white/[0.03] border-white/5 text-neutral-300 hover:text-white'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleApply}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg shadow-blue-500/20 active:scale-95 transition-all mt-4"
      >
        <Check className="w-4 h-4" />
        Apply Smart Action to Selected Key
      </button>
    </div>
  );
}
