import React from 'react'
import { marked } from 'marked'
import content from '../../docs_cepvin/08_prompts_cepvin.md?raw'

export default function Prompts() {
  const html = marked.parse(content || '')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
