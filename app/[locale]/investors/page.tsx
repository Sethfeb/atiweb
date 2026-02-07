import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import InvestorsClient from './InvestorsClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Investor Relations | ATI',
    description: 'ATI investor relations, financial reports, stock information, and corporate governance',
  }
}

export default async function InvestorsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <InvestorsClient />
}
