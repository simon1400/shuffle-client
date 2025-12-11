import type { IDataHomepage } from 'fetch/homepage'
import type { Metadata } from 'next'

import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getHomepage, getHomepageMeta } from 'fetch/homepage'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic' // Skip static generation, render on-demand
export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  try {
    const meta = await getHomepageMeta()
    return {
      title: `${meta.metaData?.title || meta.title} | Shuffle King`,
      description: meta.metaData?.description || '',
      openGraph: meta.metaData?.ogImage
        ? {
            images: [meta.metaData.ogImage.url],
          }
        : null,
    }
  } catch (error) {
    console.error('Failed to fetch metadata:', error)
    return {
      title: 'Shuffle King',
      description: 'Shuffle King - информация о конопи',
    }
  }
}

async function HomepageContent() {
  try {
    const homepage: IDataHomepage = await getHomepage()
    return (
      <>
        <Top title={homepage.title} items={homepage.products} />
        <DynamicContent data={homepage.dynamicContent} />
      </>
    )
  } catch (error) {
    console.error('Failed to fetch homepage data:', error)
    return (
      <div className={'min-h-screen flex items-center justify-center'}>
        <div className={'text-center'}>
          <h1 className={'text-2xl font-bold mb-4'}>{'Shuffle King'}</h1>
          <p className={'text-gray-600'}>{'Стра ница временно недоступна'}</p>
        </div>
      </div>
    )
  }
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className={'min-h-screen flex items-center justify-center'}>
          <div className={'animate-pulse text-2xl'}>{'Loading...'}</div>
        </div>
      }
    >
      <HomepageContent />
    </Suspense>
  )
}
