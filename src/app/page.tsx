import type { Metadata } from 'next'

import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getHomepage, getHomepageMeta, type IDataHomepage } from 'fetch/homepage'

import { Suspense } from 'react'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
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
}

async function HomepageContent() {
  const homepage: IDataHomepage = await getHomepage()
  return (
    <>
      <Top title={homepage.title} items={homepage.products} />
      <DynamicContent data={homepage.dynamicContent} />
    </>
  )
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-2xl">Loading...</div>
        </div>
      }
    >
      <HomepageContent />
    </Suspense>
  )
}
