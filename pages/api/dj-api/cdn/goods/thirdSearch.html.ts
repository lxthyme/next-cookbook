import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  data.obj = undefined

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
		"searchCount": 3,
		"searchWord": "草莓干",
		"otherStoreGoods": [{
			"ids": ["2010_003754_20100037541@@1@@4469673", "2010_003754_20100037541@@1@@5495776"],
			"shopName": "世纪联华上海黄浦新苑店",
			"storeType": "2010",
			"storeCode": "003754",
			"merchantId": "20100037541",
			"comSid": "2000",
			"distance": "2374",
			"distanceDesc": "2.4km",
			"shopBeginTime": "08:00",
			"shopEndTime": "21:00"
		}]
	}
}
