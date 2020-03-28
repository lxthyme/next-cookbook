import Link from "next/link";

const PostLink = props => {
  return (
    <>
      <li>
        <Link href={`/nextjs/post?title=${props.title}`}>
          <a>1: {props.title}</a>
        </Link>
        <span> - [</span>
        <Link href="/nextjs/[pid]" as={`/nextjs/${props.id}`}>
          <a>2: {props.id}</a>
        </Link>
        <span>]</span>
      </li>
      {/* <style jsx>{``}</style> */}
    </>
  );
};
PostLink.propTypes = {};

const BlogList = props => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

BlogList.propTypes = {};

export default BlogList;
