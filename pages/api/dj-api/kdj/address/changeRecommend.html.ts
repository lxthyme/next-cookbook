import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData
  data.obj.receiverList = []

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
		"storeInfo": null,
		"receiverList": null,
		"recommendAddressId": null,
		"distanceFlag": 1,
		"useSourceStoreFlag": 0
	}
}
