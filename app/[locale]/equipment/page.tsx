import { setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { client } from '@/lib/sanity/client'
import { equipmentListQuery } from '@/lib/sanity/queries'
import { sampleEquipment } from '@/lib/data/sample-equipment'
import EquipmentCard from '@/components/Equipment/EquipmentCard'

export const revalidate = 3600 // Revalidate every hour

async function getEquipment() {
  // Sanity 클라이언트가 설정된 경우 Sanity에서 데이터 가져오기
  if (client) {
    try {
      const equipment = await client.fetch(equipmentListQuery)
      if (equipment && equipment.length > 0) {
        return equipment
      }
    } catch (error) {
      console.error('Error fetching equipment:', error)
    }
  }
  
  // Sanity가 없거나 데이터가 없는 경우 샘플 데이터 사용
  return sampleEquipment
}

export default async function EquipmentPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('equipment')
  const equipment = await getEquipment()

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900/20 to-charcoal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {equipment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {equipment.map((item: any) => (
              <EquipmentCard key={item._id} equipment={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              {t('noEquipment')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
