import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

export const DescrBlock = () => {
  const isDesktopMedia = useMediaQuery({
    query: '(min-width: 1024px)',
  })
  return (
    <div className={'px-7.5 py-8.5 md:p-12.5 bg-lightDark rounded-big'}>
      <Image
        className={'mb-6 md:mb-11'}
        src={'assets/comment-music.svg'}
        width={isDesktopMedia ? 78 : 59}
        height={isDesktopMedia ? 68 : 52}
        alt={'asd'}
      />
      <div className={'text-sm md:text-3xl opacity-70 mb-6.5 md:mb-12.5'}>
        <p>
          {
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus'
          }
        </p>
      </div>

      <Link className={'text-accent text-xs font-bold md:text-lg'} href={'/'}>
        {'cta action'}
      </Link>
    </div>
  )
}
