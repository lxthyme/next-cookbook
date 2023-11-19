import type { NextApiRequest, NextApiResponse } from 'next'
import { mock_1_110_float } from '@mock/float'
import { lxkit } from '@mock/lxkit'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = {
    f0: mock_1_110_float.slice(0, 100),
    f1: mock_1_110_float.slice(100, 200),
    f2: mock_1_110_float.slice(200, 300),
    f3: mock_1_110_float.slice(300, 400),
    f4: mock_1_110_float.slice(400, 500),
    f5: mock_1_110_float.slice(500, 600),
    f6: mock_1_110_float.slice(600, 700),
    f7: mock_1_110_float.slice(700, 800),
    f8: mock_1_110_float.slice(800, 900),
    f9: mock_1_110_float.slice(900, 1000),
    f10: mock_1_110_float.slice(1000, 1100),
    f11: mock_1_110_float.slice(0, 1000),
    f12: mock_1_110_float,
    t1: 0.3,
    t2: 99.4,
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json({
        success: true,
        code: lxkit.kLXSuccessCode,
        msg: '233 msg',
        data: data
      })
    })
}

export default API
