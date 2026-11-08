import React, { Suspense } from 'react';
import { Sparkles } from '../icons';
import { getRegisteredIcon } from '../iconRegistry';

const IconFromLibrary = React.lazy(() => import('./IconFromLibrary'));

export interface LazyIconProps {
  name?: string;
  className?: string;
}

/**
 * Icon renderer for user-chosen glyphs.
 * Icons used by the shipped keymaps resolve synchronously from the registry;
 * everything else is code-split and falls back to a sparkle while loading.
 */
export const LazyIcon: React.FC<LazyIconProps> = ({ name, className }) => {
  const Registered = getRegisteredIcon(name);
  if (Registered) return <Registered className={className} />;

  return (
    <Suspense fallback={<Sparkles className={className} />}>
      <IconFromLibrary name={name} className={className} />
    </Suspense>
  );
};
