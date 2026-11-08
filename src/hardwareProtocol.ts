// hardwareProtocol.ts - Web Serial & RP2040-Zero Firmware Definitions

export interface HardwareDeviceInfo {
  device: string;
  mcu: string;
  version: string;
  activeLayer: number;
  layerCount: number;
}

export const RP2040_PINOUT_GUIDE = [
  { slot: 'r1c1', pos: 'Key 1 (Row 1 Col 1)', pin: 'GP0', desc: 'Direct to Pin GP0 & GND' },
  { slot: 'r1c2', pos: 'Key 2 (Row 1 Col 2)', pin: 'GP1', desc: 'Direct to Pin GP1 & GND' },
  { slot: 'r1c3', pos: 'Key 3 (Row 1 Col 3)', pin: 'GP2', desc: 'Direct to Pin GP2 & GND' },
  { slot: 'r2c1', pos: 'Key 4 (Row 2 Col 1)', pin: 'GP3', desc: 'Direct to Pin GP3 & GND' },
  { slot: 'r2c2', pos: 'Key 5 (Row 2 Col 2)', pin: 'GP4', desc: 'Direct to Pin GP4 & GND' },
  { slot: 'r2c3', pos: 'Key 6 (Row 2 Col 3)', pin: 'GP5', desc: 'Direct to Pin GP5 & GND' },
  { slot: 'r3c1', pos: 'Key 7 (Row 3 Col 1)', pin: 'GP6', desc: 'Direct to Pin GP6 & GND' },
  { slot: 'r3c2', pos: 'Key 8 (Row 3 Col 2)', pin: 'GP7', desc: 'Direct to Pin GP7 & GND' },
  { slot: 'r3c3', pos: 'Key 9 (Row 3 Col 3)', pin: 'GP8', desc: 'Direct to Pin GP8 & GND' },
  { slot: 'dial-tl (CW)', pos: 'Rotary Dial A (CW)', pin: 'GP9', desc: 'Encoder Pin A & Common GND' },
  { slot: 'dial-tl (CCW)', pos: 'Rotary Dial B (CCW)', pin: 'GP10', desc: 'Encoder Pin B & Common GND' },
  { slot: 'dial-tl (SW)', pos: 'Rotary Dial Switch', pin: 'GP11', desc: 'Encoder Switch Pin & Common GND' },
  { slot: 'status-led', pos: 'Onboard RGB Status LED', pin: 'GP16', desc: 'Built-in WS2812 NeoPixel' },
];

export const RP2040_BOOT_PY = `# boot.py - Grid Macro 1 RP2040-Zero USB Configuration
import usb_cdc
import storage
import board
import digitalio

# Enable both console and raw data serial for Web Serial bidirectional configuration
usb_cdc.enable(console=True, data=True)

# Allow RP2040 internal script to save keymap.json from Web Serial
key1 = digitalio.DigitalInOut(board.GP0)
key1.direction = digitalio.Direction.INPUT
key1.pull = digitalio.Pull.UP

if not key1.value:
    storage.remount("/", readonly=False)
else:
    storage.remount("/", readonly=False)

key1.deinit()
`;

