import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistMono = localFont({
  src: '../public/fonts/GeistMono-VariableFont_wght.ttf',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '+Vibe — AI EBITDA Growth Lab',
  description: 'We embed inside non-tech businesses and deploy proprietary AI agent swarms that grow revenue and cut OPEX. Our fee comes out of the margin we create — not your budget.',
  openGraph: {
    title: '+Vibe — AI EBITDA Growth Lab',
    description: 'AI agent swarms that grow your revenue and cut OPEX.',
    url: 'https://www.aiplusvibe.com',
    siteName: '+Vibe',
    images: [
      {
        url: '/assets/logo-full-color.png',
        width: 1200,
        height: 630,
        alt: '+Vibe',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '+Vibe — AI EBITDA Growth Lab',
    description: 'AI agent swarms that grow your revenue and cut OPEX.',
    images: ['/assets/logo-full-color.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>{children}</body>
    </html>
  )
}
