import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import NewsDetailClient from './NewsDetailClient'

// 샘플 뉴스 데이터 (실제로는 Sanity CMS나 API에서 가져옴)
const newsData = [
  {
    id: 1,
    date: '2024-12-15',
    category: 'Press Release',
    title: 'ATI Announces Record Q4 2024 Financial Results',
    summary: 'ATI reports strong quarterly performance with revenue growth of 25% year-over-year.',
    content: `
      <p>ATI (Advanced Technology & Innovation) today announced its financial results for the fourth quarter ended December 31, 2024.</p>
      <p>The company reported record revenue of $50 million, representing a 25% increase compared to the same period last year. This growth was driven by strong demand for our advanced semiconductor inspection and metrology equipment.</p>
      <p>"We are pleased with our strong performance in Q4," said the CEO. "Our innovative technology solutions continue to gain traction in the global semiconductor market."</p>
      <p>Key highlights:</p>
      <ul>
        <li>Revenue: $50 million (up 25% YoY)</li>
        <li>Operating income: $12 million</li>
        <li>New orders: $55 million</li>
      </ul>
    `,
  },
  {
    id: 2,
    date: '2024-11-20',
    category: 'News',
    title: 'ATI Launches Next-Generation Wafer Inspection System',
    summary: 'New advanced inspection system offers improved accuracy and throughput for semiconductor manufacturers.',
    content: `
      <p>ATI today announced the launch of its next-generation wafer inspection system, designed to meet the increasing demands of advanced semiconductor manufacturing.</p>
      <p>The new system features:</p>
      <ul>
        <li>50% faster inspection speed</li>
        <li>Sub-micron defect detection capability</li>
        <li>AI-powered automatic classification</li>
        <li>Enhanced throughput for 300mm wafers</li>
      </ul>
      <p>This breakthrough technology will help semiconductor manufacturers improve yield and reduce production costs.</p>
    `,
  },
  {
    id: 3,
    date: '2024-10-10',
    category: 'Press Release',
    title: 'ATI Expands Global Operations with New Asia-Pacific Office',
    summary: 'Company opens new regional office in Singapore to better serve customers in the Asia-Pacific region.',
    content: `
      <p>ATI announced today the opening of its new Asia-Pacific regional office in Singapore, strengthening its presence in one of the world's fastest-growing semiconductor markets.</p>
      <p>The new office will provide:</p>
      <ul>
        <li>Local sales and support services</li>
        <li>Technical training and consultation</li>
        <li>Faster response times for regional customers</li>
      </ul>
    `,
  },
  {
    id: 4,
    date: '2024-09-05',
    category: 'News',
    title: 'ATI Receives Industry Recognition for Innovation',
    summary: 'Company honored for outstanding contributions to semiconductor inspection technology.',
    content: `
      <p>ATI has been recognized by the Semiconductor Equipment and Materials International (SEMI) organization for its innovative contributions to the industry.</p>
      <p>The award recognizes ATI's breakthrough in metrology technology that enables more precise measurements at the nanoscale level.</p>
    `,
  },
  {
    id: 5,
    date: '2024-08-18',
    category: 'Press Release',
    title: 'ATI Reports Strong Q2 2024 Results',
    summary: 'Second quarter results demonstrate continued growth and market leadership.',
    content: `
      <p>ATI reported strong financial results for the second quarter of 2024, with revenue of $45 million, up 20% from the previous year.</p>
      <p>The company's continued investment in R&D and expansion of its product portfolio has contributed to this strong performance.</p>
    `,
  },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}): Promise<Metadata> {
  const { id, locale } = await params
  const news = newsData.find((item) => item.id === parseInt(id))
  
  if (!news) {
    return {
      title: 'News Not Found | ATI',
    }
  }

  return {
    title: `${news.title} | ATI News`,
    description: news.summary,
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id, locale } = await params
  setRequestLocale(locale)
  
  const news = newsData.find((item) => item.id === parseInt(id))
  
  if (!news) {
    notFound()
  }

  return <NewsDetailClient news={news} />
}
