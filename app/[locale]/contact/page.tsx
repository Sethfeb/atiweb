'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // TODO: Implement actual form submission
    // For now, simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">{t('inquiry')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal-800 border border-primary-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder={t('form.namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal-800 border border-primary-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal-800 border border-primary-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder={t('form.companyPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal-900 border border-primary-800/20 rounded-lg text-white focus:outline-none focus:border-primary-600 transition-colors"
                >
                  <option value="">{t('form.subjectPlaceholder')}</option>
                  <option value="equipment">{t('form.subjectOptions.equipment')}</option>
                  <option value="support">{t('form.subjectOptions.support')}</option>
                  <option value="sales">{t('form.subjectOptions.sales')}</option>
                  <option value="other">{t('form.subjectOptions.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal-900 border border-primary-800/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-600 transition-colors resize-none"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-primary-800 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('form.submitting') : t('form.submit')}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg text-green-400">
                  {t('form.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg text-red-400">
                  {t('form.error')}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">{t('location')}</h2>
            <div className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('hq')}</h3>
                <p className="text-gray-300">
                  Incheon, South Korea
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('email')}</h3>
                <a
                  href="mailto:info@ati2000.co.kr"
                  className="text-primary-500 hover:text-primary-400 transition-colors"
                >
                  info@ati2000.co.kr
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('phone')}</h3>
                <p className="text-gray-300">+82-32-XXX-XXXX</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('businessHours')}</h3>
                <p className="text-gray-300">
                  {t('businessHoursText')}
                </p>
              </div>

              <div className="pt-6 border-t border-charcoal-800">
                <h3 className="text-xl font-semibold text-white mb-3">{t('globalOffices')}</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Singapore</p>
                  <p>• Tokyo, Japan</p>
                  <p>• Shanghai, China</p>
                  <p>• San Jose, USA</p>
                  <p>• Munich, Germany</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
