import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = JSON.parse(JSON.stringify(mockData))
  // data.obj.kwSkus = []
  // data.obj.transKws = []
  data.obj.transKws.push(...unfoundKeys)
  data.obj.kwSkus.push(...data.obj.kwSkus)

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API

const unfoundKeys = [{
  "kw": "8424 西瓜",
  "skuCnt": 0
}, {
  "kw": "plus 直降",
  "skuCnt": 0
}, {
  "kw": "美味到家",
  "skuCnt": 0
}, {
  "kw": "只有二级促销 tab",
  "skuCnt": 0
}, {
  "kw": "卤味熟食",
  "skuCnt": 0
}, {
  "kw": "简餐点心",
  "skuCnt": 0
}]
const mockData = {
	"success": true,
	"resCode": "00100000",
	"obj": {
		"kwSkus": [{
			"kw": "苹果",
			"ids": ["2020_007780_2020007780ENT23234@@1@@1014106", "2020_007780_2020007780ENT23234@@1@@70395", "2020_007780_2020007780ENT23234@@1@@71024", "2020_007780_2020007780ENT23234@@1@@88292", "2020_007780_2020007780ENT23234@@1@@70382", "2020_007780_2020007780ENT23234@@1@@65910"]
		}, {
			"kw": "西瓜",
			"ids": ["2020_007780_2020007780ENT23234@@1@@69985", "2020_007780_2020007780ENT23234@@1@@69993"]
		}, {
			"kw": "玉米",
			"ids": ["2020_007780_2020007780ENT23234@@1@@1008100", "2020_007780_2020007780ENT23234@@1@@74337"]
		}, {
			"kw": "格力高",
			"ids": ["2020_007780_2020007780ENT23234@@1@@162548", "2020_007780_2020007780ENT23234@@1@@162549", "2020_007780_2020007780ENT23234@@1@@162609", "2020_007780_2020007780ENT23234@@1@@162672", "2020_007780_2020007780ENT23234@@1@@162571"]
		}],
		"transKws": [{
			"kw": "苹果",
			"skuCnt": 6
		}, {
			"kw": "西瓜",
			"skuCnt": 2
		}, {
			"kw": "玉米",
			"skuCnt": 2
		}, {
			"kw": "格力高",
			"skuCnt": 5
		}, {
			"kw": "香蕉",
			"skuCnt": 0
		}]
	}
}
