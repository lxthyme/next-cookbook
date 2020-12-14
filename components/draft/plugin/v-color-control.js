import React, {useState, useEffect} from 'react'
import {EditorState, Modifier, RichUtils} from 'draft-js'

import {colorStyleMap} from '../../model/color'

const styles = {
  root: {
    fontFamily: "'Georgia', serif",
    fontSize: 14,
    padding: 20,
    width: 600,
  },
  editor: {
    borderTop: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    marginTop: 20,
    minHeight: 400,
    paddingTop: 20,
  },
  controls: {
    fontFamily: "'Helvetica', sans-serif",
    fontSize: 14,
    marginBottom: 10,
    userSelect: 'none',
  },
  styleButton: {
    color: '#999',
    cursor: 'pointer',
    marginRight: 16,
    padding: '2px 0',
  },
}

const StyleButton = ({onToggle, style, active, label}) => {
  const onToggleAction = (e) => {
    e.preventDefault()
    onToggle && onToggle(style)
  }

  const [spanStyle, setSpanStyle] = useState({})
  useEffect(() => {
    let s = null
    if (active) {
      s = {...styles.styleButton, ...colorStyleMap[style]}
    } else {
      s = styles.styleButton
    }
    setSpanStyle(s)
  }, [style, active])
  return (
    <>
      <span style={spanStyle} onMouseDown={onToggleAction}>
        {label}
      </span>
      <style jsx>{``}</style>
    </>
  )
}

const COLORS = [
  {label: 'Red', style: 'red'},
  {label: 'Orange', style: 'orange'},
  {label: 'Yellow', style: 'yellow'},
  {label: 'Green', style: 'green'},
  {label: 'Blue', style: 'blue'},
  {label: 'Indigo', style: 'indigo'},
  {label: 'Violet', style: 'violet'},
]

const ColorControlComp = ({editorState, onToggle, onChange}) => {
  const onToggleColor = (toggledColor) => {
    console.log('>>>onToggleColor: ', toggledColor)
    // const {editorState} = this.state
    const selection = editorState.getSelection()

    // Let's just allow one color at a time. Turn off all active colors.
    const nextContentState = Object.keys(colorStyleMap).reduce((contentState, color) => {
      return Modifier.removeInlineStyle(contentState, selection, color)
    }, editorState.getCurrentContent())

    let nextEditorState = EditorState.push(editorState, nextContentState, 'change-inline-style')

    const currentStyle = editorState.getCurrentInlineStyle()
    // Unset style override for current color.
    if (selection.isCollapsed()) {
      nextEditorState = currentStyle.reduce((state, color) => {
        return RichUtils.toggleInlineStyle(state, color)
      }, nextEditorState)
    }

    // If the color is being toggled on, apply it.
    if (!currentStyle.has(toggledColor)) {
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, toggledColor)
    }

    onChange && onChange(nextEditorState)
  }
  return (
    <>
      <div>
        {COLORS.map((t) => (
          <StyleButton
            key={t.label}
            active={editorState.getCurrentInlineStyle()}
            label={t.label}
            onToggle={onToggleColor}
            style={t.style}
          />
        ))}
      </div>
      <style jsx>{``}</style>
    </>
  )
}

export default ColorControlComp
