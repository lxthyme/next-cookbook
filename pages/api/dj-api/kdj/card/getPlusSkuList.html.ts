import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData

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
  "traceId": "cd3ecd86033739b9",
  "obj": {
    "goodsList": [
      {
        "goodsId": "233233",
        "goodsName": "第一医药PLUS会员季卡第一医药PLUS会员季卡第一医药PLUS会员季卡233",
        "goodsImage": "http://localhost:3337/dj-static-files/dj-static/images/ydj-plus-logo-season.png",
        "salePrice": "99.9",
        "basePrice": "29.9",
        "storeType": "2020",
        "storeCode": "007780"
      }
    ]
  }
}
