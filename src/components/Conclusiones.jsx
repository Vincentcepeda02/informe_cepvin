import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/07_conclusiones_cepvin.md?raw'

export default function Conclusiones() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
