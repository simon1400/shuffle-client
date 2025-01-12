import { dataSmallCard } from 'data/smallCard'
import parse from 'html-react-parser'

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
        <div className={'pt-[341px] pb-8.5 relative z-20'}>
          <h1 className={'text-big mb-7.5'}>{title}</h1>
          {!!label?.length && (
            <label className={'block text-accent text-6xl mb-[200px]'}>{label}</label>
          )}
          {!!bigContent?.length && (
            <div className={'text-6xl mb-10 max-w-[1200px]'}>{parse(bigContent)}</div>
          )}
          {!!content?.length && (
            <div className={'text-6xl mb-10 max-w-[700px]'}>{parse(content)}</div>
          )}
          {button && <Button text={'discover products'} />}
          {items && (
            <div className={'grid grid-cols-6 mt-[200px]'}>
              {dataSmallCard.map((item) => (
                <SmallCard key={item.title} data={item} />
              ))}
            </div>
          )}
          {blocks && <Slider />}
        </div>
      </Container>
    </div>
  )
}
