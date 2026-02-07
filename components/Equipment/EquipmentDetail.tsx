'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '@/lib/sanity/client'
import { getBlurDataURL } from '@/lib/image-placeholder'

interface EquipmentDetailProps {
  equipment: {
    _id: string
    name: {
      en: string
      ko: string
      zh: string
    }
    mainImage: any
    gallery?: any[]
    description?: {
      en?: string
      ko?: string
      zh?: string
    }
    specifications?: Array<{
      label: {
        en?: string
        ko?: string
        zh?: string
      }
      value: string
    }>
    pdfDocument?: {
      asset?: {
        url?: string
      }
    }
    category?: string
  }
}

export default function EquipmentDetail({ equipment }: EquipmentDetailProps) {
  const t = useTranslations('equipment')
  const locale = useLocale()

  const name = equipment.name[locale as 'en' | 'ko' | 'zh'] || equipment.name.en
  const description = equipment.description?.[locale as 'en' | 'ko' | 'zh'] || equipment.description?.en || ''

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900/20 to-charcoal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {equipment.category && (
              <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-600 bg-primary-800/20 rounded-full mb-6 uppercase tracking-wide">
                {equipment.category}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">{name}</h1>
            {description && (
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">{description}</p>
            )}
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Image & Gallery */}
        <div className="lg:col-span-2 space-y-4">
          {equipment.mainImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden border border-primary-800/20"
            >
              <Image
                src={urlFor(equipment.mainImage).width(1200).height(800).url()}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
                placeholder="blur"
                blurDataURL={getBlurDataURL(1200, 800)}
              />
            </motion.div>
          )}

          {equipment.gallery && equipment.gallery.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {equipment.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative h-32 rounded-lg overflow-hidden border border-primary-800/20 hover:border-primary-700/40 transition-colors cursor-pointer"
                >
                  <Image
                    src={urlFor(image).width(400).height(300).url()}
                    alt={`${name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={getBlurDataURL(400, 300)}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Specifications & Download */}
        <div className="space-y-6">
          {/* Specifications */}
          {equipment.specifications && equipment.specifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-charcoal-800 rounded-xl border border-primary-800/20 p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{t('specs')}</h2>
              <div className="space-y-4">
                {equipment.specifications.map((spec, index) => {
                  const label = spec.label[locale as 'en' | 'ko' | 'zh'] || spec.label.en || ''
                  return (
                    <div key={index} className="border-b border-charcoal-700 pb-4 last:border-0">
                      <div className="text-sm text-gray-400 mb-2 font-medium uppercase tracking-wide">{label}</div>
                      <div className="text-white text-lg font-semibold">{spec.value}</div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* PDF Download */}
          {equipment.pdfDocument?.asset?.url && (
            <motion.a
              href={equipment.pdfDocument.asset.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block w-full px-6 py-4 bg-primary-800 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl text-center"
            >
              {t('download')}
            </motion.a>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}
