'use client'

import type { JSX } from 'react'

import { CompareTable } from './dynamicComponents/CompareTable'
import { ContentItem } from './dynamicComponents/ContentItem'
import { DescriptionBlock } from './dynamicComponents/DescriptionBlock'
import { ShortArticles } from './dynamicComponents/ShortArticles'
import { LogoSlider } from './LogoSlider'
import { TextCta } from './TextCta'

interface DynamicContentProps {
  data: any[]
}

// Создаем объект для маппинга компонентов
const COMPONENTS_MAP: Record<string, (item: any, idx: number) => JSX.Element | null> = {
  'content.cta-block': (item, idx) => <TextCta key={item.__component + idx} data={item} />,
  'content.short-artciles': (item, idx) => (
    <ShortArticles key={item.__component + idx} data={item} />
  ),
  'content.logo-carousel': (item, idx) => (
    <LogoSlider data={item.logo} key={item.__component + idx} />
  ),
  'content.content-item': (item, idx) => <ContentItem key={item.__component + idx} data={item} />,
  'content.description-block': (item, idx) => (
    <DescriptionBlock key={item.__component + idx} data={item} />
  ),
  'content.compare-table': (item, idx) => <CompareTable key={item.__component + idx} data={item} />,
}

export const DynamicContent = ({ data }: DynamicContentProps) => {
  return (
    <div className={'custom-content'}>
      {data.map((item, idx) => {
        const renderComponent = COMPONENTS_MAP[item.__component]
        return renderComponent ? renderComponent(item, idx) : null
      })}
    </div>
  )
}
