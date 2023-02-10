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
  const file_DSP无带 = await fileOf("./data/dsp/DSP无带.md")
  // const file_DSP无带 = await fileOf("/Users/lxthyme/Downloads/dsp/dsp.md")
  // const file_71 = await fileOf("/Users/lxthyme/Downloads/3333/info/7.1.txt")
  // const file_bp = await fileOf("/Users/lxthyme/Downloads/3333/info/bp.txt")
  // const file_dsp = await fileOf("/Users/lxthyme/Downloads/3333/info/dsp.txt")
  // const file_3rd = await fileOf("/Users/lxthyme/Downloads/3333/info/3rd.txt")
  return {
    props: {
      // file: files
      md: file_DSP无带,
      // t131: {
      //   t71: file_71,
      //   tbp: file_bp,
      //   tdsp: file_dsp,
      //   t3rd: file_3rd
      // },
    },
  }
}

const Page = ({ md, t131 }) => {
  useEffect(() => {
    // const fse = require('fs-extra')
    window.dsp = {
      // fse,
      md,
      t131,
      checkDup,
      blueprintConvert,
    }
  }, [md])

  /// 1. 把无带流生成的代码(DSP无带.md)批量转换成蓝图文件(DSP无带.sh)
  /// 2. 手动执行 DSP无带.sh, 生成最终的蓝图文件
  ///     `sh ./DSP无带.sh`
  /// /Users/lxthyme/Desktop/Lucky/.config/Anything-Backup/Dropbox/Game/DSP/DSP无带.md
  /// /Users/lxthyme/Desktop/Lucky/.config/Anything-Backup/Dropbox/Game/DSP/DSP无带.sh
  const blueprintConvert = () => {
    const list = []
    const result = md
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
        return `echo "${fmt_t}"  > "./DSP无带/${newName}.txt"`
      })
    console.log("-->全部文件名list: ", list)
    return result.join("\n")
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
