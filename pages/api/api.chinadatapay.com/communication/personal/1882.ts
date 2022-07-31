import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData_success
  // data = mockData_failure

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData_success = {
	"code": "10000",
	"message": "成功",
	"data": {
		"result": "1"
	},
	"seqNo": "HUJIXS9A220724141542215"
}

const mockData_failure = {}
