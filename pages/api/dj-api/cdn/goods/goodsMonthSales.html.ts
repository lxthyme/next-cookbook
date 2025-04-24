import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 5000)
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
      "showSaleSum": "999+",
      "goodsSid": "68120",
      "saleSum": 0
  }
}
