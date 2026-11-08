import { KeySlotId } from '../types';

/** The nine key slots of the 3x3 matrix, in visual order (excludes the encoder). */
export const KEY_SLOTS: readonly KeySlotId[] = [
  'r1c1',
  'r1c2',
  'r1c3',
  'r2c1',
  'r2c2',
  'r2c3',
  'r3c1',
  'r3c2',
  'r3c3',
] as const;

/** Every addressable control on the device, including the rotary encoder. */
export const ALL_SLOTS: readonly KeySlotId[] = [...KEY_SLOTS, 'encoder'] as const;

export const LAYER_TEMPLATE: Record<'matrix' | 'encoder', string[]> = {
  matrix: [...KEY_SLOTS],
  encoder: ['cw', 'press', 'ccw'],
};
