import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HelloMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <>
        <div>
          Hello <x-search>{this.props.name}</x-search>!
        </div>
        <style jsx>{``}</style>
      </>
    )
  }
}
HelloMessage.propTypes = {}

const BrickFlipbox = () => {
  return (
    <brick-flipbox class="demo">
      <div>front</div>
      <div>back</div>
    </brick-flipbox>
  )
}

const TestPage = props => {
  return (
    <>
      <p>Demo1: 在 React 中使用 Web Components</p>
      <HelloMessage />
      <hr />
      <BrickFlipbox />
      <style jsx>{``}</style>
    </>
  )
}

TestPage.propTypes = {}

export default TestPage
