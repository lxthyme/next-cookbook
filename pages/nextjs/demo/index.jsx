import Link from 'next/link'

const Index = () => {
  return (
    <>
      <h4>Dynamic import</h4>
      <Link href="/nextjs/demo/dynamic">
        <a className="v-btn">Dynamic Import</a>
      </Link>
      <h4>fetch</h4>
      <Link href="/nextjs/demo/fetch">
        <a className="v-btn">fetch</a>
      </Link>
      <Link href="/nextjs/demo/fetch/ua">
        <a className="v-btn">fetch UA</a>
      </Link>
      <h4>Link</h4>
      <Link href="/nextjs/demo/link/forwardRef">
        <a className="v-btn">forwardRef</a>
      </Link>
      <h4>News</h4>
      <Link href="/nextjs/demo/news">
        <a className="v-btn">News</a>
      </Link>
      <Link href="/nextjs/demo/route?slug=something">
        <a className="v-btn">Route Slug</a>
      </Link>
      <h4>Custom</h4>
      <Link href="/nextjs/demo/route?slug=123" as="/q/123">
        <a className="v-btn">/q/123</a>
      </Link>
    </>
  )
}
export default Index
