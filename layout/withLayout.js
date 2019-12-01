import React from 'react'
import Base from './base'

import Header from '../components/head/head'
const style = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const withLayout = (Page) => {
  return () => (
    <Base style={style}>
      <Header />
      <Page />
    </Base>
  )
}

export default withLayout
