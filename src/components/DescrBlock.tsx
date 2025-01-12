import Image from 'next/image'
import Link from 'next/link'

export const DescrBlock = () => {
  return (
    <div className={'p-12.5 bg-lightDark rounded-big'}>
      <Image
        className={'mb-11'}
        src={'assets/comment-music.svg'}
        width={78}
        height={68}
        alt={'asd'}
      />
      <div className={'text-33xl opacity-70 mb-12.5'}>
        <p>
          {
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus'
          }
        </p>
      </div>

      <Link className={'text-accent text-lg'} href={'/'}>
        {'cta action'}
      </Link>
    </div>
  )
}
