import React from 'react'
import Header from '../../components/nested-layouts/header'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Test2 = (props) => {
  return (
    <>
      <Header />
      <h3>Test 2</h3>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Test2.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Test2.getInitialProps = async ({ req }) => {}
Test2.displayName = '📌 Test2 - PAGE'

export default Test2
