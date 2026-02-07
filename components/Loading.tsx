export default function Loading() {
  return (
    <div className="min-h-screen bg-charcoal-900 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-800 border-t-transparent mb-4"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
