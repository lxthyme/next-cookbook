const {say} = require('cowsay-browser')

import Link from 'next/link'
// import Head from 'next/head'

import MobileLayout from '../layout/Mobile'

const CowsayHi = () => (
  <>
    <pre>{say({text: "hi, I'm there!"})}</pre>
  </>
)

const Home: React.FunctionComponent = () => (
  <MobileLayout title="Home">
    {/* <Head>
      <title>Next.js</title>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head> */}
    <h4>Welcome to Next.js!</h4>
    <img className="v-modal" src="/img/rescure/bg_modal.png" alt="" />
    <CowsayHi />

    <h4>Main</h4>
    <Link href="about" as="about">
      <a>About</a>
    </Link>
    <Link href="index2" as="index2">
      <a>Index2</a>
    </Link>

    <h4>Forward Ref</h4>
    <Link href="forwardref" as="forwardref">
      <a>Fordward Ref</a>
    </Link>

    <h4>List</h4>
    <Link href="list" as="list">
      <a>List</a>
    </Link>
    <Link href="post" as="post">
      <a>Post</a>
    </Link>
    <Link href="post/[pid]" as="post/abc">
      <a>First Post</a>
    </Link>

    <h4>Dynamic</h4>
    <Link href="dynamic" as="dynamic">
      <a>Dynamic</a>
    </Link>
    {/* <Link href="dynamic2" as="dynamic2">
      <a>Dynamic2</a>
    </Link> */}
    {/* <Link href="dynamic3" as="dynamic3">
      <a>Dynamic3</a>
    </Link> */}
    <Link href="dynamic4" as="dynamic4">
      <a>Dynamic4</a>
    </Link>

    <h4>Fetch</h4>
    <Link href="fetch" as="fetch">
      <a>Fetch</a>
    </Link>
    <Link href="fetch-ua" as="fetch-ua">
      <a>Fetch UA</a>
    </Link>

    <style jsx>{`
      .v-modal {
        width: 100%;
      }
      a {
        display: block;
      }
    `}</style>
  </MobileLayout>
)

export default Home
