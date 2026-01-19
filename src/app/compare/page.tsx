import type { Metadata } from 'next'

import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getCompare, getCompareMeta } from 'fetch/compare'

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getCompareMeta()

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

export default async function Compare() {
  const compare = await getCompare()
  return (
    <>
      <Top title={compare.title} bigContent={compare.contentText} />
      <DynamicContent data={compare.dynamicContent} />
    </>
  )
}
