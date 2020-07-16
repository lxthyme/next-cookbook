import React, { useState, useEffect, useRef } from 'react'
// import ReactMarkdown from 'react-markdown'
import dynamic from 'next/dynamic'

import VRepoTag from '../../components/star/v-repo-tag'
import VNote from '../../components/star/v-note'

const VMarkdown = dynamic(() => import('../../components/star/v-markdown'), {
  ssr: false,
})

// export const config = { amp: true };

const VRightSession = ({ repo }) => {
  return (
    <>
      <VRepoTag />
      <VNote />
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
VRightSession.displayName = 'VRightSession'

export default VRightSession
