import cowsay from 'cowsay-browser'

import Link from 'next/link'
import Head from 'next/head'

const CowsayHi = () => (
  <>
    <pre>{cowsay.say({text: "hi, I'm there!"})}</pre>
  </>
)

const Home = () => (
  <>
    <Head>
      <title>Next.js</title>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <h4>Welcome to Next.js!</h4>
    <img className="v-modal" src="/img/rescure/bg_modal.png" alt="" />
    <CowsayHi />
    <Link href="post/[pid]" as="post/abc">
      <a>First Post</a>
    </Link>
    <br/>
    <Link href="list" as="post?id=22">
      <a>List</a>
    </Link>

    <style jsx>{`
      .v-modal {
        width: 100%;
      }
    `}</style>
  </>
)

export default Home
