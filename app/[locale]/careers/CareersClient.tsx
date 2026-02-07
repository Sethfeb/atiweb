'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function CareersClient() {
  const t = useTranslations('careers')

  const openPositions = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Incheon, South Korea',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'Optical Systems Engineer',
      department: 'R&D',
      location: 'Incheon, South Korea',
      type: 'Full-time',
    },
    {
      id: 3,
      title: 'Sales Manager - Asia Pacific',
      department: 'Sales',
      location: 'Singapore',
      type: 'Full-time',
    },
    {
      id: 4,
      title: 'Quality Assurance Specialist',
      department: 'Quality',
      location: 'Incheon, South Korea',
      type: 'Full-time',
    },
  ]

  const benefits = [
    { key: 'salary', icon: '💰', title: 'Competitive Salary', description: 'Market-competitive compensation packages' },
    { key: 'health', icon: '🏥', title: 'Health Insurance', description: 'Comprehensive health and dental coverage' },
    { key: 'development', icon: '📚', title: 'Professional Development', description: 'Training and career growth opportunities' },
    { key: 'pto', icon: '🏖️', title: 'Paid Time Off', description: 'Generous vacation and holiday policies' },
    { key: 'flexible', icon: '💼', title: 'Flexible Work', description: 'Work-life balance initiatives' },
    { key: 'stock', icon: '🎯', title: 'Stock Options', description: 'Equity participation programs' },
  ]

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">{t('joinUs')}</h2>
          <div className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-8 shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {t('joinUsText1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('joinUsText2')}
            </p>
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">{t('openPositions')}</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-6 hover:border-primary-700/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
                    {t('applyNow')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Culture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">{t('culture')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { key: 'innovation' },
              { key: 'collaboration' },
              { key: 'excellence' },
              { key: 'growth' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-charcoal-800 rounded-xl border border-primary-800/20 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {t(`cultureItems.${item.key}.title`)}
                </h3>
                <p className="text-gray-400">
                  {t(`cultureItems.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">{t('benefits')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-charcoal-900 rounded-xl border border-primary-800/20 text-center shadow-lg"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(`benefitsItems.${benefit.key as string}.title`)}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t(`benefitsItems.${benefit.key as string}.description`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
