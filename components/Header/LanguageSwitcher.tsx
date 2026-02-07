'use client'

import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { locales } from '@/lib/i18n/config'

// 각 언어별로 언어 목록의 순서 정의
const localeOrder: Record<string, string[]> = {
  en: ['en', 'ko', 'zh'], // English / Korean / Chinese
  ko: ['ko', 'en', 'zh'], // 한국어 / 영어 / 중국어
  zh: ['zh', 'ko', 'en'], // 中文 / 韩语 / 英语
}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const t = useTranslations('languages')
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const newPath = pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`
    router.push(newPath)
  }

  // 현재 언어에 맞는 순서로 언어 목록 정렬
  const orderedLocales = localeOrder[locale] || locales

  return (
    <div className="flex items-center space-x-2">
      {orderedLocales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            locale === loc
              ? 'text-primary-600 bg-primary-800/30'
              : 'text-gray-400 hover:text-primary-500'
          }`}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  )
}
