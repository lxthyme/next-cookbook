import React, { useEffect } from "react"
// import PropTypes from 'prop-types'
import { readFile } from "fs/promises"
import LXLayout from "@layout/lxlayout"

// export const config = { amp: true };

export async function getStaticProps(context) {
  const file = await readFile(
    // "/Users/lxthyme/Desktop/Lucky/.config/Anything-Backup/Dropbox/Game/DSP/DSP无带.md",
    // "/Users/lxthyme/Desktop/Lucky/Demo.React/next-cookbook/data/dsp/DSP无带.md",
    "./data/dsp/DSP无带.md",
    {
      encoding: "utf-8",
    }
  )
  return {
    props: {
      // file: files
      md: file,
    },
  }
}

const Page = ({ md }) => {
  useEffect(() => {
    // const fse = require('fs-extra')
    window.dsp = {
      // fse,
      md,
      blueprintConvert,
    }
  }, [])

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
        list.push(newName)
        return `echo "${t}"  > "./DSP无带/${newName}.txt"`
      })
      console.log('-->全部文件名list: ', list)
      return result.join("\n")
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
