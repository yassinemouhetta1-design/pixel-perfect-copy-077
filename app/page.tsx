import { FinalCta } from '@/components/landing/final-cta'
import { Hero } from '@/components/landing/hero'
import { MethodSection } from '@/components/landing/method-section'
import { ResultsSection } from '@/components/landing/results-section'
import { SiteHeader } from '@/components/landing/site-header'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-ink">
      <SiteHeader />
      <Hero />
      <MethodSection />
      <ResultsSection />
      <FinalCta />
    </main>
  )
}
