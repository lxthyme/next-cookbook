import Link from 'next/link'
// import Head from 'next/head'

import MobileLayout from '../layout/Mobile'

const Home = () => (
  <MobileLayout title="Home">
    <p>Next.js</p>
    <Link href="nextjs/index" as="nextjs/index">
      <a>nextjs/index</a>
    </Link>
    <p>Material UI</p>
    <Link href="material/index" as="material/index">
      <a>material/index</a>
    </Link>

    <style jsx>{''}</style>
  </MobileLayout>
)

export default Home
