import { LayerKeymap, PresetBreakdown, PresetItem, ProfileData } from '../types';

export const PRESET_THEME_COLORS: Record<string, string> = {
  framer: '#3b82f6',
  photoshop: '#38bdf8',
  premiere: '#818cf8',
  vscode: '#60a5fa',
  blender: '#f97316',
  figma: '#a855f7',
  ableton: '#10b981',
  discord: '#6366f1',
};

export const PRESET_LIBRARY: PresetItem[] = [
  {
    id: 'framer',
    name: 'Framer Canvas Suite',
    tagline: 'Interactive prototype toolkit with zoom, layout, text and component actions.',
    icon: 'Framer',
    color: '#3b82f6',
    author: 'NØDE Studio',
    downloads: '14.2k',
    tags: ['Design', 'Prototyping', 'UI/UX'],
    bannerGradient: 'from-blue-600/30 via-indigo-600/20 to-transparent',
    breakdown: {
      r1c1: 'Frame Tool (F)',
      r1c2: 'Text Tool (T)',
      r1c3: 'Component (⌘K)',
      r2c1: 'Layout Stack (⇧A)',
      r2c2: 'Duplicate (⌘D)',
      r2c3: 'Preview (⌘P)',
      r3c1: 'Zoom Fit (⇧1)',
      r3c2: 'Zoom 100% (⇧0)',
      r3c3: 'Hand Tool (H)',
    },
    encoderConfig: {
      cw: 'Zoom In (⌘+)',
      press: 'Reset Zoom (⌘0)',
      ccw: 'Zoom Out (⌘-)',
    },
  },
  {
    id: 'photoshop',
    name: 'Photoshop Studio Pro',
    tagline: 'Streamlined brush, select, layer mask and quick export shortcuts for digital artists.',
    icon: 'Photoshop',
    color: '#38bdf8',
    author: 'Adobe Masters',
    downloads: '28.9k',
    tags: ['Creativity', 'Photo Editing', 'Raster'],
    bannerGradient: 'from-sky-600/30 via-blue-600/20 to-transparent',
    breakdown: {
      r1c1: 'Brush Tool (B)',
      r1c2: 'Eraser (E)',
      r1c3: 'Lasso Selection (L)',
      r2c1: 'Magic Wand (W)',
      r2c2: 'New Layer (⌘⇧N)',
      r2c3: 'Merge Layers (⌘E)',
      r3c1: 'Free Transform (⌘T)',
      r3c2: 'Invert Mask (⌘I)',
      r3c3: 'Quick Export (⌘⌥⇧W)',
    },
    encoderConfig: {
      cw: 'Brush Size Up (])',
      press: 'Default Colors (D)',
      ccw: 'Brush Size Down ([)',
    },
  },
  {
    id: 'premiere',
    name: 'Premiere Pro Timeline',
    tagline: 'High-speed video trimming, cut points, ripple deletes and jog wheel timeline control.',
    icon: 'Premiere',
    color: '#818cf8',
    author: 'Motion Hub',
    downloads: '19.4k',
    tags: ['Video', 'Editing', 'Timeline'],
    bannerGradient: 'from-indigo-600/30 via-purple-600/20 to-transparent',
    breakdown: {
      r1c1: 'Razor Cut (C)',
      r1c2: 'Ripple Delete (⇧⌫)',
      r1c3: 'Add Edit (⌘K)',
      r2c1: 'Mark In (I)',
      r2c2: 'Mark Out (O)',
      r2c3: 'Export Frame (⇧E)',
      r3c1: 'Speed/Duration (⌘R)',
      r3c2: 'Nest Sequence',
      r3c3: 'Render In to Out (⏎)',
    },
    encoderConfig: {
      cw: 'Step 1 Frame Forward (→)',
      press: 'Play / Stop (Space)',
      ccw: 'Step 1 Frame Back (←)',
    },
  },
  {
    id: 'vscode',
    name: 'VS Code Power Dev',
    tagline: 'Multi-cursor, command palette, terminal toggles and debug breakpoints at your fingertips.',
    icon: 'VSCode',
    color: '#60a5fa',
    author: 'DevTools Lab',
    downloads: '42.1k',
    tags: ['Development', 'Coding', 'IDE'],
    bannerGradient: 'from-blue-600/30 via-cyan-600/20 to-transparent',
    breakdown: {
      r1c1: 'Command Palette (⌘⇧P)',
      r1c2: 'Quick Open (⌘P)',
      r1c3: 'Toggle Terminal (⌘`)',
      r2c1: 'Comment Line (⌘/)',
      r2c2: 'Format Code (⇧⌥F)',
      r2c3: 'Add Cursor Below (⌥⌘↓)',
      r3c1: 'Rename Symbol (F2)',
      r3c2: 'Toggle Sidebar (⌘B)',
      r3c3: 'Debug Start (F5)',
    },
    encoderConfig: {
      cw: 'Scroll Down (↓)',
      press: 'Toggle Terminal',
      ccw: 'Scroll Up (↑)',
    },
  },
];

