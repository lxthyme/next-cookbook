/// Layout as a Higher Order Component
// import Head from "next/head";

const withLayout = Page => {
  return () => (
    <>
      {/* <Head>
        <link rel="stylesheet" href="/css/common.css" />
      </Head> */}
      <Page />
      {/* <style jsx>{``}</style> */}
    </>
  );
};

export default withLayout;
