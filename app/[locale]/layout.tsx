import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { locales, type Locale } from '@/lib/i18n/config'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR, Noto_Sans_SC } from 'next/font/google'
import '@/app/globals.css'

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: {
      default: 'ATI - Advanced Semiconductor Inspection & Metrology',
      template: '%s | ATI',
    },
    description: 'Leading manufacturer of semiconductor inspection and metrology equipment',
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://www.ati2000.co.kr',
      siteName: 'ATI',
      title: 'ATI - Advanced Semiconductor Inspection & Metrology',
      description: 'Leading manufacturer of semiconductor inspection and metrology equipment',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    return null
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansKR.variable} ${notoSansSC.variable} font-sans flex min-h-screen flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
