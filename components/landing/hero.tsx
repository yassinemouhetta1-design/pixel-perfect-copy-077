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
    <section className="relative z-0 overflow-hidden bg-[linear-gradient(180deg,#edf3ff_0%,#f5f8ff_60%,#ffffff_82%)] pt-20">
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

      <div className="relative z-10 mx-auto grid min-h-[690px] w-full max-w-[1460px] grid-cols-1 items-start gap-10 px-8 pb-8 lg:grid-cols-[570px_minmax(0,1fr)] lg:px-12">
        <div className="relative z-10 min-w-0 pt-16">
          <h1 className="max-w-[610px] text-[52px] font-extrabold leading-[1.04] tracking-normal text-ink sm:text-[60px] lg:text-[58px]">
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

          <p className="mt-8 max-w-[470px] text-[18px] font-medium leading-[1.75] text-ink">
            Un atelier IA à distance pour repérer les tâches répétitives et tester des usages
            concrets.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <BrandButton className="whitespace-nowrap rounded-xl px-8 py-5 text-[16px]">
              Réserver un échange
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </BrandButton>

            <div className="inline-flex items-center gap-3 text-[15px] font-extrabold text-ink">
              <Tag className="size-5 text-brand" />
              690 € HT
            </div>
          </div>

          <div className="mt-14 flex flex-nowrap items-center gap-5">
            {trustChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-3 text-[13px] font-bold text-ink shadow-[0_16px_34px_-22px_rgba(14,21,48,0.38)] ring-1 ring-black/5 whitespace-nowrap"
              >
                <span className="text-brand shrink-0">{chip.icon}</span>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-6 aspect-[1.503] w-full max-w-[940px] drop-shadow-[0_36px_60px_rgba(18,45,120,0.10)] lg:ml-0 lg:-mr-8 lg:mt-[54px] lg:scale-100 lg:origin-center">
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

          {/* Ligne de repère horizontale au bas de la table (110.7%) */}
          <div className="absolute left-0 right-0 h-px bg-red-500 z-50 pointer-events-none" style={{ top: '110.7%' }} />

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
          <div className="absolute inset-0 z-45 translate-x-[calc(8%+50px)] translate-y-[30px]">
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
          <div className="absolute inset-0 z-45 translate-x-[150px] translate-y-[30px]">
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
