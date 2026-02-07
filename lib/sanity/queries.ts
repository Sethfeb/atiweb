import { groq } from 'next-sanity'

// 모든 Equipment 목록 조회
export const equipmentListQuery = groq`
  *[_type == "equipment"] | order(publishedAt desc) {
    _id,
    name,
    slug,
    mainImage,
    category,
    featured,
    description
  }
`

// Equipment 상세 조회 (slug 기준)
export const equipmentBySlugQuery = groq`
  *[_type == "equipment" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    mainImage,
    gallery,
    description,
    specifications,
    pdfDocument,
    category,
    publishedAt
  }
`

// Featured Equipment 조회
export const featuredEquipmentQuery = groq`
  *[_type == "equipment" && featured == true] | order(publishedAt desc) {
    _id,
    name,
    slug,
    mainImage,
    category,
    description
  }
`
