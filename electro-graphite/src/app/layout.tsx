import type { Metadata } from 'next'
import { Inter, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Uğur Emin Baynal - Electro-Graphite Portfolio',
  description: 'Uğur Emin Baynal\'ın kişisel portfolio websitesi - Electro-Graphite teması ile. Engineering projects, experience, skills ve certifications.',
  keywords: ['portfolio', 'engineering', 'developer', 'Uğur Emin Baynal', 'Electro-Graphite'],
  authors: [{ name: 'Uğur Emin Baynal' }],
  creator: 'Uğur Emin Baynal',
  openGraph: {
    title: 'Uğur Emin Baynal - Electro-Graphite Portfolio',
    description: 'Engineering projects, experience, skills ve certifications.',
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uğur Emin Baynal - Electro-Graphite Portfolio',
    description: 'Engineering projects, experience, skills ve certifications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
