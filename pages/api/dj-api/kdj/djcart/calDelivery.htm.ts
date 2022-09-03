import type { NextApiRequest, NextApiResponse } from 'next'
import {
  mockData_运费 as mockData
} from '@dj/calDelivery.htm'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData
  const { deliveryInfoList, ...obj_others } = obj
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      deliveryInfoList: deliveryInfoList.map((t, idx) => {
        if (idx === 0) {
          return {
            ...t,
            /// [超重运费]weightCost：重量加价 ，
            weightCost: 990.0,
            /// [距离运费]distanceCost：距离加价 ，
            distanceCost: 990.0,
            /// [时段运费]timeCost：时间加价 ，
            timeCost: 990.0,
            /// [特殊运费]extraCost：额外加价(特殊运费)
            extraCost: 990.0,
          }
        }
        return t
      })
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
