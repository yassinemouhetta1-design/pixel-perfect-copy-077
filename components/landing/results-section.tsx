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
    <Section id="benefices" className="py-10 lg:py-9">
      <Reveal>
        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[0.43fr_0.57fr] lg:gap-12">
          <div className="pt-0 text-center lg:pt-4 lg:text-left">
            <Badge className="px-5 py-2.5 text-[13px] sm:text-[15px]">Des bénéfices concrets</Badge>
            <h2 className="mx-auto mt-6 max-w-[620px] text-[30px] font-bold leading-[1.14] tracking-[-0.02em] text-ink sm:text-[38px] lg:mx-0 lg:mt-8">
              Des résultats visibles dès les premières semaines.
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 text-left sm:grid-cols-2 lg:mt-12 lg:gap-y-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4 sm:gap-5">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand sm:size-17">
                    {benefit.icon}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-ink">{benefit.title}</h3>
                    <p className="mt-2 text-[15px] font-medium leading-[1.65] text-ink-soft sm:mt-4 sm:text-[17px] sm:leading-[1.75]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-[#eef4ff] px-4 pb-7 pt-4 shadow-[0_18px_60px_-42px_rgba(33,72,255,0.36)] sm:overflow-visible sm:rounded-[32px] sm:px-8 sm:pb-0 sm:pt-8">
            <div className="grid grid-cols-1 gap-3 min-[430px]:grid-cols-3 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-h-[94px] rounded-2xl bg-white p-4 shadow-[0_18px_38px_-26px_rgba(14,21,48,0.25)] ring-1 ring-black/[0.04] sm:min-h-[136px] sm:rounded-3xl sm:p-5"
                >
                  <p className="text-[11px] font-bold leading-tight text-[#0e1530] sm:text-[16px]">
                    {stat.label}
                  </p>
                  <div className="mt-3 flex items-center gap-2 sm:mt-6 sm:gap-3">
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
                      <p className="text-[24px] font-bold leading-none text-[#0e1530] sm:text-[40px]">
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

            <div className="relative mt-4 min-h-[250px] sm:mt-1 sm:min-h-[220px]">
              {/* Ombres de contact double couche photo-réalistes */}
              
              {/* 1. Ombres sous la mascotte */}
              {/* Couche 1: Coeur d'ombre de contact (sombre et serré) */}
              <div 
                className="absolute bottom-[22px] left-[24%] h-1.5 w-[22%] max-w-[90px] rounded-full bg-slate-950/40 blur-[2px] z-0 pointer-events-none sm:bottom-[-170px] sm:left-[14%] sm:w-[14%]" 
              />
              {/* Couche 2: Ombre de diffusion (douce et large) */}
              <div 
                className="absolute bottom-[20px] left-[14%] h-3.5 w-[42%] max-w-[180px] rounded-full bg-slate-900/12 blur-[7px] z-0 pointer-events-none sm:bottom-[-169px] sm:left-[7%] sm:w-[28%]" 
              />

              {/* 2. Ombres sous la table basse */}
              {/* Couche 1: Coeur d'ombre de contact (sombre et serré) */}
              <div 
                className="absolute bottom-[20px] left-[58%] h-1 w-[16%] max-w-[80px] rounded-full bg-slate-950/40 blur-[1.5px] z-0 pointer-events-none sm:bottom-[-170px] sm:left-[53%] sm:w-[12%]" 
              />
              {/* Couche 2: Ombre de diffusion (douce et large) */}
              <div 
                className="absolute bottom-[18px] left-[51%] h-3 w-[30%] max-w-[160px] rounded-full bg-slate-900/14 blur-[6px] z-0 pointer-events-none sm:bottom-[-169px] sm:left-[47%] sm:w-[24%]" 
              />

              {/* 3. Ombres sous le pot de la plante */}
              {/* Couche 1: Coeur d'ombre de contact (sombre et serré) */}
              <div 
                className="hidden absolute bottom-[-110px] right-[6.5%] w-[8%] max-w-[50px] h-1 bg-slate-950/45 rounded-full blur-[1px] z-0 pointer-events-none sm:block" 
              />
              {/* Couche 2: Ombre de diffusion (douce et large) */}
              <div 
                className="hidden absolute bottom-[-109px] right-[3%] w-[15%] max-w-[90px] h-2 bg-slate-900/15 rounded-full blur-[5px] z-0 pointer-events-none sm:block" 
              />

              <Image
                src="/images/robot.png"
                alt="Mascotte YX Automation"
                width={384}
                height={416}
                unoptimized
                priority
                className="absolute bottom-[24px] left-[4%] z-10 w-[54%] max-w-[240px] object-contain sm:bottom-[-170px] sm:left-[-2%] sm:w-[46%] sm:max-w-[310px]"
              />
              <Image
                src="/images/table-book.png"
                alt="Table basse avec livre"
                width={333}
                height={201}
                unoptimized
                className="absolute bottom-[24px] left-[51%] z-20 w-[34%] max-w-[150px] object-contain sm:bottom-[-170px] sm:left-[45%] sm:w-[28%] sm:max-w-[190px]"
              />
              <Image
                src="/images/plant-results.png"
                alt="Plante verte"
                width={291}
                height={508}
                unoptimized
                className="absolute bottom-[34px] right-[-4%] z-10 w-[24%] max-w-[100px] object-contain opacity-90 sm:bottom-[-110px] sm:right-[-2%] sm:w-[25%] sm:max-w-[155px] sm:opacity-100"
              />

              <div className="absolute right-2 top-2 z-30 w-[48%] max-w-[180px] rounded-2xl bg-white p-3 shadow-[0_18px_42px_-24px_rgba(14,21,48,0.25)] sm:left-[44%] sm:right-auto sm:top-[6%] sm:w-[34%] sm:max-w-[200px] sm:rounded-3xl sm:p-4">
                <p className="text-center text-[12px] font-bold text-ink sm:text-[14px]">Productivité</p>
                <svg viewBox="0 0 220 95" className="mt-1 h-14 w-full sm:mt-2 sm:h-20" aria-hidden>
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
