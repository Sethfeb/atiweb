import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// projectId가 없으면 기본값 사용 (빌드 에러 방지)
export default defineConfig({
  name: 'ati-corporate',
  title: 'ATI Corporate CMS',
  projectId: projectId || 'placeholder',
  dataset: dataset,
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  // Enable if you want to use the vision tool
  // plugins: [structureTool(), visionTool()],
})
