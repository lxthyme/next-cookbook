import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'

export async function processMdx(content) {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [
        rehypeSlug, // 为标题添加锚点
        rehypeKatex, // LaTeX 支持
        [rehypeHighlight, { ignoreMissing: true }] // 代码高亮
      ]
    }
  })
}
