import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>LXThyme's Sample Code for Next's Project</title>
        {/* <!-- Required meta tags--> */}
        <meta charSet="utf-8"/>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover, shrink-to-fit=no"/>
        {/* <meta key="apple-mobile-web-app-capable" name="apple-mobile-web-app-capable" content="yes"/> */}
        {/* <!-- Color theme for statusbar (Android only) --> */}
        <meta key="theme-color" name="theme-color" content="#2196f3"/>
      </Head>
    </div>
  )
}

export default IndexPage
