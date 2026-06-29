import { Check, HelpCircle, Minus } from 'lucide-react'
import { Badge, Section } from './primitives'
import { Reveal } from './reveal'

const included = [
  'Analyse simple de vos outils et processus',
  'Liste des tâches à faible valeur ajoutée',
  'Priorisation des gains rapides',
  'Choix des outils IA adaptés à votre contexte',
  'Première solution ou prototype construit ensemble',
  'Estimation du temps récupérable',
  'Plan d’action pour automatiser davantage',
]

const excluded = [
  'Automatisation complète de l’entreprise',
  'Intégration technique avancée',
  'Maintenance ou support mensuel inclus',
  'Création d’un agent IA complet',
]

const faqs = [
  {
    question: 'Est-ce une formation IA ?',
    answer: 'Non. Il y a une explication rapide des bases, mais le cœur de l’atelier reste vos tâches, vos outils et une première solution concrète.',
  },
  {
    question: 'Est-ce qu’une automatisation complète est incluse ?',
    answer: 'Non. À 690 € HT, l’objectif est de construire un premier cas utile et d’identifier ce qui mérite une mise en place plus avancée.',
  },
  {
    question: 'Faut-il être technique ?',
    answer: 'Non. L’atelier est pensé pour un dirigeant ou une petite équipe qui veut comprendre quoi faire avant de lancer un gros chantier.',
  },
]

export function IncludedSection() {
  return (
    <Section id="livrables" className="py-9 lg:py-10">
      <Reveal>
        <div className="text-center">
          <Badge>Livrables et limites</Badge>
          <h2 className="mx-auto mt-5 max-w-3xl text-[30px] font-bold leading-[1.14] tracking-[-0.03em] text-ink sm:text-[40px]">
            Vous savez exactement ce qui est inclus.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_16px_45px_-36px_rgba(14,21,48,0.28)] ring-1 ring-black/[0.05] sm:p-8">
            <h3 className="text-[22px] font-bold text-ink">Inclus dans l’atelier</h3>
            <ul className="mt-6 grid gap-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.6] text-ink-soft">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] bg-[#f7f9fd] p-6 ring-1 ring-black/[0.04] sm:p-8">
            <h3 className="text-[22px] font-bold text-ink">Non inclus à ce prix</h3>
            <ul className="mt-6 grid gap-3">
              {excluded.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.6] text-ink-soft">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-ink-soft">
                    <Minus className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-white p-4 text-[14px] font-semibold leading-[1.65] text-ink">
              L’atelier sert à identifier ce qui vaut vraiment le coup d’être automatisé. La mise en
              place technique complète peut être proposée ensuite si besoin.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl bg-white p-5 shadow-[0_14px_34px_-30px_rgba(14,21,48,0.28)] ring-1 ring-black/[0.05]">
              <div className="flex items-center gap-3">
                <HelpCircle className="size-5 text-brand" />
                <h4 className="text-[16px] font-bold text-ink">{faq.question}</h4>
              </div>
              <p className="mt-3 text-[14px] font-medium leading-[1.65] text-ink-soft">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
