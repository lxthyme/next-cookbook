import React, { StrictMode } from 'react'
import {
  WindowScroller,
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'
import { placeholder, placeholderLen } from '../../model/react-virtualized.data'
import { NoSsr } from '@material-ui/core'
// import Head from 'next/head'
// export const config = { amp: true };

const list = []

const formatList = () => {
  const last = list.slice(-1)[0] || 0
  const l = Array.from({ length: 80 }, (item, idx) => idx + last + 1).map(
    (t) =>
      `[${t}]` +
      placeholder.slice(0, Math.round(Math.random() * placeholderLen))
  )
  list.push(...l)
}

// const Page = (props) => {
// const Page = React.forwardRef((ctx, ref) => {
//   const { onClick } = ctx
//   console.log('>>>CTX: ', ctx)
//   formatList()
//   return (

//   )
// })

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

// export default Page

export default class WindowScrollerPage extends React.Component {
  componentDidMount = () => {
    window.t = this
  }

  _cache = new CellMeasurerCache({
    minHeight: 50,
    fixedWidth: true,
  })

  _rowRenderer = ({ index, style, key, parent }) => {
    const className = index % 2 == 0 ? 'evenRow' : 'oddRow'
    return (
      <React.Fragment key={key}>
        <CellMeasurer
          key={key}
          cache={this._cache}
          columnIndex={0}
          rowIndex={index}
          parent={parent}
        >
          {/* {({ measure, registerChild }) => (
              <div ref={registerChild} style={style} className={className}>
                {list[index]}
              </div>
            )} */}
          {(ctx, a) => {
            const { measure, registerChild } = ctx
            console.log('ctx: ', ctx, '\ta: ', a)
            return (
              // 'style' attribute required to position cell (within parent List)
              <div
                ref={registerChild}
                // key={key}
                style={style}
                className={className}
              >
                {/* {registerChild} -  */}
                {list[index]}
              </div>
            )
          }}
        </CellMeasurer>
        {/* <style jsx>{`
      //       .evenRow,
      //       .oddRow {
      //         border-bottom: 1px solid #e0e0e0;
      //       }
      //       .evenRow {
      //         background-color: #fff;
      //       }
      //       .oddRow {
      //         background-color: #fafafa;
      //       }
      //     `}</style>*/}
      </React.Fragment>
    )
  }

  _setRef = (windowScroller) => {
    this._windowScroller = windowScroller
  }

  render() {
    // const t = <Page ref="lxPage" />
    console.log('ref: ', this.refs)
    formatList()
    return (
      <>
        {/* <Head>
      <script src="/js/ssr-window.js"></script>
    </Head> */}
        <NoSsr>
          <StrictMode>
            <WindowScroller
              serverHeight={800}
              serverWidth={600}
              ref={this._setRef}
            >
              {({
                height,
                isScrolling,
                onChildScroll,
                scrollTop,
                registerChild,
              }) => (
                <>
                  <div ref={registerChild}>
                    <List
                      ref={(el) => (window.listEl = el)}
                      autoHeight
                      height={height}
                      isScrolling={isScrolling}
                      onScroll={onChildScroll}
                      rowCount={list.length}
                      //   rowHeight={24}
                      rowRenderer={this._rowRenderer}
                      scrollTop={scrollTop}
                      width={500}
                      deferredMeasurementCache={this._cache}
                      rowHeight={this._cache.rowHeight}
                    />
                  </div>
                </>
              )}
            </WindowScroller>
          </StrictMode>
        </NoSsr>
        {/* <style jsx>{``}</style> */}
      </>
    )
  }
}
