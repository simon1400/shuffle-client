import { Container } from 'components/Container'
import { Galery } from 'components/Galery'
import { Products } from 'components/Products'
import { Slider } from 'components/Slider'
import { Table } from 'components/Table'
import { TextCta } from 'components/TextCta'
import { Top } from 'components/Top'
import Image from 'next/image'

export default function Product() {
  return (
    <>
      <Top title={'All products'} label={'single-deck shuffler'} />
      <section className={'-mt-[300px] '}>
        <Image
          className={'relative z-60 mx-auto'}
          src={'/assets/bigProduct.png'}
          width={1700}
          height={990}
          alt={''}
        />
        <Container size={'lg'}>
          <div className={'-mt-[220px] relative -z-10'}>
            <Slider />
          </div>
        </Container>
      </section>
      <TextCta />
      <Galery />
      <section className={'py-[160px]'}>
        <Container size={'sm'}>
          <h2 className={'text-8xl mb-17'}>{'Feacures'}</h2>
          <div className={'text-sm md:text-3xl mb-10 opacity-70'}>
            <p>
              {
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Etiam dictum tincidunt diam. Fusce suscipit libero eget elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Donec iaculis gravida nulla. Praesent vitae arcu tempor neque lacinia pretium. Nullam eget nisl. Quisque porta.'
              }
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container size={'lg'}>
          <Slider />
        </Container>
      </section>
      <section className={'pt-[160px]'}>
        <Container size={'md'}>
          <h2 className={'text-8xl'}>{'Highlights'}</h2>
          <Image src={'/assets/seccondBig.png'} width={800} height={550} alt={''} />
        </Container>
      </section>
      <Table />
      <Galery />
      <section className={'py-17'}>
        <Container size={'lg'}>
          <h2 className={'text-8xl text-center mb-13'}>{'How to Choose the Best'}</h2>
          <Products />
        </Container>
      </section>
    </>
  )
}
