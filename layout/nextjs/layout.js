import Header from "../../components/nextjs/header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #ddd"
};

const NextLayout = props => {
  return (
    <>
      <div style={layoutStyle}>
        <Header />
        {props.children}
      </div>
      {/* <style jsx>{``}</style> */}
    </>
  );
};

NextLayout.propTypes = {};

export default NextLayout;
