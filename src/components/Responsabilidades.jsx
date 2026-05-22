import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/05_responsabilidades_cepvin.md?raw'

export default function Responsabilidades() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
