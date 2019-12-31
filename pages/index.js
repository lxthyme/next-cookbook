import Link from 'next/link'
// import Head from 'next/head'

import MobileLayout from '../layout/Mobile'

const Home = () => (
  <MobileLayout title="Home">
    <p>Next.js</p>
    <Link href="nextjs/index" as="nextjs/index">
      <a>nextjs/index</a>
    </Link>
    <p>Next.js Examples</p>
    <Link href="nextjs-examples/index" as="nextjs-examples">
      <a>nextjs-examples</a>
    </Link>
    <p>Material UI</p>
    <Link href="material/index" as="material/index">
      <a>material/index</a>
    </Link>
    <p>React Official</p>
    <Link href="react" as="react">
      <a>React Official</a>
    </Link>

    <style jsx>{''}</style>
  </MobileLayout>
)

export default Home
