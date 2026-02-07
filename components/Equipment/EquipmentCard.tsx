'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '@/lib/sanity/client'
import { getBlurDataURL } from '@/lib/image-placeholder'

interface EquipmentCardProps {
  equipment: {
    _id: string
    name: {
      en: string
      ko: string
      zh: string
    }
    slug: {
      current: string
    }
    mainImage?: any
    category?: string
    description?: {
      en?: string
      ko?: string
      zh?: string
    }
  }
}

export default function EquipmentCard({ equipment }: EquipmentCardProps) {
  const t = useTranslations('equipment')
  const locale = useLocale()

  const name = equipment.name[locale as 'en' | 'ko' | 'zh'] || equipment.name.en
  const description = equipment.description?.[locale as 'en' | 'ko' | 'zh'] || equipment.description?.en || ''

  // 이미지 URL 생성 (에러 처리 포함)
  let imageUrl = ''
  if (equipment.mainImage) {
    try {
      const url = urlFor(equipment.mainImage).width(600).height(400).url()
      if (url && url !== '') {
        imageUrl = url
      }
    } catch (error) {
      console.error('Error generating image URL:', error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
    >
      <Link href={`/${locale}/equipment/${equipment.slug.current}`}>
        <div className="relative h-64 overflow-hidden bg-slate-900">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={getBlurDataURL(600, 400)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
              <div className="text-4xl text-gray-600">📷</div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-8">
          {equipment.category && (
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary-500 bg-primary-600/20 rounded-full mb-4 uppercase tracking-wide">
              {equipment.category}
            </span>
          )}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-gray-400 text-sm line-clamp-2">
              {description}
            </p>
          )}
          <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-500 transition-colors">
            <span className="text-sm font-medium">{t('viewDetails')}</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
