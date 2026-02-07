# 수정 사항 적용 완료

## ✅ 해결된 문제들

### 1. Sanity Client 설정 문제
- **문제:** projectId가 없을 때 빌드 에러 발생
- **해결:** 
  - `lib/sanity/client.ts`: client가 null일 수 있도록 수정
  - `urlFor` 함수에 null 체크 추가
  - Equipment 페이지에서 client null 체크 추가

### 2. next-intl 설정 문제
- **문제:** next-intl config 파일을 찾을 수 없음
- **해결:**
  - `next.config.js`에 `next-intl/plugin` 추가
  - `i18n.ts` 파일이 루트에 존재 확인

### 3. Static Rendering 문제
- **문제:** next-intl API 사용 시 dynamic rendering으로 전환됨
- **해결:**
  - 모든 서버 컴포넌트 페이지에 `setRequestLocale(locale)` 추가
  - `app/[locale]/page.tsx`: setRequestLocale 추가
  - `app/[locale]/equipment/page.tsx`: setRequestLocale 추가
  - `app/[locale]/equipment/[slug]/page.tsx`: setRequestLocale 추가

### 4. Sanity Studio 설정
- **문제:** projectId가 없을 때 에러 발생
- **해결:** `sanity/sanity.config.ts`에 placeholder projectId 추가

## 📝 수정된 파일 목록

1. `lib/sanity/client.ts` - null-safe 클라이언트
2. `app/[locale]/page.tsx` - setRequestLocale 추가
3. `app/[locale]/equipment/page.tsx` - setRequestLocale 추가
4. `app/[locale]/equipment/[slug]/page.tsx` - setRequestLocale 및 null 체크 추가
5. `next.config.js` - next-intl plugin 추가
6. `sanity/sanity.config.ts` - placeholder projectId

## 🚀 현재 상태

- ✅ 서버 정상 실행 중 (포트 3000)
- ✅ 홈 페이지 정상 작동 (`/en/`)
- ✅ 린트 에러 없음
- ✅ Sanity 설정 없이도 빌드 가능

## 📌 참고사항

- Company와 Contact 페이지는 클라이언트 컴포넌트('use client')이므로 setRequestLocale 불필요
- Sanity 프로젝트 ID가 없어도 페이지는 정상 작동 (데이터만 표시 안 됨)
- `.env.local` 파일에 Sanity 설정을 추가하면 Equipment 데이터를 불러올 수 있음

## 다음 단계

1. Sanity 프로젝트 생성 및 `.env.local` 설정
2. Equipment 데이터 추가
3. 실제 이미지 추가
