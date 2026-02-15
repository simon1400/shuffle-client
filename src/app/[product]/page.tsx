/* eslint-disable import/order */
import type { IMetaDataProduct } from 'fetch/product'
import type { Metadata } from 'next'

import { Container } from 'components/Container'
import { DynamicContent } from 'components/DynamicContent'
import { Products } from 'components/products/Products'
import { Slider } from 'components/Slider'
import { Top } from 'components/Top'
import { getProduct, getProductMeta } from 'fetch/product'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ProductParams {
  product: string
}

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>
}): Promise<Metadata> {
  const { product } = await params
  const meta = await getProductMeta(product)

  if (!meta) {
    return {
      title: 'Product Not Found | Shuffle King',
    }
  }

  const { metaData, title, description, image }: IMetaDataProduct = meta

  const ogImage = metaData?.ogImage?.url || image?.url

  return {
    title: `${metaData?.title || title} | Shuffle King`,
    description: metaData?.description || description,
    alternates: {
      canonical: `/${product}`,
      languages: {
        en: `/${product}`,
        'x-default': `/${product}`,
      },
    },
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

  if (!product) {
    notFound()
  }

  const showCompare = product.showCompare !== false

  const compareProducts: IShortProduct[] = [
    ...(product.compare?.length > 0
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
        <div className={'overflow-x-hidden md:overflow-visible'}>
          <Image
            className={
              'relative z-20 block w-[140%] max-w-none ml-[50%] -translate-x-1/2 md:w-full md:max-w-full md:ml-auto md:translate-x-0 md:mx-auto'
            }
            src={product.image.url}
            width={1700}
            height={990}
            alt={product.title}
          />
        </div>
        <Container size={'lg'}>
          <div className={'relative z-10'}>
            <Slider data={product.benefits} />
          </div>
        </Container>
      </section>
      <DynamicContent data={product.content} />
      {showCompare && (
        <section className={'py-17'}>
          <Container size={'lg'}>
            <h2 className={'text-5xl md:text-8xl text-center mb-10 md:mb-13'}>
              {'How to Choose the Best'}
            </h2>
            <Products data={compareProducts} />
          </Container>
        </section>
      )}
    </>
  )
}
