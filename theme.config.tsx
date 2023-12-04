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
        Docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/DryPeng/drypeng-docs',
  },
  docsRepositoryBase: 'https://github.com/DryPeng/drypeng-docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nextra'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.drypeng.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
   
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'DryPeng Docs'} />
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
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="DryPeng"
            href="https://drypeng.io"
          >
            <span>Powered by</span>
            <span style={{ marginLeft: '.4em', fontWeight: 600 }}>
              DryPeng
            </span>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} DryPeng Docs.
        </p>
      </div>
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
