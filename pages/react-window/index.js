import Link from 'next/link'

// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      <Link href="react-window/fixedSizeList">
        <a className="btn-x-blue">Fixed Size List</a>
      </Link>
      <Link href="react-window/variableSizeList">
        <a className="btn-x-blue">Variable Size List</a>
      </Link>
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
