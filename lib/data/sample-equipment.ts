// 샘플 Equipment 데이터 (Sanity CMS가 설정되지 않은 경우 사용)
export const sampleEquipment = [
  {
    _id: '1',
    name: {
      en: 'Wafer Inspection System',
      ko: '웨이퍼 검사 시스템',
      zh: '晶圆检测系统',
    },
    slug: {
      current: 'wafer-inspection-system',
    },
    mainImage: null,
    category: 'inspection',
    description: {
      en: 'Advanced automated wafer inspection system for detecting defects and ensuring quality in semiconductor manufacturing processes.',
      ko: '반도체 제조 공정에서 결함을 검출하고 품질을 보장하는 고급 자동화 웨이퍼 검사 시스템입니다.',
      zh: '用于检测缺陷并确保半导体制造过程质量的高级自动化晶圆检测系统。',
    },
    specifications: [
      { label: { en: 'Inspection Speed', ko: '검사 속도', zh: '检测速度' }, value: 'Up to 100 wafers/hour' },
      { label: { en: 'Resolution', ko: '해상도', zh: '分辨率' }, value: '0.1μm' },
      { label: { en: 'Wafer Size', ko: '웨이퍼 크기', zh: '晶圆尺寸' }, value: '200mm, 300mm' },
      { label: { en: 'Defect Detection', ko: '결함 검출', zh: '缺陷检测' }, value: 'Sub-micron level' },
    ],
  },
  {
    _id: '2',
    name: {
      en: 'Metrology System',
      ko: '계측 시스템',
      zh: '计量系统',
    },
    slug: {
      current: 'metrology-system',
    },
    mainImage: null,
    category: 'metrology',
    description: {
      en: 'Precision metrology system for measuring critical dimensions, overlay, and film thickness in semiconductor devices.',
      ko: '반도체 소자의 중요 치수, 오버레이, 막 두께를 측정하는 정밀 계측 시스템입니다.',
      zh: '用于测量半导体器件关键尺寸、叠加和薄膜厚度的精密计量系统。',
    },
    specifications: [
      { label: { en: 'Measurement Accuracy', ko: '측정 정확도', zh: '测量精度' }, value: '±0.5nm' },
      { label: { en: 'Throughput', ko: '처리량', zh: '吞吐量' }, value: '50 wafers/hour' },
      { label: { en: 'Measurement Range', ko: '측정 범위', zh: '测量范围' }, value: '1nm - 10μm' },
      { label: { en: 'Technology', ko: '기술', zh: '技术' }, value: 'Optical, X-ray' },
    ],
  },
  {
    _id: '3',
    name: {
      en: 'Defect Inspection System',
      ko: '결함 검사 시스템',
      zh: '缺陷检测系统',
    },
    slug: {
      current: 'defect-inspection-system',
    },
    mainImage: null,
    category: 'inspection',
    description: {
      en: 'High-speed defect inspection system with advanced image processing for identifying and classifying defects in semiconductor wafers.',
      ko: '고급 이미지 처리 기술을 활용한 고속 결함 검사 시스템으로 반도체 웨이퍼의 결함을 식별하고 분류합니다.',
      zh: '采用先进图像处理技术的高速缺陷检测系统，用于识别和分类半导体晶圆中的缺陷。',
    },
    specifications: [
      { label: { en: 'Inspection Speed', ko: '검사 속도', zh: '检测速度' }, value: '120 wafers/hour' },
      { label: { en: 'Sensitivity', ko: '감도', zh: '灵敏度' }, value: '0.05μm' },
      { label: { en: 'Defect Types', ko: '결함 유형', zh: '缺陷类型' }, value: 'Particle, Pattern, Scratch' },
      { label: { en: 'Classification', ko: '분류', zh: '分类' }, value: 'AI-based automatic' },
    ],
  },
  {
    _id: '4',
    name: {
      en: 'Film Thickness Measurement System',
      ko: '막 두께 측정 시스템',
      zh: '薄膜厚度测量系统',
    },
    slug: {
      current: 'film-thickness-measurement',
    },
    mainImage: null,
    category: 'metrology',
    description: {
      en: 'Non-contact film thickness measurement system using ellipsometry and reflectometry for accurate thin film characterization.',
      ko: '타원 편광법과 반사율 측정법을 사용하는 비접촉식 막 두께 측정 시스템으로 정확한 박막 특성 분석을 제공합니다.',
      zh: '使用椭圆偏振法和反射率测量法的非接触式薄膜厚度测量系统，用于精确的薄膜特性分析。',
    },
    specifications: [
      { label: { en: 'Measurement Range', ko: '측정 범위', zh: '测量范围' }, value: '1nm - 10μm' },
      { label: { en: 'Accuracy', ko: '정확도', zh: '精度' }, value: '±0.1nm' },
      { label: { en: 'Measurement Time', ko: '측정 시간', zh: '测量时间' }, value: '< 1 second' },
      { label: { en: 'Film Types', ko: '막 유형', zh: '薄膜类型' }, value: 'SiO2, SiN, Metal, Resist' },
    ],
  },
  {
    _id: '5',
    name: {
      en: 'Surface Profiler',
      ko: '표면 프로파일러',
      zh: '表面轮廓仪',
    },
    slug: {
      current: 'surface-profiler',
    },
    mainImage: null,
    category: 'metrology',
    description: {
      en: 'High-precision 3D surface profiler for measuring surface roughness, step height, and topography of semiconductor wafers.',
      ko: '반도체 웨이퍼의 표면 거칠기, 스텝 높이, 지형을 측정하는 고정밀 3D 표면 프로파일러입니다.',
      zh: '用于测量半导体晶圆表面粗糙度、台阶高度和形貌的高精度3D表面轮廓仪。',
    },
    specifications: [
      { label: { en: 'Vertical Resolution', ko: '수직 해상도', zh: '垂直分辨率' }, value: '0.1nm' },
      { label: { en: 'Lateral Resolution', ko: '수평 해상도', zh: '横向分辨率' }, value: '0.5μm' },
      { label: { en: 'Scan Area', ko: '스캔 영역', zh: '扫描区域' }, value: 'Up to 200mm × 200mm' },
      { label: { en: 'Measurement Mode', ko: '측정 모드', zh: '测量模式' }, value: 'Contact, Non-contact' },
    ],
  },
]
