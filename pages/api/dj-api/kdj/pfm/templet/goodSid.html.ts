import type { NextApiRequest, NextApiResponse } from 'next'

import { mockData_单菜谱, mockData_多菜谱 } from '@dj/hack.pfm.templet.goodSid.html'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data =
  // mockData_单菜谱
  mockData_多菜谱

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
