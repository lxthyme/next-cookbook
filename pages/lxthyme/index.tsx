import Link from "next/link"
import React, { useState } from "react"
import axios from 'axios';
// import PropTypes from 'prop-types'

// export const config = { amp: true };

const Page = (props) => {
  const [type, setType] = useState('')
  const [url, setUrl] = useState('')
  const [url_desc, setUrl_desc] = useState('')
  const [name, setName] = useState('')
  const onAdd = () => {
    const param = { type, url, name, url_desc,
      op: 'insert'
     }
    console.log('-->onAdd: ', param)
    // insertList(param)
    insertList({
      // op: 'insertList',
      op: 'insert',
      list: [{"type":"Crypto","url_desc":"crypto","url":"crypto/test"},{"type":"DSP","url_desc":"dsp/dealDup","url":"dsp/dealDup"},{"type":"DSP","url_desc":"dsp/blueStarInfo","url":"lxthyme/game/dsp/blueStarInfo"},{"type":"DSP","url_desc":"dsp/diff","url":"lxthyme/game/dsp/diff"},{"type":"DSP","url_desc":"dsp/get","url":"lxthyme/game/dsp/get"},{"type":"DSP","url_desc":"dsp/get2","url":"lxthyme/game/dsp/get2"},{"type":"DSP","url_desc":"dsp/get3","url":"lxthyme/game/dsp/get3"},{"type":"DSP","type2":"外链","url_desc":"自动生成无带蓝图: svlik.com/t/dsq","url":"https://www.svlik.com/t/dsq"},{"type":"DSP","type2":"外链","url_desc":"dsp-calc.pro","url":"https://dsp-calc.pro/"},{"type":"DSP","type2":"外链","url_desc":"dsp_blueprint_editor","url":"https://huww98.github.io/dsp_blueprint_editor"},{"type":"DSP","type2":"外链","url_desc":"dsp-calculator","url":"https://eurydia.github.io/dsp-calculator/"},{"type":"DSP","type2":"外链","url_desc":"factoriolab.github.io/list","url":"https://factoriolab.github.io/list?z=eJxTS.JQSzPU8op3BuJkLff4TC0vtWItLbM6J6M6J986p5A6p.A6p6w6p6I654A655A6.7qIusi6qLrkutK6Ci1nLXctFOClVmYOAG0MGbk_&v=7"},{"type":"DSP","type2":"外链","url_desc":"戴森球蓝图(DysonSphereBluePrints)","url":"https://github.com/DSPBluePrints/DysonSphereBluePrints"},{"type":"DSP","type2":"外链","url_desc":"DSP 蓝图(FactoryBluePrints)","url":"https://github.com/DSPBluePrints/FactoryBluePrints"},{"type":"DSP","type2":"外链","url_desc":"https://github.com/bWFuanVzYWth/dspbptk","url":"https://github.com/bWFuanVzYWth/dspbptk"},{"type":"DSP","type2":"外链","url_desc":"仙术: edit-dspblue-print","url":"https://github.com/cying314/edit-dspblue-print"},{"type":"GTA5","url_desc":"gtaWeb.eu","url":"https://gtaweb.eu/"},{"type":"GTA5","url_desc":"GTA5线上小助手","url":"https://github.com/CrazyZhang666/GTA5OnlineTools/releases"},{"type":"GTA5","url_desc":"https://gtacars.net","url":"https://gtacars.net/"},{"type":"GTA5","url_desc":"https://gtalens.com/?page=1&platforms=pc","url":"https://gtalens.com/?page=1&platforms=pc"},{"type":"Slay The Spire","url_desc":"slaythespire","url":"slaythespire"},{"type":"Slay The Spire","url_desc":"save-the-spire.vercel.app","url":"https://save-the-spire.vercel.app/"},{"type":"pvz2","url_desc":"pvz2/fmt","url":"pvz2/fmt"},{"type":"NMS","url_desc":"NMSSaveEditor","url":"https://github.com/goatfungus/NMSSaveEditor"},{"type":"NMS","url_desc":"nms.center","url":"https://nms.center/"},{"type":"NMS","url_desc":"Collection of CSV files with values of every procedural item in No Man's Sky.","url":"https://github.com/zencq/Pi"},{"type":"Dead Cells","url_desc":"Dead Cells Roadmap","url":"https://deadcells.wiki.gg/wiki/Biomes_map"},{"type":"PalWorld","url_desc":"踩蘑菇论坛社区: 里面有地图, 图鉴, 配种, 词条, 技能, mod","url":"https://palworld.caimogu.cc/breed.html"},{"type":"PalWorld","url_desc":"Excel表格: https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001","url":"https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001"},{"type":"PalWorld","url_desc":"地图攻略: https://map.caimogu.cc/palworld/paru_islands.html","url":"https://map.caimogu.cc/palworld/paru_islands.html"},{"type":"PalWorld","url_desc":"幻兽帕鲁MOD圈: https://www.caimogu.cc/circle/426.html","url":"https://www.caimogu.cc/circle/426.html"},{"type":"PalWorld","url_desc":"技能查询: https://palworld.caimogu.cc/skill.html","url":"https://palworld.caimogu.cc/skill.html"},{"type":"PalWorld","url_desc":"Excel表格: https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001","url":"https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001"}]
    })
  }
  const insertList = async (param: object) => {
  return axios.post('api/lxthyme/note/getNote', param)
    .then(res => {
      console.log('result: ', res)
      return res
    })
    .catch(error => {
      console.log('-->Insert Error: ', error)
      return Promise.reject(error)
    })
  }
  return (
    <>
      <style jsx global>{`
        #__next {
          padding: 20px;
        }
      `}</style>
      <style jsx>{`
        .v-testa,
        a,
        h4,
        h6 {
          display: block;
          padding: 0 20px;
        }
      `}</style>
      <h2>Index</h2>
      <div>
        <div className="v-add">
          <input type="text" name="type" id="type" placeholder="类型(分类)" value={type}
            onChange={(e) => setType(e.target.value)} />
          <input type="text" name="url" id="url" placeholder="url 地址" value={url}
            onChange={(e) => setUrl(e.target.value)} />
          <input type="text" name="url_desc" id="url_desc" placeholder="url 描述" value={url_desc}
            onChange={(e) => setUrl_desc(e.target.value)} />
          <input type="text" name="name" id="name" placeholder="name" value={name}
            onChange={(e) => setName(e.target.value)} />
          <button onClick={onAdd}>Add</button>
        </div>
        <h4>Crypto</h4>
        <Link className="v-testa" href="/crypto/test" target="_blank">crypto</Link>
        <h4>DSP</h4>
        <Link href="dsp/dealDup" target="_blank">dsp/dealDup</Link>
        <Link href="lxthyme/game/dsp/blueStarInfo" target="_blank">dsp/blueStarInfo</Link>
        <Link href="lxthyme/game/dsp/diff" target="_blank">dsp/diff</Link>
        <Link href="lxthyme/game/dsp/get" target="_blank">dsp/get</Link>
        <Link href="lxthyme/game/dsp/get2" target="_blank">dsp/get2</Link>
        <Link href="lxthyme/game/dsp/get3" target="_blank">dsp/get3</Link>
        <h6>外链</h6>
        <Link href="https://www.svlik.com/t/dsq" target="_blank">自动生成无带蓝图: svlik.com/t/dsq</Link>
        <Link href="https://dsp-calc.pro/" target="_blank">dsp-calc.pro</Link>
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
        <Link href="https://github.com/cying314/edit-dspblue-print" target="_blank">仙术: edit-dspblue-print</Link>
        {/* <Link href="" target="_blank"></Link> */}
        <h4>GTA 5</h4>
        <Link href="https://gtaweb.eu" target="_blank">gtaWeb.eu</Link>
        <Link href="https://github.com/CrazyZhang666/GTA5OnlineTools/releases" target="_blank">GTA5线上小助手</Link>
        <Link href="https://gtacars.net" target="_blank">https://gtacars.net</Link>
        <Link href="https://gtalens.com/?page=1&platforms=pc" target="_blank">https://gtalens.com/?page=1&platforms=pc</Link>
        {/* <Link href="" target="_blank"></Link> */}

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
        <h4>PalWorld</h4>
        <Link href="https://palworld.caimogu.cc/breed.html" target="_blank">踩蘑菇论坛社区: 里面有地图, 图鉴, 配种, 词条, 技能, mod</Link>
        <Link href="https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001" target="_blank">Excel表格: https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001</Link>
        <Link href="https://map.caimogu.cc/palworld/paru_islands.html" target="_blank">地图攻略: https://map.caimogu.cc/palworld/paru_islands.html</Link>
        <Link href="https://www.caimogu.cc/circle/426.html" target="_blank">幻兽帕鲁MOD圈: https://www.caimogu.cc/circle/426.html</Link>
        <Link href="https://palworld.caimogu.cc/skill.html" target="_blank">技能查询: https://palworld.caimogu.cc/skill.html</Link>
        <Link href="https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001" target="_blank">Excel表格: https://docs.qq.com/sheet/DT05PeVVoekZiamlh?tab=000001</Link>
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
