import React from 'react'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      {/* <button className="btn">添加备注</button> */}
      <div className="btn-wrapper">
        <div>
          <span>添加备注</span>
        </div>
      </div>
      <style jsx>{`
        .btn-wrapper {
          display: inline-block;
          font-family: Arial, Helvetica, sans-serif;
          color: #c6d4df;
          font-size: 12px;
        }
        .btn-wrapper > div {
          border-radius: 2px;
          border: none;
          padding: 1px;
          display: inline-block;
          cursor: pointer;
          text-decoration: none !important;
          color: #67c1f5 !important;
          background: rgba(103, 193, 245, 0.2);
        }
        .btn-wrapper > div > span {
          border-radius: 2px;
          display: block;
          background: transparent;

          padding: 0 15px;
          font-size: 15px;
          line-height: 30px;
        }
      `}</style>
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = '📌 Page - PAGE'

export default Page
