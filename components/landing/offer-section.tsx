import { Bot, ClipboardList, Euro, Gauge, Wrench } from 'lucide-react'
import { Badge, Card, Section } from './primitives'
import { Reveal } from './reveal'

const pillars = [
  {
    icon: <ClipboardList className="size-7" />,
    title: 'Analyse terrain',
    description: 'On regarde vos outils, fichiers, mails, tableaux et processus tels qu’ils existent.',
  },
  {
    icon: <Gauge className="size-7" />,
    title: 'Tâches à faible valeur',
    description: 'On repère les copier-coller, saisies, relances, classements et reportings répétitifs.',
  },
  {
    icon: <Wrench className="size-7" />,
    title: 'Première solution simple',
    description: 'On construit un assistant, un workflow, un mini-outil ou une méthode IA utilisable.',
  },
  {
    icon: <Euro className="size-7" />,
    title: 'Mesure du gain',
    description: 'On estime le temps récupérable avant de parler d’automatisation plus avancée.',
  },
]

export function OfferSection() {
  return (
    <Section id="atelier" className="py-9 lg:py-10">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 rounded-[30px] bg-[#f5f8ff] p-6 ring-1 ring-black/[0.04] sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <Badge>Atelier IA Terrain</Badge>
            <h2 className="mt-5 max-w-2xl text-[30px] font-bold leading-[1.12] tracking-[-0.03em] text-ink sm:text-[40px]">
              Diagnostic terrain, première solution, mesure du gain.
            </h2>
            <p className="mt-5 max-w-xl text-[16px] font-medium leading-[1.8] text-ink-soft sm:text-[18px]">
              Ce n’est pas une formation théorique. Ce n’est pas un test d’outils au hasard.
              L’atelier sert à comprendre votre fonctionnement, choisir le bon cas d’usage, puis
              créer une première solution concrète.
            </p>

            <div className="mt-7 grid max-w-lg grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white p-4 shadow-[0_12px_28px_-24px_rgba(14,21,48,0.25)]">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  Format
                </p>
                <p className="mt-2 text-[20px] font-bold text-ink">2 demi-journées</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-[0_12px_28px_-24px_rgba(14,21,48,0.25)]">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  Prix
                </p>
                <p className="mt-2 text-[20px] font-bold text-ink">690 € HT</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 70}>
                <Card className="h-full p-5">
                  <div className="flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand">
                    {pillar.icon}
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-3 text-[14px] font-medium leading-[1.7] text-ink-soft">
                    {pillar.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
