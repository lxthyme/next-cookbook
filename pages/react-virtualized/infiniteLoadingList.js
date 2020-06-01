import { AutoSizer, InfiniteLoader, List } from 'react-virtualized'
import fetch from 'isomorphic-unfetch'
import { placeholder, placeholderLen } from '../../model/react-virtualized.data'
// export const config = { amp: true };

const remoteRowCount = 100
const list = []

const isRowLoaded = ({ index }) => !!list[index]

const loadMoreRows = ({ startIndex, stopIndex }) =>
  fetch(`path/to/api?startIndex=${startIndex}&stopIndex=${stopIndex}`).then(
    (res) => {
      console.log('RES: ', res)
      const last = list.slice(-1)[0] || 0
      const l = Array.from(
        { length: 20 },
        (item, idx) => idx + last + 1
      ).map((t) =>
        placeholder.slice(0, Math.round(Math.random() * placeholderLen))
      )
      list.push(...l)
      console.log('RES: ', list, l)
    }
  )

const rowRenderer = ({ key, index, style }) => {
  console.log('rowRenderer: ', { key, index, style })
  return (
    <>
      <div key={key} className="row" style={style}>
        {list[index]}
      </div>
      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 25px;
          background-color: #fff;
          border-bottom: 1px solid #e0e0e0;
        }
      `}</style>
    </>
  )
}

const Page = (props) => {
  const last = list.slice(-1)[0] || 0
  const l = Array.from({ length: 80 }, (item, idx) => idx + last + 1).map(
    (t) =>
      `[${t}]` +
      placeholder.slice(0, Math.round(Math.random() * placeholderLen))
  )
  list.push(...l)
  //   console.log('list: ', list)
  return (
    <>
      {/* <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={remoteRowCount}
      >
        {({ onRowsRendered, registerChild }) => ( */}
      <div className="v-list">
        <AutoSizer>
          {({ width, height }) => {
            console.log('WH: ', { width, height })
            return (
              <List
                // ref={registerChild}
                // onRowsRendered={onRowsRendered}
                height={height}
                rowCount={list.length}
                rowHeight={30}
                rowRenderer={rowRenderer}
                width={width}
              />
            )
          }}
        </AutoSizer>
      </div>
      {/* )}
      </InfiniteLoader> */}
      <style jsx>{`
        .v-list {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .v-list-item {
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

// const InfiniteLoaderListComp = ({
//   hasNextPage,
//   isNextPageLoading,
//   list,
//   loadNextPage,
// }) => {
//   const rowCount = hasNextPage ? list.size + 1 : list.size
//   const loadMoreRows = isNextPageLoading ? () => {} : loadNextPage
//   const isRowLoaded = ({ index }) => !hasNextPage || index < list.size

//   const rowRenderer = ({ index, key, size }) => {
//     let content
//     if (!isRowLoaded({ index })) {
//       content = 'Loading...'
//     } else {
//       content = list.getIn([index, 'name'])
//     }

//     return (
//       <div key={key} style={style}>
//         {content}
//       </div>
//     )
//   }

//   return (
//     <>
//       <InfiniteLoader
//         isRowLoaded={isRowLoaded}
//         loadMoreRows={loadMoreRows}
//         rowCount={rowCount}
//       >
//         {({ onRowsRendered, registerChild }) => (
//           <List
//             ref={registerChild}
//             onRowsRendered={onRowsRendered}
//             rowRenderer={rowRenderer}
//             // {...otherProps}
//           />
//         )}
//       </InfiniteLoader>
//       {/* <style jsx>{``}</style> */}
//     </>
//   )
// }

// const Page = (props) => {
//   const hasNextPage = true
//   const isNextPageLoading = false
//   const list = Array.from({ length: 20 }, (item, idx) => idx + 1)
//   const loadNextPage = () => {
//     console.log('loadNextPage: ')
//   }
//   return (
//     <>
//       {/* ,
//     ,
//     ,
//     , */}
//       <InfiniteLoaderListComp
//         hasNextPage={hasNextPage}
//         isNextPageLoading={isNextPageLoading}
//         list={list}
//         loadNextPage={loadNextPage}
//       />
//       {/* <style jsx>{``}</style> */}
//     </>
//   )
// }

// // Page.propTypes = {}
// // export const getStaticPaths = async () => { return { paths, fallback: true }; }
// // export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// // export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// // Page.getInitialProps = async ({ req }) => {}

// export default Page
