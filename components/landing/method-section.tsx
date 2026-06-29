import { Bot, CheckCircle2, Search } from 'lucide-react'
import { Section } from './primitives'
import { Reveal } from './reveal'

const steps = [
  {
    icon: <Search className="size-8" />,
    title: 'Analyse du terrain',
    description: 'Nous partons de vos outils, de vos fichiers et de vos tâches réelles.',
  },
  {
    icon: <Bot className="size-8" />,
    title: 'Sélection du cas prioritaire',
    description: 'Nous ciblons une tâche répétitive qui peut être simplifiée rapidement.',
  },
  {
    icon: <CheckCircle2 className="size-8" />,
    title: 'Validation du gain',
    description: 'Nous validons ce qui peut être récupéré et ce qui mérite une suite.',
  },
]

export function MethodSection() {
  return (
    <Section id="methode" className="py-10 lg:py-10">
      <Reveal>
        <h2 className="text-center text-[26px] font-bold tracking-[-0.02em] text-ink sm:text-[30px]">
          Une méthode simple et structurée
        </h2>
        <p className="mt-3 text-center text-[14px] font-medium text-ink-soft">
          L’objectif est de traiter l’essentiel, sans complexité inutile.
        </p>
      </Reveal>

      <div className="relative mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 90}>
            <div className="relative flex min-h-[184px] flex-col items-center rounded-2xl border border-black/[0.04] bg-white px-6 pb-6 pt-10 text-center shadow-[0_16px_42px_-30px_rgba(14,21,48,0.28)] lg:min-h-[218px] lg:pt-11">
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[calc(100%-0.5rem)] top-[86px] hidden h-px w-11 border-t-2 border-dashed border-brand/35 lg:block"
                />
              )}
              <span className="absolute -top-4 flex size-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-[0_8px_18px_-14px_rgba(14,21,48,0.6)]">
                {i + 1}
              </span>
              <div className="flex size-[70px] items-center justify-center rounded-full bg-brand-soft text-brand">
                {step.icon}
              </div>
              <h3 className="mt-6 text-[16px] font-bold text-ink">{step.title}</h3>
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
