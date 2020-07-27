import React, { useState, useEffect, useRef } from 'react'

import { Input, Button, message } from 'antd'
import { useRouter } from 'next/router'

import { post } from '../../plugins/api'

const { TextArea } = Input
// export const config = { amp: true };

const VNote = (props) => {
  const textareaRef = useRef(null)
  const router = useRouter()
  useEffect(() => {
    window.ta = textareaRef
  }, [])
  useEffect(() => {
    loadNoteData()
  }, [router.query.id])
  const [noteContent, setNoteContent] = useState('')
  const loadNoteData = (from = 0, to = 20) => {
    const repo_id = router.query.id
    if (!repo_id) {
      console.log('repo_id: ', repo_id, ' 不正确!')
      return
    }
    return post({
      url: 'http://0.0.0.0:3003/api/github/repo/list',
      params: { type: 'repo_note', repo_id },
    }).then(({ data }) => {
      const first = data[0] || {}
      setNoteContent(first.note)
    })
  }
  const onTextareaChange = ({ target: { value } }) => {
    setNoteContent(value)
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
      url: 'http://0.0.0.0:3003/api/github/repo/insert',
      params: { type: 'repo_note', data: { repo_id, note: noteContent } },
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
VNote.displayName = 'VNote'

export default VNote
