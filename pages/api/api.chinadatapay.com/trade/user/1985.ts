import type { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {

  let data = mockData_success
  data = mockData_failure

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

const mockData_success = {
	"code": "10000",
	"message": "成功",
	"data": {
		"birthday": "1990年04月05日",
		"image": "",
		"address": "河南省新安县五头镇党%沟村",
		"nation": "汉",
		"idcard": "410323199004055032",
		"sex": "男",
		"name": "张好杰"
	},
	"seqNo": "LT936C1F220724124245189"
}

const mockData_failure = {
	"code": "10010",
	"message": "识别失败",
	"data": null,
	"seqNo": "DV008XZP220724124231261"
}
