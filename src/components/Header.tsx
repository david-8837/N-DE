import React from 'react';
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
