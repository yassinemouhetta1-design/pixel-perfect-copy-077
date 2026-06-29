import { ArrowRight, CalendarDays, Check, ShieldCheck } from 'lucide-react'
import { BrandButton, Section } from './primitives'
import { Reveal } from './reveal'

const checks = ['690 € HT', '2 demi-journées à distance', 'Prototype simple inclus']

export function FinalCta() {
  return (
    <Section id="contact" className="pb-10 pt-6 lg:pb-12 lg:pt-2">
      <Reveal>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.03fr_0.97fr] lg:gap-6">
          <div className="rounded-[24px] bg-brand-soft p-6 sm:rounded-[28px] sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm sm:size-14">
                <CalendarDays className="size-7" />
              </span>
              <div>
                <h2 className="max-w-sm text-[23px] font-bold leading-[1.14] tracking-[-0.02em] text-ink sm:text-[25px]">
                  Réservez un entretien de cadrage.
                </h2>
                <p className="mt-4 max-w-md text-[13px] font-medium leading-[1.85] text-ink-soft">
                  Réservez un entretien gratuit de 20 minutes pour valider l’intérêt de l’atelier et le potentiel de gain.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
              <BrandButton href="#contact" className="w-full rounded-xl px-6 py-4 text-[14px] sm:w-auto">
                Planifier l’entretien
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
            <h3 className="text-[23px] font-bold leading-tight text-ink">Pendant l’appel</h3>
            <p className="mt-3 text-[14px] font-medium leading-[1.75] text-ink-soft">
              Nous validons le problème, le potentiel de gain et l’adéquation de l’atelier.
            </p>
            <ul className="mt-5 grid gap-3">
              <li className="flex items-center gap-3 text-[14px] font-semibold text-ink">
                <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand">
                  <Check className="size-3.5" />
                </span>
                1 problème prioritaire
              </li>
              <li className="flex items-center gap-3 text-[14px] font-semibold text-ink">
                <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand">
                  <Check className="size-3.5" />
                </span>
                1 premier cas testable
              </li>
              <li className="flex items-center gap-3 text-[14px] font-semibold text-ink">
                <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand">
                  <Check className="size-3.5" />
                </span>
                1 estimation de gain
              </li>
            </ul>
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
