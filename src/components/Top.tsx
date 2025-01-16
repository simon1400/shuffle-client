'use client'

import parse from 'html-react-parser'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from './Button'
import { Container } from './Container'
import { Slider } from './Slider'
import { SmallCard } from './SmallCard'

export const Top = ({
  title,
  items,
  content = '',
  bigContent = '',
  label = '',
  blocks = false,
  button = false,
}: {
  title: string
  items?: IShortProduct[]
  button?: boolean
  content?: string
  bigContent?: string
  blocks?: boolean
  label?: string
}) => {
  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  return (
    <div>
      <div className={'absolute w-full top-0 left-0 right-0 -z-10'}>
        <Image src={'/assets/top-background.svg'} fill alt={'Top background squares'} />
        <video className={'w-full'} autoPlay muted loop id={'animationVideo'}>
          <source src={'/assets/animation.mp4'} type={'video/mp4'} />
        </video>
        <Image src={'/assets/shadow-gradient.svg'} fill alt={'Top background squares'} />
      </div>
      <Container size={'lg'}>
        <div className={'pt-[220px] md:pt-[341px] pb-8.5 relative z-20'}>
          <h1 className={'text-6xl font-medium md:text-big mb-7.5'}>{title}</h1>
          {!!label?.length && (
            <label className={'block text-accent text-6xl mb-[200px]'}>{label}</label>
          )}
          {!!bigContent?.length && (
            <div className={'text-xl md:text-6xl mb-10 max-w-[1200px]'}>{parse(bigContent)}</div>
          )}
          {!!content?.length && (
            <div className={'text-6xl mb-10 max-w-[700px]'}>{parse(content)}</div>
          )}
          {button && <Button text={'discover products'} />}
          {!!items?.length && (
            <div className={'mt-[76px] md:mt-[200px]'}>
              <Swiper
                spaceBetween={0}
                style={{
                  overflow: 'visible',
                }}
                slidesPerView={isDesktopMedia ? 6 : 2.5}
              >
                {items.map((item: IShortProduct) => (
                  <SwiperSlide key={item.title}>
                    <SmallCard data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          {/* {blocks && <Slider />} */}
        </div>
      </Container>
    </div>
  )
}
