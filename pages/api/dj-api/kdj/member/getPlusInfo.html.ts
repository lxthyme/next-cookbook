import type { NextApiRequest, NextApiResponse } from 'next'

let idx = 0

const API = (req: NextApiRequest, res: NextApiResponse) => {

  console.log('-->idx: ', idx);
  const data = [mockData_noLogin, mockData_noPlus, mockData][idx]
  idx += 1
  idx %= 3

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
  "traceId": "cd3ecd86033739b9",
  "obj": {
    "mobile": "176***1015",
    "nickName": "昵**",
    "avatarUrl": "头像url",
    "showYYPlus": 1,
    "plusList": [
      {
        "isPlus": 1,
        "isAllowContinue": 0,
        "isAllowReContinue": 0,
        "isHistoryPlus": 0,
        "plusType": "npcplus",
        "rightsEndDate": "2025-11-06 12:00:00",
        "rightsStartDate": "2025-11-06 12:00:00",
        "currentShipRightsEndDate": "2025-11-06 12:00:00",
        "validTimeDesc": "2025-11-06到期，购买后有效期将顺延",
        "plusModel": 2,
        "plusModelDesc": "季卡",
        "memberRightsCardId": 4,
        "memberShipDuration": "会籍时长",
        "plusExt": {
          "rightsPage": "https://mh5.bl.com/bl-free-web/view?viewId=64c72a0de7bcb6a2c69fad54",
          "plusAgreementPage": "https://mh5.bl.com/bl-free-web/view?viewId=64c72a0de7bcb6a2c69fad54",
          "plusAgreementName": "《百联通PLUS会员服务协议》"
        }
      }
    ]
  }
}

const mockData_noPlus = {
  "success": true,
  "resCode": "00100000",
  "traceId": "5f109a3bce992047",
  "obj": {
    "mobile": "176***1015",
    "nickName": "昵**",
    "avatarUrl": "头像url",
    "showYYPlus": 0,
  }
}

const mockData_noLogin = {
  "success": false,
  "resCode": "sign401",
  "msg": "账号未登录",
  "traceId": "cd3ecd86033739b9"
}
