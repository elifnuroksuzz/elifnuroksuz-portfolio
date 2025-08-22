import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Elif Nur Öksüz | Bilgisayar Mühendisi',
  description: 'Bilgisayar Mühendisi.',
  keywords: [
    'Elif Nur Öksüz',
    'bilgisayar mühendisi',
    'yapay zeka',
    'mobile app development',
    'AI',
    'machine learning',
    'Yalova',
    'Python',
    'Kotlin',
    'Android'
  ],
  authors: [{ name: 'Elif Nur Öksüz', url: 'https://linkedin.com/in/elifnuroksuz' }],
  creator: 'Elif Nur Öksüz',
  publisher: 'Elif Nur Öksüz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Elif Nur Öksüz | Bilgisayar Mühendisi',
    description: 'Bilgisayar Mühendisi',
    url: 'https://elifnuroksuz.vercel.app',
    siteName: 'Elif Nur Öksüz Portfolio',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elif Nur Öksüz | Bilgisayar Mühendisi',
    description: 'Bilgisayar Mühendisi', // Bu satır eksikti!
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <div className="min-h-screen bg-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}