import React from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios';

// export const config = { amp: true };

const Page = ({ md }) => {
  const getMdView = (md) => {
    if(md?.error) {
      return <div>{md.error}</div>
    } else {
      const html = { __html: md?.mdContent }
        return <div dangerouslySetInnerHTML={html}></div>
    }
  }
  console.log('-->md: ', md);
  return (<>
  {!!md?.error ? <div>{JSON.stringify(md.error)}</div> : <div dangerouslySetInnerHTML={{ __html: md?.mdContent }}></div>}
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
    'components/ai.mdx',
    'components/game.mdx',
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
      path: `mdx/${name}.mdx`,
    // },
  })
  // const json = await result.json()
  return { props: {
    md: result.data
   }
  };
}

export default Page
