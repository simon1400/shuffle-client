'use client'
import clsx from 'clsx'
import Image from 'next/image'

import { Container } from './Container'

export const Galery = ({ data }: { data: IDataImage[] }) => {
  const column = clsx({ 'grid-cols-3': data.length >= 3 }, { 'grid-cols-2': data.length === 2 })
  return (
    <section>
      <Container size={'lg'}>
        <div className={`grid ${column} gap-4 md:gap-12.5`}>
          {data.map((img: { url: string }) => (
            <div
              key={img.url}
              className={'pt-[100%] relative overflow-hidden rounded-big bg-lightAccent'}
            >
              <Image src={img.url} className={'object-cover object-center'} fill alt={img.url} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
