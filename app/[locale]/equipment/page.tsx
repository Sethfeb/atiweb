import { client } from '@/lib/sanity/client'
import { equipmentListQuery } from '@/lib/sanity/queries'
import EquipmentCard from '@/components/Equipment/EquipmentCard'

export const revalidate = 3600 // Revalidate every hour

async function getEquipment() {
  try {
    const equipment = await client.fetch(equipmentListQuery)
    return equipment || []
  } catch (error) {
    console.error('Error fetching equipment:', error)
    return []
  }
}

export default async function EquipmentPage() {
  const equipment = await getEquipment()

  return (
    <div className="min-h-screen bg-charcoal-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Equipment
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced semiconductor inspection and metrology solutions
          </p>
        </div>

        {equipment.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item: any) => (
              <EquipmentCard key={item._id} equipment={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No equipment available at the moment. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
