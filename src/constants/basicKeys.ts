import { BasicSection, LayerKeymap, ProfileData } from '../types';

export const SELECTABLE_ICON_LIST = [
  'Scissors', 'Copy', 'ClipboardPaste', 'Undo2', 'Redo2', 'Trash2', 'Save', 'FileText',
  'Folder', 'Camera', 'Video', 'Mic', 'Volume2', 'VolumeX', 'Play', 'Pause',
  'FastForward', 'Rewind', 'Globe', 'Terminal', 'Code2', 'Cpu', 'Layers', 'Grid',
  'Sparkles', 'Zap', 'Flame', 'Wrench', 'Palette', 'Brush', 'Move', 'ZoomIn',
  'ZoomOut', 'Crop', 'Eye', 'Lock', 'Unlock', 'Maximize2', 'Minimize2', 'RefreshCw',
  'Sun', 'Moon', 'Music', 'Headphones', 'Share2', 'Compass', 'Navigation', 'Activity'
];

export const SELECTABLE_EMOJI_LIST = [
  '⚡', '🔥', '🚀', '💻', '🎨', '🎬', '🎧', '🎮',
  '✨', '💎', '💡', '🛠️', '⚙️', '📂', '🔒', '🎯',
  '⭐', '🔴', '🟢', '🔵', '🟣', '🟠', '🟡', '☕'
];

export const BASIC_KEY_SECTIONS: BasicSection[] = [
  {
    title: 'Standard Modifiers & Navigation',
    items: [
      { id: 'esc', label: 'Esc', code: 'KC_ESC', bg: '#1c1f2e' },
      { id: 'tab', label: 'Tab', code: 'KC_TAB', bg: '#1c1f2e' },
      { id: 'backspace', label: '⌫ Back', code: 'KC_BSPC', bg: '#1c1f2e' },
      { id: 'enter', label: '⏎ Enter', code: 'KC_ENT', bg: '#1c1f2e' },
      { id: 'space', label: '␣ Space', code: 'KC_SPC', bg: '#1c1f2e' },
      { id: 'ctrl', label: 'Ctrl', code: 'KC_LCTL', bg: '#1a233a' },
      { id: 'alt', label: 'Alt', code: 'KC_LALT', bg: '#1a233a' },
      { id: 'gui', label: '⌘ Win', code: 'KC_LGUI', bg: '#1a233a' },
      { id: 'shift', label: '⇧ Shift', code: 'KC_LSFT', bg: '#1a233a' },
      { id: 'up', label: '↑ Up', code: 'KC_UP', bg: '#1c1f2e' },
      { id: 'down', label: '↓ Down', code: 'KC_DOWN', bg: '#1c1f2e' },
      { id: 'left', label: '← Left', code: 'KC_LEFT', bg: '#1c1f2e' },
      { id: 'right', label: '→ Right', code: 'KC_RIGHT', bg: '#1c1f2e' },
    ],
  },
  {
    title: 'Productivity & Clipboard',
    items: [
      { id: 'copy', label: 'Copy', code: 'LCTL(KC_C)', icon: 'Copy', bg: '#1e2438' },
      { id: 'paste', label: 'Paste', code: 'LCTL(KC_V)', icon: 'ClipboardPaste', bg: '#1e2438' },
      { id: 'cut', label: 'Cut', code: 'LCTL(KC_X)', icon: 'Scissors', bg: '#1e2438' },
      { id: 'undo', label: 'Undo', code: 'LCTL(KC_Z)', icon: 'Undo2', bg: '#1e2438' },
      { id: 'redo', label: 'Redo', code: 'LCTL(KC_Y)', icon: 'Redo2', bg: '#1e2438' },
      { id: 'save', label: 'Save', code: 'LCTL(KC_S)', icon: 'Save', bg: '#1e2438' },
      { id: 'find', label: 'Find', code: 'LCTL(KC_F)', icon: 'Search', bg: '#1e2438' },
      { id: 'select_all', label: 'Select All', code: 'LCTL(KC_A)', icon: 'Layers', bg: '#1e2438' },
      { id: 'screenshot', label: 'Snip', code: 'LSFT(LGUI(KC_S))', icon: 'Camera', bg: '#1e2438' },
      { id: 'lock', label: 'Lock PC', code: 'LGUI(KC_L)', icon: 'Lock', bg: '#1e2438' },
    ],
  },
  {
    title: 'Media & Volume Controls',
    items: [
      { id: 'vol_up', label: 'Vol +', code: 'KC_VOLU', icon: 'Volume2', bg: '#251b38' },
      { id: 'vol_down', label: 'Vol -', code: 'KC_VOLD', icon: 'Volume2', bg: '#251b38' },
      { id: 'mute', label: 'Mute', code: 'KC_MUTE', icon: 'VolumeX', bg: '#251b38' },
      { id: 'play_pause', label: 'Play/Pause', code: 'KC_MPLY', icon: 'Play', bg: '#251b38' },
      { id: 'next_track', label: 'Next Track', code: 'KC_MNXT', icon: 'FastForward', bg: '#251b38' },
      { id: 'prev_track', label: 'Prev Track', code: 'KC_MPRV', icon: 'Rewind', bg: '#251b38' },
      { id: 'mic_mute', label: 'Mic Mute', code: 'HYPR(KC_M)', icon: 'Mic', bg: '#251b38' },
    ],
  },
];

