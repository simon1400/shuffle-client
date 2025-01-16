'use client'
import parse from 'html-react-parser'

import { ArticleShort } from './ArticleShort'
import { Container } from './Container'
import { Galery } from './Galery'
import { LogoSlider } from './LogoSlider'
import { Products } from './Products'
import { Slider } from './Slider'
import { TextCta } from './TextCta'

export const DynamicContent = ({ data }: { data: any[] }) => {
  return (
    <>
      {data.map((item, idx: number) => {
        if (item.__component === 'content.cta-block') {
          return <TextCta key={item.__component + idx} data={item} />
        }
        if (item.__component === 'content.short-artciles') {
          return (
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
          )
        }
        if (item.__component === 'content.logo-carousel') {
          return <LogoSlider data={item.logo} key={item.__component + idx} />
        }
        if (item.__component === 'content.content-item') {
          return (
            <section className={'py-[160px]'} key={item.__component + idx}>
              {(!!item.title?.length || !!item.contentText?.length) && (
                <Container size={'sm'}>
                  {!!item.title?.length && <h2 className={'text-8xl mb-17'}>{item.title}</h2>}
                  {!!item.contentText?.length && (
                    <div className={'text-sm md:text-3xl mb-10 opacity-70'}>
                      {parse(item.contentText)}
                    </div>
                  )}
                </Container>
              )}
              {!!item.galery?.length && <Galery data={item.galery} />}
            </section>
          )
        }
        if (item.__component === 'content.description-block') {
          return (
            <section key={item.__component + idx} className={'pt-[80px] md:pt-[132px]'}>
              <Container size={'lg'}>
                <Slider data={item.block} />
              </Container>
            </section>
          )
        }
        if (item.__component === 'content.compare-table') {
          return (
            <section key={item.__component + idx} className={'py-17'}>
              <Container size={'lg'}>
                {item.title?.length && <h2 className={'text-8xl mb-13 text-left'}>{item.title}</h2>}
                <Products data={item.products} />
              </Container>
            </section>
          )
        }
        return null
      })}
    </>
  )
}
