# 설비(Equipment) 관리 가이드

설비를 편집하고 추가하는 방법은 두 가지가 있습니다:

## 방법 1: Sanity CMS 사용 (권장)

Sanity CMS를 사용하면 웹 인터페이스에서 쉽게 설비를 관리할 수 있습니다.

### 1. Sanity 프로젝트 설정

1. [sanity.io](https://sanity.io)에서 계정 생성 및 프로젝트 생성
2. 프로젝트 ID 확인
3. `.env.local` 파일 생성 및 설정:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 2. Sanity Studio 접속

개발 서버 실행 후:
```bash
npm run dev
```

브라우저에서 다음 주소로 접속:
- **Sanity Studio:** http://localhost:3000/studio

### 3. 설비 추가/편집

1. Sanity Studio에서 "Equipment" 메뉴 클릭
2. "Create new" 버튼으로 새 설비 추가
3. 또는 기존 설비를 클릭하여 편집

### 4. 입력 필드

각 설비에 다음 정보를 입력할 수 있습니다:

- **이름 (Name)**: 다국어 지원 (영어, 한국어, 중국어)
- **Slug**: URL에 사용될 고유 식별자 (자동 생성 가능)
- **메인 이미지 (Main Image)**: 대표 이미지 업로드
- **이미지 갤러리 (Gallery)**: 추가 이미지들
- **설명 (Description)**: 다국어 설명
- **사양 (Specifications)**: 기술 사양 테이블
- **PDF 문서**: 다운로드 가능한 PDF 파일
- **카테고리**: Inspection, Metrology, Other
- **추천 (Featured)**: 홈페이지에 표시할지 여부

## 방법 2: 샘플 데이터 파일 직접 수정

Sanity CMS를 사용하지 않는 경우, 샘플 데이터 파일을 직접 수정할 수 있습니다.

### 파일 위치

```
lib/data/sample-equipment.ts
```

### 설비 추가 예시

```typescript
{
  _id: '6', // 고유 ID (숫자 또는 문자열)
  name: {
    en: 'New Equipment Name',
    ko: '새 설비 이름',
    zh: '新设备名称',
  },
  slug: {
    current: 'new-equipment-slug', // URL에 사용될 slug
  },
  mainImage: null, // 이미지는 public/images/equipment/에 추가
  category: 'inspection', // 'inspection', 'metrology', 'other'
  description: {
    en: 'English description here...',
    ko: '한국어 설명을 여기에...',
    zh: '中文描述在这里...',
  },
  specifications: [
    { 
      label: { 
        en: 'Specification Name', 
        ko: '사양 이름', 
        zh: '规格名称' 
      }, 
      value: 'Specification Value' 
    },
    // 추가 사양...
  ],
}
```

### 설비 편집

1. `lib/data/sample-equipment.ts` 파일 열기
2. 수정할 설비 객체 찾기
3. 필요한 필드 수정
4. 저장 후 브라우저 새로고침

### 이미지 추가

1. 이미지 파일을 `public/images/equipment/` 디렉토리에 추가
2. 파일명 예: `equipment-1.jpg`, `equipment-2.jpg` 등
3. 코드에서 이미지 경로 참조:

```typescript
mainImage: {
  asset: {
    url: '/images/equipment/equipment-1.jpg'
  }
}
```

## 권장 방법

**Sanity CMS 사용을 권장합니다:**
- ✅ 웹 인터페이스로 쉽게 관리
- ✅ 이미지 업로드 및 최적화 자동 처리
- ✅ 개발자 없이도 콘텐츠 관리 가능
- ✅ 버전 관리 및 협업 기능
- ✅ 실시간 미리보기

## 현재 상태

현재 프로젝트는 **샘플 데이터 모드**로 작동 중입니다:
- Sanity가 설정되지 않으면 `lib/data/sample-equipment.ts`의 데이터가 표시됩니다
- Sanity가 설정되면 Sanity 데이터가 우선적으로 표시됩니다

## 빠른 시작 (샘플 데이터 수정)

1. `lib/data/sample-equipment.ts` 파일 열기
2. `sampleEquipment` 배열에 새 객체 추가 또는 기존 객체 수정
3. 개발 서버 재시작 (필요한 경우)
4. 브라우저에서 http://localhost:3000/en/equipment/ 확인

## 주의사항

- `_id`는 고유해야 합니다
- `slug.current`는 URL에 사용되므로 고유하고 URL-safe해야 합니다
- 이미지는 `public/images/equipment/` 디렉토리에 저장
- 다국어 필드는 모든 언어(EN/KO/ZH)를 채우는 것을 권장합니다
