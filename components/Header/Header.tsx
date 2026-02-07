'use client'

import { useTranslations } from 'next-intl'
import Navigation from './Navigation'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'

export default function Header() {
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-50 bg-charcoal-900/98 backdrop-blur-md border-b border-primary-800/30 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl font-bold text-primary-700 group-hover:text-primary-600 transition-colors">
              ATI
            </div>
            <div className="hidden sm:block text-xs text-gray-400 font-light">
              Advanced Technology & Innovation
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
