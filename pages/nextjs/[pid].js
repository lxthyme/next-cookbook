import { useRouter } from "next/router";
import withLayout from "../../layout/nextjs/withLayout";

const PostContent = props => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.pid}</h1>
      <p>This is the blog post content.</p>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

PostContent.propTypes = {};

export default withLayout(PostContent);
