import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData_riskControl

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData_riskControl = {"success":false,"msg":"好运与你擦肩而过","riskType":"233","resCode":"00990001"}
