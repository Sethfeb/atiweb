'use client'

import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('contact')

  return (
    <footer className="bg-charcoal-900 border-t border-primary-800/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-700 mb-4">ATI</h3>
            <p className="text-gray-400 text-sm">
              Advanced Semiconductor Inspection & Metrology Equipment
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  {t('title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('location')}</h4>
            <p className="text-sm text-gray-400">
              {t('hq')}: Incheon, South Korea
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-charcoal-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ATI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