export const RP2040_CODE_PY = `"""
GRID MACRO 1 - RP2040-Zero Macropad Firmware
Hardware: Waveshare RP2040-Zero
Matrix: 9 Direct Keys (GP0 - GP8) + 1 Rotary Encoder (GP9, GP10, GP11) + WS2812 RGB LED (GP16)
Protocol: USB HID (Keyboard + Consumer Media) + Web Serial Bidirectional Sync
"""

import time
import json
import board
import digitalio
import rotaryio
import usb_hid
import usb_cdc
import neopixel

from adafruit_hid.keyboard import Keyboard
from adafruit_hid.keyboard_layout_us import KeyboardLayoutUS
from adafruit_hid.keycode import Keycode
from adafruit_hid.consumer_control import ConsumerControl
from adafruit_hid.consumer_control_code import ConsumerControlCode

KEY_PINS = [
    board.GP0, board.GP1, board.GP2,
    board.GP3, board.GP4, board.GP5,
    board.GP6, board.GP7, board.GP8,
]

SLOT_NAMES = [
    "r1c1", "r1c2", "r1c3",
    "r2c1", "r2c2", "r2c3",
    "r3c1", "r3c2", "r3c3",
]

ENCODER_PIN_A = board.GP9
ENCODER_PIN_B = board.GP10
ENCODER_PIN_SW = board.GP11
NEOPIXEL_PIN = board.GP16

kbd = Keyboard(usb_hid.devices)
layout = KeyboardLayoutUS(kbd)
cc = ConsumerControl(usb_hid.devices)

pixel = neopixel.NeoPixel(NEOPIXEL_PIN, 1, brightness=0.25, auto_write=True)
pixel[0] = (0, 81, 255)

keys = []
for pin in KEY_PINS:
    k = digitalio.DigitalInOut(pin)
    k.direction = digitalio.Direction.INPUT
    k.pull = digitalio.Pull.UP
    keys.append(k)

encoder = rotaryio.IncrementalEncoder(ENCODER_PIN_A, ENCODER_PIN_B)
encoder_sw = digitalio.DigitalInOut(ENCODER_PIN_SW)
encoder_sw.direction = digitalio.Direction.INPUT
encoder_sw.pull = digitalio.Pull.UP

last_encoder_pos = encoder.position
last_sw_state = encoder_sw.value
last_key_states = [k.value for k in keys]

KEY_MAP = {
    "a": Keycode.A, "b": Keycode.B, "c": Keycode.C, "d": Keycode.D,
    "e": Keycode.E, "f": Keycode.F, "g": Keycode.G, "h": Keycode.H,
    "i": Keycode.I, "j": Keycode.J, "k": Keycode.K, "l": Keycode.L,
    "m": Keycode.M, "n": Keycode.N, "o": Keycode.O, "p": Keycode.P,
    "q": Keycode.Q, "r": Keycode.R, "s": Keycode.S, "t": Keycode.T,
    "u": Keycode.U, "v": Keycode.V, "w": Keycode.W, "x": Keycode.X,
    "y": Keycode.Y, "z": Keycode.Z,
    "0": Keycode.ZERO, "1": Keycode.ONE, "2": Keycode.TWO, "3": Keycode.THREE,
    "4": Keycode.FOUR, "5": Keycode.FIVE, "6": Keycode.SIX, "7": Keycode.SEVEN,
    "8": Keycode.EIGHT, "9": Keycode.NINE,
    "enter": Keycode.ENTER, "return": Keycode.ENTER,
    "esc": Keycode.ESCAPE, "escape": Keycode.ESCAPE,
    "backspace": Keycode.BACKSPACE, "bksp": Keycode.BACKSPACE,
    "tab": Keycode.TAB, "space": Keycode.SPACEBAR, "spacebar": Keycode.SPACEBAR,
    "minus": Keycode.MINUS, "equal": Keycode.EQUALS,
    "left_bracket": Keycode.LEFT_BRACKET, "right_bracket": Keycode.RIGHT_BRACKET,
    "backslash": Keycode.BACKSLASH, "semicolon": Keycode.SEMICOLON,
    "quote": Keycode.QUOTE, "grave": Keycode.GRAVE_ACCENT,
    "comma": Keycode.COMMA, "period": Keycode.PERIOD, "slash": Keycode.FORWARD_SLASH,
    "caps_lock": Keycode.CAPS_LOCK,
    "f1": Keycode.F1, "f2": Keycode.F2, "f3": Keycode.F3, "f4": Keycode.F4,
    "f5": Keycode.F5, "f6": Keycode.F6, "f7": Keycode.F7, "f8": Keycode.F8,
    "f9": Keycode.F9, "f10": Keycode.F10, "f11": Keycode.F11, "f12": Keycode.F12,
    "print_screen": Keycode.PRINT_SCREEN, "scroll_lock": Keycode.SCROLL_LOCK,
    "pause": Keycode.PAUSE, "insert": Keycode.INSERT,
    "home": Keycode.HOME, "page_up": Keycode.PAGE_UP,
    "delete": Keycode.DELETE, "del": Keycode.DELETE,
    "end": Keycode.END, "page_down": Keycode.PAGE_DOWN,
    "right": Keycode.RIGHT_ARROW, "left": Keycode.LEFT_ARROW,
    "down": Keycode.DOWN_ARROW, "up": Keycode.UP_ARROW,
    "ctrl": Keycode.LEFT_CONTROL, "control": Keycode.LEFT_CONTROL,
    "shift": Keycode.LEFT_SHIFT,
    "alt": Keycode.LEFT_ALT, "option": Keycode.LEFT_ALT, "opt": Keycode.LEFT_ALT,
    "gui": Keycode.LEFT_GUI, "cmd": Keycode.LEFT_GUI, "command": Keycode.LEFT_GUI, "win": Keycode.LEFT_GUI,
}

MEDIA_MAP = {
    "volume +": ConsumerControlCode.VOLUME_INCREMENT,
    "volume -": ConsumerControlCode.VOLUME_DECREMENT,
    "vol_up": ConsumerControlCode.VOLUME_INCREMENT,
    "vol_down": ConsumerControlCode.VOLUME_DECREMENT,
    "mute": ConsumerControlCode.MUTE,
    "play": ConsumerControlCode.PLAY_PAUSE,
    "play / pause": ConsumerControlCode.PLAY_PAUSE,
    "next": ConsumerControlCode.SCAN_NEXT_TRACK,
    "prev": ConsumerControlCode.SCAN_PREVIOUS_TRACK,
    "stop": ConsumerControlCode.STOP,
    "fast_forward": ConsumerControlCode.FAST_FORWARD,
    "rewind": ConsumerControlCode.REWIND,
    "brightness +": ConsumerControlCode.BRIGHTNESS_INCREMENT,
    "brightness -": ConsumerControlCode.BRIGHTNESS_DECREMENT,
}

DEFAULT_CONFIG = {
    "version": "1.0.2",
    "deviceName": "Grid macro 1",
    "activeLayerIndex": 0,
    "layers": [
        {
            "dial-tl": {
                "label": "Vol",
                "binding": "Volume / Play",
                "encoderActions": {
                    "cw": {"label": "vo...", "binding": "volume +"},
                    "press": {"label": "pl...", "binding": "play"},
                    "ccw": {"label": "vo...", "binding": "volume -"}
                }
            },
            "r1c1": {"label": "Q", "binding": "q"},
            "r1c2": {"label": "W", "binding": "w"},
            "r1c3": {"label": "E", "binding": "e"},
            "r2c1": {"label": "A", "binding": "a"},
            "r2c2": {"label": "S", "binding": "s"},
            "r2c3": {"label": "D", "binding": "d"},
            "r3c1": {"label": "Z", "binding": "z"},
            "r3c2": {"label": "X", "binding": "x"},
            "r3c3": {"label": "C", "binding": "c"}
        }
    ]
}

def load_config():
    try:
        with open("/keymap.json", "r") as f:
            return json.load(f)
    except Exception:
        return DEFAULT_CONFIG

def save_config(cfg):
    try:
        with open("/keymap.json", "w") as f:
            json.dump(cfg, f)
        return True
    except Exception:
        return False

current_config = load_config()
active_layer_idx = current_config.get("activeLayerIndex", 0)

def execute_binding(binding_str):
    if not binding_str or binding_str.lower() in ["blank", "—", ""]:
        return
    b = binding_str.strip().lower()

    for media_name, media_code in MEDIA_MAP.items():
        if b == media_name or f"({media_name})" in b or media_name in b:
            cc.send(media_code)
            return

    if "(" in b and ")" in b:
        start = b.find("(") + 1
        end = b.find(")")
        shortcut_part = b[start:end].strip()
    else:
        shortcut_part = b

    tokens = [t.strip().replace("cmd", "gui").replace("command", "gui").replace("win", "gui")
              for t in shortcut_part.split("+")]

    keycodes = []
    for t in tokens:
        if t in KEY_MAP:
            keycodes.append(KEY_MAP[t])
        elif len(t) == 1 and t in KEY_MAP:
            keycodes.append(KEY_MAP[t])

    if keycodes:
        kbd.send(*keycodes)
    else:
        try:
            layout.write(shortcut_part)
        except Exception:
            pass

def send_serial_json(obj):
    msg = json.dumps(obj) + "\\n"
    if usb_cdc.data and usb_cdc.data.connected:
        try:
            usb_cdc.data.write(msg.encode("utf-8"))
        except Exception:
            pass
    if usb_cdc.console and usb_cdc.console.connected:
        try:
            usb_cdc.console.write(msg.encode("utf-8"))
        except Exception:
            pass

def handle_serial_input():
    global current_config, active_layer_idx
    port = usb_cdc.data if (usb_cdc.data and usb_cdc.data.in_waiting) else usb_cdc.console
    if not port or not port.in_waiting:
        return
    try:
        raw_line = port.readline().decode("utf-8").strip()
        if not raw_line:
            return
        msg = json.loads(raw_line)
        cmd = msg.get("cmd")

        if cmd == "PING":
            send_serial_json({
                "status": "OK",
                "device": "Grid macro 1",
                "mcu": "RP2040-Zero",
                "version": current_config.get("version", "1.0.2"),
                "activeLayer": active_layer_idx,
                "layerCount": len(current_config.get("layers", []))
            })
            pixel[0] = (0, 255, 128)
            time.sleep(0.04)
            pixel[0] = (0, 81, 255)

        elif cmd == "GET_CONFIG":
            send_serial_json({"status": "OK", "type": "CONFIG_DATA", "data": current_config})

        elif cmd == "SET_CONFIG":
            new_data = msg.get("data")
            if new_data:
                current_config = new_data
                active_layer_idx = current_config.get("activeLayerIndex", 0)
                saved = save_config(current_config)
                send_serial_json({"status": "OK" if saved else "ERROR_READONLY", "saved": saved})
                pixel[0] = (0, 255, 0)
                time.sleep(0.12)
                pixel[0] = (0, 81, 255)

        elif cmd == "SET_LAYER":
            idx = msg.get("layer", 0)
            layers = current_config.get("layers", [])
            if 0 <= idx < len(layers):
                active_layer_idx = idx
                send_serial_json({"status": "OK", "activeLayer": active_layer_idx})
    except Exception as e:
        send_serial_json({"status": "ERROR", "error": str(e)})

print("[GridMacro1] Ready!")

while True:
    handle_serial_input()
    layers = current_config.get("layers", [])
    active_layer = layers[active_layer_idx] if (0 <= active_layer_idx < len(layers)) else {}

    for i, key_in in enumerate(keys):
        val = key_in.value
        slot = SLOT_NAMES[i]
        if val != last_key_states[i]:
            last_key_states[i] = val
            if not val:
                pixel[0] = (255, 255, 255)
                send_serial_json({"event": "KEY_DOWN", "slot": slot})
                key_data = active_layer.get(slot, {})
                execute_binding(key_data.get("binding", key_data.get("label", "")))
            else:
                pixel[0] = (0, 81, 255)
                send_serial_json({"event": "KEY_UP", "slot": slot})

    pos = encoder.position
    if pos != last_encoder_pos:
        diff = pos - last_encoder_pos
        last_encoder_pos = pos
        dial_data = active_layer.get("dial-tl", {})
        enc_actions = dial_data.get("encoderActions", {})
        if diff > 0:
            pixel[0] = (0, 200, 255)
            send_serial_json({"event": "DIAL_ROTATED", "dir": "cw", "slot": "dial-tl"})
            execute_binding(enc_actions.get("cw", {}).get("binding", "volume +"))
        else:
            pixel[0] = (0, 200, 255)
            send_serial_json({"event": "DIAL_ROTATED", "dir": "ccw", "slot": "dial-tl"})
            execute_binding(enc_actions.get("ccw", {}).get("binding", "volume -"))
        time.sleep(0.01)
        pixel[0] = (0, 81, 255)

    sw_val = encoder_sw.value
    if sw_val != last_sw_state:
        last_sw_state = sw_val
        if not sw_val:
            pixel[0] = (255, 120, 0)
            send_serial_json({"event": "DIAL_PRESS", "state": "down", "slot": "dial-tl"})
            dial_data = active_layer.get("dial-tl", {})
            enc_actions = dial_data.get("encoderActions", {})
            execute_binding(enc_actions.get("press", {}).get("binding", "play"))
        else:
            pixel[0] = (0, 81, 255)
            send_serial_json({"event": "DIAL_PRESS", "state": "up", "slot": "dial-tl"})

    time.sleep(0.002)
`;

