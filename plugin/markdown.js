import markdownit from 'markdown-it'
import { marked } from 'marked'
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js'
import { readFile } from "fs/promises"

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  // highlight: function (str, lang) {
  //   console.log('-->lang: ', lang)
  //   if (lang && hljs.getLanguage(lang)) {
  //     try {
  //       return hljs.highlight(str, { language: lang }).value;
  //     } catch (__) {}
  //   }

  //   return ''; // use external default escaping
  // },
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre><code class="hljs">' +
               hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
  }
})
marked.use({
  async: true,
  pedantic: false,
  gfm: true,
});

export const parseMD = (data) => {
  const mdContent = md.render(data)
  // const mdContent = await marked.parse(data)
  const window = new JSDOM('').window;
  const purify = DOMPurify(window);
  const cleanDom = purify.sanitize(mdContent);
  return cleanDom
}
