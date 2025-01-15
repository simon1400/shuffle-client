'use client'

import { dataSmallCard } from 'data/smallCard'
import parse from 'html-react-parser'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from './Button'
import { Container } from './Container'
import { Slider } from './Slider'
import { SmallCard } from './SmallCard'

export const Top = ({
  title,
  items = false,
  content = '',
  bigContent = '',
  label = '',
  blocks = false,
  button = false,
}: {
  title: string
  items?: boolean
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
    <div
      className={`relative bg-[url('/assets/top-background.png')] bg-repeat-x bg-[position:center_top]`}
    >
      <div className={'h-full absolute w-full opacity-40'}>
        <video className={'absolute min-w-full bottom-0'} autoPlay muted loop id={'animationVideo'}>
          <source src={'/assets/animation.mp4'} type={'video/mp4'} />
        </video>
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
          {items && (
            <div className={'mt-[76px] md:mt-[200px]'}>
              <Swiper
                spaceBetween={0}
                style={{
                  overflow: 'visible',
                }}
                slidesPerView={isDesktopMedia ? 6 : 2.5}
              >
                {dataSmallCard.map((item) => (
                  <SwiperSlide key={item.title}>
                    <SmallCard data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          {blocks && <Slider />}
        </div>
      </Container>
    </div>
  )
}
