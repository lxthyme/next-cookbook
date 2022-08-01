import React, { useEffect } from "react"
// import PropTypes from 'prop-types'
import { zsh_history } from "@js/zsh.去重"

// export const config = { amp: true };

const Page = (props) => {
  useEffect(() => {
    window.zsh_history = zsh_history
  }, [])
  return (
    <>
      <h2>format zsh history</h2>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "🔗 Page - COMPONENT"

export default Page
