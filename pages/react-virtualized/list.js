import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'
// import 'react-virtualized/styles.css'
import { placeholder, placeholderLen } from '../../model/react-virtualized.data'
import Immutable from 'immutable'
import { generateRandomList } from '../../model/react-virtualized.data'

// export const config = { amp: true };

// const list = []
// const formatList = () => {
//   const last = list.slice(-1)[0] || 0
//   const l = Array.from({ length: 20 }, (item, idx) => idx + last + 1).map((t) =>
//     placeholder.slice(0, Math.round(Math.random() * placeholderLen))
//   )
//   list.push(...l)
//   console.log('RES: ', list, l)
// }

const cache = new CellMeasurerCache({
  minHeight: 50,
  fixedWidth: true,
})

const list = Immutable.List(generateRandomList())
const rowRenderer = ({ key, index, style, isScrolling, isVisible, parent }) => {
  //   const content = isScrolling ? '...' : item
  const item = list.get(index % list.size)
  const imageWidth = 300
  const imageHeight = item.size * (1 + (index % 3))
  const source = `https://www.fillmurray.com/${imageWidth}/${imageHeight}`

  const className = index % 2 == 0 ? 'evenRow' : 'oddRow'
  return (
    <>
      <CellMeasurer
        key={key}
        cache={cache}
        columnIndex={0}
        rowIndex={index}
        parent={parent}
      >
        {/* {({ measure, registerChild }) => { */}
        {(ctx, a) => {
          const { measure, registerChild } = ctx
          console.log('ctx: ', ctx, '\ta: ', a)
          return (
            <div key={key} ref={registerChild} style={style} className={className}>
              <img
                onLoad={measure}
                src={source}
                // style={{ width: imageWidth }}
              />
            </div>
          )
        }}
      </CellMeasurer>
      <style jsx>{`
        .evenRow,
        .oddRow {
          border-bottom: 1px solid #e0e0e0;
        }
        .evenRow {
          background-color: #fff;
        }
        .oddRow {
          background-color: #fafafa;
        }
      `}</style>
    </>
  )
}

