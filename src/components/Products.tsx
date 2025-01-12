import Image from 'next/image'

import { CheckIcon } from '../icons/Check'
import { XMarkIcon } from '../icons/XMark'

import { Button } from './Button'
import { Label } from './Label'

const RowHead = () => {
  return (
    <div className={'text-center pb-11'}>
      <Image
        className={'mx-auto mb-2.5'}
        src={'/assets/table.png'}
        width={160}
        height={115}
        alt={''}
      />
      <h3 className={'text-lg mb-0.5'}>{'SK2 MAX'}</h3>
      <span className={'block text-base1 text-accent mb-5'}>{'single-deck shuffler'}</span>
      <Label data={{ color: '#b046f1', text: 'labelss tesxt' }} />
    </div>
  )
}

const RowBodyHead = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div className={'flex items-center border-b-[1.5px] border-borderAccent py-4 mx-6'}>
      <span className={'text-xxl'}>{content}</span>
    </div>
  )
}
const RowBody = ({ content }: { content: string | React.ReactNode }) => {
  return (
    <div className={'flex items-center border-b-[1.5px] border-borderAccent py-4 mx-6 text-center'}>
      <span className={'inline-block text-2xl mx-auto'}>{content}</span>
    </div>
  )
}

const Row = ({ children }: { children: React.ReactNode[] }) => {
  return <div className={'grid grid-cols-4'}>{children}</div>
}

export const Products = () => {
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
        <div className={'text-center pt-10'}>
          <Button text={'detail'} />
        </div>
        <div className={'text-center pt-10'}>
          <Button text={'detail'} />
        </div>
        <div className={'text-center pt-10'}>
          <Button text={'detail'} />
        </div>
      </Row>
    </div>
  )
}
