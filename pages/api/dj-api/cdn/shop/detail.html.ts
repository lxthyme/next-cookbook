
import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_test } from '@dj/shop.detail'
export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData_test

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 8000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
