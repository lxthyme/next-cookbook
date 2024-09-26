import type { NextApiRequest, NextApiResponse } from 'next'

import { dpRankCateList, mockCateList } from '@dj/hack.dpRank.html'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  let data = {
    "resCode": "00100000",
    "msg": "操作成功",
    "obj": {
      "cateList": dpRankCateList
    }
  }

  data = mockCateList

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
