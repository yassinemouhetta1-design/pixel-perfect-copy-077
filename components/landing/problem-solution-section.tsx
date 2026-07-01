import { ArrowRightLeft, CheckCircle2, TriangleAlert } from 'lucide-react'
import { Card, Section } from './primitives'
import { Reveal } from './reveal'

const problems = [
  'Copier-coller répétés',
  'Tâches manuelles récurrentes',
  'Temps absorbé par des opérations à faible valeur ajoutée',
]

const solutionPoints = [
  'Nous analysons vos outils et vos fichiers réels.',
  'Nous identifions les tâches les plus coûteuses en temps.',
  'Nous cadrons une première solution simple et exploitable.',
]

export function ProblemSolutionSection() {
  return (
    <Section id="probleme-solution" className="py-6 lg:py-7">
      <Reveal>
        <div className="text-center">
          <h2 className="mx-auto mt-5 max-w-3xl text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[40px]">
            L’objectif est simple: réduire le temps perdu sur les tâches répétitives.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-[1.75] text-ink-soft sm:text-[18px]">
            L’entretien permet d’entrer dans le détail opérationnel. Ici, nous restons sur l’essentiel:
            le problème, le gain potentiel et la première solution à mettre en place.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1060px] grid-cols-1 gap-5 lg:grid-cols-2">
          <Card className="yx-card-motion p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-[#fff1f1] text-[#ef4444]">
                <TriangleAlert className="size-5" />
              </span>
              <h3 className="text-[22px] font-bold text-ink">Les irritants</h3>
            </div>
            <ul className="mt-5 grid gap-3">
              {problems.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.65] text-ink-soft">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <CheckCircle2 className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="yx-card-motion p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-brand-soft text-brand">
                <ArrowRightLeft className="size-5" />
              </span>
              <h3 className="text-[22px] font-bold text-ink">Ce que nous faisons</h3>
            </div>
            <ul className="mt-5 grid gap-3">
              {solutionPoints.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] font-medium leading-[1.65] text-ink-soft">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <CheckCircle2 className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Reveal>
    </Section>
  )
}
