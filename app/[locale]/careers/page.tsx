import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import CareersClient from './CareersClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Careers | ATI',
    description: 'Join ATI and be part of the future of semiconductor inspection technology',
  }
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return <CareersClient />
}
