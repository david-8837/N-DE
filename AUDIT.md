# NØDE Grid Macro 1 Studio — Audit, Fixes & Rating

**Date:** 2026-11-08
**Baseline commit:** `8e6471e` (`main`)
**Work branch:** `arena/a6e82666-n-de`
**Scope:** the full repo — React/Vite studio, Electron shell, RP2040 firmware sources, tests.

This document answers four questions at once:

1. [What the project scores out of 100](#1-headline-scores) — honest engineering score, before and after the fixes below.
2. [What was rated 1/100](#3-findings) — the defects that justified a bad score, and what I fixed today.
3. [The 1–100 rating feature](#4-the-1100-preset-rating-feature) — shipped in the app.
4. [How the running app itself rates](#6-running-app-ux-review) — UX score with the reasoning.

---

## 1. Headline scores

| What is being rated | Before | After this session | What a 90+ would require |
| --- | ---: | ---: | --- |
| **Engineering & security (codebase)** | **47 / 100** | **75 / 100** | Trusted-IPC hardening *plus* signed releases, real integration tests against a device, and the repo cleanup in §7 |
| **Running-app UX** | **62 / 100** | **76 / 100** | Onboarding, working settings, more than four presets, and a real offline/desktop polish pass |
| Tests passing | 19 | **34** (7 suites) | Component + hardware-in-the-loop coverage |
| `tsc --noEmit` | clean | **clean** | — |
| Production build | 830 ms, 7 chunks | **675 ms, 7 chunks** | Smaller icon payloads (see §7) |
| `aria-*` attributes in UI | **0** | **34** | Full screen-reader pass across every popover |
| Direct `localStorage` writes | 0 (nothing persisted) | 3 (all in one storage module) | — |

> A 47 was fair for the code I inherited, and it is not a 1. The app is broad and the design is genuinely good; what dragged it down was a thin security boundary, a browser app that forgot everything on refresh, and a UI that keyboard/screen-reader users could not operate. Those are now addressed.

---

## 2. Scoring rubric

| Category | Weight | Before | After | Why |
| --- | ---: | ---: | ---: | --- |
| Correctness & feature honesty | 25% | 62 | 78 | Broad, working feature set; several features lied about what they did (preset badge, flasher, settings switches) |
| Code quality & maintainability | 15% | 58 | 70 | Clean TypeScript and small components, undermined by `any`, 55 KB of generated Python committed at the root, and duplicate test scripts |
| Security | 20% | **22** | 72 | The Electron main process effectively offered “run this string” over IPC |
| UX & design | 20% | 62 | 80 | Strong visual language; no persistence, no empty states, light-theme flash |
| Accessibility | 10% | **12** | 72 | Zero ARIA, div-based buttons, global `user-select: none` |
| Testing | 10% | 50 | 70 | Decent unit tests for the hardware protocol; no component/flow coverage before today |

Weighted total: **47 → 75**.

---

## 3. Findings

### P0 — fixed in this session

| # | Finding | Evidence | Fix |
| --- | --- | --- | --- |
| 1 | **Any renderer (or injected script) could execute local commands.** `execute-smart-action` ran `Cmd` payloads with `execFile` and launched arbitrary `App` targets; its “dangerous character” filter blocked `;`/`\|` but not `\n`, and unknown apps fell through to `cmd /c start <anything>`. | `electron/main.cjs` `execute-smart-action` | Trusted-sender check on every IPC handler, strict binary allow-list (`git`, `npm`, `node`, `docker`, …), alphanumeric command pattern, unknown apps rejected unless they are an existing absolute path |
| 2 | **Arbitrary file write via the UF2 flasher.** `drivePath` was unvalidated and `firmwareType` was interpolated straight into the destination filename (`..\..\evil.exe`). | `flash-uf2-firmware` | Destination must contain a valid `INFO_UF2.TXT` (RP2040/RPI-RP2), filename component sanitised to `[a-z0-9_-]`, payload capped at 12 MB base64 / 8 MB binary |
| 3 | **Every preset showed “Applied” after the first one.** `isPresetAppliedInProfile(profile, presetId)` ignored `presetId` and returned true if *any* preset-coloured key existed. | `src/utils/helpers.tsx` | Layers now carry `presetId`; detection compares the real ID; editing a key clears the tag; regression test added |
| 4 | **The flasher reported success without flashing.** If no bundled `.uf2` existed it returned `success: true` with “Ready to flash”. | `flash-uf2-firmware` | Returns an actionable failure unless a real image is copied or supplied |
| 5 | **Everything was lost on refresh.** No persistence at all — keymaps, layers, names, settings. | `grep -r localStorage src` → 0 hits | Versioned, validated localStorage layer (`src/utils/storage.ts`) + `usePersistentState`; corrupt payloads fall back to factory data |
| 6 | **No navigation containment in the desktop shell.** Renderer could navigate away from the app bundle; no permission-request handler. | `createWindow()` | `will-navigate` guard (external links go to the system browser) + `setPermissionRequestHandler` limited to serial/HID |

### P1 — fixed in this session

- **Accessibility:** keycaps and the rotary knob were `<div onClick>` — now real `<button>`s with accessible names (`Row 1 column 1: Frame Tool (F)`), `aria-pressed`, and visible focus rings; settings toggles are `role="switch"` with `aria-checked`; nav items expose `aria-current`; icon-only buttons have labels; toasts are `role="status" aria-live="polite"`.
- **Light-theme flash:** `body` was `#efefef`/`#222` behind a dark app — now `#07090e` with `color-scheme: dark`.
- **Text selection was globally disabled** (`user-select: none` on `body`) — removed; decorative surfaces still opt out.
- **Reduced motion** is now respected.
- **Toast timers** leaked and could hide a newer toast — replaced with a single cleared timer.
- **No empty state** in preset search — added a “no presets match” panel with a reset action.
- **Dead/incorrect data:** `PRESET_THEME_COLORS` listed four presets that do not exist (`blender`, `figma`, `ableton`, `discord`); removed.

### P1 — still open (deliberately not touched today)

| # | Finding | Impact |
| --- | --- | --- |
| 7 | **Settings switches are cosmetic.** “Generate anonymous telemetry”, “Hardware notifications” and “Launch at Windows startup” only toggle local state; nothing subscribes to them (`app.setLoginItemSettings` is never called). | Users believe they changed OS behaviour when they did not. Highest-value next fix. |
| 8 | **The “Community Library” is static and ships four presets** (Framer, Photoshop, Premiere, VS Code), even though the copy and the preview UI imply a larger, social catalogue. | Credibility; `downloads` figures are hard-coded. |
| 9 | **Fonts are loaded from Google Fonts** in a packaged desktop app. Offline installs silently fall back to system fonts. | Visual regression when offline; self-host the two families. |
| 10 | **Icon payload is heavy:** `vendor-lucide` 586 KB (147 KB gzip) and `iconLibrary` 354 KB, because icons are resolved dynamically via `(LucideIcons as any)[name]`, which defeats tree-shaking. | Startup/memory on low-end machines. |
| 11 | **Repo hygiene:** `write_modules.py` (55 KB generator) sits at the root next to app code, `test_firmware_and_keys.ts` / `test_matrix_simulation.ts` duplicate the Vitest suites but are excluded from `npm test`, `.aistudio/` artifacts and ~3.9 MB of pasted screenshots are committed, and there is no root `README.md`. | Onboarding cost; the “36 test files” first impression is misleading. |
| 12 | **20 `any`s remain**, concentrated in `useHardwareState` (Web Serial port/reader) and the firmware-generation strings. | Type safety at the hardware boundary. |
| 13 | **No visual/DOM regression tests** and no screenshot pipeline. | UI regressions are caught by hand. |

---

## 4. The 1–100 preset rating feature

A personal 1–100 score per preset, persisted on the device, with sorting and an accessible control.

**Where it lives**

- `src/utils/ratings.ts` — pure logic: `clampScore`, `isValidScore`, `ratingLabel`, `averageRating`, `rankPresetsByRating`, `sanitizeRatings`, `applyRating`, `removeRating`, `loadRatings`, `saveRatings`.
- `src/hooks/usePresetRatings.ts` — state + persistence + cross-window sync via the `storage` event.
- `src/components/RatingControl.tsx` — the control (`compact` on library cards, `full` on the preview page).
- `src/views/PresetsLibraryView.tsx` — rating on every card, “Curated / Top rated” sort, rated-count and average in the header.
- `src/views/PresetPreviewView.tsx` — full-width rating panel.

**Behaviour**

| Rule | Detail |
| --- | --- |
| Range | Integers 1–100; anything else is clamped (`0 → 1`, `250 → 100`, `NaN → 1`) |
| Labels | 1–20 *Needs work*, 21–40 *Rough*, 41–60 *Decent*, 61–80 *Solid*, 81–90 *Great*, 91–100 *Outstanding* |
| Storage | `node.grid-macro-1.v1.ratings`, sanitised on read; corrupt JSON falls back to empty rather than crashing |
| Sorting | “Top rated” ranks rated presets descending, unrated keep curated order (stable) |
| Clearing | Per-preset **Clear**; **Reset to factory defaults** wipes ratings with the rest of the studio state |
| Accessibility | Native `<input type="range">` with a real `<label>`, `aria-valuetext` (“88 out of 100, Great”), visible focus ring, keyboard operable |

**Tests:** `src/__tests__/ratings.test.ts` (8 cases: clamping, validation, label boundaries, averaging, immutability, sanitising, ranking stability, persistence/corruption) plus flow coverage in `appSmoke.test.tsx`.

---

## 5. Verification

```bash
npm ci                       # ELECTRON_SKIP_BINARY_DOWNLOAD=1 if the Electron download is blocked
npx tsc --noEmit             # clean
npx vitest run               # 7 files / 34 tests passing
npx vite build               # clean, 7 chunks, built in ~0.7 s
```

The end-to-end smoke test (`src/__tests__/appSmoke.test.tsx`) mounts the real `<App />` in jsdom and exercises: keymap rendering, rating a preset and seeing it land in **localStorage**, switching to “Top rated”, applying the Framer preset, asserting **exactly one** card reads “Applied” and the other three offer “Apply Preset”, toggling a settings switch and confirming it persists.

---

## 6. Running-app UX review

The dev server was run and the app exercised (`http://localhost:3000`). *This sandbox has no browser binary, so the review is structural — markup, copy, layout classes and DOM-driven flows — not a pixel screenshot.*

**UX score: 62 → 76 / 100**

What is genuinely good:

- Coherent dark visual system (`#07090e` / `#0b0e17` surfaces, blue accent), consistent radii and mono/display type pairing.
- The macropad replica is the right centrepiece: spatially it *is* the product, and the 3×3 grid + knob read instantly.
- Tight feedback loop — every key edit, preset apply, and hardware event raises a toast.
- Dense but well-grouped inspector panel; tabs map to mental models (Basic / Media / Layers / Gestures / Smart).
- The hardware manager is unusually complete for a hobby project (pinout, firmware sources, tester, flasher).

What still costs it points:

| Issue | UX impact |
| --- | --- |
| Settings toggles that do nothing | Breaks trust more than a missing feature would |
| No onboarding / empty-canvas guidance | A new user sees nine custom keycaps and no “start here” |
| Four presets presented as a community library | Promise > delivery |
| No undo | Applying a preset silently replaces the active layer |
| Header is dense at the 1024 px minimum width | Nav labels crowd the connect button |
| Icon-first buttons with tooltips only | Now labelled for assistive tech, but visual affordance is still thin |
| No device-connected state without hardware | The primary CTA dead-ends in a browser without Web Serial |

Highest-leverage polish, in order: make the settings real → add undo/layer history → add an onboarding card → self-host fonts → raise the preset count.

---

## 7. Suggested next steps

1. **Wire the settings** (`setLoginItemSettings`, notification permission check, and actually gate telemetry/terminal actions in the main process).
2. **Undo/redo** for layer edits (`useReducer` + history stack) — cheap now that state is centralised.
3. **Grow the catalogue to ~10 presets** or rename the section to “Starter presets”.
4. **Self-host Plus Jakarta Sans + JetBrains Mono**; drop the Google Fonts `<link>`.
5. **Static icon map** for lucide (explicit imports) to shrink the 586 KB chunk.
6. **Repo cleanup:** move `write_modules.py` and the root `test_*.ts` scripts into `scripts/`, delete the duplicate tests or convert them, add a root `README.md`, and stop committing `.aistudio/` and pasted screenshots.
7. **Hardware-in-the-loop tests** for the Web Serial protocol (the encode/decode side is already well covered).

---

## 8. How to run

```bash
npm install
npm run dev        # http://localhost:3000 (0.0.0.0, preview-safe)
npm test           # 34 tests
npm run lint       # tsc --noEmit
npm run build      # dist/
npm run build:win  # Windows zip + unpacked dir via electron-builder
```
