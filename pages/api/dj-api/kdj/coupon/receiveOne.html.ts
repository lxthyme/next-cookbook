import { mockData_failure } from '@dj/hack.coupon.v2.receive'
import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { r_lot_number, rid } = req.headers
  // const r_lot_number = header['r_lot_number']
  console.log('-->r_lot_number: ', r_lot_number, rid);
  let data = mockData_failure
                        // .t04111005
                        // .t04111014
                        // .t00100051
                        .t00990001
                        // .tSuccess
  if(r_lot_number && rid) {
    data = mockData_failure.tSuccess
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
