import React from 'react'
import { DocsThemeConfig,useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Fluent Docs</span>,
  project: {
    link: 'https://github.com/fluent-qa/fluentqa-python',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/fluent-qa/fluentqa-python',
  footer: {
    text: 'all the docs',
  },
  useNextSeoProps: () =>({
    titleTemplate: "%s - Fluent QA"
  }),
  head: ()=>{
    const { frontMatter } = useConfig();
    return (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title ?? "Fluent Documentation"} />
        <meta
          property="og:description"
          content={frontMatter.description ?? "Fluent Documentation"}
        />
    
    </>)
  }
}

export default config
