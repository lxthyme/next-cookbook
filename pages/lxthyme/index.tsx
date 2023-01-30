import Link from "next/link"
import React from "react"
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      <h2>索引</h2>
      <div>
        <Link href="/crypto/test">crypto</Link>
        <Link href="/slaythespire">slaythespire</Link>
        <Link href="dsp/output">dsp/output</Link>
        <Link href="pvz2/fmt">pvz2/fmt</Link>
        <Link href="lxthyme/game/dsp/blueStarInfo">dsp/blueStarInfo</Link>
        <Link href="lxthyme/game/dsp/diff">dsp/diff</Link>
        <Link href="lxthyme/game/dsp/get">dsp/get</Link>
        <Link href="lxthyme/game/dsp/get2">dsp/get2</Link>
        <Link href="lxthyme/game/dsp/get3">dsp/get3</Link>
        {/* <Link href=""></Link> */}
      </div>
    </>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - PAGE"

export default Page
