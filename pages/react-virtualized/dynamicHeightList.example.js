import React, { Component } from 'react'
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
// import styles from '../../public/css/react-virtualized/CellMeasurer.example.css'
import styles from '../../public/css/button.module.css'
import { generateRandomList } from '../../model/react-virtualized.data'
import clsx from 'clsx'

class DynamicHeightList extends React.PureComponent {
  static propTypes = {
    getClassName: PropTypes.func.isRequired,
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    width: PropTypes.number.isRequired,
  }

  constructor(props, context) {
    super(props, context)

    this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 50,
    })

    this._rowRenderer = this._rowRenderer.bind(this)
  }

  render() {
    const { width } = this.props

    return (
      <List
        className={styles.BodyGrid}
        deferredMeasurementCache={this._cache}
        height={400}
        overscanRowCount={0}
        rowCount={1000}
        rowHeight={this._cache.rowHeight}
        rowRenderer={this._rowRenderer}
        width={width}
      />
    )
  }

  _rowRenderer({ index, key, parent, style }) {
    const { getClassName, list } = this.props

    const datum = list.get(index % list.size)
    const classNames = getClassName({ columnIndex: 0, rowIndex: index })

    const imageWidth = 300
    const imageHeight = datum.size * (1 + (index % 3))

    const source = `https://www.fillmurray.com/${imageWidth}/${imageHeight}`

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
            <img
              onLoad={measure}
              src={source}
              style={{
                width: imageWidth,
              }}
            />
          </div>
        )}
      </CellMeasurer>
    )
  }
}

function getClassName({ columnIndex, rowIndex }) {
  const rowClass = rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow

  return clsx(rowClass, styles.cell, {
    [styles.centeredCell]: columnIndex > 2,
  })
}

function getContent({ index, datum, long = true }) {
  switch (index % 3) {
    case 0:
      return datum.color
    case 1:
      return datum.name
    case 2:
      return long ? datum.randomLong : datum.random
  }
}

const list = Immutable.List(generateRandomList())

class Example extends Component {
  static childContextTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    // customElement: PropTypes.any,
    isScrollingCustomElement: PropTypes.bool.isRequired,
    setScrollingCustomElement: PropTypes.func,
  }
  constructor(props) {
    super(props)

    this.state = {
      isScrollingCustomElement: false,
    }
  }

  getChildContext() {
    const {
      // customElement,
      isScrollingCustomElement,
    } = this.state
    return {
      list,
      //   customElement,
      isScrollingCustomElement,
      setScrollingCustomElement: this.setScrollingCustomElement,
    }
  }

  setScrollingCustomElement = (custom) => {
    this.setState({ isScrollingCustomElement: custom })
  }

  render() {
    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <DynamicHeightList
            getClassName={getClassName}
            getContent={getContent}
            list={list}
            width={width}
          />
        )}
      </AutoSizer>
    )
  }
}

export default Example
