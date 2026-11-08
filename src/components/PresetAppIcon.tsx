import React from 'react';
import { LazyIcon } from './LazyIcon';
import { PRESET_APP_ICONS } from '../iconRegistry';

export interface PresetAppIconProps {
  iconId: string;
  className?: string;
}

export const PresetAppIcon: React.FC<PresetAppIconProps> = ({ iconId, className = 'w-6 h-6' }) => {
  const resolved = PRESET_APP_ICONS[iconId] || iconId || 'Sparkles';
  return <LazyIcon name={resolved} className={className} />;
};
