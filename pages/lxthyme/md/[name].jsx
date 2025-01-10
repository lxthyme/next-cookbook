import React from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios';
import MarkdownLayout from "@components/markdown/markdownRender";

// export const config = { amp: true };

const Page = ({ md }) => {
  const getMdView = (md) => {
    if(md?.error) {
      return <div>{md.error}</div>
    } else {
        return <MarkdownLayout html={md?.mdContent}/>
        // return <MarkdownLayout html={md?.content}/>
    }
  }
  return (<>
  {!!md?.error ? <div>{JSON.stringify(md.error)}</div> : getMdView(md)}
      {/* <style jsx>{``}</style> */}
    </>)
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "🌍 Page - LAYOUT"
// 1. 获取需要生成的路径
// export const getStaticPaths = async () => {
  export async function getStaticPaths() {

  const mdPathList = [
    // 'test',
    // 'md-test',
    'ai.md',
    'game.md',
    'demo.md',
    // 'md-test1',
    // 'md-test2',
    // 'md-test3',
  ]
  .map(t => {
    return {
      params: {
        mdPath: t,
        name: t.split('/').slice(-1)[0].split('.')[0],
      }
    }
  })
  console.log('-->mdPathList: ', mdPathList);
  return {
    paths: mdPathList,
    fallback: false,  // false 表示未预渲染的路径会返回 404 页面
  };
}

// 2. 获取数据和传递 props
// export const getStaticProps = async (params) => {
export async function getStaticProps({ params }) {
  const { mdPath, name } = params;
  console.log('-->params: ', params);

  const result = await axios.post('http://0.0.0.0:3003/api/lxthyme/readFile', {
    // params: {
      type: 'md',
      // path: '../../components/ai.mdx',
      path: `data/mdx/${name}.md`,
    // },
  })
  // const json = await result.json()
  return { props: {
    md: result.data
   }
  };
}

export default Page
