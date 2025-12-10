import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Security: Add secret token for webhook validation
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || 'shuffle-secret-key-2024'

export async function POST(request: NextRequest) {
  try {
    // Verify secret token
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (token !== REVALIDATION_SECRET) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const body = await request.json()

    console.log('[Revalidate] Received webhook:', {
      model: body.model,
      event: body.event,
      timestamp: new Date().toISOString(),
    })

    // Revalidate based on content type
    const model = body.model?.toLowerCase()

    switch (model) {
      case 'homepage':
        revalidatePath('/')
        console.log('[Revalidate] Homepage revalidated')
        break

      case 'product':
      case 'products':
        revalidatePath('/catalog')
        if (body.entry?.slug) {
          revalidatePath(`/${body.entry.slug}`)
          console.log(`[Revalidate] Product /${body.entry.slug} revalidated`)
        }
        break

      case 'catalog':
        revalidatePath('/catalog')
        console.log('[Revalidate] Catalog revalidated')
        break

      case 'article':
      case 'articles':
        if (body.entry?.slug) {
          revalidatePath(`/article/${body.entry.slug}`)
          console.log(`[Revalidate] Article /article/${body.entry.slug} revalidated`)
        }
        break

      case 'compare':
        revalidatePath('/compare')
        console.log('[Revalidate] Compare page revalidated')
        break

      case 'contact':
        revalidatePath('/contact')
        console.log('[Revalidate] Contact page revalidated')
        break

      case 'navigation':
        // Revalidate all pages as navigation appears everywhere
        revalidatePath('/', 'layout')
        console.log('[Revalidate] Navigation - all pages revalidated')
        break

      default:
        // Revalidate everything if unknown type
        revalidatePath('/', 'layout')
        console.log('[Revalidate] Unknown model - all pages revalidated')
    }

    return NextResponse.json({
      revalidated: true,
      model,
      timestamp: Date.now(),
    })
  } catch (err) {
    console.error('[Revalidate] Error:', err)
    return NextResponse.json(
      {
        error: 'Revalidation failed',
        details: err instanceof Error ? err.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'shuffle-client-revalidation',
    timestamp: Date.now(),
  })
}
