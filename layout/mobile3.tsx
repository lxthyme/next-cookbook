import React, { ReactElement } from "react";
import Header from "../components/head/head";

const style = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

type Props = {
  title?: string;
  content: ReactElement
};

const Layout: React.FunctionComponent<Props> = ({ content, title = "placeholder" }) => {
  console.log("title: ", title);
  return (
    <div style={style}>
      <Header />
      {content}
    </div>
  );
};

export default Layout;
