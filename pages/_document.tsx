import Document, {Html, Head, Main, NextScript} from 'next/document'

export class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    // console.log('Document initialProps: ', initialProps)
    return {...initialProps}
  }
  render() {
    return (
      <Html>
        <meta name="viewport" content="minimal-ui" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
