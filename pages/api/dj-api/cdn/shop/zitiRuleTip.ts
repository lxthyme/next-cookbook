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

const mockData = {
	"success": true,
	"resCode": "00100000",
	"obj": {
		"title": "请在下单或指定自提最晚时间+24小时内完成自提，超时未取将取消订单。",
		"ruleLt": [{
			"label": "手机号和自提码取货",
			"value": "用户凭下单手机号和自提码到店取货，通过验证后可自提商品。"
		}, {
			"label": "24小时内自提，超时取消",
			"value": "请在下单或指定自提最晚时间+24小时内完成自提，超时未取将取消订单，支付款将原路返回。"
		}]
	}
}

export default API
