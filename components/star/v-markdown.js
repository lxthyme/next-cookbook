import React, { useState, useEffect } from 'react'

import { get } from '../../plugins/api'

import ReactMarkdown from 'react-markdown'

const toc = require('remark-toc')
// export const config = { amp: true };

const VMarkdown = ({ fullName }) => {
  const [readME, setReadME] = useState('')
  useEffect(() => {
    fullName && loadReadMe()
  }, [fullName])
  const loadReadMe = () => {
    get(`https://raw.githubusercontent.com/${fullName}/master/README.md`).then(
      (res = {}) => {
        const { data = '' } = res
        setReadME(data)
      },
    )
  }
  return (
    <>
      <ReactMarkdown
        className="v-markdown-wrapper"
        skipHtml={false}
        escapeHtml={true}
        source={readME}
        plugins={[toc]}
      />
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// VMarkdown.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// VMarkdown.getInitialProps = async ({ req }) => {}
VMarkdown.displayName = 'VMarkdown'

export default VMarkdown
