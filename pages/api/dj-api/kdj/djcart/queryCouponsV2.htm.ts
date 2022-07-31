import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '@dj/queryCouponsV2.htm'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...data_others } = mockData
  const { couponAutoInfoList, cantUseList, couponsList, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      cantUseList: cantUseList.map((t, idx) => {
        if(idx === 4) { return t }
        const repeat = idx % 3
        return {
          ...t,
          tips: Array(repeat).fill('此券不可与ECP支付同时使用').join(''),
          ruleContent: Array(2 - repeat).fill('所结算的商品中没有符合条件的商品').join(''),
        }
      }),
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
