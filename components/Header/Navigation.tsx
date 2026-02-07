'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'company', href: `/${locale}/company` },
    { key: 'equipment', href: `/${locale}/equipment` },
    { key: 'investors', href: `/${locale}/investors` },
    { key: 'news', href: `/${locale}/news` },
    { key: 'careers', href: `/${locale}/careers` },
    { key: 'contact', href: `/${locale}/contact` },
  ]

  const isActive = (href: string) => {
    // 홈 경로는 정확히 일치하는지만 확인
    if (href === `/${locale}` || href === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`
    }
    // 다른 경로는 정확히 일치하거나 하위 경로인지 확인
    const normalizedPathname = pathname?.replace(/\/$/, '') || ''
    const normalizedHref = href.replace(/\/$/, '')
    return normalizedPathname === normalizedHref || normalizedPathname.startsWith(normalizedHref + '/')
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`px-4 py-2 text-sm font-medium transition-all rounded-md ${
              isActive(item.href)
                ? 'text-primary-600 bg-primary-800/20'
                : 'text-gray-300 hover:text-primary-500 hover:bg-charcoal-800/50'
            }`}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-300 hover:text-primary-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-charcoal-900 border-b border-primary-800/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-800/20'
                      : 'text-gray-300 hover:text-primary-500 hover:bg-charcoal-800'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
