import { VertexColor } from './common'

export class BFSVertex {
    value: String;
    edge: BFSEdge;
    /// 默认: 无穷大
    d: number;
    /// 默认: 无前驱
    pi: BFSVertex;
    /// 默认: 白色
    color: VertexColor;
    constructor(value: String, d?: number = Infinity, edge?: BFSEdge, pi?: BFSVertex, color?: VertexColor = VertexColor.White) {
        this.value = value
        this.color = color
        this.d = d
        this.pi = pi
        this.edge = edge;
    }
}

export class BFSEdge {
    /// 表示这条边连接的节点在顶点数组中的位置
    idx: number;
    /// 表示下一个连接兄弟节点的边。
    sibling: BFSEdge;
    constructor(idx: number, sibling?: BFSEdge) {
        this.idx = idx
        this.sibling = sibling
    }
}

export class BFSGraph {
    graph: Array<BFSVertex>;
    constructor(graph: Array<BFSVertex>) {
        this.graph = graph
    }

    addNode = (node: BFSVertex): Number => this.graph.push(node)
    getNode = (idx: number): BFSVertex => this.graph[idx]
}


// function Vertex() {
//     if (!(this instanceof Vertex)) {
//         return new Vertex()
//     }
//     /// 默认: 白色
//     this.color = this.WHITE
//     /// 默认: 无前驱
//     this.pi = null
//     /// 默认: 无穷大
//     this.d = this.INFINITY
//     /// 由顶点出发的所有边
//     this.edge = null
//     /// 节点的值, 默认为空
//     this.value = null
// }
// Vertex.prototype = {
//     constructor: Vertex,
//     /// 白色
//     WHITE: '#fff',
//     /// 灰色
//     GRAY: 'gray',
//     /// 黑色
//     BLACK: '#000',
//     /// 无穷大
//     INFINITY: Infinity,
//     description: function () {
//         return `Vertex: (${this.value}, ${this.color}, ${this.pi}, ${this.d}, ${this.edge})`
//     },
// }
// function Edge() {
//     if (!(this instanceof Edge)) {
//         return new Edge()
//     }
//     /// 表示这条边连接的节点在顶点数组中的位置
//     this.index = null
//     /// 表示下一个连接兄弟节点的边。
//     this.sibling = null
// }
// Edge.prototype = {
//     description: function () {
//         return `Edge: (${this.index}, ${this.sibling})`
//     },
// }
// function Graph() {
//     if (!(this instanceof Graph)) {
//         return new Graph()
//     }
//     /// 存放顶点的数组
//     this.graph = []
// }
// Graph.prototype = {
//     constructor: Graph,
//     addNode: function (node) {
//         this.graph.push(node)
//     },
//     getNode: function (idx) {
//         return this.graph[idx]
//     },
//     description: function () {
//         return `Graph: (${this.graph})`
//     },
// }
