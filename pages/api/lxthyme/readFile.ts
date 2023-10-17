import type { NextApiRequest, NextApiResponse } from 'next'
import { readFile } from "fs/promises"


const API = async(req: NextApiRequest, res: NextApiResponse) => {

  let body = req.body
  if(body.length <= 0) {
    body = '{}'
  }
  // console.log('req.body: ', req.body, '\t\t: ', body);
  let { path = '' } = JSON.parse(body)
  console.log('path1: ', path)
  if(path.length <= 0) {
    path = req.query['path']
    console.log('path2: ', path)
  }
  let data = ''
  if(path.length > 0) {
    data = await  await readFile(path, {
      encoding: "utf-8",
    })
  }

  // console.log('-->file path: ', file);
  // console.log('-->file content: ', data);
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json({
        path: path ?? '',
        content: data ?? ''
      })
    })
}

export default API
