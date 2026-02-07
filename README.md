# ATI 기업 웹사이트

ATI (www.ati2000.co.kr) 기업 웹사이트 - 반도체 검사 및 계측 장비 제조업체

## 기술 스택

- **프레임워크:** Next.js 14+ (App Router, SSG)
- **스타일링:** Tailwind CSS
- **CMS:** Sanity.io
- **다국어:** next-intl (영어, 한국어, 중국어)
- **애니메이션:** Framer Motion

## 주요 기능

✅ **다국어 지원** - 영어, 한국어, 중국어
✅ **반응형 디자인** - 모바일 우선 접근 방식
✅ **CMS 통합** - Sanity.io를 통한 Equipment 관리
✅ **정적 사이트 생성** - 최적화된 성능
✅ **SEO 최적화** - 각 페이지별 동적 메타데이터
✅ **현대적인 UI/UX** - Luxurious Red 테마와 부드러운 애니메이션

## 시작하기

### 사전 요구사항

- Node.js 18+
- npm 또는 yarn

### 의존성 설치

```bash
npm install
```

### 환경 변수 설정

`.env.local` 파일을 생성하세요:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어주세요.

### 빌드 (정적 내보내기)

```bash
npm run build
```

정적 파일은 `out/` 디렉토리에 생성됩니다.

### Sanity Studio

Sanity Studio를 로컬에서 실행하려면:

```bash
cd sanity
npm install
npm run dev
```

또는 프로젝트 루트에서:

```bash
npm run sanity
```

## 프로젝트 구조

```
ati-corporate-website/
├── app/
│   ├── [locale]/          # 다국어 라우팅
│   │   ├── page.tsx        # 홈 페이지
│   │   ├── company/        # 회사 소개 페이지
│   │   ├── equipment/      # 장비 페이지
│   │   └── contact/        # 문의 페이지
│   ├── layout.tsx          # 루트 레이아웃
│   └── middleware.ts       # i18n 미들웨어
├── components/
│   ├── Header/             # 헤더 컴포넌트
│   ├── Footer/             # 푸터 컴포넌트
│   ├── Home/               # 홈 페이지 컴포넌트
│   └── Equipment/          # 장비 컴포넌트
├── lib/
│   ├── i18n/               # i18n 설정
│   ├── sanity/             # Sanity 클라이언트 및 쿼리
│   ├── data/               # 샘플 데이터
│   └── utils.ts            # 유틸리티 함수
├── sanity/
│   ├── schemas/            # Sanity 스키마
│   └── sanity.config.ts    # Sanity Studio 설정
└── messages/               # 번역 파일 (en/ko/zh)
```

## 페이지

- **홈** (`/`) - 히어로 섹션, 주요 강점
- **회사 소개** (`/company`) - 회사 소개, CEO 메시지, 연혁, 글로벌 네트워크
- **장비** (`/equipment`) - 장비 목록 (Sanity CMS 또는 샘플 데이터)
- **장비 상세** (`/equipment/[slug]`) - 개별 장비 상세 정보
- **문의하기** (`/contact`) - 문의 양식, 위치 정보

## 색상 테마

- **Primary:** Deep Luxurious Red (#800020)
- **Charcoal:** #1a1a1a
- **Metallic:** Silver (#c0c0c0) / Gold (#d4af37) 액센트

## Sanity CMS 스키마

Equipment 스키마에는 다음이 포함됩니다:
- 다국어 이름 및 설명
- 메인 이미지 및 갤러리
- 사양 테이블
- PDF 문서 다운로드
- 카테고리 및 추천 플래그

## 샘플 데이터

Sanity CMS가 설정되지 않은 경우, 5개의 샘플 장비 데이터가 자동으로 표시됩니다:
1. Wafer Inspection System (웨이퍼 검사 시스템)
2. Metrology System (계측 시스템)
3. Defect Inspection System (결함 검사 시스템)
4. Film Thickness Measurement System (막 두께 측정 시스템)
5. Surface Profiler (표면 프로파일러)

## 다음 단계

1. Sanity.io 프로젝트 설정 및 환경 변수 구성
2. Sanity Studio를 통해 장비 데이터 추가
3. 실제 이미지 및 콘텐츠 추가
4. 문의 양식 제출 엔드포인트 구성
5. 프로덕션 배포

## 라이선스

프라이빗 - ATI 기업 웹사이트
