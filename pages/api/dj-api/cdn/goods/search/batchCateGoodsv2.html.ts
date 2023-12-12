import { mockData_v2盛夏美食, mockData_v2龙虾烧烤 } from '@dj/batchCateGoodsv2.html'
import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { cateIds } = req.body

  const { obj, ...obj_other } = mockData
  const emptyCateIds = [
    // ...t_盛夏美食.map(t => t.cateId),
    // '15671promotion'
    /// 新品
    // '16425',
    /// 夏日开胃
    // '16426',
    /// 快手菜快手菜
    // '16427',
    /// 小龙虾/蟹
    // '16430',
    // '-1',
    '16428',
    // '16429',
  ]
  const data = {
    ...obj_other,
    obj: [
      ...obj,
      ...mockData_v2盛夏美食,
      ...mockData_v2龙虾烧烤,
    ].map(t => {
      if(emptyCateIds.includes(t.cateId)) {
        t.docNos = []
      }
      return t
    })
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

const mockData = {
	"success": true,
	"resCode": "00100000",
	"obj": []
}
