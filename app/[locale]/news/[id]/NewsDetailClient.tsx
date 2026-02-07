'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface NewsDetailClientProps {
  news: {
    id: number
    date: string
    category: string
    title: string
    summary: string
    content: string
  }
}

export default function NewsDetailClient({ news }: NewsDetailClientProps) {
  const t = useTranslations('news')
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900/20 to-charcoal-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-800/20 rounded-full">
                {news.category}
              </span>
              <span className="text-sm text-gray-400">{news.date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {news.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {news.summary}
            </p>
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center text-primary-500 hover:text-primary-400 transition-colors"
            >
              ← Back to News
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-charcoal-900 rounded-xl border border-primary-800/20 p-8 md:p-12 shadow-xl">
            <div
              className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
