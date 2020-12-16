import { VertexColor } from './common'

export class BFSVertex {
    /// 默认: 白色
    color: VertexColor
    /// 默认: 无前驱
    pi?: BFSVertex
    /// 发现该节点时的时间戳
    d: number
    /// 邻接链表扫描完成时的时间戳
    f: number;
    /// 由顶点发出的所有边
    edge?: BFSEdge;
    /// 节点的值, 默认为空
    value: string
    constructor(value: string, d?: number, edge?: BFSEdge, color: VertexColor = VertexColor.White, f?: number) {
        this.value = value;
        this.d = d ?? -1;
        this.edge = edge;
        this.color = color;
        this.f = f ?? -1;
    }
}

export class BFSEdge {
    idx: number;
    sibling?: BFSEdge;
    /// 边的权重
    width: number;
    constructor(idx: number, sibling?: BFSEdge, width?: number) {
        this.idx = idx;
        this.sibling = sibling
        this.width = width ?? -1
    }
}

// export class BFSGraph {
//     graph: Array<BFSVertex>;
//     /// 字典: 用来映射节点的标识符和数组中的位置
//     refer: Map<string, number>;
//     constructor(graph: Array<BFSVertex>) {
//         this.graph = graph
//         this.graph.forEach(vertex => {
//             this.refer.set(vertex.value, vertex)
//         })
//     }
//     setVertex = (vertexs: Array<string>) => {
//         vertexs.forEach(value => {
//             /// 创建节点并初始化 value
//             const vertex = new BFSVertex(value)
//             this.graph.push(vertex)
//             /// 初始化字典
//             this.refer.set(vertex.value, vertex)
//         })
//     }
//     __createLink = (idx: number,
//         len: number,
//         edges: Array<BFSEdge>,
//         refer: Map<number, number>): BFSEdge => {
//         if (idx >= len) return null;
//         const edgeNode = new BFSEdge(refer.get(edges[idx].idx))
//         edgeNode.width = edges[idx].width
//         edgeNode.sibling = this.__createLink(++idx, len, edges, refer)
//         return edgeNode
//     }
//     setEdge = (edges: Array<string>) => {
//         edges.forEach(edge => {
//             const idx = this.refer.get(edge)
//             const vertex = this.graph[idx]
//             vertex.edge = this.__createLink(0, edges[idx].length, edges[idx], this.refer)
//         })
//     }

//     addNode = (node: BFSVertex): Number => this.graph.push(node)
//     getNode = (idx: number): BFSVertex => this.graph[idx]
// }


export class BFSGraph {
    graph: BFSVertex[];
    /// 字典: 用来映射节点的标识符和数组中的位置
    refer: Map<string, number>;
    constructor() {
        this.graph = []
        this.refer = new Map()
    }

    setVertex = (vertexs: string[]) => {
        vertexs.forEach(value => {
            /// 创建节点并初始化 value
            const vertex = new BFSVertex(value)
            this.graph.push(vertex)
        })
        for (let i in this.graph) {
            /// 初始化字典
            this.refer.set(this.graph[i].value, 0)
        }
    }
    __createLink = (idx: number,
        len: number,
        edges: BFSEdgeData[],
        refer: Map<string, number>): BFSEdge | undefined => {
        if (idx >= len) return undefined;
        let value = refer.get(edges[idx].id)
        if (value) {
            const edgeNode = new BFSEdge(value)
            edgeNode.width = edges[idx].w
            edgeNode.sibling = this.__createLink(++idx, len, edges, refer)
            return edgeNode
        }
        return undefined
    }
    setEdge = (edges: BFSGraphData) => {
        for (let id in edges) {
            const idx = this.refer.get(id)
            if (idx) {
                const vertex = this.graph[idx]
                vertex.edge = this.__createLink(0, edges[id].length, edges[id], this.refer)
            }
        }
    }

    addNode = (node: BFSVertex): Number => this.graph.push(node)
    getNode = (idx: number): BFSVertex => this.graph[idx]
}
interface BFSEdgeData {
    id: string;
    w: number;
}
interface BFSGraphData {
    [id: string]: BFSEdgeData[]
}
export const makeGraph = () => {
    const vertexs = ['A', 'B', 'C', 'D', 'E', 'F']
    const edges: BFSGraphData = {
        A: [{ id: 'B', w: 1 }, { id: 'D', w: 2 }],
        B: [{ id: 'A', w: 3 }, { id: 'E', w: 3 }, { id: 'C', w: 7 }],
        C: [{ id: 'B', w: 5 }, { id: 'E', w: 3 }, { id: 'F', w: 4 }],
        D: [{ id: 'A', w: 2 }],
        E: [{ id: 'B', w: 3 }, { id: 'C', w: 7 }, { id: 'F', w: 3 }],
        F: [{ id: 'C', w: 6 }, { id: 'E', w: 9 }]
    }
    var graph = new BFSGraph()
    graph.setVertex(vertexs)
    graph.setEdge(edges)
    console.log('Refer: ', graph.refer)
    return graph
}


export const BFS = (graph: BFSGraph, s: BFSVertex) => {
    const queue: Array<BFSVertex> = []
    s.color = VertexColor.Gray
    s.d = 0
    queue.push(s)
    while (queue.length > 0) {
        const u = queue.shift()
        if (!u || !u.edge) continue
        let sibling: BFSEdge | undefined = u.edge
        while (sibling != undefined) {
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

export const DFS = (graph: BFSGraph) => {
    let timestamp = 0
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
    for (let v of graph.graph) {
        if (v.color === VertexColor.White) {
            DFSVisit(graph, v)
        }
    }
}
