import React from "react";

import Header from "../components/head/head";
const style = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const withLayout = (Page: React.FunctionComponent) => {
  return () => (
    <div style={style}>
      <Header />
      <Page />
    </div>
  );
};

export default withLayout;
