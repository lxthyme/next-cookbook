import Link from "next/link"
import React from "react"
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      <Link href="/lxthyme">Home</Link>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 LXNav - PAGE"

export default Page
