import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { r_lot_number, rid } = req.headers
  const data = JSON.parse(JSON.stringify(mockData))
  if (r_lot_number && rid) {
    data.obj = {
      payNo: '233',
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

const mockData = {
  "obj": {
    "r-lot-number": "RAvRd1AO0Mv6+kw4ZzSBp/4ZjmO51vUyj8HO/h2KONx54c5XRGBfri6wmbbmo6J/2B9vK4NnJ3cFH6ADFGXOO2RraEAHyyXq+B",
    "r-verify-mode": "slide"
  },
  "resCode": "00990001",
  "riskType": "virtualOrder",
  "success": false
}
