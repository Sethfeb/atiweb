# Investor & News 관리 가이드

Investor 페이지의 주가 정보와 News 페이지의 뉴스 항목을 편집하고 추가하는 방법입니다.

## 방법 1: 코드 파일 직접 수정 (현재 방식)

### Investor 페이지 - 주가 정보 수정

**파일 위치:** `app/[locale]/investors/InvestorsClient.tsx`

**주가 정보 수정:**
```typescript
const stockInfo = {
  symbol: 'ATI',              // 주식 심볼
  exchange: 'KRX',            // 거래소 (KRX, NASDAQ, NYSE 등)
  currentPrice: '12,500',     // 현재 주가
  change: '+250',             // 변동액 (+ 또는 -)
  changePercent: '+2.04%',    // 변동률
}
```

**재무 보고서 추가/수정:**
```typescript
const financialReports = [
  { 
    year: '2024', 
    quarter: 'Q4', 
    date: '2024-12-31', 
    type: 'Annual Report' 
  },
  // 새 보고서 추가
  { 
    year: '2025', 
    quarter: 'Q1', 
    date: '2025-03-31', 
    type: 'Quarterly Report' 
  },
]
```

### News 페이지 - 뉴스 항목 추가/수정

**파일 위치:** `app/[locale]/news/NewsClient.tsx`

**뉴스 항목 추가:**
```typescript
const newsItems = [
  {
    id: 1,  // 고유 ID (숫자)
    date: '2024-12-15',  // 날짜 (YYYY-MM-DD 형식)
    category: 'Press Release',  // 'Press Release' 또는 'News'
    title: '뉴스 제목',
    summary: '뉴스 요약 내용',
  },
  // 새 뉴스 추가
  {
    id: 6,  // 다음 ID 번호
    date: '2025-01-10',
    category: 'News',
    title: '새로운 뉴스 제목',
    summary: '새로운 뉴스 요약',
  },
]
```

**Read More 기능 구현:**

현재는 버튼만 있고 실제 링크가 없습니다. 다음 방법으로 구현할 수 있습니다:

1. **상세 페이지로 이동:**
```typescript
// app/[locale]/news/[id]/page.tsx 파일 생성 후
<Link href={`/${locale}/news/${item.id}`}>
  <button className="...">
    {t('readMore')}
  </button>
</Link>
```

2. **외부 링크로 이동:**
```typescript
<a 
  href="https://example.com/news/1" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-6 py-2 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
>
  {t('readMore')}
</a>
```

3. **모달로 상세 내용 표시:**
```typescript
const [selectedNews, setSelectedNews] = useState(null)

// 버튼 클릭 시
<button onClick={() => setSelectedNews(item)}>
  {t('readMore')}
</button>

// 모달 컴포넌트 추가
{selectedNews && (
  <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
)}
```

## 방법 2: Sanity CMS 통합 (권장)

더 체계적인 관리를 위해 Sanity CMS를 사용할 수 있습니다.

### Sanity Schema 추가

**`sanity/schemas/news.ts` 생성:**
```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'string' },
        { name: 'ko', title: 'Korean', type: 'string' },
        { name: 'zh', title: 'Chinese', type: 'string' },
      ],
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Press Release', value: 'Press Release' },
          { title: 'News', value: 'News' },
        ],
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'text' },
        { name: 'ko', title: 'Korean', type: 'text' },
        { name: 'zh', title: 'Chinese', type: 'text' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'object',
      fields: [
        { name: 'en', title: 'English', type: 'blockContent' },
        { name: 'ko', title: 'Korean', type: 'blockContent' },
        { name: 'zh', title: 'Chinese', type: 'blockContent' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Optional external link for read more',
    }),
  ],
})
```

**`sanity/schemas/stockInfo.ts` 생성:**
```typescript
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stockInfo',
  title: 'Stock Information',
  type: 'document',
  fields: [
    defineField({
      name: 'symbol',
      title: 'Stock Symbol',
      type: 'string',
    }),
    defineField({
      name: 'exchange',
      title: 'Exchange',
      type: 'string',
    }),
    defineField({
      name: 'currentPrice',
      title: 'Current Price',
      type: 'string',
    }),
    defineField({
      name: 'change',
      title: 'Change',
      type: 'string',
    }),
    defineField({
      name: 'changePercent',
      title: 'Change Percent',
      type: 'string',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
    }),
  ],
})
```

## 빠른 수정 가이드

### 주가 정보 업데이트

1. `app/[locale]/investors/InvestorsClient.tsx` 파일 열기
2. `stockInfo` 객체 찾기 (약 10번째 줄)
3. 값 수정:
   ```typescript
   const stockInfo = {
     symbol: 'ATI',
     exchange: 'KRX',
     currentPrice: '15,000',  // 새 가격으로 변경
     change: '+500',
     changePercent: '+3.45%',
   }
   ```
4. 저장 후 브라우저 새로고침

### 뉴스 항목 추가

1. `app/[locale]/news/NewsClient.tsx` 파일 열기
2. `newsItems` 배열 찾기 (약 10번째 줄)
3. 새 항목 추가:
   ```typescript
   const newsItems = [
     // 기존 항목들...
     {
       id: 6,  // 고유 ID
       date: '2025-01-15',
       category: 'Press Release',
       title: '새로운 뉴스 제목',
       summary: '뉴스 요약 내용',
     },
   ]
   ```
4. 저장 후 브라우저 새로고침

### Read More 기능 추가

**옵션 1: 상세 페이지 생성**

1. `app/[locale]/news/[id]/page.tsx` 파일 생성
2. 뉴스 ID로 상세 정보 표시
3. `NewsClient.tsx`에서 Link 추가:
   ```typescript
   import Link from 'next/link'
   
   <Link href={`/${locale}/news/${item.id}`}>
     <button className="...">
       {t('readMore')}
     </button>
   </Link>
   ```

**옵션 2: 외부 링크 추가**

`newsItems`에 `link` 필드 추가:
```typescript
{
  id: 1,
  date: '2024-12-15',
  category: 'Press Release',
  title: 'ATI Announces Record Q4 2024 Financial Results',
  summary: '...',
  link: 'https://example.com/news/1',  // 추가
}
```

그리고 버튼을 링크로 변경:
```typescript
<a 
  href={item.link || '#'} 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-6 py-2 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
>
  {t('readMore')}
</a>
```

## 자동화 옵션

### 주가 정보 자동 업데이트

실시간 주가 API를 연동할 수 있습니다:

```typescript
// lib/api/stock.ts
export async function getStockInfo() {
  // 외부 API 호출 (예: 한국거래소 API, Yahoo Finance 등)
  const response = await fetch('https://api.example.com/stock/ATI')
  const data = await response.json()
  
  return {
    symbol: 'ATI',
    exchange: 'KRX',
    currentPrice: data.price,
    change: data.change,
    changePercent: data.changePercent,
  }
}
```

### 뉴스 RSS 피드 연동

RSS 피드를 자동으로 가져올 수 있습니다:

```typescript
// lib/api/news.ts
export async function getNewsFromRSS() {
  // RSS 피드 파싱
  // 또는 외부 API 호출
}
```

## 주의사항

- 주가 정보는 실시간으로 변동하므로, 자동 업데이트 기능을 고려하세요
- 뉴스 항목의 ID는 고유해야 합니다
- 날짜 형식은 `YYYY-MM-DD`를 유지하세요
- 카테고리는 'Press Release' 또는 'News'만 사용하세요
