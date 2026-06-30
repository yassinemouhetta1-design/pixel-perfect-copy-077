import Image from 'next/image'
import { Section } from './primitives'
import { Reveal } from './reveal'

export function TrustedBySection() {
  return (
    <Section className="py-2 lg:py-3">
      <Reveal>
        <section className="py-2">
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.18em] text-[#7b879a]">
            Ils nous ont fait confiance
          </p>

          <section className="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <Image
              src="/images/pb-logo-exact.png"
              alt="Peuch et Besse"
              width={320}
              height={120}
              className="h-auto w-[90px] opacity-85 grayscale contrast-125 mix-blend-multiply sm:w-[103px]"
              unoptimized
            />

            <Image
              src="/images/trust-client-logo.png"
              alt="Logo client"
              width={320}
              height={320}
              className="h-auto w-[63px] object-contain grayscale opacity-60 contrast-125 mix-blend-multiply sm:w-[73px]"
              unoptimized
            />
          </section>
        </section>
      </Reveal>
    </Section>
  )
}
