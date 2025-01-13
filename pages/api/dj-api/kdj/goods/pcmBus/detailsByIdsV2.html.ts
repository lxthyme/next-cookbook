import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '@dj/hack.detailsByIdsV2.html'

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
