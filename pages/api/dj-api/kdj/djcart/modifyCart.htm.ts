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
	"success": false,
	"resCode": "00100000",
  "msg": 'xxxx',
	"obj": {
		"freightLessPrice": 0.00,
		"totalPrice": 0.00,
		"showTotalPrice": 0.00,
		"shoppingCartId": "7daa76d3-5f75-4ce3-8d2a-6f811c9750ff",
		"userId": 100000020942905,
		"allGoodsNumber": 0,
		"totalGoodsAmount": 0,
		"currentGoodsNumber": 0,
		"freightLessWeight": 0.00,
		"createTime": "2023-10-23 15:12:27 0392",
		"totalGoodsNumber": 0,
		"newGoodsNumber": 0,
		"status": 1,
		"timestamp": 0
	}
}
