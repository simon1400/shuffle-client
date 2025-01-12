'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import { DescrBlock } from './DescrBlock'

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      style={{
        overflow: 'visible',
      }}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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
