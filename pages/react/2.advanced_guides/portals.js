import React, { Component } from 'react'
import LXModal from '../../../components/utils/lx-modal'

class PortalsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showModal2: false
    }
  }

  componentDidMount() {
    window.p = this
  }

  modalShow = () => {
    this.setState({
      showModal: true
    })
  }

  modalDismiss = () => {
    this.setState({
      showModal: false
    })
  }
  modalShow2 = () => {
    this.setState({
      showModal2: true
    })
  }

  modalDismiss2 = () => {
    this.setState({
      showModal2: false
    })
  }

  render() {
    const modal2 = this.state.showModal2 ? (
      <LXModal>
        <div className="v-modal-wrapper2">
          <p>
            [Modal2]With a portal, we can render content into a different part
            of the DOM, as if it were any other React child.
          </p>
          <p>This is being rendered inside the #modal-container div.</p>
          {/* <button className="btn-modal" onClick={this.modalShow2}>
            Show Modal2
          </button> */}
          <button onClick={this.modalDismiss2}>Hide Modal2</button>
        </div>
        <style jsx>{`
          .v-modal-wrapper2 {
            max-width: 200px;
            background-color: #fff;
          }
        `}</style>
      </LXModal>
    ) : null
    const modal = this.state.showModal ? (
      <LXModal>
        <div className="v-modal-wrapper">
          <p>
            [Modal]With a portal, we can render content into a different part of
            the DOM, as if it were any other React child.
          </p>
          <p>This is being rendered inside the #modal-container div.</p>
          <button className="btn-modal" onClick={this.modalShow2}>
            Show Modal2
          </button>
          <button onClick={this.modalDismiss}>Hide Modal</button>
          {modal2}
        </div>
        <style jsx>{`
          .v-modal-wrapper {
            background-color: #fff;
          }
        `}</style>
      </LXModal>
    ) : null
    return (
      <>
        <div className="app">
          This div has overflow: hidden.
          <button className="btn-modal" onClick={this.modalShow}>
            Show Modal
          </button>
          {modal}
        </div>
        <style jsx>{`
          .app {
            height: 1000px;
          }
          .btn-modal {
            margin-top: 30%;
          }
        `}</style>
      </>
    )
  }
}
export default PortalsPage
