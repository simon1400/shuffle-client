'use client'

import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'

export const LogoSlider = ({ data }: { data: { url: string }[] }) => {
  return (
    <section className={'py-[40px] md:py-[80px]'}>
      <Slider
        width={'252px'}
        duration={20}
        pauseOnHover
        blurBorders={false}
        blurBorderColor={'#fff'}
      >
        {data.map((item: { url: string }, idx) => (
          <Slider.Slide key={item.url}>
            <div className={'relative mx-auto w-[165px] h-[60px]'}>
              <Image
                src={item.url}
                alt={'Logo partners'}
                fill
                className={'object-contain'}
                loading={idx < 4 ? 'eager' : 'lazy'}
                sizes={'165px'}
              />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  )
}
