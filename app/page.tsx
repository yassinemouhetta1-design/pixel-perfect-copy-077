import { FinalCta } from '@/components/landing/final-cta'
import { Hero } from '@/components/landing/hero'
import { LeadFormSection } from '@/components/landing/lead-form-section'
import { ProblemSolutionSection } from '@/components/landing/problem-solution-section'
import { SavingsSimulator } from '@/components/landing/savings-simulator'
import { SiteHeader } from '@/components/landing/site-header'
import { ValueSection } from '@/components/landing/value-section'
import { TrustedBySection } from '@/components/landing/trusted-by-section'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Atelier IA Terrain',
  brand: {
    '@type': 'Brand',
    name: 'YX Automation',
  },
  provider: {
    '@type': 'Organization',
    name: 'YX Automation',
    url: 'https://yx-automation.vercel.app',
  },
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'TPE et petites PME',
  },
  description:
    "Atelier IA à distance pour repérer les tâches répétitives, tester des usages concrets et repartir avec un plan d'action simple.",
  offers: {
    '@type': 'Offer',
    price: '690',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: 'https://yx-automation.vercel.app',
  },
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <Hero />
      <TrustedBySection />
      <SavingsSimulator />
      <ProblemSolutionSection />
      <ValueSection />
      <LeadFormSection />
      <FinalCta />
    </main>
  )
}
