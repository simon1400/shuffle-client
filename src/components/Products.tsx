'use client'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import { CheckIcon } from '../icons/Check'
import { XMarkIcon } from '../icons/XMark'

import { Button } from './Button'
import { Label } from './Label'

const RowHead = () => {
  return (
    <div className={'text-center pb-11 w-full md:mx-6'}>
      <Image
        className={'mx-auto mb-2.5'}
        src={'/assets/table.png'}
        width={160}
        height={115}
        alt={''}
      />
      <h3 className={'text-sm font-bold md:text-lg mb-0.5'}>{'SK2 MAX'}</h3>
      <span className={'block text-base1 text-accent mb-5'}>{'single-deck shuffler'}</span>
      <Label data={{ color: '#b046f1', text: 'labelss tesxt' }} />
    </div>
  )
}

const RowBodyHead = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div
      className={
        'flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 w-full'
      }
    >
      <span className={'text-base md:text-xxl font-medium'}>{content}</span>
    </div>
  )
}
const RowBody = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div
      className={
        'flex items-center md:border-b-[1.5px] md:border-borderAccent py-2.5 md:py-4 md:mx-6 text-right md:text-center w-full'
      }
    >
      <span className={'inline-block text-base md:text-2xl ml-auto md:mx-auto'}>{content}</span>
    </div>
  )
}

const Row = ({ children }: { children: React.ReactNode[] }) => {
  return <div className={'grid grid-cols-4'}>{children}</div>
}

const ProductsDesktop = () => {
  return (
    <div>
      <Row>
        <div />
        <RowHead />
        <RowHead />
        <RowHead />
      </Row>
      <Row>
        <RowBodyHead content={'Amount of cards per shuffle'} />
        <RowBody content={'Amount of cards per shuffle'} />
        <RowBody content={<CheckIcon />} />
        <RowBody content={<XMarkIcon />} />
      </Row>
      <Row>
        <RowBodyHead content={'Amount of cards per shuffle'} />
        <RowBody content={'Amount of cards per shuffle'} />
        <RowBody content={<CheckIcon />} />
        <RowBody content={<XMarkIcon />} />
      </Row>
      <Row>
        <RowBodyHead content={'Amount of cards per shuffle'} />
        <RowBody content={'Amount of cards per shuffle'} />
        <RowBody content={<CheckIcon />} />
        <RowBody content={<XMarkIcon />} />
      </Row>
      <Row>
        <div />
        <div className={'text-center md:pt-10 pt-2.5 md:mx-6 w-full'}>
          <Button text={'detail'} />
        </div>
        <div className={'text-center md:pt-10 pt-2.5 md:mx-6 w-full'}>
          <Button text={'detail'} />
        </div>
        <div className={'text-center md:pt-10 pt-2.5 md:mx-6 w-full'}>
          <Button text={'detail'} />
        </div>
      </Row>
    </div>
  )
}

const ProductsMobile = () => {
  return (
    <div>
      <RowHead />
      <div className={'flex justify-between border-b-[1.5px] border-borderAccent'}>
        <RowBodyHead content={'Amount of cards per shuffle'} />
        <RowBody content={<CheckIcon />} />
      </div>
      <div className={'flex justify-between gap-2 border-b-[1.5px] border-borderAccent'}>
        <RowBodyHead content={'Amount of cards per shuffle'} />
        <RowBody content={'Amount of cards per shuffle'} />
      </div>
      <div className={'flex justify-between gap-2 border-b-[1.5px] border-borderAccent'}>
        <RowBodyHead content={'Amount of cards per shuffle'} />
        <RowBody content={<XMarkIcon />} />
      </div>
      <div className={'text-center pt-10'}>
        <Button text={'discorver products'} />
      </div>
    </div>
  )
}

export const Products = () => {
  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  if (isDesktopMedia) {
    return <ProductsDesktop />
  } else {
    return <ProductsMobile />
  }
}
