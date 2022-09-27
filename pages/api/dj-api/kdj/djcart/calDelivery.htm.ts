import type { NextApiRequest, NextApiResponse } from 'next'
import {
  mockData_08_30 as mockData
} from '@dj/calDelivery.htm'
export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData
  const { deliveryInfoList, fmap, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      deliveryServiceCharge: 8.8,
      deliveryInfoList: deliveryInfoList.map((t1, idx) => {
        const { fmap, goodsList, ...t1_others } = t1
        return {
          ...t1_others,
          fmap,
          goodsList,
          deliveryCharge: 8.8,
          deliveryServiceCharge: 8.8,
          deliveryServiceMemo: 8.8,
          baseFreightMark: 8.8,
          freeFreightMoney: 8.8,
          weightCost: 8.8,
          continueFreightMark: 8.8,
          distanceCost: 8.8,
          timeCost: 8.8,
          extraCost: 8.8
        }
      }),
      fmap,
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
