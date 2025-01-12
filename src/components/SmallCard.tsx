import Image from 'next/image'
import Link from 'next/link'

import { Label } from './Label'

export const SmallCard = ({ data }: { data: IDataSmallCard }) => {
  return (
    <Link
      href={data.link}
      className={
        'max-w-[224px] block relative rounded-big hover:bg-lightDark text-center pt-10 px-8 pb-8'
      }
    >
      <Image
        className={'ml-auto mr-auto mb-2.5'}
        src={data.image}
        width={160}
        height={115}
        alt={'Suffle'}
      />
      <h4 className={'text-lg'}>{data.title}</h4>
      <span className={'text-accent text-base1 block mb-2.5'}>{data.text}</span>
      {data.labels && data.labels.map((item: ILabelData) => <Label key={item.text} data={item} />)}
    </Link>
  )
}
