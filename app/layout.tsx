import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Uhuru.ai - All-in-One AI Platform',
  description: 'Uhuru.ai is a comprehensive AI platform that empowers individuals and businesses with cutting-edge artificial intelligence tools for content creation, code generation, image synthesis, and intelligent automation.',
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Uhuru.ai - All-in-One AI Platform',
    description: 'Uhuru.ai is a comprehensive AI platform that empowers individuals and businesses with cutting-edge artificial intelligence tools for content creation, code generation, image synthesis, and intelligent automation.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
