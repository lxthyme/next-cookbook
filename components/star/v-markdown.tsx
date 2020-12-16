import React, { useEffect, FC } from 'react'
import { get } from '../../plugins/api'

import MarkdownIt from 'markdown-it'
import hljs, { highlight } from 'highlight.js'
import 'highlight.js/styles/github.css'
// import LinkifyIt from 'linkify-it'

import ReactMarkdown from 'react-markdown'
import vLog from '../../plugins/logger'
import { IMarkdownModel, ReadmeModel } from '../../api/star/model'
import { useImmer } from 'use-immer'
import { $ReadME, $ReadmeDownload } from '../../api/star/star'
import axios from '../../plugins/axios'
import Token from 'markdown-it/lib/token'

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
  highlight: (str: string, lang: string) => {
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
function replaceAttr(token: Token, attrName: string, replace: any, env: object) {
  // console.log('replaceAttr: ', {token, attrName, replace, env})
  token.attrs?.forEach(function (attr: any) {
    if (attr[0] === attrName) {
      attr[1] = replace(attr[1], env, token)
    }
  })
  token.attrs?.push(['target', '_blank'])
}
md.core.ruler.after('inline', 'replace-link', (state) => {
  var replace: any

  if (md.options && typeof md.options.replaceLink === 'function') {
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
declare global {
  interface Window {
    md2: any
    readME: any
    md: {
      fullName: string
      loadReadMe: () => void
      // loadReadMeContent: (url: string) => void
      // setReadME: any
      apiReadME?: ReadmeModel
      info: IMarkdownModel
    }
  }
}
interface IVMarkdownProps {
  fullName: string
}
const VMarkdown: FC<IVMarkdownProps> = ({ fullName }) => {
  const [info, updateInfo] = useImmer<IMarkdownModel>({} as IMarkdownModel)
  useEffect(() => {
    window.md = {
      fullName,
      loadReadMe,
      // loadReadMeContent,
      info
    }
    md.set({
      replaceLink: function (link: string, env: object, token: string) {
        const url = link || ''
        let fmt = ''
        if (info.model?.html_url) {
          const idx = info.model?.html_url.lastIndexOf('/')
          if (idx >= 0) {
            fmt = info.model.html_url.slice(0, idx)
          }
        }
        if (url.startsWith('#')) {
          fmt = `${info.model?.html_url}${url}`
        } else if (
          url.startsWith('http') ||
          url.startsWith('ftp') ||
          url.startsWith('//')
        ) {
          fmt = url
        } else if (url.startsWith('./')) {
          /// https://github.com/ianstormtaylor/slate/blob/main/License.md
          fmt = `${info.model?.html_url}/${url.slice(2)}`
          console.log('replace ./: ', { link, env, token, fmt })
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
  const loadReadMe = () => {
    $ReadME(fullName)
      .then(({ data }) => {
        updateInfo((d) => {
          d.model = data
        })
        return $ReadmeDownload(data.download_url)
      })
      .then((res) => {
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
        updateInfo((d) => {
          d.f_content = md.render(data)
          d.content = data
        })
      })
      .catch((e) => {
        vLog.error(e)
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
      return `https://github.com/${fullName}/blob/master/${info.model?.path}${url}`
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
        dangerouslySetInnerHTML={{ __html: info.f_content }}
      />
      {/* dangerouslySetInnerHTML={{ __html: renderResult() }} */}
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
