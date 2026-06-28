import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const plex = IBM_Plex_Sans({
  variable: '--font-plex',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://pixel-perfect-copy-077.vercel.app'),
  title: {
    default: 'YX Automation - Atelier IA Terrain pour TPE et PME',
    template: '%s | YX Automation',
  },
  description:
    "Atelier IA à distance pour aider les TPE et petites PME à repérer leurs tâches répétitives, tester l'IA sur des cas concrets et repartir avec un plan d'action simple.",
  applicationName: 'YX Automation',
  authors: [{ name: 'YX Automation' }],
  creator: 'YX Automation',
  publisher: 'YX Automation',
  keywords: [
    'atelier IA',
    'automatisation TPE',
    'automatisation PME',
    'intelligence artificielle entreprise',
    'gain de temps entreprise',
    'tâches répétitives',
    'diagnostic IA',
    'YX Automation',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'YX Automation',
    title: 'YX Automation - Moins de copier-coller, plus de temps utile',
    description:
      "Un atelier IA à distance pour repérer les tâches répétitives, tester des usages concrets et préparer un plan d'action simple.",
    images: [
      {
        url: '/images/hero-robot-padded.png',
        width: 1200,
        height: 630,
        alt: 'Mascotte YX Automation pour Atelier IA Terrain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YX Automation - Atelier IA Terrain',
    description:
      "Repérez vos tâches répétitives, testez l'IA sur des cas concrets et repartez avec un plan d'action simple.",
    images: ['/images/hero-robot-padded.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1554d1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${plex.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
