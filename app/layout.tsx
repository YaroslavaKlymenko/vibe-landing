import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '+Vibe — AI EBITDA Growth Lab',
  description: 'We embed inside non-tech businesses and deploy proprietary AI agent swarms that grow revenue and cut OPEX. Our fee comes out of the margin we create — not your budget.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
