import Link from 'next/link'
import withLayout from '../../layout/withLayout'

const Home = () => (
  <div className="container">
    <Link href="/nextjs/amp">
      <a className="btn-x-blue">AMP</a>
    </Link>
    <Link href="/nextjs/tv">
      <a className="btn-x-blue">Batman TV</a>
    </Link>
    <Link href="/nextjs/blog">
      <a className="btn-x-blue">Blog</a>
    </Link>
    <Link href="/nextjs/about">
      <a className="btn-x-blue">About</a>
    </Link>
    <Link href="/nextjs/agent">
      <a className="btn-x-blue">User Agent</a>
    </Link>
    <Link href="/nextjs/md">
      <a className="btn-x-blue">Markdown</a>
    </Link>
    <Link href="/nextjs/post?title=Hello Next.js">
      <a className="btn-x-blue">Post</a>
    </Link>
    <hr />
    <Link href="/nextjs/demo">
      <a className="btn-x-blue">Demo</a>
    </Link>
    <h4>Learn</h4>
    <Link href="/nextjs/learn/dynamic-routing">
      <a className="btn-x-blue">dynamic-routing</a>
    </Link>
    <Link href="/nextjs/learn/fetch-data">
      <a className="btn-x-blue">fetch-data</a>
    </Link>
    <hr />
    <Link href="/nextjs/typescript">
      <a className="btn-x-blue">typescript</a>
    </Link>
    <Link href="/nextjs/index2">
      <a className="btn-x-blue">Index2</a>
    </Link>
    <Link href="/nextjs/index3">
      <a className="btn-x-blue">JSX</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
)

export default withLayout(Home)