export const RP2040_README_MD = `# Grid Macro 1 - RP2040-Zero Macropad Wiring & Setup Guide

## Pinout Map
- Key 1 (r1c1): GP0 -> Switch -> GND
- Key 2 (r1c2): GP1 -> Switch -> GND
- Key 3 (r1c3): GP2 -> Switch -> GND
- Key 4 (r2c1): GP3 -> Switch -> GND
- Key 5 (r2c2): GP4 -> Switch -> GND
- Key 6 (r2c3): GP5 -> Switch -> GND
- Key 7 (r3c1): GP6 -> Switch -> GND
- Key 8 (r3c2): GP7 -> Switch -> GND
- Key 9 (r3c3): GP8 -> Switch -> GND
- Encoder Pin A (CW): GP9 -> Pin A
- Encoder Pin B (CCW): GP10 -> Pin B
- Encoder Pin SW (Press): GP11 -> Switch -> GND
- WS2812 RGB LED: GP16 (Onboard)

## Instructions
1. Flash CircuitPython (.uf2) onto your RP2040-Zero.
2. Put adafruit_hid into the lib/ folder.
3. Copy code.py and boot.py into root of CIRCUITPY drive.
4. Open the Web App and click Connect RP2040 to flash custom keymaps over USB!
`;

/* ========================================================================== */
/* QMK NATIVE C FIRMWARE TEMPLATES (RP2040-ZERO)                              */
/* ========================================================================== */

