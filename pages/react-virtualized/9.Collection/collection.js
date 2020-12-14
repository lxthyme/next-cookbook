import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { AutoSizer, Collection } from 'react-virtualized'
import '../../../public/css/next-wd.module.css'
import styles from '../../../public/css/next-wd.module.css'
import { generateRandomList } from '../../../model/react-virtualized.data'
import { NoSsr } from '@material-ui/core'
// export const config = { amp: true };
console.log('styles: ', styles)
const GUTTER_SIZE = 3
const CELL_WIDTH = 75

class CollectionComp extends React.PureComponent {
  // static propTypes = {}
  constructor(props) {
    super(props)

    console.log('props: ', props)
    this.state = {
      cellCount: props.list.size,
      columnCount: this._getColumnCount(props.list.size),
      height: props.height || 300,
      horizontalOverscanSize: 0,
      scrollToCell: undefined,
      showScrollingPlaceholder: 0,
      verticalOverscanSize: 0,
    }

    this._columnYMap = []
  }

  _cellRenderer = ({ index, isScrolling, key, style }) => {
    const { list } = this.props
    const { showScrollingPlaceholder } = this.state

    const datum = list.get(index % list.size)

    style.backgroundColor = datum.color

    return (
      <>
        <div className="cell" key={key} style={style}>
          {showScrollingPlaceholder && isScrolling ? '...' : index}
        </div>
        <style jsx>{`
          .cell {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.25rem;
            color: #fff;
          }
        `}</style>
      </>
    )
  }

  _cellSizeAndPositionGetter = ({ index }) => {
    const { list } = this.props
    const { columnCount } = this.state

    const columnPosition = index % (columnCount || 1)
    const datum = list.get(index % list.size)

    const height = datum.size
    const width = CELL_WIDTH
    const x = columnPosition * (GUTTER_SIZE + width)
    const y = this._columnYMap[columnPosition] || 0

    this._columnYMap[columnPosition] = y + height + GUTTER_SIZE

    return { height, width, x, y }
  }

  _getColumnCount = (cellCount) => {
    return Math.round(Math.sqrt(cellCount))
  }

  _onHorizontalOverscanSizeChange = (event) => {
    const horizontalOverscanSize = parseInt(event.target.value, 10) || 0
    this.setState({ horizontalOverscanSize })
  }

  _noContentRenderer = () => {
    return (
      <>
        <div className="noCells">No Content here</div>
        <style jsx>{`
          .noCells {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1em;
            color: #bdbdbd;
          }
        `}</style>
      </>
    )
  }

  _onCellCountChange = (event) => {
    const cellCount = parseInt(event.target.value, 10) || 0
    this._columnYMap = []

    this.setState({
      cellCount,
      columnCount: this._getColumnCount(cellCount),
    })
  }

  _onHeightChange = (event) => {
    const height = parseInt(event.target.value, 10) || 0

    this.setState({ height })
  }

  _onScrollToCellChange = (event) => {
    const { cellCount } = this.state
    let scrollToCell = Math.min(cellCount - 1, parseInt(event.target.value, 10))

    if (isNaN(scrollToCell)) {
      scrollToCell = undefined
    }

    this.setState({ scrollToCell })
  }

  _onVerticalOverscanSizeChange = (event) => {
    const verticalOverscanSize = parseInt(event.target.value, 10) || 0
    this.setState({ verticalOverscanSize })
  }

  render() {
    const {
      cellCount,
      height,
      horizontalOverscanSize,
      scrollToCell,
      showScrollingPlaceholder,
      verticalOverscanSize,
    } = this.state

    // const { width } = this.props

    return (
      <>
        {/* <div style={{ width: `${width}px`, height: `${height}px` }}> */}
        <label className="checkboxLabel">
          Show placeholder while scrolling?
          <input
            type="checkbox"
            aria-label="Show placeholder while scrolling?"
            checked={showScrollingPlaceholder}
            className="checkbox"
            onChange={(e) =>
              this.setState({ showScrollingPlaceholder: e.target.checked })
            }
          />
        </label>
        <div>
          <label htmlFor="cellCount">
            Number Cells
            <input
              id="cellCount"
              name="cellCount"
              onChange={this._onCellCountChange}
              value={cellCount}
            />
          </label>
          <label htmlFor="onScrollToCell">
            Scroll to Cell
            <input
              id="onScrollToCell"
              name="onScrollToCell"
              onChange={this._onScrollToCellChange}
              placeholder="Index..."
              value={scrollToCell || ''}
            />
          </label>
          <label htmlFor="height">
            Height
            <input
              id="height"
              name="height"
              onChange={this._onHeightChange}
              value={height}
            />
          </label>
          <label htmlFor="HorizontalOverscanSize">
            HorizontalOverscanSize
            <input
              id="HorizontalOverscanSize"
              name="HorizontalOverscanSize"
              onChange={this._onHorizontalOverscanSizeChange}
              value={horizontalOverscanSize}
            />
          </label>
          <label htmlFor="VerticalOverscanSize">
            VerticalOverscanSize
            <input
              id="VerticalOverscanSize"
              name="VerticalOverscanSize"
              onChange={this._onVerticalOverscanSizeChange}
              value={verticalOverscanSize}
            />
          </label>
        </div>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Collection
              cellCount={cellCount}
              cellRenderer={this._cellRenderer}
              cellSizeAndPositionGetter={this._cellSizeAndPositionGetter}
              className="collection"
              height={height}
              horizontalOverscanSize={horizontalOverscanSize}
              noContentRenderer={this._noContentRenderer}
              scrollToCell={scrollToCell}
              verticalOverscanSize={verticalOverscanSize}
              width={width}
            />
          )}
        </AutoSizer>
        <style jsx>{`
          .collection {
            background-color: #fff;
          }
        `}</style>
      </>
    )
  }
}
CollectionComp.propTypes = {
  list: PropTypes.instanceOf(Immutable.List).isRequired,
}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// CollectionComp.getInitialProps = async ({ req }) => {}

