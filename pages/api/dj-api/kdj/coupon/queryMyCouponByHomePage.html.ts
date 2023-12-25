import { mockData_failure } from '@dj/hack.coupon.v2.receive'
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
  "obj": {
    list: [{
      "couponCode": "couponCode",
      "couponName": "couponName",
      "couponShortDesc": "couponShortDesc",
      "couponTemplateId": "couponTemplateId",
      "couponTypeId": "16",
      "effectiveTime": "2023-11-28 00:00:00",
      "expireTime": "2024-11-28 00:00:00",
      "offsetAmount": "23",
      "popupType": 1,
    }]
  }
}
