'use client'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

import { DescrBlock } from './DescrBlock'

export const Slider = () => {
  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })
  return (
    <Swiper
      spaceBetween={isDesktopMedia ? 50 : 20}
      style={{
        overflow: 'visible',
      }}
      slidesPerView={isDesktopMedia ? 3.5 : 1.5}
    >
      <SwiperSlide>
        <DescrBlock />
      </SwiperSlide>
      <SwiperSlide>
        <DescrBlock />
      </SwiperSlide>
      <SwiperSlide>
        <DescrBlock />
      </SwiperSlide>
      <SwiperSlide>
        <DescrBlock />
      </SwiperSlide>
    </Swiper>
  )
}
