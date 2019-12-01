import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Link href="/nextjs/index2" as="/nextjs/index2">
        <a className="v-btn">Index2</a>
      </Link>
      <Link href="/nextjs/demo" as="/nextjs/demo">
        <a className="v-btn">Demo</a>
      </Link>
      <Link href="/nextjs/learn" as="/nextjs/learn">
        <a className="v-btn">Learn</a>
      </Link>
      <Link href="/nextjs/post" as="/nextjs/post">
        <a className="v-btn">Post</a>
      </Link>
      <Link href="/nextjs/typescript" as="/nextjs/typescript">
        <a className="v-btn">typescript</a>
      </Link>
    </>
  )
}
export default Index
