import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
// import { theme } from "../theme/theme";

export default class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   // console.log('Document initialProps: ', initialProps)
  //   return { ...initialProps };
  // }
  render () {
    return (
      <Html lang="en">
        <Head>
          {/* <meta key="charSet" charSet="utf-8" /> */}
          {/* <meta key="viewport" name="viewport" content="minimal-ui" /> */}
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          {/* <meta key="viewport"
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          /> */}
          {/* <meta key="viewport"
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          /> */}
          {/* PWA primary color */}
          {/* <meta key="theme-color" name="theme-color" content={theme.palette.primary.main} /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="../../../../css/normalize.css" />
          <link rel="stylesheet" href="../../../../css/common.css" />
          <link rel="stylesheet" href="../../../../css/next-wd.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      /// Styles fragment is rendered after the app and page rendering finish.
      sheets.getStyleElement()
    ]
  }
}
