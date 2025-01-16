'use client'
import { Button } from './Button'
import { Container } from './Container'
import { LinkMore } from './LinkMore'
import { SmallCard } from './SmallCard'

export const SubMenu = ({
  data,
  hover,
  setHover,
}: {
  data: IShortProduct[]
  hover: number
  setHover: (value: number) => void
}) => {
  return (
    <div
      className={`absolute w-full bg-primary left-0 top-0 z-10 pb-12.5 ${hover < 0 ? 'h-0 opacity-0' : ''} hover:h-auto hover:opacity-100 duration-500 overflow-hidden`}
      onMouseLeave={() => setHover(-1)}
    >
      <Container size={'lg'}>
        <div className={'grid grid-cols-6 mt-[265px] mb-12.5'}>
          {data.map((item: IShortProduct) => (
            <SmallCard key={item.title} data={item} />
          ))}
        </div>
        <div className={'flex justify-center gap-12.5'}>
          <Button text={'discorver products'} />
          <LinkMore text={'compare all products'} />
        </div>
      </Container>
    </div>
  )
}
