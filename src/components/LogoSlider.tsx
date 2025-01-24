'use client'

import Slider from 'react-infinite-logo-slider'

export const LogoSlider = ({ data }: { data: { url: string }[] }) => {
  return (
    <section className={'py-3 md:py-6'}>
      <Slider
        width={'252px'}
        duration={20}
        pauseOnHover
        blurBorders={false}
        blurBorderColor={'#fff'}
      >
        {data.map((item: { url: string }) => (
          <Slider.Slide key={item.url}>
            <img className={'mx-auto max-w-[165px]'} src={item.url} alt={'Logo partners'} />
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  )
}
