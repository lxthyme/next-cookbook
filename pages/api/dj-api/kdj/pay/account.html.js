const API = (req, res) => {
  const { page } = req.body

  const { obj: tmp_obj, ...others_obj } = mockData
  const obj = {
    ...others_obj,
    obj: {
      ...tmp_obj,
      // bal: '1000',
      /// 00 为正常状态 03为锁定账号
      // lockFlag: '03',
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(obj)
    })
}

export default API

const mockData = {
  "success": true,
  "resCode": "00100000",
  "obj": {
    "acctNo": "1001000000209429056",
    "respTime": "20220119171240",
    "lstTsfTime": "20211210155804",
    "respMsg": "成功",
    "tranNo": "3001",
    "bal": "20100",
    "checkId": "dcb8fb3ec7e34a5ab4ddaed024e8c270",
    "respCode": "0000",
    "status": "00",
    "lockFlag": "00",
    "signature": "dcd53086f68c876d85d6abeb4e5846d1"
  }
}
