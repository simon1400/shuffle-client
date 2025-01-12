import { ArticleShort } from 'components/ArticleShort'
import { Container } from 'components/Container'
import { Top } from 'components/Top'

export default function Catalog() {
  return (
    <>
      <Top
        title={'All products'}
        content={`<p>
              <b>Shuffle King</b>
              is money and a lot of other things, too. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam dui sem, fermentum vitae.
            </p>`}
      />
      <section className={'py-[110px]'}>
        <Container size={'lg'}>
          <ArticleShort subHead={'single-deck shuffler'} reverse={false} />
          <ArticleShort subHead={'single-deck shuffler'} reverse />
          <ArticleShort subHead={'single-deck shuffler'} reverse={false} />
          <ArticleShort subHead={'single-deck shuffler'} reverse />
          <ArticleShort subHead={'single-deck shuffler'} reverse={false} />
          <ArticleShort subHead={'single-deck shuffler'} reverse />
        </Container>
      </section>
    </>
  )
}