export const QMK_INFO_JSON = `{
    "keyboard_name": "Grid Macro 1",
    "manufacturer": "NØDE",
    "url": "https://node-studio.local",
    "maintainer": "NØDE",
    "usb": {
        "vid": "0xFEED",
        "pid": "0x6001",
        "device_version": "1.0.0"
    },
    "features": {
        "bootmagic": true,
        "extrakey": true,
        "mousekey": true,
        "nkro": true,
        "rgblight": true,
        "encoder": true,
        "raw": true,
        "via": true
    },
    "matrix_pins": {
        "direct": [
            ["GP0", "GP1", "GP2"],
            ["GP3", "GP4", "GP5"],
            ["GP6", "GP7", "GP8"],
            ["GP11", null, null]
        ]
    },
    "encoder": {
        "rotary": [
            {"pin_a": "GP9", "pin_b": "GP10", "resolution": 4}
        ]
    },
    "rgblight": {
        "pin": "GP16",
        "led_count": 1,
        "driver": "ws2812"
    },
    "processor": "RP2040",
    "bootloader": "rp2040",
    "layouts": {
        "LAYOUT_grid_macro_1": {
            "layout": [
                {"matrix": [3, 0], "x": 2, "y": 0, "w": 1, "h": 1, "label": "DIAL_SW"},
                {"matrix": [0, 0], "x": 0, "y": 1, "w": 1, "h": 1, "label": "R1C1"},
                {"matrix": [0, 1], "x": 1, "y": 1, "w": 1, "h": 1, "label": "R1C2"},
                {"matrix": [0, 2], "x": 2, "y": 1, "w": 1, "h": 1, "label": "R1C3"},
                {"matrix": [1, 0], "x": 0, "y": 2, "w": 1, "h": 1, "label": "R2C1"},
                {"matrix": [1, 1], "x": 1, "y": 2, "w": 1, "h": 1, "label": "R2C2"},
                {"matrix": [1, 2], "x": 2, "y": 2, "w": 1, "h": 1, "label": "R2C3"},
                {"matrix": [2, 0], "x": 0, "y": 3, "w": 1, "h": 1, "label": "R3C1"},
                {"matrix": [2, 1], "x": 1, "y": 3, "w": 1, "h": 1, "label": "R3C2"},
                {"matrix": [2, 2], "x": 2, "y": 3, "w": 1, "h": 1, "label": "R3C3"}
            ]
        }
    }
}`;

export const QMK_RULES_MK = `# rules.mk - QMK Native RP2040 Build Configuration (Ultra-Low Latency)
MCU = RP2040
BOOTLOADER = rp2040

# Ultra-Low Latency Eager Debouncing (0ms Keypress Latency)
DEBOUNCE_TYPE = sym_eager_pr

BOOTMAGIC_ENABLE = yes
MOUSEKEY_ENABLE = yes
EXTRAKEY_ENABLE = yes
CONSOLE_ENABLE = no
COMMAND_ENABLE = no
NKRO_ENABLE = yes
RGBLIGHT_ENABLE = yes
RGBLIGHT_DRIVER = ws2812
WS2812_DRIVER = vendor
ENCODER_ENABLE = yes
RAW_ENABLE = yes
VIA_ENABLE = yes
VIAL_ENABLE = yes
DYNAMIC_KEYMAP_ENABLE = yes
LTO_ENABLE = yes
`;

