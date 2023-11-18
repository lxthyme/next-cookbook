import Link from "next/link"
import React from "react"
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Page = (props) => {
  return (
    <>
      <style jsx global>{`
        #__next {
          padding: 20px;
        }
      `}</style>
      <style jsx>{`
        h4,
        h6 {
          padding: 0 20px;
        }
      `}</style>
      <h2>Index</h2>
      <div>
        <h4>Crypto</h4>
        <Link href="/crypto/test" target="_blank">crypto</Link>
        <h4>DSP</h4>
        <Link href="dsp/dealDup" target="_blank">dsp/dealDup</Link>
        <Link href="lxthyme/game/dsp/blueStarInfo" target="_blank">dsp/blueStarInfo</Link>
        <Link href="lxthyme/game/dsp/diff" target="_blank">dsp/diff</Link>
        <Link href="lxthyme/game/dsp/get" target="_blank">dsp/get</Link>
        <Link href="lxthyme/game/dsp/get2" target="_blank">dsp/get2</Link>
        <Link href="lxthyme/game/dsp/get3" target="_blank">dsp/get3</Link>
        <h6>外链</h6>
        <Link href="https://www.svlik.com/t/dsq" target="_blank">
          svlik.com/t/dsq
        </Link>
        <Link
          href="https://huww98.github.io/dsp_blueprint_editor"
          target="_blank"
        >
          dsp_blueprint_editor
        </Link>
        <Link href="https://eurydia.github.io/dsp-calculator/" target="_blank">dsp-calculator</Link>
        <Link
          href="https://factoriolab.github.io/list?z=eJxTS.JQSzPU8op3BuJkLff4TC0vtWItLbM6J6M6J986p5A6p.A6p6w6p6I654A655A6.7qIusi6qLrkutK6Ci1nLXctFOClVmYOAG0MGbk_&v=7"
          target="_blank"
        >
          factoriolab.github.io/list
        </Link>
        <Link href="https://github.com/DSPBluePrints/DysonSphereBluePrints" target="_blank">戴森球蓝图(DysonSphereBluePrints)</Link>
        <Link href="https://github.com/DSPBluePrints/FactoryBluePrints" target="_blank">DSP 蓝图(FactoryBluePrints)</Link>
        <Link href="https://github.com/bWFuanVzYWth/dspbptk" target="_blank">https://github.com/bWFuanVzYWth/dspbptk</Link>
        {/* <Link href="" target="_blank"></Link> */}
        <h4>GTA 5</h4>
        <Link href="https://gtaweb.eu" target="_blank">gtaWeb.eu</Link>

        <h4>Slay The Spire</h4>
        <Link href="/slaythespire" target="_blank">slaythespire</Link>
        <Link href="https://save-the-spire.vercel.app" target="_blank">save-the-spire.vercel.app</Link>
        <h4>pvz2</h4>
        <Link href="pvz2/fmt" target="_blank">pvz2/fmt</Link>
        <h4>NMS</h4>
        <Link href="https://github.com/goatfungus/NMSSaveEditor" target="_blank">NMSSaveEditor</Link>
        <Link href="https://nms.center/" target="_blank">nms.center</Link>
        {/* `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` */}
        <Link href="https://github.com/zencq/Pi" target="_blank">Collection of CSV files with values of every procedural item in No Man&apos;s Sky.</Link>
        <h4>Dead Cells</h4>
        <Link href="https://deadcells.wiki.gg/wiki/Biomes_map" target="_blank">Dead Cells Roadmap</Link>
        {/* <Link href="" target="_blank"></Link> */}
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
