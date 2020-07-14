import { VertexColor } from './common'

export class DFSVertex {
    /// 默认: 白色
    color: VertexColor
    /// 默认: 无前驱
    pi = null
    /// 发现该节点时的时间戳
    d: number
    /// 邻接链表扫描完成时的时间戳
    f: number;
    /// 由顶点发出的所有边
    edge: DFSEdge;
    /// 节点的值, 默认为空
    value: String
    constructor(value: String, d?: number, edge?: DFSEdge, color: VertexColor = VertexColor.White, f?: number) {
        this.value = value;
        this.d = d;
        this.edge = edge;
        this.color = color;
        this.f = f;
    }
}

export class DFSEdge {
    idx: number;
    sibling: DFSEdge;
    constructor(idx: number, sibling?: DFSEdge) {
        this.idx = idx;
        this.sibling = sibling
    }
}

export class DFSGraph {
    vertexs: Array<DFSVertex>;
    constructor(vertexs: Array<DFSVertex>) {
        this.vertexs = vertexs;
    }

    addNode = (node: DFSVertex): Number => this.vertexs.push(node)
    getNode = (idx: number): DFSVertex => this.vertexs[idx]
}


// function Vertex() {
//     if (!(this instanceof Vertex)) {
//       return new Vertex()
//     }
//     /// 默认: 白色
//     this.color = this.WHITE
//     /// 默认: 无前驱
//     this.pi = null
//     /// 发现该节点时的时间戳
//     this.d = null
//     /// 邻接链表扫描完成时的时间戳
//     this.f = null
//     /// 由顶点发出的所有边
//     this.edge = null
//     /// 节点的值, 默认为空
//     this.value = null
//   }
//   Vertex.prototype = {
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
//       return `Vertex: (${this.value}, ${this.color}, ${this.pi}, ${this.d}, ${this.edge})`
//     },
//   }
//   function Edge() {
//     if (!(this instanceof Edge)) {
//       return new Edge()
//     }
//     /// 边所依附的节点的位置
//     this.index = null
//     /// 表示下一个连接兄弟节点的边。
//     this.sibling = null
//   }
//   Edge.prototype = {
//     description: function () {
//       return `Edge: (${this.index}, ${this.sibling})`
//     },
//   }
//   function Graph() {
//     if (!(this instanceof Graph)) {
//       return new Graph()
//     }
//     /// 存放顶点的数组
//     this.vertexs = []
//   }
//   Graph.prototype = {
//     constructor: Graph,
//     addNode: function (node) {
//       this.vertexs.push(node)
//     },
//     getNode: function (idx) {
//       return this.vertexs[idx]
//     },
//     description: function () {
//       return `Graph: (${this.vertexs})`
//     },
//   }
