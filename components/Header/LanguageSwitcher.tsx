'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { locales } from '@/lib/i18n/config'

const localeNames: Record<string, string> = {
  en: 'EN',
  ko: 'KO',
  zh: 'ZH',
}

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const newPath = pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`
    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
            locale === loc
              ? 'text-primary-600 bg-primary-800/30'
              : 'text-gray-400 hover:text-primary-500'
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  )
}
