import { Button } from 'antd'
// export const config = { amp: true };
import ToolLayout from '../layout/ToolLayout'

const Page = (props) => {
  const mainContent = <div>123</div>
  return (
    <>
      {/* <ToolLayout siderMenuItem={SiderMenuItem} /> */}
      {/* <ToolLayout siderMenu={SiderMenuItem} /> */}
      {/* <ToolLayout menuItems={menuItems} /> */}
      <ToolLayout mainContent={mainContent} />
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page
