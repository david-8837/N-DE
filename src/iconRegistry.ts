import * as Icons from './icons';
import type { LucideIcon } from 'lucide-react';

/**
 * Icons the built-in keymaps, presets and chrome can reference. They are
 * imported one-by-one (see `icons.ts`) so Rollup can tree-shake; the full
 * 3,700-glyph picker catalogue stays in a lazily loaded chunk (`LazyIcon`).
 */
export const ICON_REGISTRY: Record<string, LucideIcon> = Icons as unknown as Record<
  string,
  LucideIcon
>;

export function getRegisteredIcon(name?: string): LucideIcon | null {
  if (!name) return null;
  return ICON_REGISTRY[name] ?? null;
}

export function isRegisteredIcon(name?: string): boolean {
  return getRegisteredIcon(name) !== null;
}

/** Preset ids use product names; map them to a lucide glyph. */
export const PRESET_APP_ICONS: Record<string, string> = {
  Framer: 'Layers',
  Photoshop: 'Brush',
  Premiere: 'Video',
  VSCode: 'Code2',
  Blender: 'Box',
  Figma: 'PenTool',
  Ableton: 'Music',
  Discord: 'MessageSquare',
  Notion: 'FileText',
  Excel: 'Grid',
};
