import type { IDataHomepage } from 'fetch/homepage'
import type { Metadata } from 'next'

import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getHomepage, getHomepageMeta } from 'fetch/homepage'

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getHomepageMeta()

  return {
    title: meta.metaData?.title || meta.title,
    description: meta.metaData?.description || '',
    openGraph: meta.metaData?.ogImage
      ? {
          images: [meta.metaData.ogImage.url],
        }
      : null,
  }
}

export default async function Home() {
  const homepage: IDataHomepage = await getHomepage()
  return (
    <>
      <Top title={homepage.title} items={homepage.products} />
      <DynamicContent data={homepage.dynamicContent} />
    </>
  )
}
