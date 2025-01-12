import { ArticleShort } from 'components/ArticleShort'
import { Container } from 'components/Container'
import { DescrBlock } from 'components/DescrBlock'
import { LinkMore } from 'components/LinkMore'
import { LogoSlider } from 'components/LogoSlider'
import { Top } from 'components/Top'

export default function Home() {
  return (
    <>
      <Top title={'We care for your games, and help you grow'} items />
      <section className={'py-[132px]'}>
        <Container size={'sm'}>
          <div className={'text-6xl mb-10'}>
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
      <LogoSlider />
      <section className={'pt-[132px]'}>
        <Container size={'lg'}>
          <div className={'grid grid-cols-3 gap-12.5'}>
            <DescrBlock />
            <DescrBlock />
            <DescrBlock />
          </div>
        </Container>
      </section>
      <section className={'py-[132px]'}>
        <Container size={'sm'}>
          <div className={'text-6xl mb-10'}>
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
      <section>
        <Container size={'lg'}>
          <ArticleShort reverse={false} />
          <ArticleShort reverse />
        </Container>
      </section>
    </>
  )
}
