import Link from 'next/link'
import withLayout from '../layout/withLayout'

const Home = () => (
  <div className="container">
    <Link href="/apiQuote?author=123">
      <a className="btn-x-blue">apiQuote</a>
    </Link>
    <Link href="/nextjs">
      <a className="btn-x-blue">Nextjs learn demo</a>
    </Link>
    <Link href="/nextjs-doc">
      <a className="btn-x-blue">Nextjs doc</a>
    </Link>
    <hr />
    <p>Next.js - v3.9.1</p>
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
    {/* <style jsx>{``}</style> */}
  </div>
)

export default withLayout(Home)
