'use client'
import parse from 'html-react-parser'
import Image from 'next/image'

import { Button } from './Button'
import { Label } from './Label'

export const ArticleShort = ({
  data,
  reverse,
  subHead,
}: {
  reverse: boolean
  subHead?: string
  data: IArticleShort
}) => {
  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 gap-7.5 md:gap-12.5 mb-[70px]'}>
      <div className={reverse ? 'md:order-last' : ''}>
        <div className={'pt-[100%] relative overflow-hidden rounded-lg bg-lightAccent'}>
          <Image
            src={data.shortImage.url}
            className={'object-cover object-center'}
            fill
            alt={data.title}
          />
        </div>
      </div>
      <div className={'flex items-center'}>
        <div>
          {!!subHead?.length && (
            <label className={'block text-accent text-3xl md:text-6xl mb-5'}>{subHead}</label>
          )}
          <h2 className={'text-5xl md:text-8xl mb-5 md:mb-17 md:flex items-end gap-2.5'}>
            <span className={'block'}>{data.title}</span>
            {!!data.label && <Label big data={data.label} />}
          </h2>
          <div className={'text-sm md:text-3xl mb-7.5 md:mb-17 opacity-70'}>
            {parse(data.shortContent)}
          </div>
          <Button text={'discover'} href={`/article/${data.slug}`} />
        </div>
      </div>
    </div>
  )
}
