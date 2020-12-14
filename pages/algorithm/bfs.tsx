import React, { useState, useEffect } from 'react'
import { BFSVertex, BFSEdge, BFSGraph } from '../../algorithm_model/BFS'
import { makeGraph as MakeGraph } from '../../algorithm_model/BFS2'
import { VertexColor } from '../../algorithm_model/common'

// export const config = { amp: true };
import { MyWindow } from '../../interface/window'
declare let window: MyWindow

const makeGraph = () => {
  /// 1. 创建顶点
  const vA = new BFSVertex('A')
  const vB = new BFSVertex('B')
  const vC = new BFSVertex('C')
  const vD = new BFSVertex('D')
  const vE = new BFSVertex('E')
  const vF = new BFSVertex('F')

  /// 2. 构建由 A 节点发出的边集
  const eA2 = new BFSEdge(3)
  const eA1 = new BFSEdge(1, eA2)
  vA.edge = eA1

  /// 3. 构建由 B 节点发出的边集
  const eB3 = new BFSEdge(2)
  const eB2 = new BFSEdge(4, eB3)
  const eB1 = new BFSEdge(0, eB2)
  vB.edge = eB1

  /// 3. 构建由 C 节点发出的边集
  const eC3 = new BFSEdge(5)
  const eC2 = new BFSEdge(4, eC3)
  const eC1 = new BFSEdge(1, eC2)
  eC1.sibling = eC2
  eC2.sibling = eC3
  vC.edge = eC1

  /// 3. 构建由 D 节点发出的边集
  const eD1 = new BFSEdge(0)
  vD.edge = eD1

  /// 3. 构建由 E 节点发出的边集
  const eE3 = new BFSEdge(5)
  const eE2 = new BFSEdge(2, eE3)
  const eE1 = new BFSEdge(1, eE2)
  vE.edge = eE1

  /// 3. 构建由 F 节点发出的边集
  const eF2 = new BFSEdge(4)
  const eF1 = new BFSEdge(2, eF2)
  vF.edge = eF1

  /// 4. 构建图
  const g = new BFSGraph([vA, vB, vC, vD, vE, vF])

  return { graph: g, vB }
}
const BFS = (graph: BFSGraph, s: BFSVertex) => {
  const queue: Array<BFSVertex> = []
  s.color = VertexColor.Gray
  s.d = 0
  queue.push(s)
  while (queue.length > 0) {
    const u = queue.shift()
    if (u.edge == null) continue
    let sibling = u.edge
    while (sibling != null) {
      const idx = sibling.idx
      const n = graph.getNode(idx)
      if (n.color === VertexColor.White) {
        n.color = VertexColor.Gray
        n.d = u.d + 1
        n.pi = u
        queue.push(n)
        console.log('访问中: ', n.value)
      }
      sibling = sibling.sibling
    }
    u.color = VertexColor.Black
    console.log('访问結束: ', u.value)
  }
  return queue
}
const testBFS = () => {
  const { graph, vB } = makeGraph()
  console.log('----------BFS----------')
  const result = BFS(graph, vB)
  console.log('Result: ', result)
}
const testBFS2 = () => {
  const graph = MakeGraph()
  const vB = graph.graph[1]
  console.log('----------BFS----------')
  const result = BFS(graph, vB)
  console.log('Result: ', result)
}
const Page = (props) => {
  useEffect(() => {
    window.t = { BFSVertex, BFSEdge, BFSGraph, makeGraph, BFS, testBFS,
      MakeGraph, testBFS2 }
    // testBFS()
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
