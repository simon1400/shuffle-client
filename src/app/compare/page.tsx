import { Container } from 'components/Container'
import { Products } from 'components/Products'
import { Top } from 'components/Top'

export default function Compare() {
  return (
    <>
      <Top
        title={'All products'}
        bigContent={`<p>
          <b>Shuffle King</b>
          is money and a lot of other things, too. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam dui sem, fermentum vitae.
        </p>`}
      />
      <section className={'py-17'}>
        <Container size={'lg'}>
          <h2 className={'text-8xl mb-13 text-left'}>{'Single-deck only shuffler'}</h2>
        </Container>
        <Products />
      </section>
      <section className={'py-17'}>
        <Container size={'lg'}>
          <h2 className={'text-8xl mb-13 text-left'}>{'Single-deck only shuffler'}</h2>
          <Products />
        </Container>
      </section>
    </>
  )
}
