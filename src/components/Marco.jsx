import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/02_marco_cepvin.md?raw'

export default function Marco() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
