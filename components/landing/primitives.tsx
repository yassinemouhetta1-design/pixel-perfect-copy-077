import type * as React from 'react'
import { cn } from '@/lib/utils'

/* ------------------------------------------------------------------ */
/* Section                                                            */
/* ------------------------------------------------------------------ */

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn('w-full', className)} {...props}>
      <div className="mx-auto w-full max-w-[1460px] px-5 sm:px-6 lg:px-12">
        {children}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Button                                                             */
/* ------------------------------------------------------------------ */

type BrandButtonProps = {
  variant?: 'primary' | 'ghost'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function BrandButton({
  variant = 'primary',
  className,
  children,
  ...props
}: BrandButtonProps) {
  return (
    <button
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-[14px] px-6 py-4 text-[15px] font-semibold leading-none transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-brand/20',
        variant === 'primary' &&
          'bg-brand text-brand-foreground shadow-[0_10px_22px_-16px_rgba(14,21,48,0.55)] hover:bg-[#0f47bd] active:translate-y-px',
        variant === 'ghost' &&
          'bg-white text-ink shadow-none ring-1 ring-black/10 hover:bg-brand-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* Card                                                               */
/* ------------------------------------------------------------------ */

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-black/[0.04] bg-white p-7 shadow-[0_10px_40px_-18px_rgba(14,21,48,0.12)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Badge                                                              */
/* ------------------------------------------------------------------ */

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-brand-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Icon Bubble                                                        */
/* ------------------------------------------------------------------ */

export function IconBubble({
  className,
  children,
  size = 'md',
  tone = 'blue',
}: {
  className?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  tone?: 'blue' | 'green'
}) {
  return (
    <div
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full',
        size === 'sm' && 'size-9',
        size === 'md' && 'size-12',
        size === 'lg' && 'size-16',
        tone === 'blue' && 'bg-brand-soft text-brand',
        tone === 'green' && 'bg-accent-green-soft text-accent-green',
        className,
      )}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Feature Card                                                       */
/* ------------------------------------------------------------------ */

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}) {
  return (
    <Card
      className={cn(
        'flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-22px_rgba(14,21,48,0.22)]',
        className,
      )}
    >
      <IconBubble size="lg">{icon}</IconBubble>
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="text-[15px] leading-relaxed text-ink-soft">{description}</p>
    </Card>
  )
}
