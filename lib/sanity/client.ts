import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Sanity 클라이언트 생성 (projectId가 없어도 빌드 에러 방지)
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

// 이미지 URL 빌더 (클라이언트가 있을 때만)
const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource | null | undefined) {
  if (!builder || !source) {
    return {
      width: () => ({
        height: () => ({
          url: () => '',
        }),
        url: () => '',
      }),
      height: () => ({
        width: () => ({
          url: () => '',
        }),
        url: () => '',
      }),
      url: () => '',
    }
  }
  try {
    return builder.image(source)
  } catch (error) {
    console.error('Error building image URL:', error)
    return {
      width: () => ({
        height: () => ({
          url: () => '',
        }),
        url: () => '',
      }),
      height: () => ({
        width: () => ({
          url: () => '',
        }),
        url: () => '',
      }),
      url: () => '',
    }
  }
}
