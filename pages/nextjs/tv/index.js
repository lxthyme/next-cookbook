import Layout from "../../../layout/nextjs/layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(t => (
          <li key={t.id}>
            <Link href="/nextjs/tv/[id]" as={`/nextjs/tv/${t.id}`}>
              <a>{t.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <style jsx>{``}</style> */}
    </Layout>
  );
};

Index.propTypes = {};
Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log("Data: ", data.length);

  return { shows: data.map(t => t.show) };
};

export default Index;
