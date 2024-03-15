import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '@dj/promotionSkuIds'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { pageSize } = req.query
  const pageSizeInt = parseInt(pageSize) - 3
  const data = JSON.parse(JSON.stringify(mockData))
  console.log(`-->pageSize: ${pageSizeInt}`)
  data.obj.ids = mockData.obj.ids.slice(0, pageSizeInt)

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
