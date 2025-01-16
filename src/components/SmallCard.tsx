'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Label } from './Label'

export const SmallCard = ({ data }: { data: IShortProduct }) => {
  return (
    <Link
      href={data.slug}
      className={
        'max-w-[128px] md:max-w-[224px] block relative rounded-big hover:bg-lightDark duration-200 text-center md:px-8 p-3.5 md:pb-8 md:pt-10'
      }
    >
      <Image
        className={'ml-auto mr-auto mb-2.5'}
        src={data.shortIcon.url}
        width={160}
        height={115}
        alt={data.title}
      />
      <h4 className={'text-xs font-bold md:text-lg'}>{data.title}</h4>
      <span className={'text-accent text-[12px] md:text-base1 block mb-2.5'}>
        {data.description}
      </span>
      {data.label && data.label.map((item: IDataLabel) => <Label key={item.text} data={item} />)}
    </Link>
  )
}
