import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.body

  const { obj, ...data_others } = mockData
  const data = {
    ...data_others,
    obj: {
      ...obj,
      // bal: '1000',
      /// 00 为正常状态 03为锁定账号
      // lockFlag: '03',
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
		"acctNo": "1001000000027393450",
		"respTime": "20230316182850",
		"lstTsfTime": "20230316163058",
		"respMsg": "成功",
		"tranNo": "3001",
		"bal": "923913",
		"checkId": "3300486140a74e30b14ef4850316f9ab",
		"respCode": "0000",
		"status": "00",
		"lockFlag": "00",
		"ecpBal": "9239.13",
		"signature": "6db876c778b4471a609c8800a8acfcf2"
	}
}
