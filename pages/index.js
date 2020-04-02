import Link from 'next/link'
import withLayout from '../layout/withLayout'

const Home = () => (
  <div className="container">
  <Link href="material">
    <a className="btn-x-blue">Material UI</a>
  </Link>
    <Link href="nextjs">
      <a className="btn-x-blue">nextjs</a>
    </Link>
    <Link href="/nextjs-doc">
      <a className="btn-x-blue">Nextjs doc</a>
    </Link>
    <Link href="nextjs-examples">
      <a className="btn-x-blue">Nextjs Examples</a>
    </Link>
    <Link href="react">
      <a className="btn-x-blue">React Official</a>
    </Link>
    <Link href="react-spring/demo">
      <a className="btn-x-blue">React Spring</a>
    </Link>

    <Link href="/404">
      <a className="btn-x-blue">404</a>
    </Link>
    <Link href="/about">
      <a className="btn-x-blue">About</a>
    </Link>
    <Link href="/apiQuote?author=123">
      <a className="btn-x-blue">apiQuote</a>
    </Link>
    <Link href="/index2">
      <a className="btn-x-blue">index2</a>
    </Link>
    <Link href="/index3">
      <a className="btn-x-blue">index3</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
)

export default withLayout(Home)
