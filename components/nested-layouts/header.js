import Link from 'next/link'
import React from 'react'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Header = (props) => {
  return (
    <>
      <div className="header-wrapper">
        <nav>
          <Link href="/nested-layouts/">
            <a>Home</a>
          </Link>
          <Link href="/nested-layouts/docs/page-1">
            <a>Docs</a>
          </Link>
          <Link href="/nested-layouts/blog/page-1">
            <a>Blog</a>
          </Link>
          <Link href="/nested-layouts/about">
            <a>About US</a>
          </Link>
          <Link href="/nested-layouts/test1">
            <a>Test 1</a>
          </Link>
          <Link href="/nested-layouts/test2">
            <a>Test 2</a>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .header-wrapper {
          padding: 20px;
          background: #111;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        a {
          padding: 10px 0;
          margin: 0 15px 0 0;
          white-space: nowrap;
          color: #fff;
        }
        a:hover {
          color: #fff;
          border-bottom: 1px solid #fff;
        }
      `}</style>
    </>
  )
}

// Header.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Header.getInitialProps = async ({ req }) => {}
Header.displayName = '🔗 Header - COMPONENT'

export default Header
