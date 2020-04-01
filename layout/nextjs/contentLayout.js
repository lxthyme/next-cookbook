/// Page content as a prop

import Header from "../../components/nextjs/header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

const ContentLayout = props => (
  <>
    <div style={layoutStyle}>
      <Header />
      {props.content}
    </div>
    {/* <style jsx>{``}</style> */}
  </>
);

export default ContentLayout;
