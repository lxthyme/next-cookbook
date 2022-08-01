import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...obj_others } = mockData
  const data = {
    ...obj_others,
    obj: {
      "goodsId": 66013,
      "activeStockSum": 0,
      "stockPercent": 99,
      "buyStock": 9935
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = { "success": true, "resCode": "00100000", "obj": { "goodsId": 66013, "activeStockSum": 64, "stockPercent": 1, "buyStock": 9935 } }
