'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CompanyPage() {
  const t = useTranslations('company')

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900/20 to-charcoal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10 text-center">
              {t('ceo')}
            </h2>
            <div className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-10 shadow-xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {t('ceoMessage1')}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {t('ceoMessage2')}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('ceoMessage3')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-charcoal-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
              {t('history')}
            </h2>
            <div className="space-y-8 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-800/30 hidden md:block" />
              {[
                { year: '2000', event: t('historyEvents.2000') },
                { year: '2005', event: t('historyEvents.2005') },
                { year: '2010', event: t('historyEvents.2010') },
                { year: '2015', event: t('historyEvents.2015') },
                { year: '2020', event: t('historyEvents.2020') },
                { year: '2024', event: t('historyEvents.2024') },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-6 relative pl-12 md:pl-0"
                >
                  <div className="flex-shrink-0 w-24 text-primary-600 font-bold text-xl md:text-2xl">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="w-4 h-4 bg-primary-600 rounded-full absolute left-6 md:left-8 -ml-2 mt-1 border-4 border-charcoal-800 z-10" />
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
              {t('network')}
            </h2>
            <div className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { key: 'headquarters', city: 'Incheon, South Korea' },
                  { key: 'asiaPacific', city: 'Singapore, Tokyo, Shanghai' },
                  { key: 'northAmerica', city: 'San Jose, Austin' },
                  { key: 'europe', city: 'Munich, Dublin' },
                ].map((office, index) => (
                  <div
                    key={index}
                    className="p-6 bg-charcoal-800 rounded-lg border border-primary-800/20 hover:border-primary-700/40 transition-all hover:shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">
                      {t(`offices.${office.key}`)}
                    </h3>
                    <p className="text-gray-400 text-lg">{office.city}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
