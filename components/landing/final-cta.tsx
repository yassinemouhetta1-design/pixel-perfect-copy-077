import { ArrowRight, CalendarDays, Check, Quote, ShieldCheck } from 'lucide-react'
import { BrandButton, Section } from './primitives'
import { Reveal } from './reveal'

const checks = ['Diagnostic gratuit', 'Réponse sous 24h', 'Sans engagement']

export function FinalCta() {
  return (
    <Section className="pb-10 pt-2 lg:pb-12">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="rounded-[28px] bg-brand-soft p-8">
            <div className="flex gap-5">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                <CalendarDays className="size-7" />
              </span>
              <div>
                <h2 className="max-w-sm text-[25px] font-extrabold leading-[1.12] text-ink">
                  Vous voulez savoir si l'atelier est adapté à votre entreprise ?
                </h2>
                <p className="mt-4 max-w-md text-[13px] font-medium leading-[1.85] text-ink-soft">
                  Réservez un diagnostic gratuit de 20 minutes. On regarde vos tâches, vos outils
                  et vos contraintes pour voir si l'atelier peut réellement vous aider.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[auto_1fr] md:items-end">
              <BrandButton className="rounded-xl px-6 py-4 text-[14px]">
                Réserver mon diagnostic
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

          <div className="rounded-[28px] bg-[#f5f7fb] p-8">
            <Quote className="size-10 fill-brand text-brand" />
            <blockquote className="mt-6 max-w-lg text-[15px] font-semibold leading-[1.75] text-ink">
              Cas pilotes en cours : 1 entreprise de stage accompagnée gratuitement + 1 structure
              interne, avec processus, livrables et irritants métier documentés. Pas de promesse
              gonflée : vous achetez un atelier cadré et une méthode testée sur le terrain.
            </blockquote>

            <div className="mt-9 flex items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand-soft text-sm font-extrabold text-brand">
                  YX
                </span>
                <div>
                  <p className="text-[13px] font-extrabold text-ink">YX Automation</p>
                  <p className="text-[11px] font-medium text-ink-soft">
                    Atelier IA Terrain — offre bêta
                  </p>
                </div>
              </div>

              <div className="rounded-full bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-brand">
                2 cas pilotes
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
