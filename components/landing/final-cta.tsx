import { ArrowRight, CalendarDays, Check, Quote, ShieldCheck, Star } from 'lucide-react'
import { BrandButton, Section } from './primitives'
import { Reveal } from './reveal'

const checks = ['Échange sans engagement', 'Réponse sous 24h', '100% adapté à votre activité']

export function FinalCta() {
  return (
    <Section className="pb-10 pt-6 lg:pb-12 lg:pt-2">
      <Reveal>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.03fr_0.97fr] lg:gap-6">
          <div className="rounded-[24px] bg-brand-soft p-6 sm:rounded-[28px] sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm sm:size-14">
                <CalendarDays className="size-7" />
              </span>
              <div>
                <h2 className="max-w-sm text-[23px] font-extrabold leading-[1.14] text-ink sm:text-[25px]">
                  Prêt à reprendre le contrôle de votre temps ?
                </h2>
                <p className="mt-4 max-w-md text-[13px] font-medium leading-[1.85] text-ink-soft">
                  Réservez un échange gratuit de 20 minutes pour voir comment l'IA peut vous aider
                  concrètement.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
              <BrandButton className="w-full rounded-xl px-6 py-4 text-[14px] sm:w-auto">
                Réserver un échange
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </BrandButton>

              <ul className="grid gap-3 md:justify-self-end">
                {checks.map((check) => (
                  <li key={check} className="flex items-center gap-3 text-[13px] font-semibold text-ink">
                    <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand">
                      <Check className="size-3.5" />
                    </span>
                    {check}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#f5f7fb] p-6 sm:rounded-[28px] sm:p-8">
            <Quote className="size-10 fill-brand text-brand" />
            <blockquote className="mt-6 max-w-lg text-[15px] font-semibold leading-[1.75] text-ink">
              YX Automation nous a permis de gagner un temps précieux sur des tâches qu'on pensait
              inévitables. L'accompagnement est clair, concret et efficace.
            </blockquote>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:mt-9 sm:flex-row sm:items-end sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-soft text-sm font-extrabold text-brand">
                  CL
                </span>
                <div>
                  <p className="text-[13px] font-extrabold text-ink">Claire L.</p>
                  <p className="text-[11px] font-medium text-ink-soft">
                    Responsable administrative - PME
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 flex items-center justify-center gap-2 text-[13px] font-semibold text-ink-soft">
        <ShieldCheck className="size-4 text-brand" />
        Vos données restent les vôtres. Confidentialité garantie.
      </div>
    </Section>
  )
}
