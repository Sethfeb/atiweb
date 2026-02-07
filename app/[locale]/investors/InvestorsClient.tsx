'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function InvestorsClient() {
  const t = useTranslations('investors')

  const financialReports = [
    { year: '2024', quarter: 'Q4', date: '2024-12-31', type: 'Annual Report' },
    { year: '2024', quarter: 'Q3', date: '2024-09-30', type: 'Quarterly Report' },
    { year: '2024', quarter: 'Q2', date: '2024-06-30', type: 'Quarterly Report' },
    { year: '2024', quarter: 'Q1', date: '2024-03-31', type: 'Quarterly Report' },
  ]

  const stockInfo = {
    symbol: 'ATI',
    exchange: 'KRX',
    currentPrice: '12,500',
    change: '+250',
    changePercent: '+2.04%',
  }

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
              Committed to creating long-term value for our shareholders
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stock Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-charcoal-900 rounded-xl border border-primary-800/20 p-6 sticky top-24 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">{t('stockInfo')}</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Stock Symbol</div>
                  <div className="text-2xl font-bold text-primary-600">{stockInfo.symbol}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Exchange</div>
                  <div className="text-lg text-white">{stockInfo.exchange}</div>
                </div>
                <div className="pt-4 border-t border-charcoal-800">
                  <div className="text-sm text-gray-400 mb-1">Current Price</div>
                  <div className="text-3xl font-bold text-white">{stockInfo.currentPrice} KRW</div>
                  <div className="text-green-400 mt-2">
                    {stockInfo.change} ({stockInfo.changePercent})
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-charcoal-900 rounded-xl border border-primary-800/20 p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t('overview')}</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  ATI is committed to delivering sustainable growth and creating long-term value for
                  our shareholders. We maintain transparent communication with our investor
                  community and provide timely updates on our financial performance and strategic
                  initiatives.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our strong financial position and innovative technology portfolio position us well
                  for continued growth in the semiconductor inspection and metrology market.
                </p>
              </div>
            </motion.div>

            {/* Financial Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal-900 rounded-xl border border-primary-800/20 p-8 shadow-xl"
              id="reports"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t('financialReports')}</h2>
              <div className="space-y-4">
                {financialReports.map((report, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-charcoal-950 rounded-lg border border-charcoal-800 hover:border-primary-700/40 transition-colors"
                  >
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {report.year} {report.quarter} {report.type}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">Date: {report.date}</div>
                    </div>
                    <button className="px-4 py-2 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors">
                      Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Corporate Governance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-charcoal-900 rounded-xl border border-primary-800/20 p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t('governance')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Board of Directors', description: 'Our experienced board provides strategic oversight' },
                  { title: 'Audit Committee', description: 'Ensuring financial integrity and compliance' },
                  { title: 'Compensation Committee', description: 'Overseeing executive compensation' },
                  { title: 'Nominating Committee', description: 'Board composition and governance' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-charcoal-950 rounded-lg border border-charcoal-800"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* IR Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-charcoal-900 rounded-xl border border-primary-800/20 p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t('contact')}</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Investor Relations</div>
                  <div className="text-lg text-white">ir@ati2000.co.kr</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <div className="text-lg text-white">+82-32-XXX-XXXX</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
