import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData_订单 } from '@dj/order'
export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = {
    "pageSize": 20,
    "currentPage": 1,
    "count": 1,
    "start": 1,
    "end": 20,
    "pages": 1,
    list: [
      mockData_订单.t托底_配送方式不同.t订单列表,
      mockData_订单.t托底_配送方式相同.t订单列表,
      mockData_订单.t25订单.t已取消.t订单列表,
      mockData_订单.t扫码购订单.t待校验.t订单列表,
      mockData_订单.t扫码购订单.t待校验.t订单列表,
    ]
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {}
