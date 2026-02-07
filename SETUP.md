# ATI Corporate Website - 설치 가이드

## 사전 요구사항

- Node.js 18+ 
- npm 또는 yarn

## 설치 단계

### 1. npm 캐시 권한 문제 해결 (필요한 경우)

만약 npm 설치 중 권한 오류가 발생하면 다음 명령어를 실행하세요:

```bash
sudo chown -R $(whoami) ~/.npm
```

### 2. 의존성 설치

```bash
cd /Users/seth/ati-corporate-website
npm install
```

### 3. 환경 변수 설정

`.env.local` 파일을 생성하고 Sanity 설정을 추가하세요:

```bash
cp .env.local.example .env.local
```

`.env.local` 파일을 편집하여 Sanity 프로젝트 정보를 입력:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Sanity Studio 설정 (선택사항)

Sanity Studio를 사용하려면:

```bash
cd sanity
npm install -g @sanity/cli
sanity init
```

또는 프로젝트 루트에서:

```bash
npm run sanity
```

### 5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

### 6. 빌드 (Static Export)

```bash
npm run build
```

빌드된 파일은 `out/` 디렉토리에 생성됩니다.

## 프로젝트 구조

- `app/[locale]/` - 다국어 라우팅 페이지
- `components/` - React 컴포넌트
- `lib/` - 유틸리티 및 설정
- `sanity/` - Sanity CMS 스키마
- `messages/` - i18n 번역 파일

## 주요 기능

✅ Next.js 14+ App Router (SSG)
✅ 다국어 지원 (EN, KO, ZH)
✅ Tailwind CSS (Luxurious Red 테마)
✅ Framer Motion 애니메이션
✅ Sanity.io CMS 연동 준비
✅ 반응형 디자인
✅ 모바일 메뉴

## 다음 단계

1. Sanity 프로젝트 생성 및 설정
2. Equipment 데이터 추가
3. 실제 이미지 및 콘텐츠 추가
4. SEO 최적화
5. 성능 최적화
