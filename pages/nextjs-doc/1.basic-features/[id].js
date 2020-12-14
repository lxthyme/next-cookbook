import fetch from "node-fetch";

const Post = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

// Post.propTypes = {};
export const getStaticPaths = async (a, b, c, d, e) => {
  console.log(
    "->getStaticPaths - A: ",
    a,
    "\b: ",
    b,
    "\tC: ",
    c,
    "\tD: ",
    d,
    "\tE: ",
    e
  );
  const res = await fetch("http://localhost:3000/api/vf/group/muti/lists");
  const result = await res.json();
  const data = result.data || {};
  const list = data.list || [];

  const paths = list.map((t, idx) => `/nextjs-doc/1.basic-features/post-${idx}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (a, b, c, d, e) => {
  console.log(
    "->getStaticProps - A: ",
    a,
    "\b: ",
    b,
    "\tC: ",
    c,
    "\tD: ",
    d,
    "\tE: ",
    e
  );
  const { params } = a;
  const res = await fetch(
    `http://localhost:3000/api/custom/post?id=${params.id}`
  );
  const result = await res.json();
  const data = result.data || {};
  return { props: { post: data } };
};

export default Post;
