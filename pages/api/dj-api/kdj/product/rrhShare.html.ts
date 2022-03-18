import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  // data = mockData2
	const { obj, ...obj_others } = mockData
	const data = {
		...obj_others,
		obj: {
			...obj,
			commission: "099",
		}
	}

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
		"ad_uid": "2adc946e290141d7bafdb57c08d5d2d4",
		"bizCd": "3000",
		"storeCd": "",
		"taskCode": "201709180002",
		"newShortCode": "164409A504",
		"rrh": "cm_mmc=em-_-renrenhui-_-MD2021072000004-_-201709180002-_-2adc946e290141d7bafdb57c08d5d2d4",
		"commission": 2,
		"channelId": "001",
		"shortCode": "rrh_164409A504",
		"token": "cm_mmc=em-_-renrenhui-_-MD2021072000004-_-201709180002"
	}
}

const mockData2 = {
	"success": true,
	"resCode": "00100000",
	"obj": {
		"commission": 82
	}
}
