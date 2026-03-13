'use client'

import type { DOMNode, HTMLReactParserOptions } from 'html-react-parser'

import parse, { Element } from 'html-react-parser'
import { optimizeCloudinaryUrl } from 'lib/cloudinary-loader'

const CONTENT_IMAGE_WIDTH = 1400

const parserOptions: HTMLReactParserOptions = {
  replace(domNode: DOMNode) {
    if (domNode instanceof Element && domNode.name === 'img') {
      const src = domNode.attribs.src
      if (src?.includes('res.cloudinary.com')) {
        domNode.attribs.src = optimizeCloudinaryUrl(src, CONTENT_IMAGE_WIDTH)
        domNode.attribs.loading = domNode.attribs.loading || 'lazy'
      }
    }
  },
}

/**
 * HtmlRenderer - рендерит HTML контент из CKEditor
 * Переименован из LexicalRenderer для обратной совместимости с импортами
 */
export function LexicalRenderer({ content }: { content: string | null | undefined }) {
  if (!content) return null

  return <>{parse(content, parserOptions)}</>
}