export const QMK_CONFIG_H = `/* config.h - Grid Macro 1 QMK Hardware Definitions (RP2040-Zero) */
#pragma once

#include "config_common.h"

#define VENDOR_ID       0xFEED
#define PRODUCT_ID      0x6001
#define DEVICE_VER      0x0001
#define MANUFACTURER    NØDE
#define PRODUCT         Grid Macro 1

#define MATRIX_ROWS 4
#define MATRIX_COLS 3

#define DIRECT_PINS { \\
    { GP0,  GP1,  GP2  }, \\
    { GP3,  GP4,  GP5  }, \\
    { GP6,  GP7,  GP8  }, \\
    { GP11, NO_PIN, NO_PIN } \\
}

/* 1000Hz High-Speed USB Polling & 0ms Eager Debounce Filtering */
#define USB_POLLING_INTERVAL_MS 1
#define QMK_KEYS_PER_SCAN 12
#define DEBOUNCE 3

#define ENCODERS_PAD_A { GP9 }
#define ENCODERS_PAD_B { GP10 }
#define ENCODER_RESOLUTION 4
#define ENCODER_DIRECTION_FLIP

#define WS2812_DI_PIN GP16
#define RGBLIGHT_LED_COUNT 1
#define RGBLIGHT_LIMIT_VAL 220
#define RGBLIGHT_EFFECT_BREATHING
#define RGBLIGHT_EFFECT_RAINBOW_MOOD

#define DYNAMIC_KEYMAP_EEPROM_MAX_ADDR 4095
#define DYNAMIC_KEYMAP_LAYER_COUNT 4
#define TAPPING_TERM 150
#define FORCE_NKRO
`;

export const QMK_KEYMAP_C = `/* keymap.c - Production Ready Native C QMK Keymap for Grid Macro 1 */
#include QMK_KEYBOARD_H

enum layers {
    _BASE = 0,
    _MEDIA,
    _NUMPAD,
    _FN
};

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    [_BASE] = LAYOUT_grid_macro_1(
        KC_MPLY,
        KC_Q,       KC_W,       KC_E,
        KC_A,       KC_S,       KC_D,
        KC_Z,       KC_X,       MO(_FN)
    ),
    [_MEDIA] = LAYOUT_grid_macro_1(
        KC_MUTE,
        KC_MPRV,    KC_MPLY,    KC_MNXT,
        KC_LEFT,    KC_UP,      KC_RGHT,
        KC_HOME,    KC_DOWN,    KC_END
    ),
    [_NUMPAD] = LAYOUT_grid_macro_1(
        KC_EQL,
        KC_P7,      KC_P8,      KC_P9,
        KC_P4,      KC_P5,      KC_P6,
        KC_P1,      KC_P2,      KC_P3
    ),
    [_FN] = LAYOUT_grid_macro_1(
        RGB_TOG,
        RGB_MOD,    RGB_HUI,    RGB_SAI,
        TO(_BASE),  TO(_MEDIA), TO(_NUMPAD),
        QK_BOOT,    EE_CLR,     _______
    )
};

#if defined(ENCODER_ENABLE)
bool encoder_update_user(uint8_t index, bool clockwise) {
    if (index == 0) {
        uint8_t layer = get_highest_layer(layer_state);
        switch (layer) {
            case _BASE:
                tap_code16(clockwise ? KC_VOLU : KC_VOLD);
                break;
            case _MEDIA:
                tap_code16(clockwise ? KC_MNXT : KC_MPRV);
                break;
            case _NUMPAD:
                tap_code16(clockwise ? C(KC_Y) : C(KC_Z));
                break;
            case _FN:
                if (clockwise) rgblight_increase_val();
                else rgblight_decrease_val();
                break;
            default:
                tap_code16(clockwise ? KC_VOLU : KC_VOLD);
                break;
        }
        return false;
    }
    return true;
}
#endif

layer_state_t layer_state_set_user(layer_state_t state) {
    switch (get_highest_layer(state)) {
        case _BASE:   rgblight_setrgb_at(0, 81, 255, 0); break;   // Electric Blue
        case _MEDIA:  rgblight_setrgb_at(16, 185, 129, 0); break; // Green
        case _NUMPAD: rgblight_setrgb_at(245, 158, 11, 0); break; // Amber
        case _FN:     rgblight_setrgb_at(225, 29, 72, 0); break;  // Red
        default:      rgblight_setrgb_at(0, 81, 255, 0); break;
    }
    return state;
}

void keyboard_post_init_user(void) {
    rgblight_enable_noeeprom();
    rgblight_setrgb_at(0, 81, 255, 0);
}
`;

export const QMK_VIA_JSON = `{
  "name": "Grid Macro 1",
  "vendorId": "0xFEED",
  "productId": "0x6001",
  "customKeycodes": [],
  "matrix": {
    "rows": 4,
    "cols": 3
  },
  "layouts": {
    "keymap": [
      [
        {"x": 2, "y": 0, "label": "Enc SW"},
        {"x": 0, "y": 1, "label": "Key 1"},
        {"x": 1, "y": 1, "label": "Key 2"},
        {"x": 2, "y": 1, "label": "Key 3"},
        {"x": 0, "y": 2, "label": "Key 4"},
        {"x": 1, "y": 2, "label": "Key 5"},
        {"x": 2, "y": 2, "label": "Key 6"},
        {"x": 0, "y": 3, "label": "Key 7"},
        {"x": 1, "y": 3, "label": "Key 8"},
        {"x": 2, "y": 3, "label": "Key 9"}
      ]
    ]
  }
}`;

