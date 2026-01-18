'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'

import { Container } from './Container'

import 'yet-another-react-lightbox/styles.css'

export const Galery = ({ data }: { data: IDataImage[] }) => {
  const [index, setIndex] = useState(-1)
  const column = clsx({ 'grid-cols-3': data.length >= 3 }, { 'grid-cols-2': data.length === 2 })

  const slides = data.map((img) => ({ src: img.url }))

  return (
    <section>
      <Container size={'lg'}>
        <div className={`grid ${column} gap-4 md:gap-12.5`}>
          {data.map((img: { url: string }, i: number) => (
            <div
              key={img.url}
              className={
                'pt-[100%] relative overflow-hidden rounded-big bg-lightAccent cursor-pointer'
              }
              onClick={() => setIndex(i)}
            >
              <Image src={img.url} className={'object-cover object-center'} fill alt={img.url} />
            </div>
          ))}
        </div>
      </Container>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
        animation={{ fade: 300, swipe: 300 }}
        carousel={{ finite: false }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
        }}
      />
    </section>
  )
}
