import { Container } from './Container'
import { LinkMore } from './LinkMore'

export const TextCta = () => {
  return (
    <section className={'py-[80px] md:py-[132px]'}>
      <Container size={'sm'}>
        <div className={'text-xl md:text-6xl mb-7.5 md:mb-10 opacity-70'}>
          <p>
            <b>{'Shuffle King'}</b>
            {
              ' is money and a lot of other things, too. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam dui sem, fermentum vitae.'
            }
          </p>
        </div>
        <LinkMore text={'Discover all products'} />
      </Container>
    </section>
  )
}
