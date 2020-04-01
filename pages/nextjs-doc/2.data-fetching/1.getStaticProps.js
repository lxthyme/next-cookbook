import fetch from "node-fetch";

const Page = ({ posts }) => {
  console.log("2. process.cwd(): ", process.cwd());
  return (
    <>
      <ul>
        {posts.map((t, idx) => (
          <li key={idx}>{t.guid}</li>
        ))}
      </ul>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

// Page.propTypes = {}
// export const getStaticProps = async () => {}
// export const getStaticPaths = async () => {}
export const getStaticProps = async ({ params, preview, previewData }) => {
  const res = await fetch("http://localhost:3000/api/vf/group/muti/lists");
  const result = await res.json();
  const data = result.data;
  console.log("1. process.cwd(): ", process.cwd());

  return { props: { posts: data.list } };
};
// export const getServerSideProps = async () => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page;
