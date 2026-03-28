# CaseCraft — Asteria Health Clinical Innovation Lab

CaseCraft is a cinematic, motion‑forward case‑study experience customized for **Asteria Health**. The interface focuses on storytelling clarity, immersive visuals, and patient‑first impact narratives.

## Highlights
- Cinematic storytelling layout with hero, manifesto, program portfolio, impact review, and collaboration flow.
- React Bits components for advanced text and background effects.
- Scroll‑snap rhythm section for a “Problem → Solution → Outcome” narrative beat.
- Full‑bleed visual sections and curated program tiles.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS
- Motion One (`motion/react`)
- React Bits components
- Three.js + @react-three/fiber (Silk background)

## Getting Started
```bash
npm install
npm run dev
```

## Project Structure
```
src/
  App.tsx                 # Main layout & sections
  main.tsx                # App entry
  style.css               # Tailwind layers + custom utilities
  components/             # React Bits components (TiltedCard, TrueFocus, Silk, etc.)
```

## Key UI Sections
1. **Hero** — left‑anchored headline with cinematic image focus.
2. **Full‑Bleed Focus** — immersive banner with TrueFocus text animation.
3. **Rhythm Strip** — scroll‑snap cards: Research → Validation → Care Delivery.
4. **Mission** — manifesto block with animated list + visual grid.
5. **Program Portfolio** — case study grid tailored to healthcare programs.
6. **Impact Review** — timeline + deep‑dive imagery.
7. **Signature Moment** — bold statement section.
8. **Collaborate** — program intake form + metrics.

## Notes
- If you want local 4K images, place them in `src/assets/` and update the image imports in `src/App.tsx`.
- Tailwind content scanning includes `.js/.jsx` because some React Bits components ship as JS.

## Scripts
- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run preview` — preview production build

---
