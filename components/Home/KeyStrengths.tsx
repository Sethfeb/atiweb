'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function KeyStrengths() {
  const t = useTranslations('home.strengths')

  const strengths = [
    {
      key: 'technology',
      icon: '🔬',
    },
    {
      key: 'global',
      icon: '🌍',
    },
    {
      key: 'innovation',
      icon: '💡',
    },
  ]

  return (
    <section className="py-20 bg-charcoal-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Key Strengths
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leading the industry with cutting-edge technology and global expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal-900 p-8 rounded-lg border border-primary-800/20 hover:border-primary-700/40 transition-colors"
            >
              <div className="text-5xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(`${strength.key}.title`)}
              </h3>
              <p className="text-gray-400">
                {t(`${strength.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
