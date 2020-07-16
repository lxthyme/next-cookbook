import React, { useState, useEffect } from 'react'
import TreeNode from '../../algorithm_model/TreeNode'
// export const config = { amp: true };

var binaryTreePaths = function (root) {
  if (!root) return []
  else if (!root.left && !root.right) return [`${root.val}`]

  const left = binaryTreePaths(root.left)
  const right = binaryTreePaths(root.right)

  console.log('left: ', left)
  console.log('right: ', right)

  return [
    ...left.map((t) => `${root.val}->${t}`),
    ...right.map((t) => `${root.val}->${t}`),
  ]
}

const testMethod = () => {
//   const t5 = new TreeNode(5)
//   // const t4 = new TreeNode(4)
//   const t3 = new TreeNode(3)
//   const t2 = new TreeNode(2, null, t5)
//   const t1 = new TreeNode(1, t2, t3)
  const t1 = new TreeNode(1, null, null)
  console.log('T1: ', t1)

  const result = binaryTreePaths(t1)
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
