import { ArrowRight, CalendarDays, Check, ShieldCheck } from 'lucide-react'
import { BrandButton, Section } from './primitives'
import { Reveal } from './reveal'

const checks = ['690 € HT', '2 ateliers', '3 semaines d’application']

export function FinalCta() {
  return (
    <Section id="contact" className="pb-8 pt-3 lg:pb-10 lg:pt-0">
      <Reveal>
        <div className="rounded-2xl bg-brand-soft px-5 py-6 sm:px-7 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-8">
          <div className="flex gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
              <CalendarDays className="size-6" />
            </span>
            <div>
              <h2 className="text-[23px] font-bold leading-tight text-ink sm:text-[26px]">
                Réservez un entretien de cadrage.
              </h2>
              <p className="mt-2 max-w-2xl text-[14px] font-medium leading-[1.65] text-ink-soft">
                20 minutes pour vérifier le besoin, estimer le gain et voir si l’atelier est pertinent.
              </p>
            </div>
          </div>

          <div className="mt-6 shrink-0 lg:mt-0">
            <BrandButton href="#contact" className="w-full rounded-xl px-6 py-4 text-[14px] sm:w-auto">
              Planifier l’entretien
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </BrandButton>
          </div>
        </div>

        <ul className="mt-4 flex flex-col justify-center gap-3 text-[13px] font-semibold text-ink sm:flex-row sm:flex-wrap sm:gap-5">
          {checks.map((check) => (
            <li key={check} className="flex items-center justify-center gap-2">
              <span className="flex size-5 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Check className="size-3.5" />
              </span>
              {check}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-center text-[13px] font-medium leading-relaxed text-ink-soft">
          Formation, mise en place, application terrain, puis appel de retour pour ajuster.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-[13px] font-semibold text-ink-soft">
          <ShieldCheck className="size-4 text-brand" />
          Vos données restent les vôtres. Confidentialité garantie.
        </div>
      </Reveal>
    </Section>
  )
}
