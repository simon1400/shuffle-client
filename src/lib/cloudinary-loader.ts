export function optimizeCloudinaryUrl(src: string, width: number, quality?: number): string {
  if (!src.includes('res.cloudinary.com')) {
    return src
  }

  const uploadIndex = src.indexOf('/upload/')
  if (uploadIndex === -1) {
    return src
  }

  const q = quality || 75
  const transforms = `f_auto,q_${q},w_${width},c_limit`

  const before = src.substring(0, uploadIndex + 8)
  const after = src.substring(uploadIndex + 8)

  return `${before}${transforms}/${after}`
}

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}): string {
  return optimizeCloudinaryUrl(src, width, quality)
}
