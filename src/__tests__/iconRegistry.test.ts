import { describe, it, expect } from 'vitest';
import { ICON_REGISTRY, PRESET_APP_ICONS, getRegisteredIcon } from '../iconRegistry';
import { PRESET_LIBRARY, getToolIconId, buildPresetLayer } from '../constants/presets';
import { INITIAL_PROFILES, BLANK_LAYER } from '../constants/basicKeys';
import { KEY_SLOTS } from '../constants/slots';

describe('Icon registry', () => {
  it('resolves every icon used by the shipped presets without lazy loading', () => {
    for (const preset of PRESET_LIBRARY) {
      for (const label of Object.values(preset.breakdown)) {
        const iconName = getToolIconId(label);
        expect(ICON_REGISTRY[iconName], `preset glyph "${iconName}" for "${label}"`).toBeDefined();
      }
    }
  });

  it('resolves every preset product icon', () => {
    for (const preset of PRESET_LIBRARY) {
      const resolved = PRESET_APP_ICONS[preset.icon] ?? preset.icon;
      expect(getRegisteredIcon(resolved), `app glyph for ${preset.icon}`).not.toBeNull();
    }
  });

  it('resolves every glyph in the factory keymaps', () => {
    const layers = [...INITIAL_PROFILES.flatMap((p) => p.layers), BLANK_LAYER];
    for (const layer of layers) {
      for (const slot of [...KEY_SLOTS, 'encoder' as const]) {
        const assignment = layer[slot];
        if (assignment?.customIcon) {
          expect(
            getRegisteredIcon(assignment.customIcon),
            `keymap glyph "${assignment.customIcon}" on ${slot}`
          ).not.toBeNull();
        }
      }
    }
  });

  it('falls back to null for unknown or missing names', () => {
    expect(getRegisteredIcon('Rocket')).toBeNull();
    expect(getRegisteredIcon(undefined)).toBeNull();
    expect(getRegisteredIcon('Sparkles')).toBeDefined();
  });

  it('builds every preset into a full layer with a matching presetId', () => {
    for (const preset of PRESET_LIBRARY) {
      const layer = buildPresetLayer(preset.id);
      expect(layer.presetId).toBe(preset.id);
      for (const slot of KEY_SLOTS) {
        expect(layer[slot].type).toBe('preset');
        expect(layer[slot].themeColor).toBe(preset.color);
      }
    }
  });
});
