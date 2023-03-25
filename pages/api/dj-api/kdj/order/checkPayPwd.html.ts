import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
                    // .t密码正确
                    .t密码错误
                    // .t支付密码被锁定

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {
  t密码正确: {
    "success": true,
    "resCode": "00100000"
  },
  t支付密码被锁定: {
    "success": false,
    "msg": "支付密码被锁定，次日凌晨自动解锁",
    "resCode": "00100051"
  },
  t密码错误: {
    "success": false,
    "msg": "密码错误,还剩2次机会",
    "resCode": "00100051"
  }
}
