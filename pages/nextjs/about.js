// import Layout from "../../layout/nextjs/layout";
// import withLayout from "../../layout/nextjs/withLayout";
import ContentLayout from "../../layout/nextjs/contentLayout";

/// Method 1
// const About = props => {
//   return (
//     <>
//       <Layout>
//         <p>This is the about page</p>
//       </Layout>
//       {/* <style jsx>{``}</style> */}
//     </>
//   );
// };

// About.propTypes = {};

// export default About;

/// Method 2: Layout as a Higher Order Component
// const About = props => {
//   return (
//     <>
//       <p>This is the about page</p>
//       {/* <style jsx>{``}</style> */}
//     </>
//   );
// };

// About.propTypes = {};

// export default withLayout(About);

/// Method 3: Page content as a prop
const AboutContent = (
  <>
    <p>This is the about page</p>
    {/* <style jsx>{``}</style> */}
  </>
);

// AboutContent.propTypes = {};

export default () => <ContentLayout content={AboutContent} />;
