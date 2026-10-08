import type { NextRequest } from 'next/server'

import { getArticleSlugs } from 'fetch/article'
import { getProductSlugs } from 'fetch/product'
import { revalidatePath } from 'next/cache'
import { after, NextResponse } from 'next/server'

// Security: Add secret token for webhook validation
// No fallback: without REVALIDATION_SECRET every request is rejected
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET

const STATIC_PATHS = ['/', '/catalog', '/compare', '/contact', '/sitemap.xml']

// Strapi webhook (entry/media events). Any change refreshes the whole site:
// products, navigation and global blocks are shown on many pages, and content
// changes rarely, so per-model revalidation is not worth the risk of a stale page.
export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '')

  if (!REVALIDATION_SECRET || token !== REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  // After revalidatePath the cached page is dropped and the next request renders it
  // synchronously, so with Strapi down the site would answer 500. Check Strapi first
  // and keep the cache if it is unreachable (the daily revalidation will catch up).
  let paths: string[]
  try {
    const [products, articles] = await Promise.all([getProductSlugs(), getArticleSlugs()])
    paths = [
      ...STATIC_PATHS,
      ...products.map((slug) => `/${slug}`),
      ...articles.map((slug) => `/article/${slug}`),
    ]
  } catch {
    return NextResponse.json({ error: 'Strapi is unavailable, cache kept' }, { status: 503 })
  }

  const body = await request.json().catch(() => ({}))

  revalidatePath('/', 'layout')
  revalidatePath('/sitemap.xml')

  // Re-render every page right away while Strapi is known to be up,
  // so visitors never get an uncached page
  const origin = `http://127.0.0.1:${process.env.PORT || 3000}`
  after(async () => {
    for (const path of paths) await fetch(origin + path, { cache: 'no-store' }).catch(() => {})
  })

  return NextResponse.json({
    revalidated: true,
    pages: paths.length,
    model: body.model,
    event: body.event,
    timestamp: Date.now(),
  })
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'shuffle-client-revalidation',
    timestamp: Date.now(),
  })
}
