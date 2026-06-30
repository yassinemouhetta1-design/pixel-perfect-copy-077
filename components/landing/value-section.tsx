import { Badge, Card, Section } from './primitives'
import { Reveal } from './reveal'
import { CheckCircle2, ClipboardList, Gauge, ShieldCheck, Wand2 } from 'lucide-react'

const deliverables = [
  {
    icon: <ClipboardList className="size-6" />,
    title: 'Analyse des processus',
    description: 'Outils, fichiers, mails, tableaux, tâches manuelles et points de friction.',
  },
  {
    icon: <Gauge className="size-6" />,
    title: 'Cas d’usage prioritaire',
    description: 'Une tâche répétitive à faible valeur ajoutée, sélectionnée pour son potentiel.',
  },
  {
    icon: <Wand2 className="size-6" />,
    title: 'Première solution exploitable',
    description: 'Assistant, workflow, mini-outil ou méthode de traitement adaptée à votre contexte.',
  },
  {
    icon: <ShieldCheck className="size-6" />,
    title: 'Estimation du gain',
    description: 'Temps récupérable, niveau de complexité et suite possible après l’atelier.',
  },
]

const expectations = [
  'L’atelier est centré sur un cas concret, pas sur une formation IA générale.',
  'Le travail se fait sur vos outils et vos documents existants.',
]

export function ValueSection() {
  return (
    <Section id="valeur" className="py-6 lg:py-8">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <Badge>Ce qui est inclus</Badge>
            <h2 className="mt-5 max-w-xl text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[40px]">
              Un atelier utile, cadré et mesurable.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] font-medium leading-[1.8] text-ink-soft sm:text-[18px]">
              Vous repartez avec une lecture claire du terrain, une base exploitable et une vision
              simple du gain potentiel.
            </p>

            <div className="mt-8 grid gap-4">
              {expectations.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white p-4 shadow-[0_14px_36px_-30px_rgba(14,21,48,0.22)] ring-1 ring-black/[0.05]"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <CheckCircle2 className="size-3.5" />
                  </span>
                  <p className="text-[14px] font-medium leading-[1.7] text-ink-soft">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <Card key={item.title} className="h-full p-5">
                <div className="flex size-11 items-center justify-center rounded-full bg-brand-soft text-brand">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-[18px] font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-[14px] font-medium leading-[1.7] text-ink-soft">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
