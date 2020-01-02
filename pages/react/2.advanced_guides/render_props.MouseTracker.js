import React, { Component } from 'react'
import PropTypes from 'prop-types'

/// Demo1: MouseTracker
class MouseTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div className="v-tracker" onMouseMove={this.handleMouseMove}>
        <h1>移动鼠标!</h1>
        <p>
          当前鼠标位置: ({this.state.x}, {this.state.y})
        </p>
        <style jsx>{`
          .v-tracker {
            height: 200px;
          }
        `}</style>
      </div>
    )
  }
}

/// Demo2: 使用 Render Props 来解决横切关注点（Cross-Cutting Concerns）
class Mouse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '200px' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}
Mouse.propTypes = {
  render: PropTypes.func.isRequired
}

class Cat extends Component {
  render() {
    const mouse = this.props.mouse
    return (
      <img
        src="/img/react/cat.png"
        alt=""
        style={{ position: 'absolute', left: mouse.x - 10, top: mouse.y - 10 }}
      />
    )
  }
}

class RenderMouseTracker extends Component {
  render() {
    return (
      <div>
        <h1>移动鼠标</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    )
  }
}

/// Demo3
const withMouse = Component => {
  return class extends Component {
    render() {
      return (
        <Mouse render={mouse => <Component {...this.props} mouse={mouse} />} />
      )
    }
  }
}

/// Demo4
class MouseTracker2 extends Component {
  renderTheCat = mouse => {
    return <Cat mouse={mouse} />
  }

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={this.renderTheCat} />
      </div>
    )
  }
}

const TrackerPage = props => {
  return (
    <>
      <p>Demo1: MouseTracker</p>
      <MouseTracker />
      <p>Demo2: 使用 Render Props 来解决横切关注点（Cross-Cutting Concerns）</p>
      <RenderMouseTracker />
      <style jsx>{``}</style>
    </>
  )
}
export default TrackerPage
