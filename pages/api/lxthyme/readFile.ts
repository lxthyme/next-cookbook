import type { NextApiRequest, NextApiResponse } from 'next'
import { readFile } from "fs/promises"


const API = async(req: NextApiRequest, res: NextApiResponse) => {

  let body = req.body
  if(body.length <= 0) {
    body = '{}'
  }
  // console.log('req.body: ', req.body, '\t\t: ', body);
  let { file = '' } = JSON.parse(body)
  if(file.length <= 0) {
    file = req.query['file']
  }

  let data = await  await readFile(file, {
    encoding: "utf-8",
  })

  // console.log('-->file path: ', file);
  // console.log('-->file content: ', data);
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json({
        path: file ?? '',
        content: data ?? ''
      })
    })
}

export default API
