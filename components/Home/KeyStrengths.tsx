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
    <section className="py-24 bg-charcoal-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Key Strengths
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Leading the industry with cutting-edge technology and global expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal-800 p-10 rounded-xl border border-primary-800/20 hover:border-primary-700/40 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {strength.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">
                {t(`${strength.key}.title`)}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {t(`${strength.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
