import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>HQ Online Headless Starter</span>,
  project: {
    link: 'https://github.com/HQ-Online-BV/hq-next-starter-test-2',
  },
  docsRepositoryBase: 'https://github.com/HQ-Online-BV/hq-next-starter-test-2',
  footer: {
    text: '',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – HQ Online',
        noindex: true,
        nofollow: true,
      }
    }else{
      return{
        noindex: true,
        nofollow: true,
      }
    }
  }
}

export default config