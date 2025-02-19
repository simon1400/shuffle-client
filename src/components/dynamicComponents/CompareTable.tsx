import { Container } from 'components/Container'
import { Products } from 'components/products/Products'

export const CompareTable = ({ data }: { data: { title?: string; products: IShortProduct[] } }) => {
  return (
    <section className={'py-[40px] md:py-[80px]'}>
      <Container size={'lg'}>
        {data.title?.length && (
          <h2 className={'text-5xl md:text-8xl mb-10 md:mb-13 text-left'}>{data.title}</h2>
        )}
        <Products data={data.products} />
      </Container>
    </section>
  )
}