export const ARDUINO_FIRMWARE_INO = `/*
 * Grid Macro 1 - RP2040-Zero Arduino C++ Firmware (Adafruit TinyUSB)
 * Direct Matrix (GP0..GP8) + EC11 Encoder (GP9, GP10, GP11) + WS2812 RGB (GP16)
 * Supports 64-byte Raw HID for live WebHID dynamic key remapping without reflashing.
 */

#include <Arduino.h>
#include <Adafruit_TinyUSB.h>

const uint8_t KEY_PINS[9] = { 0, 1, 2, 3, 4, 5, 6, 7, 8 };
const uint8_t ENC_A = 9;
const uint8_t ENC_B = 10;
const uint8_t ENC_SW = 11;

#define TOTAL_KEYS 10
#define NUM_LAYERS 4

uint16_t keymaps[NUM_LAYERS][TOTAL_KEYS] = {
  { 0x0014, 0x001A, 0x0008, 0x0004, 0x0016, 0x0007, 0x001D, 0x001B, 0x5101, 0xE0CD },
  { 0xE0B6, 0xE0CD, 0xE0B5, 0x0050, 0x0052, 0x004F, 0x004A, 0x0051, 0x004D, 0xE0E2 },
  { 0x005F, 0x0060, 0x0061, 0x005C, 0x005D, 0x005E, 0x0059, 0x005A, 0x005B, 0x0067 },
  { 0x003A, 0x003B, 0x003C, 0x003D, 0x003E, 0x003F, 0x0040, 0x0041, 0x0000, 0x0000 }
};

uint16_t encoder_map[NUM_LAYERS][2] = {
  { 0xE0EA, 0xE0E9 },
  { 0xE0B6, 0xE0B5 },
  { 0x011D, 0x011C },
  { 0xE070, 0xE06F }
};

uint8_t current_layer = 0;
bool key_states[TOTAL_KEYS] = { false };
int last_enc_a = HIGH;

uint8_t const desc_hid_report[] = {
  TUD_HID_REPORT_DESC_KEYBOARD(HID_REPORT_ID(1)),
  TUD_HID_REPORT_DESC_CONSUMER(HID_REPORT_ID(2)),
  TUD_HID_REPORT_DESC_GENERIC_INOUT(64, HID_REPORT_ID(3))
};

Adafruit_USBD_HID usb_hid;

void raw_hid_receive_cb(uint8_t report_id, hid_report_type_t report_type, uint8_t const* buffer, uint16_t bufsize);

void setup() {
  usb_hid.setPollInterval(1);
  usb_hid.setReportDescriptor(desc_hid_report, sizeof(desc_hid_report));
  usb_hid.setReportCallback(NULL, raw_hid_receive_cb);
  usb_hid.begin();

  for (int i = 0; i < 9; i++) pinMode(KEY_PINS[i], INPUT_PULLUP);
  pinMode(ENC_A, INPUT_PULLUP);
  pinMode(ENC_B, INPUT_PULLUP);
  pinMode(ENC_SW, INPUT_PULLUP);
}

void raw_hid_receive_cb(uint8_t report_id, hid_report_type_t report_type, uint8_t const* buffer, uint16_t bufsize) {
  if (buffer[0] == 0x03) {
    uint8_t layer = buffer[1];
    uint8_t key_id = buffer[2];
    uint16_t keycode = buffer[3] | (buffer[4] << 8);
    if (layer < NUM_LAYERS && key_id < TOTAL_KEYS) {
      keymaps[layer][key_id] = keycode;
    }
  }
}

void fire_keycode(uint16_t keycode) {
  if (keycode == 0x0000) return;
  if ((keycode & 0x8000) != 0) {
    uint8_t report[64] = { 0xEE, (uint8_t)(keycode & 0xFF) };
    usb_hid.sendReport(3, report, sizeof(report));
    return;
  }
  if ((keycode & 0xE000) == 0xE000) {
    usb_hid.sendReport16(2, keycode & 0x0FFF);
    delay(10);
    usb_hid.sendReport16(2, 0);
    return;
  }
  uint8_t modifier = 0;
  if (keycode & (1 << 8)) modifier |= KEYBOARD_MODIFIER_LEFTCTRL;
  if (keycode & (1 << 9)) modifier |= KEYBOARD_MODIFIER_LEFTSHIFT;
  if (keycode & (1 << 10)) modifier |= KEYBOARD_MODIFIER_LEFTALT;
  if (keycode & (1 << 11)) modifier |= KEYBOARD_MODIFIER_LEFTGUI;

  uint8_t key_report[6] = { (uint8_t)(keycode & 0xFF), 0, 0, 0, 0, 0 };
  usb_hid.keyboardReport(1, modifier, key_report);
  delay(10);
  usb_hid.keyboardRelease(1);
}

void loop() {
  if (!TinyUSBDevice.mounted()) return;

  for (int i = 0; i < 9; i++) {
    bool is_pressed = (digitalRead(KEY_PINS[i]) == LOW);
    if (is_pressed != key_states[i]) {
      key_states[i] = is_pressed;
      if (is_pressed) fire_keycode(keymaps[current_layer][i]);
    }
  }

  bool is_sw_pressed = (digitalRead(ENC_SW) == LOW);
  if (is_sw_pressed != key_states[9]) {
    key_states[9] = is_sw_pressed;
    if (is_sw_pressed) fire_keycode(keymaps[current_layer][9]);
  }

  int current_enc_a = digitalRead(ENC_A);
  if (last_enc_a == HIGH && current_enc_a == LOW) {
    if (digitalRead(ENC_B) == LOW) {
      fire_keycode(encoder_map[current_layer][1]);
    } else {
      fire_keycode(encoder_map[current_layer][0]);
    }
  }
  last_enc_a = current_enc_a;
  delayMicroseconds(500);
}
`;

