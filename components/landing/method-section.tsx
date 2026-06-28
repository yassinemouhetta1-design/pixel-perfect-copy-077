import { CheckCircle2, Search, TrendingUp, Zap } from 'lucide-react'
import { Section } from './primitives'
import { Reveal } from './reveal'

const steps = [
  {
    icon: <Search className="size-8" />,
    title: 'On analyse',
    description: 'On identifie avec vous les tâches répétitives et chronophages.',
  },
  {
    icon: <Zap className="size-8" />,
    title: 'On automatise',
    description: 'On conçoit des automatisations sur mesure adaptées à vos outils.',
  },
  {
    icon: <CheckCircle2 className="size-8" />,
    title: 'On teste',
    description: 'On teste ensemble pour valider les résultats rapidement.',
  },
  {
    icon: <TrendingUp className="size-8" />,
    title: 'Vous gagnez',
    description: "Moins d'erreurs, plus de temps, plus de clarté au quotidien.",
  },
]

export function MethodSection() {
  return (
    <Section className="py-10 lg:py-10">
      <Reveal>
        <h2 className="text-center text-[26px] font-extrabold tracking-normal text-ink sm:text-[30px]">
          Une méthode simple en 4 étapes
        </h2>
        <p className="mt-3 text-center text-[14px] font-medium text-ink-soft">
          On avance ensemble, pas à pas.
        </p>
      </Reveal>

      <div className="relative mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 90}>
            <div className="relative flex min-h-[184px] flex-col items-center rounded-2xl border border-black/[0.04] bg-white px-6 pb-6 pt-10 text-center shadow-[0_16px_42px_-30px_rgba(14,21,48,0.28)] lg:min-h-[218px] lg:pt-11">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[calc(100%-0.5rem)] top-[86px] hidden h-px w-11 border-t-2 border-dashed border-brand/35 lg:block"
                />
              )}
              <span className="absolute -top-4 flex size-8 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white shadow-[0_10px_22px_-12px_rgba(33,72,255,0.7)]">
                {i + 1}
              </span>
              <div className="flex size-[70px] items-center justify-center rounded-full bg-brand-soft text-brand">
                {step.icon}
              </div>
              <h3 className="mt-6 text-[16px] font-extrabold text-ink">{step.title}</h3>
              <p className="mt-3 text-[13px] font-medium leading-[1.75] text-ink-soft">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
