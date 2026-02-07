import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { locales, type Locale } from '@/lib/i18n/config'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import type { Metadata } from 'next'

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
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
