import type { Metadata } from 'next'
import '@/styles/global.scss'
import { Providers } from './providers'
import { AOSInit } from './aos'
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'B² Network',
  description: 'B² Network, BTC Layer2',
  keywords: 'BTC Layer2 B² Network'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <GoogleTagManager gtmId="G-6C7Q53GBMN" />
      <body >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
