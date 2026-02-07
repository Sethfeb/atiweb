import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from '@/lib/i18n/config'

export default createMiddleware({
  // 지원하는 언어 목록
  locales,
  // 기본 언어
  defaultLocale,
  // 언어 감지 비활성화 (명시적 라우팅만 사용)
  localePrefix: 'always'
})

export const config = {
  // 모든 경로에서 미들웨어 실행 (정적 파일 제외)
  matcher: ['/((?!api|_next|_vercel|studio|.*\\..*).*)']
}
