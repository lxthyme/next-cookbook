/// Layout as a Higher Order Component

import Header from "../../components/nextjs/header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

const withLayout = Page => {
  return () => (
    <>
      <div style={layoutStyle}>
        <Header />
        <Page />
      </div>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

export default withLayout;
