import type { NextApiRequest, NextApiResponse } from 'next'

import { mockData } from '@dj/hack.queryGoodsPoint.html'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...obj_others } = mockData
  const data = {
    ...obj_others,
    obj: {
      // ...obj,
    //   categoryList: categoryList.slice(0, 10)
    }
  }

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
