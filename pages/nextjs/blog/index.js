// import Layout from "../../layout/nextjs/layout";
// import withLayout from "../../layout/nextjs/withLayout";
import ContentLayout from "../../../layout/nextjs/contentLayout";
import BlogList from "../../../components/nextjs/blogList";

/// Method 1
// const Index = props => {
//   return (
//     <>
//       <Layout>
//         <p>Hello Next.js</p>
//       </Layout>
//       {/* <style jsx>{``}</style> */}
//     </>
//   );
// };

// Index.propTypes = {};

// export default Index;

/// Method 2: Layout as a Higher Order Component
// const Index = props => {
//   return (
//     <>
//       <p>Hello Next.js</p>
//       {/* <style jsx>{``}</style> */}
//     </>
//   );
// };

// Index.propTypes = {};

// export default withLayout(Index);

/// Method 3: Page content as a prop
const IndexContent = (
  <>
    <p>Hello Next.js</p>
    <BlogList />
    {/* <style jsx>{``}</style> */}
  </>
);
// IndexContent.propTypes = {};

export default () => <ContentLayout content={IndexContent} />;
