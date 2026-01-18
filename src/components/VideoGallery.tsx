'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { Container } from './Container'

interface IVideoItem {
  youtubeUrl: string
  title?: string
}

interface VideoGalleryProps {
  data: IVideoItem[]
  title?: string
}

// Извлекает ID видео из различных форматов YouTube URL
function getYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([\w-]{11})$/i, // Просто ID видео
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

// Генерирует URL превью изображения YouTube
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

export const VideoGallery = ({ data, title }: VideoGalleryProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const column = clsx(
    { 'grid-cols-3': data.length >= 3 },
    { 'grid-cols-2': data.length === 2 },
    { 'grid-cols-1': data.length === 1 }
  )

  const closeModal = () => setSelectedVideo(null)

  return (
    <section className={'py-[40px] md:py-[80px]'}>
      {title && (
        <Container size={'sm'}>
          <h2 className={'text-5xl md:text-8xl mb-10 md:mb-17'}>{title}</h2>
        </Container>
      )}

      <Container size={'lg'}>
        <div className={`grid ${column} gap-4 md:gap-12.5`}>
          {data.map((video, i) => {
            const videoId = getYouTubeVideoId(video.youtubeUrl)
            if (!videoId) return null

            return (
              <div
                key={video.youtubeUrl + i}
                className={
                  'pt-[56.25%] relative overflow-hidden rounded-big bg-lightAccent cursor-pointer group'
                }
                onClick={() => setSelectedVideo(videoId)}
              >
                <Image
                  src={getYouTubeThumbnail(videoId)}
                  className={'object-cover object-center transition-transform duration-300 group-hover:scale-105'}
                  fill
                  alt={video.title || 'Video thumbnail'}
                  unoptimized
                />
                {/* Play button overlay */}
                <div className={'absolute inset-0 flex items-center justify-center'}>
                  <div
                    className={
                      'w-16 h-16 md:w-20 md:h-20 bg-black/70 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110'
                    }
                  >
                    <svg
                      className={'w-6 h-6 md:w-8 md:h-8 text-white ml-1'}
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8 5v14l11-7z' />
                    </svg>
                  </div>
                </div>
                {/* Video title overlay */}
                {video.title && (
                  <div className={'absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent'}>
                    <p className={'text-white text-sm md:text-base font-medium truncate'}>
                      {video.title}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>

      {/* Modal for video playback */}
      {selectedVideo && (
        <div
          className={'fixed inset-0 z-50 flex items-center justify-center bg-black/85'}
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            className={'absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10'}
            onClick={closeModal}
            aria-label='Close video'
          >
            <svg className={'w-8 h-8'} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

          {/* Video container */}
          <div
            className={'relative w-full max-w-5xl mx-4 aspect-video'}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              className={'w-full h-full rounded-lg'}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
