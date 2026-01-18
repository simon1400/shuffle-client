'use client'

import React, { useMemo } from 'react'

interface LexicalNode {
  type: string
  children?: LexicalNode[]
  text?: string
  format?: number
  tag?: string
  listType?: string
  url?: string
  [key: string]: unknown
}

interface LexicalContent {
  root: LexicalNode
}

const FORMAT_BOLD = 1
const FORMAT_ITALIC = 2
const FORMAT_STRIKETHROUGH = 4
const FORMAT_UNDERLINE = 8
const FORMAT_CODE = 16

function renderText(node: LexicalNode, key: number): React.ReactNode {
  let text: React.ReactNode = node.text || ''
  const format = node.format || 0

  if (format & FORMAT_BOLD) text = <strong key={`b-${key}`}>{text}</strong>
  if (format & FORMAT_ITALIC) text = <em key={`i-${key}`}>{text}</em>
  if (format & FORMAT_STRIKETHROUGH) text = <s key={`s-${key}`}>{text}</s>
  if (format & FORMAT_UNDERLINE) text = <u key={`u-${key}`}>{text}</u>
  if (format & FORMAT_CODE) text = <code key={`c-${key}`}>{text}</code>

  return text
}

function renderNode(node: LexicalNode, key: number): React.ReactNode {
  const children = node.children?.map((child, i) => renderNode(child, i))

  switch (node.type) {
    case 'root':
      return <>{children}</>

    case 'paragraph':
      return <p key={key}>{children}</p>

    case 'heading': {
      const tag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined
      const HeadingTag = tag || 'h1'
      return <HeadingTag key={key}>{children}</HeadingTag>
    }

    case 'text':
      return renderText(node, key)

    case 'linebreak':
      return <br key={key} />

    case 'list':
      if (node.listType === 'number') {
        return <ol key={key}>{children}</ol>
      }
      return <ul key={key}>{children}</ul>

    case 'listitem':
      return <li key={key}>{children}</li>

    case 'link':
      return (
        <a key={key} href={node.url as string} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )

    case 'quote':
      return <blockquote key={key}>{children}</blockquote>

    case 'code':
      return (
        <pre key={key}>
          <code>{children}</code>
        </pre>
      )

    default:
      return children || null
  }
}

export function LexicalRenderer({ content }: { content: string | LexicalContent | null | undefined }) {
  const rendered = useMemo(() => {
    if (!content) return null

    try {
      const data: LexicalContent = typeof content === 'string' ? JSON.parse(content) : content

      if (!data?.root) return null

      return renderNode(data.root, 0)
    }
    catch (e) {
      console.error('Failed to parse Lexical content:', e)
      return null
    }
  }, [content])

  return <>{rendered}</>
}
