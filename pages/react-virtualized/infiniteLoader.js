import { PureComponent } from 'react'
import ProperTypes from 'prop-types'
import Immutable from 'immutable'
import { AutoSizer, InfiniteLoader, List } from 'react-virtualized'
import { generateRandomList } from '../../model/react-virtualized.data'

const STATUS_LOADING = 1
const STATUS_LOADED = 2

export default class InfiniteLoaderDemo extends PureComponent {
  //   static contextTypes = {
  //     list: ProperTypes.instanceOf(Immutable.List).isRequired,
  //   }
  constructor(props) {
    super(props)

    this.state = {
      loadedRowCount: 0,
      loadedRowsMap: {},
      loadingRowCount: 0,
    }

    this.list = Immutable.List(generateRandomList())
    this._timeoutIdMap = {}
  }

  componentWillUnmount() {
    Object.keys(this._timeoutIdMap).forEach((timeoutId) => {
      clearTimeout(timeoutId)
    })
  }

  _clearData = () => {
    this.setState({
      loadedRowCount: 0,
      loadedRowsMap: {},
      loadingRowCount: 0,
    })
  }

  _isRowLoaded = ({ index }) => {
    const { loadedRowsMap } = this.state
    return !!loadedRowsMap[index]
  }

  _loadMoreRows = ({ startIndex, stopIndex }) => {
    console.log(`startIndex: ${startIndex}`, `\tstopIndex: ${stopIndex}`)

    const { loadedRowsMap, loadingRowCount } = this.state
    const increment = stopIndex - startIndex + 1

    for (let i = startIndex; i <= stopIndex; i++) {
      loadedRowsMap[i] = STATUS_LOADING
    }

    this.setState({
      loadingRowCount: loadingRowCount + increment,
    })

    const timeoutId = setTimeout(() => {
      const { loadedRowCount, loadingRowCount } = this.state
      delete this._timeoutIdMap[timeoutId]

      for (let i = startIndex; i <= stopIndex; i++) {
        loadedRowsMap[i] = STATUS_LOADED
      }

      this.setState({
        loadingRowCount: loadingRowCount - increment,
        loadedRowCount: loadedRowCount + increment,
      })

      promiseResolver()
    }, 1000 + Math.round(Math.random() * 2000))

    this._timeoutIdMap[timeoutId] = true

    let promiseResolver

    return new Promise((resolve) => {
      promiseResolver = resolve
    })
  }

  _rowRenderer = ({ index, key, style }) => {
    // let { list } = this.context
    const { loadedRowsMap } = this.state
    // console.log('>>LIST: ', list)
    const list = this.list

    const row = list.get(index)
    let content

    if (loadedRowsMap[index] === STATUS_LOADED) {
      content = row.name
    } else {
      content = <div className="placeholder" style={{ width: row.size }} />
    }

    return (
      <div className="row" key={key} style={style}>
        {content}
        <style jsx>{`
          .placeholder {
            display: inline-block;
            height: 1em;
            background-color: #ddd;
          }
          .row {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 25px;
            background-color: #fff;
            border-bottom: 1px solid #e0e0e0;
          }
        `}</style>
      </div>
    )
  }

  render() {
    // const { list } = this.context
    const list = this.list
    const { loadedRowCount, loadingRowCount } = this.state

    if (!list) {
      return <div>[render]Error -> {list}</div>
    }

    return (
      <>
        <section>
          <div className="cacheButtonAndCountRow">
            <button className="button" onClick={this._clearData}>
              Flush Cached Data
            </button>

            <div className="cacheCountRow">
              {loadingRowCount} loading, {loadedRowCount} loaded.
            </div>
          </div>
        </section>

        <InfiniteLoader
          isRowLoaded={this._isRowLoaded}
          loadMoreRows={this._loadMoreRows}
          rowCount={list.size}
        >
          {({ onRowsRendered, registerChild }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <List
                  ref={registerChild}
                  className="List"
                  height={200}
                  onRowsRendered={onRowsRendered}
                  rowCount={list.size}
                  rowHeight={30}
                  rowRenderer={this._rowRenderer}
                  width={width}
                />
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
        <style jsx>
          {`
            .List {
              width: 100%;
              border: 1px solid #ddd;
            }
            .cacheButtonAndCountRow {
              display: flex;
              align-items: center;
            }
            .button {
              flex: 0 0 auto;
              background-color: #4db6ac;
              color: #fff;
              appearance: none;
              border: none;
              padding: 0.5em 1em;
              border-radius: 0.35em;
              font-size: 1em;
            }
            .cacheCountRow {
              flex: 1 1 auto;
              text-align: right;
              color: #bdbdbd;
              font-size: 0.75em;
              font-weight: 100;
            }
          `}
        </style>
      </>
    )
  }
}