/* ========================================================================== */
/* SECTION 4: THE KEY ASSIGNMENT PIPELINE ENGINE (WebHID & 16-BIT ENCODING)   */
/* ========================================================================== */

export const HID_SCANCODES: Record<string, number> = {
  a: 0x04, b: 0x05, c: 0x06, d: 0x07, e: 0x08, f: 0x09, g: 0x0a, h: 0x0b,
  i: 0x0c, j: 0x0d, k: 0x0e, l: 0x0f, m: 0x10, n: 0x11, o: 0x12, p: 0x13,
  q: 0x14, r: 0x15, s: 0x16, t: 0x17, u: 0x18, v: 0x19, w: 0x1a, x: 0x1b,
  y: 0x1c, z: 0x1d,
  '1': 0x1e, '2': 0x1f, '3': 0x20, '4': 0x21, '5': 0x22,
  '6': 0x23, '7': 0x24, '8': 0x25, '9': 0x26, '0': 0x27,
  enter: 0x28, return: 0x28,
  esc: 0x29, escape: 0x29,
  bksp: 0x2a, backspace: 0x2a,
  tab: 0x2b,
  space: 0x2c, spacebar: 0x2c,
  minus: 0x2d, equal: 0x2e,
  left_bracket: 0x2f, right_bracket: 0x30,
  backslash: 0x31, semicolon: 0x33, quote: 0x34, grave: 0x35,
  comma: 0x36, period: 0x37, slash: 0x38,
  caps_lock: 0x39,
  f1: 0x3a, f2: 0x3b, f3: 0x3c, f4: 0x3d, f5: 0x3e, f6: 0x3f,
  f7: 0x40, f8: 0x41, f9: 0x42, f10: 0x43, f11: 0x44, f12: 0x45,
  print_screen: 0x46, scroll_lock: 0x47, pause: 0x48,
  insert: 0x49, home: 0x4a, page_up: 0x4b,
  del: 0x4c, delete: 0x4c, end: 0x4d, page_down: 0x4e,
  right: 0x4f, left: 0x50, down: 0x51, up: 0x52,
};

export const MOD_CTRL = 1 << 8;   // 0x0100
export const MOD_SHIFT = 1 << 9;  // 0x0200
export const MOD_ALT = 1 << 10;   // 0x0400
export const MOD_GUI = 1 << 11;   // 0x0800
export const TYPE_SMART_ACTION = 0x8000;
export const TYPE_MULTI_ACTION = 0x2000;
export const TYPE_MACRO_ACTION = 0x1000;