export function getToolIconId(label: string): string {
  const l = label.toLowerCase();
  if (l.includes('frame') || l.includes('grid')) return 'Grid';
  if (l.includes('text')) return 'FileText';
  if (l.includes('component')) return 'Layers';
  if (l.includes('layout') || l.includes('stack')) return 'Layers';
  if (l.includes('duplicate') || l.includes('copy')) return 'Copy';
  if (l.includes('preview') || l.includes('play')) return 'Play';
  if (l.includes('zoom in')) return 'ZoomIn';
  if (l.includes('zoom out')) return 'ZoomOut';
  if (l.includes('zoom') || l.includes('fit')) return 'Maximize2';
  if (l.includes('hand') || l.includes('move')) return 'Move';
  if (l.includes('brush')) return 'Brush';
  if (l.includes('eraser')) return 'Trash2';
  if (l.includes('lasso') || l.includes('wand') || l.includes('select')) return 'Sparkles';
  if (l.includes('layer')) return 'Layers';
  if (l.includes('cut') || l.includes('razor')) return 'Scissors';
  if (l.includes('delete') || l.includes('ripple')) return 'Trash2';
  if (l.includes('terminal') || l.includes('command')) return 'Terminal';
  if (l.includes('code') || l.includes('format')) return 'Code2';
  if (l.includes('export') || l.includes('save')) return 'Save';
  if (l.includes('debug')) return 'Zap';
  return 'Sparkles';
}

export function getPresetBreakdown(presetId: string): PresetBreakdown {
  const p = PRESET_LIBRARY.find((item) => item.id === presetId);
  return p ? p.breakdown : {};
}

export function buildPresetLayer(presetId: string): LayerKeymap {
  const p = PRESET_LIBRARY.find((item) => item.id === presetId);
  const color = p ? p.color : '#3b82f6';
  const breakdown = p ? p.breakdown : {};

  const layer: LayerKeymap = {
    r1c1: { type: 'preset', label: breakdown['r1c1'] || 'Key 1', customIcon: getToolIconId(breakdown['r1c1'] || ''), themeColor: color },
    r1c2: { type: 'preset', label: breakdown['r1c2'] || 'Key 2', customIcon: getToolIconId(breakdown['r1c2'] || ''), themeColor: color },
    r1c3: { type: 'preset', label: breakdown['r1c3'] || 'Key 3', customIcon: getToolIconId(breakdown['r1c3'] || ''), themeColor: color },
    r2c1: { type: 'preset', label: breakdown['r2c1'] || 'Key 4', customIcon: getToolIconId(breakdown['r2c1'] || ''), themeColor: color },
    r2c2: { type: 'preset', label: breakdown['r2c2'] || 'Key 5', customIcon: getToolIconId(breakdown['r2c2'] || ''), themeColor: color },
    r2c3: { type: 'preset', label: breakdown['r2c3'] || 'Key 6', customIcon: getToolIconId(breakdown['r2c3'] || ''), themeColor: color },
    r3c1: { type: 'preset', label: breakdown['r3c1'] || 'Key 7', customIcon: getToolIconId(breakdown['r3c1'] || ''), themeColor: color },
    r3c2: { type: 'preset', label: breakdown['r3c2'] || 'Key 8', customIcon: getToolIconId(breakdown['r3c2'] || ''), themeColor: color },
    r3c3: { type: 'preset', label: breakdown['r3c3'] || 'Key 9', customIcon: getToolIconId(breakdown['r3c3'] || ''), themeColor: color },
    encoder: {
      type: 'preset',
      label: p?.encoderConfig?.press || 'Dial',
      themeColor: color,
      encoderActions: {
        cw: { type: 'preset', label: p?.encoderConfig?.cw || 'CW', customIcon: 'RotateCw', themeColor: color },
        press: { type: 'preset', label: p?.encoderConfig?.press || 'Press', customIcon: 'Play', themeColor: color },
        ccw: { type: 'preset', label: p?.encoderConfig?.ccw || 'CCW', customIcon: 'RotateCcw', themeColor: color },
      },
    },
  };

  return layer;
}
