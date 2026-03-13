'use client'

import type { ImageProps } from 'next/image'

import { optimizeCloudinaryUrl } from 'lib/cloudinary-loader'
import Image from 'next/image'

export function CldImage({ src, width, quality, ...rest }: ImageProps) {
  const numWidth = typeof width === 'number' ? width : 800
  const numQuality = typeof quality === 'number' ? quality : 75
  const optimizedSrc = optimizeCloudinaryUrl(String(src), numWidth, numQuality)

  return <Image {...rest} src={optimizedSrc} width={width} unoptimized />
}
