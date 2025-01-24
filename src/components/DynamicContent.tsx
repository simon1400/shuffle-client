'use client'

import type { JSX } from 'react'

import parse from 'html-react-parser'

import { ArticleShort } from './ArticleShort'
import { Container } from './Container'
import { Galery } from './Galery'
import { LogoSlider } from './LogoSlider'
import { Products } from './products/Products'
import { Slider } from './Slider'
import { TextCta } from './TextCta'

interface DynamicContentProps {
  data: any[]
}

// Создаем объект для маппинга компонентов
const COMPONENTS_MAP: Record<string, (item: any, idx: number) => JSX.Element | null> = {
  'content.cta-block': (item, idx) => <TextCta key={item.__component + idx} data={item} />,
  'content.short-artciles': (item, idx) => (
    <section key={item.__component + idx}>
      <Container size={'lg'}>
        {item.articles.map((article: any, idxArticle: number) => (
          <ArticleShort
            key={article.title + idxArticle}
            data={article}
            reverse={!!(idxArticle % 2)}
          />
        ))}
      </Container>
    </section>
  ),
  'content.logo-carousel': (item, idx) => (
    <LogoSlider data={item.logo} key={item.__component + idx} />
  ),
  'content.content-item': (item, idx) => (
    <section className={'py-[160px]'} key={item.__component + idx}>
      {(item.title?.length || item.contentText?.length) && (
        <Container size={'sm'}>
          {item.title?.length && (
            <h2 className={'text-5xl md:text-8xl mb-10 md:mb-17'}>{item.title}</h2>
          )}
          {item.contentText?.length && (
            <div className={'text-sm md:text-3xl mb-10 opacity-70'}>{parse(item.contentText)}</div>
          )}
        </Container>
      )}
      {item.galery?.length && <Galery data={item.galery} />}
    </section>
  ),
  'content.description-block': (item, idx) => (
    <section key={item.__component + idx} className={'pt-[80px] md:pt-[132px]'}>
      <Container size={'lg'}>
        <Slider data={item.block} />
      </Container>
    </section>
  ),
  'content.compare-table': (item, idx) => (
    <section key={item.__component + idx} className={'py-17'}>
      <Container size={'lg'}>
        {item.title?.length && (
          <h2 className={'text-5xl md:text-8xl mb-10 md:mb-13 text-left'}>{item.title}</h2>
        )}
        <Products data={item.products} />
      </Container>
    </section>
  ),
}

export const DynamicContent = ({ data }: DynamicContentProps) => {
  return (
    <>
      {data.map((item, idx) => {
        const renderComponent = COMPONENTS_MAP[item.__component]
        return renderComponent ? renderComponent(item, idx) : null
      })}
    </>
  )
}
