import type { NextApiRequest, NextApiResponse } from 'next'
import { mockData } from '@dj/detailsByActCodes.html'

export default (req: NextApiRequest, res: NextApiResponse) => {
  let data = mockData

Object.keys(data.obj).forEach(key => {
  if(key === 'HDGL202201250000011277') {
    data.obj[key] = data.obj[key].slice(0, 1)
  }
})

  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, resolve), 1000)
  })
    .then(() => {
      res.status(200).json(data)
    })
}
