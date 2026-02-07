/**
 * Generate a placeholder image URL for Sanity images
 */
export function getImagePlaceholder(width: number = 400, height: number = 300) {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a1a"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#666" text-anchor="middle" dy=".3em">Loading...</text>
    </svg>`
  ).toString('base64')}`
}

/**
 * Generate blur data URL for Next.js Image component
 */
export function getBlurDataURL(width: number = 400, height: number = 300) {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a1a"/>
    </svg>`
  ).toString('base64')}`
}
