import Link from 'next/link'
import React from 'react'
import DefaultLayout from './default'
import MainLayout from './main'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const BlogLayout = ({ children }) => {
  return (
    <>
      <div className="blog-container">
        <div className="main">{children}</div>
        <div className="sidebar">
          <h3>Blog</h3>
          {Array.from({ length: 50 }).map((t, idx) => (
            <div key={idx}>
              <Link href="nested-layouts/blog/page-1">
                <a>Page 1</a>
              </Link>
              <Link href="nested-layouts/blog/page-2">
                <a>Page 2</a>
              </Link>
              <Link href="nested-layouts/blog/page-3">
                <a>Page 3</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .blog-container {
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

// BlogLayout.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// BlogLayout.getInitialProps = async ({ req }) => {}
BlogLayout.displayName = '🌍 BlogLayout - LAYOUT'

// export default BlogLayout
// export default <AppLayout Layout={BlogLayout} />
export default (props) => {
  const { children: Component, ...rest } = props
  const Layout = Component.Layout || DefaultLayout
  console.log('Blog: ', props)
  return (
    <MainLayout>
      <Layout>
        <BlogLayout>
          <Component {...rest} />
        </BlogLayout>
      </Layout>
    </MainLayout>
  )
}
