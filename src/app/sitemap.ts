import type { MetadataRoute } from 'next'

import { getArticleSlugs } from '../fetch/article'
import { getProductSlugs } from '../fetch/product'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://shuffleking.com'

// Same caching as pages (see layout.tsx); errors are thrown so a failed refresh
// keeps the previous sitemap instead of caching one without products
export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [productSlugs, articleSlugs] = await Promise.all([getProductSlugs(), getArticleSlugs()])

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/catalog`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/article/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...articleRoutes]
}
