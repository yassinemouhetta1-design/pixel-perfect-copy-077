import Image from 'next/image'
import { Clock, Smile, Target, TrendingUp } from 'lucide-react'
import { Badge, Section } from './primitives'
import { Reveal } from './reveal'

const benefits = [
  {
    icon: <Clock className="size-7" />,
    title: 'Gain de temps',
    description: "Jusqu'à plusieurs heures gagnées chaque semaine.",
  },
  {
    icon: <Target className="size-7" />,
    title: "Moins d'erreurs",
    description: 'Des processus fiabilisés et standardisés.',
  },
  {
    icon: <Smile className="size-7" />,
    title: 'Moins de charge mentale',
    description: 'Moins de tâches répétitives, plus de concentration.',
  },
  {
    icon: <TrendingUp className="size-7" />,
    title: 'Plus de visibilité',
    description: 'Des données fiables et accessibles.',
  },
]

const stats = [
  { label: 'Temps gagné', value: '+3h', sub: 'par semaine', circled: true },
  { label: 'Tâches identifiées', value: '7', sub: 'Ce mois-ci' },
  { label: 'Erreurs évitées', value: '11', sub: 'Ce mois-ci' },
]

export function ResultsSection() {
  return (
    <Section id="benefices" className="py-7 lg:py-9">
      <Reveal>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.43fr_0.57fr]">
          <div className="pt-4">
            <Badge className="px-5 py-2.5 text-[15px]">Des bénéfices concrets</Badge>
            <h2 className="mt-8 max-w-[620px] text-[38px] font-extrabold leading-[1.14] tracking-normal text-ink">
              Des résultats visibles dès les premières semaines.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:mt-12 lg:gap-y-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-5">
                  <span className="flex size-17 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    {benefit.icon}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-ink">{benefit.title}</h3>
                    <p className="mt-4 text-[17px] font-medium leading-[1.75] text-ink-soft">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[32px] bg-[#eef4ff] px-5 pb-0 pt-5 shadow-[0_18px_60px_-42px_rgba(33,72,255,0.36)] sm:px-8 sm:pt-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-h-[112px] rounded-2xl bg-white p-3 shadow-[0_18px_38px_-26px_rgba(14,21,48,0.25)] ring-1 ring-black/[0.04] sm:min-h-[136px] sm:rounded-3xl sm:p-5"
                >
                  <p className="text-[11px] font-extrabold leading-tight text-[#0e1530] sm:text-[16px]">
                    {stat.label}
                  </p>
                  <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
                    {stat.circled && (
                      <svg className="size-8 shrink-0 text-brand sm:size-16" viewBox="0 0 42 42">
                        <circle
                          cx="21"
                          cy="21"
                          r="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeDasharray="76 100"
                          strokeLinecap="round"
                        />
                        <path
                          d="M21 13v9"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    <div>
                      <p className="text-[24px] font-extrabold leading-none text-[#0e1530] sm:text-[40px]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] font-medium text-[#64748b] sm:mt-2 sm:text-[15px]">
                        {stat.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-1 min-h-[190px] sm:min-h-[220px]">
              {/* Ombres de contact double couche photo-réalistes */}
              
              {/* 1. Ombres sous la mascotte */}
              {/* Couche 1: Coeur d'ombre de contact (sombre et serré) */}
              <div 
                className="absolute bottom-[-170px] left-[14%] w-[14%] max-w-[90px] h-1.5 bg-slate-950/40 rounded-full blur-[2px] z-0 pointer-events-none" 
              />
              {/* Couche 2: Ombre de diffusion (douce et large) */}
              <div 
                className="absolute bottom-[-169px] left-[7%] w-[28%] max-w-[180px] h-3.5 bg-slate-900/12 rounded-full blur-[7px] z-0 pointer-events-none" 
              />

              {/* 2. Ombres sous la table basse */}
              {/* Couche 1: Coeur d'ombre de contact (sombre et serré) */}
              <div 
                className="absolute bottom-[-170px] left-[53%] w-[12%] max-w-[80px] h-1 bg-slate-950/40 rounded-full blur-[1.5px] z-0 pointer-events-none" 
              />
              {/* Couche 2: Ombre de diffusion (douce et large) */}
              <div 
                className="absolute bottom-[-169px] left-[47%] w-[24%] max-w-[160px] h-3 bg-slate-900/14 rounded-full blur-[6px] z-0 pointer-events-none" 
              />

              {/* 3. Ombres sous le pot de la plante */}
              {/* Couche 1: Coeur d'ombre de contact (sombre et serré) */}
              <div 
                className="absolute bottom-[-110px] right-[6.5%] w-[8%] max-w-[50px] h-1 bg-slate-950/45 rounded-full blur-[1px] z-0 pointer-events-none" 
              />
              {/* Couche 2: Ombre de diffusion (douce et large) */}
              <div 
                className="absolute bottom-[-109px] right-[3%] w-[15%] max-w-[90px] h-2 bg-slate-900/15 rounded-full blur-[5px] z-0 pointer-events-none" 
              />

              <Image
                src="/images/robot.png"
                alt="Mascotte YX Automation"
                width={384}
                height={416}
                unoptimized
                priority
                className="absolute bottom-[-170px] left-[-2%] w-[46%] max-w-[310px] object-contain z-10"
              />
              <Image
                src="/images/table-book.png"
                alt="Table basse avec livre"
                width={333}
                height={201}
                unoptimized
                className="absolute bottom-[-170px] left-[45%] w-[28%] max-w-[190px] object-contain z-20"
              />
              <Image
                src="/images/plant-results.png"
                alt="Plante verte"
                width={291}
                height={508}
                unoptimized
                className="absolute bottom-[-110px] right-[-2%] w-[25%] max-w-[155px] object-contain z-10"
              />

              <div className="absolute left-[44%] top-[6%] w-[34%] max-w-[200px] rounded-3xl bg-white p-4 shadow-[0_18px_42px_-24px_rgba(14,21,48,0.25)] z-30">
                <p className="text-[14px] font-extrabold text-ink text-center">Productivité</p>
                <svg viewBox="0 0 220 95" className="mt-2 h-20 w-full" aria-hidden>
                  <defs>
                    <linearGradient id="productivity-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2148ff" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2148ff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Fill area under the curve */}
                  <path
                    d="M 8 78 C 30 65, 50 75, 68 66 C 85 58, 90 40, 110 48 C 130 56, 140 30, 160 30 C 180 30, 195 22, 214 12 L 214 90 L 8 90 Z"
                    fill="url(#productivity-gradient)"
                  />
                  {/* Smooth curve stroke */}
                  <path
                    d="M 8 78 C 30 65, 50 75, 68 66 C 85 58, 90 40, 110 48 C 130 56, 140 30, 160 30 C 180 30, 195 22, 214 12"
                    stroke="#2148ff"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
