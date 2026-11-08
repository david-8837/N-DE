import React from 'react';
import { KeyAssignment, MultiGestureKey, ProfileData } from '../types';

export function formatEncoderShortLabel(action?: { label?: string; code?: string }): string {
  if (!action) return 'None';
  if (action.label) {
    if (action.label.length > 8) return action.label.substring(0, 7) + '…';
    return action.label;
  }
  if (action.code) {
    return action.code.replace('KC_', '').substring(0, 6);
  }
  return 'None';
}

export function getEncoderActions(assignment?: KeyAssignment) {
  return {
    cw: assignment?.encoderActions?.cw,
    press: assignment?.encoderActions?.press,
    ccw: assignment?.encoderActions?.ccw,
  };
}

export function formatCustomTileText(assignment?: KeyAssignment): string {
  if (!assignment) return 'Unassigned';
  if (assignment.label) return assignment.label;
  if (assignment.code) return assignment.code.replace('KC_', '');
  if (assignment.type === 'layer' && assignment.targetLayer !== undefined) {
    return `Layer ${assignment.targetLayer + 1}`;
  }
  return 'Key';
}

export function parseLayerTarget(str?: string): number {
  if (!str) return 0;
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) - 1 : 0;
}

export function extractMultiGestures(assignment?: KeyAssignment): Partial<Record<MultiGestureKey, KeyAssignment>> {
  return assignment?.multiGestureActions || {};
}

export function isPresetAppliedInProfile(profile: ProfileData, presetId: string): boolean {
  if (!profile || !profile.layers) return false;
  return profile.layers.some((layer) => {
    return Object.values(layer).some((key) => key?.type === 'preset' && key?.themeColor);
  });
}

export const ArrowKeyGlyph: React.FC<{ dir: 'up' | 'down' | 'left' | 'right' }> = ({ dir }) => {
  const rotation = {
    up: 'rotate-0',
    right: 'rotate-90',
    down: 'rotate-180',
    left: '-rotate-90',
  }[dir];

  return (
    <svg className={`w-3.5 h-3.5 ${rotation} inline-block`} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L5.707 9.707a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const InfoCircleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2" />
    <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
  </svg>
);

export const WarningTriangleIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

export const SettingsSwitch: React.FC<{
  checked: boolean;
  onChange: (val: boolean) => void;
  title: string;
  description?: string;
}> = ({ checked, onChange, title, description }) => (
  <div className="flex items-center justify-between p-3.5 bg-neutral-900/60 rounded-xl border border-white/5 hover:border-white/10 transition-all">
    <div className="pr-4">
      <div className="text-sm font-medium text-white">{title}</div>
      {description && <div className="text-xs text-neutral-400 mt-0.5">{description}</div>}
    </div>
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? 'bg-blue-600' : 'bg-neutral-700'
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);
