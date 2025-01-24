import type { IMetaDataProduct } from 'fetch/product'
import type { Metadata } from 'next'

import { Container } from 'components/Container'
import { DynamicContent } from 'components/DynamicContent'
import { Products } from 'components/products/Products'
import { Slider } from 'components/Slider'
import { Top } from 'components/Top'
import { getProduct, getProductMeta } from 'fetch/product'
import Image from 'next/image'

interface ProductParams {
  product: string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>
}): Promise<Metadata> {
  const { product } = await params
  const meta = await getProductMeta(product)

  const { metaData, title, description, image }: IMetaDataProduct = meta

  const ogImage = metaData?.ogImage?.url || image?.url

  return {
    title: metaData?.title || title,
    description: metaData?.description || description,
    openGraph: ogImage
      ? {
          images: [ogImage],
        }
      : undefined,
  }
}

export default async function Product({ params }: { params: Promise<ProductParams> }) {
  const { product: slug } = await params
  const product = await getProduct(slug)

  const compareProducts: IShortProduct[] = [
    ...(product.compare?.length
      ? [
          {
            title: product.title,
            description: product.description,
            shortIcon: product.shortIcon,
            slug: '',
            label: product.label,
            Parameters: product.Parameters,
          },
        ]
      : []),
    ...(product.compare || []),
  ]

  return (
    <>
      <Top title={product.title} label={product.description} />
      <section className={'-mt-[220px]'}>
        <Image
          className={'relative z-20 mx-auto'}
          src={product.image.url}
          width={1700}
          height={990}
          alt={product.title}
        />
        <Container size={'lg'}>
          <div className={'relative z-10'}>
            <Slider data={product.benefits} />
          </div>
        </Container>
      </section>
      <DynamicContent data={product.content} />
      <section className={'py-17'}>
        <Container size={'lg'}>
          <h2 className={'text-5xl md:text-8xl text-center mb-10 md:mb-13'}>
            {'How to Choose the Best'}
          </h2>
          <Products data={compareProducts} />
        </Container>
      </section>
    </>
  )
}
