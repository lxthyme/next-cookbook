import React from 'react'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="default-container">
        <div className="main">{children}</div>
      </div>
      <style jsx>{`
        .default-container {
          padding: 40px 20px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

// DefaultLayout.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// DefaultLayout.getInitialProps = async ({ req }) => {}
DefaultLayout.displayName = '🌍 DefaultLayout - Layout'

export default DefaultLayout
