'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Hero() {
  const t = useTranslations('home.hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-hero-overlay">
        <div className="absolute inset-0 bg-[url('/images/hero/semiconductor-bg.jpg')] bg-cover bg-center opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            {t('title')}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-12 max-w-4xl mx-auto font-light">
            {t('subtitle')}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={`/${locale}/equipment`}
              className="inline-block px-10 py-4 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              {t('cta')}
            </Link>
            <Link
              href={`/${locale}/company`}
              className="inline-block px-10 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
