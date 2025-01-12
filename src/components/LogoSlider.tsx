'use client'
import Slider from 'react-infinite-logo-slider'

export const LogoSlider = () => {
  return (
    <section className={'py-6'}>
      <Slider
        width={'252px'}
        duration={10}
        pauseOnHover
        blurBorders={false}
        blurBorderColor={'#fff'}
      >
        <Slider.Slide>
          <img className={'mx-auto max-w-[165px]'} src={'/assets/slider_1.png'} alt={'any'} />
        </Slider.Slide>
        <Slider.Slide>
          <img className={'mx-auto max-w-[165px]'} src={'/assets/slider_2.png'} alt={'any'} />
        </Slider.Slide>
        <Slider.Slide>
          <img className={'mx-auto max-w-[165px]'} src={'/assets/slider_2.png'} alt={'any'} />
        </Slider.Slide>
        <Slider.Slide>
          <img className={'mx-auto max-w-[165px]'} src={'/assets/slider_2.png'} alt={'any'} />
        </Slider.Slide>
      </Slider>
    </section>
  )
}
