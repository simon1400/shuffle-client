import type { IMetaDataArticle } from 'fetch/article'
import type { Metadata } from 'next'

import { Container } from 'components/Container'
import { DynamicContent } from 'components/DynamicContent'
import { Top } from 'components/Top'
import { getArticle, getArticleMeta } from 'fetch/article'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = await getArticleMeta(slug)

  if (!meta) {
    return {
      title: 'Article Not Found | Shuffle King',
    }
  }

  const { metaData, title }: IMetaDataArticle = meta

  return {
    title: `${metaData?.title || title} | Shuffle King`,
    description: metaData?.description || '',
    openGraph: metaData?.ogImage?.url
      ? {
          images: [metaData.ogImage.url],
        }
      : undefined,
  }
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Top title={article.title} bigContentTest={article.fullContentTest} />
      <section>
        <Container size={'lg'}>
          <Image src={article.fullMedia.url} width={1400} height={800} alt={article.title} />
        </Container>
      </section>
      <DynamicContent data={article.dynamicComponents} />
    </>
  )
}
