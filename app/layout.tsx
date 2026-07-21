import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Newsreader } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

const geistMono = localFont({
  src: '../public/fonts/GeistMono-VariableFont_wght.ttf',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aiplusvibe.com'),
  title: '+Vibe · AI Roll-Up Partner for PE & Operators',
  description: 'Strategy, forward-deployed engineering, and proprietary systems for PE funds and roll-up operators: from AI due diligence to a Corporate Brain across the portfolio.',
  openGraph: {
    title: '+Vibe · AI Roll-Up Partner for PE & Operators',
    description: 'You own the companies. We make them AI-native.',
    url: 'https://www.aiplusvibe.com',
    siteName: '+Vibe',
    images: [
      {
        url: '/assets/og-image.svg',
        width: 1200,
        height: 630,
        alt: '+Vibe · AI Roll-Up Partner for PE & Operators',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '+Vibe · AI Roll-Up Partner for PE & Operators',
    description: 'You own the companies. We make them AI-native.',
    images: ['/assets/og-image.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistMono.variable} ${newsreader.variable}`}>
      <body>
        {children}
         <Analytics />
      </body>
    </html>
  )
}
