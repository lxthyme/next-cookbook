import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '@dj/queryCouponsV2.htm'
// import { text } from '@plugin/faker'
import { text } from '../../../../../plugin/faker'


export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...data_others } = mockData
  const { couponAutoInfoList, cantUseList, couponsList, ...obj_others } = obj
  const tipsList = [
    '此券不可与ECP支付同时使用',
    '还差99.99元可用',
    '当前渠道不可用',
    '未选购券使用商品'
  ]
  const rule = '所结算的商品中没有符合条件的商品，所结算的商品中没有符合条件的商品'
  // const rule = text()
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      cantUseList: couponsList.slice(0, 10).map((t, idx) => {
        return {
          ...t,
          tips: tipsList[idx % tipsList.length],
          ruleContent: Array(idx).fill(rule).join('')
        }
      }),
      couponsList: couponsList.map((t, idx) => {
        return {
          ...t,
          tips: tipsList[idx % tipsList.length],
          ruleContent: Array(idx).fill(rule).join('')
        }
      }),
      // couponsList: [],
      // cantUseList: [],
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
      // couponAutoInfoList: [],
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
