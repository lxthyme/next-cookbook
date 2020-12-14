import React, { useState, useEffect } from 'react'
import { DFSVertex, DFSEdge, DFSGraph } from '../../algorithm_model/DFS'
import { VertexColor } from '../../algorithm_model/common'
// export const config = { amp: true };
import { MyWindow } from '../../interface/window'
import { BFSGraph, BFSVertex, makeGraph as MakeGraph } from '../../algorithm_model/BFS2'

declare let window: MyWindow

const makeGraph = () => {
  //创建 顶点
  var vA = new DFSVertex('A')
  var vB = new DFSVertex('B')
  var vC = new DFSVertex('C')
  var vD = new DFSVertex('D')
  var vE = new DFSVertex('E')
  var vF = new DFSVertex('F')

  //构建由 A 节点发出的边集
  var eA2 = new DFSEdge(3)
  var eA1 = new DFSEdge(1, eA2)
  vA.edge = eA1

  //构建有 B 节点发出的边集
  var eB3 = new DFSEdge(2)
  var eB2 = new DFSEdge(4, eB3)
  var eB1 = new DFSEdge(0, eB2)
  vB.edge = eB1

  //构建由 C 节点发出的边
  var eC1 = new DFSEdge(1)
  var eC2 = new DFSEdge(4)
  var eC3 = new DFSEdge(5)
  eC1.sibling = eC2
  eC2.sibling = eC3
  vC.edge = eC1

  //构建由 D 节点发出的边
  var eD1 = new DFSEdge(0)
  vD.edge = eD1

  //构建由 E 节点发出的边
  var eE3 = new DFSEdge(5)
  var eE2 = new DFSEdge(2, eE3)
  var eE1 = new DFSEdge(1, eE2)
  vE.edge = eE1

  //构建由 F 节点发出的边
  var eF2 = new DFSEdge(4)
  var eF1 = new DFSEdge(2, eF2)
  vF.edge = eF1

  //构建图
  var g = new DFSGraph([vA, vB, vC, vD, vE, vF])

  return { graph: g }
}
let timestamp = 0
const DFS = (graph: BFSGraph) => {
  for (let v of graph.graph) {
    if (v.color === VertexColor.White) {
      DFSVisit(graph, v)
    }
  }
}
const DFSVisit = (graph: BFSGraph, v: BFSVertex) => {
  timestamp += 1
  v.d = timestamp
  v.color = VertexColor.Gray
  console.log('访问中: ', v.value)
  let sibling = v.edge
  while (sibling != null) {
    const idx = sibling.idx
    const node = graph.getNode(idx)
    if (node.color === VertexColor.White) {
      node.pi = v
      DFSVisit(graph, node)
    }
    sibling = sibling.sibling
  }
  console.log('访问结束: ', v.value)
  v.color = VertexColor.Black
  timestamp += 1
  v.f = timestamp
  console.log('V: ', v)
}
const testDFS = () => {
  const { graph } = makeGraph()
  console.log('----------DFS----------')
  const result = DFS(graph)
  console.log('Result: ', result)
}
const testDFS2 = () => {
  const graph = MakeGraph()
  console.log('----------DFS----------')
  const result = DFS(graph)
  console.log('Result: ', result)
}
const Page = (props) => {
  useEffect(() => {
    window.t = { DFSVertex, DFSEdge, DFSGraph, makeGraph, DFS, testDFS,
      MakeGraph, testDFS2 }
    // testBFS()
  }, [])
  return <></>
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = 'Page'

export default Page
