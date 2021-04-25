import React from 'react'
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const code = `
[URL Rewrite]
(?<=_region=)CN(?=&) TW 302
(?<=\d\/\?version_code=)1[6-9]..(?=.?.?&) 17 302
(?<=\?version_code=)1[8-9]..(?=.?.?&) 17 302
(?<=&mcc_mnc=)4 2 302
ctier=[A-Z] ctier=A 302
^https:\/\/[\s\S]*\.googlevideo\.com/.*&(oad|ctier) _ REJECT

[MITM]
hostname = *.tiktokv.com, *.byteoversea.com, *.musical.ly, *.snssdk.com, *.googlevideo.com
`
const Page = (props) => {
  return (
    <>
      <p><code>{code}</code></p>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = '📌 Page - PAGE'

export default Page
