import { useRouter } from "next/router";
import Markdown from "react-markdown";
import withLayout from "../../layout/nextjs/withLayout";

const MD = props => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.id}</h1>
      <p className="v-h1">autoprefixer</p>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
`}
        />
      </div>
      <style jsx>{`
        .v-h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 2s ease-in-out;
        }
      `}</style>
      <style jsx global>{`
        .markdown {
          font-family: "Arial";
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};

MD.propTypes = {};

export default MD;
