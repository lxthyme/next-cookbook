import type { NextApiRequest, NextApiResponse } from 'next'
import {
  mockData
} from '@dj/queryCartCouponsList.htm'
export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...obj_others } = mockData
  const data = {
    ...obj_others,
    obj: obj.map((t1, idx1) => {
      const { cartCouponInfoList, ...t1_others } = t1
      return {
        ...t1_others,
        cartCouponInfoList,
        // cartCouponInfoList: []
      }
    })
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}