import { Container } from 'components/Container'
import { Top } from 'components/Top'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Top
        title={'About us'}
        bigContent={`<p>
          <b>Shuffle King</b>
          is money and a lot of other things, too. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam dui sem, fermentum vitae.
        </p>`}
      />
      <section>
        <Container size={'lg'}>
          <Image src={'/assets/bigImg.png'} width={1400} height={800} alt={''} />
        </Container>
      </section>
      <section className={'pt-[90px] pb-[130px]'}>
        <Container size={'sm'}>
          <div className={'text-sm md:text-3xl'}>
            <p>
              {
                'Our goal is to support casinos through the elevation of the experience for their players. Our card shufflers are ensuring a fair game for both for players and casino owners - having been extensively tested by companies such as GLI, or BMM, both of which we are working closely with to ensure we stay ahead of the game in terms of security. Providing help to casino owners to grow their business is our priority. Therefore we offer extensive support to any of our new or current clients. Remember - we help you to grow. Your INCOME'
              }
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
