'use client'

import type { JSX } from 'react'

import dynamic from 'next/dynamic'

const CompareTable = dynamic(
  () => import('./dynamicComponents/CompareTable').then((mod) => ({ default: mod.CompareTable })),
  {
    loading: () => <div className={'animate-pulse h-96 bg-gray-200 rounded'} />,
  },
)
const ContentItem = dynamic(
  () => import('./dynamicComponents/ContentItem').then((mod) => ({ default: mod.ContentItem })),
  {
    loading: () => <div className={'animate-pulse h-64 bg-gray-200 rounded'} />,
  },
)
const DescriptionBlock = dynamic(
  () =>
    import('./dynamicComponents/DescriptionBlock').then((mod) => ({
      default: mod.DescriptionBlock,
    })),
  {
    loading: () => <div className={'animate-pulse h-48 bg-gray-200 rounded'} />,
  },
)
const ShortArticles = dynamic(
  () => import('./dynamicComponents/ShortArticles').then((mod) => ({ default: mod.ShortArticles })),
  {
    loading: () => <div className={'animate-pulse h-96 bg-gray-200 rounded'} />,
  },
)
const LogoSlider = dynamic(
  () => import('./LogoSlider').then((mod) => ({ default: mod.LogoSlider })),
  {
    loading: () => <div className={'h-24'} />,
  },
)
const TextCta = dynamic(() => import('./TextCta').then((mod) => ({ default: mod.TextCta })), {
  loading: () => <div className={'animate-pulse h-32 bg-gray-200 rounded'} />,
})
const ImageTextCta = dynamic(
  () => import('./dynamicComponents/ImageTextCta').then((mod) => ({ default: mod.ImageTextCta })),
  {
    loading: () => <div className={'animate-pulse h-96 bg-gray-200 rounded'} />,
  },
)
const VideoGallery = dynamic(
  () => import('./VideoGallery').then((mod) => ({ default: mod.VideoGallery })),
  {
    loading: () => <div className={'animate-pulse h-64 bg-gray-200 rounded'} />,
  },
)

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
  'content.image-text-cta': (item, idx) => (
    <ImageTextCta key={item.__component + idx} data={item} />
  ),
  'content.video-gallery': (item, idx) => (
    <VideoGallery key={item.__component + idx} data={item.videos} title={item.title} />
  ),
}

export const DynamicContent = ({ data }: DynamicContentProps) => {
  return (
    <div className={'custom-content'}>
      {!!data?.length &&
        data.map((item, idx) => {
          const renderComponent = COMPONENTS_MAP[item.__component]
          return renderComponent ? renderComponent(item, idx) : null
        })}
    </div>
  )
}
