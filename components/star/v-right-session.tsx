import React, { useState, useEffect, useRef, FC } from 'react'
// import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'

import VRepoTag from './v-repo-tag'
import VNote from './v-note'
import { RepoModel, TagModel } from '../../api/star/model'

const VMarkdown = dynamic(() => import('./v-markdown'), {
  ssr: false,
})

// export const config = { amp: true };

interface IRightSessionProps {
  repo?: RepoModel
  tagList: TagModel[]
  onUpdate: () => void
}
const VRightSession: FC<IRightSessionProps> = ({ repo, tagList, onUpdate }) => {
  return (
    <>
      <VRepoTag tagList={tagList} sTag={repo.tag} onUpdate={onUpdate} />
      <VNote note={repo.note} onUpdate={onUpdate} />
      <VMarkdown fullName={repo.full_name} />
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// VRightSession.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// VRightSession.getInitialProps = async ({ req }) => {}
VRightSession.displayName = '🔗 VRightSession - COMPONENT'

export default VRightSession
