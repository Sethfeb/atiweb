import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Hero from '@/components/Home/Hero'
import KeyStrengths from '@/components/Home/KeyStrengths'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Home',
    description:
      locale === 'ko'
        ? '반도체 검사 및 계측 장비의 선도 기업 ATI'
        : locale === 'zh'
        ? '半导体检测与计量设备的领先企业 ATI'
        : 'Leading manufacturer of semiconductor inspection and metrology equipment',
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="flex flex-col">
      <Hero />
      <KeyStrengths />
    </div>
  )
}
