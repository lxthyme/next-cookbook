import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  const data = success

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData = {
	"msg": "找不到这个appkey!",
	"code": "10001",
	"stacktrace": null,
	"data": null,
	"success": false
}

const success = {
  code: 10000,
  message: '123',
  data: ''
}
