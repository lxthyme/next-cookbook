import { mockDJCart } from '@dj/submitOrder'
import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockDJCart
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
