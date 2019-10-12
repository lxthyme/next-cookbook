import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface LayoutProps {
  title?: string
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd',
}

const Mobile: React.FunctionComponent<LayoutProps> = ({children, title}) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="about">
          <a>About</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
  </div>
)

export default Mobile
