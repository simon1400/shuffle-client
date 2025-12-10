import type { Metadata } from 'next'

import { ArticleShort } from 'components/ArticleShort'
import { Container } from 'components/Container'
import { Top } from 'components/Top'
import { getCatalog, getCatalogMeta } from 'fetch/catalog'
import { getAllProducts } from 'fetch/product'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getCatalogMeta()

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

export default async function Catalog() {
  const catalog = await getCatalog()
  const products = await getAllProducts()
  return (
    <>
      <Top title={catalog.title} content={catalog.content} />
      <section className={'py-[110px]'}>
        <Container size={'lg'}>
          {products.map((product, idx: number) => (
            <ArticleShort
              key={product.title}
              data={product}
              product
              subHead={product.description}
              reverse={!!(idx % 2)}
            />
          ))}
        </Container>
      </section>
    </>
  )
}
