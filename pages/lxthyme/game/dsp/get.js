const Blog = props => {

  const submitData = async e => {
    e.preventDefault()
    try {
      const result = await fetch(`http://0.0.0.0:3003/api/lxthyme/dsp/get`)
      const SeedList = (await result.json()).list
      const fmt_SeedList = formatStarInfo(SeedList)
      console.log('SeedList: ', SeedList)
      console.log('fmt_SeedList: ', fmt_SeedList)
      window.info = {
        SeedList,
        fmt_SeedList
      }
    } catch (error) {
      console.error(error)
    }
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
    const fmtStar = fmt_star => {
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
        戈壁: checkout.戈壁[0]?.replace('戈壁', ''),
        灰烬冻土: checkout.灰烬冻土[0]?.replace('灰烬冻土', ''),
        水世界: checkout.水世界[0]?.replace('水世界', ''),
        冰原冻土: checkout.冰原冻土[0]?.replace('冰原冻土', ''),
        猩红冰湖: checkout.猩红冰湖[0]?.replace('猩红冰湖', ''),
        草原: checkout.草原[0]?.replace('草原', ''),
        贫瘠荒漠: checkout.贫瘠荒漠[0]?.replace('贫瘠荒漠', ''),
        红石: checkout.红石[0]?.replace('红石', ''),
        干旱荒漠: checkout.干旱荒漠[0]?.replace('干旱荒漠', ''),
        熔岩: checkout.熔岩[0]?.replace('熔岩', ''),
        樱花海: checkout.樱花海[0]?.replace('樱花海', ''),
        火山灰: checkout.火山灰[0]?.replace('火山灰', ''),
        飓风石林: checkout.飓风石林[0]?.replace('飓风石林', ''),
        冰巨星: checkout.冰巨星[0]?.replace('冰巨星', ''),
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
        初始星系: checkout.初始星系[0]?.replace('初始星系', ''),
        MKGF普通星系: checkout.MKGF普通星系[0]?.replace('MKGF普通星系', ''),
        卫星: checkout.卫星[0]?.replace('卫星', ''),
        气态巨星: checkout.气态巨星[0]?.replace('气态巨星', ''),
        最大重氢: checkout.最大重氢[0]?.replace('最大重氢', ''),
        光度: checkout.光度[0]?.replace('光度', ''),
        初始距离: checkout.初始距离[0]?.replace('初始距离', ''),
        潮汐: checkout.潮汐[0]?.replace('潮汐', ''),
        第一行星: enumStar[checkout.第一行星[0]] ?? checkout.第一行星[0],
        第二行星: enumStar[checkout.第二行星[0]] ?? checkout.第二行星[0],
        水: enumStar[checkout.水[0]] ?? checkout.水[0],
        硫酸: enumStar[checkout.硫酸[0]] ?? checkout.硫酸[0],
        type
      }
      const fmt_result = Object.keys(result)
        .reduce((prev, key) => {
          if (['卫星', '气态巨星', '最大重氢', '光度', '初始距离', '潮汐', '第一行星', '第二行星', '水'].includes(key)) {
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
        const fmt_star1 = {
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
          star1: fmtStar(fmt_star1.star1),
          star2: fmtStar(fmt_star1.star2),
          star3: fmtStar(fmt_star1.star3),
          star4: fmtStar(fmt_star1.star4),
          star5: fmtStar(fmt_star1.star5),
          star6: fmtStar(fmt_star1.star6),
          star7: fmtStar(fmt_star1.star7),
          star8: fmtStar(fmt_star1.star8),
          star9: fmtStar(fmt_star1.star9),
          star10: fmtStar(fmt_star1.star10),
          star11: fmtStar(fmt_star1.star11),
        }
        const summary = [
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
              初始星系: [...[prev.初始星系].flat(), cur.初始星系],
              初始距离: [...[prev.初始距离].flat(), cur.初始距离],
              MKGF普通星系: [...[prev.MKGF普通星系].flat(), cur.MKGF普通星系],
              卫星: [...[prev.卫星].flat(), cur.卫星],
              潮汐: [...[prev.潮汐].flat(), cur.潮汐],
              气态巨星: [...[prev.气态巨星].flat(), cur.气态巨星],
              最大重氢: [...[prev.最大重氢].flat(), cur.最大重氢],
              光度: [...[prev.光度].flat(), cur.光度],
              第一行星: [...[prev.第一行星].flat(), cur.第一行星],
              第二行星: [...[prev.第二行星].flat(), cur.第二行星],
              水: [...[prev.水].flat(), cur.水],
              硫酸: [...[prev.硫酸].flat(), cur.硫酸],
              others: [...[prev.others].flat(), cur.others],
              type: [...[prev.type].flat(), cur.type],
            }
          })
        summary.初始距离_sum = summary.初始距离.reduce((prev, cur) => prev + cur)
        summary.最大重氢_sum = summary.最大重氢.reduce((prev, cur) => prev + cur)
        summary.最大重氢_sort = summary.最大重氢.sort((a, b) => b - a)
        summary.光度_sort = summary.光度.sort((a, b) => b - a)
        return { ...result, fmt_star1, fmt_star2, summary }
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
