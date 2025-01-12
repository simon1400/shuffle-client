import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Galery } from 'components/Galery'
import { Products } from 'components/Products'
import { Slider } from 'components/Slider'
import { Table } from 'components/Table'
import { Top } from 'components/Top'
import Image from 'next/image'

export default function Product() {
  return (
    <>
      <Top title={'All products'} label={'single-deck shuffler'} />
      <section className={'-mt-[300px] '}>
        <Image
          className={'relative z-60'}
          src={'/assets/bigProduct.png'}
          width={1700}
          height={990}
          alt={''}
        />
        <Container size={'lg'}>
          <div className={'-mt-[220px] grid grid-cols-3 relative -z-10 gap-12.5'}>
            <div className={'pt-[95px] px-12.5 pb-13 bg-lightAccent rounded-big'}>
              <span className={'stroke-text text-big'}>{'1.'}</span>
              <div className={'text-3xl opacity-70'}>
                <p>
                  {
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus'
                  }
                </p>
              </div>
            </div>
            <div className={'pt-[95px] px-12.5 pb-13 bg-lightAccent rounded-big'}>
              <span className={'stroke-text text-big'}>{'2.'}</span>
              <div className={'text-3xl opacity-70'}>
                <p>
                  {
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus'
                  }
                </p>
              </div>
            </div>
            <div className={'pt-[95px] px-12.5 pb-13 bg-lightAccent rounded-big'}>
              <span className={'stroke-text text-big'}>{'3.'}</span>
              <div className={'text-3xl opacity-70'}>
                <p>
                  {
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus'
                  }
                </p>
              </div>
            </div>
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
          <Button text={'Discover all products'} />
        </Container>
      </section>
      <Galery />
      <section className={'py-[160px]'}>
        <Container size={'sm'}>
          <h2 className={'text-8xl mb-17'}>{'Feacures'}</h2>
          <div className={'text-3xl mb-10 opacity-70'}>
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
