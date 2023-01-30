import React from "react"
// import PropTypes from 'prop-types'
import LXNav from "../components/lxnav"

// export const config = { amp: true };

const Page = ({ children }) => {
  return (
    <>
      <LXNav />
      <main>{children}</main>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 LXLayout - PAGE"

export default Page
