import React from 'react'
import { initGA, logPageView } from '../plugins/analytics'

export default class Base extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    return <>{this.props.children}</>
  }
}
