# ATI Corporate Website

Corporate website for ATI (www.ati2000.co.kr) - Semiconductor inspection and metrology equipment manufacturer.

## Tech Stack

- **Framework:** Next.js 14+ (App Router, SSG)
- **Styling:** Tailwind CSS
- **CMS:** Sanity.io
- **i18n:** next-intl (EN, KO, ZH)
- **Animation:** Framer Motion

## Features

✅ **Multilingual Support** - English, Korean, Chinese
✅ **Responsive Design** - Mobile-first approach
✅ **CMS Integration** - Sanity.io for Equipment management
✅ **Static Site Generation** - Optimized performance
✅ **SEO Optimized** - Dynamic metadata for each page
✅ **Modern UI/UX** - Luxurious Red theme with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build (Static Export)

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Sanity Studio

To run Sanity Studio locally:

```bash
cd sanity
npm install
npm run dev
```

Or from project root:

```bash
npm run sanity
```

## Project Structure

```
ati-corporate-website/
├── app/
│   ├── [locale]/          # Multilingual routes
│   │   ├── page.tsx        # Home page
│   │   ├── company/        # Company page
│   │   ├── equipment/      # Equipment pages
│   │   └── contact/        # Contact page
│   ├── layout.tsx          # Root layout
│   └── middleware.ts       # i18n middleware
├── components/
│   ├── Header/             # Header components
│   ├── Footer/             # Footer component
│   ├── Home/               # Home page components
│   └── Equipment/          # Equipment components
├── lib/
│   ├── i18n/               # i18n configuration
│   ├── sanity/             # Sanity client & queries
│   └── utils.ts            # Utility functions
├── sanity/
│   ├── schemas/            # Sanity schemas
│   └── sanity.config.ts    # Sanity Studio config
└── messages/               # Translation files (en/ko/zh)
```

## Pages

- **Home** (`/`) - Hero section, key strengths
- **Company** (`/company`) - About, CEO message, history, global network
- **Equipment** (`/equipment`) - Equipment list (from Sanity CMS)
- **Equipment Detail** (`/equipment/[slug]`) - Individual equipment details
- **Contact** (`/contact`) - Inquiry form, location info

## Color Theme

- **Primary:** Deep Luxurious Red (#800020)
- **Charcoal:** #1a1a1a
- **Metallic:** Silver (#c0c0c0) / Gold (#d4af37) accents

## Sanity CMS Schema

The Equipment schema includes:
- Multilingual name and description
- Main image and gallery
- Specifications table
- PDF document download
- Category and featured flag

## Next Steps

1. Set up Sanity.io project and configure environment variables
2. Add equipment data through Sanity Studio
3. Add actual images and content
4. Configure form submission endpoint for contact page
5. Deploy to production

## License

Private - ATI Corporate Website
