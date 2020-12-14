import React, { useEffect } from 'react'
import Link from 'next/link'

import { usePost } from '@/plugins/api'

// export const config = { amp: true };

const Page = (props) => {
  useEffect(() => {
    loadData()
  }, [])
  const loadData = (isRefresh) => {
    const { data } = usePost({
      url: 'http://localhost:3002/api/data',
    })
  }
  console.log('>>>Data: ', data)
  return (
    <>
      {data
        ? data.map((project) => (
            <p key={project}>
              <Link href="/[user]/[repo]" as={`/${project}`}>
                <a>{project}</a>
              </Link>
            </p>
          ))
        : 'loading...'}
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}

export default Page
