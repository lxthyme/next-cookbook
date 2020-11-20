import React, { useState, useEffect, useRef } from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'

const NoteModal = React.forwardRef(({ visible, onDismiss, onSubmit }, ref) => {
  const textareaRef = useRef(null)
  const btnSubmitAction = () => {
    const value = textareaRef.current.value || ''
    onSubmit && onSubmit(value)
  }
  return (
    <>
      <button type="button" onClick={onDismiss}>
        react-transition-group
      </button>
      <Modal
        ref={ref}
        open={visible}
        onClose={onDismiss}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visible}>
          <div className="v-panel-note">
            <h2 id="transition-modal-title">添加备注</h2>
            <textarea
              ref={textareaRef}
              name="note_content"
              id="note_content"
              rows="10"
            ></textarea>
            <div className="v-btn-group">
              <Button
                variant="contained"
                color="primary"
                onClick={btnSubmitAction}
              >
                提交
              </Button>
              <Button
                variant="contained"
                onClick={onDismiss}
                style={{
                  marginLeft: 16,
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <style>{`
      .v-panel-note {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        padding: 16px;
        background-color: #fff;
        color: #333;
      }
      textarea {
        width: 100%;
      }
      .v-btn-group {
        display: flex;
    justify-content: flex-end;
    align-items: center;
      }
      `}</style>
    </>
  )
})
NoteModal.displayName = '🔗 NoteModal - COMPONENT'

export default NoteModal
