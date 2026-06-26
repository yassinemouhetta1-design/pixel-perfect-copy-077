## 1. Fix mascot position on the pricing card

Match the reference exactly: the mascot sits **inside/overflowing the right edge** of the blue card, head roughly at the level of the price "690 € HT", body covering the right portion next to the "Réserver un échange" button. No tilt, no float animation, no overlap above the button.

In `src/routes/index.tsx` (pricing card):
- Remove the floating animation wrapper and the inline `rotate(-15deg)` transform.
- Keep the card with `overflow-hidden` so the mascot is clipped by the card's rounded edge on the right (as in screenshot).
- Re-layout the card as a 2-column flex: left column holds badge + price + subtitle + CTA + "Paiement par virement"; right column holds the mascot absolutely positioned, anchored `right-0 bottom-0`, height ~`h-[230px]`, with `pointer-events-none`.
- Adjust left column `pr-[180px]` on desktop so text/button never sit under the mascot.

## 2. Global landing page polish + animations

Light, premium, non-intrusive — Apple/Linear style. No layout rewrite, only refinements.

**Animations** (Tailwind utilities already available: `animate-fade-in`, `hover-scale`, `story-link`):
- Hero: stagger `animate-fade-in` on badge → H1 → subtitle → CTAs (small delays via inline `style={{animationDelay}}`).
- Mascot hero: keep the subtle `animate-float-slow`.
- Sections: add `animate-fade-in` on section headings when they mount (simple, no scroll observer needed for v1).
- Cards (problems, results, workshop steps): `transition-all hover:-translate-y-1 hover:shadow-saas-lg` for a soft lift on hover.
- Buttons: `hover-scale` + existing shadow transition.
- Icon bubbles: `transition-transform group-hover:scale-110` inside parent cards marked `group`.

**Polish details**:
- Tighten section vertical rhythm consistency (`py-20 md:py-28`).
- Ensure all headings share tracking `-0.02em` and leading `1.1`.
- Add subtle radial halo behind hero mascot (already has `halo-glow`, verify intensity).
- Verify final blue CTA section has same rounded radius and shadow as pricing card for visual consistency.
- Sanity pass on responsive: hero title sizes, pricing card mobile (mascot hidden under `md`).

## 3. Verification

- Playwright screenshot at 1280px to confirm mascot matches reference (peeking right, no tilt, not above button).
- Quick mobile screenshot to confirm pricing card mascot hides cleanly and text stays readable.

No backend, no new dependencies, no new files — edits stay in `src/routes/index.tsx` and `src/styles.css`.