'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations('contact')
  const locale = useLocale()

  const footerLinks = {
    company: [
      { key: 'about', href: `/${locale}/company` },
      { key: 'equipment', href: `/${locale}/equipment` },
      { key: 'news', href: `/${locale}/news` },
      { key: 'careers', href: `/${locale}/careers` },
    ],
    investors: [
      { key: 'overview', href: `/${locale}/investors` },
      { key: 'financialReports', href: `/${locale}/investors#reports` },
      { key: 'stockInfo', href: `/${locale}/investors#stock` },
    ],
    support: [
      { key: 'contact', href: `/${locale}/contact` },
      { key: 'support', href: `#` },
      { key: 'downloads', href: `#` },
    ],
  }

  return (
    <footer className="bg-charcoal-900 border-t border-primary-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-700 mb-4">ATI</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Advanced Semiconductor Inspection & Metrology Equipment
            </p>
            <p className="text-gray-500 text-xs">
              Leading innovation in semiconductor technology
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={`/${locale}/company`} className="hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/equipment`} className="hover:text-primary-500 transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/news`} className="hover:text-primary-500 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/careers`} className="hover:text-primary-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Investors</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href={`/${locale}/investors`} className="hover:text-primary-500 transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/investors#reports`} className="hover:text-primary-500 transition-colors">
                  Financial Reports
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/investors#stock`} className="hover:text-primary-500 transition-colors">
                  Stock Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('location')}</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <span className="font-medium text-gray-300">{t('hq')}:</span><br />
                Incheon, South Korea
              </p>
              <p>
                <span className="font-medium text-gray-300">Email:</span><br />
                <a href="mailto:info@ati2000.co.kr" className="hover:text-primary-500 transition-colors">
                  info@ati2000.co.kr
                </a>
              </p>
              <p>
                <span className="font-medium text-gray-300">Phone:</span><br />
                +82-32-XXX-XXXX
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} ATI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-primary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
