import Link from 'next/link'

const Index = () => {
  return (
    <>
      <h4>fetch</h4>
      <Link href="/nextjs/demo/fetch" as="/nextjs/demo/fetch">
        <a className="v-btn">fetch</a>
      </Link>
      <Link href="/nextjs/demo/fetch/ua" as="/nextjs/demo/fetch/ua">
        <a className="v-btn">UA</a>
      </Link>
      <h4>News</h4>
      <Link href="/nextjs/demo/news" as="/nextjs/demo/news">
        <a className="v-btn">news</a>
      </Link>
      <h4>Link</h4>
      <Link
        href="/nextjs/demo/link/forwardRef"
        as="/nextjs/demo/link/forwardRef"
      >
        <a className="v-btn">forwardRef</a>
      </Link>
      <Link href="/nextjs/demo/route?slug=something" as="/nextjs/demo/route/something">
        <a className="v-btn">Route Slug</a>
      </Link>
    </>
  )
}
export default Index
