import React from 'react'
import Immutable from 'immutable'
import { AutoSizer } from 'react-virtualized'
import styles from '../../../public/css/next-wd.module.css'
import clsx from 'clsx'
import { generateRandomList } from '../../../model/react-virtualized.data'
import dynamic from 'next/dynamic'
// export const config = { amp: true };

const MixedListComp = dynamic(
  () => import('../../../components/react-virtualized/mixed-list'),
  {
    ssr: false,
  }
)

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
const MixedListPage = (props) => {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <AutoSizer>
          {({ width, height }) => {
            return (
              <MixedListComp
                //   getClassName={getClassName}
                //   getContent={getContent}
                list={list}
                width={width}
                height={height}
              />
            )
          }}
        </AutoSizer>
        {/* <style jsx>{``}</style> */}
      </div>
    </>
  )
}
// MixedListPage.propTypes = {}

export default MixedListPage
