import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface IconFromLibraryProps {
  name?: string;
  className?: string;
}

/**
 * Renders any icon from the full lucide set. This module is only ever reached
 * through a dynamic import (see `LazyIcon`), so the ~580 KB namespace stays out
 * of the startup bundle until a user actually needs an exotic glyph.
 */
const ICONS = LucideIcons as unknown as Record<
  string,
  React.ComponentType<{ className?: string }>
>;

export default function IconFromLibrary({ name, className }: IconFromLibraryProps) {
  const Icon = (name ? ICONS[name] : undefined) ?? LucideIcons.Sparkles;
  return <Icon className={className} />;
}
