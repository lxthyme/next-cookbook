import type { NextApiRequest, NextApiResponse } from 'next'
import {
  mockData
} from '@dj/queryCartCouponsList'
const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...obj_others } = mockData
  const data = {
    ...obj_others,
    obj: obj.map((t1, idx1) => {
      const { cartCouponInfoList, ...t1_others } = t1
      return {
        ...t1_others,
        cartCouponInfoList: cartCouponInfoList.map((t2, idx2) => {
          if(idx2 == 1) {
            t2.buttonFlag = 2
          }
          return t2
        }),
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

export default API
