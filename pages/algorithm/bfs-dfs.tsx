import React, { useState, useEffect } from 'react'
import { makeGraph as MakeGraph, BFS, DFS } from '../../algorithm_model/BFS2'
import { MyWindow } from '../../interface/window'
// export const config = { amp: true };

declare let window: MyWindow
const testBFS = () => {
  const graph = MakeGraph()
  const vB = graph.graph[1]
  console.log('----------BFS----------')
  const result = BFS(graph, vB)
  console.log('Result: ', result)
}
const testDFS = () => {
  const graph = MakeGraph()
  console.log('----------DFS----------')
  const result = DFS(graph)
  console.log('Result: ', result)
}
const Page = (props) => {
  useEffect(() => {
    window.t = { testBFS, testDFS }
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
