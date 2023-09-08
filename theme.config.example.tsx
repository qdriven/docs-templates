import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Fluent Docs</span>,
  project: {
    link: '${project_url}',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: '${project_doc_url}',
  footer: {
    text: 'all the docs',
  },
  useNextSeoProps: () =>{
    titleTemplate: "%s - Fluent QA"
  }
}

export default config
