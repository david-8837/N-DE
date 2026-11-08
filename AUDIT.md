# NØDE Grid Macro 1 Studio — Audit, Fixes & Rating

**Last updated:** 2026-11-08 (pass 3 — the 82 → 90 push)
**Baseline commit:** `8e6471e` (`main`)
**Work branch:** `arena/a6e82666-n-de`
**Scope:** the full repo — React/Vite studio, Electron shell, RP2040 firmware sources, tests.

---

## 1. Headline scores

| What is being rated | Baseline | Pass 1 | Pass 2 | **Pass 3 (now)** |
| --- | ---: | ---: | ---: | ---: |
| **Engineering & security (codebase)** | 47 / 100 | 75 / 100 | 82 / 100 | **86 / 100** |
| **Running-app UX** | 62 / 100 | 76 / 100 | 86 / 100 | **91 / 100** |
| Tests passing | 19 | 34 (7 suites) | 43 (9 suites) | **49 (10 suites)** |
| `tsc --noEmit` | clean | clean | clean | **clean** |
| Initial JS (raw / gzip) | ~1,060 KB / ~295 KB | ~1,060 KB / ~295 KB | ~1,060 KB / ~295 KB | **~504 KB / ~150 KB** |
| Presets shipped | 4 | 4 | 4 | **10** |
| External runtime dependencies (fonts) | Google Fonts | Google Fonts | Google Fonts | **none — self-hosted** |
| Content-Security-Policy | none | none | none | **strict, injected at build** |

A 47 was fair for the code I inherited, and it was never a 1. Three passes later the app is honest about what it does, enforces its own security policy, remembers everything, can undo, starts fast, and works offline.

---

## 2. Scoring rubric

| Category | Weight | Baseline | P1 | P2 | P3 | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Correctness & feature honesty | 25% | 62 | 78 | 88 | **92** | 10 real presets; browser flasher still degrades to a download |
| Code quality & maintainability | 15% | 58 | 70 | 76 | **82** | README, scripts/ moved, generated icon module documented; 20 `any`s left |
| Security | 20% | 22 | 72 | 80 | **84** | CSP added; still unsigned binaries |
| UX & design | 20% | 62 | 80 | 87 | **91** | Onboarding, 10 presets, undo, working settings, offline fonts |
| Accessibility | 10% | 12 | 72 | 76 | **78** | 41+ ARIA attributes; popovers not yet audited |
| Testing | 10% | 50 | 70 | 80 | **84** | 49 tests, incl. guarantees that shipped glyphs never lazy-load |

Weighted total: **47 → 75 → 82 → 86**.

---

## 3. What changed, pass by pass

### Pass 1 — correctness, safety, persistence

| # | Finding | Fix |
| --- | --- | --- |
| 1 | Any renderer could execute local commands (`execute-smart-action` ran arbitrary `Cmd`/`App` payloads) | Sender validation on every IPC handler, binary allow-list, alphanumeric command pattern, unknown apps rejected |
| 2 | Arbitrary file write via the UF2 flasher (`drivePath` unvalidated, `firmwareType` in the filename) | Destination must prove it is an RP2040 volume (`INFO_UF2.TXT`), filename sanitised, payload capped |
| 3 | Every preset read “Applied” (`isPresetAppliedInProfile` ignored the id) | Layers carry `presetId`; editing a key clears it; regression test |
| 4 | Flasher reported success without flashing | Returns an actionable failure unless an image is really copied |
| 5 | Everything lost on refresh | Validated, versioned persistence for keymaps, layers, names, settings, ratings |
| 6 | No navigation containment / permission handler | `will-navigate` guard, serial/HID-only permission handler |
| 7 | Accessibility: div-buttons, no ARIA, global `user-select: none`, light-theme flash | Real buttons, `role="switch"`, `aria-current`, `aria-live`, focus rings, dark body, reduced-motion support |

### Pass 2 — settings that mean something, and undo

| # | Finding | Fix |
| --- | --- | --- |
| 8 | All four settings were cosmetic | Preferences are pushed to the main process and **enforced there**: terminal execution denied by default, notifications suppressed, diagnostics dropped unless opted in, real login-item registration reconciled with the OS on launch |
| 9 | No undo | 50-step undo/redo over profiles + layer names, `Ctrl/⌘+Z` / `Ctrl/⌘+Shift+Z`, header buttons, coalesced renames |

### Pass 3 — the 82 → 90 push

