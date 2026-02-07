import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_KR, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ATI - Advanced Semiconductor Inspection & Metrology',
  description: 'Leading manufacturer of semiconductor inspection and metrology equipment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansKR.variable} ${notoSansSC.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
