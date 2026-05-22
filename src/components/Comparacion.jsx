import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/04_comparacion_cepvin.md?raw'

export default function Comparacion() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
