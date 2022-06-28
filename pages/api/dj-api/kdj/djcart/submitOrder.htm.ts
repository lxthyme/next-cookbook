import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '@dj/submitOrder.htm'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  // data.resCode = 'refresh001'
  data.success = false
  data.msg = '所选时段已约满，请重新选择'
  data.riskType = '233'
// throw new Error("233");

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
