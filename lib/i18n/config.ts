// 지원하는 언어 목록
export const locales = ['en', 'ko', 'zh'] as const
export type Locale = (typeof locales)[number]

// 기본 언어
export const defaultLocale: Locale = 'en'
