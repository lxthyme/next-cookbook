import Link from "next/link";
import withLayout from "../../layout/withLayout";

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
    <Link href='/nextjs/post?title=Hello Next.js'>
      <a className="btn-x-blue">Post</a>
    </Link>
    {/* <style jsx>{``}</style> */}
  </div>
);

export default withLayout(Home);
