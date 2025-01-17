import { Container } from 'components/Container'
import { DynamicContent } from 'components/DynamicContent'
import { Products } from 'components/Products'
import { Slider } from 'components/Slider'
import { Top } from 'components/Top'
import { getProduct } from 'fetch/product'
import Image from 'next/image'

export default async function Product({ params }: { params: Promise<{ product: string }> }) {
  const slug = (await params).product
  const product = await getProduct(slug)
  let compareProducts: IShortProduct[] = product.compare
  if (product.compare?.length) {
    compareProducts = [
      {
        title: product.title,
        description: product.description,
        shortIcon: product.shortIcon,
        slug: '',
        label: product.label,
        Parameters: product.Parameters,
      },
      ...compareProducts,
    ]
  }

  return (
    <>
      <Top title={product.title} label={product.description} />
      <section className={'-mt-[220px] '}>
        <Image
          className={'relative z-60 mx-auto'}
          src={product.image.url}
          width={1700}
          height={990}
          alt={product.title}
        />
        <Container size={'lg'}>
          <div className={'relative -z-10'}>
            <Slider data={product.benefits} />
          </div>
        </Container>
      </section>
      <DynamicContent data={product.content} />
      <section className={'py-17'}>
        <Container size={'lg'}>
          <h2 className={'text-5xl md:text-8xl text-center mb-13'}>{'How to Choose the Best'}</h2>
          <Products data={compareProducts} />
        </Container>
      </section>
    </>
  )
}
