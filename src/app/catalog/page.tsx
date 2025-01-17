import { ArticleShort } from 'components/ArticleShort'
import { Container } from 'components/Container'
import { Top } from 'components/Top'
import { getCatalog } from 'fetch/catalog'
import { getAllProducts } from 'fetch/product'

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
              subHead={product.description}
              reverse={!!(idx % 2)}
            />
          ))}
        </Container>
      </section>
    </>
  )
}
