'use client'

import { useTranslations } from 'next-intl'
import Navigation from './Navigation'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'

export default function Header() {
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-50 bg-charcoal-900/95 backdrop-blur-sm border-b border-primary-800/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary-700">
              ATI
            </div>
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* Language Switcher */}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
