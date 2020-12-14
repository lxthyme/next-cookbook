import React from 'react'
import {Editor, EditorState, Modifier, RichUtils, ContentState} from 'draft-js'
import VColorControl from './draft/v-color-control'
import {colorStyleMap} from '../model/color'

// const DraftEditor = () => {
class DraftEditor extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.createEmpty(),
    }
    this.editorRef = React.createRef(null)
  }
  componentDidMount = () => {
    window.editorRef = this.editorRef
  }

  onFocus = () => editorRef.current.focus()

  onTextChange = (editorState) => {
    console.log('>>>onTextChange: ', editorState)
    this.setState({editorState})
  }
  render() {
    const {editorState} = this.state
    return (
      <>
        <VColorControl
          editorState={editorState}
          // onToggle={this.onToggleColor}
          onChange={this.onTextChange}
        />
        <div className='v-editor-wrapper' onClick={this.onFocus}>
          <Editor
            ref={this.editorRef}
            editorKey='lx-draft-editor'
            customStyleMap={colorStyleMap}
            editorState={editorState}
            onChange={this.onTextChange}
          />
        </div>
        <style jsx>{`
          .v-editor-wrapper {
            height: 500px;
            border: 1px solid #525eff;
          }
        `}</style>
      </>
    )
  }
}

export default DraftEditor
