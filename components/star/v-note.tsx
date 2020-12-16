import React, { useEffect, useRef, FC, LegacyRef, RefObject } from 'react'

import { Input, Button, message } from 'antd'
import { useRouter } from 'next/router'

import { post } from '../../plugins/api'
import { NoteModel } from '../../api/star/model'
import { useImmer } from 'use-immer'

const { TextArea } = Input
// export const config = { amp: true };

interface INoteProps {
  note?: NoteModel
  onUpdate: (obj: object) => void
}
declare global {
  interface Window {
    note: {
      textareaRef:  React.RefObject<HTMLTextAreaElement>
    }
  }
}
export interface TextAreaRef extends HTMLTextAreaElement {
  resizableTextArea: any;
}
const VNote: FC<INoteProps> = ({ note, onUpdate }) => {
  // const textareaRef = useRef<LegacyRef<TextArea> | null>(null)
  // const textareaRef = useRef<HTMLTextAreaElement>(null) as RefObject<HTMLTextAreaElement>
  const textareaRef = React.useRef<TextAreaRef>(null)
  const router = useRouter()
  useEffect(() => {
    window.note = {
      textareaRef,
    }
    updateNoteContent(d => {
      d = (note && note.content) || ''
    })
  }, [note])
  const [noteContent, updateNoteContent] = useImmer('')
  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    updateNoteContent(d => {
      d = value
    })
  }
  const btnSubmitAction = () => {
    if (!noteContent || noteContent.length < 1) {
      message.error('备注的最小长度为 1!')
      return
    }
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    console.log('Value: ', noteContent)
    post({
      url: `${process.env.NEXT_PUBLIC_API_BaseURL}/api/github/note/set`,
      params: { repo_id, note: noteContent },
    })
      .then((res) => {
        message.success('添加备注成功!')
      })
      .catch((e) => {
        message.error('添加备注失败!')
      })
  }
  return (
    <>
      <div className="v-panel-note">
        <TextArea
          ref={textareaRef}
          value={noteContent}
          autoSize
          placeholder="添加备注"
          onChange={onTextareaChange}
        ></TextArea>
        <div className="v-btn-group">
          <Button color="primary" onClick={btnSubmitAction}>
            提交
          </Button>
          {/* <Button
            variant="contained"
            onClick={onDismiss}
            style={{
              marginLeft: 16,
            }}
          >
            Cancel
          </Button> */}
        </div>
      </div>
      <style jsx>{`
        .v-panel-note {
          // position: absolute;
          // top: 50%;
          // left: 50%;
          // transform: translate(-50%, -50%);
          // width: 50%;
          // padding: 16px;
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
}

// VNote.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// VNote.getInitialProps = async ({ req }) => {}
VNote.displayName = '🔗 VNote - COMPONENT'

export default VNote
