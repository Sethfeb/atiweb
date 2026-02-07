'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CompanyPage() {
  const t = useTranslations('company')

  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900/20 to-charcoal-950">
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
              Leading the future of semiconductor inspection and metrology
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              {t('ceo')}
            </h2>
            <div className="bg-charcoal-900 rounded-lg border border-primary-800/20 p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                ATI has been at the forefront of semiconductor inspection and metrology technology
                for over two decades. Our commitment to innovation and excellence has made us a
                trusted partner for leading semiconductor manufacturers worldwide.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                We continuously invest in research and development to deliver cutting-edge
                solutions that meet the evolving needs of the industry. Our global network of
                experts ensures that our clients receive the highest level of support and service.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                As we look to the future, we remain dedicated to advancing semiconductor
                manufacturing through precision, innovation, and unwavering commitment to quality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-charcoal-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              {t('history')}
            </h2>
            <div className="space-y-6">
              {[
                { year: '2000', event: 'Company founded in Incheon, South Korea' },
                { year: '2005', event: 'Expanded to global markets' },
                { year: '2010', event: 'Launched next-generation inspection systems' },
                { year: '2015', event: 'Opened offices in key markets worldwide' },
                { year: '2020', event: 'Achieved industry-leading precision standards' },
                { year: '2024', event: 'Continuing innovation in AI-powered solutions' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-20 text-primary-600 font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="w-2 h-2 bg-primary-600 rounded-full absolute -ml-6 mt-2" />
                    <p className="text-gray-300 text-lg">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              {t('network')}
            </h2>
            <div className="bg-charcoal-900 rounded-lg border border-primary-800/20 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { location: 'Headquarters', city: 'Incheon, South Korea' },
                  { location: 'Asia Pacific', city: 'Singapore, Tokyo, Shanghai' },
                  { location: 'North America', city: 'San Jose, Austin' },
                  { location: 'Europe', city: 'Munich, Dublin' },
                ].map((office, index) => (
                  <div
                    key={index}
                    className="p-4 bg-charcoal-950 rounded-lg border border-primary-800/10"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {office.location}
                    </h3>
                    <p className="text-gray-400">{office.city}</p>
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
