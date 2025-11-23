import type { NextApiRequest, NextApiResponse } from 'next'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const data = mockData

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
    "rightsPage": "https://mh5.bl.com/bl-free-web/view?viewId=64c72a0de7bcb6a2c69fad54",
    "plusAgreementPage": "https://mh5.bl.com/bl-free-web/view?viewId=64c72a0de7bcb6a2c69fad54",
    "plusAgreementName": "《百联通PLUS会员服务协议》"
  }
}
