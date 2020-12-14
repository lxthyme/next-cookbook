import { useRouter } from "next/router";

const BlogContent = props => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

BlogContent.propTypes = {};

export default BlogContent;