// export default CollectionComp

const list = Immutable.List(generateRandomList())
class CollectionPage extends React.Component {
  //   static childContextTypes = {
  //     list: PropTypes.instanceOf(Immutable.List).isRequired,
  //     customElement: PropTypes.any,
  //     isScrollingCustomElement: PropTypes.bool.isRequired,
  //     setScrollingCustomElement: PropTypes.func,
  //   }
  constructor(props) {
    super(props)

    this.state = {
      isScrollingCustomElement: false,
    }

    this.customElementRef = React.createRef()
  }

  setScrollingCustomElement = (custom) => {
    this.setState({ isScrollingCustomElement: custom })
  }

  //   getChildContext = () => {
  //     const { customElement, isScrollingCustomElement } = this.state
  //     return {
  //       list,
  //       customElement,
  //       isScrollingCustomElement,
  //       setScrollingCustomElement: this.setScrollingCustomElement,
  //     }
  //   }

  render() {
    const { isScrollingCustomElement } = this.state
    const bodyStyle = isScrollingCustomElement ? 'ScrollingBody' : 'Body'

    return (
      <NoSsr>
        <div className="demo">
          <div className="headerRow">
            <div className="logoRow">
              <div className="ReactVirtualizedContainer">
                {/* <img
                alt="React virtualized"
                className="logo}
                src="https://cloud.githubusercontent.com/assets/29597/11736841/c0497158-9f87-11e5-8dfe-9c0be97d4286.png"
              /> */}
                <div className="PrimaryLogoText">React</div>
                <div className="SecondaryLogoText">Virtualized</div>
              </div>
            </div>
          </div>

          <div
            className={bodyStyle}
            //   ref={(e) => this.setState({ customElement: e })}
            ref={this.customElementRef}
          >
            {/* <div className="custom} style={{ minHeight: '100vh' }}> */}
            <div className="column">
              <AutoSizer disableWidth>
                {({ width, height }) => {
                  console.log('111: ', { width, height })
                  return (
              <CollectionComp
                //   getClassName={getClassName}
                //   getContent={getContent}
                list={list}
                // width={width}
                  height={height}
                // height={300}
              />
              )
                }}
              </AutoSizer>
              {/* <style jsx>{``}</style> */}
            </div>
          </div>
        </div>
        <style jsx global>{`
          html,
          body,
          body:global(#root) {
            height: 100%;
          }

          body {
            padding: 0;
            margin: 0;
            font-family: 'Roboto', 'Open Sans', sans-serif;
            font-size: 12px;
            color: #272727;
            box-sizing: border-box;
          }
          a {
            color: #409890;
          }
          * {
            font-size: inherit;
            box-sizing: inherit;
          }
        `}</style>
        <style jsx>{`
          .headerRow {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            background-color: #4db6ac;
            flex-shrink: 0;
          }

          .logo {
            width: 35px;
            height: 35px;
          }

          .logoRow {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
          }

          .ReactVirtualizedContainer {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: 0.25rem;
          }
          .LogoColumn {
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 1rem;
            text-transform: uppercase;
          }
          .PrimaryLogoText,
          .SecondaryLogoText {
            text-transform: lowercase;
            font-size: 2em;
          }
          .PrimaryLogoText {
            font-weight: bold;
            color: #272727;
            margin: 0 0.5em;
          }
          .SecondaryLogoText {
            color: #ffffff;
          }

          .NavList {
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 0.8rem;
          }

          .ComponentList,
          .HighOrderComponentList {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 0.7rem;
          }
          .ComponentList {
            background-color: #272727;
          }
          .HighOrderComponentList {
            background-color: #111;
          }

          .demo {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          .Body {
            flex: 1 0 auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          .ScrollingBody {
            composes: Body;
            overflow: auto;
            flex: 1 1 auto;
          }
          .column {
            display: flex;
            flex-direction: column;
            flex: 0 0 100%;
            width: 100%;
            max-width: 100%;
          }
        `}</style>
      </NoSsr>
    )
  }
}

export default CollectionPage
