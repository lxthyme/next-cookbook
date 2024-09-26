import type { NextApiRequest, NextApiResponse } from 'next'

import { dpRankGoodsList, mockCateGoodsList } from '@dj/hack.dpRank.html'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  const { cateId } = req.query
  let data = {
    "resCode": "00100000",
    "msg": "操作成功",
    "obj": {
      cateGoodsList: dpRankGoodsList(cateId)
    }
  }
  data = mockCateGoodsList

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

const mockItem = {
  "buId": "2020",
  "storeId": "007780",
  "categoryId": "33333",
  "categoryLev": 2,
  "categoryName": "小布丁",
  "categoryAlias": "榜单别名_test",
  "rankTagId": 1,
  "rankTagName": "热卖榜",
  "rankTopName": "榜单别名_test热卖榜",
  "rankTopDesc": "按照商品销售量综合计算",
  "rankTopIntro": "爆款集结，人气领航",
  "goodsSidList": [{
    "goodsSid": "65368",
    "rankNum": 1,
    "score": "19.11"
  }, {
    "goodsSid": "65423",
    "rankNum": 2,
    "score": "99.99"
  }, {
    "goodsSid": "66944",
    "rankNum": 3,
    "score": "92.59"
  }, {
    "goodsSid": "66185",
    "rankNum": 4,
    "score": "94.97"
  }, {
    "goodsSid": "69990",
    "rankNum": 5,
    "score": "89.09"
  }],
}
