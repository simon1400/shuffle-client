'use client'

import parse from 'html-react-parser'

/**
 * HtmlRenderer - рендерит HTML контент из CKEditor
 * Переименован из LexicalRenderer для обратной совместимости с импортами
 */
export function LexicalRenderer({ content }: { content: string | null | undefined }) {
  if (!content) return null

  // CKEditor хранит контент как HTML строку
  return <>{parse(content)}</>
}
