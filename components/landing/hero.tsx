import Image from 'next/image'
import { ArrowRight, ShieldCheck, Timer, Users, Tag } from 'lucide-react'
import { BrandButton } from './primitives'

const trustChips = [
  { icon: <ShieldCheck className="size-4" />, label: 'Sécurisé & confidentiel' },
  { icon: <Timer className="size-4" />, label: 'Réponse sous 24h' },
  { icon: <Users className="size-4" />, label: 'Sans engagement' },
]

export function Hero() {
  return (
    <section className="relative z-0 overflow-hidden bg-[linear-gradient(180deg,#edf3ff_0%,#f5f8ff_60%,#ffffff_82%)] pt-16 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-90px] top-0 z-0 hidden h-[760px] w-[860px] overflow-hidden lg:block"
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          unoptimized
          priority
          className="object-cover object-right-top opacity-90 [mask-image:linear-gradient(to_right,transparent_0%,transparent_55%,black_85%,black_100%)]"
        />
      </div>
      {/* Circular window blur — decorative background glow matching reference */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[-60px] size-[760px] rounded-full bg-[radial-gradient(circle,rgba(190,210,255,0.42)_0%,rgba(210,225,255,0.18)_55%,transparent_76%)] blur-[2px]"
      />

      <div className="relative z-10 mx-auto grid min-h-0 w-full max-w-[1460px] grid-cols-1 items-start gap-4 px-5 pb-8 pt-5 sm:gap-8 sm:px-8 sm:pt-10 lg:min-h-[690px] lg:grid-cols-[570px_minmax(0,1fr)] lg:px-12 lg:pt-0">
        <div className="relative z-10 min-w-0 pt-8 text-center sm:pt-12 lg:pt-16 lg:text-left">
          <h1 className="mx-auto max-w-[610px] text-[42px] font-bold leading-[1.03] tracking-[-0.03em] text-ink sm:text-[60px] lg:mx-0 lg:text-[58px]">
            Moins de
            <br />
            copier-coller.
            <br />
            <span className="text-brand lg:whitespace-nowrap">
              Plus de temps{" "}
              <span className="relative inline-block">
                utile.
                <svg
                  className="absolute -bottom-2.5 left-0 h-2 w-full text-brand"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C20 3 60 2 98 5"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[470px] text-[16px] font-medium leading-[1.65] text-ink sm:text-[18px] lg:mx-0 lg:leading-[1.75]">
            Un atelier IA à distance pour repérer les tâches répétitives et tester des usages
            concrets.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 lg:justify-start">
            <BrandButton className="w-full max-w-[310px] whitespace-nowrap rounded-xl px-7 py-5 text-[15px] sm:w-auto sm:max-w-none sm:px-8 sm:text-[16px]">
              Réserver un échange
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </BrandButton>

            <div className="inline-flex items-center gap-3 text-[15px] font-semibold text-ink">
              <Tag className="size-5 text-brand" />
              690 € HT
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-14 sm:flex sm:flex-nowrap sm:items-center sm:gap-5">
            {trustChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-4 py-3 text-[13px] font-semibold text-ink shadow-[0_12px_24px_-22px_rgba(14,21,48,0.34)] ring-1 ring-black/5 whitespace-nowrap"
              >
                <span className="text-brand shrink-0">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-2 aspect-[1.503] w-[118%] max-w-[560px] -translate-x-[2%] drop-shadow-[0_36px_60px_rgba(18,45,120,0.10)] sm:w-full sm:max-w-[760px] lg:ml-0 lg:-mr-8 lg:mt-[54px] lg:max-w-[940px] lg:translate-x-0 lg:scale-100 lg:origin-center">
          {/* Le piédestal 3D blanc de support des éléments (agrandi à 110% et fondu dans le blanc) */}
          <div 
            className="absolute left-[-5%] w-[110%] aspect-[5.39] z-30 pointer-events-none"
            style={{ 
              top: '80%',
              maskImage: 'linear-gradient(to bottom left, black 45%, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to bottom left, black 45%, transparent 80%)'
            }}
          >
            <Image
              src="/images/hero-pedestal-new-cropped.png"
              alt="Support bureau"
              fill
              unoptimized
              className="object-contain"
              priority
            />
          </div>

          {/* Sol blanc avec dégradé progressif à partir du bas de la table */}
          <div 
            className="absolute left-[-100vw] right-[-100vw] bottom-[-300px] bg-gradient-to-b from-transparent via-white/90 to-white z-15 pointer-events-none" 
            style={{ top: '105%' }} 
          />

          {/* Les icônes réseau en arrière-plan */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/images/hero-icons-padded.png"
              alt="Intégrations"
              fill
              unoptimized
              className="object-contain select-none pointer-events-none"
              priority
              draggable={false}
            />
          </div>

          {/* La mascotte Robot YX Automation (pointing robot) */}
          <div className="absolute inset-0 z-20">
            <Image
              src="/images/hero-robot-padded.png"
              alt="Mascotte YX Automation"
              fill
              unoptimized
              className="object-contain select-none pointer-events-none"
              priority
              draggable={false}
            />
          </div>



          {/* L'ordinateur portable */}
          <div className="absolute inset-0 z-45">
            {/* Ombre de contact du laptop */}
            <div 
              className="absolute bg-slate-900/20 rounded-full blur-[5px] pointer-events-none"
              style={{
                left: '13.8%',
                top: '78.5%',
                width: '21.1%',
                height: '1.4%'
              }}
            />
            <Image
              src="/images/hero-laptop-padded.png"
              alt="Ordinateur portable"
              fill
              unoptimized
              className="object-contain select-none pointer-events-none"
              priority
              draggable={false}
            />
          </div>

          {/* Le livre bleu */}
          <div className="absolute inset-0 z-45 translate-x-[12%] translate-y-[16px] sm:translate-x-[calc(8%+50px)] sm:translate-y-[30px]">
            {/* Ombre de contact du livre */}
            <div 
              className="absolute bg-slate-900/22 rounded-full blur-[4px] pointer-events-none"
              style={{
                left: '32.1%',
                top: '91.2%',
                width: '23.2%',
                height: '1.2%'
              }}
            />
            <Image
              src="/images/book-padded.png"
              alt="Livre"
              fill
              unoptimized
              className="object-contain select-none pointer-events-none"
              priority
              draggable={false}
            />
          </div>

          {/* Le mug YX Automation */}
          <div className="absolute inset-0 z-45 translate-x-[18%] translate-y-[18px] sm:translate-x-[150px] sm:translate-y-[30px]">
            {/* Ombre de contact du mug */}
            <div 
              className="absolute bg-slate-900/26 rounded-full blur-[3px] pointer-events-none"
              style={{
                left: '62.6%',
                top: '93.7%',
                width: '13.6%',
                height: '1%'
              }}
            />
            <Image
              src="/images/hero-mug-padded.png"
              alt="Mug"
              fill
              unoptimized
              className="object-contain select-none pointer-events-none"
              priority
              draggable={false}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
