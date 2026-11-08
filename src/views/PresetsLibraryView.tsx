import React, { useState } from 'react';
import { Search, Sparkles, Download, Check, Eye } from 'lucide-react';
import { PresetItem, ProfileData } from '../types';
import { PRESET_LIBRARY } from '../constants/presets';
import { PresetAppIcon } from '../components/PresetAppIcon';
import { isPresetAppliedInProfile } from '../utils/helpers';

export interface PresetsLibraryViewProps {
  currentProfile: ProfileData;
  onPreviewPreset: (preset: PresetItem) => void;
  onApplyPreset: (presetId: string) => void;
}

export const PresetsLibraryView: React.FC<PresetsLibraryViewProps> = ({
  currentProfile,
  onPreviewPreset,
  onApplyPreset,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPresets = PRESET_LIBRARY.filter((preset) => {
    const q = searchQuery.toLowerCase();
    return (
      preset.name.toLowerCase().includes(q) ||
      preset.tagline.toLowerCase().includes(q) ||
      preset.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex-1 flex flex-col p-8 max-w-6xl mx-auto w-full select-none">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-blue-400" />
            Preset Community Library
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Production-ready workflow templates for Framer, Photoshop, Premiere, VS Code and more.
          </p>
        </div>

        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search workflows, tools, tags..."
            className="w-full bg-[#0b0e17] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
      </div>

      {/* Preset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPresets.map((preset) => {
          const isApplied = isPresetAppliedInProfile(currentProfile, preset.id);

          return (
            <div
              key={preset.id}
              className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div
                className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br ${preset.bannerGradient} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
                      style={{ backgroundColor: preset.color }}
                    >
                      <PresetAppIcon iconId={preset.icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {preset.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5 font-mono">
                        <span>by {preset.author}</span>
                        <span>•</span>
                        <span>{preset.downloads} users</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                  {preset.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {preset.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => onPreviewPreset(preset)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-neutral-300 hover:text-white transition-all border border-white/5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Preview Details
                </button>

                <button
                  onClick={() => onApplyPreset(preset.id)}
                  disabled={isApplied}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                    isApplied
                      ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 active:scale-95'
                  }`}
                >
                  {isApplied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Applied
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      Apply Preset
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
