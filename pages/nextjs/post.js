// import { useRouter } from "next/router";
import withLayout from "../../layout/nextjs/withLayout";
import BlogContent from "../../components/nextjs/blogContent";

const Post = props => {
  //   const router = useRouter();
  return (
    <>
      {/* <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p> */}
      <BlogContent />
      {/* <style jsx>{``}</style> */}
    </>
  );
};

Post.propTypes = {};

export default withLayout(Post);
