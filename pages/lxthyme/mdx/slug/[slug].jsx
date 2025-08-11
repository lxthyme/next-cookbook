import fs from "fs";
import path from "path";
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import matter from 'gray-matter'
import { processMdx } from '@plugin/mdx'
import Toc from '@components/md/Toc'

import { mdxFileRootPath, allMdxFilePathList } from '@plugin/file';

// 动态加载需要客户端渲染的组件
const Mermaid = dynamic(() => import('@components/md/Mermaid'))
const ECharts = dynamic(() => import('@components/md/ECharts'))

// 自定义组件映射
const components = {
  code: ({ className, children }) => {
    const language = className?.replace('language-', '')

    if (language === 'mermaid') {
      return <Mermaid chart={children} />
    }

    if (language === 'echarts') {
      return <ECharts option={JSON.parse(children)} />
    }

    return <code className={className}>{children}</code>
  }
}

export default function PostPage({ source, frontMatter, toc, error }) {
  return error ? (<>
  发生错误: {error}
  </>) : (<>
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://github.com/sindresorhus/github-markdown-css/raw/main/github-markdown.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css" />
      </Head>

      <aside>
        <Toc items={toc} />
      </aside>

      <article>
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...source} components={components} />
      </article>
    </div>
    </>)
}

export async function getStaticProps({ params }) {
  // const post = await import(`${mdxFileRootPath}/${params.slug}.mdx`)
  // const post = await import(`../../../../components/mdx/${params.slug}.mdx`)
  // const post = await import(`../../../../data/mdx/${params.slug}.mdx`)
  // const post = await import(`@components/mdx/${params.slug}.mdx`)
  // console.log('-->post: ', post.default(), Object.keys(post))
  const postFilePath = path.join(mdxFileRootPath, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  // 使用 gray-matter 解析 frontmatter 和内容
  const { content, data } = matter(source)

  // 生成目录
  const toc = []
  // const regex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g
  const regex = /^##\s+(.*?)\s*{#([\w-]+)}/gm
  let match
  while ((match = regex.exec(content))) {
    toc.push({
      id: match[1],
      text: match[2]
    })
  }

  let mdxSource = ''
  let error = ''
  try {
  mdxSource = await processMdx(content)
  console.log('-->mdxSource: ', mdxSource)
  } catch(e) {
    // mdxSource = JSON.stringify(e)
    error = JSON.stringify({
      code: e.code,
      msg: e.msg,
      e: JSON.stringify(e),
      e2: `${e}`
    })
    console.log('-->processMdx: ', e)
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      toc,
      error,
    }
  }
}

export const getStaticPaths = async () => {
  const paths = allMdxFilePathList
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
