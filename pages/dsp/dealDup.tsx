import React, { useEffect } from "react"
// import PropTypes from 'prop-types'
import { readFile } from "fs/promises"
import LXLayout from "@layout/lxlayout"

// export const config = { amp: true };

export async function getStaticProps(context) {
  const fileOf = async (path) => {
    return await readFile(path, {
      encoding: "utf-8",
    })
  }
  // const file_DSP无带 = await fileOf(
  //   "/Users/lxthyme/Desktop/Lucky/.config/Anything-Backup/Dropbox/Game/DSP/DSP无带.md"
  // )
  // const file_DSP无带2 = await fileOf(
  //   "/Users/lxthyme/Desktop/Lucky/Demo.React/next-cookbook/data/dsp/DSP无带.md"
  // )
  const path_3rd = "/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd"
  const path_无带 = `${path_3rd}/0.DSP无带`
  return {
    props: {
      // file: files
      file: {
        // md: file_DSP无带,
        file_DSP无带: await fileOf("./data/dsp/DSP无带.md"),
        // test: await fileOf(`${path_无带}/_New/dsp.md`),
        // test: await fileOf(`${path_无带}/_New/_new/物流运输机_30min.txt`),
        // 1: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 001.txt"),
        // 2: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 002.txt"),
        // 3: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 003.txt"),
        // 4: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 004.txt"),
        // 5: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 005.txt"),
        // 6: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 006.txt"),
        // 7: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 007.txt"),
        // 8: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 008.txt"),
        // 9: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 009.txt"),
        // 10: await fileOf("/Users/lxthyme/Library/CloudStorage/Dropbox/Game/DSP/3rd/0.DSP无带/_New/新蓝图 010.txt"),
        // file_DSP无带: await fileOf("./data/dsp/DSP无带.md"),
        // file_DSP无带: await fileOf("/Users/lxthyme/Downloads/dsp/dsp.md"),
        // file_71: await fileOf("/Users/lxthyme/Downloads/3333/info/7.1.txt"),
        // file_bp: await fileOf("/Users/lxthyme/Downloads/3333/info/bp.txt"),
        // file_dsp: await fileOf("/Users/lxthyme/Downloads/3333/info/dsp.txt"),
        // file_3rd: await fileOf("/Users/lxthyme/Downloads/3333/info/3rd.txt"),
      },
    },
  }
}

const Page = ({ file = {} }) => {
  useEffect(() => {
    // const fse = require('fs-extra')
    window.dsp = {
      // fse,
      file,
      checkDup,
      blueprintConvert,
      getBlueprintInfo,
    }
  }, [file])

  /// 1. 把无带流生成的代码(DSP无带.md)批量转换成蓝图文件(DSP无带.sh)
  /// 2. 手动执行 DSP无带.sh, 生成最终的蓝图文件
  ///     `sh ./DSP无带.sh`
  /// /Users/lxthyme/Desktop/Lucky/.config/Anything-Backup/Dropbox/Game/DSP/DSP无带.md
  /// /Users/lxthyme/Desktop/Lucky/.config/Anything-Backup/Dropbox/Game/DSP/DSP无带.sh
  const blueprintConvert = (md) => {
    const list = []
    const result = md
      .replace(/[\s\S]*?## 02-28/, '')
      .split("\n")
      .filter((t) => t.startsWith("1. "))
      .map((t) => {
        let name = t.split(",")[10]
        name = decodeURIComponent(name)
        name = name.replace("/min", "min")
        name = name.replace("-", "_")
        let idx = 0
        let newName = name
        while (list.includes(newName)) {
          idx += 1
          newName = `${name}(${idx})`
        }
        const fmt_t = t.replace("1. ", "")
        list.push(newName)
        return `echo '${fmt_t}'  > "./DSP无带/${newName}.txt"`
      })
    console.log("-->全部文件名list: ", list)
    return result.join("\n")
  }
  const getBlueprintInfo = (blueprint) => {
    return blueprint.split(",").map((t, idx) => {
      if (idx === 10) {
        return decodeURIComponent(t)
      } else if (idx === 11) {
        return t.split('"').map((t2, idx2) => {
          if (idx2 === 0) {
            return decodeURIComponent(t2)
          }
          return t2
        })
      }
      return t
    })
  }
  const checkDup = (string) => {
    const fmt = string
      .split("\n")
      // .slice(0, 10)
      .map((t) => t.trim())
      .filter((t) => t.length > 0)
      .map((t) => {
        // const tmp = t.split(' = ')
        // let key = tmp[0]
        // key = key.replace(/^MD5 \(\.\//, '')
        // key = key.replace(/\)$/, '')
        // return {
        //   md5: tmp[1],
        //   path: key
        // }
        const fmt = t
          .replace(/MD5 \(\.\/([\s\S]*?)\) = ([\s\S]*?)$/, "$1👉$2")
          .split("👉")
        return {
          md5: fmt[1],
          path: fmt[0],
        }
      })
      .reduce((prev, cur) => {
        prev[cur.md5] = [...(prev[cur.md5] ?? []), cur.path]
        return prev
      }, {})
    const allPath = Object.values(fmt)
    const dup = allPath.filter((t) => t.length > 1)
    return {
      fmt,
      allKeys: Object.keys(fmt),
      count: allPath.flat().length,
      dup,
      dupCount: dup.length,
      dupJSON: JSON.stringify(dup),
    }
  }

  return (
    <LXLayout>
      {/* <style jsx>{``}</style> */}
      <h2>dsp</h2>
    </LXLayout>
  )
}

// Page.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// Page.getInitialProps = async ({ req }) => {}
Page.displayName = "📌 Page - PAGE"

export default Page
