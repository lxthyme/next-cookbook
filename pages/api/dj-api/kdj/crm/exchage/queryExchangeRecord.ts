import type { NextApiRequest, NextApiResponse } from 'next'

let idx = 1

const API = (req: NextApiRequest, res: NextApiResponse) => {

  let data = mockData_pending
  console.log('-->idx: ', idx);
  if (idx == 1) {
    data = mockData_success
  } else {
    data = mockData_pending
  }
  idx += 1
  idx = idx % 3

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API


const mockData_invalid = { "success": false, "msg": "请勿非法请求~", "resCode": "00220017", "traceId": "87ac917309eded01" }

const mockData_pending = { "success": true, "resCode": "00100000", "obj": { "handleStatus": "1" }, "traceId": "920a0a8377671014" }

const mockData_success = { "success": true, "resCode": "00100000", "obj": { "handleStatus": "1" }, "traceId": "920a0a8377671014" }
