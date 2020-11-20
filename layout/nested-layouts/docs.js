import React from 'react'
import Link from 'next/link'
import AppLayout from './AppLayout'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const DocsLayout = ({ children }) => {
  return (
    <>
      <div className="docs-container">
        <div className="sidebar">
          <h3>Docs</h3>

          {Array.from({ length: 50 }).map((t, idx) => (
            <div key={idx}>
              <Link href="/nested-layouts/docs/page-1">
                <a>Page 1</a>
              </Link>
              <Link href="/nested-layouts/docs/page-2">
                <a>Page 2</a>
              </Link>
              <Link href="/nested-layouts/docs/page-3">
                <a>Page 3</a>
              </Link>
            </div>
          ))}
        </div>

        <div className="main">{children}</div>
      </div>
      <style jsx>{`
        .docs-container {
          display: flex;
        }
        .sidebar {
          width: 200px;
          padding: 20px;
          background: #fafafa;
          overflow-y: auto;
          flex: 0 0 170px;
        }
        .main {
          padding: 20px;
          flex: 0 1 auto;
        }
        a {
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
        }
      `}</style>
    </>
  )
}

// DocsLayout.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// DocsLayout.getInitialProps = async ({ req }) => {}
DocsLayout.displayName = '🌍 DocsLayout - Layout'

// export default DocsLayout
export default <AppLayout Layout={DocsLayout} />
