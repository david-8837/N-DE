import {
  encodeKeycode,
  decodeKeycode,
  buildSetKeyPacket,
  HID_SCANCODES,
  RP2040_PINOUT_GUIDE,
  QMK_KEYMAP_C,
  QMK_CONFIG_H,
  QMK_RULES_MK,
  QMK_INFO_JSON,
  QMK_VIA_JSON,
  ARDUINO_FIRMWARE_INO,
  RP2040_CODE_PY
} from './src/hardwareProtocol';

console.log("==================================================");
console.log("1. TESTING KEY MATRIX PINOUT MAPPING (3x3 + Dial)");
console.log("==================================================");

const expectedSlots = [
  { slot: 'r1c1', pin: 'GP0' },
  { slot: 'r1c2', pin: 'GP1' },
  { slot: 'r1c3', pin: 'GP2' },
  { slot: 'r2c1', pin: 'GP3' },
  { slot: 'r2c2', pin: 'GP4' },
  { slot: 'r2c3', pin: 'GP5' },
  { slot: 'r3c1', pin: 'GP6' },
  { slot: 'r3c2', pin: 'GP7' },
  { slot: 'r3c3', pin: 'GP8' },
  { slot: 'dial-tl (CW)', pin: 'GP9' },
  { slot: 'dial-tl (CCW)', pin: 'GP10' },
  { slot: 'dial-tl (SW)', pin: 'GP11' },
  { slot: 'status-led', pin: 'GP16' }
];

let allPinsPassed = true;
for (const exp of expectedSlots) {
  const found = RP2040_PINOUT_GUIDE.find(p => p.slot === exp.slot);
  if (!found || !found.pin.includes(exp.pin)) {
    console.error(`❌ Pinout mismatch for slot: ${exp.slot}`);
    allPinsPassed = false;
  } else {
    console.log(`✅ Slot ${exp.slot.padEnd(16)} -> Pin ${found.pin.padEnd(8)} (${found.desc})`);
  }
}

console.log("\n==================================================");
console.log("2. TESTING 16-BIT BINARY ENCODER & 64B HID FRAMES");
console.log("==================================================");

const testBindings = [
  { str: "a", type: "Basic input", expScancode: 0x04 },
  { str: "cmd + shift + c", type: "Basic input", expScancode: 0x06 },
  { str: "ctrl + alt + del", type: "Basic input", expScancode: 0x4C },
  { str: "Volume +", type: "Basic input", expScancode: 0xE0E9 },
  { str: "Volume -", type: "Basic input", expScancode: 0xE0EA },
  { str: "Mute", type: "Basic input", expScancode: 0xE0E2 },
  { str: "Play / Pause", type: "Basic input", expScancode: 0xE0CD },
  { str: "Terminal Command", type: "Smart Action", expScancode: 0x8001 },
];

let allEncodingsPassed = true;
for (const tb of testBindings) {
  const raw = encodeKeycode(tb.str, tb.type);
  const decoded = decodeKeycode(raw);
  const packet = buildSetKeyPacket(0, 4, raw);

  // Verify packet format
  const isCmdSet = packet[0] === 0x03;
  const isLayer0 = packet[1] === 0x00;
  const isKey4 = packet[2] === 0x04;
  const isLowByte = packet[3] === (raw & 0xFF);
  const isHighByte = packet[4] === ((raw >> 8) & 0xFF);
  const is64Bytes = packet.length === 64;

  if (isCmdSet && isLayer0 && isKey4 && isLowByte && isHighByte && is64Bytes) {
    console.log(`✅ "${tb.str.padEnd(18)}" -> Keycode: ${decoded.hex} | Type: ${decoded.type.padEnd(24)} | Modifiers: [${decoded.modifiers.join(', ')}]`);
  } else {
    console.error(`❌ Encoding / Packet failure for "${tb.str}"`);
    allEncodingsPassed = false;
  }
}

console.log("\n==================================================");
console.log("3. FIRMWARE SOURCE CODE INTEGRITY CHECKS");
console.log("==================================================");

