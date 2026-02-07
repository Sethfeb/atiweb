import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { equipmentBySlugQuery } from '@/lib/sanity/queries'
import EquipmentDetail from '@/components/Equipment/EquipmentDetail'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params
  const equipment = await client.fetch(equipmentBySlugQuery, { slug })

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
  try {
    const equipment = await client.fetch(`
      *[_type == "equipment"] {
        "slug": slug.current
      }
    `)
    return equipment.map((item: { slug: string }) => ({
      slug: item.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

async function getEquipment(slug: string) {
  try {
    const equipment = await client.fetch(equipmentBySlugQuery, { slug })
    return equipment
  } catch (error) {
    console.error('Error fetching equipment:', error)
    return null
  }
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const equipment = await getEquipment(slug)

  if (!equipment) {
    notFound()
  }

  return <EquipmentDetail equipment={equipment} />
}
