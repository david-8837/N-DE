import React, { useMemo, useState } from 'react';
import { Search, Sparkles, Download, Check, Eye, ArrowDownWideNarrow, Star } from '../icons';
import { PresetItem, ProfileData } from '../types';
import { PRESET_LIBRARY } from '../constants/presets';
import { PresetAppIcon } from '../components/PresetAppIcon';
import { RatingControl } from '../components/RatingControl';
import { isPresetAppliedInProfile } from '../utils/helpers';
import { PresetRatings, averageRating, rankPresetsByRating } from '../utils/ratings';

export interface PresetsLibraryViewProps {
  currentProfile: ProfileData;
  onPreviewPreset: (preset: PresetItem) => void;
  onApplyPreset: (presetId: string) => void;
  ratings: PresetRatings;
  onRatePreset: (presetId: string, score: number) => void;
  onClearPresetRating: (presetId: string) => void;
}

type SortMode = 'curated' | 'rated';

export const PresetsLibraryView: React.FC<PresetsLibraryViewProps> = ({
  currentProfile,
  onPreviewPreset,
  onApplyPreset,
  ratings,
  onRatePreset,
  onClearPresetRating,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortMode, setSortMode] = useState<SortMode>('curated');

  const filteredPresets = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const matches = PRESET_LIBRARY.filter((preset) => {
      if (!q) return true;
      return (
        preset.name.toLowerCase().includes(q) ||
        preset.tagline.toLowerCase().includes(q) ||
        preset.author.toLowerCase().includes(q) ||
        preset.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
    return sortMode === 'rated' ? rankPresetsByRating(matches, ratings) : matches;
  }, [searchQuery, sortMode, ratings]);

  const ratedCount = Object.keys(ratings).length;
  const averageScore = averageRating(Object.values(ratings));

  return (
    <div className="flex-1 flex flex-col p-8 max-w-6xl mx-auto w-full">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-blue-400" aria-hidden="true" />
            Preset Community Library
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Production-ready workflow templates for Framer, Photoshop, Premiere, VS Code and more.
          </p>
          <p className="text-xs text-neutral-500 mt-2 font-mono flex items-center gap-1.5">
            <Star className="w-3 h-3 text-amber-400" aria-hidden="true" />
            {ratedCount === 0
              ? 'Rate presets 1–100 to track the ones that work for you'
              : `${ratedCount} of ${PRESET_LIBRARY.length} rated · your average ${averageScore}/100`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <div className="flex items-center gap-1 bg-[#0b0e17] p-1 rounded-xl border border-white/10">
            {(
              [
                { id: 'curated', label: 'Curated', icon: Sparkles },
                { id: 'rated', label: 'Top rated', icon: ArrowDownWideNarrow },
              ] as { id: SortMode; label: string; icon: typeof Sparkles }[]
            ).map((option) => {
              const Icon = option.icon;
              const isActive = sortMode === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSortMode(option.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[240px]">
            <Search
              className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search workflows, tools, tags..."
              aria-label="Search presets"
              className="w-full bg-[#0b0e17] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus-visible:border-blue-500/60 focus-visible:ring-1 focus-visible:ring-blue-500/40 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Preset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPresets.map((preset) => {
          const isApplied = isPresetAppliedInProfile(currentProfile, preset.id);
          const score = ratings[preset.id] ?? null;

          return (
            <div
              key={preset.id}
              className="bg-[#0b0e17] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div
                className={`absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br ${preset.bannerGradient} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}
                aria-hidden="true"
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
                        <span aria-hidden="true">•</span>
                        <span>{preset.downloads} users</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-2">
                  {preset.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {preset.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <RatingControl
                    presetName={preset.name}
                    value={score}
                    onChange={(next) => onRatePreset(preset.id, next)}
                    onClear={() => onClearPresetRating(preset.id)}
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => onPreviewPreset(preset)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-neutral-300 hover:text-white transition-all border border-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                  Preview Details
                </button>

                <button
                  type="button"
                  onClick={() => onApplyPreset(preset.id)}
                  disabled={isApplied}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isApplied
                      ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border border-white/5'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 active:scale-95'
                  }`}
                >
                  {isApplied ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      Applied
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                      Apply Preset
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPresets.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-[#0b0e17] px-6 py-14 text-center">
          <Search className="w-6 h-6 mx-auto text-neutral-600 mb-3" aria-hidden="true" />
          <p className="text-sm text-neutral-300 font-medium">
            No presets match “{searchQuery.trim()}”
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Try a tool name like “Framer”, a tag like “Video”, or clear the search.
          </p>
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="mt-4 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs text-neutral-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};
