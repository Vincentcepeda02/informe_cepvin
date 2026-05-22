import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/01_resumen_cepvin.md?raw'

export default function Resumen() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
