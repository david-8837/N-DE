import { describe, it, expect } from 'vitest';
import {
  encodeKeycode,
  decodeKeycode,
  buildSetKeyPacket,
  buildLightingPacket,
  buildSaveFlashPacket,
  buildGetDeviceInfoPacket,
  QMK_INFO_JSON,
  QMK_CONFIG_H,
  QMK_KEYMAP_C,
  RP2040_CODE_PY,
  ARDUINO_FIRMWARE_INO,
  RP2040_PINOUT_GUIDE,
} from '../hardwareProtocol';

describe('Hardware Protocol & Keycode Transcoding', () => {
  it('should encode standard basic QMK keycodes to 16-bit integers', () => {
    expect(encodeKeycode('KC_A')).toBe(0x0004);
    expect(encodeKeycode('KC_ENTER')).toBe(0x0028);
    expect(encodeKeycode('KC_ESC')).toBe(0x0029);
    expect(encodeKeycode('KC_BSPC')).toBe(0x002a);
    expect(encodeKeycode('KC_TAB')).toBe(0x002b);
    expect(encodeKeycode('KC_SPC')).toBe(0x002c);
  });

  it('should encode modifier-wrapped chords (Ctrl+C, Ctrl+V, Win+L)', () => {
    const copyCode = encodeKeycode('LCTL(KC_C)');
    const pasteCode = encodeKeycode('LCTL(KC_V)');
    const lockCode = encodeKeycode('LGUI(KC_L)');

    expect(copyCode).toBe(0x0100 | 0x0006); // LCTL mask + 'C'
    expect(pasteCode).toBe(0x0100 | 0x0019); // LCTL mask + 'V'
    expect(lockCode).toBe(0x0800 | 0x000f); // LGUI mask + 'L'
  });

  it('should decode 16-bit integer into detailed descriptor object', () => {
    const decodedA = decodeKeycode(0x0004);
    expect(decodedA.hex).toBe('0x0004');
    expect(decodedA.scancode).toBe(0x04);
    expect(decodedA.type).toBe('Basic Key');

    const decodedCopy = decodeKeycode(0x0100 | 0x0006);
    expect(decodedCopy.modifiers).toContain('Ctrl');
    expect(decodedCopy.scancode).toBe(0x06);

    const decodedMedia = decodeKeycode(0xe0e9);
    expect(decodedMedia.type).toBe('Consumer Media Control');
  });

  it('should construct a 64-byte USB HID Raw packet for key mapping', () => {
    const rawKeycode = encodeKeycode('LCTL(KC_C)');
    const packet = buildSetKeyPacket(0, 0, rawKeycode);
    expect(packet).toBeInstanceOf(Uint8Array);
    expect(packet.length).toBe(64);
    expect(packet[0]).toBe(0x03); // CMD_SET_KEY
    expect(packet[1]).toBe(0); // Layer 0
    expect(packet[2]).toBe(0); // Key 0
    expect(packet[3]).toBe(0x06); // Keycode low byte
    expect(packet[4]).toBe(0x01); // Keycode high byte (LCTL)
  });

  it('should construct a 64-byte USB HID Raw packet for RGB lighting and flash save', () => {
    const lightPacket = buildLightingPacket(1, 180, 255, 100);
    expect(lightPacket).toBeInstanceOf(Uint8Array);
    expect(lightPacket.length).toBe(64);
    expect(lightPacket[0]).toBe(0x03);
    expect(lightPacket[1]).toBe(1);
    expect(lightPacket[2]).toBe(180);

    const savePacket = buildSaveFlashPacket();
    expect(savePacket.length).toBe(64);
    expect(savePacket[0]).toBe(0x04);

    const infoPacket = buildGetDeviceInfoPacket();
    expect(infoPacket.length).toBe(64);
    expect(infoPacket[0]).toBe(0x01);
  });
});

describe('Firmware Source Integrity & Pin Matrix Mapping', () => {
  it('RP2040 pinout guide defines all 9 keys + 3 encoder pins + RGB', () => {
    expect(RP2040_PINOUT_GUIDE.length).toBe(13);
    expect(RP2040_PINOUT_GUIDE.some((p) => p.pin === 'GP0')).toBe(true);
    expect(RP2040_PINOUT_GUIDE.some((p) => p.pin === 'GP8')).toBe(true);
    expect(RP2040_PINOUT_GUIDE.some((p) => p.pin === 'GP9')).toBe(true);
    expect(RP2040_PINOUT_GUIDE.some((p) => p.pin === 'GP16')).toBe(true);
  });

  it('QMK firmware C code specifies encoder handling and dynamic layer switching', () => {
    expect(QMK_KEYMAP_C).toContain('LAYOUT_grid_macro_1');
    expect(QMK_KEYMAP_C).toContain('encoder_update_user');
    expect(QMK_KEYMAP_C).toContain('rgblight_setrgb_at');
  });

  it('CircuitPython code specifies 9 buttons + rotary encoder with debouncing', () => {
    expect(RP2040_CODE_PY).toContain('board.GP0');
    expect(RP2040_CODE_PY).toContain('rotaryio.IncrementalEncoder');
    expect(RP2040_CODE_PY).toContain('keymap.json');
  });

  it('Arduino C++ code includes Adafruit TinyUSB HID and Raw HID callback', () => {
    expect(ARDUINO_FIRMWARE_INO).toContain('Adafruit_TinyUSB');
    expect(ARDUINO_FIRMWARE_INO).toContain('raw_hid_receive_cb');
    expect(ARDUINO_FIRMWARE_INO).toContain('ENC_A');
  });
});
