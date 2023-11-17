import { mock_1_110_float } from '@mock/float'
import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = {
    success: true,
    f12: mock_1_110_float
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
