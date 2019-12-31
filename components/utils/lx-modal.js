import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class LXModal extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    window.mod = this
    // this.appRoot = document.getElementById('app-root')
    this.modalRoot = document.getElementById('modal-root-container')

    // this.scrollTop =
    //   document.documentElement.scrollTop || document.body.scrollTop

    document.body.classList.add('v-modal-show')
    this.modalRoot.classList.add('v-modal-show')
    // this.appRoot.classList.add('v-modal-show')

    // this.appRoot.style.top = `-${this.scrollTop}px`

    this.modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    // this.appRoot.classList.remove('v-modal-show')
    document.body.classList.remove('v-modal-show')
    this.modalRoot.classList.remove('v-modal-show')

    // this.appRoot.style.top = ``

    this.modalRoot.removeChild(this.el)

    this.modalRoot = null
    // this.appRoot = null
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}
