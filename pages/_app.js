import React from 'react'
import App from 'next/app'
import Head from 'next/head'
// import { ThemeProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from '../theme/theme'

import { enableES5 } from "immer"
enableES5()
// enableMapSet()

import '../public/css/common.css'
import '../public/css/normalize.css'
import '../public/css/next-wd.css'

export default class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      // <React.StrictMode>
      <React.Fragment>
        <Head>
          <title>Next WD</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        {/* <ThemeProvider theme={theme}> */}
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          {/* <CssBaseline /> */}
          <div id="app-root">
            <Component className="app-root" {...pageProps} />
          </div>
          <div id="modal-root">
            <div id="modal-root-container">
              {/* <div id="modal-root-wrapper"></div> */}
            </div>
          </div>
        {/* </ThemeProvider> */}
        <style jsx>{`
          #app-root {
            position: relative;
          }
          #app-root.v-modal-show {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          #modal-root {
            position: relative;
            z-index: 999;
          }
          #modal-root-container {
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            display: none;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
          }
          #modal-root-container.v-modal-show {
            display: flex;
          }
        `}</style>
      </React.Fragment>
      // </React.StrictMode>
    )
  }
}