export const INITIAL_LAYER_1: LayerKeymap = {
  r1c1: { type: 'macro', label: 'Cut', code: 'LCTL(KC_X)', customIcon: 'Scissors', themeColor: '#3b82f6' },
  r1c2: { type: 'macro', label: 'Copy', code: 'LCTL(KC_C)', customIcon: 'Copy', themeColor: '#3b82f6' },
  r1c3: { type: 'macro', label: 'Paste', code: 'LCTL(KC_V)', customIcon: 'ClipboardPaste', themeColor: '#3b82f6' },
  r2c1: { type: 'macro', label: 'Undo', code: 'LCTL(KC_Z)', customIcon: 'Undo2', themeColor: '#3b82f6' },
  r2c2: { type: 'macro', label: 'Redo', code: 'LCTL(KC_Y)', customIcon: 'Redo2', themeColor: '#3b82f6' },
  r2c3: { type: 'macro', label: 'Save', code: 'LCTL(KC_S)', customIcon: 'Save', themeColor: '#3b82f6' },
  r3c1: { type: 'macro', label: 'Snip', code: 'LSFT(LGUI(KC_S))', customIcon: 'Camera', themeColor: '#3b82f6' },
  r3c2: { type: 'macro', label: 'Play/Pause', code: 'KC_MPLY', customIcon: 'Play', themeColor: '#3b82f6' },
  r3c3: { type: 'macro', label: 'Mute', code: 'KC_MUTE', customIcon: 'VolumeX', themeColor: '#3b82f6' },
  encoder: {
    type: 'macro',
    label: 'Volume',
    encoderActions: {
      cw: { type: 'macro', label: 'Vol +', code: 'KC_VOLU', customIcon: 'Volume2', themeColor: '#3b82f6' },
      press: { type: 'macro', label: 'Mute', code: 'KC_MUTE', customIcon: 'VolumeX', themeColor: '#3b82f6' },
      ccw: { type: 'macro', label: 'Vol -', code: 'KC_VOLD', customIcon: 'Volume2', themeColor: '#3b82f6' },
    },
  },
};

export const BLANK_LAYER: LayerKeymap = {
  r1c1: { type: 'none' },
  r1c2: { type: 'none' },
  r1c3: { type: 'none' },
  r2c1: { type: 'none' },
  r2c2: { type: 'none' },
  r2c3: { type: 'none' },
  r3c1: { type: 'none' },
  r3c2: { type: 'none' },
  r3c3: { type: 'none' },
  encoder: {
    type: 'none',
    encoderActions: {
      cw: { type: 'none' },
      press: { type: 'none' },
      ccw: { type: 'none' },
    },
  },
};

export const INITIAL_PROFILES: ProfileData[] = [
  {
    id: 'default',
    name: 'Default Profile',
    activeLayer: 0,
    layers: [
      JSON.parse(JSON.stringify(INITIAL_LAYER_1)),
      JSON.parse(JSON.stringify(BLANK_LAYER)),
      JSON.parse(JSON.stringify(BLANK_LAYER)),
      JSON.parse(JSON.stringify(BLANK_LAYER)),
    ],
  },
  {
    id: 'framer',
    name: 'Framer Profile',
    activeLayer: 0,
    layers: [
      JSON.parse(JSON.stringify(BLANK_LAYER)),
      JSON.parse(JSON.stringify(BLANK_LAYER)),
    ],
  },
  {
    id: 'gaming',
    name: 'Streaming Profile',
    activeLayer: 0,
    layers: [
      JSON.parse(JSON.stringify(BLANK_LAYER)),
      JSON.parse(JSON.stringify(BLANK_LAYER)),
    ],
  },
];
