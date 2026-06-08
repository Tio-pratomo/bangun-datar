# Repository Guidelines

## Project Overview

Math Edu App is a React/Vite educational calculator for Indonesian elementary math topics: 2D shapes (`Bangun Datar`), 3D shapes (`Bangun Ruang`), and unit conversion (`Konversi Satuan`). Users enter known values, then app shows formulas and computed results.

## Architecture & Data Flow

- Client-only React app. `index.html` loads `src/main.jsx`; `src/main.jsx` mounts `App` into `#root`.
- No router library in use. `src/App.jsx` owns `page` state and renders pages through `switch (page)`.
- `src/components/Navbar.jsx` receives `{ currentPage, setPage }` and drives page changes.
- `src/context/ThemeContext.jsx` owns dark mode state, persists `darkMode` in `localStorage`, and toggles `dark` class on `document.documentElement`.
- Calculators keep input/result state local to page or shape component.
- 2D shapes: `src/pages/BangunDatar.jsx` maps shape metadata (`id`, `label`, `img`, `component`) to components under `src/components/shapes/`.
- 3D shapes: `src/pages/BangunRuang.jsx` contains in-page calculator logic and uses shared shape UI components.
- Unit conversion: `src/pages/KonversiSatuan.jsx` keeps conversion data and conversion logic in component-local structures.
- Styling flows through Tailwind CSS v4 and DaisyUI via `src/index.css` and `@tailwindcss/vite` in `vite.config.js`.

## Key Directories

- `src/` — React source.
- `src/pages/` — top-level features: `BangunDatar.jsx`, `BangunRuang.jsx`, `KonversiSatuan.jsx`.
- `src/components/` — reusable UI; `Navbar.jsx` plus shape primitives.
- `src/components/shapes/` — 2D shape calculators and shared `ShapeInput.jsx`, `ShapeLayout.jsx`.
- `src/context/` — React context providers; currently theme only.
- `src/img/` — shape images used by calculators.
- `docs/` — development notes; `docs/development_log.md` documents current UI/UX and manual QA expectations.

## Development Commands

Use pnpm because repo has `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Package scripts from `package.json`:

- `pnpm dev` — Vite dev server.
- `pnpm build` — production build through `vite build`.
- `pnpm preview` — serve built output through `vite preview`.

No `test`, `lint`, or `format` scripts are defined.

## Code Conventions & Common Patterns

- Components use functional React with hooks (`useState`, `useEffect`, `useContext`).
- Files use `.jsx` for components and pages.
- Naming follows Indonesian domain labels: `BangunDatar`, `BangunRuang`, `KonversiSatuan`, `PersegiPanjang`, etc.
- Keep calculator state local unless multiple components truly need it.
- Use `ShapeInput` for numeric shape inputs. It accepts only empty string or decimal digits matching `/^\d*\.?\d*$/`.
- Use `ShapeLayout` for shape calculator layout and result display. Pass `{ label, img, res, children }`; `res` is array of display lines.
- Keep validation message consistent: `Input tidak valid`.
- Keep action button labels consistent with docs: `Hitung Volume`, `Hitung Luas Permukaan` for 3D calculators.
- After successful calculation, existing pattern resets inputs.
- Result displays should include formula, input, and result lines when adding shape calculators.
- Dark mode uses Tailwind `dark:` classes controlled by `ThemeContext`; new UI must preserve contrast in both modes.
- Prefer existing Tailwind/DaisyUI utility classes over new CSS files.
- Asset references are mixed: 2D metadata currently uses `/src/img/...`; other code may import images. Match nearby pattern unless doing a focused cleanup.

## Important Files

- `index.html` — HTML entry and `#root` mount node.
- `src/main.jsx` — React root creation and `StrictMode`.
- `src/App.jsx` — app shell, page state, page switch, `ThemeProvider`.
- `src/components/Navbar.jsx` — navigation and theme toggle UI.
- `src/context/ThemeContext.jsx` — dark mode persistence and document class side effect.
- `src/pages/BangunDatar.jsx` — 2D shape registry and selection UI.
- `src/pages/BangunRuang.jsx` — 3D calculator page.
- `src/pages/KonversiSatuan.jsx` — unit conversion page.
- `src/components/shapes/ShapeInput.jsx` — numeric input guard.
- `src/components/shapes/ShapeLayout.jsx` — shared calculator layout.
- `src/index.css` — Tailwind v4 import, dark variant, DaisyUI plugin.
- `vite.config.js` — Vite plugins: React and Tailwind.
- `package.json` — scripts and dependencies.
- `docs/development_log.md` — current feature status, UI/UX rules, manual QA checklist.

## Runtime/Tooling Preferences

- Runtime/toolchain: Node.js ecosystem with Vite.
- Package manager: pnpm preferred; lockfile is `pnpm-lock.yaml`.
- Framework: React 19 with `react-dom/client`.
- Build tool: Vite 6.
- Styling: Tailwind CSS 4, DaisyUI 5, `@tailwindcss/vite` plugin.
- Module system: ESM (`"type": "module"`).
- No TypeScript, ESLint, Prettier, or automated test framework configured.

## Testing & QA

No automated tests or test config exist. No `package.json` test script exists.

For changes, run at least targeted manual QA plus build when behavior or imports changed:

```bash
pnpm build
```

Manual QA expectations from `docs/development_log.md`:

- Test integer input.
- Test decimal input.
- Test empty input.
- Test non-number input; shape inputs should reject invalid characters or show `Input tidak valid` where applicable.
- Verify formulas and computed results.
- Verify inputs reset after successful calculation where existing pattern does so.
- Verify dark mode contrast.
- Verify responsive layout on mobile and desktop widths.

When adding new calculators, test both valid calculation paths and validation failures. Prefer behavior checks over snapshot-style assertions if automated tests are introduced later.
