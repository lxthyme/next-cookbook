import fetch from "node-fetch";

const Page = ({ posts }) => {
  if (!posts) {
    return <div>No Data</div>;
  }
  return (
    <>
      <ul>
        {posts.map(t => (
          <li>{t.title}</li>
        ))}
      </ul>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

// Page.propTypes = {}
// Page.getServerSideProps = async ({ req }) => {}
// Page.getInitialProps = async ({ req }) => {}
// Page.getStaticProps = async () => {
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/vf/group/muti/lists");
  const result = await res.json();
  const data = result.data;

  return {
    props: {
      posts: data.list || []
    }
  };
};

export default Page;
