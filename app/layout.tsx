import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dev King — Passionate Web Developer',
  description: 'Abass Oluwaseun Samuel (Dev King) — Building clean, modern, and responsive digital experiences that scale.',
  keywords: ['Dev King', 'Abass Oluwaseun Samuel', 'Web Developer', 'React', 'Next.js', 'Firebase'],
  authors: [{ name: 'Dev King' }],
  openGraph: {
    title: 'Dev King — Portfolio',
    description: 'Transforming ideas into interactive digital experiences.',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Ambient background orbs */}
        <div className="orb-container" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        {children}
      </body>
    </html>
  )
}
