# ATI Corporate Website - 프로젝트 구조

## 전체 디렉토리 구조

```
ati-corporate-website/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # 다국어 라우팅 (en, ko, zh)
│   │   ├── layout.tsx            # 다국어 레이아웃 래퍼
│   │   ├── page.tsx              # Home 페이지
│   │   ├── company/
│   │   │   └── page.tsx          # Company 페이지
│   │   ├── equipment/
│   │   │   ├── page.tsx          # Equipment 목록 페이지
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Equipment 상세 페이지 (동적)
│   │   └── contact/
│   │       └── page.tsx           # Contact 페이지
│   ├── layout.tsx                # Root layout (폰트 로딩 등)
│   ├── globals.css               # 전역 스타일
│   └── middleware.ts             # i18n 미들웨어
│
├── components/                    # React 컴포넌트
│   ├── Header/
│   │   ├── Header.tsx            # 헤더 메인 컴포넌트
│   │   ├── Navigation.tsx        # 네비게이션 메뉴
│   │   └── LanguageSwitcher.tsx  # 언어 전환 버튼
│   ├── Footer/
│   │   └── Footer.tsx            # 푸터 컴포넌트
│   ├── Home/
│   │   ├── Hero.tsx              # Hero 섹션
│   │   └── KeyStrengths.tsx      # 주요 강점 섹션
│   └── Equipment/
│       ├── EquipmentCard.tsx     # Equipment 카드 (목록용)
│       └── EquipmentDetail.tsx  # Equipment 상세 뷰
│
├── lib/                          # 유틸리티 및 설정
│   ├── sanity/
│   │   ├── client.ts            # Sanity 클라이언트 설정
│   │   └── queries.ts           # GROQ 쿼리
│   ├── i18n/
│   │   └── config.ts            # next-intl 설정
│   └── utils.ts                 # 공통 유틸리티
│
├── sanity/                       # Sanity.io 설정
│   ├── schemas/
│   │   ├── equipment.ts         # Equipment 스키마
│   │   └── index.ts             # 스키마 export
│   ├── lib/
│   │   └── client.ts            # Sanity 클라이언트
│   └── sanity.config.ts         # Sanity Studio 설정
│
├── messages/                     # i18n 번역 파일
│   ├── en.json                  # 영어
│   ├── ko.json                  # 한국어
│   └── zh.json                  # 중국어
│
├── public/                       # 정적 파일
│   ├── images/
│   │   ├── logo/
│   │   └── hero/
│   └── favicon.ico
│
├── tailwind.config.ts           # Tailwind 설정 (Luxurious Red 테마)
├── next.config.js               # Next.js 설정 (SSG)
├── postcss.config.js            # PostCSS 설정
├── tsconfig.json                # TypeScript 설정
├── package.json                 # 의존성 관리
└── README.md                    # 프로젝트 문서
```

## 주요 파일 설명

### 1. Tailwind 설정 (`tailwind.config.ts`)
- **Primary Color:** Deep Burgundy (#800020) - Luxurious Red 테마
- **Charcoal:** #1a1a1a - 깊은 검정
- **Metallic:** Silver/Gold 액센트 색상
- 커스텀 애니메이션 (fade-in, slide-up 등)

### 2. 다국어 라우팅 (`app/[locale]/`)
- `next-intl`을 사용한 다국어 지원
- 기본 언어: 영어 (en)
- 지원 언어: 한국어 (ko), 중국어 (zh)

### 3. Sanity CMS (`sanity/schemas/equipment.ts`)
- Equipment 타입 스키마
- 다국어 필드 지원
- 이미지 업로드
- PDF 다운로드 링크
- 상세 스펙 테이블

### 4. 컴포넌트 구조
- **Header:** 로고, 네비게이션, 언어 전환
- **Home:** Hero 섹션, 주요 강점
- **Equipment:** 목록 및 상세 뷰 (CMS 연동)

## 다음 단계

1. ✅ 프로젝트 구조 및 Tailwind 설정 완료
2. ⏳ Next.js 프로젝트 초기화 및 의존성 설치
3. ⏳ i18n 설정 및 미들웨어 구현
4. ⏳ Sanity 스키마 정의
5. ⏳ 기본 레이아웃 (Header/Footer) 구현
6. ⏳ Home 페이지 구현
7. ⏳ Equipment 페이지 구현
