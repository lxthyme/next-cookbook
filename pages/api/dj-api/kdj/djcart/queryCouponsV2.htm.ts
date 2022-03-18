import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_光明奶卡2 } from '@dj/queryCouponsV2.htm'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...data_others } = mockData_光明奶卡2
  const { couponAutoInfoList, cantUseList, couponsList, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      cantUseList,
      couponsList,
      couponAutoInfoList: couponAutoInfoList.map((t, idx) => {
        let tmp = t
        if (t.couponsName === 'couponsName') {
          tmp = {
            ...t,
            pickupCouponFlag: 1
          }
        }
        return tmp
      }),
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
