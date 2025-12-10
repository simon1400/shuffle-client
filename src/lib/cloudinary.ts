/**
 * Optimizes Cloudinary image URLs with quality and format parameters
 * @param url - Original Cloudinary URL
 * @param options - Optimization options
 * @returns Optimized URL
 */
export function optimizeCloudinaryUrl(
  url: string,
  options: {
    quality?: 'auto' | number
    format?: 'auto' | 'webp' | 'avif'
    width?: number
    height?: number
  } = {},
): string {
  if (!url || !url.includes('cloudinary.com')) {
    return url
  }

  const { quality = 'auto', format = 'auto', width, height } = options

  // Find the upload segment in the URL
  const uploadIndex = url.indexOf('/upload/')
  if (uploadIndex === -1) {
    return url
  }

  const transformations: string[] = []

  // Add quality transformation
  if (quality) {
    transformations.push(`q_${quality}`)
  }

  // Add format transformation
  if (format) {
    transformations.push(`f_${format}`)
  }

  // Add width transformation
  if (width) {
    transformations.push(`w_${width}`)
  }

  // Add height transformation
  if (height) {
    transformations.push(`h_${height}`)
  }

  // Add crop mode for better responsive images
  if (width || height) {
    transformations.push('c_limit')
  }

  const transformationString = transformations.join(',')

  // Insert transformations after /upload/
  const beforeUpload = url.substring(0, uploadIndex + 8)
  const afterUpload = url.substring(uploadIndex + 8)

  return `${beforeUpload}${transformationString}/${afterUpload}`
}

/**
 * Creates an optimized Cloudinary loader for Next.js Image component
 */
export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}): string {
  return optimizeCloudinaryUrl(src, {
    width,
    quality: quality || 'auto',
    format: 'auto',
  })
}
