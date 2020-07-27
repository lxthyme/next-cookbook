import React, { useState, useEffect } from 'react'

import { get } from '../../plugins/api'

import ReactMarkdown from 'react-markdown'

const toc = require('remark-toc')
// export const config = { amp: true };

const VMarkdown = ({ fullName }) => {
  const [readME, setReadME] = useState(`<img src="images/immer-logo.svg" height="200px" align="right">
  <div>111</div>
  <img src="images/immer-logo.svg" height="200px" align="right">`)
  useEffect(() => {
    window.setReadME = setReadME
  }, [])
  useEffect(() => {
    fullName && loadReadMe()
  }, [fullName])
  const loadReadMe = () => {
    get(`https://raw.githubusercontent.com/${fullName}/master/README.md`)
      .then((res = {}) => {
        let { data = '' } = res
        data = data
          .replace(/<\/br>/gi, '<br/>')
          .replace(/(<img[\s\S]*?)(?<!\/)>/gi, '$1/>')
          .replace(/\/><\/img>/gi, '/>')
          .replace(/("\/assets\/)|("assets\/)/gi, `"https://raw.githubusercontent.com/${fullName}/master/assets/`)
          .replace(/(\(\/assets\/)|(\(assets\/)/gi, `(https://raw.githubusercontent.com/${fullName}/master/assets/`)
        setReadME(data)
        window.readME = data
      })
      .catch((e) => {
        get(
          `https://raw.githubusercontent.com/${fullName}/master/readme.md`,
        ).then((res = {}) => {
          let { data = '' } = res
          data = data
            .replace(/<\/br>/gi, '<br/>')
            .replace(/(<img[\s\S]*?)(?<!\/)>/gi, '$1/>')
            .replace(/\/><\/img>/gi, '/>')
            .replace(/("\/assets\/)|("assets\/)/gi, `"https://raw.githubusercontent.com/${fullName}/master/assets/`)
          setReadME(data)
        })
      })
  }
  return (
    <>
      <ReactMarkdown
        className="v-markdown-wrapper"
        skipHtml={false}
        escapeHtml={false}
        // rawSourcePos={true}
        source={readME}
        unwrapDisallowed={true}
        // allowNode={(node, idx, parent) => true}
        // allowedTypes={['root','text','break','paragraph','emphasis','strong','thematicBreak','blockquote','delete','link','image','linkReference','imageReference','table','tableHead','tableBody','tableRow','tableCell','list','listItem','definition','heading','inlineCode','code','html','virtualHtml','parsedHtml',]}
        dangerouslySetInnerHTML
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
