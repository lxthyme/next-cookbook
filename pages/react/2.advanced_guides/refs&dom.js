import React, { Component } from 'react'

/// Demo1: MyComponent
export class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.myRef = React.createRef()
  }

  componentDidMount() {
    window.wMyComponent = this
  }

  render() {
    return <div ref={this.myRef}>My Ref</div>
  }
}

/// Demo2: CustomTextInput
class CustomTextInput extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
  }

  componentDidMount() {
    window.wCustomTextInput = this
  }

  focusTextInput = () => {
    this.textInput.current.focus()
  }

  render() {
    return (
      <>
        <input type="text" ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </>
    )
  }
}

/// Demo3: AutoFocusTextInput
export class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  componentDidMount() {
    this.textInput.current.focusTextInput()
    window.wAutoFocusTextInput = this
  }

  render() {
    return <CustomTextInput ref={this.textInput} />
  }
}

/// Demo4: CallbackTextInput
export class CallbackTextInput extends Component {
  constructor(props) {
    super(props)

    this.textInput = null
    this.setTextInputRef = ele => {
      this.textInput = ele
    }
    this.focusTextInput = () => {
      this.textInput && this.textInput.focus()
    }
  }

  componentDidMount() {
    this.focusTextInput()
    window.wCallbackTextInput = this
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    )
  }
}

const FunCallbackTextInput = props => (
  <div>
    <input type="text" ref={props.inputRef} />
  </div>
)
class Parent extends Component {
  componentDidMount() {
    window.wParent = this
  }

  render() {
    return <FunCallbackTextInput inputRef={el => (this.inputRef = el)} />
  }
}

const RefsDomPage = props => {
  const ref = React.createRef()
  return (
    <div className="v-page">
      <p>Demo1: MyComponent</p>
      <MyComponent />
      <p>Demo2: CustomTextInput</p>
      <CustomTextInput />
      <p>Demo3: 回调 Refs</p>
      <AutoFocusTextInput />
      <p>Demo4: CallbackTextInput</p>
      <CallbackTextInput />
      <hr />
      <Parent />
      <style jsx>{`
        .v-page {
          padding: 16px;
        }
      `}</style>
    </div>
  )
}
export default RefsDomPage
