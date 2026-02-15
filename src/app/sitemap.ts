import type { MetadataRoute } from 'next'

import { Axios } from '../lib/api'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://shuffleking.com'

async function getAllProductSlugs(): Promise<string[]> {
  try {
    const data: { slug: string }[] = await Axios.get('/api/products?fields[0]=slug')
    return data.map((p) => p.slug)
  } catch {
    return []
  }
}

async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const data: { slug: string }[] = await Axios.get('/api/articles?fields[0]=slug')
    return data.map((a) => a.slug)
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [productSlugs, articleSlugs] = await Promise.all([
    getAllProductSlugs(),
    getAllArticleSlugs(),
  ])

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
