'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NewsClient() {
  const t = useTranslations('news')

  const newsItems = [
    {
      id: 1,
      date: '2024-12-15',
      category: 'Press Release',
      title: 'ATI Announces Record Q4 2024 Financial Results',
      summary: 'ATI reports strong quarterly performance with revenue growth of 25% year-over-year.',
      link: '/en/news/1', // 상세 페이지 링크 또는 외부 URL
      content: 'Full content of the news article...', // 상세 내용
    },
    {
      id: 2,
      date: '2024-11-20',
      category: 'News',
      title: 'ATI Launches Next-Generation Wafer Inspection System',
      summary: 'New advanced inspection system offers improved accuracy and throughput for semiconductor manufacturers.',
      link: '/en/news/2',
      content: 'Full content of the news article...',
    },
    {
      id: 3,
      date: '2024-10-10',
      category: 'Press Release',
      title: 'ATI Expands Global Operations with New Asia-Pacific Office',
      summary: 'Company opens new regional office in Singapore to better serve customers in the Asia-Pacific region.',
      link: '/en/news/3',
      content: 'Full content of the news article...',
    },
    {
      id: 4,
      date: '2024-09-05',
      category: 'News',
      title: 'ATI Receives Industry Recognition for Innovation',
      summary: 'Company honored for outstanding contributions to semiconductor inspection technology.',
      link: '/en/news/4',
      content: 'Full content of the news article...',
    },
    {
      id: 5,
      date: '2024-08-18',
      category: 'Press Release',
      title: 'ATI Reports Strong Q2 2024 Results',
      summary: 'Second quarter results demonstrate continued growth and market leadership.',
      link: '/en/news/5',
      content: 'Full content of the news article...',
    },
  ]

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-hero-overlay">
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
        {/* Latest News */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">{t('latest')}</h2>
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-6 hover:border-primary-700/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-800/20 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 hover:text-primary-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.summary}</p>
                  </div>
                  <Link
                    href={item.link || '#'}
                    className="px-6 py-2 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap inline-block text-center"
                  >
                    {t('readMore')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Releases Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">{t('pressReleases')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems
              .filter((item) => item.category === 'Press Release')
              .map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-charcoal-800 rounded-lg border border-charcoal-700 hover:border-primary-700/40 transition-colors"
                >
                  <div className="text-sm text-gray-400 mb-2">{item.date}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.summary}</p>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
