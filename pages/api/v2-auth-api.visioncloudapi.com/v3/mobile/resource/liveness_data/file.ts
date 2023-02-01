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
	"id": "O-78d9f6663156463898cb59b1d5019f4f",
	"request_id": "a691d8e255f74e9eee5208c2984f046b",
	"code": 1000,
	"biz_no": "053ED8B83B8E48DA896F5B96D0BA6AB6"
}
