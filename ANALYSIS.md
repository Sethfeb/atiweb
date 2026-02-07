# ATI Corporate Website - 구조 분석 리포트

현재 프로젝트 구조를 분석한 결과, Next.js 14+ (App Router) 및 `next-intl`, Sanity 통합 모범 사례와 맞지 않는 몇 가지 중요한 부분을 발견했습니다.

## 🚨 수정이 필요한 중요 항목 (Critical)

### 1. `middleware.ts` 위치 오류
- **현재 위치**: `app/middleware.ts`
- **문제점**: Next.js는 미들웨어 파일이 프로젝트 **루트 디렉토리**(`package.json`과 같은 레벨)에 있어야 인식합니다. `app/` 내부에 있으면 미들웨어가 전혀 작동하지 않습니다.
- **해결 방안**: `app/middleware.ts` 파일을 `./middleware.ts` (루트)로 이동해야 합니다.

### 2. Root Layout 충돌 (`app/layout.tsx` vs `app/[locale]/layout.tsx`)
- **현재 상태**: 
  - `app/layout.tsx`: `<html>`과 `<body>`를 정의하고 `lang="en"`으로 하드코딩함.
  - `app/[locale]/layout.tsx`: `NextIntlClientProvider` 등을 감싸지만 `<html>` 태그가 없음.
- **문제점**: 
  - `app/layout.tsx`가 최상위 레이아웃으로 적용되므로, 모든 페이지가 강제로 `lang="en"`을 가지게 됩니다. 이는 한국어(`ko`)나 중국어(`zh`) 페이지에서도 잘못된 언어 코드를 제공하여 SEO 및 접근성에 악영향을 줍니다.
  - `next-intl` 사용 시, 루트 레이아웃은 동적인 `locale` 파라미터를 받아 `lang` 속성을 설정해야 합니다.
- **해결 방안**:
  - `app/layout.tsx`를 **삭제**합니다.
  - `app/[locale]/layout.tsx`에 `<html>`, `<body>`, 폰트 설정을 포함시켜 진정한 루트 레이아웃으로 만듭니다.

---

## ⚠️ 개선 권장 항목 (Improvements)

### 3. Sanity 설정 중복 및 구조
- **현재 상태**: 
  - 루트 `package.json`에 `sanity`, `next-sanity` 의존성이 있음.
  - 별도의 `sanity/` 폴더 내에 또 `package.json`과 `sanity.config.ts`가 있음.
- **문제점**: 
  - Next.js 내에 Sanity Studio를 임베딩(`app/studio` 경로 사용)하는 경우, 별도의 `sanity` 프로젝트(Monorepo 스타일)로 분리할 필요가 없습니다. 
  - `sanity/package.json`은 불필요한 중복 의존성 관리와 혼란을 유발할 수 있습니다.
- **해결 방안**:
  - `sanity/package.json`과 `sanity/node_modules` (있다면) 삭제.
  - `sanity.config.ts`는 루트나 `sanity/` 폴더에 두고 루트 `package.json`의 의존성만 사용.

---

## ✅ 권장되는 수정 후 구조

```diff
 ati-corporate-website/
 ├── .env.local
 ├── .gitignore
 ├── next.config.js
 ├── package.json
-├── app/middleware.ts  (삭제)
+├── middleware.ts      (이동됨: 루트)
 ├── app/
-│   ├── layout.tsx     (삭제: [locale]/layout.tsx와 통합)
 │   ├── globals.css
 │   ├── [locale]/
-│   │   ├── layout.tsx (수정: <html>, <body> 태그 포함)
+│   │   ├── layout.tsx (Root Layout 역할 수행)
 │   │   ├── page.tsx
 │   │   └── ...
 │   └── studio/        (Sanity Studio - 구조 정상)
 ├── components/        (유지: 구조 좋음)
 ├── lib/               (유지)
 ├── messages/          (유지)
 └── sanity/
-    ├── package.json   (삭제 권장)
     ├── sanity.config.ts
     └── schemas/
```
