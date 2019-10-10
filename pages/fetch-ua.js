import React, {Component} from 'react'

export default class FetchUA extends Component {
  static async getInitialProps({req}) {
    const ua = req ? req.headers['user-agent'] : navigator.userAgent

    return {ua}
  }
  render() {
    return (
      <div>
        Hello World!
        <p>{this.props.ua}</p>
      </div>
    )
  }
}