export function encodeKeycode(
  bindingString: string,
  actionType: string = 'Basic input'
): number {
  if (!bindingString || bindingString === 'blank' || bindingString === '—') return 0x0000;
  const raw = bindingString.trim();
  const lower = raw.toLowerCase();

  // Smart Actions (Host-Assisted)
  if (actionType === 'Smart Action' || lower.startsWith('smart:')) {
    return TYPE_SMART_ACTION | 0x01;
  }

  // Multi-step action
  if (actionType === 'Multi-step action' || lower.startsWith('multi:')) {
    return TYPE_MULTI_ACTION | 0x01;
  }

  // Direct QMK string handling e.g. "LCTL(KC_C)", "KC_A", "LSFT(LGUI(KC_S))"
  let qmkMods = 0;
  let qmkKey = raw;

  while (true) {
    if (qmkKey.startsWith('LCTL(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_CTRL;
      qmkKey = qmkKey.slice(5, -1).trim();
    } else if (qmkKey.startsWith('C(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_CTRL;
      qmkKey = qmkKey.slice(2, -1).trim();
    } else if (qmkKey.startsWith('LSFT(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_SHIFT;
      qmkKey = qmkKey.slice(5, -1).trim();
    } else if (qmkKey.startsWith('S(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_SHIFT;
      qmkKey = qmkKey.slice(2, -1).trim();
    } else if (qmkKey.startsWith('LALT(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_ALT;
      qmkKey = qmkKey.slice(5, -1).trim();
    } else if (qmkKey.startsWith('A(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_ALT;
      qmkKey = qmkKey.slice(2, -1).trim();
    } else if (qmkKey.startsWith('LGUI(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_GUI;
      qmkKey = qmkKey.slice(5, -1).trim();
    } else if (qmkKey.startsWith('G(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_GUI;
      qmkKey = qmkKey.slice(2, -1).trim();
    } else if (qmkKey.startsWith('HYPR(') && qmkKey.endsWith(')')) {
      qmkMods |= MOD_CTRL | MOD_SHIFT | MOD_ALT | MOD_GUI;
      qmkKey = qmkKey.slice(5, -1).trim();
    } else {
      break;
    }
  }

  // Check QMK prefix KC_
  if (qmkKey.startsWith('KC_')) {
    const keyName = qmkKey.replace('KC_', '').toLowerCase();
    if (keyName === 'volu' || keyName === 'volume_up') return 0xe0e9;
    if (keyName === 'vold' || keyName === 'volume_down') return 0xe0ea;
    if (keyName === 'mute') return 0xe0e2;
    if (keyName === 'mply' || keyName === 'play') return 0xe0cd;
    if (keyName === 'mnxt' || keyName === 'next') return 0xe0b5;
    if (keyName === 'mprv' || keyName === 'prev') return 0xe0b6;

    if (HID_SCANCODES[keyName] !== undefined) {
      return qmkMods | (HID_SCANCODES[keyName] & 0xff);
    }
    if (keyName === 'bspc') return qmkMods | (HID_SCANCODES['bksp'] & 0xff);
    if (keyName === 'ent') return qmkMods | (HID_SCANCODES['enter'] & 0xff);
    if (keyName === 'spc') return qmkMods | (HID_SCANCODES['space'] & 0xff);
  }

  // Consumer Media Controls
  if (lower.includes('volume +') || lower.includes('vol_up')) return 0xe0e9;
  if (lower.includes('volume -') || lower.includes('vol_down')) return 0xe0ea;
  if (lower.includes('mute')) return 0xe0e2;
  if (lower.includes('play') || lower.includes('pause')) return 0xe0cd;
  if (lower.includes('next')) return 0xe0b5;
  if (lower.includes('prev')) return 0xe0b6;

  // Extract shortcut tokens inside parentheses e.g. "Copy Last (cmd + shift + c)"
  let shortcut = lower;
  if (lower.includes('(') && lower.includes(')')) {
    shortcut = lower.substring(lower.indexOf('(') + 1, lower.indexOf(')')).trim();
  }

  const tokens = shortcut.split('+').map((s) => s.trim());
  let code = 0;

  // Modifiers
  if (tokens.some((t) => t === 'ctrl' || t === 'control')) code |= MOD_CTRL;
  if (tokens.some((t) => t === 'shift' || t === 'shft')) code |= MOD_SHIFT;
  if (tokens.some((t) => t === 'alt' || t === 'opt' || t === 'option')) code |= MOD_ALT;
  if (tokens.some((t) => t === 'cmd' || t === 'gui' || t === 'command' || t === 'win')) code |= MOD_GUI;

  // Primary Scancode
  const primary = tokens.find(
    (t) =>
      !['ctrl', 'control', 'shift', 'shft', 'alt', 'opt', 'option', 'cmd', 'gui', 'command', 'win'].includes(t)
  );

  if (primary && HID_SCANCODES[primary] !== undefined) {
    code |= HID_SCANCODES[primary] & 0xff;
  } else if (primary && primary.length === 1 && HID_SCANCODES[primary] !== undefined) {
    code |= HID_SCANCODES[primary] & 0xff;
  }

  return qmkMods ? (qmkMods | code) : code;
}

export function buildLightingPacket(
  mode: number,
  hue: number,
  satBrightness: number,
  speed: number
): Uint8Array {
  const packet = new Uint8Array(64);
  packet[0] = 0x03; // CMD_SET_RGB
  packet[1] = mode & 0xff;
  packet[2] = hue & 0xff;
  packet[3] = satBrightness & 0xff;
  packet[4] = speed & 0xff;
  return packet;
}

export function decodeKeycode(rawKeycode: number): {
  hex: string;
  scancode: number;
  modifiers: string[];
  type: string;
} {
  const hex = '0x' + rawKeycode.toString(16).toUpperCase().padStart(4, '0');
  const scancode = rawKeycode & 0xff;
  const modifiers: string[] = [];

  if (rawKeycode & MOD_CTRL) modifiers.push('Ctrl');
  if (rawKeycode & MOD_SHIFT) modifiers.push('Shift');
  if (rawKeycode & MOD_ALT) modifiers.push('Alt');
  if (rawKeycode & MOD_GUI) modifiers.push('Cmd/GUI');

  let type = 'Basic Key';
  if ((rawKeycode & 0xe000) === 0xe000) type = 'Consumer Media Control';
  else if ((rawKeycode & 0x8000) !== 0) type = 'Smart Action (Host Assisted)';
  else if ((rawKeycode & 0x2000) !== 0) type = 'Multi-Action Gesture';
  else if ((rawKeycode & 0x1000) !== 0) type = 'Macro Key';

  return { hex, scancode, modifiers, type };
}

export function buildSetKeyPacket(
  layerIndex: number,
  keyIndex: number,
  rawKeycode: number
): Uint8Array {
  const packet = new Uint8Array(64);
  packet[0] = 0x03; // CMD_SET_KEY
  packet[1] = layerIndex;
  packet[2] = keyIndex;
  packet[3] = rawKeycode & 0xff;
  packet[4] = (rawKeycode >> 8) & 0xff;
  return packet;
}

export function buildSaveFlashPacket(): Uint8Array {
  const packet = new Uint8Array(64);
  packet[0] = 0x04; // CMD_SAVE_FLASH
  return packet;
}

export function buildGetDeviceInfoPacket(): Uint8Array {
  const packet = new Uint8Array(64);
  packet[0] = 0x01; // CMD_GET_DEVICE_INFO
  return packet;
}


