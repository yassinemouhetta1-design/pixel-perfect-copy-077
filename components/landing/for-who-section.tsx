import { Check, X } from 'lucide-react'
import { Section } from './primitives'
import { Reveal } from './reveal'

const goodFit = [
  'Vous gérez encore beaucoup de mails, fichiers, tableaux ou documents à la main.',
  'Vous voulez récupérer du temps sans lancer un gros projet informatique.',
  'Vous avez des tâches répétitives que vous faites chaque semaine.',
  'Vous voulez savoir quoi automatiser avant de payer une prestation plus lourde.',
]

const badFit = [
  'Vous cherchez une formation IA générale pour toute l’équipe.',
  'Vous voulez une automatisation complète et industrialisée pour 690 € HT.',
  'Vous n’avez aucun processus récurrent à analyser.',
]

export function ForWhoSection() {
  return (
    <Section id="pour-qui" className="py-8 lg:py-9">
      <Reveal>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-[26px] bg-white p-6 shadow-[0_16px_45px_-36px_rgba(14,21,48,0.28)] ring-1 ring-black/[0.05] sm:p-8">
            <h2 className="text-[26px] font-bold tracking-[-0.02em] text-ink sm:text-[32px]">
              Adapté si vous voulez du concret.
            </h2>
            <ul className="mt-6 grid gap-4">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.65] text-ink-soft sm:text-[16px]">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[26px] bg-[#f7f9fd] p-6 ring-1 ring-black/[0.04] sm:p-8">
            <h2 className="text-[26px] font-bold tracking-[-0.02em] text-ink sm:text-[32px]">
              Pas adapté si vous attendez une promesse magique.
            </h2>
            <ul className="mt-6 grid gap-4">
              {badFit.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.65] text-ink-soft sm:text-[16px]">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-ink-soft">
                    <X className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
