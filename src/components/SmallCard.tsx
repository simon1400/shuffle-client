import Image from 'next/image'
import Link from 'next/link'

import { Label } from './Label'

export const SmallCard = ({ data }: { data: IDataSmallCard }) => {
  return (
    <Link
      href={data.link}
      className={
        'max-w-[128px] md:max-w-[224px] block relative rounded-big hover:bg-lightDark text-center md:px-8 p-3.5 md:pb-8 md:pt-10'
      }
    >
      <Image
        className={'ml-auto mr-auto mb-2.5'}
        src={data.image}
        width={160}
        height={115}
        alt={'Suffle'}
      />
      <h4 className={'text-xs font-bold md:text-lg'}>{data.title}</h4>
      <span className={'text-accent text-[12px] md:text-base1 block mb-2.5'}>{data.text}</span>
      {data.labels && data.labels.map((item: ILabelData) => <Label key={item.text} data={item} />)}
    </Link>
  )
}
