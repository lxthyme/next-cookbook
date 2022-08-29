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
      deliveryInfoList: deliveryInfoList.map((t1, idx) => {
        const { fmap, goodsList, ...t1_others } = t1
        return {
          ...t1_others,
          fmap,
          goodsList,
          baseFreightMark: '0',
          freeFreightMoney: '20',
          weightCost: '234',
          continueFreightMark: '0',
          distanceCost: '233',
          timeCost: '233',
          extraCost: '233'
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
