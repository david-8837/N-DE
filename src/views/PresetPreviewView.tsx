import React from 'react';
import { ArrowLeft, Check, Download, Layers } from 'lucide-react';
import { PresetItem } from '../types';
import { FlatDialControl } from '../components/FlatDialControl';
import { PresetAppIcon } from '../components/PresetAppIcon';
import { getToolIconId } from '../constants/presets';
import * as LucideIcons from 'lucide-react';

export interface PresetPreviewViewProps {
  preset: PresetItem;
  onBack: () => void;
  onApply: () => void;
  isApplied: boolean;
}

export const PresetPreviewView: React.FC<PresetPreviewViewProps> = ({
  preset,
  onBack,
  onApply,
  isApplied,
}) => {
  const slots = ['r1c1', 'r1c2', 'r1c3', 'r2c1', 'r2c2', 'r2c3', 'r3c1', 'r3c2', 'r3c3'];

  return (
    <div className="flex-1 flex flex-col p-8 max-w-5xl mx-auto w-full select-none">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-sm text-neutral-300 hover:text-white transition-all border border-white/5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Presets
        </button>

        <button
          onClick={onApply}
          disabled={isApplied}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg ${
            isApplied
              ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-500/25 active:scale-95'
          }`}
        >
          {isApplied ? (
            <>
              <Check className="w-4 h-4" />
              Applied to Current Profile
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Apply Preset to Profile
            </>
          )}
        </button>
      </div>

      {/* Preset Hero Card */}
      <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden">
        <div className={`absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br ${preset.bannerGradient} blur-3xl opacity-40`} />
        <div className="relative z-10 flex items-start gap-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0"
            style={{ backgroundColor: preset.color }}
          >
            <PresetAppIcon iconId={preset.icon} className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">{preset.name}</h1>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed mb-4">
              {preset.tagline}
            </p>
            <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
              <span>Author: <span className="text-neutral-300">{preset.author}</span></span>
              <span>Downloads: <span className="text-neutral-300">{preset.downloads}</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Breakdown Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Visual Macropad Grid */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-6 flex flex-col items-center">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6">
            Macropad Layout Mapping (3×3 Grid)
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {slots.map((slot) => {
              const label = preset.breakdown[slot] || 'Unassigned';
              const iconName = getToolIconId(label);
              const IconComp = (LucideIcons as any)[iconName] || LucideIcons.Sparkles;

              return (
                <div
                  key={slot}
                  className="w-20 h-20 rounded-2xl p-2 flex flex-col items-center justify-center text-white shadow-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: preset.color }}
                >
                  <IconComp className="w-5 h-5 mb-1 opacity-90 drop-shadow" />
                  <span className="text-[10px] font-semibold tracking-tight text-center truncate max-w-[65px]">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Rotary Knob Preview */}
          <div className="w-full pt-4 border-t border-white/5 flex flex-col items-center">
            <FlatDialControl
              assignment={{
                type: 'preset',
                label: preset.encoderConfig?.press || 'Dial',
                themeColor: preset.color,
                encoderActions: {
                  cw: { type: 'preset', label: preset.encoderConfig?.cw || 'CW', themeColor: preset.color },
                  press: { type: 'preset', label: preset.encoderConfig?.press || 'Press', themeColor: preset.color },
                  ccw: { type: 'preset', label: preset.encoderConfig?.ccw || 'CCW', themeColor: preset.color },
                },
              }}
              interactive={false}
            />
          </div>
        </div>

        {/* Detailed Breakdown List */}
        <div className="bg-[#0b0e17] border border-white/10 rounded-3xl p-6">
          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
            Key Binding Specifications
          </div>

          <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
            {slots.map((slot, index) => {
              const label = preset.breakdown[slot] || 'Unassigned';
              const iconName = getToolIconId(label);
              const IconComp = (LucideIcons as any)[iconName] || LucideIcons.Sparkles;

              return (
                <div
                  key={slot}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white/5 text-[11px] font-mono font-bold text-neutral-400 flex items-center justify-center">
                      K{index + 1}
                    </span>
                    <IconComp className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 uppercase">{slot}</span>
                </div>
              );
            })}

            {preset.encoderConfig && (
              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-neutral-400 uppercase">
                  Rotary Dial Actions
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-neutral-400">CCW (Left Turn)</span>
                  <span className="text-white font-mono">{preset.encoderConfig.ccw}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-neutral-400">Press (Click)</span>
                  <span className="text-white font-mono">{preset.encoderConfig.press}</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="text-neutral-400">CW (Right Turn)</span>
                  <span className="text-white font-mono">{preset.encoderConfig.cw}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
