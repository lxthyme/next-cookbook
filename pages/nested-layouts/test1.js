import React from 'react'
import Header from '../../components/nested-layouts/header'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Test1 = (props) => {
  return (
    <>
      <Header />
      <h3>Test 1</h3>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Test1.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Test1.getInitialProps = async ({ req }) => {}
Test1.displayName = '📌 Test1 - PAGE'

export default Test1