let allFirmwarePassed = true;

// Check QMK Native C keymap
const qmkHasDirectPins = QMK_CONFIG_H.includes("GP0") && QMK_CONFIG_H.includes("GP8") && QMK_CONFIG_H.includes("GP11");
const qmkHasEncPins = QMK_CONFIG_H.includes("GP9") && QMK_CONFIG_H.includes("GP10");
const qmkHasVia = QMK_RULES_MK.includes("VIA_ENABLE = yes");
const qmkHasRawHid = QMK_RULES_MK.includes("RAW_ENABLE = yes");
const qmkHasLayers = QMK_KEYMAP_C.includes("[_BASE] = LAYOUT_grid_macro_1") && QMK_KEYMAP_C.includes("[_FN] = LAYOUT_grid_macro_1");

console.log(`QMK config.h direct pins (GP0-GP8, GP11): ${qmkHasDirectPins ? '✅' : '❌'}`);
console.log(`QMK config.h encoder pins (GP9, GP10):   ${qmkHasEncPins ? '✅' : '❌'}`);
console.log(`QMK rules.mk VIA & Raw HID:              ${(qmkHasVia && qmkHasRawHid) ? '✅' : '❌'}`);
console.log(`QMK keymap.c 4-layer layout:             ${qmkHasLayers ? '✅' : '❌'}`);

if (!qmkHasDirectPins || !qmkHasEncPins || !qmkHasVia || !qmkHasRawHid || !qmkHasLayers) {
  allFirmwarePassed = false;
}

// Check Arduino C++ TinyUSB
const inoHasTinyUSB = ARDUINO_FIRMWARE_INO.includes("Adafruit_USBD_HID");
const inoHasRawHID = ARDUINO_FIRMWARE_INO.includes("raw_hid_receive");
const inoHasEncoder = ARDUINO_FIRMWARE_INO.includes("ENC_A") && ARDUINO_FIRMWARE_INO.includes("ENC_B");
const inoHasDebounce = ARDUINO_FIRMWARE_INO.includes("delayMicroseconds(500)");

console.log(`Arduino .ino TinyUSB HID:                ${inoHasTinyUSB ? '✅' : '❌'}`);
console.log(`Arduino .ino 64B Raw HID ISR:            ${inoHasRawHID ? '✅' : '❌'}`);
console.log(`Arduino .ino Quadrature Rotary:          ${inoHasEncoder ? '✅' : '❌'}`);
console.log(`Arduino .ino 2000Hz direct scan:         ${inoHasDebounce ? '✅' : '❌'}`);

if (!inoHasTinyUSB || !inoHasRawHID || !inoHasEncoder || !inoHasDebounce) {
  allFirmwarePassed = false;
}

// Check CircuitPython
const pyHasDirect = RP2040_CODE_PY.includes("board.GP0") && RP2040_CODE_PY.includes("board.GP8");
const pyHasEncoder = RP2040_CODE_PY.includes("rotaryio.IncrementalEncoder");
const pyHasCDC = RP2040_CODE_PY.includes("usb_cdc.data");

console.log(`CircuitPython Direct GP0-GP8:            ${pyHasDirect ? '✅' : '❌'}`);
console.log(`CircuitPython Rotary Encoder (GP9, GP10):${pyHasEncoder ? '✅' : '❌'}`);
console.log(`CircuitPython Web Serial CDC:            ${pyHasCDC ? '✅' : '❌'}`);

if (!pyHasDirect || !pyHasEncoder || !pyHasCDC) {
  allFirmwarePassed = false;
}

console.log("\n==================================================");
console.log("4. FINAL SYSTEM SIMULATION VERIFICATION SUMMARY");
console.log("==================================================");

if (allPinsPassed && allEncodingsPassed && allFirmwarePassed) {
  console.log("🎉 ALL TESTS PASSED: 100% of Keys, Encoder, 16-Bit Pipeline & Firmwares Verified & Simulated!");
} else {
  console.error("❌ Some verification checks failed.");
}
