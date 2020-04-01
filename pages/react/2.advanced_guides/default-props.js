import React, { Component } from 'react'

export class ClsNoES6 extends Component {
  render() {
    return (
      <>
        <p>
          Default props: <span>{this.props.dName}</span>
        </p>
        <style jsx>{`
          span {
            font-size: 20px;
            font-weight: bold;
          }
        `}</style>
      </>
    )
  }
}
ClsNoES6.defaultProps = {
  dName: 'Class NoEs6 - default props'
}

const FuncNoEs6 = props => {
  return (
    <>
      <p>
        Default props: <span>{props.dName}</span>
      </p>
      <style jsx>{`
        span {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}
FuncNoEs6.defaultProps = {
  dName: 'Function NoEs6 - default props'
}

const NoES6Page = props => {
  return (
    <>
      <h2>Class default props</h2>
      <ClsNoES6 />
      <hr />
      <h2>Function default props</h2>
      <FuncNoEs6 />
      <style jsx>{``}</style>
    </>
  )
}
export default NoES6Page
