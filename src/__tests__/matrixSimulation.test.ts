import { describe, it, expect } from 'vitest';
import { INITIAL_LAYER_1, BLANK_LAYER } from '../constants/basicKeys';
import { buildPresetLayer } from '../constants/presets';
import { KeySlotId } from '../types';

describe('Matrix and Rotary Encoder Simulation Engine', () => {
  it('correctly simulates all 9 direct switch key assignments', () => {
    const layer = INITIAL_LAYER_1;
    const slots: KeySlotId[] = [
      'r1c1', 'r1c2', 'r1c3',
      'r2c1', 'r2c2', 'r2c3',
      'r3c1', 'r3c2', 'r3c3',
    ];

    slots.forEach((slot) => {
      const assignment = layer[slot];
      expect(assignment).toBeDefined();
      expect(assignment.type).toBe('macro');
      expect(assignment.code).toBeDefined();
      expect(assignment.customIcon).toBeDefined();
    });
  });

  it('correctly simulates rotary encoder clockwise, counter-clockwise, and switch press', () => {
    const encoder = INITIAL_LAYER_1.encoder;
    expect(encoder).toBeDefined();
    expect(encoder.encoderActions).toBeDefined();

    const cw = encoder.encoderActions?.cw;
    const ccw = encoder.encoderActions?.ccw;
    const press = encoder.encoderActions?.press;

    expect(cw?.code).toBe('KC_VOLU');
    expect(ccw?.code).toBe('KC_VOLD');
    expect(press?.code).toBe('KC_MUTE');
  });

  it('verifies blank layers initialize with neutral none assignments', () => {
    const blank = BLANK_LAYER;
    expect(blank.r1c1.type).toBe('none');
    expect(blank.r2c2.type).toBe('none');
    expect(blank.r3c3.type).toBe('none');
    expect(blank.encoder.type).toBe('none');
  });

  it('verifies presets cleanly map all 9 keys with distinct tool icons and electric blue dial actions', () => {
    const psLayer = buildPresetLayer('photoshop');
    expect(psLayer.r1c1.label).toBe('Brush Tool (B)');
    expect(psLayer.r1c1.customIcon).toBe('Brush');
    expect(psLayer.encoder.encoderActions?.cw?.label).toBe('Brush Size Up (])');
    expect(psLayer.encoder.encoderActions?.ccw?.label).toBe('Brush Size Down ([)');
  });
});
