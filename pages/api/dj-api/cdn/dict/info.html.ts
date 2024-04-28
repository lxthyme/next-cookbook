import type { NextApiRequest, NextApiResponse } from 'next'

import { mockError } from '@dj/hack.errorResponse'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      // res.status(200).json(data)
      mockError(res, 400, 1)
    })
}

export default API

const mockData = {
	"success": true,
	"resCode": "00100000",
	"obj": {
		"list": [{
			"value": "1",
			"label": "信息填写有误或商品选错"
		}, {
			"value": "2",
			"label": "有更优惠的购买方案"
		}, {
			"value": "3",
			"label": "不喜欢/不想要"
		}, {
			"value": "4",
			"label": "物流不发货/物流太慢"
		}, {
			"value": "5",
			"label": "商品缺货"
		}, {
			"value": "6",
			"label": "其他原因"
		}]
	}
}
