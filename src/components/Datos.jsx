import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/06_datos_cepvin.md?raw'

export default function Datos() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
