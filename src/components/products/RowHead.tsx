import { Label } from 'components/Label'
import Image from 'next/image'

export const RowHead = ({ data }: { data: IShortProduct }) => {
  return (
    <div className={'text-center pb-11 w-full md:mx-6'}>
      <Image
        className={'mx-auto mb-2.5'}
        src={data.shortIcon?.url || ''}
        width={160}
        height={115}
        alt={data.title}
      />
      <h3 className={'text-sm font-bold md:text-lg mb-0.5'}>{data.title}</h3>
      <span className={'block text-base1 text-accent mb-5'}>{data.description}</span>
      {!!data.label?.length && data.label.map((label) => <Label key={label.text} data={label} />)}
    </div>
  )
}
