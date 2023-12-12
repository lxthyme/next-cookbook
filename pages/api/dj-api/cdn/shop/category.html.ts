import type { NextApiRequest, NextApiResponse } from 'next'

import { mockData_武宁店 } from '@dj/hack.category'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } = mockData_武宁店
  const { categoryList, ...obj_others } = obj;
  const data = {
    ...data_others,
    obj: {
      ...obj_others,
      categoryList,
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
