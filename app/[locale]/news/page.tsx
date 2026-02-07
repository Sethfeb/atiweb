import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import NewsClient from './NewsClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'News & Press Releases | ATI',
    description: 'Latest news and press releases from ATI',
  }
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <NewsClient />
}
