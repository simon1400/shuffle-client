import Image from 'next/image'

import { Button } from './Button'
import { Label } from './Label'

export const ArticleShort = ({ reverse, subHead }: { reverse: boolean; subHead?: string }) => {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-7.5 md:gap-12.5 mb-[70px]'}>
      <div className={reverse ? 'md:order-last' : ''}>
        <div className={'pt-[100%] relative overflow-hidden rounded-lg bg-lightAccent'}>
          <Image
            src={'/assets/articleShort_1.png'}
            objectFit={'cover'}
            objectPosition={'center'}
            fill
            alt={'Article short'}
          />
        </div>
      </div>
      <div className={'flex items-center'}>
        <div>
          {!!subHead?.length && (
            <label className={'block text-accent text-3xl md:text-6xl mb-5'}>{subHead}</label>
          )}
          <h2 className={'text-5xl md:text-8xl mb-5 md:mb-17 md:flex items-end gap-2.5'}>
            <span className={'block'}>{'About us'}</span>
            <Label big data={{ color: '#b046f1', text: 'labelss tesxt' }} />
          </h2>
          <div className={'text-sm md:text-3xl mb-7.5 md:mb-17 opacity-70'}>
            <p>
              {
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Etiam dictum tincidunt diam. Fusce suscipit libero eget elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Donec iaculis gravida nulla. Praesent vitae arcu tempor neque lacinia pretium. Nullam eget nisl. Quisque porta.'
              }
            </p>
          </div>
          <Button text={'discover'} />
        </div>
      </div>
    </div>
  )
}
