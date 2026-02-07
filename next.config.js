/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to enable Sanity Studio
  // output: 'export', // Uncomment for static export only
  images: {
    // unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  trailingSlash: true,
  // i18n is handled by next-intl middleware
}

module.exports = nextConfig
