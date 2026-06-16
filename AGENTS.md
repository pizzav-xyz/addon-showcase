# AGENTS.md

## What This Is

React 18 + Vite 5 + Tailwind 3 marketing site for PizzaV's Meteor Addon. The `meteor-web/` submodule is a separate React 19 app synced at build time.

## Commands

```bash
npm run dev          # sync submodule + start Vite dev server
npm run build        # sync submodule + vite build
npm run sync-meteor  # sync meteor-web sources to src/meteor-src/ only
```

**No lint, test, or typecheck scripts exist in root.** The site has no test suite.

## Architecture

```
src/
  App.tsx              # Main layout, imports all section components
  main.tsx             # Entry point, font imports
  components/          # Landing page sections (Hero, FeatureCard, etc.)
  utils/               # Static data (features.ts, testimonials.ts, users.ts)
  store/appStore.ts    # Zustand store (activeFeature, confetti, clickCount)
  meteor-src/          # GENERATED - synced from meteor-web submodule. Never edit directly.
  styles/globals.css   # Tailwind directives + meteor-web accent CSS variables

meteor-web/            # Git submodule - the actual Meteor Web UI
scripts/sync-meteor.sh # Copies meteor-web sources to src/meteor-src/ with import rewrites
```

## Critical: meteor-src Is Generated

`src/meteor-src/` is created by `scripts/sync-meteor.sh`. It copies from `meteor-web/web/src/`, rewrites `@/` imports to relative paths, patches `ModuleSettingsScreen.tsx` to use `createPortal`, and fixes z-index/backdrop issues. **Never edit files in `src/meteor-src/` directly** — changes will be overwritten on next sync. Edit the source in `meteor-web/web/src/` instead.

## Vite Config

Two vite configs exist: `vite.config.ts` (active, has `@/` path alias to meteor-web) and `vite.config.js` (minimal, unused). The `.ts` version is the real config.

The `@/` alias resolves to `meteor-web/web/src/` — this is how the main site imports from the submodule.

## MUST: Commit Often

Commit after every logical unit of work. Don't accumulate multiple changes into one commit. Small, focused commits make it easier to review, revert, and understand what changed and why.

## Code Conventions

- **Split into small, focused files.** Keep components under ~150 lines. Extract data to `utils/`.
- **Use libraries, not wheel-reinvention.** framer-motion for animations, zustand for state, lucide-react for icons, react-intersection-observer for scroll triggers, react-countup for number animations.
- **Static data lives in `src/utils/`** as typed arrays (features.ts, testimonials.ts, users.ts). Keep content separate from components.
- **Tailwind for styling.** Custom colors defined in `tailwind.config.js` (pizza-orange, hack-green, etc.). Use these, don't hardcode hex values.
- **No TypeScript strict mode** — the project uses plain JSX-style TypeScript without strict checks. Keep it simple.
- **Framer Motion patterns** — use `useInView` + `motion` for scroll-triggered animations. See existing components for the pattern.

## Gotchas

- `prebuild` hook runs `sync-meteor` automatically before builds — don't run sync manually before `npm run build`.
- The submodule needs a local Gradle build (`./gradlew build`) to generate `modules.json` — `MODULES_JSON` path in sync script points to `/home/pizzav/IdeaProjects/PizzaVsAddon/build/generated/meteor-web/modules.json`.
- Tailwind 3 (root) vs Tailwind 4 (submodule) — they use different config approaches. Don't mix them.
- CSS variables in `globals.css` (lines 44-87) define the meteor-web accent system. These cascade into the embedded ModulesScreen component.
