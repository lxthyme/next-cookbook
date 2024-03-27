import type { NextApiRequest, NextApiResponse } from 'next'

import {
  mockData_武宁店,
  mockData_很多二级目录,
 } from '@dj/hack.category'

const API = (req: NextApiRequest, res: NextApiResponse) => {

  const { obj, ...data_others } =
    // mockData_武宁店
    mockData_很多二级目录
  const { categoryList, ...obj_others } = obj;
  let data = {
    ...data_others,
    obj: {
      ...obj_others,
      categoryList,
    //   categoryList: categoryList.slice(0, 10)
    }
  }
  // data = {}
  // data.obj.categoryList = [];
  // data.obj.categoryList[1].rywCategorys = [];
  // data.obj.categoryList[1].rywCategorys = [];

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}

export default API
