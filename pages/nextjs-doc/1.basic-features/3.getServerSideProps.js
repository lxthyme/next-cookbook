import fetch from "node-fetch";

const Page = ({ data }) => {
  return (
    <>
      <h4>3.getServerSideProps</h4>
      <ul>{data.list && data.list.map((t, idx) => <li key={idx}>{t.guid}</li>)}</ul>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

// Page.propTypes = {}
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/vf/group/muti/lists");
  const result = await res.json();
  const data = result.data;

  return { props: { data } };
};

export default Page;
