const API = (req, res) => {

  const { obj: tmp_obj, ...others_obj } = mockData
  const obj = {
    ...others_obj,
    obj: {
      ...tmp_obj,
      // ecpShow: false
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
    "bizId": "2020",
    "comSId": "2000",
    "orderType": "25",
    "tdType": "1",
    "fromApp": "IOS",
    "ecpShow": true,
    "pointShow": true,
    "baiLianCardShow": true,
    "balanceShow": false,
    "wxCardShow": false,
    "wxCardFlag": "0",
    "ecpFlag": "1",
    "pointFlag": "1",
    "baiLianCardFlag": "1",
    "balanceFlag": "0",
    "payWays": null
  }
}