const Page = (props) => {
  //   formatList()
  return (
    <>
      {/* <AutoSizer disableHeight>
        {({ width }) => ( */}
      <List
        // {...props}
        className="BodyGrid"
        deferredMeasurementCache={cache}
        rowHeight={cache.rowHeight}
        height={400}
        overscanRowCount={0}
        rowCount={1000}
        rowHeight={cache.rowHeight}
        rowRenderer={rowRenderer}
        width={500}
      />
      )}
      {/* </AutoSizer> */}
      <style jsx>{`
        .BodyGrid {
          width: 100%;
          border: 1px solid #e0e0e0;
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

export default Page

// const styles = {
//   List: {
//     width: '100%',
//     border: '1px solid #DDD',
//     'margin-top': '15px',
//   },

//   row: {
//     height: '100%',
//     display: 'flex',
//     'flex-direction': 'row',
//     'align-items': 'center',
//     padding: '0 25px',
//     'background-color': '#fff',
//     'border-bottom': '1px solid #e0e0e0',
//   },
//   letter: {
//     display: 'inline-block',
//     height: '40px',
//     width: '40px',
//     'line-height': '40px',
//     'text-align': 'center',
//     'border-radius': '40px',
//     color: 'white',
//     'font-size': '1.5em',
//     'margin-right': '25px',
//   },
//   name: {
//     'font-weight': 'bold',
//     'margin-bottom': '2px',
//   },
//   index: {
//     color: '#37474f',
//   },
//   height: {
//     flex: 1,
//     'text-align': ',right',
//     color: ',#bdbdbd',
//     'font-size': '.75em',
//     'font-weight': 100,
//   },

//   noRows: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     display: 'flex',
//     'align-items': 'center',
//     'justify-content': 'center',
//     color: '#bdbdbd',
//   },

//   checkboxLabel: {
//     'margin-left': '.5rem',
//   },
//   // checkboxLabel:first-of-type :{
//   //   margin-left: 0;
//   // },
//   checkbox: {
//     'margin-right': '5px',
//   },

//   isScrollingPlaceholder: {
//     color: '#DDD',
//     'font-style': 'italic',
//   },
// }
// export default class DynamicHeightList extends React.PureComponent {
//   // static propTypes = {
//   //   getClassName: PropTypes.func.isRequired,
//   //   list: PropTypes.instanceOf(Immutable.List).isRequired,
//   //   width: PropTypes.number.isRequired,
//   // }

//   constructor(props, context) {
//     super(props, context)

//     this._cache = new CellMeasurerCache({
//       fixedWidth: true,
//       minHeight: 50,
//     })

//     this._rowRenderer = this._rowRenderer.bind(this)
//   }

//   render() {
//     // const { width } = this.prop
//     const width = 500

//     return (
//       <List
//         className={styles.BodyGrid}
//         deferredMeasurementCache={this._cache}
//         height={400}
//         overscanRowCount={0}
//         rowCount={1000}
//         rowHeight={this._cache.rowHeight}
//         rowRenderer={this._rowRenderer}
//         width={width}
//       />
//     )
//   }

//   _rowRenderer({ index, key, parent, style }) {
//     // const { getClassName, list } = this.props

//     const datum = list.get(index % list.size)
//     // const classNames = getClassName({ columnIndex: 0, rowIndex: index })
//     const classNames = index % 2 == 0 ? 'evenRow' : 'oddRow'

//     const imageWidth = 300
//     const imageHeight = datum.size * (1 + (index % 3))

//     const source = `https://www.fillmurray.com/${imageWidth}/${imageHeight}`

//     return (
//       <CellMeasurer
//         cache={this._cache}
//         columnIndex={0}
//         key={key}
//         rowIndex={index}
//         parent={parent}
//       >
//         {/* {({ measure, registerChild }) => { */}
//         {(ctx, a) => {
//           const { measure, registerChild } = ctx
//           console.log(
//             '>>>registerChild: ',
//             registerChild,
//             '\tctx: ',
//             ctx,
//             '\ta: ',
//             a
//           )
//           return (
//             <div ref={registerChild} className={classNames} style={style}>
//               <img
//                 onLoad={measure}
//                 src={source}
//                 style={{
//                   width: imageWidth,
//                 }}
//               />
//             </div>
//           )
//         }}
//       </CellMeasurer>
//     )
//   }
// }

// export default class ListExample extends React.PureComponent {
//   // static contextTypes = {
//   //   list: PropTypes.instanceOf(Immutable.List).isRequired,
//   // };

//   constructor(props, context) {
//     super(props, context)

//     this.state = {
//       listHeight: 300,
//       listRowHeight: 50,
//       overscanRowCount: 10,
//       rowCount: list.size,
//       scrollToIndex: undefined,
//       showScrollingPlaceholder: false,
//       useDynamicRowHeight: false,
//     }

//     this._getRowHeight = this._getRowHeight.bind(this)
//     this._noRowsRenderer = this._noRowsRenderer.bind(this)
//     this._onRowCountChange = this._onRowCountChange.bind(this)
//     this._onScrollToRowChange = this._onScrollToRowChange.bind(this)
//     this._rowRenderer = this._rowRenderer.bind(this)
//   }

//   render() {
//     const {
//       listHeight,
//       listRowHeight,
//       overscanRowCount,
//       rowCount,
//       scrollToIndex,
//       showScrollingPlaceholder,
//       useDynamicRowHeight,
//     } = this.state

//     const ref = React.createRef()

//     return (
//       <>
//         <section>
//           <p>
//             The list below is windowed (or "virtualized") meaning that only the
//             visible rows are rendered. Adjust its configurable properties below
//             to see how it reacts.
//           </p>

//           <p>
//             <label className="checkboxLabel">
//               <input
//                 aria-label="Use dynamic row heights?"
//                 checked={useDynamicRowHeight}
//                 className="checkbox"
//                 type="checkbox"
//                 onChange={(event) =>
//                   this.setState({ useDynamicRowHeight: event.target.checked })
//                 }
//               />
//               Use dynamic row heights?
//             </label>

//             <label className="checkboxLabel">
//               <input
//                 aria-label="Show scrolling placeholder?"
//                 checked={showScrollingPlaceholder}
//                 className="checkbox"
//                 type="checkbox"
//                 onChange={(event) =>
//                   this.setState({
//                     showScrollingPlaceholder: event.target.checked,
//                   })
//                 }
//               />
//               Show scrolling placeholder?
//             </label>
//           </p>

//           <div>
//             <label
//               label="Num rows"
//               name="rowCount"
//               onChange={this._onRowCountChange}
//               value={rowCount}
//             />
//             <input
//               label="Scroll to"
//               name="onScrollToRow"
//               placeholder="Index..."
//               onChange={this._onScrollToRowChange}
//               value={scrollToIndex || ''}
//             />
//             <input
//               label="List height"
//               name="listHeight"
//               onChange={(event) =>
//                 this.setState({
//                   listHeight: parseInt(event.target.value, 10) || 1,
//                 })
//               }
//               value={listHeight}
//             />
//             <label
//               disabled={useDynamicRowHeight}
//               label="Row height"
//               name="listRowHeight"
//               onChange={(event) =>
//                 this.setState({
//                   listRowHeight: parseInt(event.target.value, 10) || 1,
//                 })
//               }
//               value={listRowHeight}
//             />
//             <label
//               label="Overscan"
//               name="overscanRowCount"
//               onChange={(event) =>
//                 this.setState({
//                   overscanRowCount: parseInt(event.target.value, 10) || 0,
//                 })
//               }
//               value={overscanRowCount}
//             />
//           </div>

//           <div>
//             <AutoSizer disableHeight>
//               {({ width }) => (
//                 <List
//                   key="123"
//                   ref={ref}
//                   // className={styles.List}
//                   className="list"
//                   height={listHeight}
//                   overscanRowCount={overscanRowCount}
//                   noRowsRenderer={this._noRowsRenderer}
//                   rowCount={rowCount}
//                   rowHeight={
//                     useDynamicRowHeight ? this._getRowHeight : listRowHeight
//                   }
//                   rowRenderer={this._rowRenderer}
//                   scrollToIndex={scrollToIndex}
//                   width={width}
//                 />
//               )}
//             </AutoSizer>
//           </div>
//         </section>
//         <style jsx>{`
//           .list: {
//             width: 100%;
//             border: 1px solid #ddd;
//             margin-top: 15px;
//           }
//           .checkboxLabel {
//             margin-left: 0.5rem;
//           }
//           .checkboxLabel:first-of-type {
//             margin-left: 0;
//           }
//           .checkbox {
//             margin-right: 5px;
//           }
//         `}</style>
//       </>
//     )
//   }

//   _getDatum(index) {
//     // const {list} = this.context;

//     return list.get(index % list.size)
//   }

//   _getRowHeight({ index }) {
//     return this._getDatum(index).size
//   }

//   _noRowsRenderer() {
//     return (
//       <>
//         <div className="noRows">No rows</div>
//         <style jsx>{`
//           .noRows {
//             position: absolute;
//             top: 0;
//             bottom: 0;
//             left: 0;
//             right: 0;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             color: #bdbdbd;
//           }
//         `}</style>
//       </>
//     )
//   }

//   _onRowCountChange(event) {
//     const rowCount = parseInt(event.target.value, 10) || 0

//     this.setState({ rowCount })
//   }

//   _onScrollToRowChange(event) {
//     const { rowCount } = this.state
//     let scrollToIndex = Math.min(rowCount - 1, parseInt(event.target.value, 10))

//     if (isNaN(scrollToIndex)) {
//       scrollToIndex = undefined
//     }

//     this.setState({ scrollToIndex })
//   }

//   _rowRenderer({ index, isScrolling, key, style }) {
//     const { showScrollingPlaceholder, useDynamicRowHeight } = this.state

//     if (showScrollingPlaceholder && isScrolling) {
//       return (
//         <React.Fragment key={key}>
//           <div
//             // className={cn(styles.row, styles.isScrollingPlaceholder)}
//             className="row isScrollingPlaceholder"
//             key={key}
//             style={style}
//           >
//             Scrolling...
//           </div>
//           <style jsx>{`
//             .row {
//               height: 100%;
//               display: flex;
//               flex-direction: row;
//               align-items: center;
//               padding: 0 25px;
//               background-color: #fff;
//               border-bottom: 1px solid #e0e0e0;
//             }
//             .isScrollingPlaceholder {
//               color: #ddd;
//               font-style: italic;
//             }
//           `}</style>
//         </React.Fragment>
//       )
//     }

//     const datum = this._getDatum(index)

//     let additionalContent

//     if (useDynamicRowHeight) {
//       switch (datum.size) {
//         case 75:
//           additionalContent = <div>It is medium-sized.</div>
//           break
//         case 100:
//           additionalContent = (
//             <div>
//               It is large-sized.
//               <br />
//               It has a 3rd row.
//             </div>
//           )
//           break
//       }
//     }

//     return (
//       <>
//         <div className="row" key={key} style={style}>
//           <div
//             className="letter"
//             style={{
//               backgroundColor: datum.color,
//             }}
//           >
//             {datum.name.charAt(0)}
//           </div>
//           <div>
//             <div className="name">{datum.name}</div>
//             <div className="index">This is row {index}</div>
//             {additionalContent}
//           </div>
//           {useDynamicRowHeight && (
//             <span className="height">{datum.size}px</span>
//           )}
//         </div>
//         <style jsx>{`
//           .row {
//             height: 100%;
//             display: flex;
//             flex-direction: row;
//             align-items: center;
//             padding: 0 25px;
//             background-color: #fff;
//             border-bottom: 1px solid #e0e0e0;
//           }
//           .name {
//             font-weight: bold;
//             margin-bottom: 2px;
//           }
//           .index {
//             color: #37474f;
//           }
//           .height {
//             flex: 1;
//             text-align: right;
//             color: #bdbdbd;
//             font-size: 0.75em;
//             font-weight: 100;
//           }
//         `}</style>
//       </>
//     )
//   }
// }
