// Four position variants for the hero floating bubbles. Switch via HERO_VARIANT env.
// We hard-code the active variant in code rather than reading env at runtime to
// keep the file easy to A/B visually.

export type BubblePosition = {
  emails: string
  pdf: string
  excel: string
  reporting: string
}

export const HERO_BUBBLE_VARIANTS: Record<string, BubblePosition> = {
  // V1 — original baseline (used in first commit)
  v1: {
    emails: 'top-[8%] left-[6%] sm:left-[2%]',
    pdf: 'top-[34%] left-[2%] sm:left-[-2%]',
    excel: 'top-[6%] right-[6%] sm:right-[2%]',
    reporting: 'top-[40%] right-[2%] sm:right-[-2%]',
  },
  // V2 — pull bubbles closer in (less edge bleed)
  v2: {
    emails: 'top-[10%] left-[12%] sm:left-[10%]',
    pdf: 'top-[40%] left-[8%] sm:left-[6%]',
    excel: 'top-[10%] right-[12%] sm:right-[10%]',
    reporting: 'top-[44%] right-[8%] sm:right-[6%]',
  },
  // V3 — wider spread, push to corners (more dramatic)
  v3: {
    emails: 'top-[6%] left-[2%]',
    pdf: 'top-[36%] left-[-4%] sm:left-[-8%]',
    excel: 'top-[6%] right-[2%]',
    reporting: 'top-[42%] right-[-4%] sm:right-[-8%]',
  },
  // V4 — diagonal arrangement (top-left & top-right cluster higher, mid pair lower)
  v4: {
    emails: 'top-[4%] left-[10%]',
    pdf: 'top-[46%] left-[2%]',
    excel: 'top-[4%] right-[10%]',
    reporting: 'top-[46%] right-[2%]',
  },
  // V5 — v2 with Reporting lowered to match img 2 (notebook-level)
  v5: {
    emails: 'top-[10%] left-[12%] sm:left-[10%]',
    pdf: 'top-[42%] left-[8%] sm:left-[6%]',
    excel: 'top-[10%] right-[12%] sm:right-[10%]',
    reporting: 'top-[52%] right-[8%] sm:right-[6%]',
  },
}

export const ACTIVE_VARIANT: keyof typeof HERO_BUBBLE_VARIANTS = 'v5'