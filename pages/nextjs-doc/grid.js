// export const config = { amp: true };

const Page = props => {
  return (
    <>
      <div className="v-grid">
        <div className="v-one">
          One Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          excepturi, quos est dolorem vel libero sed quas, dolores quaerat
          dolorum, laudantium officia omnis nobis dicta id unde odio accusantium
          consequatur.
        </div>
        <div className="v-two">
          Two One Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          excepturi, quos est dolorem vel libero sed quas, dolores quaerat
          dolorum, laudantium officia omnis nobis dicta id unde odio accusantium
          consequatur.
        </div>
        <div className="v-three">
          Three One Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          excepturi, quos est dolorem vel libero sed quas, dolores quaerat
          dolorum, laudantium officia omnis nobis dicta id unde odio accusantium
          consequatur.
        </div>
      </div>
      <style jsx>{`
        .v-grid {
          display: grid;
          grid: auto-flow dense / 40px 40px 1fr;
        }
      `}</style>
    </>
  );
};

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page;
