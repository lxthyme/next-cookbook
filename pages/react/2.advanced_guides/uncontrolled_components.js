import React, { Component } from 'react'

class NameForm extends Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()
  }

  handleSubmit = e => {
    console.log('A name was submitted: ' + this.input.current.value)
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" defaultValue="Bob" ref={this.input} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

class FileInput extends Component {
  constructor(props) {
    super(props)

    this.fileInput = React.createRef()
  }
  componentDidMount() {
    window.wFileInput = this
  }


  handleSubmit = e => {
    e.preventDefault()

    console.log(`Selected file - ${this.fileInput.current.files}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="file">Upload file: </label>
        <input type="file" name="file" id="file" ref={this.fileInput} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const UnControlledComponentsPage = props => {
  return (
    <>
      <p>Demo1: </p>
      <NameForm />
      <p>Demo2: </p>
      <FileInput />
      <style jsx>{``}</style>
    </>
  )
}
export default UnControlledComponentsPage
