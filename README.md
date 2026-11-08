# NØDE Grid Macro 1 Studio

Cross-platform configurator and firmware toolkit for the **NØDE Grid Macro 1** — a 3×3 macropad with a rotary encoder, built on the Waveshare RP2040-Zero.

The studio runs as a Windows desktop app (Electron) and as a browser app. It edits keymaps across profiles and layers, applies workflow presets, rates them 1–100, and pushes everything to the device over Web Serial (or exposes it to QMK/CircuitPython/Arduino builds).

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # 49 tests
npm run build      # static bundle in dist/
npm run build:win  # Windows zip + unpacked dir (electron-builder)
```

> If `npm install` fails on the Electron binary download, run
> `ELECTRON_SKIP_BINARY_DOWNLOAD=1 npm install`. The web studio does not need it.

---

## Features

| Area | What you get |
| --- | --- |
| **Keymap Studio** | 9 keys + encoder, up to 4+ layers, 4 profiles, per-layer rename/add/delete |
| **Assignments** | Basic keys, media, lighting, layer switching, multi-step macros, host-assisted Smart Actions, custom icons and emoji |
| **Presets** | 10 workflow templates (Framer, Photoshop, Premiere, VS Code, Blender, Figma, Ableton, Discord, Notion, Excel) with per-key detail and dial mappings |
| **Ratings** | Personal 1–100 score per preset, persisted locally, with a “Top rated” sort |
| **History** | 50-step undo/redo (`Ctrl/⌘+Z`, `Ctrl/⌘+Shift+Z`), coalesced for typing |
| **Hardware** | Web Serial connect, live key tester, keymap sync, RP2040 pinout, firmware sources, 1-click UF2 flashing from the desktop app |
| **Desktop** | Launch at login, native device notifications, local crash diagnostics, enforced execution policy |

Everything the user changes — keymaps, layer names, settings, ratings, onboarding state — is versioned and persisted to `localStorage` with validation on read, so corrupt data falls back to factory defaults instead of crashing.

---

## Project layout

```
electron/            Electron main process + preload bridge
  main.cjs           window, IPC (sender-validated), UF2 flashing, runtime policy
  preload.cjs        contextBridge API exposed as window.electronAPI
firmware/            CircuitPython + Arduino sources for the RP2040-Zero
qmk_firmware/        QMK keyboard definition, keymaps, VIA config
src/
  components/        UI building blocks (macropad, keycaps, dial, pickers)
  views/             Keymap Studio, Presets Library, Hardware Manager, Settings
  hooks/             hardware state, persistence, history, ratings
  utils/             storage, ratings, history, desktop bridge, helpers
  constants/         factory keymaps, preset library, slot layout
  iconLibrary.ts     the 3.7k-glyph icon/emoji catalogue (lazy-loaded)
  icons.ts           explicit per-icon imports so the bundle tree-shakes
scripts/             manual firmware/matrix simulations, legacy generator
```

The full icon catalogue is only fetched when the icon picker opens; the startup bundle ships the icons the built-in keymaps need.

---

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server on `0.0.0.0:3000` |
| `npm test` / `npm run test:watch` | Vitest (jsdom) |
| `npm run lint` | `tsc --noEmit` |
| `npm run build` | Production bundle (+ strict CSP injected at build time) |
| `npm run build:win` | Windows zip/unpacked build |
| `npm run electron:dev` | Vite + Electron together |
| `npm run check:firmware` | Manual firmware/keymap integrity simulation |
| `npm run simulate:matrix` | Manual 4-layer matrix simulation |

---

## Visual & browser regression tests

A Playwright suite covers both viewports (1280×900 and the 1024×768 minimum), plus checks that no page overflows horizontally and that every visible control has an accessible name.

```bash
npm run test:visual          # compare against committed baselines
npm run test:visual:update   # regenerate baselines after an intentional UI change
npm run lint:e2e             # typecheck the e2e sources
```

The baselines do not exist yet — run `npm run test:visual:update` once locally or in CI (see `.github/workflows/visual-regression.yml`), review the generated PNGs, and commit them. The first run also needs `npx playwright install chromium`.

## Security model

The renderer is untrusted. `nodeIntegration` is off, `contextIsolation` is on, and the sandbox is enabled.

- Every IPC handler validates its sender (dev server or the packaged `file://` bundle) and rejects everything else.
- Smart Actions can only launch allow-listed applications and run allow-listed binaries (`git`, `npm`, `node`, `docker`, …) without a shell.
- Terminal execution is **denied by default** and must be enabled in Settings; the main process — not the UI — enforces the toggle.
- Firmware flashing only writes to a volume that proves it is an RP2040 bootloader (`INFO_UF2.TXT`), with a sanitised filename and a capped payload.
- Diagnostics are written locally and only when the user opts in; nothing is uploaded.
- Production builds ship a strict Content-Security-Policy.

---

## Firmware

`firmware/` and `qmk_firmware/` contain three interchangeable implementations for the RP2040-Zero:

- **QMK** — `qmk_firmware/grid_macro_1/` (build with `build_uf2.sh`)
- **CircuitPython** — `firmware/boot.py`, `firmware/code.py`
- **Arduino** — `firmware/arduino_firmware.ino`

See `WINDOWS_APP_AND_FIRMWARE_GUIDE.md` for flashing instructions and the pinout.

---

## Known limitations

- The bundled `.uf2` images are not committed; build them from `qmk_firmware/` or supply a custom image before using 1-click flashing.
- Web Serial requires Chromium (Chrome/Edge) or the packaged desktop app.
- Preset download counts are illustrative, not live telemetry.
- No code signing yet, so Windows SmartScreen will warn on first launch.
