export type KeySlotId =
  | 'r1c1'
  | 'r1c2'
  | 'r1c3'
  | 'r2c1'
  | 'r2c2'
  | 'r2c3'
  | 'r3c1'
  | 'r3c2'
  | 'r3c3'
  | 'encoder';

export type MappingTabId =
  | 'basic'
  | 'media'
  | 'lighting'
  | 'layers'
  | 'gestures'
  | 'multi-action'
  | 'smart'
  | 'numpad';

export type EncoderSubActionId = 'cw' | 'press' | 'ccw';

export interface SmartActionPayload {
  type: 'text' | 'terminal' | 'hotkey' | 'mouse';
  textPayload?: string;
  terminalCmd?: string;
  hotkeyCombo?: string[];
  mouseAction?: MouseActionId;
}

export type MouseActionId =
  | 'left_click'
  | 'right_click'
  | 'middle_click'
  | 'double_click'
  | 'scroll_up'
  | 'scroll_down';

export interface ActionToken {
  id: string;
  type: 'key' | 'modifier' | 'delay' | 'text' | 'smart';
  label: string;
  code?: string;
  delayMs?: number;
  textPayload?: string;
  smartPayload?: SmartActionPayload;
}

export interface ActionAdvanceStep {
  id: string;
  trigger: 'press' | 'release' | 'hold' | 'double-tap';
  actions: ActionToken[];
}

export type MultiGestureKey = 'single' | 'hold' | 'double' | 'combo';

export type SmartActionSubTab = 'text' | 'terminal' | 'hotkey' | 'mouse';

export interface EncoderSubBinding {
  type: 'macro' | 'layer' | 'preset' | 'none';
  label?: string;
  code?: string;
  customIcon?: string;
  customEmoji?: string;
  themeColor?: string;
  targetLayer?: number;
  tokens?: ActionToken[];
  smartAction?: SmartActionPayload;
}

export interface KeyAssignment {
  type: 'macro' | 'layer' | 'preset' | 'none';
  label?: string;
  code?: string;
  customIcon?: string;
  customEmoji?: string;
  themeColor?: string;
  targetLayer?: number;
  tokens?: ActionToken[];
  encoderActions?: {
    cw?: EncoderSubBinding;
    press?: EncoderSubBinding;
    ccw?: EncoderSubBinding;
  };
  smartAction?: SmartActionPayload;
  multiGestureActions?: Partial<Record<MultiGestureKey, KeyAssignment>>;
  actionSteps?: ActionAdvanceStep[];
}

/**
 * A layer is a slot -> assignment map plus optional bookkeeping.
 * `presetId` records which community preset last populated the layer so the UI
 * can tell "this preset is applied" apart from "some other preset is applied".
 */
export type LayerKeymap = Record<KeySlotId, KeyAssignment> & {
  presetId?: string;
};

export interface ProfileData {
  id: string;
  name: string;
  layers: LayerKeymap[];
  activeLayer: number;
}

export interface PresetItem {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  author: string;
  downloads: string;
  tags: string[];
  bannerGradient: string;
  breakdown: Record<string, string>;
  encoderConfig?: {
    cw: string;
    press: string;
    ccw: string;
  };
}

export interface BasicTileItem {
  id: string;
  label: string;
  code: string;
  icon?: string;
  sub?: string;
  bg?: string;
  customIcon?: string;
}

export interface BasicSection {
  title: string;
  items: BasicTileItem[];
}

export interface PresetBreakdown {
  [slot: string]: string;
}
