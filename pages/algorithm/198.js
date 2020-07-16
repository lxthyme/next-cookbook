import React, { useState, useEffect } from 'react'
import TreeNode from '../../algorithm_model/TreeNode'
// export const config = { amp: true };


const testMethod = () => {

  const result = largestValues(t1)
  console.log('Result: ', result)
}

const Page = (props) => {
  useEffect(() => {
    window.t = { testMethod }
  }, [])
  return <>{/* <style jsx>{``}</style> */}</>
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = 'Page'

export default Page
