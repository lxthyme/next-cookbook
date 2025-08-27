import type { NextApiRequest, NextApiResponse } from 'next'

import { mockData1, mockData2 } from '@dj/hack.sendCouponAfterBuy.html'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData2
  // data.obj.couponInfoList = data.obj.couponInfoList.slice(0, 1)

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
