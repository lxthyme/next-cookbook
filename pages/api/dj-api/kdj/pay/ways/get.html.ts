import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData
  const data = {
    ...data_others,
    obj: {
      ...obj,
      // ecpShow: false
    }
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
  "obj": {
    "bizId": "2020",
    "comSId": "2000",
    "orderType": "25",
    "tdType": "1",
    "fromApp": "IOS",
    "ecpShow": true,
    "pointShow": true,
    "baiLianCardShow": true,
    "balanceShow": false,
    "wxCardShow": false,
    "wxCardFlag": "0",
    "ecpFlag": "1",
    "pointFlag": "1",
    "baiLianCardFlag": "1",
    "balanceFlag": "0",
    "payWays": null
  }
}
