import React, { useState, useEffect } from 'react'
import TreeNode from '../../algorithm_model/TreeNode'
// export const config = { amp: true };

var largestValues = function (root) {
  if (!root) return []
  const queue = [root]
  const allVal = [root.val]
  let maxTmp = []

  while (queue.length > 0) {
    const len = queue.length
    const floorVal = []
    const max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < len; i++) {
      const node = queue[i]
      max = Math.max(max, node.val)
      floorVal.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    for (let i = 0; i < len; i++) {
      queue.shift()
    }

    allVal.push(floorVal)
    maxTmp.push(max)
  }

  console.log('allVal: ', allVal);
  return maxTmp
}

const testMethod = () => {
  const n9 = new TreeNode(9)
  const n5 = new TreeNode(5)
  // const t4 = new TreeNode(4)
  const n3 = new TreeNode(3)
  const t3 = new TreeNode(3, n5, n3)
  const t2 = new TreeNode(2, null, n9)
  const t1 = new TreeNode(1, t3, t2)
  console.log('T1: ', t1)

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
