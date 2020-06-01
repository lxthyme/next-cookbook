import * as React from 'react'
import PropTypes from 'prop-types'
import {
  CellMeasurer,
  CellMeasurerCache,
  Table,
  Column,
} from 'react-virtualized'
import Immutable from 'immutable'
import styles from '../../public/css/next-wd.module.css'

class MixedListComp extends React.PureComponent {
  // static propTypes = {}
  constructor(props) {
    super(props)

    this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 25,
    })
    this._lastRenderedWidth = this.props.width
    this.state = {}
    this.ref = React.createRef(0)
  }

  _columnCellRenderer = ({ dataKey, parent, rowIndex }) => {
    const { list } = this.props

    const datum = list.get(rowIndex % list.size)
    const content = rowIndex % 5 === 0 ? '' : datum.randomLong

    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={0}
        key={dataKey}
        parent={parent}
        rowIndex={rowIndex}
      >
        {({ registerChild }) => {
          return (
            <div
              ref={registerChild}
              className={styles.tableColumn}
              style={{ whiteSpace: 'normal' }}
            >
              {content}
            </div>
          )
        }}
      </CellMeasurer>
    )
  }

  _rowGetter = ({ index }) => {
    const { list } = this.props

    return list.get(index % list.size)
  }

  render() {
    const { width, height = 400 } = this.props

    if (this._lastRenderedWidth !== this.props.width) {
      this._lastRenderedWidth = this.props.width
      this._cache.clearAll()
    }
    return (
      <Table
        ref={this.ref}
        deferredMeasurementCache={this._cache}
        headerHeight={20}
        //   height={400}
        height={height}
        aria-label="[xl]aria-label only in Grid"
        //   "\"aria-label\""="[xl]aria-label only in Grid"
        aria-readonly={false}
        overscanRowCount={2}
        rowClassName={styles.tableRow}
        rowHeight={this._cache.rowHeight}
        rowGetter={this._rowGetter}
        rowCount={1000}
        width={width}
      >
        <Column
          className={styles.tableColumn}
          dataKey="name"
          label="Name"
          width={125}
        />
        <Column
          className={styles.tableColumn}
          dataKey="color"
          label="Color"
          width={75}
        />
        <Column
          className={styles.tableColumn}
          dataKey="random"
          label="Dynamic Text"
          width={width - 200}
          cellRenderer={this._columnCellRenderer}
        />
      </Table>
      // {/* <style jsx>{``}</style> */}
    )
  }
}

MixedListComp.propTypes = {
  list: PropTypes.instanceOf(Immutable.List).isRequired,
  width: PropTypes.number.isRequired,
}
export default MixedListComp
