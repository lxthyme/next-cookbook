import React from "react"
// import PropTypes from 'prop-types'
import LXNav from "../components/lxnav"

// export const config = { amp: true };

const Page = ({ children }) => {
  return (
    <>
      <style jsx global>{`
        #__next {
          display: flex;
          justify-content: stretch;
          align-content: stretch;
          align-items: stretch;
          flex-direction: column;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        main {
          flex: 1 1;
          margin: 20px;
        }
      `}</style>
      <LXNav />
      <main>{children}</main>
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
