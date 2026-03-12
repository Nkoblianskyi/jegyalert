import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import CookieBanner from '@/components/cookie-banner'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://jegyalert.com'),
  title: {
    default: 'Jegyalert – Jegyárak összehasonlítása egy helyen',
    template: '%s | Jegyalert',
  },
  description: 'A Jegyalert független jegyár-összehasonlító platform. Összehasonlítjuk több megbízható partner árait – koncertek, sport, fesztiválok. Ingyenes, regisztráció nélkül.',
  keywords: 'jegy, jegyár, összehasonlítás, koncert, sport, fesztivál, Jegyalert, Jegy.hu, Eventim, StubHub',
  alternates: { canonical: 'https://jegyalert.com' },
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: 'https://jegyalert.com',
    siteName: 'Jegyalert',
    title: 'Jegyalert – Jegyárak összehasonlítása',
    description: 'Összehasonlítjuk több megbízható partner jegyárait egy helyen – koncertek, sportesemények, fesztiválok.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jegyalert – Jegyárak összehasonlítása',
    description: 'Összehasonlítjuk több megbízható partner árait egy helyen.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
