export const config = { amp: true };

const Page = props => {
  const date = new Date();
  if (typeof window !== "undefined") {
    window.t = this;
    window.td = date;
    console.log('td: ', window.td)
} else {
    console.log('t: ', this)
    console.log('window: ', typeof window)
  }
  return (
    <>
      <div>
        <p>Some time: {date.toJSON()}</p>
        <amp-timeago
          width="0"
          height="15"
          datetime={date.toJSON()}
          layout="responsive"
        >
          .
        </amp-timeago>
      </div>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page;
