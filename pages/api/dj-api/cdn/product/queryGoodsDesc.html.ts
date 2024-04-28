import type { NextApiRequest, NextApiResponse } from 'next'

import { webviewContent, mockData, goodsCertificateDtos } from '@dj/hack.queryGoodsDesc.html'
const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  // data.obj.videoSupport = '0'
  // odatabj.obj.videoSupport = '1'
  data.obj.goodsCertificateDtos = goodsCertificateDtos
  data.obj.content = webviewContent.t1

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
