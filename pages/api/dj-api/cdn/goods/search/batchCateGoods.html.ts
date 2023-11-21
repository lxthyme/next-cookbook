import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...obj_other } = mockData
  const data = {
    ...obj_other,
    obj: obj.map(t => {
      if(t.cateId === '28432') {
        t.docNos = []
      }
      return t
    })
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
	"obj": [{
		"docNos": ["2020_007780_2020007780ENT23234@@1@@76906", "2020_007780_2020007780ENT23234@@1@@67340"],
		"cateId": "28430"
	}, {
		"docNos": ["2020_007780_2020007780ENT23234@@1@@76906", "2020_007780_2020007780ENT23234@@1@@67340"],
		"cateId": "28432"
	}]
}
