import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ fontWeight: 600 }}>
        DryPeng
      </span>
      <span style={{ marginLeft: '.4em', fontWeight: 400 }}>
        Inside Docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/DryPeng/inside-docs',
  },
  docsRepositoryBase: 'https://github.com/DryPeng/inside-docs',
  useNextSeoProps() {
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://inside.docs.drypeng.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
   
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'DP.inside-docs'} />
        <link rel="logo" href="/public/favicon.ico" type="image/svg+xml" />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub ↗'
  },
  feedback: {
    content: 'Question? Give us feedback ↗',
    labels: 'feedback'
  },
  footer: {
    text: (
      <span>
        Product Docs<br></br>
        <span>
          {new Date().getFullYear()} &copy; {' '} 
            <a href="https://drypeng.io" target="_blank">
              DryPeng
            </a>
        </span>
      </span>
    )   
  },
  primaryHue: {
    light: 200,
    dark: 300
  },
  primarySaturation: {
    light: 100,
    dark: 100
  },
  toc: {
    backToTop: true
  }
}

export default config
