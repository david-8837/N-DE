import React from 'react';
import { ArrowRight, Cpu, Layers, Sparkles, X } from '../icons';

export interface OnboardingCardProps {
  onBrowsePresets: () => void;
  onDismiss: () => void;
}

const STEPS = [
  {
    icon: Sparkles,
    title: 'Start from a preset',
    body: 'Ten ready-made workflows for design, video, audio and comms.',
  },
  {
    icon: Layers,
    title: 'Or map a key',
    body: 'Pick a keycap, then choose an action from the inspector on the right.',
  },
  {
    icon: Cpu,
    title: 'Send it to hardware',
    body: 'Connect the RP2040-Zero over Web Serial and flash the keymap.',
  },
];

/** First-run guidance. Dismissal is persisted, and can be undone in Settings. */
export const OnboardingCard: React.FC<OnboardingCardProps> = ({ onBrowsePresets, onDismiss }) => {
  return (
    <section
      aria-labelledby="onboarding-title"
      className="w-full max-w-xl rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 via-[#0b0e17] to-[#0b0e17] p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 id="onboarding-title" className="text-sm font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400" aria-hidden="true" />
            Welcome to Grid Macro 1
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Three ways to get a working macropad in under a minute.
          </p>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss welcome guide"
          className="p-1 rounded-lg text-neutral-500 hover:text-white hover:bg-white/5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={step.title}
              className="rounded-xl bg-white/[0.03] border border-white/5 px-3 py-2.5"
            >
              <div className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-white">
                  {index + 1}. {step.title}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug mt-1">{step.body}</p>
            </li>
          );
        })}
      </ol>

      <div className="flex items-center justify-between gap-3 mt-3">
        <button
          type="button"
          onClick={onBrowsePresets}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-600/25 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Browse presets
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDismiss}
          className="text-[11px] font-mono text-neutral-500 hover:text-neutral-200 transition-colors rounded px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          I'll map keys myself
        </button>
      </div>
    </section>
  );
};
