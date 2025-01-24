'use client'
<<<<<<< HEAD

import { useEffect, useState } from 'react'
=======
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

import { DescrBlock } from './DescrBlock'

export const Slider = ({ data }: { data: IDescriptionBlock[] }) => {
<<<<<<< HEAD
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

=======
  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
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
