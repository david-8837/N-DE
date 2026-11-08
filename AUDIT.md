# NØDE Grid Macro 1 Studio — Audit, Fixes & Rating

**Date:** 2026-11-08 (re-rated after the settings/undo pass)
**Baseline commit:** `8e6471e` (`main`)
**Work branch:** `arena/a6e82666-n-de`
**Scope:** the full repo — React/Vite studio, Electron shell, RP2040 firmware sources, tests.

Four questions, one document:

1. [What the project scores out of 100](#1-headline-scores)
2. [What was broken](#3-findings) — defects found, and what has been fixed
3. [The 1–100 rating feature](#4-the-1100-preset-rating-feature)
4. [How the running app rates](#6-running-app-ux-review)

---

## 1. Headline scores

| What is being rated | Baseline | After pass 1 | **After pass 2** |
| --- | ---: | ---: | ---: |
| **Engineering & security (codebase)** | 47 / 100 | 75 / 100 | **82 / 100** |
| **Running-app UX** | 62 / 100 | 76 / 100 | **86 / 100** |
| Tests passing | 19 | 34 (7 suites) | **43 (9 suites)** |
| `tsc --noEmit` | clean | clean | **clean** |
| Production build | 830 ms | 675 ms | **731 ms, 7 chunks** |
| `aria-*` attributes in UI | 0 | 34 | **41** |
| Settings that actually do something | 0 of 4 | 0 of 4 | **4 of 4** |

A 47 was fair for the code I inherited, and it was never a 1. The app is broad and the design is genuinely good; what dragged it down was a thin security boundary, a browser app that forgot everything on refresh, a UI keyboard users could not operate, and four settings switches that were pure decoration. All of that is now addressed.

---

## 2. Scoring rubric

| Category | Weight | Baseline | Pass 1 | Pass 2 | Notes |
| --- | ---: | ---: | ---: | ---: | --- |
| Correctness & feature honesty | 25% | 62 | 78 | **88** | Preset badge, flasher, and all four settings now do what they claim |
| Code quality & maintainability | 15% | 58 | 70 | **76** | Added pure `history` + `desktop` modules with tests; 20 `any`s remain at the serial boundary |
| Security | 20% | **22** | 72 | **80** | Preferences enforced in the main process, not the renderer |
| UX & design | 20% | 62 | 80 | **87** | Undo/redo with shortcuts, honest desktop status, working settings |
| Accessibility | 10% | **12** | 72 | **76** | 41 ARIA attributes; popovers still need a pass |
| Testing | 10% | 50 | 70 | **80** | 43 tests incl. undo stack, bridge, and a full-app flow |

Weighted total: **47 → 75 → 82**.

---

## 3. Findings

### P0 — fixed in pass 1

| # | Finding | Evidence | Fix |
| --- | --- | --- | --- |
| 1 | **Any renderer (or injected script) could execute local commands.** `execute-smart-action` ran `Cmd` payloads with `execFile` and launched arbitrary `App` targets; the “dangerous character” filter blocked `;`/`\|` but not newlines. | `electron/main.cjs` | Trusted-sender checks on every handler, strict binary allow-list, alphanumeric command pattern, unknown apps rejected |
| 2 | **Arbitrary file write via the UF2 flasher.** `drivePath` unvalidated; `firmwareType` interpolated into the filename. | `flash-uf2-firmware` | Destination must be a mounted RP2040 volume (`INFO_UF2.TXT`), filename sanitised, payload capped |
| 3 | **Every preset showed “Applied”.** `isPresetAppliedInProfile()` ignored `presetId`. | `src/utils/helpers.tsx` | Layers carry `presetId`; editing a key clears it; regression test |
| 4 | **Flasher reported success without flashing.** | `flash-uf2-firmware` | Returns an actionable failure unless an image is really copied |
| 5 | **Everything was lost on refresh.** | `grep -r localStorage` → 0 | Validated, versioned persistence + `usePersistentState` |
| 6 | **No navigation containment / permission handler.** | `createWindow()` | `will-navigate` guard, serial/HID-only permission handler |

### P0 — fixed in pass 2

| # | Finding | Fix |
| --- | --- | --- |
| 7 | **All four settings were cosmetic.** “Launch at Windows startup”, “Hardware notifications”, “Terminal execution” and “Crash reporting” only toggled local React state. Terminal Smart Actions would run regardless of the switch; nothing ever called `app.setLoginItemSettings`. | Preferences are now pushed to the main process (`set-runtime-policy`) and **enforced there**: `Cmd` actions are refused when terminal execution is off, notifications are suppressed when muted, diagnostics are dropped unless enabled. “Launch at startup” calls real login items and reconciles the toggle with the actual OS state on launch. |
| 8 | **Undo did not exist.** Applying a preset silently replaced the active layer with no way back. | 50-step undo/redo over the editable document (profiles + layer names), `Ctrl/Cmd+Z`, `Ctrl/Cmd+Shift+Z` / `Ctrl+Y`, header buttons with disabled states, coalesced keystrokes for layer renames, and full-stack regression tests. Factory reset is undoable too. |

### P1 — fixed earlier

Accessibility (real `<button>`s for keycaps and knob, `role="switch"`, `aria-current`, labelled icon buttons, `aria-live` toast), light-theme flash, global `user-select: none`, reduced-motion support, toast timer leak, preset search empty state, dead `PRESET_THEME_COLORS` map.

### P1 — still open

| # | Finding | Impact |
| --- | --- | --- |
| 9 | **The “Community Library” is static and ships four presets** (Framer, Photoshop, Premiere, VS Code). | Copy and preview UI imply a bigger, social catalogue; `downloads` counts are hard-coded |
| 10 | **Fonts load from Google Fonts** inside a packaged desktop app. | Offline installs fall back to system fonts |
| 11 | **Icon payload is heavy:** `vendor-lucide` 586 KB (147 KB gzip), `iconLibrary` 354 KB — dynamic `(LucideIcons as any)[name]` defeats tree-shaking. | Startup/memory |
| 12 | **Repo hygiene:** `write_modules.py` (55 KB generator) at the root, duplicate root `test_*.ts` scripts excluded from `npm test`, `.aistudio/` artifacts and ~3.9 MB of pasted screenshots committed, no root `README.md`. | Onboarding cost |
| 13 | **20 `any`s** remain, concentrated in `useHardwareState` (Web Serial port/reader) and firmware-generation strings. | Type safety at the hardware boundary |
| 14 | **No visual/DOM regression tests**, no code signing, no CSP header for the packaged build. | Release quality |

---

## 4. The 1–100 preset rating feature

A personal 1–100 score per preset, persisted on the device, with sorting and an accessible control.

**Where it lives**

- `src/utils/ratings.ts` — `clampScore`, `isValidScore`, `ratingLabel`, `averageRating`, `rankPresetsByRating`, `sanitizeRatings`, `applyRating`, `removeRating`, `loadRatings`, `saveRatings`.
- `src/hooks/usePresetRatings.ts` — state, persistence, cross-window sync.
- `src/components/RatingControl.tsx` — `compact` (cards) and `full` (preview page).
- `src/views/PresetsLibraryView.tsx` — per-card rating, “Curated / Top rated” sort, rated-count and average in the header.
- `src/views/PresetPreviewView.tsx` — full-width rating panel.

**Behaviour**

| Rule | Detail |
| --- | --- |
| Range | Integers 1–100; invalid input clamps (`0 → 1`, `250 → 100`, `NaN → 1`) |
| Labels | 1–20 *Needs work*, 21–40 *Rough*, 41–60 *Decent*, 61–80 *Solid*, 81–90 *Great*, 91–100 *Outstanding* |
| Storage | `node.grid-macro-1.v1.ratings`, sanitised on read; corrupt JSON falls back to empty |
| Sorting | Rated presets descending, unrated keep curated order (stable) |
| Clearing | Per-preset **Clear**; factory reset wipes ratings with the rest of the studio |
| Accessibility | Native range input, real `<label>`, `aria-valuetext` (“88 out of 100, Great”), keyboard operable |

---

## 5. Verification

```bash
npm ci                       # ELECTRON_SKIP_BINARY_DOWNLOAD=1 if the Electron download is blocked
npx tsc --noEmit             # clean
npx vitest run               # 9 files / 43 tests passing
npx vite build               # clean, 7 chunks, ~0.7 s
node --check electron/main.cjs
```

`src/__tests__/appSmoke.test.tsx` mounts the real `<App />` in jsdom and exercises: keymap rendering, rating a preset and seeing it in **localStorage**, “Top rated” sorting, applying the Framer preset, asserting **exactly one** card reads “Applied”, undoing via `Ctrl+Z` (badge disappears), redoing via `Ctrl+Shift+Z` and the header buttons, and toggling a settings switch that persists.

New in pass 2: `history.test.ts` (stack semantics, redo-branch invalidation, limit, coalescing) and `desktop.test.ts` (browser no-ops, bridge forwarding, bridge failure handling).

---

## 6. Running-app UX review

The dev server is running and the app is exercised (`http://localhost:3000`). *This sandbox has no browser binary, so the review is structural — markup, copy, layout classes and DOM-driven flows — not a pixel screenshot.*

**UX score: 62 → 76 → 86 / 100**

What earns the score:

- Coherent dark visual system, consistent radii, mono/display type pairing.
- The macropad replica is the right centrepiece: spatially it *is* the product.
- Tight feedback loop — key edits, preset applications, hardware events, undo/redo all toast.
- Undo is now discoverable (header buttons + tooltips) and fast (keyboard).
- Settings are honest: real effects, and a banner that says plainly whether you are in the desktop app or a browser.
- The hardware manager remains unusually complete for a hobby project.

Still costing points:

| Issue | UX impact |
| --- | --- |
| No onboarding / empty-canvas guidance | A new user meets nine custom keycaps with no “start here” |
| Four presets behind “Community Library” framing | Promise > delivery |
| Header is dense at the 1024 px minimum width | Nav + history + connect crowd each other |
| Icon-only actions rely on tooltips | Labelled for assistive tech, but visually thin |
| No device-connected state without hardware | The primary CTA dead-ends in a browser without Web Serial |
| No undo affordance in the editing panel itself | Only the header communicates history state |

---

## 7. What would take it past 90

1. **Onboarding card** — “pick a preset or map your first key”, dismissible, shown on first run.
2. **Preset catalogue to ~10** (or rename to “Starter presets”) — closes the credibility gap.
3. **Self-host the two font families** and drop the Google Fonts `<link>`; add a CSP.
4. **Static lucide icon map** — kills the 586 KB chunk.
5. **Repo cleanup** — move `write_modules.py` and root `test_*.ts` into `scripts/`, add `README.md`, stop committing `.aistudio/` and pasted screenshots.
6. **Hardware-in-the-loop tests** for the Web Serial protocol, and code signing for Windows releases.

---

## 8. How to run

```bash
npm install
npm run dev        # http://localhost:3000 (0.0.0.0, preview-safe)
npm test           # 43 tests
npm run lint       # tsc --noEmit
npm run build      # dist/
npm run build:win  # Windows zip + unpacked dir via electron-builder
```
