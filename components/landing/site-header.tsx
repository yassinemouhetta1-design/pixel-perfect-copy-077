import { ArrowRight } from 'lucide-react'
import { BrandButton } from './primitives'

const navItems = ["L'atelier", 'Pour qui', 'Méthode', 'Contact']

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-[1460px] items-center justify-between px-8 py-8 lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center text-brand">
            <svg viewBox="0 0 36 36" className="size-9" fill="none" aria-hidden="true">
              <path
                d="M7 18h10M7 12l7 6-7 6M22 27h7"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[15px] font-extrabold tracking-tight text-ink">YX AUTOMATION</span>
        </a>

        <nav className="hidden items-center gap-14 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[15px] font-semibold text-ink transition-colors hover:text-brand"
            >
              {item}
            </a>
          ))}
        </nav>

        <BrandButton className="hidden rounded-xl px-7 py-4 text-[15px] sm:inline-flex">
          <span>Diagnostic gratuit</span>
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </BrandButton>
      </div>
    </header>
  )
}
