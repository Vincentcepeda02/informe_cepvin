import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/03_delitos_cepvin.md?raw'

export default function Delitos() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
