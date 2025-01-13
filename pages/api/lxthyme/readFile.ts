import type { NextApiRequest, NextApiResponse } from 'next'
import { readFile } from "fs/promises"
import { parseMD } from '@plugin/markdown'


const API = async(req: NextApiRequest, res: NextApiResponse) => {

  // let body = req.body
  // if(body.length <= 0) {
  //   body = {}
  // }
  // console.log('req.body: ', req.body, '\t\t: ', body);
  // let { path = '', type = 'txt' } = JSON.parse(body)
  const { path = '', type = 'txt' } = req.body
  // console.log('-->body: ', { path, type })
  console.log('-->req.body: ', req.body)
  console.log('-->req.query: ', req.query)
  // console.log('-->body: ', JSON.parse(req.body))
  // if(path.length <= 0) {
  //   path = req.query['path']
  // }

  const result = {
    path: path ?? '',
    type,
  }

  try {
  let data = ''
  if(path?.length > 0) {
    data = await  await readFile(path, {
      encoding: "utf-8",
    })
    result['content'] = data
  }

  if(type === 'md') {
    const cleanDom = parseMD(data)
    result['mdContent'] = cleanDom
    // result['mdContent'] = mdContent
  }
} catch(e) {
  result['error'] = e
}

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(result)
    })
}

export default API
