import type { NextApiRequest, NextApiResponse } from 'next'
import { readFile } from "fs/promises"


const API = async(req: NextApiRequest, res: NextApiResponse) => {

  const { file } = JSON.parse(req.body)

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
        path: file,
        content: data
      })
    })
}

export default API
