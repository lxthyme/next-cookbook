import { useEffect } from "react"
import { ALLOriginInfo } from "../../../../data/dsp/all-star-info"

// export const config = { amp: true };

const DSPBlueStarInfo = (props) => {
  useEffect(() => {
    window.ALLOriginInfo = ALLOriginInfo
    const result = formatStarInfo(ALLOriginInfo)
    const result2 = filterUsefulInfo2(result)
    window.result = result
    window.result2 = result2
  }, [])
  const formatStarInfo = (list) => {
    const EnumObj = {
      /// 1.
      戴森球不包括第一行星: 0,
      戴森球包括第一行星: 1,
      /// 2.
      戴森球不包括第二行星: 0,
      戴森球包括第二行星: 1,
      /// 3.
      不是蓝巨星星系: 0,
      /// 4.
      有水: 1,
      没有水: 0,
      /// 5.
      有硫酸: 1,
      没有硫酸: 0,
    }
    const result = list
      .map((item) => {
        const tmp = item.split(",")
        const obj = {
          id: parseFloat(tmp[0]),
          磁石: parseFloat(tmp[1].replace("磁石：", "").trim()),
          蓝巨星: parseFloat(tmp[2].replace("蓝巨星：", "").trim()),
          O: parseFloat(tmp[3].replace("O型恒星：", "").trim()),
          条件0: tmp
            .slice(5)
            .filter((t) => t.length > 0)
            .reduce(
              (prev, cur) => {
                if (cur.includes("号")) {
                  //         console.log('prev.tmp: ', prev.tmp)
                  prev.tmp.push(cur)
                } else {
                  const obj_cur = {}
                  const f_cur = cur.split(";").map((t) => {
                    if (t.includes("卫星")) {
                      obj_cur["卫星"] = parseFloat(t.replace("卫星:", ""))
                    } else if (t.includes("潮汐")) {
                      obj_cur["潮汐锁定"] = parseFloat(t.replace("潮汐", ""))
                    } else if (t.includes("第一行星")) {
                      obj_cur["第一行星"] = EnumObj[t]
                    } else if (t.includes("第二行星")) {
                      obj_cur["第二行星"] = EnumObj[t]
                    } else if (t.includes("蓝巨星")) {
                      obj_cur["蓝巨星"] = EnumObj[t]
                      obj_cur["蓝巨星_origin"] = t
                    } else if (t.includes("行星")) {
                      obj_cur["行星"] = parseFloat(t.replace("行星", ""))
                    } else if (t.includes("气态巨星")) {
                      obj_cur["气态巨星"] = parseFloat(t.replace("气态巨星", ""))
                    } else if (t.includes("最大重氢速率")) {
                      obj_cur["最大重氢速率"] = parseFloat(
                        t.replace("最大重氢速率", "")
                      )
                    } else if (t.includes("冰巨星")) {
                      obj_cur["冰巨星"] = parseFloat(t.replace("冰巨星", ""))
                    } else if (t.includes("光度")) {
                      obj_cur["光度"] = parseFloat(t.replace("光度", ""))
                    } else if (t.includes("与初始距离")) {
                      obj_cur["与初始距离"] = parseFloat(
                        t.replace("与初始距离", "")
                      )
                    } else if (t.includes("水")) {
                      obj_cur["水"] = EnumObj[t]
                      obj_cur["水_origin"] = t
                    } else if (t.includes("硫酸")) {
                      obj_cur["硫酸"] = EnumObj[t]
                      obj_cur["硫酸_origin"] = t
                    } else {
                      return t
                    }
                    return ""
                  })

                  const arr = prev[prev.tmp.slice(-1)[0]] ?? []
                  if (arr.length > 0) {
                    console.log("arr: ", arr)
                  }
                  const new_cur = {
                    id: obj_cur.id,
                    __other: f_cur.filter((t) => t.length > 0),
                    ...obj_cur,
                  }
                  arr.push(new_cur)
                  prev[prev.tmp.slice(-1)[0]] = new_cur
                }
                return prev
              },
              { tmp: [] }
            ),
        }
        // idInfo = obj['条件0']

        // .filter(t => t.length <= 0)
        return obj
      })
      .map((t) => {
        const tj0 = t["条件0"]
        const otherList = Object.keys(tj0)
          .filter((k) => k !== "tmp")
          .map((k) => tj0[k]["__other"])
        t["__条件0_otherList"] = otherList.flat()
        return t
      })
    // result.map(t => t["__条件0_otherList"]).filter(t => t.length > 0)
    console.log("result: ", result)
    return result
  }

  const filterUsefulInfo2 = (list) => {
    const result = list.map((obj) => {
      const { tmp, ...others } = obj["条件0"]
      const idInfo = Object.values(others)
      obj["条件0_summary"] = {
        第一行星: idInfo.map((t) => t["第一行星"]).filter((t) => t === 1)
          .length,
        第二行星: idInfo.map((t) => t["第二行星"]).filter((t) => t === 1)
          .length,
        光度: idInfo.map((t) => t["光度"]).sort((a, b) => b - a),
        光度_sum: idInfo
          .map((t) => t["光度"])
          .reduce((prev, cur) => prev + cur, 0),
        行星: idInfo.map((t) => t["行星"]).sort((a, b) => b - a),
        行星_sum: idInfo
          .map((t) => t["行星"])
          .reduce((prev, cur) => prev + cur, 0),
        卫星: idInfo.map((t) => t["卫星"]).sort((a, b) => b - a),
        卫星_sum: idInfo
          .map((t) => t["卫星"])
          .reduce((prev, cur) => prev + cur, 0),
        与初始距离: idInfo.map((t) => t["与初始距离"]).sort((a, b) => b - a),
        与初始距离_sum: idInfo
          .map((t) => t["与初始距离"])
          .reduce((prev, cur) => prev + cur, 0),
        蓝巨星: idInfo.map((t) => t["蓝巨星"]).filter((t) => t === 1),
        蓝巨星_sum: idInfo
          .map((t) => t["蓝巨星"])
          .filter((t) => t === 1)
          .reduce((prev, cur) => prev + cur, 0),
        硫酸: idInfo.map((t) => t["硫酸"]).filter((t) => t === 1),
        硫酸_sum: idInfo
          .map((t) => t["硫酸"])
          .filter((t) => t === 1)
          .reduce((prev, cur) => prev + cur, 0),
        潮汐锁定: idInfo.map((t) => t["潮汐锁定"]).filter((t) => t === 1),
        潮汐锁定_sum: idInfo
          .map((t) => t["潮汐锁定"])
          .filter((t) => t === 1)
          .reduce((prev, cur) => prev + cur, 0),
        水: idInfo.map((t) => t["水"]).filter((t) => t === 1),
        水_sum: idInfo
          .map((t) => t["水"])
          .filter((t) => t === 1)
          .reduce((prev, cur) => prev + cur, 0),
        气态巨星: idInfo.map((t) => t["气态巨星"]).filter((t) => t === 1),
        气态巨星_sum: idInfo
          .map((t) => t["气态巨星"])
          .filter((t) => t === 1)
          .reduce((prev, cur) => prev + cur, 0),
        冰巨星: idInfo.map((t) => t["冰巨星"]).filter((t) => t === 1),
        冰巨星_sum: idInfo
          .map((t) => t["冰巨星"])
          .filter((t) => t === 1)
          .reduce((prev, cur) => prev + cur, 0),
        最大重氢速率: idInfo
          .map((t) => t["最大重氢速率"])
          .sort((a, b) => b - a),
        最大重氢速率_sum: idInfo
          .map((t) => t["最大重氢速率"])
          .reduce((prev, cur) => prev + cur, 0),
        "最大重氢速率>0.1": idInfo
          .map((t) => t["最大重氢速率"])
          .filter((t) => t > 0.1)
          .sort((a, b) => b - a),
        "最大重氢速率>0.1_sum": idInfo
          .map((t) => t["最大重氢速率"])
          .filter((t) => t > 0.1)
          .reduce((prev, cur) => prev + cur, 0),
        "最大重氢速率<=0.1": idInfo
          .map((t) => t["最大重氢速率"])
          .filter((t) => t <= 0.1)
          .sort((a, b) => b - a),
        "最大重氢速率<=0.1_sum": idInfo
          .map((t) => t["最大重氢速率"])
          .filter((t) => t <= 0.1)
          .reduce((prev, cur) => prev + cur, 0),
      }
      return obj
    })
    return result
  }
  const formatUsefulInfo3 = (list) => {
    let filterKey =
      // '与初始距离_sum'
      // '光度_sum'
      // '卫星_sum'
      // '行星_sum'
      // '气态巨星_sum'
      // '冰巨星_sum'
      // '水_sum'
      // '硫酸_sum'
      // '潮汐锁定_sum'
      // '最大重氢速率_sum'
      // '最大重氢速率>0.1_sum'
      // '最大重氢速率<=0.1_sum'
      // '第一行星'
      // '第二行星'
      "蓝巨星_sum"

    const result = list.map((t) => t[filterKey]).sort((a, b) => b - a)
    // .filter(t => t > 0)
    // .sort((a, b) => b[filterKey] - a[filterKey])
    // .filter(t => t[filterKey] > 0)
    console.log("result: ", result)
  }
  return (
    <>
      <h2>All Blue Star Info</h2>
      {/* <style jsx>{``}</style> */}
    </>
  )
}

