'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

import { DescrBlock } from './DescrBlock'

export const Slider = ({ data }: { data: IDescriptionBlock[] }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  if (!isClient) {
    return null
  }

  return (
    <Swiper
      spaceBetween={isDesktopMedia ? 50 : 20}
      style={{
        overflow: 'visible',
      }}
      slidesPerView={isDesktopMedia ? 3 : 1.5}
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <DescrBlock data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
