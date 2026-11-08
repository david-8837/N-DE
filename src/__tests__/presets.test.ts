import { describe, it, expect } from 'vitest';
import { PRESET_LIBRARY, getToolIconId, buildPresetLayer } from '../constants/presets';
import { isPresetAppliedInProfile } from '../utils/helpers';
import { ProfileData } from '../types';

describe('Preset System and Tool Icon Mapping', () => {
  it('should include all required presets with valid metadata', () => {
    const ids = PRESET_LIBRARY.map((p) => p.id);
    expect(ids).toContain('framer');
    expect(ids).toContain('photoshop');
    expect(ids).toContain('premiere');
    expect(ids).toContain('vscode');
    expect(ids).toContain('blender');
    expect(ids).toContain('figma');
    expect(ids).toContain('ableton');
    expect(ids).toContain('discord');
    expect(ids).toContain('notion');
    expect(ids).toContain('excel');

    for (const preset of PRESET_LIBRARY) {
      expect(preset.name).toBeTruthy();
      expect(preset.color).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(preset.breakdown).toBeDefined();
      expect(Object.keys(preset.breakdown).length).toBe(9);
      expect(preset.encoderConfig).toBeDefined();
    }
  });

  it('ships ten distinct workflows with unique ids and colours', () => {
    expect(PRESET_LIBRARY).toHaveLength(10);
    expect(new Set(PRESET_LIBRARY.map((p) => p.id)).size).toBe(10);
    expect(new Set(PRESET_LIBRARY.map((p) => p.color)).size).toBe(10);
    for (const preset of PRESET_LIBRARY) {
      expect(preset.author).toBeTruthy();
      expect(preset.tags.length).toBeGreaterThan(0);
      expect(preset.encoderConfig?.cw).toBeTruthy();
    }
  });

  it('resolves relevant tool icon names based on key label heuristics', () => {
    expect(getToolIconId('Frame Tool (F)')).toBe('Grid');
    expect(getToolIconId('Text Tool (T)')).toBe('FileText');
    expect(getToolIconId('Duplicate (⌘D)')).toBe('Copy');
    expect(getToolIconId('Brush Tool (B)')).toBe('Brush');
    expect(getToolIconId('Razor Cut (C)')).toBe('Scissors');
    expect(getToolIconId('Toggle Terminal (⌘`)')).toBe('Terminal');
  });

  it('should build a complete LayerKeymap from a preset id with matching theme colors', () => {
    const framerLayer = buildPresetLayer('framer');
    expect(framerLayer.r1c1.type).toBe('preset');
    expect(framerLayer.r1c1.themeColor).toBe('#3b82f6');
    expect(framerLayer.encoder.type).toBe('preset');
    expect(framerLayer.encoder.encoderActions?.cw?.label).toBe('Zoom In (⌘+)');
    expect(framerLayer.encoder.encoderActions?.ccw?.label).toBe('Zoom Out (⌘-)');
  });

  it('should correctly detect if a preset is applied in a profile', () => {
    const mockProfile: ProfileData = {
      id: 'test',
      name: 'Test Profile',
      activeLayer: 0,
      layers: [buildPresetLayer('framer')],
    };

    expect(isPresetAppliedInProfile(mockProfile, 'framer')).toBe(true);
  });
});
