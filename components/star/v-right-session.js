import React, { useState, useEffect, useRef } from 'react'

import VRepoTag from '../../components/star/v-repo-tag'
import VNote from '../../components/star/v-note'

// export const config = { amp: true };

const VRightSession = (props) => {
  const ref = useRef(0)
  const itemTapped = (item) => {
    setNoteData((t) => ({ ...t, id: item.id }))
    noteModalFunc.onShow()
  }
  const [noteData, setNoteData] = useState({
    id: null,
    note: '',
  })
  const insertNote = (data) => {
    post({
      url: 'http://0.0.0.0:3003/api/github/repo/insert',
      params: { type: 'repo_note', data },
    }).then((res) => {
      noteModalFunc.onDismiss()
    })
  }
  const [noteVisible, setNoteVisible] = useState(false)
  const noteModalFunc = {
    onShow: () => {
      setNoteVisible(true)
    },
    onDismiss: () => {
      setNoteVisible(false)
    },
    onSubmit: (v) => {
      if (!v) {
        return
      }
      console.log('V: ', v)
      setNoteData((t) => ({ ...t, note: v }))
      insertNote({ id: noteData.id, note: v })
    },
  }
  return (
    <>
      <VRepoTag />
      <VNote />
      {/* <VNoteModal
        ref={ref}
        visible={noteVisible}
        onSubmit={noteModalFunc.onSubmit}
        onDismiss={noteModalFunc.onDismiss}
      /> */}
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// VRightSession.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// VRightSession.getInitialProps = async ({ req }) => {}
VRightSession.displayName = 'VRightSession'

export default VRightSession
