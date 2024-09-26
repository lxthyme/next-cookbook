const t1Category = {
  "categoryId": "31794",
  "categoryName": "冰淇淋",
  "categoryLev": "2",
  "categoryAlias": "榜单别名_test",
  "children": [{
    "categoryId": "33333",
    "categoryName": "小布丁",
    "categoryLev": "3",
    "categoryAlias": "榜单别名_test",
    "children": null
  }]
}


let categoryIdStart = 30000
export const dpRankCateList = Array.from({ length: 5 }, (_, idx) => {
  const item = JSON.parse(JSON.stringify(t1Category))

  const categoryIdIdx = categoryIdStart + 1000 * idx
  item.categoryId = categoryIdIdx

  item.categoryName = `一级目录${idx}`
  item.categoryAlias = `一级目录Alias${idx}`
  item.rankTagName = '热卖榜'
  item.rankTopName = `${item.categoryAlias}热卖榜`
  item.rankTopDesc = `按照商品销售量综合计算${idx}`

  if (idx % 2 == 0) {
    const firstChildren = item.children[0]
    item.children = Array.from({ length: 5 }, (_, idx2) => {
      const item = JSON.parse(JSON.stringify(firstChildren))

      const t2CategoryIdIdx = categoryIdIdx + idx2 + 1
      item.categoryId = t2CategoryIdIdx

      const tIdx = idx + idx2
      item.categoryName = `二级目录${tIdx}`
      item.categoryAlias = `二级目录Alias${idx}-${tIdx}`
      item.rankTagName = '热卖榜'
      item.rankTopName = `${item.categoryAlias}热卖榜`
      item.rankTopDesc = `二级类目按照商品销售量综合计算${tIdx}`
      return item
    })
  } else {
    item.children = []
  }
  return item
})

export const dpRankGoodsList = (t1Idx) => {
  console.log(`-->t1Idx: ${t1Idx}`)
  const cate = dpRankCateList
    // .map(t => [t, ...t.children])
    // .flat()
    .find(t => t.categoryId == t1Idx)
  if (!cate) {
    return []
  }
  const cateCopy = JSON.parse(JSON.stringify(cate))
  if (cateCopy.children.length <= 0) {
    cateCopy.goodsSidList = Array.from({ length: 5 }, (_, idx2) => {
      const item2 = {
        "goodsSid": "65368",
        "rankNum": idx2,
        "score": `${11.11 * (idx2 * 10 + 1)}`
      }
      return item2
    })
    return [cateCopy]
  }
  // return [cateCopy, ...cateCopy.children]
  return [...cateCopy.children]
    .flat()
    .map(item => {
      item.goodsSidList = Array.from({ length: 5 }, (_, idx2) => {
        const item2 = {
          "goodsSid": "65368",
          "rankNum": idx2,
          "score": `${11.11 * (idx2 * 10 + 1)}`
        }
        return item2
      })
      return item
    })
}


