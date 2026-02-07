import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { client } from '@/lib/sanity/client'
import { equipmentBySlugQuery } from '@/lib/sanity/queries'
import { sampleEquipment } from '@/lib/data/sample-equipment'
import EquipmentDetail from '@/components/Equipment/EquipmentDetail'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params
  
  let equipment
  
  // Sanity 클라이언트가 설정된 경우 Sanity에서 데이터 가져오기
  if (client) {
    try {
      equipment = await client.fetch(equipmentBySlugQuery, { slug })
    } catch (error) {
      console.error('Error fetching equipment for metadata:', error)
    }
  }
  
  // Sanity가 없거나 데이터가 없는 경우 샘플 데이터에서 찾기
  if (!equipment) {
    equipment = sampleEquipment.find((item) => item.slug.current === slug) || null
  }

  if (!equipment) {
    return {
      title: 'Equipment Not Found | ATI',
    }
  }

  const name = equipment.name[locale as 'en' | 'ko' | 'zh'] || equipment.name.en
  const description =
    equipment.description?.[locale as 'en' | 'ko' | 'zh'] ||
    equipment.description?.en ||
    ''

  return {
    title: `${name} | ATI Equipment`,
    description: description,
    openGraph: {
      title: name,
      description: description,
      images: equipment.mainImage
        ? [
            {
              url: equipment.mainImage.asset?.url || '',
              width: 1200,
              height: 630,
              alt: name,
            },
          ]
        : [],
    },
  }
}

export async function generateStaticParams() {
  // Sanity 클라이언트가 설정된 경우 Sanity에서 slug 가져오기
  if (client) {
    try {
      const equipment = await client.fetch(`
        *[_type == "equipment"] {
          "slug": slug.current
        }
      `)
      if (equipment && equipment.length > 0) {
        return equipment.map((item: { slug: string }) => ({
          slug: item.slug,
        }))
      }
    } catch (error) {
      console.error('Error generating static params:', error)
    }
  }
  
  // Sanity가 없거나 데이터가 없는 경우 샘플 데이터의 slug 반환
  return sampleEquipment.map((item) => ({
    slug: item.slug.current,
  }))
}

async function getEquipment(slug: string) {
  // Sanity 클라이언트가 설정된 경우 Sanity에서 데이터 가져오기
  if (client) {
    try {
      const equipment = await client.fetch(equipmentBySlugQuery, { slug })
      if (equipment) {
        return equipment
      }
    } catch (error) {
      console.error('Error fetching equipment:', error)
    }
  }
  
  // Sanity가 없거나 데이터가 없는 경우 샘플 데이터에서 찾기
  const sample = sampleEquipment.find((item) => item.slug.current === slug)
  return sample || null
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const equipment = await getEquipment(slug)

  if (!equipment) {
    notFound()
  }

  return <EquipmentDetail equipment={equipment} />
}
