import Link from "next/link";

const PostLink = ({ post }) => {
  return (
    <>
      <li>
        <Link href={`/nextjs/post?title=${post.title}`}>
          <a>1: {post.title}</a>
        </Link>
        <span> - [</span>
        <Link href="/nextjs/blog/[pid]" as={`/nextjs/blog/${post.id}`}>
          <a>2: {post.id}</a>
        </Link>
        <span>]</span>
      </li>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
};
PostLink.propTypes = {};

const getPosts = () => [
  { id: "hello-nextjs", title: "Hello Next.js" },
  { id: "learn-nextjs", title: "Learn Next.js is awesome" },
  { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
];

const BlogList = props => {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        {/* <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" /> */}
        {getPosts().map(t => (
          <PostLink key={t.id} post={t} />
        ))}
      </ul>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

BlogList.propTypes = {};

export default BlogList;
