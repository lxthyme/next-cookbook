import Layout from "../../../layout/nextjs/layout";
import fetch from "isomorphic-unfetch";

const PostContent = props => {
  return (
    <Layout>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
      {/* <style jsx>{``}</style> */}
    </Layout>
  );
};

PostContent.propTypes = {};
PostContent.getInitialProps = async ctx => {
  const { id } = ctx.query;
  console.log("ID: ", id);

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log("show: ", show.name);

  return { show };
};

export default PostContent;
