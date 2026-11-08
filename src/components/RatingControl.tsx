import React, { useEffect, useId, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { RATING_MAX, RATING_MIN, clampScore, ratingLabel } from '../utils/ratings';

export interface RatingControlProps {
  presetName: string;
  value: number | null;
  onChange: (score: number) => void;
  onClear?: () => void;
  variant?: 'compact' | 'full';
}

function scoreTone(score: number): { text: string; bar: string } {
  if (score <= 40) return { text: 'text-rose-400', bar: 'bg-rose-500' };
  if (score <= 60) return { text: 'text-amber-400', bar: 'bg-amber-500' };
  if (score <= 80) return { text: 'text-sky-400', bar: 'bg-sky-500' };
  return { text: 'text-emerald-400', bar: 'bg-emerald-500' };
}

/**
 * Personal 1-100 rating for a preset.
 * A native range input keeps it keyboard and screen-reader accessible.
 */
export const RatingControl: React.FC<RatingControlProps> = ({
  presetName,
  value,
  onChange,
  onClear,
  variant = 'compact',
}) => {
  const inputId = useId();
  const [draft, setDraft] = useState<number>(value ?? 50);

  useEffect(() => {
    if (value !== null) setDraft(value);
  }, [value]);

  const shown = value ?? draft;
  const tone = scoreTone(shown);
  const label = ratingLabel(value);
  const isFull = variant === 'full';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = clampScore(Number(event.target.value));
    setDraft(next);
    onChange(next);
  };

  return (
    <div
      className={
        isFull
          ? 'rounded-2xl border border-white/10 bg-[#0b0e17] p-5'
          : 'rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5'
      }
    >
      <div className="flex items-center justify-between gap-3">
        <label
          htmlFor={inputId}
          className="text-[10px] font-mono uppercase tracking-wider text-neutral-400"
        >
          {isFull ? `Your rating for ${presetName}` : 'Your rating'}
        </label>
        <output htmlFor={inputId} className={`font-mono ${isFull ? 'text-sm' : 'text-xs'} ${tone.text}`}>
          {value === null ? (
            <span className="text-neutral-500">Not rated</span>
          ) : (
            <>
              <span className="font-bold">{value}</span>
              <span className="text-neutral-500">/100</span>
            </>
          )}
        </output>
      </div>

      <input
        id={inputId}
        type="range"
        min={RATING_MIN}
        max={RATING_MAX}
        step={1}
        value={draft}
        onChange={handleChange}
        aria-label={`Rating for ${presetName}`}
        aria-valuetext={`${draft} out of 100, ${ratingLabel(draft)}`}
        className={`mt-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-blue-500 ${
          isFull ? 'h-2' : 'h-1.5'
        }`}
      />
      <div className="w-full h-1 rounded-full overflow-hidden mt-1" aria-hidden="true">
        <div
          className={`h-full ${tone.bar} transition-all duration-150`}
          style={{ width: `${((shown - RATING_MIN) / (RATING_MAX - RATING_MIN)) * 100}%` }}
        />
      </div>

      <div className="flex items-center justify-between mt-1.5">
        <span className={`text-[10px] font-medium ${value === null ? 'text-neutral-500' : tone.text}`}>
          {label}
          {isFull && value !== null && (
            <span className="text-neutral-500 font-normal"> · saved on this device</span>
          )}
        </span>

        {value !== null && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-[10px] font-mono text-neutral-500 hover:text-neutral-200 transition-colors rounded px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <RotateCcw className="w-3 h-3" aria-hidden="true" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
};
