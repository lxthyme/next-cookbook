import React, { useState, useEffect } from 'react';
// import markdownit from 'markdown-it'
// import { marked } from 'marked'
// import { JSDOM } from 'jsdom';
// import DOMPurify from 'dompurify';
// import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css';
// import 'highlight.js/styles/base16/solarized-dark.min.css';
import 'highlight.js/styles/base16/solar-flare-light.min.css';

// marked.use({
//   async: true,
//   pedantic: false,
//   gfm: true,
// });

export default function MarkdownLayout({ children, html }: { children: React.ReactNode, html: string }) {
  // const [cleanDom, setCleanDom] = useState(undefined)

  // useEffect(() => {
  //   console.log('-->html2: ')
  //   const result = marked.parse(html ?? '')
  //   .then(result => {
  //     // const window = new JSDOM('').window;
  //     // const purify = DOMPurify(window);
  //     // const cleanDom = purify.sanitize(result);
  //     // setCleanDom(cleanDom)
  //     setCleanDom(result)
  //   })
  // }, [html])

  const getMdView = () => {
    console.log('-->html: ');
    if(!!html) {
      // const fmtHtml = { __html: cleanDom }
      const fmtHtml = { __html: html }
      return <div className="v-markdown-render" dangerouslySetInnerHTML={fmtHtml}></div>
    } else {
      return <div className="v-markdown-render">{children}</div>
    }
  }

  return <>
  {getMdView(html)}
  <style jsx global>{`
        #__next {
          padding: 20px;
        }
      `}</style>
      <style jsx>{`
        h4,
        h6 {
          padding: 0 20px;
        }
      `}</style>
  </>
}
