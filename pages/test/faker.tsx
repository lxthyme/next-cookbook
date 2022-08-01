import React, { useEffect } from "react"
// import PropTypes from 'prop-types'
import { faker } from "@plugin/faker"

// export const config = { amp: true };

const Page = (props) => {
  useEffect(() => {
    window.faker = faker
  }, [])

  return (
    <>
      <h2>faker</h2>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "🔗 Page - COMPONENT"

export default Page