| # | Finding | Fix |
| --- | --- | --- |
| 10 | Four presets marketed as a “Community Library” | **10 presets** (Framer, Photoshop, Premiere, VS Code, Blender, Figma, Ableton, Discord, Notion, Excel), each with 9 keys, dial mappings, tags and distinct colours |
| 11 | No onboarding — new users met nine custom keycaps with no guidance | Dismissible three-step welcome card on first run, persisted; re-openable from Settings |
| 12 | Fonts loaded from Google Fonts inside a desktop app | Self-hosted `@fontsource-variable` Plus Jakarta Sans + JetBrains Mono; zero external requests |
| 13 | No CSP | Strict policy injected into production builds only (dev keeps HMR working) |
| 14 | 586 KB lucide chunk loaded at startup because `import * as` defeats tree-shaking | Explicit per-icon module (60 glyphs) for shipped content; the 3.7k-glyph catalogue is now a **lazy chunk** fetched only when the picker opens or an exotic custom icon renders. Verified by tests |
| 15 | Repo hygiene: 55 KB generator at the root, duplicate console “tests”, `.aistudio/` artifacts, 3.9 MB of pasted screenshots, no README | Moved to `scripts/` (with npm aliases), untracked and ignored local artifacts, added a real `README.md` |

**Bundle result:** initial JavaScript dropped from ~1,060 KB (~295 KB gzip) to ~504 KB (~150 KB gzip). The icon catalogue (354 KB) and the full lucide namespace (680 KB) now load on demand.

---

## 4. The 1–100 preset rating feature

A personal score per preset, persisted locally, shown on every card and on the preview page.

- **Logic** — `src/utils/ratings.ts`: clamp/validate, label bands, averaging, stable ranking, sanitising, load/save.
- **State** — `src/hooks/usePresetRatings.ts`: persistence + cross-window sync.
- **UI** — `src/components/RatingControl.tsx` (`compact` / `full`), integrated in the library (per-card + “Top rated” sort + rated-count/average) and the preset preview.

| Rule | Detail |
| --- | --- |
| Range | Integers 1–100; invalid input clamps (`0 → 1`, `250 → 100`, `NaN → 1`) |
| Labels | 1–20 *Needs work*, 21–40 *Rough*, 41–60 *Decent*, 61–80 *Solid*, 81–90 *Great*, 91–100 *Outstanding* |
| Storage | `node.grid-macro-1.v1.ratings`, sanitised on read; corrupt JSON falls back to empty |
| Sorting | Rated first (descending), unrated keep curated order |
| Accessibility | Native range input, real `<label>`, `aria-valuetext` |

---

## 5. Verification

```bash
npm ci                        # ELECTRON_SKIP_BINARY_DOWNLOAD=1 if the Electron download is blocked
npx tsc --noEmit              # clean
npx vitest run                # 10 files / 49 tests passing
npx vite build                # clean; CSP + hashed font assets in dist/
node --check electron/main.cjs
```

The full-app smoke test mounts the real `<App />` in jsdom and covers: keymap render, rating persistence, “Top rated” sorting, applying a preset, exactly one “Applied” badge, undo (keyboard **and** header), redo, welcome-card dismissal and restoration, and settings persistence.

`iconRegistry.test.ts` guards the bundle optimisation: it asserts that every glyph referenced by the 10 presets, the preset app icons and the factory keymaps resolves **eagerly** — so nobody can silently reintroduce a lazy-load dependency into the startup path.

---

## 6. Running-app UX review

The dev server is exercised at `http://localhost:3000`. *No browser binary exists in this sandbox, so this review is structural — markup, copy, layout and DOM flows — not a pixel screenshot.*

**UX score: 62 → 76 → 86 → 91 / 100**

What earns it:

- Coherent dark visual system and a macropad replica that *is* the product, spatially.
- First-run guidance that actually matches the three real paths (preset, manual mapping, hardware).
- A catalogue that now delivers: 10 workflows across design, video, audio, comms, notes and spreadsheets.
- Undo that is discoverable (header + shortcuts) and forgiving (coalesced, 50 steps).
- Settings that are honest, with a banner stating whether you're in the desktop app.
- Fast, offline-capable startup — no Google Fonts, no 600 KB icon payload.

Still costing points:

| Issue | Impact |
| --- | --- |
| Header crowds at the 1024 px minimum width | Nav + history + connect compete for space |
| Icon-only actions still rely on tooltips | Labelled for assistive tech, but visually thin |
| Popovers (icon picker, macro editors) have not had a full keyboard/focus pass | Tab traps and focus return are inconsistent |
| Browser mode dead-ends at “connect device” | No explanation that Web Serial needs Chromium or the desktop app |
| No visual regression harness | Layout drift is caught by hand |

---

## 7. What would take it past 90

1. **Accessibility deep pass** on the popovers and macro editors (focus trap, return focus, escape handling).
2. **Visual/DOM regression tests** (Playwright + screenshots) so the 91 is protected.
3. **Code signing + notarisation** for Windows builds, plus an auto-update channel.
4. **Replace the remaining 20 `any`s** at the Web Serial boundary with typed port/reader interfaces.
5. **Hardware-in-the-loop tests** for the serial protocol against a real RP2040.
6. **Browser-mode guidance** when Web Serial is unavailable (link to desktop build).

---

## 8. How to run

```bash
npm install
npm run dev        # http://localhost:3000 (0.0.0.0, preview-safe)
npm test           # 49 tests
npm run lint       # tsc --noEmit
npm run build      # dist/ (+ CSP)
npm run build:win  # Windows zip + unpacked dir via electron-builder
npm run check:firmware
npm run simulate:matrix
```
