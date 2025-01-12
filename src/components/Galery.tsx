import Image from 'next/image'

import { Container } from './Container'

export const Galery = () => {
  return (
    <section>
      <Container size={'lg'}>
        <div className={'grid grid-cols-2 gap-12.5'}>
          <div className={'pt-[100%] relative overflow-hidden rounded-big'}>
            <Image
              src={'/assets/articleShort_1.png'}
              objectFit={'cover'}
              objectPosition={'center'}
              fill
              alt={'asd'}
            />
          </div>
          <div className={'pt-[100%] relative overflow-hidden rounded-big'}>
            <Image
              src={'/assets/articleShort_2.png'}
              objectFit={'cover'}
              objectPosition={'center'}
              fill
              alt={'asd'}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
