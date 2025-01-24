import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export interface IDescrBlock {
  contentText: string
  cta?: IDataLink
  icon?: IDataImage
}

export const DescrBlock = ({ data }: { data: IDescrBlock }) => {
  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  return (
    <div className={'px-7.5 py-8.5 md:p-12.5 bg-lightDark rounded-big'}>
      {data?.icon && (
        <Image
          className={'mb-6 md:mb-11'}
          src={data.icon.url}
          width={isDesktopMedia ? 78 : 59}
          height={isDesktopMedia ? 68 : 52}
          alt={'asd'}
        />
      )}
<<<<<<< HEAD
      <div className={'text-sm md:text-3xl opacity-70 mb-6.5 md:mb-12.5 text-white'}>
=======
      <div className={'text-sm md:text-3xl opacity-70 mb-6.5 md:mb-12.5'}>
>>>>>>> cc672900a1d085f028f190a378ebe22ce82c800e
        {parse(data.contentText)}
      </div>

      {data.cta && (
        <Link className={'text-accent text-xs font-bold md:text-lg'} href={data.cta.link}>
          {data.cta.text}
        </Link>
      )}
    </div>
  )
}
