import type { NextApiRequest, NextApiResponse } from 'next'

import { webviewContent, mockData } from '@dj/hack.queryGoodsDesc.html'
const API = (req: NextApiRequest, res: NextApiResponse) => {

  const obj = mockData
  // obj.obj.videoSupport = '0'
  // obj.obj.videoSupport = '1'
  obj.obj.content = webviewContent.t1

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

export default API
