import { useEffect } from "react"
import dynamic from "next/dynamic"

// import { ALLOriginInfo } from "../../../../data/dsp/all-star-info"
// import { ALLOriginInfo } from "../../../../data/dsp/all-star-info-v2"
// const ALLOriginInfo = dynamic(() => import('../../../../data/dsp/all-star-info-v2'))

// export const config = { amp: true };

const DSPBlueStarInfo = (props) => {
  useEffect(async () => {
    // window.ALLOriginInfo = ALLOriginInfo
    // window.ALLOriginInfo = (await import("../../../../data/dsp/all-star-info-v2")).ALLOriginInfo
    // const result = formatStarInfo(ALLOriginInfo)
    // const result2 = formatStarInfo2(result)
    window.info = {
      // result,
      // result2,
      formatStarInfo,
      formatStarInfo2,
      formatUsefulInfo3,
      formatUsefulInfo4,
      fmt,
      ALLTest,
      ALLTestV0924,
      All_Seed: [],
      INFO: {
        // t1_最高亮度种子信息: 最高亮度种子信息,
        // t2_最高亮度种子信息v2: 最高亮度种子信息v2,
        // t3_seed0_19999999_v1: seed0_19999999_v1,
        // t4_seed0_19999999_v2: seed0_19999999_v2,
        // t5_seed0_19999999: seed0_19999999,
        // t6_seed20000000_49999999_1: seed20000000_49999999_1,
        // // t7_seed20000000_49999999_2: seed20000000_49999999_2,
        // t8_seed20000000_49999999: seed20000000_49999999,
        // t9_seed40000000_69999999: seed40000000_69999999,
        // t10_seed60000000_89999999: seed60000000_89999999,
      },
    }
  }, [])
  /// 1.
  // const 最高亮度种子信息 = async () =>
  //   (await import("../../../../data/dsp/最高亮度种子信息")).INFO
  // /// 2.
  // const 最高亮度种子信息v2 = async () =>
  //   (await import("../../../../data/dsp/最高亮度种子信息v2")).INFO
  // /// 3.
  // const seed0_19999999_v1 = async () =>
  //   (await import("../../../../data/dsp/seed0-19999999_v1")).INFO
  // /// 4.
  // const seed0_19999999_v2 = async () =>
  //   (await import("../../../../data/dsp/seed0-19999999_v2")).INFO
  // /// 5. [161804, 11197251]
  // const seed0_19999999 = async () =>
  //   (await import("../../../../data/dsp/seed0-19999999")).INFO
  // /// 6.
  // const seed20000000_49999999_1 = async () =>
  //   (await import("../../../../data/dsp/seed20000000-49999999_1")).INFO
  // /// 7.
  // // const seed20000000_49999999_2 = async () =>
  // //   (await import("../../../../data/dsp/seed20000000-49999999_2")).INFO
  // /// 8. [21874796, 27621799]
  // const seed20000000_49999999 = async () =>
  //   (await import("../../../../data/dsp/seed20000000-49999999")).INFO
  // /// 9. [40001601, 46225481]
  // const seed40000000_69999999 = async () =>
  //   (await import("../../../../data/dsp/seed40000000-69999999")).INFO
  // /// 10. [60001086, 68692010]
  // const seed60000000_89999999 = async () =>
  //   (await import("../../../../data/dsp/seed60000000-89999999")).INFO
  const fmt = (list) => {
    const result1 = formatStarInfo(list)
    const result2 = formatStarInfo2(result1)
    const result3 = info.formatUsefulInfo4(result2)
    // console.log('result2: ', result2)
    window.info.All_Seed.push(result1.map((t) => t.id))
    return result3
  }
  const ALLTest = async () => {
    const SeedInfo = {
      // t1_最高亮度种子信息: (await import("../../../../data/dsp/最高亮度种子信息")).INFO,
      // t2_最高亮度种子信息v2: (await import("../../../../data/dsp/最高亮度种子信息v2")).INFO,
      // t3_seed0_19999999_v1: (await import("../../../../data/dsp/seed0-19999999_v1")).INFO,
      // t4_seed0_19999999_v2: (await import("../../../../data/dsp/seed0-19999999_v2")).INFO,
      // t5_seed0_19999999: (await import("../../../../data/dsp/seed0-19999999")).INFO,
      // t6_seed20000000_49999999_1: (await import("../../../../data/dsp/seed20000000-49999999_1")).INFO,
      // t8_seed20000000_49999999: (await import("../../../../data/dsp/seed20000000-49999999")).INFO,
      // t9_seed40000000_69999999: (await import("../../../../data/dsp/seed40000000-69999999")).INFO,
      // t10_seed60000000_89999999: (await import("../../../../data/dsp/seed60000000-89999999")).INFO,
    }
    return Object.keys(SeedInfo)
      .reduce((prev, key) => {
        const v = SeedInfo[key]
        prev[`${key.replace(/^(t[0-9]{1,})/, '$1_result')}`] = fmt(v)
        return prev
      }, {})
  }
  const ALLTestV0924 = async () => {
    const SeedList = {
      // '57508570_single': (await import("../../../../data/dsp/09-24/57508570_single")).INFO,
      // '41803373_single': (await import("../../../../data/dsp/09-24/41803373_single")).INFO,
      // '42328284_single': (await import("../../../../data/dsp/09-24/42328284_single")).INFO,
      // '42572383_single': (await import("../../../../data/dsp/09-24/42572383_single")).INFO,
      // '45387689_single': (await import("../../../../data/dsp/09-24/45387689_single")).INFO,
      // '92827424_single': (await import("../../../../data/dsp/09-24/92827424_single")).INFO,
    }
    return Object.keys(SeedList)
      .map(k => {
        const tmp = SeedList[k]
          .map(t => {
            // return t.replace(/星系名字/g, `${k}`)
            return `${t}`
          })
        return formatV0924(k, tmp)
        // return info
      })
      .map(t => {
        const {
          铁, 铜, 煤, 石, 硅, 钛, 原油, 水, 硫酸,
          冰巨星, 气态巨星,
          分形硅石, 刺笋结晶, 单极磁石, 可燃冰, 有机晶体, 金伯利钻石,
          亮度, 光栅石,
          seed, 星系名字, 星系类型, 是否环内行星, 卫星总数, 星区数量, 行星,
          距离, 最大重氢速率, 潮汐锁定, ...others } = t
        const 星系类型_summary = 星系类型
          // .filter(tmp => tmp.includes('型恒星'))
          .map(t => t.replace('型恒星', ''))
          .reduce((prev, cur) => {
            prev[cur] = prev[cur] ?? 0
            prev[cur] += 1
            return prev
          }, {})
        return {
          normal: {
            铁, 铜, 煤, 石, 硅, 钛, 原油,
            水: 水.reduce((prev, cur) => prev + cur, 0),
            硫酸: 硫酸.reduce((prev, cur) => prev + cur, 0)
          },
          advance: { 冰巨星, 气态巨星, 分形硅石, 刺笋结晶, 单极磁石, 可燃冰, 有机晶体, 金伯利钻石 },
          info: {
            seed, 星系名字, 星系类型, 是否环内行星, 卫星总数, 星区数量, 行星,
            是否环内行星_summary: 是否环内行星.reduce((prev, cur) => prev + cur, 0),
            星系类型_summary
          },
          // key: {
          //   ...others,
          //   单极磁石,
          //   O: 星系类型_summary['O'],
          //   蓝巨星: 星系类型_summary['蓝巨星'],
          //   距离: parseFloat(距离.toFixed(3)),
          //   氘: parseFloat(最大重氢速率.toFixed(3))
          // }
          others,
          key: [
            `单极: ${(单极磁石 + '').padStart(2)}`,
            `O: ${星系类型_summary['O']}`,
            `蓝: ${星系类型_summary['蓝巨星'] ?? 0}`,
            `潮锁: ${(潮汐锁定 + '').padStart(2)}`,
            `距离: ${(parseFloat(距离.toFixed(3)) + '').padStart(8)}`,
            `重氢: ${(parseFloat(最大重氢速率.toFixed(3)) + '').padStart(5)}`,
          ]
        }
      })
  }
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
            .slice(4)
            .filter((t) => t.length > 0)
            .reduce(
              (prev, cur) => {
                // if (cur.includes("号")) {
                //   //         console.log('prev.tmp: ', prev.tmp)
                //   prev.tmp.push(cur)
                // } else {
                const obj_cur = {}
                const f_cur = cur.split(";")
                const others = f_cur.map((t, idx) => {
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
                    obj_cur["硫酸"] = t.split("硫酸")[0] === "有" ? 1 : 0
                    obj_cur["硫酸_origin"] = t
                  } else if (idx === 0) {
                    return ""
                  } else {
                    return t
                  }
                  return ""
                })

                const arr = prev[f_cur[0]] ?? []
                if (arr.length > 0) {
                  // console.log("arr: ", arr)
                }
                const new_cur = {
                  id: obj_cur.id,
                  type: f_cur[0],
                  __other: others.filter((t) => t.length > 0),
                  ...obj_cur,
                }
                arr.push(new_cur)
                // prev[f_cur[0]] = arr
                prev.push(new_cur)
                // }
                return prev
              },
              // { tmp: [] }
              []
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
    // console.log("result: ", result)
    return result
  }

  const formatStarInfo2 = (list) => {
    return list.map((obj) => {
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
    return result
  }
  const formatUsefulInfo4 = (list) => {
    // const topNum = 100
    const tj0 = JSON.parse(JSON.stringify(list))
    // .map(t => t['条件0_summary'])

    return tj0.sort(
      (a, b) =>
        b["条件0_summary"]["最大重氢速率_sum"] -
        a["条件0_summary"]["最大重氢速率_sum"]
    )
    // .slice(0, topNum)

    // filterKey = "最大重氢速率_sum"
    // filterKey = '与初始距离_sum'

    // // v = Object.values(fmt).flat()
    // v = Object.values(fmt['t1_result_最高亮度种子信息']).flat()
    // // v = Object.values(fmt['t2_result_最高亮度种子信息v2']).flat()
    // // v = Object.values(fmt['t3_result_seed0_19999999_v1']).flat()
    // // v = Object.values(fmt['t4_result_seed0_19999999_v2']).flat()
    // // v = Object.values(fmt['t5_result_seed0_19999999']).flat()
    // // v = Object.values(fmt['t6_result_seed20000000_49999999_1']).flat()
    // // v = Object.values(fmt['t7_result_seed20000000_49999999_2']).flat()
    // // v = Object.values(fmt['t8_result_seed20000000_49999999']).flat()
    // // v = Object.values(fmt['t9_result_seed40000000_69999999']).flat()
    // // v = Object.values(fmt['t10_result_seed60000000_89999999']).flat()

    // v
    // // .sort((a, b) => b["条件0_summary"][filterKey] - a["条件0_summary"][filterKey])
    // .sort((a, b) => a["条件0_summary"][filterKey] - b["条件0_summary"][filterKey])
    // .filter(t => t['条件0_summary']['光度'].filter(t => t > 2.5).length > 0)
    // .filter(t => t['条件0_summary']['与初始距离_sum'] < 1000)
    // .sort((a, b) => b['磁石'] - a['磁石'])
    // // .map(t => {
    // //   return {
    // //     id: t['id'],
    // //     磁石: t['磁石'],
    // //     蓝巨星: t['蓝巨星'],
    // //     最大重氢速率_sum: t['条件0_summary']['最大重氢速率_sum'],
    // //     与初始距离_sum: t['条件0_summary']['与初始距离_sum']
    // //   }
    // // })
    // .slice(0, 100)

    // .map(t => t['与初始距离_sum']).sort((a, b) => b - a)
    // .filter(t => t['光度_sum'])
    // .filter(t => t['潮汐锁定_sum'])
    // .filter(t => t['气态巨星_sum'])
    // .filter(t => t['冰巨星_sum'])
    // .filter(t => t['卫星_sum'])
    // .filter(t => t['最大重氢速率_sum'])
    // .filter(t => t['最大重氢速率<=0.1_sum'])
    // .filter(t => t['最大重氢速率>0.1_sum'])
    // .filter(t => t['气态巨星_sum'])
    // .filter(t => t['潮汐锁定_sum'])
    // .filter(t => t['行星_sum'])
    // .filter(t => )
    // .filter(t => )
    // .filter(t => )
    // .filter(t => )
    // .filter(t => )
    // .filter(t => )
    // .filter(t => )
    // .sort((a, b) => b - a)
    // [0]
  }
  const formatV0924 = (seed, list) => {
    const formatKey = {
      铁矿脉: '铁', 铜矿脉: '铜', 煤矿脉: '煤', 石矿脉: '石', 硅矿脉: '硅', 钛矿脉: '钛',
      原油涌泉: '原油', 是否有水: '水', 是否有硫酸: '硫酸',
      冰巨星数量: '冰巨星', 气态巨星数量: '气态巨星',
      分形硅矿: '分形硅石', 刺笋矿脉: '刺笋结晶', 单极磁矿: '单极磁石', 可燃冰矿: '可燃冰', 有机晶体矿: '有机晶体', 金伯利矿: '金伯利钻石',
      光栅石矿: '光栅石',
      // 潮汐锁定: '潮锁'
    }
    const keyList = list[0]
      .split(',')
    return list
      .slice(1)
      .map(t => {
        const vList = t.split(',')
        const obj = {}
        keyList.forEach((key, idx) => obj[key] = parseFloat(vList[idx]) >= 0 ? parseFloat(vList[idx]) : vList[idx])
        return obj
      })
      .reduce((prev, cur) => {
        Object.keys(cur)
          .forEach(key => {
            const v = cur[key]
            const newKey = formatKey[key] ?? key
            if (key.startsWith('是否')) {
              prev[newKey] = prev[newKey] ?? []
              prev[newKey] = [
                ...prev[newKey],
                v === '是' ? 1 : 0
              ]
            } else if (key.startsWith('星系')) {
              prev[newKey] = prev[newKey] ?? []
              prev[newKey] = [...prev[newKey], v]
            } else {
              prev[newKey] = prev[newKey] ?? 0
              prev[newKey] += parseFloat(v)
            }
          })
        prev['seed'] = seed
        return prev
      }, {})
    // .reduce((prev, cur) => {
    //   return {
    //     // 星系名字: [...prev.星系名字 ?? [], cur.星系名字],
    //     // 星系类型: [...prev.星系类型 ?? [], cur.星系类型],
    //     // 是否有水: (prev.是否有水 ?? 0) + (cur.是否有水 === '是' ? 1 : 0),
    //     // 是否有硫酸: (prev.是否有硫酸 ?? 0) + (cur.是否有硫酸 === '是' ? 1 : 0),
    //     // 是否环内行星: (prev.是否环内行星 ?? 0) + (cur.是否环内行星 === '是' ? 1 : 0),
    //     亮度: (prev.亮度 ?? 0) + cur.亮度,
    //     光栅石矿: (prev.光栅石矿 ?? 0) + cur.光栅石矿,
    //     冰巨星数量: (prev.冰巨星数量 ?? 0) + cur.冰巨星数量,
    //     分形硅矿: (prev.分形硅矿 ?? 0) + cur.分形硅矿,
    //     刺笋矿脉: (prev.刺笋矿脉 ?? 0) + cur.刺笋矿脉,
    //     单极磁矿: (prev.单极磁矿 ?? 0) + cur.单极磁矿,
    //     卫星总数: (prev.卫星总数 ?? 0) + cur.卫星总数,
    //     原油涌泉: (prev.原油涌泉 ?? 0) + cur.原油涌泉,
    //     可燃冰矿: (prev.可燃冰矿 ?? 0) + cur.可燃冰矿,
    //     星区数量: (prev.星区数量 ?? 0) + cur.星区数量,
    //     最大重氢速率: (prev.最大重氢速率 ?? 0) + cur.最大重氢速率,
    //     有机晶体矿: (prev.有机晶体矿 ?? 0) + cur.有机晶体矿,
    //     气态巨星数量: (prev.气态巨星数量 ?? 0) + cur.气态巨星数量,
    //     潮汐锁定: (prev.潮汐锁定 ?? 0) + cur.潮汐锁定,
    //     // 煤矿脉: (prev.煤矿脉 ?? 0) + cur.煤矿脉,
    //     // 石矿脉: (prev.石矿脉 ?? 0) + cur.石矿脉,
    //     // 硅矿脉: (prev.硅矿脉 ?? 0) + cur.硅矿脉,
    //     行星: (prev.行星 ?? 0) + cur.行星,
    //     距离: (prev.距离 ?? 0) + cur.距离,
    //     金伯利矿: (prev.金伯利矿 ?? 0) + cur.金伯利矿,
    //     // 钛矿脉: (prev.钛矿脉 ?? 0) + cur.钛矿脉,
    //     // 铁矿脉: (prev.铁矿脉 ?? 0) + cur.铁矿脉,
    //     // 铜矿脉: (prev.铜矿脉 ?? 0) + cur.铜矿脉,
    //   }
    // }, {})
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
