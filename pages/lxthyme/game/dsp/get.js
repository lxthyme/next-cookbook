const Blog = props => {

  const submitData = async e => {
    e.preventDefault()
    try {

      // await getListTest(1, 20)
      window.testList = await await getList(1, 20, 'seedDetail')
      console.log('testList: ', testList)

      window.allInsertResult = []
      window.allGetList = []
      /// insert
      window.NeedInsertTables = ['seed0kw', 'seed1kw', 'seed3kw', 'seed4kw']
      // const result = await getAllList(1, 20, window.NeedInsertTables[0], 0)
      // console.log('======RESULT: ', result)
    } catch (error) {
      console.error(error)
    }
  }
  const getListTest = async (page, pageSize) => {
    let table = 'seedokw'
    table = 'seedDetail'
    const result = await getList(page, pageSize, table)
    const SeedList = (await result.json()).list
    const fmt_SeedList = formatStarInfo(SeedList)
    console.log('SeedList: ', SeedList)
    console.log('fmt_SeedList: ', fmt_SeedList)
    window.info = {
      ...window.info,
      SeedList,
      fmt_SeedList
    }
  }
  const getFormatListTest = async (page, pageSize) => {
    const reauto_SeedListsult = await getList(page, pageSize, 'seedInfo')
    console.log('auto_SeedList: ', auto_SeedList)
    window.info = {
      ...window.info,
      reauto_SeedListsult
    }
  }
  const getAllList = (page, pageSize, table, idx) => {
    getList(page, pageSize, table)
      .then(({ page, pageSize, total, list }) => {
        // console.log('Params: ', { page, pageSize, total })
        // return new Promise(async (resolve, reject) => {
        //   const result = await list.map(async t => {
        //     await insert(t)
        //   })
        //   console.log('Result: ', result)
        //   resolve({ page, pageSize, total })
        // })
        // window.allGetList.push(list)
        return Promise.all(list.map(async t => {
          return await insert(t)
        }))
          .then(res => {
            // window.allInsertResult.push(res)
            return { page, pageSize, total }
          })
      })
      .then(({ page, pageSize, total }) => {
        console.log('Go Next!!!', { page, pageSize, total })
        if ((pageSize * page) < total) {
          return getAllList(page + 1, pageSize, table, idx)
        } else if ((pageSize * page) >= total && (idx + 1) < window.NeedInsertTables.length) {
          const nextTable = window.NeedInsertTables[idx + 1]
          return getAllList(1, pageSize, nextTable, idx + 1)
        }
        return 0
      })
  }
  const getList = (page, pageSize = 20, table) => {
    return fetch(`http://0.0.0.0:3003/api/lxthyme/dsp/get?pageSize=${pageSize}&page=${page}&table=${table}`)
      .then(res => res.json())
      .then(({ page, pageSize, total, list }) => {
        return {
          page, pageSize, total,
          list: formatStarInfo(list)
        }
      })
      .catch(error => {
        console.log('error: ', error)
      })
  }
  const insert = async obj => {
    const result = await fetch('http://0.0.0.0:3003/api/lxthyme/dsp/insert', {
      method: 'post',
      body: JSON.stringify(obj)
    })
    const json = await result.json()
    if (json.code === 10000) {
      let idx = localStorage.getItem('idx')
      idx = parseFloat(idx) ?? 0
      idx += 1
      localStorage.setItem('idx', idx)
    }
    // console.log('result: ', json)
    return json
  }
  const allTest = () => {
    info.fmt_SeedList
      .map(t => t.summary)
      // .map(t => t.初始距离)
      // .map(t => t.初始距离_sum)
      // .map(t => t.最大重氢_sum)
      // .map(t => t.最大重氢_sort).flat().sort((a, b) => b - a)
      .map(t => t.光度).flat().sort((a, b) => b - a)
    // .map(t => t.)
    // .map(t => t.)
    // .map(t => t.)
    // .map(t => t.)
    // .map(t => t.)
    // .map(t => t.)
    // .map(t => t.)
    // .map(t => t.)
    // .map(t => t.)
  }
  const formatStarInfo = (list) => {
    // debugger
    const fmtStar = (seed, fmt_star) => {
      const checkout = {
        初始星系: fmt_star.filter(t => t.includes('初始星系')),
        MKGF普通星系: fmt_star.filter(t => t.includes('MKGF普通星系')),
        卫星: fmt_star.filter(t => t.includes('卫星')),
        气态巨星: fmt_star.filter(t => t.includes('气态巨星')),
        最大重氢: fmt_star.filter(t => t.includes('最大重氢')),
        光度: fmt_star.filter(t => t.includes('光度')),
        初始距离: fmt_star.filter(t => t.includes('初始距离')),
        第一行星: fmt_star.filter(t => t.includes('1号行星')),
        第二行星: fmt_star.filter(t => t.includes('第二行星')),
        水: fmt_star.filter(t => t.includes('有水')),
        硫酸: fmt_star.filter(t => t.includes('硫酸')),
        潮汐: fmt_star.filter(t => t.includes('潮汐')),
        戈壁: fmt_star.filter(t => t.includes('戈壁')),
        灰烬冻土: fmt_star.filter(t => t.includes('灰烬冻土')),
        水世界: fmt_star.filter(t => t.includes('水世界')),
        冰原冻土: fmt_star.filter(t => t.includes('冰原冻土')),
        猩红冰湖: fmt_star.filter(t => t.includes('猩红冰湖')),
        草原: fmt_star.filter(t => t.includes('草原')),
        贫瘠荒漠: fmt_star.filter(t => t.includes('贫瘠荒漠')),
        红石: fmt_star.filter(t => t.includes('红石')),
        干旱荒漠: fmt_star.filter(t => t.includes('干旱荒漠')),
        熔岩: fmt_star.filter(t => t.includes('熔岩')),
        樱花海: fmt_star.filter(t => t.includes('樱花海')),
        火山灰: fmt_star.filter(t => t.includes('火山灰')),
        飓风石林: fmt_star.filter(t => t.includes('飓风石林')),
        冰巨星: fmt_star.filter(t => t.includes('冰巨星')),
      }
      const type = {
        seed,
        GeBi: checkout.戈壁[0]?.replace('戈壁', ''),
        HuiJinDongTu: checkout.灰烬冻土[0]?.replace('灰烬冻土', ''),
        ShuiShiJie: checkout.水世界[0]?.replace('水世界', ''),
        BingYuanDongTu: checkout.冰原冻土[0]?.replace('冰原冻土', ''),
        XingHongBingHu: checkout.猩红冰湖[0]?.replace('猩红冰湖', ''),
        CaoYuan: checkout.草原[0]?.replace('草原', ''),
        PinJiHuangMo: checkout.贫瘠荒漠[0]?.replace('贫瘠荒漠', ''),
        HongShi: checkout.红石[0]?.replace('红石', ''),
        GanHanHuangMo: checkout.干旱荒漠[0]?.replace('干旱荒漠', ''),
        RongYan: checkout.熔岩[0]?.replace('熔岩', ''),
        YingHuaHai: checkout.樱花海[0]?.replace('樱花海', ''),
        HuoShanHui: checkout.火山灰[0]?.replace('火山灰', ''),
        JuFengShiLin: checkout.飓风石林[0]?.replace('飓风石林', ''),
        BingJuXing: checkout.冰巨星[0]?.replace('冰巨星', ''),
      }
      // Object.keys(type)
      // .map(k => type[k] === '1')
      const checkoutValues = Object.values(checkout)
      const validate = checkoutValues.filter(t => t.length > 1)
      if (validate.length > 0) {
        console.log('--->validate: ', validate)
      }
      const others = fmt_star.filter(t => !checkoutValues.flat().includes(t))
      const enumStar = {
        戴森球包括1号行星: 1,
        戴森球不包括1号行星: 0,
        不包括第二行星: 0,
        包括第二行星: 1,
        有水: 1,
        没有水: 0
      }
      const result = {
        seed,
        ChuShiXingXi: checkout.初始星系[0]?.replace('初始星系', ''),
        MKGF_PuTongXingXi: checkout.MKGF普通星系[0]?.replace('MKGF普通星系', ''),
        WeiXing: checkout.卫星[0]?.replace('卫星', ''),
        QiTaiJuQing: checkout.气态巨星[0]?.replace('气态巨星', ''),
        ZuiDaZhongQing: checkout.最大重氢[0]?.replace('最大重氢', ''),
        GuangDu: checkout.光度[0]?.replace('光度', ''),
        ChuShiJuLi: checkout.初始距离[0]?.replace('初始距离', ''),
        ChaoXiSuoDing: checkout.潮汐[0]?.replace('潮汐', ''),
        DiYiXingXing: enumStar[checkout.第一行星[0]] ?? checkout.第一行星[0],
        DiErXingXing: enumStar[checkout.第二行星[0]] ?? checkout.第二行星[0],
        Shui: enumStar[checkout.水[0]] ?? checkout.水[0],
        LiuSuan: enumStar[checkout.硫酸[0]] ?? checkout.硫酸[0],
        type
      }
      const fmt_result = Object.keys(result)
        .reduce((prev, key) => {
          if (['卫星', '气态巨星', '最大重氢', '光度', '初始距离', '潮汐', '第一行星', '第二行星', '水',
            'WeiXing', 'QiTaiJuQing', 'ZuiDaZhongQing', 'GuangDu', 'ChuShiJuLi', 'ChaoXiSuoDing',
            'DiYiXingXing', 'DiErXingXing', 'Shui'].includes(key)) {
            prev[key] = parseFloat(result[key]) >= 0 ? parseFloat(result[key]) : result[key]
          } else {
            prev[key] = result[key]
          }
          return prev
        }, {})
      return { ...fmt_result, others }
    }
    return list
      .map(t => {
        const result = JSON.parse(JSON.stringify(t))
        const seed = result.seed
        const fmt_star1 = {
          seed,
          star1: result.star1.split(';'),
          star2: result.star2.split(';'),
          star3: result.star3.split(';'),
          star4: result.star4.split(';'),
          star5: result.star5.split(';'),
          star6: result.star6.split(';'),
          star7: result.star7.split(';'),
          star8: result.star8.split(';'),
          star9: result.star9.split(';'),
          star10: result.star10.split(';'),
          star11: result.star11.split(';')
        }
        const fmt_star2 = {
          seed,
          star1: fmtStar(seed, fmt_star1.star1),
          star2: fmtStar(seed, fmt_star1.star2),
          star3: fmtStar(seed, fmt_star1.star3),
          star4: fmtStar(seed, fmt_star1.star4),
          star5: fmtStar(seed, fmt_star1.star5),
          star6: fmtStar(seed, fmt_star1.star6),
          star7: fmtStar(seed, fmt_star1.star7),
          star8: fmtStar(seed, fmt_star1.star8),
          star9: fmtStar(seed, fmt_star1.star9),
          star10: fmtStar(seed, fmt_star1.star10),
          star11: fmtStar(seed, fmt_star1.star11),
        }
        const summary = [
          seed,
          fmt_star2.star1,
          fmt_star2.star2,
          fmt_star2.star3,
          fmt_star2.star4,
          fmt_star2.star5,
          fmt_star2.star6,
          fmt_star2.star7,
          fmt_star2.star8,
          fmt_star2.star9,
          fmt_star2.star10,
          fmt_star2.star11,
        ]
          .reduce((prev, cur) => {
            return {
              seed,
              MKGF_PuTongXingXi: [...[prev.MKGF_PuTongXingXi].flat(), cur.MKGF_PuTongXingXi],
              others: [...[prev.others].flat(), cur.others],
              type: [...[prev.type].flat(), cur.type],
              GuangDu: [...[prev.GuangDu].flat(), cur.GuangDu],
              ChuShiXingXi: [...[prev.ChuShiXingXi].flat(), cur.ChuShiXingXi],
              ChuShiJuLi: [...[prev.ChuShiJuLi].flat(), cur.ChuShiJuLi],
              WeiXing: [...[prev.WeiXing].flat(), cur.WeiXing],
              ZuiDaZhongQing: [...[prev.ZuiDaZhongQing].flat(), cur.ZuiDaZhongQing],
              QiTaiJuXing: [...[prev.QiTaiJuXing].flat(), cur.QiTaiJuXing],
              Shui: [...[prev.Shui].flat(), cur.Shui],
              ChaoXiSuoDing: [...[prev.ChaoXiSuoDing].flat(), cur.ChaoXiSuoDing],
              LiuSuan: [...[prev.LiuSuan].flat(), cur.LiuSuan],
              DiYiXingXing: [...[prev.DiYiXingXing].flat(), cur.DiYiXingXing],
              DiErXingXing: [...[prev.DiErXingXing].flat(), cur.DiErXingXing],
            }
          })
        summary.ChuShiJuLi_Sum = summary.ChuShiJuLi.reduce((prev, cur) => prev + cur)
        summary.ZuiDaZhongQing_Sum = summary.ZuiDaZhongQing.reduce((prev, cur) => prev + cur)
        summary.ZuiDaZhongQing_Sort = summary.ZuiDaZhongQing.sort((a, b) => b - a)
        summary.GuangDu_Sort = summary.GuangDu.sort((a, b) => b - a)
        return { seed, ...result, fmt_star1, fmt_star2, summary }
      })
  }
  return (<>
    <div className="page">
      <h1>My Blog</h1>
      <button onClick={submitData}>submitData</button>
      <main>
        {/* {props.feed.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))} */}
        {props.feed}
      </main>
    </div>
    <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
  </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://0.0.0.0:3003/api/dj-api/kdj/address/recommend.html')
  const feed = await res.text()
  return {
    props: { feed },
  }
}

export default Blog