// DSPBlueStarInfo.propTypes = {}
// export const getStaticPaths = async () => { return { paths, fallback: true }; }
// export const getStaticProps = async ({ params, preview, previewData }) => { return { props: { } }; }
// export const getServerSideProps = async ({ params, req, res, query, preview, previewData }) => {}
// DSPBlueStarInfo.getInitialProps = async ({ req }) => {}
DSPBlueStarInfo.displayName = "📌 DSPBlueStarInfo - PAGE"

export default DSPBlueStarInfo

// {
//     "tdType" : "1",
//     "membertoken" : "",
//     "storeCode" : "001100",
//     "storeType" : "6020",
//     "merchantId" : "60200011001",
//     "comId" : "6000",
//     "fromApp" : "IOS"
//   }

// prev = {
// '第一行星': cur.map(t => t['第一行星']).filter(t => t === 1).length,
// '第二行星': cur.map(t => t['第二行星']).filter(t => t === 1).length,
// '光度': cur.map(t => t['光度']).sort((a, b) => b - a),
// '光度_sum': cur.map(t => t['光度']).reduce((prev, cur) => prev + cur),
// '行星': cur.map(t => t['行星']).sort((a, b) => b - a),
// '行星_sum': cur.map(t => t['行星']).reduce((prev, cur) => prev + cur),
// '卫星': cur.map(t => t['卫星']).sort((a, b) => b - a),
// '卫星_sum': cur.map(t => t['卫星']).reduce((prev, cur) => prev + cur),
// '与初始距离': cur.map(t => t['与初始距离']).sort((a, b) => b - a),
// '与初始距离_sum': cur.map(t => t['与初始距离']).reduce((prev, cur) => prev + cur),
// '蓝巨星': cur.map(t => t['蓝巨星']).filter(t => t === 1),
// '蓝巨星_sum': cur.map(t => t['蓝巨星']).filter(t => t === 1).reduce((prev, cur) => prev + cur),
// '硫酸': cur.map(t => t['硫酸']).filter(t => t === 1),
// '硫酸_sum': cur.map(t => t['硫酸']).filter(t => t === 1).reduce((prev, cur) => prev + cur),
// '潮汐锁定': cur.map(t => t['潮汐锁定']).filter(t => t === 1),
// '潮汐锁定_sum': cur.map(t => t['潮汐锁定']).filter(t => t === 1).reduce((prev, cur) => prev + cur),
// '水': cur.map(t => t['水']).filter(t => t === 1),
// '水_sum': cur.map(t => t['水']).filter(t => t === 1).reduce((prev, cur) => prev + cur),
// '气态巨星': cur.map(t => t['气态巨星']).filter(t => t === 1),
// '气态巨星_sum': cur.map(t => t['气态巨星']).filter(t => t === 1).reduce((prev, cur) => prev + cur),
// '冰巨星': cur.map(t => t['冰巨星']).filter(t => t === 1),
// '冰巨星_sum': cur.map(t => t['冰巨星']).filter(t => t === 1).reduce((prev, cur) => prev + cur),
// '最大重氢速率>0.1': cur.map(t => t['最大重氢速率']).filter(t => t > 0.1),
// '最大重氢速率>0.1_sum': cur.map(t => t['最大重氢速率']).filter(t => t > 0.1).reduce((prev, cur) => prev + cur),
// '最大重氢速率<=0.1': cur.map(t => t['最大重氢速率']).filter(t => t <= 0.1),
// '最大重氢速率<=0.1_sum': cur.map(t => t['最大重氢速率']).filter(t => t <= 0.1).reduce((prev, cur) => prev + cur),
// }
