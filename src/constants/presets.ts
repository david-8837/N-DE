import { LayerKeymap, PresetBreakdown, PresetItem, ProfileData } from '../types';

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
  {
    id: 'blender',
    name: 'Blender Sculpt & Render',
    tagline: 'Grab, rotate and scale primitives, jump into edit mode and fire a render without leaving the viewport.',
    icon: 'Blender',
    color: '#f97316',
    author: 'Poly Forge',
    downloads: '11.6k',
    tags: ['3D', 'Modelling', 'Rendering'],
    bannerGradient: 'from-orange-600/30 via-amber-600/20 to-transparent',
    breakdown: {
      r1c1: 'Grab / Move (G)',
      r1c2: 'Rotate (R)',
      r1c3: 'Scale (S)',
      r2c1: 'Add Mesh (⇧A)',
      r2c2: 'Edit Mode (Tab)',
      r2c3: 'Duplicate (⇧D)',
      r3c1: 'Frame Selected (.)',
      r3c2: 'Toggle Viewport (Z)',
      r3c3: 'Render (F12)',
    },
    encoderConfig: {
      cw: 'Orbit View Right',
      press: 'Frame All (Home)',
      ccw: 'Orbit View Left',
    },
  },
  {
    id: 'figma',
    name: 'Figma Handoff Kit',
    tagline: 'Frame, text and component tools with auto layout, prototyping and zoom on the dial.',
    icon: 'Figma',
    color: '#a855f7',
    author: 'Vector Union',
    downloads: '23.8k',
    tags: ['Design', 'UI/UX', 'Prototyping'],
    bannerGradient: 'from-purple-600/30 via-fuchsia-600/20 to-transparent',
    breakdown: {
      r1c1: 'Frame Tool (F)',
      r1c2: 'Text Tool (T)',
      r1c3: 'Component (⌥⌘K)',
      r2c1: 'Auto Layout (⇧A)',
      r2c2: 'Duplicate (⌘D)',
      r2c3: 'Prototype (⇧E)',
      r3c1: 'Zoom Fit (⇧1)',
      r3c2: 'Zoom 100% (⇧0)',
      r3c3: 'Group (⌘G)',
    },
    encoderConfig: {
      cw: 'Zoom In (⌘+)',
      press: 'Reset Zoom (⌘0)',
      ccw: 'Zoom Out (⌘-)',
    },
  },
  {
    id: 'ableton',
    name: 'Ableton Live Session',
    tagline: 'Transport, metronome and clip actions mapped for fast arrangement and live performance.',
    icon: 'Ableton',
    color: '#10b981',
    author: 'Loop Collective',
    downloads: '9.3k',
    tags: ['Audio', 'Music', 'Live'],
    bannerGradient: 'from-emerald-600/30 via-teal-600/20 to-transparent',
    breakdown: {
      r1c1: 'Play / Stop (Space)',
      r1c2: 'Record (F9)',
      r1c3: 'Metronome (C)',
      r2c1: 'New Clip (⌘⇧M)',
      r2c2: 'Duplicate Clip (⌘D)',
      r2c3: 'Toggle Browser (⌘⌥B)',
      r3c1: 'Undo (⌘Z)',
      r3c2: 'Redo (⇧⌘Z)',
      r3c3: 'Save Set (⌘S)',
    },
    encoderConfig: {
      cw: 'Nudge Timeline Right',
      press: 'Stop All Clips',
      ccw: 'Nudge Timeline Left',
    },
  },
  {
    id: 'discord',
    name: 'Discord Command Deck',
    tagline: 'Push to talk, mute, deafen and call controls so you never tab out mid-sentence.',
    icon: 'Discord',
    color: '#6366f1',
    author: 'Guild Ops',
    downloads: '31.4k',
    tags: ['Comms', 'Gaming', 'Voice'],
    bannerGradient: 'from-indigo-600/30 via-violet-600/20 to-transparent',
    breakdown: {
      r1c1: 'Push to Talk',
      r1c2: 'Mute Mic (⌘⇧M)',
      r1c3: 'Deafen (⌘⇧D)',
      r2c1: 'Answer Call',
      r2c2: 'Start Stream',
      r2c3: 'Toggle Overlay',
      r3c1: 'Screenshot (⌘⇧S)',
      r3c2: 'Emoji Picker (⌘E)',
      r3c3: 'Quick Switcher (⌘K)',
    },
    encoderConfig: {
      cw: 'Next Channel',
      press: 'Return to Last Channel',
      ccw: 'Previous Channel',
    },
  },
  {
    id: 'notion',
    name: 'Notion Writing Room',
    tagline: 'Page creation, block shortcuts and quick find for distraction-free drafting.',
    icon: 'Notion',
    color: '#94a3b8',
    author: 'Second Brain',
    downloads: '17.1k',
    tags: ['Writing', 'Notes', 'Productivity'],
    bannerGradient: 'from-slate-500/30 via-zinc-500/20 to-transparent',
    breakdown: {
      r1c1: 'New Page (⌘N)',
      r1c2: 'Quick Find (⌘P)',
      r1c3: 'Toggle Sidebar (⌘\\)',
      r2c1: 'To-do Block (⌘⇧9)',
      r2c2: 'Code Block (⌘⇧8)',
      r2c3: 'Quote Block (⌘⇧7)',
      r3c1: 'Duplicate Block (⌘D)',
      r3c2: 'Comment (⌘⇧M)',
      r3c3: 'Save (⌘S)',
    },
    encoderConfig: {
      cw: 'Scroll Down (↓)',
      press: 'Quick Find',
      ccw: 'Scroll Up (↑)',
    },
  },
  {
    id: 'excel',
    name: 'Excel Analyst Pad',
    tagline: 'Formula entry, autosum, filters and sheet hopping for spreadsheet-heavy days.',
    icon: 'Excel',
    color: '#22c55e',
    author: 'Grid Works',
    downloads: '12.7k',
    tags: ['Data', 'Spreadsheet', 'Finance'],
    bannerGradient: 'from-green-600/30 via-emerald-600/20 to-transparent',
    breakdown: {
      r1c1: 'New Sheet (⇧F11)',
      r1c2: 'Edit Formula (F2)',
      r1c3: 'Autosum (⌥=)',
      r2c1: 'Insert Row',
      r2c2: 'Delete Row',
      r2c3: 'Format Cells (⌘1)',
      r3c1: 'Filter (⌘⇧L)',
      r3c2: 'Pivot Table',
      r3c3: 'Save (⌘S)',
    },
    encoderConfig: {
      cw: 'Next Sheet',
      press: 'Recalculate (F9)',
      ccw: 'Previous Sheet',
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
  if (l.includes('undo')) return 'Undo2';
  if (l.includes('redo')) return 'Redo2';
  if (l.includes('search') || l.includes('find') || l.includes('switcher')) return 'Search';
  if (l.includes('record')) return 'Disc';
  if (l.includes('metronome') || l.includes('clock')) return 'Clock';
  if (l.includes('download')) return 'Download';
  if (l.includes('favourite') || l.includes('favorite') || l.includes('star')) return 'Star';
  if (l.includes('mute') || l.includes('deafen')) return 'VolumeX';
  if (l.includes('volume')) return 'Volume2';
  if (l.includes('sheet') || l.includes('table') || l.includes('row')) return 'Grid';
  if (l.includes('render')) return 'Camera';
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
    presetId,
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
