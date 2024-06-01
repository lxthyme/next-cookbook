import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...obj_others } = mockData
  const data = {
    ...obj_others,
    obj: {
      ...obj,
      /// 积分 0 = 不展示 1=展示&&支持 2=展示,但不支持
      pointFlag: 1,
      baiLianCardFlag: 1,
			pointShow: true,
			baiLianCardShow: true,
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
	"success": true,
	"resCode": "00100000",
	"obj": {
		"bizId": null,
		"comSId": null,
		"orderType": null,
		"tdType": "0",
		"fromApp": "IOS",
		"ecpShow": false,
		"pointShow": false,
		"baiLianCardShow": false,
		"balanceShow": false,
		"wxCardShow": false,
		"wxCardFlag": "0",
		"ecpFlag": "0",
		"pointFlag": "0",
		"baiLianCardFlag": "0",
		"balanceFlag": "0",
		"payWays": {
			"payPwdCheck": "1",
			"ecpPay": false,
			"isGetBLCard": false,
			"ecpShow": false,
			"memebrPoint": "0",
			"ecpBal": "0",
			"isGetWxCard": false,
			"blCardBal": "0"
		}
	}
}
