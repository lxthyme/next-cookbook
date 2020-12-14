import React from 'react'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Index = (props) => {
  return (
    <>
      <div className="page">
        <h1>Homepage</h1>

        <p>Welcome to our website</p>
      </div>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Index.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Index.getInitialProps = async ({ req }) => {}
Index.displayName = '📌 Index - PAGE'

export default Index
