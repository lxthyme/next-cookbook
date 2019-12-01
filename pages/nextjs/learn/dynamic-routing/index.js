import Mobile from '../../../../layout/Mobile'
import Link from 'next/link'

const PostLink = ({ id }) => {
  return (<>
    <li>
      <Link href="/nextjs/learn/dynamic-routing/p/[id]" as={`/nextjs/learn/dynamic-routing/p/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
    <style jsx>{''}</style>
  </>)
}

const Blog = () => {
  return (<>
    <Mobile>
      <h4>My Blog</h4>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Mobile>
    <style jsx>{''}</style>
  </>)
}

export default Blog
