import React, { useState, useEffect } from 'react'
import { get } from '../../plugins/api'

import MarkdownIt from 'markdown-it'
import hljs, { highlight } from 'highlight.js'
import 'highlight.js/styles/github.css'
// import LinkifyIt from 'linkify-it'

import ReactMarkdown from 'react-markdown'
import vLog from '../../plugins/logger'

const toc = require('remark-toc')
// export const config = { amp: true };

// const linkify = new LinkifyIt({
//   schema: 'README',
//   url: 'http://lxthyme.com'
// })
// window.linkify = linkify

const PROTOCOL = ['http', 'https', 'mailto', 'tel', 'ftp']
const md = new MarkdownIt({
  html: true,
  // linkify: true,
  typographer: true,
  highlight: (str, lang) => {
    // console.log('highlight: ', {str, lang});
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (error) {
        console.log('E: ', error)
      }
    }

    return '' // use external default escaping
  },
})
// .normalizeLink((url) => {
//   console.log('URL: ', url)
//   return url
// })
// md.core.ruler.push('replace-link', (state) => {
//   console.log('state: ', state)
// })
function replaceAttr(token, attrName, replace, env) {
  // console.log('replaceAttr: ', {token, attrName, replace, env})
  token.attrs.forEach(function (attr) {
    if (attr[0] === attrName) {
      attr[1] = replace(attr[1], env, token)
    }
  })
  token.attrs.push(['target', '_blank'])
}
md.core.ruler.after('inline', 'replace-link', (state) => {
  var replace

  if (md.options.replaceLink && typeof md.options.replaceLink === 'function') {
    // Use markdown options (default so far)
    replace = md.options.replaceLink
  }
  //  else if (
  //   opts &&
  //   opts.replaceLink &&
  //   typeof opts.replaceLink === 'function'
  // ) {
  //   // Alternatively use plugin options provided upon .use(..)
  //   replace = opts.replaceLink
  // }
  else {
    return false
  }

  if (typeof replace === 'function') {
    state.tokens.forEach(function (blockToken) {
      if (blockToken.type === 'inline' && blockToken.children) {
        blockToken.children.forEach(function (token) {
          var type = token.type
          if (type === 'link_open') {
            replaceAttr(token, 'href', replace, state.env)
          } else if (type === 'image') {
            replaceAttr(token, 'src', replace, state.env)
          }
        })
      }
    })
  }
  return false
})
window.md2 = md
const VMarkdown = ({ fullName }) => {
  const [apiReadME, setApiReadME] = useState({})
  const [
    readME,
    setReadME,
  ] = useState(`<img src="images/immer-logo.svg" height="200px" align="right">
  <div>111</div>
  <img src="images/immer-logo.svg" height="200px" align="right">`)
  useEffect(() => {
    window.md = {
      fullName,
      loadReadMe,
      loadReadMeContent,
      setReadME,
      apiReadME,
      readME,
    }
    md.set({
      replaceLink: function (link, env, token) {
        const url = link || ''
        let fmt = ''
        if (apiReadME && apiReadME.html_url) {
          const idx = apiReadME.html_url.lastIndexOf('/')
          if (idx >= 0) {
            fmt = apiReadME.html_url.slice(0, idx)
          }
        }
        if (url.startsWith('#')) {
          fmt = `${apiReadME.html_url}${url}`
        } else if (
          url.startsWith('http') ||
          url.startsWith('ftp') ||
          url.startsWith('//')
        ) {
          fmt = url
        } else if (url.startsWith('./')) {
          console.log('replace ./: ', { link, env, token })
          /// https://github.com/ianstormtaylor/slate/blob/main/License.md
          fmt = `${apiReadME.html_url}/${url.slice(2)}`
        } else {
          console.log('replace: ', { link, env, token })
          fmt = `${fmt}/${url}`
        }
        return fmt
      },
    })
  }, [])
  useEffect(() => {
    fullName && loadReadMe()
  }, [fullName])
  const loadReadMeContent = (url) => {
    get(
      url,
      {},
      {
        headers: {
          Accept: 'application/vnd.github.v3.star+json',
          // Authorization: 'token 5357fb77f46b31b93b14869cab3c648b3e1bb0cd',
        },
      },
    )
  }
  const loadReadMe = () => {
    get(
      `https://api.github.com/repos/${fullName}/readme`,
      {},
      {
        headers: {
          Accept: 'application/vnd.github.v3.star+json',
          Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        },
      },
    )
      .then(({ data }) => {
        setApiReadME(data)
        return get(
          data.download_url,
          {},
          {
            headers: {
              Accept: 'application/vnd.github.v3.star+json',
              // Authorization: 'token 5357fb77f46b31b93b14869cab3c648b3e1bb0cd',
            },
          },
        )
      })
      // get(`https://raw.githubusercontent.com/${fullName}/master/README.md`)
      // get(`https://api.github.com/repos/${fullName}/readme`)
      /// https://github.com/k88hudson/git-flight-rules/blob/master/
      .then((res = {}) => {
        let { data = '' } = res
        data = data
          .replace(/<\/br>/gi, '<br/>')
          .replace(/(<img[\s\S]*?)(?<!\/)>/gi, '$1/>')
          .replace(/\/><\/img>/gi, '/>')
          .replace(
            /("\/assets\/)|("assets\/)/gi,
            `"https://raw.githubusercontent.com/${fullName}/master/assets/`,
          )
          .replace(
            /(\(\/assets\/)|(\(assets\/)/gi,
            `(https://raw.githubusercontent.com/${fullName}/master/assets/`,
          )
        setReadME(data)
        window.readME = data
      })
      .catch((e) => {
        vLog.error(e)
        // get(
        //   `https://raw.githubusercontent.com/${fullName}/master/readme.md`,
        // ).then((res = {}) => {
        //   let { data = '' } = res
        //   data = data
        //     .replace(/<\/br>/gi, '<br/>')
        //     .replace(/(<img[\s\S]*?)(?<!\/)>/gi, '$1/>')
        //     .replace(/\/><\/img>/gi, '/>')
        //     .replace(
        //       /("\/assets\/)|("assets\/)/gi,
        //       `"https://raw.githubusercontent.com/${fullName}/master/assets/`,
        //     )
        //   setReadME(data)
        // })
      })
  }
  const fixedLink = (url, text, title) => {
    console.log('Link: ', { url, text, title })
    if (!url || url.length <= 0) {
      return url
    }
    // return title
    const fmtURL = `https://github.com/${fullName}/blob/master/${url}`
    // const fmtURL = `<a target="_blank" href="https://github.com/${fullName}/blob/master/${url}">${text[0] && text[0].value}</a>`
    /// 1. #
    if (url.startsWith('#')) {
      return `https://github.com/${fullName}/blob/master/${apiReadME.path}${url}`
    }
    const protocols = ['http', 'https', 'mailto', 'tel']
    const colon = url.indexOf(':')
    if (colon === -1) {
      return fmtURL
    }

    const length = protocols.length
    let index = -1
    while (++index < length) {
      const protocol = protocols[index]

      if (
        colon === protocol.length &&
        url.slice(0, protocol.length).toLowerCase() === protocol
      ) {
        return url
      }
    }
    return url
  }
  const renderResult = () => {
    return md.render(readME)
  }
  return (
    <>
      {/* <ReactMarkdown
        className="v-markdown-wrapper"
        skipHtml={false}
        escapeHtml={false}
        // rawSourcePos={true}
        source={readME}
        unwrapDisallowed={true}
        // allowNode={(node, idx, parent) => true}
        // allowedTypes={['root','text','break','paragraph','emphasis','strong','thematicBreak','blockquote','delete','link','image','linkReference','imageReference','table','tableHead','tableBody','tableRow','tableCell','list','listItem','definition','heading','inlineCode','code','html','virtualHtml','parsedHtml',]}
        dangerouslySetInnerHTML
        transformLinkUri={fixedLink}
        linkTarget='_blank'
        plugins={[toc]}
      /> */}
      <div
        className="v-markdown-wrapper"
        dangerouslySetInnerHTML={{ __html: renderResult() }}
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
VMarkdown.displayName = '🔗 VMarkdown - COMPONENT'

export default VMarkdown
