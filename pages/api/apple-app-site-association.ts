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
  "applinks": {
      "apps": [],
      "details": [
          {
              "appID": "6C6JHMW46K.com.blo2o.ibl",
              "paths": ["/ulink/invokeapp/*"]
          },
          {
              "appID": "2KWAGZM2TW.com.bailian.ibl",
              "paths": ["/ulink/invokeapp/*"]
          }
      ]
  }
}
