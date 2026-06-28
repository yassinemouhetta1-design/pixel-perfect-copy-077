import { Clock, Compass, HelpCircle } from 'lucide-react'
import { Card, Section } from './primitives'
import { Reveal } from './reveal'

const problems = [
  {
    icon: <Clock className="size-7" />,
    title: 'Tâches répétitives',
    description: 'Des tâches manuelles qui prennent du temps chaque jour et à faible valeur.',
  },
  {
    icon: <HelpCircle className="size-7" />,
    title: 'Tests IA au hasard',
    description: 'Vous testez des outils, mais sans cadre ni méthode adaptée à votre activité.',
  },
  {
    icon: <Compass className="size-7" />,
    title: 'Pas de méthode claire',
    description: "Résultat : vous perdez du temps, sans savoir par où commencer.",
  },
]

export function ProblemSection() {
  return (
    <Section className="py-20 lg:py-24">
      <Reveal>
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Pourquoi vous <span className="text-brand">perdez</span> encore du temps ?
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <Card className="flex h-full items-start gap-5 rounded-[28px] px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-22px_rgba(14,21,48,0.22)]">
              <span className="flex size-[68px] shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                {p.icon}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.description}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
