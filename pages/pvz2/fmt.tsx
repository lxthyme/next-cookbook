import React, { useEffect } from 'react'
import { v9_5_1_master, v9_5_1_new } from '@pvz2/save'

// export const config = { amp: true };

interface Props {}
const Page = (props: Props) => {
  useEffect(() => {
    window.lxthyme = v9_5_1_master.json.objects[0].objdata
    window.dave = v9_5_1_new.objects[0].objdata
  }, [])
  return <>
  <h2>pvz2</h2>
  {/* <style jsx>{``}</style> */}
  </>
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "🔗 Page - COMPONENT"

export default Page
