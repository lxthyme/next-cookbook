import React from 'react'
import Immutable from 'immutable'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
} from 'react-virtualized'
import PropTypes from 'prop-types'
// import styles from '../../public/css/react-virtualized/CellMeasurer.example.css'
import styles from '../../../public/css/next-wd.module.css'
import clsx from 'clsx'
import { generateRandomList } from '../../../model/react-virtualized.data'

export class CellMeasurerDynamicHeightList extends React.PureComponent {
  static propTypes = {
    getClassName: PropTypes.func.isRequired,
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props)

    this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 50,
    })

    this.state = {}
  }

  _rowRenderer = ({ index, key, parent, style }) => {
    const { getClassName, list } = this.props

    const datum = list.get(index % list.size)
    const classNames = getClassName({ columnIndex: 0, rowIndex: index })

    const imgWidth = 300
    const imgHeight = datum.size * (1 + (index % 3))

    const source = `https://www.fillmurray.com/${imgWidth}/${imgHeight}`

    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={0}
        key={key}
        rowIndex={index}
        parent={parent}
      >
        {({ measure, registerChild }) => (
          <div ref={registerChild} className={classNames} style={style}>
            <img onLoad={measure} src={source} style={{ width: imgWidth }} />
          </div>
        )}
      </CellMeasurer>
    )
  }

  render() {
    const { width, height } = this.props
    return (
      <>
        <List
          className={styles.BodyGrid}
          deferredMeasurementCache={this._cache}
          height={height}
          overscanRowCount={0}
          rowCount={1000}
          rowHeight={this._cache.rowHeight}
          rowRenderer={this._rowRenderer}
          width={width}
        />
        {/* <style jsx>{``}</style> */}
      </>
    )
  }
}

const getClassName = ({ columnIndex, rowIndex }) => {
  const rowClass = rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow

  return clsx(rowClass, styles.cell, {
    [styles.centeredCell]: columnIndex > 2,
  })
}

const getContent = ({ index, datum, long = true }) => {
  switch (index % 3) {
    case 0:
      return datum.color
    case 1:
      datum.name
    case 2:
      long ? datum.randomLong : datum.random
  }
}

const list = Immutable.List(generateRandomList())
const Page = (props) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <CellMeasurerDynamicHeightList
              getClassName={getClassName}
              getContent={getContent}
              list={list}
              width={width}
              height={height}
            />
          )
        }}
        {/* <style jsx>{``}</style> */}
      </AutoSizer>
    </div>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page
