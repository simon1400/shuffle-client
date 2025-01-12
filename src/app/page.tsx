import { ArticleShort } from 'components/ArticleShort'
import { Container } from 'components/Container'
import { LogoSlider } from 'components/LogoSlider'
import { Slider } from 'components/Slider'
import { TextCta } from 'components/TextCta'
import { Top } from 'components/Top'

export default function Home() {
  return (
    <>
      <Top title={'We care for your games, and help you grow'} items />
      <TextCta />
      <LogoSlider />
      <section className={'pt-[80px] md:pt-[132px]'}>
        <Container size={'lg'}>
          <Slider />
        </Container>
      </section>
      <TextCta />
      <section>
        <Container size={'lg'}>
          <ArticleShort reverse={false} />
          <ArticleShort reverse />
        </Container>
      </section>
    </>
  )
}
