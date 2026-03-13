/* eslint-disable ts/no-require-imports */
import type { NextConfig } from 'next'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Skip build-time errors from Strapi API - render pages on-demand with ISR
  skipTrailingSlashRedirect: false,
  skipMiddlewareUrlNormalize: false,
  experimental: {
    optimizePackageImports: ['react-icons', 'swiper', 'html-react-parser'],
  },
}

export default withBundleAnalyzer(nextConfig)
