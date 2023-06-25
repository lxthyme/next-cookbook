import type { NextApiRequest, NextApiResponse } from 'next'

import { hackData_Invoice } from '@dj/hack.getInvoiceStatus.html'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = hackData_Invoice
    // .t_未完成
    .t__1不可开票
    // .t_0未申请
    // .t_1已申请
    // .t_2成功
    // .t_3失败
    // .t_4排队中

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
