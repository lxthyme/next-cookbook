import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

const mockData = {
  "request_id": "18baf7f5ac326063d64b40373f9061d9",
  "hackness_score": 0.0,
  "liveness_score": 0.007795,
  "code": 1000,
  "biz_no": "F0B94C18E9574633B4BE8C7E7DF3EEBE"
}