export const mockCateList = {
  "success": true,
  "resCode": "00100000",
  "obj": {
      "rankTip": {
          "rankTagId": 2,
          "rankTagName": "回购榜",
          "rankTopDesc": "按照商品回购率综合计算",
          "rankTopIntro": "品质无双，回购有方"
      },
      "cateList": [
          {
              "categoryId": "33347",
              "categoryName": "茶饮料",
              "categoryLev": "3",
              "categoryAlias": "茶饮料",
              "children": null
          },
          {
              "categoryId": "32462",
              "categoryName": "高度白酒",
              "categoryLev": "3",
              "categoryAlias": "高度白酒",
              "children": null
          },
          {
              "categoryId": "36063",
              "categoryName": "饮用水",
              "categoryLev": "3",
              "categoryAlias": "饮用水",
              "children": null
          },
          {
              "categoryId": "36539",
              "categoryName": "量贩装",
              "categoryLev": "3",
              "categoryAlias": "量贩装",
              "children": null
          },
          {
              "categoryId": "33309",
              "categoryName": "黄酒",
              "categoryLev": "3",
              "categoryAlias": "黄酒",
              "children": null
          },
          {
              "categoryId": "41746",
              "categoryName": "和路雪",
              "categoryLev": "3",
              "categoryAlias": "和路雪",
              "children": null
          },
          {
              "categoryId": "31810",
              "categoryName": "原味奶",
              "categoryLev": "3",
              "categoryAlias": "原味奶",
              "children": null
          },
          {
              "categoryId": "33346",
              "categoryName": "碳酸饮料",
              "categoryLev": "3",
              "categoryAlias": "碳酸饮料",
              "children": null
          },
          {
              "categoryId": "32398",
              "categoryName": "饮用水",
              "categoryLev": "3",
              "categoryAlias": "饮用水",
              "children": null
          },
          {
              "categoryId": "36107",
              "categoryName": "和路雪",
              "categoryLev": "3",
              "categoryAlias": "和路雪",
              "children": null
          },
          {
              "categoryId": "31834",
              "categoryName": "果味酸奶",
              "categoryLev": "3",
              "categoryAlias": "果味酸奶",
              "children": null
          },
          {
              "categoryId": "32617",
              "categoryName": "饼干",
              "categoryLev": "3",
              "categoryAlias": "饼干",
              "children": null
          },
          {
              "categoryId": "31571",
              "categoryName": "袋装",
              "categoryLev": "3",
              "categoryAlias": "袋装",
              "children": null
          },
          {
              "categoryId": "33308",
              "categoryName": "啤酒",
              "categoryLev": "3",
              "categoryAlias": "啤酒",
              "children": null
          },
          {
              "categoryId": "31851",
              "categoryName": "家庭装",
              "categoryLev": "3",
              "categoryAlias": "家庭装",
              "children": null
          },
          {
              "categoryId": "31947",
              "categoryName": "包子/馒头",
              "categoryLev": "3",
              "categoryAlias": "包子/馒头",
              "children": null
          },
          {
              "categoryId": "31830",
              "categoryName": "面包",
              "categoryLev": "3",
              "categoryAlias": "面包",
              "children": null
          },
          {
              "categoryId": "32610",
              "categoryName": "薯片/薯条",
              "categoryLev": "3",
              "categoryAlias": "薯片/薯条",
              "children": null
          },
          {
              "categoryId": "31918",
              "categoryName": "汤面",
              "categoryLev": "3",
              "categoryAlias": "汤面",
              "children": null
          },
          {
              "categoryId": "32201",
              "categoryName": "酱油",
              "categoryLev": "3",
              "categoryAlias": "酱油",
              "children": null
          },
          {
              "categoryId": "36480",
              "categoryName": "简装",
              "categoryLev": "3",
              "categoryAlias": "简装",
              "children": null
          },
          {
              "categoryId": "31599",
              "categoryName": "日用",
              "categoryLev": "3",
              "categoryAlias": "日用",
              "children": null
          },
          {
              "categoryId": "32416",
              "categoryName": "其它碳酸",
              "categoryLev": "3",
              "categoryAlias": "其它碳酸",
              "children": null
          },
          {
              "categoryId": "35505",
              "categoryName": "光明",
              "categoryLev": "3",
              "categoryAlias": "光明",
              "children": null
          },
          {
              "categoryId": "31858",
              "categoryName": "单支装",
              "categoryLev": "3",
              "categoryAlias": "单支装",
              "children": null
          },
          {
              "categoryId": "32423",
              "categoryName": "乌龙茶",
              "categoryLev": "3",
              "categoryAlias": "乌龙茶",
              "children": null
          },
          {
              "categoryId": "32432",
              "categoryName": "黄酒",
              "categoryLev": "3",
              "categoryAlias": "黄酒",
              "children": null
          },
          {
              "categoryId": "31826",
              "categoryName": "原味酸奶",
              "categoryLev": "3",
              "categoryAlias": "原味酸奶",
              "children": null
          }
      ]
  }
}

export const mockCateGoodsList = {
  "success": true,
  "resCode": "00100000",
  "obj": {
      "cateGoodsList": [
          {
              "buId": "2020",
              "storeId": "007780",
              "categoryId": "36082",
              "categoryLev": 2,
              "categoryName": "进口水果",
              "categoryAlias": "进口水果",
              "rankTagId": 3,
              "rankTagName": "好评榜",
              "goodsSidList": [
                  {
                      "goodsSid": "1121092",
                      "rankNum": 1,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "69990",
                      "rankNum": 2,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "66944",
                      "rankNum": 3,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1096198",
                      "rankNum": 4,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "65423",
                      "rankNum": 5,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "66185",
                      "rankNum": 6,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "162634",
                      "rankNum": 7,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1096034",
                      "rankNum": 8,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "67179",
                      "rankNum": 9,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1098648",
                      "rankNum": 10,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "65368",
                      "rankNum": 11,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1003692",
                      "rankNum": 12,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "74879",
                      "rankNum": 13,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1123745",
                      "rankNum": 14,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "67340",
                      "rankNum": 15,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "72206",
                      "rankNum": 16,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "72624",
                      "rankNum": 17,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "162681",
                      "rankNum": 18,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1006046",
                      "rankNum": 19,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "166268",
                      "rankNum": 20,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1070267",
                      "rankNum": 21,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "1029692",
                      "rankNum": 22,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "67812",
                      "rankNum": 23,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "69829",
                      "rankNum": 24,
                      "score": "98.99"
                  },
                  {
                      "goodsSid": "75878",
                      "rankNum": 25,
                      "score": "98.99"
                  }
              ]
          }
      ]
  }
}
