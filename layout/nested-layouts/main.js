import React from 'react'
import Header from '../../components/nested-layouts/header'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Header />

        <div className="content-wrapper">{children}</div>
      </div>
      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-size: 20px;
          line-height: 1.7;
          font-weight: 400;
          background: #fff;
          color: #454545;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI',
            'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif;
          text-rendering: optimizeLegibility;
        }

        a {
          color: #1b789e;
          text-decoration: none;
        }

        a:hover {
          color: #166281;
        }

        h1,
        h2 {
          margin: 40px 0 30px;
        }

        h1 {
          font-size: 42px;
        }

        h2 {
          font-size: 36px;
        }

        h3 {
          margin: 10px 0;
        }

        p {
          margin: 0 0 10px;
        }

        img {
          max-width: 100%;
        }

        /* Layout */

        .main-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .content-wrapper {
          display: flex;
          flex-grow: 1;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}

// MainLayout.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// MainLayout.getInitialProps = async ({ req }) => {}
MainLayout.displayName = '🌍 MainLayout - Layout'

export default MainLayout
