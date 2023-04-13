import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData, mockDJCart } from '@dj/submitOrder'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  let data = mockData
  // data.resCode = 'refresh001'
  // data.success = false
  // data.msg = '所选时段已约满，请重新选择'
  // data.riskType = '233'
// throw new Error("233");

    data = mockDJCart
            .t00011支付风控
            // .t00012支付风控验证码错误
            // .t00014未设置过密码
            // .t00013校验密码
            // .t00015校验支付密码错误
            // .t00990001优惠券风控

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
